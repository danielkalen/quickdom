QuickElement::on = (eventName, callback)->
	if IS.string(eventName) and IS.function(callback)
		split = eventName.split('.')
		callbackRef = split[1]
		eventName = split[0]
		
		if not @_eventCallbacks[eventName]
			@_eventCallbacks[eventName] = []		
			@_listenTo eventName, (event)=>
				callback.call(@el, event) for callback in @_eventCallbacks[eventName]
				return

		@_eventCallbacks.__refs[callbackRef] = callback if callbackRef
		@_eventCallbacks[eventName].push(callback)
	return @




QuickElement::off = (eventName, callback)->
	if not IS.string(eventName)
		@off(eventName) for eventName of @_eventCallbacks
	
	else
		split = eventName.split('.')
		callbackRef = split[1]
		eventName = split[0]
	
		if @_eventCallbacks[eventName]
			callback ?= @_eventCallbacks.__refs[callbackRef]

			if IS.function(callback)
				helpers.removeItem(@_eventCallbacks[eventName], callback)
			else if not callbackRef
				@_eventCallbacks[eventName].length = 0

	return @



QuickElement::emit = (eventName, bubbles=true, cancelable=true)->
	if eventName and IS.string(eventName)
		event = document.createEvent('Event')
		event.initEvent(eventName, bubbles, cancelable)
		@el.dispatchEvent(event)

	return @



QuickElement::onInserted = (callback, invokeIfInserted=true)-> if IS.function(callback)
	if not @_parent
		@_insertedCallbacks.push(callback)
	
	else if invokeIfInserted
		callback(@)

	return @



### istanbul ignore next ###
QuickElement::_listenTo = (eventName, callback)->
	listenMethod = if @el.addEventListener then 'addEventListener' else 'attachEvent'
	eventNameToListenFor = if @el.addEventListener then eventName else "on#{eventName}"
	
	@el[listenMethod](eventNameToListenFor, callback)
	return @




