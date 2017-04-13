module.exports = (currentOpts, newOpts, globalOpts)->
	if globalOpts then globalOptsTransform = options: (opts)-> extend(opts, globalOpts)
	newOpts = parseTree(newOpts, false) if IS.array(newOpts)

	output = extend.deep.notKeys('children').notDeep('relatedInstance').transform(globalOptsTransform).clone(currentOpts, newOpts)
	currentChildren = currentOpts.children or []
	newChildren = newOpts?.children or []
	output.children = []
	
	### istanbul ignore next ###
	if IS.array(newChildren)
		for index in [0...Math.max(currentChildren.length, newChildren.length)]
			needsTemplateWrap = noChanges = false
			currentChild = currentChildren[index]
			newChild = newChildren[index]
			newChildProcessed = switch
				when IS.template(newChild) then newChild
				when IS.array(newChild) then needsTemplateWrap = parseTree(newChild, false)
				when IS.string(newChild) then needsTemplateWrap = {type:'text', options:{text:newChild}}
				when not newChild and not globalOpts then noChanges = true
				else needsTemplateWrap = newChild or true


			if noChanges
				newChildProcessed = currentChild
			
			else if needsTemplateWrap
				newChildProcessed = 
					if currentChild
						currentChild.extend(newChildProcessed, globalOpts)
					else
						new QuickTemplate(extend.deep.clone(configSchema, newChildProcessed))

			output.children.push newChildProcessed
	
	
	else if IS.object(newChildren)
		output.children = extendByRef(newChildren, currentChildren, globalOpts)
		

	return output


extendByRef = (newChildrenRefs, currentChildren, globalOpts)-> if not currentChildren.length then currentChildren else
	output = []
	
	for currentChild in currentChildren
		if newChild=newChildrenRefs[currentChild.ref]
			newChildProcessed = currentChild.extend(newChild, globalOpts)
		else
			newChildProcessed = if globalOpts then currentChild.extend(null, globalOpts) else currentChild

		newChildProcessed._config.children = theNewChildren = extendByRef(newChildrenRefs, newChildProcessed.children)
		output.push(newChildProcessed)

	return output




