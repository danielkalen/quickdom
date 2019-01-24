import IS from '../checks'
import extend from 'smart-extend'

export updateOptions = (options)->
	if IS.object(options) 
		@options = options
		@_normalizeOptions()
		@_applyOptions(@options)
	
	return @


export updateStateStyles = (styles)->
	if IS.objectPlain(styles)
		extend.deep.concat @, parsed = @_parseStyles(styles)

		if parsed._styles
			updatedStates = Object.keys(parsed._styles)
			
			for state in updatedStates when @state(state) or state is 'base'
				@_applyRegisteredStyle(@_styles[state], @_getActiveStates(state), false)
		
	return @


export updateStateTexts = (texts)->
	if IS.objectPlain(texts)
		extend.deep.concat @, parsed = @_parseTexts(texts)
	
	return @



export applyData = (data, passThrough)->
	if @options.passDataToChildren and @_children.length and (passThrough ?= true)
		child.applyData(data) for child in @_children

	if computers = @options.computers
		defaults = @options.defaults
		keys = Object.keys(computers)
		
		for key in keys
			if @options.invokeComputersOnce
				continue if @_invokedComputers[key]
				@_invokedComputers[key] = 1
			
			if data and data.hasOwnProperty(key)
				@_runComputer(key, data[key], data)
			
			else if defaults and defaults.hasOwnProperty(key)
				@_runComputer(key, defaults[key], data)
	
	return @


export _runComputer = (computer, arg, data)->
	@options.computers[computer].call(@, arg, data)

export default (QuickElement)->
	QuickElement::updateOptions = updateOptions
	QuickElement::updateStateStyles = updateStateStyles
	QuickElement::updateStateTexts = updateStateTexts
	QuickElement::applyData = applyData
	QuickElement::_runComputer = _runComputer



