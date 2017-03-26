mediaQuery = new ()->
	callbacks = []

	window.addEventListener 'resize', ()->
		callback() for callback in callbacks
		return

	parseQueryString = (parseQueryString)->
		source = queryString.match(regEx.source)[1]
		rules =
			queryString
				.match(regEx.rules)[1]
				.split(regEx.ruleSep)
				.map (rule)-> 
					split = rule.split(':')
					key = split[0]
					max = key.slice(0,4) is 'max-'
					min = not max and key.slice(0,4) is 'min-'


	@register = (target, queryString)->
		callbacks.push ()=> @test(target, queryString)
		return


	@test = (target, query)->
		query = parseQueryString(query) if IS.string(query)
		passed = true

		for rule in rules
		
		# target.state(queryString, passed)

	return @




regEx =
	source: /^@(.+?)\(/
	rules: /\((.+?)\)/
	ruleSep: /,\s*/












