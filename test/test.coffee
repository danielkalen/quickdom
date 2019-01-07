@dimensions = import './simulate.coffee'
@Dom = @DOM = window.quickdom
mocha.setup('tdd')
mocha.slow(400)
mocha.timeout(12000)
mocha.bail() unless window.location.hostname
chai = import 'chai'
chai.use import 'chai-style'
chai.config.truncateThreshold = 1e3
{expect} = chai

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
		packageVersion = (import '../package $ version')
		expect(Dom.version).to.equal(packageVersion)


	suite "Element Creation", ()->
		test "Basic Creation", ()->
			div = Dom('div')
			expect(typeof div).to.equal 'object'
			expect(typeof div.el).to.equal 'object'
			expect(div.el).to.be.instanceOf window.HTMLDivElement
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
			J = Dom.div(relatedInstance: obj={a:1})

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
			expect(J.related).to.equal(obj)
			expect(J.options.related).to.equal(obj)


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
			).appendTo(sandbox)

			expect(section).not.to.equal(undefined)
			expect(section.raw).to.have.style('display', 'inline')
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


		test "Existing Element from array-like objects", ()->
			rawA = document.createElement('div')
			rawB = document.createElement('div')
			rawC = document.createElement('div')
			parent = document.createElement('section')
			parent.appendChild(rawA); parent.appendChild(rawB); parent.appendChild(rawC);
			A = Dom([rawA, rawB, rawC])
			B = Dom(parent.querySelectorAll('div'))
			C = Dom(B)

			expect(A.el).to.equal(rawA)
			expect(B.el).to.equal(rawA)
			expect(C.el).to.equal(rawA)
			expect(A).to.equal(B)
			expect(B).to.equal(C)
			expect(C).to.equal(rawA._quickElement)



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
			regDiv = Dom('div').el

			expect(svgBad).to.be.instanceOf(HTMLUnknownElement)
			expect(svgPolyBad).to.be.instanceOf(HTMLUnknownElement)
			expect(svgGood).to.be.instanceOf(SVGSVGElement)
			expect(svgPolyGood).to.be.instanceOf(SVGPolylineElement)
			# expect(svgDiv).to.be.instanceOf('SVGElement')
			expect(svgDiv.constructor).not.to.equal(regDiv.constructor)


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
			expect(div.removeListener).to.equal(div.off)
			expect(div.removeListener('eventA'))


		test "user-defined methdods/getters/setters", ()->
			divA = Dom.div()
			divB = Dom.div methods:
				scrollTop:
					get: ()-> @raw.scrollTop
				weight:
					get: ()-> @raw.weight
				value:
					get: ()-> @raw.value
					set: (value)-> @raw.value = value
				name: true
				bigIndex: ()-> @index * 10

			sandbox.append divA
			sandbox.append divB
			divA.raw.value = divB.raw.value = 'abc'

			expect(typeof divA.scrollTop).to.equal 'undefined'
			expect(typeof divB.scrollTop).to.equal 'number'
			expect(typeof divA.value).to.equal 'undefined'
			expect(typeof divB.value).to.equal 'string'
			expect(typeof divA.name).to.equal 'undefined'
			expect(typeof divB.name).to.equal 'undefined'
			expect(typeof divA.bigIndex).to.equal 'undefined'
			expect(typeof divB.bigIndex).to.equal 'function'
			
			expect(divB.scrollTop).to.equal divB.raw.scrollTop
			
			divB.raw.weight = '1'
			expect(divB.weight).to.equal '1'
			
			divB.weight = '2'
			expect(divB.weight).to.equal '1'
			
			expect(divB.value).to.equal 'abc'
			divB.value = '123'
			expect(divB.value).to.equal '123'

			expect(divB.bigIndex()).to.equal divB.index*10


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


		test "A data object can be passed as the 4th arg of .emit which will be extended onto the event object", ()->
			div = DOM.div()
			event = null
			div.on 'mousedown', (e)-> event = e

			expect(event).to.equal null
			div.emit 'mousedown'
			expect(event.type).to.equal 'mousedown'
			expect(event.custom).to.equal undefined
			
			div.emit 'mousedown', null, null, {custom:'custom', abc:123}
			expect(event.type).to.equal 'mousedown'
			expect(event.custom).to.equal 'custom'
			expect(event.abc).to.equal 123
			
			div.emit 'mousedown', null, null, true
			expect(event.type).to.equal 'mousedown'
			expect(event.custom).to.equal undefined


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
			emitCountA = emitCountB = emitCountC = 0
			div = Dom.div().appendTo(sandbox)

			attachListeners = ()->
				div.on 'myEvent.someName', ()-> emitCountA++;
				div.on 'myEvent', ()-> emitCountB++;
				div.on 'otherEvent.someName', ()-> emitCountC++;

			attachListeners()
			expect(emitCountA).to.equal(0)
			expect(emitCountB).to.equal(0)
			expect(emitCountC).to.equal(0)

			div.emit('myEvent')
			expect(emitCountA).to.equal(1)
			expect(emitCountB).to.equal(1)
			expect(emitCountC).to.equal(0)
			
			div.emit('myEvent.someName')
			expect(emitCountA).to.equal(1)
			expect(emitCountB).to.equal(1)
			expect(emitCountC).to.equal(0)
			
			div.emit('otherEvent')
			expect(emitCountA).to.equal(1)
			expect(emitCountB).to.equal(1)
			expect(emitCountC).to.equal(1)
			
			div.off('myEvent.someOtherName')
			div.emit('myEvent')
			expect(emitCountA).to.equal(2)
			expect(emitCountB).to.equal(2)
			expect(emitCountC).to.equal(1)
			
			div.off('myEvent.someName')
			div.emit('myEvent')
			expect(emitCountA).to.equal(2)
			expect(emitCountB).to.equal(3)
			expect(emitCountC).to.equal(1)
			
			div.emit('otherEvent')
			expect(emitCountA).to.equal(2)
			expect(emitCountB).to.equal(3)
			expect(emitCountC).to.equal(2)
			
			div.off('otherEvent.someName')
			div.emit('otherEvent')
			expect(emitCountA).to.equal(2)
			expect(emitCountB).to.equal(3)
			expect(emitCountC).to.equal(2)
			
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
			expect(emitContext).to.equal div

			div.off()
			div.emit('one'); div.emit('two'); div.emit('three'); div.emit('four');
			expect(emitCount).to.equal 5

			divB = Dom.div(events:listeners)
			divB.emit('one'); divB.emit('three')
			expect(emitCount).to.equal 7
			
			expect(emitContext).to.equal div
			divB.emit('five')
			expect(emitContext).to.equal divB


		test "the inserted event will be privately emitted when the element is inserted into the DOM", ()->
			invokeCount = 0
			parentA = Dom.section()
			parentB = Dom.section()
			masterParentB = Dom.div()
			parentC = Dom.section().appendTo(sandbox)
			div = Dom.div()

			div.on 'inserted', (el)->
				expect(@).to.equal(div)
				expect(el).to.equal(div.parent)
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

			div.on 'inserted', ()-> expect(invokeCount++).to.equal(1)
			expect(invokeCount).to.equal(2)
			expect(div.parent).to.equal parentB
			
			div.appendTo(parentC)
			expect(invokeCount).to.equal(2)
			expect(div.parent).to.equal parentC
			
			div.detach()
			div.appendTo(parentA)
			div.on 'inserted', ()-> invokeCount++
			expect(invokeCount).to.equal(3)
			
			div.detach()
			div.appendTo(parentB)
			expect(invokeCount).to.equal(3)


		test "QuickElement.replace will trigger the inserted event", ()->
			invokeCount = 0
			parent = Dom.section().appendTo(sandbox)
			A = Dom.div()
			B = Dom.div()

			B.on 'inserted', (el)->
				expect(@).to.equal(B)
				expect(el).to.equal(B.parent)
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


		test "Styles defined in the options object will be applied via classNames and not inline style", ()->
			divA = Dom.div(style:{width:15, height:30}).appendTo(sandbox)
			divB = Dom.div().appendTo(sandbox).style {width:15, height:30}

			expect(divA.raw).to.have.style('width', '15px')
			expect(divB.raw).to.have.style('width', '15px')
			expect(divA.raw).to.have.style('height', '30px')
			expect(divB.raw).to.have.style('height', '30px')
			
			expect(divA.raw.style.width).to.equal ''
			expect(divB.raw.style.width).to.equal '15px'
			expect(divA.raw.style.height).to.equal ''
			expect(divB.raw.style.height).to.equal '30px'


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


		test "Functions can be passed as values for properties in style objects which will be invoked with the element's options.relatedInstance as the only argument", ()->
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
			div.related = anotherObj = {}
			applyWidth(anotherObj)
			expect(div.style 'width').to.equal '250px'

			div = Dom.div(style:{width:30, height:(->50), fontSize:(->20)}).appendTo(sandbox)
			expect(div.raw).to.have.style 'width', '30px'
			expect(div.raw).to.have.style 'height', '50px'
			expect(div.raw).to.have.style 'fontSize', '20px'


		test "If the return value of a style function is a promise, it will be awaited", ()->
			div = DOM.div(
				style: {width:50, height:50}
			).appendTo sandbox

			expect(div.width).to.equal 50
			expect(div.height).to.equal 50

			div.style 'width', ()-> 30
			div.style 'height', ()-> Promise.resolve(30)

			expect(div.width).to.equal 30
			expect(div.height).to.equal 50
			
			await Promise.delay(0)
			expect(div.width).to.equal 30
			expect(div.height).to.equal 30



		test "A null value can be passed for a property in order to delete that style", ()->
			div = Dom.div(style:{width:'15px', fontSize: -> 30}).appendTo(sandbox)
			div.style 'height', 20

			expect(div.el).to.have.style('width', '15px')
			expect(div.el).to.have.style('height', '20px')
			expect(div.el.style.width).to.equal ''
			expect(div.el.style.height).to.equal '20px'

			div.style {width:null, height:12}
			expect(div.el).not.to.have.style('width', '15px')
			expect(div.el).to.have.style('height', '12px')
			expect(['unset','inherit','initial'].some (s)-> s is div.el.style.width).to.be.true
			expect(div.el.style.height).to.equal '12px'

			div.css 'height', null
			expect(div.el.style.height).to.equal ''
			expect(div.el.style.width).not.to.equal ''

			div.el.style.width = null
			expect(div.el.style.width).to.equal ''
			expect(div.el).to.have.style('width', '15px')
			
			div.css 'width', null
			expect(div.el.style.width).not.to.equal ''
			expect(div.el).not.to.have.style('width', '15px')

			div.style 'height', -> 30
			expect(div.el.style.height).to.equal '30px'
			
			div.style 'height', -> null
			expect(div.el.style.height).to.equal ''
			
			expect(div.el.style.fontSize).to.equal '30px'
			div.style 'fontSize', null
			expect(div.el.style.fontSize).to.equal ''


		test ".styleSafe() can be used to obtain the value for a given property even for non-inserted elements or elements with options.styleAfterInsert", ()->
			style =
				width: '8px'
				height: '9px'
				zIndex: (field)-> field.options.theIndex
				$happy:
					width: '18px'
					zIndex: (field)-> field.options.theIndex*2
				$relaxed:
					height: '100%'
			divA = Dom.div {style, theIndex:'12'}
			divB = Dom.div {style, theIndex:'29', styleAfterInsert:true}
			divA.style fontSize:10, position:'relative'
			divB.style fontSize:10, position:'relative'
			prop = (el,target)-> computed:el.style(target), inline:el.raw.style[target], safe:''+el.styleSafe(target)

			expect(prop divA, 'fontSize').to.eql {computed:'', inline:'10px', safe:'10px'}
			expect(prop divB, 'fontSize').to.eql {computed:'', inline:'10px', safe:'10px'}
			expect(prop divA, 'width').to.eql {computed:'', inline:'', safe:'8px'}
			expect(prop divB, 'width').to.eql {computed:'', inline:'', safe:'8px'}
			expect(prop divA, 'height').to.eql {computed:'', inline:'', safe:'9px'}
			expect(prop divB, 'height').to.eql {computed:'', inline:'', safe:'9px'}
			expect(prop divA, 'zIndex').to.eql {computed:'', inline:'12', safe:'12'}
			expect(prop divB, 'zIndex').to.eql {computed:'', inline:'', safe:'29'}
			
			divA.state 'happy', on
			divB.state 'happy', on
			expect(prop divA, 'width').to.eql {computed:'', inline:'', safe:'18px'}
			expect(prop divB, 'width').to.eql {computed:'', inline:'', safe:'18px'}
			expect(prop divA, 'zIndex').to.eql {computed:'', inline:'24', safe:'24'}
			expect(prop divB, 'zIndex').to.eql {computed:'', inline:'', safe:'58'}
			
			divA.state 'relaxed', on
			divB.state 'relaxed', on
			expect(prop divA, 'height').to.eql {computed:'', inline:'', safe:'100%'}
			expect(prop divB, 'height').to.eql {computed:'', inline:'', safe:'100%'}
			
			divA.appendTo(sandbox)
			divB.appendTo(sandbox)
			heightA = getComputedStyle(divA.raw).height
			heightB = getComputedStyle(divB.raw).height
			expect(prop divA, 'zIndex').to.eql {computed:'24', inline:'24', safe:'24'}
			expect(prop divB, 'zIndex').to.eql {computed:'58', inline:'58', safe:'58'}
			expect(prop divA, 'height').to.eql {computed:heightA, inline:'', safe:heightA}
			expect(prop divB, 'height').to.eql {computed:heightB, inline:'', safe:heightB}

			expect(divA.styleSafe 'height').to.equal heightA
			expect(divA.styleSafe 'height', true).to.equal '100%'
			expect(divB.styleSafe 'height').to.equal heightB
			expect(divB.styleSafe 'height', true).to.equal '100%'
			
			divB.appendTo(sandbox)
			expect(divB.style('height')).not.to.equal('')
			expect(divB.style('height')).not.to.equal('100%')
			expect(divB.style('height')).to.contain('px')
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


		test ".recalcStyle() accepts a single argument to indicate if to recalc style on children", ()->
			count = A:0,B:0,C:0,D:0,E:0,F:0,G:0
			wrapperCount = 0
			wrapper = Dom.div style:
				width: ()-> ++wrapperCount
			
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

			div.appendTo(wrapper)
			expect(wrapperCount).to.equal 1
			expect(count).to.eql A:1,B:1,C:1,D:0,E:0,F:0,G:0
			
			wrapper.recalcStyle()
			expect(wrapperCount).to.equal 2
			expect(count).to.eql A:1,B:1,C:1,D:0,E:0,F:0,G:0
			
			wrapper.recalcStyle(true)
			expect(wrapperCount).to.equal 3
			expect(count).to.eql A:2,B:2,C:2,D:0,E:0,F:0,G:0
			
			div.state 'happy', on
			expect(count).to.eql A:2,B:2,C:2,D:1,E:0,F:0,G:0

			wrapper.recalcStyle()
			expect(wrapperCount).to.equal 4
			expect(count).to.eql A:2,B:2,C:2,D:1,E:0,F:0,G:0
			
			wrapper.recalcStyle(1)
			expect(wrapperCount).to.equal 5
			expect(count).to.eql A:3,B:3,C:2,D:2,E:0,F:0,G:0


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


		test "If options.forceStyle is set, all registered styles will have the '!important' flag set", ()->
			style = DOM.style(props:innerHTML:".theDiv {width:50px}")
			divA = DOM.div(className:'theDiv', style:{width:100, height:100}).appendTo(sandbox)
			divB = DOM.div(className:'theDiv', style:{width:100, height:100}, forceStyle:true).appendTo(sandbox)

			expect(divA.style 'width').to.equal '100px'
			expect(divB.style 'width').to.equal '100px'
			
			style.appendTo(document.head)
			expect(divA.style 'width').to.equal '50px'
			expect(divB.style 'width').to.equal '100px'
			
			expect(divA.attr('style') is '' or divA.attr('style') is null).to.be.true
			expect(divB.attr('style') is '' or divB.attr('style') is null).to.be.true
			
			divA.style 'width', ()-> 75
			divB.style 'width', ()-> 75
			divA.style 'height', 85
			divB.style 'height', 85
			expect(divA.attr 'style').not.to.equal ''
			expect(divB.attr 'style').not.to.equal ''
			expect(divA.attr 'style').not.to.include '75px !important'
			expect(divB.attr 'style').to.include '75px !important'
			expect(divA.attr 'style').not.to.include '85px !important'
			expect(divB.attr 'style').to.include '85px !important'
			expect(divA.style 'width').to.equal '75px'
			expect(divB.style 'width').to.equal '75px'
			style.remove()


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

		test "SVG elements", ()->
			svg = Dom(
				['*svg'
					style:
						display: 'block'
						width: 10
						height: 10
						$happy:
							width: 20
							height: 20
				]
			).appendTo(sandbox)

			expect(svg.style 'width').to.equal '10px'
			expect(svg.style 'height').to.equal '10px'

			svg.state 'happy', on
			expect(svg.style 'width').to.equal '20px'
			expect(svg.style 'height').to.equal '20px'




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


		test "A key:value pair object can be passed to toggle state for multiple states at once", ()->
			div = Dom.div()

			expect(div.state 'a').to.equal false
			expect(div.state 'b').to.equal false
			expect(div.state 'c').to.equal false

			div.state a:true,b:1
			expect(div.state 'a').to.equal true
			expect(div.state 'b').to.equal true
			expect(div.state 'c').to.equal false

			div.state b:false,c:'y'
			expect(div.state 'a').to.equal true
			expect(div.state 'b').to.equal false
			expect(div.state 'c').to.equal true


		test ".state() without arguments should return an array of active states", ()->
			el = DOM.div()
			expect(el.state()).to.eql []

			el.state 'happy', on
			el.state 'relaxed', on
			expect(el.state()).to.eql ['happy','relaxed']

			el.state 'happy', off
			expect(el.state()).to.eql ['relaxed']

			el.state 'happy', on
			expect(el.state()).to.eql ['relaxed','happy']


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


		test "A state can be toggled on/off via .toggleState", ()->
			div = DOM.div()
			expect(div.state 'happy').to.equal off

			div.toggleState('happy')
			expect(div.state 'happy').to.equal on
			
			div.toggleState('happy')
			expect(div.state 'happy').to.equal off
			
			div.toggleState('happy')
			expect(div.state 'happy').to.equal on


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
			attachStateEvents = if Dom.div()._attachStateEvents then '_attachStateEvents' else '_ae'
			divA = Dom.div(style:{$hover: display:'block'})
			divB = Dom.div(style:{$focus: display:'block'})
			divA[attachStateEvents](true)
			divB[attachStateEvents](true)

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
			expect(div.el).to.have.style('width', '15px')
			expect(div.el).to.have.style('height', '15px')
			expect(div.el).to.have.style('marginTop', '0px')
			expect(div.el).to.have.style('backgroundColor', 'rgb(45, 45, 45)')
			expect(div.el.style.marginTop).to.equal('')
			
			div.emit 'mouseenter'
			expect(div.el).to.have.style('width', '25px')
			expect(div.el).to.have.style('height', '15px')
			expect(div.el).to.have.style('marginTop', '20px')
			expect(div.el).to.have.style('backgroundColor', 'rgb(155, 155, 155)')
			expect(div.el.style.marginTop).to.equal('')
			
			div.emit 'mouseleave'
			expect(div.el).to.have.style('width', '15px')
			expect(div.el).to.have.style('height', '15px')
			expect(div.el).to.have.style('marginTop', '0px')
			expect(div.el).to.have.style('backgroundColor', 'rgb(45, 45, 45)')
			expect(div.el.style.marginTop).to.equal('')
			
			div.emit 'mouseenter'
			div.emit 'focus'
			expect(div.el).to.have.style('width', '35px')
			expect(div.el).to.have.style('height', '15px')
			expect(div.el).to.have.style('marginTop', '20px')
			expect(div.el).to.have.style('backgroundColor', 'rgb(200, 200, 200)')
			expect(div.el.style.marginTop).to.equal('')
			
			div.emit 'mouseleave'
			expect(div.el).to.have.style('width', '35px')
			expect(div.el).to.have.style('height', '15px')
			expect(div.el).to.have.style('marginTop', '0px')
			expect(div.el).to.have.style('backgroundColor', 'rgb(200, 200, 200)')
			expect(div.el.style.marginTop).to.equal('')


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
			expect(div.el).to.have.style('width', '15px')
			expect(div.el).to.have.style('height', '0px')
			expect(div.el.style.height).to.equal('')
			
			div.emit 'mouseenter'
			expect(div.el).to.have.style('width', '25px')
			expect(div.el).to.have.style('height', '30px')
			expect(div.el.style.height).to.equal('')
			
			div.emit 'mouseleave'
			expect(div.el).to.have.style('width', '15px')
			expect(div.el).to.have.style('height', '0px')
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

		
		test "QuickElement.width/.height setters are shortcuts for .style() setters", ()->
			parent = Dom.div().appendTo(sandbox)
			div = Dom.div().appendTo(parent)
			
			parent.style width:'1000px', height:'1000px'
			div.style width:'50%', height:'50%'
			div.width = div.height = '50%'
			expect(div.width).to.equal(500)
			expect(div.height).to.equal(500)
			
			div.width = div.height = '10%'
			expect(div.width).to.equal(100)
			expect(div.height).to.equal(100)
			
			div.width = div.height = '97px'
			expect(div.width).to.equal(97)
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


		test "If options.styleAfterInsert is passed, function styles will be applied only after the element is inserted into the DOM", ()->
			parentOpacityGetter = ()-> if @parent then @parent.style('opacity') else '0.5'
			divReg = Dom.div(style:{height:'19px', opacity:parentOpacityGetter})
			divA = Dom.div(style:{height:'19px', opacity:parentOpacityGetter}, styleAfterInsert:true)
			divB = Dom.div(style:{height:'19px', opacity:parentOpacityGetter}, styleAfterInsert:true)
			divC = Dom.div(style:{height:'19px', opacity:parentOpacityGetter}, styleAfterInsert:true)

			className = divReg.raw.className or 'no className'
			expect(divReg.raw.className).to.equal(className)
			expect(divA.raw.className).to.equal(className)
			expect(divB.raw.className).to.equal(className)
			expect(divC.raw.className).to.equal(className)
			expect(divReg.el.style.opacity).to.equal('0.5')
			expect(divA.el.style.opacity).to.equal('')
			expect(divB.el.style.opacity).to.equal('')
			expect(divC.el.style.opacity).to.equal('')
			
			divA.appendTo(sandbox)
			expect(divA.el.style.opacity).to.equal('1')
			expect(divB.el.style.opacity).to.equal('')
			expect(divC.el.style.opacity).to.equal('')
			
			divB.insertBefore(sandbox)
			expect(divA.el.style.opacity).to.equal('1')
			expect(divB.el.style.opacity).to.equal('1')
			expect(divC.el.style.opacity).to.equal('')
			
			sandbox.appendChild(divC.el)
			expect(divA.el.style.opacity).to.equal('1')
			expect(divB.el.style.opacity).to.equal('1')
			expect(divC.el.style.opacity).to.equal('')
			
			divC.parent
			expect(divA.el.style.opacity).to.equal('1')
			expect(divB.el.style.opacity).to.equal('1')
			expect(divC.el.style.opacity).to.equal('1')
			divC.appendTo(sandbox)


		test "Any styles applied by states before the element has been inserted into the DOM and when options.styleAfterInsert is on will be re-applied after insert", ()->
			divReg = Dom.div(style:{$base:{height:->'19px'}, $funny:{height:->'29px'}, $happy:{height:->'39px'}})
			divA = Dom.div(style:{$base:{height:->'19px'}, $funny:{height:->'29px'}, $happy:{height:->'39px'}}, styleAfterInsert:true)

			expect(divReg.el.style.height).to.equal('19px')
			expect(divA.el.style.height).to.equal('')

			divReg.state 'funny', on
			divA.state 'funny', on
			expect(divReg.el.style.height).to.equal('29px')
			expect(divA.el.style.height).to.equal('')
			
			divReg.state 'happy', on
			divA.state 'happy', on
			expect(divReg.el.style.height).to.equal('39px')
			expect(divA.el.style.height).to.equal('')
			
			divReg.appendTo(sandbox)
			divA.appendTo(sandbox)
			expect(divReg.el.style.height).to.equal('39px')
			expect(divA.el.style.height).to.equal('39px')


		test "If an element with options.styleAfterInsert is appended into a detached element, styles will be applied only after the parent is appended to the DOM", ()->
			detachedParent = Dom.div()
			divReg = Dom.div(style:{height:(->'19px'), $happy:$relaxed:{width:->'31px'}})
			divA = Dom.div(style:{height:(->'19px'), $happy:$relaxed:{width:->'31px'}}, styleAfterInsert:true)

			divReg.state 'happy', on
			divReg.state 'relaxed', on
			divA.state 'happy', on
			divA.state 'relaxed', on
			divA.state 'relaxed', on
			divA.style 'visibility', 'hidden'

			expect(divReg.el.style.height).to.equal('19px')
			expect(divReg.el.style.width).to.equal('31px')
			expect(divA.el.style.height).to.equal('')
			expect(divA.el.style.width).to.equal('')
			expect(divA.el.style.visibility).to.equal('hidden')

			divA.appendTo(detachedParent)
			expect(divA.el.style.height).to.equal('')
			expect(divA.el.style.width).to.equal('')
			expect(divA.el.style.visibility).to.equal('hidden')

			detachedParent.appendTo(sandbox)
			expect(divA.el.style.height).to.equal('19px')
			expect(divA.el.style.width).to.equal('31px')
			expect(divA.el.style.visibility).to.equal('hidden')


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
			divC = Dom.div(text:{$base:'def456', $happy:'ghi789'})
			
			expect(divA.text).to.equal 'abc123'
			expect(divB.text).to.equal ''
			expect(divC.text).to.equal 'def456'
			
			divA.state 'happy', on
			divB.state 'happy', on
			divC.state 'happy', on
			expect(divA.text).to.equal 'Happy'
			expect(divB.text).to.equal 'Happy'
			expect(divC.text).to.equal 'ghi789'
			
			divA.state 'happy', off
			divB.state 'happy', off
			divC.state 'happy', off
			expect(divA.text).to.equal 'abc123'
			expect(divB.text).to.equal ''
			expect(divC.text).to.equal 'def456'
			
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


		test "state changes will emit a private stateChange:<state> event", ()->
			results = []
			div = Dom.div style:
				color: 'white'
				opacity: 1
				$happy: color: 'black'
			
			
			div.state 'any', on
			div.on 'stateChange:happy', (state)-> results.push ['happy', state]
			div.on 'stateChange:relaxed', (state)-> results.push ['relaxed', state]
			div.on 'stateChange:arbitrary', (state)-> results.push ['arbitrary', state]
			expect(results).to.deep.equal []

			div.state 'happy', on
			expect(results).to.deep.equal [['happy',on]]

			div.state 'happy', off
			expect(results).to.deep.equal [['happy',on], ['happy',off]]

			div.state 'happy', on
			expect(results).to.deep.equal [['happy',on], ['happy',off], ['happy',on]]

			div.state 'happy', on
			expect(results).to.deep.equal [['happy',on], ['happy',off], ['happy',on]]

			div.state 'another', on
			expect(results).to.deep.equal [['happy',on], ['happy',off], ['happy',on]]

			div.state 'relaxed', on
			expect(results).to.deep.equal [['happy',on], ['happy',off], ['happy',on], ['relaxed',on]]

			div.state 'arbitrary', on
			expect(results).to.deep.equal [['happy',on], ['happy',off], ['happy',on], ['relaxed',on], ['arbitrary',on]]

			div.state 'relaxed', on
			expect(results).to.deep.equal [['happy',on], ['happy',off], ['happy',on], ['relaxed',on], ['arbitrary',on]]


		test "state-based styles can be updated via QuickElement.updateStateStyles", ()->
			div = Dom.div(style:
				width: 5
				height: 5
				marginTop: 5
				$happy:
					marginTop: 10
				$relaxed:
					marginTop: 20
					width: 20
					$happy:
						height: 40
						marginTop: 40
				$somethingElse:
					width: 60
					marginTop: 60
			).appendTo(sandbox)
			getStyles = ()-> width:div.style('width'), height:div.style('height'), marginTop:div.style('marginTop')

			expect(getStyles()).to.eql width:'5px', height:'5px', marginTop:'5px'
			
			div.state 'happy', on
			expect(getStyles()).to.eql width:'5px', height:'5px', marginTop:'10px'
			
			div.updateStateStyles {width:7, height:8, $happy:{marginTop:12, height:12}}
			expect(getStyles()).to.eql width:'7px', height:'12px', marginTop:'12px'

			div.state 'happy', off
			expect(getStyles()).to.eql width:'7px', height:'8px', marginTop:'5px'
			
			div.state 'happy', on
			expect(getStyles()).to.eql width:'7px', height:'12px', marginTop:'12px'
			div.state 'happy', off
			
			div.updateStateStyles
				$base:
					width: 2
					height: 9
				$relaxed:
					height: 20
					$happy:
						width: 40
						marginTop: -> 45
			
			expect(getStyles()).to.eql width:'2px', height:'9px', marginTop:'5px'

			div.state 'relaxed', on
			expect(getStyles()).to.eql width:'20px', height:'20px', marginTop:'20px'

			div.state 'happy', on
			expect(getStyles()).to.eql width:'40px', height:'40px', marginTop:'45px'

			div.state {happy:off, relaxed:off}
			div.el.style.marginTop = null
			expect(getStyles()).to.eql width:'2px', height:'9px', marginTop:'5px'

			div.state 'somethingElse', on
			expect(getStyles()).to.eql width:'60px', height:'9px', marginTop:'60px'


		test "default states to apply to an element upon creation can be specified via options.state mapping", ()->
			el1 = DOM.div()
			el2 = DOM.div(state:{happy:on, relaxed:off})
			el3 = DOM.div(state:{relaxed:on})
			expect(el1.state 'happy').to.equal off
			expect(el1.state 'relaxed').to.equal off
			expect(el2.state 'happy').to.equal on
			expect(el2.state 'relaxed').to.equal off
			expect(el3.state 'happy').to.equal off
			expect(el3.state 'relaxed').to.equal on



	suite "Media Queries", ()->
		suiteTeardown ()-> dimensions.restore() if Object.getOwnPropertyDescriptor(window, 'innerWidth')?.configurable
		suiteSetup ()-> @skip() if not Object.getOwnPropertyDescriptor(window, 'innerWidth')?.configurable
		teardown ()-> Dom.CSS.clearRegistered(level) for level in [0..3]


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
					marginTop: 6

				'@window(orientation:portrait)':
					marginTop: 7

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
			
			expect(div.style 'zIndex').to.equal '2'
			expect(div.style 'width').to.equal '300px'
			expect(div.style 'height').to.equal '300px'
			expect(div.style 'fontSize').to.equal '23px'
			expect(div.style 'marginTop').to.equal '7px'
			
			dimensions.simulate(900)
			expect(div.style 'fontSize').to.equal '23px'
			
			dimensions.simulate(899)
			expect(div.style 'fontSize').to.equal '25px'

			dimensions.simulate(899, 1100)
			expect(div.style 'fontSize').to.equal '30px'

			dimensions.simulate(950)
			expect(div.style 'fontSize').to.equal '23px'

			dimensions.simulate(950, 1900)
			expect(div.style 'fontSize').to.equal '20px'
			expect(div.style 'lineHeight').to.equal '12px'
			
			dimensions.simulate(950, 1899)
			expect(div.style 'fontSize').to.equal '20px'
			expect(div.style 'lineHeight').to.equal '30px'

			dimensions.simulate(790)
			expect(div.style 'zIndex').to.equal '3'
			expect(div.style 'width').to.equal '280px'

			dimensions.simulate(810)
			expect(div.style 'zIndex').to.equal '2'
			expect(div.style 'width').to.equal '300px'

			dimensions.simulate(791)
			expect(div.style 'zIndex').to.equal '3'
			expect(div.style 'width').to.equal '280px'

			dimensions.simulate(701, 900)
			expect(div.style 'zIndex').to.equal '3'
			expect(div.style 'width').to.equal '280px'
			expect(div.style 'height').to.equal '300px'

			dimensions.simulate(700, 900)
			expect(div.style 'zIndex').to.equal '4'
			expect(div.style 'width').to.equal '250px'
			expect(div.style 'height').to.equal '250px'

			dimensions.simulate(700, 1001)
			expect(div.style 'zIndex').to.equal '3'
			expect(div.style 'width').to.equal '280px'
			expect(div.style 'height').to.equal '300px'

			dimensions.simulate(700, 1000)
			expect(div.style 'zIndex').to.equal '4'
			expect(div.style 'width').to.equal '250px'
			expect(div.style 'height').to.equal '250px'
			expect(div.style 'marginTop').to.equal '7px'
			
			dimensions.simulate(1100, 1000)
			expect(div.style 'marginTop').to.equal '6px'
			
			dimensions.simulate(1100, 1101)
			expect(div.style 'marginTop').to.equal '7px'


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
					marginTop: 6

				'@self(orientation:portrait)':
					marginTop: 7
				
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
					fontSize: '22px'
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
			expect(div.style 'marginTop').to.equal '6px'
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
			expect(div.style 'fontSize').to.equal '22px'
			expect(div.style 'lineHeight').to.equal '12px'
			
			simulateParent(2025, 900)
			expect(div.style 'fontSize').to.equal '40px'
			expect(div.style 'lineHeight').to.equal '12px'
			expect(div.style 'marginTop').to.equal '6px'
			
			simulateParent(2025, 2026)
			expect(div.style 'marginTop').to.equal '7px'


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
					marginBottom: 6

				'@parent(orientation:portrait)':
					marginBottom: 7
				
				'@parent(position:relative)':
					top: '21px'

				'@parent(max-width:350)':
					zIndex: 3
					fontSize: '34px'
				
				'@parent(max-width:500, min-height:400)':
					zIndex: 4
					fontSize: '27px'
					lineHeight: '37px'
				
				'@parent(zIndex:7)':
					lineHeight: '16px'


			simulateParent(400, 300)
			div.appendTo(parent)
			expect(div.style 'zIndex').to.equal '2'
			expect(div.style 'width').to.equal '400px'
			expect(div.style 'height').to.equal '300px'
			expect(div.style 'fontSize').to.equal '30px'
			expect(div.style 'lineHeight').to.equal '30px'
			expect(div.style 'marginBottom').to.equal '6px'
			expect(div.style 'top').to.equal '30px'

			parent.style 'position', 'relative'
			expect(div.style 'top').to.equal '30px'

			simulateParent()
			expect(div.style 'top').to.equal '21px'

			simulateParent(349, 420)
			expect(div.style 'zIndex').to.equal '4'
			expect(div.style 'fontSize').to.equal '27px'
			expect(div.style 'lineHeight').to.equal '37px'
			
			simulateParent(349, 399)
			expect(div.style 'zIndex').to.equal '3'
			expect(div.style 'fontSize').to.equal '34px'
			
			parent.style 'zIndex', '7'
			simulateParent(349, 401)
			expect(div.style 'zIndex').to.equal '4'
			expect(div.style 'fontSize').to.equal '27px'
			expect(div.style 'lineHeight').to.equal '16px'
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
					marginRight: 5
					'@window(orientation:landscape)':
						marginRight: 6

				'@window(orientation:portrait)':
					$relaxed:
						marginRight: 7


			div.appendTo(sandbox)
			
			expect(div.style 'marginRight').to.equal '0px'
			
			div.state 'happy', on
			expect(div.style 'marginRight').to.equal '6px'
			
			dimensions.simulate(900, 1000)
			expect(div.style 'marginRight').to.equal '5px'
			
			dimensions.simulate(1000, 900)
			expect(div.style 'marginRight').to.equal '6px'


			div.state 'relaxed', on
			expect(div.style 'marginRight').to.equal '6px'
			
			dimensions.simulate(900, 1000)
			expect(div.style 'marginRight').to.equal '7px'
			
			dimensions.simulate(1000, 900)
			expect(div.style 'marginRight').to.equal '6px'






	suite "Traversal", ()->
		test "Children", ()->
			div = Dom.div(null, Dom.div(), 'Some Text')

			expect(div.children.length).to.equal(2)
			expect(div.elementChildren.length).to.equal(1)
			expect(div.el.childNodes.length).to.equal(2)

			div.append(Dom.span())
			expect(div.children.length).to.equal(3)
			expect(div.elementChildren.length).to.equal(2)
			expect(div.el.childNodes.length).to.equal(3)
			
			div.el.appendChild(document.createElement('div'))
			expect(div.children.length).to.equal(4)
			expect(div.elementChildren.length).to.equal(3)
			expect(div.el.childNodes.length).to.equal(4)

			div = document.createElement('div')
			spanA = document.createElement('span')
			spanB = document.createElement('span')
			text = document.createTextNode('someTextNode')
			comment = document.createComment('someCommentNode')
			
			div.appendChild(spanA)
			div.appendChild(comment)
			div.appendChild(spanB)
			div.appendChild(text)
			expect(div.childNodes.length).to.equal(4)
			expect(div.children.length).to.equal(2)

			div$ = Dom(div)
			expect(div$.children.length).to.equal(3)
			expect(div$.elementChildren.length).to.equal(2)
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


		suite "Parent Matching", ()->
			teardown ()-> @els.A.detach()
			suiteSetup ()->
				A = Dom.section(ref:'A')
				B = Dom.div(ref:'B').appendTo(A)
				C = Dom.div(ref:'C').appendTo(B)
				D = Dom.span(ref:'D').appendTo(C)
				@els = {A,B,C,D}
				
			test "function filter", ()->
				{A,B,C,D} = @els
				expect(D.parents).to.eql [C,B,A]
				expect(D.parentMatching(null)).to.equal(undefined)
				expect(D.parentMatching(B)).to.equal(undefined)
				expect(D.parentMatching ()-> false).to.equal(undefined)
				expect(D.parentMatching (el)-> el is B).to.equal(B)
				expect(D.parentMatching (el)-> el is A).to.equal(A)
				expect(D.parentMatching (el)-> el is C).to.equal(C)

				A.appendTo(sandbox)
				expect(D.parentMatching (el)-> el.raw is document.documentElement).to.equal(Dom(document.documentElement))

			test "ref filter", ()->
				{A,B,C,D} = @els
				expect(D.parents).to.eql [C,B,A]
				expect(D.parentMatching 'badRef').to.equal(undefined)
				expect(D.parentMatching 'B').to.equal(B)
				expect(D.parentMatching 'A').to.equal(A)
				expect(D.parentMatching 'C').to.equal(C)


		suite "Parents Until", ()->
			suiteSetup ()->
				A = Dom.section(ref:'A')
				B = Dom.div(ref:'B').appendTo(A)
				C = Dom.div(ref:'C').appendTo(B)
				D = Dom.span(ref:'D').appendTo(C)
				@els = {A,B,C,D}
			
			test "function filter", ()->
				{A,B,C,D} = @els
				expect(D.parents).to.eql [C,B,A]
				expect(D.parentsUntil(null)).to.eql [C,B,A]
				expect(D.parentsUntil()).to.eql [C,B,A]
				expect(D.parentsUntil (el)-> el is A).to.eql [C,B]
				expect(D.parentsUntil (el)-> el is B).to.eql [C]
				expect(D.parentsUntil (el)-> false).to.eql [C,B,A]
			

			test "ref filter", ()-> 
				{A,B,C,D} = @els
				expect(D.parentsUntil 'A').to.eql [C,B]
				expect(D.parentsUntil 'B').to.eql [C]
				expect(D.parentsUntil 'badRef').to.eql [C,B,A]


		test "Next", ()->
			div = Dom.div(null, A=Dom.div(), B=Dom.div(), C=Dom.div(), D=Dom.div(), E=Dom.div())

			expect(A.next).to.equal(B)
			expect(C.next).to.equal(D)
			expect(E.next).to.equal(undefined)
			expect(B.nextAll).to.eql([C,D,E])

		
		test "Next Element", ()->
			div = Dom.div(null, A=Dom.div(), B=Dom.text(), C=Dom.div(), D=Dom.text(), E=Dom.div())

			expect(A.next).to.equal(B)
			expect(A.nextEl).to.equal(C)
			expect(B.nextEl).to.equal(C)
			expect(C.nextEl).to.equal(E)
			expect(E.nextEl).to.equal(undefined)
			expect(A.nextElAll).to.eql([C,E])


		test "Prev", ()->
			div = Dom.div(null, A=Dom.div(), B=Dom.div(), C=Dom.div(), D=Dom.div(), E=Dom.div())

			expect(E.prev).to.equal(D)
			expect(C.prev).to.equal(B)
			expect(A.prev).to.equal(undefined)
			expect(D.prevAll).to.eql([C,B,A])

		
		test "Prev Element", ()->
			div = Dom.div(null, A=Dom.div(), B=Dom.text(), C=Dom.div(), D=Dom.text(), E=Dom.div())

			expect(E.prev).to.equal(D)
			expect(E.prevEl).to.equal(C)
			expect(D.prevEl).to.equal(C)
			expect(C.prevEl).to.equal(A)
			expect(A.prevEl).to.equal(undefined)
			expect(E.prevElAll).to.eql([C,A])


		test "Siblings", ()->
			div = Dom.div(null, A=Dom.div(), B=Dom.text(), C=Dom.div(), D=Dom.text(), E=Dom.div())

			expect(C.siblings).to.eql(C.prevAll.reverse().concat(C.nextAll))
			expect(C.siblings).to.eql([A,B,D,E])
			expect(C.elementSiblings).to.eql([A,E])
			expect(B.elementSiblings).to.eql([A,C,E])


		test "First/Last Child", ()->
			main = DOM.div(id:'main')
			divA = DOM.div(id:'divA').appendTo(main)
			divB = DOM.div(id:'divB').appendTo(main)
			divC = DOM.div(id:'divC').appendTo(main)
			divBA = DOM.div(id:'divBA').appendTo(divB)
			divBB = DOM.div(id:'divBB').appendTo(divB)

			expect(main.firstChild).to.equal divA
			expect(main.lastChild).to.equal divC
			expect(divA.firstChild).to.equal undefined
			expect(divA.lastChild).to.equal undefined
			expect(divB.firstChild).to.equal divBA
			expect(divB.lastChild).to.equal divBB


		test "Child (by ref)", ()->
			divA = 
				Dom.div {id:'divA'},
					Dom.div {id:'childA'},
						Dom.span {ref:'childA_1'}
						Dom.div {ref:'childA_2', id:'childA_2'}
					Dom.div {},
						Dom.span {ref:'childB_1'}
						Dom.text {id:'childB_2'}, 'The Text'


			divB = Dom.template(
				['div', {id:'divB'},
					['div', {id:'childA', style:{color:'pink'}},
						['span', {ref:'childA_1'}]
						['div', {ref:'childA_3', id:'childA_2'}]
					]
					['div', null, 
						['span', {ref:'childB_1'}]
					]
				]
			).spawn()

			divC = Dom.template(
				['div', ref:'divC',
					['div',	ref:'childA',
						['div', ref:'divB']
						['div', ref:'divC']
					]
					['div',	ref:'childB',
						['div', ref:'divB']
						['div', ref:'divC']
						['div', ref:'divD',
							['div', ref:'childB']
						]
					]
				]
			).spawn()

			
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

			expect(divC.child.childA).to.equal(divC.children[0])
			expect(divC.child.childB).to.equal(divC.children[1])
			expect(divC.child.divB).to.equal(divC.children[0].children[0])
			expect(divC.child.divC).to.equal(divC)
			expect(divC.child.divD).to.equal(divC.children[1].children[2])
			expect(divC.children[0].child.divB).to.equal(divC.children[0].children[0])
			expect(divC.children[0].child.divC).to.equal(divC.children[0].children[1])
			expect(divC.children[1].child.divB).to.equal(divC.children[1].children[0])
			expect(divC.children[1].child.divC).to.equal(divC.children[1].children[1])
			expect(divC.children[1].child.divD).to.equal(divC.children[1].children[2])
			expect(divC.children[1].child.childB).to.equal(divC.children[1])

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


		test "Query", ()->
			div = Dom.template(
				['div', {class:'div-one', attrs:name:'abc123'},
					['div', {class:'childA', style:{color:'pink'}},
						['span', {class:'childA_1'}]
						['div', {class:'childA_1'}]
						['span', {class:'childA_1'}]
						['div', {class:'childA_2'}]
					]
					['div', className:'childB', 
						['span', {class:'childB_1'}]
					]
					['section', className:'childB', 
						['span', {class:'childB_1'}]
					]
				]
			).spawn().appendTo(sandBox = Dom(sandbox))

			expect(div.query '.childA').to.equal(div.children[0])
			expect(div.query '.childB').to.equal(div.children[1])
			expect(div.query '.childB_1').to.equal(div.children[1].children[0])
			expect(div.query '.childA_1').to.equal(div.children[0].children[0])
			expect(div.query '.childA_2').to.equal(div.children[0].children[3])
			expect(sandBox.query '.div-one').to.equal(div)
			expect(sandBox.query '.childB_1').to.equal(div.children[1].children[0])
			expect(sandBox.query 'div[name="abc123"]').to.equal(div)
			expect(sandBox.query 'span[name="abc123"]').to.equal(undefined)


		test "QueryAll", ()->
			div = Dom.template(
				['div', {class:'div-one', attrs:name:'abc123'},
					['div', {class:'childA', style:{color:'pink'}},
						['span', {class:'childA_1'}]
						['div', {class:'childA_1'}]
						['span', {class:'childA_1'}]
						['div', {class:'childA_2'}]
					]
					['div', className:'childB', 
						['span', {class:'childB_1'}]
					]
					['section', className:'childB', 
						['span', {class:'childB_1'}]
					]
				]
			).spawn().appendTo(sandBox = Dom(sandbox))

			expect(div.queryAll('.childA').elements).to.eql([div.children[0]])
			expect(div.queryAll('.childB').elements).to.eql([div.children[1], div.children[2]])
			expect(div.queryAll('.childB_1').elements).to.eql([div.children[1].children[0], div.children[2].children[0]])
			expect(div.queryAll('.childA_1').elements).to.eql([div.children[0].children[0], div.children[0].children[1], div.children[0].children[2]])
			expect(div.queryAll('.childA_2').elements).to.eql([div.children[0].children[3]])
			expect(sandBox.queryAll('.div-one').elements).to.eql([div])
			expect(sandBox.queryAll('.childB_1').elements).to.eql([div.children[1].children[0], div.children[2].children[0]])
			expect(sandBox.queryAll('div[name="abc123"]').elements).to.eql([div])
			expect(sandBox.queryAll('span[name="abc123"]').elements).to.eql([])
			expect(div.text).to.equal('')
			expect(sandBox.queryAll('.childB_1').text('abc123').elements).to.eql([div.children[1].children[0], div.children[2].children[0]])
			expect(div.text).to.equal('abc123abc123')


		test "Query/QueryAll shortcuts", ()->
			expect(Dom.query('head')).to.equal(Dom(document).query('head'))
			expect(Dom.query('body')).to.equal(Dom(document).query('body'))
			
			allA = Dom.queryAll('section').elements
			allB = Dom(document).queryAll('section').elements
			expect(allA.length).to.equal(allB.length)
			for el,index in allA
				expect(allA[index]).to.equal(allB[index])
			return



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

			div.prop {abc:123, def:456}
			expect(div.el.abc).to.equal 123
			expect(div.el.def).to.equal 456


		test ".attr() - element attribute getter/setter", ()->
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
			
			div.attr 'promiseIsLast'
			expect(div.el.getAttribute 'promiseIsLast').to.equal 'over9k'
			
			div.attr 'promiseIsLast', null
			expect(div.el.getAttribute 'promiseIsLast').to.equal null

			div.attr {abc:123, def:456}
			expect(div.el.getAttribute 'abc').to.equal '123'
			expect(div.el.getAttribute 'def').to.equal '456'

			div.attr {abc:123, def:null}
			expect(div.el.getAttribute 'abc').to.equal '123'
			expect(div.el.getAttribute 'def').to.equal null


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


		test ".addClass", ()->
			div = Dom.div class:'some-selector anotherSelector .period    annoying-_-selector '

			expect(div.raw.className).to.equal 'some-selector anotherSelector .period    annoying-_-selector '
			
			div.addClass('new-selector')
			expect(div.raw.className).to.equal 'some-selector anotherSelector .period annoying-_-selector new-selector'
			
			div.addClass('new-selector')
			expect(div.raw.className).to.equal 'some-selector anotherSelector .period annoying-_-selector new-selector'
			
			div.raw.className = div.raw.className.replace 'new-selector', ' '
			expect(div.raw.className).to.equal 'some-selector anotherSelector .period annoying-_-selector  '
			
			div.addClass('new-selector')
			expect(div.raw.className).to.equal 'some-selector anotherSelector .period annoying-_-selector new-selector'
			
			div.addClass('.period')
			expect(div.raw.className).to.equal 'some-selector anotherSelector .period annoying-_-selector new-selector'
			
			div.addClass('period')
			expect(div.raw.className).to.equal 'some-selector anotherSelector .period annoying-_-selector new-selector period'


		test ".removeClass", ()->
			div = Dom.div class:'some-selector anotherSelector .period    annoying-_-selector '

			expect(div.raw.className).to.equal 'some-selector anotherSelector .period    annoying-_-selector '
			
			div.addClass('new-selector')
			expect(div.raw.className).to.equal 'some-selector anotherSelector .period annoying-_-selector new-selector'

			div.removeClass('new-selector')
			expect(div.raw.className).to.equal 'some-selector anotherSelector .period annoying-_-selector'

			div.removeClass('new-selector')
			expect(div.raw.className).to.equal 'some-selector anotherSelector .period annoying-_-selector'
						
			div.removeClass('some-selector')
			expect(div.raw.className).to.equal 'anotherSelector .period annoying-_-selector'
						
			div.removeClass('period')
			expect(div.raw.className).to.equal 'anotherSelector .period annoying-_-selector'
						
			div.removeClass('.period')
			expect(div.raw.className).to.equal 'anotherSelector annoying-_-selector'


		test ".toggleClass", ()->
			div = Dom.div class:'some-selector anotherSelector .period    annoying-_-selector '

			expect(div.raw.className).to.equal 'some-selector anotherSelector .period    annoying-_-selector '
			
			div.toggleClass('new-selector')
			expect(div.raw.className).to.equal 'some-selector anotherSelector .period annoying-_-selector new-selector'

			div.toggleClass('new-selector')
			expect(div.raw.className).to.equal 'some-selector anotherSelector .period annoying-_-selector'

			div.toggleClass('new-selector')
			expect(div.raw.className).to.equal 'some-selector anotherSelector .period annoying-_-selector new-selector'
						
			div.toggleClass('new-selector')
			div.toggleClass('some-selector')
			expect(div.raw.className).to.equal 'anotherSelector .period annoying-_-selector'
						
			div.toggleClass('some-selector')
			expect(div.raw.className).to.equal 'anotherSelector .period annoying-_-selector some-selector'
						
			div.toggleClass('period')
			expect(div.raw.className).to.equal 'anotherSelector .period annoying-_-selector some-selector period'
						
			div.toggleClass('.period')
			expect(div.raw.className).to.equal 'anotherSelector annoying-_-selector some-selector period'
						
			div.toggleClass('annoying-_-selector')
			expect(div.raw.className).to.equal 'anotherSelector some-selector period'


		test ".setRef", ()->
			el = DOM.div(ref:'name1')
			expect(el.ref).to.equal 'name1'
			expect(el.options.ref).to.equal 'name1'
			expect(el.attr 'data-ref').to.equal 'name1'

			el.setRef 'name2'
			expect(el.ref).to.equal 'name2'
			expect(el.options.ref).to.equal 'name2'
			expect(el.attr 'data-ref').to.equal 'name2'




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


		test "Templates can be extended via template.extend", ()->
			template = Dom.template(['div', className:'some-div', 'Some Inner Text'])
			templateCopyA = template.extend {type:'span', options:{className:'some-span'}, children:[]}
			templateCopyB = template.extend {options:{id:'theMainDiv'}, children:['The Other Inner Text']}
			templateCopyC = template.extend(
				['section'
					className:'some-section'
					['div', null, 'Very ']
					['div', null
						['span', {style:fontWeight:500},'Nested ']
						'Inner Text'
					]
				]
			)

			expect(templateCopyA).not.to.equal(template)
			expect(templateCopyB).not.to.equal(template)
			spawn = template.spawn()
			spawnA = templateCopyA.spawn()
			spawnB = templateCopyB.spawn()
			spawnC = templateCopyC.spawn()

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

			expect(spawnC.el.nodeName.toLowerCase()).to.equal('section')
			expect(spawnC.el.className).to.equal('some-section')
			expect(spawnC.el.id).to.equal('')
			expect(spawnC.text).to.equal('Very Nested Inner Text')


		test "Templates can be spawned via extended config by passing a new config object to template.spawn()", ()->
			template = Dom.template(
				['div', className:'some-div',
					'Some Inner Text',
					['strong', {className:'highlighted', style:{opacity:0.9}}, ' - Bolded Text']
				]
			)
			spawnRaw = template.spawn().appendTo(sandbox)
			spawnA = template.spawn(type:'section', options:{className:'some-section', style:{opacity:0.7}}).appendTo(sandbox)
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
			).appendTo(sandbox)

			expect(spawnRaw.el.nodeName.toLowerCase()).to.equal('div')
			expect(spawnRaw.el.className).to.equal('some-div')
			expect(spawnRaw.el.id).to.equal('')
			expect(spawnRaw.text).to.equal('Some Inner Text - Bolded Text')
			expect(spawnRaw.el).to.have.style('opacity','1')
			expect(spawnRaw.el.childNodes.length).to.equal(2)
			expect(spawnRaw.el.childNodes[0].nodeName).to.equal('#text')
			expect(spawnRaw.el.childNodes[1].nodeName.toLowerCase()).to.equal('strong')
			expect(spawnRaw.el.childNodes[1].className).to.include('highlighted')
			expect(spawnRaw.el.childNodes[1]).to.have.style('opacity', '0.9')

			expect(spawnA.el.nodeName.toLowerCase()).to.equal('section')
			expect(spawnA.el.className).to.include('some-section')
			expect(spawnA.el.id).to.equal('')
			expect(spawnA.text).to.equal('Some Inner Text - Bolded Text')
			expect(spawnA.el).to.have.style('opacity','0.7')
			expect(spawnA.el.childNodes.length).to.equal(2)
			expect(spawnA.el.childNodes[0].nodeName).to.equal('#text')
			expect(spawnA.el.childNodes[1].nodeName.toLowerCase()).to.equal('strong')
			expect(spawnA.el.childNodes[1].className).to.include('highlighted')
			expect(spawnA.el.childNodes[1]).to.have.style('opacity', '0.9')

			expect(spawnB.el.nodeName.toLowerCase()).to.equal('div')
			expect(spawnB.el.className).to.include('main-div')
			expect(spawnB.el.id).to.equal('theMainDiv')
			expect(spawnB.text).to.equal('Main Inner Text - Very Bolded Text + Other Text')
			expect(spawnB.el).to.have.style('opacity','0.5')
			expect(spawnB.el.childNodes.length).to.equal(3)
			expect(spawnB.el.childNodes[0].nodeName.toLowerCase()).to.equal('span')
			expect(spawnB.el.childNodes[0].childNodes.length).to.equal(1)
			expect(spawnB.el.childNodes[1].nodeName.toLowerCase()).to.equal('b')
			expect(spawnB.el.childNodes[1].className).to.include('super-highlighted')
			expect(spawnB.el.childNodes[1]).to.have.style('opacity', '0.2')


		test "Template.extend/spawn() can accept a template tree array", ()->
			template = Dom.template ['div', style:{'opacity':0.5}, ['span', null, 'text of span'], ['div', null, 'text of div']]
			cloneA = template.extend(['section', style:{'opacity':0.8}])
			cloneB = template.extend(['span', null, ['div']])
			cloneC = template.extend(['section', {className:'the-section', style:{color:'blue'}}, ['section', null, 'text of subsection'], 'just a text node'])
			spawn = template.spawn(['span', style:{'width':190, 'opacity':0.4}, 'so nice']).appendTo(sandbox)

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

			spawn.style 'display', 'block'
			expect(spawn.el.nodeName.toLowerCase()).to.equal 'span'
			expect(spawn.el).to.have.style 'opacity', '0.4'
			expect(spawn.el).to.have.style 'width', '190px'
			expect(spawn.el.childNodes.length).to.equal 2
			expect(spawn.el.childNodes[0].nodeType).to.equal 3
			expect(spawn.el.childNodes[0].textContent).to.equal 'so nice'
			expect(spawn.el.childNodes[1].nodeName.toLowerCase()).to.equal 'div'
			expect(spawn.el.childNodes[1].textContent).to.equal 'text of div'

			# expect ()->
			# 	Dom.template(['div']).extend(['span', null, ['div', null, ['section']]])
			# .not.to.throw()


		test "Template.extend/spawn() can accept other template instances as children which will replace existing children", ()->
			template = Dom.template ['div', null, ['span', {style:opacity:0.5}], 'original text']
			childA = Dom.template ['div', {style:fontFamily:'pink'}]
			childB = Dom.template 'replaced text'
			childC = Dom.template ['section']
			templateCopy = template.extend(['span', {style:fontSize:'77px'}, childA, childB, childC])
			spawnedA = template.spawn().appendTo(sandbox)
			spawnedB = templateCopy.spawn().appendTo(sandbox)
			spawnedC = template.spawn(['span', {style:fontSize:'77px'}, childA, childB, childC]).appendTo(sandbox)

			expect(spawnedA.type).to.equal('div')
			expect(spawnedA.children.length).to.equal(2)
			expect(spawnedA.children[0].type).to.equal('span')
			expect(spawnedA.children[0].raw).to.have.style('opacity', '0.5')
			expect(spawnedA.children[0].raw).to.have.style('fontFamily', '')
			expect(spawnedA.children[1].type).to.equal('text')
			expect(spawnedA.text).to.equal('original text')

			expect(spawnedB.type).to.equal('span')
			expect(spawnedB.children.length).to.equal(3)
			expect(spawnedB.children[0].type).to.equal('div')
			expect(spawnedB.children[0].raw).to.have.style('opacity', '')
			expect(spawnedB.children[0].raw).to.have.style('fontFamily', 'pink')
			expect(spawnedB.children[1].type).to.equal('text')
			expect(spawnedB.text).to.equal('replaced text')
			expect(spawnedB.children[2].type).to.equal('section')
			expect(spawnedB.raw).to.have.style('fontSize', '77px')

			expect(spawnedC.type).to.equal('span')
			expect(spawnedC.children.length).to.equal(3)
			expect(spawnedC.children[0].type).to.equal('div')
			expect(spawnedC.children[0].raw).to.have.style('opacity', '')
			expect(spawnedC.children[0].raw).to.have.style('fontFamily', 'pink')
			expect(spawnedC.children[1].type).to.equal('text')
			expect(spawnedC.text).to.equal('replaced text')
			expect(spawnedC.children[2].type).to.equal('section')
			expect(spawnedC.raw).to.have.style('fontSize', '77px')


		test "Template.extend/spawn() will consider the passed object as the options object if it doesn't contain template-related props", ()->
			template = DOM.template(
				['div'
					defaults: text: 'default'
					computers: text: (text)-> @text = text
					
					['span', ref:'theSpan']
				]
			)

			expect(template.options.style).to.equal undefined
			expect(template.options.label).to.equal undefined
			expect(template.extend(options:label:'abc123').options.label).to.equal 'abc123'
			expect(template.extend(label:'def456').options.label).to.equal 'def456'
			expect(template.extend(style:'def456').options.style).to.equal 'def456'
			expect(template.extend(style:'def456', type:'section').options.style).to.equal undefined
			expect(template.extend(children:theSpan:style:'ghi789').child.theSpan.options.style).to.equal 'ghi789'
			expect(template.extend(children:[defaults:'ghi789']).child.theSpan.options.defaults).to.equal 'ghi789'
			expect(template.spawn(children:theSpan:className:'GHI789').child.theSpan.raw.className).to.equal 'GHI789'
			expect(template.spawn().text).to.equal 'default'
			expect(template.spawn(defaults:text:'diff').text).to.equal 'diff'


		test "Templates can have other templates as their children", ()->
			headerTemplate = Dom.template ['header', {style:'height':'200px'},
				['span', {style:'textAlign':'center'}, 'This is bolded text']
				' while this is not'
			]
			headerTemplateClone = Dom.template(headerTemplate)
			sectionTemplate = Dom.template ['section', null, headerTemplate]
			section = sectionTemplate.spawn().appendTo(sandbox)

			expect(headerTemplateClone).to.equal(headerTemplate)
			expect(sectionTemplate.children.length).to.equal(1)
			expect(sectionTemplate.children[0]).to.equal(headerTemplate)
			expect(sectionTemplate.children[0].children.length).to.equal(2)
			expect(section.children.length).to.equal(1)
			expect(section.children[0].type).to.equal('header')
			expect(section.children[0].children.length).to.equal(2)
			expect(section.text).to.equal('This is bolded text while this is not')
			expect(section.children[0].children[0].style('textAlign')).to.equal('center')


		test "A global options object can be passed as the 2nd arg to template.extend/spawn() which will be applied to all templates, spawns, & their children", ()->
			obj = myHeight:'150px'
			obj.obj = obj
			dynamicHeightStyle = 'height': (related)-> expect(related).to.equal(obj); related.myHeight
			
			headerTemplate = Dom.template ['header', {style:'width':'23px'},
				['div', {style:'width':'23px'}, 'This is bolded text']
				' while this is not'
			]
			sectionTemplate = Dom.template ['section', {style:'width':'23px'}, headerTemplate]
			section = sectionTemplate.spawn({options:{related:window}}, {related:obj, style:dynamicHeightStyle}).appendTo(sandbox)

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
			
			templateCopy2 = templateMain.extend children:
				childA:
					children: newChild: ['div']
				childA_2:
					['a', {id:'CHILDa_2', href:'http://google.com'},
						['text', {ref:'childA_2_1', text:'New Text'}]
					]
				childC:
					['div', ref:'childD']

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

			rendered = templateCopy.spawn().appendTo(sandbox)
			expect(Object.keys(rendered.child).length).to.equal(8)
			expect(rendered.child.childB_2).to.equal rendered.children[1].children[1]
			expect(rendered.child.childA.raw).to.have.style 'display', 'inline-block'
			expect(rendered.child.CHILDa_2.prop('href')).to.contain 'http://google.com'
			expect(rendered.child.childB_1.prop('value')).to.equal('theValue')
			expect(rendered.child.childD.attr('data-ref')).to.equal('childD')


		test "Templates can be passed as replacement/new children in {ref:newChild} extension maps", ()->
			childA = Dom.template(
				['div', {id:'childA'},
					['span', {ref:'childA_1'}]
					['div', {ref:'childA_2', id:'childA_2'}]
				]
			)
			childB = Dom.template(
				['div', ref:'childB', 
					['span', {ref:'childB_1'}]
					['text', {id:'childB_2', text:'The Text'}]
				]
			)
			childC = Dom.template(
				['div', {id:'childC'}, 
					['span', {ref:'childC_1'}]
					['text', {id:'childC_2', text:'The Text'}]
				]
			)
			templateMain = 
				Dom.template ['div', {id:'divA'},
					childA,
					childB
				]
			templateCopy = templateMain.extend ['section', null, 
				childA: type: 'form'
				childB: childB.extend(ref:'ChildB')
				childC: childC.extend(ref:'ChildC')
			], {value:'theValue'}

			expect(Object.keys(templateMain.child).length).to.equal(7)
			expect(Object.keys(templateCopy.child).length).to.equal(10)
			expect(templateMain.children.length).to.equal(2)
			expect(templateCopy.children.length).to.equal(3)
			expect(templateCopy.child.divA).to.equal templateCopy
			expect(templateCopy.child.childA).to.equal templateCopy.children[0]
			expect(templateCopy.child.childA.type).to.equal 'form'
			expect(templateCopy.child.childA.children.length).to.equal(2)
			expect(templateCopy.child.ChildB).to.equal templateCopy.children[1]
			expect(templateCopy.child.childB_1).to.equal templateCopy.children[1].children[0]
			expect(templateCopy.child.childB_2).to.equal templateCopy.children[1].children[1]
			expect(templateMain.child.childC).to.equal undefined
			expect(templateCopy.child.childC).to.equal undefined
			expect(templateCopy.child.ChildC).to.equal templateCopy.children[2]
			expect(Object.keys(templateMain.spawn().child).length).to.equal(7)
			expect(Object.keys(templateCopy.spawn().child).length).to.equal(10)


		test "ref-children maps shouldn't be modified by the template extender", ()->
			config = children: childA_1: {type:'div', options: {style: {display:'none'}}}
			templateA = Dom.template(
				['div', {ref:'divA'}
					['div', {ref:'childA'}
						['span', {ref:'childA_1'}]
					]
				]
			)
			templateA.child.childA_1
			templateB = templateA.extend()
			templateC = templateA.extend(config)
			templateD = templateA.extend(config)
			spawnA = templateA.spawn().appendTo(sandbox)
			spawnB = templateB.spawn().appendTo(sandbox)
			spawnC = templateC.spawn().appendTo(sandbox)
			spawnD = templateD.spawn().appendTo(sandbox)
			expect(spawnA.child.childA_1.type).to.equal 'span'
			expect(spawnA.child.childA_1.style 'display').to.equal 'inline'
			expect(spawnB.child.childA_1.type).to.equal 'span'
			expect(spawnB.child.childA_1.style 'display').to.equal 'inline'
			expect(spawnC.child.childA_1.type).to.equal 'div'
			expect(spawnC.child.childA_1.style 'display').to.equal 'none'
			expect(spawnD.child.childA_1.type).to.equal 'div'
			expect(spawnD.child.childA_1.style 'display').to.equal 'none'

		test "Null values in ref-children map will remove the child from the template", ()->
			templateMain = 
				Dom.template ['div', {id:'divA'},
					['div', {id:'childA'},
						['span', {ref:'childA_1'}]
						['div', {ref:'childA_2', id:'childA_2'}]
					]
					['div', {ref:'childB'}, 
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
				childB_1: null
				childC: null
			]

			expect(typeof templateCopy.child.childA_2_1).not.to.equal 'undefined'
			expect(Object.keys(templateMain.child).length).to.equal(10)
			expect(Object.keys(templateCopy.child).length).to.equal(6)
			expect(templateCopy.children.length).to.equal(2)
			expect(templateCopy.child.divA).to.equal templateCopy
			expect(templateCopy.child.childA).to.equal templateCopy.children[0]
			expect(templateCopy.child.childA.type).to.equal 'form'
			expect(templateCopy.child.childA.children.length).to.equal(1)
			expect(templateMain.child.childA_1).to.equal templateMain.child.childA_1
			expect(templateCopy.child.childA_1).to.equal undefined
			expect(templateCopy.child.childA_2).to.equal undefined
			expect(templateCopy.child.CHILDa_2).to.equal templateCopy.children[0].children[0]
			expect(templateCopy.child.childA_2_1).to.equal templateCopy.children[0].children[0].children[0]
			expect(templateCopy.child.childA_2_1.options.text).to.equal 'New Text'
			expect(templateCopy.child.childB_1).to.equal undefined
			expect(templateCopy.child.childB_2).to.equal templateCopy.children[1].children[0]
			expect(templateMain.child.childB_1).to.equal templateMain.children[1].children[0]
			expect(templateMain.child.childB_2).to.equal templateMain.children[1].children[1]
			expect(templateMain.child.childC).to.equal templateMain.children[2]
			expect(templateCopy.child.childC).to.equal undefined


		test "Null values in options object will delete keys during template extension", ()->
			templateA = Dom.template(
				['div'
					ref: 'theDiv'
					computers:
						valueA: ()-> 1
						valueB: ()-> 2
					
					style:
						position: 'relative'
						width: 100
						height: 100
						$active:
							width: 200
							height: 200
				]
			)
			templateB = templateA.extend(
				options:
					ref: null
					computers:
						valueA: null
						valueB: ()-> 3

					style:
						height: null
						opacity: 1
						$active:
							width: null
			)

			spawnA = templateA.spawn()
			spawnB = templateB.spawn()

			expect(spawnA.ref).to.equal 'theDiv'
			expect(spawnB.ref).to.equal undefined
			expect(typeof spawnA.options.computers.valueA).to.equal 'function'
			expect(typeof spawnB.options.computers.valueA).to.equal 'undefined'
			expect(typeof spawnA.options.computers.valueB).to.equal 'function'
			expect(typeof spawnB.options.computers.valueB).to.equal 'function'
			expect(spawnA.options.computers.valueB()).to.equal 2
			expect(spawnB.options.computers.valueB()).to.equal 3
			expect(spawnA.options.style.position).to.equal 'relative'
			expect(spawnB.options.style.position).to.equal 'relative'
			expect(spawnA.options.style.width).to.equal 100
			expect(spawnB.options.style.width).to.equal 100
			expect(spawnA.options.style.height).to.equal 100
			expect(spawnB.options.style.height).to.equal undefined
			expect(spawnA.options.style.opacity).to.equal undefined
			expect(spawnB.options.style.opacity).to.equal 1
			expect(spawnA.options.style.$active.width).to.equal 200
			expect(spawnB.options.style.$active.width).to.equal undefined
			expect(spawnA.options.style.$active.height).to.equal 200
			expect(spawnB.options.style.$active.height).to.equal 200


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


		test "Templates will be spawned when appended to DOM elements", ()->
			template = Dom.template(['span', {ref:'theSpan'}, 'someText'])
			div = Dom.div(null, 'label: ')

			expect(div.children.length).to.equal 1
			expect(div.text).to.equal 'label: '
			div.append template
			expect(div.children.length).to.equal 2
			expect(div.text).to.equal 'label: someText'
			div.prepend template
			expect(div.children.length).to.equal 3
			expect(div.text).to.equal 'someTextlabel: someText'


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


			test "Defaults should only be applied once", ()->
				count = parent:0, child:0, childChild:0
				template = Dom.template(
					['div'
						ref: 'parent'
						computers:
							'first': (data)-> count.parent++
						defaults:
							'first': 'first value'
						
						['div'
							ref: 'child'
							computers:
								'first': (data)-> count.parent++
								'second': (data)-> count.child++
							defaults:
								'second': 'second value'
							
							['div'
								ref: 'child'
								computers:
									'fourth': (data)-> count.childChild++
								defaults:
									'fourth': 'fourth value'
							]
						]
					]
				)
				
				template.spawn(data:'third':'third value')
				expect(count).to.eql parent:1, child:1, childChild:1
				
				template.spawn()
				expect(count).to.eql parent:2, child:2, childChild:2


			test "Data/defaults should be applied even when parent doesn't have computers", ()->
				count = 0
				template = Dom.template(
					['div', null,
						['section', null,
							['div'
								computers:
									'first': (data)-> count++
								defaults:
									'first': 'first value'
							]
						]
					]
				)
				
				template.spawn(data:'first':'second value')
				expect(count).to.equal(1)
				
				template.spawn()
				expect(count).to.equal(2)


			test "Data can be re-applied via .applyData(data)", ()->
				results = {}; count = {a:0, b:0, c:0, d:0, e:0, f:0}
				template = Dom.template(
					['div'
						computers:
							'a': (data)-> results.a = data;	count.a++
							'b': (data)-> results.b = data;	count.b++
							'c': (data)-> results.c = data;	count.c++
							'd': (data)-> results.d = data;	count.d++
							'e': (data)-> results.e = data;	count.e++
							'f': (data)-> results.f = data;	count.f++
						defaults:
							'a': 1
							'c': 3
							'f': 6
					]
				)

				
				instance = template.spawn(data: {b:2, d:4, e:5, f:6})
				expect(results).to.deep.equal {a:1, b:2, c:3, d:4, e:5, f:6}
				expect(count).to.deep.equal {a:1, b:1, c:1, d:1, e:1, f:1}

				instance.applyData(a:11, b:22, d:44, e:55)
				expect(results).to.deep.equal {a:11, b:22, c:3, d:44, e:55, f:6}
				expect(count).to.deep.equal {a:2, b:2, c:2, d:2, e:2, f:2}


			test "The '_init' computer will be run by default on template spawn regardless of data", ()->
				count = {}
				template = Dom.template(
					['div'
						ref: 'divA'
						computers: _init: ()-> count[@ref]?=0; count[@ref]++
						
						['div'
							ref: 'divB'
							data: first: '1'
							computers: _init: ()-> count[@ref]?=0; count[@ref]++
						]
						
						['div'
							ref: 'divC'
							['div'
								ref: 'divD'
								
								['div'
									ref: 'divE'
									computers: _init: ()-> count[@ref]?=0; count[@ref]++
								]
							]
						]
					]
				)
				
				expect(count).to.eql {}
				template.spawn()
				expect(count).to.eql divA:1, divB:1, divE:1
				
				template.spawn()
				expect(count).to.eql divA:2, divB:2, divE:2
				
				template.child.divB.spawn(data:second:'2')
				expect(count).to.eql divA:2, divB:3, divE:2
				
				template.child.divC.spawn()
				expect(count).to.eql divA:2, divB:3, divE:3
				
				template.child.divC.spawn()
				expect(count).to.eql divA:2, divB:3, divE:4


			test "The '_init' computer will be passed all of the data the template spawn receives", ()->
				result = divA:{}, divB:{}
				template = Dom.template(
					['div'
						ref: 'divA'
						computers:
							href: (href)-> result[@ref].href = href
							name: (name)-> result[@ref].name = name
							_init: ()-> result[@ref]._init = arguments[0]
						
						['div'
							ref: 'divProxy'
							
							['div'
								ref: 'divB'
								defaults: first: '1'
								computers:
									href: (href)-> result[@ref].href = href
									name: (name)-> result[@ref].name = name
									_init: ()-> result[@ref]._init = arguments[0]
							]						
						]
					]
				)
				expected = 
					href: 'abc'
					name: '123'
					_init: {href:'abc', name:'123', value:'def', size:'456'}
				
				
				expect(result).to.eql divA:{}, divB:{}
				
				template.spawn(data:{href:'abc', name:'123', value:'def', size:'456'})
				expect(result).to.eql {divA:expected, divB:expected}
				
				delete result.divA
				divB: null
				template.child.divB.spawn(data:{href:'abc', name:'123', value:'def', size:'456'})
				expect(result).to.eql {divB:expected}


			test "Data can be specified via options object", ()->
				receivedData = null
				template = Dom.template(
					['div'
						computers: 'someLabel': (data)-> receivedData = data or 'nothing'
					]
				)
				templateCopy = template.extend(options:data:{'someLabel':'works'})

				template.spawn()
				expect(receivedData).to.equal(null)
				templateCopy.spawn()
				expect(receivedData).to.equal('works')
				
				template.spawn(options:data:{'someLabel':'also works'})
				expect(receivedData).to.equal('also works')


			test "Data specified in children's options object will be merged with the parent's data", ()->
				receivedData = abc:null, def:null
				template = Dom.template(
					['div', null

						['span'
							data: abc: 123
							computers:
								'abc': (data)-> receivedData.abc = data or 'nothing'
								'def': (data)-> receivedData.def = data or 'nothing'
						]
					]
				)
				templateCopy = template.extend(options:data:{def:456})

				template.spawn()
				expect(receivedData).to.eql(abc:123, def:null)
				receivedData = abc:null, def:null
				
				templateCopy.spawn()
				expect(receivedData).to.eql(abc:123, def:456)
				receivedData = abc:null, def:null
				
				template.spawn(options:data:{def:789})
				expect(receivedData).to.eql(abc:123, def:789)
				receivedData = abc:null, def:null
				
				template.spawn(options:data:{abc:789})
				expect(receivedData).to.eql(abc:789, def:null)


			test "Data won't be passed to children if options.passDataToChildren is false", ()->
				receivedData = parent:null, child:null
				template1 = DOM.template(
					['div'
						computers: abc: (data)-> receivedData.parent = data

						['span'
							computers: abc: (data)-> receivedData.child = data
						]
					]
				)
				template2 = template1.extend(passDataToChildren:false)
				
				expect(receivedData).to.eql parent:null, child:null
				
				el1 = template1.spawn(data:{abc:123})
				expect(receivedData).to.eql parent:123, child:123

				receivedData = parent:null, child:null
				el2 = template2.spawn(data:{abc:123})
				expect(receivedData).to.eql parent:123, child:null
				
				receivedData = parent:null, child:null
				el1.applyData({abc:456})
				expect(receivedData).to.eql parent:456, child:456
				
				receivedData = parent:null, child:null
				el2.applyData({abc:456})
				expect(receivedData).to.eql parent:456, child:null
				
				el2.lastChild.applyData({abc:789})
				expect(receivedData).to.eql parent:456, child:789


			test "Data should be invoked for parents after invoked children", ()->
				history = []
				computers = 
					_init: ()-> history.push(@ref)
					abc: ()-> history.push(@ref)
				
				template = DOM.template(
					['div'
						{computers, id:'parent'}
						['div'
							{computers, id:'child1'}
							['div'
								{computers, id:'child2'}
							]
						]
						['div'
							{computers, id:'child3'}
						]
					]
				)
				expect(history).to.eql []
				el = template.spawn()
				expect(history).to.eql ['child2', 'child1', 'child3', 'parent']

				history.length = 0
				el.applyData(abc:123)
				expect(history).to.eql ['child2', 'child1', 'child3', 'parent']


			test "Computers will be invoked only one time per element if options.invokeComputersOnce is on", ()->
				history = []
				computers =  abc: ()-> history.push(@ref)
				
				template = DOM.template(
					['div'
						{computers, id:'parent', invokeComputersOnce:true}
						['div'
							{computers, id:'child1'}
							['div'
								{computers, id:'child2', invokeComputersOnce:true}
							]
						]
						['div'
							{computers, id:'child3'}
						]
					]
				)
				expect(history).to.eql []
				el = template.spawn(data:abc:123)
				expect(history).to.eql ['child2', 'child1', 'child3', 'parent']

				history.length = 0
				el.applyData(abc:123)
				expect(history).to.eql ['child1', 'child3']

				history.length = 0
				el.applyData(abc:456)
				expect(history).to.eql ['child1', 'child3']



	suite "Misc", ()->
		test "QuickDom.isTemplate", ()->
			expect(Dom.isTemplate Dom.template(['div'])).to.be.true
			expect(Dom.isTemplate Dom.div()).to.be.false
			expect(Dom.isTemplate Dom.div()[0]).to.be.false
			expect(Dom.isTemplate {}).to.be.false
			expect(Dom.isTemplate 'string').to.be.false
			expect(Dom.isTemplate 5).to.be.false
			expect(Dom.isTemplate false).to.be.false
			expect(Dom.isTemplate true).to.be.false
		

		test "QuickDom.isQuickEl", ()->
			expect(Dom.isQuickEl Dom.template(['div'])).to.be.false
			expect(Dom.isQuickEl Dom.div()).to.be.true
			expect(Dom.isQuickEl Dom.text()).to.be.true
			expect(Dom.isQuickEl Dom.div()[0]).to.be.false
			expect(Dom.isQuickEl {}).to.be.false
			expect(Dom.isQuickEl 'string').to.be.false
			expect(Dom.isQuickEl 5).to.be.false
			expect(Dom.isQuickEl false).to.be.false
			expect(Dom.isQuickEl true).to.be.false
		

		test "QuickDom.isEl", ()->
			expect(Dom.isEl Dom.template(['div'])).to.be.false
			expect(Dom.isEl Dom.div()).to.be.false
			expect(Dom.isEl Dom.text()).to.be.false
			expect(Dom.isEl Dom.div()[0]).to.be.true
			expect(Dom.isEl Dom.text()[0]).to.be.false
			expect(Dom.isEl {}).to.be.false
			expect(Dom.isEl 'string').to.be.false
			expect(Dom.isEl 5).to.be.false
			expect(Dom.isEl false).to.be.false
			expect(Dom.isEl true).to.be.false
		

		test "Stringification", ()->
			section = Dom(
				['section',{
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
			).appendTo(sandbox)
			window.stringified = JSON.stringify(section, null, 2)
			sectionCopy = Dom(JSON.parse(stringified)).appendTo(sandbox)

			expect(sectionCopy.type).to.equal(section.type)
			expect(sectionCopy.ref).to.equal(section.ref)
			expect(sectionCopy.el.id).to.equal(section.el.id)
			expect(sectionCopy.el.className).to.equal(section.el.className)
			expect(sectionCopy.style 'position').to.equal(section.style 'position')
			expect(sectionCopy.style 'opacity').to.equal(section.style 'opacity')
			expect(sectionCopy.style 'fontSize').not.to.equal(section.style 'fontSize')
			
			section.style 'fontSize', null
			section.state 'happy', on
			sectionCopy.state 'happy', on
			expect(sectionCopy.style 'fontSize').to.equal(section.style 'fontSize')
			
			section.state 'relaxed', on
			sectionCopy.state 'relaxed', on
			expect(sectionCopy.style 'fontSize').to.equal(section.style 'fontSize')
			
			expect(sectionCopy.children.length).to.equal(section.children.length)
			expect(Object.keys(sectionCopy.child).length).to.equal(Object.keys(section.child).length)
			expect(sectionCopy.text).to.equal(section.text)
			expect(sectionCopy.html).to.equal(section.html)
			expect(sectionCopy.children[0].style 'position').to.equal(section.children[0].style 'position')
			expect(sectionCopy.children[2].style 'position').to.equal(section.children[2].style 'position')
			expect(sectionCopy.children[2].ref).to.equal(section.children[2].ref)


		test "Chaining", ()->
			div = Dom.div()
			chainResult = div
				.state('abc', on)
				.resetState()
				.style()
				.css('width', 12)
				.attr('test', 123)
				.prop('anotherTest', 123)
				.updateStateStyles({height:50})
				.updateStateTexts({$base:'abc'})
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
				.on('abc', ()->)
				.emit('abc')
				.off('abc')
				.off()

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

			div.css(null, '129')
			expect(div.el.style.null).to.equal(undefined)

			expect(div.state()).to.eql []
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

			expect(div.updateStateStyles {$base:{width:1}}).to.equal div
			expect(div.updateStateStyles null).to.equal div
			expect(div.updateStateTexts {$base:'abc'}).to.equal div
			expect(div.updateStateTexts null).to.equal div

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




