QuickElement::attr = (attrName, newValue)-> switch newValue
	when undefined then @el.getAttribute(attrName)
	when null then @el.removeAttribute(attrName)
	else
		@el.setAttribute(attrName, newValue)
		return @



QuickElement::prop = (propName, newValue)-> switch newValue
	when undefined then @el[propName]
	else
		@el[propName] = newValue
		return @