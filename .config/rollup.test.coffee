pkg = require '../package'

config = ({input, output, minify})->
	input: input
	output: [].concat(output).map (config)-> Object.assign {name:pkg.name, compact:true}, config
	plugins: [
		require('rollup-plugin-coffee-script')()
		require('rollup-plugin-node-resolve')(
			extensions: ['.js', '.coffee']
			jsnext: true
			preferBuiltins: true
			browser: true
		)
		require('rollup-plugin-commonjs')(extensions: ['.js', '.coffee'])
		require('rollup-plugin-json')()
		require('rollup-plugin-babel')(extensions: ['.js', '.coffee'])
		if minify
			require('rollup-plugin-terser').terser()
	]


module.exports = [
	config
		input: 'test/test.coffee'
		output: [
			{file:'test/test.js', format:'umd', sourcemap:'inline'}
		]
,
	config
		input: 'test/simulate.coffee'
		output: [
			{file:'test/simulate.js', format:'umd', sourcemap:'inline'}
		]
,
	config
		input: 'test/sauceReporter.coffee'
		output: [
			{file:'test/sauceReporter.js', format:'umd', sourcemap:'inline'}
		]
]
