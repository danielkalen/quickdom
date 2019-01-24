import IS from './checks'
import QuickElement from './element'
import quickdom from './quickdom'


export default class QuickBatch
	constructor: (elements, @returnResults)->
		@elements = elements.map (el)-> quickdom(el)

	reverse: ()->
		@elements = @elements.reverse()
		return @

	return: (returnNext)->
		if returnNext
			@returnResults = true
			return @
		else
			return @lastResults

### istanbul ignore next ###
QuickBatch.name ?= 'QuickBatch'



Object.keys(QuickElement::).concat('css', 'replaceWith', 'html', 'text').forEach (method)->
	QuickBatch::[method] = (newValue)->
		results = @lastResults = for element in @elements
			if method is 'html' or method is 'text'
				if newValue then element[method] = newValue else element[method]
			else
				element[method](arguments...)
		
		return if @returnResults then results else @


quickdom.batch = (elements, returnResults)->
	if not IS.iterable(elements)
		throw new Error("Batch: expected an iterable, got #{String(elements)}")

	return new QuickBatch(elements, returnResults)


