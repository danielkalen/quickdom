baseStateTriggers =
	'hover': {on:'mouseenter', off:'mouseleave', bubbles:true}
	'focus': {on:'focus', off:'blur', bubbles:true}

QuickElement::_normalizeOptions = ()->
	@options.className = @options.class if @options.class
	@options.href = @options.url if @options.url
	@options.relatedInstance ?= @
	@options.unpassableStates ?= []
	@options.passStateToChildren ?= true
	@options.stateTriggers =
		if @options.stateTriggers
			extend.clone.deep(baseStateTriggers, @options.stateTriggers)
		else
			baseStateTriggers
	
	@_parseStyles()
	return


QuickElement::_parseStyles = ()->
	return if not IS.objectPlain(@options.style)
	keys = Object.keys(@options.style)
	states = keys.filter (key)-> helpers.isStateStyle(key)
	specialStates = helpers.removeItem(states.slice(), '$base')
	@_mediaStates = states.filter((key)-> key[0] is '@').map (state)-> state.slice(1)
	@_providedStates = states.map (state)-> state.slice(1) # Remove '$' prefix

	if not helpers.includes(states, '$base')
		if states.length # Indicates other states were provided but the $base state has no styling
			@_styles.base = extend.clone.notKeys(states)(@options.style)
		else
			@_styles.base = @options.style
	else
		@_styles.base = @options.style.$base


	flattenNestedStates = (styleObject, chain)=>
		styleKeys = Object.keys(styleObject)
		output = {}
		hasNonStateProps = false
		
		for state in styleKeys
			if not helpers.isStateStyle(state)
				hasNonStateProps = true
				output[state] = styleObject[state]
			else
				chain.push(state_ = state.slice(1))
				stateChain = new (import './stateChain')(chain)
				@_stateShared ?= []
				@_providedStatesShared ?= []
				@_providedStatesShared.push(stateChain)
				@_mediaStates.push(state_) if state[0] is '@'
				@_styles[stateChain.string] = flattenNestedStates(styleObject[state], chain)
		
		return if hasNonStateProps then output


	for state in specialStates
		state_ = state.slice(1)
		
		stateStyles = flattenNestedStates(@options.style[state], [state_])
		@_styles[state_] = stateStyles if stateStyles

	return




QuickElement::_applyOptions = ()->
	if ref=(@options.id or @options.ref) then @attr('data-ref', @ref=ref)
	if @options.id then @el.id = @options.id
	if @options.className then @el.className = @options.className
	if @options.src then @el.src = @options.src
	if @options.href then @el.href = @options.href
	if @options.type then @el.type = @options.type
	if @options.name then @el.name = @options.name
	if @options.value then @el.value = @options.value
	if @options.selected then @el.selected = @options.selected
	if @options.checked then @el.checked = @options.checked
	if @options.props then @prop(key,value) for key,value of @options.props
	if @options.attrs then @attr(key,value) for key,value of @options.attrs
	@style(@_styles.base) if not @options.styleAfterInsert

	@onInserted ()=>
		if @options.styleAfterInsert
			@style(extend.clone @_styles.base, @_getStateStyles(@_getActiveStates())...)

		_ = @_inserted = @

		if (mediaStates=@_mediaStates) and @_mediaStates.length
			@_mediaStates = new ()->
				for queryString in mediaStates
					@[queryString] = MediaQuery.register(_, queryString)
				
				return @

	if @options.recalcOnResize
		window.addEventListener 'resize', ()=> @recalcStyle()

	if @options.events
		@on(event, handler) for event,handler of @options.events

	return


QuickElement::_attachStateEvents = (force)->
	for state,trigger of @options.stateTriggers then do (state,trigger)=>
		return if not helpers.includes(@_providedStates, state) and not force and not trigger.force
		enabler = if IS.string(trigger) then trigger else trigger.on
		disabler = trigger.off if IS.object(trigger)

		@_listenTo enabler, ()=> @state(state, on, trigger.bubbles)
		if disabler then @_listenTo disabler, ()=> @state(state, off, trigger.bubbles)
	
	return



QuickElement::_proxyParent = ()->
	parent = undefined
	Object.defineProperty @, '_parent',
		get: ()-> parent
		set: (newParent)-> if parent=newParent
			lastParent = @parents.slice(-1)[0]
			if lastParent.raw is document.documentElement
				@_unproxyParent(newParent)
			else
				parent.onInserted ()=>
					@_unproxyParent(newParent) if parent is newParent
			return


QuickElement::_unproxyParent = (newParent)->
	delete @_parent
	@_parent = newParent
	callback(@) for callback in @_insertedCallbacks
	return




