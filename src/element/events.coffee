import IS from '../checks'
import {removeItem} from '../helpers'
import extend from 'smart-extend'
REGEX_WHITESPACE = /\s+/


export on_ = (eventNames, callback, useCapture, isPrivate)->
	@_eventCallbacks ?= {__refs:{}}
	
	if IS.string(eventNames) and IS.function(callback)
		split = eventNames.split('.')
		callbackRef = split[1]
		eventNames = split[0]
		
		if eventNames is 'inserted' and @_inserted
			callback.call(@, @_parent)
			return @
		
		eventNames.split(REGEX_WHITESPACE).forEach (eventName)=>
			if not @_eventCallbacks[eventName]
				@_eventCallbacks[eventName] = []		
				
				unless isPrivate then @_listenTo eventName, (event)=>
					@_invokeHandlers(eventName, event)
				, useCapture

			if callbackRef
				@_eventCallbacks.__refs[eventName] ?= {}
				@_eventCallbacks.__refs[eventName][callbackRef] = callback
			@_eventCallbacks[eventName].push(callback)

	return @


export once = (eventNames, callback)->
	if IS.string(eventNames) and IS.function(callback)
		@on eventNames, onceCallback=(event)=>
			@off(eventNames, onceCallback)
			callback.call(@, event)
	
	return @



export off_ = (eventNames, callback)->
	@_eventCallbacks ?= {__refs:{}}
	if not IS.string(eventNames)
		@off(eventName) for eventName of @_eventCallbacks
	
	else
		split = eventNames.split('.')
		callbackRef = split[1]
		eventNames = split[0]
		eventNames.split(REGEX_WHITESPACE).forEach (eventName)=>
			if @_eventCallbacks[eventName]
				callback ?= @_eventCallbacks.__refs[eventName]?[callbackRef]

				if IS.function(callback)
					removeItem(@_eventCallbacks[eventName], callback)
				else if not callbackRef
					@_eventCallbacks[eventName].length = 0

	return @



export emit = (eventName, bubbles=true, cancelable=true, data)->
	if eventName and IS.string(eventName)
		event = document.createEvent('Event')
		event.initEvent(eventName, bubbles, cancelable)
		extend(event, data) if data and typeof data is 'object'
		@el.dispatchEvent(event)

	return @


export emitPrivate = (eventName, arg)->
	if eventName and IS.string(eventName) and @_eventCallbacks?[eventName]
		@_invokeHandlers(eventName, arg)
	
	return @



export _invokeHandlers = (eventName, arg)->
	callbacks = @_eventCallbacks[eventName].slice()
	cb.call(@, arg) for cb in callbacks
	return


### istanbul ignore next ###
export _listenTo = (eventName, callback, useCapture)->
	listenMethod = if @el.addEventListener then 'addEventListener' else 'attachEvent'
	eventNameToListenFor = if @el.addEventListener then eventName else "on#{eventName}"
	
	@el[listenMethod](eventNameToListenFor, callback, useCapture)
	return @


export default (QuickElement)->
	QuickElement::on = on_
	QuickElement::once = once
	QuickElement::off = off_
	QuickElement::emit = emit
	QuickElement::emitPrivate = emitPrivate
	QuickElement::_invokeHandlers = _invokeHandlers
	QuickElement::_listenTo = _listenTo

