checkIf = 
	isDefined: (subject)-> subject isnt undefined
	
	isArray: (subject)-> subject instanceof Array
	
	isObject: (subject)-> typeof subject is 'object' and subject # 2nd check is to test against 'null' values

	isString: (subject)-> typeof subject is 'string'
	
	isNumber: (subject)-> typeof subject is 'number'
	
	isFunction: (subject)-> typeof subject is 'function'
	
	isQuickDom: (subject)-> subject instanceof QuickDom

	isIterable: (subject)-> checkIf.isObject(subject) and checkIf.isNumber(subject.length)

	isDomEl: (subject)-> subject.nodeName and subject.nodeType is 1 or subject.nodeType is 3

	isDomInput: (subject)->
		nodeName = subject.nodeName
		return nodeName is 'INPUT' or nodeName is 'TEXTAREA' or nodeName is 'SELECT'

	isDomRadio: (subject)-> subject.type is 'radio'

	isDomCheckbox: (subject)-> subject.type is 'checkbox'


