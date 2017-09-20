QuickElement::parentsUntil = (filter)->
	_getParents(@, filter)

QuickElement::parentMatching = (filter)->
	if IS.function(filter) or isRef=IS.string(filter)
		nextParent = @parent
		while nextParent
			if isRef
				return nextParent if nextParent.ref is filter
			else
				return nextParent if filter(nextParent)

			nextParent = nextParent.parent
		
	return

QuickElement::query = (selector)->
	QuickDom @raw.querySelector(selector)

QuickElement::queryAll = (selector)->
	result = @raw.querySelectorAll(selector)
	output = []; output.push(item) for item in result
	return new QuickBatch(output)



Object.defineProperties QuickElement::,
	'children': get: ()->
		if @el.childNodes.length isnt @_children.length # Re-collect children	
			@_children.length = 0 # Empty out children array
			@_children.push(QuickDom(child)) for child in @el.childNodes when child.nodeType < 4

		return @_children

	'elementChildren': get: ()->
		_filterByType(@children, 'text', 0)

	'parent': get: ()->
		if (not @_parent or @_parent.el isnt @el.parentNode) and not IS.domDoc(@el.parentNode)
			@_parent = QuickDom(@el.parentNode)

		return @_parent


	'parents': get: ()->
		_getParents(@)

	'next': get: ()->
		QuickDom(@el.nextSibling)
	
	'nextEl': get: ()->
		QuickDom(@el.nextElementSibling)
	
	'nextElAll': get: ()->
		_filterByType(@nextAll, 'text', 0)

	'nextAll': get: ()->
		siblings = []
		nextSibling = QuickDom(@el.nextSibling)
		while nextSibling
			siblings.push(nextSibling)
			nextSibling = nextSibling.next

		return siblings

	'prev': get: ()->
		QuickDom(@el.previousSibling)
	
	'prevEl': get: ()->
		QuickDom(@el.previousElementSibling)
	
	'prevElAll': get: ()->
		_filterByType(@prevAll, 'text', 0)

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

	'firstChild': get: ()->
		@children[0]

	'lastChild': get: ()->
		children = @children
		children[children.length-1]

	'index': get: ()->
		if not parent=@parent
			return null
		else
			parent.children.indexOf(@)

	'indexType': get: ()->
		_getIndexByProp(@, 'type')

	'indexRef': get: ()->
		_getIndexByProp(@, 'ref')



_getParents = (targetEl, filter)->
	filter = undefined if not IS.function(filter) and not isRef=IS.string(filter)
	parents = []
	nextParent = targetEl.parent
	while nextParent
		parents.push(nextParent)
		nextParent = nextParent.parent
		if isRef
			nextParent = null if nextParent and nextParent.ref is filter
		else if filter
			nextParent = null if filter(nextParent)

	return parents


_getChildRefs = (target, freshCopy)->
	target._childRefs = {} if freshCopy or not target._childRefs
	refs = target._childRefs
	refs[target.ref] = target if target.ref
	children = target.children

	if children.length
		for child in children
			childRefs = _getChildRefs(child, freshCopy)
			refs[ref] ||= el for ref,el of childRefs

	return refs


_getIndexByProp = (main, prop)->
	if not parent=main.parent
		return null
	else
		parent.children
			.filter (child)-> child[prop] is main[prop]
			.indexOf(main)


_filterByType = (array, type, match)->
	if not array.length
		return array
	else
		output = []
		for item in array
			continue if (match and item.type isnt type) or (not match and item.type is type)
			output.push(item)

		return output



