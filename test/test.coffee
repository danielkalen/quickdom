@dimensions = import './simulate'
@Dom = window.quickdom
mocha.setup('tdd')
mocha.slow(400)
mocha.timeout(12000)
mocha.bail() unless window.location.hostname
expect = chai.expect
sandbox = null
restartSandbox = ()->
	sandbox.parentElement.removeChild(sandbox) if sandbox
	sandbox = document.createElement('div')
	sandbox.id = 'sandbox'
	sandbox.setAttribute 'style', 'border:1px solid; padding:20px; box-sizing:border-box'
	document.body.appendChild(sandbox)

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
			I = Dom.img(src:'https://google.com/')

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
			expect(I.el.src).to.equal('https://google.com/')


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


		test "Array syntax", ()->
			section = Dom(
				['section', {style:display:'inline'}, 
					['div', null, 'childA']
					['span', null, 
						['strong', null, 'childB']
					]
					['div', null, 'childC', 
						['span', null, 'childC_1']
						['span', null, 'childC_2']
					]
				]
			)

			expect(section).not.to.equal(undefined)
			expect(section.raw.style.display).to.equal('inline')
			expect(section.children.length).to.equal(3)
			expect(section.children[0].children.length).to.equal(1)
			expect(section.children[1].children.length).to.equal(1)
			expect(section.children[2].children.length).to.equal(3)
			expect(section.children[2].children[1].children.length).to.equal(1)
			expect(section.children[2].children[2].children.length).to.equal(1)
			expect(section.children[0].text).to.equal('childA')
			expect(section.children[1].text).to.equal('childB')
			expect(section.children[2].text).to.equal('childCchildC_1childC_2')
			expect(section.children[2].children[1].text).to.equal('childC_1')
			expect(section.children[2].children[2].text).to.equal('childC_2')


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


		test "Document node", ()->
			doc = Dom(document)
			expect(doc).not.to.be.undefined
			expect(doc.raw).to.equal(document)
			expect(doc.parent).to.equal(undefined)
			expect(doc.children.length).to.equal(1)
			expect(Dom(sandbox).parents).not.to.contain(doc)
			expect(Dom(sandbox).parents).to.contain(doc.children[0])


		test "Window object", ()->
			win = Dom(window)
			expect(win).not.to.be.undefined
			expect(win.raw is window).to.be.true
			expect(win.parent).to.equal(undefined)
			expect(win.children).to.equal(undefined)
			expect(win.append).to.equal(undefined)
			expect(win.html).to.equal(undefined)
			expect(win.style).to.equal(undefined)
			expect(Dom(sandbox).parents).not.to.contain(win)


		test "Creation w/ styling", ()->
			div = Dom.div style:
				'width': '10px'
				'height': 15
				'lameo': '19px'
				'background-color': 'blue'
				'backgroundSize': 'cover'

			sandbox.appendChild(div.el)
			computedStyle = getComputedStyle(div.el)

			expect(div.style.lameo).to.equal undefined
			expect(computedStyle.lameo).to.equal undefined
			expect(computedStyle.width).to.equal '10px'
			expect(computedStyle.height).to.equal '15px'
			expect(computedStyle.backgroundColor).not.to.equal ''
			expect(computedStyle.backgroundSize).to.equal 'cover'


		test "SVG elements can be created via a '*' in the element's type string", ()->
			svgBad = Dom('svg').el
			svgGood = Dom('*svg').el
			svgPolyBad = Dom('polyline').el
			svgPolyGood = Dom('*polyline').el
			svgDiv = Dom('*div').el

			expect(svgBad.constructor.name).to.equal('HTMLUnknownElement')
			expect(svgPolyBad.constructor.name).to.equal('HTMLUnknownElement')
			expect(svgGood.constructor.name).to.equal('SVGSVGElement')
			expect(svgPolyGood.constructor.name).to.equal('SVGPolylineElement')
			expect(svgDiv.constructor.name).to.equal('SVGElement')


		test "QuickDom.html() accepts an html string which would be parsed and converted into a QuickBatch instance", ()->
			htmlString = "
				<div>firstChildText</div><span>secondChildText</span>
				textNode
				<strong>abc123</strong>
			"
			window.batch = Dom.html(htmlString)

			expect(typeof batch).to.equal 'object'
			expect(batch.constructor.name).to.equal 'QuickBatch'
			expect(batch.elements.length).to.equal 4
			expect(batch.elements[0].type).to.equal 'div'
			expect(batch.elements[1].type).to.equal 'span'
			expect(batch.elements[2].type).to.equal 'text'
			expect(batch.elements[3].type).to.equal 'strong'
			expect(batch.elements[0].text).to.equal 'firstChildText'
			expect(batch.elements[1].text).to.equal 'secondChildText'
			expect(batch.elements[2].text).to.include 'textNode'
			expect(batch.elements[3].text).to.equal 'abc123'



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


		test "Event handlers can be manually invoked with a custom arg via the .emitPrivate method", ()->
			emitCountA = emitCountB = 0
			arg = null
			div = Dom.div()
			div.on 'myEvent', ()-> emitCountA++; arg = arguments[0]
			div.el.addEventListener 'myEvent', ()-> emitCountB++

			expect(emitCountA).to.equal(0)
			expect(emitCountB).to.equal(0)
			expect(arg).to.equal(null)
			
			div.emitPrivate('myEvent')
			expect(emitCountA).to.equal(1)
			expect(emitCountB).to.equal(0)
			expect(arg).to.equal(undefined)
			
			div.emitPrivate('myEvent', 'abc123')
			expect(emitCountA).to.equal(2)
			expect(emitCountB).to.equal(0)
			expect(arg).to.equal('abc123')
			
			div.el.emitEvent('myEvent')
			expect(emitCountA).to.equal(3)
			expect(emitCountB).to.equal(1)
			expect(arg).not.to.equal('abc123')
			expect(typeof arg).to.equal('object')


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


		test "Events can be named via a '<event>.<name>' syntax which can be used to remove listeners later on without the original callbacks", ()->
			emitCountA = emitCountB = 0
			div = Dom.div().appendTo(sandbox)

			attachListeners = ()->
				div.on 'myEvent.someName', ()-> emitCountA++;
				div.on 'myEvent', ()-> emitCountB++;

			attachListeners()
			expect(emitCountA).to.equal(0)
			expect(emitCountB).to.equal(0)

			div.emit('myEvent')
			expect(emitCountA).to.equal(1)
			expect(emitCountB).to.equal(1)
			
			div.emit('myEvent.someName')
			expect(emitCountA).to.equal(1)
			expect(emitCountB).to.equal(1)
			
			div.off('myEvent.someOtherName')
			div.emit('myEvent')
			expect(emitCountA).to.equal(2)
			expect(emitCountB).to.equal(2)
			
			div.off('myEvent.someName')
			div.emit('myEvent')
			expect(emitCountA).to.equal(2)
			expect(emitCountB).to.equal(3)
			
			div.off('myEvent')
			attachListeners()
			div.emit('myEvent')
			expect(emitCountA).to.equal(3)
			expect(emitCountB).to.equal(4)
			
			div.off('myEvent')
			div.emit('myEvent')
			expect(emitCountA).to.equal(3)
			expect(emitCountB).to.equal(4)


		test "Multiple events can be registered/deregistered at once using whitespace separators", ()->
			emitCount = 0
			div = Dom.div()

			div.on 'one two   three', ()-> emitCount++
			expect(emitCount).to.equal 0

			div.emit('one')
			expect(emitCount).to.equal 1

			div.emit('two')
			expect(emitCount).to.equal 2

			div.emit('three')
			expect(emitCount).to.equal 3

			div.off('one      three')
			div.emit('one')
			expect(emitCount).to.equal 3

			div.emit('two')
			expect(emitCount).to.equal 4

			div.emit('three')
			expect(emitCount).to.equal 4

			div.off()
			div.emit('one'); div.emit('two'); div.emit('three');
			div.on 'one two   three.someName', ()-> emitCount++
			div.on 'one two   three', ()-> emitCount++
			expect(emitCount).to.equal 4

			div.emit('one')
			expect(emitCount).to.equal 6

			div.emit('two')
			expect(emitCount).to.equal 8

			div.emit('three')
			expect(emitCount).to.equal 10

			div.off('two \tone.someName')
			div.emit('one')
			expect(emitCount).to.equal 11

			div.emit('two')
			expect(emitCount).to.equal 12

			div.emit('three')
			expect(emitCount).to.equal 14
			
			div.off('one three')
			div.emit('one')
			expect(emitCount).to.equal 14

			div.emit('two')
			expect(emitCount).to.equal 15

			div.emit('three')
			expect(emitCount).to.equal 15


		test "Events can be listened for once via the .once method", ()->
			emitCountA = emitCountB = 0
			div = Dom.div()
			div.once 'myClick', (event)->
				expect(typeof event).to.equal 'object'
				expect(event.type).to.equal 'myClick'

			div.on 'myClick', ()-> emitCountA++
			div.once 'myClick', ()-> emitCountB++
			

			expect(emitCountA).to.equal(0)
			expect(emitCountB).to.equal(0)
			
			div.el.emitEvent('myClick')
			expect(emitCountA).to.equal(1)
			expect(emitCountB).to.equal(1)
			
			div.el.emitEvent('myClick')
			expect(emitCountA).to.equal(2)
			expect(emitCountB).to.equal(1)
			
			div.once 'myClick', (event)-> emitCountB++
			
			div.el.emitEvent('myClick')
			expect(emitCountA).to.equal(3)
			expect(emitCountB).to.equal(2)
			
			div.el.emitEvent('myClick')
			expect(emitCountA).to.equal(4)
			expect(emitCountB).to.equal(2)


		test "Pre-defined event listeners can be passed in options.events", ()->
			emitCount = 0
			emitContext = null
			listeners =
				'one two three': ()-> emitCount++
				'four': ()-> emitCount++
				'five': ()-> emitContext = @
			
			div = Dom.div(events:listeners)
			expect(emitCount).to.equal 0

			div.emit('one')
			expect(emitCount).to.equal 1

			div.emit('two')
			expect(emitCount).to.equal 2

			div.emit('three')
			expect(emitCount).to.equal 3

			div.emit('four')
			expect(emitCount).to.equal 4

			div.off('one      three')
			div.emit('one')
			expect(emitCount).to.equal 4

			div.emit('two')
			expect(emitCount).to.equal 5

			div.emit('three')
			expect(emitCount).to.equal 5

			div.emit('five')
			expect(emitContext).to.equal div[0]

			div.off()
			div.emit('one'); div.emit('two'); div.emit('three'); div.emit('four');
			expect(emitCount).to.equal 5

			divB = Dom.div(events:listeners)
			divB.emit('one'); divB.emit('three')
			expect(emitCount).to.equal 7
			
			expect(emitContext).to.equal div[0]
			divB.emit('five')
			expect(emitContext).to.equal divB[0]





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


		test ".styleSafe() can be used to obtain the value for a given property even for non-inserted elements or elements with options.styleAfterInsert", ()->
			style =
				width: '8px'
				height: '9px'
				$happy:
					width: '18px'
				$relaxed:
					height: '100%'
			divA = Dom.div {style}
			divB = Dom.div {style, styleAfterInsert:true}

			expect(divA.style('width')).to.equal('')
			expect(divA.raw.style.width).to.equal('8px')
			expect(divA.styleSafe('width')).to.equal('8px')

			divA.state 'happy', on
			expect(divA.style('width')).to.equal('')
			expect(divA.raw.style.width).to.equal('18px')
			expect(divA.styleSafe('width')).to.equal('18px')

			expect(divB.style('width')).to.equal('')
			expect(divB.raw.style.width).to.equal('')
			expect(divB.styleSafe('width')).to.equal('8px')

			divB.state 'happy', on
			expect(divB.style('width')).to.equal('')
			expect(divB.raw.style.width).to.equal('18px')
			expect(divB.styleSafe('width')).to.equal('18px')
			
			expect(divB.style('height')).to.equal('')
			expect(divB.raw.style.height).to.equal('')
			expect(divB.styleSafe('height')).to.equal('9px')
			
			divB.state 'relaxed', on
			expect(divB.style('height')).to.equal('')
			expect(divB.raw.style.height).to.equal('100%')
			expect(divB.styleSafe('height')).to.equal('100%')
			
			divB.appendTo(sandbox)
			expect(divB.style('height')).not.to.equal('')
			expect(divB.style('height')).not.to.equal('100%')
			expect(divB.style('height')).to.contain('px')
			expect(divB.raw.style.height).to.equal('100%')
			expect(divB.styleSafe('height')).to.equal(divB.style('height'))
			expect(divB.styleSafe('height', true)).not.to.equal(divB.style('height'))
			expect(divB.styleSafe('height', true)).to.equal('100%')
			expect(divB.styleSafe('margin', true)).to.equal('')
			expect(divB.style('width')).to.equal('18px')

			expect(divA.styleSafe('fakeProp')).to.equal(divA)
			expect(divA.styleSafe(123)).to.equal(divA)

			text = Dom.text('abc123').appendTo(divA)
			expect(text.styleSafe('fakeProp')).to.equal(undefined)
			expect(text.styleSafe(123)).to.equal(undefined)


		test ".styleSafe() will work with instances with no given base styles", ()->
			divA = Dom.div()
			divB = Dom(document.createElement 'div')

			expect ()->
				divA.styleSafe('height')
				divB.styleSafe('height')
			.not.to.throw()
			
			expect(divA.styleSafe 'height').to.equal ''
			expect(divB.styleSafe 'height').to.equal ''


		test ".styleParsed() is a shorthand for parseFloat(.styleSafe())", ()->
			style =
				width: '8px'
				height: '9px'
				$happy:
					width: '18px'
				$relaxed:
					height: '100%'
			divA = Dom.div {style}
			divB = Dom.div {style, styleAfterInsert:true}

			expect(divA.style('width')).to.equal('')
			expect(divA.styleSafe('width')).to.equal('8px')
			expect(divA.styleParsed('width')).to.equal(parseFloat divA.styleSafe('width'))

			expect(divA.style('height')).to.equal('')
			expect(divA.styleSafe('height')).to.equal('9px')
			expect(divA.styleParsed('height')).to.equal(parseFloat divA.styleSafe('height'))

			expect(divB.style('width')).to.equal('')
			expect(divB.styleSafe('width')).to.equal('8px')
			expect(divB.styleParsed('width')).to.equal(parseFloat divB.styleSafe('width'))

			divA.state 'happy', on
			divB.state 'happy', on
			expect(divA.style('width')).to.equal('')
			expect(divA.styleSafe('width')).to.equal('18px')
			expect(divA.styleParsed('width')).to.equal(parseFloat divA.styleSafe('width'))
			
			expect(divA.style('height')).to.equal('')
			expect(divA.styleSafe('height')).to.equal('9px')
			expect(divA.styleParsed('height')).to.equal(parseFloat divA.styleSafe('height'))

			expect(divB.style('width')).to.equal('')
			expect(divB.styleSafe('width')).to.equal('18px')
			expect(divB.styleParsed('width')).to.equal(parseFloat divB.styleSafe('width'))

			divA.state 'relaxed', on
			divB.state 'relaxed', on
			expect(divA.style('width')).to.equal('')
			expect(divA.styleSafe('width')).to.equal('18px')
			expect(divA.styleParsed('width')).to.equal(parseFloat divA.styleSafe('width'))
			
			expect(divA.style('height')).to.equal('')
			expect(divA.styleSafe('height')).to.equal('100%')
			expect(divA.styleParsed('height')).to.equal(parseFloat divA.styleSafe('height'))

			expect(divB.style('width')).to.equal('')
			expect(divB.styleSafe('width')).to.equal('18px')
			expect(divB.styleParsed('width')).to.equal(parseFloat divB.styleSafe('width'))

			divA.appendTo(sandbox)
			divB.appendTo(sandbox)
			divA.state 'relaxed', off
			divB.state 'relaxed', off
			expect(divA.style('width')).to.equal('18px')
			expect(divA.styleSafe('width')).to.equal('18px')
			expect(divA.styleParsed('width')).to.equal(parseFloat divA.styleSafe('width'))
			
			expect(divA.style('height')).to.equal('9px')
			expect(divA.styleSafe('height')).to.equal('9px')
			expect(divA.styleParsed('height')).to.equal(parseFloat divA.styleSafe('height'))

			expect(divB.style('width')).to.equal('18px')
			expect(divB.styleSafe('width')).to.equal('18px')
			expect(divB.styleParsed('width')).to.equal(parseFloat divB.styleSafe('width'))


		test ".recalcStyle() re-applies all function-value styles", ()->
			count = A:0,B:0,C:0,D:0,E:0,F:0,G:0
			div = Dom.div style:
				width: ()-> ++count.A
				opacity: 1
				height: ()-> ++count.B
				fontSize: ()-> ++count.C
				$happy:
					opacity: 0.5
					fontSize: ()-> ++count.D
				$relaxed:
					height: ()-> ++count.E
					fontSize: ()-> ++count.F
					$funny:
						width: ()-> ++count.G

			expect(count).to.eql A:1,B:1,C:1,D:0,E:0,F:0,G:0
			
			div.recalcStyle()
			expect(count).to.eql A:2,B:2,C:2,D:0,E:0,F:0,G:0
			
			div.state 'happy', on
			expect(count).to.eql A:2,B:2,C:2,D:1,E:0,F:0,G:0

			div.recalcStyle()
			expect(count).to.eql A:3,B:3,C:2,D:2,E:0,F:0,G:0

			div.state 'relaxed', on
			expect(count).to.eql A:3,B:3,C:2,D:2,E:1,F:1,G:0

			div.recalcStyle()
			expect(count).to.eql A:4,B:3,C:2,D:2,E:2,F:2,G:0

			div.state 'funny', on
			expect(count).to.eql A:4,B:3,C:2,D:2,E:2,F:2,G:1

			div.recalcStyle()
			expect(count).to.eql A:4,B:3,C:2,D:2,E:3,F:3,G:2
			
			div.state 'funny', off
			expect(count).to.eql A:5,B:3,C:2,D:2,E:3,F:3,G:2
			
			div.recalcStyle()
			expect(count).to.eql A:6,B:3,C:2,D:2,E:4,F:4,G:2


		test "If options.recalcOnResize is set, .recalcStyle() will be invoked on each resize event", ()->
			count = A:0,B:0,C:0,D:0
			Dom.div
				style:
					width: ()-> ++count.A
					opacity: 1
					height: ()-> ++count.B
			
			Dom.div
				recalcOnResize: true
				style:
					width: ()-> ++count.C
					opacity: 1
					height: ()-> ++count.D

			expect(count).to.eql A:1,B:1,C:1,D:1
			
			Dom(window).emit 'resize'
			expect(count).to.eql A:1,B:1,C:2,D:2
			
			Dom(window).emit 'resize'
			expect(count).to.eql A:1,B:1,C:3,D:3


		test ".show()/.hide() will toggle the element's visibility", ()->
			div = Dom.div().appendTo sandbox
			expect(div.style('display')).to.equal 'block'

			div.hide()
			expect(div.style('display')).to.equal 'none'

			div.show()
			expect(div.style('display')).to.equal 'block'

			div.show()
			expect(div.style('display')).to.equal 'block'


		test ".show() will set the element's display style to the provided argument, or to the value provided in the style object", ()->
			div = Dom.div(style:display:'inline').appendTo sandbox
			expect(div.style('display')).to.equal 'inline'

			div.hide()
			expect(div.style('display')).to.equal 'none'

			div.show()
			expect(div.style('display')).to.equal 'inline'

			div.hide()
			div.show('inline-block')
			expect(div.style('display')).to.equal 'inline-block'





	suite "State", ()->
		test "States can be polled for a value by passing only the target state's name to .state & can be toggled on/off by passing a second argument", ()->
			div = Dom.div()

			expect(div.state 'funny').to.be.false

			div.state 'funny', true
			expect(div.state 'funny').to.be.true
			
			div.state 'happy', true
			div.state 'relaxed', true
			expect(div.state 'funny').to.be.true
			expect(div.state 'happy').to.be.true
			expect(div.state 'relaxed').to.be.true
			
			div.state 'funny', false
			expect(div.state 'funny').to.be.false
			expect(div.state 'happy').to.be.true
			expect(div.state 'relaxed').to.be.true
			
			div.state '$funny', true
			div.state '$base', true
			expect(div.state 'funny').to.be.true
			expect(div.state 'base').to.be.false



		test "All states can be cleared/toggled off via .resetState", ()->
			div = Dom.div()

			div.state 'funny', on
			div.state 'happy', on
			div.state 'relaxed', on
			expect(div.state 'funny').to.be.true
			expect(div.state 'happy').to.be.true
			expect(div.state 'relaxed').to.be.true

			div.resetState()
			expect(div.state 'funny').to.be.false
			expect(div.state 'happy').to.be.false
			expect(div.state 'relaxed').to.be.false


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
			
			div.state 'happy', on
			expect(computedStyle.width).to.equal('25px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('20px')
			expect(computedStyle.marginLeft).to.equal('0px')
			
			div.state 'happy', off
			expect(computedStyle.width).to.equal('15px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('0px')
			expect(computedStyle.marginLeft).to.equal('0px')
			
			div.state 'happy', on
			div.state 'relaxed', on
			expect(computedStyle.width).to.equal('35px')
			expect(computedStyle.height).to.equal('15px')
			expect(computedStyle.marginTop).to.equal('20px')
			expect(computedStyle.marginLeft).to.equal('12px')
			
			div.state 'happy', off
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

			expect(div.state 'happy').to.be.false
			expect(div.state 'relaxed').to.be.false
			expect(computedStyle.width).to.equal('15px')

			div.emit('becameHappy')
			expect(div.state 'happy').to.be.true
			expect(div.state 'relaxed').to.be.false
			expect(computedStyle.width).to.equal('25px')

			div.emit('isRelaxed')
			expect(div.state 'happy').to.be.true
			expect(div.state 'relaxed').to.be.true
			expect(computedStyle.width).to.equal('35px')

			div.emit('becameSad')
			expect(div.state 'happy').to.be.false
			expect(div.state 'relaxed').to.be.true
			expect(computedStyle.width).to.equal('35px')

			div.state('relaxed', off)
			expect(computedStyle.width).to.equal('15px')


		test "options.stateTriggers won't be attached if they aren't being used in style object", ()->
			divA = Dom.div(style:{$hover: display:'block'})
			divB = Dom.div(style:{$focus: display:'block'})

			expect(divA.state 'hover').to.equal off
			expect(divB.state 'hover').to.equal off

			divA.el.emitEvent 'mouseenter'
			divB.el.emitEvent 'mouseenter'
			expect(divA.state 'hover').to.equal on
			expect(divB.state 'hover').to.equal off

			divA.el.emitEvent 'mouseleave'
			divB.el.emitEvent 'mouseleave'
			expect(divA.state 'hover').to.equal off
			expect(divB.state 'hover').to.equal off

			divA.el.emitEvent 'focus'
			divB.el.emitEvent 'focus'
			expect(divA.state 'focus').to.equal off
			expect(divB.state 'focus').to.equal on

			divA.el.emitEvent 'blur'
			divB.el.emitEvent 'blur'
			expect(divA.state 'focus').to.equal off
			expect(divB.state 'focus').to.equal off


		test "options.stateTriggers can be forced to be attached even if they aren't being used in style object via ._attachStateEvents(true)", ()->
			divA = Dom.div(style:{$hover: display:'block'})
			divB = Dom.div(style:{$focus: display:'block'})
			divA._attachStateEvents(true)
			divB._attachStateEvents(true)

			expect(divA.state 'hover').to.equal off
			expect(divB.state 'hover').to.equal off

			divA.el.emitEvent 'mouseenter'
			divB.el.emitEvent 'mouseenter'
			expect(divA.state 'hover').to.equal on
			expect(divB.state 'hover').to.equal on

			divA.el.emitEvent 'mouseleave'
			divB.el.emitEvent 'mouseleave'
			expect(divA.state 'hover').to.equal off
			expect(divB.state 'hover').to.equal off

			divA.el.emitEvent 'focus'
			divB.el.emitEvent 'focus'
			expect(divA.state 'focus').to.equal on
			expect(divB.state 'focus').to.equal on

			divA.el.emitEvent 'blur'
			divB.el.emitEvent 'blur'
			expect(divA.state 'focus').to.equal off
			expect(divB.state 'focus').to.equal off


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

			expect(Main.state 'happy').to.be.false
			expect(A.state 'happy').to.be.false
			expect(B.state 'happy').to.be.false
			expect(C.state 'happy').to.be.false

			Main.state 'happy', on
			expect(Main.state 'happy').to.be.true
			expect(A.state 'happy').to.be.true
			expect(B.state 'happy').to.be.true
			expect(C.state 'happy').to.be.true

			Main.options.passStateToChildren = false
			Main.state 'happy', false
			expect(Main.state 'happy').to.be.false
			expect(A.state 'happy').to.be.true
			expect(B.state 'happy').to.be.true
			expect(C.state 'happy').to.be.true

			Main.state 'happy', on
			Main.options.passStateToChildren = true
			A.options.passStateToChildren = false
			Main.state 'happy', false
			expect(Main.state 'happy').to.be.false
			expect(A.state 'happy').to.be.false
			expect(B.state 'happy').to.be.true
			expect(C.state 'happy').to.be.true


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

			div.state 'funny', on
			expect(div.style 'width').to.equal('12px')
			expect(div.style 'height').to.equal('15px')
			expect(div.style 'fontSize').to.equal('15px')

			div.state 'funny', off
			expect(div.style 'width').to.equal('12px')
			expect(div.style 'height').to.equal('12px')
			expect(div.style 'fontSize').to.equal('10px')

			div.state 'happy', on
			expect(div.style 'width').to.equal('14px')
			expect(div.style 'height').to.equal('12px')
			expect(div.style 'fontSize').to.equal('14px')

			div.state 'relaxed', on
			expect(div.style 'width').to.equal('17px')
			expect(div.style 'height').to.equal('11px')
			expect(div.style 'fontSize').to.equal('17px')

			div.state 'happy', off
			expect(div.style 'width').to.equal('17px')
			expect(div.style 'height').to.equal('12px')
			expect(div.style 'fontSize').to.equal('10px')

			div.state 'happy', on
			expect(div.style 'width').to.equal('17px')
			expect(div.style 'height').to.equal('11px')
			expect(div.style 'fontSize').to.equal('17px')
			
			div.state 'funny', on
			expect(div.style 'width').to.equal('10px')
			expect(div.style 'height').to.equal('14px')
			expect(div.style 'fontSize').to.equal('17px')

			div.state 'happy', off
			expect(div.style 'width').to.equal('17px')
			expect(div.style 'height').to.equal('15px')
			expect(div.style 'fontSize').to.equal('15px')


		test "QuickElement.rect should contain an updated version of the element's ClientRect", ()->
			div = Dom.div().appendTo(sandbox)
			rectA = div.rect
			rectB = div.rect

			expect(rectA).to.be.instanceOf(ClientRect)
			expect(rectB).to.be.instanceOf(ClientRect)
			expect(rectA).to.eql(rectB)


			div.style 'width', '7px'
			rectC = div.rect
			expect(rectC).to.be.instanceOf(ClientRect)
			expect(rectA).to.eql(rectB)
			expect(rectA).not.to.eql(rectC)
			expect(rectA.width).not.to.equal(7)
			expect(rectB.width).not.to.equal(7)
			expect(rectC.width).to.equal(7)


		test "QuickElement.width should return the updated version of an element's computed width", ()->
			parent = Dom.div().appendTo(sandbox)
			div = Dom.div().appendTo(parent)
			
			parent.style width:'1000px'
			div.style width:'50%'
			expect(div.width).to.equal(500)
			
			div.style width:'10%'
			expect(div.width).to.equal(100)
			
			div.style width:'97px'
			expect(div.width).to.equal(97)


		test "QuickElement.height should return the updated version of an element's computed height", ()->
			parent = Dom.div().appendTo(sandbox)
			div = Dom.div().appendTo(parent)
			
			parent.style height:'1000px'
			div.style height:'50%'
			expect(div.height).to.equal(500)
			
			div.style height:'10%'
			expect(div.height).to.equal(100)
			
			div.style height:'97px'
			expect(div.height).to.equal(97)


		test "QuickElement.orientation should return the updated version of an element's computed orientation", ()->
			parent = Dom.div().appendTo(sandbox)
			div = Dom.div().appendTo(parent)
			
			div.style width:500, height:400
			expect(div.orientation).to.equal('landscape')
			
			div.style width:550, height:600
			expect(div.orientation).to.equal('portrait')
			
			div.style width:600, height:600
			expect(div.orientation).to.equal('portrait')
			
			div.style width:601, height:600
			expect(div.orientation).to.equal('landscape')


		test "QuickElement.aspectRatio should return the updated version of an element's computed aspect-ratio", ()->
			parent = Dom.div().appendTo(sandbox)
			div = Dom.div().appendTo(parent)
			
			div.style width:500, height:400
			expect(div.aspectRatio).to.equal(1.25)
			
			div.style width:540, height:600
			expect(div.aspectRatio).to.equal(0.9)
			
			div.style width:600, height:600
			expect(div.aspectRatio).to.equal(1)
			
			div.style width:300, height:900
			expect(div.aspectRatio).to.equal(0.33333333333333333333333333)


		test "If options.styleAfterInsert is passed, base styles will be applied only after the element is inserted into the DOM", ()->
			parentOpacityGetter = ()-> if @parent then @parent.style('opacity') else '0.5'
			divReg = Dom.div(style:{height:'19px', opacity:parentOpacityGetter})
			divA = Dom.div(style:{height:'19px', opacity:parentOpacityGetter}, styleAfterInsert:true)
			divB = Dom.div(style:{height:'19px', opacity:parentOpacityGetter}, styleAfterInsert:true)
			divC = Dom.div(style:{height:'19px', opacity:parentOpacityGetter}, styleAfterInsert:true)

			expect(divReg.el.style.height).to.equal('19px')
			expect(divReg.el.style.opacity).to.equal('0.5')
			expect(divA.el.style.height).to.equal('')
			expect(divB.el.style.height).to.equal('')
			expect(divC.el.style.height).to.equal('')
			expect(divA.el.style.opacity).to.equal('')
			expect(divB.el.style.opacity).to.equal('')
			expect(divC.el.style.opacity).to.equal('')
			
			divA.appendTo(sandbox)
			expect(divA.el.style.height).to.equal('19px')
			expect(divB.el.style.height).to.equal('')
			expect(divC.el.style.height).to.equal('')
			expect(divA.el.style.opacity).to.equal('1')
			expect(divB.el.style.opacity).to.equal('')
			expect(divC.el.style.opacity).to.equal('')
			
			divB.insertBefore(sandbox)
			expect(divA.el.style.height).to.equal('19px')
			expect(divB.el.style.height).to.equal('19px')
			expect(divC.el.style.height).to.equal('')
			expect(divA.el.style.opacity).to.equal('1')
			expect(divB.el.style.opacity).to.equal('1')
			expect(divC.el.style.opacity).to.equal('')
			
			sandbox.appendChild(divC.el)
			expect(divA.el.style.height).to.equal('19px')
			expect(divB.el.style.height).to.equal('19px')
			expect(divC.el.style.height).to.equal('')
			expect(divA.el.style.opacity).to.equal('1')
			expect(divB.el.style.opacity).to.equal('1')
			expect(divC.el.style.opacity).to.equal('')
			
			divC.parent
			expect(divA.el.style.height).to.equal('19px')
			expect(divB.el.style.height).to.equal('19px')
			expect(divC.el.style.height).to.equal('19px')
			expect(divA.el.style.opacity).to.equal('1')
			expect(divB.el.style.opacity).to.equal('1')
			expect(divC.el.style.opacity).to.equal('1')
			divC.appendTo(sandbox)


		test "Any styles applied by states before the element has been inserted into the DOM and when options.styleAfterInsert is on will be re-applied after insert", ()->
			divReg = Dom.div(style:{$base:{height:'19px'}, $funny:{height:'29px'}, $happy:{height:'39px'}})
			divA = Dom.div(style:{$base:{height:'19px'}, $funny:{height:'29px'}, $happy:{height:'39px'}}, styleAfterInsert:true)

			expect(divReg.el.style.height).to.equal('19px')
			expect(divA.el.style.height).to.equal('')

			divReg.state 'funny', on
			divA.state 'funny', on
			expect(divReg.el.style.height).to.equal('29px')
			expect(divA.el.style.height).to.equal('29px')
			
			divReg.state 'happy', on
			divA.state 'happy', on
			expect(divReg.el.style.height).to.equal('39px')
			expect(divA.el.style.height).to.equal('39px')
			
			divReg.appendTo(sandbox)
			divA.appendTo(sandbox)
			expect(divReg.el.style.height).to.equal('39px')
			expect(divA.el.style.height).to.equal('39px')


		test "If an element with options.styleAfterInsert is appended into a detached element, styles will be applied only after the parent is appended to the DOM", ()->
			detachedParent = Dom.div()
			divReg = Dom.div(style:{height:'19px', $happy:$relaxed:{width:'31px'}})
			divA = Dom.div(style:{height:'19px', $happy:$relaxed:{width:'31px'}}, styleAfterInsert:true)

			divReg.state 'happy', on
			divReg.state 'relaxed', on
			divA.state 'happy', on
			divA.state 'relaxed', on
			divA.state 'relaxed', on
			divA.style 'visibility', 'hidden'

			expect(divReg.el.style.height).to.equal('19px')
			expect(divReg.el.style.width).to.equal('31px')
			expect(divA.el.style.height).to.equal('')
			expect(divA.el.style.width).to.equal('31px')
			expect(divA.el.style.visibility).to.equal('hidden')

			divA.appendTo(detachedParent)
			expect(divA.el.style.height).to.equal('')
			expect(divA.el.style.width).to.equal('31px')
			expect(divA.el.style.visibility).to.equal('hidden')

			detachedParent.appendTo(sandbox)
			expect(divA.el.style.height).to.equal('19px')
			expect(divA.el.style.width).to.equal('31px')
			expect(divA.el.style.visibility).to.equal('hidden')


		test "QuickElement.onInserted can accept callbacks which will be invoked when inserted into the DOM", ()->
			invokeCount = 0
			parentA = Dom.section()
			parentB = Dom.section()
			masterParentB = Dom.div()
			parentC = Dom.section().appendTo(sandbox)
			div = Dom.div()

			div.onInserted (el)->
				expect(el).to.equal(div)
				expect(invokeCount++).to.equal(0)

			expect(invokeCount).to.equal(0)
			div.appendTo(parentA)
			expect(invokeCount).to.equal(0)
			
			div.appendTo(parentB.appendTo(masterParentB))
			expect(invokeCount).to.equal(0)
			
			parentA.appendTo(sandbox)
			expect(invokeCount).to.equal(0)
			
			div.appendTo(parentC)
			expect(invokeCount).to.equal(1)

			div.detach()
			div.appendTo(parentB.appendTo(sandbox))
			expect(invokeCount).to.equal(1)
			expect(div.parent).to.equal parentB

			div.onInserted ()-> expect(invokeCount++).to.equal(1)
			expect(invokeCount).to.equal(2)
			expect(div.parent).to.equal parentB
			
			div.appendTo(parentC)
			expect(invokeCount).to.equal(2)
			expect(div.parent).to.equal parentC
			
			div.detach()
			div.appendTo(parentA)
			div.onInserted (()-> invokeCount++; expect(false).to.be.true), false
			expect(invokeCount).to.equal(2)
			
			div.detach()
			div.appendTo(parentB)
			expect(invokeCount).to.equal(2)


		test "QuickElement.replace will trigger the onInserted event", ()->
			invokeCount = 0
			parent = Dom.section().appendTo(sandbox)
			A = Dom.div()
			B = Dom.div()

			B.onInserted (el)->
				expect(el).to.equal(B)
				expect(invokeCount++).to.equal(0)

			expect(invokeCount).to.equal 0
			expect(A.parent).to.equal(undefined)
			expect(B.parent).to.equal(undefined)

			parent.append(A)
			expect(invokeCount).to.equal 0
			expect(A.parent).to.equal(parent)
			expect(B.parent).to.equal(undefined)

			A.replace(B)
			expect(invokeCount).to.equal 1
			expect(A.parent).to.equal(undefined)
			expect(B.parent).to.equal(parent)


		test "QuickElement.pipeState can be used to redirect all state toggles to the provided target element", ()->
			parentA = Dom.div()
			parentB = Dom.div(passStateToChildren:false)
			divA = Dom.div(null).appendTo(parentA)
			divB = Dom.div(null).appendTo(parentB)
			childA = Dom.span().appendTo(divA)
			childB = Dom.span().appendTo(divB)

			divA.pipeState()
			divA.state '1', on
			expect(parentA.state '1').to.equal off
			expect(divA.state '1').to.equal on
			expect(childA.state '1').to.equal on
			
			divA.pipeState(parentA)
			divA.state '2', on
			expect(parentA.state '2').to.equal on
			expect(divA.state '2').to.equal on
			expect(childA.state '2').to.equal on

			divA.pipeState(false)
			divA.state '2.5', on
			expect(parentA.state '2.5').to.equal off
			expect(divA.state '2.5').to.equal on
			expect(childA.state '2.5').to.equal on
			
			divB.pipeState(true)
			divB.state '3', on
			expect(parentB.state '3').to.equal off
			expect(divB.state '3').to.equal on
			expect(childB.state '3').to.equal on
			
			divB.pipeState(parentB)
			divB.state '4', on
			expect(parentB.state '4').to.equal on
			expect(divB.state '4').to.equal off
			expect(childB.state '4').to.equal off
			
			divA.pipeState(parentB)
			divA.state '5', on
			expect(parentA.state '5').to.equal off
			expect(parentB.state '5').to.equal on
			expect(divA.state '5').to.equal off
			expect(divB.state '5').to.equal off
			expect(childA.state '5').to.equal off
			expect(childB.state '5').to.equal off
			
			divA.pipeState(false)
			divB.pipeState(parentA)
			divB.state '6', on
			expect(parentA.state '6').to.equal on
			expect(parentB.state '6').to.equal off
			expect(divA.state '6').to.equal on
			expect(divB.state '6').to.equal off
			expect(childA.state '6').to.equal on
			expect(childB.state '6').to.equal off


		test "States can be marked as unpassable to avoid passing to children by including them in options.unpassableStates", ()->
			div = Dom.div(unpassableStates: ['B','D'])
			spanA = Dom.span().appendTo(div)
			spanB = Dom.span().appendTo(div)
			subSpan = Dom.span().appendTo(spanB)

			expect(div.state 'A').to.equal off
			expect(spanA.state 'A').to.equal off
			expect(spanB.state 'A').to.equal off
			expect(subSpan.state 'A').to.equal off

			div.state 'A', on
			expect(div.state 'A').to.equal on
			expect(spanA.state 'A').to.equal on
			expect(spanB.state 'A').to.equal on
			expect(subSpan.state 'A').to.equal on

			div.state 'B', on
			expect(div.state 'B').to.equal on
			expect(spanA.state 'B').to.equal off
			expect(spanB.state 'B').to.equal off
			expect(subSpan.state 'B').to.equal off

			div.state 'C', on
			expect(div.state 'C').to.equal on
			expect(spanA.state 'C').to.equal on
			expect(spanB.state 'C').to.equal on
			expect(subSpan.state 'C').to.equal on

			div.state 'D', on
			expect(div.state 'D').to.equal on
			expect(spanA.state 'D').to.equal off
			expect(spanB.state 'D').to.equal off
			expect(subSpan.state 'D').to.equal off
			
			spanB.state 'D', on
			expect(spanB.state 'D').to.equal on
			expect(subSpan.state 'D').to.equal on
			
			div.state 'D', off
			expect(div.state 'D').to.equal off
			expect(spanB.state 'D').to.equal on
			expect(subSpan.state 'D').to.equal on


		test "When .state() receives a truthy value as the third argument the event will bubble up to parents instead of cascade to children", ()->
			parentA = Dom.section null,
				subParentA = Dom.div null,
					childA = Dom.div null,
						subChildA = Dom.div()
			
			parentB = Dom.section null,
				subParentB = Dom.div null,
					childB = Dom.div null,
						subChildB = Dom.div()

			expect(parentA.state 'happy').to.equal off
			expect(parentB.state 'happy').to.equal off
			expect(subParentA.state 'happy').to.equal off
			expect(subParentB.state 'happy').to.equal off
			expect(childA.state 'happy').to.equal off
			expect(childB.state 'happy').to.equal off
			expect(subChildA.state 'happy').to.equal off
			expect(subChildB.state 'happy').to.equal off

			childA.state 'happy', on, true
			childB.state 'happy', on

			expect(parentA.state 'happy').to.equal on
			expect(parentB.state 'happy').to.equal off
			expect(subParentA.state 'happy').to.equal on
			expect(subParentB.state 'happy').to.equal off
			expect(childA.state 'happy').to.equal on
			expect(childB.state 'happy').to.equal on
			expect(subChildA.state 'happy').to.equal off
			expect(subChildB.state 'happy').to.equal on

			childA.state 'relaxed', on, null
			childB.state 'relaxed', on, 'on'

			expect(parentA.state 'relaxed').to.equal off
			expect(parentB.state 'relaxed').to.equal on
			expect(subParentA.state 'relaxed').to.equal off
			expect(subParentB.state 'relaxed').to.equal on
			expect(childA.state 'relaxed').to.equal on
			expect(childB.state 'relaxed').to.equal on
			expect(subChildA.state 'relaxed').to.equal on
			expect(subChildB.state 'relaxed').to.equal off


		test "options.stateTriggers config objects can specify a 'force' property which will make them get attached even if they aren't used", ()->
			divA = Dom.div stateTriggers:{'happy': on:'happyON', off:'happyOFF', force:true}
			divB = Dom.div stateTriggers:{'happy': on:'happyON', off:'happyOFF'}

			expect(divA.state 'happy').to.equal off
			expect(divB.state 'happy').to.equal off

			divA.raw.emitEvent 'happyON'
			divB.raw.emitEvent 'happyON'

			expect(divA.state 'happy').to.equal on
			expect(divB.state 'happy').to.equal off

			divB.state 'happy', on
			divA.raw.emitEvent 'happyOFF'
			divB.raw.emitEvent 'happyOFF'

			expect(divA.state 'happy').to.equal off
			expect(divB.state 'happy').to.equal on


		test "options.stateTriggers config objects can specify a 'bubbles' property which will cause the state to bubble to parents instead of cascade to children", ()->
			parentA = Dom.section null,
				subParentA = Dom.div null,
					childA = Dom.div stateTriggers:{'happy': on:'happyON', off:'happyOFF', bubbles:true, force:true},
						subChildA = Dom.div()
			
			parentB = Dom.section null,
				subParentB = Dom.div null,
					childB = Dom.div stateTriggers:{'happy': on:'happyON', off:'happyOFF', force:true},
						subChildB = Dom.div()

			expect(parentA.state 'happy').to.equal off
			expect(parentB.state 'happy').to.equal off
			expect(subParentA.state 'happy').to.equal off
			expect(subParentB.state 'happy').to.equal off
			expect(childA.state 'happy').to.equal off
			expect(childB.state 'happy').to.equal off
			expect(subChildA.state 'happy').to.equal off
			expect(subChildB.state 'happy').to.equal off

			childA.raw.emitEvent 'happyON'
			childB.raw.emitEvent 'happyON'

			expect(parentA.state 'happy').to.equal on
			expect(parentB.state 'happy').to.equal off
			expect(subParentA.state 'happy').to.equal on
			expect(subParentB.state 'happy').to.equal off
			expect(childA.state 'happy').to.equal on
			expect(childB.state 'happy').to.equal on
			expect(subChildA.state 'happy').to.equal off
			expect(subChildB.state 'happy').to.equal on

			childA.raw.emitEvent 'happyOFF'
			childB.raw.emitEvent 'happyOFF'

			expect(parentA.state 'happy').to.equal off
			expect(parentB.state 'happy').to.equal off
			expect(subParentA.state 'happy').to.equal off
			expect(subParentB.state 'happy').to.equal off
			expect(childA.state 'happy').to.equal off
			expect(childB.state 'happy').to.equal off
			expect(subChildA.state 'happy').to.equal off
			expect(subChildB.state 'happy').to.equal off


		test "wrappers created for existing elements should attempt to resolve if its inserted into the DOM on init", ()->
			divA_ = document.createElement('div')
			divB_ = document.createElement('div')
			sandbox.appendChild(divB_)
			divA = Dom(divA_)
			divB = Dom(divB_)

			divA_.style.height = '100px'
			divB_.style.height = '100px'

			expect(typeof divA.height).to.equal('number')
			expect(typeof divB.height).to.equal('number')
			expect(isNaN divA.height).to.be.true
			expect(isNaN divB.height).to.be.false
			expect(divA.styleSafe 'height').to.equal '100px'


		test "state-based text", ()->
			divA = Dom(
				['div', null,
					['text',
						text:
							$base: 'abc123'
							$happy: 'Happy'
							$relaxed: 'Relaxed'
					]
				]
			)
			divB = Dom(
				['div', null,
					['text',
						text:
							$happy: 'Happy'
							$relaxed: 'Relaxed'
							'$relaxed+funny': 'Funny & Relaxed'
					]
				]
			)
			expect(divA.text).to.equal 'abc123'
			expect(divB.text).to.equal ''
			
			divA.state 'happy', on
			divB.state 'happy', on
			expect(divA.text).to.equal 'Happy'
			expect(divB.text).to.equal 'Happy'
			
			divA.state 'happy', off
			divB.state 'happy', off
			expect(divA.text).to.equal 'abc123'
			expect(divB.text).to.equal ''
			
			divA.state 'relaxed', on
			divB.state 'relaxed', on
			expect(divA.text).to.equal 'Relaxed'
			expect(divB.text).to.equal 'Relaxed'
			
			divA.state 'happy', on
			divB.state 'happy', on
			expect(divA.text).to.equal 'Relaxed'
			expect(divB.text).to.equal 'Relaxed'
			
			divA.state 'relaxed', off
			divB.state 'relaxed', off
			expect(divA.text).to.equal 'Happy'
			expect(divB.text).to.equal 'Happy'
			
			divB.state 'relaxed', on
			divB.state 'funny', on
			expect(divB.text).to.equal 'Relaxed'

			divB.state 'relaxed+funny', on
			expect(divB.text).to.equal 'Funny & Relaxed'





	suite "Media Queries", ()->
		suiteTeardown ()-> dimensions.restore()
		suiteSetup ()->
			@skip() if not Object.getOwnPropertyDescriptor(window, 'innerWidth')?.configurable


		test "Window dimensions", ()->
			dimensions.simulate(1000, 1000)
			div = Dom.div style:
				position: 'relative'
				zIndex: 2
				width: '300px'
				height: '300px'
				fontSize: '30px'
				lineHeight: '30px'

				'@window(orientation:landscape)':
					fontWeight: 600

				'@window(orientation:portrait)':
					fontWeight: 700

				'@window(max-width:800)':
					zIndex: 3
					width: '280px'
				
				'@window(max-width:700, max-height:1000)':
					zIndex: 4
					width: '250px'
					height: '250px'
				
				'@window(max-height:1000)':
					fontSize: '25px'
				
				'@window(min-width:900px)':
					fontSize: '23px'
				
				'@window(aspect-ratio:0.5)':
					fontSize: '21px'
					lineHeight: '12px'
				
				'@window(min-height:1200)':
					fontSize: '20px'

			div.appendTo(sandbox)
			
			expect(div.raw.style.zIndex).to.equal '2'
			expect(div.raw.style.width).to.equal '300px'
			expect(div.raw.style.height).to.equal '300px'
			expect(div.raw.style.fontSize).to.equal '23px'
			expect(div.raw.style.fontWeight).to.equal '700'
			
			dimensions.simulate(900)
			expect(div.raw.style.fontSize).to.equal '23px'
			
			dimensions.simulate(899)
			expect(div.raw.style.fontSize).to.equal '25px'

			dimensions.simulate(899, 1100)
			expect(div.raw.style.fontSize).to.equal '30px'

			dimensions.simulate(950)
			expect(div.raw.style.fontSize).to.equal '23px'

			dimensions.simulate(950, 1900)
			expect(div.raw.style.fontSize).to.equal '20px'
			expect(div.raw.style.lineHeight).to.equal '12px'
			
			dimensions.simulate(950, 1899)
			expect(div.raw.style.fontSize).to.equal '20px'
			expect(div.raw.style.lineHeight).to.equal '30px'

			dimensions.simulate(790)
			expect(div.raw.style.zIndex).to.equal '3'
			expect(div.raw.style.width).to.equal '280px'

			dimensions.simulate(810)
			expect(div.raw.style.zIndex).to.equal '2'
			expect(div.raw.style.width).to.equal '300px'

			dimensions.simulate(791)
			expect(div.raw.style.zIndex).to.equal '3'
			expect(div.raw.style.width).to.equal '280px'

			dimensions.simulate(701, 900)
			expect(div.raw.style.zIndex).to.equal '3'
			expect(div.raw.style.width).to.equal '280px'
			expect(div.raw.style.height).to.equal '300px'

			dimensions.simulate(700, 900)
			expect(div.raw.style.zIndex).to.equal '4'
			expect(div.raw.style.width).to.equal '250px'
			expect(div.raw.style.height).to.equal '250px'

			dimensions.simulate(700, 1001)
			expect(div.raw.style.zIndex).to.equal '3'
			expect(div.raw.style.width).to.equal '280px'
			expect(div.raw.style.height).to.equal '300px'

			dimensions.simulate(700, 1000)
			expect(div.raw.style.zIndex).to.equal '4'
			expect(div.raw.style.width).to.equal '250px'
			expect(div.raw.style.height).to.equal '250px'
			expect(div.raw.style.fontWeight).to.equal '700'
			
			dimensions.simulate(1100, 1000)
			expect(div.raw.style.fontWeight).to.equal '600'
			
			dimensions.simulate(1100, 1101)
			expect(div.raw.style.fontWeight).to.equal '700'


		test "Self dimensions/styles", ()->
			parent = Dom.div().appendTo(sandbox)
			simulateParent = (width, height)->
				parent.style 'width', width if width
				parent.style 'height', height if height
				dimensions.simulate()
			
			div = Dom.div style:
				position: 'relative'
				zIndex: 2
				top: '30px'
				width: '100%'
				height: '100%'
				fontSize: '30px'
				lineHeight: '30px'

				'@self(orientation:landscape)':
					fontWeight: 600

				'@self(orientation:portrait)':
					fontWeight: 700
				
				'@self(position:relative)':
					top: '20px'

				'@self(max-width:350)':
					zIndex: 3
					fontSize: '33px'
				
				'@self(max-width:500, min-height:400)':
					zIndex: 4
					fontSize: '27px'
					lineHeight: '37px'
				
				'@self(zIndex:4)':
					lineHeight: '15px'
				
				'@self(min-zIndex:6)':
					opacity: '0'
				
				'@self(max-fontSize:20)':
					lineHeight: '19px'
				
				'@self(min-width:600px)':
					fontSize: '19px'
				
				'@self(aspect-ratio:2.25)':
					fontSize: '21px'
					lineHeight: '12px'
				
				'@self(min-height:700)':
					fontSize: '40px'

			simulateParent(400, 300)
			div.appendTo(parent)
			expect(div.style 'zIndex').to.equal '2'
			expect(div.style 'width').to.equal '400px'
			expect(div.style 'height').to.equal '300px'
			expect(div.style 'fontSize').to.equal '30px'
			expect(div.style 'lineHeight').to.equal '30px'
			expect(div.style 'fontWeight').to.equal '600'
			expect(div.style 'top').to.equal '20px'
			
			simulateParent(349, 420)
			expect(div.style 'zIndex').to.equal '4'
			expect(div.style 'fontSize').to.equal '27px'
			expect(div.style 'lineHeight').to.equal '15px'
			
			simulateParent(349, 399)
			expect(div.style 'zIndex').to.equal '3'
			expect(div.style 'fontSize').to.equal '33px'
			
			simulateParent(349, 401)
			expect(div.style 'zIndex').to.equal '4'
			expect(div.style 'fontSize').to.equal '27px'
			expect(div.style 'lineHeight').to.equal '15px'
			expect(div.style 'opacity').to.equal '1'
			
			div.style('zIndex', 5)
			dimensions.simulate()
			expect(div.style 'opacity').to.equal '1'
			expect(div.style 'lineHeight').to.equal '37px'
			
			div.style('zIndex', 17)
			expect(div.style 'opacity').to.equal '1'
			
			dimensions.simulate()
			expect(div.style 'opacity').to.equal '0'

			simulateParent(900)
			expect(div.style 'fontSize').to.equal '19px'
			expect(div.style 'lineHeight').to.equal '30px'
			
			simulateParent(900)
			expect(div.style 'lineHeight').to.equal '19px'
			
			simulateParent(900, 400)
			expect(div.style 'fontSize').to.equal '21px'
			expect(div.style 'lineHeight').to.equal '12px'
			
			simulateParent(2025, 900)
			expect(div.style 'fontSize').to.equal '40px'
			expect(div.style 'lineHeight').to.equal '12px'
			expect(div.raw.style.fontWeight).to.equal '600'
			
			simulateParent(2025, 2026)
			expect(div.raw.style.fontWeight).to.equal '700'


		test "Parent dimensions/styles", ()->
			parent = Dom.div(style:{position:'absolute'}).appendTo(sandbox)
			simulateParent = (width, height)->
				parent.style 'width', width if width
				parent.style 'height', height if height
				dimensions.simulate()
			
			div = Dom.div style:
				position: 'relative'
				zIndex: 2
				top: '30px'
				width: '400px'
				height: '300px'
				fontSize: '30px'
				lineHeight: '30px'

				'@parent(orientation:landscape)':
					fontWeight: 600

				'@parent(orientation:portrait)':
					fontWeight: 700
				
				'@parent(position:relative)':
					top: '20px'

				'@parent(max-width:350)':
					zIndex: 3
					fontSize: '33px'
				
				'@parent(max-width:500, min-height:400)':
					zIndex: 4
					fontSize: '27px'
					lineHeight: '37px'
				
				'@parent(zIndex:7)':
					lineHeight: '15px'


			simulateParent(400, 300)
			div.appendTo(parent)
			expect(div.style 'zIndex').to.equal '2'
			expect(div.style 'width').to.equal '400px'
			expect(div.style 'height').to.equal '300px'
			expect(div.style 'fontSize').to.equal '30px'
			expect(div.style 'lineHeight').to.equal '30px'
			expect(div.style 'fontWeight').to.equal '600'
			expect(div.style 'top').to.equal '30px'

			parent.style 'position', 'relative'
			expect(div.style 'top').to.equal '30px'

			simulateParent()
			expect(div.style 'top').to.equal '20px'

			simulateParent(349, 420)
			expect(div.style 'zIndex').to.equal '4'
			expect(div.style 'fontSize').to.equal '27px'
			expect(div.style 'lineHeight').to.equal '37px'
			
			simulateParent(349, 399)
			expect(div.style 'zIndex').to.equal '3'
			expect(div.style 'fontSize').to.equal '33px'
			
			parent.style 'zIndex', '7'
			simulateParent(349, 401)
			expect(div.style 'zIndex').to.equal '4'
			expect(div.style 'fontSize').to.equal '27px'
			expect(div.style 'lineHeight').to.equal '15px'
			expect(div.style 'opacity').to.equal '1'


		test "Parent Ref dimensions/styles", ()->
			parent =
				Dom.div({ref:'abc'},
					Dom.div {id:'def'},
						Dom.div {ref:'ghi'}
				).appendTo(sandbox)
			
			div = Dom.div style:
				position: 'relative'
				zIndex: 2
				top: '30px'
				width: '400px'
				height: '300px'
				fontSize: '30px'
				lineHeight: '30px'

				'@#abc(orientation:landscape)':
					fontWeight: 600

				'@#abc(orientation:portrait)':
					fontWeight: 500
				
				'@#def(position:relative)':
					top: '20px'

				'@#def(max-width:350)':
					zIndex: 3
					fontSize: '33px'
				
				'@#ghi(max-width:500, min-height:400)':
					zIndex: 4
					fontSize: '27px'
					lineHeight: '37px'
				
				'@#abc(zIndex:7)':
					lineHeight: '15px'


			parent.style(width:400, height:300)
			parent.child.def.style(width:400, height:300)
			parent.child.ghi.style(width:400, height:300)
			div.appendTo(parent.child.ghi)
			expect(div.style 'zIndex').to.equal '2'
			expect(div.style 'width').to.equal '400px'
			expect(div.style 'height').to.equal '300px'
			expect(div.style 'fontSize').to.equal '30px'
			expect(div.style 'lineHeight').to.equal '30px'
			expect(div.style 'fontWeight').to.equal '600'
			expect(div.style 'top').to.equal '30px'

			parent.style(width:400, height:900, position:'relative')
			dimensions.simulate()
			expect(div.style 'fontWeight').to.equal '500'
			expect(div.style 'top').to.equal '30px'
			
			parent.child.def.style(position:'relative')
			expect(div.style 'top').to.equal '30px'

			dimensions.simulate()
			expect(div.style 'top').to.equal '20px'

			parent.child.def.style(width:349, height:420)
			dimensions.simulate()
			expect(div.style 'zIndex').to.equal '3'
			expect(div.style 'fontSize').to.equal '33px'
			
			parent.child.ghi.style(width:450, height:420)
			dimensions.simulate()
			expect(div.style 'zIndex').to.equal '4'
			expect(div.style 'fontSize').to.equal '27px'
			expect(div.style 'lineHeight').to.equal '37px'
			
			parent.style(zIndex:7)
			dimensions.simulate()
			expect(div.style 'zIndex').to.equal '4'
			expect(div.style 'fontSize').to.equal '27px'
			expect(div.style 'lineHeight').to.equal '15px'
			expect(div.style 'opacity').to.equal '1'


		test "Nested media queries", ()->
			dimensions.simulate(1000, 900)
			div = Dom.div style:
				zIndex: 2

				$happy:
					fontWeight: 500
					'@window(orientation:landscape)':
						fontWeight: 600

				'@window(orientation:portrait)':
					$relaxed:
						fontWeight: 700


			div.appendTo(sandbox)
			
			expect(div.raw.style.fontWeight).to.equal ''
			
			div.state 'happy', on
			expect(div.raw.style.fontWeight).to.equal '600'
			
			dimensions.simulate(900, 1000)
			expect(div.raw.style.fontWeight).to.equal '500'
			
			dimensions.simulate(1000, 900)
			expect(div.raw.style.fontWeight).to.equal '600'


			div.state 'relaxed', on
			expect(div.raw.style.fontWeight).to.equal '600'
			
			dimensions.simulate(900, 1000)
			expect(div.raw.style.fontWeight).to.equal '700'
			
			dimensions.simulate(1000, 900)
			expect(div.raw.style.fontWeight).to.equal '600'






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

			if typeof window.Comment is 'function'
				div = document.createElement('div')
				spanA = document.createElement('span')
				spanB = document.createElement('span')
				text = document.createTextNode('someTextNode')
				comment = new Comment('someCommentNode')
				
				div.appendChild(spanA)
				div.appendChild(comment)
				div.appendChild(spanB)
				div.appendChild(text)
				expect(div.childNodes.length).to.equal(4)
				expect(div.children.length).to.equal(2)

				div$ = Dom(div)
				expect(div$.children.length).to.equal(3)
				expect(div$.children[0].raw).to.equal(spanA)
				expect(div$.children[1].raw).to.equal(spanB)
				expect(div$.children[2].raw).to.equal(text)


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


		test "Parents Until", ()->
			A = Dom.section()
			B = Dom.div().appendTo(A)
			C = Dom.div().appendTo(B)
			D = Dom.span().appendTo(C)

			expect(D.parents).to.eql [C,B,A]
			expect(D.parentsUntil(null)).to.eql [C,B,A]
			expect(D.parentsUntil()).to.eql [C,B,A]
			expect(D.parentsUntil('someString')).to.eql [C,B,A]
			expect(D.parentsUntil (el)-> el is A).to.eql [C,B]
			expect(D.parentsUntil (el)-> el is B).to.eql [C]
			expect(D.parentsUntil (el)-> false).to.eql [C,B,A]


		test "Parent Matching", ()->
			A = Dom.section()
			B = Dom.div().appendTo(A)
			C = Dom.div().appendTo(B)
			D = Dom.span().appendTo(C)

			expect(D.parents).to.eql [C,B,A]
			expect(D.parentMatching(null)).to.equal(undefined)
			expect(D.parentMatching(B)).to.equal(undefined)
			expect(D.parentMatching('string')).to.equal(undefined)
			expect(D.parentMatching ()-> false).to.equal(undefined)
			expect(D.parentMatching (el)-> el is B).to.equal(B)
			expect(D.parentMatching (el)-> el is A).to.equal(A)
			expect(D.parentMatching (el)-> el is C).to.equal(C)

			A.appendTo(sandbox)
			expect(D.parentMatching (el)-> el.raw is document.documentElement).to.equal(Dom(document.documentElement))


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


		test "Child (by ref)", ()->
			divA = 
				Dom.div {id:'divA'},
					Dom.div {id:'childA'},
						Dom.span {ref:'childA_1'}
						Dom.div {ref:'childA_2', id:'childA_2'}
					Dom.div {},
						Dom.span {ref:'childB_1'}
						Dom.text {id:'childB_2'}, 'The Text'


			divB = 
				Dom.template(['div', {id:'divB'},
					['div', {id:'childA', style:{color:'pink'}},
						['span', {ref:'childA_1'}]
						['div', {ref:'childA_3', id:'childA_2'}]
					]
					['div', null, 
						['span', {ref:'childB_1'}]
					]
				]).spawn()

			
			expect(divA.child.childA).to.equal(divA.children[0])
			expect(divA.child.childA_1).to.equal(divA.children[0].children[0])
			expect(divA.child.childA_2).to.equal(divA.children[0].children[1])
			expect(divA.child.childA_3).to.equal(undefined)
			expect(divA.child.childB).to.equal(undefined)
			expect(divA.child.childB_1).to.equal(divA.children[1].children[0])
			expect(divA.child.childB_2).to.equal(divA.children[1].children[1])
			expect(divA.child.childB_2.type).to.equal('text')

			
			expect(divB.child.childA).to.equal(divB.children[0])
			expect(divB.child.childA_1).to.equal(divB.children[0].children[0])
			expect(divB.child.childA_2).to.equal(divB.children[0].children[1])
			expect(divB.child.childA_3).to.equal(undefined)
			expect(divB.child.childB).to.equal(undefined)
			expect(divB.child.childB_1).to.equal(divB.children[1].children[0])
			expect(divB.child.childB_2).to.equal(divB.children[1].children[1])
			expect(divB.child.childA.style('color')).to.equal('')
			expect(divB.child.childA.styleSafe('color')).not.to.equal('')
			expect(divB.child.childA.styleSafe('color').length >= 4).to.be.true


			expect(divA.child.childA.raw.getAttribute('id')).to.equal('childA')
			expect(divA.child.childA.raw.getAttribute('data-ref')).to.equal('childA')
			expect(divA.child.childA_1.raw.getAttribute('id')).to.equal(null)
			expect(divA.child.childA_1.raw.getAttribute('data-ref')).to.equal('childA_1')
			expect(divA.child.childA_2.raw.getAttribute('id')).to.equal('childA_2')
			expect(divA.child.childA_2.raw.getAttribute('data-ref')).to.equal('childA_2')

			sandBox = Dom(sandbox)
			expect(sandBox.child.childA).to.equal(undefined)
			expect(sandBox.child.childB_2).to.equal(undefined)
			expect(sandBox.child.divA).to.equal(undefined)
			
			sandBox.append(divA)
			expect(sandBox.child.childA).to.equal(undefined)
			expect(sandBox.child.childB_2).to.equal(undefined)
			expect(sandBox.child.divA).to.equal(undefined)
			expect(sandBox.childf.divA).to.equal(divA)
			expect(sandBox.child.childA).to.equal(divA.children[0])
			expect(sandBox.child.childB_2).to.equal(divA.children[1].children[1])
			expect(sandBox.child.divA).to.equal(divA)

			newChild = Dom.div(ref:'newChild')
			newChildChild = Dom.div(ref:'newChildChild')
			expect(newChild.child.newChildChild).to.equal(undefined)
			expect(newChildChild.child.newChildChild).to.equal(newChildChild)
			expect(Object.keys(newChildChild.child).length).to.equal(1)

			newChildChild.appendTo(newChild)
			expect(newChild.child.newChildChild).to.equal(undefined)
			expect(newChild.childf.newChildChild).to.equal(newChildChild)
			expect(newChild.child.newChildChild).to.equal(newChildChild)
			expect(Object.keys(newChildChild.child).length).to.equal(1)

			newParent = Dom.div(ref:'newParent')
			newChild.appendTo(newParent)
			expect(newParent.child.newChildChild).to.equal(newChildChild)


		test "Index", ()->
			section =
				Dom.section(null,
					childA = Dom.div()
					childB = Dom.div()
					childC = Dom.span()
					childD = Dom.text()
					childE = Dom.span()
					childF = Dom.div()
				)

			expect(childB.index).to.equal 1
			expect(childD.index).to.equal 3
			expect(childF.index).to.equal 5

			childC.detach()
			expect(childB.index).to.equal 1
			expect(childD.index).to.equal 2
			expect(childF.index).to.equal 4
			expect(childC.index).to.equal null


		test "Index (by type)", ()->
			section =
				Dom.section(null,
					childA = Dom.div()
					childB = Dom.div()
					childC = Dom.span()
					childD = Dom.text()
					childE = Dom.span()
					childF = Dom.text()
					childG = Dom.div()
				)

			expect(childB.indexType).to.equal 1
			expect(childD.indexType).to.equal 0
			expect(childF.indexType).to.equal 1
			expect(childG.indexType).to.equal 2

			childC.detach()
			expect(childB.indexType).to.equal 1
			expect(childD.indexType).to.equal 0
			expect(childF.indexType).to.equal 1
			expect(childG.indexType).to.equal 2

			childA.detach()
			expect(childB.indexType).to.equal 0
			expect(childD.indexType).to.equal 0
			expect(childF.indexType).to.equal 1
			expect(childG.indexType).to.equal 1
			expect(childA.indexType).to.equal null
			expect(childC.indexType).to.equal null


		test "Index (by ref)", ()->
			section =
				Dom.section(null,
					childA = Dom.div(ref:'abc')
					childB = Dom.div(ref:'abc')
					childC = Dom.span(ref:'def')
					childD = Dom.text(ref:'abc')
					childE = Dom.span(ref:'abc')
					childF = Dom.text(ref:'def')
					childG = Dom.div(ref:'abc')
				)

			expect(childB.indexRef).to.equal 1
			expect(childD.indexRef).to.equal 2
			expect(childF.indexRef).to.equal 1
			expect(childG.indexRef).to.equal 4

			childC.detach()
			expect(childB.indexRef).to.equal 1
			expect(childD.indexRef).to.equal 2
			expect(childF.indexRef).to.equal 0
			expect(childG.indexRef).to.equal 4

			childA.detach()
			expect(childB.indexRef).to.equal 0
			expect(childD.indexRef).to.equal 1
			expect(childF.indexRef).to.equal 0
			expect(childG.indexRef).to.equal 3
			expect(childA.indexRef).to.equal null
			expect(childC.indexRef).to.equal null





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
			div.state 'happy', on
			div.state 'relaxed', on

			expect(div.parent).not.to.exist
			expect(emitCount).to.equal(0)
			expect(div.state 'happy').to.be.true
			expect(div.state 'relaxed').to.be.true
			
			div.appendTo(sandbox)
			div.emit('beep')
			expect(sandbox.children.length).to.equal(1)
			expect(div.parent.el).to.equal(sandbox)
			expect(emitCount).to.equal(1)
			expect(div.state 'happy').to.be.true
			expect(div.state 'relaxed').to.be.true

			div.detach()
			div.emit('beep')
			expect(sandbox.children.length).to.equal(0)
			expect(div.parent).not.to.exist
			expect(emitCount).to.equal(2)
			expect(div.state 'happy').to.be.true
			expect(div.state 'relaxed').to.be.true


		test ".remove()", ()->
			emitCount = 0
			div = Dom.div(null, 'Inner Text Here')
			div.on 'beep', ()-> emitCount++
			div.state 'happy', on
			div.state 'relaxed', on

			expect(div.parent).not.to.exist
			expect(emitCount).to.equal(0)
			expect(div.state 'happy').to.be.true
			expect(div.state 'relaxed').to.be.true
			
			div.appendTo(sandbox)
			div.emit('beep')
			expect(sandbox.children.length).to.equal(1)
			expect(div.parent.el).to.equal(sandbox)
			expect(emitCount).to.equal(1)
			expect(div.state 'happy').to.be.true
			expect(div.state 'relaxed').to.be.true

			div.remove()
			div.emit('beep')
			expect(sandbox.children.length).to.equal(0)
			expect(div.parent).not.to.exist
			expect(emitCount).to.equal(1)
			expect(div.state 'happy').to.be.false
			expect(div.state 'relaxed').to.be.false


		test ".empty()", ()->
			Main = Dom.div()
			A = Dom.div().appendTo(Main)
			B = Dom.div().appendTo(Main)
			A.state 'happy', on
			B.state 'happy', on

			checkChildStructure(Main)(A, B)
			expect(A.state 'happy').to.be.true
			expect(B.state 'happy').to.be.true

			Main.empty()
			checkChildStructure(Main)()
			expect(A.parent).to.equal(undefined)
			expect(B.parent).to.equal(undefined)
			expect(A.state 'happy').to.be.true
			expect(B.state 'happy').to.be.true


		test ".wrap()", ()->
			Main = Dom.div()
			A = Dom.div().appendTo(Main)
			B = Dom.div().appendTo(Main)
			C = Dom.div()
			wrapA = Dom.section()
			wrapB = Dom.section()
			wrapC = Dom.section()
			A.state 'happy', on
			B.state 'happy', on
			C.state 'happy', on
			wrapA.state 'relaxed', on
			wrapB.state 'relaxed', on
			wrapC.state 'relaxed', on
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

			expect(A.state 'happy').to.be.true
			expect(B.state 'happy').to.be.true
			expect(C.state 'happy').to.be.true
			expect(wrapA.state 'relaxed').to.be.true
			expect(wrapB.state 'relaxed').to.be.true
			expect(wrapC.state 'relaxed').to.be.true


		test ".unwrap()", ()->
			Main = Dom.div()
			A = Dom.div().prependTo(Main)
			B = Dom.div().appendTo(A)
			C = Dom.div().appendTo(A)
			D = Dom.div().appendTo(C)
			E = Dom.div().appendTo(D)
			A.state 'happy', on
			B.state 'happy', on
			C.state 'happy', on
			D.state 'happy', on
			E.state 'happy', on

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
			A.state 'happy', on
			A.on 'privateEvent', ()-> emitCount++
			childA = Dom.div().appendTo(A)
			childB = Dom.span().appendTo(A)
			B = A.clone()

			A.state 'relaxed', on
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
			expect(B.state 'happy').to.be.true
			expect(B.state 'relaxed').to.be.false

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



		test ".html - innerHTML getter/setter", ()->
			div = Dom.div(null, Dom.div(), 'Some text', Dom.span(), Dom.div())

			expect(div.children.length).to.equal(4)
			expect(div.html).to.equal(div.el.innerHTML)
			expect(div.children.length).to.equal(4)

			div.html = '<section ID="test"></section>'
			expect(div.html).to.equal('<section id="test"></section>')
			expect(div.children.length).to.equal(1)
			expect(div.children[0].el.id).to.equal('test')
			expect(div.children[0].el.nodeName.toLowerCase()).to.equal('section')


		test ".text - textContent getter/setter", ()->
			div = Dom.div(null, 'Some text', Dom.span(null, 'Inner Text'))

			expect(div.children.length).to.equal(2)
			expect(div.text).to.equal(div.el.textContent)
			expect(div.text).to.equal('Some textInner Text')
			expect(div.children.length).to.equal(2)

			div.text = 'newText'
			expect(div.text).to.equal('newText')
			expect(div.el.textContent).to.equal('newText')
			expect(div.children.length).to.equal(1)
			expect(div.children[0].el.nodeType).to.equal(3)


		test "Appending/prepending elements to a text node should do nothing", ()->
			text = Dom.text('abc123')
			expect(text.text).to.equal('abc123')
			expect(text.raw.childNodes.length).to.equal(0)

			text.append(Dom.text('def'))
			expect(text.text).to.equal('abc123')
			expect(text.raw.childNodes.length).to.equal(0)

			text.prepend(Dom.div(null, 'def'))
			expect(text.text).to.equal('abc123')
			expect(text.raw.childNodes.length).to.equal(0)
			
			div = Dom.div(null, '456')
			div.appendTo(text)
			expect(text.text).to.equal('abc123')
			expect(text.raw.childNodes.length).to.equal(0)
			expect(div.parent).to.equal(undefined)




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


		test "Batch.text/.html are methods instead of getters/setters", ()->
			divA = Dom.div(null, 'The divA')
			divB = Dom.div(null, 'The divB')
			batch = Dom.batch([divA, divB], true)

			expect(batch.html()).to.eql ['The divA', 'The divB']
			expect(batch.text()).to.eql ['The divA', 'The divB']
			
			batch.html('<span>The div</span>')
			expect(batch.html()).to.eql ['<span>The div</span>', '<span>The div</span>']
			expect(batch.text()).to.eql ['The div', 'The div']

			batch.text('THE DIV')
			expect(batch.html()).to.eql ['THE DIV', 'THE DIV']
			expect(batch.text()).to.eql ['THE DIV', 'THE DIV']



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
			spawnA.state 'happy', on
			spawnB = Dom(template)

			expect(spawnA.el).to.be.instanceOf(HTMLDivElement)
			expect(spawnB.el).to.be.instanceOf(HTMLDivElement)
			expect(spawnA).not.to.equal(spawnB)
			expect(spawnA.el).not.to.equal(spawnB.el)
			expect(spawnA.state 'happy').to.be.true
			expect(spawnB.state 'happy').to.be.false
			expect(spawnA.el.textContent).to.equal('Some Inner Text')
			expect(spawnB.el.textContent).to.equal('Some Inner Text')
			expect(spawnA.el.className).to.equal('some-div')


		test "Templates can be created from QuickElement instances", ()->
			section = Dom.section(className:'singleSection', 'Some Inner Text')
			section.state 'happy', on
			sectionTemplate = section.toTemplate()
			templateSpawn = sectionTemplate.spawn()

			expect(sectionTemplate).not.to.equal(section)
			expect(templateSpawn.el).not.to.equal(section.el)
			expect(templateSpawn.el.className).to.equal('singleSection')
			expect(templateSpawn.text).to.equal('Some Inner Text')
			expect(section.state 'happy').to.be.true
			expect(templateSpawn.state 'happy').to.be.false


		test "Templates can be created from DOM Elements", ()->
			sectionEl = document.createElement('section')
			sectionEl.className = 'singleSection'
			sectionEl.appendChild(document.createTextNode 'Some Inner Text')
			sectionTemplate = Dom.template(sectionEl)
			templateSpawn = sectionTemplate.spawn()

			expect(templateSpawn.el).not.to.equal(sectionEl)
			expect(templateSpawn.el.className).to.equal('singleSection')
			expect(templateSpawn.text).to.equal('Some Inner Text')


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
			window.template = Dom.template(['div', className:'some-div', 'Some Inner Text'])
			window.templateCopyA = template.extend {type:'span', options:{className:'some-span'}, children:[]}
			window.templateCopyB = template.extend {options:{id:'theMainDiv'}, children:['The Other Inner Text']}

			expect(templateCopyA).not.to.equal(template)
			expect(templateCopyB).not.to.equal(template)
			spawn = template.spawn()
			spawnA = templateCopyA.spawn()
			spawnB = templateCopyB.spawn()

			expect(spawn.el.nodeName.toLowerCase()).to.equal('div')
			expect(spawn.el.className).to.equal('some-div')
			expect(spawn.el.id).to.equal('')
			expect(spawn.text).to.equal('Some Inner Text')

			expect(spawnA.el.nodeName.toLowerCase()).to.equal('span')
			expect(spawnA.el.className).to.equal('some-span')
			expect(spawnA.el.id).to.equal('')
			expect(spawnA.text).to.equal('Some Inner Text')

			expect(spawnB.el.nodeName.toLowerCase()).to.equal('div')
			expect(spawnB.el.className).to.equal('some-div')
			expect(spawnB.el.id).to.equal('theMainDiv')
			expect(spawnB.text).to.equal('The Other Inner Text')


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
			expect(spawnRaw.text).to.equal('Some Inner Text - Bolded Text')
			expect(spawnRaw.el.style.opacity).to.equal('')
			expect(spawnRaw.el.childNodes.length).to.equal(2)
			expect(spawnRaw.el.childNodes[0].nodeName).to.equal('#text')
			expect(spawnRaw.el.childNodes[1].nodeName.toLowerCase()).to.equal('strong')
			expect(spawnRaw.el.childNodes[1].className).to.equal('highlighted')
			expect(spawnRaw.el.childNodes[1].style.opacity).to.equal('0.9')

			expect(spawnA.el.nodeName.toLowerCase()).to.equal('section')
			expect(spawnA.el.className).to.equal('some-section')
			expect(spawnA.el.id).to.equal('')
			expect(spawnA.text).to.equal('Some Inner Text - Bolded Text')
			expect(spawnA.el.style.opacity).to.equal('0.7')
			expect(spawnA.el.childNodes.length).to.equal(2)
			expect(spawnA.el.childNodes[0].nodeName).to.equal('#text')
			expect(spawnA.el.childNodes[1].nodeName.toLowerCase()).to.equal('strong')
			expect(spawnA.el.childNodes[1].className).to.equal('highlighted')
			expect(spawnA.el.childNodes[1].style.opacity).to.equal('0.9')

			expect(spawnB.el.nodeName.toLowerCase()).to.equal('div')
			expect(spawnB.el.className).to.equal('main-div')
			expect(spawnB.el.id).to.equal('theMainDiv')
			expect(spawnB.text).to.equal('Main Inner Text - Very Bolded Text + Other Text')
			expect(spawnB.el.style.opacity).to.equal('0.5')
			expect(spawnB.el.childNodes.length).to.equal(3)
			expect(spawnB.el.childNodes[0].nodeName.toLowerCase()).to.equal('span')
			expect(spawnB.el.childNodes[0].childNodes.length).to.equal(1)
			expect(spawnB.el.childNodes[1].nodeName.toLowerCase()).to.equal('b')
			expect(spawnB.el.childNodes[1].className).to.equal('super-highlighted')
			expect(spawnB.el.childNodes[1].style.opacity).to.equal('0.2')


		test "Template.extend/spawn() can accept a template tree array", ()->
			template = Dom.template ['div', style:{'opacity':0.5}, ['span', null, 'text of span'], ['div', null, 'text of div']]
			cloneA = template.extend(['section', style:{'opacity':0.8}])
			cloneB = template.extend(['span', null, ['div']])
			cloneC = template.extend(['section', {className:'the-section', style:{color:'blue'}}, ['section', null, 'text of subsection'], 'just a text node'])
			spawn = template.spawn ['span', style:{'width':190, 'opacity':1}, 'so nice']

			expect(template.type).to.equal 'div'
			expect(template.options).to.eql {style:{'opacity':0.5}}
			expect(template.children.length).to.equal 2
			expect(template.children[0].type).to.equal 'span'
			expect(template.children[0].children.length).to.equal 1
			expect(template.children[0].children[0].options.text).to.equal 'text of span'
			expect(template.children[1].type).to.equal 'div'
			expect(template.children[1].children.length).to.equal 1
			expect(template.children[1].children[0].options.text).to.equal 'text of div'

			expect(cloneA.type).to.equal 'section'
			expect(cloneA.options).to.eql {style:{'opacity':0.8}}
			expect(cloneA.children.length).to.equal 2
			expect(cloneA.children[0].type).to.equal 'span'
			expect(cloneA.children[0].children.length).to.equal 1
			expect(cloneA.children[0].children[0].options.text).to.equal 'text of span'
			expect(cloneA.children[1].type).to.equal 'div'
			expect(cloneA.children[1].children.length).to.equal 1
			expect(cloneA.children[1].children[0].options.text).to.equal 'text of div'

			expect(cloneB.type).to.equal 'span'
			expect(cloneB.options).to.eql {style:{'opacity':0.5}}
			expect(cloneB.children.length).to.equal 2
			expect(cloneB.children[0].type).to.equal 'div'
			expect(cloneB.children[0].children.length).to.equal 1
			expect(cloneB.children[0].children[0].options.text).to.equal 'text of span'
			expect(cloneB.children[1].type).to.equal 'div'
			expect(cloneB.children[1].children.length).to.equal 1
			expect(cloneB.children[1].children[0].options.text).to.equal 'text of div'

			expect(cloneC.type).to.equal 'section'
			expect(cloneC.options).to.eql {className:'the-section', style:{'opacity':0.5, 'color':'blue'}}
			expect(cloneC.children.length).to.equal 2
			expect(cloneC.children[0].type).to.equal 'section'
			expect(cloneC.children[0].children.length).to.equal 1
			expect(cloneC.children[0].children[0].options.text).to.equal 'text of subsection'
			expect(cloneC.children[1].type).to.equal 'text'
			expect(cloneC.children[1].options.text).to.equal 'just a text node'

			expect(spawn.el.nodeName.toLowerCase()).to.equal 'span'
			expect(spawn.el.style.opacity).to.equal '1'
			expect(spawn.el.style.width).to.equal '190px'
			expect(spawn.el.childNodes.length).to.equal 2
			expect(spawn.el.childNodes[0].nodeType).to.equal 3
			expect(spawn.el.childNodes[0].textContent).to.equal 'so nice'
			expect(spawn.el.childNodes[1].nodeName.toLowerCase()).to.equal 'div'
			expect(spawn.el.childNodes[1].textContent).to.equal 'text of div'


		test "Template.extend/spawn() can accept other template instances as children which will replace existing children", ()->
			template = Dom.template ['div', null, ['span', {style:opacity:0.5}], 'original text']
			childA = Dom.template ['div', {style:fontFamily:'pink'}]
			childB = Dom.template 'replaced text'
			childC = Dom.template ['section']
			templateCopy = template.extend(['span', {style:fontSize:'77px'}, childA, childB, childC])
			spawnedA = template.spawn()
			spawnedB = templateCopy.spawn()
			spawnedC = template.spawn(['span', {style:fontSize:'77px'}, childA, childB, childC])

			expect(spawnedA.type).to.equal('div')
			expect(spawnedA.children.length).to.equal(2)
			expect(spawnedA.children[0].type).to.equal('span')
			expect(spawnedA.children[0].raw.style.opacity).to.equal('0.5')
			expect(spawnedA.children[0].raw.style.fontFamily).to.equal('')
			expect(spawnedA.children[1].type).to.equal('text')
			expect(spawnedA.text).to.equal('original text')

			expect(spawnedB.type).to.equal('span')
			expect(spawnedB.children.length).to.equal(3)
			expect(spawnedB.children[0].type).to.equal('div')
			expect(spawnedB.children[0].raw.style.opacity).to.equal('')
			expect(spawnedB.children[0].raw.style.fontFamily).to.equal('pink')
			expect(spawnedB.children[1].type).to.equal('text')
			expect(spawnedB.text).to.equal('replaced text')
			expect(spawnedB.children[2].type).to.equal('section')
			expect(spawnedB.raw.style.fontSize).to.equal('77px')

			expect(spawnedC.type).to.equal('span')
			expect(spawnedC.children.length).to.equal(3)
			expect(spawnedC.children[0].type).to.equal('div')
			expect(spawnedC.children[0].raw.style.opacity).to.equal('')
			expect(spawnedC.children[0].raw.style.fontFamily).to.equal('pink')
			expect(spawnedC.children[1].type).to.equal('text')
			expect(spawnedC.text).to.equal('replaced text')
			expect(spawnedC.children[2].type).to.equal('section')
			expect(spawnedC.raw.style.fontSize).to.equal('77px')



		test "Templates can have other templates as their children", ()->
			headerTemplate = Dom.template ['header', {style:'height':'200px'},
				['span', {style:'textAlign':'center'}, 'This is bolded text']
				' while this is not'
			]
			headerTemplateClone = Dom.template(headerTemplate)
			sectionTemplate = Dom.template ['section', null, headerTemplate]
			section = sectionTemplate.spawn().appendTo(sandbox)

			expect(headerTemplateClone).not.to.equal(headerTemplate)
			expect(sectionTemplate.children.length).to.equal(1)
			expect(sectionTemplate.children[0]).not.to.equal(headerTemplate)
			expect(sectionTemplate.children[0].children.length).to.equal(2)
			expect(section.children.length).to.equal(1)
			expect(section.children[0].type).to.equal('header')
			expect(section.children[0].children.length).to.equal(2)
			expect(section.text).to.equal('This is bolded text while this is not')
			expect(section.children[0].children[0].style('textAlign')).to.equal('center')


		test "A global options object can be passed as the 2nd arg to template.extend/spawn() which will be applied to all templates, spawns, & their children", ()->
			obj = myHeight:'150px'
			dynamicHeightStyle = 'height': (related)-> expect(related).to.equal(obj); related.myHeight
			
			headerTemplate = Dom.template ['header', {style:'width':'23px'},
				['div', {style:'width':'23px'}, 'This is bolded text']
				' while this is not'
			]
			sectionTemplate = Dom.template ['section', {style:'width':'23px'}, headerTemplate]
			section = sectionTemplate.spawn({options:{relatedInstance:window}}, {relatedInstance:obj, style:dynamicHeightStyle}).appendTo(sandbox)

			expect(section.raw.style.height).to.equal('150px')
			expect(section.children[0].raw.style.height).to.equal('150px')
			expect(section.children[0].children[0].raw.style.height).to.equal('150px')
			expect(section.raw.style.width).to.equal('')
			expect(section.children[0].raw.style.width).to.equal('')
			expect(section.children[0].children[0].raw.style.width).to.equal('')
			expect(section.children.length).to.equal(1)
			expect(section.children[0].type).to.equal('header')
			expect(section.children[0].children.length).to.equal(2)
			expect(section.text).to.equal('This is bolded text while this is not')


		test "Template children can be navigated by ref using the .child property", ()->
			template = 
				Dom.template ['div', {id:'divA'},
					['div', {id:'childA'},
						['span', {ref:'childA_1'}]
						['div', {ref:'childA_2', id:'childA_2'}]
					]
					['div', null, 
						['span', {ref:'childB_1'}]
						['text', {id:'childB_2', text:'The Text'}]
					]
				]

			expect(typeof template.child).to.equal 'object'
			expect(Object.keys(template.child).length).to.equal(6)
			expect(template.child.divA).to.equal template
			expect(template.child.childA.type).to.equal 'div'
			expect(template.child.childA).to.equal template.children[0]
			expect(template.child.childA_1).to.equal template.children[0].children[0]
			expect(template.child.childA_2).to.equal template.children[0].children[1]
			expect(template.child.childB_1).to.equal template.children[1].children[0]
			expect(template.child.childB_2).to.equal template.children[1].children[1]

			rendered = template.spawn()
			expect(rendered.child.childB_2).to.equal rendered.children[1].children[1]
			expect(rendered.text).to.equal('The Text')


		test "Template's children can be extend/spawned with a {ref:newChild} map instead of a positional array", ()->
			templateMain = 
				Dom.template ['div', {id:'divA'},
					['div', {id:'childA'},
						['span', {ref:'childA_1'}]
						['div', {ref:'childA_2', id:'childA_2'}]
					]
					['div', null, 
						['span', {ref:'childB_1'}]
						['text', {id:'childB_2', text:'The Text'}]
					]
				]
			templateCopy = templateMain.extend ['section', null, 
				childA:
					type: 'form'
					options:
						style: display: 'inline-block'
				childA_2:
					['a', {id:'CHILDa_2', href:'http://google.com'},
						['text', {ref:'childA_2_1', text:'New Text'}]
					]
				childC:
					['div', ref:'childD']
			], {value:'theValue'}

			expect(typeof templateCopy.child.childA_2_1).not.to.equal 'undefined'
			expect(Object.keys(templateMain.child).length).to.equal(6)
			expect(Object.keys(templateCopy.child).length).to.equal(8)
			expect(templateCopy.children.length).to.equal(3)
			expect(templateCopy.child.divA).to.equal templateCopy
			expect(templateCopy.child.childA).to.equal templateCopy.children[0]
			expect(templateCopy.child.childA.type).to.equal 'form'
			expect(templateCopy.child.childA_1).to.equal templateCopy.children[0].children[0]
			expect(templateCopy.child.childA_2).to.equal undefined
			expect(templateCopy.child.CHILDa_2).to.equal templateCopy.children[0].children[1]
			expect(templateCopy.child.childA_2_1).to.equal templateCopy.children[0].children[1].children[0]
			expect(templateCopy.child.childA_2_1.options.text).to.equal 'New Text'
			expect(templateCopy.child.childB_1).to.equal templateCopy.children[1].children[0]
			expect(templateCopy.child.childB_2).to.equal templateCopy.children[1].children[1]
			expect(templateCopy.child.childC).to.equal undefined
			expect(templateCopy.child.childD).to.equal templateCopy.children[2]

			rendered = templateCopy.spawn()
			expect(Object.keys(rendered.child).length).to.equal(8)
			expect(rendered.child.childB_2).to.equal rendered.children[1].children[1]
			expect(rendered.child.childA.raw.style.display).to.equal 'inline-block'
			expect(rendered.child.CHILDa_2.prop('href')).to.contain 'http://google.com'
			expect(rendered.child.childB_1.prop('value')).to.equal('theValue')
			expect(rendered.child.childD.attr('data-ref')).to.equal('childD')


		test "Null values in ref-children map will remove the child from the template", ()->
			templateMain = 
				Dom.template ['div', {id:'divA'},
					['div', {id:'childA'},
						['span', {ref:'childA_1'}]
						['div', {ref:'childA_2', id:'childA_2'}]
					]
					['div', null, 
						['span', {ref:'childB_1'}]
						['text', {id:'childB_2', text:'The Text'}]
					]
					['div', {id:'childC'}, 
						['span', {ref:'childC_1'}]
						['text', {id:'childC_2', text:'The Text'}]
					]
				]
			templateCopy = templateMain.extend ['section', null, 
				childA:
					type: 'form'
					options:
						style: display: 'inline-block'

				childA_1: null
				childA_2:
					['a', {id:'CHILDa_2', href:'http://google.com'},
						['text', {ref:'childA_2_1', text:'New Text'}]
					]
				childC: null
			], {value:'theValue'}

			expect(typeof templateCopy.child.childA_2_1).not.to.equal 'undefined'
			expect(Object.keys(templateMain.child).length).to.equal(9)
			expect(Object.keys(templateCopy.child).length).to.equal(6)
			expect(templateCopy.children.length).to.equal(2)
			expect(templateCopy.child.divA).to.equal templateCopy
			expect(templateCopy.child.childA).to.equal templateCopy.children[0]
			expect(templateCopy.child.childA.type).to.equal 'form'
			expect(templateCopy.child.childA.children.length).to.equal(1)
			expect(templateCopy.child.childA_1).to.equal undefined
			expect(templateCopy.child.childA_2).to.equal undefined
			expect(templateCopy.child.CHILDa_2).to.equal templateCopy.children[0].children[0]
			expect(templateCopy.child.childA_2_1).to.equal templateCopy.children[0].children[0].children[0]
			expect(templateCopy.child.childA_2_1.options.text).to.equal 'New Text'
			expect(templateCopy.child.childB_1).to.equal templateCopy.children[1].children[0]
			expect(templateCopy.child.childB_2).to.equal templateCopy.children[1].children[1]
			expect(templateMain.child.childC).to.equal templateMain.children[2]
			expect(templateCopy.child.childC).to.equal undefined


		test "When spawning elements the options object passed to the spawns should be a clone of the template's options", ()->
			templateA = Dom.template ['div', style:{display:'block'}]
			templateB = Dom.template ['div', style:{display:'block'}]
			spawnA = templateA.spawn(ref:'a') # Passed options to merge with orig
			spawnB = templateA.spawn()

			expect(spawnA.options).not.to.equal(templateA.options)
			expect(spawnA.options.style).not.to.equal(templateA.options.style)
			expect(templateA.options.style.$base).to.equal(undefined)

			expect(spawnB.options).not.to.equal(templateB.options)
			expect(spawnB.options.style).not.to.equal(templateB.options.style)
			expect(templateB.options.style.$base).to.equal(undefined)


		suite "Data computers", ()->
			test "Templates accept options.computers fn map which will be invoked with provided options.data upon spawning", ()->
				receivedData = null
				template = Dom.template(
					['div'
						computers: 'someLabel': (data)-> receivedData = data or 'nothing'
					]
				)

				expect(receivedData).to.equal(null)
				template.spawn()
				expect(receivedData).to.equal(null)
				
				template.spawn({data:'someLabel':'works'})
				expect(receivedData).to.equal('works')


			test "Computers will be have the spawned QuickElement instance as their context", ()->
				context = null
				template = Dom.template(
					['div'
						computers: 'someLabel': (data)-> context = this
					]
				)

				expect(context).to.equal(null)
				template.spawn()
				expect(context).to.equal(null)
				
				instance = template.spawn({data:'someLabel':undefined})
				expect(context).to.equal(instance)


			test "Values specified in options.defaults will be used if not specified in options.data upon spawning", ()->
				results = {}
				template = Dom.template(
					['div'
						computers:
							'first': (data)-> results.first = data.toLowerCase()
							'second': (data)-> results.second = data.toLowerCase()
							'third': (data)-> results.third = data.toLowerCase()
						defaults:
							'first': 'firstValue here'
							'third': 'thirdValue here'
					]
				)
				expect(results).to.deep.equal({})
				template.spawn()
				expect(results).to.deep.equal({first:'firstvalue here', third:'thirdvalue here'})
				
				instance = template.spawn({data:'third':'customvalue here'})
				expect(results).to.deep.equal({first:'firstvalue here', third:'customvalue here'})


			test "Values can be of any type", ()->
				results = {}
				template = Dom.template(
					['div'
						computers:
							'first': (data)-> results.first = data
							'second': (data)-> results.second = data
							'third': (data)-> results.third = data
							'fourth': (data)-> results.fourth = data
							'fifth': (data)-> results.fifth = data
							'sixth': (data)-> results.sixth = data
						defaults:
							'first': ['abc', '123']
							'third': {a:1, b:12}
							'sixth': 999
					]
				)

				
				instance = template.spawn(data:
					'second': null
					'fourth': 19
					'fifth': false
					'sixth': undefined
				)
				expect(results).to.deep.equal
					first: ['abc', '123']
					second: null
					third: {a:1, b:12}
					fourth: 19
					fifth: false
					sixth: undefined

				expect(Object.keys(results).length).to.equal(6)


			test "Values in options.data that do not have a matching computer will be skipped", ()->
				results = {}
				template = Dom.template(
					['div'
						computers:
							'first': (data)-> results.first = data
							'second': (data)-> results.second = data
							'third': (data)-> results.third = data
					]
				)

				
				instance = template.spawn(data:
					'first': 'first value'
					'second': 'second value'
					'third': 'third value'
					'fourth': 'fourth value'
				)
				expect(results).to.deep.equal
					'first': 'first value'
					'second': 'second value'
					'third': 'third value'

				expect(Object.keys(results).length).to.equal(3)


			test "Computers in template children will receive the parent's options.data", ()->
				results = parent:{}, childA:{}, childB:{}, childC:{}
				template = Dom.template(
					['div'
						computers:
							'first': (data)-> results.parent.first = data
							'second': (data)-> results.parent.second = data
							'third': (data)-> results.parent.third = data
						
						['div'
							computers:
								'first': (data)-> results.childA.first = data
								'second': (data)-> results.childA.second = data
								'third': (data)-> results.childA.third = data
						]
						['div', null,
							['div'
								computers:
									'first': (data)-> results.childB.first = data
									'fourth': (data)-> results.childB.fourth = data
							]
							['div'
								computers:
									'first': (data)-> results.childC.first = data
									'sixth': (data)-> results.childC.sixth = data
							]
						]
					]
				)

				
				instance = template.spawn(data:
					'first': 'first value'
					'second': 'second value'
					'third': 'third value'
					'fourth': 'fourth value'
				)
				expect(results.parent).to.deep.equal
					'first': 'first value'
					'second': 'second value'
					'third': 'third value'
				
				expect(results.childA).to.deep.equal
					'first': 'first value'
					'second': 'second value'
					'third': 'third value'
				
				expect(results.childB).to.deep.equal
					'first': 'first value'
					'fourth': 'fourth value'
				
				expect(results.childC).to.deep.equal
					'first': 'first value'


			test "Parent defaults will not be passed to children", ()->
				results = parent:{}, child:{}
				template = Dom.template(
					['div'
						computers:
							'first': (data)-> results.parent.first = data
							'second': (data)-> results.parent.second = data
							'third': (data)-> results.parent.third = data
						defaults:
							'second': 'second value'
							'fourth': 'fourth value'
						
						['div'
							computers:
								'first': (data)-> results.child.first = data
								'second': (data)-> results.child.second = data
								'third': (data)-> results.child.third = data
								'fourth': (data)-> results.child.fourth = data
							defaults:
								'first': 'first value'
						]
					]
				)
				
				instance = template.spawn(data:
					'third': 'third value'
				)
				expect(results.parent).to.deep.equal
					'second': 'second value'
					'third': 'third value'
				
				expect(results.child).to.deep.equal
					'first': 'first value'
					'third': 'third value'




	suite "Misc", ()->
		test "Stringification", ()->
			section = Dom ['section',{
					id: 'theSection'
					className: 'theSectionClass'
					style:
						'position': 'relative'
						'opacity': 0.5
						'fontSize': ()-> '29px'
						$happy:
							fontSize: '11px'
							$relaxed:
								fontSize: '8px'
				}
					['div', {id:'childA', style:position:'relative'}, 'childA-innertext']
					'section-innertext'
					['span', {id:'childB', ref:'childB-ref!', style:position:'absolute'}
						'childB-innertext'
						['text', {text:'childB-innertext 2'}]
						['a', {url:'https://google.com'}]
					]
				]
			window.stringified = JSON.stringify(section, null, 2)
			sectionCopy = Dom JSON.parse(stringified)

			expect(sectionCopy.type).to.equal(section.type)
			expect(sectionCopy.ref).to.equal(section.ref)
			expect(sectionCopy.el.id).to.equal(section.el.id)
			expect(sectionCopy.el.className).to.equal(section.el.className)
			expect(sectionCopy.el.style.position).to.equal(section.el.style.position)
			expect(sectionCopy.el.style.opacity).to.equal(section.el.style.opacity)
			expect(sectionCopy.el.style.fontSize).not.to.equal(section.el.style.fontSize)
			
			section.state 'happy', on
			sectionCopy.state 'happy', on
			expect(sectionCopy.el.style.fontSize).to.equal(section.el.style.fontSize)
			
			section.state 'relaxed', on
			sectionCopy.state 'relaxed', on
			expect(sectionCopy.el.style.fontSize).to.equal(section.el.style.fontSize)
			
			expect(sectionCopy.children.length).to.equal(section.children.length)
			expect(Object.keys(sectionCopy.child).length).to.equal(Object.keys(section.child).length)
			expect(sectionCopy.text).to.equal(section.text)
			expect(sectionCopy.html).to.equal(section.html)
			expect(sectionCopy.children[0].el.style.position).to.equal(section.children[0].el.style.position)
			expect(sectionCopy.children[2].el.style.position).to.equal(section.children[2].el.style.position)
			expect(sectionCopy.children[2].ref).to.equal(section.children[2].ref)




		test "Chaining", ()->
			div = Dom.div()
			chainResult = div
				.on('abc', ()->)
				.emit('abc')
				.off('abc')
				.off()
				.state('abc', on)
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
			expect(div.once('abc')).to.equal div
			expect(div.off('somethingFake')).to.equal div

			emitCount = 0; div.on 'something', cb=()-> emitCount++
			expect(div.emit('')).to.equal(div)
			expect(div.emit()).to.equal(div)
			expect(div.emitPrivate('none')).to.equal(div)
			expect(div.emitPrivate('')).to.equal(div)
			expect(div.emitPrivate()).to.equal(div)
			expect(emitCount).to.equal(0)
			expect(div.emit('something')).to.equal(div)
			expect(emitCount).to.equal(1)
			expect(div.off('something', ()->)).to.equal(div)
			expect(div.emit('something')).to.equal(div)
			expect(emitCount).to.equal(2)
			expect(div.onInserted ()->).to.equal(div)
			expect(div.onInserted(true)).to.equal(undefined)
			expect(div.onInserted(null)).to.equal(undefined)

			div.css(null, '129')
			expect(div.el.style.null).to.equal(undefined)

			expect(div.state()).to.equal undefined
			expect(div.state(null, on)).to.equal undefined
			expect(div.state(123, on)).to.equal undefined
			expect(div.state 'base', on).to.equal div
			expect(div.state 'base').to.be.false
			expect(div.state '$whatevs', on).to.equal div
			expect(div.state 'whatevs').to.be.true
			expect(div.state 'another').to.be.false
			expect(div.state 'another', on).to.equal div
			expect(div.state 'another').to.be.true
			expect(div.state 'another', undefined).to.equal div
			expect(div.state 'another').to.be.false

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
			
			# expect ()-> Dom.batch($('div'))
			# 	.not.to.throw()

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

			expect ()-> Dom.div(style:{opacity:0.5, '@abc(max-width:390)':{opacity:1}}).appendTo(sandbox)
				.not.to.throw()

			expect(()->
				div = Dom.div()
				div.pipeState(div)
				div.state 'happy', on
				expect(div.state 'happy').to.equal on
			).not.to.throw()















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

	window.SVGElement?.name = 'SVGElement'
	window.SVGSVGElement?.name = 'SVGSVGElement'
	window.SVGPolylineElement?.name = 'SVGPolylineElement'

window.ClientRect ?= DOMRect




