import extend from 'smart-extend'
import {element as ALLOWED_OPTIONS} from '../allowedOptions'
svgNamespace = 'http://www.w3.org/2000/svg'

export default class QuickElement
	@count = 0
	constructor: (@type, @options)->
		QuickElement.count++
		@svg = true if @type[0] is '*'
		@el = @options.existing or
			if @type is 'text' then document.createTextNode(if typeof @options.text is 'string' then @options.text else '')
			else if @svg then document.createElementNS(svgNamespace, @type.slice(1))
			else document.createElement(@type)

		if @type is 'text'
			@append = @prepend = @attr = ()->
			# @_texts = {} # defined conditionally

		@_parent = null
		@_styles = {}
		@_state = []
		@_children = []
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
		output = [@type, extend.clone.keys(ALLOWED_OPTIONS)(@options)]
		children = @children
		output.push(child.toJSON()) for child in children
		return output

### istanbul ignore next ###
QuickElement.name ?= 'QuickElement'

import init from './init'
import aliases from './aliases'
import traversing from './traversing'
import events from './events'
import state from './state'
import style from './style'
import manipulation from './manipulation'
import application from './application'
import attributesAndProperties from './attributes-and-properties'
init(QuickElement)
aliases(QuickElement)
traversing(QuickElement)
events(QuickElement)
state(QuickElement)
style(QuickElement)
manipulation(QuickElement)
application(QuickElement)
attributesAndProperties(QuickElement)
