QuickElement::_normalizeOptions = ()->
	@options.style ?= {}
	@options.styleShared = {}
	@options.className = @options.class if @options.class
	@options.href = @options.url if @options.url
	@options.relatedInstance ?= @
	@options.passStateToChildren ?= true
	@options.stateTriggers = extend.deep
		'hover': {on:'mouseenter', off:'mouseleave'}
		'focus': {on:'focus', off:'blur'}
	,
		@options.stateTriggers
	
	@_normalizeStyle()
	return @



QuickElement::_normalizeStyle = ()->
	keys = Object.keys(@options.style)
	states = keys.filter (key)-> key[0] is '$'
	specialStates = helpers.removeItem(states.slice(), '$base')
	@providedStates = states.map (state)-> state.slice(1) # Remove '$' prefix

	if not helpers.includes(states, '$base') and keys.length
		if states.length # Indicates other states were provided but the $base state has no styling
			nonStateProps = keys.filter (property)-> property[0] isnt '$'
			@options.style.$base = extend.clone.keys(nonStateProps)(@options.style)
		else
			@options.style = $base: @options.style

	checkInnerStates = (styleObject, parentStates)=>
		innerStates = Object.keys(styleObject).filter((key)-> key[0] is '$')
		if innerStates.length
			@hasSharedStateStyle = true
			@_stateShared ?= []
			
			for innerState in innerStates
				stateChain = parentStates.concat(innerState.slice(1))
				stateChainString = stateChain.join('+')
				@options.styleShared[stateChainString] = @options.style['$'+stateChainString] = styleObject[innerState]
			
				checkInnerStates(styleObject[innerState], stateChain)
				delete styleObject[innerState]


	for state in specialStates
		checkInnerStates(@options.style[state], [state.slice(1)])

	return @




QuickElement::_applyOptions = ()->
	if @options.id then @el.id = @options.id
	if @options.className then @el.className = @options.className
	if @options.href then @el.href = @options.href
	if @options.type then @el.type = @options.type
	if @options.name then @el.name = @options.name
	if @options.value then @el.value = @options.value
	if @options.selected then @el.selected = @options.selected
	if @options.checked then @el.checked = @options.checked
	if @options.props then @prop(key,value) for key,value of @options.props
	if @options.attrs then @attr(key,value) for key,value of @options.attrs
	if not @options.styleAfterInsert
		@style(@options.style.$base)
	else
		@onInserted applyBaseStylesOnInsert = ()=>
			lastParent = @parents.slice(-1)[0]
			
			if lastParent.raw is document.documentElement
				@style(extend.clone @options.style.$base, @_getStateStyles(@_getActiveStates())...)
			else
				lastParent.onInserted(applyBaseStylesOnInsert)


	Object.defineProperty @, '_parent', set: (newParent)-> if newParent
		delete @_parent
		@_parent = newParent
		callback(@) for callback in @_insertedCallbacks
		return

	return @


QuickElement::_attachStateEvents = ()->
	for state,trigger of @options.stateTriggers then do (state,trigger)=>
		enabler = if IS.string(trigger) then trigger else trigger.on
		disabler = trigger.off if IS.object(trigger)

		@_listenTo enabler, ()=> @state(state, on)
		if disabler then @_listenTo disabler, ()=> @state(state, off)
	
	return @



