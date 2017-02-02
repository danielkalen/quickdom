QuickElement::updateOptions = (options)->
	if IS.object(options) 
		@options = options
		@_normalizeOptions()
		@_applyOptions(@options)
	
	return @


QuickElement::state = (targetState, value)->
	if arguments.length is 1
		helpers.includes(@_state, targetState)

	else if IS.string(targetState)
		targetState = targetState.slice(1) if targetState[0] is '$'
		desiredValue = !!value # Convert the value to a boolean
		return @ if targetState is 'base'
		
		if @state(targetState) isnt desiredValue
			if @options.style['$'+targetState]
				targetStyle = @options.style['$'+targetState]
				targetStateIndex = @providedStates.indexOf(targetState)
				activeStates = @_getActiveStates(targetState)
				superiorStates = activeStates.filter (state)=> @providedStates.indexOf(state) > targetStateIndex
				activeStateStyles = @_getStateStyles(activeStates)
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
						inferiorStateChains = @options.styleShared[helpers.removeItem(split, targetState).join('+')]
						@style extend.clone(inferiorStateChains, targetStyle)
					else
						stylesToKeep = extend.clone.keys(targetStyle)(@options.style.$base, activeStateStyles...)
						stylesToRemove = extend.transform(-> null).clone(targetStyle)
						@style extend(stylesToRemove, stylesToKeep)


		if @options.passStateToChildren
			child.state(targetState, value) for child in @_children
		
		return @


QuickElement::resetState = ()->
	for activeState in @_state.slice()
		@state(activeState, off)

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


Object.defineProperty QuickElement::, 'rect',
	get: ()-> @el.getBoundingClientRect()




	