baseStateTriggers =
	'hover': {on:'mouseenter', off:'mouseleave', bubbles:true}
	'focus': {on:'focus', off:'blur', bubbles:true}


QuickElement::_normalizeOptions = ()->
	@options.className = @options.class if @options.class
	@options.href = @options.url if @options.url
	@related = @options.relatedInstance ?= @
	@options.unpassableStates ?= []
	@options.passStateToChildren ?= true
	@options.stateTriggers =
		if @options.stateTriggers
			extend.clone.deep(baseStateTriggers, @options.stateTriggers)
		else
			baseStateTriggers
	
	if @type is 'text'
		extend @, @_parseTexts(@options.text, @_texts)
	else
		extend @, @_parseStyles(@options.style, @_styles)
	
	return


QuickElement::_parseStyles = (styles, store)->
	return if not IS.objectPlain(styles)
	keys = Object.keys(styles)
	states = keys.filter (key)-> helpers.isStateStyle(key)
	specialStates = helpers.removeItem(states.slice(), '$base')
	_mediaStates = states.filter((key)-> key[0] is '@').map (state)-> state.slice(1)
	_providedStates = states.map (state)-> state.slice(1) # Remove '$' prefix
	_styles = store or {}
	_stateShared = _providedStatesShared = undefined

	base = if not helpers.includes(states, '$base') then styles else styles.$base
	_styles.base = helpers.registerStyle(base)


	if specialStates.length
		flattenNestedStates = (styleObject, chain, level)->
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
					_stateShared ?= []
					_providedStatesShared ?= []
					_providedStatesShared.push(stateChain)
					_mediaStates.push(state_) if state[0] is '@'
					_styles[stateChain.string] = helpers.registerStyle flattenNestedStates(styleObject[state], chain, level+1), level+1
			
			return if hasNonStateProps then output

		for state in specialStates
			state_ = state.slice(1)
			
			stateStyles = flattenNestedStates(styles[state], [state_], 1)
			_styles[state_] = helpers.registerStyle(stateStyles, 1) if stateStyles


	return {_styles, _mediaStates, _stateShared, _providedStates, _providedStatesShared}



QuickElement::_parseTexts = (texts, store)->
	return if not IS.objectPlain(texts)
	states = Object.keys(texts).map (state)-> state.slice(1)
	_providedStates = states.filter (state)-> state isnt 'base'
	_texts = store or {}
	_texts = base:''
	_texts[state] = texts['$'+state] for state in states
	
	return {_texts, _providedStates}


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
	@_applyRegisteredStyle(@_styles.base, null, null, @options.styleAfterInsert)
	@text = @_texts.base if @_texts

	@on 'inserted', ()->
		if @options.styleAfterInsert
			@recalcStyle()

		_ = @_inserted = @

		if (mediaStates=@_mediaStates) and @_mediaStates.length
			@_mediaStates = new ()->
				for queryString in mediaStates
					@[queryString] = MediaQuery.register(_, queryString)
				
				return @
	, false, true

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
				parent.on 'inserted', ()=>
					@_unproxyParent(newParent) if parent is newParent
			return


QuickElement::_unproxyParent = (newParent)->
	delete @_parent
	@_parent = newParent
	@emitPrivate('inserted', newParent)
	return




