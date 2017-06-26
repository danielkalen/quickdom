origDescriptors = 
	'innerWidth': Object.getOwnPropertyDescriptor(window, 'innerWidth')
	'innerHeight': Object.getOwnPropertyDescriptor(window, 'innerHeight')

module.exports = new ()->
	overwritten = false
	current = width:window.innerWidth, height:window.innerHeight
	
	getReal = (dimension)->
		dimension = 'inner'+dimension.replace /\b./, (letter)-> letter.toUpperCase()
		origDescriptors[dimension].get.call(window)

	overwrite = ()-> unless overwritten
		overwritten = true
		
		Object.defineProperty window, 'innerWidth',
			configurable: true
			get: ()-> current.width
			set: (newValue)-> current.width = newValue
		
		Object.defineProperty window, 'innerHeight',
			configurable: true
			get: ()-> current.height
			set: (newValue)-> current.height = newValue
	

	@simulate = (width, height)->
		current.width = width if width
		current.height = height if height
		
		overwrite()
		event = document.createEvent('Event')
		event.initEvent('resize', true, false)
		window.dispatchEvent(event)


	@restore = ()->
		Object.defineProperty window, 'innerWidth', origDescriptors.innerWidth
		Object.defineProperty window, 'innerHeight', origDescriptors.innerHeight


	return @