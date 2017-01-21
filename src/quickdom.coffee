do ()->
	QuickDom = ()->











	QuickDom.version = import ../.config/.version
	### istanbul ignore next ###
	if exports?.module?
		module.exports = QuickDom
	else if typeof define is 'function' and define.amd
		define ['quickdom'], ()-> QuickDom
	else
		@Dom = QuickDom