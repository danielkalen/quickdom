schema = 
	type: 'div'
	ref: undefined
	options: {}
	children: []


matchesSchema = (object)->
	typeof object.type isnt 'undefined' or
	typeof object.ref isnt 'undefined' or
	typeof object.options isnt 'undefined' or
	typeof object.children isnt 'undefined'



