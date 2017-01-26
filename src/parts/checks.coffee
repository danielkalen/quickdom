IS = 
	defined: (subject)-> subject isnt undefined
	
	array: (subject)-> subject instanceof Array
	
	object: (subject)-> typeof subject is 'object' and subject # 2nd check is to test against 'null' values

	string: (subject)-> typeof subject is 'string'
	
	number: (subject)-> typeof subject is 'number'
	
	function: (subject)-> typeof subject is 'function'

	iterable: (subject)-> IS.object(subject) and IS.number(subject.length)

	domEl: (subject)-> subject and subject.nodeType is 1

	domText: (subject)-> subject and subject.nodeType is 3

	domNode: (subject)-> IS.domEl(subject) or IS.domText(subject)
	
	quickDomEl: (subject)-> subject instanceof QuickElement
	
	template: (subject)-> subject instanceof QuickTemplate
	
	# domInput: (subject)->
	# 	nodeName = subject.nodeName
	# 	return nodeName is 'INPUT' or nodeName is 'TEXTAREA' or nodeName is 'SELECT'

