# options = 
# 	'existing':null
# 	'text':null
# 	'style':
# 		'$base': {}
# 	'class': null
# 	'url': null
# 	'href': null
# 	'selected': null
# 	'type': null
# 	'name': null
# 	'id': null
# 	'checked': null
# 	'props': {}
# 	'attrs': {}
# 	'relatedInstance': @
# 	'passStateToChildren': true
# 	'stateTriggers': {}

QuickElement = (@type, @options)->
	@el = @options.existing or if @type is 'text' then document.createTextNode(@options.text) else document.createElement(@type)
	@_parent = null
	@_state = []
	@_children = []
	@_eventCallbacks = {}
	
	@_normalizeOptions()
	@_applyOptions()
	@_attachStateEvents()
	return @el._quickElement = @


Object.defineProperties QuickElement::,
	import ./aliases
	import ./traversing

import ./private
import ./events
import ./state-and-style
import ./attributes-and-properties
import ./manipulation