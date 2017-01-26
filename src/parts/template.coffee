pholderRegex = /\{\{.+?\}\}/g
QuickTemplate = (tree)->
	@_parsed = parseTree(tree)
	return @


QuickTemplateProto = QuickTemplate::
Object.defineProperties QuickTemplateProto,
	type: get: ()-> @_parsed.type
	options: get: ()-> @_parsed.options
	children: get: ()-> @_parsed.children


QuickTemplate::spawn = ()->
	args = [@type, extend.clone.deep(@options)]
	args = args.concat(@children)
	return QuickDom.apply(null, args)


QuickTemplate::extend = (newValues, isReplaceValues)->
	if isReplaceValues and newValues
		transformFn = (value)->
			if typeof value isnt 'string'
				return value
			else value.replace pholderRegex, (pholder)-> newValues[pholder.slice(2,-2)] or pholder
	
	clone = Object.create(QuickTemplateProto)
	clone._parsed = extend.deep.clone.notKeys(['children']).transform(transformFn)(@_parsed, newValues)
	clone._parsed.children = @children?.map (child)-> child.extend(newValues if isReplaceValues, isReplaceValues)
	return clone




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
		options: extend.clone.deep.notKeys(['relatedInstance'])(tree.options)
		children: tree.children.map(QuickDom.template)

	else
		throwParseError('template', '(array || string || domEl || quickDomEl)', tree)






throwParseError = (label, expected, received)->
	throw new Error "Template Parse Error: expected #{expected} for #{label}, got #{String(received)}"



