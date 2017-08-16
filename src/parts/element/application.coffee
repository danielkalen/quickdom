QuickElement::updateOptions = (options)->
	if IS.object(options) 
		@options = options
		@_normalizeOptions()
		@_applyOptions(@options)
	
	return @


QuickElement::updateStateStyles = (styles)->
	if IS.objectPlain(styles)
		extend.deep.concat @, parsed = @_parseStyles(styles)

		if parsed._styles
			updatedStates = Object.keys(parsed._styles)
			
			for state in updatedStates when @state(state) or state is 'base'
				@_applyRegisteredStyle(@_styles[state], @_getActiveStates(state), false)
		
	return @

QuickElement::updateStateTexts = (texts)->
	if IS.objectPlain(texts)
		extend.deep.concat @, parsed = @_parseTexts(texts)
	
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






