window.failedTests = []
window.runner = null
mocha.run = do ()->
	orig = mocha.run.bind(mocha)
	return ()->
		runner = orig(arguments...)

		runner.on 'end', ()->
			window.mochaResults = runner.stats
			window.mochaResults.reports = window.failedTests
		
		runner.on 'fail', (test, err)->
			failedTests.push
				name: test.title
				result: false
				message: err.message
				stack: err.stack
				titles: do ()->
					titles = []
					while test.parent.title
						titles.push test.parent.title
						test = test.parent
					return title.reverse()

		return runner