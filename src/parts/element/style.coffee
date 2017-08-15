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
		returnValue = CSS(@el, property, args[1])
		if args.length is 1
			### istanbul ignore next ###
			return if @_inserted then returnValue else if not returnValue then returnValue else ''

	else if IS.object(property)
		keys = Object.keys(property)
		i = -1
		while key=keys[++i]
			value = if typeof property[key] is 'function' then property[key].call(@, @related) else property[key]
			CSS(@el, key, value)

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
		result = computed or @el.style[property] or @_styles.base?[property] or ''
		return if typeof result is 'function' then result.call(@, @related) else result

	return @


QuickElement::styleParsed = (property, skipComputed)->
	parseFloat @styleSafe(property, skipComputed)


QuickElement::recalcStyle = (recalcChildren)->
	activeStyles = @_getStateStyles @_getActiveStates()
	targetStyles = extend.clone.filter(
		(value)-> typeof value is 'function'
	)(@_styles.base, activeStyles...)

	@style(targetStyles)
	
	if recalcChildren
		child.recalcStyle() for child in @_children
	
	return @


QuickElement::currentStateStyle = (property)-> if property
	if @_state.length
		states = @_state.slice()
		i = states.length
		while state = states[--i]
			return @_styles[state][property] if @_styles[state] and IS.defined(@_styles[state][property])

	return @_styles.base[property] if @_styles.base


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


