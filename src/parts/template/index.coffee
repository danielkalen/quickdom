import './extendTemplate'
import './parseTree'
import './schema'

class QuickTemplate
	constructor: (config, isTree)->
		return config if IS.template(config)
		config = if isTree then parseTree(config) else config
		extend @, config
	
	extend: (newValues, globalOpts)->
		new QuickTemplate extendTemplate(@, newValues, globalOpts)

	spawn: (newValues, globalOpts)->
		if newValues and newValues.data
			data = newValues.data
			newValues = null if Object.keys(newValues).length is 1
		
		if newValues or globalOpts
			{options, children, type} = extendTemplate(@, newValues, globalOpts)
		else
			{options, children, type} = @
			options = extend.clone(options)

		
		element = QuickDom.create([type, options])
		element._postCreation(data)
		
		if children
			data = if options.passDataToChildren then data or options.data
			for child in children
				element.append child.spawn({data})

		return element


### istanbul ignore next ###
QuickTemplate.name ?= 'QuickTemplate'


Object.defineProperty QuickTemplate::, 'child', get: ()->
	@_childRefs or _getChildRefs(@) # source in /src/parts/element/traversing.coffee








