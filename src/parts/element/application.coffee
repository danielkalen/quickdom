QuickElement::updateOptions = (options)->
	if IS.object(options) 
		@options = options
		@_normalizeOptions()
		@_applyOptions(@options)
	
	return @


QuickElement::updateStateStyles = (styles)->
	extend.deep.concat @, @_parseStyles(styles)
	return @

QuickElement::updateStateTexts = (texts)->
	extend.deep.concat @, @_parseTexts(texts)
	return @



QuickElement::applyData = (data)->
	if computers = @options.computers
		defaults = @options.defaults
		keys = Object.keys(computers)
		
		for key in keys
			if data and data.hasOwnProperty(key)
				@_runComputer(key, data[key])
			
			else if defaults and defaults.hasOwnProperty(key)
				@_runComputer(key, defaults[key])


	child.applyData(data) for child in @_children
	return


QuickElement::_runComputer = (computer, arg)->
	@options.computers[computer].call(@, arg)