extendTemplate = (currentOpts, newOpts, globalOpts)->
	if globalOpts then globalOptsTransform = options: (opts)-> extend(opts, globalOpts)
	newOpts = parseTree(newOpts, false) if IS.array(newOpts)
	newOpts = newOpts._config if IS.template(newOpts)

	output = extend.deep.notKeys('children').notDeep('relatedInstance').transform(globalOptsTransform).clone(currentOpts, newOpts)
	currentChildren = currentOpts.children
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
						new QuickTemplate(extend.deep.clone(schema, newChildProcessed))

			output.children.push newChildProcessed
	
	
	else if IS.object(newChildren)
		output.children = extendByRef(newChildren, currentChildren, globalOpts)
		remainingNewChildren = newChildren
		
		for ref,newChild of remainingNewChildren
			newChildProcessed = if IS.objectPlain(newChild) and not IS.template(newChild) then newChild else parseTree(newChild)
			output.children.push new QuickTemplate newChildProcessed
			delete remainingNewChildren[ref]
		

	return output


extendByRef = (newChildrenRefs, currentChildren, globalOpts)-> if not currentChildren.length then currentChildren else
	output = []
	
	for currentChild in currentChildren
		newChild = newChildrenRefs[currentChild.ref]
		if newChild
			newChildProcessed = currentChild.extend(newChild, globalOpts)
			delete newChildrenRefs[currentChild.ref]
		
		else if newChild is null
			delete newChildrenRefs[currentChild.ref]
			continue
		
		else
			newChildProcessed = if globalOpts then currentChild.extend(null, globalOpts) else currentChild

		newChildProcessed._config.children = extendByRef(newChildrenRefs, newChildProcessed.children)
		output.push(newChildProcessed)

	return output