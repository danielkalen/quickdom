import IS_ from '@danielkalen/is'
IS = IS_.create('natives','dom')
IS.load	
	quickDomEl: (subject)-> subject and subject.constructor.name is 'QuickElement'
	
	template: (subject)-> subject and subject.constructor.name is 'QuickTemplate'
	
	# batch: (subject)-> subject and subject.constructor.name is 'QuickBatch'

export default IS