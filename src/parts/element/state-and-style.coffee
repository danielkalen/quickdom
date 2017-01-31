QuickElement::updateOptions = (options)->
	if IS.object(options) 
		@options = options
		@_normalizeOptions()
		@_applyOptions(@options)
	
	return @



QuickElement::getState = (targetState)->
	helpers.includes(@_state, targetState)


QuickElement::setState = (targetState, value=true)-> if IS.string(targetState)
	targetState = targetState.slice(1) if targetState[0] is '$'
	desiredValue = !!value # Convert the value to a boolean
	return @ if targetState is 'base'
	
	if @getState(targetState) isnt desiredValue
		if @options.style['$'+targetState]
			targetStyle = @options.style['$'+targetState]
			targetStateIndex = @providedStates.indexOf(targetState)
			activeStates = @providedStates.filter (state)=> helpers.includes(@_state, state) and state isnt targetState
			superiorStates = activeStates.filter (state)=> @providedStates.indexOf(state) > targetStateIndex
			activeStateStyles = activeStates.map (state)=> @options.style['$'+state]
			superiorStateStyles = superiorStates.map (state)=> @options.style['$'+state]


		if desiredValue #is on
			@_state.push(targetState)
			if targetStyle
				@style extend.clone.keys(targetStyle).apply(null, [targetStyle].concat(superiorStateStyles))
		
		else
			helpers.removeItem(@_state, targetState)
			if targetStyle
				stylesToKeep = extend.clone.keys(targetStyle).apply(null, [@options.style.$base].concat(activeStateStyles))
				stylesToRemove = extend.transform(-> null).clone(targetStyle)
				@style extend(stylesToRemove, stylesToKeep)


	if @hasSharedStateStyle
		sharedStyles = Object.keys(@options.styleShared)
		sharedStyles = sharedStyles.filter (stateChain)-> helpers.includes(stateChain, targetState)
		for stateChain in sharedStyles
			split = stateChain.split('+')
			isApplicable = split.length is split.filter((state)=> state is targetState or @getState(state)).length
			
			if isApplicable
				targetStyle = @options.styleShared[stateChain]
				if desiredValue
					inferiorStateChains = @options.styleShared[helpers.removeItem(split, targetState).join('+')]
					@style extend.clone(inferiorStateChains, targetStyle)
				else
					stylesToKeep = extend.clone.keys(targetStyle).apply(null, [@options.style.$base].concat(activeStateStyles))
					stylesToRemove = extend.transform(-> null).clone(targetStyle)
					@style extend(stylesToRemove, stylesToKeep)


	if @options.passStateToChildren
		child.setState(targetState, value) for child in @_children
	
	return @


QuickElement::resetState = ()->
	for activeState in @_state.slice()
		@setState(activeState, off)

	return @


QuickElement::style = ()->
	args = arguments
	if IS.string(args[0])
		returnValue = CSS(@el, args[0], args[1])
		return returnValue if not IS.defined(args[1])

	else if IS.object(args[0])
		CSS @el, extend.allowNull.transform((value)=>
			if typeof value is 'function' then value.call(@, @options.relatedInstance) else value
		).clone(args[0])

	return @



	