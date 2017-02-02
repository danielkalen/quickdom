QuickElement = (@type, @options)->
	@el = @options.existing or
		if @type is 'text' then document.createTextNode(@options.text)
		else if @type[0] is '*' then document.createElementNS(svgNamespace, @type.slice(1))
		else document.createElement(@type)

	@_parent = null
	@_state = []
	@_children = []
	@_insertedCallbacks = []
	@_eventCallbacks = {}
	
	@_normalizeOptions()
	@_applyOptions()
	@_attachStateEvents()
	return @el._quickElement = @


import ./aliases
import ./traversing
import ./private
import ./events
import ./state-and-style
import ./attributes-and-properties
import ./manipulation