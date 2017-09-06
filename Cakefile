process.title = 'simplywatch quickdom'
global.Promise = require 'bluebird'
promiseBreak = require 'promise-break'
execa = require('execa')
extend = require 'smart-extend'
fs = require 'fs-jetpack'
chalk = require 'chalk'
Path = require 'path'
process.env.SOURCE_MAPS ?= 1
buildModules = ['google-closure-compiler-js','uglify-js@3.0.24', 'listr', 'simplywatch@3.0.0-l2', 'simplyimport@4.0.0-s33']
coverageModules = ['istanbul', 'badge-gen', 'coffee-coverage']
testModules = [
	'mocha', 'chai', 'github:danielkalen/chai-style'
	'electron', 'karma@1.6.0', 'karma-chrome-launcher', 'karma-coverage', 'karma-electron', 'karma-firefox-launcher',
	'karma-ie-launcher', 'karma-mocha', 'karma-mocha-reporter', 'karma-opera-launcher', 'karma-safari-launcher', 'github:danielkalen/karma-sauce-launcher'
]
MEASURE_LOG = './.config/measure.json'
PACKAGE = './package.json'

option '-d', '--debug', 'run in debug mode'
option '-t', '--target [target]', 'target measure dir'


task 'build', ()->
	Promise.resolve()
		.then ()-> invoke 'install:build'
		.then ()-> invoke 'build:js'
		.then ()-> invoke 'build:test'


task 'build:js', (options)->
	debug = if options.debug then '.debug' else ''
	Promise.resolve(['index.coffee'])
		.map (file)->
			{src:"src/index.coffee", dest:"build/quickdom#{debug}.js"}

		.map (file)->
			title: "Compiling quickdom"
			task: ()-> compileJS(file, debug:options.debug, sourceMap:false, umd:'quickdom', target:'browser')
	
		.then runTaskList


task 'build:test', (options)->	
	Promise.resolve(['index.coffee'])
		.tap ()-> invoke 'install:test'
		.map (file)->
			{src:"test/test.coffee", dest:"test/test.js"}

		.map (file)->
			title: "Compiling test"
			task: ()-> compileJS(file, debug:true, noPkgConfig:true)
	
		.then runTaskList





task 'watch', ()->
	Promise.resolve()
		.then ()-> invoke 'install:build'
		.then ()->
			invoke 'watch:js'
			invoke 'watch:test'



task 'watch:js', (options)->
	debug = if options.debug then '.debug' else ''
	require('simplywatch')
		globs: "src/*.coffee"
		bufferTimeout: 1
		haltSerial: true
		command: (file, params)->
			Promise.resolve()
				.then ()-> {src:"src/index.coffee", dest:"build/quickdom#{debug}.js"}
				.then (file)-> compileJS(file, debug:options.debug, sourceMap:false, umd:'quickdom', target:'browser')


task 'watch:test', (options)->
	require('simplywatch')
		globs: "test/*.coffee"
		bufferTimeout: 1
		haltSerial: true
		command: (file, params)->
			Promise.resolve()
				.then ()-> {src:"test/test.coffee", dest:"test/test.js"}
				.then (file)-> compileJS(file, noPkgConfig:true, debug:true)



task 'install', ()->
	Promise.resolve()
		.then ()-> invoke 'install:build'
		.then ()-> invoke 'install:test'
		.then ()-> invoke 'install:coverage'
		.then ()-> invoke 'install:measure'


task 'install:build', ()->
	Promise.resolve()
		.then ()-> buildModules.filter (module)-> not moduleInstalled(module)
		.tap (missingModules)-> promiseBreak() if missingModules.length is 0
		.tap (missingModules)-> installModules(missingModules)
		.catch promiseBreak.end


task 'install:test', ()->
	Promise.resolve()
		.then ()-> testModules.filter (module)-> not moduleInstalled(module)
		.tap (missingModules)-> promiseBreak() if missingModules.length is 0
		.tap (missingModules)-> installModules(missingModules)
		.catch promiseBreak.end


