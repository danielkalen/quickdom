pholderRegex = /\{\{.+?\}\}/g
configSchema = 
	type: 'div'
	options: {}
	children: []

QuickTemplate = (config, isTree)->
	@_config = if isTree then parseTree(config) else config
	return @


Object.keys(configSchema).forEach (key)->
	Object.defineProperty QuickTemplate::, key, get:()-> @_config[key]


QuickTemplate::spawn = (newValues)->
	opts = extendOptions(@_config, newValues)
	args = [opts.type, opts.options]
	args = args.concat(opts.children)
	return QuickDom.apply(null, args)


QuickTemplate::extend = (newValues)->
	new QuickTemplate extendOptions(@_config, newValues)


extendOptions = (currentOpts, newOpts)->
	output = extend.deep.notKeys('children').clone(currentOpts, newOpts)
	currentChildren = currentOpts.children or []
	newChildren = newOpts?.children or []
	output.children = []
	### istanbul ignore next ###
	for index in [0...Math.max(currentChildren.length, newChildren.length)]
		currentChild = currentChildren[index]
		newChild = newChildren[index]
		newChild = {type:'text', options:{text:newChild}} if IS.string(newChild)
		if currentChild
			output.children.push currentChild.extend(newChild)
		else
			output.children.push new QuickTemplate(extend.deep.clone(configSchema, newChild))

	return output




parseTree = (tree)-> switch
	when IS.array(tree)
		output = {}

		if not IS.string(tree[0])
			throwParseError('type', 'string', tree[0])
		else
			output.type = tree[0]
		
		if tree.length > 1 and not IS.object(tree[1]) and tree[1] isnt null
			throwParseError('options', 'object', tree[1])
		else
			output.options = if tree[1] then extend.deep.clone(tree[1]) else null

		output.children = tree.slice(2).map(QuickDom.template)
		return output


	when IS.string(tree) or IS.domText(tree)
		type:'text', options:{text: tree.textContent or tree}

	when IS.domEl(tree)
		type: tree.nodeName.toLowerCase()
		options: extend.clone.keys(allowedTemplateOptions)(tree)
		children: [].map.call(tree.childNodes, QuickDom.template)

	when IS.quickDomEl(tree)
		type: tree.type
		options: extend.clone.deep.notKeys('relatedInstance')(tree.options)
		children: tree.children.map(QuickDom.template)

	else
		throwParseError('template', '(array || string || domEl || quickDomEl)', tree)






throwParseError = (label, expected, received)->
	throw new Error "Template Parse Error: expected #{expected} for #{label}, got #{String(received)}"



