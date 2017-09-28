QuickElement::attr = (attrName, newValue)->
	if newValue is undefined
		return @el.getAttribute(attrName)
	if newValue is null
		return @el.removeAttribute(attrName)

	@el.setAttribute(attrName, newValue)
	return @



QuickElement::prop = (propName, newValue)->
	if newValue is undefined
		return @el[propName]
	
	@el[propName] = newValue
	return @