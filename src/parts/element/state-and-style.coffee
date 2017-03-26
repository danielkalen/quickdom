QuickElement::updateOptions = (options)->
	if IS.object(options) 
		@options = options
		@_normalizeOptions()
		@_applyOptions(@options)
	
	return @


QuickElement::state = (targetState, value, source)->
	if arguments.length is 1
		helpers.includes(@_state, targetState)

	else if @_statePipeTarget and source isnt @
		@_statePipeTarget.state(targetState, value, @)
		return @
	
	else if IS.string(targetState)
		targetState = targetState.slice(1) if targetState[0] is '$'
		desiredValue = !!value # Convert the value to a boolean
		return @ if targetState is 'base'
		activeStates = @_getActiveStates(targetState, false)
		activeStateStyles = @_getStateStyles(activeStates)
		
		if @state(targetState) isnt desiredValue
			if @options.style['$'+targetState]
				targetStyle = @options.style['$'+targetState]
				targetStateIndex = @_providedStates.indexOf(targetState)
				superiorStates = activeStates.filter (state)=> @_providedStates.indexOf(state) > targetStateIndex
				superiorStateStyles = @_getStateStyles(superiorStates)


			if desiredValue #is on
				@_state.push(targetState)
				if targetStyle
					@style extend.clone.keys(targetStyle)(targetStyle, superiorStateStyles...)
			
			else
				helpers.removeItem(@_state, targetState)
				if targetStyle
					stylesToKeep = extend.clone.keys(targetStyle)(@options.style.$base, activeStateStyles...)
					stylesToRemove = extend.transform(-> null).clone(targetStyle)
					@style extend(stylesToRemove, stylesToKeep)


		if @hasSharedStateStyle
			sharedStyles = Object.keys(@options.styleShared)
			sharedStyles = sharedStyles.filter (stateChain)-> helpers.includes(stateChain, targetState)
			for stateChain in sharedStyles
				split = stateChain.split('+')
				isApplicable = split.length is split.filter((state)=> state is targetState or @state(state)).length
				
				if isApplicable
					targetStyle = @options.styleShared[stateChain]
					if desiredValue
						@_stateShared.push(stateChain) unless helpers.includes(@_stateShared, stateChain)
						inferiorStateChains = @options.styleShared[helpers.removeItem(split, targetState).join('+')]
						@style extend.clone(inferiorStateChains, targetStyle)
					else
						helpers.removeItem(@_stateShared, stateChain)
						stylesToKeep = extend.clone.keys(targetStyle)(@options.style.$base, activeStateStyles...)
						stylesToRemove = extend.transform(-> null).clone(targetStyle)
						@style extend(stylesToRemove, stylesToKeep)


		if @options.passStateToChildren and not helpers.includes(@options.unpassableStates, targetState)
			child.state(targetState, value, source or @) for child in @_children
		
		return @


QuickElement::resetState = ()->
	for activeState in @_state.slice()
		@state(activeState, off)

	return @


QuickElement::pipeState = (targetEl)->
	if targetEl
		targetEl = helpers.normalizeGivenEl(targetEl)

		if IS.quickDomEl(targetEl) and targetEl isnt @
			@_statePipeTarget = targetEl
			targetEl.state(activeState, on) for activeState in @_state

	else if targetEl is false
		delete @_statePipeTarget

	return @


QuickElement::style = ()->
	return if @type is 'text'
	args = arguments
	if IS.string(args[0])
		returnValue = CSS(@el, args[0], args[1])
		return returnValue if not IS.defined(args[1])

	else if IS.object(args[0])
		CSS @el, extend.allowNull.transform((value)=>
			if typeof value is 'function' then value.call(@, @options.relatedInstance) else value
		).clone(args[0])

	return @


###*
 * Attempts to resolve the value for a given property in the following order:
 * 1. from computed style (for dom-inserted els)
 * 2. from DOMElement.style object (for non-inserted els; if options.styleAfterInsert, will only have state styles)
 * 3. from provided style options
 * (for non-inserted els; checking only $base since state styles will always be applied to the style object even for non-inserted)
###
QuickElement::styleSafe = (property, skipComputed)->
	return if @type is 'text'
	args = arguments
	computedResult = @style(property)

	if IS.string(computedResult)
		computedResult = 0 if skipComputed
		return computedResult or @el.style[args[0]] or @options.style.$base[args[0]] or ''

	return @


QuickElement::_getActiveStates = (stateToExclude, includeSharedStates=true)->
	plainStates = @_providedStates.filter (state)=> helpers.includes(@_state, state) and state isnt stateToExclude
	return if not includeSharedStates or not @hasSharedStateStyle then plainStates else plainStates.concat(@_stateShared)

QuickElement::_getStateStyles = (states)->
	states.map (state)=> @options.style['$'+state]



Object.defineProperty QuickElement::, 'rect',
	get: ()-> @el.getBoundingClientRect()




	