IS = import '@danielkalen/is'
IS = IS.create('natives','dom')
IS.load	
	quickDomEl: (subject)-> subject and subject.constructor.name is QuickElement.name
	
	template: (subject)-> subject and subject.constructor.name is QuickTemplate.name
	
	# batch: (subject)-> subject and subject.constructor.name is 'QuickBatch'
	
	# domInput: (subject)->
	# 	nodeName = subject.nodeName
	# 	return nodeName is 'INPUT' or nodeName is 'TEXTAREA' or nodeName is 'SELECT'

