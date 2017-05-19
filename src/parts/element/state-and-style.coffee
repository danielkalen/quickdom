QuickElement::updateOptions = (options)->
	if IS.object(options) 
		@options = options
		@_normalizeOptions()
		@_applyOptions(@options)
	
	return @


QuickElement::show = (display)->
	display ?= @_styles.base?.display or 'block'
	@style 'display', display

QuickElement::hide = ()->
	@style 'display', 'none'


QuickElement::state = (targetState, value, bubbles, source)->
	if arguments.length is 1
		helpers.includes(@_state, targetState)

	else if @_statePipeTarget and source isnt @
		@_statePipeTarget.state(targetState, value, bubbles, @)
		return @
	
	else if IS.string(targetState)
		targetState = targetState.slice(1) if targetState[0] is '$'
		desiredValue = !!value # Convert the value to a boolean
		return @ if targetState is 'base'
		activeStates = @_getActiveStates(targetState, false)
		activeStateStyles = @_getStateStyles(activeStates)
		
		# ==== Toggle styles for this state =================================================================================
		if @state(targetState) isnt desiredValue
			targetStyle = @_styles[targetState] or @_styles[targetState]
			if targetStyle
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
					stylesToKeep = extend.clone.keys(targetStyle)(@_styles.base, activeStateStyles...)
					stylesToRemove = extend.transform(-> null).clone(targetStyle)
					@style extend(stylesToRemove, stylesToKeep)


		# ==== Toggle shared styles =================================================================================
		if @_hasSharedStateStyle
			sharedStyles = @_stylesShared.filter (stateChain)-> helpers.includes(stateChain, targetState)
			
			for stateChain in sharedStyles
				split = stateChain.split('+')
				isApplicable = split.length is split.filter((state)=> state is targetState or @state(state)).length
				
				if isApplicable
					targetStyle = @_styles[stateChain]
				
					if desiredValue #is on
						@_stateShared.push(stateChain) unless helpers.includes(@_stateShared, stateChain)
						if split.length > 2
							inferiorStateChains = @_styles[helpers.removeItem(split, targetState).join('+')]
							targetStyle = extend.clone(inferiorStateChains, targetStyle)
						
						@style targetStyle
					else
						helpers.removeItem(@_stateShared, stateChain)
						if @_stateShared.length
							activeStateStyles.push (
								@_stateShared
									.filter (state)-> not helpers.includes(state, targetState)
									.map (state)=> @_styles[state]
							)...

						stylesToKeep = extend.clone.keys(targetStyle)(@_styles.base, activeStateStyles...)
						stylesToRemove = extend.transform(-> null).clone(targetStyle)
						@style extend(stylesToRemove, stylesToKeep)


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


###*
 * Sets/gets the value of a style property. In getter mode the computed property of
 * the style will be returned unless the element is not inserted into the DOM. In
 * webkit browsers all computed properties of a detached node are always an empty
 * string but in gecko they reflect on the actual computed value, hence we need
 * to "normalize" this behavior and make sure that even on gecko an empty string
 * is returned
 * @return {[type]} [description]
###
QuickElement::style = ()->
	return if @type is 'text'
	args = arguments
	
	if IS.string(args[0])
		returnValue = CSS(@el, args[0], args[1])
		if not IS.defined(args[1])
			### istanbul ignore next ###
			return if @_inserted then returnValue else if not returnValue then returnValue else ''

	else if IS.object(args[0])
		CSS @el, extend.allowNull.transform((value)=>
			if typeof value is 'function' then value.call(@, @options.relatedInstance) else value
		).clone(args[0])

	return @


###*
 * Attempts to resolve the value for a given property in the following order if each one isn't a valid value:
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
		return computedResult or @el.style[args[0]] or @_styles.base[args[0]] or ''

	return @


QuickElement::styleParsed = (property)->
	parseFloat @styleSafe(property)


QuickElement::recalcStyle = ()->
	activeStateStyles = @_getStateStyles @_getActiveStates()
	targetStyles = extend.clone.filter(
		(value)-> typeof value is 'function'
	)(@_styles.base, activeStateStyles...)

	@style(targetStyles)


QuickElement::_getActiveStates = (stateToExclude, includeSharedStates=true)->
	plainStates = @_providedStates.filter (state)=> helpers.includes(@_state, state) and state isnt stateToExclude
	return if not includeSharedStates or not @_hasSharedStateStyle then plainStates else plainStates.concat(@_stateShared)

QuickElement::_getStateStyles = (states)->
	states.map (state)=> @_styles[state] or @_styles[state]



Object.defineProperties QuickElement::,
	'rect': get: ()-> @el.getBoundingClientRect()
	'width': get: ()-> parseFloat @style('width')
	'height': get: ()-> parseFloat @style('height')
	'orientation': orientationGetter = get: ()-> if @width > @height then 'landscape' else 'portrait'
	'aspectRatio': aspectRatioGetter = get: ()-> @width/@height




	