class QuickElement
	constructor: (@type, @options)->
		@el = @options.existing or
			if @type is 'text' then document.createTextNode(@options.text)
			else if @type[0] is '*' then document.createElementNS(svgNamespace, @type.slice(1))
			else document.createElement(@type)

		if @type is 'text'
			@append = @prepend = @attr = ()->

		@_parent = null
		@_styles = {}
		@_state = []
		@_children = []
		@_insertedCallbacks = []
		# @_providedStates = []				# defined conditionally
		# @_providedStatesShared = []		# defined conditionally
		# @_eventCallbacks = {__refs:{}}	# defined conditionally
		
		@_normalizeOptions()
		@_applyOptions()
		@_attachStateEvents()
		@_proxyParent()
		@_refreshParent() if @options.existing
		@el._quickElement = @


	toJSON: ()->
		output = [@type, extend.clone.keys(allowedOptions)(@options)]
		children = @children
		output.push(child.toJSON()) for child in children
		return output

### istanbul ignore next ###
QuickElement.name ?= 'QuickElement'

import './aliases'
import './traversing'
import './init'
import './events'
import './state'
import './style'
import './attributes-and-properties'
import './manipulation'
