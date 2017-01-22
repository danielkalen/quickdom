do ()->
	import * as extend from smart-extend
	import parts/helpers
	import parts/checks
	import parts/defaults
	
	# QuickDom = (type, @options={}, children...)->
	QuickDom = (args...)->
		switch
			when checkIf.isQuickDom(args[0]) then ;
			when checkIf.isDomEl(args[0])
				@el = args[0]

			when typeof args[0] is 'string'
				@options = args[1] or {}
				@type = args[0].toLowerCase()

				rawEl = if @type is 'text' then document.createTextNode(@options.text) else document.createElement(@type)
				@el = rawEl

				if @options.id then @el.id = @options.id
				if @options.class or @options.className then @el.className = @options.class or @options.className

				@el.id = @options.id if @options.id
				@el.className = @options.class or @options.className if @options.class or @options.className

		return @











	import parts/prototype
	import parts/shortcuts
	QuickDom.version = import ../.config/.version
	
	### istanbul ignore next ###
	if exports?.module?
		module.exports = QuickDom
	else if typeof define is 'function' and define.amd
		define ['quickdom'], ()-> QuickDom
	else
		@Dom = QuickDom