mocha.setup('tdd')
mocha.slow(400)
mocha.timeout(12000)
mocha.bail() unless window.location.hostname
expect = chai.expect
should = chai.should()
sandbox$ = sandbox = null
restartSandbox = ()->
	sandbox$?.remove()
	sandbox$ = $('<div id="sandbox" style="border:1px solid; padding:20px; box-sizing:border-box"></div>').appendTo(document.body)
	sandbox = sandbox$[0]

checkChildStructure = (main)-> (children...)->
	expect(main.children.length).to.equal(children.length)
	for child,index in children
		expect(main.children[index]).to.equal(child)
		expect(child.el.parentNode).to.equal(main.el)
		expect(child.parent).to.equal(main)
	return


suite "QuickDom", ()->
	setup(restartSandbox)

	test "Version Property", ()->
		packageVersion = require('../package').version
		expect(Dom.version).to.equal(packageVersion)

	
	suite "Element Creation", ()->
		test "Basic Creation", ()->
			div = Dom('div')
			expect(typeof div).to.equal 'object'
			expect(typeof div.el).to.equal 'object'
			expect(div.el.constructor.name).to.equal 'HTMLDivElement'
			expect(div.parent).to.be.undefined
			expect(div.children.length).to.equal 0


		test "Shortcuts", ()->
			expect(Dom.a().el.constructor).to.equal(Dom('a').el.constructor)
			expect(Dom.link().el.constructor).to.equal(Dom('a').el.constructor)
			expect(Dom.anchor().el.constructor).to.equal(Dom('a').el.constructor)
			expect(Dom.div().el.constructor).to.equal(Dom('div').el.constructor)
			expect(Dom.text().el.constructor).to.equal(Dom('text').el.constructor)
			expect(Dom.span().el.constructor).to.equal(Dom('span').el.constructor)
			expect(Dom.h4().el.constructor).to.equal(Dom('h4').el.constructor)
			expect(Dom.header().el.constructor).to.equal(Dom('header').el.constructor)
			expect(Dom.footer().el.constructor).to.equal(Dom('footer').el.constructor)
			expect(Dom.section().el.constructor).to.equal(Dom('section').el.constructor)
			expect(Dom.button().el.constructor).to.equal(Dom('button').el.constructor)
			expect(Dom.input().el.constructor).to.equal(Dom('input').el.constructor)
			# expect(Dom.main().el.constructor).to.equal(Dom('main').el.constructor)
			types = ['a','div','text','span','h4','header','footer','section','button','input']
			for type in types
				expect(Dom[type]().el.constructor.name).not.to.contain('Unknown')
			return


		test "Basic options", ()->
			A = Dom.div(class:'abc-123', props:{'abc':123, 'def':456})
			B = Dom.div(id:'B', className:'abc-123', attrs:{'data-abc':123, 'data-def':456})
			C = Dom.input(type:'text', name:'abc', value:'hello')
			D = Dom.input(type:'checkbox', checked:true)
			E = Dom.option(name:'abc', value:'hello', selected:true)
			F = Dom.link(href:'https://google.com/')
			G = Dom.anchor(url:'https://google.com/')
			H = Dom.text('Some text')

			expect(A.el.className).to.equal('abc-123')
			expect(A.el.abc).to.equal(123)
			expect(A.el.def).to.equal(456)
			expect(B.el.className).to.equal('abc-123')
			expect(B.el.id).to.equal('B')
			expect(B.el.getAttribute('data-abc')).to.equal('123')
			expect(B.el.getAttribute('data-def')).to.equal('456')
			expect(B.el.dataset.abc).to.equal('123') if B.el.dataset
			expect(C.el.type).to.equal('text')
			expect(C.el.name).to.equal('abc')
			expect(C.el.value).to.equal('hello')
			expect(D.el.checked).to.equal(true)
			expect(E.el.name).to.equal('abc')
			expect(E.el.selected).to.equal(true)
			expect(F.el.href).to.equal('https://google.com/')
			expect(G.el.href).to.equal('https://google.com/')
			expect(H.el.nodeType).to.equal(3)
			expect(H.el.textContent).to.equal('Some text')


		test "Creation w/ children", ()->
			A = Dom.div(null, 'Some text')
			B = Dom.div(null, Dom.span(), 'Some text', Dom.span())

			expect(A.el.childNodes.length).to.equal(1)
			expect(A.el.children.length).to.equal(0)
			expect(A.el.childNodes[0].nodeType).to.equal(3)
			expect(A.el.childNodes[0].textContent).to.equal('Some text')
			expect(A.children.length).to.equal(1)
			expect(B.el.childNodes.length).to.equal(3)
			expect(B.el.children.length).to.equal(2)
			expect(B.el.childNodes[0].nodeType).to.equal(1)
			expect(B.el.childNodes[0].nodeName.toLowerCase()).to.equal('span')
			expect(B.el.childNodes[1].nodeType).to.equal(3)
			expect(B.el.childNodes[1].textContent).to.equal('Some text')
			expect(B.el.childNodes[2].nodeType).to.equal(1)
			expect(B.el.childNodes[2].nodeName.toLowerCase()).to.equal('span')
			expect(B.children.length).to.equal(3)


		test "Existing Element", ()->
			divRaw = document.createElement('div')
			A = Dom(divRaw)
			B = Dom(divRaw)
			C = Dom(A)

			expect(A.el).to.equal(divRaw)
			expect(B.el).to.equal(divRaw)
			expect(C.el).to.equal(divRaw)
			expect(A).to.equal(B)
			expect(B).to.equal(C)
			expect(C).to.equal(divRaw._quickElement)


		test "Existing Element w/ Options", ()->
			divRaw = document.createElement('div')
			divRaw.id = 'A'

			div = Dom(divRaw, {id:'B', class:'abc-123'})
			expect(divRaw.id).to.equal('B')
			expect(divRaw.className).to.equal('abc-123')
			
			div = Dom(div, {id:'C', class:'def-456'})
			expect(divRaw.id).to.equal('C')
			expect(divRaw.className).to.equal('def-456')


		test "Creation w/ styling", ()->
			div = Dom.div style:
				'width': '10px'
				'height': 15
				'lameo': '19px'
				'background-color': 'blue'
				'backgroundSize': 'cover'
			sandbox$.append(div.el)
			computedStyle = getComputedStyle(div.el)

			expect(div.style.lameo).to.equal undefined
			expect(computedStyle.lameo).to.equal undefined
			expect(computedStyle.width).to.equal '10px'
			expect(computedStyle.height).to.equal '15px'
			expect(computedStyle.backgroundColor).not.to.equal ''
			expect(computedStyle.backgroundSize).to.equal 'cover'




		test "Method/Property aliases", ()->
			div = Dom('div')
			expect(div.raw).to.equal(div.el)
			expect(div[0]).to.equal(div.el)
			expect(div.css).to.equal(div.style)
			expect(div.replaceWith).to.equal(div.replace)



	suite "Events", ()->
		test "Events can be listened to via the .on method", ()->
			emitCountA = emitCountB = 0
			div = Dom.div()
			div.on 'myClick', (event)->
				expect(typeof event).to.equal 'object'
				expect(event.type).to.equal 'myClick'
				emitCountA++
			

			div.el.emitEvent('myClick')
			expect(emitCountA).to.equal(1)
			div.el.emitEvent('myClick')
			expect(emitCountA).to.equal(2)
			
			div.on 'myClick', (event)-> emitCountB++
			div.el.emitEvent('myClick')
			expect(emitCountB).to.equal(1)
			expect(emitCountA).to.equal(3)
			div.el.emitEvent('myClick')
			expect(emitCountB).to.equal(2)
			expect(emitCountA).to.equal(4)


		test "Events can be emitted via the .emit method", ()->
			emitCountA = emitCountB = 0
			div = Dom.div()
			div.on 'myEvent', ()-> emitCountA++
			div.el.addEventListener 'myEvent', ()-> emitCountB++

			expect(emitCountA).to.equal(0)
			expect(emitCountB).to.equal(0)
			
			div.emit('myEvent')
			expect(emitCountA).to.equal(1)
			expect(emitCountB).to.equal(1)
			
			div.el.emitEvent('myEvent')
			expect(emitCountA).to.equal(2)
			expect(emitCountB).to.equal(2)


		test "Booleans can be passed for the 2nd and 3rd args of .emit to control event.bubbles and event.cancelable", ()->
			emitCountA = emitCountB = emitCountC = 0
			div = Dom.div()
			div.on 'eventA', (event)-> emitCountA++; expect(event.bubbles).to.be.true; expect(event.cancelable).to.be.true
			div.on 'eventB', (event)-> emitCountB++; expect(event.bubbles).to.be.false; expect(event.cancelable).to.be.true
			div.on 'eventC', (event)-> emitCountC++; expect(event.bubbles).to.be.false; expect(event.cancelable).to.be.false

			div.emit('eventA'); div.emit('eventB', false); div.emit('eventC', false, false);
			expect(emitCountA).to.equal(1)
			expect(emitCountB).to.equal(1)
			expect(emitCountC).to.equal(1)


		test "Event listeners can be removed via the .off method", ()->
			emitCountA = emitCountB = emitCountC = emitCountD = 0
			div = Dom.div()
			div.on 'myEvent', ()-> emitCountA++
			div.on 'myEvent', eventCB=()-> emitCountB++
			div.on 'anotherEvent', ()-> emitCountC++
			div.el.addEventListener 'myEvent', ()-> emitCountD++

			expect(emitCountA).to.equal(0)
			expect(emitCountB).to.equal(0)
			expect(emitCountC).to.equal(0)
			expect(emitCountD).to.equal(0)
			
			div.emit('myEvent'); div.emit('anotherEvent');
			expect(emitCountA).to.equal(1)
			expect(emitCountB).to.equal(1)
			expect(emitCountC).to.equal(1)
			expect(emitCountD).to.equal(1)
			
			div.off('myEvent', eventCB)
			div.emit('myEvent'); div.emit('anotherEvent');
			expect(emitCountA).to.equal(2)
			expect(emitCountB).to.equal(1)
			expect(emitCountC).to.equal(2)
			expect(emitCountD).to.equal(2)
			
			div.on 'myEvent', ()-> emitCountB++
			div.off('myEvent')
			div.emit('myEvent'); div.emit('anotherEvent');
			expect(emitCountA).to.equal(2)
			expect(emitCountB).to.equal(1)
			expect(emitCountC).to.equal(3)
			expect(emitCountD).to.equal(3)
			
			div.on 'myEvent', ()-> emitCountA++
			div.on 'myEvent', ()-> emitCountB++
			div.off()
			div.emit('myEvent'); div.emit('anotherEvent');
			expect(emitCountA).to.equal(2)
			expect(emitCountB).to.equal(1)
			expect(emitCountC).to.equal(3)
			expect(emitCountD).to.equal(4)



	suite "Style", ()->
		test "Styles can be set via the .style/.css method with args pair of [property, value]", ()->
			div = Dom.div(style:{width:'15px'}).appendTo(sandbox)
			computedStyle = getComputedStyle(div.el)

			expect(computedStyle.width).to.equal('15px')

			div.style 'width', '25px'
			expect(div.el.style.width).to.equal('25px')
			expect(computedStyle.width).to.equal('25px')

			div.style 'width', '5vh'
			expect(div.el.style.width).to.equal('5vh')
			expect(computedStyle.width).to.contain('px')
		

		test "Multiple Styles can be set via the .style/.css method by passing a style object", ()->
			div = Dom.div(style:{width:'15px'}).appendTo(sandbox)
			computedStyle = getComputedStyle(div.el)

			expect(computedStyle.width).to.equal('15px')
			expect(computedStyle.height).to.equal('0px')

			div.style {width:25, height:'33'}
			expect(computedStyle.width).to.equal('25px')
			expect(computedStyle.height).to.equal('33px')


		test "A null value can be passed for a property in order to delete that style", ()->
			div = Dom.div(style:{width:'15px'}).appendTo(sandbox)

			expect(div.el.style.width).to.equal('15px')
			expect(div.el.style.height).to.equal('')

			div.style {width:null, height:12}
			expect(div.el.style.width).to.equal('')
			expect(div.el.style.height).to.equal('12px')

			div.css 'height', null
			expect(div.el.style.width).to.equal('')
			expect(div.el.style.height).to.equal('')


		test "If passed a property name without a value, the computed value for that property will be returned", ()->
			div = Dom.div(style:{width:'15px'}).appendTo(sandbox)
			computedStyle = getComputedStyle(div.el)

			expect(div.style 'width').to.equal '15px'
			expect(div.style 'height').to.equal '0px'

			div.style width:null, height: 55
			expect(div.style 'width').to.equal computedStyle.width
			expect(div.style 'height').to.equal '55px'
			
			div.style 'width', '19vw'
			expect(div.style 'width').to.contain 'px'


		test "Functions can be passed as values for properties in style objects which will be invoked with the element's options.relatedElement as the only argument", ()->
			div = Dom.div(rate:25).appendTo(sandbox)
			applyWidth = (expectedInstance)->
				div.style width: (instance)->
					expect(typeof instance).to.equal 'object'
					expect(instance).to.equal(expectedInstance)
					return div.options.rate

			applyWidth(div)
			expect(div.options.rate).to.equal 25
			expect(div.style 'width').to.equal '25px'

			div.options.rate = 250
			div.options.relatedInstance = anotherObj = {}
			applyWidth(anotherObj)
			expect(div.style 'width').to.equal '250px'



	suite "State", ()->
		test "States can be toggled on/off via .setState and polled via .getState", ()->
			div = Dom.div()

			expect(div.getState 'funny').to.be.false

			div.setState 'funny', true
			expect(div.getState 'funny').to.be.true
			
			div.setState 'happy', true
			div.setState 'relaxed', true
			expect(div.getState 'funny').to.be.true
			expect(div.getState 'happy').to.be.true
			expect(div.getState 'relaxed').to.be.true
			
			div.setState 'funny', false
			expect(div.getState 'funny').to.be.false
			expect(div.getState 'happy').to.be.true
			expect(div.getState 'relaxed').to.be.true
			
			div.setState '$funny'
			div.setState '$base'
			expect(div.getState 'funny').to.be.true
			expect(div.getState 'base').to.be.false


		test "If the value (2nd argument) is omitted from .setState, it'll default to 'true'", ()->
			div = Dom.div()

			expect(div.getState 'funny').to.be.false

			div.setState 'funny'
			expect(div.getState 'funny').to.be.true
			
			div.setState 'funny'
			expect(div.getState 'funny').to.be.true
		

		test "All states can be cleared/toggled off via .resetState", ()->
			div = Dom.div()

			div.setState 'funny'
			div.setState 'happy'
			div.setState 'relaxed'
			expect(div.getState 'funny').to.be.true
			expect(div.getState 'happy').to.be.true
			expect(div.getState 'relaxed').to.be.true

			div.resetState()
			expect(div.getState 'funny').to.be.false
			expect(div.getState 'happy').to.be.false
			expect(div.getState 'relaxed').to.be.false
			

		test "Styles can be passed under specific states using a '$' prefix before the state name", ()->
			div = Dom.div style:
				$base:
					width: '15px'
					height: '15px'
				$happy:
					width: '25px'
					marginTop: '20px'
				$relaxed:
					width: '35px'
					marginLeft: '12px'

			div.appendTo(sandbox)
			computedStyle = getComputedStyle(div.el)
			expect(computedStyle.width).to.equal('15px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('0px')
			expect(computedStyle.marginLeft).to.equal('0px')
			
			div.setState 'happy'
			expect(computedStyle.width).to.equal('25px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('20px')
			expect(computedStyle.marginLeft).to.equal('0px')
			
			div.setState 'happy', off
			expect(computedStyle.width).to.equal('15px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('0px')
			expect(computedStyle.marginLeft).to.equal('0px')
			
			div.setState 'happy'
			div.setState 'relaxed'
			expect(computedStyle.width).to.equal('35px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('20px')
			expect(computedStyle.marginLeft).to.equal('12px')
			
			div.setState 'happy', off
			expect(computedStyle.width).to.equal('35px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('0px')
			expect(computedStyle.marginLeft).to.equal('12px')
			

		test "A state:eventName (or state:eventOpts) map can be passed set for options.stateTriggers", ()->
			div = Dom.div(
				stateTriggers:
					happy: {on:'becameHappy', off:'becameSad'}
					relaxed: 'isRelaxed' 
				style:
					$base:		width: '15px'
					$happy:		width: '25px'
					$relaxed:	width: '35px'
			).appendTo(sandbox)
			computedStyle = getComputedStyle(div.el)

			expect(div.getState 'happy').to.be.false
			expect(div.getState 'relaxed').to.be.false
			expect(computedStyle.width).to.equal('15px')

			div.emit('becameHappy')
			expect(div.getState 'happy').to.be.true
			expect(div.getState 'relaxed').to.be.false
			expect(computedStyle.width).to.equal('25px')

			div.emit('isRelaxed')
			expect(div.getState 'happy').to.be.true
			expect(div.getState 'relaxed').to.be.true
			expect(computedStyle.width).to.equal('35px')

			div.emit('becameSad')
			expect(div.getState 'happy').to.be.false
			expect(div.getState 'relaxed').to.be.true
			expect(computedStyle.width).to.equal('35px')

			div.setState('relaxed', off)
			expect(computedStyle.width).to.equal('15px')


		test "The hover and focus states will be listened for and toggled by default by their appropriate events", ()->
			div = Dom.div style:
				$base:
					width: '15px'
					height: '15px'
					backgroundColor: 'rgb(45, 45, 45)'
				$hover:
					width: '25px'
					marginTop: '20px'
					backgroundColor: 'rgb(155, 155, 155)'
				$focus:
					width: '35px'
					backgroundColor: 'rgb(200, 200, 200)'

			div.appendTo(sandbox)
			computedStyle = getComputedStyle(div.el)
			expect(computedStyle.width).to.equal('15px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('0px')
			expect(div.el.style.marginTop).to.equal('')
			expect(computedStyle.backgroundColor).to.equal('rgb(45, 45, 45)')
			
			div.emit 'mouseenter'
			expect(computedStyle.width).to.equal('25px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('20px')
			expect(div.el.style.marginTop).to.equal('20px')
			expect(computedStyle.backgroundColor).to.equal('rgb(155, 155, 155)')
			
			div.emit 'mouseleave'
			expect(computedStyle.width).to.equal('15px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('0px')
			expect(div.el.style.marginTop).to.equal('')
			expect(computedStyle.backgroundColor).to.equal('rgb(45, 45, 45)')
			
			div.emit 'mouseenter'
			div.emit 'focus'
			expect(computedStyle.width).to.equal('35px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('20px')
			expect(div.el.style.marginTop).to.equal('20px')
			expect(computedStyle.backgroundColor).to.equal('rgb(200, 200, 200)')
			
			div.emit 'mouseleave'
			expect(computedStyle.width).to.equal('35px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('0px')
			expect(div.el.style.marginTop).to.equal('')
			expect(computedStyle.backgroundColor).to.equal('rgb(200, 200, 200)')


		test "If not passed a style map under the 'base' state, all non-state properties on the style object will be considered as 'base' state properties", ()->
			div = Dom.div style:
				width: '15px'
				height: '20px'
				$hover:
					width: '25px'
					height: '30px'

			div.appendTo(sandbox)
			computedStyle = getComputedStyle(div.el)
			expect(computedStyle.width).to.equal('15px')
			expect(computedStyle.height).to.equal('20px')
			
			div.emit 'mouseenter'
			expect(computedStyle.width).to.equal('25px')
			expect(computedStyle.height).to.equal('30px')
			
			div.emit 'mouseleave'
			expect(computedStyle.width).to.equal('15px')
			expect(computedStyle.height).to.equal('20px')


		test "State-specific styles will be removed upon state turn off or restored to the base value", ()->
			div = Dom.div style:
				width: '15px'
				$hover:
					width: '25px'
					height: '30px'

			div.appendTo(sandbox)
			computedStyle = getComputedStyle(div.el)
			expect(computedStyle.width).to.equal('15px')
			expect(computedStyle.height).to.equal('0px')
			expect(div.el.style.height).to.equal('')
			
			div.emit 'mouseenter'
			expect(computedStyle.width).to.equal('25px')
			expect(computedStyle.height).to.equal('30px')
			expect(div.el.style.height).to.equal('30px')
			
			div.emit 'mouseleave'
			expect(computedStyle.width).to.equal('15px')
			expect(computedStyle.height).to.equal('0px')
			expect(div.el.style.height).to.equal('')


		test "Higher order state styles will have a higher precedence than the 'base' style to be used as replacments for pending-removal state-styles", ()->
			div = Dom.div style:
				width: '15px'
				$hover:
					width: '25px'
					height: '30px'
				$focus:
					height: '45px'

			div.appendTo(sandbox)
			computedStyle = getComputedStyle(div.el)
			expect(computedStyle.width).to.equal('15px')
			expect(computedStyle.height).to.equal('0px')
			
			div.emit 'mouseenter'
			expect(computedStyle.width).to.equal('25px')
			expect(computedStyle.height).to.equal('30px')
			
			div.emit 'focus'
			expect(computedStyle.width).to.equal('25px')
			expect(computedStyle.height).to.equal('45px')
			
			div.emit 'mouseleave'
			expect(computedStyle.width).to.equal('15px')
			expect(computedStyle.height).to.equal('45px')
			
			div.emit 'blur'
			div.emit 'focus'
			div.emit 'mouseenter'
			expect(computedStyle.width).to.equal('25px')
			expect(computedStyle.height).to.equal('45px')
			
			div.emit 'blur'
			expect(computedStyle.width).to.equal('25px')
			expect(computedStyle.height).to.equal('30px')


		test "State toggles will be passed to children elements unless options.passStateToChildren is off", ()->
			Main = Dom.div()
			A = Dom.div().appendTo(Main)
			B = Dom.div().appendTo(A)
			C = Dom.div(passStateToChildren:false).appendTo(A)

			expect(Main.getState 'happy').to.be.false
			expect(A.getState 'happy').to.be.false
			expect(B.getState 'happy').to.be.false
			expect(C.getState 'happy').to.be.false

			Main.setState 'happy'
			expect(Main.getState 'happy').to.be.true
			expect(A.getState 'happy').to.be.true
			expect(B.getState 'happy').to.be.true
			expect(C.getState 'happy').to.be.true

			Main.options.passStateToChildren = false
			Main.setState 'happy', false
			expect(Main.getState 'happy').to.be.false
			expect(A.getState 'happy').to.be.true
			expect(B.getState 'happy').to.be.true
			expect(C.getState 'happy').to.be.true

			Main.setState 'happy'
			Main.options.passStateToChildren = true
			A.options.passStateToChildren = false
			Main.setState 'happy', false
			expect(Main.getState 'happy').to.be.false
			expect(A.getState 'happy').to.be.false
			expect(B.getState 'happy').to.be.true
			expect(C.getState 'happy').to.be.true


		test "State styles can be nested to trigger when all states are toggled on", ()->
			div = Dom.div style:
				$base:
					width: '12px'
					height: '12px'
					fontSize: '10px'
				$funny:
					fontSize: '15px'
					height: '15px'
					# width: '10px'
				$happy:
					width: '14px'
					fontSize: '14px'
					$relaxed:
						height: '11px'
						fontSize: '17px'
						$funny:
							width: '10px'
							height: '14px'
				$relaxed:
					width: '17px'

			div.appendTo(sandbox)
			expect(div.style 'width').to.equal('12px')
			expect(div.style 'height').to.equal('12px')
			expect(div.style 'fontSize').to.equal('10px')

			div.setState 'funny', on
			expect(div.style 'width').to.equal('12px')
			expect(div.style 'height').to.equal('15px')
			expect(div.style 'fontSize').to.equal('15px')

			div.setState 'funny', off
			expect(div.style 'width').to.equal('12px')
			expect(div.style 'height').to.equal('12px')
			expect(div.style 'fontSize').to.equal('10px')

			div.setState 'happy', on
			expect(div.style 'width').to.equal('14px')
			expect(div.style 'height').to.equal('12px')
			expect(div.style 'fontSize').to.equal('14px')

			div.setState 'relaxed', on
			expect(div.style 'width').to.equal('17px')
			expect(div.style 'height').to.equal('11px')
			expect(div.style 'fontSize').to.equal('17px')

			div.setState 'happy', off
			expect(div.style 'width').to.equal('17px')
			expect(div.style 'height').to.equal('12px')
			expect(div.style 'fontSize').to.equal('10px')

			div.setState 'happy', on
			window.shouldLog = true
			div.setState 'funny', on
			expect(div.style 'width').to.equal('10px')
			expect(div.style 'height').to.equal('14px')
			expect(div.style 'fontSize').to.equal('17px')

			div.setState 'happy', off
			expect(div.style 'width').to.equal('17px')
			expect(div.style 'height').to.equal('15px')
			expect(div.style 'fontSize').to.equal('15px')



	suite "Traversal", ()->
		test "Children", ()->
			div = Dom.div(null, Dom.div(), 'Some Text')

			expect(div.children.length).to.equal(2)
			expect(div.el.childNodes.length).to.equal(2)

			div.append(Dom.span())
			expect(div.children.length).to.equal(3)
			expect(div.el.childNodes.length).to.equal(3)
			
			div.el.appendChild(document.createElement('div'))
			expect(div.children.length).to.equal(4)
			expect(div.el.childNodes.length).to.equal(4)
		

		test "Parent", ()->
			A = Dom.div(null, Dom.div(), 'Some Text')
			B = Dom.div()
			C = Dom.div()

			expect(A.parent).to.equal undefined
			expect(A.children[0].parent).to.equal A
			expect(A.children[0].el.parentNode).to.equal A.el

			B.append(A)
			expect(A.parent).to.equal B
			expect(A.children[0].parent).to.equal A
			expect(A.children[0].el.parentNode).to.equal A.el
			expect(B.children.length).to.equal(1)
			expect(B.children[0]).to.equal(A)

			C.append(A)
			expect(A.parent).to.equal C
			expect(A.children[0].parent).to.equal A
			expect(A.children[0].el.parentNode).to.equal A.el
			expect(B.children.length).to.equal(0)
			expect(C.children[0]).to.equal(A)


		test "Parents", ()->
			A = Dom.div().appendTo(sandbox)
			B = Dom.div().appendTo(A)
			C = Dom.div().appendTo(B)

			expect(A.parent.el).to.equal(sandbox)
			expect(B.parent).to.equal(A)
			expect(C.parent).to.equal(B)

			expect(A.parents.length).to.equal(B.parents.length-1)
			expect(B.parents.length).to.equal(C.parents.length-1)
			expect(B.parents[0]).to.equal(A)
			expect(C.parents[0]).to.equal(B)
			expect(C.parents.length).to.equal(5)
			expect(C.parents.slice(-1)[0].el).to.equal(document.documentElement)


		test "Next", ()->
			div = Dom.div(null, A=Dom.div(), B=Dom.div(), C=Dom.div(), D=Dom.div(), E=Dom.div())

			expect(A.next).to.equal(B)
			expect(C.next).to.equal(D)
			expect(E.next).to.equal(undefined)
			expect(B.nextAll).to.eql([C,D,E])


		test "Prev", ()->
			div = Dom.div(null, A=Dom.div(), B=Dom.div(), C=Dom.div(), D=Dom.div(), E=Dom.div())

			expect(E.prev).to.equal(D)
			expect(C.prev).to.equal(B)
			expect(A.prev).to.equal(undefined)
			expect(D.prevAll).to.eql([C,B,A])


		test "Siblings", ()->
			div = Dom.div(null, A=Dom.div(), B=Dom.div(), C=Dom.div(), D=Dom.div(), E=Dom.div())

			expect(C.siblings).to.eql(C.prevAll.reverse().concat(C.nextAll))
			expect(C.siblings).to.eql([A,B,D,E])




	suite "Manipulation", ()->
		test ".append()", ()->
			A = Dom.div()
			B = Dom.div()
			C = Dom.text()
			D = Dom.div()
			MainA = Dom.div(null, A, B, C, D)
			MainB = Dom.div()

			checkChildStructure(MainA)(A, B, C, D)
			checkChildStructure(MainB)()

			MainB.append(A)
			checkChildStructure(MainA)(B, C, D)
			checkChildStructure(MainB)(A)

			C.appendTo(MainB)
			checkChildStructure(MainA)(B, D)
			checkChildStructure(MainB)(A, C)

		

		test ".prepend()", ()->
			A = Dom.div()
			B = Dom.div()
			C = Dom.text()
			D = Dom.div()
			MainA = Dom.div(null, A, B, C, D)
			MainB = Dom.div()

			checkChildStructure(MainA)(A, B, C, D)
			checkChildStructure(MainB)()

			MainB.prepend(A)
			checkChildStructure(MainA)(B, C, D)
			checkChildStructure(MainB)(A)

			C.prependTo(MainB)
			checkChildStructure(MainA)(B, D)
			checkChildStructure(MainB)(C, A)


		test ".after()", ()->
			A = Dom.div()
			B = Dom.div()
			C = Dom.text()
			D = Dom.div()
			MainA = Dom.div(null, A, B, C, D)
			MainB = Dom.div()

			checkChildStructure(MainA)(A, B, C, D)
			checkChildStructure(MainB)()

			MainB.append(B)
			B.after(A)
			checkChildStructure(MainA)(C, D)
			checkChildStructure(MainB)(B, A)

			C.insertAfter(B)
			checkChildStructure(MainA)(D)
			checkChildStructure(MainB)(B, C, A)


		test ".before()", ()->
			A = Dom.div()
			B = Dom.div()
			C = Dom.text()
			D = Dom.div()
			MainA = Dom.div(null, A, B, C, D)
			MainB = Dom.div()

			checkChildStructure(MainA)(A, B, C, D)
			checkChildStructure(MainB)()

			MainB.append(B)
			B.before(A)
			checkChildStructure(MainA)(C, D)
			checkChildStructure(MainB)(A, B)

			C.insertBefore(B)
			checkChildStructure(MainA)(D)
			checkChildStructure(MainB)(A, C, B)


		test ".detach()", ()->
			emitCount = 0
			div = Dom.div(null, 'Inner Text Here')
			div.on 'beep', ()-> emitCount++
			div.setState 'happy'
			div.setState 'relaxed'

			expect(div.parent).not.to.exist
			expect(emitCount).to.equal(0)
			expect(div.getState 'happy').to.be.true
			expect(div.getState 'relaxed').to.be.true
			
			div.appendTo(sandbox)
			div.emit('beep')
			expect(sandbox.children.length).to.equal(1)
			expect(div.parent.el).to.equal(sandbox)
			expect(emitCount).to.equal(1)
			expect(div.getState 'happy').to.be.true
			expect(div.getState 'relaxed').to.be.true

			div.detach()
			div.emit('beep')
			expect(sandbox.children.length).to.equal(0)
			expect(div.parent).not.to.exist
			expect(emitCount).to.equal(2)
			expect(div.getState 'happy').to.be.true
			expect(div.getState 'relaxed').to.be.true


		test ".remove()", ()->
			emitCount = 0
			div = Dom.div(null, 'Inner Text Here')
			div.on 'beep', ()-> emitCount++
			div.setState 'happy'
			div.setState 'relaxed'

			expect(div.parent).not.to.exist
			expect(emitCount).to.equal(0)
			expect(div.getState 'happy').to.be.true
			expect(div.getState 'relaxed').to.be.true
			
			div.appendTo(sandbox)
			div.emit('beep')
			expect(sandbox.children.length).to.equal(1)
			expect(div.parent.el).to.equal(sandbox)
			expect(emitCount).to.equal(1)
			expect(div.getState 'happy').to.be.true
			expect(div.getState 'relaxed').to.be.true

			div.remove()
			div.emit('beep')
			expect(sandbox.children.length).to.equal(0)
			expect(div.parent).not.to.exist
			expect(emitCount).to.equal(1)
			expect(div.getState 'happy').to.be.false
			expect(div.getState 'relaxed').to.be.false


		test ".empty()", ()->
			Main = Dom.div()
			A = Dom.div().appendTo(Main)
			B = Dom.div().appendTo(Main)
			A.setState 'happy'
			B.setState 'happy'

			checkChildStructure(Main)(A, B)
			expect(A.getState 'happy').to.be.true
			expect(B.getState 'happy').to.be.true

			Main.empty()
			checkChildStructure(Main)()
			expect(A.parent).to.equal(undefined)
			expect(B.parent).to.equal(undefined)
			expect(A.getState 'happy').to.be.true
			expect(B.getState 'happy').to.be.true


		test ".wrap()", ()->
			Main = Dom.div()
			A = Dom.div().appendTo(Main)
			B = Dom.div().appendTo(Main)
			C = Dom.div()
			wrapA = Dom.section()
			wrapB = Dom.section()
			wrapC = Dom.section()
			A.setState 'happy'
			B.setState 'happy'
			C.setState 'happy'
			wrapA.setState 'relaxed'
			wrapB.setState 'relaxed'
			wrapC.setState 'relaxed'
			checkChildStructure(Main)(A, B)
			
			A.wrap(wrapA)
			checkChildStructure(Main)(wrapA, B)
			checkChildStructure(wrapA)(A)
			
			B.wrap(wrapB)
			checkChildStructure(Main)(wrapA, wrapB)
			checkChildStructure(wrapA)(A)
			checkChildStructure(wrapB)(B)
			
			B.wrap(wrapA)
			checkChildStructure(Main)(wrapA, wrapB)
			checkChildStructure(wrapA)(A, B)
			checkChildStructure(wrapB)()
			
			wrapC.appendTo(wrapB)
			C.wrap(wrapC)
			C.wrap()
			checkChildStructure(Main)(wrapA, wrapB)
			checkChildStructure(wrapA)(A, B)
			checkChildStructure(wrapB)(wrapC)
			checkChildStructure(wrapC)(C)
			
			C.wrap(C)
			checkChildStructure(Main)(wrapA, wrapB)
			checkChildStructure(wrapA)(A, B)
			checkChildStructure(wrapB)(wrapC)
			checkChildStructure(wrapC)(C)

			expect(A.getState 'happy').to.be.true
			expect(B.getState 'happy').to.be.true
			expect(C.getState 'happy').to.be.true
			expect(wrapA.getState 'relaxed').to.be.true
			expect(wrapB.getState 'relaxed').to.be.true
			expect(wrapC.getState 'relaxed').to.be.true


		test ".unwrap()", ()->
			Main = Dom.div()
			A = Dom.div().prependTo(Main)
			B = Dom.div().appendTo(A)
			C = Dom.div().appendTo(A)
			D = Dom.div().appendTo(C)
			E = Dom.div().appendTo(D)
			A.setState 'happy'
			B.setState 'happy'
			C.setState 'happy'
			D.setState 'happy'
			E.setState 'happy'

			checkChildStructure(Main)(A)
			checkChildStructure(A)(B, C)
			checkChildStructure(B)()
			checkChildStructure(C)(D)
			checkChildStructure(D)(E)

			E.unwrap()
			checkChildStructure(Main)(A)
			checkChildStructure(A)(B, C)
			checkChildStructure(B)()
			checkChildStructure(C)(E)
			checkChildStructure(D)()

			B.unwrap()
			checkChildStructure(Main)(B, C)
			checkChildStructure(A)()
			checkChildStructure(B)()
			checkChildStructure(C)(E)
			checkChildStructure(D)()

			E.unwrap()
			checkChildStructure(Main)(B, E)
			checkChildStructure(A)()
			checkChildStructure(B)()
			checkChildStructure(C)()
			checkChildStructure(D)()

			A.insertAfter(B)
			C.appendTo(A)
			D.appendTo(A)
			checkChildStructure(Main)(B, A, E)
			checkChildStructure(A)(C, D)
			checkChildStructure(B)()
			checkChildStructure(C)()
			checkChildStructure(D)()

			D.unwrap()
			checkChildStructure(Main)(B, C, D, E)
			checkChildStructure(A)()
			checkChildStructure(B)()
			checkChildStructure(C)()
			checkChildStructure(D)()



		test ".replace()", ()->
			Main = Dom.div()
			A = Dom.div().appendTo(Main)
			B = Dom.div().appendTo(Main)
			C = Dom.div().appendTo(A)
			D = Dom.div().appendTo(A)
			E = Dom.div().appendTo(D)
			
			A.replace(); E.replace()
			checkChildStructure(Main)(A, B)
			checkChildStructure(A)(C, D)
			checkChildStructure(B)()
			checkChildStructure(C)()
			checkChildStructure(D)(E)
			
			C.replace(E).appendTo(B)
			checkChildStructure(Main)(A, B)
			checkChildStructure(A)(E, D)
			checkChildStructure(B)(C)
			checkChildStructure(C)()
			checkChildStructure(D)()
			
			D.replace(E)
			checkChildStructure(Main)(A, B)
			checkChildStructure(A)(E)
			checkChildStructure(B)(C)
			checkChildStructure(C)()
			checkChildStructure(D)()
			
			B.replace(C)
			checkChildStructure(Main)(A, C)
			checkChildStructure(A)(E)
			checkChildStructure(B)()
			checkChildStructure(C)()
			checkChildStructure(D)()
			
			A.replace(D)
			checkChildStructure(Main)(D, C)
			checkChildStructure(A)(E)
			checkChildStructure(B)()
			checkChildStructure(C)()
			checkChildStructure(D)()
			
			B.replace(D)
			checkChildStructure(Main)(C)
			checkChildStructure(A)(E)
			checkChildStructure(B)()
			checkChildStructure(C)()
			checkChildStructure(D)()


		test ".clone()", ()->
			emitCount = 0
			sandBox = Dom(sandbox)
			opts = {style: $base:{width:'34px'}, $happy:{height:'99px'}, $relaxed:{opacity:'0.5'}}
			A = Dom.div(opts, 'Some Inner Text').appendTo(sandbox)
			A.setState 'happy'
			A.on 'privateEvent', ()-> emitCount++
			childA = Dom.div().appendTo(A)
			childB = Dom.span().appendTo(A)
			B = A.clone()

			A.setState 'relaxed'
			A.emit('privateEvent')
			expect(emitCount).to.equal(1)
			expect(A.parent).to.equal(sandBox)
			expect(A.css 'width').to.equal('34px')
			expect(A.css 'height').to.equal('99px')
			expect(A.css 'opacity').to.equal('0.5')
			expect(A.siblings.length).to.equal(0)
			expect(A.children.length).to.equal(3)
			expect(A.children[0].el.textContent).to.equal 'Some Inner Text'
			expect(A.children[1]).to.equal(childA)
			expect(A.children[2]).to.equal(childB)
			expect(B).not.to.equal(A)
			expect(B.parent).to.equal(undefined)
			sandBox.append(B)

			expect(B.parent).to.equal(sandBox)
			expect(B.css 'width').to.equal('34px')
			expect(B.css 'height').to.equal('99px')
			expect(B.css 'opacity').to.equal('1')
			expect(B.siblings.length).to.equal(1)
			expect(B.children.length).to.equal(3)
			expect(B.children[0].el.textContent).to.equal 'Some Inner Text'
			expect(B.children[0]).not.to.equal(A.children[0])
			expect(B.children[1]).not.to.equal(childA)
			expect(B.children[2]).not.to.equal(childB)
			expect(B.getState 'happy').to.be.true
			expect(B.getState 'relaxed').to.be.false

			expect(emitCount).to.equal(1)
			B.emit('privateEvent')
			expect(emitCount).to.equal(2)
			
			A.off()
			A.emit('privateEvent')
			expect(emitCount).to.equal(2)
			B.emit('privateEvent')
			expect(emitCount).to.equal(3)


		test ".prop() - element property getter/setter", ()->
			div = Dom.div()
			
			expect(div.prop 'myProp').to.equal undefined
			expect(div.prop 'myProp', 192).to.equal div
			expect(div.prop 'myProp').to.equal 192
			expect(div.prop 'myProp', '192').to.equal div
			expect(div.prop 'myProp').to.equal '192'
			expect(div.prop 'anotherProp', [1,2,3]).to.equal div
			expect(div.prop 'anotherProp').to.eql [1,2,3]
			expect(div.el.myProp).to.equal '192'
			expect(div.el.anotherProp).to.eql [1,2,3] 

			div.el.lastProp = 9999
			expect(div.el.lastProp).to.equal 9999
			expect(div.prop 'lastProp').to.equal 9999

			expect(Object.keys(div.el)).not.to.contain('promiseIsLast')
			
			div.prop 'promiseIsLast', 'over9k'
			expect(Object.keys(div.el)).to.contain('promiseIsLast')
			
			div.prop 'promiseIsLast', undefined
			expect(Object.keys(div.el)).to.contain('promiseIsLast')
			
			div.prop 'promiseIsLast', null
			expect(Object.keys(div.el)).to.contain('promiseIsLast')



		test ".attr() - element property getter/setter", ()->
			div = Dom.div()
			
			expect(div.attr 'myAttr').to.equal null
			expect(div.attr 'myAttr', 192).to.equal div
			expect(div.attr 'myAttr').to.equal '192'
			expect(div.attr 'myAttr', '192').to.equal div
			expect(div.attr 'myAttr').to.equal '192'
			expect(div.attr 'anotherAttr', [1,2,3]).to.equal div
			expect(div.attr 'anotherAttr').to.equal '1,2,3'
			expect(div.el.getAttribute 'myAttr').to.equal '192'
			expect(div.el.getAttribute 'anotherAttr').to.eql '1,2,3'

			div.el.setAttribute 'lastAttr', 9999
			expect(div.el.getAttribute 'lastAttr').to.equal '9999'
			expect(div.attr 'lastAttr').to.equal '9999'

			expect(div.el.getAttribute 'promiseIsLast').to.equal null
			
			div.attr 'promiseIsLast', 'over9k'
			expect(div.el.getAttribute 'promiseIsLast').to.equal 'over9k'
			
			div.attr 'promiseIsLast', undefined
			expect(div.el.getAttribute 'promiseIsLast').to.equal 'over9k'
			
			div.attr 'promiseIsLast', null
			expect(div.el.getAttribute 'promiseIsLast').to.equal null



		test ".html() - innerHTML getter/setter", ()->
			div = Dom.div(null, Dom.div(), 'Some text', Dom.span(), Dom.div())

			expect(div.children.length).to.equal(4)
			expect(div.html()).to.equal(div.el.innerHTML)
			expect(div.children.length).to.equal(4)

			div.html('<section id="test"></section>')
			expect(div.html()).to.equal('<section id="test"></section>')
			expect(div.children.length).to.equal(1)
			expect(div.children[0].el.id).to.equal('test')
			expect(div.children[0].el.nodeName.toLowerCase()).to.equal('section')


		test ".text() - textContent getter/setter", ()->
			div = Dom.div(null, 'Some text', Dom.span(null, 'Inner Text'))

			expect(div.children.length).to.equal(2)
			expect(div.text()).to.equal(div.el.textContent)
			expect(div.text()).to.equal('Some textInner Text')
			expect(div.children.length).to.equal(2)

			div.text('newText')
			expect(div.text()).to.equal('newText')
			expect(div.el.textContent).to.equal('newText')
			expect(div.children.length).to.equal(1)
			expect(div.children[0].el.nodeType).to.equal(3)




	suite "Batch", ()->
		test "Dom.batch() takes an iterable containing an array of elements or QuickDom elements and reveals the QuickElement API which will be applied for each element", ()->
			sandBox = Dom(sandbox)
			div = Dom.div()
			A = Dom.div().appendTo(div)
			B = Dom.section().appendTo(div)
			C = Dom.div().appendTo(div)

			checkChildStructure(sandBox)()
			checkChildStructure(div)(A, B, C)

			Dom.batch([A,B,C])
				.appendTo(sandBox)
				.style 'opacity', 0.5
				.css {height:30, backgroundColor:'pink'}
				.append 'Some Inner Text'

			checkChildStructure(sandBox)(A, B, C)
			checkChildStructure(div)()

			expect(getComputedStyle(A.el).opacity).to.equal('0.5')
			expect(getComputedStyle(C.el).opacity).to.equal('0.5')
			expect(getComputedStyle(B.el).height).to.equal('30px')
			expect(A.children.length).to.equal(1)
			expect(B.children.length).to.equal(1)
			expect(C.children.length).to.equal(1)
			expect(B.children[0].el.textContent).to.equal('Some Inner Text')


		test "If a truthy value is passed as the 2nd arg of Dom.batch(), an array will be returned for the first method invoked containing the result for each element provided", ()->
			sandBox = Dom(sandbox)
			A = Dom.div().appendTo(sandBox)
			B = Dom.section().appendTo(sandBox)
			C = Dom.div().appendTo(sandBox)

			batch1 = Dom.batch([A,B,C])
			batch2 = Dom.batch([A,B,C], true)

			expect(batch1.style('width')).to.equal(batch1)
			expect(batch1.style('width', 47)).to.equal(batch1)
			expect(batch2.style('width')).to.eql(['47px', '47px', '47px'])
			expect(batch2.style('width', 33)).to.eql([A,B,C])
			expect(batch2.style('width')).to.eql(['33px', '33px', '33px'])


		test "If the .return() method is invoked on the batch instance, it will return the result set from the last method invocation", ()->
			sandBox = Dom(sandbox)
			div = Dom.div()
			A = Dom.div().appendTo(div)
			B = Dom.section().appendTo(div)
			C = Dom.div().appendTo(div)
			
			result = Dom.batch([A,B,C])
				.appendTo(sandBox)
				.style 'opacity', 0.5
				.css {height:30, backgroundColor:'pink'}
				.append 'Some Inner Text'
				.style 'opacity'
				.return()

			expect(result).to.eql ['0.5','0.5','0.5']
			expect(Dom.batch([A,B,C]).css('width', '38px').css('width').return()).to.eql ['38px','38px','38px']


		test "If the .return() method is invoked with a truthy argument, it will cause the next method invocation to return the results of the invocation for each element provided", ()->
			sandBox = Dom(sandbox)
			div = Dom.div()
			A = Dom.div().appendTo(div)
			B = Dom.section().appendTo(div)
			C = Dom.div().appendTo(div)
			
			result = Dom.batch([A,B,C])
				.appendTo(sandBox)
				.style 'opacity', 0.5
				.css {height:30, backgroundColor:'pink'}
				.append 'Some Inner Text'
				.return(true)
				.style 'opacity'

			expect(result).to.eql ['0.5','0.5','0.5']
			expect(Dom.batch([A,B,C]).css('width', '38px').css('height', '28px').return(true).css('width')).to.eql ['38px','38px','38px']


		test "Invoking the .reverse() method on the batch instance will reverse the elements array in the batch and thus the execution order", ()->
			A = Dom.div(null, 'AAA').appendTo(sandbox)
			B = Dom.div(null, 'BBB').appendTo(sandbox)
			C = Dom.div(null, 'CCC').appendTo(sandbox)
			arr = [A,B,C]
			expect(Dom.batch(arr).elements).not.to.equal(arr)
			expect(Dom.batch(arr).elements).to.eql [A,B,C]
			expect(Dom.batch(arr).reverse().elements).to.eql [C,B,A]
			expect(Dom.batch(arr,1).text()).to.eql ['AAA','BBB','CCC']
			expect(Dom.batch(arr,1).reverse().text()).to.eql ['CCC','BBB','AAA']
			expect(Dom.batch(arr,1).reverse().text()).to.eql ['CCC','BBB','AAA']
			expect(Dom.batch(arr,1).reverse().reverse().text()).to.eql ['AAA','BBB','CCC']



	suite "Templates", ()->
		test "A reusable template can be generated via QuickDom.template()", ()->
			template = Dom.template(['span', id:'theSpan'])

			expect(typeof template).to.equal('object')
			expect(template.type).to.equal('span')
			expect(template.options).to.eql(id:'theSpan')
			expect(template.children).to.eql([])

		
		test "Templates can be turned into QuickDom instances via template.spawn() or by passing as arg to QuickDom", ()->
			template = Dom.template(['div', className:'some-div', 'Some Inner Text'])
			spawnA = template.spawn()
			spawnA.setState 'happy'
			spawnB = Dom(template)

			expect(spawnA.el).to.be.instanceOf(HTMLDivElement)
			expect(spawnB.el).to.be.instanceOf(HTMLDivElement)
			expect(spawnA).not.to.equal(spawnB)
			expect(spawnA.el).not.to.equal(spawnB.el)
			expect(spawnA.getState 'happy').to.be.true
			expect(spawnB.getState 'happy').to.be.false
			expect(spawnA.el.textContent).to.equal('Some Inner Text')
			expect(spawnB.el.textContent).to.equal('Some Inner Text')
			expect(spawnA.el.className).to.equal('some-div')


		test "Templates can be created from QuickElement instances", ()->
			section = Dom.section(className:'singleSection', 'Some Inner Text')
			section.setState 'happy'
			sectionTemplate = section.toTemplate()
			templateSpawn = sectionTemplate.spawn()

			expect(sectionTemplate).not.to.equal(section)
			expect(templateSpawn.el).not.to.equal(section.el)
			expect(templateSpawn.el.className).to.equal('singleSection')
			expect(templateSpawn.text()).to.equal('Some Inner Text')
			expect(section.getState 'happy').to.be.true
			expect(templateSpawn.getState 'happy').to.be.false


		test "Templates can be created from DOM Elements", ()->
			sectionEl = document.createElement('section')
			sectionEl.className = 'singleSection'
			sectionEl.appendChild(document.createTextNode 'Some Inner Text')
			sectionTemplate = Dom.template(sectionEl)
			templateSpawn = sectionTemplate.spawn()

			expect(templateSpawn.el).not.to.equal(sectionEl)
			expect(templateSpawn.el.className).to.equal('singleSection')
			expect(templateSpawn.text()).to.equal('Some Inner Text')


		test "Templates are immutable", ()->
			template = Dom.template(['div', className:'some-div', 'Some Inner Text'])

			expect(template.type).to.equal 'div'
			expect(template.options).to.eql {className:'some-div'}
			expect(template.children.length).to.equal 1
			
			template.type = 'span'
			template.options = {className:'some-div', id:'tag'}
			template.children = ['another', 'one']
			expect(template.type).to.equal 'div'
			expect(template.options).to.eql {className:'some-div'}
			expect(template.children.length).to.equal 1


		test "Templates can be extended via template.extend", ()->
			template = Dom.template(['div', className:'some-div', 'Some Inner Text'])
			templateCopyA = template.extend {type:'span', options:{className:'some-span'}, children:[]}
			templateCopyB = template.extend {options:{id:'theMainDiv'}, children:['The Other Inner Text']}

			expect(templateCopyA).not.to.equal(template)
			expect(templateCopyB).not.to.equal(template)
			spawn = template.spawn()
			spawnA = templateCopyA.spawn()
			spawnB = templateCopyB.spawn()

			expect(spawn.el.nodeName.toLowerCase()).to.equal('div')
			expect(spawn.el.className).to.equal('some-div')
			expect(spawn.el.id).to.equal('')
			expect(spawn.text()).to.equal('Some Inner Text')

			expect(spawnA.el.nodeName.toLowerCase()).to.equal('span')
			expect(spawnA.el.className).to.equal('some-span')
			expect(spawnA.el.id).to.equal('')
			expect(spawnA.text()).to.equal('Some Inner Text')

			expect(spawnB.el.nodeName.toLowerCase()).to.equal('div')
			expect(spawnB.el.className).to.equal('some-div')
			expect(spawnB.el.id).to.equal('theMainDiv')
			expect(spawnB.text()).to.equal('The Other Inner Text')


		test "Templates can be spawned via extended config by passing a new config object to template.spawn()", ()->
			template = Dom.template(
				['div', className:'some-div',
					'Some Inner Text',
					['strong', {className:'highlighted', style:{opacity:0.9}}, ' - Bolded Text']
				]
			)
			spawnRaw = template.spawn()
			spawnA = template.spawn(type:'section', options:{className:'some-section', style:{opacity:0.7}})
			spawnB = template.spawn(
				options:
					className: 'main-div'
					id: 'theMainDiv'
					style: opacity: 0.5
				children: [
					{
						type: 'span'
						children: [
							type:'text'
							options: {text: 'Main Inner Text'}
						]
					}
					{
						type: 'b'
						options:
							className: 'super-highlighted'
							style: opacity: '0.2'
						children: [
							options: {text: ' - Very Bolded Text'}
						]
					}
					{
						type: 'text'
						options: {text: ' + Other Text'}
					}
				]
			)

			expect(spawnRaw.el.nodeName.toLowerCase()).to.equal('div')
			expect(spawnRaw.el.className).to.equal('some-div')
			expect(spawnRaw.el.id).to.equal('')
			expect(spawnRaw.text()).to.equal('Some Inner Text - Bolded Text')
			expect(spawnRaw.el.style.opacity).to.equal('')
			expect(spawnRaw.el.childNodes.length).to.equal(2)
			expect(spawnRaw.el.childNodes[0].nodeName).to.equal('#text')
			expect(spawnRaw.el.childNodes[1].nodeName.toLowerCase()).to.equal('strong')
			expect(spawnRaw.el.childNodes[1].className).to.equal('highlighted')
			expect(spawnRaw.el.childNodes[1].style.opacity).to.equal('0.9')

			expect(spawnA.el.nodeName.toLowerCase()).to.equal('section')
			expect(spawnA.el.className).to.equal('some-section')
			expect(spawnA.el.id).to.equal('')
			expect(spawnA.text()).to.equal('Some Inner Text - Bolded Text')
			expect(spawnA.el.style.opacity).to.equal('0.7')
			expect(spawnA.el.childNodes.length).to.equal(2)
			expect(spawnA.el.childNodes[0].nodeName).to.equal('#text')
			expect(spawnA.el.childNodes[1].nodeName.toLowerCase()).to.equal('strong')
			expect(spawnA.el.childNodes[1].className).to.equal('highlighted')
			expect(spawnA.el.childNodes[1].style.opacity).to.equal('0.9')

			expect(spawnB.el.nodeName.toLowerCase()).to.equal('div')
			expect(spawnB.el.className).to.equal('main-div')
			expect(spawnB.el.id).to.equal('theMainDiv')
			expect(spawnB.text()).to.equal('Main Inner Text - Very Bolded Text + Other Text')
			expect(spawnB.el.style.opacity).to.equal('0.5')
			expect(spawnB.el.childNodes.length).to.equal(3)
			expect(spawnB.el.childNodes[0].nodeName.toLowerCase()).to.equal('span')
			expect(spawnB.el.childNodes[0].childNodes.length).to.equal(1)
			expect(spawnB.el.childNodes[1].nodeName.toLowerCase()).to.equal('b')
			expect(spawnB.el.childNodes[1].className).to.equal('super-highlighted')
			expect(spawnB.el.childNodes[1].style.opacity).to.equal('0.2')





	suite "Misc", ()->
		test "Chaining", ()->
			div = Dom.div()
			chainResult = div
				.on('abc', ()->)
				.emit('abc')
				.off('abc')
				.off()
				.setState('abc')
				.resetState()
				.style()
				.css('width', 12)
				.attr('test', 123)
				.prop('anotherTest', 123)
				.append()
				.appendTo()
				.prepend()
				.prependTo()
				.before()
				.after()
				.insertBefore()
				.insertAfter()
				.html('<span></span>')
				.text('some text')
				.detach()
				.wrap(Dom.section())
				.unwrap()
				.wrap(Dom.header())
				.replace()
				.appendTo(sandbox)
				.wrap(head=Dom.header())

			expect(chainResult).to.equal(div)
			expect(sandbox.children[0]).to.equal(head.el)
			expect(div.parent).to.equal(head)
			expect(div.css 'width').to.equal('12px')




		test "Invalid Arguments", ()->
			text = Dom.text('someText', {lostOpts:true})
			div = Dom.div({lostOpts:true})

			expect(Dom()).to.equal undefined
			expect(Dom(null)).to.equal undefined
			expect(Dom({})).to.equal undefined
			expect(div.updateOptions()).to.equal div
			expect(text.options.lostOpts).to.equal undefined
			expect(div.options.lostOpts).to.equal true
			expect(div.on()).to.equal div
			expect(div.on('abc')).to.equal div
			expect(div.on('abc', {})).to.equal div
			expect(div.off('somethingFake')).to.equal div

			emitCount = 0; div.on 'something', cb=()-> emitCount++
			expect(div.emit('')).to.equal(div)
			expect(div.emit()).to.equal(div)
			expect(emitCount).to.equal(0)
			expect(div.emit('something')).to.equal(div)
			expect(emitCount).to.equal(1)
			expect(div.off('something', ()->)).to.equal(div)
			expect(div.emit('something')).to.equal(div)
			expect(emitCount).to.equal(2)

			div.css(null, '129')
			expect(div.el.style.null).to.equal(undefined)

			expect(div.setState()).to.equal undefined
			expect(div.setState(null)).to.equal undefined
			expect(div.setState(123)).to.equal undefined
			expect(div.setState 'base').to.equal div
			expect(div.getState 'base').to.be.false
			expect(div.setState '$whatevs').to.equal div
			expect(div.getState 'whatevs').to.be.true

			div.appendTo(Dom sandbox)
			expect(div.parent).to.equal(Dom sandbox)

			div.append(true)
			expect(div.children.length).to.equal(0)
			div.appendTo(document)
			expect(div.parent).to.equal(Dom sandbox)
			div.prepend(true)
			expect(div.children.length).to.equal(0)
			div.prependTo(true)
			expect(div.parent).to.equal(Dom sandbox)
			div.after(true)
			expect(div.children.length).to.equal(0)
			div.insertAfter(123)
			expect(div.parent).to.equal(Dom sandbox)
			div.before(true)
			expect(div.children.length).to.equal(0)
			div.insertBefore(123)
			expect(div.parent).to.equal(Dom sandbox)
			div.wrap(123)
			expect(div.parent).to.equal(Dom sandbox)
			div.replace(123)
			expect(div.parent).to.equal(Dom sandbox)
			div.detach()
			expect(div.parent).to.equal(undefined)
			div.unwrap()
			expect(div.parent).to.equal(undefined)
			expect(Dom(sandbox).children.length).to.equal 0

			div.appendTo(Dom sandbox)
			expect(Dom(sandbox).children.length).to.equal 1
			if Dom(sandbox)._removeChild
				Dom(sandbox)._removeChild(text)
				Dom(sandbox)._removeChild(Dom.div())
				expect(Dom(sandbox).children.length).to.equal 1

			expect ()-> Dom.batch()
				.to.throw()
			
			expect ()-> Dom.batch({})
				.to.throw()
			
			expect ()-> Dom.batch(5432)
				.to.throw()
			
			expect ()-> Dom.batch([])
				.to.throw()
			
			expect ()-> Dom.batch([12]).append(Dom.div())
				.to.throw()
			
			expect ()-> Dom.batch([12])
				.not.to.throw()
			
			expect ()-> Dom.batch($('div'))
				.not.to.throw()

			expect ()-> Dom.template()
				.to.throw()

			expect ()-> Dom.template(null)
				.to.throw()

			expect ()-> Dom.template({})
				.to.throw()

			expect ()-> Dom.template([8482, {className:'t'}])
				.to.throw()

			expect ()-> Dom.template(['div', 'someString'])
				.to.throw()

			expect ()-> Dom.template(['div', null, 'Some Inner Text'])
				.not.to.throw()















HTMLElement::onEvent = (eventName, callback)->
	if @addEventListener
		@addEventListener(eventName, callback)
	else
		@attachEvent("on#{eventName}", callback)


HTMLElement::removeEvent = (eventName, callback)->
	if @removeEventListener
		@removeEventListener(eventName, callback)
	else
		@detachEvent("on#{eventName}", callback)


HTMLElement::emitEvent = (eventName)->
	event = document.createEvent('Event')
	event.initEvent(eventName, true, false)
	@dispatchEvent(event)


if HTMLElement.name isnt 'HTMLElement'
	HTMLElement.name = 'HTMLElement'
	Text.name = 'Text'
	nonElementSuffix = [
		'OptionsCollection'
		'FormControlsCollection'
		'Document'
		'Collection'
		'AllCollection'
	]
	elementSuffix = [
		"Video","Unknown","UList","Track","Title",
		"TextArea","Template","TableSection","TableRow",
		"Table","TableCol","TableCell","TableCaption",
		"Style","Span","Source","Slot","Shadow","Select",
		"Script","Quote","Progress","Pre","Picture",
		"Param","Paragraph","Output","Option","OptGroup",
		"Object","OList","Mod","Meter","Meta","Menu",
		"Media","Marquee","Map","Link","Legend","Label",
		"LI","Input","Image","IFrame","Html","Heading",
		"Head","HR","FrameSet","Frame","Form","Font",
		"FieldSet","Embed","Div","Directory","Dialog",
		"Details","DataList","DList","Content","Canvas",
		"Button","Body","Base","BR","Audio","Area","Anchor"
	]

	for creator in nonElementSuffix
		window["HTML#{creator}"]?.name = "HTML#{creator}"

	for creator in elementSuffix
		window["HTML#{creator}Element"]?.name = "HTML#{creator}Element"



