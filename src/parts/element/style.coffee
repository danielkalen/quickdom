###*
 * Sets/gets the value of a style property. In getter mode the computed property of
 * the style will be returned unless the element is not inserted into the DOM. In
 * webkit browsers all computed properties of a detached node are always an empty
 * string but in gecko they reflect on the actual computed value, hence we need
 * to "normalize" this behavior and make sure that even on gecko an empty string
 * is returned
 * @return {[type]} [description]
###
QuickElement::style = ()->
	return if @type is 'text'
	args = arguments
	
	if IS.string(args[0])
		returnValue = CSS(@el, args[0], args[1])
		if not IS.defined(args[1])
			### istanbul ignore next ###
			return if @_inserted then returnValue else if not returnValue then returnValue else ''

	else if IS.object(args[0])
		CSS @el, extend.allowNull.transform((value)=>
			if typeof value is 'function' then value.call(@, @related) else value
		).clone(args[0])

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
	args = arguments
	computed = @style(property)

	if IS.string(computed)
		computed = 0 if skipComputed
		result = computed or @el.style[args[0]] or @_styles.base?[args[0]] or ''
		return if typeof result is 'function' then result.call(@, @related) else result

	return @


QuickElement::styleParsed = (property)->
	parseFloat @styleSafe(property)


QuickElement::recalcStyle = (recalcChildren)->
	activeStyles = @_getStateStyles @_getActiveStates()
	targetStyles = extend.clone.filter(
		(value)-> typeof value is 'function'
	)(@_styles.base, activeStyles...)

	@style(targetStyles)
	
	if recalcChildren
		child.recalcStyle() for child in @_children
	
	return @


QuickElement::show = (display)->
	display ?= @_styles.base?.display or 'block'
	@style 'display', display

QuickElement::hide = ()->
	@style 'display', 'none'


Object.defineProperties QuickElement::,
	'rect': get: ()-> @el.getBoundingClientRect()
	'width': get: ()-> parseFloat @style('width')
	'height': get: ()-> parseFloat @style('height')
	'orientation': orientationGetter = get: ()-> if @width > @height then 'landscape' else 'portrait'
	'aspectRatio': aspectRatioGetter = get: ()-> @width/@height


