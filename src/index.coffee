import IS from './checks'
import CSS from 'quickcss'
import QuickElement from './element'
import QuickTemplate from './template'
import QuickWindow from './window'
import QuickBatch from './batch'
import {version} from '../package.json'
import './instance-shortcuts'

export default quickdom = ()->
	args = new Array(arguments.length)
	args[i] = arg for arg,i in arguments
	prevCount = QuickElement.count
	element = quickdom.create(args)
	element._postCreation() if element and element._postCreation and QuickElement.count isnt prevCount
	return element

quickdom.create = (args)-> switch
	when IS.array(args[0])
		return quickdom(args[0]...)
	
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
			children = new Array(argsLength = args.length); i = 1;
			children[i+1] = args[i] while ++i < argsLength

			for child in children
				child = quickdom.text(child) if IS.string(child)
				child = quickdom(child...) if IS.array(child)
				element.append(child) if IS.quickDomEl(child)

		return element

	when args[0] and (IS.domNode(args[0][0]) or IS.domDoc(args[0][0]))
		return quickdom(args[0][0])



quickdom.html = (innerHTML)->
	container = document.createElement('div')
	container.innerHTML = innerHTML
	children = Array::slice.call container.childNodes

	return quickdom.batch(children)


quickdom.isQuickEl = (target)->
	IS.quickDomEl(target)

quickdom.isEl = (target)->
	IS.domEl(target)


quickdom.version = varsion
quickdom.CSS = CSS



