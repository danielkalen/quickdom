import quickdom from '../'
import QuickBatch from '../batch'
import IS from '../checks'

export parentsUntil = (filter)->
	_getParents(@, filter)

export parentMatching = (filter)->
	if IS.function(filter) or isRef=IS.string(filter)
		nextParent = @parent
		while nextParent
			if isRef
				return nextParent if nextParent.ref is filter
			else
				return nextParent if filter(nextParent)

			nextParent = nextParent.parent
		
	return

export query = (selector)->
	quickdom @raw.querySelector(selector)

export queryAll = (selector)->
	result = @raw.querySelectorAll(selector)
	output = []; output.push(item) for item in result
	return new QuickBatch(output)



Object.defineProperties QuickElement::,
	'children': get: ()->
		if @el.childNodes.length isnt @_children.length # Re-collect children	
			@_children.length = 0 # Empty out children array
			@_children.push(quickdom(child)) for child in @el.childNodes when child.nodeType < 4

		return @_children

	'elementChildren': get: ()->
		_filterElements(@children)

	'parent': get: ()->
		if (not @_parent or @_parent.el isnt @el.parentNode) and not IS.domDoc(@el.parentNode)
			@_parent = quickdom(@el.parentNode)

		return @_parent


	'parents': get: ()->
		_getParents(@)

	'next': get: ()->
		quickdom(@el.nextSibling)
	
	'nextEl': get: ()->
		quickdom(@el.nextElementSibling)
	
	'nextElAll': get: ()->
		_filterElements(@nextAll)

	'nextAll': get: ()->
		siblings = []
		nextSibling = quickdom(@el.nextSibling)
		while nextSibling
			siblings.push(nextSibling)
			nextSibling = nextSibling.next

		return siblings

	'prev': get: ()->
		quickdom(@el.previousSibling)
	
	'prevEl': get: ()->
		quickdom(@el.previousElementSibling)
	
	'prevElAll': get: ()->
		_filterElements(@prevAll)

	'prevAll': get: ()->
		siblings = []
		prevSibling = quickdom(@el.previousSibling)
		while prevSibling
			siblings.push(prevSibling)
			prevSibling = prevSibling.prev

		return siblings

	'siblings': get: ()->
		@prevAll.reverse().concat(@nextAll)

	'elementSiblings': get: ()->
		_filterElements(@siblings)
	
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



export _getParents = (targetEl, filter)->
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


export _getChildRefs = (target, freshCopy)->
	target._childRefs = {} if freshCopy or not target._childRefs
	refs = target._childRefs
	refs[target.ref] = target if target.ref
	children = target.children

	if children.length
		for child in children
			childRefs = _getChildRefs(child, freshCopy)
			refs[ref] ||= el for ref,el of childRefs

	return refs


export _getIndexByProp = (main, prop)->
	if not parent=main.parent
		return null
	else
		parent.children
			.filter (child)-> child[prop] is main[prop]
			.indexOf(main)


export _filterElements = (array)->
	if not array.length
		return array
	else
		output = []
		output.push(item) for item in array when item.type isnt 'text'
		return output

export default (QuickElement)->
	QuickElement::parentsUntil = parentsUntil
	QuickElement::parentMatching = parentMatching
	QuickElement::query = query
	QuickElement::queryAll = queryAll

quickdom.query = (target)->
	quickdom(document).query(target)

quickdom.queryAll = (target)->
	quickdom(document).queryAll(target)
