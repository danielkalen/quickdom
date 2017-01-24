QuickElement::on = (eventName, callback)->
	if IS.string(eventName) and IS.function(callback)
		if not @_eventCallbacks[eventName]
			@_eventCallbacks[eventName] = []		
			@_listenTo eventName, (event)=>
				callback.call(@el, event) for callback in @_eventCallbacks[eventName]
				return

		@_eventCallbacks[eventName].push(callback)
	return @




QuickElement::off = (eventName, callback)->
	if not IS.string(eventName)
		@off(eventName) for eventName of @_eventCallbacks
	
	else if @_eventCallbacks[eventName]
		if IS.function(callback)
			cbIndex = @_eventCallbacks[eventName].indexOf(callback)
			@_eventCallbacks[eventName].splice(cbIndex, 1) if cbIndex isnt -1
		else
			@_eventCallbacks[eventName].length = 0

	return @



QuickElement::emit = (eventName, bubbles=true, cancelable=true)->
	if eventName and IS.string(eventName)
		event = document.createEvent('Event')
		event.initEvent(eventName, bubbles, cancelable)
		@el.dispatchEvent(event)

	return @




