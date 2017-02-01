QuickElement::toTemplate = ()->
	QuickDom.template(@)


QuickElement::clone = ()->
	elClone = @el.cloneNode(false)
	options = extend.clone(@options, {existing:elClone})
	
	newEl = new QuickElement(@type, options)
	newEl.state(activeState, on) for activeState in @_state
	newEl.append(child.clone()) for child in @children
	for eventName, callbacks of @_eventCallbacks
		newEl.on(eventName, callback) for callback in callbacks
	
	return newEl


QuickElement::append = (targetEl)->
	if targetEl
		targetEl = helpers.normalizeGivenEl(targetEl)
		
		if IS.quickDomEl(targetEl)
			prevParent = targetEl.parent
			prevParent._removeChild(targetEl) if prevParent
			@_children.push(targetEl)
			@el.appendChild(targetEl.el)

	return @


QuickElement::appendTo = (targetEl)->
	if targetEl
		targetEl = helpers.normalizeGivenEl(targetEl)
		
		if IS.quickDomEl(targetEl)
			targetEl.append(@)
	
	return @


QuickElement::prepend = (targetEl)->
	if targetEl
		targetEl = helpers.normalizeGivenEl(targetEl)
		
		if IS.quickDomEl(targetEl)
			prevParent = targetEl.parent
			prevParent._removeChild(targetEl) if prevParent
			@_children.unshift(targetEl)
			@el.insertBefore(targetEl.el, @el.firstChild)
	
	return @


QuickElement::prependTo = (targetEl)->
	if targetEl
		targetEl = helpers.normalizeGivenEl(targetEl)
		
		if IS.quickDomEl(targetEl)
			targetEl.prepend(@)

	return @


QuickElement::html = (newValue)->
	if not IS.defined(newValue)
		return @el.innerHTML

	@el.innerHTML = newValue
	return @


QuickElement::text = (newValue)->
	if not IS.defined(newValue)
		return @el.textContent

	@el.textContent = newValue
	return @


QuickElement::after = (targetEl)->
	if targetEl and @parent
		targetEl = helpers.normalizeGivenEl(targetEl)

		if IS.quickDomEl(targetEl)
			myIndex = @parent._children.indexOf(@)
			@parent._children.splice(myIndex+1, 0, targetEl)
			@el.parentNode.insertBefore(targetEl.el, @el.nextSibling)

	return @


QuickElement::insertAfter = (targetEl)->
	if targetEl
		targetEl = helpers.normalizeGivenEl(targetEl)
		
		if IS.quickDomEl(targetEl)
			targetEl.after(@)
	
	return @


QuickElement::before = (targetEl)->
	if targetEl and @parent
		targetEl = helpers.normalizeGivenEl(targetEl)

		if IS.quickDomEl(targetEl)
			myIndex = @parent._children.indexOf(@)
			@parent._children.splice(myIndex, 0, targetEl)
			@el.parentNode.insertBefore(targetEl.el, @el)

	return @


QuickElement::insertBefore = (targetEl)->
	if targetEl
		targetEl = helpers.normalizeGivenEl(targetEl)
		
		if IS.quickDomEl(targetEl)
			targetEl.before(@)
	
	return @


QuickElement::detach = ()->
	@parent?._removeChild(@)
	return @


QuickElement::remove = ()->
	@detach()
	@resetState()
	@_eventCallbacks[eventName].length = 0 for eventName of @_eventCallbacks
	return @


QuickElement::empty = ()->
	@_removeChild(child) for child in @children.slice()
	return @


QuickElement::wrap = (targetEl)->
	if targetEl
		targetEl = helpers.normalizeGivenEl(targetEl)
		currentParent = @parent

		if IS.quickDomEl(targetEl) and targetEl isnt @ and targetEl isnt @parent
			if currentParent
				currentParent._removeChild(@, if not targetEl.parent then targetEl)
			
			targetEl.append(@)

	return @


QuickElement::unwrap = ()->
	parent = @parent
	if parent
		parentChildren = QuickDom.batch(parent.children)
		parentSibling = parent.next
		grandParent = parent.parent
		if grandParent
			parent.detach()

			if parentSibling
				parentChildren.insertBefore(parentSibling)
			else
				parentChildren.appendTo(grandParent)
	
	return @


QuickElement::replace = (targetEl)->
	if targetEl
		targetEl = helpers.normalizeGivenEl(targetEl)
	
		if IS.quickDomEl(targetEl) and targetEl isnt @
			targetEl.detach()
			@parent?._removeChild(@, targetEl)
	
	return @


QuickElement::_removeChild = (targetChild, replacementChild)->
	indexOfChild = @_children.indexOf(targetChild)
	if indexOfChild isnt -1
		if replacementChild
			@el.replaceChild(replacementChild.el, targetChild.el)
			@_children.splice(indexOfChild, 1, replacementChild)
		else
			@el.removeChild(targetChild.el)
			@_children.splice(indexOfChild, 1)
		

	return @












