DUMMY_ARRAY = []

QuickElement::updateOptions = (options)->
	if IS.object(options) 
		@options = options
		@_normalizeOptions()
		@_applyOptions(@options)
	
	return @


QuickElement::state = (targetState, value, bubbles, source)->
	if arguments.length is 1
		helpers.includes(@_state, targetState)

	else if @_statePipeTarget and source isnt @
		@_statePipeTarget.state(targetState, value, bubbles, @)
		return @
	
	else if IS.string(targetState)
		targetState = targetState.slice(1) if targetState[0] is '$'
		return @ if targetState is 'base'
		desiredValue = !!value # Convert the value to a boolean
		activeStates = @_getActiveStates(targetState, false)
		
		# ==== Toggle styles for this state =================================================================================
		if @state(targetState) isnt desiredValue
			if desiredValue #is on
				@_state.push(targetState)
				@_turnStyleOn(targetState, activeStates)			
			else
				helpers.removeItem(@_state, targetState)
				@_turnStyleOff(targetState, activeStates)			


		# ==== Pass state to parent/children =================================================================================
		if not helpers.includes(@options.unpassableStates, targetState)
			if bubbles
				@_parent.state(targetState, value, true, source or @) if @parent
			else if @options.passStateToChildren
				child.state(targetState, value, false, source or @) for child in @_children
		
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




QuickElement::_getActiveStates = (stateToExclude, includeSharedStates=true)->
	return DUMMY_ARRAY if not @_providedStates
	plainStates = @_providedStates.filter (state)=> helpers.includes(@_state, state) and state isnt stateToExclude
	
	if not includeSharedStates or not @_providedStatesShared
		return plainStates
	else
		return plainStates.concat(@_stateShared)


QuickElement::_getSuperiorStates = (targetState, activeStates)->
	targetStateIndex = @_providedStates.indexOf(targetState)
	superior = activeStates.filter (state)=>
		@_providedStates.indexOf(state) > targetStateIndex


QuickElement::_getSharedStates = (targetState)->
	activeStates = @_state
	
	@_providedStatesShared.filter (stateChain)->
		stateChain.includes(targetState) and
		stateChain.isApplicable(targetState, activeStates)


QuickElement::_turnStyleOn = (targetState, activeStates)->
	if targetStyle = @_styles[targetState]
		superiorStyles = @_getStateStyles @_getSuperiorStates(targetState, activeStates)
		@style extend.clone.keys(targetStyle)(targetStyle, superiorStyles...)

	if @_providedStatesShared
		sharedStates = @_getSharedStates(targetState)
		
		for stateChain in sharedStates
			@_stateShared.push(stateChain.string) unless helpers.includes(@_stateShared, stateChain.string)
			targetStyle = @_styles[stateChain.string]
			
			if stateChain.length > 2
				inferiorStateChains = @_styles[stateChain.without(targetState)]
				@style extend.clone(inferiorStateChains, targetStyle)
			else
				@style targetStyle
	return


QuickElement::_turnStyleOff = (targetState, activeStates)->
	if targetStyle = @_styles[targetState]
		activeStyles = @_getStateStyles(activeStates)
		stylesToKeep = extend.clone.keys(targetStyle)(@_styles.base, activeStyles...)
		stylesToRemove = extend.transform(-> null).clone(targetStyle)

		@style extend(stylesToRemove, stylesToKeep)
	
	if @_providedStatesShared
		sharedStates = @_getSharedStates(targetState)
		activeStyles ?= @_getStateStyles(activeStates)

		for stateChain in sharedStates
			helpers.removeItem(@_stateShared, stateChain.string)
			targetStyle = @_styles[stateChain.string]
			
			if @_stateShared.length
				activeStyles.push (
					@_stateShared
						.filter (state)-> not helpers.includes(state, targetState)
						.map (state)=> @_styles[state]
				)...
			
			stylesToKeep = extend.clone.keys(targetStyle)(@_styles.base, activeStyles...)
			stylesToRemove = extend.transform(-> null).clone(targetStyle)
			@style extend(stylesToRemove, stylesToKeep)

	return


QuickElement::_getStateStyles = (states)->
	states.map (state)=> @_styles[state] or @_styles[state]






	