task 'install:coverage', ()->
	Promise.resolve()
		.then ()-> coverageModules.filter (module)-> not moduleInstalled(module)
		.tap (missingModules)-> promiseBreak() if missingModules.length is 0
		.tap (missingModules)-> installModules(missingModules)
		.catch promiseBreak.end


task 'install:measure', ()->
	Promise.resolve()
		.then ()-> ['gzipped', 'sugar'].filter (module)-> not moduleInstalled(module)
		.tap (missingModules)-> promiseBreak() if missingModules.length is 0
		.tap (missingModules)-> installModules(missingModules)
		.catch promiseBreak.end



task 'measure', (options)->
	Promise.resolve()
		.then ()-> fs.writeAsync(MEASURE_LOG, {}) if not fs.exists(MEASURE_LOG)
		.then ()-> invoke 'install:measure'
		.then ()->
			DIR = if options.target then options.target else 'build'
			measure {debug:"./#{DIR}/quickdom.debug.js", release:"./#{DIR}/quickdom.js"}

















runTaskList = (tasks)->
	(new (require 'listr')(tasks, concurrent:true)).run()


measure = (file)->
	gzipped = Promise.promisifyAll require('gzipped')
	bytes = require 'sugar/number/bytes'
	isEqual = require 'sugar/object/isEqual'
	results = debug:null, release:null
	
	Promise.resolve()
		.then ()-> gzipped.calculateAsync fs.createReadStream(file.debug)
		.then (result)-> results.debug = 'orig':bytes(result.original,2), 'gzip':bytes(result.compressed,2)
		
		.then ()-> gzipped.calculateAsync fs.createReadStream(file.release)
		.then (result)-> results.release = 'orig':bytes(result.original,2), 'gzip':bytes(result.compressed,2)
		
		.then ()-> Promise.all [fs.readAsync(MEASURE_LOG,'json'), fs.readAsync(PACKAGE,'json').get('version')]
		.then ([log, version])->
			log[version] ?= []
			lastResult = log[version].slice(-1)[0]
			return log if lastResult and isEqual(lastResult, results)
			log[version].push(results)
			return log
		
		.then (updatedLog)-> fs.writeAsync MEASURE_LOG, updatedLog
		.then ()->
			console.log "#{chalk.dim 'DEBUG  '} #{chalk.green results.debug.gzip} (#{chalk.yellow results.debug.orig})"
			console.log "#{chalk.dim 'RELEASE'} #{chalk.green results.release.gzip} (#{chalk.yellow results.release.orig})"
			console.log '\n'


compileJS = (file, options)->
	Promise.resolve()
		.then ()-> require('simplyimport')(extend {file:file.src}, options)
		.then (result)-> fs.writeAsync(file.dest, result)
		.catch (err)->
			console.error(err) if err not instanceof Error
			throw err



installModules = (targetModules)->
	targetModules = targetModules
		.filter (module)-> if typeof module is 'string' then true else module[1]()
		.map (module)-> if typeof module is 'string' then module else module[0]
	
	return if not targetModules.length
	console.log "#{chalk.yellow('Installing')} #{chalk.dim targetModules.join ', '}"
	
	execa('npm', ['install', '--no-save', '--no-purne', targetModules...], {stdio:'inherit'})


moduleInstalled = (targetModule)->
	targetModule = targetModule[0] if typeof targetModule is 'object'
	if (split=targetModule.split('@')) and split[0].length
		targetModule = split[0]
		targetVersion = split[1]

	if /^github:.+?\//.test(targetModule)
		targetModule = targetModule.replace /^github:.+?\//, ''
	
	pkgFile = Path.resolve('node_modules',targetModule,'package.json')
	exists = fs.exists(pkgFile)
	
	if exists and targetVersion?
		currentVersion = fs.read(pkgFile, 'json').version
		exists = require('semver').gte(currentVersion, targetVersion)

	return exists





