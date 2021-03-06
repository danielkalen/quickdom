import quickdom from '../quickdom'
import MediaQuery from '../mediaQuery'
import StateChain from './stateChain'
import IS from '../checks'
import * as helpers from '../helpers'
import extend from 'smart-extend'

BASE_STATE_TRIGGERS =
	'hover': {on:'mouseenter', off:'mouseleave', bubbles:true}
	'focus': {on:'focus', off:'blur', bubbles:true}


export _normalizeOptions = ()->
	if @options.relatedInstance
		@options.related ||= @options.relatedInstance
		@options.relatedInstance = null
	
	@related = @options.related ?= @
	@options.className = @options.class if @options.class
	@options.href = @options.url if @options.url
	@options.unpassableStates ?= []
	@options.passStateToChildren ?= true
	@options.passDataToChildren ?= true
	@options.stateTriggers =
		if @options.stateTriggers
			extend.clone.deep(BASE_STATE_TRIGGERS, @options.stateTriggers)
		else
			BASE_STATE_TRIGGERS
	
	if @type is 'text'
		extend @, @_parseTexts(@options.text, @_texts)
	else
		extend @, @_parseStyles(@options.style, @_styles)
	
	return


export _parseStyles = (styles, store)->
	return if not IS.objectPlain(styles)
	keys = Object.keys(styles)
	states = keys.filter (key)-> helpers.isStateStyle(key)
	specialStates = helpers.removeItem(states.slice(), '$base')
	_mediaStates = states.filter((key)-> key[0] is '@').map (state)-> state.slice(1)
	_providedStates = states.map (state)-> state.slice(1) # Remove '$' prefix
	_styles = store or {}
	_stateShared = _providedStatesShared = undefined

	base = if not helpers.includes(states, '$base') then styles else styles.$base
	_styles.base = helpers.registerStyle(base, 0, forceStyle=@options.forceStyle)


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
					stateChain = new StateChain(chain)
					_stateShared ?= []
					_providedStatesShared ?= []
					_providedStatesShared.push(stateChain)
					_mediaStates.push(state_) if state[0] is '@'
					_styles[stateChain.string] = helpers.registerStyle flattenNestedStates(styleObject[state], chain, level+1), level+1, forceStyle
			
			return if hasNonStateProps then output

		for state in specialStates
			state_ = state.slice(1)
			
			stateStyles = flattenNestedStates(styles[state], [state_], 1)
			_styles[state_] = helpers.registerStyle(stateStyles, 1) if stateStyles


	return {_styles, _mediaStates, _stateShared, _providedStates, _providedStatesShared}



export _parseTexts = (texts, store)->
	return if not IS.objectPlain(texts)
	states = Object.keys(texts).map (state)-> state.slice(1)
	_providedStates = states.filter (state)-> state isnt 'base'
	_texts = store or {}
	_texts = base:''
	_texts[state] = texts['$'+state] for state in states
	
	return {_texts, _providedStates}


export _applyOptions = ()->
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
	if @options.props then @prop(@options.props)
	if @options.attrs then @attr(@options.attrs)
	@_applyRegisteredStyle(@_styles.base, null, null, @options.styleAfterInsert)
	@text = @_texts.base if @_texts

	@on('inserted', CACHED_FN_INSERTED, false, true)

	if @options.invokeComputersOnce
		@_invokedComputers = {}
	
	if @options.recalcOnResize
		window.addEventListener 'resize', ()=> @recalcStyle()

	if @options.events
		@on(event, handler) for event,handler of @options.events

	if @options.methods
		for method,value of @options.methods when not @[method]
			if IS.function(value)
				@[method] = value
			else if IS.object(value)
				Object.defineProperty @, method, {configurable:true, get:value.get, set:value.set}

	if @type isnt 'text' and IS.object(@options.text)
		@append quickdom('text', text:@options.text)
	return


export _postCreation = (data)->
	if @options.computers
		data = extend.clone(@options.data, data) if data and @options.data
		data ||= @options.data
		@applyData(data, false)
		
		if @options.computers._init
			@_runComputer('_init', data)

	if @options.state
		@state(@options.state)
	
	return


export _attachStateEvents = (force)->
	states = Object.keys(@options.stateTriggers)
	states.forEach (state)=>
		trigger = @options.stateTriggers[state]	
		return if not helpers.includes(@_providedStates, state) and not force and not trigger.force
		enabler = if IS.string(trigger) then trigger else trigger.on
		disabler = trigger.off if IS.object(trigger)

		@_listenTo enabler, ()=> @state(state, on, trigger.bubbles)
		if disabler then @_listenTo disabler, ()=> @state(state, off, trigger.bubbles)
	
	return



export _proxyParent = ()->
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


export _unproxyParent = (newParent)->
	delete @_parent
	@_parent = newParent
	@emitPrivate('inserted', newParent)
	return



CACHED_FN_INSERTED = ()->
	@_inserted = @
	@recalcStyle() if @options.styleAfterInsert

	if (mediaStates=@_mediaStates) and @_mediaStates.length
		@_mediaStates = Object.create(null)
		
		for queryString in mediaStates
			@_mediaStates[queryString] = MediaQuery.register(@, queryString)


export default (QuickElement)->
	QuickElement::_normalizeOptions = _normalizeOptions
	QuickElement::_parseStyles = _parseStyles
	QuickElement::_parseTexts = _parseTexts
	QuickElement::_applyOptions = _applyOptions
	QuickElement::_postCreation = _postCreation
	QuickElement::_attachStateEvents = _attachStateEvents
	QuickElement::_proxyParent = _proxyParent
	QuickElement::_unproxyParent = _unproxyParent




