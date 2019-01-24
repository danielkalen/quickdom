import IS from '../checks'
import {includes, removeItem, normalizeElementArg as normalizeElement} from '../helpers'
DUMMY_ARRAY = []


export state = (targetState, value, bubbles, source)->
	if arguments.length is 0
		return @_state.slice()
	
	if arguments.length is 1
		if IS.string(targetState)
			return includes(@_state, targetState)
		
		else if IS.object(targetState)
			keys = Object.keys(targetState)
			i = -1
			@state(key, targetState[key]) while key=keys[++i]
			return @

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
			prop = if @type is 'text' then 'Text' else 'Style'
		
			if desiredValue #is on
				@_state.push(targetState)
				toggle = 'ON'
			else
				removeItem(@_state, targetState)
				toggle = 'OFF'
			
			@['_turn'+prop+toggle](targetState, activeStates)
			@emitPrivate "stateChange:#{targetState}", desiredValue


		# ==== Pass state to parent/children =================================================================================
		if not includes(@options.unpassableStates, targetState)
			if bubbles
				@_parent.state(targetState, value, true, source or @) if @parent
			else if @options.passStateToChildren
				child.state(targetState, value, false, source or @) for child in @_children
		
		return @


export toggleState = (targetState)->
	@state(targetState, !@state(targetState))


export resetState = ()->
	for activeState in @_state.slice()
		@state(activeState, off)

	return @


export pipeState = (targetEl)->
	if targetEl
		targetEl = normalizeElement(targetEl)

		if IS.quickDomEl(targetEl) and targetEl isnt @
			@_statePipeTarget = targetEl
			targetEl.state(activeState, on) for activeState in @_state

	else if targetEl is false
		delete @_statePipeTarget

	return @




export _applyRegisteredStyle = (targetStyle, superiorStates, includeBase, skipFns)-> if targetStyle
	@addClass(className) for className in targetStyle.className
	
	if targetStyle.fns.length and not skipFns
		superiorStyles = @_resolveFnStyles(superiorStates, includeBase) if superiorStates
		
		for entry in targetStyle.fns
			@style(entry[0], entry[1]) unless superiorStyles and superiorStyles[entry[0]]
	
	return


export _removeRegisteredStyle = (targetStyle, superiorStates, includeBase)->
	@removeClass(className) for className in targetStyle.className

	if targetStyle.fns.length
		superiorStyles = @_resolveFnStyles(superiorStates, includeBase) if superiorStates
		
		for entry in targetStyle.fns
			resetValue = superiorStyles and superiorStyles[entry[0]] or null
			@style(entry[0], resetValue)

	return




export _turnStyleON = (targetState, activeStates)->
	skipFns = @options.styleAfterInsert and not @_inserted
	if @_styles[targetState]
		@_applyRegisteredStyle(@_styles[targetState], @_getSuperiorStates(targetState, activeStates), false, skipFns)


	if @_providedStatesShared
		sharedStates = @_getSharedStates(targetState)
		
		for stateChain in sharedStates
			@_stateShared.push(stateChain.string) unless includes(@_stateShared, stateChain.string)
			@_applyRegisteredStyle(@_styles[stateChain.string], null, null, skipFns)

	return


export _turnStyleOFF = (targetState, activeStates)->
	if @_styles[targetState]
		@_removeRegisteredStyle(@_styles[targetState], activeStates, true)

	if @_providedStatesShared
		sharedStates = @_getSharedStates(targetState)
		return if sharedStates.length is 0

		for stateChain in sharedStates
			removeItem(@_stateShared, stateChain.string)
			targetStyle = @_styles[stateChain.string]
			
			if targetStyle.fns.length and @_stateShared.length and not activeSharedStates
				activeSharedStates = @_stateShared.filter (state)-> not includes(state, targetState)
				activeStates = activeStates.concat(activeSharedStates)
			
			@_removeRegisteredStyle(targetStyle, activeStates, true)

	return



export _turnTextON = (targetState, activeStates)->
	if @_texts and IS.string(targetText = @_texts[targetState])
		superiorStates = @_getSuperiorStates(targetState, activeStates)
		
		@text = targetText unless superiorStates.length
	return


export _turnTextOFF = (targetState, activeStates)->
	if @_texts and IS.string(targetText = @_texts[targetState])
		activeStates = activeStates.filter (state)-> state isnt targetState
		targetText = @_texts[activeStates[activeStates.length-1]]
		targetText ?= @_texts.base
		
		@text = targetText
	return




	




export _getActiveStates = (stateToExclude, includeSharedStates=true)->
	return DUMMY_ARRAY if not @_providedStates
	activeStates = plainStates = @_state
	if stateToExclude
		plainStates = []
		plainStates.push(state) for state in activeStates when state isnt stateToExclude
	
	if not includeSharedStates or not @_providedStatesShared
		return plainStates
	else
		return plainStates.concat(@_stateShared)


export _getSuperiorStates = (targetState, activeStates)->
	targetStateIndex = @_providedStates.indexOf(targetState)
	return DUMMY_ARRAY if targetStateIndex is @_providedStates.length - 1
	
	superior = []
	for candidate in activeStates
		superior.push(candidate) if @_providedStates.indexOf(candidate) > targetStateIndex

	return superior


export _getSharedStates = (targetState)->
	activeStates = @_state
	sharedStates = []

	for stateChain in @_providedStatesShared
		sharedStates.push(stateChain) if stateChain.includes(targetState) and stateChain.isApplicable(targetState, activeStates)

	return sharedStates


export _resolveFnStyles = (states, includeBase)->
	states = ['base'].concat(states) if includeBase
	output = {}
	
	for state in states when @_styles[state] and @_styles[state].fns.length
		output[entry[0]] = entry[1] for entry in @_styles[state].fns

	return output


export default (QuickElement)->
	QuickElement::state = state
	QuickElement::toggleState = toggleState
	QuickElement::resetState = resetState
	QuickElement::pipeState = pipeState
	QuickElement::_applyRegisteredStyle = _applyRegisteredStyle
	QuickElement::_removeRegisteredStyle = _removeRegisteredStyle
	QuickElement::_turnStyleON = _turnStyleON
	QuickElement::_turnStyleOFF = _turnStyleOFF
	QuickElement::_turnTextON = _turnTextON
	QuickElement::_turnTextOFF = _turnTextOFF
	QuickElement::_getActiveStates = _getActiveStates
	QuickElement::_getSuperiorStates = _getSuperiorStates
	QuickElement::_getSharedStates = _getSharedStates
	QuickElement::_resolveFnStyles = _resolveFnStyles






