class QuickBatch
	constructor: (elements, @returnResults)->
		@elements = elements.map (el)-> QuickDom(el)

	reverse: ()->
		@elements = @elements.reverse()
		return @

	return: (returnNext)->
		if returnNext
			@returnResults = true
			return @
		else
			return @lastResults

QuickBatch.name ?= 'QuickBatch'



Object.keys(QuickElement::).concat('css', 'replaceWith', 'html', 'text').forEach (method)->
	QuickBatch::[method] = (newValue)->
		results = @lastResults = for element in @elements
			if method is 'html' or method is 'text'
				if newValue then element[method] = newValue else element[method]
			else
				element[method](arguments...)
		
		return if @returnResults then results else @


QuickDom.batch = (elements, returnResults)->
	if not IS.iterable(elements)
		throw new Error("Batch: expected an iterable, got #{String(elements)}")
	else if not elements.length
		throw new Error("Batch: expected a non-empty element collection")

	return new QuickBatch(elements, returnResults)


