import quickdom from '../'
import QuickElement from './'
import IS from '../checks'
import {includes, normalizeElementArg as normalizeElement} from '../helpers'
import extend from 'smart-extend'

export toTemplate = ()->
	quickdom.template(@)


export clone = ()->
	elClone = @el.cloneNode(false)
	options = extend.clone(@options, {existing:elClone})
	
	newEl = new QuickElement(@type, options)
	newEl.state(activeState, on) for activeState in @_state
	newEl.append(child.clone()) for child in @children
	for eventName, callbacks of @_eventCallbacks
		newEl.on(eventName, callback) for callback in callbacks
	
	return newEl


export append = (targetEl)->
	if targetEl
		targetEl = normalizeElement(targetEl)
		
		if IS.quickDomEl(targetEl)
			prevParent = targetEl.parent
			prevParent._removeChild(targetEl) if prevParent
			@_children.push(targetEl)
			@el.appendChild(targetEl.el)
			targetEl._refreshParent() # Force re-fresh targetEl._parent value to trigger inserted callback

	return @


export appendTo = (targetEl)->
	if targetEl
		targetEl = normalizeElement(targetEl)
		
		if IS.quickDomEl(targetEl)
			targetEl.append(@)
	
	return @


export prepend = (targetEl)->
	if targetEl
		targetEl = normalizeElement(targetEl)
		
		if IS.quickDomEl(targetEl)
			prevParent = targetEl.parent
			prevParent._removeChild(targetEl) if prevParent
			@_children.unshift(targetEl)
			@el.insertBefore(targetEl.el, @el.firstChild)
			targetEl._refreshParent() # Force re-fresh targetEl._parent value to trigger inserted callback
	
	return @


export prependTo = (targetEl)->
	if targetEl
		targetEl = normalizeElement(targetEl)
		
		if IS.quickDomEl(targetEl)
			targetEl.prepend(@)

	return @


export after = (targetEl)->
	if targetEl and @parent
		targetEl = normalizeElement(targetEl)

		if IS.quickDomEl(targetEl)
			myIndex = @parent._children.indexOf(@)
			@parent._children.splice(myIndex+1, 0, targetEl)
			@el.parentNode.insertBefore(targetEl.el, @el.nextSibling)
			targetEl._refreshParent() # Force re-fresh targetEl._parent value to trigger inserted callback

	return @


export insertAfter = (targetEl)->
	if targetEl
		targetEl = normalizeElement(targetEl)
		
		if IS.quickDomEl(targetEl)
			targetEl.after(@)
	
	return @


export before = (targetEl)->
	if targetEl and @parent
		targetEl = normalizeElement(targetEl)

		if IS.quickDomEl(targetEl)
			myIndex = @parent._children.indexOf(@)
			@parent._children.splice(myIndex, 0, targetEl)
			@el.parentNode.insertBefore(targetEl.el, @el)
			targetEl._refreshParent() # Force re-fresh targetEl._parent value to trigger inserted callback

	return @


export insertBefore = (targetEl)->
	if targetEl
		targetEl = normalizeElement(targetEl)
		
		if IS.quickDomEl(targetEl)
			targetEl.before(@)
	
	return @


export detach = ()->
	@parent?._removeChild(@)
	return @


export remove = ()->
	@detach()
	@resetState()
	if @_eventCallbacks
		@_eventCallbacks[eventName].length = 0 for eventName of @_eventCallbacks
	return @


export empty = ()->
	@_removeChild(child) for child in @children.slice()
	return @


export wrap = (targetEl)->
	if targetEl
		targetEl = normalizeElement(targetEl)
		currentParent = @parent

		if IS.quickDomEl(targetEl) and targetEl isnt @ and targetEl isnt @parent
			if currentParent
				currentParent._removeChild(@, if not targetEl.parent then targetEl)
			
			targetEl.append(@)

	return @


export unwrap = ()->
	parent = @parent
	if parent
		parentChildren = quickdom.batch(parent.children)
		parentSibling = parent.next
		grandParent = parent.parent
		if grandParent
			parent.detach()

			if parentSibling
				parentChildren.insertBefore(parentSibling)
			else
				parentChildren.appendTo(grandParent)
	
	return @


export replace = (targetEl)->
	if targetEl
		targetEl = normalizeElement(targetEl)
	
		if IS.quickDomEl(targetEl) and targetEl isnt @
			targetEl.detach()
			@parent?._removeChild(@, targetEl)
			targetEl._refreshParent() # Force re-fresh targetEl._parent value to trigger inserted callback
	
	return @


export hasClass = (target)->
	includes(@classList, target)


export addClass = (target)->
	classList = @classList
	targetIndex = classList.indexOf(target)

	if targetIndex is -1
		classList.push(target)
		@className = if classList.length > 1 then classList.join(' ') else classList[0]

	return @


export removeClass = (target)->
	classList = @classList
	targetIndex = classList.indexOf(target)
	
	if targetIndex isnt -1
		classList.splice(targetIndex, 1)
		@className = if classList.length then classList.join(' ') else ''

	return @


export toggleClass = (target)->
	if @hasClass(target)
		@removeClass(target)
	else
		@addClass(target)

	return @


export setRef = (target)->
	@ref = @options.ref = target
	@attr 'data-ref', target
	return @


export _refreshParent = ()->
	@parent


export _removeChild = (targetChild, replacementChild)->
	indexOfChild = @children.indexOf(targetChild)
	if indexOfChild isnt -1
		if replacementChild
			@el.replaceChild(replacementChild.el, targetChild.el)
			@_children.splice(indexOfChild, 1, replacementChild)
		else
			@el.removeChild(targetChild.el)
			@_children.splice(indexOfChild, 1)
		

	return @


export default (QuickElement)->
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



	QuickElement::toTemplate = toTemplate
	QuickElement::clone = clone
	QuickElement::append = append
	QuickElement::appendTo = appendTo
	QuickElement::prepend = prepend
	QuickElement::prependTo = prependTo
	QuickElement::after = after
	QuickElement::insertAfter = insertAfter
	QuickElement::before = before
	QuickElement::insertBefore = insertBefore
	QuickElement::detach = detach
	QuickElement::remove = remove
	QuickElement::empty = empty
	QuickElement::wrap = wrap
	QuickElement::unwrap = unwrap
	QuickElement::replace = replace
	QuickElement::hasClass = hasClass
	QuickElement::addClass = addClass
	QuickElement::removeClass = removeClass
	QuickElement::toggleClass = toggleClass
	QuickElement::setRef = setRef
	QuickElement::_refreshParent = _refreshParent
	QuickElement::_removeChild = _removeChild



