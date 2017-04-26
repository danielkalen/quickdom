QuickElement::_normalizeOptions = ()->
	@options.style ?= {}
	@options.styleShared = {}
	@options.className = @options.class if @options.class
	@options.href = @options.url if @options.url
	@options.relatedInstance ?= @
	@options.unpassableStates ?= []
	@options.passStateToChildren ?= true
	@options.stateTriggers = extend.deep
		'hover': {on:'mouseenter', off:'mouseleave'}
		'focus': {on:'focus', off:'blur'}
	,
		@options.stateTriggers
	
	@_normalizeStyle()
	return


QuickElement::_normalizeStyle = ()->
	keys = Object.keys(@options.style)
	states = keys.filter (key)-> helpers.isStateStyle(key)
	specialStates = helpers.removeItem(states.slice(), '$base')
	@_mediaStates = states.filter (key)-> key[0] is '@'
	@_providedStates = states.map (state)-> state.slice(1) # Remove '$' prefix

	if not helpers.includes(states, '$base') and keys.length
		@options = extend.clone(@options)
		if states.length # Indicates other states were provided but the $base state has no styling
			nonStateProps = keys.filter (property)-> not helpers.isStateStyle(property)
			@options.style.$base = extend.clone.keys(nonStateProps)(@options.style)
		else
			@options.style = $base: @options.style

	checkInnerStates = (styleObject, parentStates)=>
		innerStates = Object.keys(styleObject).filter (key)-> helpers.isStateStyle(key)
		if innerStates.length
			@hasSharedStateStyle = true
			@_stateShared ?= []
			
			for innerState in innerStates
				stateChain = parentStates.concat(innerState.slice(1))
				stateChainString = stateChain.join('+')
				@options.styleShared[stateChainString] = @options.style['$'+stateChainString] = styleObject[innerState]
			
				checkInnerStates(styleObject[innerState], stateChain)
				delete styleObject[innerState]
			return


	for state in specialStates
		checkInnerStates(@options.style[state], [state.slice(1)])

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
	@style(@options.style.$base) if not @options.styleAfterInsert

	@onInserted ()=>
		if @options.styleAfterInsert
			@style(extend.clone @options.style.$base, @_getStateStyles(@_getActiveStates())...)

		_ = @_inserted = @
		mediaStates = @_mediaStates
		if mediaStates.length then @_mediaStates = new ()->
			for queryString in mediaStates
				queryString = queryString.slice(1)
				@[queryString] = MediaQuery.register(_, queryString)
			
			return @

	return


QuickElement::_attachStateEvents = ()->
	for state,trigger of @options.stateTriggers then do (state,trigger)=>
		enabler = if IS.string(trigger) then trigger else trigger.on
		disabler = trigger.off if IS.object(trigger)

		@_listenTo enabler, ()=> @state(state, on)
		if disabler then @_listenTo disabler, ()=> @state(state, off)
	
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




