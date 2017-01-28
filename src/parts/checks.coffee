IS = require('@danielkalen/is')
IS = extend.clone IS, 
	domEl: (subject)-> subject and subject.nodeType is 1

	domText: (subject)-> subject and subject.nodeType is 3

	domNode: (subject)-> IS.domEl(subject) or IS.domText(subject)
	
	quickDomEl: (subject)-> subject instanceof QuickElement
	
	template: (subject)-> subject instanceof QuickTemplate
	
	# domInput: (subject)->
	# 	nodeName = subject.nodeName
	# 	return nodeName is 'INPUT' or nodeName is 'TEXTAREA' or nodeName is 'SELECT'

