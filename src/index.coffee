### istanbul ignore next ###
import * as CSS from 'quickcss'
### istanbul ignore next ###
import * as extend from 'smart-extend'
import './parts/allowedOptions'
import './parts/helpers'
import './parts/checks'
import './parts/element'
import './parts/window'
import './parts/mediaQuery'

QuickDom = ()->
	args = new Array(arguments.length)
	args[i] = arg for arg,i in arguments
	prevCount = QuickElement.count
	element = QuickDom.create(args)
	element._postCreation() if element and element._postCreation and QuickElement.count isnt prevCount
	return element

QuickDom.create = (args)-> switch
	when IS.array(args[0])
		return QuickDom(args[0]...)
	
	when IS.template(args[0])
		return args[0].spawn()
	
	when IS.quickDomEl(args[0])
		return if args[1] then args[0].updateOptions(args[1]) else args[0]
	
	when IS.domNode(args[0]) or IS.domDoc(args[0])
		if args[0]._quickElement
			return args[0]._quickElement
		
		type = args[0].nodeName.toLowerCase().replace('#', '')
		options = args[1] or {}
		options.existing = args[0]
		return new QuickElement(type, options)

	when args[0] is window
		return QuickWindow

	when IS.string(args[0])			
		type = args[0].toLowerCase()
		if type is 'text'
			options = if IS.object(args[1]) then args[1] else {text:args[1] or ''}
		else
			options = if IS.object(args[1]) then args[1] else {}
		
		element = new QuickElement(type, options)
		if args.length > 2
			children = []; i = 1; argsLength = args.length; children.push(args[i]) while ++i < argsLength

			for child in children
				child = QuickDom.text(child) if IS.string(child)
				child = QuickDom(child...) if IS.array(child)
				element.append(child) if IS.quickDomEl(child)

		return element

	when args[0] and (IS.domNode(args[0][0]) or IS.domDoc(args[0][0]))
		return QuickDom(args[0][0])


QuickDom.template = (tree)->
	new QuickTemplate(tree, true)


QuickDom.html = (innerHTML)->
	container = document.createElement('div')
	container.innerHTML = innerHTML
	children = Array::slice.call container.childNodes

	return QuickDom.batch(children)

QuickDom.query = (target)->
	QuickDom(document).query(target)

QuickDom.queryAll = (target)->
	QuickDom(document).queryAll(target)

QuickDom.isTemplate = (target)->
	IS.template(target)

QuickDom.isQuickEl = (target)->
	IS.quickDomEl(target)

QuickDom.isEl = (target)->
	IS.domEl(target)




import './parts/batch'
import './parts/template'
import './parts/shortcuts'
QuickDom.version = import '../package.json $ version'
QuickDom.CSS = CSS
module.exports = QuickDom



