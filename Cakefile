process.title = 'simplywatch quickdom'
global.Promise = require 'bluebird'
fs = require 'fs-jetpack'
path = require 'path'
extend = require 'smart-extend'
Listr = require 'listr'
runTaskList = (tasks)-> (new Listr(tasks, concurrent:true)).run()

option '-d', '--debug', 'run in debug mode'
option '-m', '--maps', 'create source maps'

task 'build', ()->
	Promise.resolve()
		.then ()-> invoke 'build:js'
		.then ()-> invoke 'build:test'


task 'build:js', (options)->
	Promise.resolve()
		.then ()-> fs.listAsync "src"
		.filter (file)-> file.endsWith '.coffee'
	
		.map (file)->
			fileBase = path.basename(file,'.coffee')
			{src:"src/#{fileBase}.coffee", dest:"build/#{fileBase}.js", destDebug:"build/#{fileBase}.debug.js", base:fileBase}

		.map (file)->
			title: "Compiling #{file.base}.js"
			task: ()-> compileJS(file, options, umd:'quickdom')
	
		.then runTaskList


task 'build:test', (options)->
	Promise.resolve(['test.coffee'])	
		.map (file)->
			fileBase = path.basename(file,'.coffee')
			{src:"test/#{fileBase}.coffee", dest:"test/#{fileBase}.js", base:fileBase}

		.map (file)->
			title: "Compiling #{file.base}.js"
			task: ()-> compileJS(file, noPkgConfig:true, debug:true)
	
		.then runTaskList





task 'watch', ()->
	invoke 'watch:js'
	invoke 'watch:test'



task 'watch:js', (options)->
	require('simplywatch')
		globs: "src/*.coffee"
		command: (file, params)->
			Promise.resolve()
				.then ()->
					fileBase = path.basename(file,'.coffee')
					{src:"src/#{fileBase}.coffee", dest:"build/#{fileBase}.js", destDebug:"build/#{fileBase}.debug.js", base:fileBase}

				.then (file)-> compileJS(file, options, umd:'quickdom')


task 'watch:test', (options)->
	require('simplywatch')
		globs: "test/*.coffee"
		command: (file, params)->
			Promise.resolve()
				.then ()->
					fileBase = path.basename(file,'.coffee')
					{src:"test/#{fileBase}.coffee", dest:"test/#{fileBase}.js", base:fileBase}

				.then (file)-> compileJS(file, noPkgConfig:true, debug:true)









compileJS = (file, options, smOpts)->	
	Promise.resolve()
		.then ()-> require('simplyimport')(extend {file:file.src, debug:options.debug, noPkgConfig:options.noPkgConfig}, smOpts)
		.then (result)->
			dest = if options.debug and file.destDebug then file.destDebug else file.dest
			fs.writeAsync(dest, result)
		
		.catch (err)->
			console.error(err) if err not instanceof Error
			throw err





