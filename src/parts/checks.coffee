### istanbul ignore next ###
IS = require('@danielkalen/is')
IS = extend.clone IS, 
	domDoc: (subject)-> subject and subject.nodeType is 9

	domEl: (subject)-> subject and subject.nodeType is 1

	domText: (subject)-> subject and subject.nodeType is 3

	domNode: (subject)-> IS.domEl(subject) or IS.domText(subject)
	
	quickDomEl: (subject)-> subject and subject.constructor.name is 'QuickElement'
	
	template: (subject)-> subject and subject.constructor.name is 'QuickTemplate'
	
	batch: (subject)-> subject and subject.constructor.name is 'QuickBatch'
	
	# domInput: (subject)->
	# 	nodeName = subject.nodeName
	# 	return nodeName is 'INPUT' or nodeName is 'TEXTAREA' or nodeName is 'SELECT'

