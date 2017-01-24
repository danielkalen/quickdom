QuickBatch = (@elements, @returnResults)->
	@elements = @elements.map (el)-> QuickDom(el)
	return @

QuickBatch::reverse = ()->
	@elements = @elements.reverse()
	return @

QuickBatch::return = (returnNext)->
	if returnNext
		@returnResults = true
		return @
	else
		return @lastResults


Object.keys(QuickElement::).concat('css', 'replaceWith').forEach (method)->
	QuickBatch::[method] = ()->
		results = @lastResults = (element[method].apply(element, arguments) for element in @elements)
		return if @returnResults then results else @



QuickDom.batch = (elements, returnResults)->
	if not IS.iterable(elements)
		throw new Error("Batch: expected an iterable, got #{String(elements)}")
	else if not elements.length
		throw new Error("Batch: expected a non-empty element collection")

	return new QuickBatch(elements, returnResults)


