export default class StateChain
	constructor: (states)->
		@string = states.join('+')
		@array = states.slice()
		@length = states.length

	includes: (target)->
		for state in @array
			return true if state is target

		return false

	without: (target)->
		@array
			.filter (state)-> state isnt target
			.join '+'


	isApplicable: (target, otherActive)->
		active = @array.filter (state)->
			state is target or
			otherActive.indexOf(state) isnt -1

		return active.length is @array.length