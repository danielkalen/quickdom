extend = require 'smart-extend'

module.exports = (file, options, file_, content)->
	if options._flags.debug
		return content
	else
		Closure = require('google-closure-compiler-js')
		result = Closure.compile(extend jsCode:[src:content], config)
		return result.compiledCode

config =
	applyInputSourceMaps: false
	languageIn: 'es5'
	languageOut: 'es5'