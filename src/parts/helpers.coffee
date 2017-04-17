helpers = {}

helpers.includes = (target, item)->
	target and target.indexOf(item) isnt -1

helpers.removeItem = (target, item)->
	itemIndex = target.indexOf(item)
	target.splice(itemIndex, 1)  if itemIndex isnt -1
	return target

helpers.normalizeGivenEl = (targetEl)-> switch
	when IS.domNode(targetEl) then QuickDom(targetEl)
	when IS.string(targetEl) then QuickDom.text(targetEl)
	else targetEl


helpers.isStateStyle = (string)->
	string[0] is '$' or string[0] is '@'