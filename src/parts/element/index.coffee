QuickElement = (@type, @options)->
	@el = @options.existing or
		if @type is 'text' then document.createTextNode(@options.text)
		else if @type[0] is '*' then document.createElementNS(svgNamespace, @type.slice(1))
		else document.createElement(@type)

	if @type is 'text'
		@append = @prepend = @attr = ()->

	@_parent = null
	@_state = []
	@_children = []
	@_insertedCallbacks = []
	@_eventCallbacks = {__refs:{}}
	
	@_normalizeOptions()
	@_applyOptions()
	@_attachStateEvents()
	@_proxyParent()
	return @el._quickElement = @


QuickElement::toJSON = ()->
	output = [@type, extend.clone.keys(allowedOptions)(@options)]
	children = @children
	output.push(child.toJSON()) for child in children
	return output


import ./aliases
import ./traversing
import ./init
import ./events
import ./state-and-style
import ./attributes-and-properties
import ./manipulation
