import './extendTemplate'
import './parseTree'
import './schema'

class QuickTemplate
	constructor: (config, isTree)->
		return config if IS.template(config)
		config = if isTree then parseTree(config) else config
		extend @, config
		@_hasComputers = !!@options.computers

		if not @_hasComputers and @children.length
			for child in @children when child._hasComputers or child.options.computers
				@_hasComputers = true
				break
	
	extend: (newValues, globalOpts)->
		new QuickTemplate extendTemplate(@, newValues, globalOpts)

	spawn: (newValues, globalOpts)->
		if newValues and newValues.data
			data = newValues.data
			newValues = null if Object.keys(newValues).length is 1
		
		if newValues or globalOpts
			opts = extendTemplate(@, newValues, globalOpts)
		else
			opts = extend.clone(@)
			opts.options = extend.clone(opts.options)
	

		element = QuickDom(opts.type, opts.options, opts.children...)

		if @_hasComputers
			data ||= opts.options.data
			if newValues isnt false
				element.applyData(data)
			if element.options.computers?._init
				element._runComputer('_init', data)

		return element


### istanbul ignore next ###
QuickTemplate.name ?= 'QuickTemplate'


Object.defineProperty QuickTemplate::, 'child', get: ()->
	@_childRefs or _getChildRefs(@) # source in /src/parts/element/traversing.coffee








