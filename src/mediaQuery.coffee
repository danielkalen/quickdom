import QuickWindow from './window'
RULE_DEILIMITER = /,\s*/

export default MediaQuery = new ()->
	callbacks = []

	window.addEventListener 'resize', ()->
		callback() for callback in callbacks
		return

	@parseQuery = (target, queryString)->
		querySplit = queryString.split('(')
		source = querySplit[0]
		source = switch source
			when 'window' then QuickWindow
			when 'parent' then target.parent
			when 'self' then target
			else target.parentMatching (parent)-> parent.ref is source.slice(1)

		rules = querySplit[1]
			.slice(0,-1)
			.split(RULE_DEILIMITER)
			.map (rule)-> 
				split = rule.split(':')
				value = parseFloat(split[1])
				value = split[1] if isNaN(value)
				key = split[0]
				keyPrefix = key.slice(0,4)
				max = keyPrefix is 'max-'
				min = not max and keyPrefix is 'min-'
				key = key.slice(4) if max or min
				getter = switch key
					when 'orientation' then ()-> source.orientation
					when 'aspect-ratio' then ()-> source.aspectRatio
					when 'width','height' then ()-> source[key]
					else ()->
						stringValue = source.style(key)
						parsedValue = parseFloat stringValue
						return if isNaN(parsedValue) then stringValue else parsedValue
				
				return {key,value,min,max,getter}

		return {source, rules}


	@register = (target, queryString)->
		query = @parseQuery(target, queryString)
		if query.source
			callbacks.push callback = ()-> testRule(target, query, queryString)
			callback()
		return query


	testRule = (target, query, queryString)->
		passed = true

		for rule in query.rules
			currentValue = rule.getter()
			passed = switch
				when rule.min then currentValue >= rule.value
				when rule.max then currentValue <= rule.value
				else currentValue is rule.value

			break if not passed		
		
		target.state(queryString, passed)

	return @














