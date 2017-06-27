import './extendTemplate'
import './parseTree'
import './schema'

class QuickTemplate
	constructor: (config, isTree)->
		@_config = if isTree then parseTree(config) else config

	spawn: (newValues, globalOpts)->
		if newValues or globalOpts
			opts = extendTemplate(@_config, newValues, globalOpts)
		else
			opts = extend.clone(@_config)
			opts.options = extend.deepOnly('style').clone(opts.options)
	
		return QuickDom(opts.type, opts.options, opts.children...)
	
	extend: (newValues, globalOpts)->
		new QuickTemplate extendTemplate(@_config, newValues, globalOpts)

### istanbul ignore next ###
QuickTemplate.name ?= 'QuickTemplate'


Object.keys(schema).forEach (key)->
	Object.defineProperty QuickTemplate::, key, get:()-> @_config[key]

Object.defineProperty QuickTemplate::, 'child', get: ()->
	@_childRefs or _getChildRefs(@) # source in /src/parts/element/traversing.coffee








