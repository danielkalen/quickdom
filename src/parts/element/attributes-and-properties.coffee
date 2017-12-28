QuickElement::attr = (target, newValue)->
	if arguments.length is 1
		if typeof target is 'string'
			return @el.getAttribute(target)
	
		if IS.object(target)
			keys = Object.keys(target); i = -1
			@attr(key, target[key]) while key=keys[++i]

	else if newValue is null
		return @el.removeAttribute(target)

	else
		@el.setAttribute(target, newValue)
	
	return @



QuickElement::prop = (target, newValue)->
	if arguments.length is 1
		if typeof target is 'string'
			return @el[target]
	
		if IS.object(target)
			keys = Object.keys(target); i = -1
			@prop(key, target[key]) while key=keys[++i]
	
	else
		@el[target] = newValue
		
	return @