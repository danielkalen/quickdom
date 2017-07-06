(function (require, global) {
require = (function (cache, modules, cx) {
return function (r) {
if (!modules[r]) throw new Error(r + ' is not a module');
return cache[r] ? cache[r].exports : ((cache[r] = {
exports: {}
}, cache[r].exports = modules[r].call(cx, require, cache[r], cache[r].exports)));
};
})({}, {
1: function (require, module, exports) {
var origDescriptors;

origDescriptors = {
  'innerWidth': Object.getOwnPropertyDescriptor(window, 'innerWidth'),
  'innerHeight': Object.getOwnPropertyDescriptor(window, 'innerHeight')
};

module.exports = new function() {
  var current, getReal, overwrite, overwritten;
  overwritten = false;
  current = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  getReal = function(dimension) {
    dimension = 'inner' + dimension.replace(/\b./, function(letter) {
      return letter.toUpperCase();
    });
    return origDescriptors[dimension].get.call(window);
  };
  overwrite = function() {
    if (!overwritten) {
      overwritten = true;
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        get: function() {
          return current.width;
        },
        set: function(newValue) {
          return current.width = newValue;
        }
      });
      return Object.defineProperty(window, 'innerHeight', {
        configurable: true,
        get: function() {
          return current.height;
        },
        set: function(newValue) {
          return current.height = newValue;
        }
      });
    }
  };
  this.simulate = function(width, height) {
    var event;
    if (width) {
      current.width = width;
    }
    if (height) {
      current.height = height;
    }
    overwrite();
    event = document.createEvent('Event');
    event.initEvent('resize', true, false);
    return window.dispatchEvent(event);
  };
  this.restore = function() {
    Object.defineProperty(window, 'innerWidth', origDescriptors.innerWidth);
    return Object.defineProperty(window, 'innerHeight', origDescriptors.innerHeight);
  };
  return this;
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltdWxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW11bGF0ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxlQUFBLEdBQ0M7RUFBQSxZQUFBLEVBQWMsTUFBTSxDQUFDLHdCQUFQLENBQWdDLE1BQWhDLEVBQXdDLFlBQXhDLENBQWQ7RUFDQSxhQUFBLEVBQWUsTUFBTSxDQUFDLHdCQUFQLENBQWdDLE1BQWhDLEVBQXdDLGFBQXhDLENBRGY7OztBQUdELE1BQU0sQ0FBQyxPQUFQLEdBQWlCLElBQUksU0FBQTtBQUNwQixNQUFBO0VBQUEsV0FBQSxHQUFjO0VBQ2QsT0FBQSxHQUFVO0lBQUEsS0FBQSxFQUFNLE1BQU0sQ0FBQyxVQUFiO0lBQXlCLE1BQUEsRUFBTyxNQUFNLENBQUMsV0FBdkM7O0VBRVYsT0FBQSxHQUFVLFNBQUMsU0FBRDtJQUNULFNBQUEsR0FBWSxPQUFBLEdBQVEsU0FBUyxDQUFDLE9BQVYsQ0FBa0IsS0FBbEIsRUFBeUIsU0FBQyxNQUFEO2FBQVcsTUFBTSxDQUFDLFdBQVAsQ0FBQTtJQUFYLENBQXpCO1dBQ3BCLGVBQWdCLENBQUEsU0FBQSxDQUFVLENBQUMsR0FBRyxDQUFDLElBQS9CLENBQW9DLE1BQXBDO0VBRlM7RUFJVixTQUFBLEdBQVksU0FBQTtJQUFLLElBQUEsQ0FBTyxXQUFQO01BQ2hCLFdBQUEsR0FBYztNQUVkLE1BQU0sQ0FBQyxjQUFQLENBQXNCLE1BQXRCLEVBQThCLFlBQTlCLEVBQ0M7UUFBQSxZQUFBLEVBQWMsSUFBZDtRQUNBLEdBQUEsRUFBSyxTQUFBO2lCQUFLLE9BQU8sQ0FBQztRQUFiLENBREw7UUFFQSxHQUFBLEVBQUssU0FBQyxRQUFEO2lCQUFhLE9BQU8sQ0FBQyxLQUFSLEdBQWdCO1FBQTdCLENBRkw7T0FERDthQUtBLE1BQU0sQ0FBQyxjQUFQLENBQXNCLE1BQXRCLEVBQThCLGFBQTlCLEVBQ0M7UUFBQSxZQUFBLEVBQWMsSUFBZDtRQUNBLEdBQUEsRUFBSyxTQUFBO2lCQUFLLE9BQU8sQ0FBQztRQUFiLENBREw7UUFFQSxHQUFBLEVBQUssU0FBQyxRQUFEO2lCQUFhLE9BQU8sQ0FBQyxNQUFSLEdBQWlCO1FBQTlCLENBRkw7T0FERCxFQVJnQjs7RUFBTDtFQWNaLElBQUMsQ0FBQSxRQUFELEdBQVksU0FBQyxLQUFELEVBQVEsTUFBUjtBQUNYLFFBQUE7SUFBQSxJQUF5QixLQUF6QjtNQUFBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLE1BQWhCOztJQUNBLElBQTJCLE1BQTNCO01BQUEsT0FBTyxDQUFDLE1BQVIsR0FBaUIsT0FBakI7O0lBRUEsU0FBQSxDQUFBO0lBQ0EsS0FBQSxHQUFRLFFBQVEsQ0FBQyxXQUFULENBQXFCLE9BQXJCO0lBQ1IsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsUUFBaEIsRUFBMEIsSUFBMUIsRUFBZ0MsS0FBaEM7V0FDQSxNQUFNLENBQUMsYUFBUCxDQUFxQixLQUFyQjtFQVBXO0VBVVosSUFBQyxDQUFBLE9BQUQsR0FBVyxTQUFBO0lBQ1YsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsWUFBOUIsRUFBNEMsZUFBZSxDQUFDLFVBQTVEO1dBQ0EsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsYUFBOUIsRUFBNkMsZUFBZSxDQUFDLFdBQTdEO0VBRlU7QUFLWCxTQUFPO0FBckNhIiwic291cmNlc0NvbnRlbnQiOlsib3JpZ0Rlc2NyaXB0b3JzID0gXG5cdCdpbm5lcldpZHRoJzogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3csICdpbm5lcldpZHRoJylcblx0J2lubmVySGVpZ2h0JzogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3csICdpbm5lckhlaWdodCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3ICgpLT5cblx0b3ZlcndyaXR0ZW4gPSBmYWxzZVxuXHRjdXJyZW50ID0gd2lkdGg6d2luZG93LmlubmVyV2lkdGgsIGhlaWdodDp3aW5kb3cuaW5uZXJIZWlnaHRcblx0XG5cdGdldFJlYWwgPSAoZGltZW5zaW9uKS0+XG5cdFx0ZGltZW5zaW9uID0gJ2lubmVyJytkaW1lbnNpb24ucmVwbGFjZSAvXFxiLi8sIChsZXR0ZXIpLT4gbGV0dGVyLnRvVXBwZXJDYXNlKClcblx0XHRvcmlnRGVzY3JpcHRvcnNbZGltZW5zaW9uXS5nZXQuY2FsbCh3aW5kb3cpXG5cblx0b3ZlcndyaXRlID0gKCktPiB1bmxlc3Mgb3ZlcndyaXR0ZW5cblx0XHRvdmVyd3JpdHRlbiA9IHRydWVcblx0XHRcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkgd2luZG93LCAnaW5uZXJXaWR0aCcsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdGdldDogKCktPiBjdXJyZW50LndpZHRoXG5cdFx0XHRzZXQ6IChuZXdWYWx1ZSktPiBjdXJyZW50LndpZHRoID0gbmV3VmFsdWVcblx0XHRcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkgd2luZG93LCAnaW5uZXJIZWlnaHQnLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHRnZXQ6ICgpLT4gY3VycmVudC5oZWlnaHRcblx0XHRcdHNldDogKG5ld1ZhbHVlKS0+IGN1cnJlbnQuaGVpZ2h0ID0gbmV3VmFsdWVcblx0XG5cblx0QHNpbXVsYXRlID0gKHdpZHRoLCBoZWlnaHQpLT5cblx0XHRjdXJyZW50LndpZHRoID0gd2lkdGggaWYgd2lkdGhcblx0XHRjdXJyZW50LmhlaWdodCA9IGhlaWdodCBpZiBoZWlnaHRcblx0XHRcblx0XHRvdmVyd3JpdGUoKVxuXHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jylcblx0XHRldmVudC5pbml0RXZlbnQoJ3Jlc2l6ZScsIHRydWUsIGZhbHNlKVxuXHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuXG5cblx0QHJlc3RvcmUgPSAoKS0+XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5IHdpbmRvdywgJ2lubmVyV2lkdGgnLCBvcmlnRGVzY3JpcHRvcnMuaW5uZXJXaWR0aFxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB3aW5kb3csICdpbm5lckhlaWdodCcsIG9yaWdEZXNjcmlwdG9ycy5pbm5lckhlaWdodFxuXG5cblx0cmV0dXJuIEAiXX0=
;
return module.exports;
},
0: function (require, module, exports) {
var checkChildStructure, creator, elementSuffix, expect, i, j, len, len1, nonElementSuffix, ref, ref1, ref2, ref3, ref4, restartSandbox, sandbox,
  slice = [].slice;

this.dimensions = require(1);

this.Dom = window.quickdom;

mocha.setup('tdd');

mocha.slow(400);

mocha.timeout(12000);

if (!window.location.hostname) {
  mocha.bail();
}

expect = chai.expect;

sandbox = null;

restartSandbox = function() {
  if (sandbox) {
    sandbox.parentElement.removeChild(sandbox);
  }
  sandbox = document.createElement('div');
  sandbox.id = 'sandbox';
  sandbox.setAttribute('style', 'border:1px solid; padding:20px; box-sizing:border-box');
  return document.body.appendChild(sandbox);
};

checkChildStructure = function(main) {
  return function() {
    var child, children, i, index, len;
    children = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    expect(main.children.length).to.equal(children.length);
    for (index = i = 0, len = children.length; i < len; index = ++i) {
      child = children[index];
      expect(main.children[index]).to.equal(child);
      expect(child.el.parentNode).to.equal(main.el);
      expect(child.parent).to.equal(main);
    }
  };
};

suite("QuickDom", function() {
  setup(restartSandbox);
  test("Version Property", function() {
    var packageVersion;
    packageVersion = "1.0.44";
    return expect(Dom.version).to.equal(packageVersion);
  });
  suite("Element Creation", function() {
    test("Basic Creation", function() {
      var div;
      div = Dom('div');
      expect(typeof div).to.equal('object');
      expect(typeof div.el).to.equal('object');
      expect(div.el.constructor.name).to.equal('HTMLDivElement');
      expect(div.parent).to.be.undefined;
      return expect(div.children.length).to.equal(0);
    });
    test("Shortcuts", function() {
      var i, len, type, types;
      expect(Dom.a().el.constructor).to.equal(Dom('a').el.constructor);
      expect(Dom.link().el.constructor).to.equal(Dom('a').el.constructor);
      expect(Dom.anchor().el.constructor).to.equal(Dom('a').el.constructor);
      expect(Dom.div().el.constructor).to.equal(Dom('div').el.constructor);
      expect(Dom.text().el.constructor).to.equal(Dom('text').el.constructor);
      expect(Dom.span().el.constructor).to.equal(Dom('span').el.constructor);
      expect(Dom.h4().el.constructor).to.equal(Dom('h4').el.constructor);
      expect(Dom.header().el.constructor).to.equal(Dom('header').el.constructor);
      expect(Dom.footer().el.constructor).to.equal(Dom('footer').el.constructor);
      expect(Dom.section().el.constructor).to.equal(Dom('section').el.constructor);
      expect(Dom.button().el.constructor).to.equal(Dom('button').el.constructor);
      expect(Dom.input().el.constructor).to.equal(Dom('input').el.constructor);
      types = ['a', 'div', 'text', 'span', 'h4', 'header', 'footer', 'section', 'button', 'input'];
      for (i = 0, len = types.length; i < len; i++) {
        type = types[i];
        expect(Dom[type]().el.constructor.name).not.to.contain('Unknown');
      }
    });
    test("Basic options", function() {
      var A, B, C, D, E, F, G, H, I, J, obj;
      A = Dom.div({
        "class": 'abc-123',
        props: {
          'abc': 123,
          'def': 456
        }
      });
      B = Dom.div({
        id: 'B',
        className: 'abc-123',
        attrs: {
          'data-abc': 123,
          'data-def': 456
        }
      });
      C = Dom.input({
        type: 'text',
        name: 'abc',
        value: 'hello'
      });
      D = Dom.input({
        type: 'checkbox',
        checked: true
      });
      E = Dom.option({
        name: 'abc',
        value: 'hello',
        selected: true
      });
      F = Dom.link({
        href: 'https://google.com/'
      });
      G = Dom.anchor({
        url: 'https://google.com/'
      });
      H = Dom.text('Some text');
      I = Dom.img({
        src: 'https://google.com/'
      });
      J = Dom.div({
        relatedInstance: obj = {
          a: 1
        }
      });
      expect(A.el.className).to.equal('abc-123');
      expect(A.el.abc).to.equal(123);
      expect(A.el.def).to.equal(456);
      expect(B.el.className).to.equal('abc-123');
      expect(B.el.id).to.equal('B');
      expect(B.el.getAttribute('data-abc')).to.equal('123');
      expect(B.el.getAttribute('data-def')).to.equal('456');
      if (B.el.dataset) {
        expect(B.el.dataset.abc).to.equal('123');
      }
      expect(C.el.type).to.equal('text');
      expect(C.el.name).to.equal('abc');
      expect(C.el.value).to.equal('hello');
      expect(D.el.checked).to.equal(true);
      expect(E.el.name).to.equal('abc');
      expect(E.el.selected).to.equal(true);
      expect(F.el.href).to.equal('https://google.com/');
      expect(G.el.href).to.equal('https://google.com/');
      expect(H.el.nodeType).to.equal(3);
      expect(H.el.textContent).to.equal('Some text');
      expect(I.el.src).to.equal('https://google.com/');
      expect(J.related).to.equal(obj);
      return expect(J.options.relatedInstance).to.equal(obj);
    });
    test("Creation w/ children", function() {
      var A, B;
      A = Dom.div(null, 'Some text');
      B = Dom.div(null, Dom.span(), 'Some text', Dom.span());
      expect(A.el.childNodes.length).to.equal(1);
      expect(A.el.children.length).to.equal(0);
      expect(A.el.childNodes[0].nodeType).to.equal(3);
      expect(A.el.childNodes[0].textContent).to.equal('Some text');
      expect(A.children.length).to.equal(1);
      expect(B.el.childNodes.length).to.equal(3);
      expect(B.el.children.length).to.equal(2);
      expect(B.el.childNodes[0].nodeType).to.equal(1);
      expect(B.el.childNodes[0].nodeName.toLowerCase()).to.equal('span');
      expect(B.el.childNodes[1].nodeType).to.equal(3);
      expect(B.el.childNodes[1].textContent).to.equal('Some text');
      expect(B.el.childNodes[2].nodeType).to.equal(1);
      expect(B.el.childNodes[2].nodeName.toLowerCase()).to.equal('span');
      return expect(B.children.length).to.equal(3);
    });
    test("Array syntax", function() {
      var section;
      section = Dom([
        'section', {
          style: {
            display: 'inline'
          }
        }, ['div', null, 'childA'], ['span', null, ['strong', null, 'childB']], ['div', null, 'childC', ['span', null, 'childC_1'], ['span', null, 'childC_2']]
      ]);
      expect(section).not.to.equal(void 0);
      expect(section.raw.style.display).to.equal('inline');
      expect(section.children.length).to.equal(3);
      expect(section.children[0].children.length).to.equal(1);
      expect(section.children[1].children.length).to.equal(1);
      expect(section.children[2].children.length).to.equal(3);
      expect(section.children[2].children[1].children.length).to.equal(1);
      expect(section.children[2].children[2].children.length).to.equal(1);
      expect(section.children[0].text).to.equal('childA');
      expect(section.children[1].text).to.equal('childB');
      expect(section.children[2].text).to.equal('childCchildC_1childC_2');
      expect(section.children[2].children[1].text).to.equal('childC_1');
      return expect(section.children[2].children[2].text).to.equal('childC_2');
    });
    test("Existing Element", function() {
      var A, B, C, divRaw;
      divRaw = document.createElement('div');
      A = Dom(divRaw);
      B = Dom(divRaw);
      C = Dom(A);
      expect(A.el).to.equal(divRaw);
      expect(B.el).to.equal(divRaw);
      expect(C.el).to.equal(divRaw);
      expect(A).to.equal(B);
      expect(B).to.equal(C);
      return expect(C).to.equal(divRaw._quickElement);
    });
    test("Existing Element w/ Options", function() {
      var div, divRaw;
      divRaw = document.createElement('div');
      divRaw.id = 'A';
      div = Dom(divRaw, {
        id: 'B',
        "class": 'abc-123'
      });
      expect(divRaw.id).to.equal('B');
      expect(divRaw.className).to.equal('abc-123');
      div = Dom(div, {
        id: 'C',
        "class": 'def-456'
      });
      expect(divRaw.id).to.equal('C');
      return expect(divRaw.className).to.equal('def-456');
    });
    test("Document node", function() {
      var doc;
      doc = Dom(document);
      expect(doc).not.to.be.undefined;
      expect(doc.raw).to.equal(document);
      expect(doc.parent).to.equal(void 0);
      expect(doc.children.length).to.equal(1);
      expect(Dom(sandbox).parents).not.to.contain(doc);
      return expect(Dom(sandbox).parents).to.contain(doc.children[0]);
    });
    test("Window object", function() {
      var win;
      win = Dom(window);
      expect(win).not.to.be.undefined;
      expect(win.raw === window).to.be["true"];
      expect(win.parent).to.equal(void 0);
      expect(win.children).to.equal(void 0);
      expect(win.append).to.equal(void 0);
      expect(win.html).to.equal(void 0);
      expect(win.style).to.equal(void 0);
      return expect(Dom(sandbox).parents).not.to.contain(win);
    });
    test("Creation w/ styling", function() {
      var computedStyle, div;
      div = Dom.div({
        style: {
          'width': '10px',
          'height': 15,
          'lameo': '19px',
          'background-color': 'blue',
          'backgroundSize': 'cover'
        }
      });
      sandbox.appendChild(div.el);
      computedStyle = getComputedStyle(div.el);
      expect(div.style.lameo).to.equal(void 0);
      expect(computedStyle.lameo).to.equal(void 0);
      expect(computedStyle.width).to.equal('10px');
      expect(computedStyle.height).to.equal('15px');
      expect(computedStyle.backgroundColor).not.to.equal('');
      return expect(computedStyle.backgroundSize).to.equal('cover');
    });
    test("SVG elements can be created via a '*' in the element's type string", function() {
      var svgBad, svgDiv, svgGood, svgPolyBad, svgPolyGood;
      svgBad = Dom('svg').el;
      svgGood = Dom('*svg').el;
      svgPolyBad = Dom('polyline').el;
      svgPolyGood = Dom('*polyline').el;
      svgDiv = Dom('*div').el;
      expect(svgBad.constructor.name).to.equal('HTMLUnknownElement');
      expect(svgPolyBad.constructor.name).to.equal('HTMLUnknownElement');
      expect(svgGood.constructor.name).to.equal('SVGSVGElement');
      expect(svgPolyGood.constructor.name).to.equal('SVGPolylineElement');
      return expect(svgDiv.constructor.name).to.equal('SVGElement');
    });
    test("QuickDom.html() accepts an html string which would be parsed and converted into a QuickBatch instance", function() {
      var htmlString;
      htmlString = "<div>firstChildText</div><span>secondChildText</span> textNode <strong>abc123</strong>";
      window.batch = Dom.html(htmlString);
      expect(typeof batch).to.equal('object');
      expect(batch.constructor.name).to.equal('QuickBatch');
      expect(batch.elements.length).to.equal(4);
      expect(batch.elements[0].type).to.equal('div');
      expect(batch.elements[1].type).to.equal('span');
      expect(batch.elements[2].type).to.equal('text');
      expect(batch.elements[3].type).to.equal('strong');
      expect(batch.elements[0].text).to.equal('firstChildText');
      expect(batch.elements[1].text).to.equal('secondChildText');
      expect(batch.elements[2].text).to.include('textNode');
      return expect(batch.elements[3].text).to.equal('abc123');
    });
    return test("Method/Property aliases", function() {
      var div;
      div = Dom('div');
      expect(div.raw).to.equal(div.el);
      expect(div[0]).to.equal(div.el);
      expect(div.css).to.equal(div.style);
      return expect(div.replaceWith).to.equal(div.replace);
    });
  });
  suite("Events", function() {
    test("Events can be listened to via the .on method", function() {
      var div, emitCountA, emitCountB;
      emitCountA = emitCountB = 0;
      div = Dom.div();
      div.on('myClick', function(event) {
        expect(typeof event).to.equal('object');
        expect(event.type).to.equal('myClick');
        return emitCountA++;
      });
      div.el.emitEvent('myClick');
      expect(emitCountA).to.equal(1);
      div.el.emitEvent('myClick');
      expect(emitCountA).to.equal(2);
      div.on('myClick', function(event) {
        return emitCountB++;
      });
      div.el.emitEvent('myClick');
      expect(emitCountB).to.equal(1);
      expect(emitCountA).to.equal(3);
      div.el.emitEvent('myClick');
      expect(emitCountB).to.equal(2);
      return expect(emitCountA).to.equal(4);
    });
    test("Events can be emitted via the .emit method", function() {
      var div, emitCountA, emitCountB;
      emitCountA = emitCountB = 0;
      div = Dom.div();
      div.on('myEvent', function() {
        return emitCountA++;
      });
      div.el.addEventListener('myEvent', function() {
        return emitCountB++;
      });
      expect(emitCountA).to.equal(0);
      expect(emitCountB).to.equal(0);
      div.emit('myEvent');
      expect(emitCountA).to.equal(1);
      expect(emitCountB).to.equal(1);
      div.el.emitEvent('myEvent');
      expect(emitCountA).to.equal(2);
      return expect(emitCountB).to.equal(2);
    });
    test("Event handlers can be manually invoked with a custom arg via the .emitPrivate method", function() {
      var arg, div, emitCountA, emitCountB;
      emitCountA = emitCountB = 0;
      arg = null;
      div = Dom.div();
      div.on('myEvent', function() {
        emitCountA++;
        return arg = arguments[0];
      });
      div.el.addEventListener('myEvent', function() {
        return emitCountB++;
      });
      expect(emitCountA).to.equal(0);
      expect(emitCountB).to.equal(0);
      expect(arg).to.equal(null);
      div.emitPrivate('myEvent');
      expect(emitCountA).to.equal(1);
      expect(emitCountB).to.equal(0);
      expect(arg).to.equal(void 0);
      div.emitPrivate('myEvent', 'abc123');
      expect(emitCountA).to.equal(2);
      expect(emitCountB).to.equal(0);
      expect(arg).to.equal('abc123');
      div.el.emitEvent('myEvent');
      expect(emitCountA).to.equal(3);
      expect(emitCountB).to.equal(1);
      expect(arg).not.to.equal('abc123');
      return expect(typeof arg).to.equal('object');
    });
    test("Booleans can be passed for the 2nd and 3rd args of .emit to control event.bubbles and event.cancelable", function() {
      var div, emitCountA, emitCountB, emitCountC;
      emitCountA = emitCountB = emitCountC = 0;
      div = Dom.div();
      div.on('eventA', function(event) {
        emitCountA++;
        expect(event.bubbles).to.be["true"];
        return expect(event.cancelable).to.be["true"];
      });
      div.on('eventB', function(event) {
        emitCountB++;
        expect(event.bubbles).to.be["false"];
        return expect(event.cancelable).to.be["true"];
      });
      div.on('eventC', function(event) {
        emitCountC++;
        expect(event.bubbles).to.be["false"];
        return expect(event.cancelable).to.be["false"];
      });
      div.emit('eventA');
      div.emit('eventB', false);
      div.emit('eventC', false, false);
      expect(emitCountA).to.equal(1);
      expect(emitCountB).to.equal(1);
      return expect(emitCountC).to.equal(1);
    });
    test("Event listeners can be removed via the .off method", function() {
      var div, emitCountA, emitCountB, emitCountC, emitCountD, eventCB;
      emitCountA = emitCountB = emitCountC = emitCountD = 0;
      div = Dom.div();
      div.on('myEvent', function() {
        return emitCountA++;
      });
      div.on('myEvent', eventCB = function() {
        return emitCountB++;
      });
      div.on('anotherEvent', function() {
        return emitCountC++;
      });
      div.el.addEventListener('myEvent', function() {
        return emitCountD++;
      });
      expect(emitCountA).to.equal(0);
      expect(emitCountB).to.equal(0);
      expect(emitCountC).to.equal(0);
      expect(emitCountD).to.equal(0);
      div.emit('myEvent');
      div.emit('anotherEvent');
      expect(emitCountA).to.equal(1);
      expect(emitCountB).to.equal(1);
      expect(emitCountC).to.equal(1);
      expect(emitCountD).to.equal(1);
      div.off('myEvent', eventCB);
      div.emit('myEvent');
      div.emit('anotherEvent');
      expect(emitCountA).to.equal(2);
      expect(emitCountB).to.equal(1);
      expect(emitCountC).to.equal(2);
      expect(emitCountD).to.equal(2);
      div.on('myEvent', function() {
        return emitCountB++;
      });
      div.off('myEvent');
      div.emit('myEvent');
      div.emit('anotherEvent');
      expect(emitCountA).to.equal(2);
      expect(emitCountB).to.equal(1);
      expect(emitCountC).to.equal(3);
      expect(emitCountD).to.equal(3);
      div.on('myEvent', function() {
        return emitCountA++;
      });
      div.on('myEvent', function() {
        return emitCountB++;
      });
      div.off();
      div.emit('myEvent');
      div.emit('anotherEvent');
      expect(emitCountA).to.equal(2);
      expect(emitCountB).to.equal(1);
      expect(emitCountC).to.equal(3);
      return expect(emitCountD).to.equal(4);
    });
    test("Events can be named via a '<event>.<name>' syntax which can be used to remove listeners later on without the original callbacks", function() {
      var attachListeners, div, emitCountA, emitCountB;
      emitCountA = emitCountB = 0;
      div = Dom.div().appendTo(sandbox);
      attachListeners = function() {
        div.on('myEvent.someName', function() {
          return emitCountA++;
        });
        return div.on('myEvent', function() {
          return emitCountB++;
        });
      };
      attachListeners();
      expect(emitCountA).to.equal(0);
      expect(emitCountB).to.equal(0);
      div.emit('myEvent');
      expect(emitCountA).to.equal(1);
      expect(emitCountB).to.equal(1);
      div.emit('myEvent.someName');
      expect(emitCountA).to.equal(1);
      expect(emitCountB).to.equal(1);
      div.off('myEvent.someOtherName');
      div.emit('myEvent');
      expect(emitCountA).to.equal(2);
      expect(emitCountB).to.equal(2);
      div.off('myEvent.someName');
      div.emit('myEvent');
      expect(emitCountA).to.equal(2);
      expect(emitCountB).to.equal(3);
      div.off('myEvent');
      attachListeners();
      div.emit('myEvent');
      expect(emitCountA).to.equal(3);
      expect(emitCountB).to.equal(4);
      div.off('myEvent');
      div.emit('myEvent');
      expect(emitCountA).to.equal(3);
      return expect(emitCountB).to.equal(4);
    });
    test("Multiple events can be registered/deregistered at once using whitespace separators", function() {
      var div, emitCount;
      emitCount = 0;
      div = Dom.div();
      div.on('one two   three', function() {
        return emitCount++;
      });
      expect(emitCount).to.equal(0);
      div.emit('one');
      expect(emitCount).to.equal(1);
      div.emit('two');
      expect(emitCount).to.equal(2);
      div.emit('three');
      expect(emitCount).to.equal(3);
      div.off('one      three');
      div.emit('one');
      expect(emitCount).to.equal(3);
      div.emit('two');
      expect(emitCount).to.equal(4);
      div.emit('three');
      expect(emitCount).to.equal(4);
      div.off();
      div.emit('one');
      div.emit('two');
      div.emit('three');
      div.on('one two   three.someName', function() {
        return emitCount++;
      });
      div.on('one two   three', function() {
        return emitCount++;
      });
      expect(emitCount).to.equal(4);
      div.emit('one');
      expect(emitCount).to.equal(6);
      div.emit('two');
      expect(emitCount).to.equal(8);
      div.emit('three');
      expect(emitCount).to.equal(10);
      div.off('two \tone.someName');
      div.emit('one');
      expect(emitCount).to.equal(11);
      div.emit('two');
      expect(emitCount).to.equal(12);
      div.emit('three');
      expect(emitCount).to.equal(14);
      div.off('one three');
      div.emit('one');
      expect(emitCount).to.equal(14);
      div.emit('two');
      expect(emitCount).to.equal(15);
      div.emit('three');
      return expect(emitCount).to.equal(15);
    });
    test("Events can be listened for once via the .once method", function() {
      var div, emitCountA, emitCountB;
      emitCountA = emitCountB = 0;
      div = Dom.div();
      div.once('myClick', function(event) {
        expect(typeof event).to.equal('object');
        return expect(event.type).to.equal('myClick');
      });
      div.on('myClick', function() {
        return emitCountA++;
      });
      div.once('myClick', function() {
        return emitCountB++;
      });
      expect(emitCountA).to.equal(0);
      expect(emitCountB).to.equal(0);
      div.el.emitEvent('myClick');
      expect(emitCountA).to.equal(1);
      expect(emitCountB).to.equal(1);
      div.el.emitEvent('myClick');
      expect(emitCountA).to.equal(2);
      expect(emitCountB).to.equal(1);
      div.once('myClick', function(event) {
        return emitCountB++;
      });
      div.el.emitEvent('myClick');
      expect(emitCountA).to.equal(3);
      expect(emitCountB).to.equal(2);
      div.el.emitEvent('myClick');
      expect(emitCountA).to.equal(4);
      return expect(emitCountB).to.equal(2);
    });
    return test("Pre-defined event listeners can be passed in options.events", function() {
      var div, divB, emitContext, emitCount, listeners;
      emitCount = 0;
      emitContext = null;
      listeners = {
        'one two three': function() {
          return emitCount++;
        },
        'four': function() {
          return emitCount++;
        },
        'five': function() {
          return emitContext = this;
        }
      };
      div = Dom.div({
        events: listeners
      });
      expect(emitCount).to.equal(0);
      div.emit('one');
      expect(emitCount).to.equal(1);
      div.emit('two');
      expect(emitCount).to.equal(2);
      div.emit('three');
      expect(emitCount).to.equal(3);
      div.emit('four');
      expect(emitCount).to.equal(4);
      div.off('one      three');
      div.emit('one');
      expect(emitCount).to.equal(4);
      div.emit('two');
      expect(emitCount).to.equal(5);
      div.emit('three');
      expect(emitCount).to.equal(5);
      div.emit('five');
      expect(emitContext).to.equal(div[0]);
      div.off();
      div.emit('one');
      div.emit('two');
      div.emit('three');
      div.emit('four');
      expect(emitCount).to.equal(5);
      divB = Dom.div({
        events: listeners
      });
      divB.emit('one');
      divB.emit('three');
      expect(emitCount).to.equal(7);
      expect(emitContext).to.equal(div[0]);
      divB.emit('five');
      return expect(emitContext).to.equal(divB[0]);
    });
  });
  suite("Style", function() {
    test("Styles can be set via the .style/.css method with args pair of [property, value]", function() {
      var computedStyle, div;
      div = Dom.div({
        style: {
          width: '15px'
        }
      }).appendTo(sandbox);
      computedStyle = getComputedStyle(div.el);
      expect(computedStyle.width).to.equal('15px');
      div.style('width', '25px');
      expect(div.el.style.width).to.equal('25px');
      expect(computedStyle.width).to.equal('25px');
      div.style('width', '5vh');
      expect(div.el.style.width).to.equal('5vh');
      return expect(computedStyle.width).to.contain('px');
    });
    test("Multiple Styles can be set via the .style/.css method by passing a style object", function() {
      var computedStyle, div;
      div = Dom.div({
        style: {
          width: '15px'
        }
      }).appendTo(sandbox);
      computedStyle = getComputedStyle(div.el);
      expect(computedStyle.width).to.equal('15px');
      expect(computedStyle.height).to.equal('0px');
      div.style({
        width: 25,
        height: '33'
      });
      expect(computedStyle.width).to.equal('25px');
      return expect(computedStyle.height).to.equal('33px');
    });
    test("A null value can be passed for a property in order to delete that style", function() {
      var div;
      div = Dom.div({
        style: {
          width: '15px'
        }
      }).appendTo(sandbox);
      expect(div.el.style.width).to.equal('15px');
      expect(div.el.style.height).to.equal('');
      div.style({
        width: null,
        height: 12
      });
      expect(div.el.style.width).to.equal('');
      expect(div.el.style.height).to.equal('12px');
      div.css('height', null);
      expect(div.el.style.width).to.equal('');
      return expect(div.el.style.height).to.equal('');
    });
    test("If passed a property name without a value, the computed value for that property will be returned", function() {
      var computedStyle, div;
      div = Dom.div({
        style: {
          width: '15px'
        }
      }).appendTo(sandbox);
      computedStyle = getComputedStyle(div.el);
      expect(div.style('width')).to.equal('15px');
      expect(div.style('height')).to.equal('0px');
      div.style({
        width: null,
        height: 55
      });
      expect(div.style('width')).to.equal(computedStyle.width);
      expect(div.style('height')).to.equal('55px');
      div.style('width', '19vw');
      return expect(div.style('width')).to.contain('px');
    });
    test("Functions can be passed as values for properties in style objects which will be invoked with the element's options.relatedInstance as the only argument", function() {
      var anotherObj, applyWidth, div;
      div = Dom.div({
        rate: 25
      }).appendTo(sandbox);
      applyWidth = function(expectedInstance) {
        return div.style({
          width: function(instance) {
            expect(typeof instance).to.equal('object');
            expect(instance).to.equal(expectedInstance);
            return div.options.rate;
          }
        });
      };
      applyWidth(div);
      expect(div.options.rate).to.equal(25);
      expect(div.style('width')).to.equal('25px');
      div.options.rate = 250;
      div.options.relatedInstance = anotherObj = {};
      applyWidth(anotherObj);
      return expect(div.style('width')).to.equal('250px');
    });
    test(".styleSafe() can be used to obtain the value for a given property even for non-inserted elements or elements with options.styleAfterInsert", function() {
      var divA, divB, style, text;
      style = {
        width: '8px',
        height: '9px',
        $happy: {
          width: '18px'
        },
        $relaxed: {
          height: '100%'
        }
      };
      divA = Dom.div({
        style: style
      });
      divB = Dom.div({
        style: style,
        styleAfterInsert: true
      });
      expect(divA.style('width')).to.equal('');
      expect(divA.raw.style.width).to.equal('8px');
      expect(divA.styleSafe('width')).to.equal('8px');
      divA.state('happy', true);
      expect(divA.style('width')).to.equal('');
      expect(divA.raw.style.width).to.equal('18px');
      expect(divA.styleSafe('width')).to.equal('18px');
      expect(divB.style('width')).to.equal('');
      expect(divB.raw.style.width).to.equal('');
      expect(divB.styleSafe('width')).to.equal('8px');
      divB.state('happy', true);
      expect(divB.style('width')).to.equal('');
      expect(divB.raw.style.width).to.equal('18px');
      expect(divB.styleSafe('width')).to.equal('18px');
      expect(divB.style('height')).to.equal('');
      expect(divB.raw.style.height).to.equal('');
      expect(divB.styleSafe('height')).to.equal('9px');
      divB.state('relaxed', true);
      expect(divB.style('height')).to.equal('');
      expect(divB.raw.style.height).to.equal('100%');
      expect(divB.styleSafe('height')).to.equal('100%');
      divB.appendTo(sandbox);
      expect(divB.style('height')).not.to.equal('');
      expect(divB.style('height')).not.to.equal('100%');
      expect(divB.style('height')).to.contain('px');
      expect(divB.raw.style.height).to.equal('100%');
      expect(divB.styleSafe('height')).to.equal(divB.style('height'));
      expect(divB.styleSafe('height', true)).not.to.equal(divB.style('height'));
      expect(divB.styleSafe('height', true)).to.equal('100%');
      expect(divB.styleSafe('margin', true)).to.equal('');
      expect(divB.style('width')).to.equal('18px');
      expect(divA.styleSafe('fakeProp')).to.equal(divA);
      expect(divA.styleSafe(123)).to.equal(divA);
      text = Dom.text('abc123').appendTo(divA);
      expect(text.styleSafe('fakeProp')).to.equal(void 0);
      return expect(text.styleSafe(123)).to.equal(void 0);
    });
    test(".styleSafe() will work with instances with no given base styles", function() {
      var divA, divB;
      divA = Dom.div();
      divB = Dom(document.createElement('div'));
      expect(function() {
        divA.styleSafe('height');
        return divB.styleSafe('height');
      }).not.to["throw"]();
      expect(divA.styleSafe('height')).to.equal('');
      return expect(divB.styleSafe('height')).to.equal('');
    });
    test(".styleParsed() is a shorthand for parseFloat(.styleSafe())", function() {
      var divA, divB, style;
      style = {
        width: '8px',
        height: '9px',
        $happy: {
          width: '18px'
        },
        $relaxed: {
          height: '100%'
        }
      };
      divA = Dom.div({
        style: style
      });
      divB = Dom.div({
        style: style,
        styleAfterInsert: true
      });
      expect(divA.style('width')).to.equal('');
      expect(divA.styleSafe('width')).to.equal('8px');
      expect(divA.styleParsed('width')).to.equal(parseFloat(divA.styleSafe('width')));
      expect(divA.style('height')).to.equal('');
      expect(divA.styleSafe('height')).to.equal('9px');
      expect(divA.styleParsed('height')).to.equal(parseFloat(divA.styleSafe('height')));
      expect(divB.style('width')).to.equal('');
      expect(divB.styleSafe('width')).to.equal('8px');
      expect(divB.styleParsed('width')).to.equal(parseFloat(divB.styleSafe('width')));
      divA.state('happy', true);
      divB.state('happy', true);
      expect(divA.style('width')).to.equal('');
      expect(divA.styleSafe('width')).to.equal('18px');
      expect(divA.styleParsed('width')).to.equal(parseFloat(divA.styleSafe('width')));
      expect(divA.style('height')).to.equal('');
      expect(divA.styleSafe('height')).to.equal('9px');
      expect(divA.styleParsed('height')).to.equal(parseFloat(divA.styleSafe('height')));
      expect(divB.style('width')).to.equal('');
      expect(divB.styleSafe('width')).to.equal('18px');
      expect(divB.styleParsed('width')).to.equal(parseFloat(divB.styleSafe('width')));
      divA.state('relaxed', true);
      divB.state('relaxed', true);
      expect(divA.style('width')).to.equal('');
      expect(divA.styleSafe('width')).to.equal('18px');
      expect(divA.styleParsed('width')).to.equal(parseFloat(divA.styleSafe('width')));
      expect(divA.style('height')).to.equal('');
      expect(divA.styleSafe('height')).to.equal('100%');
      expect(divA.styleParsed('height')).to.equal(parseFloat(divA.styleSafe('height')));
      expect(divB.style('width')).to.equal('');
      expect(divB.styleSafe('width')).to.equal('18px');
      expect(divB.styleParsed('width')).to.equal(parseFloat(divB.styleSafe('width')));
      divA.appendTo(sandbox);
      divB.appendTo(sandbox);
      divA.state('relaxed', false);
      divB.state('relaxed', false);
      expect(divA.style('width')).to.equal('18px');
      expect(divA.styleSafe('width')).to.equal('18px');
      expect(divA.styleParsed('width')).to.equal(parseFloat(divA.styleSafe('width')));
      expect(divA.style('height')).to.equal('9px');
      expect(divA.styleSafe('height')).to.equal('9px');
      expect(divA.styleParsed('height')).to.equal(parseFloat(divA.styleSafe('height')));
      expect(divB.style('width')).to.equal('18px');
      expect(divB.styleSafe('width')).to.equal('18px');
      return expect(divB.styleParsed('width')).to.equal(parseFloat(divB.styleSafe('width')));
    });
    test(".recalcStyle() re-applies all function-value styles", function() {
      var count, div;
      count = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        G: 0
      };
      div = Dom.div({
        style: {
          width: function() {
            return ++count.A;
          },
          opacity: 1,
          height: function() {
            return ++count.B;
          },
          fontSize: function() {
            return ++count.C;
          },
          $happy: {
            opacity: 0.5,
            fontSize: function() {
              return ++count.D;
            }
          },
          $relaxed: {
            height: function() {
              return ++count.E;
            },
            fontSize: function() {
              return ++count.F;
            },
            $funny: {
              width: function() {
                return ++count.G;
              }
            }
          }
        }
      });
      expect(count).to.eql({
        A: 1,
        B: 1,
        C: 1,
        D: 0,
        E: 0,
        F: 0,
        G: 0
      });
      div.recalcStyle();
      expect(count).to.eql({
        A: 2,
        B: 2,
        C: 2,
        D: 0,
        E: 0,
        F: 0,
        G: 0
      });
      div.state('happy', true);
      expect(count).to.eql({
        A: 2,
        B: 2,
        C: 2,
        D: 1,
        E: 0,
        F: 0,
        G: 0
      });
      div.recalcStyle();
      expect(count).to.eql({
        A: 3,
        B: 3,
        C: 2,
        D: 2,
        E: 0,
        F: 0,
        G: 0
      });
      div.state('relaxed', true);
      expect(count).to.eql({
        A: 3,
        B: 3,
        C: 2,
        D: 2,
        E: 1,
        F: 1,
        G: 0
      });
      div.recalcStyle();
      expect(count).to.eql({
        A: 4,
        B: 3,
        C: 2,
        D: 2,
        E: 2,
        F: 2,
        G: 0
      });
      div.state('funny', true);
      expect(count).to.eql({
        A: 4,
        B: 3,
        C: 2,
        D: 2,
        E: 2,
        F: 2,
        G: 1
      });
      div.recalcStyle();
      expect(count).to.eql({
        A: 4,
        B: 3,
        C: 2,
        D: 2,
        E: 3,
        F: 3,
        G: 2
      });
      div.state('funny', false);
      expect(count).to.eql({
        A: 5,
        B: 3,
        C: 2,
        D: 2,
        E: 3,
        F: 3,
        G: 2
      });
      div.recalcStyle();
      return expect(count).to.eql({
        A: 6,
        B: 3,
        C: 2,
        D: 2,
        E: 4,
        F: 4,
        G: 2
      });
    });
    test(".recalcStyle() accepts a single argument to indicate if to recalc style on children", function() {
      var count, div, wrapper, wrapperCount;
      count = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        G: 0
      };
      wrapperCount = 0;
      wrapper = Dom.div({
        style: {
          width: function() {
            return ++wrapperCount;
          }
        }
      });
      div = Dom.div({
        style: {
          width: function() {
            return ++count.A;
          },
          opacity: 1,
          height: function() {
            return ++count.B;
          },
          fontSize: function() {
            return ++count.C;
          },
          $happy: {
            opacity: 0.5,
            fontSize: function() {
              return ++count.D;
            }
          },
          $relaxed: {
            height: function() {
              return ++count.E;
            },
            fontSize: function() {
              return ++count.F;
            },
            $funny: {
              width: function() {
                return ++count.G;
              }
            }
          }
        }
      });
      div.appendTo(wrapper);
      expect(wrapperCount).to.equal(1);
      expect(count).to.eql({
        A: 1,
        B: 1,
        C: 1,
        D: 0,
        E: 0,
        F: 0,
        G: 0
      });
      wrapper.recalcStyle();
      expect(wrapperCount).to.equal(2);
      expect(count).to.eql({
        A: 1,
        B: 1,
        C: 1,
        D: 0,
        E: 0,
        F: 0,
        G: 0
      });
      wrapper.recalcStyle(true);
      expect(wrapperCount).to.equal(3);
      expect(count).to.eql({
        A: 2,
        B: 2,
        C: 2,
        D: 0,
        E: 0,
        F: 0,
        G: 0
      });
      div.state('happy', true);
      expect(count).to.eql({
        A: 2,
        B: 2,
        C: 2,
        D: 1,
        E: 0,
        F: 0,
        G: 0
      });
      wrapper.recalcStyle();
      expect(wrapperCount).to.equal(4);
      expect(count).to.eql({
        A: 2,
        B: 2,
        C: 2,
        D: 1,
        E: 0,
        F: 0,
        G: 0
      });
      wrapper.recalcStyle(1);
      expect(wrapperCount).to.equal(5);
      return expect(count).to.eql({
        A: 3,
        B: 3,
        C: 2,
        D: 2,
        E: 0,
        F: 0,
        G: 0
      });
    });
    test("If options.recalcOnResize is set, .recalcStyle() will be invoked on each resize event", function() {
      var count;
      count = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
      };
      Dom.div({
        style: {
          width: function() {
            return ++count.A;
          },
          opacity: 1,
          height: function() {
            return ++count.B;
          }
        }
      });
      Dom.div({
        recalcOnResize: true,
        style: {
          width: function() {
            return ++count.C;
          },
          opacity: 1,
          height: function() {
            return ++count.D;
          }
        }
      });
      expect(count).to.eql({
        A: 1,
        B: 1,
        C: 1,
        D: 1
      });
      Dom(window).emit('resize');
      expect(count).to.eql({
        A: 1,
        B: 1,
        C: 2,
        D: 2
      });
      Dom(window).emit('resize');
      return expect(count).to.eql({
        A: 1,
        B: 1,
        C: 3,
        D: 3
      });
    });
    test(".show()/.hide() will toggle the element's visibility", function() {
      var div;
      div = Dom.div().appendTo(sandbox);
      expect(div.style('display')).to.equal('block');
      div.hide();
      expect(div.style('display')).to.equal('none');
      div.show();
      expect(div.style('display')).to.equal('block');
      div.show();
      return expect(div.style('display')).to.equal('block');
    });
    return test(".show() will set the element's display style to the provided argument, or to the value provided in the style object", function() {
      var div;
      div = Dom.div({
        style: {
          display: 'inline'
        }
      }).appendTo(sandbox);
      expect(div.style('display')).to.equal('inline');
      div.hide();
      expect(div.style('display')).to.equal('none');
      div.show();
      expect(div.style('display')).to.equal('inline');
      div.hide();
      div.show('inline-block');
      return expect(div.style('display')).to.equal('inline-block');
    });
  });
  suite("State", function() {
    test("States can be polled for a value by passing only the target state's name to .state & can be toggled on/off by passing a second argument", function() {
      var div;
      div = Dom.div();
      expect(div.state('funny')).to.be["false"];
      div.state('funny', true);
      expect(div.state('funny')).to.be["true"];
      div.state('happy', true);
      div.state('relaxed', true);
      expect(div.state('funny')).to.be["true"];
      expect(div.state('happy')).to.be["true"];
      expect(div.state('relaxed')).to.be["true"];
      div.state('funny', false);
      expect(div.state('funny')).to.be["false"];
      expect(div.state('happy')).to.be["true"];
      expect(div.state('relaxed')).to.be["true"];
      div.state('$funny', true);
      div.state('$base', true);
      expect(div.state('funny')).to.be["true"];
      return expect(div.state('base')).to.be["false"];
    });
    test("All states can be cleared/toggled off via .resetState", function() {
      var div;
      div = Dom.div();
      div.state('funny', true);
      div.state('happy', true);
      div.state('relaxed', true);
      expect(div.state('funny')).to.be["true"];
      expect(div.state('happy')).to.be["true"];
      expect(div.state('relaxed')).to.be["true"];
      div.resetState();
      expect(div.state('funny')).to.be["false"];
      expect(div.state('happy')).to.be["false"];
      return expect(div.state('relaxed')).to.be["false"];
    });
    test("Styles can be passed under specific states using a '$' prefix before the state name", function() {
      var computedStyle, div;
      div = Dom.div({
        style: {
          $base: {
            width: '15px',
            height: '15px'
          },
          $happy: {
            width: '25px',
            marginTop: '20px'
          },
          $relaxed: {
            width: '35px',
            marginLeft: '12px'
          }
        }
      });
      div.appendTo(sandbox);
      computedStyle = getComputedStyle(div.el);
      expect(computedStyle.width).to.equal('15px');
      expect(computedStyle.height).to.equal('15px');
      expect(computedStyle.marginTop).to.equal('0px');
      expect(computedStyle.marginLeft).to.equal('0px');
      div.state('happy', true);
      expect(computedStyle.width).to.equal('25px');
      expect(computedStyle.height).to.equal('15px');
      expect(computedStyle.marginTop).to.equal('20px');
      expect(computedStyle.marginLeft).to.equal('0px');
      div.state('happy', false);
      expect(computedStyle.width).to.equal('15px');
      expect(computedStyle.height).to.equal('15px');
      expect(computedStyle.marginTop).to.equal('0px');
      expect(computedStyle.marginLeft).to.equal('0px');
      div.state('happy', true);
      div.state('relaxed', true);
      expect(computedStyle.width).to.equal('35px');
      expect(computedStyle.height).to.equal('15px');
      expect(computedStyle.marginTop).to.equal('20px');
      expect(computedStyle.marginLeft).to.equal('12px');
      div.state('happy', false);
      expect(computedStyle.width).to.equal('35px');
      expect(computedStyle.height).to.equal('15px');
      expect(computedStyle.marginTop).to.equal('0px');
      return expect(computedStyle.marginLeft).to.equal('12px');
    });
    test("A state:eventName (or state:eventOpts) map can be passed set for options.stateTriggers", function() {
      var computedStyle, div;
      div = Dom.div({
        stateTriggers: {
          happy: {
            on: 'becameHappy',
            off: 'becameSad'
          },
          relaxed: 'isRelaxed'
        },
        style: {
          $base: {
            width: '15px'
          },
          $happy: {
            width: '25px'
          },
          $relaxed: {
            width: '35px'
          }
        }
      }).appendTo(sandbox);
      computedStyle = getComputedStyle(div.el);
      expect(div.state('happy')).to.be["false"];
      expect(div.state('relaxed')).to.be["false"];
      expect(computedStyle.width).to.equal('15px');
      div.emit('becameHappy');
      expect(div.state('happy')).to.be["true"];
      expect(div.state('relaxed')).to.be["false"];
      expect(computedStyle.width).to.equal('25px');
      div.emit('isRelaxed');
      expect(div.state('happy')).to.be["true"];
      expect(div.state('relaxed')).to.be["true"];
      expect(computedStyle.width).to.equal('35px');
      div.emit('becameSad');
      expect(div.state('happy')).to.be["false"];
      expect(div.state('relaxed')).to.be["true"];
      expect(computedStyle.width).to.equal('35px');
      div.state('relaxed', false);
      return expect(computedStyle.width).to.equal('15px');
    });
    test("options.stateTriggers won't be attached if they aren't being used in style object", function() {
      var divA, divB;
      divA = Dom.div({
        style: {
          $hover: {
            display: 'block'
          }
        }
      });
      divB = Dom.div({
        style: {
          $focus: {
            display: 'block'
          }
        }
      });
      expect(divA.state('hover')).to.equal(false);
      expect(divB.state('hover')).to.equal(false);
      divA.el.emitEvent('mouseenter');
      divB.el.emitEvent('mouseenter');
      expect(divA.state('hover')).to.equal(true);
      expect(divB.state('hover')).to.equal(false);
      divA.el.emitEvent('mouseleave');
      divB.el.emitEvent('mouseleave');
      expect(divA.state('hover')).to.equal(false);
      expect(divB.state('hover')).to.equal(false);
      divA.el.emitEvent('focus');
      divB.el.emitEvent('focus');
      expect(divA.state('focus')).to.equal(false);
      expect(divB.state('focus')).to.equal(true);
      divA.el.emitEvent('blur');
      divB.el.emitEvent('blur');
      expect(divA.state('focus')).to.equal(false);
      return expect(divB.state('focus')).to.equal(false);
    });
    test("options.stateTriggers can be forced to be attached even if they aren't being used in style object via ._attachStateEvents(true)", function() {
      var attachStateEvents, divA, divB;
      attachStateEvents = Dom.div()._attachStateEvents ? '_attachStateEvents' : '_ae';
      divA = Dom.div({
        style: {
          $hover: {
            display: 'block'
          }
        }
      });
      divB = Dom.div({
        style: {
          $focus: {
            display: 'block'
          }
        }
      });
      divA[attachStateEvents](true);
      divB[attachStateEvents](true);
      expect(divA.state('hover')).to.equal(false);
      expect(divB.state('hover')).to.equal(false);
      divA.el.emitEvent('mouseenter');
      divB.el.emitEvent('mouseenter');
      expect(divA.state('hover')).to.equal(true);
      expect(divB.state('hover')).to.equal(true);
      divA.el.emitEvent('mouseleave');
      divB.el.emitEvent('mouseleave');
      expect(divA.state('hover')).to.equal(false);
      expect(divB.state('hover')).to.equal(false);
      divA.el.emitEvent('focus');
      divB.el.emitEvent('focus');
      expect(divA.state('focus')).to.equal(true);
      expect(divB.state('focus')).to.equal(true);
      divA.el.emitEvent('blur');
      divB.el.emitEvent('blur');
      expect(divA.state('focus')).to.equal(false);
      return expect(divB.state('focus')).to.equal(false);
    });
    test("The hover and focus states will be listened for and toggled by default by their appropriate events", function() {
      var computedStyle, div;
      div = Dom.div({
        style: {
          $base: {
            width: '15px',
            height: '15px',
            backgroundColor: 'rgb(45, 45, 45)'
          },
          $hover: {
            width: '25px',
            marginTop: '20px',
            backgroundColor: 'rgb(155, 155, 155)'
          },
          $focus: {
            width: '35px',
            backgroundColor: 'rgb(200, 200, 200)'
          }
        }
      });
      div.appendTo(sandbox);
      computedStyle = getComputedStyle(div.el);
      expect(computedStyle.width).to.equal('15px');
      expect(computedStyle.height).to.equal('15px');
      expect(computedStyle.marginTop).to.equal('0px');
      expect(div.el.style.marginTop).to.equal('');
      expect(computedStyle.backgroundColor).to.equal('rgb(45, 45, 45)');
      div.emit('mouseenter');
      expect(computedStyle.width).to.equal('25px');
      expect(computedStyle.height).to.equal('15px');
      expect(computedStyle.marginTop).to.equal('20px');
      expect(div.el.style.marginTop).to.equal('20px');
      expect(computedStyle.backgroundColor).to.equal('rgb(155, 155, 155)');
      div.emit('mouseleave');
      expect(computedStyle.width).to.equal('15px');
      expect(computedStyle.height).to.equal('15px');
      expect(computedStyle.marginTop).to.equal('0px');
      expect(div.el.style.marginTop).to.equal('');
      expect(computedStyle.backgroundColor).to.equal('rgb(45, 45, 45)');
      div.emit('mouseenter');
      div.emit('focus');
      expect(computedStyle.width).to.equal('35px');
      expect(computedStyle.height).to.equal('15px');
      expect(computedStyle.marginTop).to.equal('20px');
      expect(div.el.style.marginTop).to.equal('20px');
      expect(computedStyle.backgroundColor).to.equal('rgb(200, 200, 200)');
      div.emit('mouseleave');
      expect(computedStyle.width).to.equal('35px');
      expect(computedStyle.height).to.equal('15px');
      expect(computedStyle.marginTop).to.equal('0px');
      expect(div.el.style.marginTop).to.equal('');
      return expect(computedStyle.backgroundColor).to.equal('rgb(200, 200, 200)');
    });
    test("If not passed a style map under the 'base' state, all non-state properties on the style object will be considered as 'base' state properties", function() {
      var computedStyle, div;
      div = Dom.div({
        style: {
          width: '15px',
          height: '20px',
          $hover: {
            width: '25px',
            height: '30px'
          }
        }
      });
      div.appendTo(sandbox);
      computedStyle = getComputedStyle(div.el);
      expect(computedStyle.width).to.equal('15px');
      expect(computedStyle.height).to.equal('20px');
      div.emit('mouseenter');
      expect(computedStyle.width).to.equal('25px');
      expect(computedStyle.height).to.equal('30px');
      div.emit('mouseleave');
      expect(computedStyle.width).to.equal('15px');
      return expect(computedStyle.height).to.equal('20px');
    });
    test("State-specific styles will be removed upon state turn off or restored to the base value", function() {
      var computedStyle, div;
      div = Dom.div({
        style: {
          width: '15px',
          $hover: {
            width: '25px',
            height: '30px'
          }
        }
      });
      div.appendTo(sandbox);
      computedStyle = getComputedStyle(div.el);
      expect(computedStyle.width).to.equal('15px');
      expect(computedStyle.height).to.equal('0px');
      expect(div.el.style.height).to.equal('');
      div.emit('mouseenter');
      expect(computedStyle.width).to.equal('25px');
      expect(computedStyle.height).to.equal('30px');
      expect(div.el.style.height).to.equal('30px');
      div.emit('mouseleave');
      expect(computedStyle.width).to.equal('15px');
      expect(computedStyle.height).to.equal('0px');
      return expect(div.el.style.height).to.equal('');
    });
    test("Higher order state styles will have a higher precedence than the 'base' style to be used as replacments for pending-removal state-styles", function() {
      var computedStyle, div;
      div = Dom.div({
        style: {
          width: '15px',
          $hover: {
            width: '25px',
            height: '30px'
          },
          $focus: {
            height: '45px'
          }
        }
      });
      div.appendTo(sandbox);
      computedStyle = getComputedStyle(div.el);
      expect(computedStyle.width).to.equal('15px');
      expect(computedStyle.height).to.equal('0px');
      div.emit('mouseenter');
      expect(computedStyle.width).to.equal('25px');
      expect(computedStyle.height).to.equal('30px');
      div.emit('focus');
      expect(computedStyle.width).to.equal('25px');
      expect(computedStyle.height).to.equal('45px');
      div.emit('mouseleave');
      expect(computedStyle.width).to.equal('15px');
      expect(computedStyle.height).to.equal('45px');
      div.emit('blur');
      div.emit('focus');
      div.emit('mouseenter');
      expect(computedStyle.width).to.equal('25px');
      expect(computedStyle.height).to.equal('45px');
      div.emit('blur');
      expect(computedStyle.width).to.equal('25px');
      return expect(computedStyle.height).to.equal('30px');
    });
    test("State toggles will be passed to children elements unless options.passStateToChildren is off", function() {
      var A, B, C, Main;
      Main = Dom.div();
      A = Dom.div().appendTo(Main);
      B = Dom.div().appendTo(A);
      C = Dom.div({
        passStateToChildren: false
      }).appendTo(A);
      expect(Main.state('happy')).to.be["false"];
      expect(A.state('happy')).to.be["false"];
      expect(B.state('happy')).to.be["false"];
      expect(C.state('happy')).to.be["false"];
      Main.state('happy', true);
      expect(Main.state('happy')).to.be["true"];
      expect(A.state('happy')).to.be["true"];
      expect(B.state('happy')).to.be["true"];
      expect(C.state('happy')).to.be["true"];
      Main.options.passStateToChildren = false;
      Main.state('happy', false);
      expect(Main.state('happy')).to.be["false"];
      expect(A.state('happy')).to.be["true"];
      expect(B.state('happy')).to.be["true"];
      expect(C.state('happy')).to.be["true"];
      Main.state('happy', true);
      Main.options.passStateToChildren = true;
      A.options.passStateToChildren = false;
      Main.state('happy', false);
      expect(Main.state('happy')).to.be["false"];
      expect(A.state('happy')).to.be["false"];
      expect(B.state('happy')).to.be["true"];
      return expect(C.state('happy')).to.be["true"];
    });
    test("State styles can be nested to trigger when all states are toggled on", function() {
      var div;
      div = Dom.div({
        style: {
          $base: {
            width: '12px',
            height: '12px',
            fontSize: '10px'
          },
          $funny: {
            fontSize: '15px',
            height: '15px'
          },
          $happy: {
            width: '14px',
            fontSize: '14px',
            $relaxed: {
              height: '11px',
              fontSize: '17px',
              $funny: {
                width: '10px',
                height: '14px'
              }
            }
          },
          $relaxed: {
            width: '17px'
          }
        }
      });
      div.appendTo(sandbox);
      expect(div.style('width')).to.equal('12px');
      expect(div.style('height')).to.equal('12px');
      expect(div.style('fontSize')).to.equal('10px');
      div.state('funny', true);
      expect(div.style('width')).to.equal('12px');
      expect(div.style('height')).to.equal('15px');
      expect(div.style('fontSize')).to.equal('15px');
      div.state('funny', false);
      expect(div.style('width')).to.equal('12px');
      expect(div.style('height')).to.equal('12px');
      expect(div.style('fontSize')).to.equal('10px');
      div.state('happy', true);
      expect(div.style('width')).to.equal('14px');
      expect(div.style('height')).to.equal('12px');
      expect(div.style('fontSize')).to.equal('14px');
      div.state('relaxed', true);
      expect(div.style('width')).to.equal('17px');
      expect(div.style('height')).to.equal('11px');
      expect(div.style('fontSize')).to.equal('17px');
      div.state('happy', false);
      expect(div.style('width')).to.equal('17px');
      expect(div.style('height')).to.equal('12px');
      expect(div.style('fontSize')).to.equal('10px');
      div.state('happy', true);
      expect(div.style('width')).to.equal('17px');
      expect(div.style('height')).to.equal('11px');
      expect(div.style('fontSize')).to.equal('17px');
      div.state('funny', true);
      expect(div.style('width')).to.equal('10px');
      expect(div.style('height')).to.equal('14px');
      expect(div.style('fontSize')).to.equal('17px');
      div.state('happy', false);
      expect(div.style('width')).to.equal('17px');
      expect(div.style('height')).to.equal('15px');
      return expect(div.style('fontSize')).to.equal('15px');
    });
    test("QuickElement.rect should contain an updated version of the element's ClientRect", function() {
      var div, rectA, rectB, rectC;
      div = Dom.div().appendTo(sandbox);
      rectA = div.rect;
      rectB = div.rect;
      expect(rectA).to.be.instanceOf(ClientRect);
      expect(rectB).to.be.instanceOf(ClientRect);
      expect(rectA).to.eql(rectB);
      div.style('width', '7px');
      rectC = div.rect;
      expect(rectC).to.be.instanceOf(ClientRect);
      expect(rectA).to.eql(rectB);
      expect(rectA).not.to.eql(rectC);
      expect(rectA.width).not.to.equal(7);
      expect(rectB.width).not.to.equal(7);
      return expect(rectC.width).to.equal(7);
    });
    test("QuickElement.width should return the updated version of an element's computed width", function() {
      var div, parent;
      parent = Dom.div().appendTo(sandbox);
      div = Dom.div().appendTo(parent);
      parent.style({
        width: '1000px'
      });
      div.style({
        width: '50%'
      });
      expect(div.width).to.equal(500);
      div.style({
        width: '10%'
      });
      expect(div.width).to.equal(100);
      div.style({
        width: '97px'
      });
      return expect(div.width).to.equal(97);
    });
    test("QuickElement.height should return the updated version of an element's computed height", function() {
      var div, parent;
      parent = Dom.div().appendTo(sandbox);
      div = Dom.div().appendTo(parent);
      parent.style({
        height: '1000px'
      });
      div.style({
        height: '50%'
      });
      expect(div.height).to.equal(500);
      div.style({
        height: '10%'
      });
      expect(div.height).to.equal(100);
      div.style({
        height: '97px'
      });
      return expect(div.height).to.equal(97);
    });
    test("QuickElement.orientation should return the updated version of an element's computed orientation", function() {
      var div, parent;
      parent = Dom.div().appendTo(sandbox);
      div = Dom.div().appendTo(parent);
      div.style({
        width: 500,
        height: 400
      });
      expect(div.orientation).to.equal('landscape');
      div.style({
        width: 550,
        height: 600
      });
      expect(div.orientation).to.equal('portrait');
      div.style({
        width: 600,
        height: 600
      });
      expect(div.orientation).to.equal('portrait');
      div.style({
        width: 601,
        height: 600
      });
      return expect(div.orientation).to.equal('landscape');
    });
    test("QuickElement.aspectRatio should return the updated version of an element's computed aspect-ratio", function() {
      var div, parent;
      parent = Dom.div().appendTo(sandbox);
      div = Dom.div().appendTo(parent);
      div.style({
        width: 500,
        height: 400
      });
      expect(div.aspectRatio).to.equal(1.25);
      div.style({
        width: 540,
        height: 600
      });
      expect(div.aspectRatio).to.equal(0.9);
      div.style({
        width: 600,
        height: 600
      });
      expect(div.aspectRatio).to.equal(1);
      div.style({
        width: 300,
        height: 900
      });
      return expect(div.aspectRatio).to.equal(0.33333333333333333333333333);
    });
    test("If options.styleAfterInsert is passed, base styles will be applied only after the element is inserted into the DOM", function() {
      var divA, divB, divC, divReg, parentOpacityGetter;
      parentOpacityGetter = function() {
        if (this.parent) {
          return this.parent.style('opacity');
        } else {
          return '0.5';
        }
      };
      divReg = Dom.div({
        style: {
          height: '19px',
          opacity: parentOpacityGetter
        }
      });
      divA = Dom.div({
        style: {
          height: '19px',
          opacity: parentOpacityGetter
        },
        styleAfterInsert: true
      });
      divB = Dom.div({
        style: {
          height: '19px',
          opacity: parentOpacityGetter
        },
        styleAfterInsert: true
      });
      divC = Dom.div({
        style: {
          height: '19px',
          opacity: parentOpacityGetter
        },
        styleAfterInsert: true
      });
      expect(divReg.el.style.height).to.equal('19px');
      expect(divReg.el.style.opacity).to.equal('0.5');
      expect(divA.el.style.height).to.equal('');
      expect(divB.el.style.height).to.equal('');
      expect(divC.el.style.height).to.equal('');
      expect(divA.el.style.opacity).to.equal('');
      expect(divB.el.style.opacity).to.equal('');
      expect(divC.el.style.opacity).to.equal('');
      divA.appendTo(sandbox);
      expect(divA.el.style.height).to.equal('19px');
      expect(divB.el.style.height).to.equal('');
      expect(divC.el.style.height).to.equal('');
      expect(divA.el.style.opacity).to.equal('1');
      expect(divB.el.style.opacity).to.equal('');
      expect(divC.el.style.opacity).to.equal('');
      divB.insertBefore(sandbox);
      expect(divA.el.style.height).to.equal('19px');
      expect(divB.el.style.height).to.equal('19px');
      expect(divC.el.style.height).to.equal('');
      expect(divA.el.style.opacity).to.equal('1');
      expect(divB.el.style.opacity).to.equal('1');
      expect(divC.el.style.opacity).to.equal('');
      sandbox.appendChild(divC.el);
      expect(divA.el.style.height).to.equal('19px');
      expect(divB.el.style.height).to.equal('19px');
      expect(divC.el.style.height).to.equal('');
      expect(divA.el.style.opacity).to.equal('1');
      expect(divB.el.style.opacity).to.equal('1');
      expect(divC.el.style.opacity).to.equal('');
      divC.parent;
      expect(divA.el.style.height).to.equal('19px');
      expect(divB.el.style.height).to.equal('19px');
      expect(divC.el.style.height).to.equal('19px');
      expect(divA.el.style.opacity).to.equal('1');
      expect(divB.el.style.opacity).to.equal('1');
      expect(divC.el.style.opacity).to.equal('1');
      return divC.appendTo(sandbox);
    });
    test("Any styles applied by states before the element has been inserted into the DOM and when options.styleAfterInsert is on will be re-applied after insert", function() {
      var divA, divReg;
      divReg = Dom.div({
        style: {
          $base: {
            height: '19px'
          },
          $funny: {
            height: '29px'
          },
          $happy: {
            height: '39px'
          }
        }
      });
      divA = Dom.div({
        style: {
          $base: {
            height: '19px'
          },
          $funny: {
            height: '29px'
          },
          $happy: {
            height: '39px'
          }
        },
        styleAfterInsert: true
      });
      expect(divReg.el.style.height).to.equal('19px');
      expect(divA.el.style.height).to.equal('');
      divReg.state('funny', true);
      divA.state('funny', true);
      expect(divReg.el.style.height).to.equal('29px');
      expect(divA.el.style.height).to.equal('29px');
      divReg.state('happy', true);
      divA.state('happy', true);
      expect(divReg.el.style.height).to.equal('39px');
      expect(divA.el.style.height).to.equal('39px');
      divReg.appendTo(sandbox);
      divA.appendTo(sandbox);
      expect(divReg.el.style.height).to.equal('39px');
      return expect(divA.el.style.height).to.equal('39px');
    });
    test("If an element with options.styleAfterInsert is appended into a detached element, styles will be applied only after the parent is appended to the DOM", function() {
      var detachedParent, divA, divReg;
      detachedParent = Dom.div();
      divReg = Dom.div({
        style: {
          height: '19px',
          $happy: {
            $relaxed: {
              width: '31px'
            }
          }
        }
      });
      divA = Dom.div({
        style: {
          height: '19px',
          $happy: {
            $relaxed: {
              width: '31px'
            }
          }
        },
        styleAfterInsert: true
      });
      divReg.state('happy', true);
      divReg.state('relaxed', true);
      divA.state('happy', true);
      divA.state('relaxed', true);
      divA.state('relaxed', true);
      divA.style('visibility', 'hidden');
      expect(divReg.el.style.height).to.equal('19px');
      expect(divReg.el.style.width).to.equal('31px');
      expect(divA.el.style.height).to.equal('');
      expect(divA.el.style.width).to.equal('31px');
      expect(divA.el.style.visibility).to.equal('hidden');
      divA.appendTo(detachedParent);
      expect(divA.el.style.height).to.equal('');
      expect(divA.el.style.width).to.equal('31px');
      expect(divA.el.style.visibility).to.equal('hidden');
      detachedParent.appendTo(sandbox);
      expect(divA.el.style.height).to.equal('19px');
      expect(divA.el.style.width).to.equal('31px');
      return expect(divA.el.style.visibility).to.equal('hidden');
    });
    test("QuickElement.onInserted can accept callbacks which will be invoked when inserted into the DOM", function() {
      var div, invokeCount, masterParentB, parentA, parentB, parentC;
      invokeCount = 0;
      parentA = Dom.section();
      parentB = Dom.section();
      masterParentB = Dom.div();
      parentC = Dom.section().appendTo(sandbox);
      div = Dom.div();
      div.onInserted(function(el) {
        expect(el).to.equal(div);
        return expect(invokeCount++).to.equal(0);
      });
      expect(invokeCount).to.equal(0);
      div.appendTo(parentA);
      expect(invokeCount).to.equal(0);
      div.appendTo(parentB.appendTo(masterParentB));
      expect(invokeCount).to.equal(0);
      parentA.appendTo(sandbox);
      expect(invokeCount).to.equal(0);
      div.appendTo(parentC);
      expect(invokeCount).to.equal(1);
      div.detach();
      div.appendTo(parentB.appendTo(sandbox));
      expect(invokeCount).to.equal(1);
      expect(div.parent).to.equal(parentB);
      div.onInserted(function() {
        return expect(invokeCount++).to.equal(1);
      });
      expect(invokeCount).to.equal(2);
      expect(div.parent).to.equal(parentB);
      div.appendTo(parentC);
      expect(invokeCount).to.equal(2);
      expect(div.parent).to.equal(parentC);
      div.detach();
      div.appendTo(parentA);
      div.onInserted((function() {
        invokeCount++;
        return expect(false).to.be["true"];
      }), false);
      expect(invokeCount).to.equal(2);
      div.detach();
      div.appendTo(parentB);
      return expect(invokeCount).to.equal(2);
    });
    test("QuickElement.replace will trigger the onInserted event", function() {
      var A, B, invokeCount, parent;
      invokeCount = 0;
      parent = Dom.section().appendTo(sandbox);
      A = Dom.div();
      B = Dom.div();
      B.onInserted(function(el) {
        expect(el).to.equal(B);
        return expect(invokeCount++).to.equal(0);
      });
      expect(invokeCount).to.equal(0);
      expect(A.parent).to.equal(void 0);
      expect(B.parent).to.equal(void 0);
      parent.append(A);
      expect(invokeCount).to.equal(0);
      expect(A.parent).to.equal(parent);
      expect(B.parent).to.equal(void 0);
      A.replace(B);
      expect(invokeCount).to.equal(1);
      expect(A.parent).to.equal(void 0);
      return expect(B.parent).to.equal(parent);
    });
    test("QuickElement.pipeState can be used to redirect all state toggles to the provided target element", function() {
      var childA, childB, divA, divB, parentA, parentB;
      parentA = Dom.div();
      parentB = Dom.div({
        passStateToChildren: false
      });
      divA = Dom.div(null).appendTo(parentA);
      divB = Dom.div(null).appendTo(parentB);
      childA = Dom.span().appendTo(divA);
      childB = Dom.span().appendTo(divB);
      divA.pipeState();
      divA.state('1', true);
      expect(parentA.state('1')).to.equal(false);
      expect(divA.state('1')).to.equal(true);
      expect(childA.state('1')).to.equal(true);
      divA.pipeState(parentA);
      divA.state('2', true);
      expect(parentA.state('2')).to.equal(true);
      expect(divA.state('2')).to.equal(true);
      expect(childA.state('2')).to.equal(true);
      divA.pipeState(false);
      divA.state('2.5', true);
      expect(parentA.state('2.5')).to.equal(false);
      expect(divA.state('2.5')).to.equal(true);
      expect(childA.state('2.5')).to.equal(true);
      divB.pipeState(true);
      divB.state('3', true);
      expect(parentB.state('3')).to.equal(false);
      expect(divB.state('3')).to.equal(true);
      expect(childB.state('3')).to.equal(true);
      divB.pipeState(parentB);
      divB.state('4', true);
      expect(parentB.state('4')).to.equal(true);
      expect(divB.state('4')).to.equal(false);
      expect(childB.state('4')).to.equal(false);
      divA.pipeState(parentB);
      divA.state('5', true);
      expect(parentA.state('5')).to.equal(false);
      expect(parentB.state('5')).to.equal(true);
      expect(divA.state('5')).to.equal(false);
      expect(divB.state('5')).to.equal(false);
      expect(childA.state('5')).to.equal(false);
      expect(childB.state('5')).to.equal(false);
      divA.pipeState(false);
      divB.pipeState(parentA);
      divB.state('6', true);
      expect(parentA.state('6')).to.equal(true);
      expect(parentB.state('6')).to.equal(false);
      expect(divA.state('6')).to.equal(true);
      expect(divB.state('6')).to.equal(false);
      expect(childA.state('6')).to.equal(true);
      return expect(childB.state('6')).to.equal(false);
    });
    test("States can be marked as unpassable to avoid passing to children by including them in options.unpassableStates", function() {
      var div, spanA, spanB, subSpan;
      div = Dom.div({
        unpassableStates: ['B', 'D']
      });
      spanA = Dom.span().appendTo(div);
      spanB = Dom.span().appendTo(div);
      subSpan = Dom.span().appendTo(spanB);
      expect(div.state('A')).to.equal(false);
      expect(spanA.state('A')).to.equal(false);
      expect(spanB.state('A')).to.equal(false);
      expect(subSpan.state('A')).to.equal(false);
      div.state('A', true);
      expect(div.state('A')).to.equal(true);
      expect(spanA.state('A')).to.equal(true);
      expect(spanB.state('A')).to.equal(true);
      expect(subSpan.state('A')).to.equal(true);
      div.state('B', true);
      expect(div.state('B')).to.equal(true);
      expect(spanA.state('B')).to.equal(false);
      expect(spanB.state('B')).to.equal(false);
      expect(subSpan.state('B')).to.equal(false);
      div.state('C', true);
      expect(div.state('C')).to.equal(true);
      expect(spanA.state('C')).to.equal(true);
      expect(spanB.state('C')).to.equal(true);
      expect(subSpan.state('C')).to.equal(true);
      div.state('D', true);
      expect(div.state('D')).to.equal(true);
      expect(spanA.state('D')).to.equal(false);
      expect(spanB.state('D')).to.equal(false);
      expect(subSpan.state('D')).to.equal(false);
      spanB.state('D', true);
      expect(spanB.state('D')).to.equal(true);
      expect(subSpan.state('D')).to.equal(true);
      div.state('D', false);
      expect(div.state('D')).to.equal(false);
      expect(spanB.state('D')).to.equal(true);
      return expect(subSpan.state('D')).to.equal(true);
    });
    test("When .state() receives a truthy value as the third argument the event will bubble up to parents instead of cascade to children", function() {
      var childA, childB, parentA, parentB, subChildA, subChildB, subParentA, subParentB;
      parentA = Dom.section(null, subParentA = Dom.div(null, childA = Dom.div(null, subChildA = Dom.div())));
      parentB = Dom.section(null, subParentB = Dom.div(null, childB = Dom.div(null, subChildB = Dom.div())));
      expect(parentA.state('happy')).to.equal(false);
      expect(parentB.state('happy')).to.equal(false);
      expect(subParentA.state('happy')).to.equal(false);
      expect(subParentB.state('happy')).to.equal(false);
      expect(childA.state('happy')).to.equal(false);
      expect(childB.state('happy')).to.equal(false);
      expect(subChildA.state('happy')).to.equal(false);
      expect(subChildB.state('happy')).to.equal(false);
      childA.state('happy', true, true);
      childB.state('happy', true);
      expect(parentA.state('happy')).to.equal(true);
      expect(parentB.state('happy')).to.equal(false);
      expect(subParentA.state('happy')).to.equal(true);
      expect(subParentB.state('happy')).to.equal(false);
      expect(childA.state('happy')).to.equal(true);
      expect(childB.state('happy')).to.equal(true);
      expect(subChildA.state('happy')).to.equal(false);
      expect(subChildB.state('happy')).to.equal(true);
      childA.state('relaxed', true, null);
      childB.state('relaxed', true, 'on');
      expect(parentA.state('relaxed')).to.equal(false);
      expect(parentB.state('relaxed')).to.equal(true);
      expect(subParentA.state('relaxed')).to.equal(false);
      expect(subParentB.state('relaxed')).to.equal(true);
      expect(childA.state('relaxed')).to.equal(true);
      expect(childB.state('relaxed')).to.equal(true);
      expect(subChildA.state('relaxed')).to.equal(true);
      return expect(subChildB.state('relaxed')).to.equal(false);
    });
    test("options.stateTriggers config objects can specify a 'force' property which will make them get attached even if they aren't used", function() {
      var divA, divB;
      divA = Dom.div({
        stateTriggers: {
          'happy': {
            on: 'happyON',
            off: 'happyOFF',
            force: true
          }
        }
      });
      divB = Dom.div({
        stateTriggers: {
          'happy': {
            on: 'happyON',
            off: 'happyOFF'
          }
        }
      });
      expect(divA.state('happy')).to.equal(false);
      expect(divB.state('happy')).to.equal(false);
      divA.raw.emitEvent('happyON');
      divB.raw.emitEvent('happyON');
      expect(divA.state('happy')).to.equal(true);
      expect(divB.state('happy')).to.equal(false);
      divB.state('happy', true);
      divA.raw.emitEvent('happyOFF');
      divB.raw.emitEvent('happyOFF');
      expect(divA.state('happy')).to.equal(false);
      return expect(divB.state('happy')).to.equal(true);
    });
    test("options.stateTriggers config objects can specify a 'bubbles' property which will cause the state to bubble to parents instead of cascade to children", function() {
      var childA, childB, parentA, parentB, subChildA, subChildB, subParentA, subParentB;
      parentA = Dom.section(null, subParentA = Dom.div(null, childA = Dom.div({
        stateTriggers: {
          'happy': {
            on: 'happyON',
            off: 'happyOFF',
            bubbles: true,
            force: true
          }
        }
      }, subChildA = Dom.div())));
      parentB = Dom.section(null, subParentB = Dom.div(null, childB = Dom.div({
        stateTriggers: {
          'happy': {
            on: 'happyON',
            off: 'happyOFF',
            force: true
          }
        }
      }, subChildB = Dom.div())));
      expect(parentA.state('happy')).to.equal(false);
      expect(parentB.state('happy')).to.equal(false);
      expect(subParentA.state('happy')).to.equal(false);
      expect(subParentB.state('happy')).to.equal(false);
      expect(childA.state('happy')).to.equal(false);
      expect(childB.state('happy')).to.equal(false);
      expect(subChildA.state('happy')).to.equal(false);
      expect(subChildB.state('happy')).to.equal(false);
      childA.raw.emitEvent('happyON');
      childB.raw.emitEvent('happyON');
      expect(parentA.state('happy')).to.equal(true);
      expect(parentB.state('happy')).to.equal(false);
      expect(subParentA.state('happy')).to.equal(true);
      expect(subParentB.state('happy')).to.equal(false);
      expect(childA.state('happy')).to.equal(true);
      expect(childB.state('happy')).to.equal(true);
      expect(subChildA.state('happy')).to.equal(false);
      expect(subChildB.state('happy')).to.equal(true);
      childA.raw.emitEvent('happyOFF');
      childB.raw.emitEvent('happyOFF');
      expect(parentA.state('happy')).to.equal(false);
      expect(parentB.state('happy')).to.equal(false);
      expect(subParentA.state('happy')).to.equal(false);
      expect(subParentB.state('happy')).to.equal(false);
      expect(childA.state('happy')).to.equal(false);
      expect(childB.state('happy')).to.equal(false);
      expect(subChildA.state('happy')).to.equal(false);
      return expect(subChildB.state('happy')).to.equal(false);
    });
    test("wrappers created for existing elements should attempt to resolve if its inserted into the DOM on init", function() {
      var divA, divA_, divB, divB_;
      divA_ = document.createElement('div');
      divB_ = document.createElement('div');
      sandbox.appendChild(divB_);
      divA = Dom(divA_);
      divB = Dom(divB_);
      divA_.style.height = '100px';
      divB_.style.height = '100px';
      expect(typeof divA.height).to.equal('number');
      expect(typeof divB.height).to.equal('number');
      expect(isNaN(divA.height)).to.be["true"];
      expect(isNaN(divB.height)).to.be["false"];
      return expect(divA.styleSafe('height')).to.equal('100px');
    });
    test("state-based text", function() {
      var divA, divB;
      divA = Dom([
        'div', null, [
          'text', {
            text: {
              $base: 'abc123',
              $happy: 'Happy',
              $relaxed: 'Relaxed'
            }
          }
        ]
      ]);
      divB = Dom([
        'div', null, [
          'text', {
            text: {
              $happy: 'Happy',
              $relaxed: 'Relaxed',
              '$relaxed+funny': 'Funny & Relaxed'
            }
          }
        ]
      ]);
      expect(divA.text).to.equal('abc123');
      expect(divB.text).to.equal('');
      divA.state('happy', true);
      divB.state('happy', true);
      expect(divA.text).to.equal('Happy');
      expect(divB.text).to.equal('Happy');
      divA.state('happy', false);
      divB.state('happy', false);
      expect(divA.text).to.equal('abc123');
      expect(divB.text).to.equal('');
      divA.state('relaxed', true);
      divB.state('relaxed', true);
      expect(divA.text).to.equal('Relaxed');
      expect(divB.text).to.equal('Relaxed');
      divA.state('happy', true);
      divB.state('happy', true);
      expect(divA.text).to.equal('Relaxed');
      expect(divB.text).to.equal('Relaxed');
      divA.state('relaxed', false);
      divB.state('relaxed', false);
      expect(divA.text).to.equal('Happy');
      expect(divB.text).to.equal('Happy');
      divB.state('relaxed', true);
      divB.state('funny', true);
      expect(divB.text).to.equal('Relaxed');
      divB.state('relaxed+funny', true);
      return expect(divB.text).to.equal('Funny & Relaxed');
    });
    return test("state changes will emit a private stateChange:<state> event", function() {
      var div, results;
      results = [];
      div = Dom.div({
        style: {
          color: 'white',
          opacity: 1,
          $happy: {
            color: 'black'
          }
        }
      });
      div.state('any', true);
      div.on('stateChange:happy', function(state) {
        return results.push(['happy', state]);
      });
      div.on('stateChange:relaxed', function(state) {
        return results.push(['relaxed', state]);
      });
      div.on('stateChange:arbitrary', function(state) {
        return results.push(['arbitrary', state]);
      });
      expect(results).to.deep.equal([]);
      div.state('happy', true);
      expect(results).to.deep.equal([['happy', true]]);
      div.state('happy', false);
      expect(results).to.deep.equal([['happy', true], ['happy', false]]);
      div.state('happy', true);
      expect(results).to.deep.equal([['happy', true], ['happy', false], ['happy', true]]);
      div.state('happy', true);
      expect(results).to.deep.equal([['happy', true], ['happy', false], ['happy', true]]);
      div.state('another', true);
      expect(results).to.deep.equal([['happy', true], ['happy', false], ['happy', true]]);
      div.state('relaxed', true);
      expect(results).to.deep.equal([['happy', true], ['happy', false], ['happy', true], ['relaxed', true]]);
      div.state('arbitrary', true);
      expect(results).to.deep.equal([['happy', true], ['happy', false], ['happy', true], ['relaxed', true], ['arbitrary', true]]);
      div.state('relaxed', true);
      return expect(results).to.deep.equal([['happy', true], ['happy', false], ['happy', true], ['relaxed', true], ['arbitrary', true]]);
    });
  });
  suite("Media Queries", function() {
    suiteTeardown(function() {
      return dimensions.restore();
    });
    suiteSetup(function() {
      var ref;
      if (!((ref = Object.getOwnPropertyDescriptor(window, 'innerWidth')) != null ? ref.configurable : void 0)) {
        return this.skip();
      }
    });
    test("Window dimensions", function() {
      var div;
      dimensions.simulate(1000, 1000);
      div = Dom.div({
        style: {
          position: 'relative',
          zIndex: 2,
          width: '300px',
          height: '300px',
          fontSize: '30px',
          lineHeight: '30px',
          '@window(orientation:landscape)': {
            fontWeight: 600
          },
          '@window(orientation:portrait)': {
            fontWeight: 700
          },
          '@window(max-width:800)': {
            zIndex: 3,
            width: '280px'
          },
          '@window(max-width:700, max-height:1000)': {
            zIndex: 4,
            width: '250px',
            height: '250px'
          },
          '@window(max-height:1000)': {
            fontSize: '25px'
          },
          '@window(min-width:900px)': {
            fontSize: '23px'
          },
          '@window(aspect-ratio:0.5)': {
            fontSize: '21px',
            lineHeight: '12px'
          },
          '@window(min-height:1200)': {
            fontSize: '20px'
          }
        }
      });
      div.appendTo(sandbox);
      expect(div.raw.style.zIndex).to.equal('2');
      expect(div.raw.style.width).to.equal('300px');
      expect(div.raw.style.height).to.equal('300px');
      expect(div.raw.style.fontSize).to.equal('23px');
      expect(div.raw.style.fontWeight).to.equal('700');
      dimensions.simulate(900);
      expect(div.raw.style.fontSize).to.equal('23px');
      dimensions.simulate(899);
      expect(div.raw.style.fontSize).to.equal('25px');
      dimensions.simulate(899, 1100);
      expect(div.raw.style.fontSize).to.equal('30px');
      dimensions.simulate(950);
      expect(div.raw.style.fontSize).to.equal('23px');
      dimensions.simulate(950, 1900);
      expect(div.raw.style.fontSize).to.equal('20px');
      expect(div.raw.style.lineHeight).to.equal('12px');
      dimensions.simulate(950, 1899);
      expect(div.raw.style.fontSize).to.equal('20px');
      expect(div.raw.style.lineHeight).to.equal('30px');
      dimensions.simulate(790);
      expect(div.raw.style.zIndex).to.equal('3');
      expect(div.raw.style.width).to.equal('280px');
      dimensions.simulate(810);
      expect(div.raw.style.zIndex).to.equal('2');
      expect(div.raw.style.width).to.equal('300px');
      dimensions.simulate(791);
      expect(div.raw.style.zIndex).to.equal('3');
      expect(div.raw.style.width).to.equal('280px');
      dimensions.simulate(701, 900);
      expect(div.raw.style.zIndex).to.equal('3');
      expect(div.raw.style.width).to.equal('280px');
      expect(div.raw.style.height).to.equal('300px');
      dimensions.simulate(700, 900);
      expect(div.raw.style.zIndex).to.equal('4');
      expect(div.raw.style.width).to.equal('250px');
      expect(div.raw.style.height).to.equal('250px');
      dimensions.simulate(700, 1001);
      expect(div.raw.style.zIndex).to.equal('3');
      expect(div.raw.style.width).to.equal('280px');
      expect(div.raw.style.height).to.equal('300px');
      dimensions.simulate(700, 1000);
      expect(div.raw.style.zIndex).to.equal('4');
      expect(div.raw.style.width).to.equal('250px');
      expect(div.raw.style.height).to.equal('250px');
      expect(div.raw.style.fontWeight).to.equal('700');
      dimensions.simulate(1100, 1000);
      expect(div.raw.style.fontWeight).to.equal('600');
      dimensions.simulate(1100, 1101);
      return expect(div.raw.style.fontWeight).to.equal('700');
    });
    test("Self dimensions/styles", function() {
      var div, parent, simulateParent;
      parent = Dom.div().appendTo(sandbox);
      simulateParent = function(width, height) {
        if (width) {
          parent.style('width', width);
        }
        if (height) {
          parent.style('height', height);
        }
        return dimensions.simulate();
      };
      div = Dom.div({
        style: {
          position: 'relative',
          zIndex: 2,
          top: '30px',
          width: '100%',
          height: '100%',
          fontSize: '30px',
          lineHeight: '30px',
          '@self(orientation:landscape)': {
            fontWeight: 600
          },
          '@self(orientation:portrait)': {
            fontWeight: 700
          },
          '@self(position:relative)': {
            top: '20px'
          },
          '@self(max-width:350)': {
            zIndex: 3,
            fontSize: '33px'
          },
          '@self(max-width:500, min-height:400)': {
            zIndex: 4,
            fontSize: '27px',
            lineHeight: '37px'
          },
          '@self(zIndex:4)': {
            lineHeight: '15px'
          },
          '@self(min-zIndex:6)': {
            opacity: '0'
          },
          '@self(max-fontSize:20)': {
            lineHeight: '19px'
          },
          '@self(min-width:600px)': {
            fontSize: '19px'
          },
          '@self(aspect-ratio:2.25)': {
            fontSize: '21px',
            lineHeight: '12px'
          },
          '@self(min-height:700)': {
            fontSize: '40px'
          }
        }
      });
      simulateParent(400, 300);
      div.appendTo(parent);
      expect(div.style('zIndex')).to.equal('2');
      expect(div.style('width')).to.equal('400px');
      expect(div.style('height')).to.equal('300px');
      expect(div.style('fontSize')).to.equal('30px');
      expect(div.style('lineHeight')).to.equal('30px');
      expect(div.style('fontWeight')).to.equal('600');
      expect(div.style('top')).to.equal('20px');
      simulateParent(349, 420);
      expect(div.style('zIndex')).to.equal('4');
      expect(div.style('fontSize')).to.equal('27px');
      expect(div.style('lineHeight')).to.equal('15px');
      simulateParent(349, 399);
      expect(div.style('zIndex')).to.equal('3');
      expect(div.style('fontSize')).to.equal('33px');
      simulateParent(349, 401);
      expect(div.style('zIndex')).to.equal('4');
      expect(div.style('fontSize')).to.equal('27px');
      expect(div.style('lineHeight')).to.equal('15px');
      expect(div.style('opacity')).to.equal('1');
      div.style('zIndex', 5);
      dimensions.simulate();
      expect(div.style('opacity')).to.equal('1');
      expect(div.style('lineHeight')).to.equal('37px');
      div.style('zIndex', 17);
      expect(div.style('opacity')).to.equal('1');
      dimensions.simulate();
      expect(div.style('opacity')).to.equal('0');
      simulateParent(900);
      expect(div.style('fontSize')).to.equal('19px');
      expect(div.style('lineHeight')).to.equal('30px');
      simulateParent(900);
      expect(div.style('lineHeight')).to.equal('19px');
      simulateParent(900, 400);
      expect(div.style('fontSize')).to.equal('21px');
      expect(div.style('lineHeight')).to.equal('12px');
      simulateParent(2025, 900);
      expect(div.style('fontSize')).to.equal('40px');
      expect(div.style('lineHeight')).to.equal('12px');
      expect(div.raw.style.fontWeight).to.equal('600');
      simulateParent(2025, 2026);
      return expect(div.raw.style.fontWeight).to.equal('700');
    });
    test("Parent dimensions/styles", function() {
      var div, parent, simulateParent;
      parent = Dom.div({
        style: {
          position: 'absolute'
        }
      }).appendTo(sandbox);
      simulateParent = function(width, height) {
        if (width) {
          parent.style('width', width);
        }
        if (height) {
          parent.style('height', height);
        }
        return dimensions.simulate();
      };
      div = Dom.div({
        style: {
          position: 'relative',
          zIndex: 2,
          top: '30px',
          width: '400px',
          height: '300px',
          fontSize: '30px',
          lineHeight: '30px',
          '@parent(orientation:landscape)': {
            fontWeight: 600
          },
          '@parent(orientation:portrait)': {
            fontWeight: 700
          },
          '@parent(position:relative)': {
            top: '20px'
          },
          '@parent(max-width:350)': {
            zIndex: 3,
            fontSize: '33px'
          },
          '@parent(max-width:500, min-height:400)': {
            zIndex: 4,
            fontSize: '27px',
            lineHeight: '37px'
          },
          '@parent(zIndex:7)': {
            lineHeight: '15px'
          }
        }
      });
      simulateParent(400, 300);
      div.appendTo(parent);
      expect(div.style('zIndex')).to.equal('2');
      expect(div.style('width')).to.equal('400px');
      expect(div.style('height')).to.equal('300px');
      expect(div.style('fontSize')).to.equal('30px');
      expect(div.style('lineHeight')).to.equal('30px');
      expect(div.style('fontWeight')).to.equal('600');
      expect(div.style('top')).to.equal('30px');
      parent.style('position', 'relative');
      expect(div.style('top')).to.equal('30px');
      simulateParent();
      expect(div.style('top')).to.equal('20px');
      simulateParent(349, 420);
      expect(div.style('zIndex')).to.equal('4');
      expect(div.style('fontSize')).to.equal('27px');
      expect(div.style('lineHeight')).to.equal('37px');
      simulateParent(349, 399);
      expect(div.style('zIndex')).to.equal('3');
      expect(div.style('fontSize')).to.equal('33px');
      parent.style('zIndex', '7');
      simulateParent(349, 401);
      expect(div.style('zIndex')).to.equal('4');
      expect(div.style('fontSize')).to.equal('27px');
      expect(div.style('lineHeight')).to.equal('15px');
      return expect(div.style('opacity')).to.equal('1');
    });
    test("Parent Ref dimensions/styles", function() {
      var div, parent;
      parent = Dom.div({
        ref: 'abc'
      }, Dom.div({
        id: 'def'
      }, Dom.div({
        ref: 'ghi'
      }))).appendTo(sandbox);
      div = Dom.div({
        style: {
          position: 'relative',
          zIndex: 2,
          top: '30px',
          width: '400px',
          height: '300px',
          fontSize: '30px',
          lineHeight: '30px',
          '@#abc(orientation:landscape)': {
            fontWeight: 600
          },
          '@#abc(orientation:portrait)': {
            fontWeight: 500
          },
          '@#def(position:relative)': {
            top: '20px'
          },
          '@#def(max-width:350)': {
            zIndex: 3,
            fontSize: '33px'
          },
          '@#ghi(max-width:500, min-height:400)': {
            zIndex: 4,
            fontSize: '27px',
            lineHeight: '37px'
          },
          '@#abc(zIndex:7)': {
            lineHeight: '15px'
          }
        }
      });
      parent.style({
        width: 400,
        height: 300
      });
      parent.child.def.style({
        width: 400,
        height: 300
      });
      parent.child.ghi.style({
        width: 400,
        height: 300
      });
      div.appendTo(parent.child.ghi);
      expect(div.style('zIndex')).to.equal('2');
      expect(div.style('width')).to.equal('400px');
      expect(div.style('height')).to.equal('300px');
      expect(div.style('fontSize')).to.equal('30px');
      expect(div.style('lineHeight')).to.equal('30px');
      expect(div.style('fontWeight')).to.equal('600');
      expect(div.style('top')).to.equal('30px');
      parent.style({
        width: 400,
        height: 900,
        position: 'relative'
      });
      dimensions.simulate();
      expect(div.style('fontWeight')).to.equal('500');
      expect(div.style('top')).to.equal('30px');
      parent.child.def.style({
        position: 'relative'
      });
      expect(div.style('top')).to.equal('30px');
      dimensions.simulate();
      expect(div.style('top')).to.equal('20px');
      parent.child.def.style({
        width: 349,
        height: 420
      });
      dimensions.simulate();
      expect(div.style('zIndex')).to.equal('3');
      expect(div.style('fontSize')).to.equal('33px');
      parent.child.ghi.style({
        width: 450,
        height: 420
      });
      dimensions.simulate();
      expect(div.style('zIndex')).to.equal('4');
      expect(div.style('fontSize')).to.equal('27px');
      expect(div.style('lineHeight')).to.equal('37px');
      parent.style({
        zIndex: 7
      });
      dimensions.simulate();
      expect(div.style('zIndex')).to.equal('4');
      expect(div.style('fontSize')).to.equal('27px');
      expect(div.style('lineHeight')).to.equal('15px');
      return expect(div.style('opacity')).to.equal('1');
    });
    return test("Nested media queries", function() {
      var div;
      dimensions.simulate(1000, 900);
      div = Dom.div({
        style: {
          zIndex: 2,
          $happy: {
            fontWeight: 500,
            '@window(orientation:landscape)': {
              fontWeight: 600
            }
          },
          '@window(orientation:portrait)': {
            $relaxed: {
              fontWeight: 700
            }
          }
        }
      });
      div.appendTo(sandbox);
      expect(div.raw.style.fontWeight).to.equal('');
      div.state('happy', true);
      expect(div.raw.style.fontWeight).to.equal('600');
      dimensions.simulate(900, 1000);
      expect(div.raw.style.fontWeight).to.equal('500');
      dimensions.simulate(1000, 900);
      expect(div.raw.style.fontWeight).to.equal('600');
      div.state('relaxed', true);
      expect(div.raw.style.fontWeight).to.equal('600');
      dimensions.simulate(900, 1000);
      expect(div.raw.style.fontWeight).to.equal('700');
      dimensions.simulate(1000, 900);
      return expect(div.raw.style.fontWeight).to.equal('600');
    });
  });
  suite("Traversal", function() {
    test("Children", function() {
      var comment, div, div$, spanA, spanB, text;
      div = Dom.div(null, Dom.div(), 'Some Text');
      expect(div.children.length).to.equal(2);
      expect(div.el.childNodes.length).to.equal(2);
      div.append(Dom.span());
      expect(div.children.length).to.equal(3);
      expect(div.el.childNodes.length).to.equal(3);
      div.el.appendChild(document.createElement('div'));
      expect(div.children.length).to.equal(4);
      expect(div.el.childNodes.length).to.equal(4);
      if (typeof window.Comment === 'function') {
        div = document.createElement('div');
        spanA = document.createElement('span');
        spanB = document.createElement('span');
        text = document.createTextNode('someTextNode');
        comment = new Comment('someCommentNode');
        div.appendChild(spanA);
        div.appendChild(comment);
        div.appendChild(spanB);
        div.appendChild(text);
        expect(div.childNodes.length).to.equal(4);
        expect(div.children.length).to.equal(2);
        div$ = Dom(div);
        expect(div$.children.length).to.equal(3);
        expect(div$.children[0].raw).to.equal(spanA);
        expect(div$.children[1].raw).to.equal(spanB);
        return expect(div$.children[2].raw).to.equal(text);
      }
    });
    test("Parent", function() {
      var A, B, C;
      A = Dom.div(null, Dom.div(), 'Some Text');
      B = Dom.div();
      C = Dom.div();
      expect(A.parent).to.equal(void 0);
      expect(A.children[0].parent).to.equal(A);
      expect(A.children[0].el.parentNode).to.equal(A.el);
      B.append(A);
      expect(A.parent).to.equal(B);
      expect(A.children[0].parent).to.equal(A);
      expect(A.children[0].el.parentNode).to.equal(A.el);
      expect(B.children.length).to.equal(1);
      expect(B.children[0]).to.equal(A);
      C.append(A);
      expect(A.parent).to.equal(C);
      expect(A.children[0].parent).to.equal(A);
      expect(A.children[0].el.parentNode).to.equal(A.el);
      expect(B.children.length).to.equal(0);
      return expect(C.children[0]).to.equal(A);
    });
    test("Parents", function() {
      var A, B, C;
      A = Dom.div().appendTo(sandbox);
      B = Dom.div().appendTo(A);
      C = Dom.div().appendTo(B);
      expect(A.parent.el).to.equal(sandbox);
      expect(B.parent).to.equal(A);
      expect(C.parent).to.equal(B);
      expect(A.parents.length).to.equal(B.parents.length - 1);
      expect(B.parents.length).to.equal(C.parents.length - 1);
      expect(B.parents[0]).to.equal(A);
      expect(C.parents[0]).to.equal(B);
      expect(C.parents.length).to.equal(5);
      return expect(C.parents.slice(-1)[0].el).to.equal(document.documentElement);
    });
    test("Parents Until", function() {
      var A, B, C, D;
      A = Dom.section();
      B = Dom.div().appendTo(A);
      C = Dom.div().appendTo(B);
      D = Dom.span().appendTo(C);
      expect(D.parents).to.eql([C, B, A]);
      expect(D.parentsUntil(null)).to.eql([C, B, A]);
      expect(D.parentsUntil()).to.eql([C, B, A]);
      expect(D.parentsUntil('someString')).to.eql([C, B, A]);
      expect(D.parentsUntil(function(el) {
        return el === A;
      })).to.eql([C, B]);
      expect(D.parentsUntil(function(el) {
        return el === B;
      })).to.eql([C]);
      return expect(D.parentsUntil(function(el) {
        return false;
      })).to.eql([C, B, A]);
    });
    test("Parent Matching", function() {
      var A, B, C, D;
      A = Dom.section();
      B = Dom.div().appendTo(A);
      C = Dom.div().appendTo(B);
      D = Dom.span().appendTo(C);
      expect(D.parents).to.eql([C, B, A]);
      expect(D.parentMatching(null)).to.equal(void 0);
      expect(D.parentMatching(B)).to.equal(void 0);
      expect(D.parentMatching('string')).to.equal(void 0);
      expect(D.parentMatching(function() {
        return false;
      })).to.equal(void 0);
      expect(D.parentMatching(function(el) {
        return el === B;
      })).to.equal(B);
      expect(D.parentMatching(function(el) {
        return el === A;
      })).to.equal(A);
      expect(D.parentMatching(function(el) {
        return el === C;
      })).to.equal(C);
      A.appendTo(sandbox);
      return expect(D.parentMatching(function(el) {
        return el.raw === document.documentElement;
      })).to.equal(Dom(document.documentElement));
    });
    test("Next", function() {
      var A, B, C, D, E, div;
      div = Dom.div(null, A = Dom.div(), B = Dom.div(), C = Dom.div(), D = Dom.div(), E = Dom.div());
      expect(A.next).to.equal(B);
      expect(C.next).to.equal(D);
      expect(E.next).to.equal(void 0);
      return expect(B.nextAll).to.eql([C, D, E]);
    });
    test("Prev", function() {
      var A, B, C, D, E, div;
      div = Dom.div(null, A = Dom.div(), B = Dom.div(), C = Dom.div(), D = Dom.div(), E = Dom.div());
      expect(E.prev).to.equal(D);
      expect(C.prev).to.equal(B);
      expect(A.prev).to.equal(void 0);
      return expect(D.prevAll).to.eql([C, B, A]);
    });
    test("Siblings", function() {
      var A, B, C, D, E, div;
      div = Dom.div(null, A = Dom.div(), B = Dom.div(), C = Dom.div(), D = Dom.div(), E = Dom.div());
      expect(C.siblings).to.eql(C.prevAll.reverse().concat(C.nextAll));
      return expect(C.siblings).to.eql([A, B, D, E]);
    });
    test("Child (by ref)", function() {
      var divA, divB, newChild, newChildChild, newParent, sandBox;
      divA = Dom.div({
        id: 'divA'
      }, Dom.div({
        id: 'childA'
      }, Dom.span({
        ref: 'childA_1'
      }), Dom.div({
        ref: 'childA_2',
        id: 'childA_2'
      })), Dom.div({}, Dom.span({
        ref: 'childB_1'
      }), Dom.text({
        id: 'childB_2'
      }, 'The Text')));
      divB = Dom.template([
        'div', {
          id: 'divB'
        }, [
          'div', {
            id: 'childA',
            style: {
              color: 'pink'
            }
          }, [
            'span', {
              ref: 'childA_1'
            }
          ], [
            'div', {
              ref: 'childA_3',
              id: 'childA_2'
            }
          ]
        ], [
          'div', null, [
            'span', {
              ref: 'childB_1'
            }
          ]
        ]
      ]).spawn();
      expect(divA.child.childA).to.equal(divA.children[0]);
      expect(divA.child.childA_1).to.equal(divA.children[0].children[0]);
      expect(divA.child.childA_2).to.equal(divA.children[0].children[1]);
      expect(divA.child.childA_3).to.equal(void 0);
      expect(divA.child.childB).to.equal(void 0);
      expect(divA.child.childB_1).to.equal(divA.children[1].children[0]);
      expect(divA.child.childB_2).to.equal(divA.children[1].children[1]);
      expect(divA.child.childB_2.type).to.equal('text');
      expect(divB.child.childA).to.equal(divB.children[0]);
      expect(divB.child.childA_1).to.equal(divB.children[0].children[0]);
      expect(divB.child.childA_2).to.equal(divB.children[0].children[1]);
      expect(divB.child.childA_3).to.equal(void 0);
      expect(divB.child.childB).to.equal(void 0);
      expect(divB.child.childB_1).to.equal(divB.children[1].children[0]);
      expect(divB.child.childB_2).to.equal(divB.children[1].children[1]);
      expect(divB.child.childA.style('color')).to.equal('');
      expect(divB.child.childA.styleSafe('color')).not.to.equal('');
      expect(divB.child.childA.styleSafe('color').length >= 4).to.be["true"];
      expect(divA.child.childA.raw.getAttribute('id')).to.equal('childA');
      expect(divA.child.childA.raw.getAttribute('data-ref')).to.equal('childA');
      expect(divA.child.childA_1.raw.getAttribute('id')).to.equal(null);
      expect(divA.child.childA_1.raw.getAttribute('data-ref')).to.equal('childA_1');
      expect(divA.child.childA_2.raw.getAttribute('id')).to.equal('childA_2');
      expect(divA.child.childA_2.raw.getAttribute('data-ref')).to.equal('childA_2');
      sandBox = Dom(sandbox);
      expect(sandBox.child.childA).to.equal(void 0);
      expect(sandBox.child.childB_2).to.equal(void 0);
      expect(sandBox.child.divA).to.equal(void 0);
      sandBox.append(divA);
      expect(sandBox.child.childA).to.equal(void 0);
      expect(sandBox.child.childB_2).to.equal(void 0);
      expect(sandBox.child.divA).to.equal(void 0);
      expect(sandBox.childf.divA).to.equal(divA);
      expect(sandBox.child.childA).to.equal(divA.children[0]);
      expect(sandBox.child.childB_2).to.equal(divA.children[1].children[1]);
      expect(sandBox.child.divA).to.equal(divA);
      newChild = Dom.div({
        ref: 'newChild'
      });
      newChildChild = Dom.div({
        ref: 'newChildChild'
      });
      expect(newChild.child.newChildChild).to.equal(void 0);
      expect(newChildChild.child.newChildChild).to.equal(newChildChild);
      expect(Object.keys(newChildChild.child).length).to.equal(1);
      newChildChild.appendTo(newChild);
      expect(newChild.child.newChildChild).to.equal(void 0);
      expect(newChild.childf.newChildChild).to.equal(newChildChild);
      expect(newChild.child.newChildChild).to.equal(newChildChild);
      expect(Object.keys(newChildChild.child).length).to.equal(1);
      newParent = Dom.div({
        ref: 'newParent'
      });
      newChild.appendTo(newParent);
      return expect(newParent.child.newChildChild).to.equal(newChildChild);
    });
    test("Index", function() {
      var childA, childB, childC, childD, childE, childF, section;
      section = Dom.section(null, childA = Dom.div(), childB = Dom.div(), childC = Dom.span(), childD = Dom.text(), childE = Dom.span(), childF = Dom.div());
      expect(childB.index).to.equal(1);
      expect(childD.index).to.equal(3);
      expect(childF.index).to.equal(5);
      childC.detach();
      expect(childB.index).to.equal(1);
      expect(childD.index).to.equal(2);
      expect(childF.index).to.equal(4);
      return expect(childC.index).to.equal(null);
    });
    test("Index (by type)", function() {
      var childA, childB, childC, childD, childE, childF, childG, section;
      section = Dom.section(null, childA = Dom.div(), childB = Dom.div(), childC = Dom.span(), childD = Dom.text(), childE = Dom.span(), childF = Dom.text(), childG = Dom.div());
      expect(childB.indexType).to.equal(1);
      expect(childD.indexType).to.equal(0);
      expect(childF.indexType).to.equal(1);
      expect(childG.indexType).to.equal(2);
      childC.detach();
      expect(childB.indexType).to.equal(1);
      expect(childD.indexType).to.equal(0);
      expect(childF.indexType).to.equal(1);
      expect(childG.indexType).to.equal(2);
      childA.detach();
      expect(childB.indexType).to.equal(0);
      expect(childD.indexType).to.equal(0);
      expect(childF.indexType).to.equal(1);
      expect(childG.indexType).to.equal(1);
      expect(childA.indexType).to.equal(null);
      return expect(childC.indexType).to.equal(null);
    });
    test("Index (by ref)", function() {
      var childA, childB, childC, childD, childE, childF, childG, section;
      section = Dom.section(null, childA = Dom.div({
        ref: 'abc'
      }), childB = Dom.div({
        ref: 'abc'
      }), childC = Dom.span({
        ref: 'def'
      }), childD = Dom.text({
        ref: 'abc'
      }), childE = Dom.span({
        ref: 'abc'
      }), childF = Dom.text({
        ref: 'def'
      }), childG = Dom.div({
        ref: 'abc'
      }));
      expect(childB.indexRef).to.equal(1);
      expect(childD.indexRef).to.equal(2);
      expect(childF.indexRef).to.equal(1);
      expect(childG.indexRef).to.equal(4);
      childC.detach();
      expect(childB.indexRef).to.equal(1);
      expect(childD.indexRef).to.equal(2);
      expect(childF.indexRef).to.equal(0);
      expect(childG.indexRef).to.equal(4);
      childA.detach();
      expect(childB.indexRef).to.equal(0);
      expect(childD.indexRef).to.equal(1);
      expect(childF.indexRef).to.equal(0);
      expect(childG.indexRef).to.equal(3);
      expect(childA.indexRef).to.equal(null);
      return expect(childC.indexRef).to.equal(null);
    });
    test("Query", function() {
      var div, sandBox;
      div = Dom.template([
        'div', {
          "class": 'div-one',
          attrs: {
            name: 'abc123'
          }
        }, [
          'div', {
            "class": 'childA',
            style: {
              color: 'pink'
            }
          }, [
            'span', {
              "class": 'childA_1'
            }
          ], [
            'div', {
              "class": 'childA_1'
            }
          ], [
            'span', {
              "class": 'childA_1'
            }
          ], [
            'div', {
              "class": 'childA_2'
            }
          ]
        ], [
          'div', {
            className: 'childB'
          }, [
            'span', {
              "class": 'childB_1'
            }
          ]
        ], [
          'section', {
            className: 'childB'
          }, [
            'span', {
              "class": 'childB_1'
            }
          ]
        ]
      ]).spawn().appendTo(sandBox = Dom(sandbox));
      expect(div.query('.childA')).to.equal(div.children[0]);
      expect(div.query('.childB')).to.equal(div.children[1]);
      expect(div.query('.childB_1')).to.equal(div.children[1].children[0]);
      expect(div.query('.childA_1')).to.equal(div.children[0].children[0]);
      expect(div.query('.childA_2')).to.equal(div.children[0].children[3]);
      expect(sandBox.query('.div-one')).to.equal(div);
      expect(sandBox.query('.childB_1')).to.equal(div.children[1].children[0]);
      expect(sandBox.query('div[name="abc123"]')).to.equal(div);
      return expect(sandBox.query('span[name="abc123"]')).to.equal(void 0);
    });
    return test("QueryAll", function() {
      var div, sandBox;
      div = Dom.template([
        'div', {
          "class": 'div-one',
          attrs: {
            name: 'abc123'
          }
        }, [
          'div', {
            "class": 'childA',
            style: {
              color: 'pink'
            }
          }, [
            'span', {
              "class": 'childA_1'
            }
          ], [
            'div', {
              "class": 'childA_1'
            }
          ], [
            'span', {
              "class": 'childA_1'
            }
          ], [
            'div', {
              "class": 'childA_2'
            }
          ]
        ], [
          'div', {
            className: 'childB'
          }, [
            'span', {
              "class": 'childB_1'
            }
          ]
        ], [
          'section', {
            className: 'childB'
          }, [
            'span', {
              "class": 'childB_1'
            }
          ]
        ]
      ]).spawn().appendTo(sandBox = Dom(sandbox));
      expect(div.queryAll('.childA').elements).to.eql([div.children[0]]);
      expect(div.queryAll('.childB').elements).to.eql([div.children[1], div.children[2]]);
      expect(div.queryAll('.childB_1').elements).to.eql([div.children[1].children[0], div.children[2].children[0]]);
      expect(div.queryAll('.childA_1').elements).to.eql([div.children[0].children[0], div.children[0].children[1], div.children[0].children[2]]);
      expect(div.queryAll('.childA_2').elements).to.eql([div.children[0].children[3]]);
      expect(sandBox.queryAll('.div-one').elements).to.eql([div]);
      expect(sandBox.queryAll('.childB_1').elements).to.eql([div.children[1].children[0], div.children[2].children[0]]);
      expect(sandBox.queryAll('div[name="abc123"]').elements).to.eql([div]);
      expect(sandBox.queryAll('span[name="abc123"]').elements).to.eql([]);
      return expect(div.text).to.equal('');
    });
  });
  suite("Manipulation", function() {
    test(".append()", function() {
      var A, B, C, D, MainA, MainB;
      A = Dom.div();
      B = Dom.div();
      C = Dom.text();
      D = Dom.div();
      MainA = Dom.div(null, A, B, C, D);
      MainB = Dom.div();
      checkChildStructure(MainA)(A, B, C, D);
      checkChildStructure(MainB)();
      MainB.append(A);
      checkChildStructure(MainA)(B, C, D);
      checkChildStructure(MainB)(A);
      C.appendTo(MainB);
      checkChildStructure(MainA)(B, D);
      return checkChildStructure(MainB)(A, C);
    });
    test(".prepend()", function() {
      var A, B, C, D, MainA, MainB;
      A = Dom.div();
      B = Dom.div();
      C = Dom.text();
      D = Dom.div();
      MainA = Dom.div(null, A, B, C, D);
      MainB = Dom.div();
      checkChildStructure(MainA)(A, B, C, D);
      checkChildStructure(MainB)();
      MainB.prepend(A);
      checkChildStructure(MainA)(B, C, D);
      checkChildStructure(MainB)(A);
      C.prependTo(MainB);
      checkChildStructure(MainA)(B, D);
      return checkChildStructure(MainB)(C, A);
    });
    test(".after()", function() {
      var A, B, C, D, MainA, MainB;
      A = Dom.div();
      B = Dom.div();
      C = Dom.text();
      D = Dom.div();
      MainA = Dom.div(null, A, B, C, D);
      MainB = Dom.div();
      checkChildStructure(MainA)(A, B, C, D);
      checkChildStructure(MainB)();
      MainB.append(B);
      B.after(A);
      checkChildStructure(MainA)(C, D);
      checkChildStructure(MainB)(B, A);
      C.insertAfter(B);
      checkChildStructure(MainA)(D);
      return checkChildStructure(MainB)(B, C, A);
    });
    test(".before()", function() {
      var A, B, C, D, MainA, MainB;
      A = Dom.div();
      B = Dom.div();
      C = Dom.text();
      D = Dom.div();
      MainA = Dom.div(null, A, B, C, D);
      MainB = Dom.div();
      checkChildStructure(MainA)(A, B, C, D);
      checkChildStructure(MainB)();
      MainB.append(B);
      B.before(A);
      checkChildStructure(MainA)(C, D);
      checkChildStructure(MainB)(A, B);
      C.insertBefore(B);
      checkChildStructure(MainA)(D);
      return checkChildStructure(MainB)(A, C, B);
    });
    test(".detach()", function() {
      var div, emitCount;
      emitCount = 0;
      div = Dom.div(null, 'Inner Text Here');
      div.on('beep', function() {
        return emitCount++;
      });
      div.state('happy', true);
      div.state('relaxed', true);
      expect(div.parent).not.to.exist;
      expect(emitCount).to.equal(0);
      expect(div.state('happy')).to.be["true"];
      expect(div.state('relaxed')).to.be["true"];
      div.appendTo(sandbox);
      div.emit('beep');
      expect(sandbox.children.length).to.equal(1);
      expect(div.parent.el).to.equal(sandbox);
      expect(emitCount).to.equal(1);
      expect(div.state('happy')).to.be["true"];
      expect(div.state('relaxed')).to.be["true"];
      div.detach();
      div.emit('beep');
      expect(sandbox.children.length).to.equal(0);
      expect(div.parent).not.to.exist;
      expect(emitCount).to.equal(2);
      expect(div.state('happy')).to.be["true"];
      return expect(div.state('relaxed')).to.be["true"];
    });
    test(".remove()", function() {
      var div, emitCount;
      emitCount = 0;
      div = Dom.div(null, 'Inner Text Here');
      div.on('beep', function() {
        return emitCount++;
      });
      div.state('happy', true);
      div.state('relaxed', true);
      expect(div.parent).not.to.exist;
      expect(emitCount).to.equal(0);
      expect(div.state('happy')).to.be["true"];
      expect(div.state('relaxed')).to.be["true"];
      div.appendTo(sandbox);
      div.emit('beep');
      expect(sandbox.children.length).to.equal(1);
      expect(div.parent.el).to.equal(sandbox);
      expect(emitCount).to.equal(1);
      expect(div.state('happy')).to.be["true"];
      expect(div.state('relaxed')).to.be["true"];
      div.remove();
      div.emit('beep');
      expect(sandbox.children.length).to.equal(0);
      expect(div.parent).not.to.exist;
      expect(emitCount).to.equal(1);
      expect(div.state('happy')).to.be["false"];
      return expect(div.state('relaxed')).to.be["false"];
    });
    test(".empty()", function() {
      var A, B, Main;
      Main = Dom.div();
      A = Dom.div().appendTo(Main);
      B = Dom.div().appendTo(Main);
      A.state('happy', true);
      B.state('happy', true);
      checkChildStructure(Main)(A, B);
      expect(A.state('happy')).to.be["true"];
      expect(B.state('happy')).to.be["true"];
      Main.empty();
      checkChildStructure(Main)();
      expect(A.parent).to.equal(void 0);
      expect(B.parent).to.equal(void 0);
      expect(A.state('happy')).to.be["true"];
      return expect(B.state('happy')).to.be["true"];
    });
    test(".wrap()", function() {
      var A, B, C, Main, wrapA, wrapB, wrapC;
      Main = Dom.div();
      A = Dom.div().appendTo(Main);
      B = Dom.div().appendTo(Main);
      C = Dom.div();
      wrapA = Dom.section();
      wrapB = Dom.section();
      wrapC = Dom.section();
      A.state('happy', true);
      B.state('happy', true);
      C.state('happy', true);
      wrapA.state('relaxed', true);
      wrapB.state('relaxed', true);
      wrapC.state('relaxed', true);
      checkChildStructure(Main)(A, B);
      A.wrap(wrapA);
      checkChildStructure(Main)(wrapA, B);
      checkChildStructure(wrapA)(A);
      B.wrap(wrapB);
      checkChildStructure(Main)(wrapA, wrapB);
      checkChildStructure(wrapA)(A);
      checkChildStructure(wrapB)(B);
      B.wrap(wrapA);
      checkChildStructure(Main)(wrapA, wrapB);
      checkChildStructure(wrapA)(A, B);
      checkChildStructure(wrapB)();
      wrapC.appendTo(wrapB);
      C.wrap(wrapC);
      C.wrap();
      checkChildStructure(Main)(wrapA, wrapB);
      checkChildStructure(wrapA)(A, B);
      checkChildStructure(wrapB)(wrapC);
      checkChildStructure(wrapC)(C);
      C.wrap(C);
      checkChildStructure(Main)(wrapA, wrapB);
      checkChildStructure(wrapA)(A, B);
      checkChildStructure(wrapB)(wrapC);
      checkChildStructure(wrapC)(C);
      expect(A.state('happy')).to.be["true"];
      expect(B.state('happy')).to.be["true"];
      expect(C.state('happy')).to.be["true"];
      expect(wrapA.state('relaxed')).to.be["true"];
      expect(wrapB.state('relaxed')).to.be["true"];
      return expect(wrapC.state('relaxed')).to.be["true"];
    });
    test(".unwrap()", function() {
      var A, B, C, D, E, Main;
      Main = Dom.div();
      A = Dom.div().prependTo(Main);
      B = Dom.div().appendTo(A);
      C = Dom.div().appendTo(A);
      D = Dom.div().appendTo(C);
      E = Dom.div().appendTo(D);
      A.state('happy', true);
      B.state('happy', true);
      C.state('happy', true);
      D.state('happy', true);
      E.state('happy', true);
      checkChildStructure(Main)(A);
      checkChildStructure(A)(B, C);
      checkChildStructure(B)();
      checkChildStructure(C)(D);
      checkChildStructure(D)(E);
      E.unwrap();
      checkChildStructure(Main)(A);
      checkChildStructure(A)(B, C);
      checkChildStructure(B)();
      checkChildStructure(C)(E);
      checkChildStructure(D)();
      B.unwrap();
      checkChildStructure(Main)(B, C);
      checkChildStructure(A)();
      checkChildStructure(B)();
      checkChildStructure(C)(E);
      checkChildStructure(D)();
      E.unwrap();
      checkChildStructure(Main)(B, E);
      checkChildStructure(A)();
      checkChildStructure(B)();
      checkChildStructure(C)();
      checkChildStructure(D)();
      A.insertAfter(B);
      C.appendTo(A);
      D.appendTo(A);
      checkChildStructure(Main)(B, A, E);
      checkChildStructure(A)(C, D);
      checkChildStructure(B)();
      checkChildStructure(C)();
      checkChildStructure(D)();
      D.unwrap();
      checkChildStructure(Main)(B, C, D, E);
      checkChildStructure(A)();
      checkChildStructure(B)();
      checkChildStructure(C)();
      return checkChildStructure(D)();
    });
    test(".replace()", function() {
      var A, B, C, D, E, Main;
      Main = Dom.div();
      A = Dom.div().appendTo(Main);
      B = Dom.div().appendTo(Main);
      C = Dom.div().appendTo(A);
      D = Dom.div().appendTo(A);
      E = Dom.div().appendTo(D);
      A.replace();
      E.replace();
      checkChildStructure(Main)(A, B);
      checkChildStructure(A)(C, D);
      checkChildStructure(B)();
      checkChildStructure(C)();
      checkChildStructure(D)(E);
      C.replace(E).appendTo(B);
      checkChildStructure(Main)(A, B);
      checkChildStructure(A)(E, D);
      checkChildStructure(B)(C);
      checkChildStructure(C)();
      checkChildStructure(D)();
      D.replace(E);
      checkChildStructure(Main)(A, B);
      checkChildStructure(A)(E);
      checkChildStructure(B)(C);
      checkChildStructure(C)();
      checkChildStructure(D)();
      B.replace(C);
      checkChildStructure(Main)(A, C);
      checkChildStructure(A)(E);
      checkChildStructure(B)();
      checkChildStructure(C)();
      checkChildStructure(D)();
      A.replace(D);
      checkChildStructure(Main)(D, C);
      checkChildStructure(A)(E);
      checkChildStructure(B)();
      checkChildStructure(C)();
      checkChildStructure(D)();
      B.replace(D);
      checkChildStructure(Main)(C);
      checkChildStructure(A)(E);
      checkChildStructure(B)();
      checkChildStructure(C)();
      return checkChildStructure(D)();
    });
    test(".clone()", function() {
      var A, B, childA, childB, emitCount, opts, sandBox;
      emitCount = 0;
      sandBox = Dom(sandbox);
      opts = {
        style: {
          $base: {
            width: '34px'
          },
          $happy: {
            height: '99px'
          },
          $relaxed: {
            opacity: '0.5'
          }
        }
      };
      A = Dom.div(opts, 'Some Inner Text').appendTo(sandbox);
      A.state('happy', true);
      A.on('privateEvent', function() {
        return emitCount++;
      });
      childA = Dom.div().appendTo(A);
      childB = Dom.span().appendTo(A);
      B = A.clone();
      A.state('relaxed', true);
      A.emit('privateEvent');
      expect(emitCount).to.equal(1);
      expect(A.parent).to.equal(sandBox);
      expect(A.css('width')).to.equal('34px');
      expect(A.css('height')).to.equal('99px');
      expect(A.css('opacity')).to.equal('0.5');
      expect(A.siblings.length).to.equal(0);
      expect(A.children.length).to.equal(3);
      expect(A.children[0].el.textContent).to.equal('Some Inner Text');
      expect(A.children[1]).to.equal(childA);
      expect(A.children[2]).to.equal(childB);
      expect(B).not.to.equal(A);
      expect(B.parent).to.equal(void 0);
      sandBox.append(B);
      expect(B.parent).to.equal(sandBox);
      expect(B.css('width')).to.equal('34px');
      expect(B.css('height')).to.equal('99px');
      expect(B.css('opacity')).to.equal('1');
      expect(B.siblings.length).to.equal(1);
      expect(B.children.length).to.equal(3);
      expect(B.children[0].el.textContent).to.equal('Some Inner Text');
      expect(B.children[0]).not.to.equal(A.children[0]);
      expect(B.children[1]).not.to.equal(childA);
      expect(B.children[2]).not.to.equal(childB);
      expect(B.state('happy')).to.be["true"];
      expect(B.state('relaxed')).to.be["false"];
      expect(emitCount).to.equal(1);
      B.emit('privateEvent');
      expect(emitCount).to.equal(2);
      A.off();
      A.emit('privateEvent');
      expect(emitCount).to.equal(2);
      B.emit('privateEvent');
      return expect(emitCount).to.equal(3);
    });
    test(".prop() - element property getter/setter", function() {
      var div;
      div = Dom.div();
      expect(div.prop('myProp')).to.equal(void 0);
      expect(div.prop('myProp', 192)).to.equal(div);
      expect(div.prop('myProp')).to.equal(192);
      expect(div.prop('myProp', '192')).to.equal(div);
      expect(div.prop('myProp')).to.equal('192');
      expect(div.prop('anotherProp', [1, 2, 3])).to.equal(div);
      expect(div.prop('anotherProp')).to.eql([1, 2, 3]);
      expect(div.el.myProp).to.equal('192');
      expect(div.el.anotherProp).to.eql([1, 2, 3]);
      div.el.lastProp = 9999;
      expect(div.el.lastProp).to.equal(9999);
      expect(div.prop('lastProp')).to.equal(9999);
      expect(Object.keys(div.el)).not.to.contain('promiseIsLast');
      div.prop('promiseIsLast', 'over9k');
      expect(Object.keys(div.el)).to.contain('promiseIsLast');
      div.prop('promiseIsLast', void 0);
      expect(Object.keys(div.el)).to.contain('promiseIsLast');
      div.prop('promiseIsLast', null);
      return expect(Object.keys(div.el)).to.contain('promiseIsLast');
    });
    test(".attr() - element property getter/setter", function() {
      var div;
      div = Dom.div();
      expect(div.attr('myAttr')).to.equal(null);
      expect(div.attr('myAttr', 192)).to.equal(div);
      expect(div.attr('myAttr')).to.equal('192');
      expect(div.attr('myAttr', '192')).to.equal(div);
      expect(div.attr('myAttr')).to.equal('192');
      expect(div.attr('anotherAttr', [1, 2, 3])).to.equal(div);
      expect(div.attr('anotherAttr')).to.equal('1,2,3');
      expect(div.el.getAttribute('myAttr')).to.equal('192');
      expect(div.el.getAttribute('anotherAttr')).to.eql('1,2,3');
      div.el.setAttribute('lastAttr', 9999);
      expect(div.el.getAttribute('lastAttr')).to.equal('9999');
      expect(div.attr('lastAttr')).to.equal('9999');
      expect(div.el.getAttribute('promiseIsLast')).to.equal(null);
      div.attr('promiseIsLast', 'over9k');
      expect(div.el.getAttribute('promiseIsLast')).to.equal('over9k');
      div.attr('promiseIsLast', void 0);
      expect(div.el.getAttribute('promiseIsLast')).to.equal('over9k');
      div.attr('promiseIsLast', null);
      return expect(div.el.getAttribute('promiseIsLast')).to.equal(null);
    });
    test(".html - innerHTML getter/setter", function() {
      var div;
      div = Dom.div(null, Dom.div(), 'Some text', Dom.span(), Dom.div());
      expect(div.children.length).to.equal(4);
      expect(div.html).to.equal(div.el.innerHTML);
      expect(div.children.length).to.equal(4);
      div.html = '<section ID="test"></section>';
      expect(div.html).to.equal('<section id="test"></section>');
      expect(div.children.length).to.equal(1);
      expect(div.children[0].el.id).to.equal('test');
      return expect(div.children[0].el.nodeName.toLowerCase()).to.equal('section');
    });
    test(".text - textContent getter/setter", function() {
      var div;
      div = Dom.div(null, 'Some text', Dom.span(null, 'Inner Text'));
      expect(div.children.length).to.equal(2);
      expect(div.text).to.equal(div.el.textContent);
      expect(div.text).to.equal('Some textInner Text');
      expect(div.children.length).to.equal(2);
      div.text = 'newText';
      expect(div.text).to.equal('newText');
      expect(div.el.textContent).to.equal('newText');
      expect(div.children.length).to.equal(1);
      return expect(div.children[0].el.nodeType).to.equal(3);
    });
    return test("Appending/prepending elements to a text node should do nothing", function() {
      var div, text;
      text = Dom.text('abc123');
      expect(text.text).to.equal('abc123');
      expect(text.raw.childNodes.length).to.equal(0);
      text.append(Dom.text('def'));
      expect(text.text).to.equal('abc123');
      expect(text.raw.childNodes.length).to.equal(0);
      text.prepend(Dom.div(null, 'def'));
      expect(text.text).to.equal('abc123');
      expect(text.raw.childNodes.length).to.equal(0);
      div = Dom.div(null, '456');
      div.appendTo(text);
      expect(text.text).to.equal('abc123');
      expect(text.raw.childNodes.length).to.equal(0);
      return expect(div.parent).to.equal(void 0);
    });
  });
  suite("Batch", function() {
    test("Dom.batch() takes an iterable containing an array of elements or QuickDom elements and reveals the QuickElement API which will be applied for each element", function() {
      var A, B, C, div, sandBox;
      sandBox = Dom(sandbox);
      div = Dom.div();
      A = Dom.div().appendTo(div);
      B = Dom.section().appendTo(div);
      C = Dom.div().appendTo(div);
      checkChildStructure(sandBox)();
      checkChildStructure(div)(A, B, C);
      Dom.batch([A, B, C]).appendTo(sandBox).style('opacity', 0.5).css({
        height: 30,
        backgroundColor: 'pink'
      }).append('Some Inner Text');
      checkChildStructure(sandBox)(A, B, C);
      checkChildStructure(div)();
      expect(getComputedStyle(A.el).opacity).to.equal('0.5');
      expect(getComputedStyle(C.el).opacity).to.equal('0.5');
      expect(getComputedStyle(B.el).height).to.equal('30px');
      expect(A.children.length).to.equal(1);
      expect(B.children.length).to.equal(1);
      expect(C.children.length).to.equal(1);
      return expect(B.children[0].el.textContent).to.equal('Some Inner Text');
    });
    test("If a truthy value is passed as the 2nd arg of Dom.batch(), an array will be returned for the first method invoked containing the result for each element provided", function() {
      var A, B, C, batch1, batch2, sandBox;
      sandBox = Dom(sandbox);
      A = Dom.div().appendTo(sandBox);
      B = Dom.section().appendTo(sandBox);
      C = Dom.div().appendTo(sandBox);
      batch1 = Dom.batch([A, B, C]);
      batch2 = Dom.batch([A, B, C], true);
      expect(batch1.style('width')).to.equal(batch1);
      expect(batch1.style('width', 47)).to.equal(batch1);
      expect(batch2.style('width')).to.eql(['47px', '47px', '47px']);
      expect(batch2.style('width', 33)).to.eql([A, B, C]);
      return expect(batch2.style('width')).to.eql(['33px', '33px', '33px']);
    });
    test("If the .return() method is invoked on the batch instance, it will return the result set from the last method invocation", function() {
      var A, B, C, div, result, sandBox;
      sandBox = Dom(sandbox);
      div = Dom.div();
      A = Dom.div().appendTo(div);
      B = Dom.section().appendTo(div);
      C = Dom.div().appendTo(div);
      result = Dom.batch([A, B, C]).appendTo(sandBox).style('opacity', 0.5).css({
        height: 30,
        backgroundColor: 'pink'
      }).append('Some Inner Text').style('opacity')["return"]();
      expect(result).to.eql(['0.5', '0.5', '0.5']);
      return expect(Dom.batch([A, B, C]).css('width', '38px').css('width')["return"]()).to.eql(['38px', '38px', '38px']);
    });
    test("If the .return() method is invoked with a truthy argument, it will cause the next method invocation to return the results of the invocation for each element provided", function() {
      var A, B, C, div, result, sandBox;
      sandBox = Dom(sandbox);
      div = Dom.div();
      A = Dom.div().appendTo(div);
      B = Dom.section().appendTo(div);
      C = Dom.div().appendTo(div);
      result = Dom.batch([A, B, C]).appendTo(sandBox).style('opacity', 0.5).css({
        height: 30,
        backgroundColor: 'pink'
      }).append('Some Inner Text')["return"](true).style('opacity');
      expect(result).to.eql(['0.5', '0.5', '0.5']);
      return expect(Dom.batch([A, B, C]).css('width', '38px').css('height', '28px')["return"](true).css('width')).to.eql(['38px', '38px', '38px']);
    });
    test("Invoking the .reverse() method on the batch instance will reverse the elements array in the batch and thus the execution order", function() {
      var A, B, C, arr;
      A = Dom.div(null, 'AAA').appendTo(sandbox);
      B = Dom.div(null, 'BBB').appendTo(sandbox);
      C = Dom.div(null, 'CCC').appendTo(sandbox);
      arr = [A, B, C];
      expect(Dom.batch(arr).elements).not.to.equal(arr);
      expect(Dom.batch(arr).elements).to.eql([A, B, C]);
      expect(Dom.batch(arr).reverse().elements).to.eql([C, B, A]);
      expect(Dom.batch(arr, 1).text()).to.eql(['AAA', 'BBB', 'CCC']);
      expect(Dom.batch(arr, 1).reverse().text()).to.eql(['CCC', 'BBB', 'AAA']);
      expect(Dom.batch(arr, 1).reverse().text()).to.eql(['CCC', 'BBB', 'AAA']);
      return expect(Dom.batch(arr, 1).reverse().reverse().text()).to.eql(['AAA', 'BBB', 'CCC']);
    });
    return test("Batch.text/.html are methods instead of getters/setters", function() {
      var batch, divA, divB;
      divA = Dom.div(null, 'The divA');
      divB = Dom.div(null, 'The divB');
      batch = Dom.batch([divA, divB], true);
      expect(batch.html()).to.eql(['The divA', 'The divB']);
      expect(batch.text()).to.eql(['The divA', 'The divB']);
      batch.html('<span>The div</span>');
      expect(batch.html()).to.eql(['<span>The div</span>', '<span>The div</span>']);
      expect(batch.text()).to.eql(['The div', 'The div']);
      batch.text('THE DIV');
      expect(batch.html()).to.eql(['THE DIV', 'THE DIV']);
      return expect(batch.text()).to.eql(['THE DIV', 'THE DIV']);
    });
  });
  suite("Templates", function() {
    test("A reusable template can be generated via QuickDom.template()", function() {
      var template;
      template = Dom.template([
        'span', {
          id: 'theSpan'
        }
      ]);
      expect(typeof template).to.equal('object');
      expect(template.type).to.equal('span');
      expect(template.options).to.eql({
        id: 'theSpan'
      });
      return expect(template.children).to.eql([]);
    });
    test("Templates can be turned into QuickDom instances via template.spawn() or by passing as arg to QuickDom", function() {
      var spawnA, spawnB, template;
      template = Dom.template([
        'div', {
          className: 'some-div'
        }, 'Some Inner Text'
      ]);
      spawnA = template.spawn();
      spawnA.state('happy', true);
      spawnB = Dom(template);
      expect(spawnA.el).to.be.instanceOf(HTMLDivElement);
      expect(spawnB.el).to.be.instanceOf(HTMLDivElement);
      expect(spawnA).not.to.equal(spawnB);
      expect(spawnA.el).not.to.equal(spawnB.el);
      expect(spawnA.state('happy')).to.be["true"];
      expect(spawnB.state('happy')).to.be["false"];
      expect(spawnA.el.textContent).to.equal('Some Inner Text');
      expect(spawnB.el.textContent).to.equal('Some Inner Text');
      return expect(spawnA.el.className).to.equal('some-div');
    });
    test("Templates can be created from QuickElement instances", function() {
      var section, sectionTemplate, templateSpawn;
      section = Dom.section({
        className: 'singleSection'
      }, 'Some Inner Text');
      section.state('happy', true);
      sectionTemplate = section.toTemplate();
      templateSpawn = sectionTemplate.spawn();
      expect(sectionTemplate).not.to.equal(section);
      expect(templateSpawn.el).not.to.equal(section.el);
      expect(templateSpawn.el.className).to.equal('singleSection');
      expect(templateSpawn.text).to.equal('Some Inner Text');
      expect(section.state('happy')).to.be["true"];
      return expect(templateSpawn.state('happy')).to.be["false"];
    });
    test("Templates can be created from DOM Elements", function() {
      var sectionEl, sectionTemplate, templateSpawn;
      sectionEl = document.createElement('section');
      sectionEl.className = 'singleSection';
      sectionEl.appendChild(document.createTextNode('Some Inner Text'));
      sectionTemplate = Dom.template(sectionEl);
      templateSpawn = sectionTemplate.spawn();
      expect(templateSpawn.el).not.to.equal(sectionEl);
      expect(templateSpawn.el.className).to.equal('singleSection');
      return expect(templateSpawn.text).to.equal('Some Inner Text');
    });
    test("Templates are immutable", function() {
      var template;
      template = Dom.template([
        'div', {
          className: 'some-div'
        }, 'Some Inner Text'
      ]);
      expect(template.type).to.equal('div');
      expect(template.options).to.eql({
        className: 'some-div'
      });
      expect(template.children.length).to.equal(1);
      template.type = 'span';
      template.options = {
        className: 'some-div',
        id: 'tag'
      };
      template.children = ['another', 'one'];
      expect(template.type).to.equal('div');
      expect(template.options).to.eql({
        className: 'some-div'
      });
      return expect(template.children.length).to.equal(1);
    });
    test("Templates can be extended via template.extend", function() {
      var spawn, spawnA, spawnB;
      window.template = Dom.template([
        'div', {
          className: 'some-div'
        }, 'Some Inner Text'
      ]);
      window.templateCopyA = template.extend({
        type: 'span',
        options: {
          className: 'some-span'
        },
        children: []
      });
      window.templateCopyB = template.extend({
        options: {
          id: 'theMainDiv'
        },
        children: ['The Other Inner Text']
      });
      expect(templateCopyA).not.to.equal(template);
      expect(templateCopyB).not.to.equal(template);
      spawn = template.spawn();
      spawnA = templateCopyA.spawn();
      spawnB = templateCopyB.spawn();
      expect(spawn.el.nodeName.toLowerCase()).to.equal('div');
      expect(spawn.el.className).to.equal('some-div');
      expect(spawn.el.id).to.equal('');
      expect(spawn.text).to.equal('Some Inner Text');
      expect(spawnA.el.nodeName.toLowerCase()).to.equal('span');
      expect(spawnA.el.className).to.equal('some-span');
      expect(spawnA.el.id).to.equal('');
      expect(spawnA.text).to.equal('Some Inner Text');
      expect(spawnB.el.nodeName.toLowerCase()).to.equal('div');
      expect(spawnB.el.className).to.equal('some-div');
      expect(spawnB.el.id).to.equal('theMainDiv');
      return expect(spawnB.text).to.equal('The Other Inner Text');
    });
    test("Templates can be spawned via extended config by passing a new config object to template.spawn()", function() {
      var spawnA, spawnB, spawnRaw, template;
      template = Dom.template([
        'div', {
          className: 'some-div'
        }, 'Some Inner Text', [
          'strong', {
            className: 'highlighted',
            style: {
              opacity: 0.9
            }
          }, ' - Bolded Text'
        ]
      ]);
      spawnRaw = template.spawn();
      spawnA = template.spawn({
        type: 'section',
        options: {
          className: 'some-section',
          style: {
            opacity: 0.7
          }
        }
      });
      spawnB = template.spawn({
        options: {
          className: 'main-div',
          id: 'theMainDiv',
          style: {
            opacity: 0.5
          }
        },
        children: [
          {
            type: 'span',
            children: [
              {
                type: 'text',
                options: {
                  text: 'Main Inner Text'
                }
              }
            ]
          }, {
            type: 'b',
            options: {
              className: 'super-highlighted',
              style: {
                opacity: '0.2'
              }
            },
            children: [
              {
                options: {
                  text: ' - Very Bolded Text'
                }
              }
            ]
          }, {
            type: 'text',
            options: {
              text: ' + Other Text'
            }
          }
        ]
      });
      expect(spawnRaw.el.nodeName.toLowerCase()).to.equal('div');
      expect(spawnRaw.el.className).to.equal('some-div');
      expect(spawnRaw.el.id).to.equal('');
      expect(spawnRaw.text).to.equal('Some Inner Text - Bolded Text');
      expect(spawnRaw.el.style.opacity).to.equal('');
      expect(spawnRaw.el.childNodes.length).to.equal(2);
      expect(spawnRaw.el.childNodes[0].nodeName).to.equal('#text');
      expect(spawnRaw.el.childNodes[1].nodeName.toLowerCase()).to.equal('strong');
      expect(spawnRaw.el.childNodes[1].className).to.equal('highlighted');
      expect(spawnRaw.el.childNodes[1].style.opacity).to.equal('0.9');
      expect(spawnA.el.nodeName.toLowerCase()).to.equal('section');
      expect(spawnA.el.className).to.equal('some-section');
      expect(spawnA.el.id).to.equal('');
      expect(spawnA.text).to.equal('Some Inner Text - Bolded Text');
      expect(spawnA.el.style.opacity).to.equal('0.7');
      expect(spawnA.el.childNodes.length).to.equal(2);
      expect(spawnA.el.childNodes[0].nodeName).to.equal('#text');
      expect(spawnA.el.childNodes[1].nodeName.toLowerCase()).to.equal('strong');
      expect(spawnA.el.childNodes[1].className).to.equal('highlighted');
      expect(spawnA.el.childNodes[1].style.opacity).to.equal('0.9');
      expect(spawnB.el.nodeName.toLowerCase()).to.equal('div');
      expect(spawnB.el.className).to.equal('main-div');
      expect(spawnB.el.id).to.equal('theMainDiv');
      expect(spawnB.text).to.equal('Main Inner Text - Very Bolded Text + Other Text');
      expect(spawnB.el.style.opacity).to.equal('0.5');
      expect(spawnB.el.childNodes.length).to.equal(3);
      expect(spawnB.el.childNodes[0].nodeName.toLowerCase()).to.equal('span');
      expect(spawnB.el.childNodes[0].childNodes.length).to.equal(1);
      expect(spawnB.el.childNodes[1].nodeName.toLowerCase()).to.equal('b');
      expect(spawnB.el.childNodes[1].className).to.equal('super-highlighted');
      return expect(spawnB.el.childNodes[1].style.opacity).to.equal('0.2');
    });
    test("Template.extend/spawn() can accept a template tree array", function() {
      var cloneA, cloneB, cloneC, spawn, template;
      template = Dom.template([
        'div', {
          style: {
            'opacity': 0.5
          }
        }, ['span', null, 'text of span'], ['div', null, 'text of div']
      ]);
      cloneA = template.extend([
        'section', {
          style: {
            'opacity': 0.8
          }
        }
      ]);
      cloneB = template.extend(['span', null, ['div']]);
      cloneC = template.extend([
        'section', {
          className: 'the-section',
          style: {
            color: 'blue'
          }
        }, ['section', null, 'text of subsection'], 'just a text node'
      ]);
      spawn = template.spawn([
        'span', {
          style: {
            'width': 190,
            'opacity': 1
          }
        }, 'so nice'
      ]);
      expect(template.type).to.equal('div');
      expect(template.options).to.eql({
        style: {
          'opacity': 0.5
        }
      });
      expect(template.children.length).to.equal(2);
      expect(template.children[0].type).to.equal('span');
      expect(template.children[0].children.length).to.equal(1);
      expect(template.children[0].children[0].options.text).to.equal('text of span');
      expect(template.children[1].type).to.equal('div');
      expect(template.children[1].children.length).to.equal(1);
      expect(template.children[1].children[0].options.text).to.equal('text of div');
      expect(cloneA.type).to.equal('section');
      expect(cloneA.options).to.eql({
        style: {
          'opacity': 0.8
        }
      });
      expect(cloneA.children.length).to.equal(2);
      expect(cloneA.children[0].type).to.equal('span');
      expect(cloneA.children[0].children.length).to.equal(1);
      expect(cloneA.children[0].children[0].options.text).to.equal('text of span');
      expect(cloneA.children[1].type).to.equal('div');
      expect(cloneA.children[1].children.length).to.equal(1);
      expect(cloneA.children[1].children[0].options.text).to.equal('text of div');
      expect(cloneB.type).to.equal('span');
      expect(cloneB.options).to.eql({
        style: {
          'opacity': 0.5
        }
      });
      expect(cloneB.children.length).to.equal(2);
      expect(cloneB.children[0].type).to.equal('div');
      expect(cloneB.children[0].children.length).to.equal(1);
      expect(cloneB.children[0].children[0].options.text).to.equal('text of span');
      expect(cloneB.children[1].type).to.equal('div');
      expect(cloneB.children[1].children.length).to.equal(1);
      expect(cloneB.children[1].children[0].options.text).to.equal('text of div');
      expect(cloneC.type).to.equal('section');
      expect(cloneC.options).to.eql({
        className: 'the-section',
        style: {
          'opacity': 0.5,
          'color': 'blue'
        }
      });
      expect(cloneC.children.length).to.equal(2);
      expect(cloneC.children[0].type).to.equal('section');
      expect(cloneC.children[0].children.length).to.equal(1);
      expect(cloneC.children[0].children[0].options.text).to.equal('text of subsection');
      expect(cloneC.children[1].type).to.equal('text');
      expect(cloneC.children[1].options.text).to.equal('just a text node');
      expect(spawn.el.nodeName.toLowerCase()).to.equal('span');
      expect(spawn.el.style.opacity).to.equal('1');
      expect(spawn.el.style.width).to.equal('190px');
      expect(spawn.el.childNodes.length).to.equal(2);
      expect(spawn.el.childNodes[0].nodeType).to.equal(3);
      expect(spawn.el.childNodes[0].textContent).to.equal('so nice');
      expect(spawn.el.childNodes[1].nodeName.toLowerCase()).to.equal('div');
      return expect(spawn.el.childNodes[1].textContent).to.equal('text of div');
    });
    test("Template.extend/spawn() can accept other template instances as children which will replace existing children", function() {
      var childA, childB, childC, spawnedA, spawnedB, spawnedC, template, templateCopy;
      template = Dom.template([
        'div', null, [
          'span', {
            style: {
              opacity: 0.5
            }
          }
        ], 'original text'
      ]);
      childA = Dom.template([
        'div', {
          style: {
            fontFamily: 'pink'
          }
        }
      ]);
      childB = Dom.template('replaced text');
      childC = Dom.template(['section']);
      templateCopy = template.extend([
        'span', {
          style: {
            fontSize: '77px'
          }
        }, childA, childB, childC
      ]);
      spawnedA = template.spawn();
      spawnedB = templateCopy.spawn();
      spawnedC = template.spawn([
        'span', {
          style: {
            fontSize: '77px'
          }
        }, childA, childB, childC
      ]);
      expect(spawnedA.type).to.equal('div');
      expect(spawnedA.children.length).to.equal(2);
      expect(spawnedA.children[0].type).to.equal('span');
      expect(spawnedA.children[0].raw.style.opacity).to.equal('0.5');
      expect(spawnedA.children[0].raw.style.fontFamily).to.equal('');
      expect(spawnedA.children[1].type).to.equal('text');
      expect(spawnedA.text).to.equal('original text');
      expect(spawnedB.type).to.equal('span');
      expect(spawnedB.children.length).to.equal(3);
      expect(spawnedB.children[0].type).to.equal('div');
      expect(spawnedB.children[0].raw.style.opacity).to.equal('');
      expect(spawnedB.children[0].raw.style.fontFamily).to.equal('pink');
      expect(spawnedB.children[1].type).to.equal('text');
      expect(spawnedB.text).to.equal('replaced text');
      expect(spawnedB.children[2].type).to.equal('section');
      expect(spawnedB.raw.style.fontSize).to.equal('77px');
      expect(spawnedC.type).to.equal('span');
      expect(spawnedC.children.length).to.equal(3);
      expect(spawnedC.children[0].type).to.equal('div');
      expect(spawnedC.children[0].raw.style.opacity).to.equal('');
      expect(spawnedC.children[0].raw.style.fontFamily).to.equal('pink');
      expect(spawnedC.children[1].type).to.equal('text');
      expect(spawnedC.text).to.equal('replaced text');
      expect(spawnedC.children[2].type).to.equal('section');
      return expect(spawnedC.raw.style.fontSize).to.equal('77px');
    });
    test("Templates can have other templates as their children", function() {
      var headerTemplate, headerTemplateClone, section, sectionTemplate;
      headerTemplate = Dom.template([
        'header', {
          style: {
            'height': '200px'
          }
        }, [
          'span', {
            style: {
              'textAlign': 'center'
            }
          }, 'This is bolded text'
        ], ' while this is not'
      ]);
      headerTemplateClone = Dom.template(headerTemplate);
      sectionTemplate = Dom.template(['section', null, headerTemplate]);
      section = sectionTemplate.spawn().appendTo(sandbox);
      expect(headerTemplateClone).not.to.equal(headerTemplate);
      expect(sectionTemplate.children.length).to.equal(1);
      expect(sectionTemplate.children[0]).not.to.equal(headerTemplate);
      expect(sectionTemplate.children[0].children.length).to.equal(2);
      expect(section.children.length).to.equal(1);
      expect(section.children[0].type).to.equal('header');
      expect(section.children[0].children.length).to.equal(2);
      expect(section.text).to.equal('This is bolded text while this is not');
      return expect(section.children[0].children[0].style('textAlign')).to.equal('center');
    });
    test("A global options object can be passed as the 2nd arg to template.extend/spawn() which will be applied to all templates, spawns, & their children", function() {
      var dynamicHeightStyle, headerTemplate, obj, section, sectionTemplate;
      obj = {
        myHeight: '150px'
      };
      dynamicHeightStyle = {
        'height': function(related) {
          expect(related).to.equal(obj);
          return related.myHeight;
        }
      };
      headerTemplate = Dom.template([
        'header', {
          style: {
            'width': '23px'
          }
        }, [
          'div', {
            style: {
              'width': '23px'
            }
          }, 'This is bolded text'
        ], ' while this is not'
      ]);
      sectionTemplate = Dom.template([
        'section', {
          style: {
            'width': '23px'
          }
        }, headerTemplate
      ]);
      section = sectionTemplate.spawn({
        options: {
          relatedInstance: window
        }
      }, {
        relatedInstance: obj,
        style: dynamicHeightStyle
      }).appendTo(sandbox);
      expect(section.raw.style.height).to.equal('150px');
      expect(section.children[0].raw.style.height).to.equal('150px');
      expect(section.children[0].children[0].raw.style.height).to.equal('150px');
      expect(section.raw.style.width).to.equal('');
      expect(section.children[0].raw.style.width).to.equal('');
      expect(section.children[0].children[0].raw.style.width).to.equal('');
      expect(section.children.length).to.equal(1);
      expect(section.children[0].type).to.equal('header');
      expect(section.children[0].children.length).to.equal(2);
      return expect(section.text).to.equal('This is bolded text while this is not');
    });
    test("Template children can be navigated by ref using the .child property", function() {
      var rendered, template;
      template = Dom.template([
        'div', {
          id: 'divA'
        }, [
          'div', {
            id: 'childA'
          }, [
            'span', {
              ref: 'childA_1'
            }
          ], [
            'div', {
              ref: 'childA_2',
              id: 'childA_2'
            }
          ]
        ], [
          'div', null, [
            'span', {
              ref: 'childB_1'
            }
          ], [
            'text', {
              id: 'childB_2',
              text: 'The Text'
            }
          ]
        ]
      ]);
      expect(typeof template.child).to.equal('object');
      expect(Object.keys(template.child).length).to.equal(6);
      expect(template.child.divA).to.equal(template);
      expect(template.child.childA.type).to.equal('div');
      expect(template.child.childA).to.equal(template.children[0]);
      expect(template.child.childA_1).to.equal(template.children[0].children[0]);
      expect(template.child.childA_2).to.equal(template.children[0].children[1]);
      expect(template.child.childB_1).to.equal(template.children[1].children[0]);
      expect(template.child.childB_2).to.equal(template.children[1].children[1]);
      rendered = template.spawn();
      expect(rendered.child.childB_2).to.equal(rendered.children[1].children[1]);
      return expect(rendered.text).to.equal('The Text');
    });
    test("Template's children can be extend/spawned with a {ref:newChild} map instead of a positional array", function() {
      var rendered, templateCopy, templateCopy2, templateMain;
      templateMain = Dom.template([
        'div', {
          id: 'divA'
        }, [
          'div', {
            id: 'childA'
          }, [
            'span', {
              ref: 'childA_1'
            }
          ], [
            'div', {
              ref: 'childA_2',
              id: 'childA_2'
            }
          ]
        ], [
          'div', null, [
            'span', {
              ref: 'childB_1'
            }
          ], [
            'text', {
              id: 'childB_2',
              text: 'The Text'
            }
          ]
        ]
      ]);
      templateCopy = templateMain.extend([
        'section', null, {
          childA: {
            type: 'form',
            options: {
              style: {
                display: 'inline-block'
              }
            }
          },
          childA_2: [
            'a', {
              id: 'CHILDa_2',
              href: 'http://google.com'
            }, [
              'text', {
                ref: 'childA_2_1',
                text: 'New Text'
              }
            ]
          ],
          childC: [
            'div', {
              ref: 'childD'
            }
          ]
        }
      ], {
        value: 'theValue'
      });
      templateCopy2 = templateMain.extend({
        children: {
          childA: {
            children: {
              newChild: ['div']
            }
          },
          childA_2: [
            'a', {
              id: 'CHILDa_2',
              href: 'http://google.com'
            }, [
              'text', {
                ref: 'childA_2_1',
                text: 'New Text'
              }
            ]
          ],
          childC: [
            'div', {
              ref: 'childD'
            }
          ]
        }
      });
      expect(typeof templateCopy.child.childA_2_1).not.to.equal('undefined');
      expect(Object.keys(templateMain.child).length).to.equal(6);
      expect(Object.keys(templateCopy.child).length).to.equal(8);
      expect(templateCopy.children.length).to.equal(3);
      expect(templateCopy.child.divA).to.equal(templateCopy);
      expect(templateCopy.child.childA).to.equal(templateCopy.children[0]);
      expect(templateCopy.child.childA.type).to.equal('form');
      expect(templateCopy.child.childA_1).to.equal(templateCopy.children[0].children[0]);
      expect(templateCopy.child.childA_2).to.equal(void 0);
      expect(templateCopy.child.CHILDa_2).to.equal(templateCopy.children[0].children[1]);
      expect(templateCopy.child.childA_2_1).to.equal(templateCopy.children[0].children[1].children[0]);
      expect(templateCopy.child.childA_2_1.options.text).to.equal('New Text');
      expect(templateCopy.child.childB_1).to.equal(templateCopy.children[1].children[0]);
      expect(templateCopy.child.childB_2).to.equal(templateCopy.children[1].children[1]);
      expect(templateCopy.child.childC).to.equal(void 0);
      expect(templateCopy.child.childD).to.equal(templateCopy.children[2]);
      rendered = templateCopy.spawn();
      expect(Object.keys(rendered.child).length).to.equal(8);
      expect(rendered.child.childB_2).to.equal(rendered.children[1].children[1]);
      expect(rendered.child.childA.raw.style.display).to.equal('inline-block');
      expect(rendered.child.CHILDa_2.prop('href')).to.contain('http://google.com');
      expect(rendered.child.childB_1.prop('value')).to.equal('theValue');
      return expect(rendered.child.childD.attr('data-ref')).to.equal('childD');
    });
    test("Templates can be passed as replacement/new children in {ref:newChild} extension maps", function() {
      var childA, childB, childC, templateCopy, templateMain;
      childA = Dom.template([
        'div', {
          id: 'childA'
        }, [
          'span', {
            ref: 'childA_1'
          }
        ], [
          'div', {
            ref: 'childA_2',
            id: 'childA_2'
          }
        ]
      ]);
      childB = Dom.template([
        'div', {
          ref: 'childB'
        }, [
          'span', {
            ref: 'childB_1'
          }
        ], [
          'text', {
            id: 'childB_2',
            text: 'The Text'
          }
        ]
      ]);
      childC = Dom.template([
        'div', {
          id: 'childC'
        }, [
          'span', {
            ref: 'childC_1'
          }
        ], [
          'text', {
            id: 'childC_2',
            text: 'The Text'
          }
        ]
      ]);
      templateMain = Dom.template([
        'div', {
          id: 'divA'
        }, childA, childB
      ]);
      templateCopy = templateMain.extend([
        'section', null, {
          childA: {
            type: 'form'
          },
          childB: childB.extend({
            ref: 'ChildB'
          }),
          childC: childC.extend({
            ref: 'ChildC'
          })
        }
      ], {
        value: 'theValue'
      });
      expect(Object.keys(templateMain.child).length).to.equal(7);
      expect(Object.keys(templateCopy.child).length).to.equal(10);
      expect(templateMain.children.length).to.equal(2);
      expect(templateCopy.children.length).to.equal(3);
      expect(templateCopy.child.divA).to.equal(templateCopy);
      expect(templateCopy.child.childA).to.equal(templateCopy.children[0]);
      expect(templateCopy.child.childA.type).to.equal('form');
      expect(templateCopy.child.childA.children.length).to.equal(2);
      expect(templateCopy.child.ChildB).to.equal(templateCopy.children[1]);
      expect(templateCopy.child.childB_1).to.equal(templateCopy.children[1].children[0]);
      expect(templateCopy.child.childB_2).to.equal(templateCopy.children[1].children[1]);
      expect(templateMain.child.childC).to.equal(void 0);
      expect(templateCopy.child.childC).to.equal(void 0);
      expect(templateCopy.child.ChildC).to.equal(templateCopy.children[2]);
      expect(Object.keys(templateMain.spawn().child).length).to.equal(7);
      return expect(Object.keys(templateCopy.spawn().child).length).to.equal(10);
    });
    test("Null values in ref-children map will remove the child from the template", function() {
      var templateCopy, templateMain;
      templateMain = Dom.template([
        'div', {
          id: 'divA'
        }, [
          'div', {
            id: 'childA'
          }, [
            'span', {
              ref: 'childA_1'
            }
          ], [
            'div', {
              ref: 'childA_2',
              id: 'childA_2'
            }
          ]
        ], [
          'div', {
            ref: 'childB'
          }, [
            'span', {
              ref: 'childB_1'
            }
          ], [
            'text', {
              id: 'childB_2',
              text: 'The Text'
            }
          ]
        ], [
          'div', {
            id: 'childC'
          }, [
            'span', {
              ref: 'childC_1'
            }
          ], [
            'text', {
              id: 'childC_2',
              text: 'The Text'
            }
          ]
        ]
      ]);
      templateCopy = templateMain.extend([
        'section', null, {
          childA: {
            type: 'form',
            options: {
              style: {
                display: 'inline-block'
              }
            }
          },
          childA_1: null,
          childA_2: [
            'a', {
              id: 'CHILDa_2',
              href: 'http://google.com'
            }, [
              'text', {
                ref: 'childA_2_1',
                text: 'New Text'
              }
            ]
          ],
          childB_1: null,
          childC: null
        }
      ]);
      expect(typeof templateCopy.child.childA_2_1).not.to.equal('undefined');
      expect(Object.keys(templateMain.child).length).to.equal(10);
      expect(Object.keys(templateCopy.child).length).to.equal(6);
      expect(templateCopy.children.length).to.equal(2);
      expect(templateCopy.child.divA).to.equal(templateCopy);
      expect(templateCopy.child.childA).to.equal(templateCopy.children[0]);
      expect(templateCopy.child.childA.type).to.equal('form');
      expect(templateCopy.child.childA.children.length).to.equal(1);
      expect(templateMain.child.childA_1).to.equal(templateMain.child.childA_1);
      expect(templateCopy.child.childA_1).to.equal(void 0);
      expect(templateCopy.child.childA_2).to.equal(void 0);
      expect(templateCopy.child.CHILDa_2).to.equal(templateCopy.children[0].children[0]);
      expect(templateCopy.child.childA_2_1).to.equal(templateCopy.children[0].children[0].children[0]);
      expect(templateCopy.child.childA_2_1.options.text).to.equal('New Text');
      expect(templateCopy.child.childB_1).to.equal(void 0);
      expect(templateCopy.child.childB_2).to.equal(templateCopy.children[1].children[0]);
      expect(templateMain.child.childB_1).to.equal(templateMain.children[1].children[0]);
      expect(templateMain.child.childB_2).to.equal(templateMain.children[1].children[1]);
      expect(templateMain.child.childC).to.equal(templateMain.children[2]);
      return expect(templateCopy.child.childC).to.equal(void 0);
    });
    test("When spawning elements the options object passed to the spawns should be a clone of the template's options", function() {
      var spawnA, spawnB, templateA, templateB;
      templateA = Dom.template([
        'div', {
          style: {
            display: 'block'
          }
        }
      ]);
      templateB = Dom.template([
        'div', {
          style: {
            display: 'block'
          }
        }
      ]);
      spawnA = templateA.spawn({
        ref: 'a'
      });
      spawnB = templateA.spawn();
      expect(spawnA.options).not.to.equal(templateA.options);
      expect(spawnA.options.style).not.to.equal(templateA.options.style);
      expect(templateA.options.style.$base).to.equal(void 0);
      expect(spawnB.options).not.to.equal(templateB.options);
      expect(spawnB.options.style).not.to.equal(templateB.options.style);
      return expect(templateB.options.style.$base).to.equal(void 0);
    });
    return suite("Data computers", function() {
      test("Templates accept options.computers fn map which will be invoked with provided options.data upon spawning", function() {
        var receivedData, template;
        receivedData = null;
        template = Dom.template([
          'div', {
            computers: {
              'someLabel': function(data) {
                return receivedData = data || 'nothing';
              }
            }
          }
        ]);
        expect(receivedData).to.equal(null);
        template.spawn();
        expect(receivedData).to.equal(null);
        template.spawn({
          data: {
            'someLabel': 'works'
          }
        });
        return expect(receivedData).to.equal('works');
      });
      test("Computers will be have the spawned QuickElement instance as their context", function() {
        var context, instance, template;
        context = null;
        template = Dom.template([
          'div', {
            computers: {
              'someLabel': function(data) {
                return context = this;
              }
            }
          }
        ]);
        expect(context).to.equal(null);
        template.spawn();
        expect(context).to.equal(null);
        instance = template.spawn({
          data: {
            'someLabel': void 0
          }
        });
        return expect(context).to.equal(instance);
      });
      test("Values specified in options.defaults will be used if not specified in options.data upon spawning", function() {
        var instance, results, template;
        results = {};
        template = Dom.template([
          'div', {
            computers: {
              'first': function(data) {
                return results.first = data.toLowerCase();
              },
              'second': function(data) {
                return results.second = data.toLowerCase();
              },
              'third': function(data) {
                return results.third = data.toLowerCase();
              }
            },
            defaults: {
              'first': 'firstValue here',
              'third': 'thirdValue here'
            }
          }
        ]);
        expect(results).to.deep.equal({});
        template.spawn();
        expect(results).to.deep.equal({
          first: 'firstvalue here',
          third: 'thirdvalue here'
        });
        instance = template.spawn({
          data: {
            'third': 'customvalue here'
          }
        });
        return expect(results).to.deep.equal({
          first: 'firstvalue here',
          third: 'customvalue here'
        });
      });
      test("Values can be of any type", function() {
        var instance, results, template;
        results = {};
        template = Dom.template([
          'div', {
            computers: {
              'first': function(data) {
                return results.first = data;
              },
              'second': function(data) {
                return results.second = data;
              },
              'third': function(data) {
                return results.third = data;
              },
              'fourth': function(data) {
                return results.fourth = data;
              },
              'fifth': function(data) {
                return results.fifth = data;
              },
              'sixth': function(data) {
                return results.sixth = data;
              }
            },
            defaults: {
              'first': ['abc', '123'],
              'third': {
                a: 1,
                b: 12
              },
              'sixth': 999
            }
          }
        ]);
        instance = template.spawn({
          data: {
            'second': null,
            'fourth': 19,
            'fifth': false,
            'sixth': void 0
          }
        });
        expect(results).to.deep.equal({
          first: ['abc', '123'],
          second: null,
          third: {
            a: 1,
            b: 12
          },
          fourth: 19,
          fifth: false,
          sixth: void 0
        });
        return expect(Object.keys(results).length).to.equal(6);
      });
      test("Values in options.data that do not have a matching computer will be skipped", function() {
        var instance, results, template;
        results = {};
        template = Dom.template([
          'div', {
            computers: {
              'first': function(data) {
                return results.first = data;
              },
              'second': function(data) {
                return results.second = data;
              },
              'third': function(data) {
                return results.third = data;
              }
            }
          }
        ]);
        instance = template.spawn({
          data: {
            'first': 'first value',
            'second': 'second value',
            'third': 'third value',
            'fourth': 'fourth value'
          }
        });
        expect(results).to.deep.equal({
          'first': 'first value',
          'second': 'second value',
          'third': 'third value'
        });
        return expect(Object.keys(results).length).to.equal(3);
      });
      test("Computers in template children will receive the parent's options.data", function() {
        var instance, results, template;
        results = {
          parent: {},
          childA: {},
          childB: {},
          childC: {}
        };
        template = Dom.template([
          'div', {
            computers: {
              'first': function(data) {
                return results.parent.first = data;
              },
              'second': function(data) {
                return results.parent.second = data;
              },
              'third': function(data) {
                return results.parent.third = data;
              }
            }
          }, [
            'div', {
              computers: {
                'first': function(data) {
                  return results.childA.first = data;
                },
                'second': function(data) {
                  return results.childA.second = data;
                },
                'third': function(data) {
                  return results.childA.third = data;
                }
              }
            }
          ], [
            'div', null, [
              'div', {
                computers: {
                  'first': function(data) {
                    return results.childB.first = data;
                  },
                  'fourth': function(data) {
                    return results.childB.fourth = data;
                  }
                }
              }
            ], [
              'div', {
                computers: {
                  'first': function(data) {
                    return results.childC.first = data;
                  },
                  'sixth': function(data) {
                    return results.childC.sixth = data;
                  }
                }
              }
            ]
          ]
        ]);
        instance = template.spawn({
          data: {
            'first': 'first value',
            'second': 'second value',
            'third': 'third value',
            'fourth': 'fourth value'
          }
        });
        expect(results.parent).to.deep.equal({
          'first': 'first value',
          'second': 'second value',
          'third': 'third value'
        });
        expect(results.childA).to.deep.equal({
          'first': 'first value',
          'second': 'second value',
          'third': 'third value'
        });
        expect(results.childB).to.deep.equal({
          'first': 'first value',
          'fourth': 'fourth value'
        });
        return expect(results.childC).to.deep.equal({
          'first': 'first value'
        });
      });
      return test("Parent defaults will not be passed to children", function() {
        var instance, results, template;
        results = {
          parent: {},
          child: {}
        };
        template = Dom.template([
          'div', {
            computers: {
              'first': function(data) {
                return results.parent.first = data;
              },
              'second': function(data) {
                return results.parent.second = data;
              },
              'third': function(data) {
                return results.parent.third = data;
              }
            },
            defaults: {
              'second': 'second value',
              'fourth': 'fourth value'
            }
          }, [
            'div', {
              computers: {
                'first': function(data) {
                  return results.child.first = data;
                },
                'second': function(data) {
                  return results.child.second = data;
                },
                'third': function(data) {
                  return results.child.third = data;
                },
                'fourth': function(data) {
                  return results.child.fourth = data;
                }
              },
              defaults: {
                'first': 'first value'
              }
            }
          ]
        ]);
        instance = template.spawn({
          data: {
            'third': 'third value'
          }
        });
        expect(results.parent).to.deep.equal({
          'second': 'second value',
          'third': 'third value'
        });
        return expect(results.child).to.deep.equal({
          'first': 'first value',
          'third': 'third value'
        });
      });
    });
  });
  return suite("Misc", function() {
    test("Stringification", function() {
      var section, sectionCopy;
      section = Dom([
        'section', {
          id: 'theSection',
          className: 'theSectionClass',
          style: {
            'position': 'relative',
            'opacity': 0.5,
            'fontSize': function() {
              return '29px';
            },
            $happy: {
              fontSize: '11px',
              $relaxed: {
                fontSize: '8px'
              }
            }
          }
        }, [
          'div', {
            id: 'childA',
            style: {
              position: 'relative'
            }
          }, 'childA-innertext'
        ], 'section-innertext', [
          'span', {
            id: 'childB',
            ref: 'childB-ref!',
            style: {
              position: 'absolute'
            }
          }, 'childB-innertext', [
            'text', {
              text: 'childB-innertext 2'
            }
          ], [
            'a', {
              url: 'https://google.com'
            }
          ]
        ]
      ]);
      window.stringified = JSON.stringify(section, null, 2);
      sectionCopy = Dom(JSON.parse(stringified));
      expect(sectionCopy.type).to.equal(section.type);
      expect(sectionCopy.ref).to.equal(section.ref);
      expect(sectionCopy.el.id).to.equal(section.el.id);
      expect(sectionCopy.el.className).to.equal(section.el.className);
      expect(sectionCopy.el.style.position).to.equal(section.el.style.position);
      expect(sectionCopy.el.style.opacity).to.equal(section.el.style.opacity);
      expect(sectionCopy.el.style.fontSize).not.to.equal(section.el.style.fontSize);
      section.state('happy', true);
      sectionCopy.state('happy', true);
      expect(sectionCopy.el.style.fontSize).to.equal(section.el.style.fontSize);
      section.state('relaxed', true);
      sectionCopy.state('relaxed', true);
      expect(sectionCopy.el.style.fontSize).to.equal(section.el.style.fontSize);
      expect(sectionCopy.children.length).to.equal(section.children.length);
      expect(Object.keys(sectionCopy.child).length).to.equal(Object.keys(section.child).length);
      expect(sectionCopy.text).to.equal(section.text);
      expect(sectionCopy.html).to.equal(section.html);
      expect(sectionCopy.children[0].el.style.position).to.equal(section.children[0].el.style.position);
      expect(sectionCopy.children[2].el.style.position).to.equal(section.children[2].el.style.position);
      return expect(sectionCopy.children[2].ref).to.equal(section.children[2].ref);
    });
    test("Chaining", function() {
      var chainResult, div, head;
      div = Dom.div();
      chainResult = div.on('abc', function() {}).emit('abc').off('abc').off().state('abc', true).resetState().style().css('width', 12).attr('test', 123).prop('anotherTest', 123).append().appendTo().prepend().prependTo().before().after().insertBefore().insertAfter().detach().wrap(Dom.section()).unwrap().wrap(Dom.header()).replace().appendTo(sandbox).wrap(head = Dom.header());
      expect(chainResult).to.equal(div);
      expect(sandbox.children[0]).to.equal(head.el);
      expect(div.parent).to.equal(head);
      return expect(div.css('width')).to.equal('12px');
    });
    return test("Invalid Arguments", function() {
      var cb, div, emitCount, text;
      text = Dom.text('someText', {
        lostOpts: true
      });
      div = Dom.div({
        lostOpts: true
      });
      expect(Dom()).to.equal(void 0);
      expect(Dom(null)).to.equal(void 0);
      expect(Dom({})).to.equal(void 0);
      expect(div.updateOptions()).to.equal(div);
      expect(text.options.lostOpts).to.equal(void 0);
      expect(div.options.lostOpts).to.equal(true);
      expect(div.on()).to.equal(div);
      expect(div.on('abc')).to.equal(div);
      expect(div.on('abc', {})).to.equal(div);
      expect(div.once('abc')).to.equal(div);
      expect(div.off('somethingFake')).to.equal(div);
      emitCount = 0;
      div.on('something', cb = function() {
        return emitCount++;
      });
      expect(div.emit('')).to.equal(div);
      expect(div.emit()).to.equal(div);
      expect(div.emitPrivate('none')).to.equal(div);
      expect(div.emitPrivate('')).to.equal(div);
      expect(div.emitPrivate()).to.equal(div);
      expect(emitCount).to.equal(0);
      expect(div.emit('something')).to.equal(div);
      expect(emitCount).to.equal(1);
      expect(div.off('something', function() {})).to.equal(div);
      expect(div.emit('something')).to.equal(div);
      expect(emitCount).to.equal(2);
      expect(div.onInserted(function() {})).to.equal(div);
      expect(div.onInserted(true)).to.equal(void 0);
      expect(div.onInserted(null)).to.equal(void 0);
      div.css(null, '129');
      expect(div.el.style["null"]).to.equal(void 0);
      expect(div.state()).to.equal(void 0);
      expect(div.state(null, true)).to.equal(void 0);
      expect(div.state(123, true)).to.equal(void 0);
      expect(div.state('base', true)).to.equal(div);
      expect(div.state('base')).to.be["false"];
      expect(div.state('$whatevs', true)).to.equal(div);
      expect(div.state('whatevs')).to.be["true"];
      expect(div.state('another')).to.be["false"];
      expect(div.state('another', true)).to.equal(div);
      expect(div.state('another')).to.be["true"];
      expect(div.state('another', void 0)).to.equal(div);
      expect(div.state('another')).to.be["false"];
      div.appendTo(Dom(sandbox));
      expect(div.parent).to.equal(Dom(sandbox));
      div.append(true);
      expect(div.children.length).to.equal(0);
      div.appendTo(document);
      expect(div.parent).to.equal(Dom(sandbox));
      div.prepend(true);
      expect(div.children.length).to.equal(0);
      div.prependTo(true);
      expect(div.parent).to.equal(Dom(sandbox));
      div.after(true);
      expect(div.children.length).to.equal(0);
      div.insertAfter(123);
      expect(div.parent).to.equal(Dom(sandbox));
      div.before(true);
      expect(div.children.length).to.equal(0);
      div.insertBefore(123);
      expect(div.parent).to.equal(Dom(sandbox));
      div.wrap(123);
      expect(div.parent).to.equal(Dom(sandbox));
      div.replace(123);
      expect(div.parent).to.equal(Dom(sandbox));
      div.detach();
      expect(div.parent).to.equal(void 0);
      div.unwrap();
      expect(div.parent).to.equal(void 0);
      expect(Dom(sandbox).children.length).to.equal(0);
      div.appendTo(Dom(sandbox));
      expect(Dom(sandbox).children.length).to.equal(1);
      if (Dom(sandbox)._removeChild) {
        Dom(sandbox)._removeChild(text);
        Dom(sandbox)._removeChild(Dom.div());
        expect(Dom(sandbox).children.length).to.equal(1);
      }
      expect(function() {
        return Dom.batch();
      }).to["throw"]();
      expect(function() {
        return Dom.batch({});
      }).to["throw"]();
      expect(function() {
        return Dom.batch(5432);
      }).to["throw"]();
      expect(function() {
        return Dom.batch([]);
      }).to["throw"]();
      expect(function() {
        return Dom.batch([12]).append(Dom.div());
      }).to["throw"]();
      expect(function() {
        return Dom.batch([12]);
      }).not.to["throw"]();
      expect(function() {
        return Dom.template();
      }).to["throw"]();
      expect(function() {
        return Dom.template(null);
      }).to["throw"]();
      expect(function() {
        return Dom.template({});
      }).to["throw"]();
      expect(function() {
        return Dom.template([
          8482, {
            className: 't'
          }
        ]);
      }).to["throw"]();
      expect(function() {
        return Dom.template(['div', 'someString']);
      }).to["throw"]();
      expect(function() {
        return Dom.template(['div', null, 'Some Inner Text']);
      }).not.to["throw"]();
      expect(function() {
        return Dom.div({
          style: {
            opacity: 0.5,
            '@abc(max-width:390)': {
              opacity: 1
            }
          }
        }).appendTo(sandbox);
      }).not.to["throw"]();
      return expect(function() {
        div = Dom.div();
        div.pipeState(div);
        div.state('happy', true);
        return expect(div.state('happy')).to.equal(true);
      }).not.to["throw"]();
    });
  });
});

HTMLElement.prototype.onEvent = function(eventName, callback) {
  if (this.addEventListener) {
    return this.addEventListener(eventName, callback);
  } else {
    return this.attachEvent("on" + eventName, callback);
  }
};

HTMLElement.prototype.removeEvent = function(eventName, callback) {
  if (this.removeEventListener) {
    return this.removeEventListener(eventName, callback);
  } else {
    return this.detachEvent("on" + eventName, callback);
  }
};

HTMLElement.prototype.emitEvent = function(eventName) {
  var event;
  event = document.createEvent('Event');
  event.initEvent(eventName, true, false);
  return this.dispatchEvent(event);
};

if (HTMLElement.name !== 'HTMLElement') {
  HTMLElement.name = 'HTMLElement';
  Text.name = 'Text';
  nonElementSuffix = ['OptionsCollection', 'FormControlsCollection', 'Document', 'Collection', 'AllCollection'];
  elementSuffix = ["Video", "Unknown", "UList", "Track", "Title", "TextArea", "Template", "TableSection", "TableRow", "Table", "TableCol", "TableCell", "TableCaption", "Style", "Span", "Source", "Slot", "Shadow", "Select", "Script", "Quote", "Progress", "Pre", "Picture", "Param", "Paragraph", "Output", "Option", "OptGroup", "Object", "OList", "Mod", "Meter", "Meta", "Menu", "Media", "Marquee", "Map", "Link", "Legend", "Label", "LI", "Input", "Image", "IFrame", "Html", "Heading", "Head", "HR", "FrameSet", "Frame", "Form", "Font", "FieldSet", "Embed", "Div", "Directory", "Dialog", "Details", "DataList", "DList", "Content", "Canvas", "Button", "Body", "Base", "BR", "Audio", "Area", "Anchor"];
  for (i = 0, len = nonElementSuffix.length; i < len; i++) {
    creator = nonElementSuffix[i];
    if ((ref = window["HTML" + creator]) != null) {
      ref.name = "HTML" + creator;
    }
  }
  for (j = 0, len1 = elementSuffix.length; j < len1; j++) {
    creator = elementSuffix[j];
    if ((ref1 = window["HTML" + creator + "Element"]) != null) {
      ref1.name = "HTML" + creator + "Element";
    }
  }
  if ((ref2 = window.SVGElement) != null) {
    ref2.name = 'SVGElement';
  }
  if ((ref3 = window.SVGSVGElement) != null) {
    ref3.name = 'SVGSVGElement';
  }
  if ((ref4 = window.SVGPolylineElement) != null) {
    ref4.name = 'SVGPolylineElement';
  }
}

if (window.ClientRect == null) {
  window.ClientRect = DOMRect;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsNElBQUE7RUFBQTs7QUFBQSxJQUFDLENBQUEsVUFBRCxHQUFjLElBQUEsQ0FBSyxZQUFMOztBQUNkLElBQUMsQ0FBQSxHQUFELEdBQU8sTUFBTSxDQUFDOztBQUNkLEtBQUssQ0FBQyxLQUFOLENBQVksS0FBWjs7QUFDQSxLQUFLLENBQUMsSUFBTixDQUFXLEdBQVg7O0FBQ0EsS0FBSyxDQUFDLE9BQU4sQ0FBYyxLQUFkOztBQUNBLElBQUEsQ0FBb0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFwQztFQUFBLEtBQUssQ0FBQyxJQUFOLENBQUEsRUFBQTs7O0FBQ0EsTUFBQSxHQUFTLElBQUksQ0FBQzs7QUFDZCxPQUFBLEdBQVU7O0FBQ1YsY0FBQSxHQUFpQixTQUFBO0VBQ2hCLElBQThDLE9BQTlDO0lBQUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUF0QixDQUFrQyxPQUFsQyxFQUFBOztFQUNBLE9BQUEsR0FBVSxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QjtFQUNWLE9BQU8sQ0FBQyxFQUFSLEdBQWE7RUFDYixPQUFPLENBQUMsWUFBUixDQUFxQixPQUFyQixFQUE4Qix1REFBOUI7U0FDQSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQWQsQ0FBMEIsT0FBMUI7QUFMZ0I7O0FBT2pCLG1CQUFBLEdBQXNCLFNBQUMsSUFBRDtTQUFTLFNBQUE7QUFDOUIsUUFBQTtJQUQrQjtJQUMvQixNQUFBLENBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFyQixDQUE0QixDQUFDLEVBQUUsQ0FBQyxLQUFoQyxDQUFzQyxRQUFRLENBQUMsTUFBL0M7QUFDQSxTQUFBLDBEQUFBOztNQUNDLE1BQUEsQ0FBTyxJQUFJLENBQUMsUUFBUyxDQUFBLEtBQUEsQ0FBckIsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsS0FBdEM7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QSxDQUFPLElBQUksQ0FBQyxTQUFMLENBQWUsT0FBZixDQUFQLENBQStCLENBQUMsRUFBRSxDQUFDLEtBQW5DLENBQXlDLEtBQXpDO01BRUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLElBQXBCO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxDQUFQLENBQTJCLENBQUMsRUFBRSxDQUFDLEtBQS9CLENBQXFDLEVBQXJDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQXRCLENBQTRCLENBQUMsRUFBRSxDQUFDLEtBQWhDLENBQXNDLE1BQXRDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxTQUFMLENBQWUsT0FBZixDQUFQLENBQStCLENBQUMsRUFBRSxDQUFDLEtBQW5DLENBQXlDLE1BQXpDO01BRUEsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxDQUFQLENBQTJCLENBQUMsRUFBRSxDQUFDLEtBQS9CLENBQXFDLEVBQXJDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQXRCLENBQTRCLENBQUMsRUFBRSxDQUFDLEtBQWhDLENBQXNDLEVBQXRDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxTQUFMLENBQWUsT0FBZixDQUFQLENBQStCLENBQUMsRUFBRSxDQUFDLEtBQW5DLENBQXlDLEtBQXpDO01BRUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLElBQXBCO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxDQUFQLENBQTJCLENBQUMsRUFBRSxDQUFDLEtBQS9CLENBQXFDLEVBQXJDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQXRCLENBQTRCLENBQUMsRUFBRSxDQUFDLEtBQWhDLENBQXNDLE1BQXRDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxTQUFMLENBQWUsT0FBZixDQUFQLENBQStC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QUwsQ0FBd0IsSUFBeEI7TUFFQSxNQUFBLENBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsS0FBcEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsS0FBcEM7TUFFQSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVIsQ0FBa0IsWUFBbEI7TUFDQSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVIsQ0FBa0IsWUFBbEI7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsSUFBcEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsSUFBcEM7TUFFQSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVIsQ0FBa0IsWUFBbEI7TUFDQSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVIsQ0FBa0IsWUFBbEI7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsS0FBcEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsS0FBcEM7TUFFQSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVIsQ0FBa0IsT0FBbEI7TUFDQSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVIsQ0FBa0IsT0FBbEI7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsSUFBcEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLENBQVAs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QVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsTUFBcEM7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxVQUFWLENBQVAsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsTUFBdEM7TUFFQSxHQUFHLENBQUMsS0FBSixDQUFVLE9BQVYsRUFBbUIsSUFBbkI7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxPQUFWLENBQVAsQ0FBeUIsQ0FBQyxFQUFFLENBQUMsS0FBN0IsQ0FBbUMsTUFBbkM7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxRQUFWLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsTUFBcEM7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxVQUFWLENBQVAsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsTUFBdEM7TUFFQSxHQUFHLENBQUMsS0FBSixDQUFVLFNBQVYsRUFBcUIsSUFBckI7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxPQUFWLENBQVAsQ0FBeUIsQ0FBQyxFQUFFLENBQUMsS0FBN0IsQ0FBbUMsTUFBbkM7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxRQUFWLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsTUFBcEM7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxVQUFWLENBQVAsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsTUFBdEM7TUFFQSxHQUFHLENBQUMsS0FBSixDQUFVLE9BQVYsRUFBbUIsS0FBbkI7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxPQUFWLENBQVAsQ0FBeUIsQ0FBQyxFQUFFLENBQUMsS0FBN0IsQ0FBbUMsTUFBbkM7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxRQUFWLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsTUFBcEM7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxVQUFWLENBQVAsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsTUFBdEM7TUFFQSxHQUFHLENBQUMsS0FBSixDQUFVLE9BQVYsRUFBbUIsSUFBbkI7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxPQUFWLENBQVAsQ0FBeUIsQ0FBQyxFQUFFLENBQUMsS0FBN0IsQ0FBbUMsTUFBbkM7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxRQUFWLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsTUFBcEM7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxVQUFWLENBQVAsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsTUFBdEM7TUFFQSxHQUFHLENBQUMsS0FBSixDQUFVLE9BQVYsRUFBbUIsSUFBbkI7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxPQUFWLENBQVAsQ0FBeUIsQ0FBQyxFQUFFLENBQUMsS0FBN0IsQ0FBbUMsTUFBbkM7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxRQUFWLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0MsTUFBcEM7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxVQUFWLENBQVAsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsTUFBdEM7TUFFQSxHQUFHLENBQUMsS0FBSixDQUFVLE9BQVYsRUFBbUIsS0FBbkI7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxPQUFWLENBQVAsQ0FBeUIsQ0FBQyxFQUFFLENBQUMsS0FBN0IsQ0FBbUMsTUFBbkM7TUFDQSxNQUFBLENBQU8sR0FBRyxDQUFDLEtBQUosQ0FBVSxRQUFWLENBQVAsQ0FBMEIsQ0FBQyxFQUFFLENBQUMsS0FBOUIsQ0FBb0Ms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QyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsRUFBdEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBckIsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsRUFBdEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBckIsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsRUFBdEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBckIsQ0FBNkIsQ0FBQyxFQUFFLENBQUMsS0FBakMsQ0FBdUMsRUFBdkM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBckIsQ0FBNkIsQ0FBQyxFQUFFLENBQUMsS0FBakMsQ0FBdUMsRUFBdkM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBckIsQ0FBNkIsQ0FBQyxFQUFFLENBQUMsS0FBakMsQ0FBdUMsRUFBdkM7TUFFQSxJQUFJLENBQUMsUUFBTCxDQUFjLE9BQWQ7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBckIsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsTUFBdEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBckIsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsRUFBdEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBckIsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsRUFBdEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBckIsQ0FBNkIsQ0FBQyxFQUFFLENBQUMsS0FBakMsQ0FBdUMsR0FBdkM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBckIsQ0FBNkIsQ0FBQyxFQUFFLENBQUMsS0FBakMsQ0FBdUMsRUFBdkM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBckIsQ0FBNkIsQ0FBQyxFQUFFLENBQUMsS0FBakMsQ0FBdUMsRUFBdkM7TUFFQSxJQUFJLENBQUMsWUFBTCxDQUFrQixPQUFsQjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFyQixDQUE0QixDQUFDLEVBQUUsQ0FBQyxLQUFoQyxDQUFzQyxNQUF0QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFyQixDQUE0QixDQUFDLEVBQUUsQ0FBQyxLQUFoQyxDQUFzQyxNQUF0QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFyQixDQUE0QixDQUFDLEVBQUUsQ0FBQyxLQUFoQyxDQUFzQyxFQUF0QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFyQixDQUE2QixDQUFDLEVBQUUsQ0FBQyxLQUFqQyxDQUF1QyxHQUF2QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFyQixDQUE2QixDQUFDLEVBQUUsQ0FBQyxLQUFqQyxDQUF1QyxHQUF2QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFyQixDQUE2QixDQUFDLEVBQUUsQ0FBQyxLQUFqQyxDQUF1QyxFQUF2QztNQUVBLE9BQU8sQ0FBQyxXQUFSLENBQW9CLElBQUksQ0FBQyxFQUF6QjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFyQixDQUE0QixDQUFDLEVBQUUsQ0FBQyxLQUFoQyxDQUFzQyxNQUF0QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFyQixDQUE0QixDQUFDLEVBQUUsQ0FBQyxLQUFoQyxDQUFzQyxNQUF0QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFyQixDQUE0QixDQUFDLEVBQUUsQ0FBQyxLQUFoQyxDQUFzQyxFQUF0QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFyQixDQUE2QixDQUFDLEVBQUUsQ0FBQyxLQUFqQyxDQUF1QyxHQUF2QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFyQixDQUE2QixDQUFDLEVBQUUsQ0FBQyxLQUFqQyxDQUF1QyxHQUF2QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFyQixDQUE2QixDQUFDLEVBQUUsQ0FBQyxLQUFqQyxDQUF1QyxFQUF2QztNQUVBLElBQUksQ0FBQztNQUNMLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFyQixDQUE0QixDQUFDLEVBQUUsQ0FBQyxLQUFoQyxDQUFzQyxNQUF0QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFyQixDQUE0QixDQUFDLEVBQUUsQ0FBQyxLQUFoQyxDQUFzQyxNQUF0QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFyQixDQUE0QixDQUFDLEVBQUUsQ0FBQyxLQUFoQyxDQUFzQyxNQUF0QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFyQixDQUE2QixDQUFDLEVBQUUsQ0FBQyxLQUFqQyxDQUF1QyxHQUF2QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFyQixDQUE2QixDQUFDLEVBQUUsQ0FBQyxLQUFqQyxDQUF1QyxHQUF2QztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsRUFBRSxD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QyxLQUFyQixDQUEyQixPQUEzQjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBWixDQUFpQixDQUFDLEVBQUUsQ0FBQyxLQUFyQixDQUEyQixPQUEzQjtNQUVBLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxFQUFvQixLQUFwQjtNQUNBLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxFQUFvQixLQUFwQjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBWixDQUFpQixDQUFDLEVBQUUsQ0FBQyxLQUFyQixDQUEyQixRQUEzQjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBWixDQUFpQixDQUFDLEVBQUUsQ0FBQyxLQUFyQixDQUEyQixFQUEzQjtNQUVBLElBQUksQ0FBQyxLQUFMLENBQVcsU0FBWCxFQUFzQixJQUF0QjtNQUNBLElBQUksQ0FBQyxLQUFMLENBQVcsU0FBWCxFQUFzQixJQUF0QjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBWixDQUFpQixDQUFDLEVBQUUsQ0FBQyxLQUFyQixDQUEyQixTQUEzQjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBWixDQUFpQixDQUFDLEVBQUUsQ0FBQyxLQUFyQixDQUEyQixTQUEzQjtNQUVBLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxFQUFvQixJQUFwQjtNQUNBLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxFQUFvQixJQUFwQjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBWixDQUFpQixDQUFDLEVBQUUsQ0FBQyxLQUFyQixDQUEyQixTQUEzQjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBWixDQUFpQixDQUFDLEVBQUUsQ0FBQyxLQUFyQixDQUEyQixTQUEzQjtNQUVBLElBQUksQ0FBQyxLQUFMLENBQVcsU0FBWCxFQUFzQixLQUF0QjtNQUNBLElBQUksQ0FBQyxLQUFMLENBQVcsU0FBWCxFQUFzQixLQUF0QjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsSUFBWixDQUFpQixDQUFDLEVBQUUsQ0FBQyxLQUFyQixDQUEy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QUEwQixDQUExQjtNQUNBLG1CQUFBLENBQW9CLENBQXBCLENBQUEsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUI7TUFDQSxtQkFBQSxDQUFvQixDQUFwQixDQUFBLENBQUE7TUFDQSxtQkFBQSxDQUFvQixDQUFwQixDQUFBLENBQXVCLENBQXZCO01BQ0EsbUJBQUEsQ0FBb0IsQ0FBcEIsQ0FBQSxDQUF1QixDQUF2QjtNQUVBLENBQUMsQ0FBQyxNQUFGLENBQUE7TUFDQSxtQkFBQSxDQUFvQixJQUFwQixDQUFBLENBQTBCLENBQTFCO01BQ0EsbUJBQUEsQ0FBb0IsQ0FBcEIsQ0FBQSxDQUF1QixDQUF2QixFQUEwQixDQUExQjtNQUNBLG1CQUFBLENBQW9CLENBQXBCLENBQUEsQ0FBQTtNQUNBLG1CQUFBLENBQW9CLENBQXBCLENBQUEsQ0FBdUIsQ0FBdkI7TUFDQSxtQkFBQSxDQUFvQixDQUFwQixDQUFBLENBQUE7TUFFQSxDQUFDLENBQUMsTUFBRixDQUFBO01BQ0EsbUJBQUEsQ0FBb0IsSUFBcEIsQ0FBQSxDQUEwQixDQUExQixFQUE2QixDQUE3QjtNQUNBLG1CQUFBLENBQW9CLENBQXBCLENBQUEsQ0FBQTtNQUNBLG1CQUFBLENBQW9CLENBQXBCLENBQUEsQ0FBQTtNQUNBLG1CQUFBLENBQW9CLENBQXBCLENBQUEsQ0FBdUIsQ0FBdkI7TUFDQSxtQkFBQSxDQUFvQixDQUFwQixDQUFBLENBQUE7TUFFQSxDQUFDLENBQUMsTUFBRixDQUFBO01BQ0EsbUJBQUEsQ0FBb0IsSUFBcEIsQ0FBQSxDQUEwQixDQUExQixFQUE2QixDQUE3QjtNQUNBLG1CQUFBLENBQW9CLENBQXBCLENBQUEsQ0FBQTtNQUNBLG1CQUFBLENBQW9CLENBQXBCLENBQUEsQ0FBQTtNQUNBLG1CQUFBLENBQW9CLENBQXBCLENBQUEsQ0FBQTtNQUNBLG1CQUFBLENBQW9CLENBQXBCLENBQUEsQ0FBQTtNQUVBLENBQUMsQ0FBQyxXQUFGLENBQWMsQ0FBZDtNQUNBLENBQUMsQ0FBQyxRQUFGLENBQVcsQ0FBWDtNQUNBLENBQUMsQ0FBQyxR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USxPQVBSLEVBT2dCLE1BUGhCLEVBT3VCLE1BUHZCLEVBUWYsT0FSZSxFQVFQLFNBUk8sRUFRRyxLQVJILEVBUVMsTUFSVCxFQVFnQixRQVJoQixFQVF5QixPQVJ6QixFQVNmLElBVGUsRUFTVixPQVRVLEVBU0YsT0FURSxFQVNNLFFBVE4sRUFTZSxNQVRmLEVBU3NCLFNBVHRCLEVBVWYsTUFWZSxFQVVSLElBVlEsRUFVSCxVQVZHLEVBVVEsT0FWUixFQVVnQixNQVZoQixFQVV1QixNQVZ2QixFQVdmLFVBWGUsRUFXSixPQVhJLEVBV0ksS0FYSixFQVdVLFdBWFYsRUFXc0IsUUFYdEIsRUFZZixTQVplLEVBWUwsVUFaSyxFQVlNLE9BWk4sRUFZYyxTQVpkLEVBWXdCLFFBWnhCLEVBYWYsUUFiZSxFQWFOLE1BYk0sRUFhQyxNQWJELEVBYVEsSUFiUixFQWFhLE9BYmIsRUFhcUIsTUFickIsRUFhNEIsUUFiNUI7QUFnQmhCLE9BQUEsa0RBQUE7OztTQUN5QixDQUFFLElBQTFCLEdBQWlDLE1BQUEsR0FBTzs7QUFEekM7QUFHQSxPQUFBLGlEQUFBOzs7VUFDZ0MsQ0FBRSxJQUFqQyxHQUF3QyxNQUFBLEdBQU8sT0FBUCxHQUFlOztBQUR4RDs7UUFHaUIsQ0FBRSxJQUFuQixHQUEwQjs7O1FBQ04sQ0FBRSxJQUF0QixHQUE2Qjs7O1FBQ0osQ0FBRSxJQUEzQixHQUFrQztHQWxDbkM7Ozs7RUFvQ0EsTUFBTSxDQUFDLGFBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJAZGltZW5zaW9ucyA9IF8kc20oJy4vc2ltdWxhdGUnIClcbkBEb20gPSB3aW5kb3cucXVpY2tkb21cbm1vY2hhLnNldHVwKCd0ZGQnKVxubW9jaGEuc2xvdyg0MDApXG5tb2NoYS50aW1lb3V0KDEyMDAwKVxubW9jaGEuYmFpbCgpIHVubGVzcyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWVcbmV4cGVjdCA9IGNoYWkuZXhwZWN0XG5zYW5kYm94ID0gbnVsbFxucmVzdGFydFNhbmRib3ggPSAoKS0+XG5cdHNhbmRib3gucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChzYW5kYm94KSBpZiBzYW5kYm94XG5cdHNhbmRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRzYW5kYm94LmlkID0gJ3NhbmRib3gnXG5cdHNhbmRib3guc2V0QXR0cmlidXRlICdzdHlsZScsICdib3JkZXI6MXB4IHNvbGlkOyBwYWRkaW5nOjIwcHg7IGJveC1zaXppbmc6Ym9yZGVyLWJveCdcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzYW5kYm94KVxuXG5jaGVja0NoaWxkU3RydWN0dXJlID0gKG1haW4pLT4gKGNoaWxkcmVuLi4uKS0+XG5cdGV4cGVjdChtYWluLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoY2hpbGRyZW4ubGVuZ3RoKVxuXHRmb3IgY2hpbGQsaW5kZXggaW4gY2hpbGRyZW5cblx0XHRleHBlY3QobWFpbi5jaGlsZHJlbltpbmRleF0pLnRvLmVxdWFsKGNoaWxkKVxuXHRcdGV4cGVjdChjaGlsZC5lbC5wYXJlbnROb2RlKS50by5lcXVhbChtYWluLmVsKVxuXHRcdGV4cGVjdChjaGlsZC5wYXJlbnQpLnRvLmVxdWFsKG1haW4pXG5cdHJldHVyblxuXG5cbnN1aXRlIFwiUXVpY2tEb21cIiwgKCktPlxuXHRzZXR1cChyZXN0YXJ0U2FuZGJveClcblxuXHR0ZXN0IFwiVmVyc2lvbiBQcm9wZXJ0eVwiLCAoKS0+XG5cdFx0cGFja2FnZVZlcnNpb24gPSAoXyRzbSgnLi4vcGFja2FnZSAkIHZlcnNpb24nICkpXG5cdFx0ZXhwZWN0KERvbS52ZXJzaW9uKS50by5lcXVhbChwYWNrYWdlVmVyc2lvbilcblxuXG5cdHN1aXRlIFwiRWxlbWVudCBDcmVhdGlvblwiLCAoKS0+XG5cdFx0dGVzdCBcIkJhc2ljIENyZWF0aW9uXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbSgnZGl2Jylcblx0XHRcdGV4cGVjdCh0eXBlb2YgZGl2KS50by5lcXVhbCAnb2JqZWN0J1xuXHRcdFx0ZXhwZWN0KHR5cGVvZiBkaXYuZWwpLnRvLmVxdWFsICdvYmplY3QnXG5cdFx0XHRleHBlY3QoZGl2LmVsLmNvbnN0cnVjdG9yLm5hbWUpLnRvLmVxdWFsICdIVE1MRGl2RWxlbWVudCdcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5iZS51bmRlZmluZWRcblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAwXG5cblxuXHRcdHRlc3QgXCJTaG9ydGN1dHNcIiwgKCktPlxuXHRcdFx0ZXhwZWN0KERvbS5hKCkuZWwuY29uc3RydWN0b3IpLnRvLmVxdWFsKERvbSgnYScpLmVsLmNvbnN0cnVjdG9yKVxuXHRcdFx0ZXhwZWN0KERvbS5saW5rKCkuZWwuY29uc3RydWN0b3IpLnRvLmVxdWFsKERvbSgnYScpLmVsLmNvbnN0cnVjdG9yKVxuXHRcdFx0ZXhwZWN0KERvbS5hbmNob3IoKS5lbC5jb25zdHJ1Y3RvcikudG8uZXF1YWwoRG9tKCdhJykuZWwuY29uc3RydWN0b3IpXG5cdFx0XHRleHBlY3QoRG9tLmRpdigpLmVsLmNvbnN0cnVjdG9yKS50by5lcXVhbChEb20oJ2RpdicpLmVsLmNvbnN0cnVjdG9yKVxuXHRcdFx0ZXhwZWN0KERvbS50ZXh0KCkuZWwuY29uc3RydWN0b3IpLnRvLmVxdWFsKERvbSgndGV4dCcpLmVsLmNvbnN0cnVjdG9yKVxuXHRcdFx0ZXhwZWN0KERvbS5zcGFuKCkuZWwuY29uc3RydWN0b3IpLnRvLmVxdWFsKERvbSgnc3BhbicpLmVsLmNvbnN0cnVjdG9yKVxuXHRcdFx0ZXhwZWN0KERvbS5oNCgpLmVsLmNvbnN0cnVjdG9yKS50by5lcXVhbChEb20oJ2g0JykuZWwuY29uc3RydWN0b3IpXG5cdFx0XHRleHBlY3QoRG9tLmhlYWRlcigpLmVsLmNvbnN0cnVjdG9yKS50by5lcXVhbChEb20oJ2hlYWRlcicpLmVsLmNvbnN0cnVjdG9yKVxuXHRcdFx0ZXhwZWN0KERvbS5mb290ZXIoKS5lbC5jb25zdHJ1Y3RvcikudG8uZXF1YWwoRG9tKCdmb290ZXInKS5lbC5jb25zdHJ1Y3Rvcilcblx0XHRcdGV4cGVjdChEb20uc2VjdGlvbigpLmVsLmNvbnN0cnVjdG9yKS50by5lcXVhbChEb20oJ3NlY3Rpb24nKS5lbC5jb25zdHJ1Y3Rvcilcblx0XHRcdGV4cGVjdChEb20uYnV0dG9uKCkuZWwuY29uc3RydWN0b3IpLnRvLmVxdWFsKERvbSgnYnV0dG9uJykuZWwuY29uc3RydWN0b3IpXG5cdFx0XHRleHBlY3QoRG9tLmlucHV0KCkuZWwuY29uc3RydWN0b3IpLnRvLmVxdWFsKERvbSgnaW5wdXQnKS5lbC5jb25zdHJ1Y3Rvcilcblx0XHRcdCMgZXhwZWN0KERvbS5tYWluKCkuZWwuY29uc3RydWN0b3IpLnRvLmVxdWFsKERvbSgnbWFpbicpLmVsLmNvbnN0cnVjdG9yKVxuXHRcdFx0dHlwZXMgPSBbJ2EnLCdkaXYnLCd0ZXh0Jywnc3BhbicsJ2g0JywnaGVhZGVyJywnZm9vdGVyJywnc2VjdGlvbicsJ2J1dHRvbicsJ2lucHV0J11cblx0XHRcdGZvciB0eXBlIGluIHR5cGVzXG5cdFx0XHRcdGV4cGVjdChEb21bdHlwZV0oKS5lbC5jb25zdHJ1Y3Rvci5uYW1lKS5ub3QudG8uY29udGFpbignVW5rbm93bicpXG5cdFx0XHRyZXR1cm5cblxuXG5cdFx0dGVzdCBcIkJhc2ljIG9wdGlvbnNcIiwgKCktPlxuXHRcdFx0QSA9IERvbS5kaXYoY2xhc3M6J2FiYy0xMjMnLCBwcm9wczp7J2FiYyc6MTIzLCAnZGVmJzo0NTZ9KVxuXHRcdFx0QiA9IERvbS5kaXYoaWQ6J0InLCBjbGFzc05hbWU6J2FiYy0xMjMnLCBhdHRyczp7J2RhdGEtYWJjJzoxMjMsICdkYXRhLWRlZic6NDU2fSlcblx0XHRcdEMgPSBEb20uaW5wdXQodHlwZTondGV4dCcsIG5hbWU6J2FiYycsIHZhbHVlOidoZWxsbycpXG5cdFx0XHREID0gRG9tLmlucHV0KHR5cGU6J2NoZWNrYm94JywgY2hlY2tlZDp0cnVlKVxuXHRcdFx0RSA9IERvbS5vcHRpb24obmFtZTonYWJjJywgdmFsdWU6J2hlbGxvJywgc2VsZWN0ZWQ6dHJ1ZSlcblx0XHRcdEYgPSBEb20ubGluayhocmVmOidodHRwczovL2dvb2dsZS5jb20vJylcblx0XHRcdEcgPSBEb20uYW5jaG9yKHVybDonaHR0cHM6Ly9nb29nbGUuY29tLycpXG5cdFx0XHRIID0gRG9tLnRleHQoJ1NvbWUgdGV4dCcpXG5cdFx0XHRJID0gRG9tLmltZyhzcmM6J2h0dHBzOi8vZ29vZ2xlLmNvbS8nKVxuXHRcdFx0SiA9IERvbS5kaXYocmVsYXRlZEluc3RhbmNlOiBvYmo9e2E6MX0pXG5cblx0XHRcdGV4cGVjdChBLmVsLmNsYXNzTmFtZSkudG8uZXF1YWwoJ2FiYy0xMjMnKVxuXHRcdFx0ZXhwZWN0KEEuZWwuYWJjKS50by5lcXVhbCgxMjMpXG5cdFx0XHRleHBlY3QoQS5lbC5kZWYpLnRvLmVxdWFsKDQ1Nilcblx0XHRcdGV4cGVjdChCLmVsLmNsYXNzTmFtZSkudG8uZXF1YWwoJ2FiYy0xMjMnKVxuXHRcdFx0ZXhwZWN0KEIuZWwuaWQpLnRvLmVxdWFsKCdCJylcblx0XHRcdGV4cGVjdChCLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1hYmMnKSkudG8uZXF1YWwoJzEyMycpXG5cdFx0XHRleHBlY3QoQi5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVmJykpLnRvLmVxdWFsKCc0NTYnKVxuXHRcdFx0ZXhwZWN0KEIuZWwuZGF0YXNldC5hYmMpLnRvLmVxdWFsKCcxMjMnKSBpZiBCLmVsLmRhdGFzZXRcblx0XHRcdGV4cGVjdChDLmVsLnR5cGUpLnRvLmVxdWFsKCd0ZXh0Jylcblx0XHRcdGV4cGVjdChDLmVsLm5hbWUpLnRvLmVxdWFsKCdhYmMnKVxuXHRcdFx0ZXhwZWN0KEMuZWwudmFsdWUpLnRvLmVxdWFsKCdoZWxsbycpXG5cdFx0XHRleHBlY3QoRC5lbC5jaGVja2VkKS50by5lcXVhbCh0cnVlKVxuXHRcdFx0ZXhwZWN0KEUuZWwubmFtZSkudG8uZXF1YWwoJ2FiYycpXG5cdFx0XHRleHBlY3QoRS5lbC5zZWxlY3RlZCkudG8uZXF1YWwodHJ1ZSlcblx0XHRcdGV4cGVjdChGLmVsLmhyZWYpLnRvLmVxdWFsKCdodHRwczovL2dvb2dsZS5jb20vJylcblx0XHRcdGV4cGVjdChHLmVsLmhyZWYpLnRvLmVxdWFsKCdodHRwczovL2dvb2dsZS5jb20vJylcblx0XHRcdGV4cGVjdChILmVsLm5vZGVUeXBlKS50by5lcXVhbCgzKVxuXHRcdFx0ZXhwZWN0KEguZWwudGV4dENvbnRlbnQpLnRvLmVxdWFsKCdTb21lIHRleHQnKVxuXHRcdFx0ZXhwZWN0KEkuZWwuc3JjKS50by5lcXVhbCgnaHR0cHM6Ly9nb29nbGUuY29tLycpXG5cdFx0XHRleHBlY3QoSi5yZWxhdGVkKS50by5lcXVhbChvYmopXG5cdFx0XHRleHBlY3QoSi5vcHRpb25zLnJlbGF0ZWRJbnN0YW5jZSkudG8uZXF1YWwob2JqKVxuXG5cblx0XHR0ZXN0IFwiQ3JlYXRpb24gdy8gY2hpbGRyZW5cIiwgKCktPlxuXHRcdFx0QSA9IERvbS5kaXYobnVsbCwgJ1NvbWUgdGV4dCcpXG5cdFx0XHRCID0gRG9tLmRpdihudWxsLCBEb20uc3BhbigpLCAnU29tZSB0ZXh0JywgRG9tLnNwYW4oKSlcblxuXHRcdFx0ZXhwZWN0KEEuZWwuY2hpbGROb2Rlcy5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoQS5lbC5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDApXG5cdFx0XHRleHBlY3QoQS5lbC5jaGlsZE5vZGVzWzBdLm5vZGVUeXBlKS50by5lcXVhbCgzKVxuXHRcdFx0ZXhwZWN0KEEuZWwuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCkudG8uZXF1YWwoJ1NvbWUgdGV4dCcpXG5cdFx0XHRleHBlY3QoQS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoQi5lbC5jaGlsZE5vZGVzLmxlbmd0aCkudG8uZXF1YWwoMylcblx0XHRcdGV4cGVjdChCLmVsLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChCLmVsLmNoaWxkTm9kZXNbMF0ubm9kZVR5cGUpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoQi5lbC5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpLnRvLmVxdWFsKCdzcGFuJylcblx0XHRcdGV4cGVjdChCLmVsLmNoaWxkTm9kZXNbMV0ubm9kZVR5cGUpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QoQi5lbC5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50KS50by5lcXVhbCgnU29tZSB0ZXh0Jylcblx0XHRcdGV4cGVjdChCLmVsLmNoaWxkTm9kZXNbMl0ubm9kZVR5cGUpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoQi5lbC5jaGlsZE5vZGVzWzJdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpLnRvLmVxdWFsKCdzcGFuJylcblx0XHRcdGV4cGVjdChCLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMylcblxuXG5cdFx0dGVzdCBcIkFycmF5IHN5bnRheFwiLCAoKS0+XG5cdFx0XHRzZWN0aW9uID0gRG9tKFxuXHRcdFx0XHRbJ3NlY3Rpb24nLCB7c3R5bGU6ZGlzcGxheTonaW5saW5lJ30sIFxuXHRcdFx0XHRcdFsnZGl2JywgbnVsbCwgJ2NoaWxkQSddXG5cdFx0XHRcdFx0WydzcGFuJywgbnVsbCwgXG5cdFx0XHRcdFx0XHRbJ3N0cm9uZycsIG51bGwsICdjaGlsZEInXVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XHRbJ2RpdicsIG51bGwsICdjaGlsZEMnLCBcblx0XHRcdFx0XHRcdFsnc3BhbicsIG51bGwsICdjaGlsZENfMSddXG5cdFx0XHRcdFx0XHRbJ3NwYW4nLCBudWxsLCAnY2hpbGRDXzInXVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XVxuXHRcdFx0KVxuXG5cdFx0XHRleHBlY3Qoc2VjdGlvbikubm90LnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChzZWN0aW9uLnJhdy5zdHlsZS5kaXNwbGF5KS50by5lcXVhbCgnaW5saW5lJylcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMylcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuWzFdLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuWzJdLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMylcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzFdLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzJdLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuWzBdLnRleHQpLnRvLmVxdWFsKCdjaGlsZEEnKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW5bMV0udGV4dCkudG8uZXF1YWwoJ2NoaWxkQicpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblsyXS50ZXh0KS50by5lcXVhbCgnY2hpbGRDY2hpbGRDXzFjaGlsZENfMicpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblsyXS5jaGlsZHJlblsxXS50ZXh0KS50by5lcXVhbCgnY2hpbGRDXzEnKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW5bMl0uY2hpbGRyZW5bMl0udGV4dCkudG8uZXF1YWwoJ2NoaWxkQ18yJylcblxuXG5cdFx0dGVzdCBcIkV4aXN0aW5nIEVsZW1lbnRcIiwgKCktPlxuXHRcdFx0ZGl2UmF3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRcdEEgPSBEb20oZGl2UmF3KVxuXHRcdFx0QiA9IERvbShkaXZSYXcpXG5cdFx0XHRDID0gRG9tKEEpXG5cblx0XHRcdGV4cGVjdChBLmVsKS50by5lcXVhbChkaXZSYXcpXG5cdFx0XHRleHBlY3QoQi5lbCkudG8uZXF1YWwoZGl2UmF3KVxuXHRcdFx0ZXhwZWN0KEMuZWwpLnRvLmVxdWFsKGRpdlJhdylcblx0XHRcdGV4cGVjdChBKS50by5lcXVhbChCKVxuXHRcdFx0ZXhwZWN0KEIpLnRvLmVxdWFsKEMpXG5cdFx0XHRleHBlY3QoQykudG8uZXF1YWwoZGl2UmF3Ll9xdWlja0VsZW1lbnQpXG5cblxuXHRcdHRlc3QgXCJFeGlzdGluZyBFbGVtZW50IHcvIE9wdGlvbnNcIiwgKCktPlxuXHRcdFx0ZGl2UmF3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRcdGRpdlJhdy5pZCA9ICdBJ1xuXG5cdFx0XHRkaXYgPSBEb20oZGl2UmF3LCB7aWQ6J0InLCBjbGFzczonYWJjLTEyMyd9KVxuXHRcdFx0ZXhwZWN0KGRpdlJhdy5pZCkudG8uZXF1YWwoJ0InKVxuXHRcdFx0ZXhwZWN0KGRpdlJhdy5jbGFzc05hbWUpLnRvLmVxdWFsKCdhYmMtMTIzJylcblx0XHRcdFxuXHRcdFx0ZGl2ID0gRG9tKGRpdiwge2lkOidDJywgY2xhc3M6J2RlZi00NTYnfSlcblx0XHRcdGV4cGVjdChkaXZSYXcuaWQpLnRvLmVxdWFsKCdDJylcblx0XHRcdGV4cGVjdChkaXZSYXcuY2xhc3NOYW1lKS50by5lcXVhbCgnZGVmLTQ1NicpXG5cblxuXHRcdHRlc3QgXCJEb2N1bWVudCBub2RlXCIsICgpLT5cblx0XHRcdGRvYyA9IERvbShkb2N1bWVudClcblx0XHRcdGV4cGVjdChkb2MpLm5vdC50by5iZS51bmRlZmluZWRcblx0XHRcdGV4cGVjdChkb2MucmF3KS50by5lcXVhbChkb2N1bWVudClcblx0XHRcdGV4cGVjdChkb2MucGFyZW50KS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoZG9jLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChEb20oc2FuZGJveCkucGFyZW50cykubm90LnRvLmNvbnRhaW4oZG9jKVxuXHRcdFx0ZXhwZWN0KERvbShzYW5kYm94KS5wYXJlbnRzKS50by5jb250YWluKGRvYy5jaGlsZHJlblswXSlcblxuXG5cdFx0dGVzdCBcIldpbmRvdyBvYmplY3RcIiwgKCktPlxuXHRcdFx0d2luID0gRG9tKHdpbmRvdylcblx0XHRcdGV4cGVjdCh3aW4pLm5vdC50by5iZS51bmRlZmluZWRcblx0XHRcdGV4cGVjdCh3aW4ucmF3IGlzIHdpbmRvdykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KHdpbi5wYXJlbnQpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdCh3aW4uY2hpbGRyZW4pLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdCh3aW4uYXBwZW5kKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3Qod2luLmh0bWwpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdCh3aW4uc3R5bGUpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChEb20oc2FuZGJveCkucGFyZW50cykubm90LnRvLmNvbnRhaW4od2luKVxuXG5cblx0XHR0ZXN0IFwiQ3JlYXRpb24gdy8gc3R5bGluZ1wiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2IHN0eWxlOlxuXHRcdFx0XHQnd2lkdGgnOiAnMTBweCdcblx0XHRcdFx0J2hlaWdodCc6IDE1XG5cdFx0XHRcdCdsYW1lbyc6ICcxOXB4J1xuXHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICdibHVlJ1xuXHRcdFx0XHQnYmFja2dyb3VuZFNpemUnOiAnY292ZXInXG5cblx0XHRcdHNhbmRib3guYXBwZW5kQ2hpbGQoZGl2LmVsKVxuXHRcdFx0Y29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZGl2LmVsKVxuXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlLmxhbWVvKS50by5lcXVhbCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmxhbWVvKS50by5lcXVhbCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCAnMTBweCdcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwgJzE1cHgnXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5iYWNrZ3JvdW5kQ29sb3IpLm5vdC50by5lcXVhbCAnJ1xuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuYmFja2dyb3VuZFNpemUpLnRvLmVxdWFsICdjb3ZlcidcblxuXG5cdFx0dGVzdCBcIlNWRyBlbGVtZW50cyBjYW4gYmUgY3JlYXRlZCB2aWEgYSAnKicgaW4gdGhlIGVsZW1lbnQncyB0eXBlIHN0cmluZ1wiLCAoKS0+XG5cdFx0XHRzdmdCYWQgPSBEb20oJ3N2ZycpLmVsXG5cdFx0XHRzdmdHb29kID0gRG9tKCcqc3ZnJykuZWxcblx0XHRcdHN2Z1BvbHlCYWQgPSBEb20oJ3BvbHlsaW5lJykuZWxcblx0XHRcdHN2Z1BvbHlHb29kID0gRG9tKCcqcG9seWxpbmUnKS5lbFxuXHRcdFx0c3ZnRGl2ID0gRG9tKCcqZGl2JykuZWxcblxuXHRcdFx0ZXhwZWN0KHN2Z0JhZC5jb25zdHJ1Y3Rvci5uYW1lKS50by5lcXVhbCgnSFRNTFVua25vd25FbGVtZW50Jylcblx0XHRcdGV4cGVjdChzdmdQb2x5QmFkLmNvbnN0cnVjdG9yLm5hbWUpLnRvLmVxdWFsKCdIVE1MVW5rbm93bkVsZW1lbnQnKVxuXHRcdFx0ZXhwZWN0KHN2Z0dvb2QuY29uc3RydWN0b3IubmFtZSkudG8uZXF1YWwoJ1NWR1NWR0VsZW1lbnQnKVxuXHRcdFx0ZXhwZWN0KHN2Z1BvbHlHb29kLmNvbnN0cnVjdG9yLm5hbWUpLnRvLmVxdWFsKCdTVkdQb2x5bGluZUVsZW1lbnQnKVxuXHRcdFx0ZXhwZWN0KHN2Z0Rpdi5jb25zdHJ1Y3Rvci5uYW1lKS50by5lcXVhbCgnU1ZHRWxlbWVudCcpXG5cblxuXHRcdHRlc3QgXCJRdWlja0RvbS5odG1sKCkgYWNjZXB0cyBhbiBodG1sIHN0cmluZyB3aGljaCB3b3VsZCBiZSBwYXJzZWQgYW5kIGNvbnZlcnRlZCBpbnRvIGEgUXVpY2tCYXRjaCBpbnN0YW5jZVwiLCAoKS0+XG5cdFx0XHRodG1sU3RyaW5nID0gXCJcblx0XHRcdFx0PGRpdj5maXJzdENoaWxkVGV4dDwvZGl2PjxzcGFuPnNlY29uZENoaWxkVGV4dDwvc3Bhbj5cblx0XHRcdFx0dGV4dE5vZGVcblx0XHRcdFx0PHN0cm9uZz5hYmMxMjM8L3N0cm9uZz5cblx0XHRcdFwiXG5cdFx0XHR3aW5kb3cuYmF0Y2ggPSBEb20uaHRtbChodG1sU3RyaW5nKVxuXG5cdFx0XHRleHBlY3QodHlwZW9mIGJhdGNoKS50by5lcXVhbCAnb2JqZWN0J1xuXHRcdFx0ZXhwZWN0KGJhdGNoLmNvbnN0cnVjdG9yLm5hbWUpLnRvLmVxdWFsICdRdWlja0JhdGNoJ1xuXHRcdFx0ZXhwZWN0KGJhdGNoLmVsZW1lbnRzLmxlbmd0aCkudG8uZXF1YWwgNFxuXHRcdFx0ZXhwZWN0KGJhdGNoLmVsZW1lbnRzWzBdLnR5cGUpLnRvLmVxdWFsICdkaXYnXG5cdFx0XHRleHBlY3QoYmF0Y2guZWxlbWVudHNbMV0udHlwZSkudG8uZXF1YWwgJ3NwYW4nXG5cdFx0XHRleHBlY3QoYmF0Y2guZWxlbWVudHNbMl0udHlwZSkudG8uZXF1YWwgJ3RleHQnXG5cdFx0XHRleHBlY3QoYmF0Y2guZWxlbWVudHNbM10udHlwZSkudG8uZXF1YWwgJ3N0cm9uZydcblx0XHRcdGV4cGVjdChiYXRjaC5lbGVtZW50c1swXS50ZXh0KS50by5lcXVhbCAnZmlyc3RDaGlsZFRleHQnXG5cdFx0XHRleHBlY3QoYmF0Y2guZWxlbWVudHNbMV0udGV4dCkudG8uZXF1YWwgJ3NlY29uZENoaWxkVGV4dCdcblx0XHRcdGV4cGVjdChiYXRjaC5lbGVtZW50c1syXS50ZXh0KS50by5pbmNsdWRlICd0ZXh0Tm9kZSdcblx0XHRcdGV4cGVjdChiYXRjaC5lbGVtZW50c1szXS50ZXh0KS50by5lcXVhbCAnYWJjMTIzJ1xuXG5cblxuXHRcdHRlc3QgXCJNZXRob2QvUHJvcGVydHkgYWxpYXNlc1wiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20oJ2RpdicpXG5cdFx0XHRleHBlY3QoZGl2LnJhdykudG8uZXF1YWwoZGl2LmVsKVxuXHRcdFx0ZXhwZWN0KGRpdlswXSkudG8uZXF1YWwoZGl2LmVsKVxuXHRcdFx0ZXhwZWN0KGRpdi5jc3MpLnRvLmVxdWFsKGRpdi5zdHlsZSlcblx0XHRcdGV4cGVjdChkaXYucmVwbGFjZVdpdGgpLnRvLmVxdWFsKGRpdi5yZXBsYWNlKVxuXG5cblxuXHRzdWl0ZSBcIkV2ZW50c1wiLCAoKS0+XG5cdFx0dGVzdCBcIkV2ZW50cyBjYW4gYmUgbGlzdGVuZWQgdG8gdmlhIHRoZSAub24gbWV0aG9kXCIsICgpLT5cblx0XHRcdGVtaXRDb3VudEEgPSBlbWl0Q291bnRCID0gMFxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cdFx0XHRkaXYub24gJ215Q2xpY2snLCAoZXZlbnQpLT5cblx0XHRcdFx0ZXhwZWN0KHR5cGVvZiBldmVudCkudG8uZXF1YWwgJ29iamVjdCdcblx0XHRcdFx0ZXhwZWN0KGV2ZW50LnR5cGUpLnRvLmVxdWFsICdteUNsaWNrJ1xuXHRcdFx0XHRlbWl0Q291bnRBKytcblx0XHRcdFxuXG5cdFx0XHRkaXYuZWwuZW1pdEV2ZW50KCdteUNsaWNrJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgxKVxuXHRcdFx0ZGl2LmVsLmVtaXRFdmVudCgnbXlDbGljaycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMilcblx0XHRcdFxuXHRcdFx0ZGl2Lm9uICdteUNsaWNrJywgKGV2ZW50KS0+IGVtaXRDb3VudEIrK1xuXHRcdFx0ZGl2LmVsLmVtaXRFdmVudCgnbXlDbGljaycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgzKVxuXHRcdFx0ZGl2LmVsLmVtaXRFdmVudCgnbXlDbGljaycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCg0KVxuXG5cblx0XHR0ZXN0IFwiRXZlbnRzIGNhbiBiZSBlbWl0dGVkIHZpYSB0aGUgLmVtaXQgbWV0aG9kXCIsICgpLT5cblx0XHRcdGVtaXRDb3VudEEgPSBlbWl0Q291bnRCID0gMFxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cdFx0XHRkaXYub24gJ215RXZlbnQnLCAoKS0+IGVtaXRDb3VudEErK1xuXHRcdFx0ZGl2LmVsLmFkZEV2ZW50TGlzdGVuZXIgJ215RXZlbnQnLCAoKS0+IGVtaXRDb3VudEIrK1xuXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMClcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgwKVxuXHRcdFx0XG5cdFx0XHRkaXYuZW1pdCgnbXlFdmVudCcpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgxKVxuXHRcdFx0XG5cdFx0XHRkaXYuZWwuZW1pdEV2ZW50KCdteUV2ZW50Jylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDIpXG5cblxuXHRcdHRlc3QgXCJFdmVudCBoYW5kbGVycyBjYW4gYmUgbWFudWFsbHkgaW52b2tlZCB3aXRoIGEgY3VzdG9tIGFyZyB2aWEgdGhlIC5lbWl0UHJpdmF0ZSBtZXRob2RcIiwgKCktPlxuXHRcdFx0ZW1pdENvdW50QSA9IGVtaXRDb3VudEIgPSAwXG5cdFx0XHRhcmcgPSBudWxsXG5cdFx0XHRkaXYgPSBEb20uZGl2KClcblx0XHRcdGRpdi5vbiAnbXlFdmVudCcsICgpLT4gZW1pdENvdW50QSsrOyBhcmcgPSBhcmd1bWVudHNbMF1cblx0XHRcdGRpdi5lbC5hZGRFdmVudExpc3RlbmVyICdteUV2ZW50JywgKCktPiBlbWl0Q291bnRCKytcblxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDApXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMClcblx0XHRcdGV4cGVjdChhcmcpLnRvLmVxdWFsKG51bGwpXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0UHJpdmF0ZSgnbXlFdmVudCcpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgwKVxuXHRcdFx0ZXhwZWN0KGFyZykudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0XG5cdFx0XHRkaXYuZW1pdFByaXZhdGUoJ215RXZlbnQnLCAnYWJjMTIzJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDApXG5cdFx0XHRleHBlY3QoYXJnKS50by5lcXVhbCgnYWJjMTIzJylcblx0XHRcdFxuXHRcdFx0ZGl2LmVsLmVtaXRFdmVudCgnbXlFdmVudCcpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGFyZykubm90LnRvLmVxdWFsKCdhYmMxMjMnKVxuXHRcdFx0ZXhwZWN0KHR5cGVvZiBhcmcpLnRvLmVxdWFsKCdvYmplY3QnKVxuXG5cblx0XHR0ZXN0IFwiQm9vbGVhbnMgY2FuIGJlIHBhc3NlZCBmb3IgdGhlIDJuZCBhbmQgM3JkIGFyZ3Mgb2YgLmVtaXQgdG8gY29udHJvbCBldmVudC5idWJibGVzIGFuZCBldmVudC5jYW5jZWxhYmxlXCIsICgpLT5cblx0XHRcdGVtaXRDb3VudEEgPSBlbWl0Q291bnRCID0gZW1pdENvdW50QyA9IDBcblx0XHRcdGRpdiA9IERvbS5kaXYoKVxuXHRcdFx0ZGl2Lm9uICdldmVudEEnLCAoZXZlbnQpLT4gZW1pdENvdW50QSsrOyBleHBlY3QoZXZlbnQuYnViYmxlcykudG8uYmUudHJ1ZTsgZXhwZWN0KGV2ZW50LmNhbmNlbGFibGUpLnRvLmJlLnRydWVcblx0XHRcdGRpdi5vbiAnZXZlbnRCJywgKGV2ZW50KS0+IGVtaXRDb3VudEIrKzsgZXhwZWN0KGV2ZW50LmJ1YmJsZXMpLnRvLmJlLmZhbHNlOyBleHBlY3QoZXZlbnQuY2FuY2VsYWJsZSkudG8uYmUudHJ1ZVxuXHRcdFx0ZGl2Lm9uICdldmVudEMnLCAoZXZlbnQpLT4gZW1pdENvdW50QysrOyBleHBlY3QoZXZlbnQuYnViYmxlcykudG8uYmUuZmFsc2U7IGV4cGVjdChldmVudC5jYW5jZWxhYmxlKS50by5iZS5mYWxzZVxuXG5cdFx0XHRkaXYuZW1pdCgnZXZlbnRBJyk7IGRpdi5lbWl0KCdldmVudEInLCBmYWxzZSk7IGRpdi5lbWl0KCdldmVudEMnLCBmYWxzZSwgZmFsc2UpO1xuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChlbWl0Q291bnRDKS50by5lcXVhbCgxKVxuXG5cblx0XHR0ZXN0IFwiRXZlbnQgbGlzdGVuZXJzIGNhbiBiZSByZW1vdmVkIHZpYSB0aGUgLm9mZiBtZXRob2RcIiwgKCktPlxuXHRcdFx0ZW1pdENvdW50QSA9IGVtaXRDb3VudEIgPSBlbWl0Q291bnRDID0gZW1pdENvdW50RCA9IDBcblx0XHRcdGRpdiA9IERvbS5kaXYoKVxuXHRcdFx0ZGl2Lm9uICdteUV2ZW50JywgKCktPiBlbWl0Q291bnRBKytcblx0XHRcdGRpdi5vbiAnbXlFdmVudCcsIGV2ZW50Q0I9KCktPiBlbWl0Q291bnRCKytcblx0XHRcdGRpdi5vbiAnYW5vdGhlckV2ZW50JywgKCktPiBlbWl0Q291bnRDKytcblx0XHRcdGRpdi5lbC5hZGRFdmVudExpc3RlbmVyICdteUV2ZW50JywgKCktPiBlbWl0Q291bnREKytcblxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDApXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMClcblx0XHRcdGV4cGVjdChlbWl0Q291bnRDKS50by5lcXVhbCgwKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEQpLnRvLmVxdWFsKDApXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50Jyk7IGRpdi5lbWl0KCdhbm90aGVyRXZlbnQnKTtcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QykudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChlbWl0Q291bnREKS50by5lcXVhbCgxKVxuXHRcdFx0XG5cdFx0XHRkaXYub2ZmKCdteUV2ZW50JywgZXZlbnRDQilcblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50Jyk7IGRpdi5lbWl0KCdhbm90aGVyRXZlbnQnKTtcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QykudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChlbWl0Q291bnREKS50by5lcXVhbCgyKVxuXHRcdFx0XG5cdFx0XHRkaXYub24gJ215RXZlbnQnLCAoKS0+IGVtaXRDb3VudEIrK1xuXHRcdFx0ZGl2Lm9mZignbXlFdmVudCcpXG5cdFx0XHRkaXYuZW1pdCgnbXlFdmVudCcpOyBkaXYuZW1pdCgnYW5vdGhlckV2ZW50Jyk7XG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEMpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50RCkudG8uZXF1YWwoMylcblx0XHRcdFxuXHRcdFx0ZGl2Lm9uICdteUV2ZW50JywgKCktPiBlbWl0Q291bnRBKytcblx0XHRcdGRpdi5vbiAnbXlFdmVudCcsICgpLT4gZW1pdENvdW50QisrXG5cdFx0XHRkaXYub2ZmKClcblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50Jyk7IGRpdi5lbWl0KCdhbm90aGVyRXZlbnQnKTtcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QykudG8uZXF1YWwoMylcblx0XHRcdGV4cGVjdChlbWl0Q291bnREKS50by5lcXVhbCg0KVxuXG5cblx0XHR0ZXN0IFwiRXZlbnRzIGNhbiBiZSBuYW1lZCB2aWEgYSAnPGV2ZW50Pi48bmFtZT4nIHN5bnRheCB3aGljaCBjYW4gYmUgdXNlZCB0byByZW1vdmUgbGlzdGVuZXJzIGxhdGVyIG9uIHdpdGhvdXQgdGhlIG9yaWdpbmFsIGNhbGxiYWNrc1wiLCAoKS0+XG5cdFx0XHRlbWl0Q291bnRBID0gZW1pdENvdW50QiA9IDBcblx0XHRcdGRpdiA9IERvbS5kaXYoKS5hcHBlbmRUbyhzYW5kYm94KVxuXG5cdFx0XHRhdHRhY2hMaXN0ZW5lcnMgPSAoKS0+XG5cdFx0XHRcdGRpdi5vbiAnbXlFdmVudC5zb21lTmFtZScsICgpLT4gZW1pdENvdW50QSsrO1xuXHRcdFx0XHRkaXYub24gJ215RXZlbnQnLCAoKS0+IGVtaXRDb3VudEIrKztcblxuXHRcdFx0YXR0YWNoTGlzdGVuZXJzKClcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgwKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDApXG5cblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50Jylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50LnNvbWVOYW1lJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRcblx0XHRcdGRpdi5vZmYoJ215RXZlbnQuc29tZU90aGVyTmFtZScpXG5cdFx0XHRkaXYuZW1pdCgnbXlFdmVudCcpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgyKVxuXHRcdFx0XG5cdFx0XHRkaXYub2ZmKCdteUV2ZW50LnNvbWVOYW1lJylcblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50Jylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDMpXG5cdFx0XHRcblx0XHRcdGRpdi5vZmYoJ215RXZlbnQnKVxuXHRcdFx0YXR0YWNoTGlzdGVuZXJzKClcblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50Jylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgzKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDQpXG5cdFx0XHRcblx0XHRcdGRpdi5vZmYoJ215RXZlbnQnKVxuXHRcdFx0ZGl2LmVtaXQoJ215RXZlbnQnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoNClcblxuXG5cdFx0dGVzdCBcIk11bHRpcGxlIGV2ZW50cyBjYW4gYmUgcmVnaXN0ZXJlZC9kZXJlZ2lzdGVyZWQgYXQgb25jZSB1c2luZyB3aGl0ZXNwYWNlIHNlcGFyYXRvcnNcIiwgKCktPlxuXHRcdFx0ZW1pdENvdW50ID0gMFxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cblx0XHRcdGRpdi5vbiAnb25lIHR3byAgIHRocmVlJywgKCktPiBlbWl0Q291bnQrK1xuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgMFxuXG5cdFx0XHRkaXYuZW1pdCgnb25lJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDFcblxuXHRcdFx0ZGl2LmVtaXQoJ3R3bycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAyXG5cblx0XHRcdGRpdi5lbWl0KCd0aHJlZScpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAzXG5cblx0XHRcdGRpdi5vZmYoJ29uZSAgICAgIHRocmVlJylcblx0XHRcdGRpdi5lbWl0KCdvbmUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgM1xuXG5cdFx0XHRkaXYuZW1pdCgndHdvJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDRcblxuXHRcdFx0ZGl2LmVtaXQoJ3RocmVlJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDRcblxuXHRcdFx0ZGl2Lm9mZigpXG5cdFx0XHRkaXYuZW1pdCgnb25lJyk7IGRpdi5lbWl0KCd0d28nKTsgZGl2LmVtaXQoJ3RocmVlJyk7XG5cdFx0XHRkaXYub24gJ29uZSB0d28gICB0aHJlZS5zb21lTmFtZScsICgpLT4gZW1pdENvdW50Kytcblx0XHRcdGRpdi5vbiAnb25lIHR3byAgIHRocmVlJywgKCktPiBlbWl0Q291bnQrK1xuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgNFxuXG5cdFx0XHRkaXYuZW1pdCgnb25lJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDZcblxuXHRcdFx0ZGl2LmVtaXQoJ3R3bycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCA4XG5cblx0XHRcdGRpdi5lbWl0KCd0aHJlZScpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAxMFxuXG5cdFx0XHRkaXYub2ZmKCd0d28gXFx0b25lLnNvbWVOYW1lJylcblx0XHRcdGRpdi5lbWl0KCdvbmUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgMTFcblxuXHRcdFx0ZGl2LmVtaXQoJ3R3bycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAxMlxuXG5cdFx0XHRkaXYuZW1pdCgndGhyZWUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgMTRcblx0XHRcdFxuXHRcdFx0ZGl2Lm9mZignb25lIHRocmVlJylcblx0XHRcdGRpdi5lbWl0KCdvbmUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgMTRcblxuXHRcdFx0ZGl2LmVtaXQoJ3R3bycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAxNVxuXG5cdFx0XHRkaXYuZW1pdCgndGhyZWUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgMTVcblxuXG5cdFx0dGVzdCBcIkV2ZW50cyBjYW4gYmUgbGlzdGVuZWQgZm9yIG9uY2UgdmlhIHRoZSAub25jZSBtZXRob2RcIiwgKCktPlxuXHRcdFx0ZW1pdENvdW50QSA9IGVtaXRDb3VudEIgPSAwXG5cdFx0XHRkaXYgPSBEb20uZGl2KClcblx0XHRcdGRpdi5vbmNlICdteUNsaWNrJywgKGV2ZW50KS0+XG5cdFx0XHRcdGV4cGVjdCh0eXBlb2YgZXZlbnQpLnRvLmVxdWFsICdvYmplY3QnXG5cdFx0XHRcdGV4cGVjdChldmVudC50eXBlKS50by5lcXVhbCAnbXlDbGljaydcblxuXHRcdFx0ZGl2Lm9uICdteUNsaWNrJywgKCktPiBlbWl0Q291bnRBKytcblx0XHRcdGRpdi5vbmNlICdteUNsaWNrJywgKCktPiBlbWl0Q291bnRCKytcblx0XHRcdFxuXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMClcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgwKVxuXHRcdFx0XG5cdFx0XHRkaXYuZWwuZW1pdEV2ZW50KCdteUNsaWNrJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRcblx0XHRcdGRpdi5lbC5lbWl0RXZlbnQoJ215Q2xpY2snKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMSlcblx0XHRcdFxuXHRcdFx0ZGl2Lm9uY2UgJ215Q2xpY2snLCAoZXZlbnQpLT4gZW1pdENvdW50QisrXG5cdFx0XHRcblx0XHRcdGRpdi5lbC5lbWl0RXZlbnQoJ215Q2xpY2snKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMilcblx0XHRcdFxuXHRcdFx0ZGl2LmVsLmVtaXRFdmVudCgnbXlDbGljaycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoNClcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgyKVxuXG5cblx0XHR0ZXN0IFwiUHJlLWRlZmluZWQgZXZlbnQgbGlzdGVuZXJzIGNhbiBiZSBwYXNzZWQgaW4gb3B0aW9ucy5ldmVudHNcIiwgKCktPlxuXHRcdFx0ZW1pdENvdW50ID0gMFxuXHRcdFx0ZW1pdENvbnRleHQgPSBudWxsXG5cdFx0XHRsaXN0ZW5lcnMgPVxuXHRcdFx0XHQnb25lIHR3byB0aHJlZSc6ICgpLT4gZW1pdENvdW50Kytcblx0XHRcdFx0J2ZvdXInOiAoKS0+IGVtaXRDb3VudCsrXG5cdFx0XHRcdCdmaXZlJzogKCktPiBlbWl0Q29udGV4dCA9IEBcblx0XHRcdFxuXHRcdFx0ZGl2ID0gRG9tLmRpdihldmVudHM6bGlzdGVuZXJzKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgMFxuXG5cdFx0XHRkaXYuZW1pdCgnb25lJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDFcblxuXHRcdFx0ZGl2LmVtaXQoJ3R3bycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAyXG5cblx0XHRcdGRpdi5lbWl0KCd0aHJlZScpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAzXG5cblx0XHRcdGRpdi5lbWl0KCdmb3VyJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDRcblxuXHRcdFx0ZGl2Lm9mZignb25lICAgICAgdGhyZWUnKVxuXHRcdFx0ZGl2LmVtaXQoJ29uZScpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCA0XG5cblx0XHRcdGRpdi5lbWl0KCd0d28nKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgNVxuXG5cdFx0XHRkaXYuZW1pdCgndGhyZWUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgNVxuXG5cdFx0XHRkaXYuZW1pdCgnZml2ZScpXG5cdFx0XHRleHBlY3QoZW1pdENvbnRleHQpLnRvLmVxdWFsIGRpdlswXVxuXG5cdFx0XHRkaXYub2ZmKClcblx0XHRcdGRpdi5lbWl0KCdvbmUnKTsgZGl2LmVtaXQoJ3R3bycpOyBkaXYuZW1pdCgndGhyZWUnKTsgZGl2LmVtaXQoJ2ZvdXInKTtcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDVcblxuXHRcdFx0ZGl2QiA9IERvbS5kaXYoZXZlbnRzOmxpc3RlbmVycylcblx0XHRcdGRpdkIuZW1pdCgnb25lJyk7IGRpdkIuZW1pdCgndGhyZWUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgN1xuXHRcdFx0XG5cdFx0XHRleHBlY3QoZW1pdENvbnRleHQpLnRvLmVxdWFsIGRpdlswXVxuXHRcdFx0ZGl2Qi5lbWl0KCdmaXZlJylcblx0XHRcdGV4cGVjdChlbWl0Q29udGV4dCkudG8uZXF1YWwgZGl2QlswXVxuXG5cblxuXG5cblx0c3VpdGUgXCJTdHlsZVwiLCAoKS0+XG5cdFx0dGVzdCBcIlN0eWxlcyBjYW4gYmUgc2V0IHZpYSB0aGUgLnN0eWxlLy5jc3MgbWV0aG9kIHdpdGggYXJncyBwYWlyIG9mIFtwcm9wZXJ0eSwgdmFsdWVdXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYoc3R5bGU6e3dpZHRoOicxNXB4J30pLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkaXYuZWwpXG5cblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMTVweCcpXG5cblx0XHRcdGRpdi5zdHlsZSAnd2lkdGgnLCAnMjVweCdcblx0XHRcdGV4cGVjdChkaXYuZWwuc3R5bGUud2lkdGgpLnRvLmVxdWFsKCcyNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMjVweCcpXG5cblx0XHRcdGRpdi5zdHlsZSAnd2lkdGgnLCAnNXZoJ1xuXHRcdFx0ZXhwZWN0KGRpdi5lbC5zdHlsZS53aWR0aCkudG8uZXF1YWwoJzV2aCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uY29udGFpbigncHgnKVxuXG5cblx0XHR0ZXN0IFwiTXVsdGlwbGUgU3R5bGVzIGNhbiBiZSBzZXQgdmlhIHRoZSAuc3R5bGUvLmNzcyBtZXRob2QgYnkgcGFzc2luZyBhIHN0eWxlIG9iamVjdFwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KHN0eWxlOnt3aWR0aDonMTVweCd9KS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0Y29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZGl2LmVsKVxuXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMHB4JylcblxuXHRcdFx0ZGl2LnN0eWxlIHt3aWR0aDoyNSwgaGVpZ2h0OiczMyd9XG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzI1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMzNweCcpXG5cblxuXHRcdHRlc3QgXCJBIG51bGwgdmFsdWUgY2FuIGJlIHBhc3NlZCBmb3IgYSBwcm9wZXJ0eSBpbiBvcmRlciB0byBkZWxldGUgdGhhdCBzdHlsZVwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KHN0eWxlOnt3aWR0aDonMTVweCd9KS5hcHBlbmRUbyhzYW5kYm94KVxuXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLndpZHRoKS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJycpXG5cblx0XHRcdGRpdi5zdHlsZSB7d2lkdGg6bnVsbCwgaGVpZ2h0OjEyfVxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5zdHlsZS53aWR0aCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzEycHgnKVxuXG5cdFx0XHRkaXYuY3NzICdoZWlnaHQnLCBudWxsXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLndpZHRoKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXYuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblxuXG5cdFx0dGVzdCBcIklmIHBhc3NlZCBhIHByb3BlcnR5IG5hbWUgd2l0aG91dCBhIHZhbHVlLCB0aGUgY29tcHV0ZWQgdmFsdWUgZm9yIHRoYXQgcHJvcGVydHkgd2lsbCBiZSByZXR1cm5lZFwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KHN0eWxlOnt3aWR0aDonMTVweCd9KS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0Y29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZGl2LmVsKVxuXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd3aWR0aCcpLnRvLmVxdWFsICcxNXB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwgJzBweCdcblxuXHRcdFx0ZGl2LnN0eWxlIHdpZHRoOm51bGwsIGhlaWdodDogNTVcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwgY29tcHV0ZWRTdHlsZS53aWR0aFxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwgJzU1cHgnXG5cdFx0XHRcblx0XHRcdGRpdi5zdHlsZSAnd2lkdGgnLCAnMTl2dydcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uY29udGFpbiAncHgnXG5cblxuXHRcdHRlc3QgXCJGdW5jdGlvbnMgY2FuIGJlIHBhc3NlZCBhcyB2YWx1ZXMgZm9yIHByb3BlcnRpZXMgaW4gc3R5bGUgb2JqZWN0cyB3aGljaCB3aWxsIGJlIGludm9rZWQgd2l0aCB0aGUgZWxlbWVudCdzIG9wdGlvbnMucmVsYXRlZEluc3RhbmNlIGFzIHRoZSBvbmx5IGFyZ3VtZW50XCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYocmF0ZToyNSkuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGFwcGx5V2lkdGggPSAoZXhwZWN0ZWRJbnN0YW5jZSktPlxuXHRcdFx0XHRkaXYuc3R5bGUgd2lkdGg6IChpbnN0YW5jZSktPlxuXHRcdFx0XHRcdGV4cGVjdCh0eXBlb2YgaW5zdGFuY2UpLnRvLmVxdWFsICdvYmplY3QnXG5cdFx0XHRcdFx0ZXhwZWN0KGluc3RhbmNlKS50by5lcXVhbChleHBlY3RlZEluc3RhbmNlKVxuXHRcdFx0XHRcdHJldHVybiBkaXYub3B0aW9ucy5yYXRlXG5cblx0XHRcdGFwcGx5V2lkdGgoZGl2KVxuXHRcdFx0ZXhwZWN0KGRpdi5vcHRpb25zLnJhdGUpLnRvLmVxdWFsIDI1XG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd3aWR0aCcpLnRvLmVxdWFsICcyNXB4J1xuXG5cdFx0XHRkaXYub3B0aW9ucy5yYXRlID0gMjUwXG5cdFx0XHRkaXYub3B0aW9ucy5yZWxhdGVkSW5zdGFuY2UgPSBhbm90aGVyT2JqID0ge31cblx0XHRcdGFwcGx5V2lkdGgoYW5vdGhlck9iailcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwgJzI1MHB4J1xuXG5cblx0XHR0ZXN0IFwiLnN0eWxlU2FmZSgpIGNhbiBiZSB1c2VkIHRvIG9idGFpbiB0aGUgdmFsdWUgZm9yIGEgZ2l2ZW4gcHJvcGVydHkgZXZlbiBmb3Igbm9uLWluc2VydGVkIGVsZW1lbnRzIG9yIGVsZW1lbnRzIHdpdGggb3B0aW9ucy5zdHlsZUFmdGVySW5zZXJ0XCIsICgpLT5cblx0XHRcdHN0eWxlID1cblx0XHRcdFx0d2lkdGg6ICc4cHgnXG5cdFx0XHRcdGhlaWdodDogJzlweCdcblx0XHRcdFx0JGhhcHB5OlxuXHRcdFx0XHRcdHdpZHRoOiAnMThweCdcblx0XHRcdFx0JHJlbGF4ZWQ6XG5cdFx0XHRcdFx0aGVpZ2h0OiAnMTAwJSdcblx0XHRcdGRpdkEgPSBEb20uZGl2IHtzdHlsZX1cblx0XHRcdGRpdkIgPSBEb20uZGl2IHtzdHlsZSwgc3R5bGVBZnRlckluc2VydDp0cnVlfVxuXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZSgnd2lkdGgnKSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2QS5yYXcuc3R5bGUud2lkdGgpLnRvLmVxdWFsKCc4cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVTYWZlKCd3aWR0aCcpKS50by5lcXVhbCgnOHB4JylcblxuXHRcdFx0ZGl2QS5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGUoJ3dpZHRoJykpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkEucmF3LnN0eWxlLndpZHRoKS50by5lcXVhbCgnMThweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVNhZmUoJ3dpZHRoJykpLnRvLmVxdWFsKCcxOHB4JylcblxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGUoJ3dpZHRoJykpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkIucmF3LnN0eWxlLndpZHRoKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlU2FmZSgnd2lkdGgnKSkudG8uZXF1YWwoJzhweCcpXG5cblx0XHRcdGRpdkIuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlKCd3aWR0aCcpKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZCLnJhdy5zdHlsZS53aWR0aCkudG8uZXF1YWwoJzE4cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGVTYWZlKCd3aWR0aCcpKS50by5lcXVhbCgnMThweCcpXG5cdFx0XHRcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlKCdoZWlnaHQnKSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2Qi5yYXcuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlU2FmZSgnaGVpZ2h0JykpLnRvLmVxdWFsKCc5cHgnKVxuXHRcdFx0XG5cdFx0XHRkaXZCLnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlKCdoZWlnaHQnKSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2Qi5yYXcuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTAwJScpXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZVNhZmUoJ2hlaWdodCcpKS50by5lcXVhbCgnMTAwJScpXG5cdFx0XHRcblx0XHRcdGRpdkIuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlKCdoZWlnaHQnKSkubm90LnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGUoJ2hlaWdodCcpKS5ub3QudG8uZXF1YWwoJzEwMCUnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGUoJ2hlaWdodCcpKS50by5jb250YWluKCdweCcpXG5cdFx0XHRleHBlY3QoZGl2Qi5yYXcuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTAwJScpXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZVNhZmUoJ2hlaWdodCcpKS50by5lcXVhbChkaXZCLnN0eWxlKCdoZWlnaHQnKSlcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlU2FmZSgnaGVpZ2h0JywgdHJ1ZSkpLm5vdC50by5lcXVhbChkaXZCLnN0eWxlKCdoZWlnaHQnKSlcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlU2FmZSgnaGVpZ2h0JywgdHJ1ZSkpLnRvLmVxdWFsKCcxMDAlJylcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlU2FmZSgnbWFyZ2luJywgdHJ1ZSkpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGUoJ3dpZHRoJykpLnRvLmVxdWFsKCcxOHB4JylcblxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVTYWZlKCdmYWtlUHJvcCcpKS50by5lcXVhbChkaXZBKVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVTYWZlKDEyMykpLnRvLmVxdWFsKGRpdkEpXG5cblx0XHRcdHRleHQgPSBEb20udGV4dCgnYWJjMTIzJykuYXBwZW5kVG8oZGl2QSlcblx0XHRcdGV4cGVjdCh0ZXh0LnN0eWxlU2FmZSgnZmFrZVByb3AnKSkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KHRleHQuc3R5bGVTYWZlKDEyMykpLnRvLmVxdWFsKHVuZGVmaW5lZClcblxuXG5cdFx0dGVzdCBcIi5zdHlsZVNhZmUoKSB3aWxsIHdvcmsgd2l0aCBpbnN0YW5jZXMgd2l0aCBubyBnaXZlbiBiYXNlIHN0eWxlc1wiLCAoKS0+XG5cdFx0XHRkaXZBID0gRG9tLmRpdigpXG5cdFx0XHRkaXZCID0gRG9tKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ2RpdicpXG5cblx0XHRcdGV4cGVjdCAoKS0+XG5cdFx0XHRcdGRpdkEuc3R5bGVTYWZlKCdoZWlnaHQnKVxuXHRcdFx0XHRkaXZCLnN0eWxlU2FmZSgnaGVpZ2h0Jylcblx0XHRcdC5ub3QudG8udGhyb3coKVxuXHRcdFx0XG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVNhZmUgJ2hlaWdodCcpLnRvLmVxdWFsICcnXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZVNhZmUgJ2hlaWdodCcpLnRvLmVxdWFsICcnXG5cblxuXHRcdHRlc3QgXCIuc3R5bGVQYXJzZWQoKSBpcyBhIHNob3J0aGFuZCBmb3IgcGFyc2VGbG9hdCguc3R5bGVTYWZlKCkpXCIsICgpLT5cblx0XHRcdHN0eWxlID1cblx0XHRcdFx0d2lkdGg6ICc4cHgnXG5cdFx0XHRcdGhlaWdodDogJzlweCdcblx0XHRcdFx0JGhhcHB5OlxuXHRcdFx0XHRcdHdpZHRoOiAnMThweCdcblx0XHRcdFx0JHJlbGF4ZWQ6XG5cdFx0XHRcdFx0aGVpZ2h0OiAnMTAwJSdcblx0XHRcdGRpdkEgPSBEb20uZGl2IHtzdHlsZX1cblx0XHRcdGRpdkIgPSBEb20uZGl2IHtzdHlsZSwgc3R5bGVBZnRlckluc2VydDp0cnVlfVxuXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZSgnd2lkdGgnKSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVNhZmUoJ3dpZHRoJykpLnRvLmVxdWFsKCc4cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVQYXJzZWQoJ3dpZHRoJykpLnRvLmVxdWFsKHBhcnNlRmxvYXQgZGl2QS5zdHlsZVNhZmUoJ3dpZHRoJykpXG5cblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlKCdoZWlnaHQnKSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVNhZmUoJ2hlaWdodCcpKS50by5lcXVhbCgnOXB4Jylcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlUGFyc2VkKCdoZWlnaHQnKSkudG8uZXF1YWwocGFyc2VGbG9hdCBkaXZBLnN0eWxlU2FmZSgnaGVpZ2h0JykpXG5cblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlKCd3aWR0aCcpKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlU2FmZSgnd2lkdGgnKSkudG8uZXF1YWwoJzhweCcpXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZVBhcnNlZCgnd2lkdGgnKSkudG8uZXF1YWwocGFyc2VGbG9hdCBkaXZCLnN0eWxlU2FmZSgnd2lkdGgnKSlcblxuXHRcdFx0ZGl2QS5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZGl2Qi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGUoJ3dpZHRoJykpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVTYWZlKCd3aWR0aCcpKS50by5lcXVhbCgnMThweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVBhcnNlZCgnd2lkdGgnKSkudG8uZXF1YWwocGFyc2VGbG9hdCBkaXZBLnN0eWxlU2FmZSgnd2lkdGgnKSlcblx0XHRcdFxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGUoJ2hlaWdodCcpKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlU2FmZSgnaGVpZ2h0JykpLnRvLmVxdWFsKCc5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVQYXJzZWQoJ2hlaWdodCcpKS50by5lcXVhbChwYXJzZUZsb2F0IGRpdkEuc3R5bGVTYWZlKCdoZWlnaHQnKSlcblxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGUoJ3dpZHRoJykpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGVTYWZlKCd3aWR0aCcpKS50by5lcXVhbCgnMThweCcpXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZVBhcnNlZCgnd2lkdGgnKSkudG8uZXF1YWwocGFyc2VGbG9hdCBkaXZCLnN0eWxlU2FmZSgnd2lkdGgnKSlcblxuXHRcdFx0ZGl2QS5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRkaXZCLnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlKCd3aWR0aCcpKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlU2FmZSgnd2lkdGgnKSkudG8uZXF1YWwoJzE4cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVQYXJzZWQoJ3dpZHRoJykpLnRvLmVxdWFsKHBhcnNlRmxvYXQgZGl2QS5zdHlsZVNhZmUoJ3dpZHRoJykpXG5cdFx0XHRcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlKCdoZWlnaHQnKSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVNhZmUoJ2hlaWdodCcpKS50by5lcXVhbCgnMTAwJScpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVBhcnNlZCgnaGVpZ2h0JykpLnRvLmVxdWFsKHBhcnNlRmxvYXQgZGl2QS5zdHlsZVNhZmUoJ2hlaWdodCcpKVxuXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZSgnd2lkdGgnKSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZVNhZmUoJ3dpZHRoJykpLnRvLmVxdWFsKCcxOHB4Jylcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlUGFyc2VkKCd3aWR0aCcpKS50by5lcXVhbChwYXJzZUZsb2F0IGRpdkIuc3R5bGVTYWZlKCd3aWR0aCcpKVxuXG5cdFx0XHRkaXZBLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRkaXZCLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRkaXZBLnN0YXRlICdyZWxheGVkJywgb2ZmXG5cdFx0XHRkaXZCLnN0YXRlICdyZWxheGVkJywgb2ZmXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZSgnd2lkdGgnKSkudG8uZXF1YWwoJzE4cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVTYWZlKCd3aWR0aCcpKS50by5lcXVhbCgnMThweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVBhcnNlZCgnd2lkdGgnKSkudG8uZXF1YWwocGFyc2VGbG9hdCBkaXZBLnN0eWxlU2FmZSgnd2lkdGgnKSlcblx0XHRcdFxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGUoJ2hlaWdodCcpKS50by5lcXVhbCgnOXB4Jylcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlU2FmZSgnaGVpZ2h0JykpLnRvLmVxdWFsKCc5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVQYXJzZWQoJ2hlaWdodCcpKS50by5lcXVhbChwYXJzZUZsb2F0IGRpdkEuc3R5bGVTYWZlKCdoZWlnaHQnKSlcblxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGUoJ3dpZHRoJykpLnRvLmVxdWFsKCcxOHB4Jylcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlU2FmZSgnd2lkdGgnKSkudG8uZXF1YWwoJzE4cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGVQYXJzZWQoJ3dpZHRoJykpLnRvLmVxdWFsKHBhcnNlRmxvYXQgZGl2Qi5zdHlsZVNhZmUoJ3dpZHRoJykpXG5cblxuXHRcdHRlc3QgXCIucmVjYWxjU3R5bGUoKSByZS1hcHBsaWVzIGFsbCBmdW5jdGlvbi12YWx1ZSBzdHlsZXNcIiwgKCktPlxuXHRcdFx0Y291bnQgPSBBOjAsQjowLEM6MCxEOjAsRTowLEY6MCxHOjBcblx0XHRcdGRpdiA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdHdpZHRoOiAoKS0+ICsrY291bnQuQVxuXHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRcdGhlaWdodDogKCktPiArK2NvdW50LkJcblx0XHRcdFx0Zm9udFNpemU6ICgpLT4gKytjb3VudC5DXG5cdFx0XHRcdCRoYXBweTpcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjVcblx0XHRcdFx0XHRmb250U2l6ZTogKCktPiArK2NvdW50LkRcblx0XHRcdFx0JHJlbGF4ZWQ6XG5cdFx0XHRcdFx0aGVpZ2h0OiAoKS0+ICsrY291bnQuRVxuXHRcdFx0XHRcdGZvbnRTaXplOiAoKS0+ICsrY291bnQuRlxuXHRcdFx0XHRcdCRmdW5ueTpcblx0XHRcdFx0XHRcdHdpZHRoOiAoKS0+ICsrY291bnQuR1xuXG5cdFx0XHRleHBlY3QoY291bnQpLnRvLmVxbCBBOjEsQjoxLEM6MSxEOjAsRTowLEY6MCxHOjBcblx0XHRcdFxuXHRcdFx0ZGl2LnJlY2FsY1N0eWxlKClcblx0XHRcdGV4cGVjdChjb3VudCkudG8uZXFsIEE6MixCOjIsQzoyLEQ6MCxFOjAsRjowLEc6MFxuXHRcdFx0XG5cdFx0XHRkaXYuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGV4cGVjdChjb3VudCkudG8uZXFsIEE6MixCOjIsQzoyLEQ6MSxFOjAsRjowLEc6MFxuXG5cdFx0XHRkaXYucmVjYWxjU3R5bGUoKVxuXHRcdFx0ZXhwZWN0KGNvdW50KS50by5lcWwgQTozLEI6MyxDOjIsRDoyLEU6MCxGOjAsRzowXG5cblx0XHRcdGRpdi5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRleHBlY3QoY291bnQpLnRvLmVxbCBBOjMsQjozLEM6MixEOjIsRToxLEY6MSxHOjBcblxuXHRcdFx0ZGl2LnJlY2FsY1N0eWxlKClcblx0XHRcdGV4cGVjdChjb3VudCkudG8uZXFsIEE6NCxCOjMsQzoyLEQ6MixFOjIsRjoyLEc6MFxuXG5cdFx0XHRkaXYuc3RhdGUgJ2Z1bm55Jywgb25cblx0XHRcdGV4cGVjdChjb3VudCkudG8uZXFsIEE6NCxCOjMsQzoyLEQ6MixFOjIsRjoyLEc6MVxuXG5cdFx0XHRkaXYucmVjYWxjU3R5bGUoKVxuXHRcdFx0ZXhwZWN0KGNvdW50KS50by5lcWwgQTo0LEI6MyxDOjIsRDoyLEU6MyxGOjMsRzoyXG5cdFx0XHRcblx0XHRcdGRpdi5zdGF0ZSAnZnVubnknLCBvZmZcblx0XHRcdGV4cGVjdChjb3VudCkudG8uZXFsIEE6NSxCOjMsQzoyLEQ6MixFOjMsRjozLEc6MlxuXHRcdFx0XG5cdFx0XHRkaXYucmVjYWxjU3R5bGUoKVxuXHRcdFx0ZXhwZWN0KGNvdW50KS50by5lcWwgQTo2LEI6MyxDOjIsRDoyLEU6NCxGOjQsRzoyXG5cblxuXHRcdHRlc3QgXCIucmVjYWxjU3R5bGUoKSBhY2NlcHRzIGEgc2luZ2xlIGFyZ3VtZW50IHRvIGluZGljYXRlIGlmIHRvIHJlY2FsYyBzdHlsZSBvbiBjaGlsZHJlblwiLCAoKS0+XG5cdFx0XHRjb3VudCA9IEE6MCxCOjAsQzowLEQ6MCxFOjAsRjowLEc6MFxuXHRcdFx0d3JhcHBlckNvdW50ID0gMFxuXHRcdFx0d3JhcHBlciA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdHdpZHRoOiAoKS0+ICsrd3JhcHBlckNvdW50XG5cdFx0XHRcblx0XHRcdGRpdiA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdHdpZHRoOiAoKS0+ICsrY291bnQuQVxuXHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRcdGhlaWdodDogKCktPiArK2NvdW50LkJcblx0XHRcdFx0Zm9udFNpemU6ICgpLT4gKytjb3VudC5DXG5cdFx0XHRcdCRoYXBweTpcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjVcblx0XHRcdFx0XHRmb250U2l6ZTogKCktPiArK2NvdW50LkRcblx0XHRcdFx0JHJlbGF4ZWQ6XG5cdFx0XHRcdFx0aGVpZ2h0OiAoKS0+ICsrY291bnQuRVxuXHRcdFx0XHRcdGZvbnRTaXplOiAoKS0+ICsrY291bnQuRlxuXHRcdFx0XHRcdCRmdW5ueTpcblx0XHRcdFx0XHRcdHdpZHRoOiAoKS0+ICsrY291bnQuR1xuXG5cdFx0XHRkaXYuYXBwZW5kVG8od3JhcHBlcilcblx0XHRcdGV4cGVjdCh3cmFwcGVyQ291bnQpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjb3VudCkudG8uZXFsIEE6MSxCOjEsQzoxLEQ6MCxFOjAsRjowLEc6MFxuXHRcdFx0XG5cdFx0XHR3cmFwcGVyLnJlY2FsY1N0eWxlKClcblx0XHRcdGV4cGVjdCh3cmFwcGVyQ291bnQpLnRvLmVxdWFsIDJcblx0XHRcdGV4cGVjdChjb3VudCkudG8uZXFsIEE6MSxCOjEsQzoxLEQ6MCxFOjAsRjowLEc6MFxuXHRcdFx0XG5cdFx0XHR3cmFwcGVyLnJlY2FsY1N0eWxlKHRydWUpXG5cdFx0XHRleHBlY3Qod3JhcHBlckNvdW50KS50by5lcXVhbCAzXG5cdFx0XHRleHBlY3QoY291bnQpLnRvLmVxbCBBOjIsQjoyLEM6MixEOjAsRTowLEY6MCxHOjBcblx0XHRcdFxuXHRcdFx0ZGl2LnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRleHBlY3QoY291bnQpLnRvLmVxbCBBOjIsQjoyLEM6MixEOjEsRTowLEY6MCxHOjBcblxuXHRcdFx0d3JhcHBlci5yZWNhbGNTdHlsZSgpXG5cdFx0XHRleHBlY3Qod3JhcHBlckNvdW50KS50by5lcXVhbCA0XG5cdFx0XHRleHBlY3QoY291bnQpLnRvLmVxbCBBOjIsQjoyLEM6MixEOjEsRTowLEY6MCxHOjBcblx0XHRcdFxuXHRcdFx0d3JhcHBlci5yZWNhbGNTdHlsZSgxKVxuXHRcdFx0ZXhwZWN0KHdyYXBwZXJDb3VudCkudG8uZXF1YWwgNVxuXHRcdFx0ZXhwZWN0KGNvdW50KS50by5lcWwgQTozLEI6MyxDOjIsRDoyLEU6MCxGOjAsRzowXG5cblxuXHRcdHRlc3QgXCJJZiBvcHRpb25zLnJlY2FsY09uUmVzaXplIGlzIHNldCwgLnJlY2FsY1N0eWxlKCkgd2lsbCBiZSBpbnZva2VkIG9uIGVhY2ggcmVzaXplIGV2ZW50XCIsICgpLT5cblx0XHRcdGNvdW50ID0gQTowLEI6MCxDOjAsRDowXG5cdFx0XHREb20uZGl2XG5cdFx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcdHdpZHRoOiAoKS0+ICsrY291bnQuQVxuXHRcdFx0XHRcdG9wYWNpdHk6IDFcblx0XHRcdFx0XHRoZWlnaHQ6ICgpLT4gKytjb3VudC5CXG5cdFx0XHRcblx0XHRcdERvbS5kaXZcblx0XHRcdFx0cmVjYWxjT25SZXNpemU6IHRydWVcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0d2lkdGg6ICgpLT4gKytjb3VudC5DXG5cdFx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0XHRcdGhlaWdodDogKCktPiArK2NvdW50LkRcblxuXHRcdFx0ZXhwZWN0KGNvdW50KS50by5lcWwgQToxLEI6MSxDOjEsRDoxXG5cdFx0XHRcblx0XHRcdERvbSh3aW5kb3cpLmVtaXQgJ3Jlc2l6ZSdcblx0XHRcdGV4cGVjdChjb3VudCkudG8uZXFsIEE6MSxCOjEsQzoyLEQ6MlxuXHRcdFx0XG5cdFx0XHREb20od2luZG93KS5lbWl0ICdyZXNpemUnXG5cdFx0XHRleHBlY3QoY291bnQpLnRvLmVxbCBBOjEsQjoxLEM6MyxEOjNcblxuXG5cdFx0dGVzdCBcIi5zaG93KCkvLmhpZGUoKSB3aWxsIHRvZ2dsZSB0aGUgZWxlbWVudCdzIHZpc2liaWxpdHlcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpLmFwcGVuZFRvIHNhbmRib3hcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUoJ2Rpc3BsYXknKSkudG8uZXF1YWwgJ2Jsb2NrJ1xuXG5cdFx0XHRkaXYuaGlkZSgpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlKCdkaXNwbGF5JykpLnRvLmVxdWFsICdub25lJ1xuXG5cdFx0XHRkaXYuc2hvdygpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlKCdkaXNwbGF5JykpLnRvLmVxdWFsICdibG9jaydcblxuXHRcdFx0ZGl2LnNob3coKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSgnZGlzcGxheScpKS50by5lcXVhbCAnYmxvY2snXG5cblxuXHRcdHRlc3QgXCIuc2hvdygpIHdpbGwgc2V0IHRoZSBlbGVtZW50J3MgZGlzcGxheSBzdHlsZSB0byB0aGUgcHJvdmlkZWQgYXJndW1lbnQsIG9yIHRvIHRoZSB2YWx1ZSBwcm92aWRlZCBpbiB0aGUgc3R5bGUgb2JqZWN0XCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYoc3R5bGU6ZGlzcGxheTonaW5saW5lJykuYXBwZW5kVG8gc2FuZGJveFxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSgnZGlzcGxheScpKS50by5lcXVhbCAnaW5saW5lJ1xuXG5cdFx0XHRkaXYuaGlkZSgpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlKCdkaXNwbGF5JykpLnRvLmVxdWFsICdub25lJ1xuXG5cdFx0XHRkaXYuc2hvdygpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlKCdkaXNwbGF5JykpLnRvLmVxdWFsICdpbmxpbmUnXG5cblx0XHRcdGRpdi5oaWRlKClcblx0XHRcdGRpdi5zaG93KCdpbmxpbmUtYmxvY2snKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSgnZGlzcGxheScpKS50by5lcXVhbCAnaW5saW5lLWJsb2NrJ1xuXG5cblxuXG5cblx0c3VpdGUgXCJTdGF0ZVwiLCAoKS0+XG5cdFx0dGVzdCBcIlN0YXRlcyBjYW4gYmUgcG9sbGVkIGZvciBhIHZhbHVlIGJ5IHBhc3Npbmcgb25seSB0aGUgdGFyZ2V0IHN0YXRlJ3MgbmFtZSB0byAuc3RhdGUgJiBjYW4gYmUgdG9nZ2xlZCBvbi9vZmYgYnkgcGFzc2luZyBhIHNlY29uZCBhcmd1bWVudFwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KClcblxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnZnVubnknKS50by5iZS5mYWxzZVxuXG5cdFx0XHRkaXYuc3RhdGUgJ2Z1bm55JywgdHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnZnVubnknKS50by5iZS50cnVlXG5cdFx0XHRcblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCB0cnVlXG5cdFx0XHRkaXYuc3RhdGUgJ3JlbGF4ZWQnLCB0cnVlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdmdW5ueScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLnRydWVcblx0XHRcdFxuXHRcdFx0ZGl2LnN0YXRlICdmdW5ueScsIGZhbHNlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdmdW5ueScpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ3JlbGF4ZWQnKS50by5iZS50cnVlXG5cdFx0XHRcblx0XHRcdGRpdi5zdGF0ZSAnJGZ1bm55JywgdHJ1ZVxuXHRcdFx0ZGl2LnN0YXRlICckYmFzZScsIHRydWVcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2Z1bm55JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnYmFzZScpLnRvLmJlLmZhbHNlXG5cblxuXG5cdFx0dGVzdCBcIkFsbCBzdGF0ZXMgY2FuIGJlIGNsZWFyZWQvdG9nZ2xlZCBvZmYgdmlhIC5yZXNldFN0YXRlXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYoKVxuXG5cdFx0XHRkaXYuc3RhdGUgJ2Z1bm55Jywgb25cblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZGl2LnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2Z1bm55JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdyZWxheGVkJykudG8uYmUudHJ1ZVxuXG5cdFx0XHRkaXYucmVzZXRTdGF0ZSgpXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdmdW5ueScpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdoYXBweScpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdyZWxheGVkJykudG8uYmUuZmFsc2VcblxuXG5cdFx0dGVzdCBcIlN0eWxlcyBjYW4gYmUgcGFzc2VkIHVuZGVyIHNwZWNpZmljIHN0YXRlcyB1c2luZyBhICckJyBwcmVmaXggYmVmb3JlIHRoZSBzdGF0ZSBuYW1lXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdCRiYXNlOlxuXHRcdFx0XHRcdHdpZHRoOiAnMTVweCdcblx0XHRcdFx0XHRoZWlnaHQ6ICcxNXB4J1xuXHRcdFx0XHQkaGFwcHk6XG5cdFx0XHRcdFx0d2lkdGg6ICcyNXB4J1xuXHRcdFx0XHRcdG1hcmdpblRvcDogJzIwcHgnXG5cdFx0XHRcdCRyZWxheGVkOlxuXHRcdFx0XHRcdHdpZHRoOiAnMzVweCdcblx0XHRcdFx0XHRtYXJnaW5MZWZ0OiAnMTJweCdcblxuXHRcdFx0ZGl2LmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkaXYuZWwpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3ApLnRvLmVxdWFsKCcwcHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUubWFyZ2luTGVmdCkudG8uZXF1YWwoJzBweCcpXG5cdFx0XHRcblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcyNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wKS50by5lcXVhbCgnMjBweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0KS50by5lcXVhbCgnMHB4Jylcblx0XHRcdFxuXHRcdFx0ZGl2LnN0YXRlICdoYXBweScsIG9mZlxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wKS50by5lcXVhbCgnMHB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQpLnRvLmVxdWFsKCcwcHgnKVxuXHRcdFx0XG5cdFx0XHRkaXYuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGRpdi5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzM1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3ApLnRvLmVxdWFsKCcyMHB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQpLnRvLmVxdWFsKCcxMnB4Jylcblx0XHRcdFxuXHRcdFx0ZGl2LnN0YXRlICdoYXBweScsIG9mZlxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCczNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wKS50by5lcXVhbCgnMHB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQpLnRvLmVxdWFsKCcxMnB4JylcblxuXG5cdFx0dGVzdCBcIkEgc3RhdGU6ZXZlbnROYW1lIChvciBzdGF0ZTpldmVudE9wdHMpIG1hcCBjYW4gYmUgcGFzc2VkIHNldCBmb3Igb3B0aW9ucy5zdGF0ZVRyaWdnZXJzXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYoXG5cdFx0XHRcdHN0YXRlVHJpZ2dlcnM6XG5cdFx0XHRcdFx0aGFwcHk6IHtvbjonYmVjYW1lSGFwcHknLCBvZmY6J2JlY2FtZVNhZCd9XG5cdFx0XHRcdFx0cmVsYXhlZDogJ2lzUmVsYXhlZCcgXG5cdFx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcdCRiYXNlOlx0XHR3aWR0aDogJzE1cHgnXG5cdFx0XHRcdFx0JGhhcHB5Olx0XHR3aWR0aDogJzI1cHgnXG5cdFx0XHRcdFx0JHJlbGF4ZWQ6XHR3aWR0aDogJzM1cHgnXG5cdFx0XHQpLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkaXYuZWwpXG5cblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2hhcHB5JykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ3JlbGF4ZWQnKS50by5iZS5mYWxzZVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcxNXB4JylcblxuXHRcdFx0ZGl2LmVtaXQoJ2JlY2FtZUhhcHB5Jylcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzI1cHgnKVxuXG5cdFx0XHRkaXYuZW1pdCgnaXNSZWxheGVkJylcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMzVweCcpXG5cblx0XHRcdGRpdi5lbWl0KCdiZWNhbWVTYWQnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnaGFwcHknKS50by5iZS5mYWxzZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMzVweCcpXG5cblx0XHRcdGRpdi5zdGF0ZSgncmVsYXhlZCcsIG9mZilcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMTVweCcpXG5cblxuXHRcdHRlc3QgXCJvcHRpb25zLnN0YXRlVHJpZ2dlcnMgd29uJ3QgYmUgYXR0YWNoZWQgaWYgdGhleSBhcmVuJ3QgYmVpbmcgdXNlZCBpbiBzdHlsZSBvYmplY3RcIiwgKCktPlxuXHRcdFx0ZGl2QSA9IERvbS5kaXYoc3R5bGU6eyRob3ZlcjogZGlzcGxheTonYmxvY2snfSlcblx0XHRcdGRpdkIgPSBEb20uZGl2KHN0eWxlOnskZm9jdXM6IGRpc3BsYXk6J2Jsb2NrJ30pXG5cblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICdob3ZlcicpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJ2hvdmVyJykudG8uZXF1YWwgb2ZmXG5cblx0XHRcdGRpdkEuZWwuZW1pdEV2ZW50ICdtb3VzZWVudGVyJ1xuXHRcdFx0ZGl2Qi5lbC5lbWl0RXZlbnQgJ21vdXNlZW50ZXInXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnaG92ZXInKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJ2hvdmVyJykudG8uZXF1YWwgb2ZmXG5cblx0XHRcdGRpdkEuZWwuZW1pdEV2ZW50ICdtb3VzZWxlYXZlJ1xuXHRcdFx0ZGl2Qi5lbC5lbWl0RXZlbnQgJ21vdXNlbGVhdmUnXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnaG92ZXInKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChkaXZCLnN0YXRlICdob3ZlcicpLnRvLmVxdWFsIG9mZlxuXG5cdFx0XHRkaXZBLmVsLmVtaXRFdmVudCAnZm9jdXMnXG5cdFx0XHRkaXZCLmVsLmVtaXRFdmVudCAnZm9jdXMnXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnZm9jdXMnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChkaXZCLnN0YXRlICdmb2N1cycpLnRvLmVxdWFsIG9uXG5cblx0XHRcdGRpdkEuZWwuZW1pdEV2ZW50ICdibHVyJ1xuXHRcdFx0ZGl2Qi5lbC5lbWl0RXZlbnQgJ2JsdXInXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnZm9jdXMnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChkaXZCLnN0YXRlICdmb2N1cycpLnRvLmVxdWFsIG9mZlxuXG5cblx0XHR0ZXN0IFwib3B0aW9ucy5zdGF0ZVRyaWdnZXJzIGNhbiBiZSBmb3JjZWQgdG8gYmUgYXR0YWNoZWQgZXZlbiBpZiB0aGV5IGFyZW4ndCBiZWluZyB1c2VkIGluIHN0eWxlIG9iamVjdCB2aWEgLl9hdHRhY2hTdGF0ZUV2ZW50cyh0cnVlKVwiLCAoKS0+XG5cdFx0XHRhdHRhY2hTdGF0ZUV2ZW50cyA9IGlmIERvbS5kaXYoKS5fYXR0YWNoU3RhdGVFdmVudHMgdGhlbiAnX2F0dGFjaFN0YXRlRXZlbnRzJyBlbHNlICdfYWUnXG5cdFx0XHRkaXZBID0gRG9tLmRpdihzdHlsZTp7JGhvdmVyOiBkaXNwbGF5OidibG9jayd9KVxuXHRcdFx0ZGl2QiA9IERvbS5kaXYoc3R5bGU6eyRmb2N1czogZGlzcGxheTonYmxvY2snfSlcblx0XHRcdGRpdkFbYXR0YWNoU3RhdGVFdmVudHNdKHRydWUpXG5cdFx0XHRkaXZCW2F0dGFjaFN0YXRlRXZlbnRzXSh0cnVlKVxuXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnaG92ZXInKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChkaXZCLnN0YXRlICdob3ZlcicpLnRvLmVxdWFsIG9mZlxuXG5cdFx0XHRkaXZBLmVsLmVtaXRFdmVudCAnbW91c2VlbnRlcidcblx0XHRcdGRpdkIuZWwuZW1pdEV2ZW50ICdtb3VzZWVudGVyJ1xuXHRcdFx0ZXhwZWN0KGRpdkEuc3RhdGUgJ2hvdmVyJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChkaXZCLnN0YXRlICdob3ZlcicpLnRvLmVxdWFsIG9uXG5cblx0XHRcdGRpdkEuZWwuZW1pdEV2ZW50ICdtb3VzZWxlYXZlJ1xuXHRcdFx0ZGl2Qi5lbC5lbWl0RXZlbnQgJ21vdXNlbGVhdmUnXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnaG92ZXInKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChkaXZCLnN0YXRlICdob3ZlcicpLnRvLmVxdWFsIG9mZlxuXG5cdFx0XHRkaXZBLmVsLmVtaXRFdmVudCAnZm9jdXMnXG5cdFx0XHRkaXZCLmVsLmVtaXRFdmVudCAnZm9jdXMnXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnZm9jdXMnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJ2ZvY3VzJykudG8uZXF1YWwgb25cblxuXHRcdFx0ZGl2QS5lbC5lbWl0RXZlbnQgJ2JsdXInXG5cdFx0XHRkaXZCLmVsLmVtaXRFdmVudCAnYmx1cidcblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICdmb2N1cycpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJ2ZvY3VzJykudG8uZXF1YWwgb2ZmXG5cblxuXHRcdHRlc3QgXCJUaGUgaG92ZXIgYW5kIGZvY3VzIHN0YXRlcyB3aWxsIGJlIGxpc3RlbmVkIGZvciBhbmQgdG9nZ2xlZCBieSBkZWZhdWx0IGJ5IHRoZWlyIGFwcHJvcHJpYXRlIGV2ZW50c1wiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2IHN0eWxlOlxuXHRcdFx0XHQkYmFzZTpcblx0XHRcdFx0XHR3aWR0aDogJzE1cHgnXG5cdFx0XHRcdFx0aGVpZ2h0OiAnMTVweCdcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNDUsIDQ1LCA0NSknXG5cdFx0XHRcdCRob3Zlcjpcblx0XHRcdFx0XHR3aWR0aDogJzI1cHgnXG5cdFx0XHRcdFx0bWFyZ2luVG9wOiAnMjBweCdcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTU1LCAxNTUsIDE1NSknXG5cdFx0XHRcdCRmb2N1czpcblx0XHRcdFx0XHR3aWR0aDogJzM1cHgnXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAncmdiKDIwMCwgMjAwLCAyMDApJ1xuXG5cdFx0XHRkaXYuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRpdi5lbClcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLm1hcmdpblRvcCkudG8uZXF1YWwoJzBweCcpXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLm1hcmdpblRvcCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5iYWNrZ3JvdW5kQ29sb3IpLnRvLmVxdWFsKCdyZ2IoNDUsIDQ1LCA0NSknKVxuXHRcdFx0XG5cdFx0XHRkaXYuZW1pdCAnbW91c2VlbnRlcidcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMjVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLm1hcmdpblRvcCkudG8uZXF1YWwoJzIwcHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5zdHlsZS5tYXJnaW5Ub3ApLnRvLmVxdWFsKCcyMHB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmJhY2tncm91bmRDb2xvcikudG8uZXF1YWwoJ3JnYigxNTUsIDE1NSwgMTU1KScpXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0ICdtb3VzZWxlYXZlJ1xuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wKS50by5lcXVhbCgnMHB4Jylcblx0XHRcdGV4cGVjdChkaXYuZWwuc3R5bGUubWFyZ2luVG9wKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmJhY2tncm91bmRDb2xvcikudG8uZXF1YWwoJ3JnYig0NSwgNDUsIDQ1KScpXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0ICdtb3VzZWVudGVyJ1xuXHRcdFx0ZGl2LmVtaXQgJ2ZvY3VzJ1xuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCczNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wKS50by5lcXVhbCgnMjBweCcpXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLm1hcmdpblRvcCkudG8uZXF1YWwoJzIwcHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgncmdiKDIwMCwgMjAwLCAyMDApJylcblx0XHRcdFxuXHRcdFx0ZGl2LmVtaXQgJ21vdXNlbGVhdmUnXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzM1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3ApLnRvLmVxdWFsKCcwcHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5zdHlsZS5tYXJnaW5Ub3ApLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgncmdiKDIwMCwgMjAwLCAyMDApJylcblxuXG5cdFx0dGVzdCBcIklmIG5vdCBwYXNzZWQgYSBzdHlsZSBtYXAgdW5kZXIgdGhlICdiYXNlJyBzdGF0ZSwgYWxsIG5vbi1zdGF0ZSBwcm9wZXJ0aWVzIG9uIHRoZSBzdHlsZSBvYmplY3Qgd2lsbCBiZSBjb25zaWRlcmVkIGFzICdiYXNlJyBzdGF0ZSBwcm9wZXJ0aWVzXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdHdpZHRoOiAnMTVweCdcblx0XHRcdFx0aGVpZ2h0OiAnMjBweCdcblx0XHRcdFx0JGhvdmVyOlxuXHRcdFx0XHRcdHdpZHRoOiAnMjVweCdcblx0XHRcdFx0XHRoZWlnaHQ6ICczMHB4J1xuXG5cdFx0XHRkaXYuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRpdi5lbClcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcyMHB4Jylcblx0XHRcdFxuXHRcdFx0ZGl2LmVtaXQgJ21vdXNlZW50ZXInXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzI1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMzBweCcpXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0ICdtb3VzZWxlYXZlJ1xuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzIwcHgnKVxuXG5cblx0XHR0ZXN0IFwiU3RhdGUtc3BlY2lmaWMgc3R5bGVzIHdpbGwgYmUgcmVtb3ZlZCB1cG9uIHN0YXRlIHR1cm4gb2ZmIG9yIHJlc3RvcmVkIHRvIHRoZSBiYXNlIHZhbHVlXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdHdpZHRoOiAnMTVweCdcblx0XHRcdFx0JGhvdmVyOlxuXHRcdFx0XHRcdHdpZHRoOiAnMjVweCdcblx0XHRcdFx0XHRoZWlnaHQ6ICczMHB4J1xuXG5cdFx0XHRkaXYuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRpdi5lbClcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcwcHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcnKVxuXHRcdFx0XG5cdFx0XHRkaXYuZW1pdCAnbW91c2VlbnRlcidcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMjVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCczMHB4Jylcblx0XHRcdGV4cGVjdChkaXYuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMzBweCcpXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0ICdtb3VzZWxlYXZlJ1xuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzBweCcpXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJycpXG5cblxuXHRcdHRlc3QgXCJIaWdoZXIgb3JkZXIgc3RhdGUgc3R5bGVzIHdpbGwgaGF2ZSBhIGhpZ2hlciBwcmVjZWRlbmNlIHRoYW4gdGhlICdiYXNlJyBzdHlsZSB0byBiZSB1c2VkIGFzIHJlcGxhY21lbnRzIGZvciBwZW5kaW5nLXJlbW92YWwgc3RhdGUtc3R5bGVzXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdHdpZHRoOiAnMTVweCdcblx0XHRcdFx0JGhvdmVyOlxuXHRcdFx0XHRcdHdpZHRoOiAnMjVweCdcblx0XHRcdFx0XHRoZWlnaHQ6ICczMHB4J1xuXHRcdFx0XHQkZm9jdXM6XG5cdFx0XHRcdFx0aGVpZ2h0OiAnNDVweCdcblxuXHRcdFx0ZGl2LmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkaXYuZWwpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMHB4Jylcblx0XHRcdFxuXHRcdFx0ZGl2LmVtaXQgJ21vdXNlZW50ZXInXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzI1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMzBweCcpXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0ICdmb2N1cydcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMjVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCc0NXB4Jylcblx0XHRcdFxuXHRcdFx0ZGl2LmVtaXQgJ21vdXNlbGVhdmUnXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnNDVweCcpXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0ICdibHVyJ1xuXHRcdFx0ZGl2LmVtaXQgJ2ZvY3VzJ1xuXHRcdFx0ZGl2LmVtaXQgJ21vdXNlZW50ZXInXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzI1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnNDVweCcpXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0ICdibHVyJ1xuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcyNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzMwcHgnKVxuXG5cblx0XHR0ZXN0IFwiU3RhdGUgdG9nZ2xlcyB3aWxsIGJlIHBhc3NlZCB0byBjaGlsZHJlbiBlbGVtZW50cyB1bmxlc3Mgb3B0aW9ucy5wYXNzU3RhdGVUb0NoaWxkcmVuIGlzIG9mZlwiLCAoKS0+XG5cdFx0XHRNYWluID0gRG9tLmRpdigpXG5cdFx0XHRBID0gRG9tLmRpdigpLmFwcGVuZFRvKE1haW4pXG5cdFx0XHRCID0gRG9tLmRpdigpLmFwcGVuZFRvKEEpXG5cdFx0XHRDID0gRG9tLmRpdihwYXNzU3RhdGVUb0NoaWxkcmVuOmZhbHNlKS5hcHBlbmRUbyhBKVxuXG5cdFx0XHRleHBlY3QoTWFpbi5zdGF0ZSAnaGFwcHknKS50by5iZS5mYWxzZVxuXHRcdFx0ZXhwZWN0KEEuc3RhdGUgJ2hhcHB5JykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChCLnN0YXRlICdoYXBweScpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3QoQy5zdGF0ZSAnaGFwcHknKS50by5iZS5mYWxzZVxuXG5cdFx0XHRNYWluLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRleHBlY3QoTWFpbi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoQS5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoQi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoQy5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cblx0XHRcdE1haW4ub3B0aW9ucy5wYXNzU3RhdGVUb0NoaWxkcmVuID0gZmFsc2Vcblx0XHRcdE1haW4uc3RhdGUgJ2hhcHB5JywgZmFsc2Vcblx0XHRcdGV4cGVjdChNYWluLnN0YXRlICdoYXBweScpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3QoQS5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoQi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoQy5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cblx0XHRcdE1haW4uc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdE1haW4ub3B0aW9ucy5wYXNzU3RhdGVUb0NoaWxkcmVuID0gdHJ1ZVxuXHRcdFx0QS5vcHRpb25zLnBhc3NTdGF0ZVRvQ2hpbGRyZW4gPSBmYWxzZVxuXHRcdFx0TWFpbi5zdGF0ZSAnaGFwcHknLCBmYWxzZVxuXHRcdFx0ZXhwZWN0KE1haW4uc3RhdGUgJ2hhcHB5JykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChBLnN0YXRlICdoYXBweScpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3QoQi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoQy5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cblxuXHRcdHRlc3QgXCJTdGF0ZSBzdHlsZXMgY2FuIGJlIG5lc3RlZCB0byB0cmlnZ2VyIHdoZW4gYWxsIHN0YXRlcyBhcmUgdG9nZ2xlZCBvblwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2IHN0eWxlOlxuXHRcdFx0XHQkYmFzZTpcblx0XHRcdFx0XHR3aWR0aDogJzEycHgnXG5cdFx0XHRcdFx0aGVpZ2h0OiAnMTJweCdcblx0XHRcdFx0XHRmb250U2l6ZTogJzEwcHgnXG5cdFx0XHRcdCRmdW5ueTpcblx0XHRcdFx0XHRmb250U2l6ZTogJzE1cHgnXG5cdFx0XHRcdFx0aGVpZ2h0OiAnMTVweCdcblx0XHRcdFx0XHQjIHdpZHRoOiAnMTBweCdcblx0XHRcdFx0JGhhcHB5OlxuXHRcdFx0XHRcdHdpZHRoOiAnMTRweCdcblx0XHRcdFx0XHRmb250U2l6ZTogJzE0cHgnXG5cdFx0XHRcdFx0JHJlbGF4ZWQ6XG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICcxMXB4J1xuXHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxN3B4J1xuXHRcdFx0XHRcdFx0JGZ1bm55OlxuXHRcdFx0XHRcdFx0XHR3aWR0aDogJzEwcHgnXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogJzE0cHgnXG5cdFx0XHRcdCRyZWxheGVkOlxuXHRcdFx0XHRcdHdpZHRoOiAnMTdweCdcblxuXHRcdFx0ZGl2LmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd3aWR0aCcpLnRvLmVxdWFsKCcxMnB4Jylcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2hlaWdodCcpLnRvLmVxdWFsKCcxMnB4Jylcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwoJzEwcHgnKVxuXG5cdFx0XHRkaXYuc3RhdGUgJ2Z1bm55Jywgb25cblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwoJzEycHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCgnMTVweCcpXG5cblx0XHRcdGRpdi5zdGF0ZSAnZnVubnknLCBvZmZcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwoJzEycHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwoJzEycHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCgnMTBweCcpXG5cblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnd2lkdGgnKS50by5lcXVhbCgnMTRweCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdoZWlnaHQnKS50by5lcXVhbCgnMTJweCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsKCcxNHB4JylcblxuXHRcdFx0ZGl2LnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwoJzE3cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwoJzExcHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCgnMTdweCcpXG5cblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvZmZcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwoJzE3cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwoJzEycHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCgnMTBweCcpXG5cblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnd2lkdGgnKS50by5lcXVhbCgnMTdweCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdoZWlnaHQnKS50by5lcXVhbCgnMTFweCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsKCcxN3B4Jylcblx0XHRcdFxuXHRcdFx0ZGl2LnN0YXRlICdmdW5ueScsIG9uXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd3aWR0aCcpLnRvLmVxdWFsKCcxMHB4Jylcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2hlaWdodCcpLnRvLmVxdWFsKCcxNHB4Jylcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwoJzE3cHgnKVxuXG5cdFx0XHRkaXYuc3RhdGUgJ2hhcHB5Jywgb2ZmXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd3aWR0aCcpLnRvLmVxdWFsKCcxN3B4Jylcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2hlaWdodCcpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwoJzE1cHgnKVxuXG5cblx0XHR0ZXN0IFwiUXVpY2tFbGVtZW50LnJlY3Qgc2hvdWxkIGNvbnRhaW4gYW4gdXBkYXRlZCB2ZXJzaW9uIG9mIHRoZSBlbGVtZW50J3MgQ2xpZW50UmVjdFwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KCkuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdHJlY3RBID0gZGl2LnJlY3Rcblx0XHRcdHJlY3RCID0gZGl2LnJlY3RcblxuXHRcdFx0ZXhwZWN0KHJlY3RBKS50by5iZS5pbnN0YW5jZU9mKENsaWVudFJlY3QpXG5cdFx0XHRleHBlY3QocmVjdEIpLnRvLmJlLmluc3RhbmNlT2YoQ2xpZW50UmVjdClcblx0XHRcdGV4cGVjdChyZWN0QSkudG8uZXFsKHJlY3RCKVxuXG5cblx0XHRcdGRpdi5zdHlsZSAnd2lkdGgnLCAnN3B4J1xuXHRcdFx0cmVjdEMgPSBkaXYucmVjdFxuXHRcdFx0ZXhwZWN0KHJlY3RDKS50by5iZS5pbnN0YW5jZU9mKENsaWVudFJlY3QpXG5cdFx0XHRleHBlY3QocmVjdEEpLnRvLmVxbChyZWN0Qilcblx0XHRcdGV4cGVjdChyZWN0QSkubm90LnRvLmVxbChyZWN0Qylcblx0XHRcdGV4cGVjdChyZWN0QS53aWR0aCkubm90LnRvLmVxdWFsKDcpXG5cdFx0XHRleHBlY3QocmVjdEIud2lkdGgpLm5vdC50by5lcXVhbCg3KVxuXHRcdFx0ZXhwZWN0KHJlY3RDLndpZHRoKS50by5lcXVhbCg3KVxuXG5cblx0XHR0ZXN0IFwiUXVpY2tFbGVtZW50LndpZHRoIHNob3VsZCByZXR1cm4gdGhlIHVwZGF0ZWQgdmVyc2lvbiBvZiBhbiBlbGVtZW50J3MgY29tcHV0ZWQgd2lkdGhcIiwgKCktPlxuXHRcdFx0cGFyZW50ID0gRG9tLmRpdigpLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRkaXYgPSBEb20uZGl2KCkuYXBwZW5kVG8ocGFyZW50KVxuXHRcdFx0XG5cdFx0XHRwYXJlbnQuc3R5bGUgd2lkdGg6JzEwMDBweCdcblx0XHRcdGRpdi5zdHlsZSB3aWR0aDonNTAlJ1xuXHRcdFx0ZXhwZWN0KGRpdi53aWR0aCkudG8uZXF1YWwoNTAwKVxuXHRcdFx0XG5cdFx0XHRkaXYuc3R5bGUgd2lkdGg6JzEwJSdcblx0XHRcdGV4cGVjdChkaXYud2lkdGgpLnRvLmVxdWFsKDEwMClcblx0XHRcdFxuXHRcdFx0ZGl2LnN0eWxlIHdpZHRoOic5N3B4J1xuXHRcdFx0ZXhwZWN0KGRpdi53aWR0aCkudG8uZXF1YWwoOTcpXG5cblxuXHRcdHRlc3QgXCJRdWlja0VsZW1lbnQuaGVpZ2h0IHNob3VsZCByZXR1cm4gdGhlIHVwZGF0ZWQgdmVyc2lvbiBvZiBhbiBlbGVtZW50J3MgY29tcHV0ZWQgaGVpZ2h0XCIsICgpLT5cblx0XHRcdHBhcmVudCA9IERvbS5kaXYoKS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpLmFwcGVuZFRvKHBhcmVudClcblx0XHRcdFxuXHRcdFx0cGFyZW50LnN0eWxlIGhlaWdodDonMTAwMHB4J1xuXHRcdFx0ZGl2LnN0eWxlIGhlaWdodDonNTAlJ1xuXHRcdFx0ZXhwZWN0KGRpdi5oZWlnaHQpLnRvLmVxdWFsKDUwMClcblx0XHRcdFxuXHRcdFx0ZGl2LnN0eWxlIGhlaWdodDonMTAlJ1xuXHRcdFx0ZXhwZWN0KGRpdi5oZWlnaHQpLnRvLmVxdWFsKDEwMClcblx0XHRcdFxuXHRcdFx0ZGl2LnN0eWxlIGhlaWdodDonOTdweCdcblx0XHRcdGV4cGVjdChkaXYuaGVpZ2h0KS50by5lcXVhbCg5NylcblxuXG5cdFx0dGVzdCBcIlF1aWNrRWxlbWVudC5vcmllbnRhdGlvbiBzaG91bGQgcmV0dXJuIHRoZSB1cGRhdGVkIHZlcnNpb24gb2YgYW4gZWxlbWVudCdzIGNvbXB1dGVkIG9yaWVudGF0aW9uXCIsICgpLT5cblx0XHRcdHBhcmVudCA9IERvbS5kaXYoKS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpLmFwcGVuZFRvKHBhcmVudClcblx0XHRcdFxuXHRcdFx0ZGl2LnN0eWxlIHdpZHRoOjUwMCwgaGVpZ2h0OjQwMFxuXHRcdFx0ZXhwZWN0KGRpdi5vcmllbnRhdGlvbikudG8uZXF1YWwoJ2xhbmRzY2FwZScpXG5cdFx0XHRcblx0XHRcdGRpdi5zdHlsZSB3aWR0aDo1NTAsIGhlaWdodDo2MDBcblx0XHRcdGV4cGVjdChkaXYub3JpZW50YXRpb24pLnRvLmVxdWFsKCdwb3J0cmFpdCcpXG5cdFx0XHRcblx0XHRcdGRpdi5zdHlsZSB3aWR0aDo2MDAsIGhlaWdodDo2MDBcblx0XHRcdGV4cGVjdChkaXYub3JpZW50YXRpb24pLnRvLmVxdWFsKCdwb3J0cmFpdCcpXG5cdFx0XHRcblx0XHRcdGRpdi5zdHlsZSB3aWR0aDo2MDEsIGhlaWdodDo2MDBcblx0XHRcdGV4cGVjdChkaXYub3JpZW50YXRpb24pLnRvLmVxdWFsKCdsYW5kc2NhcGUnKVxuXG5cblx0XHR0ZXN0IFwiUXVpY2tFbGVtZW50LmFzcGVjdFJhdGlvIHNob3VsZCByZXR1cm4gdGhlIHVwZGF0ZWQgdmVyc2lvbiBvZiBhbiBlbGVtZW50J3MgY29tcHV0ZWQgYXNwZWN0LXJhdGlvXCIsICgpLT5cblx0XHRcdHBhcmVudCA9IERvbS5kaXYoKS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpLmFwcGVuZFRvKHBhcmVudClcblx0XHRcdFxuXHRcdFx0ZGl2LnN0eWxlIHdpZHRoOjUwMCwgaGVpZ2h0OjQwMFxuXHRcdFx0ZXhwZWN0KGRpdi5hc3BlY3RSYXRpbykudG8uZXF1YWwoMS4yNSlcblx0XHRcdFxuXHRcdFx0ZGl2LnN0eWxlIHdpZHRoOjU0MCwgaGVpZ2h0OjYwMFxuXHRcdFx0ZXhwZWN0KGRpdi5hc3BlY3RSYXRpbykudG8uZXF1YWwoMC45KVxuXHRcdFx0XG5cdFx0XHRkaXYuc3R5bGUgd2lkdGg6NjAwLCBoZWlnaHQ6NjAwXG5cdFx0XHRleHBlY3QoZGl2LmFzcGVjdFJhdGlvKS50by5lcXVhbCgxKVxuXHRcdFx0XG5cdFx0XHRkaXYuc3R5bGUgd2lkdGg6MzAwLCBoZWlnaHQ6OTAwXG5cdFx0XHRleHBlY3QoZGl2LmFzcGVjdFJhdGlvKS50by5lcXVhbCgwLjMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzKVxuXG5cblx0XHR0ZXN0IFwiSWYgb3B0aW9ucy5zdHlsZUFmdGVySW5zZXJ0IGlzIHBhc3NlZCwgYmFzZSBzdHlsZXMgd2lsbCBiZSBhcHBsaWVkIG9ubHkgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgaW5zZXJ0ZWQgaW50byB0aGUgRE9NXCIsICgpLT5cblx0XHRcdHBhcmVudE9wYWNpdHlHZXR0ZXIgPSAoKS0+IGlmIEBwYXJlbnQgdGhlbiBAcGFyZW50LnN0eWxlKCdvcGFjaXR5JykgZWxzZSAnMC41J1xuXHRcdFx0ZGl2UmVnID0gRG9tLmRpdihzdHlsZTp7aGVpZ2h0OicxOXB4Jywgb3BhY2l0eTpwYXJlbnRPcGFjaXR5R2V0dGVyfSlcblx0XHRcdGRpdkEgPSBEb20uZGl2KHN0eWxlOntoZWlnaHQ6JzE5cHgnLCBvcGFjaXR5OnBhcmVudE9wYWNpdHlHZXR0ZXJ9LCBzdHlsZUFmdGVySW5zZXJ0OnRydWUpXG5cdFx0XHRkaXZCID0gRG9tLmRpdihzdHlsZTp7aGVpZ2h0OicxOXB4Jywgb3BhY2l0eTpwYXJlbnRPcGFjaXR5R2V0dGVyfSwgc3R5bGVBZnRlckluc2VydDp0cnVlKVxuXHRcdFx0ZGl2QyA9IERvbS5kaXYoc3R5bGU6e2hlaWdodDonMTlweCcsIG9wYWNpdHk6cGFyZW50T3BhY2l0eUdldHRlcn0sIHN0eWxlQWZ0ZXJJbnNlcnQ6dHJ1ZSlcblxuXHRcdFx0ZXhwZWN0KGRpdlJlZy5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxOXB4Jylcblx0XHRcdGV4cGVjdChkaXZSZWcuZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJzAuNScpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZDLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZCLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkMuZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJycpXG5cdFx0XHRcblx0XHRcdGRpdkEuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZDLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnMScpXG5cdFx0XHRleHBlY3QoZGl2Qi5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZDLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcnKVxuXHRcdFx0XG5cdFx0XHRkaXZCLmluc2VydEJlZm9yZShzYW5kYm94KVxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTlweCcpXG5cdFx0XHRleHBlY3QoZGl2Qi5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxOXB4Jylcblx0XHRcdGV4cGVjdChkaXZDLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnMScpXG5cdFx0XHRleHBlY3QoZGl2Qi5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnMScpXG5cdFx0XHRleHBlY3QoZGl2Qy5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnJylcblx0XHRcdFxuXHRcdFx0c2FuZGJveC5hcHBlbmRDaGlsZChkaXZDLmVsKVxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTlweCcpXG5cdFx0XHRleHBlY3QoZGl2Qi5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxOXB4Jylcblx0XHRcdGV4cGVjdChkaXZDLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnMScpXG5cdFx0XHRleHBlY3QoZGl2Qi5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnMScpXG5cdFx0XHRleHBlY3QoZGl2Qy5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnJylcblx0XHRcdFxuXHRcdFx0ZGl2Qy5wYXJlbnRcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTlweCcpXG5cdFx0XHRleHBlY3QoZGl2Qy5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxOXB4Jylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcxJylcblx0XHRcdGV4cGVjdChkaXZCLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcxJylcblx0XHRcdGV4cGVjdChkaXZDLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcxJylcblx0XHRcdGRpdkMuYXBwZW5kVG8oc2FuZGJveClcblxuXG5cdFx0dGVzdCBcIkFueSBzdHlsZXMgYXBwbGllZCBieSBzdGF0ZXMgYmVmb3JlIHRoZSBlbGVtZW50IGhhcyBiZWVuIGluc2VydGVkIGludG8gdGhlIERPTSBhbmQgd2hlbiBvcHRpb25zLnN0eWxlQWZ0ZXJJbnNlcnQgaXMgb24gd2lsbCBiZSByZS1hcHBsaWVkIGFmdGVyIGluc2VydFwiLCAoKS0+XG5cdFx0XHRkaXZSZWcgPSBEb20uZGl2KHN0eWxlOnskYmFzZTp7aGVpZ2h0OicxOXB4J30sICRmdW5ueTp7aGVpZ2h0OicyOXB4J30sICRoYXBweTp7aGVpZ2h0OiczOXB4J319KVxuXHRcdFx0ZGl2QSA9IERvbS5kaXYoc3R5bGU6eyRiYXNlOntoZWlnaHQ6JzE5cHgnfSwgJGZ1bm55OntoZWlnaHQ6JzI5cHgnfSwgJGhhcHB5OntoZWlnaHQ6JzM5cHgnfX0sIHN0eWxlQWZ0ZXJJbnNlcnQ6dHJ1ZSlcblxuXHRcdFx0ZXhwZWN0KGRpdlJlZy5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxOXB4Jylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJycpXG5cblx0XHRcdGRpdlJlZy5zdGF0ZSAnZnVubnknLCBvblxuXHRcdFx0ZGl2QS5zdGF0ZSAnZnVubnknLCBvblxuXHRcdFx0ZXhwZWN0KGRpdlJlZy5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcyOXB4Jylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzI5cHgnKVxuXHRcdFx0XG5cdFx0XHRkaXZSZWcuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGRpdkEuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGV4cGVjdChkaXZSZWcuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMzlweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCczOXB4Jylcblx0XHRcdFxuXHRcdFx0ZGl2UmVnLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRkaXZBLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRleHBlY3QoZGl2UmVnLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzM5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMzlweCcpXG5cblxuXHRcdHRlc3QgXCJJZiBhbiBlbGVtZW50IHdpdGggb3B0aW9ucy5zdHlsZUFmdGVySW5zZXJ0IGlzIGFwcGVuZGVkIGludG8gYSBkZXRhY2hlZCBlbGVtZW50LCBzdHlsZXMgd2lsbCBiZSBhcHBsaWVkIG9ubHkgYWZ0ZXIgdGhlIHBhcmVudCBpcyBhcHBlbmRlZCB0byB0aGUgRE9NXCIsICgpLT5cblx0XHRcdGRldGFjaGVkUGFyZW50ID0gRG9tLmRpdigpXG5cdFx0XHRkaXZSZWcgPSBEb20uZGl2KHN0eWxlOntoZWlnaHQ6JzE5cHgnLCAkaGFwcHk6JHJlbGF4ZWQ6e3dpZHRoOiczMXB4J319KVxuXHRcdFx0ZGl2QSA9IERvbS5kaXYoc3R5bGU6e2hlaWdodDonMTlweCcsICRoYXBweTokcmVsYXhlZDp7d2lkdGg6JzMxcHgnfX0sIHN0eWxlQWZ0ZXJJbnNlcnQ6dHJ1ZSlcblxuXHRcdFx0ZGl2UmVnLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRkaXZSZWcuc3RhdGUgJ3JlbGF4ZWQnLCBvblxuXHRcdFx0ZGl2QS5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZGl2QS5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRkaXZBLnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdGRpdkEuc3R5bGUgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJ1xuXG5cdFx0XHRleHBlY3QoZGl2UmVnLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdlJlZy5lbC5zdHlsZS53aWR0aCkudG8uZXF1YWwoJzMxcHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLndpZHRoKS50by5lcXVhbCgnMzFweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS52aXNpYmlsaXR5KS50by5lcXVhbCgnaGlkZGVuJylcblxuXHRcdFx0ZGl2QS5hcHBlbmRUbyhkZXRhY2hlZFBhcmVudClcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS53aWR0aCkudG8uZXF1YWwoJzMxcHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUudmlzaWJpbGl0eSkudG8uZXF1YWwoJ2hpZGRlbicpXG5cblx0XHRcdGRldGFjaGVkUGFyZW50LmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxOXB4Jylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLndpZHRoKS50by5lcXVhbCgnMzFweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS52aXNpYmlsaXR5KS50by5lcXVhbCgnaGlkZGVuJylcblxuXG5cdFx0dGVzdCBcIlF1aWNrRWxlbWVudC5vbkluc2VydGVkIGNhbiBhY2NlcHQgY2FsbGJhY2tzIHdoaWNoIHdpbGwgYmUgaW52b2tlZCB3aGVuIGluc2VydGVkIGludG8gdGhlIERPTVwiLCAoKS0+XG5cdFx0XHRpbnZva2VDb3VudCA9IDBcblx0XHRcdHBhcmVudEEgPSBEb20uc2VjdGlvbigpXG5cdFx0XHRwYXJlbnRCID0gRG9tLnNlY3Rpb24oKVxuXHRcdFx0bWFzdGVyUGFyZW50QiA9IERvbS5kaXYoKVxuXHRcdFx0cGFyZW50QyA9IERvbS5zZWN0aW9uKCkuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGRpdiA9IERvbS5kaXYoKVxuXG5cdFx0XHRkaXYub25JbnNlcnRlZCAoZWwpLT5cblx0XHRcdFx0ZXhwZWN0KGVsKS50by5lcXVhbChkaXYpXG5cdFx0XHRcdGV4cGVjdChpbnZva2VDb3VudCsrKS50by5lcXVhbCgwKVxuXG5cdFx0XHRleHBlY3QoaW52b2tlQ291bnQpLnRvLmVxdWFsKDApXG5cdFx0XHRkaXYuYXBwZW5kVG8ocGFyZW50QSlcblx0XHRcdGV4cGVjdChpbnZva2VDb3VudCkudG8uZXF1YWwoMClcblx0XHRcdFxuXHRcdFx0ZGl2LmFwcGVuZFRvKHBhcmVudEIuYXBwZW5kVG8obWFzdGVyUGFyZW50QikpXG5cdFx0XHRleHBlY3QoaW52b2tlQ291bnQpLnRvLmVxdWFsKDApXG5cdFx0XHRcblx0XHRcdHBhcmVudEEuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGV4cGVjdChpbnZva2VDb3VudCkudG8uZXF1YWwoMClcblx0XHRcdFxuXHRcdFx0ZGl2LmFwcGVuZFRvKHBhcmVudEMpXG5cdFx0XHRleHBlY3QoaW52b2tlQ291bnQpLnRvLmVxdWFsKDEpXG5cblx0XHRcdGRpdi5kZXRhY2goKVxuXHRcdFx0ZGl2LmFwcGVuZFRvKHBhcmVudEIuYXBwZW5kVG8oc2FuZGJveCkpXG5cdFx0XHRleHBlY3QoaW52b2tlQ291bnQpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkudG8uZXF1YWwgcGFyZW50QlxuXG5cdFx0XHRkaXYub25JbnNlcnRlZCAoKS0+IGV4cGVjdChpbnZva2VDb3VudCsrKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGludm9rZUNvdW50KS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KGRpdi5wYXJlbnQpLnRvLmVxdWFsIHBhcmVudEJcblx0XHRcdFxuXHRcdFx0ZGl2LmFwcGVuZFRvKHBhcmVudEMpXG5cdFx0XHRleHBlY3QoaW52b2tlQ291bnQpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkudG8uZXF1YWwgcGFyZW50Q1xuXHRcdFx0XG5cdFx0XHRkaXYuZGV0YWNoKClcblx0XHRcdGRpdi5hcHBlbmRUbyhwYXJlbnRBKVxuXHRcdFx0ZGl2Lm9uSW5zZXJ0ZWQgKCgpLT4gaW52b2tlQ291bnQrKzsgZXhwZWN0KGZhbHNlKS50by5iZS50cnVlKSwgZmFsc2Vcblx0XHRcdGV4cGVjdChpbnZva2VDb3VudCkudG8uZXF1YWwoMilcblx0XHRcdFxuXHRcdFx0ZGl2LmRldGFjaCgpXG5cdFx0XHRkaXYuYXBwZW5kVG8ocGFyZW50Qilcblx0XHRcdGV4cGVjdChpbnZva2VDb3VudCkudG8uZXF1YWwoMilcblxuXG5cdFx0dGVzdCBcIlF1aWNrRWxlbWVudC5yZXBsYWNlIHdpbGwgdHJpZ2dlciB0aGUgb25JbnNlcnRlZCBldmVudFwiLCAoKS0+XG5cdFx0XHRpbnZva2VDb3VudCA9IDBcblx0XHRcdHBhcmVudCA9IERvbS5zZWN0aW9uKCkuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdEEgPSBEb20uZGl2KClcblx0XHRcdEIgPSBEb20uZGl2KClcblxuXHRcdFx0Qi5vbkluc2VydGVkIChlbCktPlxuXHRcdFx0XHRleHBlY3QoZWwpLnRvLmVxdWFsKEIpXG5cdFx0XHRcdGV4cGVjdChpbnZva2VDb3VudCsrKS50by5lcXVhbCgwKVxuXG5cdFx0XHRleHBlY3QoaW52b2tlQ291bnQpLnRvLmVxdWFsIDBcblx0XHRcdGV4cGVjdChBLnBhcmVudCkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KEIucGFyZW50KS50by5lcXVhbCh1bmRlZmluZWQpXG5cblx0XHRcdHBhcmVudC5hcHBlbmQoQSlcblx0XHRcdGV4cGVjdChpbnZva2VDb3VudCkudG8uZXF1YWwgMFxuXHRcdFx0ZXhwZWN0KEEucGFyZW50KS50by5lcXVhbChwYXJlbnQpXG5cdFx0XHRleHBlY3QoQi5wYXJlbnQpLnRvLmVxdWFsKHVuZGVmaW5lZClcblxuXHRcdFx0QS5yZXBsYWNlKEIpXG5cdFx0XHRleHBlY3QoaW52b2tlQ291bnQpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChBLnBhcmVudCkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KEIucGFyZW50KS50by5lcXVhbChwYXJlbnQpXG5cblxuXHRcdHRlc3QgXCJRdWlja0VsZW1lbnQucGlwZVN0YXRlIGNhbiBiZSB1c2VkIHRvIHJlZGlyZWN0IGFsbCBzdGF0ZSB0b2dnbGVzIHRvIHRoZSBwcm92aWRlZCB0YXJnZXQgZWxlbWVudFwiLCAoKS0+XG5cdFx0XHRwYXJlbnRBID0gRG9tLmRpdigpXG5cdFx0XHRwYXJlbnRCID0gRG9tLmRpdihwYXNzU3RhdGVUb0NoaWxkcmVuOmZhbHNlKVxuXHRcdFx0ZGl2QSA9IERvbS5kaXYobnVsbCkuYXBwZW5kVG8ocGFyZW50QSlcblx0XHRcdGRpdkIgPSBEb20uZGl2KG51bGwpLmFwcGVuZFRvKHBhcmVudEIpXG5cdFx0XHRjaGlsZEEgPSBEb20uc3BhbigpLmFwcGVuZFRvKGRpdkEpXG5cdFx0XHRjaGlsZEIgPSBEb20uc3BhbigpLmFwcGVuZFRvKGRpdkIpXG5cblx0XHRcdGRpdkEucGlwZVN0YXRlKClcblx0XHRcdGRpdkEuc3RhdGUgJzEnLCBvblxuXHRcdFx0ZXhwZWN0KHBhcmVudEEuc3RhdGUgJzEnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICcxJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChjaGlsZEEuc3RhdGUgJzEnKS50by5lcXVhbCBvblxuXHRcdFx0XG5cdFx0XHRkaXZBLnBpcGVTdGF0ZShwYXJlbnRBKVxuXHRcdFx0ZGl2QS5zdGF0ZSAnMicsIG9uXG5cdFx0XHRleHBlY3QocGFyZW50QS5zdGF0ZSAnMicpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnMicpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QoY2hpbGRBLnN0YXRlICcyJykudG8uZXF1YWwgb25cblxuXHRcdFx0ZGl2QS5waXBlU3RhdGUoZmFsc2UpXG5cdFx0XHRkaXZBLnN0YXRlICcyLjUnLCBvblxuXHRcdFx0ZXhwZWN0KHBhcmVudEEuc3RhdGUgJzIuNScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkEuc3RhdGUgJzIuNScpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QoY2hpbGRBLnN0YXRlICcyLjUnKS50by5lcXVhbCBvblxuXHRcdFx0XG5cdFx0XHRkaXZCLnBpcGVTdGF0ZSh0cnVlKVxuXHRcdFx0ZGl2Qi5zdGF0ZSAnMycsIG9uXG5cdFx0XHRleHBlY3QocGFyZW50Qi5zdGF0ZSAnMycpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJzMnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5zdGF0ZSAnMycpLnRvLmVxdWFsIG9uXG5cdFx0XHRcblx0XHRcdGRpdkIucGlwZVN0YXRlKHBhcmVudEIpXG5cdFx0XHRkaXZCLnN0YXRlICc0Jywgb25cblx0XHRcdGV4cGVjdChwYXJlbnRCLnN0YXRlICc0JykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChkaXZCLnN0YXRlICc0JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoY2hpbGRCLnN0YXRlICc0JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRcblx0XHRcdGRpdkEucGlwZVN0YXRlKHBhcmVudEIpXG5cdFx0XHRkaXZBLnN0YXRlICc1Jywgb25cblx0XHRcdGV4cGVjdChwYXJlbnRBLnN0YXRlICc1JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QocGFyZW50Qi5zdGF0ZSAnNScpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnNScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJzUnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChjaGlsZEEuc3RhdGUgJzUnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChjaGlsZEIuc3RhdGUgJzUnKS50by5lcXVhbCBvZmZcblx0XHRcdFxuXHRcdFx0ZGl2QS5waXBlU3RhdGUoZmFsc2UpXG5cdFx0XHRkaXZCLnBpcGVTdGF0ZShwYXJlbnRBKVxuXHRcdFx0ZGl2Qi5zdGF0ZSAnNicsIG9uXG5cdFx0XHRleHBlY3QocGFyZW50QS5zdGF0ZSAnNicpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QocGFyZW50Qi5zdGF0ZSAnNicpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkEuc3RhdGUgJzYnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJzYnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChjaGlsZEEuc3RhdGUgJzYnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5zdGF0ZSAnNicpLnRvLmVxdWFsIG9mZlxuXG5cblx0XHR0ZXN0IFwiU3RhdGVzIGNhbiBiZSBtYXJrZWQgYXMgdW5wYXNzYWJsZSB0byBhdm9pZCBwYXNzaW5nIHRvIGNoaWxkcmVuIGJ5IGluY2x1ZGluZyB0aGVtIGluIG9wdGlvbnMudW5wYXNzYWJsZVN0YXRlc1wiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KHVucGFzc2FibGVTdGF0ZXM6IFsnQicsJ0QnXSlcblx0XHRcdHNwYW5BID0gRG9tLnNwYW4oKS5hcHBlbmRUbyhkaXYpXG5cdFx0XHRzcGFuQiA9IERvbS5zcGFuKCkuYXBwZW5kVG8oZGl2KVxuXHRcdFx0c3ViU3BhbiA9IERvbS5zcGFuKCkuYXBwZW5kVG8oc3BhbkIpXG5cblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ0EnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzcGFuQS5zdGF0ZSAnQScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHNwYW5CLnN0YXRlICdBJykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViU3Bhbi5zdGF0ZSAnQScpLnRvLmVxdWFsIG9mZlxuXG5cdFx0XHRkaXYuc3RhdGUgJ0EnLCBvblxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnQScpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3Qoc3BhbkEuc3RhdGUgJ0EnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KHNwYW5CLnN0YXRlICdBJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChzdWJTcGFuLnN0YXRlICdBJykudG8uZXF1YWwgb25cblxuXHRcdFx0ZGl2LnN0YXRlICdCJywgb25cblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ0InKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KHNwYW5BLnN0YXRlICdCJykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3BhbkIuc3RhdGUgJ0InKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJTcGFuLnN0YXRlICdCJykudG8uZXF1YWwgb2ZmXG5cblx0XHRcdGRpdi5zdGF0ZSAnQycsIG9uXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdDJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChzcGFuQS5zdGF0ZSAnQycpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3Qoc3BhbkIuc3RhdGUgJ0MnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KHN1YlNwYW4uc3RhdGUgJ0MnKS50by5lcXVhbCBvblxuXG5cdFx0XHRkaXYuc3RhdGUgJ0QnLCBvblxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnRCcpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3Qoc3BhbkEuc3RhdGUgJ0QnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzcGFuQi5zdGF0ZSAnRCcpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YlNwYW4uc3RhdGUgJ0QnKS50by5lcXVhbCBvZmZcblx0XHRcdFxuXHRcdFx0c3BhbkIuc3RhdGUgJ0QnLCBvblxuXHRcdFx0ZXhwZWN0KHNwYW5CLnN0YXRlICdEJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChzdWJTcGFuLnN0YXRlICdEJykudG8uZXF1YWwgb25cblx0XHRcdFxuXHRcdFx0ZGl2LnN0YXRlICdEJywgb2ZmXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdEJykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3BhbkIuc3RhdGUgJ0QnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KHN1YlNwYW4uc3RhdGUgJ0QnKS50by5lcXVhbCBvblxuXG5cblx0XHR0ZXN0IFwiV2hlbiAuc3RhdGUoKSByZWNlaXZlcyBhIHRydXRoeSB2YWx1ZSBhcyB0aGUgdGhpcmQgYXJndW1lbnQgdGhlIGV2ZW50IHdpbGwgYnViYmxlIHVwIHRvIHBhcmVudHMgaW5zdGVhZCBvZiBjYXNjYWRlIHRvIGNoaWxkcmVuXCIsICgpLT5cblx0XHRcdHBhcmVudEEgPSBEb20uc2VjdGlvbiBudWxsLFxuXHRcdFx0XHRzdWJQYXJlbnRBID0gRG9tLmRpdiBudWxsLFxuXHRcdFx0XHRcdGNoaWxkQSA9IERvbS5kaXYgbnVsbCxcblx0XHRcdFx0XHRcdHN1YkNoaWxkQSA9IERvbS5kaXYoKVxuXHRcdFx0XG5cdFx0XHRwYXJlbnRCID0gRG9tLnNlY3Rpb24gbnVsbCxcblx0XHRcdFx0c3ViUGFyZW50QiA9IERvbS5kaXYgbnVsbCxcblx0XHRcdFx0XHRjaGlsZEIgPSBEb20uZGl2IG51bGwsXG5cdFx0XHRcdFx0XHRzdWJDaGlsZEIgPSBEb20uZGl2KClcblxuXHRcdFx0ZXhwZWN0KHBhcmVudEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QocGFyZW50Qi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJQYXJlbnRBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YlBhcmVudEIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoY2hpbGRBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJDaGlsZEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViQ2hpbGRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXG5cdFx0XHRjaGlsZEEuc3RhdGUgJ2hhcHB5Jywgb24sIHRydWVcblx0XHRcdGNoaWxkQi5zdGF0ZSAnaGFwcHknLCBvblxuXG5cdFx0XHRleHBlY3QocGFyZW50QS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KHBhcmVudEIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViUGFyZW50QS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KHN1YlBhcmVudEIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoY2hpbGRBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QoY2hpbGRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3Qoc3ViQ2hpbGRBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YkNoaWxkQi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvblxuXG5cdFx0XHRjaGlsZEEuc3RhdGUgJ3JlbGF4ZWQnLCBvbiwgbnVsbFxuXHRcdFx0Y2hpbGRCLnN0YXRlICdyZWxheGVkJywgb24sICdvbidcblxuXHRcdFx0ZXhwZWN0KHBhcmVudEEuc3RhdGUgJ3JlbGF4ZWQnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChwYXJlbnRCLnN0YXRlICdyZWxheGVkJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChzdWJQYXJlbnRBLnN0YXRlICdyZWxheGVkJykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViUGFyZW50Qi5zdGF0ZSAncmVsYXhlZCcpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QoY2hpbGRBLnN0YXRlICdyZWxheGVkJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChjaGlsZEIuc3RhdGUgJ3JlbGF4ZWQnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KHN1YkNoaWxkQS5zdGF0ZSAncmVsYXhlZCcpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3Qoc3ViQ2hpbGRCLnN0YXRlICdyZWxheGVkJykudG8uZXF1YWwgb2ZmXG5cblxuXHRcdHRlc3QgXCJvcHRpb25zLnN0YXRlVHJpZ2dlcnMgY29uZmlnIG9iamVjdHMgY2FuIHNwZWNpZnkgYSAnZm9yY2UnIHByb3BlcnR5IHdoaWNoIHdpbGwgbWFrZSB0aGVtIGdldCBhdHRhY2hlZCBldmVuIGlmIHRoZXkgYXJlbid0IHVzZWRcIiwgKCktPlxuXHRcdFx0ZGl2QSA9IERvbS5kaXYgc3RhdGVUcmlnZ2Vyczp7J2hhcHB5Jzogb246J2hhcHB5T04nLCBvZmY6J2hhcHB5T0ZGJywgZm9yY2U6dHJ1ZX1cblx0XHRcdGRpdkIgPSBEb20uZGl2IHN0YXRlVHJpZ2dlcnM6eydoYXBweSc6IG9uOidoYXBweU9OJywgb2ZmOidoYXBweU9GRid9XG5cblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cblx0XHRcdGRpdkEucmF3LmVtaXRFdmVudCAnaGFwcHlPTidcblx0XHRcdGRpdkIucmF3LmVtaXRFdmVudCAnaGFwcHlPTidcblxuXHRcdFx0ZXhwZWN0KGRpdkEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChkaXZCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXG5cdFx0XHRkaXZCLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRkaXZBLnJhdy5lbWl0RXZlbnQgJ2hhcHB5T0ZGJ1xuXHRcdFx0ZGl2Qi5yYXcuZW1pdEV2ZW50ICdoYXBweU9GRidcblxuXHRcdFx0ZXhwZWN0KGRpdkEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoZGl2Qi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvblxuXG5cblx0XHR0ZXN0IFwib3B0aW9ucy5zdGF0ZVRyaWdnZXJzIGNvbmZpZyBvYmplY3RzIGNhbiBzcGVjaWZ5IGEgJ2J1YmJsZXMnIHByb3BlcnR5IHdoaWNoIHdpbGwgY2F1c2UgdGhlIHN0YXRlIHRvIGJ1YmJsZSB0byBwYXJlbnRzIGluc3RlYWQgb2YgY2FzY2FkZSB0byBjaGlsZHJlblwiLCAoKS0+XG5cdFx0XHRwYXJlbnRBID0gRG9tLnNlY3Rpb24gbnVsbCxcblx0XHRcdFx0c3ViUGFyZW50QSA9IERvbS5kaXYgbnVsbCxcblx0XHRcdFx0XHRjaGlsZEEgPSBEb20uZGl2IHN0YXRlVHJpZ2dlcnM6eydoYXBweSc6IG9uOidoYXBweU9OJywgb2ZmOidoYXBweU9GRicsIGJ1YmJsZXM6dHJ1ZSwgZm9yY2U6dHJ1ZX0sXG5cdFx0XHRcdFx0XHRzdWJDaGlsZEEgPSBEb20uZGl2KClcblx0XHRcdFxuXHRcdFx0cGFyZW50QiA9IERvbS5zZWN0aW9uIG51bGwsXG5cdFx0XHRcdHN1YlBhcmVudEIgPSBEb20uZGl2IG51bGwsXG5cdFx0XHRcdFx0Y2hpbGRCID0gRG9tLmRpdiBzdGF0ZVRyaWdnZXJzOnsnaGFwcHknOiBvbjonaGFwcHlPTicsIG9mZjonaGFwcHlPRkYnLCBmb3JjZTp0cnVlfSxcblx0XHRcdFx0XHRcdHN1YkNoaWxkQiA9IERvbS5kaXYoKVxuXG5cdFx0XHRleHBlY3QocGFyZW50QS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChwYXJlbnRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YlBhcmVudEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViUGFyZW50Qi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChjaGlsZEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoY2hpbGRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YkNoaWxkQS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJDaGlsZEIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cblx0XHRcdGNoaWxkQS5yYXcuZW1pdEV2ZW50ICdoYXBweU9OJ1xuXHRcdFx0Y2hpbGRCLnJhdy5lbWl0RXZlbnQgJ2hhcHB5T04nXG5cblx0XHRcdGV4cGVjdChwYXJlbnRBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QocGFyZW50Qi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJQYXJlbnRBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3Qoc3ViUGFyZW50Qi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChjaGlsZEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChjaGlsZEIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChzdWJDaGlsZEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViQ2hpbGRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9uXG5cblx0XHRcdGNoaWxkQS5yYXcuZW1pdEV2ZW50ICdoYXBweU9GRidcblx0XHRcdGNoaWxkQi5yYXcuZW1pdEV2ZW50ICdoYXBweU9GRidcblxuXHRcdFx0ZXhwZWN0KHBhcmVudEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QocGFyZW50Qi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJQYXJlbnRBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YlBhcmVudEIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoY2hpbGRBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJDaGlsZEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViQ2hpbGRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXG5cblx0XHR0ZXN0IFwid3JhcHBlcnMgY3JlYXRlZCBmb3IgZXhpc3RpbmcgZWxlbWVudHMgc2hvdWxkIGF0dGVtcHQgdG8gcmVzb2x2ZSBpZiBpdHMgaW5zZXJ0ZWQgaW50byB0aGUgRE9NIG9uIGluaXRcIiwgKCktPlxuXHRcdFx0ZGl2QV8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdFx0ZGl2Ql8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdFx0c2FuZGJveC5hcHBlbmRDaGlsZChkaXZCXylcblx0XHRcdGRpdkEgPSBEb20oZGl2QV8pXG5cdFx0XHRkaXZCID0gRG9tKGRpdkJfKVxuXG5cdFx0XHRkaXZBXy5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnXG5cdFx0XHRkaXZCXy5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnXG5cblx0XHRcdGV4cGVjdCh0eXBlb2YgZGl2QS5oZWlnaHQpLnRvLmVxdWFsKCdudW1iZXInKVxuXHRcdFx0ZXhwZWN0KHR5cGVvZiBkaXZCLmhlaWdodCkudG8uZXF1YWwoJ251bWJlcicpXG5cdFx0XHRleHBlY3QoaXNOYU4gZGl2QS5oZWlnaHQpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChpc05hTiBkaXZCLmhlaWdodCkudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlU2FmZSAnaGVpZ2h0JykudG8uZXF1YWwgJzEwMHB4J1xuXG5cblx0XHR0ZXN0IFwic3RhdGUtYmFzZWQgdGV4dFwiLCAoKS0+XG5cdFx0XHRkaXZBID0gRG9tKFxuXHRcdFx0XHRbJ2RpdicsIG51bGwsXG5cdFx0XHRcdFx0Wyd0ZXh0Jyxcblx0XHRcdFx0XHRcdHRleHQ6XG5cdFx0XHRcdFx0XHRcdCRiYXNlOiAnYWJjMTIzJ1xuXHRcdFx0XHRcdFx0XHQkaGFwcHk6ICdIYXBweSdcblx0XHRcdFx0XHRcdFx0JHJlbGF4ZWQ6ICdSZWxheGVkJ1xuXHRcdFx0XHRcdF1cblx0XHRcdFx0XVxuXHRcdFx0KVxuXHRcdFx0ZGl2QiA9IERvbShcblx0XHRcdFx0WydkaXYnLCBudWxsLFxuXHRcdFx0XHRcdFsndGV4dCcsXG5cdFx0XHRcdFx0XHR0ZXh0OlxuXHRcdFx0XHRcdFx0XHQkaGFwcHk6ICdIYXBweSdcblx0XHRcdFx0XHRcdFx0JHJlbGF4ZWQ6ICdSZWxheGVkJ1xuXHRcdFx0XHRcdFx0XHQnJHJlbGF4ZWQrZnVubnknOiAnRnVubnkgJiBSZWxheGVkJ1xuXHRcdFx0XHRcdF1cblx0XHRcdFx0XVxuXHRcdFx0KVxuXHRcdFx0ZXhwZWN0KGRpdkEudGV4dCkudG8uZXF1YWwgJ2FiYzEyMydcblx0XHRcdGV4cGVjdChkaXZCLnRleHQpLnRvLmVxdWFsICcnXG5cdFx0XHRcblx0XHRcdGRpdkEuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGRpdkIuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGV4cGVjdChkaXZBLnRleHQpLnRvLmVxdWFsICdIYXBweSdcblx0XHRcdGV4cGVjdChkaXZCLnRleHQpLnRvLmVxdWFsICdIYXBweSdcblx0XHRcdFxuXHRcdFx0ZGl2QS5zdGF0ZSAnaGFwcHknLCBvZmZcblx0XHRcdGRpdkIuc3RhdGUgJ2hhcHB5Jywgb2ZmXG5cdFx0XHRleHBlY3QoZGl2QS50ZXh0KS50by5lcXVhbCAnYWJjMTIzJ1xuXHRcdFx0ZXhwZWN0KGRpdkIudGV4dCkudG8uZXF1YWwgJydcblx0XHRcdFxuXHRcdFx0ZGl2QS5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRkaXZCLnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdGV4cGVjdChkaXZBLnRleHQpLnRvLmVxdWFsICdSZWxheGVkJ1xuXHRcdFx0ZXhwZWN0KGRpdkIudGV4dCkudG8uZXF1YWwgJ1JlbGF4ZWQnXG5cdFx0XHRcblx0XHRcdGRpdkEuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGRpdkIuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGV4cGVjdChkaXZBLnRleHQpLnRvLmVxdWFsICdSZWxheGVkJ1xuXHRcdFx0ZXhwZWN0KGRpdkIudGV4dCkudG8uZXF1YWwgJ1JlbGF4ZWQnXG5cdFx0XHRcblx0XHRcdGRpdkEuc3RhdGUgJ3JlbGF4ZWQnLCBvZmZcblx0XHRcdGRpdkIuc3RhdGUgJ3JlbGF4ZWQnLCBvZmZcblx0XHRcdGV4cGVjdChkaXZBLnRleHQpLnRvLmVxdWFsICdIYXBweSdcblx0XHRcdGV4cGVjdChkaXZCLnRleHQpLnRvLmVxdWFsICdIYXBweSdcblx0XHRcdFxuXHRcdFx0ZGl2Qi5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRkaXZCLnN0YXRlICdmdW5ueScsIG9uXG5cdFx0XHRleHBlY3QoZGl2Qi50ZXh0KS50by5lcXVhbCAnUmVsYXhlZCdcblxuXHRcdFx0ZGl2Qi5zdGF0ZSAncmVsYXhlZCtmdW5ueScsIG9uXG5cdFx0XHRleHBlY3QoZGl2Qi50ZXh0KS50by5lcXVhbCAnRnVubnkgJiBSZWxheGVkJ1xuXG5cblx0XHR0ZXN0IFwic3RhdGUgY2hhbmdlcyB3aWxsIGVtaXQgYSBwcml2YXRlIHN0YXRlQ2hhbmdlOjxzdGF0ZT4gZXZlbnRcIiwgKCktPlxuXHRcdFx0cmVzdWx0cyA9IFtdXG5cdFx0XHRkaXYgPSBEb20uZGl2IHN0eWxlOlxuXHRcdFx0XHRjb2xvcjogJ3doaXRlJ1xuXHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRcdCRoYXBweTogY29sb3I6ICdibGFjaydcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRkaXYuc3RhdGUgJ2FueScsIG9uXG5cdFx0XHRkaXYub24gJ3N0YXRlQ2hhbmdlOmhhcHB5JywgKHN0YXRlKS0+IHJlc3VsdHMucHVzaCBbJ2hhcHB5Jywgc3RhdGVdXG5cdFx0XHRkaXYub24gJ3N0YXRlQ2hhbmdlOnJlbGF4ZWQnLCAoc3RhdGUpLT4gcmVzdWx0cy5wdXNoIFsncmVsYXhlZCcsIHN0YXRlXVxuXHRcdFx0ZGl2Lm9uICdzdGF0ZUNoYW5nZTphcmJpdHJhcnknLCAoc3RhdGUpLT4gcmVzdWx0cy5wdXNoIFsnYXJiaXRyYXJ5Jywgc3RhdGVdXG5cdFx0XHRleHBlY3QocmVzdWx0cykudG8uZGVlcC5lcXVhbCBbXVxuXG5cdFx0XHRkaXYuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGV4cGVjdChyZXN1bHRzKS50by5kZWVwLmVxdWFsIFtbJ2hhcHB5Jyxvbl1dXG5cblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvZmZcblx0XHRcdGV4cGVjdChyZXN1bHRzKS50by5kZWVwLmVxdWFsIFtbJ2hhcHB5Jyxvbl0sIFsnaGFwcHknLG9mZl1dXG5cblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZXhwZWN0KHJlc3VsdHMpLnRvLmRlZXAuZXF1YWwgW1snaGFwcHknLG9uXSwgWydoYXBweScsb2ZmXSwgWydoYXBweScsb25dXVxuXG5cdFx0XHRkaXYuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGV4cGVjdChyZXN1bHRzKS50by5kZWVwLmVxdWFsIFtbJ2hhcHB5Jyxvbl0sIFsnaGFwcHknLG9mZl0sIFsnaGFwcHknLG9uXV1cblxuXHRcdFx0ZGl2LnN0YXRlICdhbm90aGVyJywgb25cblx0XHRcdGV4cGVjdChyZXN1bHRzKS50by5kZWVwLmVxdWFsIFtbJ2hhcHB5Jyxvbl0sIFsnaGFwcHknLG9mZl0sIFsnaGFwcHknLG9uXV1cblxuXHRcdFx0ZGl2LnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdGV4cGVjdChyZXN1bHRzKS50by5kZWVwLmVxdWFsIFtbJ2hhcHB5Jyxvbl0sIFsnaGFwcHknLG9mZl0sIFsnaGFwcHknLG9uXSwgWydyZWxheGVkJyxvbl1dXG5cblx0XHRcdGRpdi5zdGF0ZSAnYXJiaXRyYXJ5Jywgb25cblx0XHRcdGV4cGVjdChyZXN1bHRzKS50by5kZWVwLmVxdWFsIFtbJ2hhcHB5Jyxvbl0sIFsnaGFwcHknLG9mZl0sIFsnaGFwcHknLG9uXSwgWydyZWxheGVkJyxvbl0sIFsnYXJiaXRyYXJ5Jyxvbl1dXG5cblx0XHRcdGRpdi5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRleHBlY3QocmVzdWx0cykudG8uZGVlcC5lcXVhbCBbWydoYXBweScsb25dLCBbJ2hhcHB5JyxvZmZdLCBbJ2hhcHB5Jyxvbl0sIFsncmVsYXhlZCcsb25dLCBbJ2FyYml0cmFyeScsb25dXVxuXG5cblxuXG5cblx0c3VpdGUgXCJNZWRpYSBRdWVyaWVzXCIsICgpLT5cblx0XHRzdWl0ZVRlYXJkb3duICgpLT4gZGltZW5zaW9ucy5yZXN0b3JlKClcblx0XHRzdWl0ZVNldHVwICgpLT5cblx0XHRcdEBza2lwKCkgaWYgbm90IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LCAnaW5uZXJXaWR0aCcpPy5jb25maWd1cmFibGVcblxuXG5cdFx0dGVzdCBcIldpbmRvdyBkaW1lbnNpb25zXCIsICgpLT5cblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoMTAwMCwgMTAwMClcblx0XHRcdGRpdiA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnXG5cdFx0XHRcdHpJbmRleDogMlxuXHRcdFx0XHR3aWR0aDogJzMwMHB4J1xuXHRcdFx0XHRoZWlnaHQ6ICczMDBweCdcblx0XHRcdFx0Zm9udFNpemU6ICczMHB4J1xuXHRcdFx0XHRsaW5lSGVpZ2h0OiAnMzBweCdcblxuXHRcdFx0XHQnQHdpbmRvdyhvcmllbnRhdGlvbjpsYW5kc2NhcGUpJzpcblx0XHRcdFx0XHRmb250V2VpZ2h0OiA2MDBcblxuXHRcdFx0XHQnQHdpbmRvdyhvcmllbnRhdGlvbjpwb3J0cmFpdCknOlxuXHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDcwMFxuXG5cdFx0XHRcdCdAd2luZG93KG1heC13aWR0aDo4MDApJzpcblx0XHRcdFx0XHR6SW5kZXg6IDNcblx0XHRcdFx0XHR3aWR0aDogJzI4MHB4J1xuXHRcdFx0XHRcblx0XHRcdFx0J0B3aW5kb3cobWF4LXdpZHRoOjcwMCwgbWF4LWhlaWdodDoxMDAwKSc6XG5cdFx0XHRcdFx0ekluZGV4OiA0XG5cdFx0XHRcdFx0d2lkdGg6ICcyNTBweCdcblx0XHRcdFx0XHRoZWlnaHQ6ICcyNTBweCdcblx0XHRcdFx0XG5cdFx0XHRcdCdAd2luZG93KG1heC1oZWlnaHQ6MTAwMCknOlxuXHRcdFx0XHRcdGZvbnRTaXplOiAnMjVweCdcblx0XHRcdFx0XG5cdFx0XHRcdCdAd2luZG93KG1pbi13aWR0aDo5MDBweCknOlxuXHRcdFx0XHRcdGZvbnRTaXplOiAnMjNweCdcblx0XHRcdFx0XG5cdFx0XHRcdCdAd2luZG93KGFzcGVjdC1yYXRpbzowLjUpJzpcblx0XHRcdFx0XHRmb250U2l6ZTogJzIxcHgnXG5cdFx0XHRcdFx0bGluZUhlaWdodDogJzEycHgnXG5cdFx0XHRcdFxuXHRcdFx0XHQnQHdpbmRvdyhtaW4taGVpZ2h0OjEyMDApJzpcblx0XHRcdFx0XHRmb250U2l6ZTogJzIwcHgnXG5cblx0XHRcdGRpdi5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0XG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS56SW5kZXgpLnRvLmVxdWFsICcyJ1xuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUud2lkdGgpLnRvLmVxdWFsICczMDBweCdcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmhlaWdodCkudG8uZXF1YWwgJzMwMHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFNpemUpLnRvLmVxdWFsICcyM3B4J1xuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFdlaWdodCkudG8uZXF1YWwgJzcwMCdcblx0XHRcdFxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSg5MDApXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5mb250U2l6ZSkudG8uZXF1YWwgJzIzcHgnXG5cdFx0XHRcblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoODk5KVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFNpemUpLnRvLmVxdWFsICcyNXB4J1xuXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDg5OSwgMTEwMClcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmZvbnRTaXplKS50by5lcXVhbCAnMzBweCdcblxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSg5NTApXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5mb250U2l6ZSkudG8uZXF1YWwgJzIzcHgnXG5cblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoOTUwLCAxOTAwKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFNpemUpLnRvLmVxdWFsICcyMHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUubGluZUhlaWdodCkudG8uZXF1YWwgJzEycHgnXG5cdFx0XHRcblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoOTUwLCAxODk5KVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFNpemUpLnRvLmVxdWFsICcyMHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUubGluZUhlaWdodCkudG8uZXF1YWwgJzMwcHgnXG5cblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoNzkwKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuekluZGV4KS50by5lcXVhbCAnMydcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLndpZHRoKS50by5lcXVhbCAnMjgwcHgnXG5cblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoODEwKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuekluZGV4KS50by5lcXVhbCAnMidcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLndpZHRoKS50by5lcXVhbCAnMzAwcHgnXG5cblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoNzkxKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuekluZGV4KS50by5lcXVhbCAnMydcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLndpZHRoKS50by5lcXVhbCAnMjgwcHgnXG5cblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoNzAxLCA5MDApXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS56SW5kZXgpLnRvLmVxdWFsICczJ1xuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUud2lkdGgpLnRvLmVxdWFsICcyODBweCdcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmhlaWdodCkudG8uZXF1YWwgJzMwMHB4J1xuXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDcwMCwgOTAwKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuekluZGV4KS50by5lcXVhbCAnNCdcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLndpZHRoKS50by5lcXVhbCAnMjUwcHgnXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsICcyNTBweCdcblxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSg3MDAsIDEwMDEpXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS56SW5kZXgpLnRvLmVxdWFsICczJ1xuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUud2lkdGgpLnRvLmVxdWFsICcyODBweCdcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmhlaWdodCkudG8uZXF1YWwgJzMwMHB4J1xuXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDcwMCwgMTAwMClcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLnpJbmRleCkudG8uZXF1YWwgJzQnXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS53aWR0aCkudG8uZXF1YWwgJzI1MHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCAnMjUwcHgnXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5mb250V2VpZ2h0KS50by5lcXVhbCAnNzAwJ1xuXHRcdFx0XG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDExMDAsIDEwMDApXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5mb250V2VpZ2h0KS50by5lcXVhbCAnNjAwJ1xuXHRcdFx0XG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDExMDAsIDExMDEpXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5mb250V2VpZ2h0KS50by5lcXVhbCAnNzAwJ1xuXG5cblx0XHR0ZXN0IFwiU2VsZiBkaW1lbnNpb25zL3N0eWxlc1wiLCAoKS0+XG5cdFx0XHRwYXJlbnQgPSBEb20uZGl2KCkuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdHNpbXVsYXRlUGFyZW50ID0gKHdpZHRoLCBoZWlnaHQpLT5cblx0XHRcdFx0cGFyZW50LnN0eWxlICd3aWR0aCcsIHdpZHRoIGlmIHdpZHRoXG5cdFx0XHRcdHBhcmVudC5zdHlsZSAnaGVpZ2h0JywgaGVpZ2h0IGlmIGhlaWdodFxuXHRcdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKClcblx0XHRcdFxuXHRcdFx0ZGl2ID0gRG9tLmRpdiBzdHlsZTpcblx0XHRcdFx0cG9zaXRpb246ICdyZWxhdGl2ZSdcblx0XHRcdFx0ekluZGV4OiAyXG5cdFx0XHRcdHRvcDogJzMwcHgnXG5cdFx0XHRcdHdpZHRoOiAnMTAwJSdcblx0XHRcdFx0aGVpZ2h0OiAnMTAwJSdcblx0XHRcdFx0Zm9udFNpemU6ICczMHB4J1xuXHRcdFx0XHRsaW5lSGVpZ2h0OiAnMzBweCdcblxuXHRcdFx0XHQnQHNlbGYob3JpZW50YXRpb246bGFuZHNjYXBlKSc6XG5cdFx0XHRcdFx0Zm9udFdlaWdodDogNjAwXG5cblx0XHRcdFx0J0BzZWxmKG9yaWVudGF0aW9uOnBvcnRyYWl0KSc6XG5cdFx0XHRcdFx0Zm9udFdlaWdodDogNzAwXG5cdFx0XHRcdFxuXHRcdFx0XHQnQHNlbGYocG9zaXRpb246cmVsYXRpdmUpJzpcblx0XHRcdFx0XHR0b3A6ICcyMHB4J1xuXG5cdFx0XHRcdCdAc2VsZihtYXgtd2lkdGg6MzUwKSc6XG5cdFx0XHRcdFx0ekluZGV4OiAzXG5cdFx0XHRcdFx0Zm9udFNpemU6ICczM3B4J1xuXHRcdFx0XHRcblx0XHRcdFx0J0BzZWxmKG1heC13aWR0aDo1MDAsIG1pbi1oZWlnaHQ6NDAwKSc6XG5cdFx0XHRcdFx0ekluZGV4OiA0XG5cdFx0XHRcdFx0Zm9udFNpemU6ICcyN3B4J1xuXHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICczN3B4J1xuXHRcdFx0XHRcblx0XHRcdFx0J0BzZWxmKHpJbmRleDo0KSc6XG5cdFx0XHRcdFx0bGluZUhlaWdodDogJzE1cHgnXG5cdFx0XHRcdFxuXHRcdFx0XHQnQHNlbGYobWluLXpJbmRleDo2KSc6XG5cdFx0XHRcdFx0b3BhY2l0eTogJzAnXG5cdFx0XHRcdFxuXHRcdFx0XHQnQHNlbGYobWF4LWZvbnRTaXplOjIwKSc6XG5cdFx0XHRcdFx0bGluZUhlaWdodDogJzE5cHgnXG5cdFx0XHRcdFxuXHRcdFx0XHQnQHNlbGYobWluLXdpZHRoOjYwMHB4KSc6XG5cdFx0XHRcdFx0Zm9udFNpemU6ICcxOXB4J1xuXHRcdFx0XHRcblx0XHRcdFx0J0BzZWxmKGFzcGVjdC1yYXRpbzoyLjI1KSc6XG5cdFx0XHRcdFx0Zm9udFNpemU6ICcyMXB4J1xuXHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICcxMnB4J1xuXHRcdFx0XHRcblx0XHRcdFx0J0BzZWxmKG1pbi1oZWlnaHQ6NzAwKSc6XG5cdFx0XHRcdFx0Zm9udFNpemU6ICc0MHB4J1xuXG5cdFx0XHRzaW11bGF0ZVBhcmVudCg0MDAsIDMwMClcblx0XHRcdGRpdi5hcHBlbmRUbyhwYXJlbnQpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd6SW5kZXgnKS50by5lcXVhbCAnMidcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwgJzQwMHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwgJzMwMHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCAnMzBweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2xpbmVIZWlnaHQnKS50by5lcXVhbCAnMzBweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRXZWlnaHQnKS50by5lcXVhbCAnNjAwJ1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAndG9wJykudG8uZXF1YWwgJzIwcHgnXG5cdFx0XHRcblx0XHRcdHNpbXVsYXRlUGFyZW50KDM0OSwgNDIwKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnekluZGV4JykudG8uZXF1YWwgJzQnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsICcyN3B4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnbGluZUhlaWdodCcpLnRvLmVxdWFsICcxNXB4J1xuXHRcdFx0XG5cdFx0XHRzaW11bGF0ZVBhcmVudCgzNDksIDM5OSlcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3pJbmRleCcpLnRvLmVxdWFsICczJ1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCAnMzNweCdcblx0XHRcdFxuXHRcdFx0c2ltdWxhdGVQYXJlbnQoMzQ5LCA0MDEpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd6SW5kZXgnKS50by5lcXVhbCAnNCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwgJzI3cHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdsaW5lSGVpZ2h0JykudG8uZXF1YWwgJzE1cHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdvcGFjaXR5JykudG8uZXF1YWwgJzEnXG5cdFx0XHRcblx0XHRcdGRpdi5zdHlsZSgnekluZGV4JywgNSlcblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnb3BhY2l0eScpLnRvLmVxdWFsICcxJ1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnbGluZUhlaWdodCcpLnRvLmVxdWFsICczN3B4J1xuXHRcdFx0XG5cdFx0XHRkaXYuc3R5bGUoJ3pJbmRleCcsIDE3KVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnb3BhY2l0eScpLnRvLmVxdWFsICcxJ1xuXHRcdFx0XG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ29wYWNpdHknKS50by5lcXVhbCAnMCdcblxuXHRcdFx0c2ltdWxhdGVQYXJlbnQoOTAwKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCAnMTlweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2xpbmVIZWlnaHQnKS50by5lcXVhbCAnMzBweCdcblx0XHRcdFxuXHRcdFx0c2ltdWxhdGVQYXJlbnQoOTAwKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnbGluZUhlaWdodCcpLnRvLmVxdWFsICcxOXB4J1xuXHRcdFx0XG5cdFx0XHRzaW11bGF0ZVBhcmVudCg5MDAsIDQwMClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwgJzIxcHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdsaW5lSGVpZ2h0JykudG8uZXF1YWwgJzEycHgnXG5cdFx0XHRcblx0XHRcdHNpbXVsYXRlUGFyZW50KDIwMjUsIDkwMClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwgJzQwcHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdsaW5lSGVpZ2h0JykudG8uZXF1YWwgJzEycHgnXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5mb250V2VpZ2h0KS50by5lcXVhbCAnNjAwJ1xuXHRcdFx0XG5cdFx0XHRzaW11bGF0ZVBhcmVudCgyMDI1LCAyMDI2KVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFdlaWdodCkudG8uZXF1YWwgJzcwMCdcblxuXG5cdFx0dGVzdCBcIlBhcmVudCBkaW1lbnNpb25zL3N0eWxlc1wiLCAoKS0+XG5cdFx0XHRwYXJlbnQgPSBEb20uZGl2KHN0eWxlOntwb3NpdGlvbjonYWJzb2x1dGUnfSkuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdHNpbXVsYXRlUGFyZW50ID0gKHdpZHRoLCBoZWlnaHQpLT5cblx0XHRcdFx0cGFyZW50LnN0eWxlICd3aWR0aCcsIHdpZHRoIGlmIHdpZHRoXG5cdFx0XHRcdHBhcmVudC5zdHlsZSAnaGVpZ2h0JywgaGVpZ2h0IGlmIGhlaWdodFxuXHRcdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKClcblx0XHRcdFxuXHRcdFx0ZGl2ID0gRG9tLmRpdiBzdHlsZTpcblx0XHRcdFx0cG9zaXRpb246ICdyZWxhdGl2ZSdcblx0XHRcdFx0ekluZGV4OiAyXG5cdFx0XHRcdHRvcDogJzMwcHgnXG5cdFx0XHRcdHdpZHRoOiAnNDAwcHgnXG5cdFx0XHRcdGhlaWdodDogJzMwMHB4J1xuXHRcdFx0XHRmb250U2l6ZTogJzMwcHgnXG5cdFx0XHRcdGxpbmVIZWlnaHQ6ICczMHB4J1xuXG5cdFx0XHRcdCdAcGFyZW50KG9yaWVudGF0aW9uOmxhbmRzY2FwZSknOlxuXHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDYwMFxuXG5cdFx0XHRcdCdAcGFyZW50KG9yaWVudGF0aW9uOnBvcnRyYWl0KSc6XG5cdFx0XHRcdFx0Zm9udFdlaWdodDogNzAwXG5cdFx0XHRcdFxuXHRcdFx0XHQnQHBhcmVudChwb3NpdGlvbjpyZWxhdGl2ZSknOlxuXHRcdFx0XHRcdHRvcDogJzIwcHgnXG5cblx0XHRcdFx0J0BwYXJlbnQobWF4LXdpZHRoOjM1MCknOlxuXHRcdFx0XHRcdHpJbmRleDogM1xuXHRcdFx0XHRcdGZvbnRTaXplOiAnMzNweCdcblx0XHRcdFx0XG5cdFx0XHRcdCdAcGFyZW50KG1heC13aWR0aDo1MDAsIG1pbi1oZWlnaHQ6NDAwKSc6XG5cdFx0XHRcdFx0ekluZGV4OiA0XG5cdFx0XHRcdFx0Zm9udFNpemU6ICcyN3B4J1xuXHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICczN3B4J1xuXHRcdFx0XHRcblx0XHRcdFx0J0BwYXJlbnQoekluZGV4OjcpJzpcblx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMTVweCdcblxuXG5cdFx0XHRzaW11bGF0ZVBhcmVudCg0MDAsIDMwMClcblx0XHRcdGRpdi5hcHBlbmRUbyhwYXJlbnQpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd6SW5kZXgnKS50by5lcXVhbCAnMidcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwgJzQwMHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwgJzMwMHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCAnMzBweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2xpbmVIZWlnaHQnKS50by5lcXVhbCAnMzBweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRXZWlnaHQnKS50by5lcXVhbCAnNjAwJ1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAndG9wJykudG8uZXF1YWwgJzMwcHgnXG5cblx0XHRcdHBhcmVudC5zdHlsZSAncG9zaXRpb24nLCAncmVsYXRpdmUnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd0b3AnKS50by5lcXVhbCAnMzBweCdcblxuXHRcdFx0c2ltdWxhdGVQYXJlbnQoKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAndG9wJykudG8uZXF1YWwgJzIwcHgnXG5cblx0XHRcdHNpbXVsYXRlUGFyZW50KDM0OSwgNDIwKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnekluZGV4JykudG8uZXF1YWwgJzQnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsICcyN3B4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnbGluZUhlaWdodCcpLnRvLmVxdWFsICczN3B4J1xuXHRcdFx0XG5cdFx0XHRzaW11bGF0ZVBhcmVudCgzNDksIDM5OSlcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3pJbmRleCcpLnRvLmVxdWFsICczJ1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCAnMzNweCdcblx0XHRcdFxuXHRcdFx0cGFyZW50LnN0eWxlICd6SW5kZXgnLCAnNydcblx0XHRcdHNpbXVsYXRlUGFyZW50KDM0OSwgNDAxKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnekluZGV4JykudG8uZXF1YWwgJzQnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsICcyN3B4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnbGluZUhlaWdodCcpLnRvLmVxdWFsICcxNXB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnb3BhY2l0eScpLnRvLmVxdWFsICcxJ1xuXG5cblx0XHR0ZXN0IFwiUGFyZW50IFJlZiBkaW1lbnNpb25zL3N0eWxlc1wiLCAoKS0+XG5cdFx0XHRwYXJlbnQgPVxuXHRcdFx0XHREb20uZGl2KHtyZWY6J2FiYyd9LFxuXHRcdFx0XHRcdERvbS5kaXYge2lkOidkZWYnfSxcblx0XHRcdFx0XHRcdERvbS5kaXYge3JlZjonZ2hpJ31cblx0XHRcdFx0KS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0XG5cdFx0XHRkaXYgPSBEb20uZGl2IHN0eWxlOlxuXHRcdFx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuXHRcdFx0XHR6SW5kZXg6IDJcblx0XHRcdFx0dG9wOiAnMzBweCdcblx0XHRcdFx0d2lkdGg6ICc0MDBweCdcblx0XHRcdFx0aGVpZ2h0OiAnMzAwcHgnXG5cdFx0XHRcdGZvbnRTaXplOiAnMzBweCdcblx0XHRcdFx0bGluZUhlaWdodDogJzMwcHgnXG5cblx0XHRcdFx0J0AjYWJjKG9yaWVudGF0aW9uOmxhbmRzY2FwZSknOlxuXHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDYwMFxuXG5cdFx0XHRcdCdAI2FiYyhvcmllbnRhdGlvbjpwb3J0cmFpdCknOlxuXHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDUwMFxuXHRcdFx0XHRcblx0XHRcdFx0J0AjZGVmKHBvc2l0aW9uOnJlbGF0aXZlKSc6XG5cdFx0XHRcdFx0dG9wOiAnMjBweCdcblxuXHRcdFx0XHQnQCNkZWYobWF4LXdpZHRoOjM1MCknOlxuXHRcdFx0XHRcdHpJbmRleDogM1xuXHRcdFx0XHRcdGZvbnRTaXplOiAnMzNweCdcblx0XHRcdFx0XG5cdFx0XHRcdCdAI2doaShtYXgtd2lkdGg6NTAwLCBtaW4taGVpZ2h0OjQwMCknOlxuXHRcdFx0XHRcdHpJbmRleDogNFxuXHRcdFx0XHRcdGZvbnRTaXplOiAnMjdweCdcblx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMzdweCdcblx0XHRcdFx0XG5cdFx0XHRcdCdAI2FiYyh6SW5kZXg6NyknOlxuXHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICcxNXB4J1xuXG5cblx0XHRcdHBhcmVudC5zdHlsZSh3aWR0aDo0MDAsIGhlaWdodDozMDApXG5cdFx0XHRwYXJlbnQuY2hpbGQuZGVmLnN0eWxlKHdpZHRoOjQwMCwgaGVpZ2h0OjMwMClcblx0XHRcdHBhcmVudC5jaGlsZC5naGkuc3R5bGUod2lkdGg6NDAwLCBoZWlnaHQ6MzAwKVxuXHRcdFx0ZGl2LmFwcGVuZFRvKHBhcmVudC5jaGlsZC5naGkpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd6SW5kZXgnKS50by5lcXVhbCAnMidcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwgJzQwMHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwgJzMwMHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCAnMzBweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2xpbmVIZWlnaHQnKS50by5lcXVhbCAnMzBweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRXZWlnaHQnKS50by5lcXVhbCAnNjAwJ1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAndG9wJykudG8uZXF1YWwgJzMwcHgnXG5cblx0XHRcdHBhcmVudC5zdHlsZSh3aWR0aDo0MDAsIGhlaWdodDo5MDAsIHBvc2l0aW9uOidyZWxhdGl2ZScpXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRXZWlnaHQnKS50by5lcXVhbCAnNTAwJ1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAndG9wJykudG8uZXF1YWwgJzMwcHgnXG5cdFx0XHRcblx0XHRcdHBhcmVudC5jaGlsZC5kZWYuc3R5bGUocG9zaXRpb246J3JlbGF0aXZlJylcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3RvcCcpLnRvLmVxdWFsICczMHB4J1xuXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3RvcCcpLnRvLmVxdWFsICcyMHB4J1xuXG5cdFx0XHRwYXJlbnQuY2hpbGQuZGVmLnN0eWxlKHdpZHRoOjM0OSwgaGVpZ2h0OjQyMClcblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnekluZGV4JykudG8uZXF1YWwgJzMnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsICczM3B4J1xuXHRcdFx0XG5cdFx0XHRwYXJlbnQuY2hpbGQuZ2hpLnN0eWxlKHdpZHRoOjQ1MCwgaGVpZ2h0OjQyMClcblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnekluZGV4JykudG8uZXF1YWwgJzQnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsICcyN3B4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnbGluZUhlaWdodCcpLnRvLmVxdWFsICczN3B4J1xuXHRcdFx0XG5cdFx0XHRwYXJlbnQuc3R5bGUoekluZGV4OjcpXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3pJbmRleCcpLnRvLmVxdWFsICc0J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCAnMjdweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2xpbmVIZWlnaHQnKS50by5lcXVhbCAnMTVweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ29wYWNpdHknKS50by5lcXVhbCAnMSdcblxuXG5cdFx0dGVzdCBcIk5lc3RlZCBtZWRpYSBxdWVyaWVzXCIsICgpLT5cblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoMTAwMCwgOTAwKVxuXHRcdFx0ZGl2ID0gRG9tLmRpdiBzdHlsZTpcblx0XHRcdFx0ekluZGV4OiAyXG5cblx0XHRcdFx0JGhhcHB5OlxuXHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDUwMFxuXHRcdFx0XHRcdCdAd2luZG93KG9yaWVudGF0aW9uOmxhbmRzY2FwZSknOlxuXHRcdFx0XHRcdFx0Zm9udFdlaWdodDogNjAwXG5cblx0XHRcdFx0J0B3aW5kb3cob3JpZW50YXRpb246cG9ydHJhaXQpJzpcblx0XHRcdFx0XHQkcmVsYXhlZDpcblx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDcwMFxuXG5cblx0XHRcdGRpdi5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0XG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5mb250V2VpZ2h0KS50by5lcXVhbCAnJ1xuXHRcdFx0XG5cdFx0XHRkaXYuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmZvbnRXZWlnaHQpLnRvLmVxdWFsICc2MDAnXG5cdFx0XHRcblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoOTAwLCAxMDAwKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFdlaWdodCkudG8uZXF1YWwgJzUwMCdcblx0XHRcdFxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSgxMDAwLCA5MDApXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5mb250V2VpZ2h0KS50by5lcXVhbCAnNjAwJ1xuXG5cblx0XHRcdGRpdi5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5mb250V2VpZ2h0KS50by5lcXVhbCAnNjAwJ1xuXHRcdFx0XG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDkwMCwgMTAwMClcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmZvbnRXZWlnaHQpLnRvLmVxdWFsICc3MDAnXG5cdFx0XHRcblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoMTAwMCwgOTAwKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFdlaWdodCkudG8uZXF1YWwgJzYwMCdcblxuXG5cblxuXG5cblx0c3VpdGUgXCJUcmF2ZXJzYWxcIiwgKCktPlxuXHRcdHRlc3QgXCJDaGlsZHJlblwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KG51bGwsIERvbS5kaXYoKSwgJ1NvbWUgVGV4dCcpXG5cblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5jaGlsZE5vZGVzLmxlbmd0aCkudG8uZXF1YWwoMilcblxuXHRcdFx0ZGl2LmFwcGVuZChEb20uc3BhbigpKVxuXHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QoZGl2LmVsLmNoaWxkTm9kZXMubGVuZ3RoKS50by5lcXVhbCgzKVxuXHRcdFx0XG5cdFx0XHRkaXYuZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG5cdFx0XHRleHBlY3QoZGl2LmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoNClcblx0XHRcdGV4cGVjdChkaXYuZWwuY2hpbGROb2Rlcy5sZW5ndGgpLnRvLmVxdWFsKDQpXG5cblx0XHRcdGlmIHR5cGVvZiB3aW5kb3cuQ29tbWVudCBpcyAnZnVuY3Rpb24nXG5cdFx0XHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRcdHNwYW5BID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5cdFx0XHRcdHNwYW5CID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5cdFx0XHRcdHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnc29tZVRleHROb2RlJylcblx0XHRcdFx0Y29tbWVudCA9IG5ldyBDb21tZW50KCdzb21lQ29tbWVudE5vZGUnKVxuXHRcdFx0XHRcblx0XHRcdFx0ZGl2LmFwcGVuZENoaWxkKHNwYW5BKVxuXHRcdFx0XHRkaXYuYXBwZW5kQ2hpbGQoY29tbWVudClcblx0XHRcdFx0ZGl2LmFwcGVuZENoaWxkKHNwYW5CKVxuXHRcdFx0XHRkaXYuYXBwZW5kQ2hpbGQodGV4dClcblx0XHRcdFx0ZXhwZWN0KGRpdi5jaGlsZE5vZGVzLmxlbmd0aCkudG8uZXF1YWwoNClcblx0XHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDIpXG5cblx0XHRcdFx0ZGl2JCA9IERvbShkaXYpXG5cdFx0XHRcdGV4cGVjdChkaXYkLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMylcblx0XHRcdFx0ZXhwZWN0KGRpdiQuY2hpbGRyZW5bMF0ucmF3KS50by5lcXVhbChzcGFuQSlcblx0XHRcdFx0ZXhwZWN0KGRpdiQuY2hpbGRyZW5bMV0ucmF3KS50by5lcXVhbChzcGFuQilcblx0XHRcdFx0ZXhwZWN0KGRpdiQuY2hpbGRyZW5bMl0ucmF3KS50by5lcXVhbCh0ZXh0KVxuXG5cblx0XHR0ZXN0IFwiUGFyZW50XCIsICgpLT5cblx0XHRcdEEgPSBEb20uZGl2KG51bGwsIERvbS5kaXYoKSwgJ1NvbWUgVGV4dCcpXG5cdFx0XHRCID0gRG9tLmRpdigpXG5cdFx0XHRDID0gRG9tLmRpdigpXG5cblx0XHRcdGV4cGVjdChBLnBhcmVudCkudG8uZXF1YWwgdW5kZWZpbmVkXG5cdFx0XHRleHBlY3QoQS5jaGlsZHJlblswXS5wYXJlbnQpLnRvLmVxdWFsIEFcblx0XHRcdGV4cGVjdChBLmNoaWxkcmVuWzBdLmVsLnBhcmVudE5vZGUpLnRvLmVxdWFsIEEuZWxcblxuXHRcdFx0Qi5hcHBlbmQoQSlcblx0XHRcdGV4cGVjdChBLnBhcmVudCkudG8uZXF1YWwgQlxuXHRcdFx0ZXhwZWN0KEEuY2hpbGRyZW5bMF0ucGFyZW50KS50by5lcXVhbCBBXG5cdFx0XHRleHBlY3QoQS5jaGlsZHJlblswXS5lbC5wYXJlbnROb2RlKS50by5lcXVhbCBBLmVsXG5cdFx0XHRleHBlY3QoQi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoQi5jaGlsZHJlblswXSkudG8uZXF1YWwoQSlcblxuXHRcdFx0Qy5hcHBlbmQoQSlcblx0XHRcdGV4cGVjdChBLnBhcmVudCkudG8uZXF1YWwgQ1xuXHRcdFx0ZXhwZWN0KEEuY2hpbGRyZW5bMF0ucGFyZW50KS50by5lcXVhbCBBXG5cdFx0XHRleHBlY3QoQS5jaGlsZHJlblswXS5lbC5wYXJlbnROb2RlKS50by5lcXVhbCBBLmVsXG5cdFx0XHRleHBlY3QoQi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDApXG5cdFx0XHRleHBlY3QoQy5jaGlsZHJlblswXSkudG8uZXF1YWwoQSlcblxuXG5cdFx0dGVzdCBcIlBhcmVudHNcIiwgKCktPlxuXHRcdFx0QSA9IERvbS5kaXYoKS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0QiA9IERvbS5kaXYoKS5hcHBlbmRUbyhBKVxuXHRcdFx0QyA9IERvbS5kaXYoKS5hcHBlbmRUbyhCKVxuXG5cdFx0XHRleHBlY3QoQS5wYXJlbnQuZWwpLnRvLmVxdWFsKHNhbmRib3gpXG5cdFx0XHRleHBlY3QoQi5wYXJlbnQpLnRvLmVxdWFsKEEpXG5cdFx0XHRleHBlY3QoQy5wYXJlbnQpLnRvLmVxdWFsKEIpXG5cblx0XHRcdGV4cGVjdChBLnBhcmVudHMubGVuZ3RoKS50by5lcXVhbChCLnBhcmVudHMubGVuZ3RoLTEpXG5cdFx0XHRleHBlY3QoQi5wYXJlbnRzLmxlbmd0aCkudG8uZXF1YWwoQy5wYXJlbnRzLmxlbmd0aC0xKVxuXHRcdFx0ZXhwZWN0KEIucGFyZW50c1swXSkudG8uZXF1YWwoQSlcblx0XHRcdGV4cGVjdChDLnBhcmVudHNbMF0pLnRvLmVxdWFsKEIpXG5cdFx0XHRleHBlY3QoQy5wYXJlbnRzLmxlbmd0aCkudG8uZXF1YWwoNSlcblx0XHRcdGV4cGVjdChDLnBhcmVudHMuc2xpY2UoLTEpWzBdLmVsKS50by5lcXVhbChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG5cblxuXHRcdHRlc3QgXCJQYXJlbnRzIFVudGlsXCIsICgpLT5cblx0XHRcdEEgPSBEb20uc2VjdGlvbigpXG5cdFx0XHRCID0gRG9tLmRpdigpLmFwcGVuZFRvKEEpXG5cdFx0XHRDID0gRG9tLmRpdigpLmFwcGVuZFRvKEIpXG5cdFx0XHREID0gRG9tLnNwYW4oKS5hcHBlbmRUbyhDKVxuXG5cdFx0XHRleHBlY3QoRC5wYXJlbnRzKS50by5lcWwgW0MsQixBXVxuXHRcdFx0ZXhwZWN0KEQucGFyZW50c1VudGlsKG51bGwpKS50by5lcWwgW0MsQixBXVxuXHRcdFx0ZXhwZWN0KEQucGFyZW50c1VudGlsKCkpLnRvLmVxbCBbQyxCLEFdXG5cdFx0XHRleHBlY3QoRC5wYXJlbnRzVW50aWwoJ3NvbWVTdHJpbmcnKSkudG8uZXFsIFtDLEIsQV1cblx0XHRcdGV4cGVjdChELnBhcmVudHNVbnRpbCAoZWwpLT4gZWwgaXMgQSkudG8uZXFsIFtDLEJdXG5cdFx0XHRleHBlY3QoRC5wYXJlbnRzVW50aWwgKGVsKS0+IGVsIGlzIEIpLnRvLmVxbCBbQ11cblx0XHRcdGV4cGVjdChELnBhcmVudHNVbnRpbCAoZWwpLT4gZmFsc2UpLnRvLmVxbCBbQyxCLEFdXG5cblxuXHRcdHRlc3QgXCJQYXJlbnQgTWF0Y2hpbmdcIiwgKCktPlxuXHRcdFx0QSA9IERvbS5zZWN0aW9uKClcblx0XHRcdEIgPSBEb20uZGl2KCkuYXBwZW5kVG8oQSlcblx0XHRcdEMgPSBEb20uZGl2KCkuYXBwZW5kVG8oQilcblx0XHRcdEQgPSBEb20uc3BhbigpLmFwcGVuZFRvKEMpXG5cblx0XHRcdGV4cGVjdChELnBhcmVudHMpLnRvLmVxbCBbQyxCLEFdXG5cdFx0XHRleHBlY3QoRC5wYXJlbnRNYXRjaGluZyhudWxsKSkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KEQucGFyZW50TWF0Y2hpbmcoQikpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChELnBhcmVudE1hdGNoaW5nKCdzdHJpbmcnKSkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KEQucGFyZW50TWF0Y2hpbmcgKCktPiBmYWxzZSkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KEQucGFyZW50TWF0Y2hpbmcgKGVsKS0+IGVsIGlzIEIpLnRvLmVxdWFsKEIpXG5cdFx0XHRleHBlY3QoRC5wYXJlbnRNYXRjaGluZyAoZWwpLT4gZWwgaXMgQSkudG8uZXF1YWwoQSlcblx0XHRcdGV4cGVjdChELnBhcmVudE1hdGNoaW5nIChlbCktPiBlbCBpcyBDKS50by5lcXVhbChDKVxuXG5cdFx0XHRBLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRleHBlY3QoRC5wYXJlbnRNYXRjaGluZyAoZWwpLT4gZWwucmF3IGlzIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkudG8uZXF1YWwoRG9tKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkpXG5cblxuXHRcdHRlc3QgXCJOZXh0XCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYobnVsbCwgQT1Eb20uZGl2KCksIEI9RG9tLmRpdigpLCBDPURvbS5kaXYoKSwgRD1Eb20uZGl2KCksIEU9RG9tLmRpdigpKVxuXG5cdFx0XHRleHBlY3QoQS5uZXh0KS50by5lcXVhbChCKVxuXHRcdFx0ZXhwZWN0KEMubmV4dCkudG8uZXF1YWwoRClcblx0XHRcdGV4cGVjdChFLm5leHQpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChCLm5leHRBbGwpLnRvLmVxbChbQyxELEVdKVxuXG5cblx0XHR0ZXN0IFwiUHJldlwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KG51bGwsIEE9RG9tLmRpdigpLCBCPURvbS5kaXYoKSwgQz1Eb20uZGl2KCksIEQ9RG9tLmRpdigpLCBFPURvbS5kaXYoKSlcblxuXHRcdFx0ZXhwZWN0KEUucHJldikudG8uZXF1YWwoRClcblx0XHRcdGV4cGVjdChDLnByZXYpLnRvLmVxdWFsKEIpXG5cdFx0XHRleHBlY3QoQS5wcmV2KS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoRC5wcmV2QWxsKS50by5lcWwoW0MsQixBXSlcblxuXG5cdFx0dGVzdCBcIlNpYmxpbmdzXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYobnVsbCwgQT1Eb20uZGl2KCksIEI9RG9tLmRpdigpLCBDPURvbS5kaXYoKSwgRD1Eb20uZGl2KCksIEU9RG9tLmRpdigpKVxuXG5cdFx0XHRleHBlY3QoQy5zaWJsaW5ncykudG8uZXFsKEMucHJldkFsbC5yZXZlcnNlKCkuY29uY2F0KEMubmV4dEFsbCkpXG5cdFx0XHRleHBlY3QoQy5zaWJsaW5ncykudG8uZXFsKFtBLEIsRCxFXSlcblxuXG5cdFx0dGVzdCBcIkNoaWxkIChieSByZWYpXCIsICgpLT5cblx0XHRcdGRpdkEgPSBcblx0XHRcdFx0RG9tLmRpdiB7aWQ6J2RpdkEnfSxcblx0XHRcdFx0XHREb20uZGl2IHtpZDonY2hpbGRBJ30sXG5cdFx0XHRcdFx0XHREb20uc3BhbiB7cmVmOidjaGlsZEFfMSd9XG5cdFx0XHRcdFx0XHREb20uZGl2IHtyZWY6J2NoaWxkQV8yJywgaWQ6J2NoaWxkQV8yJ31cblx0XHRcdFx0XHREb20uZGl2IHt9LFxuXHRcdFx0XHRcdFx0RG9tLnNwYW4ge3JlZjonY2hpbGRCXzEnfVxuXHRcdFx0XHRcdFx0RG9tLnRleHQge2lkOidjaGlsZEJfMid9LCAnVGhlIFRleHQnXG5cblxuXHRcdFx0ZGl2QiA9IFxuXHRcdFx0XHREb20udGVtcGxhdGUoWydkaXYnLCB7aWQ6J2RpdkInfSxcblx0XHRcdFx0XHRbJ2RpdicsIHtpZDonY2hpbGRBJywgc3R5bGU6e2NvbG9yOidwaW5rJ319LFxuXHRcdFx0XHRcdFx0WydzcGFuJywge3JlZjonY2hpbGRBXzEnfV1cblx0XHRcdFx0XHRcdFsnZGl2Jywge3JlZjonY2hpbGRBXzMnLCBpZDonY2hpbGRBXzInfV1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0WydkaXYnLCBudWxsLCBcblx0XHRcdFx0XHRcdFsnc3BhbicsIHtyZWY6J2NoaWxkQl8xJ31dXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHRdKS5zcGF3bigpXG5cblx0XHRcdFxuXHRcdFx0ZXhwZWN0KGRpdkEuY2hpbGQuY2hpbGRBKS50by5lcXVhbChkaXZBLmNoaWxkcmVuWzBdKVxuXHRcdFx0ZXhwZWN0KGRpdkEuY2hpbGQuY2hpbGRBXzEpLnRvLmVxdWFsKGRpdkEuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0pXG5cdFx0XHRleHBlY3QoZGl2QS5jaGlsZC5jaGlsZEFfMikudG8uZXF1YWwoZGl2QS5jaGlsZHJlblswXS5jaGlsZHJlblsxXSlcblx0XHRcdGV4cGVjdChkaXZBLmNoaWxkLmNoaWxkQV8zKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoZGl2QS5jaGlsZC5jaGlsZEIpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChkaXZBLmNoaWxkLmNoaWxkQl8xKS50by5lcXVhbChkaXZBLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdKVxuXHRcdFx0ZXhwZWN0KGRpdkEuY2hpbGQuY2hpbGRCXzIpLnRvLmVxdWFsKGRpdkEuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0pXG5cdFx0XHRleHBlY3QoZGl2QS5jaGlsZC5jaGlsZEJfMi50eXBlKS50by5lcXVhbCgndGV4dCcpXG5cblx0XHRcdFxuXHRcdFx0ZXhwZWN0KGRpdkIuY2hpbGQuY2hpbGRBKS50by5lcXVhbChkaXZCLmNoaWxkcmVuWzBdKVxuXHRcdFx0ZXhwZWN0KGRpdkIuY2hpbGQuY2hpbGRBXzEpLnRvLmVxdWFsKGRpdkIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0pXG5cdFx0XHRleHBlY3QoZGl2Qi5jaGlsZC5jaGlsZEFfMikudG8uZXF1YWwoZGl2Qi5jaGlsZHJlblswXS5jaGlsZHJlblsxXSlcblx0XHRcdGV4cGVjdChkaXZCLmNoaWxkLmNoaWxkQV8zKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoZGl2Qi5jaGlsZC5jaGlsZEIpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChkaXZCLmNoaWxkLmNoaWxkQl8xKS50by5lcXVhbChkaXZCLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdKVxuXHRcdFx0ZXhwZWN0KGRpdkIuY2hpbGQuY2hpbGRCXzIpLnRvLmVxdWFsKGRpdkIuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0pXG5cdFx0XHRleHBlY3QoZGl2Qi5jaGlsZC5jaGlsZEEuc3R5bGUoJ2NvbG9yJykpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuY2hpbGQuY2hpbGRBLnN0eWxlU2FmZSgnY29sb3InKSkubm90LnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuY2hpbGQuY2hpbGRBLnN0eWxlU2FmZSgnY29sb3InKS5sZW5ndGggPj0gNCkudG8uYmUudHJ1ZVxuXG5cblx0XHRcdGV4cGVjdChkaXZBLmNoaWxkLmNoaWxkQS5yYXcuZ2V0QXR0cmlidXRlKCdpZCcpKS50by5lcXVhbCgnY2hpbGRBJylcblx0XHRcdGV4cGVjdChkaXZBLmNoaWxkLmNoaWxkQS5yYXcuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZicpKS50by5lcXVhbCgnY2hpbGRBJylcblx0XHRcdGV4cGVjdChkaXZBLmNoaWxkLmNoaWxkQV8xLnJhdy5nZXRBdHRyaWJ1dGUoJ2lkJykpLnRvLmVxdWFsKG51bGwpXG5cdFx0XHRleHBlY3QoZGl2QS5jaGlsZC5jaGlsZEFfMS5yYXcuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZicpKS50by5lcXVhbCgnY2hpbGRBXzEnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuY2hpbGQuY2hpbGRBXzIucmF3LmdldEF0dHJpYnV0ZSgnaWQnKSkudG8uZXF1YWwoJ2NoaWxkQV8yJylcblx0XHRcdGV4cGVjdChkaXZBLmNoaWxkLmNoaWxkQV8yLnJhdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmJykpLnRvLmVxdWFsKCdjaGlsZEFfMicpXG5cblx0XHRcdHNhbmRCb3ggPSBEb20oc2FuZGJveClcblx0XHRcdGV4cGVjdChzYW5kQm94LmNoaWxkLmNoaWxkQSkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KHNhbmRCb3guY2hpbGQuY2hpbGRCXzIpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChzYW5kQm94LmNoaWxkLmRpdkEpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdFxuXHRcdFx0c2FuZEJveC5hcHBlbmQoZGl2QSlcblx0XHRcdGV4cGVjdChzYW5kQm94LmNoaWxkLmNoaWxkQSkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KHNhbmRCb3guY2hpbGQuY2hpbGRCXzIpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChzYW5kQm94LmNoaWxkLmRpdkEpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChzYW5kQm94LmNoaWxkZi5kaXZBKS50by5lcXVhbChkaXZBKVxuXHRcdFx0ZXhwZWN0KHNhbmRCb3guY2hpbGQuY2hpbGRBKS50by5lcXVhbChkaXZBLmNoaWxkcmVuWzBdKVxuXHRcdFx0ZXhwZWN0KHNhbmRCb3guY2hpbGQuY2hpbGRCXzIpLnRvLmVxdWFsKGRpdkEuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0pXG5cdFx0XHRleHBlY3Qoc2FuZEJveC5jaGlsZC5kaXZBKS50by5lcXVhbChkaXZBKVxuXG5cdFx0XHRuZXdDaGlsZCA9IERvbS5kaXYocmVmOiduZXdDaGlsZCcpXG5cdFx0XHRuZXdDaGlsZENoaWxkID0gRG9tLmRpdihyZWY6J25ld0NoaWxkQ2hpbGQnKVxuXHRcdFx0ZXhwZWN0KG5ld0NoaWxkLmNoaWxkLm5ld0NoaWxkQ2hpbGQpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChuZXdDaGlsZENoaWxkLmNoaWxkLm5ld0NoaWxkQ2hpbGQpLnRvLmVxdWFsKG5ld0NoaWxkQ2hpbGQpXG5cdFx0XHRleHBlY3QoT2JqZWN0LmtleXMobmV3Q2hpbGRDaGlsZC5jaGlsZCkubGVuZ3RoKS50by5lcXVhbCgxKVxuXG5cdFx0XHRuZXdDaGlsZENoaWxkLmFwcGVuZFRvKG5ld0NoaWxkKVxuXHRcdFx0ZXhwZWN0KG5ld0NoaWxkLmNoaWxkLm5ld0NoaWxkQ2hpbGQpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChuZXdDaGlsZC5jaGlsZGYubmV3Q2hpbGRDaGlsZCkudG8uZXF1YWwobmV3Q2hpbGRDaGlsZClcblx0XHRcdGV4cGVjdChuZXdDaGlsZC5jaGlsZC5uZXdDaGlsZENoaWxkKS50by5lcXVhbChuZXdDaGlsZENoaWxkKVxuXHRcdFx0ZXhwZWN0KE9iamVjdC5rZXlzKG5ld0NoaWxkQ2hpbGQuY2hpbGQpLmxlbmd0aCkudG8uZXF1YWwoMSlcblxuXHRcdFx0bmV3UGFyZW50ID0gRG9tLmRpdihyZWY6J25ld1BhcmVudCcpXG5cdFx0XHRuZXdDaGlsZC5hcHBlbmRUbyhuZXdQYXJlbnQpXG5cdFx0XHRleHBlY3QobmV3UGFyZW50LmNoaWxkLm5ld0NoaWxkQ2hpbGQpLnRvLmVxdWFsKG5ld0NoaWxkQ2hpbGQpXG5cblxuXHRcdHRlc3QgXCJJbmRleFwiLCAoKS0+XG5cdFx0XHRzZWN0aW9uID1cblx0XHRcdFx0RG9tLnNlY3Rpb24obnVsbCxcblx0XHRcdFx0XHRjaGlsZEEgPSBEb20uZGl2KClcblx0XHRcdFx0XHRjaGlsZEIgPSBEb20uZGl2KClcblx0XHRcdFx0XHRjaGlsZEMgPSBEb20uc3BhbigpXG5cdFx0XHRcdFx0Y2hpbGREID0gRG9tLnRleHQoKVxuXHRcdFx0XHRcdGNoaWxkRSA9IERvbS5zcGFuKClcblx0XHRcdFx0XHRjaGlsZEYgPSBEb20uZGl2KClcblx0XHRcdFx0KVxuXG5cdFx0XHRleHBlY3QoY2hpbGRCLmluZGV4KS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QoY2hpbGRELmluZGV4KS50by5lcXVhbCAzXG5cdFx0XHRleHBlY3QoY2hpbGRGLmluZGV4KS50by5lcXVhbCA1XG5cblx0XHRcdGNoaWxkQy5kZXRhY2goKVxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5pbmRleCkudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KGNoaWxkRC5pbmRleCkudG8uZXF1YWwgMlxuXHRcdFx0ZXhwZWN0KGNoaWxkRi5pbmRleCkudG8uZXF1YWwgNFxuXHRcdFx0ZXhwZWN0KGNoaWxkQy5pbmRleCkudG8uZXF1YWwgbnVsbFxuXG5cblx0XHR0ZXN0IFwiSW5kZXggKGJ5IHR5cGUpXCIsICgpLT5cblx0XHRcdHNlY3Rpb24gPVxuXHRcdFx0XHREb20uc2VjdGlvbihudWxsLFxuXHRcdFx0XHRcdGNoaWxkQSA9IERvbS5kaXYoKVxuXHRcdFx0XHRcdGNoaWxkQiA9IERvbS5kaXYoKVxuXHRcdFx0XHRcdGNoaWxkQyA9IERvbS5zcGFuKClcblx0XHRcdFx0XHRjaGlsZEQgPSBEb20udGV4dCgpXG5cdFx0XHRcdFx0Y2hpbGRFID0gRG9tLnNwYW4oKVxuXHRcdFx0XHRcdGNoaWxkRiA9IERvbS50ZXh0KClcblx0XHRcdFx0XHRjaGlsZEcgPSBEb20uZGl2KClcblx0XHRcdFx0KVxuXG5cdFx0XHRleHBlY3QoY2hpbGRCLmluZGV4VHlwZSkudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KGNoaWxkRC5pbmRleFR5cGUpLnRvLmVxdWFsIDBcblx0XHRcdGV4cGVjdChjaGlsZEYuaW5kZXhUeXBlKS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QoY2hpbGRHLmluZGV4VHlwZSkudG8uZXF1YWwgMlxuXG5cdFx0XHRjaGlsZEMuZGV0YWNoKClcblx0XHRcdGV4cGVjdChjaGlsZEIuaW5kZXhUeXBlKS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QoY2hpbGRELmluZGV4VHlwZSkudG8uZXF1YWwgMFxuXHRcdFx0ZXhwZWN0KGNoaWxkRi5pbmRleFR5cGUpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjaGlsZEcuaW5kZXhUeXBlKS50by5lcXVhbCAyXG5cblx0XHRcdGNoaWxkQS5kZXRhY2goKVxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5pbmRleFR5cGUpLnRvLmVxdWFsIDBcblx0XHRcdGV4cGVjdChjaGlsZEQuaW5kZXhUeXBlKS50by5lcXVhbCAwXG5cdFx0XHRleHBlY3QoY2hpbGRGLmluZGV4VHlwZSkudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KGNoaWxkRy5pbmRleFR5cGUpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjaGlsZEEuaW5kZXhUeXBlKS50by5lcXVhbCBudWxsXG5cdFx0XHRleHBlY3QoY2hpbGRDLmluZGV4VHlwZSkudG8uZXF1YWwgbnVsbFxuXG5cblx0XHR0ZXN0IFwiSW5kZXggKGJ5IHJlZilcIiwgKCktPlxuXHRcdFx0c2VjdGlvbiA9XG5cdFx0XHRcdERvbS5zZWN0aW9uKG51bGwsXG5cdFx0XHRcdFx0Y2hpbGRBID0gRG9tLmRpdihyZWY6J2FiYycpXG5cdFx0XHRcdFx0Y2hpbGRCID0gRG9tLmRpdihyZWY6J2FiYycpXG5cdFx0XHRcdFx0Y2hpbGRDID0gRG9tLnNwYW4ocmVmOidkZWYnKVxuXHRcdFx0XHRcdGNoaWxkRCA9IERvbS50ZXh0KHJlZjonYWJjJylcblx0XHRcdFx0XHRjaGlsZEUgPSBEb20uc3BhbihyZWY6J2FiYycpXG5cdFx0XHRcdFx0Y2hpbGRGID0gRG9tLnRleHQocmVmOidkZWYnKVxuXHRcdFx0XHRcdGNoaWxkRyA9IERvbS5kaXYocmVmOidhYmMnKVxuXHRcdFx0XHQpXG5cblx0XHRcdGV4cGVjdChjaGlsZEIuaW5kZXhSZWYpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjaGlsZEQuaW5kZXhSZWYpLnRvLmVxdWFsIDJcblx0XHRcdGV4cGVjdChjaGlsZEYuaW5kZXhSZWYpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjaGlsZEcuaW5kZXhSZWYpLnRvLmVxdWFsIDRcblxuXHRcdFx0Y2hpbGRDLmRldGFjaCgpXG5cdFx0XHRleHBlY3QoY2hpbGRCLmluZGV4UmVmKS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QoY2hpbGRELmluZGV4UmVmKS50by5lcXVhbCAyXG5cdFx0XHRleHBlY3QoY2hpbGRGLmluZGV4UmVmKS50by5lcXVhbCAwXG5cdFx0XHRleHBlY3QoY2hpbGRHLmluZGV4UmVmKS50by5lcXVhbCA0XG5cblx0XHRcdGNoaWxkQS5kZXRhY2goKVxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5pbmRleFJlZikudG8uZXF1YWwgMFxuXHRcdFx0ZXhwZWN0KGNoaWxkRC5pbmRleFJlZikudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KGNoaWxkRi5pbmRleFJlZikudG8uZXF1YWwgMFxuXHRcdFx0ZXhwZWN0KGNoaWxkRy5pbmRleFJlZikudG8uZXF1YWwgM1xuXHRcdFx0ZXhwZWN0KGNoaWxkQS5pbmRleFJlZikudG8uZXF1YWwgbnVsbFxuXHRcdFx0ZXhwZWN0KGNoaWxkQy5pbmRleFJlZikudG8uZXF1YWwgbnVsbFxuXG5cblx0XHR0ZXN0IFwiUXVlcnlcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLnRlbXBsYXRlKFxuXHRcdFx0XHRbJ2RpdicsIHtjbGFzczonZGl2LW9uZScsIGF0dHJzOm5hbWU6J2FiYzEyMyd9LFxuXHRcdFx0XHRcdFsnZGl2Jywge2NsYXNzOidjaGlsZEEnLCBzdHlsZTp7Y29sb3I6J3BpbmsnfX0sXG5cdFx0XHRcdFx0XHRbJ3NwYW4nLCB7Y2xhc3M6J2NoaWxkQV8xJ31dXG5cdFx0XHRcdFx0XHRbJ2RpdicsIHtjbGFzczonY2hpbGRBXzEnfV1cblx0XHRcdFx0XHRcdFsnc3BhbicsIHtjbGFzczonY2hpbGRBXzEnfV1cblx0XHRcdFx0XHRcdFsnZGl2Jywge2NsYXNzOidjaGlsZEFfMid9XVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XHRbJ2RpdicsIGNsYXNzTmFtZTonY2hpbGRCJywgXG5cdFx0XHRcdFx0XHRbJ3NwYW4nLCB7Y2xhc3M6J2NoaWxkQl8xJ31dXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFsnc2VjdGlvbicsIGNsYXNzTmFtZTonY2hpbGRCJywgXG5cdFx0XHRcdFx0XHRbJ3NwYW4nLCB7Y2xhc3M6J2NoaWxkQl8xJ31dXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHRdXG5cdFx0XHQpLnNwYXduKCkuYXBwZW5kVG8oc2FuZEJveCA9IERvbShzYW5kYm94KSlcblxuXHRcdFx0ZXhwZWN0KGRpdi5xdWVyeSAnLmNoaWxkQScpLnRvLmVxdWFsKGRpdi5jaGlsZHJlblswXSlcblx0XHRcdGV4cGVjdChkaXYucXVlcnkgJy5jaGlsZEInKS50by5lcXVhbChkaXYuY2hpbGRyZW5bMV0pXG5cdFx0XHRleHBlY3QoZGl2LnF1ZXJ5ICcuY2hpbGRCXzEnKS50by5lcXVhbChkaXYuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0pXG5cdFx0XHRleHBlY3QoZGl2LnF1ZXJ5ICcuY2hpbGRBXzEnKS50by5lcXVhbChkaXYuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0pXG5cdFx0XHRleHBlY3QoZGl2LnF1ZXJ5ICcuY2hpbGRBXzInKS50by5lcXVhbChkaXYuY2hpbGRyZW5bMF0uY2hpbGRyZW5bM10pXG5cdFx0XHRleHBlY3Qoc2FuZEJveC5xdWVyeSAnLmRpdi1vbmUnKS50by5lcXVhbChkaXYpXG5cdFx0XHRleHBlY3Qoc2FuZEJveC5xdWVyeSAnLmNoaWxkQl8xJykudG8uZXF1YWwoZGl2LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdKVxuXHRcdFx0ZXhwZWN0KHNhbmRCb3gucXVlcnkgJ2RpdltuYW1lPVwiYWJjMTIzXCJdJykudG8uZXF1YWwoZGl2KVxuXHRcdFx0ZXhwZWN0KHNhbmRCb3gucXVlcnkgJ3NwYW5bbmFtZT1cImFiYzEyM1wiXScpLnRvLmVxdWFsKHVuZGVmaW5lZClcblxuXG5cdFx0dGVzdCBcIlF1ZXJ5QWxsXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS50ZW1wbGF0ZShcblx0XHRcdFx0WydkaXYnLCB7Y2xhc3M6J2Rpdi1vbmUnLCBhdHRyczpuYW1lOidhYmMxMjMnfSxcblx0XHRcdFx0XHRbJ2RpdicsIHtjbGFzczonY2hpbGRBJywgc3R5bGU6e2NvbG9yOidwaW5rJ319LFxuXHRcdFx0XHRcdFx0WydzcGFuJywge2NsYXNzOidjaGlsZEFfMSd9XVxuXHRcdFx0XHRcdFx0WydkaXYnLCB7Y2xhc3M6J2NoaWxkQV8xJ31dXG5cdFx0XHRcdFx0XHRbJ3NwYW4nLCB7Y2xhc3M6J2NoaWxkQV8xJ31dXG5cdFx0XHRcdFx0XHRbJ2RpdicsIHtjbGFzczonY2hpbGRBXzInfV1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0WydkaXYnLCBjbGFzc05hbWU6J2NoaWxkQicsIFxuXHRcdFx0XHRcdFx0WydzcGFuJywge2NsYXNzOidjaGlsZEJfMSd9XVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XHRbJ3NlY3Rpb24nLCBjbGFzc05hbWU6J2NoaWxkQicsIFxuXHRcdFx0XHRcdFx0WydzcGFuJywge2NsYXNzOidjaGlsZEJfMSd9XVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XVxuXHRcdFx0KS5zcGF3bigpLmFwcGVuZFRvKHNhbmRCb3ggPSBEb20oc2FuZGJveCkpXG5cblx0XHRcdGV4cGVjdChkaXYucXVlcnlBbGwoJy5jaGlsZEEnKS5lbGVtZW50cykudG8uZXFsKFtkaXYuY2hpbGRyZW5bMF1dKVxuXHRcdFx0ZXhwZWN0KGRpdi5xdWVyeUFsbCgnLmNoaWxkQicpLmVsZW1lbnRzKS50by5lcWwoW2Rpdi5jaGlsZHJlblsxXSwgZGl2LmNoaWxkcmVuWzJdXSlcblx0XHRcdGV4cGVjdChkaXYucXVlcnlBbGwoJy5jaGlsZEJfMScpLmVsZW1lbnRzKS50by5lcWwoW2Rpdi5jaGlsZHJlblsxXS5jaGlsZHJlblswXSwgZGl2LmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdXSlcblx0XHRcdGV4cGVjdChkaXYucXVlcnlBbGwoJy5jaGlsZEFfMScpLmVsZW1lbnRzKS50by5lcWwoW2Rpdi5jaGlsZHJlblswXS5jaGlsZHJlblswXSwgZGl2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLCBkaXYuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl1dKVxuXHRcdFx0ZXhwZWN0KGRpdi5xdWVyeUFsbCgnLmNoaWxkQV8yJykuZWxlbWVudHMpLnRvLmVxbChbZGl2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzNdXSlcblx0XHRcdGV4cGVjdChzYW5kQm94LnF1ZXJ5QWxsKCcuZGl2LW9uZScpLmVsZW1lbnRzKS50by5lcWwoW2Rpdl0pXG5cdFx0XHRleHBlY3Qoc2FuZEJveC5xdWVyeUFsbCgnLmNoaWxkQl8xJykuZWxlbWVudHMpLnRvLmVxbChbZGl2LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLCBkaXYuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF1dKVxuXHRcdFx0ZXhwZWN0KHNhbmRCb3gucXVlcnlBbGwoJ2RpdltuYW1lPVwiYWJjMTIzXCJdJykuZWxlbWVudHMpLnRvLmVxbChbZGl2XSlcblx0XHRcdGV4cGVjdChzYW5kQm94LnF1ZXJ5QWxsKCdzcGFuW25hbWU9XCJhYmMxMjNcIl0nKS5lbGVtZW50cykudG8uZXFsKFtdKVxuXHRcdFx0ZXhwZWN0KGRpdi50ZXh0KS50by5lcXVhbCgnJylcblxuXG5cblxuXHRzdWl0ZSBcIk1hbmlwdWxhdGlvblwiLCAoKS0+XG5cdFx0dGVzdCBcIi5hcHBlbmQoKVwiLCAoKS0+XG5cdFx0XHRBID0gRG9tLmRpdigpXG5cdFx0XHRCID0gRG9tLmRpdigpXG5cdFx0XHRDID0gRG9tLnRleHQoKVxuXHRcdFx0RCA9IERvbS5kaXYoKVxuXHRcdFx0TWFpbkEgPSBEb20uZGl2KG51bGwsIEEsIEIsIEMsIEQpXG5cdFx0XHRNYWluQiA9IERvbS5kaXYoKVxuXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5BKShBLCBCLCBDLCBEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQikoKVxuXG5cdFx0XHRNYWluQi5hcHBlbmQoQSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkEpKEIsIEMsIEQpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5CKShBKVxuXG5cdFx0XHRDLmFwcGVuZFRvKE1haW5CKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQSkoQiwgRClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkIpKEEsIEMpXG5cblxuXG5cdFx0dGVzdCBcIi5wcmVwZW5kKClcIiwgKCktPlxuXHRcdFx0QSA9IERvbS5kaXYoKVxuXHRcdFx0QiA9IERvbS5kaXYoKVxuXHRcdFx0QyA9IERvbS50ZXh0KClcblx0XHRcdEQgPSBEb20uZGl2KClcblx0XHRcdE1haW5BID0gRG9tLmRpdihudWxsLCBBLCBCLCBDLCBEKVxuXHRcdFx0TWFpbkIgPSBEb20uZGl2KClcblxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQSkoQSwgQiwgQywgRClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkIpKClcblxuXHRcdFx0TWFpbkIucHJlcGVuZChBKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQSkoQiwgQywgRClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkIpKEEpXG5cblx0XHRcdEMucHJlcGVuZFRvKE1haW5CKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQSkoQiwgRClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkIpKEMsIEEpXG5cblxuXHRcdHRlc3QgXCIuYWZ0ZXIoKVwiLCAoKS0+XG5cdFx0XHRBID0gRG9tLmRpdigpXG5cdFx0XHRCID0gRG9tLmRpdigpXG5cdFx0XHRDID0gRG9tLnRleHQoKVxuXHRcdFx0RCA9IERvbS5kaXYoKVxuXHRcdFx0TWFpbkEgPSBEb20uZGl2KG51bGwsIEEsIEIsIEMsIEQpXG5cdFx0XHRNYWluQiA9IERvbS5kaXYoKVxuXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5BKShBLCBCLCBDLCBEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQikoKVxuXG5cdFx0XHRNYWluQi5hcHBlbmQoQilcblx0XHRcdEIuYWZ0ZXIoQSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkEpKEMsIEQpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5CKShCLCBBKVxuXG5cdFx0XHRDLmluc2VydEFmdGVyKEIpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5BKShEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQikoQiwgQywgQSlcblxuXG5cdFx0dGVzdCBcIi5iZWZvcmUoKVwiLCAoKS0+XG5cdFx0XHRBID0gRG9tLmRpdigpXG5cdFx0XHRCID0gRG9tLmRpdigpXG5cdFx0XHRDID0gRG9tLnRleHQoKVxuXHRcdFx0RCA9IERvbS5kaXYoKVxuXHRcdFx0TWFpbkEgPSBEb20uZGl2KG51bGwsIEEsIEIsIEMsIEQpXG5cdFx0XHRNYWluQiA9IERvbS5kaXYoKVxuXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5BKShBLCBCLCBDLCBEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQikoKVxuXG5cdFx0XHRNYWluQi5hcHBlbmQoQilcblx0XHRcdEIuYmVmb3JlKEEpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5BKShDLCBEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQikoQSwgQilcblxuXHRcdFx0Qy5pbnNlcnRCZWZvcmUoQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkEpKEQpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5CKShBLCBDLCBCKVxuXG5cblx0XHR0ZXN0IFwiLmRldGFjaCgpXCIsICgpLT5cblx0XHRcdGVtaXRDb3VudCA9IDBcblx0XHRcdGRpdiA9IERvbS5kaXYobnVsbCwgJ0lubmVyIFRleHQgSGVyZScpXG5cdFx0XHRkaXYub24gJ2JlZXAnLCAoKS0+IGVtaXRDb3VudCsrXG5cdFx0XHRkaXYuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGRpdi5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS5ub3QudG8uZXhpc3Rcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsKDApXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ3JlbGF4ZWQnKS50by5iZS50cnVlXG5cdFx0XHRcblx0XHRcdGRpdi5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0ZGl2LmVtaXQoJ2JlZXAnKVxuXHRcdFx0ZXhwZWN0KHNhbmRib3guY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGRpdi5wYXJlbnQuZWwpLnRvLmVxdWFsKHNhbmRib3gpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdyZWxheGVkJykudG8uYmUudHJ1ZVxuXG5cdFx0XHRkaXYuZGV0YWNoKClcblx0XHRcdGRpdi5lbWl0KCdiZWVwJylcblx0XHRcdGV4cGVjdChzYW5kYm94LmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMClcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS5ub3QudG8uZXhpc3Rcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ3JlbGF4ZWQnKS50by5iZS50cnVlXG5cblxuXHRcdHRlc3QgXCIucmVtb3ZlKClcIiwgKCktPlxuXHRcdFx0ZW1pdENvdW50ID0gMFxuXHRcdFx0ZGl2ID0gRG9tLmRpdihudWxsLCAnSW5uZXIgVGV4dCBIZXJlJylcblx0XHRcdGRpdi5vbiAnYmVlcCcsICgpLT4gZW1pdENvdW50Kytcblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZGl2LnN0YXRlICdyZWxheGVkJywgb25cblxuXHRcdFx0ZXhwZWN0KGRpdi5wYXJlbnQpLm5vdC50by5leGlzdFxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwoMClcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLnRydWVcblx0XHRcdFxuXHRcdFx0ZGl2LmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRkaXYuZW1pdCgnYmVlcCcpXG5cdFx0XHRleHBlY3Qoc2FuZGJveC5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudC5lbCkudG8uZXF1YWwoc2FuZGJveClcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ3JlbGF4ZWQnKS50by5iZS50cnVlXG5cblx0XHRcdGRpdi5yZW1vdmUoKVxuXHRcdFx0ZGl2LmVtaXQoJ2JlZXAnKVxuXHRcdFx0ZXhwZWN0KHNhbmRib3guY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgwKVxuXHRcdFx0ZXhwZWN0KGRpdi5wYXJlbnQpLm5vdC50by5leGlzdFxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2hhcHB5JykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ3JlbGF4ZWQnKS50by5iZS5mYWxzZVxuXG5cblx0XHR0ZXN0IFwiLmVtcHR5KClcIiwgKCktPlxuXHRcdFx0TWFpbiA9IERvbS5kaXYoKVxuXHRcdFx0QSA9IERvbS5kaXYoKS5hcHBlbmRUbyhNYWluKVxuXHRcdFx0QiA9IERvbS5kaXYoKS5hcHBlbmRUbyhNYWluKVxuXHRcdFx0QS5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0Qi5zdGF0ZSAnaGFwcHknLCBvblxuXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKEEsIEIpXG5cdFx0XHRleHBlY3QoQS5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoQi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cblx0XHRcdE1haW4uZW1wdHkoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluKSgpXG5cdFx0XHRleHBlY3QoQS5wYXJlbnQpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChCLnBhcmVudCkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KEEuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KEIuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXG5cblx0XHR0ZXN0IFwiLndyYXAoKVwiLCAoKS0+XG5cdFx0XHRNYWluID0gRG9tLmRpdigpXG5cdFx0XHRBID0gRG9tLmRpdigpLmFwcGVuZFRvKE1haW4pXG5cdFx0XHRCID0gRG9tLmRpdigpLmFwcGVuZFRvKE1haW4pXG5cdFx0XHRDID0gRG9tLmRpdigpXG5cdFx0XHR3cmFwQSA9IERvbS5zZWN0aW9uKClcblx0XHRcdHdyYXBCID0gRG9tLnNlY3Rpb24oKVxuXHRcdFx0d3JhcEMgPSBEb20uc2VjdGlvbigpXG5cdFx0XHRBLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRCLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRDLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHR3cmFwQS5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHR3cmFwQi5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHR3cmFwQy5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKEEsIEIpXG5cdFx0XHRcblx0XHRcdEEud3JhcCh3cmFwQSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikod3JhcEEsIEIpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKHdyYXBBKShBKVxuXHRcdFx0XG5cdFx0XHRCLndyYXAod3JhcEIpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKHdyYXBBLCB3cmFwQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUod3JhcEEpKEEpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKHdyYXBCKShCKVxuXHRcdFx0XG5cdFx0XHRCLndyYXAod3JhcEEpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKHdyYXBBLCB3cmFwQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUod3JhcEEpKEEsIEIpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKHdyYXBCKSgpXG5cdFx0XHRcblx0XHRcdHdyYXBDLmFwcGVuZFRvKHdyYXBCKVxuXHRcdFx0Qy53cmFwKHdyYXBDKVxuXHRcdFx0Qy53cmFwKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikod3JhcEEsIHdyYXBCKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZSh3cmFwQSkoQSwgQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUod3JhcEIpKHdyYXBDKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZSh3cmFwQykoQylcblx0XHRcdFxuXHRcdFx0Qy53cmFwKEMpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKHdyYXBBLCB3cmFwQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUod3JhcEEpKEEsIEIpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKHdyYXBCKSh3cmFwQylcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUod3JhcEMpKEMpXG5cblx0XHRcdGV4cGVjdChBLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChCLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChDLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdCh3cmFwQS5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdCh3cmFwQi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdCh3cmFwQy5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLnRydWVcblxuXG5cdFx0dGVzdCBcIi51bndyYXAoKVwiLCAoKS0+XG5cdFx0XHRNYWluID0gRG9tLmRpdigpXG5cdFx0XHRBID0gRG9tLmRpdigpLnByZXBlbmRUbyhNYWluKVxuXHRcdFx0QiA9IERvbS5kaXYoKS5hcHBlbmRUbyhBKVxuXHRcdFx0QyA9IERvbS5kaXYoKS5hcHBlbmRUbyhBKVxuXHRcdFx0RCA9IERvbS5kaXYoKS5hcHBlbmRUbyhDKVxuXHRcdFx0RSA9IERvbS5kaXYoKS5hcHBlbmRUbyhEKVxuXHRcdFx0QS5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0Qi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0Qy5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0RC5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0RS5zdGF0ZSAnaGFwcHknLCBvblxuXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKEEpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEEpKEIsIEMpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEIpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQykoRClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoRCkoRSlcblxuXHRcdFx0RS51bndyYXAoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluKShBKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShBKShCLCBDKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShCKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEMpKEUpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEQpKClcblxuXHRcdFx0Qi51bndyYXAoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluKShCLCBDKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShBKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEIpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQykoRSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoRCkoKVxuXG5cdFx0XHRFLnVud3JhcCgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKEIsIEUpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEEpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQikoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShDKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEQpKClcblxuXHRcdFx0QS5pbnNlcnRBZnRlcihCKVxuXHRcdFx0Qy5hcHBlbmRUbyhBKVxuXHRcdFx0RC5hcHBlbmRUbyhBKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluKShCLCBBLCBFKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShBKShDLCBEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShCKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEMpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoRCkoKVxuXG5cdFx0XHRELnVud3JhcCgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKEIsIEMsIEQsIEUpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEEpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQikoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShDKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEQpKClcblxuXG5cblx0XHR0ZXN0IFwiLnJlcGxhY2UoKVwiLCAoKS0+XG5cdFx0XHRNYWluID0gRG9tLmRpdigpXG5cdFx0XHRBID0gRG9tLmRpdigpLmFwcGVuZFRvKE1haW4pXG5cdFx0XHRCID0gRG9tLmRpdigpLmFwcGVuZFRvKE1haW4pXG5cdFx0XHRDID0gRG9tLmRpdigpLmFwcGVuZFRvKEEpXG5cdFx0XHREID0gRG9tLmRpdigpLmFwcGVuZFRvKEEpXG5cdFx0XHRFID0gRG9tLmRpdigpLmFwcGVuZFRvKEQpXG5cdFx0XHRcblx0XHRcdEEucmVwbGFjZSgpOyBFLnJlcGxhY2UoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluKShBLCBCKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShBKShDLCBEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShCKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEMpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoRCkoRSlcblx0XHRcdFxuXHRcdFx0Qy5yZXBsYWNlKEUpLmFwcGVuZFRvKEIpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKEEsIEIpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEEpKEUsIEQpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEIpKEMpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEMpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoRCkoKVxuXHRcdFx0XG5cdFx0XHRELnJlcGxhY2UoRSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikoQSwgQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQSkoRSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQikoQylcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQykoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShEKSgpXG5cdFx0XHRcblx0XHRcdEIucmVwbGFjZShDKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluKShBLCBDKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShBKShFKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShCKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEMpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoRCkoKVxuXHRcdFx0XG5cdFx0XHRBLnJlcGxhY2UoRClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikoRCwgQylcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQSkoRSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQikoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShDKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEQpKClcblx0XHRcdFxuXHRcdFx0Qi5yZXBsYWNlKEQpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKEMpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEEpKEUpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEIpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQykoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShEKSgpXG5cblxuXHRcdHRlc3QgXCIuY2xvbmUoKVwiLCAoKS0+XG5cdFx0XHRlbWl0Q291bnQgPSAwXG5cdFx0XHRzYW5kQm94ID0gRG9tKHNhbmRib3gpXG5cdFx0XHRvcHRzID0ge3N0eWxlOiAkYmFzZTp7d2lkdGg6JzM0cHgnfSwgJGhhcHB5OntoZWlnaHQ6Jzk5cHgnfSwgJHJlbGF4ZWQ6e29wYWNpdHk6JzAuNSd9fVxuXHRcdFx0QSA9IERvbS5kaXYob3B0cywgJ1NvbWUgSW5uZXIgVGV4dCcpLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRBLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRBLm9uICdwcml2YXRlRXZlbnQnLCAoKS0+IGVtaXRDb3VudCsrXG5cdFx0XHRjaGlsZEEgPSBEb20uZGl2KCkuYXBwZW5kVG8oQSlcblx0XHRcdGNoaWxkQiA9IERvbS5zcGFuKCkuYXBwZW5kVG8oQSlcblx0XHRcdEIgPSBBLmNsb25lKClcblxuXHRcdFx0QS5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRBLmVtaXQoJ3ByaXZhdGVFdmVudCcpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KEEucGFyZW50KS50by5lcXVhbChzYW5kQm94KVxuXHRcdFx0ZXhwZWN0KEEuY3NzICd3aWR0aCcpLnRvLmVxdWFsKCczNHB4Jylcblx0XHRcdGV4cGVjdChBLmNzcyAnaGVpZ2h0JykudG8uZXF1YWwoJzk5cHgnKVxuXHRcdFx0ZXhwZWN0KEEuY3NzICdvcGFjaXR5JykudG8uZXF1YWwoJzAuNScpXG5cdFx0XHRleHBlY3QoQS5zaWJsaW5ncy5sZW5ndGgpLnRvLmVxdWFsKDApXG5cdFx0XHRleHBlY3QoQS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QoQS5jaGlsZHJlblswXS5lbC50ZXh0Q29udGVudCkudG8uZXF1YWwgJ1NvbWUgSW5uZXIgVGV4dCdcblx0XHRcdGV4cGVjdChBLmNoaWxkcmVuWzFdKS50by5lcXVhbChjaGlsZEEpXG5cdFx0XHRleHBlY3QoQS5jaGlsZHJlblsyXSkudG8uZXF1YWwoY2hpbGRCKVxuXHRcdFx0ZXhwZWN0KEIpLm5vdC50by5lcXVhbChBKVxuXHRcdFx0ZXhwZWN0KEIucGFyZW50KS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRzYW5kQm94LmFwcGVuZChCKVxuXG5cdFx0XHRleHBlY3QoQi5wYXJlbnQpLnRvLmVxdWFsKHNhbmRCb3gpXG5cdFx0XHRleHBlY3QoQi5jc3MgJ3dpZHRoJykudG8uZXF1YWwoJzM0cHgnKVxuXHRcdFx0ZXhwZWN0KEIuY3NzICdoZWlnaHQnKS50by5lcXVhbCgnOTlweCcpXG5cdFx0XHRleHBlY3QoQi5jc3MgJ29wYWNpdHknKS50by5lcXVhbCgnMScpXG5cdFx0XHRleHBlY3QoQi5zaWJsaW5ncy5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoQi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QoQi5jaGlsZHJlblswXS5lbC50ZXh0Q29udGVudCkudG8uZXF1YWwgJ1NvbWUgSW5uZXIgVGV4dCdcblx0XHRcdGV4cGVjdChCLmNoaWxkcmVuWzBdKS5ub3QudG8uZXF1YWwoQS5jaGlsZHJlblswXSlcblx0XHRcdGV4cGVjdChCLmNoaWxkcmVuWzFdKS5ub3QudG8uZXF1YWwoY2hpbGRBKVxuXHRcdFx0ZXhwZWN0KEIuY2hpbGRyZW5bMl0pLm5vdC50by5lcXVhbChjaGlsZEIpXG5cdFx0XHRleHBlY3QoQi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoQi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLmZhbHNlXG5cblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsKDEpXG5cdFx0XHRCLmVtaXQoJ3ByaXZhdGVFdmVudCcpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCgyKVxuXHRcdFx0XG5cdFx0XHRBLm9mZigpXG5cdFx0XHRBLmVtaXQoJ3ByaXZhdGVFdmVudCcpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCgyKVxuXHRcdFx0Qi5lbWl0KCdwcml2YXRlRXZlbnQnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwoMylcblxuXG5cdFx0dGVzdCBcIi5wcm9wKCkgLSBlbGVtZW50IHByb3BlcnR5IGdldHRlci9zZXR0ZXJcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cdFx0XHRcblx0XHRcdGV4cGVjdChkaXYucHJvcCAnbXlQcm9wJykudG8uZXF1YWwgdW5kZWZpbmVkXG5cdFx0XHRleHBlY3QoZGl2LnByb3AgJ215UHJvcCcsIDE5MikudG8uZXF1YWwgZGl2XG5cdFx0XHRleHBlY3QoZGl2LnByb3AgJ215UHJvcCcpLnRvLmVxdWFsIDE5MlxuXHRcdFx0ZXhwZWN0KGRpdi5wcm9wICdteVByb3AnLCAnMTkyJykudG8uZXF1YWwgZGl2XG5cdFx0XHRleHBlY3QoZGl2LnByb3AgJ215UHJvcCcpLnRvLmVxdWFsICcxOTInXG5cdFx0XHRleHBlY3QoZGl2LnByb3AgJ2Fub3RoZXJQcm9wJywgWzEsMiwzXSkudG8uZXF1YWwgZGl2XG5cdFx0XHRleHBlY3QoZGl2LnByb3AgJ2Fub3RoZXJQcm9wJykudG8uZXFsIFsxLDIsM11cblx0XHRcdGV4cGVjdChkaXYuZWwubXlQcm9wKS50by5lcXVhbCAnMTkyJ1xuXHRcdFx0ZXhwZWN0KGRpdi5lbC5hbm90aGVyUHJvcCkudG8uZXFsIFsxLDIsM10gXG5cblx0XHRcdGRpdi5lbC5sYXN0UHJvcCA9IDk5OTlcblx0XHRcdGV4cGVjdChkaXYuZWwubGFzdFByb3ApLnRvLmVxdWFsIDk5OTlcblx0XHRcdGV4cGVjdChkaXYucHJvcCAnbGFzdFByb3AnKS50by5lcXVhbCA5OTk5XG5cblx0XHRcdGV4cGVjdChPYmplY3Qua2V5cyhkaXYuZWwpKS5ub3QudG8uY29udGFpbigncHJvbWlzZUlzTGFzdCcpXG5cdFx0XHRcblx0XHRcdGRpdi5wcm9wICdwcm9taXNlSXNMYXN0JywgJ292ZXI5aydcblx0XHRcdGV4cGVjdChPYmplY3Qua2V5cyhkaXYuZWwpKS50by5jb250YWluKCdwcm9taXNlSXNMYXN0Jylcblx0XHRcdFxuXHRcdFx0ZGl2LnByb3AgJ3Byb21pc2VJc0xhc3QnLCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdChPYmplY3Qua2V5cyhkaXYuZWwpKS50by5jb250YWluKCdwcm9taXNlSXNMYXN0Jylcblx0XHRcdFxuXHRcdFx0ZGl2LnByb3AgJ3Byb21pc2VJc0xhc3QnLCBudWxsXG5cdFx0XHRleHBlY3QoT2JqZWN0LmtleXMoZGl2LmVsKSkudG8uY29udGFpbigncHJvbWlzZUlzTGFzdCcpXG5cblxuXG5cdFx0dGVzdCBcIi5hdHRyKCkgLSBlbGVtZW50IHByb3BlcnR5IGdldHRlci9zZXR0ZXJcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cdFx0XHRcblx0XHRcdGV4cGVjdChkaXYuYXR0ciAnbXlBdHRyJykudG8uZXF1YWwgbnVsbFxuXHRcdFx0ZXhwZWN0KGRpdi5hdHRyICdteUF0dHInLCAxOTIpLnRvLmVxdWFsIGRpdlxuXHRcdFx0ZXhwZWN0KGRpdi5hdHRyICdteUF0dHInKS50by5lcXVhbCAnMTkyJ1xuXHRcdFx0ZXhwZWN0KGRpdi5hdHRyICdteUF0dHInLCAnMTkyJykudG8uZXF1YWwgZGl2XG5cdFx0XHRleHBlY3QoZGl2LmF0dHIgJ215QXR0cicpLnRvLmVxdWFsICcxOTInXG5cdFx0XHRleHBlY3QoZGl2LmF0dHIgJ2Fub3RoZXJBdHRyJywgWzEsMiwzXSkudG8uZXF1YWwgZGl2XG5cdFx0XHRleHBlY3QoZGl2LmF0dHIgJ2Fub3RoZXJBdHRyJykudG8uZXF1YWwgJzEsMiwzJ1xuXHRcdFx0ZXhwZWN0KGRpdi5lbC5nZXRBdHRyaWJ1dGUgJ215QXR0cicpLnRvLmVxdWFsICcxOTInXG5cdFx0XHRleHBlY3QoZGl2LmVsLmdldEF0dHJpYnV0ZSAnYW5vdGhlckF0dHInKS50by5lcWwgJzEsMiwzJ1xuXG5cdFx0XHRkaXYuZWwuc2V0QXR0cmlidXRlICdsYXN0QXR0cicsIDk5OTlcblx0XHRcdGV4cGVjdChkaXYuZWwuZ2V0QXR0cmlidXRlICdsYXN0QXR0cicpLnRvLmVxdWFsICc5OTk5J1xuXHRcdFx0ZXhwZWN0KGRpdi5hdHRyICdsYXN0QXR0cicpLnRvLmVxdWFsICc5OTk5J1xuXG5cdFx0XHRleHBlY3QoZGl2LmVsLmdldEF0dHJpYnV0ZSAncHJvbWlzZUlzTGFzdCcpLnRvLmVxdWFsIG51bGxcblx0XHRcdFxuXHRcdFx0ZGl2LmF0dHIgJ3Byb21pc2VJc0xhc3QnLCAnb3ZlcjlrJ1xuXHRcdFx0ZXhwZWN0KGRpdi5lbC5nZXRBdHRyaWJ1dGUgJ3Byb21pc2VJc0xhc3QnKS50by5lcXVhbCAnb3ZlcjlrJ1xuXHRcdFx0XG5cdFx0XHRkaXYuYXR0ciAncHJvbWlzZUlzTGFzdCcsIHVuZGVmaW5lZFxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5nZXRBdHRyaWJ1dGUgJ3Byb21pc2VJc0xhc3QnKS50by5lcXVhbCAnb3ZlcjlrJ1xuXHRcdFx0XG5cdFx0XHRkaXYuYXR0ciAncHJvbWlzZUlzTGFzdCcsIG51bGxcblx0XHRcdGV4cGVjdChkaXYuZWwuZ2V0QXR0cmlidXRlICdwcm9taXNlSXNMYXN0JykudG8uZXF1YWwgbnVsbFxuXG5cblxuXHRcdHRlc3QgXCIuaHRtbCAtIGlubmVySFRNTCBnZXR0ZXIvc2V0dGVyXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYobnVsbCwgRG9tLmRpdigpLCAnU29tZSB0ZXh0JywgRG9tLnNwYW4oKSwgRG9tLmRpdigpKVxuXG5cdFx0XHRleHBlY3QoZGl2LmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoNClcblx0XHRcdGV4cGVjdChkaXYuaHRtbCkudG8uZXF1YWwoZGl2LmVsLmlubmVySFRNTClcblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCg0KVxuXG5cdFx0XHRkaXYuaHRtbCA9ICc8c2VjdGlvbiBJRD1cInRlc3RcIj48L3NlY3Rpb24+J1xuXHRcdFx0ZXhwZWN0KGRpdi5odG1sKS50by5lcXVhbCgnPHNlY3Rpb24gaWQ9XCJ0ZXN0XCI+PC9zZWN0aW9uPicpXG5cdFx0XHRleHBlY3QoZGl2LmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW5bMF0uZWwuaWQpLnRvLmVxdWFsKCd0ZXN0Jylcblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW5bMF0uZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkudG8uZXF1YWwoJ3NlY3Rpb24nKVxuXG5cblx0XHR0ZXN0IFwiLnRleHQgLSB0ZXh0Q29udGVudCBnZXR0ZXIvc2V0dGVyXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYobnVsbCwgJ1NvbWUgdGV4dCcsIERvbS5zcGFuKG51bGwsICdJbm5lciBUZXh0JykpXG5cblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KGRpdi50ZXh0KS50by5lcXVhbChkaXYuZWwudGV4dENvbnRlbnQpXG5cdFx0XHRleHBlY3QoZGl2LnRleHQpLnRvLmVxdWFsKCdTb21lIHRleHRJbm5lciBUZXh0Jylcblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgyKVxuXG5cdFx0XHRkaXYudGV4dCA9ICduZXdUZXh0J1xuXHRcdFx0ZXhwZWN0KGRpdi50ZXh0KS50by5lcXVhbCgnbmV3VGV4dCcpXG5cdFx0XHRleHBlY3QoZGl2LmVsLnRleHRDb250ZW50KS50by5lcXVhbCgnbmV3VGV4dCcpXG5cdFx0XHRleHBlY3QoZGl2LmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW5bMF0uZWwubm9kZVR5cGUpLnRvLmVxdWFsKDMpXG5cblxuXHRcdHRlc3QgXCJBcHBlbmRpbmcvcHJlcGVuZGluZyBlbGVtZW50cyB0byBhIHRleHQgbm9kZSBzaG91bGQgZG8gbm90aGluZ1wiLCAoKS0+XG5cdFx0XHR0ZXh0ID0gRG9tLnRleHQoJ2FiYzEyMycpXG5cdFx0XHRleHBlY3QodGV4dC50ZXh0KS50by5lcXVhbCgnYWJjMTIzJylcblx0XHRcdGV4cGVjdCh0ZXh0LnJhdy5jaGlsZE5vZGVzLmxlbmd0aCkudG8uZXF1YWwoMClcblxuXHRcdFx0dGV4dC5hcHBlbmQoRG9tLnRleHQoJ2RlZicpKVxuXHRcdFx0ZXhwZWN0KHRleHQudGV4dCkudG8uZXF1YWwoJ2FiYzEyMycpXG5cdFx0XHRleHBlY3QodGV4dC5yYXcuY2hpbGROb2Rlcy5sZW5ndGgpLnRvLmVxdWFsKDApXG5cblx0XHRcdHRleHQucHJlcGVuZChEb20uZGl2KG51bGwsICdkZWYnKSlcblx0XHRcdGV4cGVjdCh0ZXh0LnRleHQpLnRvLmVxdWFsKCdhYmMxMjMnKVxuXHRcdFx0ZXhwZWN0KHRleHQucmF3LmNoaWxkTm9kZXMubGVuZ3RoKS50by5lcXVhbCgwKVxuXHRcdFx0XG5cdFx0XHRkaXYgPSBEb20uZGl2KG51bGwsICc0NTYnKVxuXHRcdFx0ZGl2LmFwcGVuZFRvKHRleHQpXG5cdFx0XHRleHBlY3QodGV4dC50ZXh0KS50by5lcXVhbCgnYWJjMTIzJylcblx0XHRcdGV4cGVjdCh0ZXh0LnJhdy5jaGlsZE5vZGVzLmxlbmd0aCkudG8uZXF1YWwoMClcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5lcXVhbCh1bmRlZmluZWQpXG5cblxuXG5cblx0c3VpdGUgXCJCYXRjaFwiLCAoKS0+XG5cdFx0dGVzdCBcIkRvbS5iYXRjaCgpIHRha2VzIGFuIGl0ZXJhYmxlIGNvbnRhaW5pbmcgYW4gYXJyYXkgb2YgZWxlbWVudHMgb3IgUXVpY2tEb20gZWxlbWVudHMgYW5kIHJldmVhbHMgdGhlIFF1aWNrRWxlbWVudCBBUEkgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIGZvciBlYWNoIGVsZW1lbnRcIiwgKCktPlxuXHRcdFx0c2FuZEJveCA9IERvbShzYW5kYm94KVxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cdFx0XHRBID0gRG9tLmRpdigpLmFwcGVuZFRvKGRpdilcblx0XHRcdEIgPSBEb20uc2VjdGlvbigpLmFwcGVuZFRvKGRpdilcblx0XHRcdEMgPSBEb20uZGl2KCkuYXBwZW5kVG8oZGl2KVxuXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKHNhbmRCb3gpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoZGl2KShBLCBCLCBDKVxuXG5cdFx0XHREb20uYmF0Y2goW0EsQixDXSlcblx0XHRcdFx0LmFwcGVuZFRvKHNhbmRCb3gpXG5cdFx0XHRcdC5zdHlsZSAnb3BhY2l0eScsIDAuNVxuXHRcdFx0XHQuY3NzIHtoZWlnaHQ6MzAsIGJhY2tncm91bmRDb2xvcjoncGluayd9XG5cdFx0XHRcdC5hcHBlbmQgJ1NvbWUgSW5uZXIgVGV4dCdcblxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShzYW5kQm94KShBLCBCLCBDKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShkaXYpKClcblxuXHRcdFx0ZXhwZWN0KGdldENvbXB1dGVkU3R5bGUoQS5lbCkub3BhY2l0eSkudG8uZXF1YWwoJzAuNScpXG5cdFx0XHRleHBlY3QoZ2V0Q29tcHV0ZWRTdHlsZShDLmVsKS5vcGFjaXR5KS50by5lcXVhbCgnMC41Jylcblx0XHRcdGV4cGVjdChnZXRDb21wdXRlZFN0eWxlKEIuZWwpLmhlaWdodCkudG8uZXF1YWwoJzMwcHgnKVxuXHRcdFx0ZXhwZWN0KEEuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KEIuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KEMuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KEIuY2hpbGRyZW5bMF0uZWwudGV4dENvbnRlbnQpLnRvLmVxdWFsKCdTb21lIElubmVyIFRleHQnKVxuXG5cblx0XHR0ZXN0IFwiSWYgYSB0cnV0aHkgdmFsdWUgaXMgcGFzc2VkIGFzIHRoZSAybmQgYXJnIG9mIERvbS5iYXRjaCgpLCBhbiBhcnJheSB3aWxsIGJlIHJldHVybmVkIGZvciB0aGUgZmlyc3QgbWV0aG9kIGludm9rZWQgY29udGFpbmluZyB0aGUgcmVzdWx0IGZvciBlYWNoIGVsZW1lbnQgcHJvdmlkZWRcIiwgKCktPlxuXHRcdFx0c2FuZEJveCA9IERvbShzYW5kYm94KVxuXHRcdFx0QSA9IERvbS5kaXYoKS5hcHBlbmRUbyhzYW5kQm94KVxuXHRcdFx0QiA9IERvbS5zZWN0aW9uKCkuYXBwZW5kVG8oc2FuZEJveClcblx0XHRcdEMgPSBEb20uZGl2KCkuYXBwZW5kVG8oc2FuZEJveClcblxuXHRcdFx0YmF0Y2gxID0gRG9tLmJhdGNoKFtBLEIsQ10pXG5cdFx0XHRiYXRjaDIgPSBEb20uYmF0Y2goW0EsQixDXSwgdHJ1ZSlcblxuXHRcdFx0ZXhwZWN0KGJhdGNoMS5zdHlsZSgnd2lkdGgnKSkudG8uZXF1YWwoYmF0Y2gxKVxuXHRcdFx0ZXhwZWN0KGJhdGNoMS5zdHlsZSgnd2lkdGgnLCA0NykpLnRvLmVxdWFsKGJhdGNoMSlcblx0XHRcdGV4cGVjdChiYXRjaDIuc3R5bGUoJ3dpZHRoJykpLnRvLmVxbChbJzQ3cHgnLCAnNDdweCcsICc0N3B4J10pXG5cdFx0XHRleHBlY3QoYmF0Y2gyLnN0eWxlKCd3aWR0aCcsIDMzKSkudG8uZXFsKFtBLEIsQ10pXG5cdFx0XHRleHBlY3QoYmF0Y2gyLnN0eWxlKCd3aWR0aCcpKS50by5lcWwoWyczM3B4JywgJzMzcHgnLCAnMzNweCddKVxuXG5cblx0XHR0ZXN0IFwiSWYgdGhlIC5yZXR1cm4oKSBtZXRob2QgaXMgaW52b2tlZCBvbiB0aGUgYmF0Y2ggaW5zdGFuY2UsIGl0IHdpbGwgcmV0dXJuIHRoZSByZXN1bHQgc2V0IGZyb20gdGhlIGxhc3QgbWV0aG9kIGludm9jYXRpb25cIiwgKCktPlxuXHRcdFx0c2FuZEJveCA9IERvbShzYW5kYm94KVxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cdFx0XHRBID0gRG9tLmRpdigpLmFwcGVuZFRvKGRpdilcblx0XHRcdEIgPSBEb20uc2VjdGlvbigpLmFwcGVuZFRvKGRpdilcblx0XHRcdEMgPSBEb20uZGl2KCkuYXBwZW5kVG8oZGl2KVxuXHRcdFx0XG5cdFx0XHRyZXN1bHQgPSBEb20uYmF0Y2goW0EsQixDXSlcblx0XHRcdFx0LmFwcGVuZFRvKHNhbmRCb3gpXG5cdFx0XHRcdC5zdHlsZSAnb3BhY2l0eScsIDAuNVxuXHRcdFx0XHQuY3NzIHtoZWlnaHQ6MzAsIGJhY2tncm91bmRDb2xvcjoncGluayd9XG5cdFx0XHRcdC5hcHBlbmQgJ1NvbWUgSW5uZXIgVGV4dCdcblx0XHRcdFx0LnN0eWxlICdvcGFjaXR5J1xuXHRcdFx0XHQucmV0dXJuKClcblxuXHRcdFx0ZXhwZWN0KHJlc3VsdCkudG8uZXFsIFsnMC41JywnMC41JywnMC41J11cblx0XHRcdGV4cGVjdChEb20uYmF0Y2goW0EsQixDXSkuY3NzKCd3aWR0aCcsICczOHB4JykuY3NzKCd3aWR0aCcpLnJldHVybigpKS50by5lcWwgWyczOHB4JywnMzhweCcsJzM4cHgnXVxuXG5cblx0XHR0ZXN0IFwiSWYgdGhlIC5yZXR1cm4oKSBtZXRob2QgaXMgaW52b2tlZCB3aXRoIGEgdHJ1dGh5IGFyZ3VtZW50LCBpdCB3aWxsIGNhdXNlIHRoZSBuZXh0IG1ldGhvZCBpbnZvY2F0aW9uIHRvIHJldHVybiB0aGUgcmVzdWx0cyBvZiB0aGUgaW52b2NhdGlvbiBmb3IgZWFjaCBlbGVtZW50IHByb3ZpZGVkXCIsICgpLT5cblx0XHRcdHNhbmRCb3ggPSBEb20oc2FuZGJveClcblx0XHRcdGRpdiA9IERvbS5kaXYoKVxuXHRcdFx0QSA9IERvbS5kaXYoKS5hcHBlbmRUbyhkaXYpXG5cdFx0XHRCID0gRG9tLnNlY3Rpb24oKS5hcHBlbmRUbyhkaXYpXG5cdFx0XHRDID0gRG9tLmRpdigpLmFwcGVuZFRvKGRpdilcblx0XHRcdFxuXHRcdFx0cmVzdWx0ID0gRG9tLmJhdGNoKFtBLEIsQ10pXG5cdFx0XHRcdC5hcHBlbmRUbyhzYW5kQm94KVxuXHRcdFx0XHQuc3R5bGUgJ29wYWNpdHknLCAwLjVcblx0XHRcdFx0LmNzcyB7aGVpZ2h0OjMwLCBiYWNrZ3JvdW5kQ29sb3I6J3BpbmsnfVxuXHRcdFx0XHQuYXBwZW5kICdTb21lIElubmVyIFRleHQnXG5cdFx0XHRcdC5yZXR1cm4odHJ1ZSlcblx0XHRcdFx0LnN0eWxlICdvcGFjaXR5J1xuXG5cdFx0XHRleHBlY3QocmVzdWx0KS50by5lcWwgWycwLjUnLCcwLjUnLCcwLjUnXVxuXHRcdFx0ZXhwZWN0KERvbS5iYXRjaChbQSxCLENdKS5jc3MoJ3dpZHRoJywgJzM4cHgnKS5jc3MoJ2hlaWdodCcsICcyOHB4JykucmV0dXJuKHRydWUpLmNzcygnd2lkdGgnKSkudG8uZXFsIFsnMzhweCcsJzM4cHgnLCczOHB4J11cblxuXG5cdFx0dGVzdCBcIkludm9raW5nIHRoZSAucmV2ZXJzZSgpIG1ldGhvZCBvbiB0aGUgYmF0Y2ggaW5zdGFuY2Ugd2lsbCByZXZlcnNlIHRoZSBlbGVtZW50cyBhcnJheSBpbiB0aGUgYmF0Y2ggYW5kIHRodXMgdGhlIGV4ZWN1dGlvbiBvcmRlclwiLCAoKS0+XG5cdFx0XHRBID0gRG9tLmRpdihudWxsLCAnQUFBJykuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdEIgPSBEb20uZGl2KG51bGwsICdCQkInKS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0QyA9IERvbS5kaXYobnVsbCwgJ0NDQycpLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRhcnIgPSBbQSxCLENdXG5cdFx0XHRleHBlY3QoRG9tLmJhdGNoKGFycikuZWxlbWVudHMpLm5vdC50by5lcXVhbChhcnIpXG5cdFx0XHRleHBlY3QoRG9tLmJhdGNoKGFycikuZWxlbWVudHMpLnRvLmVxbCBbQSxCLENdXG5cdFx0XHRleHBlY3QoRG9tLmJhdGNoKGFycikucmV2ZXJzZSgpLmVsZW1lbnRzKS50by5lcWwgW0MsQixBXVxuXHRcdFx0ZXhwZWN0KERvbS5iYXRjaChhcnIsMSkudGV4dCgpKS50by5lcWwgWydBQUEnLCdCQkInLCdDQ0MnXVxuXHRcdFx0ZXhwZWN0KERvbS5iYXRjaChhcnIsMSkucmV2ZXJzZSgpLnRleHQoKSkudG8uZXFsIFsnQ0NDJywnQkJCJywnQUFBJ11cblx0XHRcdGV4cGVjdChEb20uYmF0Y2goYXJyLDEpLnJldmVyc2UoKS50ZXh0KCkpLnRvLmVxbCBbJ0NDQycsJ0JCQicsJ0FBQSddXG5cdFx0XHRleHBlY3QoRG9tLmJhdGNoKGFyciwxKS5yZXZlcnNlKCkucmV2ZXJzZSgpLnRleHQoKSkudG8uZXFsIFsnQUFBJywnQkJCJywnQ0NDJ11cblxuXG5cdFx0dGVzdCBcIkJhdGNoLnRleHQvLmh0bWwgYXJlIG1ldGhvZHMgaW5zdGVhZCBvZiBnZXR0ZXJzL3NldHRlcnNcIiwgKCktPlxuXHRcdFx0ZGl2QSA9IERvbS5kaXYobnVsbCwgJ1RoZSBkaXZBJylcblx0XHRcdGRpdkIgPSBEb20uZGl2KG51bGwsICdUaGUgZGl2QicpXG5cdFx0XHRiYXRjaCA9IERvbS5iYXRjaChbZGl2QSwgZGl2Ql0sIHRydWUpXG5cblx0XHRcdGV4cGVjdChiYXRjaC5odG1sKCkpLnRvLmVxbCBbJ1RoZSBkaXZBJywgJ1RoZSBkaXZCJ11cblx0XHRcdGV4cGVjdChiYXRjaC50ZXh0KCkpLnRvLmVxbCBbJ1RoZSBkaXZBJywgJ1RoZSBkaXZCJ11cblx0XHRcdFxuXHRcdFx0YmF0Y2guaHRtbCgnPHNwYW4+VGhlIGRpdjwvc3Bhbj4nKVxuXHRcdFx0ZXhwZWN0KGJhdGNoLmh0bWwoKSkudG8uZXFsIFsnPHNwYW4+VGhlIGRpdjwvc3Bhbj4nLCAnPHNwYW4+VGhlIGRpdjwvc3Bhbj4nXVxuXHRcdFx0ZXhwZWN0KGJhdGNoLnRleHQoKSkudG8uZXFsIFsnVGhlIGRpdicsICdUaGUgZGl2J11cblxuXHRcdFx0YmF0Y2gudGV4dCgnVEhFIERJVicpXG5cdFx0XHRleHBlY3QoYmF0Y2guaHRtbCgpKS50by5lcWwgWydUSEUgRElWJywgJ1RIRSBESVYnXVxuXHRcdFx0ZXhwZWN0KGJhdGNoLnRleHQoKSkudG8uZXFsIFsnVEhFIERJVicsICdUSEUgRElWJ11cblxuXG5cblx0c3VpdGUgXCJUZW1wbGF0ZXNcIiwgKCktPlxuXHRcdHRlc3QgXCJBIHJldXNhYmxlIHRlbXBsYXRlIGNhbiBiZSBnZW5lcmF0ZWQgdmlhIFF1aWNrRG9tLnRlbXBsYXRlKClcIiwgKCktPlxuXHRcdFx0dGVtcGxhdGUgPSBEb20udGVtcGxhdGUoWydzcGFuJywgaWQ6J3RoZVNwYW4nXSlcblxuXHRcdFx0ZXhwZWN0KHR5cGVvZiB0ZW1wbGF0ZSkudG8uZXF1YWwoJ29iamVjdCcpXG5cdFx0XHRleHBlY3QodGVtcGxhdGUudHlwZSkudG8uZXF1YWwoJ3NwYW4nKVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLm9wdGlvbnMpLnRvLmVxbChpZDondGhlU3BhbicpXG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGRyZW4pLnRvLmVxbChbXSlcblxuXG5cdFx0dGVzdCBcIlRlbXBsYXRlcyBjYW4gYmUgdHVybmVkIGludG8gUXVpY2tEb20gaW5zdGFuY2VzIHZpYSB0ZW1wbGF0ZS5zcGF3bigpIG9yIGJ5IHBhc3NpbmcgYXMgYXJnIHRvIFF1aWNrRG9tXCIsICgpLT5cblx0XHRcdHRlbXBsYXRlID0gRG9tLnRlbXBsYXRlKFsnZGl2JywgY2xhc3NOYW1lOidzb21lLWRpdicsICdTb21lIElubmVyIFRleHQnXSlcblx0XHRcdHNwYXduQSA9IHRlbXBsYXRlLnNwYXduKClcblx0XHRcdHNwYXduQS5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0c3Bhd25CID0gRG9tKHRlbXBsYXRlKVxuXG5cdFx0XHRleHBlY3Qoc3Bhd25BLmVsKS50by5iZS5pbnN0YW5jZU9mKEhUTUxEaXZFbGVtZW50KVxuXHRcdFx0ZXhwZWN0KHNwYXduQi5lbCkudG8uYmUuaW5zdGFuY2VPZihIVE1MRGl2RWxlbWVudClcblx0XHRcdGV4cGVjdChzcGF3bkEpLm5vdC50by5lcXVhbChzcGF3bkIpXG5cdFx0XHRleHBlY3Qoc3Bhd25BLmVsKS5ub3QudG8uZXF1YWwoc3Bhd25CLmVsKVxuXHRcdFx0ZXhwZWN0KHNwYXduQS5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3Qoc3Bhd25CLnN0YXRlICdoYXBweScpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3Qoc3Bhd25BLmVsLnRleHRDb250ZW50KS50by5lcXVhbCgnU29tZSBJbm5lciBUZXh0Jylcblx0XHRcdGV4cGVjdChzcGF3bkIuZWwudGV4dENvbnRlbnQpLnRvLmVxdWFsKCdTb21lIElubmVyIFRleHQnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQS5lbC5jbGFzc05hbWUpLnRvLmVxdWFsKCdzb21lLWRpdicpXG5cblxuXHRcdHRlc3QgXCJUZW1wbGF0ZXMgY2FuIGJlIGNyZWF0ZWQgZnJvbSBRdWlja0VsZW1lbnQgaW5zdGFuY2VzXCIsICgpLT5cblx0XHRcdHNlY3Rpb24gPSBEb20uc2VjdGlvbihjbGFzc05hbWU6J3NpbmdsZVNlY3Rpb24nLCAnU29tZSBJbm5lciBUZXh0Jylcblx0XHRcdHNlY3Rpb24uc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdHNlY3Rpb25UZW1wbGF0ZSA9IHNlY3Rpb24udG9UZW1wbGF0ZSgpXG5cdFx0XHR0ZW1wbGF0ZVNwYXduID0gc2VjdGlvblRlbXBsYXRlLnNwYXduKClcblxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25UZW1wbGF0ZSkubm90LnRvLmVxdWFsKHNlY3Rpb24pXG5cdFx0XHRleHBlY3QodGVtcGxhdGVTcGF3bi5lbCkubm90LnRvLmVxdWFsKHNlY3Rpb24uZWwpXG5cdFx0XHRleHBlY3QodGVtcGxhdGVTcGF3bi5lbC5jbGFzc05hbWUpLnRvLmVxdWFsKCdzaW5nbGVTZWN0aW9uJylcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZVNwYXduLnRleHQpLnRvLmVxdWFsKCdTb21lIElubmVyIFRleHQnKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlU3Bhd24uc3RhdGUgJ2hhcHB5JykudG8uYmUuZmFsc2VcblxuXG5cdFx0dGVzdCBcIlRlbXBsYXRlcyBjYW4gYmUgY3JlYXRlZCBmcm9tIERPTSBFbGVtZW50c1wiLCAoKS0+XG5cdFx0XHRzZWN0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcblx0XHRcdHNlY3Rpb25FbC5jbGFzc05hbWUgPSAnc2luZ2xlU2VjdGlvbidcblx0XHRcdHNlY3Rpb25FbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSAnU29tZSBJbm5lciBUZXh0Jylcblx0XHRcdHNlY3Rpb25UZW1wbGF0ZSA9IERvbS50ZW1wbGF0ZShzZWN0aW9uRWwpXG5cdFx0XHR0ZW1wbGF0ZVNwYXduID0gc2VjdGlvblRlbXBsYXRlLnNwYXduKClcblxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlU3Bhd24uZWwpLm5vdC50by5lcXVhbChzZWN0aW9uRWwpXG5cdFx0XHRleHBlY3QodGVtcGxhdGVTcGF3bi5lbC5jbGFzc05hbWUpLnRvLmVxdWFsKCdzaW5nbGVTZWN0aW9uJylcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZVNwYXduLnRleHQpLnRvLmVxdWFsKCdTb21lIElubmVyIFRleHQnKVxuXG5cblx0XHR0ZXN0IFwiVGVtcGxhdGVzIGFyZSBpbW11dGFibGVcIiwgKCktPlxuXHRcdFx0dGVtcGxhdGUgPSBEb20udGVtcGxhdGUoWydkaXYnLCBjbGFzc05hbWU6J3NvbWUtZGl2JywgJ1NvbWUgSW5uZXIgVGV4dCddKVxuXG5cdFx0XHRleHBlY3QodGVtcGxhdGUudHlwZSkudG8uZXF1YWwgJ2Rpdidcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS5vcHRpb25zKS50by5lcWwge2NsYXNzTmFtZTonc29tZS1kaXYnfVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMVxuXHRcdFx0XG5cdFx0XHR0ZW1wbGF0ZS50eXBlID0gJ3NwYW4nXG5cdFx0XHR0ZW1wbGF0ZS5vcHRpb25zID0ge2NsYXNzTmFtZTonc29tZS1kaXYnLCBpZDondGFnJ31cblx0XHRcdHRlbXBsYXRlLmNoaWxkcmVuID0gWydhbm90aGVyJywgJ29uZSddXG5cdFx0XHRleHBlY3QodGVtcGxhdGUudHlwZSkudG8uZXF1YWwgJ2Rpdidcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS5vcHRpb25zKS50by5lcWwge2NsYXNzTmFtZTonc29tZS1kaXYnfVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMVxuXG5cblx0XHR0ZXN0IFwiVGVtcGxhdGVzIGNhbiBiZSBleHRlbmRlZCB2aWEgdGVtcGxhdGUuZXh0ZW5kXCIsICgpLT5cblx0XHRcdHdpbmRvdy50ZW1wbGF0ZSA9IERvbS50ZW1wbGF0ZShbJ2RpdicsIGNsYXNzTmFtZTonc29tZS1kaXYnLCAnU29tZSBJbm5lciBUZXh0J10pXG5cdFx0XHR3aW5kb3cudGVtcGxhdGVDb3B5QSA9IHRlbXBsYXRlLmV4dGVuZCB7dHlwZTonc3BhbicsIG9wdGlvbnM6e2NsYXNzTmFtZTonc29tZS1zcGFuJ30sIGNoaWxkcmVuOltdfVxuXHRcdFx0d2luZG93LnRlbXBsYXRlQ29weUIgPSB0ZW1wbGF0ZS5leHRlbmQge29wdGlvbnM6e2lkOid0aGVNYWluRGl2J30sIGNoaWxkcmVuOlsnVGhlIE90aGVyIElubmVyIFRleHQnXX1cblxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weUEpLm5vdC50by5lcXVhbCh0ZW1wbGF0ZSlcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHlCKS5ub3QudG8uZXF1YWwodGVtcGxhdGUpXG5cdFx0XHRzcGF3biA9IHRlbXBsYXRlLnNwYXduKClcblx0XHRcdHNwYXduQSA9IHRlbXBsYXRlQ29weUEuc3Bhd24oKVxuXHRcdFx0c3Bhd25CID0gdGVtcGxhdGVDb3B5Qi5zcGF3bigpXG5cblx0XHRcdGV4cGVjdChzcGF3bi5lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKS50by5lcXVhbCgnZGl2Jylcblx0XHRcdGV4cGVjdChzcGF3bi5lbC5jbGFzc05hbWUpLnRvLmVxdWFsKCdzb21lLWRpdicpXG5cdFx0XHRleHBlY3Qoc3Bhd24uZWwuaWQpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KHNwYXduLnRleHQpLnRvLmVxdWFsKCdTb21lIElubmVyIFRleHQnKVxuXG5cdFx0XHRleHBlY3Qoc3Bhd25BLmVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpLnRvLmVxdWFsKCdzcGFuJylcblx0XHRcdGV4cGVjdChzcGF3bkEuZWwuY2xhc3NOYW1lKS50by5lcXVhbCgnc29tZS1zcGFuJylcblx0XHRcdGV4cGVjdChzcGF3bkEuZWwuaWQpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQS50ZXh0KS50by5lcXVhbCgnU29tZSBJbm5lciBUZXh0JylcblxuXHRcdFx0ZXhwZWN0KHNwYXduQi5lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKS50by5lcXVhbCgnZGl2Jylcblx0XHRcdGV4cGVjdChzcGF3bkIuZWwuY2xhc3NOYW1lKS50by5lcXVhbCgnc29tZS1kaXYnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQi5lbC5pZCkudG8uZXF1YWwoJ3RoZU1haW5EaXYnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQi50ZXh0KS50by5lcXVhbCgnVGhlIE90aGVyIElubmVyIFRleHQnKVxuXG5cblx0XHR0ZXN0IFwiVGVtcGxhdGVzIGNhbiBiZSBzcGF3bmVkIHZpYSBleHRlbmRlZCBjb25maWcgYnkgcGFzc2luZyBhIG5ldyBjb25maWcgb2JqZWN0IHRvIHRlbXBsYXRlLnNwYXduKClcIiwgKCktPlxuXHRcdFx0dGVtcGxhdGUgPSBEb20udGVtcGxhdGUoXG5cdFx0XHRcdFsnZGl2JywgY2xhc3NOYW1lOidzb21lLWRpdicsXG5cdFx0XHRcdFx0J1NvbWUgSW5uZXIgVGV4dCcsXG5cdFx0XHRcdFx0WydzdHJvbmcnLCB7Y2xhc3NOYW1lOidoaWdobGlnaHRlZCcsIHN0eWxlOntvcGFjaXR5OjAuOX19LCAnIC0gQm9sZGVkIFRleHQnXVxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0XHRzcGF3blJhdyA9IHRlbXBsYXRlLnNwYXduKClcblx0XHRcdHNwYXduQSA9IHRlbXBsYXRlLnNwYXduKHR5cGU6J3NlY3Rpb24nLCBvcHRpb25zOntjbGFzc05hbWU6J3NvbWUtc2VjdGlvbicsIHN0eWxlOntvcGFjaXR5OjAuN319KVxuXHRcdFx0c3Bhd25CID0gdGVtcGxhdGUuc3Bhd24oXG5cdFx0XHRcdG9wdGlvbnM6XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnbWFpbi1kaXYnXG5cdFx0XHRcdFx0aWQ6ICd0aGVNYWluRGl2J1xuXHRcdFx0XHRcdHN0eWxlOiBvcGFjaXR5OiAwLjVcblx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAnc3Bhbidcblx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdHR5cGU6J3RleHQnXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHt0ZXh0OiAnTWFpbiBJbm5lciBUZXh0J31cblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogJ2InXG5cdFx0XHRcdFx0XHRvcHRpb25zOlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdzdXBlci1oaWdobGlnaHRlZCdcblx0XHRcdFx0XHRcdFx0c3R5bGU6IG9wYWNpdHk6ICcwLjInXG5cdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7dGV4dDogJyAtIFZlcnkgQm9sZGVkIFRleHQnfVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAndGV4dCdcblx0XHRcdFx0XHRcdG9wdGlvbnM6IHt0ZXh0OiAnICsgT3RoZXIgVGV4dCd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cblx0XHRcdGV4cGVjdChzcGF3blJhdy5lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKS50by5lcXVhbCgnZGl2Jylcblx0XHRcdGV4cGVjdChzcGF3blJhdy5lbC5jbGFzc05hbWUpLnRvLmVxdWFsKCdzb21lLWRpdicpXG5cdFx0XHRleHBlY3Qoc3Bhd25SYXcuZWwuaWQpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KHNwYXduUmF3LnRleHQpLnRvLmVxdWFsKCdTb21lIElubmVyIFRleHQgLSBCb2xkZWQgVGV4dCcpXG5cdFx0XHRleHBlY3Qoc3Bhd25SYXcuZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3Qoc3Bhd25SYXcuZWwuY2hpbGROb2Rlcy5sZW5ndGgpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3Qoc3Bhd25SYXcuZWwuY2hpbGROb2Rlc1swXS5ub2RlTmFtZSkudG8uZXF1YWwoJyN0ZXh0Jylcblx0XHRcdGV4cGVjdChzcGF3blJhdy5lbC5jaGlsZE5vZGVzWzFdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpLnRvLmVxdWFsKCdzdHJvbmcnKVxuXHRcdFx0ZXhwZWN0KHNwYXduUmF3LmVsLmNoaWxkTm9kZXNbMV0uY2xhc3NOYW1lKS50by5lcXVhbCgnaGlnaGxpZ2h0ZWQnKVxuXHRcdFx0ZXhwZWN0KHNwYXduUmF3LmVsLmNoaWxkTm9kZXNbMV0uc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJzAuOScpXG5cblx0XHRcdGV4cGVjdChzcGF3bkEuZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkudG8uZXF1YWwoJ3NlY3Rpb24nKVxuXHRcdFx0ZXhwZWN0KHNwYXduQS5lbC5jbGFzc05hbWUpLnRvLmVxdWFsKCdzb21lLXNlY3Rpb24nKVxuXHRcdFx0ZXhwZWN0KHNwYXduQS5lbC5pZCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3Qoc3Bhd25BLnRleHQpLnRvLmVxdWFsKCdTb21lIElubmVyIFRleHQgLSBCb2xkZWQgVGV4dCcpXG5cdFx0XHRleHBlY3Qoc3Bhd25BLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcwLjcnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQS5lbC5jaGlsZE5vZGVzLmxlbmd0aCkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChzcGF3bkEuZWwuY2hpbGROb2Rlc1swXS5ub2RlTmFtZSkudG8uZXF1YWwoJyN0ZXh0Jylcblx0XHRcdGV4cGVjdChzcGF3bkEuZWwuY2hpbGROb2Rlc1sxXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKS50by5lcXVhbCgnc3Ryb25nJylcblx0XHRcdGV4cGVjdChzcGF3bkEuZWwuY2hpbGROb2Rlc1sxXS5jbGFzc05hbWUpLnRvLmVxdWFsKCdoaWdobGlnaHRlZCcpXG5cdFx0XHRleHBlY3Qoc3Bhd25BLmVsLmNoaWxkTm9kZXNbMV0uc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJzAuOScpXG5cblx0XHRcdGV4cGVjdChzcGF3bkIuZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkudG8uZXF1YWwoJ2RpdicpXG5cdFx0XHRleHBlY3Qoc3Bhd25CLmVsLmNsYXNzTmFtZSkudG8uZXF1YWwoJ21haW4tZGl2Jylcblx0XHRcdGV4cGVjdChzcGF3bkIuZWwuaWQpLnRvLmVxdWFsKCd0aGVNYWluRGl2Jylcblx0XHRcdGV4cGVjdChzcGF3bkIudGV4dCkudG8uZXF1YWwoJ01haW4gSW5uZXIgVGV4dCAtIFZlcnkgQm9sZGVkIFRleHQgKyBPdGhlciBUZXh0Jylcblx0XHRcdGV4cGVjdChzcGF3bkIuZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJzAuNScpXG5cdFx0XHRleHBlY3Qoc3Bhd25CLmVsLmNoaWxkTm9kZXMubGVuZ3RoKS50by5lcXVhbCgzKVxuXHRcdFx0ZXhwZWN0KHNwYXduQi5lbC5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpLnRvLmVxdWFsKCdzcGFuJylcblx0XHRcdGV4cGVjdChzcGF3bkIuZWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChzcGF3bkIuZWwuY2hpbGROb2Rlc1sxXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKS50by5lcXVhbCgnYicpXG5cdFx0XHRleHBlY3Qoc3Bhd25CLmVsLmNoaWxkTm9kZXNbMV0uY2xhc3NOYW1lKS50by5lcXVhbCgnc3VwZXItaGlnaGxpZ2h0ZWQnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQi5lbC5jaGlsZE5vZGVzWzFdLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcwLjInKVxuXG5cblx0XHR0ZXN0IFwiVGVtcGxhdGUuZXh0ZW5kL3NwYXduKCkgY2FuIGFjY2VwdCBhIHRlbXBsYXRlIHRyZWUgYXJyYXlcIiwgKCktPlxuXHRcdFx0dGVtcGxhdGUgPSBEb20udGVtcGxhdGUgWydkaXYnLCBzdHlsZTp7J29wYWNpdHknOjAuNX0sIFsnc3BhbicsIG51bGwsICd0ZXh0IG9mIHNwYW4nXSwgWydkaXYnLCBudWxsLCAndGV4dCBvZiBkaXYnXV1cblx0XHRcdGNsb25lQSA9IHRlbXBsYXRlLmV4dGVuZChbJ3NlY3Rpb24nLCBzdHlsZTp7J29wYWNpdHknOjAuOH1dKVxuXHRcdFx0Y2xvbmVCID0gdGVtcGxhdGUuZXh0ZW5kKFsnc3BhbicsIG51bGwsIFsnZGl2J11dKVxuXHRcdFx0Y2xvbmVDID0gdGVtcGxhdGUuZXh0ZW5kKFsnc2VjdGlvbicsIHtjbGFzc05hbWU6J3RoZS1zZWN0aW9uJywgc3R5bGU6e2NvbG9yOidibHVlJ319LCBbJ3NlY3Rpb24nLCBudWxsLCAndGV4dCBvZiBzdWJzZWN0aW9uJ10sICdqdXN0IGEgdGV4dCBub2RlJ10pXG5cdFx0XHRzcGF3biA9IHRlbXBsYXRlLnNwYXduIFsnc3BhbicsIHN0eWxlOnsnd2lkdGgnOjE5MCwgJ29wYWNpdHknOjF9LCAnc28gbmljZSddXG5cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS50eXBlKS50by5lcXVhbCAnZGl2J1xuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLm9wdGlvbnMpLnRvLmVxbCB7c3R5bGU6eydvcGFjaXR5JzowLjV9fVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMlxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLmNoaWxkcmVuWzBdLnR5cGUpLnRvLmVxdWFsICdzcGFuJ1xuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLm9wdGlvbnMudGV4dCkudG8uZXF1YWwgJ3RleHQgb2Ygc3Bhbidcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS5jaGlsZHJlblsxXS50eXBlKS50by5lcXVhbCAnZGl2J1xuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLmNoaWxkcmVuWzFdLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLm9wdGlvbnMudGV4dCkudG8uZXF1YWwgJ3RleHQgb2YgZGl2J1xuXG5cdFx0XHRleHBlY3QoY2xvbmVBLnR5cGUpLnRvLmVxdWFsICdzZWN0aW9uJ1xuXHRcdFx0ZXhwZWN0KGNsb25lQS5vcHRpb25zKS50by5lcWwge3N0eWxlOnsnb3BhY2l0eSc6MC44fX1cblx0XHRcdGV4cGVjdChjbG9uZUEuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAyXG5cdFx0XHRleHBlY3QoY2xvbmVBLmNoaWxkcmVuWzBdLnR5cGUpLnRvLmVxdWFsICdzcGFuJ1xuXHRcdFx0ZXhwZWN0KGNsb25lQS5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjbG9uZUEuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0ub3B0aW9ucy50ZXh0KS50by5lcXVhbCAndGV4dCBvZiBzcGFuJ1xuXHRcdFx0ZXhwZWN0KGNsb25lQS5jaGlsZHJlblsxXS50eXBlKS50by5lcXVhbCAnZGl2J1xuXHRcdFx0ZXhwZWN0KGNsb25lQS5jaGlsZHJlblsxXS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjbG9uZUEuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0ub3B0aW9ucy50ZXh0KS50by5lcXVhbCAndGV4dCBvZiBkaXYnXG5cblx0XHRcdGV4cGVjdChjbG9uZUIudHlwZSkudG8uZXF1YWwgJ3NwYW4nXG5cdFx0XHRleHBlY3QoY2xvbmVCLm9wdGlvbnMpLnRvLmVxbCB7c3R5bGU6eydvcGFjaXR5JzowLjV9fVxuXHRcdFx0ZXhwZWN0KGNsb25lQi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsIDJcblx0XHRcdGV4cGVjdChjbG9uZUIuY2hpbGRyZW5bMF0udHlwZSkudG8uZXF1YWwgJ2Rpdidcblx0XHRcdGV4cGVjdChjbG9uZUIuY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QoY2xvbmVCLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLm9wdGlvbnMudGV4dCkudG8uZXF1YWwgJ3RleHQgb2Ygc3Bhbidcblx0XHRcdGV4cGVjdChjbG9uZUIuY2hpbGRyZW5bMV0udHlwZSkudG8uZXF1YWwgJ2Rpdidcblx0XHRcdGV4cGVjdChjbG9uZUIuY2hpbGRyZW5bMV0uY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QoY2xvbmVCLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLm9wdGlvbnMudGV4dCkudG8uZXF1YWwgJ3RleHQgb2YgZGl2J1xuXG5cdFx0XHRleHBlY3QoY2xvbmVDLnR5cGUpLnRvLmVxdWFsICdzZWN0aW9uJ1xuXHRcdFx0ZXhwZWN0KGNsb25lQy5vcHRpb25zKS50by5lcWwge2NsYXNzTmFtZTondGhlLXNlY3Rpb24nLCBzdHlsZTp7J29wYWNpdHknOjAuNSwgJ2NvbG9yJzonYmx1ZSd9fVxuXHRcdFx0ZXhwZWN0KGNsb25lQy5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsIDJcblx0XHRcdGV4cGVjdChjbG9uZUMuY2hpbGRyZW5bMF0udHlwZSkudG8uZXF1YWwgJ3NlY3Rpb24nXG5cdFx0XHRleHBlY3QoY2xvbmVDLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KGNsb25lQy5jaGlsZHJlblswXS5jaGlsZHJlblswXS5vcHRpb25zLnRleHQpLnRvLmVxdWFsICd0ZXh0IG9mIHN1YnNlY3Rpb24nXG5cdFx0XHRleHBlY3QoY2xvbmVDLmNoaWxkcmVuWzFdLnR5cGUpLnRvLmVxdWFsICd0ZXh0J1xuXHRcdFx0ZXhwZWN0KGNsb25lQy5jaGlsZHJlblsxXS5vcHRpb25zLnRleHQpLnRvLmVxdWFsICdqdXN0IGEgdGV4dCBub2RlJ1xuXG5cdFx0XHRleHBlY3Qoc3Bhd24uZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkudG8uZXF1YWwgJ3NwYW4nXG5cdFx0XHRleHBlY3Qoc3Bhd24uZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwgJzEnXG5cdFx0XHRleHBlY3Qoc3Bhd24uZWwuc3R5bGUud2lkdGgpLnRvLmVxdWFsICcxOTBweCdcblx0XHRcdGV4cGVjdChzcGF3bi5lbC5jaGlsZE5vZGVzLmxlbmd0aCkudG8uZXF1YWwgMlxuXHRcdFx0ZXhwZWN0KHNwYXduLmVsLmNoaWxkTm9kZXNbMF0ubm9kZVR5cGUpLnRvLmVxdWFsIDNcblx0XHRcdGV4cGVjdChzcGF3bi5lbC5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50KS50by5lcXVhbCAnc28gbmljZSdcblx0XHRcdGV4cGVjdChzcGF3bi5lbC5jaGlsZE5vZGVzWzFdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpLnRvLmVxdWFsICdkaXYnXG5cdFx0XHRleHBlY3Qoc3Bhd24uZWwuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCkudG8uZXF1YWwgJ3RleHQgb2YgZGl2J1xuXG5cblx0XHR0ZXN0IFwiVGVtcGxhdGUuZXh0ZW5kL3NwYXduKCkgY2FuIGFjY2VwdCBvdGhlciB0ZW1wbGF0ZSBpbnN0YW5jZXMgYXMgY2hpbGRyZW4gd2hpY2ggd2lsbCByZXBsYWNlIGV4aXN0aW5nIGNoaWxkcmVuXCIsICgpLT5cblx0XHRcdHRlbXBsYXRlID0gRG9tLnRlbXBsYXRlIFsnZGl2JywgbnVsbCwgWydzcGFuJywge3N0eWxlOm9wYWNpdHk6MC41fV0sICdvcmlnaW5hbCB0ZXh0J11cblx0XHRcdGNoaWxkQSA9IERvbS50ZW1wbGF0ZSBbJ2RpdicsIHtzdHlsZTpmb250RmFtaWx5OidwaW5rJ31dXG5cdFx0XHRjaGlsZEIgPSBEb20udGVtcGxhdGUgJ3JlcGxhY2VkIHRleHQnXG5cdFx0XHRjaGlsZEMgPSBEb20udGVtcGxhdGUgWydzZWN0aW9uJ11cblx0XHRcdHRlbXBsYXRlQ29weSA9IHRlbXBsYXRlLmV4dGVuZChbJ3NwYW4nLCB7c3R5bGU6Zm9udFNpemU6Jzc3cHgnfSwgY2hpbGRBLCBjaGlsZEIsIGNoaWxkQ10pXG5cdFx0XHRzcGF3bmVkQSA9IHRlbXBsYXRlLnNwYXduKClcblx0XHRcdHNwYXduZWRCID0gdGVtcGxhdGVDb3B5LnNwYXduKClcblx0XHRcdHNwYXduZWRDID0gdGVtcGxhdGUuc3Bhd24oWydzcGFuJywge3N0eWxlOmZvbnRTaXplOic3N3B4J30sIGNoaWxkQSwgY2hpbGRCLCBjaGlsZENdKVxuXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEEudHlwZSkudG8uZXF1YWwoJ2RpdicpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEEuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRBLmNoaWxkcmVuWzBdLnR5cGUpLnRvLmVxdWFsKCdzcGFuJylcblx0XHRcdGV4cGVjdChzcGF3bmVkQS5jaGlsZHJlblswXS5yYXcuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJzAuNScpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEEuY2hpbGRyZW5bMF0ucmF3LnN0eWxlLmZvbnRGYW1pbHkpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRBLmNoaWxkcmVuWzFdLnR5cGUpLnRvLmVxdWFsKCd0ZXh0Jylcblx0XHRcdGV4cGVjdChzcGF3bmVkQS50ZXh0KS50by5lcXVhbCgnb3JpZ2luYWwgdGV4dCcpXG5cblx0XHRcdGV4cGVjdChzcGF3bmVkQi50eXBlKS50by5lcXVhbCgnc3BhbicpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEIuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgzKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRCLmNoaWxkcmVuWzBdLnR5cGUpLnRvLmVxdWFsKCdkaXYnKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRCLmNoaWxkcmVuWzBdLnJhdy5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChzcGF3bmVkQi5jaGlsZHJlblswXS5yYXcuc3R5bGUuZm9udEZhbWlseSkudG8uZXF1YWwoJ3BpbmsnKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRCLmNoaWxkcmVuWzFdLnR5cGUpLnRvLmVxdWFsKCd0ZXh0Jylcblx0XHRcdGV4cGVjdChzcGF3bmVkQi50ZXh0KS50by5lcXVhbCgncmVwbGFjZWQgdGV4dCcpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEIuY2hpbGRyZW5bMl0udHlwZSkudG8uZXF1YWwoJ3NlY3Rpb24nKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRCLnJhdy5zdHlsZS5mb250U2l6ZSkudG8uZXF1YWwoJzc3cHgnKVxuXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEMudHlwZSkudG8uZXF1YWwoJ3NwYW4nKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRDLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMylcblx0XHRcdGV4cGVjdChzcGF3bmVkQy5jaGlsZHJlblswXS50eXBlKS50by5lcXVhbCgnZGl2Jylcblx0XHRcdGV4cGVjdChzcGF3bmVkQy5jaGlsZHJlblswXS5yYXcuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEMuY2hpbGRyZW5bMF0ucmF3LnN0eWxlLmZvbnRGYW1pbHkpLnRvLmVxdWFsKCdwaW5rJylcblx0XHRcdGV4cGVjdChzcGF3bmVkQy5jaGlsZHJlblsxXS50eXBlKS50by5lcXVhbCgndGV4dCcpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEMudGV4dCkudG8uZXF1YWwoJ3JlcGxhY2VkIHRleHQnKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRDLmNoaWxkcmVuWzJdLnR5cGUpLnRvLmVxdWFsKCdzZWN0aW9uJylcblx0XHRcdGV4cGVjdChzcGF3bmVkQy5yYXcuc3R5bGUuZm9udFNpemUpLnRvLmVxdWFsKCc3N3B4JylcblxuXG5cblx0XHR0ZXN0IFwiVGVtcGxhdGVzIGNhbiBoYXZlIG90aGVyIHRlbXBsYXRlcyBhcyB0aGVpciBjaGlsZHJlblwiLCAoKS0+XG5cdFx0XHRoZWFkZXJUZW1wbGF0ZSA9IERvbS50ZW1wbGF0ZSBbJ2hlYWRlcicsIHtzdHlsZTonaGVpZ2h0JzonMjAwcHgnfSxcblx0XHRcdFx0WydzcGFuJywge3N0eWxlOid0ZXh0QWxpZ24nOidjZW50ZXInfSwgJ1RoaXMgaXMgYm9sZGVkIHRleHQnXVxuXHRcdFx0XHQnIHdoaWxlIHRoaXMgaXMgbm90J1xuXHRcdFx0XVxuXHRcdFx0aGVhZGVyVGVtcGxhdGVDbG9uZSA9IERvbS50ZW1wbGF0ZShoZWFkZXJUZW1wbGF0ZSlcblx0XHRcdHNlY3Rpb25UZW1wbGF0ZSA9IERvbS50ZW1wbGF0ZSBbJ3NlY3Rpb24nLCBudWxsLCBoZWFkZXJUZW1wbGF0ZV1cblx0XHRcdHNlY3Rpb24gPSBzZWN0aW9uVGVtcGxhdGUuc3Bhd24oKS5hcHBlbmRUbyhzYW5kYm94KVxuXG5cdFx0XHRleHBlY3QoaGVhZGVyVGVtcGxhdGVDbG9uZSkubm90LnRvLmVxdWFsKGhlYWRlclRlbXBsYXRlKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25UZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3Qoc2VjdGlvblRlbXBsYXRlLmNoaWxkcmVuWzBdKS5ub3QudG8uZXF1YWwoaGVhZGVyVGVtcGxhdGUpXG5cdFx0XHRleHBlY3Qoc2VjdGlvblRlbXBsYXRlLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuWzBdLnR5cGUpLnRvLmVxdWFsKCdoZWFkZXInKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24udGV4dCkudG8uZXF1YWwoJ1RoaXMgaXMgYm9sZGVkIHRleHQgd2hpbGUgdGhpcyBpcyBub3QnKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uc3R5bGUoJ3RleHRBbGlnbicpKS50by5lcXVhbCgnY2VudGVyJylcblxuXG5cdFx0dGVzdCBcIkEgZ2xvYmFsIG9wdGlvbnMgb2JqZWN0IGNhbiBiZSBwYXNzZWQgYXMgdGhlIDJuZCBhcmcgdG8gdGVtcGxhdGUuZXh0ZW5kL3NwYXduKCkgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCB0ZW1wbGF0ZXMsIHNwYXducywgJiB0aGVpciBjaGlsZHJlblwiLCAoKS0+XG5cdFx0XHRvYmogPSBteUhlaWdodDonMTUwcHgnXG5cdFx0XHRkeW5hbWljSGVpZ2h0U3R5bGUgPSAnaGVpZ2h0JzogKHJlbGF0ZWQpLT4gZXhwZWN0KHJlbGF0ZWQpLnRvLmVxdWFsKG9iaik7IHJlbGF0ZWQubXlIZWlnaHRcblx0XHRcdFxuXHRcdFx0aGVhZGVyVGVtcGxhdGUgPSBEb20udGVtcGxhdGUgWydoZWFkZXInLCB7c3R5bGU6J3dpZHRoJzonMjNweCd9LFxuXHRcdFx0XHRbJ2RpdicsIHtzdHlsZTond2lkdGgnOicyM3B4J30sICdUaGlzIGlzIGJvbGRlZCB0ZXh0J11cblx0XHRcdFx0JyB3aGlsZSB0aGlzIGlzIG5vdCdcblx0XHRcdF1cblx0XHRcdHNlY3Rpb25UZW1wbGF0ZSA9IERvbS50ZW1wbGF0ZSBbJ3NlY3Rpb24nLCB7c3R5bGU6J3dpZHRoJzonMjNweCd9LCBoZWFkZXJUZW1wbGF0ZV1cblx0XHRcdHNlY3Rpb24gPSBzZWN0aW9uVGVtcGxhdGUuc3Bhd24oe29wdGlvbnM6e3JlbGF0ZWRJbnN0YW5jZTp3aW5kb3d9fSwge3JlbGF0ZWRJbnN0YW5jZTpvYmosIHN0eWxlOmR5bmFtaWNIZWlnaHRTdHlsZX0pLmFwcGVuZFRvKHNhbmRib3gpXG5cblx0XHRcdGV4cGVjdChzZWN0aW9uLnJhdy5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxNTBweCcpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblswXS5yYXcuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTUwcHgnKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0ucmF3LnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE1MHB4Jylcblx0XHRcdGV4cGVjdChzZWN0aW9uLnJhdy5zdHlsZS53aWR0aCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblswXS5yYXcuc3R5bGUud2lkdGgpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0ucmF3LnN0eWxlLndpZHRoKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuWzBdLnR5cGUpLnRvLmVxdWFsKCdoZWFkZXInKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24udGV4dCkudG8uZXF1YWwoJ1RoaXMgaXMgYm9sZGVkIHRleHQgd2hpbGUgdGhpcyBpcyBub3QnKVxuXG5cblx0XHR0ZXN0IFwiVGVtcGxhdGUgY2hpbGRyZW4gY2FuIGJlIG5hdmlnYXRlZCBieSByZWYgdXNpbmcgdGhlIC5jaGlsZCBwcm9wZXJ0eVwiLCAoKS0+XG5cdFx0XHR0ZW1wbGF0ZSA9IFxuXHRcdFx0XHREb20udGVtcGxhdGUgWydkaXYnLCB7aWQ6J2RpdkEnfSxcblx0XHRcdFx0XHRbJ2RpdicsIHtpZDonY2hpbGRBJ30sXG5cdFx0XHRcdFx0XHRbJ3NwYW4nLCB7cmVmOidjaGlsZEFfMSd9XVxuXHRcdFx0XHRcdFx0WydkaXYnLCB7cmVmOidjaGlsZEFfMicsIGlkOidjaGlsZEFfMid9XVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XHRbJ2RpdicsIG51bGwsIFxuXHRcdFx0XHRcdFx0WydzcGFuJywge3JlZjonY2hpbGRCXzEnfV1cblx0XHRcdFx0XHRcdFsndGV4dCcsIHtpZDonY2hpbGRCXzInLCB0ZXh0OidUaGUgVGV4dCd9XVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XVxuXG5cdFx0XHRleHBlY3QodHlwZW9mIHRlbXBsYXRlLmNoaWxkKS50by5lcXVhbCAnb2JqZWN0J1xuXHRcdFx0ZXhwZWN0KE9iamVjdC5rZXlzKHRlbXBsYXRlLmNoaWxkKS5sZW5ndGgpLnRvLmVxdWFsKDYpXG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGQuZGl2QSkudG8uZXF1YWwgdGVtcGxhdGVcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS5jaGlsZC5jaGlsZEEudHlwZSkudG8uZXF1YWwgJ2Rpdidcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS5jaGlsZC5jaGlsZEEpLnRvLmVxdWFsIHRlbXBsYXRlLmNoaWxkcmVuWzBdXG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGQuY2hpbGRBXzEpLnRvLmVxdWFsIHRlbXBsYXRlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGQuY2hpbGRBXzIpLnRvLmVxdWFsIHRlbXBsYXRlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdXG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGQuY2hpbGRCXzEpLnRvLmVxdWFsIHRlbXBsYXRlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdXG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGQuY2hpbGRCXzIpLnRvLmVxdWFsIHRlbXBsYXRlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdXG5cblx0XHRcdHJlbmRlcmVkID0gdGVtcGxhdGUuc3Bhd24oKVxuXHRcdFx0ZXhwZWN0KHJlbmRlcmVkLmNoaWxkLmNoaWxkQl8yKS50by5lcXVhbCByZW5kZXJlZC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXVxuXHRcdFx0ZXhwZWN0KHJlbmRlcmVkLnRleHQpLnRvLmVxdWFsKCdUaGUgVGV4dCcpXG5cblxuXHRcdHRlc3QgXCJUZW1wbGF0ZSdzIGNoaWxkcmVuIGNhbiBiZSBleHRlbmQvc3Bhd25lZCB3aXRoIGEge3JlZjpuZXdDaGlsZH0gbWFwIGluc3RlYWQgb2YgYSBwb3NpdGlvbmFsIGFycmF5XCIsICgpLT5cblx0XHRcdHRlbXBsYXRlTWFpbiA9IFxuXHRcdFx0XHREb20udGVtcGxhdGUgWydkaXYnLCB7aWQ6J2RpdkEnfSxcblx0XHRcdFx0XHRbJ2RpdicsIHtpZDonY2hpbGRBJ30sXG5cdFx0XHRcdFx0XHRbJ3NwYW4nLCB7cmVmOidjaGlsZEFfMSd9XVxuXHRcdFx0XHRcdFx0WydkaXYnLCB7cmVmOidjaGlsZEFfMicsIGlkOidjaGlsZEFfMid9XVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XHRbJ2RpdicsIG51bGwsIFxuXHRcdFx0XHRcdFx0WydzcGFuJywge3JlZjonY2hpbGRCXzEnfV1cblx0XHRcdFx0XHRcdFsndGV4dCcsIHtpZDonY2hpbGRCXzInLCB0ZXh0OidUaGUgVGV4dCd9XVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XVxuXHRcdFx0dGVtcGxhdGVDb3B5ID0gdGVtcGxhdGVNYWluLmV4dGVuZCBbJ3NlY3Rpb24nLCBudWxsLCBcblx0XHRcdFx0Y2hpbGRBOlxuXHRcdFx0XHRcdHR5cGU6ICdmb3JtJ1xuXHRcdFx0XHRcdG9wdGlvbnM6XG5cdFx0XHRcdFx0XHRzdHlsZTogZGlzcGxheTogJ2lubGluZS1ibG9jaydcblx0XHRcdFx0Y2hpbGRBXzI6XG5cdFx0XHRcdFx0WydhJywge2lkOidDSElMRGFfMicsIGhyZWY6J2h0dHA6Ly9nb29nbGUuY29tJ30sXG5cdFx0XHRcdFx0XHRbJ3RleHQnLCB7cmVmOidjaGlsZEFfMl8xJywgdGV4dDonTmV3IFRleHQnfV1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdGNoaWxkQzpcblx0XHRcdFx0XHRbJ2RpdicsIHJlZjonY2hpbGREJ11cblx0XHRcdF0sIHt2YWx1ZTondGhlVmFsdWUnfVxuXHRcdFx0XG5cdFx0XHR0ZW1wbGF0ZUNvcHkyID0gdGVtcGxhdGVNYWluLmV4dGVuZCBjaGlsZHJlbjpcblx0XHRcdFx0Y2hpbGRBOlxuXHRcdFx0XHRcdGNoaWxkcmVuOiBuZXdDaGlsZDogWydkaXYnXVxuXHRcdFx0XHRjaGlsZEFfMjpcblx0XHRcdFx0XHRbJ2EnLCB7aWQ6J0NISUxEYV8yJywgaHJlZjonaHR0cDovL2dvb2dsZS5jb20nfSxcblx0XHRcdFx0XHRcdFsndGV4dCcsIHtyZWY6J2NoaWxkQV8yXzEnLCB0ZXh0OidOZXcgVGV4dCd9XVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0Y2hpbGRDOlxuXHRcdFx0XHRcdFsnZGl2JywgcmVmOidjaGlsZEQnXVxuXG5cdFx0XHRleHBlY3QodHlwZW9mIHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEFfMl8xKS5ub3QudG8uZXF1YWwgJ3VuZGVmaW5lZCdcblx0XHRcdGV4cGVjdChPYmplY3Qua2V5cyh0ZW1wbGF0ZU1haW4uY2hpbGQpLmxlbmd0aCkudG8uZXF1YWwoNilcblx0XHRcdGV4cGVjdChPYmplY3Qua2V5cyh0ZW1wbGF0ZUNvcHkuY2hpbGQpLmxlbmd0aCkudG8uZXF1YWwoOClcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgzKVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5kaXZBKS50by5lcXVhbCB0ZW1wbGF0ZUNvcHlcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuY2hpbGRBKS50by5lcXVhbCB0ZW1wbGF0ZUNvcHkuY2hpbGRyZW5bMF1cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuY2hpbGRBLnR5cGUpLnRvLmVxdWFsICdmb3JtJ1xuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEFfMSkudG8uZXF1YWwgdGVtcGxhdGVDb3B5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkQV8yKS50by5lcXVhbCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuQ0hJTERhXzIpLnRvLmVxdWFsIHRlbXBsYXRlQ29weS5jaGlsZHJlblswXS5jaGlsZHJlblsxXVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEFfMl8xKS50by5lcXVhbCB0ZW1wbGF0ZUNvcHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF1cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuY2hpbGRBXzJfMS5vcHRpb25zLnRleHQpLnRvLmVxdWFsICdOZXcgVGV4dCdcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuY2hpbGRCXzEpLnRvLmVxdWFsIHRlbXBsYXRlQ29weS5jaGlsZHJlblsxXS5jaGlsZHJlblswXVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEJfMikudG8uZXF1YWwgdGVtcGxhdGVDb3B5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkQykudG8uZXF1YWwgdW5kZWZpbmVkXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkRCkudG8uZXF1YWwgdGVtcGxhdGVDb3B5LmNoaWxkcmVuWzJdXG5cblx0XHRcdHJlbmRlcmVkID0gdGVtcGxhdGVDb3B5LnNwYXduKClcblx0XHRcdGV4cGVjdChPYmplY3Qua2V5cyhyZW5kZXJlZC5jaGlsZCkubGVuZ3RoKS50by5lcXVhbCg4KVxuXHRcdFx0ZXhwZWN0KHJlbmRlcmVkLmNoaWxkLmNoaWxkQl8yKS50by5lcXVhbCByZW5kZXJlZC5jaGlsZHJlblsxXS5jaGlsZHJlblsxXVxuXHRcdFx0ZXhwZWN0KHJlbmRlcmVkLmNoaWxkLmNoaWxkQS5yYXcuc3R5bGUuZGlzcGxheSkudG8uZXF1YWwgJ2lubGluZS1ibG9jaydcblx0XHRcdGV4cGVjdChyZW5kZXJlZC5jaGlsZC5DSElMRGFfMi5wcm9wKCdocmVmJykpLnRvLmNvbnRhaW4gJ2h0dHA6Ly9nb29nbGUuY29tJ1xuXHRcdFx0ZXhwZWN0KHJlbmRlcmVkLmNoaWxkLmNoaWxkQl8xLnByb3AoJ3ZhbHVlJykpLnRvLmVxdWFsKCd0aGVWYWx1ZScpXG5cdFx0XHRleHBlY3QocmVuZGVyZWQuY2hpbGQuY2hpbGRELmF0dHIoJ2RhdGEtcmVmJykpLnRvLmVxdWFsKCdjaGlsZEQnKVxuXG5cblx0XHR0ZXN0IFwiVGVtcGxhdGVzIGNhbiBiZSBwYXNzZWQgYXMgcmVwbGFjZW1lbnQvbmV3IGNoaWxkcmVuIGluIHtyZWY6bmV3Q2hpbGR9IGV4dGVuc2lvbiBtYXBzXCIsICgpLT5cblx0XHRcdGNoaWxkQSA9IERvbS50ZW1wbGF0ZShcblx0XHRcdFx0WydkaXYnLCB7aWQ6J2NoaWxkQSd9LFxuXHRcdFx0XHRcdFsnc3BhbicsIHtyZWY6J2NoaWxkQV8xJ31dXG5cdFx0XHRcdFx0WydkaXYnLCB7cmVmOidjaGlsZEFfMicsIGlkOidjaGlsZEFfMid9XVxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0XHRjaGlsZEIgPSBEb20udGVtcGxhdGUoXG5cdFx0XHRcdFsnZGl2JywgcmVmOidjaGlsZEInLCBcblx0XHRcdFx0XHRbJ3NwYW4nLCB7cmVmOidjaGlsZEJfMSd9XVxuXHRcdFx0XHRcdFsndGV4dCcsIHtpZDonY2hpbGRCXzInLCB0ZXh0OidUaGUgVGV4dCd9XVxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0XHRjaGlsZEMgPSBEb20udGVtcGxhdGUoXG5cdFx0XHRcdFsnZGl2Jywge2lkOidjaGlsZEMnfSwgXG5cdFx0XHRcdFx0WydzcGFuJywge3JlZjonY2hpbGRDXzEnfV1cblx0XHRcdFx0XHRbJ3RleHQnLCB7aWQ6J2NoaWxkQ18yJywgdGV4dDonVGhlIFRleHQnfV1cblx0XHRcdFx0XVxuXHRcdFx0KVxuXHRcdFx0dGVtcGxhdGVNYWluID0gXG5cdFx0XHRcdERvbS50ZW1wbGF0ZSBbJ2RpdicsIHtpZDonZGl2QSd9LFxuXHRcdFx0XHRcdGNoaWxkQSxcblx0XHRcdFx0XHRjaGlsZEJcblx0XHRcdFx0XVxuXHRcdFx0dGVtcGxhdGVDb3B5ID0gdGVtcGxhdGVNYWluLmV4dGVuZCBbJ3NlY3Rpb24nLCBudWxsLCBcblx0XHRcdFx0Y2hpbGRBOiB0eXBlOiAnZm9ybSdcblx0XHRcdFx0Y2hpbGRCOiBjaGlsZEIuZXh0ZW5kKHJlZjonQ2hpbGRCJylcblx0XHRcdFx0Y2hpbGRDOiBjaGlsZEMuZXh0ZW5kKHJlZjonQ2hpbGRDJylcblx0XHRcdF0sIHt2YWx1ZTondGhlVmFsdWUnfVxuXG5cdFx0XHRleHBlY3QoT2JqZWN0LmtleXModGVtcGxhdGVNYWluLmNoaWxkKS5sZW5ndGgpLnRvLmVxdWFsKDcpXG5cdFx0XHRleHBlY3QoT2JqZWN0LmtleXModGVtcGxhdGVDb3B5LmNoaWxkKS5sZW5ndGgpLnRvLmVxdWFsKDEwKVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlTWFpbi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMylcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuZGl2QSkudG8uZXF1YWwgdGVtcGxhdGVDb3B5XG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkQSkudG8uZXF1YWwgdGVtcGxhdGVDb3B5LmNoaWxkcmVuWzBdXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkQS50eXBlKS50by5lcXVhbCAnZm9ybSdcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuY2hpbGRBLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuQ2hpbGRCKS50by5lcXVhbCB0ZW1wbGF0ZUNvcHkuY2hpbGRyZW5bMV1cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuY2hpbGRCXzEpLnRvLmVxdWFsIHRlbXBsYXRlQ29weS5jaGlsZHJlblsxXS5jaGlsZHJlblswXVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEJfMikudG8uZXF1YWwgdGVtcGxhdGVDb3B5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdXG5cdFx0XHRleHBlY3QodGVtcGxhdGVNYWluLmNoaWxkLmNoaWxkQykudG8uZXF1YWwgdW5kZWZpbmVkXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkQykudG8uZXF1YWwgdW5kZWZpbmVkXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLkNoaWxkQykudG8uZXF1YWwgdGVtcGxhdGVDb3B5LmNoaWxkcmVuWzJdXG5cdFx0XHRleHBlY3QoT2JqZWN0LmtleXModGVtcGxhdGVNYWluLnNwYXduKCkuY2hpbGQpLmxlbmd0aCkudG8uZXF1YWwoNylcblx0XHRcdGV4cGVjdChPYmplY3Qua2V5cyh0ZW1wbGF0ZUNvcHkuc3Bhd24oKS5jaGlsZCkubGVuZ3RoKS50by5lcXVhbCgxMClcblxuXG5cdFx0dGVzdCBcIk51bGwgdmFsdWVzIGluIHJlZi1jaGlsZHJlbiBtYXAgd2lsbCByZW1vdmUgdGhlIGNoaWxkIGZyb20gdGhlIHRlbXBsYXRlXCIsICgpLT5cblx0XHRcdHRlbXBsYXRlTWFpbiA9IFxuXHRcdFx0XHREb20udGVtcGxhdGUgWydkaXYnLCB7aWQ6J2RpdkEnfSxcblx0XHRcdFx0XHRbJ2RpdicsIHtpZDonY2hpbGRBJ30sXG5cdFx0XHRcdFx0XHRbJ3NwYW4nLCB7cmVmOidjaGlsZEFfMSd9XVxuXHRcdFx0XHRcdFx0WydkaXYnLCB7cmVmOidjaGlsZEFfMicsIGlkOidjaGlsZEFfMid9XVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XHRbJ2RpdicsIHtyZWY6J2NoaWxkQid9LCBcblx0XHRcdFx0XHRcdFsnc3BhbicsIHtyZWY6J2NoaWxkQl8xJ31dXG5cdFx0XHRcdFx0XHRbJ3RleHQnLCB7aWQ6J2NoaWxkQl8yJywgdGV4dDonVGhlIFRleHQnfV1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0WydkaXYnLCB7aWQ6J2NoaWxkQyd9LCBcblx0XHRcdFx0XHRcdFsnc3BhbicsIHtyZWY6J2NoaWxkQ18xJ31dXG5cdFx0XHRcdFx0XHRbJ3RleHQnLCB7aWQ6J2NoaWxkQ18yJywgdGV4dDonVGhlIFRleHQnfV1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdF1cblx0XHRcdHRlbXBsYXRlQ29weSA9IHRlbXBsYXRlTWFpbi5leHRlbmQgWydzZWN0aW9uJywgbnVsbCwgXG5cdFx0XHRcdGNoaWxkQTpcblx0XHRcdFx0XHR0eXBlOiAnZm9ybSdcblx0XHRcdFx0XHRvcHRpb25zOlxuXHRcdFx0XHRcdFx0c3R5bGU6IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG5cblx0XHRcdFx0Y2hpbGRBXzE6IG51bGxcblx0XHRcdFx0Y2hpbGRBXzI6XG5cdFx0XHRcdFx0WydhJywge2lkOidDSElMRGFfMicsIGhyZWY6J2h0dHA6Ly9nb29nbGUuY29tJ30sXG5cdFx0XHRcdFx0XHRbJ3RleHQnLCB7cmVmOidjaGlsZEFfMl8xJywgdGV4dDonTmV3IFRleHQnfV1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdGNoaWxkQl8xOiBudWxsXG5cdFx0XHRcdGNoaWxkQzogbnVsbFxuXHRcdFx0XVxuXG5cdFx0XHRleHBlY3QodHlwZW9mIHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEFfMl8xKS5ub3QudG8uZXF1YWwgJ3VuZGVmaW5lZCdcblx0XHRcdGV4cGVjdChPYmplY3Qua2V5cyh0ZW1wbGF0ZU1haW4uY2hpbGQpLmxlbmd0aCkudG8uZXF1YWwoMTApXG5cdFx0XHRleHBlY3QoT2JqZWN0LmtleXModGVtcGxhdGVDb3B5LmNoaWxkKS5sZW5ndGgpLnRvLmVxdWFsKDYpXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuZGl2QSkudG8uZXF1YWwgdGVtcGxhdGVDb3B5XG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkQSkudG8uZXF1YWwgdGVtcGxhdGVDb3B5LmNoaWxkcmVuWzBdXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkQS50eXBlKS50by5lcXVhbCAnZm9ybSdcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuY2hpbGRBLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZU1haW4uY2hpbGQuY2hpbGRBXzEpLnRvLmVxdWFsIHRlbXBsYXRlTWFpbi5jaGlsZC5jaGlsZEFfMVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEFfMSkudG8uZXF1YWwgdW5kZWZpbmVkXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkQV8yKS50by5lcXVhbCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuQ0hJTERhXzIpLnRvLmVxdWFsIHRlbXBsYXRlQ29weS5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEFfMl8xKS50by5lcXVhbCB0ZW1wbGF0ZUNvcHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF1cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuY2hpbGRBXzJfMS5vcHRpb25zLnRleHQpLnRvLmVxdWFsICdOZXcgVGV4dCdcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuY2hpbGRCXzEpLnRvLmVxdWFsIHVuZGVmaW5lZFxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEJfMikudG8uZXF1YWwgdGVtcGxhdGVDb3B5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdXG5cdFx0XHRleHBlY3QodGVtcGxhdGVNYWluLmNoaWxkLmNoaWxkQl8xKS50by5lcXVhbCB0ZW1wbGF0ZU1haW4uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF1cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZU1haW4uY2hpbGQuY2hpbGRCXzIpLnRvLmVxdWFsIHRlbXBsYXRlTWFpbi5jaGlsZHJlblsxXS5jaGlsZHJlblsxXVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlTWFpbi5jaGlsZC5jaGlsZEMpLnRvLmVxdWFsIHRlbXBsYXRlTWFpbi5jaGlsZHJlblsyXVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEMpLnRvLmVxdWFsIHVuZGVmaW5lZFxuXG5cblx0XHR0ZXN0IFwiV2hlbiBzcGF3bmluZyBlbGVtZW50cyB0aGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvIHRoZSBzcGF3bnMgc2hvdWxkIGJlIGEgY2xvbmUgb2YgdGhlIHRlbXBsYXRlJ3Mgb3B0aW9uc1wiLCAoKS0+XG5cdFx0XHR0ZW1wbGF0ZUEgPSBEb20udGVtcGxhdGUgWydkaXYnLCBzdHlsZTp7ZGlzcGxheTonYmxvY2snfV1cblx0XHRcdHRlbXBsYXRlQiA9IERvbS50ZW1wbGF0ZSBbJ2RpdicsIHN0eWxlOntkaXNwbGF5OidibG9jayd9XVxuXHRcdFx0c3Bhd25BID0gdGVtcGxhdGVBLnNwYXduKHJlZjonYScpICMgUGFzc2VkIG9wdGlvbnMgdG8gbWVyZ2Ugd2l0aCBvcmlnXG5cdFx0XHRzcGF3bkIgPSB0ZW1wbGF0ZUEuc3Bhd24oKVxuXG5cdFx0XHRleHBlY3Qoc3Bhd25BLm9wdGlvbnMpLm5vdC50by5lcXVhbCh0ZW1wbGF0ZUEub3B0aW9ucylcblx0XHRcdGV4cGVjdChzcGF3bkEub3B0aW9ucy5zdHlsZSkubm90LnRvLmVxdWFsKHRlbXBsYXRlQS5vcHRpb25zLnN0eWxlKVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQS5vcHRpb25zLnN0eWxlLiRiYXNlKS50by5lcXVhbCh1bmRlZmluZWQpXG5cblx0XHRcdGV4cGVjdChzcGF3bkIub3B0aW9ucykubm90LnRvLmVxdWFsKHRlbXBsYXRlQi5vcHRpb25zKVxuXHRcdFx0ZXhwZWN0KHNwYXduQi5vcHRpb25zLnN0eWxlKS5ub3QudG8uZXF1YWwodGVtcGxhdGVCLm9wdGlvbnMuc3R5bGUpXG5cdFx0XHRleHBlY3QodGVtcGxhdGVCLm9wdGlvbnMuc3R5bGUuJGJhc2UpLnRvLmVxdWFsKHVuZGVmaW5lZClcblxuXG5cdFx0c3VpdGUgXCJEYXRhIGNvbXB1dGVyc1wiLCAoKS0+XG5cdFx0XHR0ZXN0IFwiVGVtcGxhdGVzIGFjY2VwdCBvcHRpb25zLmNvbXB1dGVycyBmbiBtYXAgd2hpY2ggd2lsbCBiZSBpbnZva2VkIHdpdGggcHJvdmlkZWQgb3B0aW9ucy5kYXRhIHVwb24gc3Bhd25pbmdcIiwgKCktPlxuXHRcdFx0XHRyZWNlaXZlZERhdGEgPSBudWxsXG5cdFx0XHRcdHRlbXBsYXRlID0gRG9tLnRlbXBsYXRlKFxuXHRcdFx0XHRcdFsnZGl2J1xuXHRcdFx0XHRcdFx0Y29tcHV0ZXJzOiAnc29tZUxhYmVsJzogKGRhdGEpLT4gcmVjZWl2ZWREYXRhID0gZGF0YSBvciAnbm90aGluZydcblx0XHRcdFx0XHRdXG5cdFx0XHRcdClcblxuXHRcdFx0XHRleHBlY3QocmVjZWl2ZWREYXRhKS50by5lcXVhbChudWxsKVxuXHRcdFx0XHR0ZW1wbGF0ZS5zcGF3bigpXG5cdFx0XHRcdGV4cGVjdChyZWNlaXZlZERhdGEpLnRvLmVxdWFsKG51bGwpXG5cdFx0XHRcdFxuXHRcdFx0XHR0ZW1wbGF0ZS5zcGF3bih7ZGF0YTonc29tZUxhYmVsJzond29ya3MnfSlcblx0XHRcdFx0ZXhwZWN0KHJlY2VpdmVkRGF0YSkudG8uZXF1YWwoJ3dvcmtzJylcblxuXG5cdFx0XHR0ZXN0IFwiQ29tcHV0ZXJzIHdpbGwgYmUgaGF2ZSB0aGUgc3Bhd25lZCBRdWlja0VsZW1lbnQgaW5zdGFuY2UgYXMgdGhlaXIgY29udGV4dFwiLCAoKS0+XG5cdFx0XHRcdGNvbnRleHQgPSBudWxsXG5cdFx0XHRcdHRlbXBsYXRlID0gRG9tLnRlbXBsYXRlKFxuXHRcdFx0XHRcdFsnZGl2J1xuXHRcdFx0XHRcdFx0Y29tcHV0ZXJzOiAnc29tZUxhYmVsJzogKGRhdGEpLT4gY29udGV4dCA9IHRoaXNcblx0XHRcdFx0XHRdXG5cdFx0XHRcdClcblxuXHRcdFx0XHRleHBlY3QoY29udGV4dCkudG8uZXF1YWwobnVsbClcblx0XHRcdFx0dGVtcGxhdGUuc3Bhd24oKVxuXHRcdFx0XHRleHBlY3QoY29udGV4dCkudG8uZXF1YWwobnVsbClcblx0XHRcdFx0XG5cdFx0XHRcdGluc3RhbmNlID0gdGVtcGxhdGUuc3Bhd24oe2RhdGE6J3NvbWVMYWJlbCc6dW5kZWZpbmVkfSlcblx0XHRcdFx0ZXhwZWN0KGNvbnRleHQpLnRvLmVxdWFsKGluc3RhbmNlKVxuXG5cblx0XHRcdHRlc3QgXCJWYWx1ZXMgc3BlY2lmaWVkIGluIG9wdGlvbnMuZGVmYXVsdHMgd2lsbCBiZSB1c2VkIGlmIG5vdCBzcGVjaWZpZWQgaW4gb3B0aW9ucy5kYXRhIHVwb24gc3Bhd25pbmdcIiwgKCktPlxuXHRcdFx0XHRyZXN1bHRzID0ge31cblx0XHRcdFx0dGVtcGxhdGUgPSBEb20udGVtcGxhdGUoXG5cdFx0XHRcdFx0WydkaXYnXG5cdFx0XHRcdFx0XHRjb21wdXRlcnM6XG5cdFx0XHRcdFx0XHRcdCdmaXJzdCc6IChkYXRhKS0+IHJlc3VsdHMuZmlyc3QgPSBkYXRhLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdFx0J3NlY29uZCc6IChkYXRhKS0+IHJlc3VsdHMuc2Vjb25kID0gZGF0YS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0XHRcdCd0aGlyZCc6IChkYXRhKS0+IHJlc3VsdHMudGhpcmQgPSBkYXRhLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdGRlZmF1bHRzOlxuXHRcdFx0XHRcdFx0XHQnZmlyc3QnOiAnZmlyc3RWYWx1ZSBoZXJlJ1xuXHRcdFx0XHRcdFx0XHQndGhpcmQnOiAndGhpcmRWYWx1ZSBoZXJlJ1xuXHRcdFx0XHRcdF1cblx0XHRcdFx0KVxuXHRcdFx0XHRleHBlY3QocmVzdWx0cykudG8uZGVlcC5lcXVhbCh7fSlcblx0XHRcdFx0dGVtcGxhdGUuc3Bhd24oKVxuXHRcdFx0XHRleHBlY3QocmVzdWx0cykudG8uZGVlcC5lcXVhbCh7Zmlyc3Q6J2ZpcnN0dmFsdWUgaGVyZScsIHRoaXJkOid0aGlyZHZhbHVlIGhlcmUnfSlcblx0XHRcdFx0XG5cdFx0XHRcdGluc3RhbmNlID0gdGVtcGxhdGUuc3Bhd24oe2RhdGE6J3RoaXJkJzonY3VzdG9tdmFsdWUgaGVyZSd9KVxuXHRcdFx0XHRleHBlY3QocmVzdWx0cykudG8uZGVlcC5lcXVhbCh7Zmlyc3Q6J2ZpcnN0dmFsdWUgaGVyZScsIHRoaXJkOidjdXN0b212YWx1ZSBoZXJlJ30pXG5cblxuXHRcdFx0dGVzdCBcIlZhbHVlcyBjYW4gYmUgb2YgYW55IHR5cGVcIiwgKCktPlxuXHRcdFx0XHRyZXN1bHRzID0ge31cblx0XHRcdFx0dGVtcGxhdGUgPSBEb20udGVtcGxhdGUoXG5cdFx0XHRcdFx0WydkaXYnXG5cdFx0XHRcdFx0XHRjb21wdXRlcnM6XG5cdFx0XHRcdFx0XHRcdCdmaXJzdCc6IChkYXRhKS0+IHJlc3VsdHMuZmlyc3QgPSBkYXRhXG5cdFx0XHRcdFx0XHRcdCdzZWNvbmQnOiAoZGF0YSktPiByZXN1bHRzLnNlY29uZCA9IGRhdGFcblx0XHRcdFx0XHRcdFx0J3RoaXJkJzogKGRhdGEpLT4gcmVzdWx0cy50aGlyZCA9IGRhdGFcblx0XHRcdFx0XHRcdFx0J2ZvdXJ0aCc6IChkYXRhKS0+IHJlc3VsdHMuZm91cnRoID0gZGF0YVxuXHRcdFx0XHRcdFx0XHQnZmlmdGgnOiAoZGF0YSktPiByZXN1bHRzLmZpZnRoID0gZGF0YVxuXHRcdFx0XHRcdFx0XHQnc2l4dGgnOiAoZGF0YSktPiByZXN1bHRzLnNpeHRoID0gZGF0YVxuXHRcdFx0XHRcdFx0ZGVmYXVsdHM6XG5cdFx0XHRcdFx0XHRcdCdmaXJzdCc6IFsnYWJjJywgJzEyMyddXG5cdFx0XHRcdFx0XHRcdCd0aGlyZCc6IHthOjEsIGI6MTJ9XG5cdFx0XHRcdFx0XHRcdCdzaXh0aCc6IDk5OVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0KVxuXG5cdFx0XHRcdFxuXHRcdFx0XHRpbnN0YW5jZSA9IHRlbXBsYXRlLnNwYXduKGRhdGE6XG5cdFx0XHRcdFx0J3NlY29uZCc6IG51bGxcblx0XHRcdFx0XHQnZm91cnRoJzogMTlcblx0XHRcdFx0XHQnZmlmdGgnOiBmYWxzZVxuXHRcdFx0XHRcdCdzaXh0aCc6IHVuZGVmaW5lZFxuXHRcdFx0XHQpXG5cdFx0XHRcdGV4cGVjdChyZXN1bHRzKS50by5kZWVwLmVxdWFsXG5cdFx0XHRcdFx0Zmlyc3Q6IFsnYWJjJywgJzEyMyddXG5cdFx0XHRcdFx0c2Vjb25kOiBudWxsXG5cdFx0XHRcdFx0dGhpcmQ6IHthOjEsIGI6MTJ9XG5cdFx0XHRcdFx0Zm91cnRoOiAxOVxuXHRcdFx0XHRcdGZpZnRoOiBmYWxzZVxuXHRcdFx0XHRcdHNpeHRoOiB1bmRlZmluZWRcblxuXHRcdFx0XHRleHBlY3QoT2JqZWN0LmtleXMocmVzdWx0cykubGVuZ3RoKS50by5lcXVhbCg2KVxuXG5cblx0XHRcdHRlc3QgXCJWYWx1ZXMgaW4gb3B0aW9ucy5kYXRhIHRoYXQgZG8gbm90IGhhdmUgYSBtYXRjaGluZyBjb21wdXRlciB3aWxsIGJlIHNraXBwZWRcIiwgKCktPlxuXHRcdFx0XHRyZXN1bHRzID0ge31cblx0XHRcdFx0dGVtcGxhdGUgPSBEb20udGVtcGxhdGUoXG5cdFx0XHRcdFx0WydkaXYnXG5cdFx0XHRcdFx0XHRjb21wdXRlcnM6XG5cdFx0XHRcdFx0XHRcdCdmaXJzdCc6IChkYXRhKS0+IHJlc3VsdHMuZmlyc3QgPSBkYXRhXG5cdFx0XHRcdFx0XHRcdCdzZWNvbmQnOiAoZGF0YSktPiByZXN1bHRzLnNlY29uZCA9IGRhdGFcblx0XHRcdFx0XHRcdFx0J3RoaXJkJzogKGRhdGEpLT4gcmVzdWx0cy50aGlyZCA9IGRhdGFcblx0XHRcdFx0XHRdXG5cdFx0XHRcdClcblxuXHRcdFx0XHRcblx0XHRcdFx0aW5zdGFuY2UgPSB0ZW1wbGF0ZS5zcGF3bihkYXRhOlxuXHRcdFx0XHRcdCdmaXJzdCc6ICdmaXJzdCB2YWx1ZSdcblx0XHRcdFx0XHQnc2Vjb25kJzogJ3NlY29uZCB2YWx1ZSdcblx0XHRcdFx0XHQndGhpcmQnOiAndGhpcmQgdmFsdWUnXG5cdFx0XHRcdFx0J2ZvdXJ0aCc6ICdmb3VydGggdmFsdWUnXG5cdFx0XHRcdClcblx0XHRcdFx0ZXhwZWN0KHJlc3VsdHMpLnRvLmRlZXAuZXF1YWxcblx0XHRcdFx0XHQnZmlyc3QnOiAnZmlyc3QgdmFsdWUnXG5cdFx0XHRcdFx0J3NlY29uZCc6ICdzZWNvbmQgdmFsdWUnXG5cdFx0XHRcdFx0J3RoaXJkJzogJ3RoaXJkIHZhbHVlJ1xuXG5cdFx0XHRcdGV4cGVjdChPYmplY3Qua2V5cyhyZXN1bHRzKS5sZW5ndGgpLnRvLmVxdWFsKDMpXG5cblxuXHRcdFx0dGVzdCBcIkNvbXB1dGVycyBpbiB0ZW1wbGF0ZSBjaGlsZHJlbiB3aWxsIHJlY2VpdmUgdGhlIHBhcmVudCdzIG9wdGlvbnMuZGF0YVwiLCAoKS0+XG5cdFx0XHRcdHJlc3VsdHMgPSBwYXJlbnQ6e30sIGNoaWxkQTp7fSwgY2hpbGRCOnt9LCBjaGlsZEM6e31cblx0XHRcdFx0dGVtcGxhdGUgPSBEb20udGVtcGxhdGUoXG5cdFx0XHRcdFx0WydkaXYnXG5cdFx0XHRcdFx0XHRjb21wdXRlcnM6XG5cdFx0XHRcdFx0XHRcdCdmaXJzdCc6IChkYXRhKS0+IHJlc3VsdHMucGFyZW50LmZpcnN0ID0gZGF0YVxuXHRcdFx0XHRcdFx0XHQnc2Vjb25kJzogKGRhdGEpLT4gcmVzdWx0cy5wYXJlbnQuc2Vjb25kID0gZGF0YVxuXHRcdFx0XHRcdFx0XHQndGhpcmQnOiAoZGF0YSktPiByZXN1bHRzLnBhcmVudC50aGlyZCA9IGRhdGFcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0WydkaXYnXG5cdFx0XHRcdFx0XHRcdGNvbXB1dGVyczpcblx0XHRcdFx0XHRcdFx0XHQnZmlyc3QnOiAoZGF0YSktPiByZXN1bHRzLmNoaWxkQS5maXJzdCA9IGRhdGFcblx0XHRcdFx0XHRcdFx0XHQnc2Vjb25kJzogKGRhdGEpLT4gcmVzdWx0cy5jaGlsZEEuc2Vjb25kID0gZGF0YVxuXHRcdFx0XHRcdFx0XHRcdCd0aGlyZCc6IChkYXRhKS0+IHJlc3VsdHMuY2hpbGRBLnRoaXJkID0gZGF0YVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0WydkaXYnLCBudWxsLFxuXHRcdFx0XHRcdFx0XHRbJ2Rpdidcblx0XHRcdFx0XHRcdFx0XHRjb21wdXRlcnM6XG5cdFx0XHRcdFx0XHRcdFx0XHQnZmlyc3QnOiAoZGF0YSktPiByZXN1bHRzLmNoaWxkQi5maXJzdCA9IGRhdGFcblx0XHRcdFx0XHRcdFx0XHRcdCdmb3VydGgnOiAoZGF0YSktPiByZXN1bHRzLmNoaWxkQi5mb3VydGggPSBkYXRhXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0WydkaXYnXG5cdFx0XHRcdFx0XHRcdFx0Y29tcHV0ZXJzOlxuXHRcdFx0XHRcdFx0XHRcdFx0J2ZpcnN0JzogKGRhdGEpLT4gcmVzdWx0cy5jaGlsZEMuZmlyc3QgPSBkYXRhXG5cdFx0XHRcdFx0XHRcdFx0XHQnc2l4dGgnOiAoZGF0YSktPiByZXN1bHRzLmNoaWxkQy5zaXh0aCA9IGRhdGFcblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0KVxuXG5cdFx0XHRcdFxuXHRcdFx0XHRpbnN0YW5jZSA9IHRlbXBsYXRlLnNwYXduKGRhdGE6XG5cdFx0XHRcdFx0J2ZpcnN0JzogJ2ZpcnN0IHZhbHVlJ1xuXHRcdFx0XHRcdCdzZWNvbmQnOiAnc2Vjb25kIHZhbHVlJ1xuXHRcdFx0XHRcdCd0aGlyZCc6ICd0aGlyZCB2YWx1ZSdcblx0XHRcdFx0XHQnZm91cnRoJzogJ2ZvdXJ0aCB2YWx1ZSdcblx0XHRcdFx0KVxuXHRcdFx0XHRleHBlY3QocmVzdWx0cy5wYXJlbnQpLnRvLmRlZXAuZXF1YWxcblx0XHRcdFx0XHQnZmlyc3QnOiAnZmlyc3QgdmFsdWUnXG5cdFx0XHRcdFx0J3NlY29uZCc6ICdzZWNvbmQgdmFsdWUnXG5cdFx0XHRcdFx0J3RoaXJkJzogJ3RoaXJkIHZhbHVlJ1xuXHRcdFx0XHRcblx0XHRcdFx0ZXhwZWN0KHJlc3VsdHMuY2hpbGRBKS50by5kZWVwLmVxdWFsXG5cdFx0XHRcdFx0J2ZpcnN0JzogJ2ZpcnN0IHZhbHVlJ1xuXHRcdFx0XHRcdCdzZWNvbmQnOiAnc2Vjb25kIHZhbHVlJ1xuXHRcdFx0XHRcdCd0aGlyZCc6ICd0aGlyZCB2YWx1ZSdcblx0XHRcdFx0XG5cdFx0XHRcdGV4cGVjdChyZXN1bHRzLmNoaWxkQikudG8uZGVlcC5lcXVhbFxuXHRcdFx0XHRcdCdmaXJzdCc6ICdmaXJzdCB2YWx1ZSdcblx0XHRcdFx0XHQnZm91cnRoJzogJ2ZvdXJ0aCB2YWx1ZSdcblx0XHRcdFx0XG5cdFx0XHRcdGV4cGVjdChyZXN1bHRzLmNoaWxkQykudG8uZGVlcC5lcXVhbFxuXHRcdFx0XHRcdCdmaXJzdCc6ICdmaXJzdCB2YWx1ZSdcblxuXG5cdFx0XHR0ZXN0IFwiUGFyZW50IGRlZmF1bHRzIHdpbGwgbm90IGJlIHBhc3NlZCB0byBjaGlsZHJlblwiLCAoKS0+XG5cdFx0XHRcdHJlc3VsdHMgPSBwYXJlbnQ6e30sIGNoaWxkOnt9XG5cdFx0XHRcdHRlbXBsYXRlID0gRG9tLnRlbXBsYXRlKFxuXHRcdFx0XHRcdFsnZGl2J1xuXHRcdFx0XHRcdFx0Y29tcHV0ZXJzOlxuXHRcdFx0XHRcdFx0XHQnZmlyc3QnOiAoZGF0YSktPiByZXN1bHRzLnBhcmVudC5maXJzdCA9IGRhdGFcblx0XHRcdFx0XHRcdFx0J3NlY29uZCc6IChkYXRhKS0+IHJlc3VsdHMucGFyZW50LnNlY29uZCA9IGRhdGFcblx0XHRcdFx0XHRcdFx0J3RoaXJkJzogKGRhdGEpLT4gcmVzdWx0cy5wYXJlbnQudGhpcmQgPSBkYXRhXG5cdFx0XHRcdFx0XHRkZWZhdWx0czpcblx0XHRcdFx0XHRcdFx0J3NlY29uZCc6ICdzZWNvbmQgdmFsdWUnXG5cdFx0XHRcdFx0XHRcdCdmb3VydGgnOiAnZm91cnRoIHZhbHVlJ1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRbJ2Rpdidcblx0XHRcdFx0XHRcdFx0Y29tcHV0ZXJzOlxuXHRcdFx0XHRcdFx0XHRcdCdmaXJzdCc6IChkYXRhKS0+IHJlc3VsdHMuY2hpbGQuZmlyc3QgPSBkYXRhXG5cdFx0XHRcdFx0XHRcdFx0J3NlY29uZCc6IChkYXRhKS0+IHJlc3VsdHMuY2hpbGQuc2Vjb25kID0gZGF0YVxuXHRcdFx0XHRcdFx0XHRcdCd0aGlyZCc6IChkYXRhKS0+IHJlc3VsdHMuY2hpbGQudGhpcmQgPSBkYXRhXG5cdFx0XHRcdFx0XHRcdFx0J2ZvdXJ0aCc6IChkYXRhKS0+IHJlc3VsdHMuY2hpbGQuZm91cnRoID0gZGF0YVxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0czpcblx0XHRcdFx0XHRcdFx0XHQnZmlyc3QnOiAnZmlyc3QgdmFsdWUnXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHQpXG5cdFx0XHRcdFxuXHRcdFx0XHRpbnN0YW5jZSA9IHRlbXBsYXRlLnNwYXduKGRhdGE6XG5cdFx0XHRcdFx0J3RoaXJkJzogJ3RoaXJkIHZhbHVlJ1xuXHRcdFx0XHQpXG5cdFx0XHRcdGV4cGVjdChyZXN1bHRzLnBhcmVudCkudG8uZGVlcC5lcXVhbFxuXHRcdFx0XHRcdCdzZWNvbmQnOiAnc2Vjb25kIHZhbHVlJ1xuXHRcdFx0XHRcdCd0aGlyZCc6ICd0aGlyZCB2YWx1ZSdcblx0XHRcdFx0XG5cdFx0XHRcdGV4cGVjdChyZXN1bHRzLmNoaWxkKS50by5kZWVwLmVxdWFsXG5cdFx0XHRcdFx0J2ZpcnN0JzogJ2ZpcnN0IHZhbHVlJ1xuXHRcdFx0XHRcdCd0aGlyZCc6ICd0aGlyZCB2YWx1ZSdcblxuXG5cblxuXHRzdWl0ZSBcIk1pc2NcIiwgKCktPlxuXHRcdHRlc3QgXCJTdHJpbmdpZmljYXRpb25cIiwgKCktPlxuXHRcdFx0c2VjdGlvbiA9IERvbSBbJ3NlY3Rpb24nLHtcblx0XHRcdFx0XHRpZDogJ3RoZVNlY3Rpb24nXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAndGhlU2VjdGlvbkNsYXNzJ1xuXHRcdFx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcdFx0J3Bvc2l0aW9uJzogJ3JlbGF0aXZlJ1xuXHRcdFx0XHRcdFx0J29wYWNpdHknOiAwLjVcblx0XHRcdFx0XHRcdCdmb250U2l6ZSc6ICgpLT4gJzI5cHgnXG5cdFx0XHRcdFx0XHQkaGFwcHk6XG5cdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMTFweCdcblx0XHRcdFx0XHRcdFx0JHJlbGF4ZWQ6XG5cdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICc4cHgnXG5cdFx0XHRcdH1cblx0XHRcdFx0XHRbJ2RpdicsIHtpZDonY2hpbGRBJywgc3R5bGU6cG9zaXRpb246J3JlbGF0aXZlJ30sICdjaGlsZEEtaW5uZXJ0ZXh0J11cblx0XHRcdFx0XHQnc2VjdGlvbi1pbm5lcnRleHQnXG5cdFx0XHRcdFx0WydzcGFuJywge2lkOidjaGlsZEInLCByZWY6J2NoaWxkQi1yZWYhJywgc3R5bGU6cG9zaXRpb246J2Fic29sdXRlJ31cblx0XHRcdFx0XHRcdCdjaGlsZEItaW5uZXJ0ZXh0J1xuXHRcdFx0XHRcdFx0Wyd0ZXh0Jywge3RleHQ6J2NoaWxkQi1pbm5lcnRleHQgMid9XVxuXHRcdFx0XHRcdFx0WydhJywge3VybDonaHR0cHM6Ly9nb29nbGUuY29tJ31dXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHRdXG5cdFx0XHR3aW5kb3cuc3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShzZWN0aW9uLCBudWxsLCAyKVxuXHRcdFx0c2VjdGlvbkNvcHkgPSBEb20gSlNPTi5wYXJzZShzdHJpbmdpZmllZClcblxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LnR5cGUpLnRvLmVxdWFsKHNlY3Rpb24udHlwZSlcblx0XHRcdGV4cGVjdChzZWN0aW9uQ29weS5yZWYpLnRvLmVxdWFsKHNlY3Rpb24ucmVmKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LmVsLmlkKS50by5lcXVhbChzZWN0aW9uLmVsLmlkKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LmVsLmNsYXNzTmFtZSkudG8uZXF1YWwoc2VjdGlvbi5lbC5jbGFzc05hbWUpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbkNvcHkuZWwuc3R5bGUucG9zaXRpb24pLnRvLmVxdWFsKHNlY3Rpb24uZWwuc3R5bGUucG9zaXRpb24pXG5cdFx0XHRleHBlY3Qoc2VjdGlvbkNvcHkuZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoc2VjdGlvbi5lbC5zdHlsZS5vcGFjaXR5KVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LmVsLnN0eWxlLmZvbnRTaXplKS5ub3QudG8uZXF1YWwoc2VjdGlvbi5lbC5zdHlsZS5mb250U2l6ZSlcblx0XHRcdFxuXHRcdFx0c2VjdGlvbi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0c2VjdGlvbkNvcHkuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGV4cGVjdChzZWN0aW9uQ29weS5lbC5zdHlsZS5mb250U2l6ZSkudG8uZXF1YWwoc2VjdGlvbi5lbC5zdHlsZS5mb250U2l6ZSlcblx0XHRcdFxuXHRcdFx0c2VjdGlvbi5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRzZWN0aW9uQ29weS5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRleHBlY3Qoc2VjdGlvbkNvcHkuZWwuc3R5bGUuZm9udFNpemUpLnRvLmVxdWFsKHNlY3Rpb24uZWwuc3R5bGUuZm9udFNpemUpXG5cdFx0XHRcblx0XHRcdGV4cGVjdChzZWN0aW9uQ29weS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKHNlY3Rpb24uY2hpbGRyZW4ubGVuZ3RoKVxuXHRcdFx0ZXhwZWN0KE9iamVjdC5rZXlzKHNlY3Rpb25Db3B5LmNoaWxkKS5sZW5ndGgpLnRvLmVxdWFsKE9iamVjdC5rZXlzKHNlY3Rpb24uY2hpbGQpLmxlbmd0aClcblx0XHRcdGV4cGVjdChzZWN0aW9uQ29weS50ZXh0KS50by5lcXVhbChzZWN0aW9uLnRleHQpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbkNvcHkuaHRtbCkudG8uZXF1YWwoc2VjdGlvbi5odG1sKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LmNoaWxkcmVuWzBdLmVsLnN0eWxlLnBvc2l0aW9uKS50by5lcXVhbChzZWN0aW9uLmNoaWxkcmVuWzBdLmVsLnN0eWxlLnBvc2l0aW9uKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LmNoaWxkcmVuWzJdLmVsLnN0eWxlLnBvc2l0aW9uKS50by5lcXVhbChzZWN0aW9uLmNoaWxkcmVuWzJdLmVsLnN0eWxlLnBvc2l0aW9uKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LmNoaWxkcmVuWzJdLnJlZikudG8uZXF1YWwoc2VjdGlvbi5jaGlsZHJlblsyXS5yZWYpXG5cblxuXG5cblx0XHR0ZXN0IFwiQ2hhaW5pbmdcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cdFx0XHRjaGFpblJlc3VsdCA9IGRpdlxuXHRcdFx0XHQub24oJ2FiYycsICgpLT4pXG5cdFx0XHRcdC5lbWl0KCdhYmMnKVxuXHRcdFx0XHQub2ZmKCdhYmMnKVxuXHRcdFx0XHQub2ZmKClcblx0XHRcdFx0LnN0YXRlKCdhYmMnLCBvbilcblx0XHRcdFx0LnJlc2V0U3RhdGUoKVxuXHRcdFx0XHQuc3R5bGUoKVxuXHRcdFx0XHQuY3NzKCd3aWR0aCcsIDEyKVxuXHRcdFx0XHQuYXR0cigndGVzdCcsIDEyMylcblx0XHRcdFx0LnByb3AoJ2Fub3RoZXJUZXN0JywgMTIzKVxuXHRcdFx0XHQuYXBwZW5kKClcblx0XHRcdFx0LmFwcGVuZFRvKClcblx0XHRcdFx0LnByZXBlbmQoKVxuXHRcdFx0XHQucHJlcGVuZFRvKClcblx0XHRcdFx0LmJlZm9yZSgpXG5cdFx0XHRcdC5hZnRlcigpXG5cdFx0XHRcdC5pbnNlcnRCZWZvcmUoKVxuXHRcdFx0XHQuaW5zZXJ0QWZ0ZXIoKVxuXHRcdFx0XHQuZGV0YWNoKClcblx0XHRcdFx0LndyYXAoRG9tLnNlY3Rpb24oKSlcblx0XHRcdFx0LnVud3JhcCgpXG5cdFx0XHRcdC53cmFwKERvbS5oZWFkZXIoKSlcblx0XHRcdFx0LnJlcGxhY2UoKVxuXHRcdFx0XHQuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdFx0LndyYXAoaGVhZD1Eb20uaGVhZGVyKCkpXG5cblx0XHRcdGV4cGVjdChjaGFpblJlc3VsdCkudG8uZXF1YWwoZGl2KVxuXHRcdFx0ZXhwZWN0KHNhbmRib3guY2hpbGRyZW5bMF0pLnRvLmVxdWFsKGhlYWQuZWwpXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkudG8uZXF1YWwoaGVhZClcblx0XHRcdGV4cGVjdChkaXYuY3NzICd3aWR0aCcpLnRvLmVxdWFsKCcxMnB4JylcblxuXG5cblxuXHRcdHRlc3QgXCJJbnZhbGlkIEFyZ3VtZW50c1wiLCAoKS0+XG5cdFx0XHR0ZXh0ID0gRG9tLnRleHQoJ3NvbWVUZXh0Jywge2xvc3RPcHRzOnRydWV9KVxuXHRcdFx0ZGl2ID0gRG9tLmRpdih7bG9zdE9wdHM6dHJ1ZX0pXG5cblx0XHRcdGV4cGVjdChEb20oKSkudG8uZXF1YWwgdW5kZWZpbmVkXG5cdFx0XHRleHBlY3QoRG9tKG51bGwpKS50by5lcXVhbCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdChEb20oe30pKS50by5lcXVhbCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdChkaXYudXBkYXRlT3B0aW9ucygpKS50by5lcXVhbCBkaXZcblx0XHRcdGV4cGVjdCh0ZXh0Lm9wdGlvbnMubG9zdE9wdHMpLnRvLmVxdWFsIHVuZGVmaW5lZFxuXHRcdFx0ZXhwZWN0KGRpdi5vcHRpb25zLmxvc3RPcHRzKS50by5lcXVhbCB0cnVlXG5cdFx0XHRleHBlY3QoZGl2Lm9uKCkpLnRvLmVxdWFsIGRpdlxuXHRcdFx0ZXhwZWN0KGRpdi5vbignYWJjJykpLnRvLmVxdWFsIGRpdlxuXHRcdFx0ZXhwZWN0KGRpdi5vbignYWJjJywge30pKS50by5lcXVhbCBkaXZcblx0XHRcdGV4cGVjdChkaXYub25jZSgnYWJjJykpLnRvLmVxdWFsIGRpdlxuXHRcdFx0ZXhwZWN0KGRpdi5vZmYoJ3NvbWV0aGluZ0Zha2UnKSkudG8uZXF1YWwgZGl2XG5cblx0XHRcdGVtaXRDb3VudCA9IDA7IGRpdi5vbiAnc29tZXRoaW5nJywgY2I9KCktPiBlbWl0Q291bnQrK1xuXHRcdFx0ZXhwZWN0KGRpdi5lbWl0KCcnKSkudG8uZXF1YWwoZGl2KVxuXHRcdFx0ZXhwZWN0KGRpdi5lbWl0KCkpLnRvLmVxdWFsKGRpdilcblx0XHRcdGV4cGVjdChkaXYuZW1pdFByaXZhdGUoJ25vbmUnKSkudG8uZXF1YWwoZGl2KVxuXHRcdFx0ZXhwZWN0KGRpdi5lbWl0UHJpdmF0ZSgnJykpLnRvLmVxdWFsKGRpdilcblx0XHRcdGV4cGVjdChkaXYuZW1pdFByaXZhdGUoKSkudG8uZXF1YWwoZGl2KVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwoMClcblx0XHRcdGV4cGVjdChkaXYuZW1pdCgnc29tZXRoaW5nJykpLnRvLmVxdWFsKGRpdilcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZGl2Lm9mZignc29tZXRoaW5nJywgKCktPikpLnRvLmVxdWFsKGRpdilcblx0XHRcdGV4cGVjdChkaXYuZW1pdCgnc29tZXRoaW5nJykpLnRvLmVxdWFsKGRpdilcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3QoZGl2Lm9uSW5zZXJ0ZWQgKCktPikudG8uZXF1YWwoZGl2KVxuXHRcdFx0ZXhwZWN0KGRpdi5vbkluc2VydGVkKHRydWUpKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoZGl2Lm9uSW5zZXJ0ZWQobnVsbCkpLnRvLmVxdWFsKHVuZGVmaW5lZClcblxuXHRcdFx0ZGl2LmNzcyhudWxsLCAnMTI5Jylcblx0XHRcdGV4cGVjdChkaXYuZWwuc3R5bGUubnVsbCkudG8uZXF1YWwodW5kZWZpbmVkKVxuXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlKCkpLnRvLmVxdWFsIHVuZGVmaW5lZFxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZShudWxsLCBvbikpLnRvLmVxdWFsIHVuZGVmaW5lZFxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSgxMjMsIG9uKSkudG8uZXF1YWwgdW5kZWZpbmVkXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdiYXNlJywgb24pLnRvLmVxdWFsIGRpdlxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnYmFzZScpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICckd2hhdGV2cycsIG9uKS50by5lcXVhbCBkaXZcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ3doYXRldnMnKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdhbm90aGVyJykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2Fub3RoZXInLCBvbikudG8uZXF1YWwgZGl2XG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdhbm90aGVyJykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnYW5vdGhlcicsIHVuZGVmaW5lZCkudG8uZXF1YWwgZGl2XG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdhbm90aGVyJykudG8uYmUuZmFsc2VcblxuXHRcdFx0ZGl2LmFwcGVuZFRvKERvbSBzYW5kYm94KVxuXHRcdFx0ZXhwZWN0KGRpdi5wYXJlbnQpLnRvLmVxdWFsKERvbSBzYW5kYm94KVxuXG5cdFx0XHRkaXYuYXBwZW5kKHRydWUpXG5cdFx0XHRleHBlY3QoZGl2LmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMClcblx0XHRcdGRpdi5hcHBlbmRUbyhkb2N1bWVudClcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5lcXVhbChEb20gc2FuZGJveClcblx0XHRcdGRpdi5wcmVwZW5kKHRydWUpXG5cdFx0XHRleHBlY3QoZGl2LmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMClcblx0XHRcdGRpdi5wcmVwZW5kVG8odHJ1ZSlcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5lcXVhbChEb20gc2FuZGJveClcblx0XHRcdGRpdi5hZnRlcih0cnVlKVxuXHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDApXG5cdFx0XHRkaXYuaW5zZXJ0QWZ0ZXIoMTIzKVxuXHRcdFx0ZXhwZWN0KGRpdi5wYXJlbnQpLnRvLmVxdWFsKERvbSBzYW5kYm94KVxuXHRcdFx0ZGl2LmJlZm9yZSh0cnVlKVxuXHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDApXG5cdFx0XHRkaXYuaW5zZXJ0QmVmb3JlKDEyMylcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5lcXVhbChEb20gc2FuZGJveClcblx0XHRcdGRpdi53cmFwKDEyMylcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5lcXVhbChEb20gc2FuZGJveClcblx0XHRcdGRpdi5yZXBsYWNlKDEyMylcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5lcXVhbChEb20gc2FuZGJveClcblx0XHRcdGRpdi5kZXRhY2goKVxuXHRcdFx0ZXhwZWN0KGRpdi5wYXJlbnQpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGRpdi51bndyYXAoKVxuXHRcdFx0ZXhwZWN0KGRpdi5wYXJlbnQpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChEb20oc2FuZGJveCkuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAwXG5cblx0XHRcdGRpdi5hcHBlbmRUbyhEb20gc2FuZGJveClcblx0XHRcdGV4cGVjdChEb20oc2FuZGJveCkuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAxXG5cdFx0XHRpZiBEb20oc2FuZGJveCkuX3JlbW92ZUNoaWxkXG5cdFx0XHRcdERvbShzYW5kYm94KS5fcmVtb3ZlQ2hpbGQodGV4dClcblx0XHRcdFx0RG9tKHNhbmRib3gpLl9yZW1vdmVDaGlsZChEb20uZGl2KCkpXG5cdFx0XHRcdGV4cGVjdChEb20oc2FuZGJveCkuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAxXG5cblx0XHRcdGV4cGVjdCAoKS0+IERvbS5iYXRjaCgpXG5cdFx0XHRcdC50by50aHJvdygpXG5cdFx0XHRcblx0XHRcdGV4cGVjdCAoKS0+IERvbS5iYXRjaCh7fSlcblx0XHRcdFx0LnRvLnRocm93KClcblx0XHRcdFxuXHRcdFx0ZXhwZWN0ICgpLT4gRG9tLmJhdGNoKDU0MzIpXG5cdFx0XHRcdC50by50aHJvdygpXG5cdFx0XHRcblx0XHRcdGV4cGVjdCAoKS0+IERvbS5iYXRjaChbXSlcblx0XHRcdFx0LnRvLnRocm93KClcblx0XHRcdFxuXHRcdFx0ZXhwZWN0ICgpLT4gRG9tLmJhdGNoKFsxMl0pLmFwcGVuZChEb20uZGl2KCkpXG5cdFx0XHRcdC50by50aHJvdygpXG5cdFx0XHRcblx0XHRcdGV4cGVjdCAoKS0+IERvbS5iYXRjaChbMTJdKVxuXHRcdFx0XHQubm90LnRvLnRocm93KClcblx0XHRcdFxuXHRcdFx0IyBleHBlY3QgKCktPiBEb20uYmF0Y2goJCgnZGl2JykpXG5cdFx0XHQjIFx0Lm5vdC50by50aHJvdygpXG5cblx0XHRcdGV4cGVjdCAoKS0+IERvbS50ZW1wbGF0ZSgpXG5cdFx0XHRcdC50by50aHJvdygpXG5cblx0XHRcdGV4cGVjdCAoKS0+IERvbS50ZW1wbGF0ZShudWxsKVxuXHRcdFx0XHQudG8udGhyb3coKVxuXG5cdFx0XHRleHBlY3QgKCktPiBEb20udGVtcGxhdGUoe30pXG5cdFx0XHRcdC50by50aHJvdygpXG5cblx0XHRcdGV4cGVjdCAoKS0+IERvbS50ZW1wbGF0ZShbODQ4Miwge2NsYXNzTmFtZTondCd9XSlcblx0XHRcdFx0LnRvLnRocm93KClcblxuXHRcdFx0ZXhwZWN0ICgpLT4gRG9tLnRlbXBsYXRlKFsnZGl2JywgJ3NvbWVTdHJpbmcnXSlcblx0XHRcdFx0LnRvLnRocm93KClcblxuXHRcdFx0ZXhwZWN0ICgpLT4gRG9tLnRlbXBsYXRlKFsnZGl2JywgbnVsbCwgJ1NvbWUgSW5uZXIgVGV4dCddKVxuXHRcdFx0XHQubm90LnRvLnRocm93KClcblxuXHRcdFx0ZXhwZWN0ICgpLT4gRG9tLmRpdihzdHlsZTp7b3BhY2l0eTowLjUsICdAYWJjKG1heC13aWR0aDozOTApJzp7b3BhY2l0eToxfX0pLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRcdC5ub3QudG8udGhyb3coKVxuXG5cdFx0XHRleHBlY3QoKCktPlxuXHRcdFx0XHRkaXYgPSBEb20uZGl2KClcblx0XHRcdFx0ZGl2LnBpcGVTdGF0ZShkaXYpXG5cdFx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0XHRleHBlY3QoZGl2LnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9uXG5cdFx0XHQpLm5vdC50by50aHJvdygpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5IVE1MRWxlbWVudDo6b25FdmVudCA9IChldmVudE5hbWUsIGNhbGxiYWNrKS0+XG5cdGlmIEBhZGRFdmVudExpc3RlbmVyXG5cdFx0QGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaylcblx0ZWxzZVxuXHRcdEBhdHRhY2hFdmVudChcIm9uI3tldmVudE5hbWV9XCIsIGNhbGxiYWNrKVxuXG5cbkhUTUxFbGVtZW50OjpyZW1vdmVFdmVudCA9IChldmVudE5hbWUsIGNhbGxiYWNrKS0+XG5cdGlmIEByZW1vdmVFdmVudExpc3RlbmVyXG5cdFx0QHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaylcblx0ZWxzZVxuXHRcdEBkZXRhY2hFdmVudChcIm9uI3tldmVudE5hbWV9XCIsIGNhbGxiYWNrKVxuXG5cbkhUTUxFbGVtZW50OjplbWl0RXZlbnQgPSAoZXZlbnROYW1lKS0+XG5cdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jylcblx0ZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgZmFsc2UpXG5cdEBkaXNwYXRjaEV2ZW50KGV2ZW50KVxuXG5cbmlmIEhUTUxFbGVtZW50Lm5hbWUgaXNudCAnSFRNTEVsZW1lbnQnXG5cdEhUTUxFbGVtZW50Lm5hbWUgPSAnSFRNTEVsZW1lbnQnXG5cdFRleHQubmFtZSA9ICdUZXh0J1xuXHRub25FbGVtZW50U3VmZml4ID0gW1xuXHRcdCdPcHRpb25zQ29sbGVjdGlvbidcblx0XHQnRm9ybUNvbnRyb2xzQ29sbGVjdGlvbidcblx0XHQnRG9jdW1lbnQnXG5cdFx0J0NvbGxlY3Rpb24nXG5cdFx0J0FsbENvbGxlY3Rpb24nXG5cdF1cblx0ZWxlbWVudFN1ZmZpeCA9IFtcblx0XHRcIlZpZGVvXCIsXCJVbmtub3duXCIsXCJVTGlzdFwiLFwiVHJhY2tcIixcIlRpdGxlXCIsXG5cdFx0XCJUZXh0QXJlYVwiLFwiVGVtcGxhdGVcIixcIlRhYmxlU2VjdGlvblwiLFwiVGFibGVSb3dcIixcblx0XHRcIlRhYmxlXCIsXCJUYWJsZUNvbFwiLFwiVGFibGVDZWxsXCIsXCJUYWJsZUNhcHRpb25cIixcblx0XHRcIlN0eWxlXCIsXCJTcGFuXCIsXCJTb3VyY2VcIixcIlNsb3RcIixcIlNoYWRvd1wiLFwiU2VsZWN0XCIsXG5cdFx0XCJTY3JpcHRcIixcIlF1b3RlXCIsXCJQcm9ncmVzc1wiLFwiUHJlXCIsXCJQaWN0dXJlXCIsXG5cdFx0XCJQYXJhbVwiLFwiUGFyYWdyYXBoXCIsXCJPdXRwdXRcIixcIk9wdGlvblwiLFwiT3B0R3JvdXBcIixcblx0XHRcIk9iamVjdFwiLFwiT0xpc3RcIixcIk1vZFwiLFwiTWV0ZXJcIixcIk1ldGFcIixcIk1lbnVcIixcblx0XHRcIk1lZGlhXCIsXCJNYXJxdWVlXCIsXCJNYXBcIixcIkxpbmtcIixcIkxlZ2VuZFwiLFwiTGFiZWxcIixcblx0XHRcIkxJXCIsXCJJbnB1dFwiLFwiSW1hZ2VcIixcIklGcmFtZVwiLFwiSHRtbFwiLFwiSGVhZGluZ1wiLFxuXHRcdFwiSGVhZFwiLFwiSFJcIixcIkZyYW1lU2V0XCIsXCJGcmFtZVwiLFwiRm9ybVwiLFwiRm9udFwiLFxuXHRcdFwiRmllbGRTZXRcIixcIkVtYmVkXCIsXCJEaXZcIixcIkRpcmVjdG9yeVwiLFwiRGlhbG9nXCIsXG5cdFx0XCJEZXRhaWxzXCIsXCJEYXRhTGlzdFwiLFwiRExpc3RcIixcIkNvbnRlbnRcIixcIkNhbnZhc1wiLFxuXHRcdFwiQnV0dG9uXCIsXCJCb2R5XCIsXCJCYXNlXCIsXCJCUlwiLFwiQXVkaW9cIixcIkFyZWFcIixcIkFuY2hvclwiXG5cdF1cblxuXHRmb3IgY3JlYXRvciBpbiBub25FbGVtZW50U3VmZml4XG5cdFx0d2luZG93W1wiSFRNTCN7Y3JlYXRvcn1cIl0/Lm5hbWUgPSBcIkhUTUwje2NyZWF0b3J9XCJcblxuXHRmb3IgY3JlYXRvciBpbiBlbGVtZW50U3VmZml4XG5cdFx0d2luZG93W1wiSFRNTCN7Y3JlYXRvcn1FbGVtZW50XCJdPy5uYW1lID0gXCJIVE1MI3tjcmVhdG9yfUVsZW1lbnRcIlxuXG5cdHdpbmRvdy5TVkdFbGVtZW50Py5uYW1lID0gJ1NWR0VsZW1lbnQnXG5cdHdpbmRvdy5TVkdTVkdFbGVtZW50Py5uYW1lID0gJ1NWR1NWR0VsZW1lbnQnXG5cdHdpbmRvdy5TVkdQb2x5bGluZUVsZW1lbnQ/Lm5hbWUgPSAnU1ZHUG9seWxpbmVFbGVtZW50J1xuXG53aW5kb3cuQ2xpZW50UmVjdCA/PSBET01SZWN0XG5cblxuXG5cbiJdfQ==
;
return module.exports;
}
}, this);
return require(0);
}).call(this, null, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : this);
