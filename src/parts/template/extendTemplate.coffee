module.exports = (currentOpts, newOpts, globalOpts)->
	if globalOpts then globalOptsTransform = options: (opts)-> extend(opts, globalOpts)
	newOpts = parseTree(newOpts, false) if IS.array(newOpts)
	
	output = extend.deep.notKeys('children').notDeep('relatedInstance').transform(globalOptsTransform).clone(currentOpts, newOpts)
	currentChildren = currentOpts.children or []
	newChildren = newOpts?.children or []
	output.children = []
	
	### istanbul ignore next ###
	for index in [0...Math.max(currentChildren.length, newChildren.length)]
		needsTemplateWrap = false
		currentChild = currentChildren[index]
		newChild = newChildren[index]
		newChildProcessed = switch
			when IS.template(newChild) then newChild
			when IS.array(newChild) then needsTemplateWrap = parseTree(newChild, false)
			when IS.string(newChild) then needsTemplateWrap = {type:'text', options:{text:newChild}}
			else needsTemplateWrap = newChild or true

		if needsTemplateWrap
			newChildProcessed = 
				if currentChild
					currentChild.extend(newChildProcessed, globalOpts)
				else
					new QuickTemplate(extend.deep.clone(configSchema, newChildProcessed))

		output.children.push newChildProcessed

	return output





