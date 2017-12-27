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
			targetEl._refreshParent() # Force re-fresh targetEl._parent value to trigger inserted callback

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
			targetEl._refreshParent() # Force re-fresh targetEl._parent value to trigger inserted callback
	
	return @


QuickElement::prependTo = (targetEl)->
	if targetEl
		targetEl = helpers.normalizeGivenEl(targetEl)
		
		if IS.quickDomEl(targetEl)
			targetEl.prepend(@)

	return @


QuickElement::after = (targetEl)->
	if targetEl and @parent
		targetEl = helpers.normalizeGivenEl(targetEl)

		if IS.quickDomEl(targetEl)
			myIndex = @parent._children.indexOf(@)
			@parent._children.splice(myIndex+1, 0, targetEl)
			@el.parentNode.insertBefore(targetEl.el, @el.nextSibling)
			targetEl._refreshParent() # Force re-fresh targetEl._parent value to trigger inserted callback

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
			targetEl._refreshParent() # Force re-fresh targetEl._parent value to trigger inserted callback

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
	if @_eventCallbacks
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
			targetEl._refreshParent() # Force re-fresh targetEl._parent value to trigger inserted callback
	
	return @


QuickElement::hasClass = (target)->
	helpers.includes(@classList, target)


QuickElement::addClass = (target)->
	classList = @classList
	targetIndex = classList.indexOf(target)

	if targetIndex is -1
		classList.push(target)
		@className = if classList.length > 1 then classList.join(' ') else classList[0]

	return @


QuickElement::removeClass = (target)->
	classList = @classList
	targetIndex = classList.indexOf(target)
	
	if targetIndex isnt -1
		classList.splice(targetIndex, 1)
		@className = if classList.length then classList.join(' ') else ''

	return @


QuickElement::toggleClass = (target)->
	if @hasClass(target)
		@removeClass(target)
	else
		@addClass(target)

	return @


QuickElement::setRef = (target)->
	@ref = @options.ref = target
	@attr 'data-ref', target
	return @


QuickElement::_refreshParent = ()->
	@parent


QuickElement::_removeChild = (targetChild, replacementChild)->
	indexOfChild = @children.indexOf(targetChild)
	if indexOfChild isnt -1
		if replacementChild
			@el.replaceChild(replacementChild.el, targetChild.el)
			@_children.splice(indexOfChild, 1, replacementChild)
		else
			@el.removeChild(targetChild.el)
			@_children.splice(indexOfChild, 1)
		

	return @


Object.defineProperties QuickElement::,
	'html':
		get: ()-> @el.innerHTML
		set: (newValue)-> @el.innerHTML = newValue
	
	'text':
		get: ()-> @el.textContent
		set: (newValue)-> @el.textContent = newValue

	'className':
		get: ()-> if @svg then (@attr('class') or '') else @raw.className
		set: (newValue)-> if @svg then @attr('class', newValue) else @raw.className = newValue

	'classList':
		get: ()->
			list = @className.split(/\s+/)
			list.pop() if list[list.length-1] is ''
			list.shift() if list[0] is ''
			return list







