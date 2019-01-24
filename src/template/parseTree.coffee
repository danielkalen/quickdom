import quickdom from '../'
import extend from 'smart-extend'
import IS from '../checks'
import {template as ALLOWED_TEMPLATE_OPTIONS} from '../allowedOptions'
import {schema} from './schema'
PARSE_ERROR_PREFIX = 'Template Parse Error: expected'

export default parseTree = (tree, parseChildren)-> switch
	when IS.array(tree)
		output = {}

		if not IS.string(tree[0])
			throw new Error "#{PARSE_ERROR_PREFIX} string for 'type', got '#{String(tree[0])}'"
		else
			output.type = tree[0]
		
		if tree.length > 1 and not IS.object(tree[1]) and tree[1] isnt null
			throw new Error "#{PARSE_ERROR_PREFIX} object for 'options', got '#{String(tree[1])}'"
		else
			output.options = if tree[1] then extend.deep.clone(tree[1]) else schema.options
			output.ref = tree[1].id or tree[1].ref if tree[1]

		output.children = tree.slice(2)
		if parseChildren is false
			output.children = tree[2] if tree.length is 3 and IS.objectPlain(tree[2]) and not IS.template(tree[2])
		else
			output.children = output.children.map(quickdom.template)
		return output


	when IS.string(tree) or IS.domText(tree)
		type:'text', options:{text: tree.textContent or tree}, children:schema.children

	when IS.domEl(tree)
		type: tree.nodeName.toLowerCase()
		ref: tree.id
		options: extend.clone.keys(ALLOWED_TEMPLATE_OPTIONS)(tree)
		children: schema.children.map.call(tree.childNodes, quickdom.template)

	when IS.quickDomEl(tree)
		type: tree.type
		ref: tree.ref
		options: extend.clone.deep.notKeys(['relatedInstance', 'related'])(tree.options)
		children: tree.children.map(quickdom.template)

	when IS.template(tree)
		return tree

	else
		throw new Error "#{PARSE_ERROR_PREFIX} (array || string || domEl || quickDomEl || template), got #{String(tree)}"


