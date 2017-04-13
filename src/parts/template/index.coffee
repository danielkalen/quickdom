extendTemplate = import './extendTemplate'
parseTree = import './parseTree'
pholderRegex = /\{\{.+?\}\}/g
configSchema = 
	type: 'div'
	ref: undefined
	options: {}
	children: []

QuickTemplate = (config, isTree)->
	@_config = if isTree then parseTree(config) else config
	return @


Object.keys(configSchema).forEach (key)->
	Object.defineProperty QuickTemplate::, key, get:()-> @_config[key]

Object.defineProperty QuickTemplate::, 'child', get: ()->
	@_childRefs or _getChildRefs(@) # source in /src/parts/element/traversing.coffee


QuickTemplate::spawn = (newValues, globalOpts)->
	opts = extendTemplate(@_config, newValues, globalOpts)
	return QuickDom(opts.type, opts.options, opts.children...)


QuickTemplate::extend = (newValues, globalOpts)->
	new QuickTemplate extendTemplate(@_config, newValues, globalOpts)









