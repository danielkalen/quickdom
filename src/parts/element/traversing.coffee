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
		parents = []
		nextParent = @parent
		while nextParent
			parents.push(nextParent)
			nextParent = nextParent.parent

		return parents


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



