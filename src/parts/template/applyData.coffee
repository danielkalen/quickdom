applyData = (element, data)->
	if computers = element.options.computers
		defaults = element.options.defaults
		keys = Object.keys(computers)
		
		for key in keys
			if data and data.hasOwnProperty(key)
				computers[key].call(element, data[key])
			
			else if defaults and defaults.hasOwnProperty(key)
				computers[key].call(element, defaults[key])


	applyData(child, data) for child in element._children
	return