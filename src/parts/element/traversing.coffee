QuickElement::parentsUntil = (filterFn)->
	getParents(@, filterFn)

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
			@_children.push(QuickDom(child)) for child in @el.childNodes

		return @_children

	'parent': get: ()->
		if not @_parent or @_parent.el isnt @el.parentNode
			@_parent = QuickDom(@el.parentNode)

		return @_parent


	'parents': get: ()->
		getParents(@)

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


getParents = (targetEl, filterFn)->
	filterFn = undefined if not IS.function(filterFn)
	parents = []
	nextParent = targetEl.parent
	while nextParent
		parents.push(nextParent)
		nextParent = nextParent.parent
		nextParent = null if filterFn and filterFn(nextParent)

	return parents





