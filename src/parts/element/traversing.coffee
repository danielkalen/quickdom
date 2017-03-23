QuickElement::parentsUntil = (filterFn)->
	_getParents(@, filterFn)

QuickElement::parentMatching = (filterFn)-> if IS.function(filterFn)
	nextParent = @parent
	while nextParent
		return nextParent if filterFn(nextParent)
		nextParent = nextParent.parent
	
	return


Object.defineProperties QuickElement::,
	'children': get: ()->
		if @el.childNodes.length isnt @_children.length # Re-collect children	
			@_children.length = 0 # Empty out children array
			@_children.push(QuickDom(child)) for child in @el.childNodes when child.nodeType < 4

		return @_children

	'parent': get: ()->
		if (not @_parent or @_parent.el isnt @el.parentNode) and not IS.domDoc(@el.parentNode)
			@_parent = QuickDom(@el.parentNode)

		return @_parent


	'parents': get: ()->
		_getParents(@)

	'next': get: ()->
		QuickDom(@el.nextSibling)

	'prev': get: ()->
		QuickDom(@el.previousSibling)

	'nextAll': get: ()->
		siblings = []
		nextSibling = QuickDom(@el.nextSibling)
		while nextSibling
			siblings.push(nextSibling)
			nextSibling = nextSibling.next

		return siblings

	'prevAll': get: ()->
		siblings = []
		prevSibling = QuickDom(@el.previousSibling)
		while prevSibling
			siblings.push(prevSibling)
			prevSibling = prevSibling.prev

		return siblings

	'siblings': get: ()->
		@prevAll.reverse().concat(@nextAll)
	
	'child': get: ()->
		@_childRefs or _getChildRefs(@)

	'childf': get: ()->
		_getChildRefs(@, true)


_getParents = (targetEl, filterFn)->
	filterFn = undefined if not IS.function(filterFn)
	parents = []
	nextParent = targetEl.parent
	while nextParent
		parents.push(nextParent)
		nextParent = nextParent.parent
		nextParent = null if filterFn and filterFn(nextParent)

	return parents


_getChildRefs = (target, freshCopy)->
	target._childRefs = {} if freshCopy or not target._childRefs
	refs = target._childRefs
	refs[target.ref] = target if target.ref

	if target.children.length
		extend target._childRefs, target._children.map((child)-> _getChildRefs(child, freshCopy))...

	return target._childRefs





