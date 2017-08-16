###*
 * Sets/gets the value of a style property. In getter mode the computed property of
 * the style will be returned unless the element is not inserted into the DOM. In
 * webkit browsers all computed properties of a detached node are always an empty
 * string but in gecko they reflect on the actual computed value, hence we need
 * to "normalize" this behavior and make sure that even on gecko an empty string
 * is returned
 * @return {[type]} [description]
###
QuickElement::style = (property)->
	return if @type is 'text'
	args = arguments
	
	if IS.string(property)
		value = if typeof args[1] is 'function' then args[1].call(@, @related) else args[1]
		value = CSS.UNSET if args[1] is null and IS.defined(@currentStateStyle(property)) and not IS.function(@currentStateStyle(property))
		result = CSS(@el, property, value)
		
		if args.length is 1
			### istanbul ignore next ###
			return if @_inserted then result else if not result then result else ''

	else if IS.object(property)
		keys = Object.keys(property); i = -1
		@style(key, property[key]) while key=keys[++i]

	return @


###*
 * Attempts to resolve the value for a given property in the following order if each one isn't a valid value:
 * 1. from computed style (for dom-inserted els)
 * 2. from DOMElement.style object (for non-inserted els; if options.styleAfterInsert, will only have state styles)
 * 3. from provided style options
 * (for non-inserted els; checking only $base since state styles will always be applied to the style object even for non-inserted)
###
QuickElement::styleSafe = (property, skipComputed)->
	return if @type is 'text'
	sample = @el.style[property]

	if IS.string(sample) or IS.number(sample)
		computed = if skipComputed then 0 else @style(property)
		result = computed or @el.style[property] or @currentStateStyle(property) or ''
		return if typeof result is 'function' then result.call(@, @related) else result

	return @


QuickElement::styleParsed = (property, skipComputed)->
	parseFloat @styleSafe(property, skipComputed)


QuickElement::recalcStyle = (recalcChildren)->
	targetStyles = @_resolveFnStyles(@_getActiveStates(), true)

	@style(targetStyles)
	
	if recalcChildren
		child.recalcStyle() for child in @_children
	
	return @


QuickElement::currentStateStyle = (property)-> if property
	if @_state.length
		states = @_state.slice()
		states.push(@_stateShared...) if @_stateShared and @_stateShared.length
		i = states.length
		while state = states[--i]
			return @_styles[state].rule[property] if @_styles[state] and IS.defined(@_styles[state].rule[property])

	return @_styles.base.rule[property] if @_styles.base


QuickElement::hide = ()->
	@style 'display', 'none'


QuickElement::show = (display)->
	if not display
		display = @currentStateStyle('display')
		display = 'block' if display is 'none' or not display
	
	display ?= @_styles.base?.display or 'block'
	@style 'display', display



Object.defineProperties QuickElement::,
	'orientation': orientationGetter = get: ()-> if @width > @height then 'landscape' else 'portrait'
	'aspectRatio': aspectRatioGetter = get: ()-> @width/@height
	'rect': get: ()-> @el.getBoundingClientRect()
	'width':
		get: ()-> parseFloat @style('width')
		set: (value)-> @style 'width', value
	'height':
		get: ()-> parseFloat @style('height')
		set: (value)-> @style 'height', value


