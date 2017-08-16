helpers = {}

helpers.includes = (target, item)->
	target and target.indexOf(item) isnt -1

helpers.removeItem = (target, item)->
	itemIndex = target.indexOf(item)
	target.splice(itemIndex, 1)  if itemIndex isnt -1
	return target

helpers.normalizeGivenEl = (targetEl)-> switch
	when IS.string(targetEl) then QuickDom.text(targetEl)
	when IS.domNode(targetEl) then QuickDom(targetEl)
	when IS.template(targetEl) then targetEl.spawn()
	else targetEl


helpers.isStateStyle = (string)->
	string[0] is '$' or string[0] is '@'


helpers.registerStyle = (rule, level)->
	level ||= 0
	cached = styleCache.get(rule, level)
	return cached if cached
	output = {className:[CSS.register(rule, level)], fns:[], rule}
	props = Object.keys(rule)
	
	for prop in props when typeof rule[prop] is 'function'
		output.fns.push [prop, rule[prop]]

	return styleCache.set(rule, output, level)


styleCache = new class
	constructor: ()->
		@keys = Object.create(null)
		@values = Object.create(null)

	get: (key, level)-> if @keys[level]
		index = @keys[level].indexOf(key)
		return @values[level][index] if index isnt -1

	set: (key, value, level)->
		if not @keys[level]
			@keys[level] = []
			@values[level] = []

		@keys[level].push key
		@values[level].push value
		return value

