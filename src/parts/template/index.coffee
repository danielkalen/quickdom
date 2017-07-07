import './extendTemplate'
import './parseTree'
import './applyData'
import './schema'

class QuickTemplate
	constructor: (config, isTree)->
		@_config = if isTree then parseTree(config) else config
		@_hasComputers = !!@_config.options.computers
		
		if not @_hasComputers and @_config.children.length
			for child in @_config.children when child._config.options.computers
				@_hasComputers = true
				break
	
	extend: (newValues, globalOpts)->
		new QuickTemplate extendTemplate(@_config, newValues, globalOpts)

	spawn: (newValues, globalOpts)->
		if newValues and newValues.data
			data = newValues.data
			newValues = null if Object.keys(newValues).length is 1
		
		if newValues or globalOpts
			opts = extendTemplate(@_config, newValues, globalOpts)
		else
			opts = extend.clone(@_config)
			opts.options = extend.deepOnly('style').clone(opts.options)
	

		element = QuickDom(opts.type, opts.options, opts.children...)

		if @_hasComputers and newValues isnt false
			applyData(element, data)

		return element


### istanbul ignore next ###
QuickTemplate.name ?= 'QuickTemplate'


Object.keys(schema).forEach (key)->
	Object.defineProperty QuickTemplate::, key, get:()-> @_config[key]

Object.defineProperty QuickTemplate::, 'child', get: ()->
	@_childRefs or _getChildRefs(@) # source in /src/parts/element/traversing.coffee








