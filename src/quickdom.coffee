do ()->
	import parts/helpers
	import parts/checks
	import parts/element
	
	QuickDom = (args...)-> switch
		when IS.quickDomEl(args[0])
			return if args[1] then args[0].updateOptions(args[1]) else args[0]
		
		when IS.domNode(args[0])
			if args[0]._quickElement
				return args[0]._quickElement
			
			type = args[0].nodeName.toLowerCase().replace('#', '')
			options = args[1] or {}
			options.existing = args[0]
			return new QuickElement(type, options)


		when IS.string(args[0])			
			type = args[0].toLowerCase()
			if type is 'text'
				options = text: args[1] or ''
			else
				options = if IS.object(args[1]) then args[1] else {}
			
			children = args.slice(2)
			element = new QuickElement(type, options)

			for child in children
				child = QuickDom.text(child) if IS.string(child)
				child.appendTo(element) if IS.quickDomEl(child)

			return element












	import parts/batch
	import parts/shortcuts
	QuickDom.version = import ../.config/.version
	
	### istanbul ignore next ###
	import * as CSS from 'quickcss'
	
	### istanbul ignore next ###
	import * as extend from 'smart-extend'
	
	### istanbul ignore next ###
	if exports?.module?
		module.exports = QuickDom
	else if typeof define is 'function' and define.amd
		define ['quickdom'], ()-> QuickDom
	else
		@Dom = QuickDom