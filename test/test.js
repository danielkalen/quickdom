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
    packageVersion = ({
  "name": "quickdom",
  "version": "1.0.37",
  "description": "Fast & light DOM element management supporting jquery-like methods, templates, & state-based styling",
  "main": "dist/quickdom.js",
  "browser": {
    "./debug": "dist/quickdom.debug.js",
    "./dist/quickdom.js": "src/quickdom.coffee"
  },
  "browserify": {
    "transform": [
      "simplyimport/compat"
    ]
  },
  "simplyimport": {
    "finalTransform": [
      ".config/transforms/minify-super",
      ".config/transforms/minify-rename",
      ".config/transforms/minify-simple"
    ]
  },
  "directories": {
    "test": "test"
  },
  "scripts": {
    "postversion": "npm run build",
    "test": "npm run test:electron -s || true",
    "test:local": "open test/testrunner.html",
    "test:minified": "minified=1 npm run test:electron -s || true",
    "test:karma": "karma start .config/karma.conf.coffee",
    "test:electron": "karma start --single-run --browsers Electron .config/karma.conf.coffee",
    "test:chrome": "karma start --browsers Chrome .config/karma.conf.coffee",
    "test:sauce": "coffee .config/sauce-launch.coffee && npm run test-serve",
    "test-serve": "http-server -p 9202 --cors ./",
    "sauce-connect": "sc -u quickdom -k 0c7a6cc2-ed14-4f08-b48d-e46c74905b6a",
    "build": "cake -d build && cake build && cp -r build/* dist/",
    "compile": "cake -d build",
    "watch": "cake -d watch",
    "coverage": "npm run coverage:run; npm run coverage:badge",
    "coverage:run": "coverage=true npm run test:electron",
    "coverage:badge": "badge-gen -d ./.config/badges/coverage",
    "coverage:show": "open coverage/lcov-report/index.html"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/danielkalen/quickdom.git"
  },
  "author": "danielkalen",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/danielkalen/quickdom/issues"
  },
  "homepage": "https://github.com/danielkalen/quickdom#readme",
  "dependencies": {
    "@danielkalen/is": "^1.0.0",
    "quickcss": "^1.0.5",
    "smart-extend": "^1.6.0"
  },
  "devDependencies": {
    "bluebird": "^3.4.7",
    "chai": "^3.5.0",
    "closure-compiler-service": "^0.6.1",
    "coffee-script": "^1.12.2",
    "electron": "^1.6.2",
    "foreach-cli": "^1.7.1",
    "fs-jetpack": "^1.1.0",
    "google-closure-compiler-js": "^20170521.0.0",
    "http-server": "^0.9.0",
    "karma": "^1.4.0",
    "karma-chai": "^0.1.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-coverage": "^1.1.1",
    "karma-electron": "^5.1.1",
    "karma-firefox-launcher": "^1.0.0",
    "karma-mocha": "^1.3.0",
    "karma-opera-launcher": "^1.0.0",
    "karma-safari-launcher": "^1.0.0",
    "listr": "^0.12.0",
    "mocha": "^3.2.0",
    "simplyimport": "^4.0.0-o",
    "simplywatch": "^3.0.0-i",
    "uglify-js": "^3.0.20"
  }
}
).version;
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
      var A, B, C, D, E, F, G, H, I;
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
      return expect(I.el.src).to.equal('https://google.com/');
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
    test("Functions can be passed as values for properties in style objects which will be invoked with the element's options.relatedElement as the only argument", function() {
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
      divA._attachStateEvents(true);
      divB._attachStateEvents(true);
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
    return test("wrappers created for existing elements should attempt to resolve if its inserted into the DOM on init", function() {
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
    return test("Index (by ref)", function() {
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
      var rendered, templateCopy, templateMain;
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
    return test("When spawning elements the options object passed to the spawns should be a clone of the template's options", function() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsNElBQUE7RUFBQTs7QUFBQSxJQUFDLENBQUEsVUFBRCxHQUFjLElBQUEsQ0FBSyxZQUFMOztBQUNkLElBQUMsQ0FBQSxHQUFELEdBQU8sTUFBTSxDQUFDOztBQUNkLEtBQUssQ0FBQyxLQUFOLENBQVksS0FBWjs7QUFDQSxLQUFLLENBQUMsSUFBTixDQUFXLEdBQVg7O0FBQ0EsS0FBSyxDQUFDLE9BQU4sQ0FBYyxLQUFkOztBQUNBLElBQUEsQ0FBb0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFwQztFQUFBLEtBQUssQ0FBQyxJQUFOLENBQUEsRUFBQTs7O0FBQ0EsTUFBQSxHQUFTLElBQUksQ0FBQzs7QUFDZCxPQUFBLEdBQVU7O0FBQ1YsY0FBQSxHQUFpQixTQUFBO0VBQ2hCLElBQThDLE9BQTlDO0lBQUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUF0QixDQUFrQyxPQUFsQyxFQUFBOztFQUNBLE9BQUEsR0FBVSxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QjtFQUNWLE9BQU8sQ0FBQyxFQUFSLEdBQWE7RUFDYixPQUFPLENBQUMsWUFBUixDQUFxQixPQUFyQixFQUE4Qix1REFBOUI7U0FDQSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQWQsQ0FBMEIsT0FBMUI7QUFMZ0I7O0FBT2pCLG1CQUFBLEdBQXNCLFNBQUMsSUFBRDtTQUFTLFNBQUE7QUFDOUIsUUFBQTtJQUQrQjtJQUMvQixNQUFBLENBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFyQixDQUE0QixDQUFDLEVBQUUsQ0FBQyxLQUFoQyxDQUFzQyxRQUFRLENBQUMsTUFBL0M7QUFDQSxTQUFBLDBEQUFBOztNQUNDLE1BQUEsQ0FBTyxJQUFJLENBQUMsUUFBUyxDQUFBLEtBQUEsQ0FBckIsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsS0FBdEM7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RSxDQUFDLEtBQWhDLENBQXNDLEVBQXRDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxTQUFMLENBQWUsT0FBZixDQUFQLENBQStCLENBQUMsRUFBRSxDQUFDLEtBQW5DLENBQXlDLEtBQXpDO01BRUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLElBQXBCO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxDQUFQLENBQTJCLENBQUMsRUFBRSxDQUFDLEtBQS9CLENBQXFDLEVBQXJDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQXRCLENBQTRCLENBQUMsRUFBRSxDQUFDLEtBQWhDLENBQXNDLE1BQXRDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxTQUFMLENBQWUsT0FBZixDQUFQLENBQStCLENBQUMsRUFBRSxDQUFDLEtBQW5DLENBQXlDLE1BQXpDO01BRUEsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsUUFBWCxDQUFQLENBQTRCLENBQUMsRUFBRSxDQUFDLEtBQWhDLENBQXNDLEVBQXRDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQXRCLENBQTZCLENBQUMsRUFBRSxDQUFDLEtBQWpDLENBQXVDLEVBQXZDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxTQUFMLENBQWUsUUFBZixDQUFQLENBQWdDLENBQUMsRUFBRSxDQUFDLEtBQXBDLENBQTBDLEtBQTFDO01BRUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLElBQXRCO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsUUFBWCxDQUFQLENBQTRCLENBQUMsRUFBRSxDQUFDLEtBQWhDLENBQXNDLEVBQXRDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQXRCLENBQTZCLENBQUMsRUFBRSxDQUFDLEtBQWpDLENBQXVDLE1BQXZDO01BQ0EsTUFBQSxDQUFPLElB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QUE5QixDQUFvQyxLQUFwQztNQUVBLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUixDQUFrQixZQUFsQjtNQUNBLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUixDQUFrQixZQUFsQjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsQ0FBUCxDQUEwQixDQUFDLEVBQUUsQ0FBQyxLQUE5QixDQUFvQyxJQUFwQztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsQ0FBUCxDQUEwQixDQUFDLEVBQUUsQ0FBQyxLQUE5QixDQUFvQyxLQUFwQztNQUVBLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUixDQUFrQixZQUFsQjtNQUNBLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUixDQUFrQixZQUFsQjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsQ0FBUCxDQUEwQixDQUFDLEVBQUUsQ0FBQyxLQUE5QixDQUFvQyxLQUFwQztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsQ0FBUCxDQUEwQixDQUFDLEVBQUUsQ0FBQyxLQUE5QixDQUFvQyxLQUFwQztNQUVBLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUixDQUFrQixPQUFsQjtNQUNBLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUixDQUFrQixPQUFsQjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsQ0FBUCxDQUEwQixDQUFDLEVBQUUsQ0FBQyxLQUE5QixDQUFvQyxLQUFwQztNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsQ0FBUCxDQUEwQixDQUFDLEVBQUUsQ0FBQyxLQUE5QixDQUFvQyxJQUFwQztNQUVBLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUixDQUFrQixNQUFsQjtNQUNBLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUixDQUFrQixNQUFsQjtNQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsQ0FB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LEVBQW1CLElBQW5CO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsT0FBVixDQUFQLENBQXlCLENBQUMsRUFBRSxDQUFDLEtBQTdCLENBQW1DLE1BQW5DO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsUUFBVixDQUFQLENBQTBCLENBQUMsRUFBRSxDQUFDLEtBQTlCLENBQW9DLE1BQXBDO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsVUFBVixDQUFQLENBQTRCLENBQUMsRUFBRSxDQUFDLEtBQWhDLENBQXNDLE1BQXRDO01BRUEsR0FBRyxDQUFDLEtBQUosQ0FBVSxPQUFWLEVBQW1CLEtBQW5CO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsT0FBVixDQUFQLENBQXlCLENBQUMsRUFBRSxDQUFDLEtBQTdCLENBQW1DLE1BQW5DO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsUUFBVixDQUFQLENBQTBCLENBQUMsRUFBRSxDQUFDLEtBQTlCLENBQW9DLE1BQXBDO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsVUFBVixDQUFQLENBQTRCLENBQUMsRUFBRSxDQUFDLEtBQWhDLENBQXNDLE1BQXRDO01BRUEsR0FBRyxDQUFDLEtBQUosQ0FBVSxPQUFWLEVBQW1CLElBQW5CO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsT0FBVixDQUFQLENBQXlCLENBQUMsRUFBRSxDQUFDLEtBQTdCLENBQW1DLE1BQW5DO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsUUFBVixDQUFQLENBQTBCLENBQUMsRUFBRSxDQUFDLEtBQTlCLENBQW9DLE1BQXBDO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsVUFBVixDQUFQLENBQTRCLENBQUMsRUFBRSxDQUFDLEtBQWhDLENBQXNDLE1BQXRDO01BRUEsR0FBRyxDQUFDLEtBQUosQ0FBVSxTQUFWLEVBQXFCLElBQXJCO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsT0FBVixDQUFQLENBQXlCLENBQUMsRUFBRSxDQUFDLEtBQTdCLENBQW1DLE1BQW5DO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsUUFBVixDQUFQLENBQTBCLENBQUMsRUFBRSxDQUFDLEtBQTlCLENBQW9DLE1BQXBDO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsVUFBVixDQUFQLENBQTRCLENBQUMsRUFBRSxDQUFDLEtBQWhDLENBQXNDLE1BQXRDO01BRUEsR0FBRyxDQUFDLEtBQUosQ0FBVSxPQUFWLEVBQW1CLEtBQW5CO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsT0FBVixDQUFQLENBQXlCLENBQUMsRUFBRSxDQUFDLEtBQTdCLENBQW1DLE1BQW5DO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsUUFBVixDQUFQLENBQTBCLENBQUMsRUFBRSxDQUFDLEtBQTlCLENBQW9DLE1BQXBDO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsVUFBVixDQUFQLENBQTRCLENBQUMsRUFBRSxDQUFDLEtBQWhDLENBQXNDLE1BQXRDO01BRUEsR0FBRyxDQUFDLEtBQUosQ0FBVSxPQUFWLEVBQW1CLElBQW5CO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsT0FBVixDQUFQLENBQXlCLENBQUMsRUFBRSxDQUFDLEtBQTdCLENBQW1DLE1BQW5DO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsUUFBVixDQUFQLENBQTBCLENBQUMsRUFBRSxDQUFDLEtBQTlCLENBQW9DLE1BQXBDO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FBQyxLQUFKLENBQVUsVUFBVixDQUFQLENBQTRCLENBQUMsRUFBRSxDQUFDLEtBQWhDLENBQXNDLE1BQXRDO01BRUEsR0FBRyxDQUFDLEtBQUosQ0FBVSxPQUFWLEVBQW1CLElBQW5CO01BQ0EsTUFBQSxDQUFPLEdBQUcsQ0FB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SUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBckIsQ0FBNkIsQ0FBQyxFQUFFLENBQUMsS0FBakMsQ0FBdUMsR0FBdkM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBckIsQ0FBNkIsQ0FBQyxFQUFFLENBQUMsS0FBakMsQ0FBdUMsR0FBdkM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBckIsQ0FBNkIsQ0FBQyxFQUFFLENBQUMsS0FBakMsQ0FBdUMsRUFBdkM7TUFFQSxPQUFPLENBQUMsV0FBUixDQUFvQixJQUFJLENBQUMsRUFBekI7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBckIsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsTUFBdEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBckIsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsTUFBdEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBckIsQ0FBNEIsQ0FBQyxFQUFFLENBQUMsS0FBaEMsQ0FBc0MsRUFBdEM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBckIsQ0FBNkIsQ0FBQyxFQUFFLENBQUMsS0FBakMsQ0FBdUMsR0FBdkM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBckIsQ0FBNkIsQ0FBQyxFQUFFLENBQUMsS0FBakMsQ0FBdUMsR0FBdkM7TUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBckIsQ0FBNkIsQ0FBQyxFQUFFLENBQUMsS0FBakMsQ0FBdUMsRUFBdkM7TUFFQSxJQUFJLENBQUM7TUFDTCxNQUFBLENBQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFB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QUFDLEtBQTVCLENBQWtDLElBQWxDO01BRUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmO01BQ0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLElBQWhCO01BQ0EsTUFBQSxDQUFPLE9BQU8sQ0FBQyxLQUFSLENBQWMsR0FBZCxDQUFQLENBQXlCLENBQUMsRUFBRSxDQUFDLEtBQTdCLENBQW1DLElBQW5DO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWCxDQUFQLENBQXNCLENBQUMsRUFBRSxDQUFDLEtBQTFCLENBQWdDLElBQWhDO01BQ0EsTUFBQSxDQUFPLE1BQU0sQ0FBQyxLQUFQLENBQWEsR0FBYixDQUFQLENBQXdCLENBQUMsRUFBRSxDQUFDLEtBQTVCLENBQWtDLElBQWxDO01BRUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxLQUFmO01BQ0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLElBQWxCO01BQ0EsTUFBQSxDQUFPLE9BQU8sQ0FBQyxLQUFSLENBQWMsS0FBZCxDQUFQLENBQTJCLENBQUMsRUFBRSxDQUFDLEtBQS9CLENBQXFDLEtBQXJDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsS0FBWCxDQUFQLENBQXdCLENBQUMsRUFBRSxDQUFDLEtBQTVCLENBQWtDLElBQWxDO01BQ0EsTUFBQSxDQUFPLE1BQU0sQ0FBQyxLQUFQLENBQWEsS0FBYixDQUFQLENBQTBCLENBQUMsRUFBRSxDQUFDLEtBQTlCLENBQW9DLElBQXBDO01BRUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxJQUFmO01BQ0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLElBQWhCO01BQ0EsTUFBQSxDQUFPLE9BQU8sQ0FBQyxLQUFSLENBQWMsR0FBZCxDQUFQLENBQXlCLENBQUMsRUFBRSxDQUFDLEtBQTdCLENBQW1DLEtBQW5DO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWCxDQUFQLENBQXNCLENBQUMsRUFBRSxDQUFDLEtBQTFCLENBQWdDLElBQWhDO01BQ0EsTUFBQSxDQUFPLE1BQU0sQ0FBQyxLQUFQLENBQWEsR0FBYixDQUFQLENBQXdCLENBQUMsRUFBRSxDQUFDLEtBQTVCLENBQWtDLElBQWxDO01BRUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmO01BQ0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLElBQWhCO01BQ0EsTUFBQSxDQUFPLE9BQU8sQ0FBQyxLQUFSLENBQWMsR0FBZCxDQUFQLENBQXlCLENBQUMsRUFBRSxDQUFDLEtBQTdCLENBQW1DLElBQW5DO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWCxDQUFQLENBQXNCLENBQUMsRUFBRSxDQUFDLEtBQTFCLENBQWdDLEtBQWhDO01BQ0EsTUFBQSxDQUFPLE1BQU0sQ0FBQyxLQUFQLENBQWEsR0FBYixDQUFQLENBQXdCLENBQUMsRUFBRSxDQUFDLEtBQTVCLENBQWtDLEtBQWxDO01BRUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmO01BQ0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLElBQWhCO01BQ0EsTUFBQSxDQUFPLE9BQU8sQ0FBQyxLQUFSLENBQWMsR0FBZCxDQUFQLENBQXlCLENBQUMsRUFBRSxDQUFDLEtBQTdCLENBQW1DLEtBQW5DO01BQ0EsTUFBQSxDQUFPLE9BQU8sQ0FBQyxLQUFSLENBQWMsR0FBZCxDQUFQLENBQXlCLENBQUMsRUFBRSxDQUFDLEtBQTdCLENBQW1DLElBQW5DO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWCxDQUFQLENBQXNCLENBQUMsRUFBRSxDQUFDLEtBQTFCLENBQWdDLEtBQWhDO01BQ0EsTUFBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWCxDQUFQLENBQXNCLENBQUMsRUFBRSxDQUFDLEtBQTFCLENBQWdDLEtBQWhDO01BQ0EsTUFBQSxDQUFPLE1BQU0sQ0FBQyxLQUFQLENBQWEsR0FBYixDQUFQLENBQXdCLENBQUMsRUFBRSxDQUFDLEtBQTVCLENB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QU0sQ0FBQyxTQUFkLENBQXdCLENBQUMsRUFBRSxDQUFDLEtBQTVCLENBQWtDLENBQWxDO01BQ0EsTUFBQSxDQUFPLE1BQU0sQ0FBQyxTQUFkLENBQXdCLENBQUMsRUFBRSxDQUFDLEtBQTVCLENBQWtDLENBQWxDO01BQ0EsTUFBQSxDQUFPLE1BQU0sQ0FBQyxTQUFkLENBQXdCLENBQUMsRUFBRSxDQUFDLEtBQTVCLENBQWtDLENBQWxDO01BRUEsTUFBTSxDQUFDLE1BQVAsQ0FBQTtNQUNBLE1BQUEsQ0FBTyxNQUFNLENBQUMsU0FBZCxDQUF3QixDQUFDLEVBQUUsQ0FBQyxLQUE1QixDQUFrQyxDQUFsQztNQUNBLE1BQUEsQ0FBTyxNQUFNLENBQUMsU0FBZCxDQUF3QixDQUFDLEVBQUUsQ0FBQyxLQUE1QixDQUFrQyxDQUFsQztNQUNBLE1BQUEsQ0FBTyxNQUFNLENBQUMsU0FBZCxDQUF3QixDQUFDLEVBQUUsQ0FBQyxLQUE1QixDQUFrQyxDQUFsQztNQUNBLE1BQUEsQ0FBTyxNQUFNLENBQUMsU0FBZCxDQUF3QixDQUFDLEVBQUUsQ0FBQyxLQUE1QixDQUFrQyxDQUFsQztNQUVBLE1BQU0sQ0FBQyxNQUFQLENBQUE7TUFDQSxNQUFBLENBQU8sTUFBTSxDQUFDLFNBQWQsQ0FBd0IsQ0FBQyxFQUFFLENBQUMsS0FBNUIsQ0FBa0MsQ0FBbEM7TUFDQSxNQUFBLENBQU8sTUFBTSxDQUFDLFNBQWQsQ0FBd0IsQ0FBQyxFQUFFLENBQUMsS0FBNUIsQ0FBa0MsQ0FBbEM7TUFDQSxNQUFBLENBQU8sTUFBTSxDQUFDLFNBQWQsQ0FBd0IsQ0FBQyxFQUFFLENBQUMsS0FBNUIsQ0FBa0MsQ0FBbEM7TUFDQSxNQUFBLENBQU8sTUFBTSxDQUFDLFNBQWQsQ0FBd0IsQ0FBQyxFQUFFLENBQUMsS0FBNUIsQ0FBa0MsQ0FBbEM7TUFDQSxNQUFBLENBQU8sTUFBTSxDQUFDLFNBQWQsQ0FBd0IsQ0FBQyxFQUFFLENBQUMsS0FBNUIsQ0FBa0MsSUFBbEM7YUFDQSxNQUFBLENBQU8sTUFBTSxDQUFDLFNBQWQsQ0FBd0IsQ0FB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QUFnQmhCLE9BQUEsa0RBQUE7OztTQUN5QixDQUFFLElBQTFCLEdBQWlDLE1BQUEsR0FBTzs7QUFEekM7QUFHQSxPQUFBLGlEQUFBOzs7VUFDZ0MsQ0FBRSxJQUFqQyxHQUF3QyxNQUFBLEdBQU8sT0FBUCxHQUFlOztBQUR4RDs7UUFHaUIsQ0FBRSxJQUFuQixHQUEwQjs7O1FBQ04sQ0FBRSxJQUF0QixHQUE2Qjs7O1FBQ0osQ0FBRSxJQUEzQixHQUFrQztHQWxDbkM7Ozs7RUFvQ0EsTUFBTSxDQUFDLGFBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJAZGltZW5zaW9ucyA9IF8kc20oJy4vc2ltdWxhdGUnIClcbkBEb20gPSB3aW5kb3cucXVpY2tkb21cbm1vY2hhLnNldHVwKCd0ZGQnKVxubW9jaGEuc2xvdyg0MDApXG5tb2NoYS50aW1lb3V0KDEyMDAwKVxubW9jaGEuYmFpbCgpIHVubGVzcyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWVcbmV4cGVjdCA9IGNoYWkuZXhwZWN0XG5zYW5kYm94ID0gbnVsbFxucmVzdGFydFNhbmRib3ggPSAoKS0+XG5cdHNhbmRib3gucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChzYW5kYm94KSBpZiBzYW5kYm94XG5cdHNhbmRib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRzYW5kYm94LmlkID0gJ3NhbmRib3gnXG5cdHNhbmRib3guc2V0QXR0cmlidXRlICdzdHlsZScsICdib3JkZXI6MXB4IHNvbGlkOyBwYWRkaW5nOjIwcHg7IGJveC1zaXppbmc6Ym9yZGVyLWJveCdcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzYW5kYm94KVxuXG5jaGVja0NoaWxkU3RydWN0dXJlID0gKG1haW4pLT4gKGNoaWxkcmVuLi4uKS0+XG5cdGV4cGVjdChtYWluLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoY2hpbGRyZW4ubGVuZ3RoKVxuXHRmb3IgY2hpbGQsaW5kZXggaW4gY2hpbGRyZW5cblx0XHRleHBlY3QobWFpbi5jaGlsZHJlbltpbmRleF0pLnRvLmVxdWFsKGNoaWxkKVxuXHRcdGV4cGVjdChjaGlsZC5lbC5wYXJlbnROb2RlKS50by5lcXVhbChtYWluLmVsKVxuXHRcdGV4cGVjdChjaGlsZC5wYXJlbnQpLnRvLmVxdWFsKG1haW4pXG5cdHJldHVyblxuXG5cbnN1aXRlIFwiUXVpY2tEb21cIiwgKCktPlxuXHRzZXR1cChyZXN0YXJ0U2FuZGJveClcblxuXHR0ZXN0IFwiVmVyc2lvbiBQcm9wZXJ0eVwiLCAoKS0+XG5cdFx0cGFja2FnZVZlcnNpb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlJykudmVyc2lvblxuXHRcdGV4cGVjdChEb20udmVyc2lvbikudG8uZXF1YWwocGFja2FnZVZlcnNpb24pXG5cblxuXHRzdWl0ZSBcIkVsZW1lbnQgQ3JlYXRpb25cIiwgKCktPlxuXHRcdHRlc3QgXCJCYXNpYyBDcmVhdGlvblwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20oJ2RpdicpXG5cdFx0XHRleHBlY3QodHlwZW9mIGRpdikudG8uZXF1YWwgJ29iamVjdCdcblx0XHRcdGV4cGVjdCh0eXBlb2YgZGl2LmVsKS50by5lcXVhbCAnb2JqZWN0J1xuXHRcdFx0ZXhwZWN0KGRpdi5lbC5jb25zdHJ1Y3Rvci5uYW1lKS50by5lcXVhbCAnSFRNTERpdkVsZW1lbnQnXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkudG8uYmUudW5kZWZpbmVkXG5cdFx0XHRleHBlY3QoZGl2LmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMFxuXG5cblx0XHR0ZXN0IFwiU2hvcnRjdXRzXCIsICgpLT5cblx0XHRcdGV4cGVjdChEb20uYSgpLmVsLmNvbnN0cnVjdG9yKS50by5lcXVhbChEb20oJ2EnKS5lbC5jb25zdHJ1Y3Rvcilcblx0XHRcdGV4cGVjdChEb20ubGluaygpLmVsLmNvbnN0cnVjdG9yKS50by5lcXVhbChEb20oJ2EnKS5lbC5jb25zdHJ1Y3Rvcilcblx0XHRcdGV4cGVjdChEb20uYW5jaG9yKCkuZWwuY29uc3RydWN0b3IpLnRvLmVxdWFsKERvbSgnYScpLmVsLmNvbnN0cnVjdG9yKVxuXHRcdFx0ZXhwZWN0KERvbS5kaXYoKS5lbC5jb25zdHJ1Y3RvcikudG8uZXF1YWwoRG9tKCdkaXYnKS5lbC5jb25zdHJ1Y3Rvcilcblx0XHRcdGV4cGVjdChEb20udGV4dCgpLmVsLmNvbnN0cnVjdG9yKS50by5lcXVhbChEb20oJ3RleHQnKS5lbC5jb25zdHJ1Y3Rvcilcblx0XHRcdGV4cGVjdChEb20uc3BhbigpLmVsLmNvbnN0cnVjdG9yKS50by5lcXVhbChEb20oJ3NwYW4nKS5lbC5jb25zdHJ1Y3Rvcilcblx0XHRcdGV4cGVjdChEb20uaDQoKS5lbC5jb25zdHJ1Y3RvcikudG8uZXF1YWwoRG9tKCdoNCcpLmVsLmNvbnN0cnVjdG9yKVxuXHRcdFx0ZXhwZWN0KERvbS5oZWFkZXIoKS5lbC5jb25zdHJ1Y3RvcikudG8uZXF1YWwoRG9tKCdoZWFkZXInKS5lbC5jb25zdHJ1Y3Rvcilcblx0XHRcdGV4cGVjdChEb20uZm9vdGVyKCkuZWwuY29uc3RydWN0b3IpLnRvLmVxdWFsKERvbSgnZm9vdGVyJykuZWwuY29uc3RydWN0b3IpXG5cdFx0XHRleHBlY3QoRG9tLnNlY3Rpb24oKS5lbC5jb25zdHJ1Y3RvcikudG8uZXF1YWwoRG9tKCdzZWN0aW9uJykuZWwuY29uc3RydWN0b3IpXG5cdFx0XHRleHBlY3QoRG9tLmJ1dHRvbigpLmVsLmNvbnN0cnVjdG9yKS50by5lcXVhbChEb20oJ2J1dHRvbicpLmVsLmNvbnN0cnVjdG9yKVxuXHRcdFx0ZXhwZWN0KERvbS5pbnB1dCgpLmVsLmNvbnN0cnVjdG9yKS50by5lcXVhbChEb20oJ2lucHV0JykuZWwuY29uc3RydWN0b3IpXG5cdFx0XHQjIGV4cGVjdChEb20ubWFpbigpLmVsLmNvbnN0cnVjdG9yKS50by5lcXVhbChEb20oJ21haW4nKS5lbC5jb25zdHJ1Y3Rvcilcblx0XHRcdHR5cGVzID0gWydhJywnZGl2JywndGV4dCcsJ3NwYW4nLCdoNCcsJ2hlYWRlcicsJ2Zvb3RlcicsJ3NlY3Rpb24nLCdidXR0b24nLCdpbnB1dCddXG5cdFx0XHRmb3IgdHlwZSBpbiB0eXBlc1xuXHRcdFx0XHRleHBlY3QoRG9tW3R5cGVdKCkuZWwuY29uc3RydWN0b3IubmFtZSkubm90LnRvLmNvbnRhaW4oJ1Vua25vd24nKVxuXHRcdFx0cmV0dXJuXG5cblxuXHRcdHRlc3QgXCJCYXNpYyBvcHRpb25zXCIsICgpLT5cblx0XHRcdEEgPSBEb20uZGl2KGNsYXNzOidhYmMtMTIzJywgcHJvcHM6eydhYmMnOjEyMywgJ2RlZic6NDU2fSlcblx0XHRcdEIgPSBEb20uZGl2KGlkOidCJywgY2xhc3NOYW1lOidhYmMtMTIzJywgYXR0cnM6eydkYXRhLWFiYyc6MTIzLCAnZGF0YS1kZWYnOjQ1Nn0pXG5cdFx0XHRDID0gRG9tLmlucHV0KHR5cGU6J3RleHQnLCBuYW1lOidhYmMnLCB2YWx1ZTonaGVsbG8nKVxuXHRcdFx0RCA9IERvbS5pbnB1dCh0eXBlOidjaGVja2JveCcsIGNoZWNrZWQ6dHJ1ZSlcblx0XHRcdEUgPSBEb20ub3B0aW9uKG5hbWU6J2FiYycsIHZhbHVlOidoZWxsbycsIHNlbGVjdGVkOnRydWUpXG5cdFx0XHRGID0gRG9tLmxpbmsoaHJlZjonaHR0cHM6Ly9nb29nbGUuY29tLycpXG5cdFx0XHRHID0gRG9tLmFuY2hvcih1cmw6J2h0dHBzOi8vZ29vZ2xlLmNvbS8nKVxuXHRcdFx0SCA9IERvbS50ZXh0KCdTb21lIHRleHQnKVxuXHRcdFx0SSA9IERvbS5pbWcoc3JjOidodHRwczovL2dvb2dsZS5jb20vJylcblxuXHRcdFx0ZXhwZWN0KEEuZWwuY2xhc3NOYW1lKS50by5lcXVhbCgnYWJjLTEyMycpXG5cdFx0XHRleHBlY3QoQS5lbC5hYmMpLnRvLmVxdWFsKDEyMylcblx0XHRcdGV4cGVjdChBLmVsLmRlZikudG8uZXF1YWwoNDU2KVxuXHRcdFx0ZXhwZWN0KEIuZWwuY2xhc3NOYW1lKS50by5lcXVhbCgnYWJjLTEyMycpXG5cdFx0XHRleHBlY3QoQi5lbC5pZCkudG8uZXF1YWwoJ0InKVxuXHRcdFx0ZXhwZWN0KEIuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFiYycpKS50by5lcXVhbCgnMTIzJylcblx0XHRcdGV4cGVjdChCLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1kZWYnKSkudG8uZXF1YWwoJzQ1NicpXG5cdFx0XHRleHBlY3QoQi5lbC5kYXRhc2V0LmFiYykudG8uZXF1YWwoJzEyMycpIGlmIEIuZWwuZGF0YXNldFxuXHRcdFx0ZXhwZWN0KEMuZWwudHlwZSkudG8uZXF1YWwoJ3RleHQnKVxuXHRcdFx0ZXhwZWN0KEMuZWwubmFtZSkudG8uZXF1YWwoJ2FiYycpXG5cdFx0XHRleHBlY3QoQy5lbC52YWx1ZSkudG8uZXF1YWwoJ2hlbGxvJylcblx0XHRcdGV4cGVjdChELmVsLmNoZWNrZWQpLnRvLmVxdWFsKHRydWUpXG5cdFx0XHRleHBlY3QoRS5lbC5uYW1lKS50by5lcXVhbCgnYWJjJylcblx0XHRcdGV4cGVjdChFLmVsLnNlbGVjdGVkKS50by5lcXVhbCh0cnVlKVxuXHRcdFx0ZXhwZWN0KEYuZWwuaHJlZikudG8uZXF1YWwoJ2h0dHBzOi8vZ29vZ2xlLmNvbS8nKVxuXHRcdFx0ZXhwZWN0KEcuZWwuaHJlZikudG8uZXF1YWwoJ2h0dHBzOi8vZ29vZ2xlLmNvbS8nKVxuXHRcdFx0ZXhwZWN0KEguZWwubm9kZVR5cGUpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QoSC5lbC50ZXh0Q29udGVudCkudG8uZXF1YWwoJ1NvbWUgdGV4dCcpXG5cdFx0XHRleHBlY3QoSS5lbC5zcmMpLnRvLmVxdWFsKCdodHRwczovL2dvb2dsZS5jb20vJylcblxuXG5cdFx0dGVzdCBcIkNyZWF0aW9uIHcvIGNoaWxkcmVuXCIsICgpLT5cblx0XHRcdEEgPSBEb20uZGl2KG51bGwsICdTb21lIHRleHQnKVxuXHRcdFx0QiA9IERvbS5kaXYobnVsbCwgRG9tLnNwYW4oKSwgJ1NvbWUgdGV4dCcsIERvbS5zcGFuKCkpXG5cblx0XHRcdGV4cGVjdChBLmVsLmNoaWxkTm9kZXMubGVuZ3RoKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KEEuZWwuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgwKVxuXHRcdFx0ZXhwZWN0KEEuZWwuY2hpbGROb2Rlc1swXS5ub2RlVHlwZSkudG8uZXF1YWwoMylcblx0XHRcdGV4cGVjdChBLmVsLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQpLnRvLmVxdWFsKCdTb21lIHRleHQnKVxuXHRcdFx0ZXhwZWN0KEEuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KEIuZWwuY2hpbGROb2Rlcy5sZW5ndGgpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QoQi5lbC5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3QoQi5lbC5jaGlsZE5vZGVzWzBdLm5vZGVUeXBlKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KEIuZWwuY2hpbGROb2Rlc1swXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKS50by5lcXVhbCgnc3BhbicpXG5cdFx0XHRleHBlY3QoQi5lbC5jaGlsZE5vZGVzWzFdLm5vZGVUeXBlKS50by5lcXVhbCgzKVxuXHRcdFx0ZXhwZWN0KEIuZWwuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCkudG8uZXF1YWwoJ1NvbWUgdGV4dCcpXG5cdFx0XHRleHBlY3QoQi5lbC5jaGlsZE5vZGVzWzJdLm5vZGVUeXBlKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KEIuZWwuY2hpbGROb2Rlc1syXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKS50by5lcXVhbCgnc3BhbicpXG5cdFx0XHRleHBlY3QoQi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDMpXG5cblxuXHRcdHRlc3QgXCJBcnJheSBzeW50YXhcIiwgKCktPlxuXHRcdFx0c2VjdGlvbiA9IERvbShcblx0XHRcdFx0WydzZWN0aW9uJywge3N0eWxlOmRpc3BsYXk6J2lubGluZSd9LCBcblx0XHRcdFx0XHRbJ2RpdicsIG51bGwsICdjaGlsZEEnXVxuXHRcdFx0XHRcdFsnc3BhbicsIG51bGwsIFxuXHRcdFx0XHRcdFx0WydzdHJvbmcnLCBudWxsLCAnY2hpbGRCJ11cblx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0WydkaXYnLCBudWxsLCAnY2hpbGRDJywgXG5cdFx0XHRcdFx0XHRbJ3NwYW4nLCBudWxsLCAnY2hpbGRDXzEnXVxuXHRcdFx0XHRcdFx0WydzcGFuJywgbnVsbCwgJ2NoaWxkQ18yJ11cblx0XHRcdFx0XHRdXG5cdFx0XHRcdF1cblx0XHRcdClcblxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24pLm5vdC50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5yYXcuc3R5bGUuZGlzcGxheSkudG8uZXF1YWwoJ2lubGluZScpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblsxXS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblsyXS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblsyXS5jaGlsZHJlblsxXS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblsyXS5jaGlsZHJlblsyXS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblswXS50ZXh0KS50by5lcXVhbCgnY2hpbGRBJylcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuWzFdLnRleHQpLnRvLmVxdWFsKCdjaGlsZEInKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW5bMl0udGV4dCkudG8uZXF1YWwoJ2NoaWxkQ2NoaWxkQ18xY2hpbGRDXzInKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW5bMl0uY2hpbGRyZW5bMV0udGV4dCkudG8uZXF1YWwoJ2NoaWxkQ18xJylcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzJdLnRleHQpLnRvLmVxdWFsKCdjaGlsZENfMicpXG5cblxuXHRcdHRlc3QgXCJFeGlzdGluZyBFbGVtZW50XCIsICgpLT5cblx0XHRcdGRpdlJhdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRBID0gRG9tKGRpdlJhdylcblx0XHRcdEIgPSBEb20oZGl2UmF3KVxuXHRcdFx0QyA9IERvbShBKVxuXG5cdFx0XHRleHBlY3QoQS5lbCkudG8uZXF1YWwoZGl2UmF3KVxuXHRcdFx0ZXhwZWN0KEIuZWwpLnRvLmVxdWFsKGRpdlJhdylcblx0XHRcdGV4cGVjdChDLmVsKS50by5lcXVhbChkaXZSYXcpXG5cdFx0XHRleHBlY3QoQSkudG8uZXF1YWwoQilcblx0XHRcdGV4cGVjdChCKS50by5lcXVhbChDKVxuXHRcdFx0ZXhwZWN0KEMpLnRvLmVxdWFsKGRpdlJhdy5fcXVpY2tFbGVtZW50KVxuXG5cblx0XHR0ZXN0IFwiRXhpc3RpbmcgRWxlbWVudCB3LyBPcHRpb25zXCIsICgpLT5cblx0XHRcdGRpdlJhdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRkaXZSYXcuaWQgPSAnQSdcblxuXHRcdFx0ZGl2ID0gRG9tKGRpdlJhdywge2lkOidCJywgY2xhc3M6J2FiYy0xMjMnfSlcblx0XHRcdGV4cGVjdChkaXZSYXcuaWQpLnRvLmVxdWFsKCdCJylcblx0XHRcdGV4cGVjdChkaXZSYXcuY2xhc3NOYW1lKS50by5lcXVhbCgnYWJjLTEyMycpXG5cdFx0XHRcblx0XHRcdGRpdiA9IERvbShkaXYsIHtpZDonQycsIGNsYXNzOidkZWYtNDU2J30pXG5cdFx0XHRleHBlY3QoZGl2UmF3LmlkKS50by5lcXVhbCgnQycpXG5cdFx0XHRleHBlY3QoZGl2UmF3LmNsYXNzTmFtZSkudG8uZXF1YWwoJ2RlZi00NTYnKVxuXG5cblx0XHR0ZXN0IFwiRG9jdW1lbnQgbm9kZVwiLCAoKS0+XG5cdFx0XHRkb2MgPSBEb20oZG9jdW1lbnQpXG5cdFx0XHRleHBlY3QoZG9jKS5ub3QudG8uYmUudW5kZWZpbmVkXG5cdFx0XHRleHBlY3QoZG9jLnJhdykudG8uZXF1YWwoZG9jdW1lbnQpXG5cdFx0XHRleHBlY3QoZG9jLnBhcmVudCkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KGRvYy5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoRG9tKHNhbmRib3gpLnBhcmVudHMpLm5vdC50by5jb250YWluKGRvYylcblx0XHRcdGV4cGVjdChEb20oc2FuZGJveCkucGFyZW50cykudG8uY29udGFpbihkb2MuY2hpbGRyZW5bMF0pXG5cblxuXHRcdHRlc3QgXCJXaW5kb3cgb2JqZWN0XCIsICgpLT5cblx0XHRcdHdpbiA9IERvbSh3aW5kb3cpXG5cdFx0XHRleHBlY3Qod2luKS5ub3QudG8uYmUudW5kZWZpbmVkXG5cdFx0XHRleHBlY3Qod2luLnJhdyBpcyB3aW5kb3cpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdCh3aW4ucGFyZW50KS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3Qod2luLmNoaWxkcmVuKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3Qod2luLmFwcGVuZCkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KHdpbi5odG1sKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3Qod2luLnN0eWxlKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoRG9tKHNhbmRib3gpLnBhcmVudHMpLm5vdC50by5jb250YWluKHdpbilcblxuXG5cdFx0dGVzdCBcIkNyZWF0aW9uIHcvIHN0eWxpbmdcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdiBzdHlsZTpcblx0XHRcdFx0J3dpZHRoJzogJzEwcHgnXG5cdFx0XHRcdCdoZWlnaHQnOiAxNVxuXHRcdFx0XHQnbGFtZW8nOiAnMTlweCdcblx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAnYmx1ZSdcblx0XHRcdFx0J2JhY2tncm91bmRTaXplJzogJ2NvdmVyJ1xuXG5cdFx0XHRzYW5kYm94LmFwcGVuZENoaWxkKGRpdi5lbClcblx0XHRcdGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRpdi5lbClcblxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZS5sYW1lbykudG8uZXF1YWwgdW5kZWZpbmVkXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5sYW1lbykudG8uZXF1YWwgdW5kZWZpbmVkXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwgJzEwcHgnXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsICcxNXB4J1xuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuYmFja2dyb3VuZENvbG9yKS5ub3QudG8uZXF1YWwgJydcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmJhY2tncm91bmRTaXplKS50by5lcXVhbCAnY292ZXInXG5cblxuXHRcdHRlc3QgXCJTVkcgZWxlbWVudHMgY2FuIGJlIGNyZWF0ZWQgdmlhIGEgJyonIGluIHRoZSBlbGVtZW50J3MgdHlwZSBzdHJpbmdcIiwgKCktPlxuXHRcdFx0c3ZnQmFkID0gRG9tKCdzdmcnKS5lbFxuXHRcdFx0c3ZnR29vZCA9IERvbSgnKnN2ZycpLmVsXG5cdFx0XHRzdmdQb2x5QmFkID0gRG9tKCdwb2x5bGluZScpLmVsXG5cdFx0XHRzdmdQb2x5R29vZCA9IERvbSgnKnBvbHlsaW5lJykuZWxcblx0XHRcdHN2Z0RpdiA9IERvbSgnKmRpdicpLmVsXG5cblx0XHRcdGV4cGVjdChzdmdCYWQuY29uc3RydWN0b3IubmFtZSkudG8uZXF1YWwoJ0hUTUxVbmtub3duRWxlbWVudCcpXG5cdFx0XHRleHBlY3Qoc3ZnUG9seUJhZC5jb25zdHJ1Y3Rvci5uYW1lKS50by5lcXVhbCgnSFRNTFVua25vd25FbGVtZW50Jylcblx0XHRcdGV4cGVjdChzdmdHb29kLmNvbnN0cnVjdG9yLm5hbWUpLnRvLmVxdWFsKCdTVkdTVkdFbGVtZW50Jylcblx0XHRcdGV4cGVjdChzdmdQb2x5R29vZC5jb25zdHJ1Y3Rvci5uYW1lKS50by5lcXVhbCgnU1ZHUG9seWxpbmVFbGVtZW50Jylcblx0XHRcdGV4cGVjdChzdmdEaXYuY29uc3RydWN0b3IubmFtZSkudG8uZXF1YWwoJ1NWR0VsZW1lbnQnKVxuXG5cblx0XHR0ZXN0IFwiUXVpY2tEb20uaHRtbCgpIGFjY2VwdHMgYW4gaHRtbCBzdHJpbmcgd2hpY2ggd291bGQgYmUgcGFyc2VkIGFuZCBjb252ZXJ0ZWQgaW50byBhIFF1aWNrQmF0Y2ggaW5zdGFuY2VcIiwgKCktPlxuXHRcdFx0aHRtbFN0cmluZyA9IFwiXG5cdFx0XHRcdDxkaXY+Zmlyc3RDaGlsZFRleHQ8L2Rpdj48c3Bhbj5zZWNvbmRDaGlsZFRleHQ8L3NwYW4+XG5cdFx0XHRcdHRleHROb2RlXG5cdFx0XHRcdDxzdHJvbmc+YWJjMTIzPC9zdHJvbmc+XG5cdFx0XHRcIlxuXHRcdFx0d2luZG93LmJhdGNoID0gRG9tLmh0bWwoaHRtbFN0cmluZylcblxuXHRcdFx0ZXhwZWN0KHR5cGVvZiBiYXRjaCkudG8uZXF1YWwgJ29iamVjdCdcblx0XHRcdGV4cGVjdChiYXRjaC5jb25zdHJ1Y3Rvci5uYW1lKS50by5lcXVhbCAnUXVpY2tCYXRjaCdcblx0XHRcdGV4cGVjdChiYXRjaC5lbGVtZW50cy5sZW5ndGgpLnRvLmVxdWFsIDRcblx0XHRcdGV4cGVjdChiYXRjaC5lbGVtZW50c1swXS50eXBlKS50by5lcXVhbCAnZGl2J1xuXHRcdFx0ZXhwZWN0KGJhdGNoLmVsZW1lbnRzWzFdLnR5cGUpLnRvLmVxdWFsICdzcGFuJ1xuXHRcdFx0ZXhwZWN0KGJhdGNoLmVsZW1lbnRzWzJdLnR5cGUpLnRvLmVxdWFsICd0ZXh0J1xuXHRcdFx0ZXhwZWN0KGJhdGNoLmVsZW1lbnRzWzNdLnR5cGUpLnRvLmVxdWFsICdzdHJvbmcnXG5cdFx0XHRleHBlY3QoYmF0Y2guZWxlbWVudHNbMF0udGV4dCkudG8uZXF1YWwgJ2ZpcnN0Q2hpbGRUZXh0J1xuXHRcdFx0ZXhwZWN0KGJhdGNoLmVsZW1lbnRzWzFdLnRleHQpLnRvLmVxdWFsICdzZWNvbmRDaGlsZFRleHQnXG5cdFx0XHRleHBlY3QoYmF0Y2guZWxlbWVudHNbMl0udGV4dCkudG8uaW5jbHVkZSAndGV4dE5vZGUnXG5cdFx0XHRleHBlY3QoYmF0Y2guZWxlbWVudHNbM10udGV4dCkudG8uZXF1YWwgJ2FiYzEyMydcblxuXG5cblx0XHR0ZXN0IFwiTWV0aG9kL1Byb3BlcnR5IGFsaWFzZXNcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tKCdkaXYnKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcpLnRvLmVxdWFsKGRpdi5lbClcblx0XHRcdGV4cGVjdChkaXZbMF0pLnRvLmVxdWFsKGRpdi5lbClcblx0XHRcdGV4cGVjdChkaXYuY3NzKS50by5lcXVhbChkaXYuc3R5bGUpXG5cdFx0XHRleHBlY3QoZGl2LnJlcGxhY2VXaXRoKS50by5lcXVhbChkaXYucmVwbGFjZSlcblxuXG5cblx0c3VpdGUgXCJFdmVudHNcIiwgKCktPlxuXHRcdHRlc3QgXCJFdmVudHMgY2FuIGJlIGxpc3RlbmVkIHRvIHZpYSB0aGUgLm9uIG1ldGhvZFwiLCAoKS0+XG5cdFx0XHRlbWl0Q291bnRBID0gZW1pdENvdW50QiA9IDBcblx0XHRcdGRpdiA9IERvbS5kaXYoKVxuXHRcdFx0ZGl2Lm9uICdteUNsaWNrJywgKGV2ZW50KS0+XG5cdFx0XHRcdGV4cGVjdCh0eXBlb2YgZXZlbnQpLnRvLmVxdWFsICdvYmplY3QnXG5cdFx0XHRcdGV4cGVjdChldmVudC50eXBlKS50by5lcXVhbCAnbXlDbGljaydcblx0XHRcdFx0ZW1pdENvdW50QSsrXG5cdFx0XHRcblxuXHRcdFx0ZGl2LmVsLmVtaXRFdmVudCgnbXlDbGljaycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMSlcblx0XHRcdGRpdi5lbC5lbWl0RXZlbnQoJ215Q2xpY2snKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDIpXG5cdFx0XHRcblx0XHRcdGRpdi5vbiAnbXlDbGljaycsIChldmVudCktPiBlbWl0Q291bnRCKytcblx0XHRcdGRpdi5lbC5lbWl0RXZlbnQoJ215Q2xpY2snKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMylcblx0XHRcdGRpdi5lbC5lbWl0RXZlbnQoJ215Q2xpY2snKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoNClcblxuXG5cdFx0dGVzdCBcIkV2ZW50cyBjYW4gYmUgZW1pdHRlZCB2aWEgdGhlIC5lbWl0IG1ldGhvZFwiLCAoKS0+XG5cdFx0XHRlbWl0Q291bnRBID0gZW1pdENvdW50QiA9IDBcblx0XHRcdGRpdiA9IERvbS5kaXYoKVxuXHRcdFx0ZGl2Lm9uICdteUV2ZW50JywgKCktPiBlbWl0Q291bnRBKytcblx0XHRcdGRpdi5lbC5hZGRFdmVudExpc3RlbmVyICdteUV2ZW50JywgKCktPiBlbWl0Q291bnRCKytcblxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDApXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMClcblx0XHRcdFxuXHRcdFx0ZGl2LmVtaXQoJ215RXZlbnQnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMSlcblx0XHRcdFxuXHRcdFx0ZGl2LmVsLmVtaXRFdmVudCgnbXlFdmVudCcpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgyKVxuXG5cblx0XHR0ZXN0IFwiQm9vbGVhbnMgY2FuIGJlIHBhc3NlZCBmb3IgdGhlIDJuZCBhbmQgM3JkIGFyZ3Mgb2YgLmVtaXQgdG8gY29udHJvbCBldmVudC5idWJibGVzIGFuZCBldmVudC5jYW5jZWxhYmxlXCIsICgpLT5cblx0XHRcdGVtaXRDb3VudEEgPSBlbWl0Q291bnRCID0gZW1pdENvdW50QyA9IDBcblx0XHRcdGRpdiA9IERvbS5kaXYoKVxuXHRcdFx0ZGl2Lm9uICdldmVudEEnLCAoZXZlbnQpLT4gZW1pdENvdW50QSsrOyBleHBlY3QoZXZlbnQuYnViYmxlcykudG8uYmUudHJ1ZTsgZXhwZWN0KGV2ZW50LmNhbmNlbGFibGUpLnRvLmJlLnRydWVcblx0XHRcdGRpdi5vbiAnZXZlbnRCJywgKGV2ZW50KS0+IGVtaXRDb3VudEIrKzsgZXhwZWN0KGV2ZW50LmJ1YmJsZXMpLnRvLmJlLmZhbHNlOyBleHBlY3QoZXZlbnQuY2FuY2VsYWJsZSkudG8uYmUudHJ1ZVxuXHRcdFx0ZGl2Lm9uICdldmVudEMnLCAoZXZlbnQpLT4gZW1pdENvdW50QysrOyBleHBlY3QoZXZlbnQuYnViYmxlcykudG8uYmUuZmFsc2U7IGV4cGVjdChldmVudC5jYW5jZWxhYmxlKS50by5iZS5mYWxzZVxuXG5cdFx0XHRkaXYuZW1pdCgnZXZlbnRBJyk7IGRpdi5lbWl0KCdldmVudEInLCBmYWxzZSk7IGRpdi5lbWl0KCdldmVudEMnLCBmYWxzZSwgZmFsc2UpO1xuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChlbWl0Q291bnRDKS50by5lcXVhbCgxKVxuXG5cblx0XHR0ZXN0IFwiRXZlbnQgbGlzdGVuZXJzIGNhbiBiZSByZW1vdmVkIHZpYSB0aGUgLm9mZiBtZXRob2RcIiwgKCktPlxuXHRcdFx0ZW1pdENvdW50QSA9IGVtaXRDb3VudEIgPSBlbWl0Q291bnRDID0gZW1pdENvdW50RCA9IDBcblx0XHRcdGRpdiA9IERvbS5kaXYoKVxuXHRcdFx0ZGl2Lm9uICdteUV2ZW50JywgKCktPiBlbWl0Q291bnRBKytcblx0XHRcdGRpdi5vbiAnbXlFdmVudCcsIGV2ZW50Q0I9KCktPiBlbWl0Q291bnRCKytcblx0XHRcdGRpdi5vbiAnYW5vdGhlckV2ZW50JywgKCktPiBlbWl0Q291bnRDKytcblx0XHRcdGRpdi5lbC5hZGRFdmVudExpc3RlbmVyICdteUV2ZW50JywgKCktPiBlbWl0Q291bnREKytcblxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDApXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMClcblx0XHRcdGV4cGVjdChlbWl0Q291bnRDKS50by5lcXVhbCgwKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEQpLnRvLmVxdWFsKDApXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50Jyk7IGRpdi5lbWl0KCdhbm90aGVyRXZlbnQnKTtcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QykudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChlbWl0Q291bnREKS50by5lcXVhbCgxKVxuXHRcdFx0XG5cdFx0XHRkaXYub2ZmKCdteUV2ZW50JywgZXZlbnRDQilcblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50Jyk7IGRpdi5lbWl0KCdhbm90aGVyRXZlbnQnKTtcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QykudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChlbWl0Q291bnREKS50by5lcXVhbCgyKVxuXHRcdFx0XG5cdFx0XHRkaXYub24gJ215RXZlbnQnLCAoKS0+IGVtaXRDb3VudEIrK1xuXHRcdFx0ZGl2Lm9mZignbXlFdmVudCcpXG5cdFx0XHRkaXYuZW1pdCgnbXlFdmVudCcpOyBkaXYuZW1pdCgnYW5vdGhlckV2ZW50Jyk7XG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEMpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50RCkudG8uZXF1YWwoMylcblx0XHRcdFxuXHRcdFx0ZGl2Lm9uICdteUV2ZW50JywgKCktPiBlbWl0Q291bnRBKytcblx0XHRcdGRpdi5vbiAnbXlFdmVudCcsICgpLT4gZW1pdENvdW50QisrXG5cdFx0XHRkaXYub2ZmKClcblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50Jyk7IGRpdi5lbWl0KCdhbm90aGVyRXZlbnQnKTtcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QykudG8uZXF1YWwoMylcblx0XHRcdGV4cGVjdChlbWl0Q291bnREKS50by5lcXVhbCg0KVxuXG5cblx0XHR0ZXN0IFwiRXZlbnRzIGNhbiBiZSBuYW1lZCB2aWEgYSAnPGV2ZW50Pi48bmFtZT4nIHN5bnRheCB3aGljaCBjYW4gYmUgdXNlZCB0byByZW1vdmUgbGlzdGVuZXJzIGxhdGVyIG9uIHdpdGhvdXQgdGhlIG9yaWdpbmFsIGNhbGxiYWNrc1wiLCAoKS0+XG5cdFx0XHRlbWl0Q291bnRBID0gZW1pdENvdW50QiA9IDBcblx0XHRcdGRpdiA9IERvbS5kaXYoKS5hcHBlbmRUbyhzYW5kYm94KVxuXG5cdFx0XHRhdHRhY2hMaXN0ZW5lcnMgPSAoKS0+XG5cdFx0XHRcdGRpdi5vbiAnbXlFdmVudC5zb21lTmFtZScsICgpLT4gZW1pdENvdW50QSsrO1xuXHRcdFx0XHRkaXYub24gJ215RXZlbnQnLCAoKS0+IGVtaXRDb3VudEIrKztcblxuXHRcdFx0YXR0YWNoTGlzdGVuZXJzKClcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgwKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDApXG5cblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50Jylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50LnNvbWVOYW1lJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRcblx0XHRcdGRpdi5vZmYoJ215RXZlbnQuc29tZU90aGVyTmFtZScpXG5cdFx0XHRkaXYuZW1pdCgnbXlFdmVudCcpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgyKVxuXHRcdFx0XG5cdFx0XHRkaXYub2ZmKCdteUV2ZW50LnNvbWVOYW1lJylcblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50Jylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDMpXG5cdFx0XHRcblx0XHRcdGRpdi5vZmYoJ215RXZlbnQnKVxuXHRcdFx0YXR0YWNoTGlzdGVuZXJzKClcblx0XHRcdGRpdi5lbWl0KCdteUV2ZW50Jylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgzKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDQpXG5cdFx0XHRcblx0XHRcdGRpdi5vZmYoJ215RXZlbnQnKVxuXHRcdFx0ZGl2LmVtaXQoJ215RXZlbnQnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoNClcblxuXG5cdFx0dGVzdCBcIk11bHRpcGxlIGV2ZW50cyBjYW4gYmUgcmVnaXN0ZXJlZC9kZXJlZ2lzdGVyZWQgYXQgb25jZSB1c2luZyB3aGl0ZXNwYWNlIHNlcGFyYXRvcnNcIiwgKCktPlxuXHRcdFx0ZW1pdENvdW50ID0gMFxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cblx0XHRcdGRpdi5vbiAnb25lIHR3byAgIHRocmVlJywgKCktPiBlbWl0Q291bnQrK1xuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgMFxuXG5cdFx0XHRkaXYuZW1pdCgnb25lJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDFcblxuXHRcdFx0ZGl2LmVtaXQoJ3R3bycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAyXG5cblx0XHRcdGRpdi5lbWl0KCd0aHJlZScpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAzXG5cblx0XHRcdGRpdi5vZmYoJ29uZSAgICAgIHRocmVlJylcblx0XHRcdGRpdi5lbWl0KCdvbmUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgM1xuXG5cdFx0XHRkaXYuZW1pdCgndHdvJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDRcblxuXHRcdFx0ZGl2LmVtaXQoJ3RocmVlJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDRcblxuXHRcdFx0ZGl2Lm9mZigpXG5cdFx0XHRkaXYuZW1pdCgnb25lJyk7IGRpdi5lbWl0KCd0d28nKTsgZGl2LmVtaXQoJ3RocmVlJyk7XG5cdFx0XHRkaXYub24gJ29uZSB0d28gICB0aHJlZS5zb21lTmFtZScsICgpLT4gZW1pdENvdW50Kytcblx0XHRcdGRpdi5vbiAnb25lIHR3byAgIHRocmVlJywgKCktPiBlbWl0Q291bnQrK1xuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgNFxuXG5cdFx0XHRkaXYuZW1pdCgnb25lJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDZcblxuXHRcdFx0ZGl2LmVtaXQoJ3R3bycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCA4XG5cblx0XHRcdGRpdi5lbWl0KCd0aHJlZScpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAxMFxuXG5cdFx0XHRkaXYub2ZmKCd0d28gXFx0b25lLnNvbWVOYW1lJylcblx0XHRcdGRpdi5lbWl0KCdvbmUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgMTFcblxuXHRcdFx0ZGl2LmVtaXQoJ3R3bycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAxMlxuXG5cdFx0XHRkaXYuZW1pdCgndGhyZWUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgMTRcblx0XHRcdFxuXHRcdFx0ZGl2Lm9mZignb25lIHRocmVlJylcblx0XHRcdGRpdi5lbWl0KCdvbmUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgMTRcblxuXHRcdFx0ZGl2LmVtaXQoJ3R3bycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAxNVxuXG5cdFx0XHRkaXYuZW1pdCgndGhyZWUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgMTVcblxuXG5cdFx0dGVzdCBcIkV2ZW50cyBjYW4gYmUgbGlzdGVuZWQgZm9yIG9uY2UgdmlhIHRoZSAub25jZSBtZXRob2RcIiwgKCktPlxuXHRcdFx0ZW1pdENvdW50QSA9IGVtaXRDb3VudEIgPSAwXG5cdFx0XHRkaXYgPSBEb20uZGl2KClcblx0XHRcdGRpdi5vbmNlICdteUNsaWNrJywgKGV2ZW50KS0+XG5cdFx0XHRcdGV4cGVjdCh0eXBlb2YgZXZlbnQpLnRvLmVxdWFsICdvYmplY3QnXG5cdFx0XHRcdGV4cGVjdChldmVudC50eXBlKS50by5lcXVhbCAnbXlDbGljaydcblxuXHRcdFx0ZGl2Lm9uICdteUNsaWNrJywgKCktPiBlbWl0Q291bnRBKytcblx0XHRcdGRpdi5vbmNlICdteUNsaWNrJywgKCktPiBlbWl0Q291bnRCKytcblx0XHRcdFxuXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoMClcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgwKVxuXHRcdFx0XG5cdFx0XHRkaXYuZWwuZW1pdEV2ZW50KCdteUNsaWNrJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnRBKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEIpLnRvLmVxdWFsKDEpXG5cdFx0XHRcblx0XHRcdGRpdi5lbC5lbWl0RXZlbnQoJ215Q2xpY2snKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMSlcblx0XHRcdFxuXHRcdFx0ZGl2Lm9uY2UgJ215Q2xpY2snLCAoZXZlbnQpLT4gZW1pdENvdW50QisrXG5cdFx0XHRcblx0XHRcdGRpdi5lbC5lbWl0RXZlbnQoJ215Q2xpY2snKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudEEpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QikudG8uZXF1YWwoMilcblx0XHRcdFxuXHRcdFx0ZGl2LmVsLmVtaXRFdmVudCgnbXlDbGljaycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50QSkudG8uZXF1YWwoNClcblx0XHRcdGV4cGVjdChlbWl0Q291bnRCKS50by5lcXVhbCgyKVxuXG5cblx0XHR0ZXN0IFwiUHJlLWRlZmluZWQgZXZlbnQgbGlzdGVuZXJzIGNhbiBiZSBwYXNzZWQgaW4gb3B0aW9ucy5ldmVudHNcIiwgKCktPlxuXHRcdFx0ZW1pdENvdW50ID0gMFxuXHRcdFx0ZW1pdENvbnRleHQgPSBudWxsXG5cdFx0XHRsaXN0ZW5lcnMgPVxuXHRcdFx0XHQnb25lIHR3byB0aHJlZSc6ICgpLT4gZW1pdENvdW50Kytcblx0XHRcdFx0J2ZvdXInOiAoKS0+IGVtaXRDb3VudCsrXG5cdFx0XHRcdCdmaXZlJzogKCktPiBlbWl0Q29udGV4dCA9IEBcblx0XHRcdFxuXHRcdFx0ZGl2ID0gRG9tLmRpdihldmVudHM6bGlzdGVuZXJzKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgMFxuXG5cdFx0XHRkaXYuZW1pdCgnb25lJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDFcblxuXHRcdFx0ZGl2LmVtaXQoJ3R3bycpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAyXG5cblx0XHRcdGRpdi5lbWl0KCd0aHJlZScpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCAzXG5cblx0XHRcdGRpdi5lbWl0KCdmb3VyJylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDRcblxuXHRcdFx0ZGl2Lm9mZignb25lICAgICAgdGhyZWUnKVxuXHRcdFx0ZGl2LmVtaXQoJ29uZScpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCA0XG5cblx0XHRcdGRpdi5lbWl0KCd0d28nKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgNVxuXG5cdFx0XHRkaXYuZW1pdCgndGhyZWUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgNVxuXG5cdFx0XHRkaXYuZW1pdCgnZml2ZScpXG5cdFx0XHRleHBlY3QoZW1pdENvbnRleHQpLnRvLmVxdWFsIGRpdlswXVxuXG5cdFx0XHRkaXYub2ZmKClcblx0XHRcdGRpdi5lbWl0KCdvbmUnKTsgZGl2LmVtaXQoJ3R3bycpOyBkaXYuZW1pdCgndGhyZWUnKTsgZGl2LmVtaXQoJ2ZvdXInKTtcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsIDVcblxuXHRcdFx0ZGl2QiA9IERvbS5kaXYoZXZlbnRzOmxpc3RlbmVycylcblx0XHRcdGRpdkIuZW1pdCgnb25lJyk7IGRpdkIuZW1pdCgndGhyZWUnKVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwgN1xuXHRcdFx0XG5cdFx0XHRleHBlY3QoZW1pdENvbnRleHQpLnRvLmVxdWFsIGRpdlswXVxuXHRcdFx0ZGl2Qi5lbWl0KCdmaXZlJylcblx0XHRcdGV4cGVjdChlbWl0Q29udGV4dCkudG8uZXF1YWwgZGl2QlswXVxuXG5cblxuXG5cblx0c3VpdGUgXCJTdHlsZVwiLCAoKS0+XG5cdFx0dGVzdCBcIlN0eWxlcyBjYW4gYmUgc2V0IHZpYSB0aGUgLnN0eWxlLy5jc3MgbWV0aG9kIHdpdGggYXJncyBwYWlyIG9mIFtwcm9wZXJ0eSwgdmFsdWVdXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYoc3R5bGU6e3dpZHRoOicxNXB4J30pLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkaXYuZWwpXG5cblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMTVweCcpXG5cblx0XHRcdGRpdi5zdHlsZSAnd2lkdGgnLCAnMjVweCdcblx0XHRcdGV4cGVjdChkaXYuZWwuc3R5bGUud2lkdGgpLnRvLmVxdWFsKCcyNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMjVweCcpXG5cblx0XHRcdGRpdi5zdHlsZSAnd2lkdGgnLCAnNXZoJ1xuXHRcdFx0ZXhwZWN0KGRpdi5lbC5zdHlsZS53aWR0aCkudG8uZXF1YWwoJzV2aCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uY29udGFpbigncHgnKVxuXG5cblx0XHR0ZXN0IFwiTXVsdGlwbGUgU3R5bGVzIGNhbiBiZSBzZXQgdmlhIHRoZSAuc3R5bGUvLmNzcyBtZXRob2QgYnkgcGFzc2luZyBhIHN0eWxlIG9iamVjdFwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KHN0eWxlOnt3aWR0aDonMTVweCd9KS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0Y29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZGl2LmVsKVxuXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMHB4JylcblxuXHRcdFx0ZGl2LnN0eWxlIHt3aWR0aDoyNSwgaGVpZ2h0OiczMyd9XG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzI1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMzNweCcpXG5cblxuXHRcdHRlc3QgXCJBIG51bGwgdmFsdWUgY2FuIGJlIHBhc3NlZCBmb3IgYSBwcm9wZXJ0eSBpbiBvcmRlciB0byBkZWxldGUgdGhhdCBzdHlsZVwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KHN0eWxlOnt3aWR0aDonMTVweCd9KS5hcHBlbmRUbyhzYW5kYm94KVxuXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLndpZHRoKS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJycpXG5cblx0XHRcdGRpdi5zdHlsZSB7d2lkdGg6bnVsbCwgaGVpZ2h0OjEyfVxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5zdHlsZS53aWR0aCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzEycHgnKVxuXG5cdFx0XHRkaXYuY3NzICdoZWlnaHQnLCBudWxsXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLndpZHRoKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXYuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblxuXG5cdFx0dGVzdCBcIklmIHBhc3NlZCBhIHByb3BlcnR5IG5hbWUgd2l0aG91dCBhIHZhbHVlLCB0aGUgY29tcHV0ZWQgdmFsdWUgZm9yIHRoYXQgcHJvcGVydHkgd2lsbCBiZSByZXR1cm5lZFwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KHN0eWxlOnt3aWR0aDonMTVweCd9KS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0Y29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZGl2LmVsKVxuXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd3aWR0aCcpLnRvLmVxdWFsICcxNXB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwgJzBweCdcblxuXHRcdFx0ZGl2LnN0eWxlIHdpZHRoOm51bGwsIGhlaWdodDogNTVcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwgY29tcHV0ZWRTdHlsZS53aWR0aFxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwgJzU1cHgnXG5cdFx0XHRcblx0XHRcdGRpdi5zdHlsZSAnd2lkdGgnLCAnMTl2dydcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uY29udGFpbiAncHgnXG5cblxuXHRcdHRlc3QgXCJGdW5jdGlvbnMgY2FuIGJlIHBhc3NlZCBhcyB2YWx1ZXMgZm9yIHByb3BlcnRpZXMgaW4gc3R5bGUgb2JqZWN0cyB3aGljaCB3aWxsIGJlIGludm9rZWQgd2l0aCB0aGUgZWxlbWVudCdzIG9wdGlvbnMucmVsYXRlZEVsZW1lbnQgYXMgdGhlIG9ubHkgYXJndW1lbnRcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdihyYXRlOjI1KS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0YXBwbHlXaWR0aCA9IChleHBlY3RlZEluc3RhbmNlKS0+XG5cdFx0XHRcdGRpdi5zdHlsZSB3aWR0aDogKGluc3RhbmNlKS0+XG5cdFx0XHRcdFx0ZXhwZWN0KHR5cGVvZiBpbnN0YW5jZSkudG8uZXF1YWwgJ29iamVjdCdcblx0XHRcdFx0XHRleHBlY3QoaW5zdGFuY2UpLnRvLmVxdWFsKGV4cGVjdGVkSW5zdGFuY2UpXG5cdFx0XHRcdFx0cmV0dXJuIGRpdi5vcHRpb25zLnJhdGVcblxuXHRcdFx0YXBwbHlXaWR0aChkaXYpXG5cdFx0XHRleHBlY3QoZGl2Lm9wdGlvbnMucmF0ZSkudG8uZXF1YWwgMjVcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwgJzI1cHgnXG5cblx0XHRcdGRpdi5vcHRpb25zLnJhdGUgPSAyNTBcblx0XHRcdGRpdi5vcHRpb25zLnJlbGF0ZWRJbnN0YW5jZSA9IGFub3RoZXJPYmogPSB7fVxuXHRcdFx0YXBwbHlXaWR0aChhbm90aGVyT2JqKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnd2lkdGgnKS50by5lcXVhbCAnMjUwcHgnXG5cblxuXHRcdHRlc3QgXCIuc3R5bGVTYWZlKCkgY2FuIGJlIHVzZWQgdG8gb2J0YWluIHRoZSB2YWx1ZSBmb3IgYSBnaXZlbiBwcm9wZXJ0eSBldmVuIGZvciBub24taW5zZXJ0ZWQgZWxlbWVudHMgb3IgZWxlbWVudHMgd2l0aCBvcHRpb25zLnN0eWxlQWZ0ZXJJbnNlcnRcIiwgKCktPlxuXHRcdFx0c3R5bGUgPVxuXHRcdFx0XHR3aWR0aDogJzhweCdcblx0XHRcdFx0aGVpZ2h0OiAnOXB4J1xuXHRcdFx0XHQkaGFwcHk6XG5cdFx0XHRcdFx0d2lkdGg6ICcxOHB4J1xuXHRcdFx0XHQkcmVsYXhlZDpcblx0XHRcdFx0XHRoZWlnaHQ6ICcxMDAlJ1xuXHRcdFx0ZGl2QSA9IERvbS5kaXYge3N0eWxlfVxuXHRcdFx0ZGl2QiA9IERvbS5kaXYge3N0eWxlLCBzdHlsZUFmdGVySW5zZXJ0OnRydWV9XG5cblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlKCd3aWR0aCcpKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZBLnJhdy5zdHlsZS53aWR0aCkudG8uZXF1YWwoJzhweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVNhZmUoJ3dpZHRoJykpLnRvLmVxdWFsKCc4cHgnKVxuXG5cdFx0XHRkaXZBLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZSgnd2lkdGgnKSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2QS5yYXcuc3R5bGUud2lkdGgpLnRvLmVxdWFsKCcxOHB4Jylcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlU2FmZSgnd2lkdGgnKSkudG8uZXF1YWwoJzE4cHgnKVxuXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZSgnd2lkdGgnKSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2Qi5yYXcuc3R5bGUud2lkdGgpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGVTYWZlKCd3aWR0aCcpKS50by5lcXVhbCgnOHB4JylcblxuXHRcdFx0ZGl2Qi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGUoJ3dpZHRoJykpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkIucmF3LnN0eWxlLndpZHRoKS50by5lcXVhbCgnMThweCcpXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZVNhZmUoJ3dpZHRoJykpLnRvLmVxdWFsKCcxOHB4Jylcblx0XHRcdFxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGUoJ2hlaWdodCcpKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZCLnJhdy5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGVTYWZlKCdoZWlnaHQnKSkudG8uZXF1YWwoJzlweCcpXG5cdFx0XHRcblx0XHRcdGRpdkIuc3RhdGUgJ3JlbGF4ZWQnLCBvblxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGUoJ2hlaWdodCcpKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZCLnJhdy5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxMDAlJylcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlU2FmZSgnaGVpZ2h0JykpLnRvLmVxdWFsKCcxMDAlJylcblx0XHRcdFxuXHRcdFx0ZGl2Qi5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGUoJ2hlaWdodCcpKS5ub3QudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZSgnaGVpZ2h0JykpLm5vdC50by5lcXVhbCgnMTAwJScpXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZSgnaGVpZ2h0JykpLnRvLmNvbnRhaW4oJ3B4Jylcblx0XHRcdGV4cGVjdChkaXZCLnJhdy5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxMDAlJylcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlU2FmZSgnaGVpZ2h0JykpLnRvLmVxdWFsKGRpdkIuc3R5bGUoJ2hlaWdodCcpKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGVTYWZlKCdoZWlnaHQnLCB0cnVlKSkubm90LnRvLmVxdWFsKGRpdkIuc3R5bGUoJ2hlaWdodCcpKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGVTYWZlKCdoZWlnaHQnLCB0cnVlKSkudG8uZXF1YWwoJzEwMCUnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGVTYWZlKCdtYXJnaW4nLCB0cnVlKSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZSgnd2lkdGgnKSkudG8uZXF1YWwoJzE4cHgnKVxuXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVNhZmUoJ2Zha2VQcm9wJykpLnRvLmVxdWFsKGRpdkEpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVNhZmUoMTIzKSkudG8uZXF1YWwoZGl2QSlcblxuXHRcdFx0dGV4dCA9IERvbS50ZXh0KCdhYmMxMjMnKS5hcHBlbmRUbyhkaXZBKVxuXHRcdFx0ZXhwZWN0KHRleHQuc3R5bGVTYWZlKCdmYWtlUHJvcCcpKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QodGV4dC5zdHlsZVNhZmUoMTIzKSkudG8uZXF1YWwodW5kZWZpbmVkKVxuXG5cblx0XHR0ZXN0IFwiLnN0eWxlU2FmZSgpIHdpbGwgd29yayB3aXRoIGluc3RhbmNlcyB3aXRoIG5vIGdpdmVuIGJhc2Ugc3R5bGVzXCIsICgpLT5cblx0XHRcdGRpdkEgPSBEb20uZGl2KClcblx0XHRcdGRpdkIgPSBEb20oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnZGl2JylcblxuXHRcdFx0ZXhwZWN0ICgpLT5cblx0XHRcdFx0ZGl2QS5zdHlsZVNhZmUoJ2hlaWdodCcpXG5cdFx0XHRcdGRpdkIuc3R5bGVTYWZlKCdoZWlnaHQnKVxuXHRcdFx0Lm5vdC50by50aHJvdygpXG5cdFx0XHRcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlU2FmZSAnaGVpZ2h0JykudG8uZXF1YWwgJydcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlU2FmZSAnaGVpZ2h0JykudG8uZXF1YWwgJydcblxuXG5cdFx0dGVzdCBcIi5zdHlsZVBhcnNlZCgpIGlzIGEgc2hvcnRoYW5kIGZvciBwYXJzZUZsb2F0KC5zdHlsZVNhZmUoKSlcIiwgKCktPlxuXHRcdFx0c3R5bGUgPVxuXHRcdFx0XHR3aWR0aDogJzhweCdcblx0XHRcdFx0aGVpZ2h0OiAnOXB4J1xuXHRcdFx0XHQkaGFwcHk6XG5cdFx0XHRcdFx0d2lkdGg6ICcxOHB4J1xuXHRcdFx0XHQkcmVsYXhlZDpcblx0XHRcdFx0XHRoZWlnaHQ6ICcxMDAlJ1xuXHRcdFx0ZGl2QSA9IERvbS5kaXYge3N0eWxlfVxuXHRcdFx0ZGl2QiA9IERvbS5kaXYge3N0eWxlLCBzdHlsZUFmdGVySW5zZXJ0OnRydWV9XG5cblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlKCd3aWR0aCcpKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlU2FmZSgnd2lkdGgnKSkudG8uZXF1YWwoJzhweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVBhcnNlZCgnd2lkdGgnKSkudG8uZXF1YWwocGFyc2VGbG9hdCBkaXZBLnN0eWxlU2FmZSgnd2lkdGgnKSlcblxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGUoJ2hlaWdodCcpKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlU2FmZSgnaGVpZ2h0JykpLnRvLmVxdWFsKCc5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVQYXJzZWQoJ2hlaWdodCcpKS50by5lcXVhbChwYXJzZUZsb2F0IGRpdkEuc3R5bGVTYWZlKCdoZWlnaHQnKSlcblxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGUoJ3dpZHRoJykpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGVTYWZlKCd3aWR0aCcpKS50by5lcXVhbCgnOHB4Jylcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlUGFyc2VkKCd3aWR0aCcpKS50by5lcXVhbChwYXJzZUZsb2F0IGRpdkIuc3R5bGVTYWZlKCd3aWR0aCcpKVxuXG5cdFx0XHRkaXZBLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRkaXZCLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZSgnd2lkdGgnKSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVNhZmUoJ3dpZHRoJykpLnRvLmVxdWFsKCcxOHB4Jylcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlUGFyc2VkKCd3aWR0aCcpKS50by5lcXVhbChwYXJzZUZsb2F0IGRpdkEuc3R5bGVTYWZlKCd3aWR0aCcpKVxuXHRcdFx0XG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZSgnaGVpZ2h0JykpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVTYWZlKCdoZWlnaHQnKSkudG8uZXF1YWwoJzlweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVBhcnNlZCgnaGVpZ2h0JykpLnRvLmVxdWFsKHBhcnNlRmxvYXQgZGl2QS5zdHlsZVNhZmUoJ2hlaWdodCcpKVxuXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZSgnd2lkdGgnKSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZVNhZmUoJ3dpZHRoJykpLnRvLmVxdWFsKCcxOHB4Jylcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlUGFyc2VkKCd3aWR0aCcpKS50by5lcXVhbChwYXJzZUZsb2F0IGRpdkIuc3R5bGVTYWZlKCd3aWR0aCcpKVxuXG5cdFx0XHRkaXZBLnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdGRpdkIuc3RhdGUgJ3JlbGF4ZWQnLCBvblxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGUoJ3dpZHRoJykpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVTYWZlKCd3aWR0aCcpKS50by5lcXVhbCgnMThweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVBhcnNlZCgnd2lkdGgnKSkudG8uZXF1YWwocGFyc2VGbG9hdCBkaXZBLnN0eWxlU2FmZSgnd2lkdGgnKSlcblx0XHRcdFxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGUoJ2hlaWdodCcpKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlU2FmZSgnaGVpZ2h0JykpLnRvLmVxdWFsKCcxMDAlJylcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlUGFyc2VkKCdoZWlnaHQnKSkudG8uZXF1YWwocGFyc2VGbG9hdCBkaXZBLnN0eWxlU2FmZSgnaGVpZ2h0JykpXG5cblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlKCd3aWR0aCcpKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZCLnN0eWxlU2FmZSgnd2lkdGgnKSkudG8uZXF1YWwoJzE4cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGVQYXJzZWQoJ3dpZHRoJykpLnRvLmVxdWFsKHBhcnNlRmxvYXQgZGl2Qi5zdHlsZVNhZmUoJ3dpZHRoJykpXG5cblx0XHRcdGRpdkEuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGRpdkIuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGRpdkEuc3RhdGUgJ3JlbGF4ZWQnLCBvZmZcblx0XHRcdGRpdkIuc3RhdGUgJ3JlbGF4ZWQnLCBvZmZcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlKCd3aWR0aCcpKS50by5lcXVhbCgnMThweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVNhZmUoJ3dpZHRoJykpLnRvLmVxdWFsKCcxOHB4Jylcblx0XHRcdGV4cGVjdChkaXZBLnN0eWxlUGFyc2VkKCd3aWR0aCcpKS50by5lcXVhbChwYXJzZUZsb2F0IGRpdkEuc3R5bGVTYWZlKCd3aWR0aCcpKVxuXHRcdFx0XG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZSgnaGVpZ2h0JykpLnRvLmVxdWFsKCc5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVTYWZlKCdoZWlnaHQnKSkudG8uZXF1YWwoJzlweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5zdHlsZVBhcnNlZCgnaGVpZ2h0JykpLnRvLmVxdWFsKHBhcnNlRmxvYXQgZGl2QS5zdHlsZVNhZmUoJ2hlaWdodCcpKVxuXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZSgnd2lkdGgnKSkudG8uZXF1YWwoJzE4cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuc3R5bGVTYWZlKCd3aWR0aCcpKS50by5lcXVhbCgnMThweCcpXG5cdFx0XHRleHBlY3QoZGl2Qi5zdHlsZVBhcnNlZCgnd2lkdGgnKSkudG8uZXF1YWwocGFyc2VGbG9hdCBkaXZCLnN0eWxlU2FmZSgnd2lkdGgnKSlcblxuXG5cdFx0dGVzdCBcIi5yZWNhbGNTdHlsZSgpIHJlLWFwcGxpZXMgYWxsIGZ1bmN0aW9uLXZhbHVlIHN0eWxlc1wiLCAoKS0+XG5cdFx0XHRjb3VudCA9IEE6MCxCOjAsQzowLEQ6MCxFOjAsRjowLEc6MFxuXHRcdFx0ZGl2ID0gRG9tLmRpdiBzdHlsZTpcblx0XHRcdFx0d2lkdGg6ICgpLT4gKytjb3VudC5BXG5cdFx0XHRcdG9wYWNpdHk6IDFcblx0XHRcdFx0aGVpZ2h0OiAoKS0+ICsrY291bnQuQlxuXHRcdFx0XHRmb250U2l6ZTogKCktPiArK2NvdW50LkNcblx0XHRcdFx0JGhhcHB5OlxuXHRcdFx0XHRcdG9wYWNpdHk6IDAuNVxuXHRcdFx0XHRcdGZvbnRTaXplOiAoKS0+ICsrY291bnQuRFxuXHRcdFx0XHQkcmVsYXhlZDpcblx0XHRcdFx0XHRoZWlnaHQ6ICgpLT4gKytjb3VudC5FXG5cdFx0XHRcdFx0Zm9udFNpemU6ICgpLT4gKytjb3VudC5GXG5cdFx0XHRcdFx0JGZ1bm55OlxuXHRcdFx0XHRcdFx0d2lkdGg6ICgpLT4gKytjb3VudC5HXG5cblx0XHRcdGV4cGVjdChjb3VudCkudG8uZXFsIEE6MSxCOjEsQzoxLEQ6MCxFOjAsRjowLEc6MFxuXHRcdFx0XG5cdFx0XHRkaXYucmVjYWxjU3R5bGUoKVxuXHRcdFx0ZXhwZWN0KGNvdW50KS50by5lcWwgQToyLEI6MixDOjIsRDowLEU6MCxGOjAsRzowXG5cdFx0XHRcblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZXhwZWN0KGNvdW50KS50by5lcWwgQToyLEI6MixDOjIsRDoxLEU6MCxGOjAsRzowXG5cblx0XHRcdGRpdi5yZWNhbGNTdHlsZSgpXG5cdFx0XHRleHBlY3QoY291bnQpLnRvLmVxbCBBOjMsQjozLEM6MixEOjIsRTowLEY6MCxHOjBcblxuXHRcdFx0ZGl2LnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdGV4cGVjdChjb3VudCkudG8uZXFsIEE6MyxCOjMsQzoyLEQ6MixFOjEsRjoxLEc6MFxuXG5cdFx0XHRkaXYucmVjYWxjU3R5bGUoKVxuXHRcdFx0ZXhwZWN0KGNvdW50KS50by5lcWwgQTo0LEI6MyxDOjIsRDoyLEU6MixGOjIsRzowXG5cblx0XHRcdGRpdi5zdGF0ZSAnZnVubnknLCBvblxuXHRcdFx0ZXhwZWN0KGNvdW50KS50by5lcWwgQTo0LEI6MyxDOjIsRDoyLEU6MixGOjIsRzoxXG5cblx0XHRcdGRpdi5yZWNhbGNTdHlsZSgpXG5cdFx0XHRleHBlY3QoY291bnQpLnRvLmVxbCBBOjQsQjozLEM6MixEOjIsRTozLEY6MyxHOjJcblx0XHRcdFxuXHRcdFx0ZGl2LnN0YXRlICdmdW5ueScsIG9mZlxuXHRcdFx0ZXhwZWN0KGNvdW50KS50by5lcWwgQTo1LEI6MyxDOjIsRDoyLEU6MyxGOjMsRzoyXG5cdFx0XHRcblx0XHRcdGRpdi5yZWNhbGNTdHlsZSgpXG5cdFx0XHRleHBlY3QoY291bnQpLnRvLmVxbCBBOjYsQjozLEM6MixEOjIsRTo0LEY6NCxHOjJcblxuXG5cdFx0dGVzdCBcIklmIG9wdGlvbnMucmVjYWxjT25SZXNpemUgaXMgc2V0LCAucmVjYWxjU3R5bGUoKSB3aWxsIGJlIGludm9rZWQgb24gZWFjaCByZXNpemUgZXZlbnRcIiwgKCktPlxuXHRcdFx0Y291bnQgPSBBOjAsQjowLEM6MCxEOjBcblx0XHRcdERvbS5kaXZcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0d2lkdGg6ICgpLT4gKytjb3VudC5BXG5cdFx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0XHRcdGhlaWdodDogKCktPiArK2NvdW50LkJcblx0XHRcdFxuXHRcdFx0RG9tLmRpdlxuXHRcdFx0XHRyZWNhbGNPblJlc2l6ZTogdHJ1ZVxuXHRcdFx0XHRzdHlsZTpcblx0XHRcdFx0XHR3aWR0aDogKCktPiArK2NvdW50LkNcblx0XHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRcdFx0aGVpZ2h0OiAoKS0+ICsrY291bnQuRFxuXG5cdFx0XHRleHBlY3QoY291bnQpLnRvLmVxbCBBOjEsQjoxLEM6MSxEOjFcblx0XHRcdFxuXHRcdFx0RG9tKHdpbmRvdykuZW1pdCAncmVzaXplJ1xuXHRcdFx0ZXhwZWN0KGNvdW50KS50by5lcWwgQToxLEI6MSxDOjIsRDoyXG5cdFx0XHRcblx0XHRcdERvbSh3aW5kb3cpLmVtaXQgJ3Jlc2l6ZSdcblx0XHRcdGV4cGVjdChjb3VudCkudG8uZXFsIEE6MSxCOjEsQzozLEQ6M1xuXG5cblx0XHR0ZXN0IFwiLnNob3coKS8uaGlkZSgpIHdpbGwgdG9nZ2xlIHRoZSBlbGVtZW50J3MgdmlzaWJpbGl0eVwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KCkuYXBwZW5kVG8gc2FuZGJveFxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSgnZGlzcGxheScpKS50by5lcXVhbCAnYmxvY2snXG5cblx0XHRcdGRpdi5oaWRlKClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUoJ2Rpc3BsYXknKSkudG8uZXF1YWwgJ25vbmUnXG5cblx0XHRcdGRpdi5zaG93KClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUoJ2Rpc3BsYXknKSkudG8uZXF1YWwgJ2Jsb2NrJ1xuXG5cdFx0XHRkaXYuc2hvdygpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlKCdkaXNwbGF5JykpLnRvLmVxdWFsICdibG9jaydcblxuXG5cdFx0dGVzdCBcIi5zaG93KCkgd2lsbCBzZXQgdGhlIGVsZW1lbnQncyBkaXNwbGF5IHN0eWxlIHRvIHRoZSBwcm92aWRlZCBhcmd1bWVudCwgb3IgdG8gdGhlIHZhbHVlIHByb3ZpZGVkIGluIHRoZSBzdHlsZSBvYmplY3RcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdihzdHlsZTpkaXNwbGF5OidpbmxpbmUnKS5hcHBlbmRUbyBzYW5kYm94XG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlKCdkaXNwbGF5JykpLnRvLmVxdWFsICdpbmxpbmUnXG5cblx0XHRcdGRpdi5oaWRlKClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUoJ2Rpc3BsYXknKSkudG8uZXF1YWwgJ25vbmUnXG5cblx0XHRcdGRpdi5zaG93KClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUoJ2Rpc3BsYXknKSkudG8uZXF1YWwgJ2lubGluZSdcblxuXHRcdFx0ZGl2LmhpZGUoKVxuXHRcdFx0ZGl2LnNob3coJ2lubGluZS1ibG9jaycpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlKCdkaXNwbGF5JykpLnRvLmVxdWFsICdpbmxpbmUtYmxvY2snXG5cblxuXG5cblxuXHRzdWl0ZSBcIlN0YXRlXCIsICgpLT5cblx0XHR0ZXN0IFwiU3RhdGVzIGNhbiBiZSBwb2xsZWQgZm9yIGEgdmFsdWUgYnkgcGFzc2luZyBvbmx5IHRoZSB0YXJnZXQgc3RhdGUncyBuYW1lIHRvIC5zdGF0ZSAmIGNhbiBiZSB0b2dnbGVkIG9uL29mZiBieSBwYXNzaW5nIGEgc2Vjb25kIGFyZ3VtZW50XCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYoKVxuXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdmdW5ueScpLnRvLmJlLmZhbHNlXG5cblx0XHRcdGRpdi5zdGF0ZSAnZnVubnknLCB0cnVlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdmdW5ueScpLnRvLmJlLnRydWVcblx0XHRcdFxuXHRcdFx0ZGl2LnN0YXRlICdoYXBweScsIHRydWVcblx0XHRcdGRpdi5zdGF0ZSAncmVsYXhlZCcsIHRydWVcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2Z1bm55JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdyZWxheGVkJykudG8uYmUudHJ1ZVxuXHRcdFx0XG5cdFx0XHRkaXYuc3RhdGUgJ2Z1bm55JywgZmFsc2Vcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2Z1bm55JykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLnRydWVcblx0XHRcdFxuXHRcdFx0ZGl2LnN0YXRlICckZnVubnknLCB0cnVlXG5cdFx0XHRkaXYuc3RhdGUgJyRiYXNlJywgdHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnZnVubnknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdiYXNlJykudG8uYmUuZmFsc2VcblxuXG5cblx0XHR0ZXN0IFwiQWxsIHN0YXRlcyBjYW4gYmUgY2xlYXJlZC90b2dnbGVkIG9mZiB2aWEgLnJlc2V0U3RhdGVcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cblx0XHRcdGRpdi5zdGF0ZSAnZnVubnknLCBvblxuXHRcdFx0ZGl2LnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRkaXYuc3RhdGUgJ3JlbGF4ZWQnLCBvblxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnZnVubnknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ3JlbGF4ZWQnKS50by5iZS50cnVlXG5cblx0XHRcdGRpdi5yZXNldFN0YXRlKClcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2Z1bm55JykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2hhcHB5JykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ3JlbGF4ZWQnKS50by5iZS5mYWxzZVxuXG5cblx0XHR0ZXN0IFwiU3R5bGVzIGNhbiBiZSBwYXNzZWQgdW5kZXIgc3BlY2lmaWMgc3RhdGVzIHVzaW5nIGEgJyQnIHByZWZpeCBiZWZvcmUgdGhlIHN0YXRlIG5hbWVcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdiBzdHlsZTpcblx0XHRcdFx0JGJhc2U6XG5cdFx0XHRcdFx0d2lkdGg6ICcxNXB4J1xuXHRcdFx0XHRcdGhlaWdodDogJzE1cHgnXG5cdFx0XHRcdCRoYXBweTpcblx0XHRcdFx0XHR3aWR0aDogJzI1cHgnXG5cdFx0XHRcdFx0bWFyZ2luVG9wOiAnMjBweCdcblx0XHRcdFx0JHJlbGF4ZWQ6XG5cdFx0XHRcdFx0d2lkdGg6ICczNXB4J1xuXHRcdFx0XHRcdG1hcmdpbkxlZnQ6ICcxMnB4J1xuXG5cdFx0XHRkaXYuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRpdi5lbClcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLm1hcmdpblRvcCkudG8uZXF1YWwoJzBweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0KS50by5lcXVhbCgnMHB4Jylcblx0XHRcdFxuXHRcdFx0ZGl2LnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzI1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3ApLnRvLmVxdWFsKCcyMHB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQpLnRvLmVxdWFsKCcwcHgnKVxuXHRcdFx0XG5cdFx0XHRkaXYuc3RhdGUgJ2hhcHB5Jywgb2ZmXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3ApLnRvLmVxdWFsKCcwcHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUubWFyZ2luTGVmdCkudG8uZXF1YWwoJzBweCcpXG5cdFx0XHRcblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZGl2LnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMzVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLm1hcmdpblRvcCkudG8uZXF1YWwoJzIwcHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUubWFyZ2luTGVmdCkudG8uZXF1YWwoJzEycHgnKVxuXHRcdFx0XG5cdFx0XHRkaXYuc3RhdGUgJ2hhcHB5Jywgb2ZmXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzM1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3ApLnRvLmVxdWFsKCcwcHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUubWFyZ2luTGVmdCkudG8uZXF1YWwoJzEycHgnKVxuXG5cblx0XHR0ZXN0IFwiQSBzdGF0ZTpldmVudE5hbWUgKG9yIHN0YXRlOmV2ZW50T3B0cykgbWFwIGNhbiBiZSBwYXNzZWQgc2V0IGZvciBvcHRpb25zLnN0YXRlVHJpZ2dlcnNcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdihcblx0XHRcdFx0c3RhdGVUcmlnZ2Vyczpcblx0XHRcdFx0XHRoYXBweToge29uOidiZWNhbWVIYXBweScsIG9mZjonYmVjYW1lU2FkJ31cblx0XHRcdFx0XHRyZWxheGVkOiAnaXNSZWxheGVkJyBcblx0XHRcdFx0c3R5bGU6XG5cdFx0XHRcdFx0JGJhc2U6XHRcdHdpZHRoOiAnMTVweCdcblx0XHRcdFx0XHQkaGFwcHk6XHRcdHdpZHRoOiAnMjVweCdcblx0XHRcdFx0XHQkcmVsYXhlZDpcdHdpZHRoOiAnMzVweCdcblx0XHRcdCkuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRpdi5lbClcblxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnaGFwcHknKS50by5iZS5mYWxzZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzE1cHgnKVxuXG5cdFx0XHRkaXYuZW1pdCgnYmVjYW1lSGFwcHknKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdyZWxheGVkJykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMjVweCcpXG5cblx0XHRcdGRpdi5lbWl0KCdpc1JlbGF4ZWQnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdyZWxheGVkJykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCczNXB4JylcblxuXHRcdFx0ZGl2LmVtaXQoJ2JlY2FtZVNhZCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdoYXBweScpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdyZWxheGVkJykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCczNXB4JylcblxuXHRcdFx0ZGl2LnN0YXRlKCdyZWxheGVkJywgb2ZmKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcxNXB4JylcblxuXG5cdFx0dGVzdCBcIm9wdGlvbnMuc3RhdGVUcmlnZ2VycyB3b24ndCBiZSBhdHRhY2hlZCBpZiB0aGV5IGFyZW4ndCBiZWluZyB1c2VkIGluIHN0eWxlIG9iamVjdFwiLCAoKS0+XG5cdFx0XHRkaXZBID0gRG9tLmRpdihzdHlsZTp7JGhvdmVyOiBkaXNwbGF5OidibG9jayd9KVxuXHRcdFx0ZGl2QiA9IERvbS5kaXYoc3R5bGU6eyRmb2N1czogZGlzcGxheTonYmxvY2snfSlcblxuXHRcdFx0ZXhwZWN0KGRpdkEuc3RhdGUgJ2hvdmVyJykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoZGl2Qi5zdGF0ZSAnaG92ZXInKS50by5lcXVhbCBvZmZcblxuXHRcdFx0ZGl2QS5lbC5lbWl0RXZlbnQgJ21vdXNlZW50ZXInXG5cdFx0XHRkaXZCLmVsLmVtaXRFdmVudCAnbW91c2VlbnRlcidcblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICdob3ZlcicpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QoZGl2Qi5zdGF0ZSAnaG92ZXInKS50by5lcXVhbCBvZmZcblxuXHRcdFx0ZGl2QS5lbC5lbWl0RXZlbnQgJ21vdXNlbGVhdmUnXG5cdFx0XHRkaXZCLmVsLmVtaXRFdmVudCAnbW91c2VsZWF2ZSdcblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICdob3ZlcicpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJ2hvdmVyJykudG8uZXF1YWwgb2ZmXG5cblx0XHRcdGRpdkEuZWwuZW1pdEV2ZW50ICdmb2N1cydcblx0XHRcdGRpdkIuZWwuZW1pdEV2ZW50ICdmb2N1cydcblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICdmb2N1cycpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJ2ZvY3VzJykudG8uZXF1YWwgb25cblxuXHRcdFx0ZGl2QS5lbC5lbWl0RXZlbnQgJ2JsdXInXG5cdFx0XHRkaXZCLmVsLmVtaXRFdmVudCAnYmx1cidcblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICdmb2N1cycpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJ2ZvY3VzJykudG8uZXF1YWwgb2ZmXG5cblxuXHRcdHRlc3QgXCJvcHRpb25zLnN0YXRlVHJpZ2dlcnMgY2FuIGJlIGZvcmNlZCB0byBiZSBhdHRhY2hlZCBldmVuIGlmIHRoZXkgYXJlbid0IGJlaW5nIHVzZWQgaW4gc3R5bGUgb2JqZWN0IHZpYSAuX2F0dGFjaFN0YXRlRXZlbnRzKHRydWUpXCIsICgpLT5cblx0XHRcdGRpdkEgPSBEb20uZGl2KHN0eWxlOnskaG92ZXI6IGRpc3BsYXk6J2Jsb2NrJ30pXG5cdFx0XHRkaXZCID0gRG9tLmRpdihzdHlsZTp7JGZvY3VzOiBkaXNwbGF5OidibG9jayd9KVxuXHRcdFx0ZGl2QS5fYXR0YWNoU3RhdGVFdmVudHModHJ1ZSlcblx0XHRcdGRpdkIuX2F0dGFjaFN0YXRlRXZlbnRzKHRydWUpXG5cblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICdob3ZlcicpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJ2hvdmVyJykudG8uZXF1YWwgb2ZmXG5cblx0XHRcdGRpdkEuZWwuZW1pdEV2ZW50ICdtb3VzZWVudGVyJ1xuXHRcdFx0ZGl2Qi5lbC5lbWl0RXZlbnQgJ21vdXNlZW50ZXInXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnaG92ZXInKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJ2hvdmVyJykudG8uZXF1YWwgb25cblxuXHRcdFx0ZGl2QS5lbC5lbWl0RXZlbnQgJ21vdXNlbGVhdmUnXG5cdFx0XHRkaXZCLmVsLmVtaXRFdmVudCAnbW91c2VsZWF2ZSdcblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICdob3ZlcicpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJ2hvdmVyJykudG8uZXF1YWwgb2ZmXG5cblx0XHRcdGRpdkEuZWwuZW1pdEV2ZW50ICdmb2N1cydcblx0XHRcdGRpdkIuZWwuZW1pdEV2ZW50ICdmb2N1cydcblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICdmb2N1cycpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QoZGl2Qi5zdGF0ZSAnZm9jdXMnKS50by5lcXVhbCBvblxuXG5cdFx0XHRkaXZBLmVsLmVtaXRFdmVudCAnYmx1cidcblx0XHRcdGRpdkIuZWwuZW1pdEV2ZW50ICdibHVyJ1xuXHRcdFx0ZXhwZWN0KGRpdkEuc3RhdGUgJ2ZvY3VzJykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoZGl2Qi5zdGF0ZSAnZm9jdXMnKS50by5lcXVhbCBvZmZcblxuXG5cdFx0dGVzdCBcIlRoZSBob3ZlciBhbmQgZm9jdXMgc3RhdGVzIHdpbGwgYmUgbGlzdGVuZWQgZm9yIGFuZCB0b2dnbGVkIGJ5IGRlZmF1bHQgYnkgdGhlaXIgYXBwcm9wcmlhdGUgZXZlbnRzXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdCRiYXNlOlxuXHRcdFx0XHRcdHdpZHRoOiAnMTVweCdcblx0XHRcdFx0XHRoZWlnaHQ6ICcxNXB4J1xuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYig0NSwgNDUsIDQ1KSdcblx0XHRcdFx0JGhvdmVyOlxuXHRcdFx0XHRcdHdpZHRoOiAnMjVweCdcblx0XHRcdFx0XHRtYXJnaW5Ub3A6ICcyMHB4J1xuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYigxNTUsIDE1NSwgMTU1KSdcblx0XHRcdFx0JGZvY3VzOlxuXHRcdFx0XHRcdHdpZHRoOiAnMzVweCdcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjAwLCAyMDAsIDIwMCknXG5cblx0XHRcdGRpdi5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0Y29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZGl2LmVsKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wKS50by5lcXVhbCgnMHB4Jylcblx0XHRcdGV4cGVjdChkaXYuZWwuc3R5bGUubWFyZ2luVG9wKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmJhY2tncm91bmRDb2xvcikudG8uZXF1YWwoJ3JnYig0NSwgNDUsIDQ1KScpXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0ICdtb3VzZWVudGVyJ1xuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcyNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wKS50by5lcXVhbCgnMjBweCcpXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLm1hcmdpblRvcCkudG8uZXF1YWwoJzIwcHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgncmdiKDE1NSwgMTU1LCAxNTUpJylcblx0XHRcdFxuXHRcdFx0ZGl2LmVtaXQgJ21vdXNlbGVhdmUnXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3ApLnRvLmVxdWFsKCcwcHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5zdHlsZS5tYXJnaW5Ub3ApLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgncmdiKDQ1LCA0NSwgNDUpJylcblx0XHRcdFxuXHRcdFx0ZGl2LmVtaXQgJ21vdXNlZW50ZXInXG5cdFx0XHRkaXYuZW1pdCAnZm9jdXMnXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzM1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3ApLnRvLmVxdWFsKCcyMHB4Jylcblx0XHRcdGV4cGVjdChkaXYuZWwuc3R5bGUubWFyZ2luVG9wKS50by5lcXVhbCgnMjBweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5iYWNrZ3JvdW5kQ29sb3IpLnRvLmVxdWFsKCdyZ2IoMjAwLCAyMDAsIDIwMCknKVxuXHRcdFx0XG5cdFx0XHRkaXYuZW1pdCAnbW91c2VsZWF2ZSdcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMzVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLm1hcmdpblRvcCkudG8uZXF1YWwoJzBweCcpXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLm1hcmdpblRvcCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5iYWNrZ3JvdW5kQ29sb3IpLnRvLmVxdWFsKCdyZ2IoMjAwLCAyMDAsIDIwMCknKVxuXG5cblx0XHR0ZXN0IFwiSWYgbm90IHBhc3NlZCBhIHN0eWxlIG1hcCB1bmRlciB0aGUgJ2Jhc2UnIHN0YXRlLCBhbGwgbm9uLXN0YXRlIHByb3BlcnRpZXMgb24gdGhlIHN0eWxlIG9iamVjdCB3aWxsIGJlIGNvbnNpZGVyZWQgYXMgJ2Jhc2UnIHN0YXRlIHByb3BlcnRpZXNcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdiBzdHlsZTpcblx0XHRcdFx0d2lkdGg6ICcxNXB4J1xuXHRcdFx0XHRoZWlnaHQ6ICcyMHB4J1xuXHRcdFx0XHQkaG92ZXI6XG5cdFx0XHRcdFx0d2lkdGg6ICcyNXB4J1xuXHRcdFx0XHRcdGhlaWdodDogJzMwcHgnXG5cblx0XHRcdGRpdi5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0Y29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZGl2LmVsKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzIwcHgnKVxuXHRcdFx0XG5cdFx0XHRkaXYuZW1pdCAnbW91c2VlbnRlcidcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMjVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCczMHB4Jylcblx0XHRcdFxuXHRcdFx0ZGl2LmVtaXQgJ21vdXNlbGVhdmUnXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMjBweCcpXG5cblxuXHRcdHRlc3QgXCJTdGF0ZS1zcGVjaWZpYyBzdHlsZXMgd2lsbCBiZSByZW1vdmVkIHVwb24gc3RhdGUgdHVybiBvZmYgb3IgcmVzdG9yZWQgdG8gdGhlIGJhc2UgdmFsdWVcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdiBzdHlsZTpcblx0XHRcdFx0d2lkdGg6ICcxNXB4J1xuXHRcdFx0XHQkaG92ZXI6XG5cdFx0XHRcdFx0d2lkdGg6ICcyNXB4J1xuXHRcdFx0XHRcdGhlaWdodDogJzMwcHgnXG5cblx0XHRcdGRpdi5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0Y29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZGl2LmVsKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcxNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzBweCcpXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJycpXG5cdFx0XHRcblx0XHRcdGRpdi5lbWl0ICdtb3VzZWVudGVyJ1xuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcyNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzMwcHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCczMHB4Jylcblx0XHRcdFxuXHRcdFx0ZGl2LmVtaXQgJ21vdXNlbGVhdmUnXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMHB4Jylcblx0XHRcdGV4cGVjdChkaXYuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblxuXG5cdFx0dGVzdCBcIkhpZ2hlciBvcmRlciBzdGF0ZSBzdHlsZXMgd2lsbCBoYXZlIGEgaGlnaGVyIHByZWNlZGVuY2UgdGhhbiB0aGUgJ2Jhc2UnIHN0eWxlIHRvIGJlIHVzZWQgYXMgcmVwbGFjbWVudHMgZm9yIHBlbmRpbmctcmVtb3ZhbCBzdGF0ZS1zdHlsZXNcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdiBzdHlsZTpcblx0XHRcdFx0d2lkdGg6ICcxNXB4J1xuXHRcdFx0XHQkaG92ZXI6XG5cdFx0XHRcdFx0d2lkdGg6ICcyNXB4J1xuXHRcdFx0XHRcdGhlaWdodDogJzMwcHgnXG5cdFx0XHRcdCRmb2N1czpcblx0XHRcdFx0XHRoZWlnaHQ6ICc0NXB4J1xuXG5cdFx0XHRkaXYuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRpdi5lbClcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcwcHgnKVxuXHRcdFx0XG5cdFx0XHRkaXYuZW1pdCAnbW91c2VlbnRlcidcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMjVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCczMHB4Jylcblx0XHRcdFxuXHRcdFx0ZGl2LmVtaXQgJ2ZvY3VzJ1xuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUud2lkdGgpLnRvLmVxdWFsKCcyNXB4Jylcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzQ1cHgnKVxuXHRcdFx0XG5cdFx0XHRkaXYuZW1pdCAnbW91c2VsZWF2ZSdcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCc0NXB4Jylcblx0XHRcdFxuXHRcdFx0ZGl2LmVtaXQgJ2JsdXInXG5cdFx0XHRkaXYuZW1pdCAnZm9jdXMnXG5cdFx0XHRkaXYuZW1pdCAnbW91c2VlbnRlcidcblx0XHRcdGV4cGVjdChjb21wdXRlZFN0eWxlLndpZHRoKS50by5lcXVhbCgnMjVweCcpXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCc0NXB4Jylcblx0XHRcdFxuXHRcdFx0ZGl2LmVtaXQgJ2JsdXInXG5cdFx0XHRleHBlY3QoY29tcHV0ZWRTdHlsZS53aWR0aCkudG8uZXF1YWwoJzI1cHgnKVxuXHRcdFx0ZXhwZWN0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMzBweCcpXG5cblxuXHRcdHRlc3QgXCJTdGF0ZSB0b2dnbGVzIHdpbGwgYmUgcGFzc2VkIHRvIGNoaWxkcmVuIGVsZW1lbnRzIHVubGVzcyBvcHRpb25zLnBhc3NTdGF0ZVRvQ2hpbGRyZW4gaXMgb2ZmXCIsICgpLT5cblx0XHRcdE1haW4gPSBEb20uZGl2KClcblx0XHRcdEEgPSBEb20uZGl2KCkuYXBwZW5kVG8oTWFpbilcblx0XHRcdEIgPSBEb20uZGl2KCkuYXBwZW5kVG8oQSlcblx0XHRcdEMgPSBEb20uZGl2KHBhc3NTdGF0ZVRvQ2hpbGRyZW46ZmFsc2UpLmFwcGVuZFRvKEEpXG5cblx0XHRcdGV4cGVjdChNYWluLnN0YXRlICdoYXBweScpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3QoQS5zdGF0ZSAnaGFwcHknKS50by5iZS5mYWxzZVxuXHRcdFx0ZXhwZWN0KEIuc3RhdGUgJ2hhcHB5JykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChDLnN0YXRlICdoYXBweScpLnRvLmJlLmZhbHNlXG5cblx0XHRcdE1haW4uc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGV4cGVjdChNYWluLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChBLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChCLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChDLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblxuXHRcdFx0TWFpbi5vcHRpb25zLnBhc3NTdGF0ZVRvQ2hpbGRyZW4gPSBmYWxzZVxuXHRcdFx0TWFpbi5zdGF0ZSAnaGFwcHknLCBmYWxzZVxuXHRcdFx0ZXhwZWN0KE1haW4uc3RhdGUgJ2hhcHB5JykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChBLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChCLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChDLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblxuXHRcdFx0TWFpbi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0TWFpbi5vcHRpb25zLnBhc3NTdGF0ZVRvQ2hpbGRyZW4gPSB0cnVlXG5cdFx0XHRBLm9wdGlvbnMucGFzc1N0YXRlVG9DaGlsZHJlbiA9IGZhbHNlXG5cdFx0XHRNYWluLnN0YXRlICdoYXBweScsIGZhbHNlXG5cdFx0XHRleHBlY3QoTWFpbi5zdGF0ZSAnaGFwcHknKS50by5iZS5mYWxzZVxuXHRcdFx0ZXhwZWN0KEEuc3RhdGUgJ2hhcHB5JykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChCLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChDLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblxuXG5cdFx0dGVzdCBcIlN0YXRlIHN0eWxlcyBjYW4gYmUgbmVzdGVkIHRvIHRyaWdnZXIgd2hlbiBhbGwgc3RhdGVzIGFyZSB0b2dnbGVkIG9uXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdCRiYXNlOlxuXHRcdFx0XHRcdHdpZHRoOiAnMTJweCdcblx0XHRcdFx0XHRoZWlnaHQ6ICcxMnB4J1xuXHRcdFx0XHRcdGZvbnRTaXplOiAnMTBweCdcblx0XHRcdFx0JGZ1bm55OlxuXHRcdFx0XHRcdGZvbnRTaXplOiAnMTVweCdcblx0XHRcdFx0XHRoZWlnaHQ6ICcxNXB4J1xuXHRcdFx0XHRcdCMgd2lkdGg6ICcxMHB4J1xuXHRcdFx0XHQkaGFwcHk6XG5cdFx0XHRcdFx0d2lkdGg6ICcxNHB4J1xuXHRcdFx0XHRcdGZvbnRTaXplOiAnMTRweCdcblx0XHRcdFx0XHQkcmVsYXhlZDpcblx0XHRcdFx0XHRcdGhlaWdodDogJzExcHgnXG5cdFx0XHRcdFx0XHRmb250U2l6ZTogJzE3cHgnXG5cdFx0XHRcdFx0XHQkZnVubnk6XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAnMTBweCdcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAnMTRweCdcblx0XHRcdFx0JHJlbGF4ZWQ6XG5cdFx0XHRcdFx0d2lkdGg6ICcxN3B4J1xuXG5cdFx0XHRkaXYuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwoJzEycHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwoJzEycHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCgnMTBweCcpXG5cblx0XHRcdGRpdi5zdGF0ZSAnZnVubnknLCBvblxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnd2lkdGgnKS50by5lcXVhbCgnMTJweCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdoZWlnaHQnKS50by5lcXVhbCgnMTVweCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsKCcxNXB4JylcblxuXHRcdFx0ZGl2LnN0YXRlICdmdW5ueScsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnd2lkdGgnKS50by5lcXVhbCgnMTJweCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdoZWlnaHQnKS50by5lcXVhbCgnMTJweCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsKCcxMHB4JylcblxuXHRcdFx0ZGl2LnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd3aWR0aCcpLnRvLmVxdWFsKCcxNHB4Jylcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2hlaWdodCcpLnRvLmVxdWFsKCcxMnB4Jylcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwoJzE0cHgnKVxuXG5cdFx0XHRkaXYuc3RhdGUgJ3JlbGF4ZWQnLCBvblxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnd2lkdGgnKS50by5lcXVhbCgnMTdweCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdoZWlnaHQnKS50by5lcXVhbCgnMTFweCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsKCcxN3B4JylcblxuXHRcdFx0ZGl2LnN0YXRlICdoYXBweScsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnd2lkdGgnKS50by5lcXVhbCgnMTdweCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdoZWlnaHQnKS50by5lcXVhbCgnMTJweCcpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsKCcxMHB4JylcblxuXHRcdFx0ZGl2LnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd3aWR0aCcpLnRvLmVxdWFsKCcxN3B4Jylcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2hlaWdodCcpLnRvLmVxdWFsKCcxMXB4Jylcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwoJzE3cHgnKVxuXHRcdFx0XG5cdFx0XHRkaXYuc3RhdGUgJ2Z1bm55Jywgb25cblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwoJzEwcHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwoJzE0cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCgnMTdweCcpXG5cblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvZmZcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3dpZHRoJykudG8uZXF1YWwoJzE3cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnaGVpZ2h0JykudG8uZXF1YWwoJzE1cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCgnMTVweCcpXG5cblxuXHRcdHRlc3QgXCJRdWlja0VsZW1lbnQucmVjdCBzaG91bGQgY29udGFpbiBhbiB1cGRhdGVkIHZlcnNpb24gb2YgdGhlIGVsZW1lbnQncyBDbGllbnRSZWN0XCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYoKS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0cmVjdEEgPSBkaXYucmVjdFxuXHRcdFx0cmVjdEIgPSBkaXYucmVjdFxuXG5cdFx0XHRleHBlY3QocmVjdEEpLnRvLmJlLmluc3RhbmNlT2YoQ2xpZW50UmVjdClcblx0XHRcdGV4cGVjdChyZWN0QikudG8uYmUuaW5zdGFuY2VPZihDbGllbnRSZWN0KVxuXHRcdFx0ZXhwZWN0KHJlY3RBKS50by5lcWwocmVjdEIpXG5cblxuXHRcdFx0ZGl2LnN0eWxlICd3aWR0aCcsICc3cHgnXG5cdFx0XHRyZWN0QyA9IGRpdi5yZWN0XG5cdFx0XHRleHBlY3QocmVjdEMpLnRvLmJlLmluc3RhbmNlT2YoQ2xpZW50UmVjdClcblx0XHRcdGV4cGVjdChyZWN0QSkudG8uZXFsKHJlY3RCKVxuXHRcdFx0ZXhwZWN0KHJlY3RBKS5ub3QudG8uZXFsKHJlY3RDKVxuXHRcdFx0ZXhwZWN0KHJlY3RBLndpZHRoKS5ub3QudG8uZXF1YWwoNylcblx0XHRcdGV4cGVjdChyZWN0Qi53aWR0aCkubm90LnRvLmVxdWFsKDcpXG5cdFx0XHRleHBlY3QocmVjdEMud2lkdGgpLnRvLmVxdWFsKDcpXG5cblxuXHRcdHRlc3QgXCJRdWlja0VsZW1lbnQud2lkdGggc2hvdWxkIHJldHVybiB0aGUgdXBkYXRlZCB2ZXJzaW9uIG9mIGFuIGVsZW1lbnQncyBjb21wdXRlZCB3aWR0aFwiLCAoKS0+XG5cdFx0XHRwYXJlbnQgPSBEb20uZGl2KCkuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGRpdiA9IERvbS5kaXYoKS5hcHBlbmRUbyhwYXJlbnQpXG5cdFx0XHRcblx0XHRcdHBhcmVudC5zdHlsZSB3aWR0aDonMTAwMHB4J1xuXHRcdFx0ZGl2LnN0eWxlIHdpZHRoOic1MCUnXG5cdFx0XHRleHBlY3QoZGl2LndpZHRoKS50by5lcXVhbCg1MDApXG5cdFx0XHRcblx0XHRcdGRpdi5zdHlsZSB3aWR0aDonMTAlJ1xuXHRcdFx0ZXhwZWN0KGRpdi53aWR0aCkudG8uZXF1YWwoMTAwKVxuXHRcdFx0XG5cdFx0XHRkaXYuc3R5bGUgd2lkdGg6Jzk3cHgnXG5cdFx0XHRleHBlY3QoZGl2LndpZHRoKS50by5lcXVhbCg5NylcblxuXG5cdFx0dGVzdCBcIlF1aWNrRWxlbWVudC5oZWlnaHQgc2hvdWxkIHJldHVybiB0aGUgdXBkYXRlZCB2ZXJzaW9uIG9mIGFuIGVsZW1lbnQncyBjb21wdXRlZCBoZWlnaHRcIiwgKCktPlxuXHRcdFx0cGFyZW50ID0gRG9tLmRpdigpLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRkaXYgPSBEb20uZGl2KCkuYXBwZW5kVG8ocGFyZW50KVxuXHRcdFx0XG5cdFx0XHRwYXJlbnQuc3R5bGUgaGVpZ2h0OicxMDAwcHgnXG5cdFx0XHRkaXYuc3R5bGUgaGVpZ2h0Oic1MCUnXG5cdFx0XHRleHBlY3QoZGl2LmhlaWdodCkudG8uZXF1YWwoNTAwKVxuXHRcdFx0XG5cdFx0XHRkaXYuc3R5bGUgaGVpZ2h0OicxMCUnXG5cdFx0XHRleHBlY3QoZGl2LmhlaWdodCkudG8uZXF1YWwoMTAwKVxuXHRcdFx0XG5cdFx0XHRkaXYuc3R5bGUgaGVpZ2h0Oic5N3B4J1xuXHRcdFx0ZXhwZWN0KGRpdi5oZWlnaHQpLnRvLmVxdWFsKDk3KVxuXG5cblx0XHR0ZXN0IFwiUXVpY2tFbGVtZW50Lm9yaWVudGF0aW9uIHNob3VsZCByZXR1cm4gdGhlIHVwZGF0ZWQgdmVyc2lvbiBvZiBhbiBlbGVtZW50J3MgY29tcHV0ZWQgb3JpZW50YXRpb25cIiwgKCktPlxuXHRcdFx0cGFyZW50ID0gRG9tLmRpdigpLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRkaXYgPSBEb20uZGl2KCkuYXBwZW5kVG8ocGFyZW50KVxuXHRcdFx0XG5cdFx0XHRkaXYuc3R5bGUgd2lkdGg6NTAwLCBoZWlnaHQ6NDAwXG5cdFx0XHRleHBlY3QoZGl2Lm9yaWVudGF0aW9uKS50by5lcXVhbCgnbGFuZHNjYXBlJylcblx0XHRcdFxuXHRcdFx0ZGl2LnN0eWxlIHdpZHRoOjU1MCwgaGVpZ2h0OjYwMFxuXHRcdFx0ZXhwZWN0KGRpdi5vcmllbnRhdGlvbikudG8uZXF1YWwoJ3BvcnRyYWl0Jylcblx0XHRcdFxuXHRcdFx0ZGl2LnN0eWxlIHdpZHRoOjYwMCwgaGVpZ2h0OjYwMFxuXHRcdFx0ZXhwZWN0KGRpdi5vcmllbnRhdGlvbikudG8uZXF1YWwoJ3BvcnRyYWl0Jylcblx0XHRcdFxuXHRcdFx0ZGl2LnN0eWxlIHdpZHRoOjYwMSwgaGVpZ2h0OjYwMFxuXHRcdFx0ZXhwZWN0KGRpdi5vcmllbnRhdGlvbikudG8uZXF1YWwoJ2xhbmRzY2FwZScpXG5cblxuXHRcdHRlc3QgXCJRdWlja0VsZW1lbnQuYXNwZWN0UmF0aW8gc2hvdWxkIHJldHVybiB0aGUgdXBkYXRlZCB2ZXJzaW9uIG9mIGFuIGVsZW1lbnQncyBjb21wdXRlZCBhc3BlY3QtcmF0aW9cIiwgKCktPlxuXHRcdFx0cGFyZW50ID0gRG9tLmRpdigpLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRkaXYgPSBEb20uZGl2KCkuYXBwZW5kVG8ocGFyZW50KVxuXHRcdFx0XG5cdFx0XHRkaXYuc3R5bGUgd2lkdGg6NTAwLCBoZWlnaHQ6NDAwXG5cdFx0XHRleHBlY3QoZGl2LmFzcGVjdFJhdGlvKS50by5lcXVhbCgxLjI1KVxuXHRcdFx0XG5cdFx0XHRkaXYuc3R5bGUgd2lkdGg6NTQwLCBoZWlnaHQ6NjAwXG5cdFx0XHRleHBlY3QoZGl2LmFzcGVjdFJhdGlvKS50by5lcXVhbCgwLjkpXG5cdFx0XHRcblx0XHRcdGRpdi5zdHlsZSB3aWR0aDo2MDAsIGhlaWdodDo2MDBcblx0XHRcdGV4cGVjdChkaXYuYXNwZWN0UmF0aW8pLnRvLmVxdWFsKDEpXG5cdFx0XHRcblx0XHRcdGRpdi5zdHlsZSB3aWR0aDozMDAsIGhlaWdodDo5MDBcblx0XHRcdGV4cGVjdChkaXYuYXNwZWN0UmF0aW8pLnRvLmVxdWFsKDAuMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMpXG5cblxuXHRcdHRlc3QgXCJJZiBvcHRpb25zLnN0eWxlQWZ0ZXJJbnNlcnQgaXMgcGFzc2VkLCBiYXNlIHN0eWxlcyB3aWxsIGJlIGFwcGxpZWQgb25seSBhZnRlciB0aGUgZWxlbWVudCBpcyBpbnNlcnRlZCBpbnRvIHRoZSBET01cIiwgKCktPlxuXHRcdFx0cGFyZW50T3BhY2l0eUdldHRlciA9ICgpLT4gaWYgQHBhcmVudCB0aGVuIEBwYXJlbnQuc3R5bGUoJ29wYWNpdHknKSBlbHNlICcwLjUnXG5cdFx0XHRkaXZSZWcgPSBEb20uZGl2KHN0eWxlOntoZWlnaHQ6JzE5cHgnLCBvcGFjaXR5OnBhcmVudE9wYWNpdHlHZXR0ZXJ9KVxuXHRcdFx0ZGl2QSA9IERvbS5kaXYoc3R5bGU6e2hlaWdodDonMTlweCcsIG9wYWNpdHk6cGFyZW50T3BhY2l0eUdldHRlcn0sIHN0eWxlQWZ0ZXJJbnNlcnQ6dHJ1ZSlcblx0XHRcdGRpdkIgPSBEb20uZGl2KHN0eWxlOntoZWlnaHQ6JzE5cHgnLCBvcGFjaXR5OnBhcmVudE9wYWNpdHlHZXR0ZXJ9LCBzdHlsZUFmdGVySW5zZXJ0OnRydWUpXG5cdFx0XHRkaXZDID0gRG9tLmRpdihzdHlsZTp7aGVpZ2h0OicxOXB4Jywgb3BhY2l0eTpwYXJlbnRPcGFjaXR5R2V0dGVyfSwgc3R5bGVBZnRlckluc2VydDp0cnVlKVxuXG5cdFx0XHRleHBlY3QoZGl2UmVnLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdlJlZy5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnMC41Jylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2Qi5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkMuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3QoZGl2Qy5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnJylcblx0XHRcdFxuXHRcdFx0ZGl2QS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTlweCcpXG5cdFx0XHRleHBlY3QoZGl2Qi5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkMuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcxJylcblx0XHRcdGV4cGVjdChkaXZCLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkMuZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJycpXG5cdFx0XHRcblx0XHRcdGRpdkIuaW5zZXJ0QmVmb3JlKHNhbmRib3gpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxOXB4Jylcblx0XHRcdGV4cGVjdChkaXZCLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkMuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcxJylcblx0XHRcdGV4cGVjdChkaXZCLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcxJylcblx0XHRcdGV4cGVjdChkaXZDLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcnKVxuXHRcdFx0XG5cdFx0XHRzYW5kYm94LmFwcGVuZENoaWxkKGRpdkMuZWwpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxOXB4Jylcblx0XHRcdGV4cGVjdChkaXZCLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkMuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcxJylcblx0XHRcdGV4cGVjdChkaXZCLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcxJylcblx0XHRcdGV4cGVjdChkaXZDLmVsLnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcnKVxuXHRcdFx0XG5cdFx0XHRkaXZDLnBhcmVudFxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTlweCcpXG5cdFx0XHRleHBlY3QoZGl2Qi5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxOXB4Jylcblx0XHRcdGV4cGVjdChkaXZDLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJzEnKVxuXHRcdFx0ZXhwZWN0KGRpdkIuZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJzEnKVxuXHRcdFx0ZXhwZWN0KGRpdkMuZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJzEnKVxuXHRcdFx0ZGl2Qy5hcHBlbmRUbyhzYW5kYm94KVxuXG5cblx0XHR0ZXN0IFwiQW55IHN0eWxlcyBhcHBsaWVkIGJ5IHN0YXRlcyBiZWZvcmUgdGhlIGVsZW1lbnQgaGFzIGJlZW4gaW5zZXJ0ZWQgaW50byB0aGUgRE9NIGFuZCB3aGVuIG9wdGlvbnMuc3R5bGVBZnRlckluc2VydCBpcyBvbiB3aWxsIGJlIHJlLWFwcGxpZWQgYWZ0ZXIgaW5zZXJ0XCIsICgpLT5cblx0XHRcdGRpdlJlZyA9IERvbS5kaXYoc3R5bGU6eyRiYXNlOntoZWlnaHQ6JzE5cHgnfSwgJGZ1bm55OntoZWlnaHQ6JzI5cHgnfSwgJGhhcHB5OntoZWlnaHQ6JzM5cHgnfX0pXG5cdFx0XHRkaXZBID0gRG9tLmRpdihzdHlsZTp7JGJhc2U6e2hlaWdodDonMTlweCd9LCAkZnVubnk6e2hlaWdodDonMjlweCd9LCAkaGFwcHk6e2hlaWdodDonMzlweCd9fSwgc3R5bGVBZnRlckluc2VydDp0cnVlKVxuXG5cdFx0XHRleHBlY3QoZGl2UmVnLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblxuXHRcdFx0ZGl2UmVnLnN0YXRlICdmdW5ueScsIG9uXG5cdFx0XHRkaXZBLnN0YXRlICdmdW5ueScsIG9uXG5cdFx0XHRleHBlY3QoZGl2UmVnLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzI5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMjlweCcpXG5cdFx0XHRcblx0XHRcdGRpdlJlZy5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZGl2QS5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZXhwZWN0KGRpdlJlZy5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCczOXB4Jylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzM5cHgnKVxuXHRcdFx0XG5cdFx0XHRkaXZSZWcuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGRpdkEuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGV4cGVjdChkaXZSZWcuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMzlweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCczOXB4JylcblxuXG5cdFx0dGVzdCBcIklmIGFuIGVsZW1lbnQgd2l0aCBvcHRpb25zLnN0eWxlQWZ0ZXJJbnNlcnQgaXMgYXBwZW5kZWQgaW50byBhIGRldGFjaGVkIGVsZW1lbnQsIHN0eWxlcyB3aWxsIGJlIGFwcGxpZWQgb25seSBhZnRlciB0aGUgcGFyZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cIiwgKCktPlxuXHRcdFx0ZGV0YWNoZWRQYXJlbnQgPSBEb20uZGl2KClcblx0XHRcdGRpdlJlZyA9IERvbS5kaXYoc3R5bGU6e2hlaWdodDonMTlweCcsICRoYXBweTokcmVsYXhlZDp7d2lkdGg6JzMxcHgnfX0pXG5cdFx0XHRkaXZBID0gRG9tLmRpdihzdHlsZTp7aGVpZ2h0OicxOXB4JywgJGhhcHB5OiRyZWxheGVkOnt3aWR0aDonMzFweCd9fSwgc3R5bGVBZnRlckluc2VydDp0cnVlKVxuXG5cdFx0XHRkaXZSZWcuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGRpdlJlZy5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRkaXZBLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRkaXZBLnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdGRpdkEuc3RhdGUgJ3JlbGF4ZWQnLCBvblxuXHRcdFx0ZGl2QS5zdHlsZSAndmlzaWJpbGl0eScsICdoaWRkZW4nXG5cblx0XHRcdGV4cGVjdChkaXZSZWcuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTlweCcpXG5cdFx0XHRleHBlY3QoZGl2UmVnLmVsLnN0eWxlLndpZHRoKS50by5lcXVhbCgnMzFweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUud2lkdGgpLnRvLmVxdWFsKCczMXB4Jylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLnZpc2liaWxpdHkpLnRvLmVxdWFsKCdoaWRkZW4nKVxuXG5cdFx0XHRkaXZBLmFwcGVuZFRvKGRldGFjaGVkUGFyZW50KVxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLndpZHRoKS50by5lcXVhbCgnMzFweCcpXG5cdFx0XHRleHBlY3QoZGl2QS5lbC5zdHlsZS52aXNpYmlsaXR5KS50by5lcXVhbCgnaGlkZGVuJylcblxuXHRcdFx0ZGV0YWNoZWRQYXJlbnQuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE5cHgnKVxuXHRcdFx0ZXhwZWN0KGRpdkEuZWwuc3R5bGUud2lkdGgpLnRvLmVxdWFsKCczMXB4Jylcblx0XHRcdGV4cGVjdChkaXZBLmVsLnN0eWxlLnZpc2liaWxpdHkpLnRvLmVxdWFsKCdoaWRkZW4nKVxuXG5cblx0XHR0ZXN0IFwiUXVpY2tFbGVtZW50Lm9uSW5zZXJ0ZWQgY2FuIGFjY2VwdCBjYWxsYmFja3Mgd2hpY2ggd2lsbCBiZSBpbnZva2VkIHdoZW4gaW5zZXJ0ZWQgaW50byB0aGUgRE9NXCIsICgpLT5cblx0XHRcdGludm9rZUNvdW50ID0gMFxuXHRcdFx0cGFyZW50QSA9IERvbS5zZWN0aW9uKClcblx0XHRcdHBhcmVudEIgPSBEb20uc2VjdGlvbigpXG5cdFx0XHRtYXN0ZXJQYXJlbnRCID0gRG9tLmRpdigpXG5cdFx0XHRwYXJlbnRDID0gRG9tLnNlY3Rpb24oKS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cblx0XHRcdGRpdi5vbkluc2VydGVkIChlbCktPlxuXHRcdFx0XHRleHBlY3QoZWwpLnRvLmVxdWFsKGRpdilcblx0XHRcdFx0ZXhwZWN0KGludm9rZUNvdW50KyspLnRvLmVxdWFsKDApXG5cblx0XHRcdGV4cGVjdChpbnZva2VDb3VudCkudG8uZXF1YWwoMClcblx0XHRcdGRpdi5hcHBlbmRUbyhwYXJlbnRBKVxuXHRcdFx0ZXhwZWN0KGludm9rZUNvdW50KS50by5lcXVhbCgwKVxuXHRcdFx0XG5cdFx0XHRkaXYuYXBwZW5kVG8ocGFyZW50Qi5hcHBlbmRUbyhtYXN0ZXJQYXJlbnRCKSlcblx0XHRcdGV4cGVjdChpbnZva2VDb3VudCkudG8uZXF1YWwoMClcblx0XHRcdFxuXHRcdFx0cGFyZW50QS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0ZXhwZWN0KGludm9rZUNvdW50KS50by5lcXVhbCgwKVxuXHRcdFx0XG5cdFx0XHRkaXYuYXBwZW5kVG8ocGFyZW50Qylcblx0XHRcdGV4cGVjdChpbnZva2VDb3VudCkudG8uZXF1YWwoMSlcblxuXHRcdFx0ZGl2LmRldGFjaCgpXG5cdFx0XHRkaXYuYXBwZW5kVG8ocGFyZW50Qi5hcHBlbmRUbyhzYW5kYm94KSlcblx0XHRcdGV4cGVjdChpbnZva2VDb3VudCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5lcXVhbCBwYXJlbnRCXG5cblx0XHRcdGRpdi5vbkluc2VydGVkICgpLT4gZXhwZWN0KGludm9rZUNvdW50KyspLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoaW52b2tlQ291bnQpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkudG8uZXF1YWwgcGFyZW50QlxuXHRcdFx0XG5cdFx0XHRkaXYuYXBwZW5kVG8ocGFyZW50Qylcblx0XHRcdGV4cGVjdChpbnZva2VDb3VudCkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5lcXVhbCBwYXJlbnRDXG5cdFx0XHRcblx0XHRcdGRpdi5kZXRhY2goKVxuXHRcdFx0ZGl2LmFwcGVuZFRvKHBhcmVudEEpXG5cdFx0XHRkaXYub25JbnNlcnRlZCAoKCktPiBpbnZva2VDb3VudCsrOyBleHBlY3QoZmFsc2UpLnRvLmJlLnRydWUpLCBmYWxzZVxuXHRcdFx0ZXhwZWN0KGludm9rZUNvdW50KS50by5lcXVhbCgyKVxuXHRcdFx0XG5cdFx0XHRkaXYuZGV0YWNoKClcblx0XHRcdGRpdi5hcHBlbmRUbyhwYXJlbnRCKVxuXHRcdFx0ZXhwZWN0KGludm9rZUNvdW50KS50by5lcXVhbCgyKVxuXG5cblx0XHR0ZXN0IFwiUXVpY2tFbGVtZW50LnJlcGxhY2Ugd2lsbCB0cmlnZ2VyIHRoZSBvbkluc2VydGVkIGV2ZW50XCIsICgpLT5cblx0XHRcdGludm9rZUNvdW50ID0gMFxuXHRcdFx0cGFyZW50ID0gRG9tLnNlY3Rpb24oKS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0QSA9IERvbS5kaXYoKVxuXHRcdFx0QiA9IERvbS5kaXYoKVxuXG5cdFx0XHRCLm9uSW5zZXJ0ZWQgKGVsKS0+XG5cdFx0XHRcdGV4cGVjdChlbCkudG8uZXF1YWwoQilcblx0XHRcdFx0ZXhwZWN0KGludm9rZUNvdW50KyspLnRvLmVxdWFsKDApXG5cblx0XHRcdGV4cGVjdChpbnZva2VDb3VudCkudG8uZXF1YWwgMFxuXHRcdFx0ZXhwZWN0KEEucGFyZW50KS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoQi5wYXJlbnQpLnRvLmVxdWFsKHVuZGVmaW5lZClcblxuXHRcdFx0cGFyZW50LmFwcGVuZChBKVxuXHRcdFx0ZXhwZWN0KGludm9rZUNvdW50KS50by5lcXVhbCAwXG5cdFx0XHRleHBlY3QoQS5wYXJlbnQpLnRvLmVxdWFsKHBhcmVudClcblx0XHRcdGV4cGVjdChCLnBhcmVudCkudG8uZXF1YWwodW5kZWZpbmVkKVxuXG5cdFx0XHRBLnJlcGxhY2UoQilcblx0XHRcdGV4cGVjdChpbnZva2VDb3VudCkudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KEEucGFyZW50KS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoQi5wYXJlbnQpLnRvLmVxdWFsKHBhcmVudClcblxuXG5cdFx0dGVzdCBcIlF1aWNrRWxlbWVudC5waXBlU3RhdGUgY2FuIGJlIHVzZWQgdG8gcmVkaXJlY3QgYWxsIHN0YXRlIHRvZ2dsZXMgdG8gdGhlIHByb3ZpZGVkIHRhcmdldCBlbGVtZW50XCIsICgpLT5cblx0XHRcdHBhcmVudEEgPSBEb20uZGl2KClcblx0XHRcdHBhcmVudEIgPSBEb20uZGl2KHBhc3NTdGF0ZVRvQ2hpbGRyZW46ZmFsc2UpXG5cdFx0XHRkaXZBID0gRG9tLmRpdihudWxsKS5hcHBlbmRUbyhwYXJlbnRBKVxuXHRcdFx0ZGl2QiA9IERvbS5kaXYobnVsbCkuYXBwZW5kVG8ocGFyZW50Qilcblx0XHRcdGNoaWxkQSA9IERvbS5zcGFuKCkuYXBwZW5kVG8oZGl2QSlcblx0XHRcdGNoaWxkQiA9IERvbS5zcGFuKCkuYXBwZW5kVG8oZGl2QilcblxuXHRcdFx0ZGl2QS5waXBlU3RhdGUoKVxuXHRcdFx0ZGl2QS5zdGF0ZSAnMScsIG9uXG5cdFx0XHRleHBlY3QocGFyZW50QS5zdGF0ZSAnMScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGRpdkEuc3RhdGUgJzEnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KGNoaWxkQS5zdGF0ZSAnMScpLnRvLmVxdWFsIG9uXG5cdFx0XHRcblx0XHRcdGRpdkEucGlwZVN0YXRlKHBhcmVudEEpXG5cdFx0XHRkaXZBLnN0YXRlICcyJywgb25cblx0XHRcdGV4cGVjdChwYXJlbnRBLnN0YXRlICcyJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICcyJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChjaGlsZEEuc3RhdGUgJzInKS50by5lcXVhbCBvblxuXG5cdFx0XHRkaXZBLnBpcGVTdGF0ZShmYWxzZSlcblx0XHRcdGRpdkEuc3RhdGUgJzIuNScsIG9uXG5cdFx0XHRleHBlY3QocGFyZW50QS5zdGF0ZSAnMi41JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnMi41JykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChjaGlsZEEuc3RhdGUgJzIuNScpLnRvLmVxdWFsIG9uXG5cdFx0XHRcblx0XHRcdGRpdkIucGlwZVN0YXRlKHRydWUpXG5cdFx0XHRkaXZCLnN0YXRlICczJywgb25cblx0XHRcdGV4cGVjdChwYXJlbnRCLnN0YXRlICczJykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoZGl2Qi5zdGF0ZSAnMycpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QoY2hpbGRCLnN0YXRlICczJykudG8uZXF1YWwgb25cblx0XHRcdFxuXHRcdFx0ZGl2Qi5waXBlU3RhdGUocGFyZW50Qilcblx0XHRcdGRpdkIuc3RhdGUgJzQnLCBvblxuXHRcdFx0ZXhwZWN0KHBhcmVudEIuc3RhdGUgJzQnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJzQnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChjaGlsZEIuc3RhdGUgJzQnKS50by5lcXVhbCBvZmZcblx0XHRcdFxuXHRcdFx0ZGl2QS5waXBlU3RhdGUocGFyZW50Qilcblx0XHRcdGRpdkEuc3RhdGUgJzUnLCBvblxuXHRcdFx0ZXhwZWN0KHBhcmVudEEuc3RhdGUgJzUnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChwYXJlbnRCLnN0YXRlICc1JykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChkaXZBLnN0YXRlICc1JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoZGl2Qi5zdGF0ZSAnNScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGNoaWxkQS5zdGF0ZSAnNScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5zdGF0ZSAnNScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0XG5cdFx0XHRkaXZBLnBpcGVTdGF0ZShmYWxzZSlcblx0XHRcdGRpdkIucGlwZVN0YXRlKHBhcmVudEEpXG5cdFx0XHRkaXZCLnN0YXRlICc2Jywgb25cblx0XHRcdGV4cGVjdChwYXJlbnRBLnN0YXRlICc2JykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChwYXJlbnRCLnN0YXRlICc2JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnNicpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QoZGl2Qi5zdGF0ZSAnNicpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGNoaWxkQS5zdGF0ZSAnNicpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QoY2hpbGRCLnN0YXRlICc2JykudG8uZXF1YWwgb2ZmXG5cblxuXHRcdHRlc3QgXCJTdGF0ZXMgY2FuIGJlIG1hcmtlZCBhcyB1bnBhc3NhYmxlIHRvIGF2b2lkIHBhc3NpbmcgdG8gY2hpbGRyZW4gYnkgaW5jbHVkaW5nIHRoZW0gaW4gb3B0aW9ucy51bnBhc3NhYmxlU3RhdGVzXCIsICgpLT5cblx0XHRcdGRpdiA9IERvbS5kaXYodW5wYXNzYWJsZVN0YXRlczogWydCJywnRCddKVxuXHRcdFx0c3BhbkEgPSBEb20uc3BhbigpLmFwcGVuZFRvKGRpdilcblx0XHRcdHNwYW5CID0gRG9tLnNwYW4oKS5hcHBlbmRUbyhkaXYpXG5cdFx0XHRzdWJTcGFuID0gRG9tLnNwYW4oKS5hcHBlbmRUbyhzcGFuQilcblxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnQScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHNwYW5BLnN0YXRlICdBJykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3BhbkIuc3RhdGUgJ0EnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJTcGFuLnN0YXRlICdBJykudG8uZXF1YWwgb2ZmXG5cblx0XHRcdGRpdi5zdGF0ZSAnQScsIG9uXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdBJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChzcGFuQS5zdGF0ZSAnQScpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3Qoc3BhbkIuc3RhdGUgJ0EnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KHN1YlNwYW4uc3RhdGUgJ0EnKS50by5lcXVhbCBvblxuXG5cdFx0XHRkaXYuc3RhdGUgJ0InLCBvblxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnQicpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3Qoc3BhbkEuc3RhdGUgJ0InKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzcGFuQi5zdGF0ZSAnQicpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YlNwYW4uc3RhdGUgJ0InKS50by5lcXVhbCBvZmZcblxuXHRcdFx0ZGl2LnN0YXRlICdDJywgb25cblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ0MnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KHNwYW5BLnN0YXRlICdDJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChzcGFuQi5zdGF0ZSAnQycpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3Qoc3ViU3Bhbi5zdGF0ZSAnQycpLnRvLmVxdWFsIG9uXG5cblx0XHRcdGRpdi5zdGF0ZSAnRCcsIG9uXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdEJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChzcGFuQS5zdGF0ZSAnRCcpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHNwYW5CLnN0YXRlICdEJykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViU3Bhbi5zdGF0ZSAnRCcpLnRvLmVxdWFsIG9mZlxuXHRcdFx0XG5cdFx0XHRzcGFuQi5zdGF0ZSAnRCcsIG9uXG5cdFx0XHRleHBlY3Qoc3BhbkIuc3RhdGUgJ0QnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KHN1YlNwYW4uc3RhdGUgJ0QnKS50by5lcXVhbCBvblxuXHRcdFx0XG5cdFx0XHRkaXYuc3RhdGUgJ0QnLCBvZmZcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ0QnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzcGFuQi5zdGF0ZSAnRCcpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3Qoc3ViU3Bhbi5zdGF0ZSAnRCcpLnRvLmVxdWFsIG9uXG5cblxuXHRcdHRlc3QgXCJXaGVuIC5zdGF0ZSgpIHJlY2VpdmVzIGEgdHJ1dGh5IHZhbHVlIGFzIHRoZSB0aGlyZCBhcmd1bWVudCB0aGUgZXZlbnQgd2lsbCBidWJibGUgdXAgdG8gcGFyZW50cyBpbnN0ZWFkIG9mIGNhc2NhZGUgdG8gY2hpbGRyZW5cIiwgKCktPlxuXHRcdFx0cGFyZW50QSA9IERvbS5zZWN0aW9uIG51bGwsXG5cdFx0XHRcdHN1YlBhcmVudEEgPSBEb20uZGl2IG51bGwsXG5cdFx0XHRcdFx0Y2hpbGRBID0gRG9tLmRpdiBudWxsLFxuXHRcdFx0XHRcdFx0c3ViQ2hpbGRBID0gRG9tLmRpdigpXG5cdFx0XHRcblx0XHRcdHBhcmVudEIgPSBEb20uc2VjdGlvbiBudWxsLFxuXHRcdFx0XHRzdWJQYXJlbnRCID0gRG9tLmRpdiBudWxsLFxuXHRcdFx0XHRcdGNoaWxkQiA9IERvbS5kaXYgbnVsbCxcblx0XHRcdFx0XHRcdHN1YkNoaWxkQiA9IERvbS5kaXYoKVxuXG5cdFx0XHRleHBlY3QocGFyZW50QS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChwYXJlbnRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YlBhcmVudEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViUGFyZW50Qi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChjaGlsZEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoY2hpbGRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YkNoaWxkQS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJDaGlsZEIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cblx0XHRcdGNoaWxkQS5zdGF0ZSAnaGFwcHknLCBvbiwgdHJ1ZVxuXHRcdFx0Y2hpbGRCLnN0YXRlICdoYXBweScsIG9uXG5cblx0XHRcdGV4cGVjdChwYXJlbnRBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3QocGFyZW50Qi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJQYXJlbnRBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3Qoc3ViUGFyZW50Qi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChjaGlsZEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChjaGlsZEIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChzdWJDaGlsZEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViQ2hpbGRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9uXG5cblx0XHRcdGNoaWxkQS5zdGF0ZSAncmVsYXhlZCcsIG9uLCBudWxsXG5cdFx0XHRjaGlsZEIuc3RhdGUgJ3JlbGF4ZWQnLCBvbiwgJ29uJ1xuXG5cdFx0XHRleHBlY3QocGFyZW50QS5zdGF0ZSAncmVsYXhlZCcpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHBhcmVudEIuc3RhdGUgJ3JlbGF4ZWQnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KHN1YlBhcmVudEEuc3RhdGUgJ3JlbGF4ZWQnKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJQYXJlbnRCLnN0YXRlICdyZWxheGVkJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChjaGlsZEEuc3RhdGUgJ3JlbGF4ZWQnKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5zdGF0ZSAncmVsYXhlZCcpLnRvLmVxdWFsIG9uXG5cdFx0XHRleHBlY3Qoc3ViQ2hpbGRBLnN0YXRlICdyZWxheGVkJykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChzdWJDaGlsZEIuc3RhdGUgJ3JlbGF4ZWQnKS50by5lcXVhbCBvZmZcblxuXG5cdFx0dGVzdCBcIm9wdGlvbnMuc3RhdGVUcmlnZ2VycyBjb25maWcgb2JqZWN0cyBjYW4gc3BlY2lmeSBhICdmb3JjZScgcHJvcGVydHkgd2hpY2ggd2lsbCBtYWtlIHRoZW0gZ2V0IGF0dGFjaGVkIGV2ZW4gaWYgdGhleSBhcmVuJ3QgdXNlZFwiLCAoKS0+XG5cdFx0XHRkaXZBID0gRG9tLmRpdiBzdGF0ZVRyaWdnZXJzOnsnaGFwcHknOiBvbjonaGFwcHlPTicsIG9mZjonaGFwcHlPRkYnLCBmb3JjZTp0cnVlfVxuXHRcdFx0ZGl2QiA9IERvbS5kaXYgc3RhdGVUcmlnZ2Vyczp7J2hhcHB5Jzogb246J2hhcHB5T04nLCBvZmY6J2hhcHB5T0ZGJ31cblxuXHRcdFx0ZXhwZWN0KGRpdkEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoZGl2Qi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblxuXHRcdFx0ZGl2QS5yYXcuZW1pdEV2ZW50ICdoYXBweU9OJ1xuXHRcdFx0ZGl2Qi5yYXcuZW1pdEV2ZW50ICdoYXBweU9OJ1xuXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KGRpdkIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cblx0XHRcdGRpdkIuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGRpdkEucmF3LmVtaXRFdmVudCAnaGFwcHlPRkYnXG5cdFx0XHRkaXZCLnJhdy5lbWl0RXZlbnQgJ2hhcHB5T0ZGJ1xuXG5cdFx0XHRleHBlY3QoZGl2QS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChkaXZCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9uXG5cblxuXHRcdHRlc3QgXCJvcHRpb25zLnN0YXRlVHJpZ2dlcnMgY29uZmlnIG9iamVjdHMgY2FuIHNwZWNpZnkgYSAnYnViYmxlcycgcHJvcGVydHkgd2hpY2ggd2lsbCBjYXVzZSB0aGUgc3RhdGUgdG8gYnViYmxlIHRvIHBhcmVudHMgaW5zdGVhZCBvZiBjYXNjYWRlIHRvIGNoaWxkcmVuXCIsICgpLT5cblx0XHRcdHBhcmVudEEgPSBEb20uc2VjdGlvbiBudWxsLFxuXHRcdFx0XHRzdWJQYXJlbnRBID0gRG9tLmRpdiBudWxsLFxuXHRcdFx0XHRcdGNoaWxkQSA9IERvbS5kaXYgc3RhdGVUcmlnZ2Vyczp7J2hhcHB5Jzogb246J2hhcHB5T04nLCBvZmY6J2hhcHB5T0ZGJywgYnViYmxlczp0cnVlLCBmb3JjZTp0cnVlfSxcblx0XHRcdFx0XHRcdHN1YkNoaWxkQSA9IERvbS5kaXYoKVxuXHRcdFx0XG5cdFx0XHRwYXJlbnRCID0gRG9tLnNlY3Rpb24gbnVsbCxcblx0XHRcdFx0c3ViUGFyZW50QiA9IERvbS5kaXYgbnVsbCxcblx0XHRcdFx0XHRjaGlsZEIgPSBEb20uZGl2IHN0YXRlVHJpZ2dlcnM6eydoYXBweSc6IG9uOidoYXBweU9OJywgb2ZmOidoYXBweU9GRicsIGZvcmNlOnRydWV9LFxuXHRcdFx0XHRcdFx0c3ViQ2hpbGRCID0gRG9tLmRpdigpXG5cblx0XHRcdGV4cGVjdChwYXJlbnRBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHBhcmVudEIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViUGFyZW50QS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJQYXJlbnRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGNoaWxkQS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChjaGlsZEIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViQ2hpbGRBLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YkNoaWxkQi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblxuXHRcdFx0Y2hpbGRBLnJhdy5lbWl0RXZlbnQgJ2hhcHB5T04nXG5cdFx0XHRjaGlsZEIucmF3LmVtaXRFdmVudCAnaGFwcHlPTidcblxuXHRcdFx0ZXhwZWN0KHBhcmVudEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChwYXJlbnRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YlBhcmVudEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb25cblx0XHRcdGV4cGVjdChzdWJQYXJlbnRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KGNoaWxkQS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvblxuXHRcdFx0ZXhwZWN0KHN1YkNoaWxkQS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJDaGlsZEIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb25cblxuXHRcdFx0Y2hpbGRBLnJhdy5lbWl0RXZlbnQgJ2hhcHB5T0ZGJ1xuXHRcdFx0Y2hpbGRCLnJhdy5lbWl0RXZlbnQgJ2hhcHB5T0ZGJ1xuXG5cdFx0XHRleHBlY3QocGFyZW50QS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChwYXJlbnRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YlBhcmVudEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3Qoc3ViUGFyZW50Qi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChjaGlsZEEuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cdFx0XHRleHBlY3QoY2hpbGRCLnN0YXRlICdoYXBweScpLnRvLmVxdWFsIG9mZlxuXHRcdFx0ZXhwZWN0KHN1YkNoaWxkQS5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvZmZcblx0XHRcdGV4cGVjdChzdWJDaGlsZEIuc3RhdGUgJ2hhcHB5JykudG8uZXF1YWwgb2ZmXG5cblxuXHRcdHRlc3QgXCJ3cmFwcGVycyBjcmVhdGVkIGZvciBleGlzdGluZyBlbGVtZW50cyBzaG91bGQgYXR0ZW1wdCB0byByZXNvbHZlIGlmIGl0cyBpbnNlcnRlZCBpbnRvIHRoZSBET00gb24gaW5pdFwiLCAoKS0+XG5cdFx0XHRkaXZBXyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRkaXZCXyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRzYW5kYm94LmFwcGVuZENoaWxkKGRpdkJfKVxuXHRcdFx0ZGl2QSA9IERvbShkaXZBXylcblx0XHRcdGRpdkIgPSBEb20oZGl2Ql8pXG5cblx0XHRcdGRpdkFfLnN0eWxlLmhlaWdodCA9ICcxMDBweCdcblx0XHRcdGRpdkJfLnN0eWxlLmhlaWdodCA9ICcxMDBweCdcblxuXHRcdFx0ZXhwZWN0KHR5cGVvZiBkaXZBLmhlaWdodCkudG8uZXF1YWwoJ251bWJlcicpXG5cdFx0XHRleHBlY3QodHlwZW9mIGRpdkIuaGVpZ2h0KS50by5lcXVhbCgnbnVtYmVyJylcblx0XHRcdGV4cGVjdChpc05hTiBkaXZBLmhlaWdodCkudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGlzTmFOIGRpdkIuaGVpZ2h0KS50by5iZS5mYWxzZVxuXHRcdFx0ZXhwZWN0KGRpdkEuc3R5bGVTYWZlICdoZWlnaHQnKS50by5lcXVhbCAnMTAwcHgnXG5cblxuXG5cblxuXG5cdHN1aXRlIFwiTWVkaWEgUXVlcmllc1wiLCAoKS0+XG5cdFx0c3VpdGVUZWFyZG93biAoKS0+IGRpbWVuc2lvbnMucmVzdG9yZSgpXG5cdFx0c3VpdGVTZXR1cCAoKS0+XG5cdFx0XHRAc2tpcCgpIGlmIG5vdCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdywgJ2lubmVyV2lkdGgnKT8uY29uZmlndXJhYmxlXG5cblxuXHRcdHRlc3QgXCJXaW5kb3cgZGltZW5zaW9uc1wiLCAoKS0+XG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDEwMDAsIDEwMDApXG5cdFx0XHRkaXYgPSBEb20uZGl2IHN0eWxlOlxuXHRcdFx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuXHRcdFx0XHR6SW5kZXg6IDJcblx0XHRcdFx0d2lkdGg6ICczMDBweCdcblx0XHRcdFx0aGVpZ2h0OiAnMzAwcHgnXG5cdFx0XHRcdGZvbnRTaXplOiAnMzBweCdcblx0XHRcdFx0bGluZUhlaWdodDogJzMwcHgnXG5cblx0XHRcdFx0J0B3aW5kb3cob3JpZW50YXRpb246bGFuZHNjYXBlKSc6XG5cdFx0XHRcdFx0Zm9udFdlaWdodDogNjAwXG5cblx0XHRcdFx0J0B3aW5kb3cob3JpZW50YXRpb246cG9ydHJhaXQpJzpcblx0XHRcdFx0XHRmb250V2VpZ2h0OiA3MDBcblxuXHRcdFx0XHQnQHdpbmRvdyhtYXgtd2lkdGg6ODAwKSc6XG5cdFx0XHRcdFx0ekluZGV4OiAzXG5cdFx0XHRcdFx0d2lkdGg6ICcyODBweCdcblx0XHRcdFx0XG5cdFx0XHRcdCdAd2luZG93KG1heC13aWR0aDo3MDAsIG1heC1oZWlnaHQ6MTAwMCknOlxuXHRcdFx0XHRcdHpJbmRleDogNFxuXHRcdFx0XHRcdHdpZHRoOiAnMjUwcHgnXG5cdFx0XHRcdFx0aGVpZ2h0OiAnMjUwcHgnXG5cdFx0XHRcdFxuXHRcdFx0XHQnQHdpbmRvdyhtYXgtaGVpZ2h0OjEwMDApJzpcblx0XHRcdFx0XHRmb250U2l6ZTogJzI1cHgnXG5cdFx0XHRcdFxuXHRcdFx0XHQnQHdpbmRvdyhtaW4td2lkdGg6OTAwcHgpJzpcblx0XHRcdFx0XHRmb250U2l6ZTogJzIzcHgnXG5cdFx0XHRcdFxuXHRcdFx0XHQnQHdpbmRvdyhhc3BlY3QtcmF0aW86MC41KSc6XG5cdFx0XHRcdFx0Zm9udFNpemU6ICcyMXB4J1xuXHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICcxMnB4J1xuXHRcdFx0XHRcblx0XHRcdFx0J0B3aW5kb3cobWluLWhlaWdodDoxMjAwKSc6XG5cdFx0XHRcdFx0Zm9udFNpemU6ICcyMHB4J1xuXG5cdFx0XHRkaXYuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdFxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuekluZGV4KS50by5lcXVhbCAnMidcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLndpZHRoKS50by5lcXVhbCAnMzAwcHgnXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsICczMDBweCdcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmZvbnRTaXplKS50by5lcXVhbCAnMjNweCdcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmZvbnRXZWlnaHQpLnRvLmVxdWFsICc3MDAnXG5cdFx0XHRcblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoOTAwKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFNpemUpLnRvLmVxdWFsICcyM3B4J1xuXHRcdFx0XG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDg5OSlcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmZvbnRTaXplKS50by5lcXVhbCAnMjVweCdcblxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSg4OTksIDExMDApXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5mb250U2l6ZSkudG8uZXF1YWwgJzMwcHgnXG5cblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoOTUwKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFNpemUpLnRvLmVxdWFsICcyM3B4J1xuXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDk1MCwgMTkwMClcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmZvbnRTaXplKS50by5lcXVhbCAnMjBweCdcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmxpbmVIZWlnaHQpLnRvLmVxdWFsICcxMnB4J1xuXHRcdFx0XG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDk1MCwgMTg5OSlcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmZvbnRTaXplKS50by5lcXVhbCAnMjBweCdcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmxpbmVIZWlnaHQpLnRvLmVxdWFsICczMHB4J1xuXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDc5MClcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLnpJbmRleCkudG8uZXF1YWwgJzMnXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS53aWR0aCkudG8uZXF1YWwgJzI4MHB4J1xuXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDgxMClcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLnpJbmRleCkudG8uZXF1YWwgJzInXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS53aWR0aCkudG8uZXF1YWwgJzMwMHB4J1xuXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDc5MSlcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLnpJbmRleCkudG8uZXF1YWwgJzMnXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS53aWR0aCkudG8uZXF1YWwgJzI4MHB4J1xuXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDcwMSwgOTAwKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuekluZGV4KS50by5lcXVhbCAnMydcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLndpZHRoKS50by5lcXVhbCAnMjgwcHgnXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsICczMDBweCdcblxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSg3MDAsIDkwMClcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLnpJbmRleCkudG8uZXF1YWwgJzQnXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS53aWR0aCkudG8uZXF1YWwgJzI1MHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCAnMjUwcHgnXG5cblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoNzAwLCAxMDAxKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuekluZGV4KS50by5lcXVhbCAnMydcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLndpZHRoKS50by5lcXVhbCAnMjgwcHgnXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsICczMDBweCdcblxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSg3MDAsIDEwMDApXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS56SW5kZXgpLnRvLmVxdWFsICc0J1xuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUud2lkdGgpLnRvLmVxdWFsICcyNTBweCdcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmhlaWdodCkudG8uZXF1YWwgJzI1MHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFdlaWdodCkudG8uZXF1YWwgJzcwMCdcblx0XHRcdFxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSgxMTAwLCAxMDAwKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFdlaWdodCkudG8uZXF1YWwgJzYwMCdcblx0XHRcdFxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSgxMTAwLCAxMTAxKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFdlaWdodCkudG8uZXF1YWwgJzcwMCdcblxuXG5cdFx0dGVzdCBcIlNlbGYgZGltZW5zaW9ucy9zdHlsZXNcIiwgKCktPlxuXHRcdFx0cGFyZW50ID0gRG9tLmRpdigpLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRzaW11bGF0ZVBhcmVudCA9ICh3aWR0aCwgaGVpZ2h0KS0+XG5cdFx0XHRcdHBhcmVudC5zdHlsZSAnd2lkdGgnLCB3aWR0aCBpZiB3aWR0aFxuXHRcdFx0XHRwYXJlbnQuc3R5bGUgJ2hlaWdodCcsIGhlaWdodCBpZiBoZWlnaHRcblx0XHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSgpXG5cdFx0XHRcblx0XHRcdGRpdiA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnXG5cdFx0XHRcdHpJbmRleDogMlxuXHRcdFx0XHR0b3A6ICczMHB4J1xuXHRcdFx0XHR3aWR0aDogJzEwMCUnXG5cdFx0XHRcdGhlaWdodDogJzEwMCUnXG5cdFx0XHRcdGZvbnRTaXplOiAnMzBweCdcblx0XHRcdFx0bGluZUhlaWdodDogJzMwcHgnXG5cblx0XHRcdFx0J0BzZWxmKG9yaWVudGF0aW9uOmxhbmRzY2FwZSknOlxuXHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDYwMFxuXG5cdFx0XHRcdCdAc2VsZihvcmllbnRhdGlvbjpwb3J0cmFpdCknOlxuXHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDcwMFxuXHRcdFx0XHRcblx0XHRcdFx0J0BzZWxmKHBvc2l0aW9uOnJlbGF0aXZlKSc6XG5cdFx0XHRcdFx0dG9wOiAnMjBweCdcblxuXHRcdFx0XHQnQHNlbGYobWF4LXdpZHRoOjM1MCknOlxuXHRcdFx0XHRcdHpJbmRleDogM1xuXHRcdFx0XHRcdGZvbnRTaXplOiAnMzNweCdcblx0XHRcdFx0XG5cdFx0XHRcdCdAc2VsZihtYXgtd2lkdGg6NTAwLCBtaW4taGVpZ2h0OjQwMCknOlxuXHRcdFx0XHRcdHpJbmRleDogNFxuXHRcdFx0XHRcdGZvbnRTaXplOiAnMjdweCdcblx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMzdweCdcblx0XHRcdFx0XG5cdFx0XHRcdCdAc2VsZih6SW5kZXg6NCknOlxuXHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICcxNXB4J1xuXHRcdFx0XHRcblx0XHRcdFx0J0BzZWxmKG1pbi16SW5kZXg6NiknOlxuXHRcdFx0XHRcdG9wYWNpdHk6ICcwJ1xuXHRcdFx0XHRcblx0XHRcdFx0J0BzZWxmKG1heC1mb250U2l6ZToyMCknOlxuXHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICcxOXB4J1xuXHRcdFx0XHRcblx0XHRcdFx0J0BzZWxmKG1pbi13aWR0aDo2MDBweCknOlxuXHRcdFx0XHRcdGZvbnRTaXplOiAnMTlweCdcblx0XHRcdFx0XG5cdFx0XHRcdCdAc2VsZihhc3BlY3QtcmF0aW86Mi4yNSknOlxuXHRcdFx0XHRcdGZvbnRTaXplOiAnMjFweCdcblx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMTJweCdcblx0XHRcdFx0XG5cdFx0XHRcdCdAc2VsZihtaW4taGVpZ2h0OjcwMCknOlxuXHRcdFx0XHRcdGZvbnRTaXplOiAnNDBweCdcblxuXHRcdFx0c2ltdWxhdGVQYXJlbnQoNDAwLCAzMDApXG5cdFx0XHRkaXYuYXBwZW5kVG8ocGFyZW50KVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnekluZGV4JykudG8uZXF1YWwgJzInXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd3aWR0aCcpLnRvLmVxdWFsICc0MDBweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2hlaWdodCcpLnRvLmVxdWFsICczMDBweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwgJzMwcHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdsaW5lSGVpZ2h0JykudG8uZXF1YWwgJzMwcHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250V2VpZ2h0JykudG8uZXF1YWwgJzYwMCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3RvcCcpLnRvLmVxdWFsICcyMHB4J1xuXHRcdFx0XG5cdFx0XHRzaW11bGF0ZVBhcmVudCgzNDksIDQyMClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3pJbmRleCcpLnRvLmVxdWFsICc0J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCAnMjdweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2xpbmVIZWlnaHQnKS50by5lcXVhbCAnMTVweCdcblx0XHRcdFxuXHRcdFx0c2ltdWxhdGVQYXJlbnQoMzQ5LCAzOTkpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd6SW5kZXgnKS50by5lcXVhbCAnMydcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwgJzMzcHgnXG5cdFx0XHRcblx0XHRcdHNpbXVsYXRlUGFyZW50KDM0OSwgNDAxKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnekluZGV4JykudG8uZXF1YWwgJzQnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsICcyN3B4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnbGluZUhlaWdodCcpLnRvLmVxdWFsICcxNXB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnb3BhY2l0eScpLnRvLmVxdWFsICcxJ1xuXHRcdFx0XG5cdFx0XHRkaXYuc3R5bGUoJ3pJbmRleCcsIDUpXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ29wYWNpdHknKS50by5lcXVhbCAnMSdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2xpbmVIZWlnaHQnKS50by5lcXVhbCAnMzdweCdcblx0XHRcdFxuXHRcdFx0ZGl2LnN0eWxlKCd6SW5kZXgnLCAxNylcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ29wYWNpdHknKS50by5lcXVhbCAnMSdcblx0XHRcdFxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSgpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdvcGFjaXR5JykudG8uZXF1YWwgJzAnXG5cblx0XHRcdHNpbXVsYXRlUGFyZW50KDkwMClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwgJzE5cHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdsaW5lSGVpZ2h0JykudG8uZXF1YWwgJzMwcHgnXG5cdFx0XHRcblx0XHRcdHNpbXVsYXRlUGFyZW50KDkwMClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2xpbmVIZWlnaHQnKS50by5lcXVhbCAnMTlweCdcblx0XHRcdFxuXHRcdFx0c2ltdWxhdGVQYXJlbnQoOTAwLCA0MDApXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsICcyMXB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnbGluZUhlaWdodCcpLnRvLmVxdWFsICcxMnB4J1xuXHRcdFx0XG5cdFx0XHRzaW11bGF0ZVBhcmVudCgyMDI1LCA5MDApXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250U2l6ZScpLnRvLmVxdWFsICc0MHB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnbGluZUhlaWdodCcpLnRvLmVxdWFsICcxMnB4J1xuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFdlaWdodCkudG8uZXF1YWwgJzYwMCdcblx0XHRcdFxuXHRcdFx0c2ltdWxhdGVQYXJlbnQoMjAyNSwgMjAyNilcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmZvbnRXZWlnaHQpLnRvLmVxdWFsICc3MDAnXG5cblxuXHRcdHRlc3QgXCJQYXJlbnQgZGltZW5zaW9ucy9zdHlsZXNcIiwgKCktPlxuXHRcdFx0cGFyZW50ID0gRG9tLmRpdihzdHlsZTp7cG9zaXRpb246J2Fic29sdXRlJ30pLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRzaW11bGF0ZVBhcmVudCA9ICh3aWR0aCwgaGVpZ2h0KS0+XG5cdFx0XHRcdHBhcmVudC5zdHlsZSAnd2lkdGgnLCB3aWR0aCBpZiB3aWR0aFxuXHRcdFx0XHRwYXJlbnQuc3R5bGUgJ2hlaWdodCcsIGhlaWdodCBpZiBoZWlnaHRcblx0XHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSgpXG5cdFx0XHRcblx0XHRcdGRpdiA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnXG5cdFx0XHRcdHpJbmRleDogMlxuXHRcdFx0XHR0b3A6ICczMHB4J1xuXHRcdFx0XHR3aWR0aDogJzQwMHB4J1xuXHRcdFx0XHRoZWlnaHQ6ICczMDBweCdcblx0XHRcdFx0Zm9udFNpemU6ICczMHB4J1xuXHRcdFx0XHRsaW5lSGVpZ2h0OiAnMzBweCdcblxuXHRcdFx0XHQnQHBhcmVudChvcmllbnRhdGlvbjpsYW5kc2NhcGUpJzpcblx0XHRcdFx0XHRmb250V2VpZ2h0OiA2MDBcblxuXHRcdFx0XHQnQHBhcmVudChvcmllbnRhdGlvbjpwb3J0cmFpdCknOlxuXHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDcwMFxuXHRcdFx0XHRcblx0XHRcdFx0J0BwYXJlbnQocG9zaXRpb246cmVsYXRpdmUpJzpcblx0XHRcdFx0XHR0b3A6ICcyMHB4J1xuXG5cdFx0XHRcdCdAcGFyZW50KG1heC13aWR0aDozNTApJzpcblx0XHRcdFx0XHR6SW5kZXg6IDNcblx0XHRcdFx0XHRmb250U2l6ZTogJzMzcHgnXG5cdFx0XHRcdFxuXHRcdFx0XHQnQHBhcmVudChtYXgtd2lkdGg6NTAwLCBtaW4taGVpZ2h0OjQwMCknOlxuXHRcdFx0XHRcdHpJbmRleDogNFxuXHRcdFx0XHRcdGZvbnRTaXplOiAnMjdweCdcblx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMzdweCdcblx0XHRcdFx0XG5cdFx0XHRcdCdAcGFyZW50KHpJbmRleDo3KSc6XG5cdFx0XHRcdFx0bGluZUhlaWdodDogJzE1cHgnXG5cblxuXHRcdFx0c2ltdWxhdGVQYXJlbnQoNDAwLCAzMDApXG5cdFx0XHRkaXYuYXBwZW5kVG8ocGFyZW50KVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnekluZGV4JykudG8uZXF1YWwgJzInXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd3aWR0aCcpLnRvLmVxdWFsICc0MDBweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2hlaWdodCcpLnRvLmVxdWFsICczMDBweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwgJzMwcHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdsaW5lSGVpZ2h0JykudG8uZXF1YWwgJzMwcHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250V2VpZ2h0JykudG8uZXF1YWwgJzYwMCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3RvcCcpLnRvLmVxdWFsICczMHB4J1xuXG5cdFx0XHRwYXJlbnQuc3R5bGUgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJ1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAndG9wJykudG8uZXF1YWwgJzMwcHgnXG5cblx0XHRcdHNpbXVsYXRlUGFyZW50KClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3RvcCcpLnRvLmVxdWFsICcyMHB4J1xuXG5cdFx0XHRzaW11bGF0ZVBhcmVudCgzNDksIDQyMClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3pJbmRleCcpLnRvLmVxdWFsICc0J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCAnMjdweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2xpbmVIZWlnaHQnKS50by5lcXVhbCAnMzdweCdcblx0XHRcdFxuXHRcdFx0c2ltdWxhdGVQYXJlbnQoMzQ5LCAzOTkpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd6SW5kZXgnKS50by5lcXVhbCAnMydcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwgJzMzcHgnXG5cdFx0XHRcblx0XHRcdHBhcmVudC5zdHlsZSAnekluZGV4JywgJzcnXG5cdFx0XHRzaW11bGF0ZVBhcmVudCgzNDksIDQwMSlcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3pJbmRleCcpLnRvLmVxdWFsICc0J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCAnMjdweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2xpbmVIZWlnaHQnKS50by5lcXVhbCAnMTVweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ29wYWNpdHknKS50by5lcXVhbCAnMSdcblxuXG5cdFx0dGVzdCBcIlBhcmVudCBSZWYgZGltZW5zaW9ucy9zdHlsZXNcIiwgKCktPlxuXHRcdFx0cGFyZW50ID1cblx0XHRcdFx0RG9tLmRpdih7cmVmOidhYmMnfSxcblx0XHRcdFx0XHREb20uZGl2IHtpZDonZGVmJ30sXG5cdFx0XHRcdFx0XHREb20uZGl2IHtyZWY6J2doaSd9XG5cdFx0XHRcdCkuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdFxuXHRcdFx0ZGl2ID0gRG9tLmRpdiBzdHlsZTpcblx0XHRcdFx0cG9zaXRpb246ICdyZWxhdGl2ZSdcblx0XHRcdFx0ekluZGV4OiAyXG5cdFx0XHRcdHRvcDogJzMwcHgnXG5cdFx0XHRcdHdpZHRoOiAnNDAwcHgnXG5cdFx0XHRcdGhlaWdodDogJzMwMHB4J1xuXHRcdFx0XHRmb250U2l6ZTogJzMwcHgnXG5cdFx0XHRcdGxpbmVIZWlnaHQ6ICczMHB4J1xuXG5cdFx0XHRcdCdAI2FiYyhvcmllbnRhdGlvbjpsYW5kc2NhcGUpJzpcblx0XHRcdFx0XHRmb250V2VpZ2h0OiA2MDBcblxuXHRcdFx0XHQnQCNhYmMob3JpZW50YXRpb246cG9ydHJhaXQpJzpcblx0XHRcdFx0XHRmb250V2VpZ2h0OiA1MDBcblx0XHRcdFx0XG5cdFx0XHRcdCdAI2RlZihwb3NpdGlvbjpyZWxhdGl2ZSknOlxuXHRcdFx0XHRcdHRvcDogJzIwcHgnXG5cblx0XHRcdFx0J0AjZGVmKG1heC13aWR0aDozNTApJzpcblx0XHRcdFx0XHR6SW5kZXg6IDNcblx0XHRcdFx0XHRmb250U2l6ZTogJzMzcHgnXG5cdFx0XHRcdFxuXHRcdFx0XHQnQCNnaGkobWF4LXdpZHRoOjUwMCwgbWluLWhlaWdodDo0MDApJzpcblx0XHRcdFx0XHR6SW5kZXg6IDRcblx0XHRcdFx0XHRmb250U2l6ZTogJzI3cHgnXG5cdFx0XHRcdFx0bGluZUhlaWdodDogJzM3cHgnXG5cdFx0XHRcdFxuXHRcdFx0XHQnQCNhYmMoekluZGV4OjcpJzpcblx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMTVweCdcblxuXG5cdFx0XHRwYXJlbnQuc3R5bGUod2lkdGg6NDAwLCBoZWlnaHQ6MzAwKVxuXHRcdFx0cGFyZW50LmNoaWxkLmRlZi5zdHlsZSh3aWR0aDo0MDAsIGhlaWdodDozMDApXG5cdFx0XHRwYXJlbnQuY2hpbGQuZ2hpLnN0eWxlKHdpZHRoOjQwMCwgaGVpZ2h0OjMwMClcblx0XHRcdGRpdi5hcHBlbmRUbyhwYXJlbnQuY2hpbGQuZ2hpKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnekluZGV4JykudG8uZXF1YWwgJzInXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd3aWR0aCcpLnRvLmVxdWFsICc0MDBweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2hlaWdodCcpLnRvLmVxdWFsICczMDBweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwgJzMwcHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdsaW5lSGVpZ2h0JykudG8uZXF1YWwgJzMwcHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250V2VpZ2h0JykudG8uZXF1YWwgJzYwMCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3RvcCcpLnRvLmVxdWFsICczMHB4J1xuXG5cdFx0XHRwYXJlbnQuc3R5bGUod2lkdGg6NDAwLCBoZWlnaHQ6OTAwLCBwb3NpdGlvbjoncmVsYXRpdmUnKVxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSgpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdmb250V2VpZ2h0JykudG8uZXF1YWwgJzUwMCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3RvcCcpLnRvLmVxdWFsICczMHB4J1xuXHRcdFx0XG5cdFx0XHRwYXJlbnQuY2hpbGQuZGVmLnN0eWxlKHBvc2l0aW9uOidyZWxhdGl2ZScpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd0b3AnKS50by5lcXVhbCAnMzBweCdcblxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSgpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd0b3AnKS50by5lcXVhbCAnMjBweCdcblxuXHRcdFx0cGFyZW50LmNoaWxkLmRlZi5zdHlsZSh3aWR0aDozNDksIGhlaWdodDo0MjApXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3pJbmRleCcpLnRvLmVxdWFsICczJ1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCAnMzNweCdcblx0XHRcdFxuXHRcdFx0cGFyZW50LmNoaWxkLmdoaS5zdHlsZSh3aWR0aDo0NTAsIGhlaWdodDo0MjApXG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKClcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ3pJbmRleCcpLnRvLmVxdWFsICc0J1xuXHRcdFx0ZXhwZWN0KGRpdi5zdHlsZSAnZm9udFNpemUnKS50by5lcXVhbCAnMjdweCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2xpbmVIZWlnaHQnKS50by5lcXVhbCAnMzdweCdcblx0XHRcdFxuXHRcdFx0cGFyZW50LnN0eWxlKHpJbmRleDo3KVxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSgpXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICd6SW5kZXgnKS50by5lcXVhbCAnNCdcblx0XHRcdGV4cGVjdChkaXYuc3R5bGUgJ2ZvbnRTaXplJykudG8uZXF1YWwgJzI3cHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdsaW5lSGVpZ2h0JykudG8uZXF1YWwgJzE1cHgnXG5cdFx0XHRleHBlY3QoZGl2LnN0eWxlICdvcGFjaXR5JykudG8uZXF1YWwgJzEnXG5cblxuXHRcdHRlc3QgXCJOZXN0ZWQgbWVkaWEgcXVlcmllc1wiLCAoKS0+XG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDEwMDAsIDkwMClcblx0XHRcdGRpdiA9IERvbS5kaXYgc3R5bGU6XG5cdFx0XHRcdHpJbmRleDogMlxuXG5cdFx0XHRcdCRoYXBweTpcblx0XHRcdFx0XHRmb250V2VpZ2h0OiA1MDBcblx0XHRcdFx0XHQnQHdpbmRvdyhvcmllbnRhdGlvbjpsYW5kc2NhcGUpJzpcblx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDYwMFxuXG5cdFx0XHRcdCdAd2luZG93KG9yaWVudGF0aW9uOnBvcnRyYWl0KSc6XG5cdFx0XHRcdFx0JHJlbGF4ZWQ6XG5cdFx0XHRcdFx0XHRmb250V2VpZ2h0OiA3MDBcblxuXG5cdFx0XHRkaXYuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdFxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFdlaWdodCkudG8uZXF1YWwgJydcblx0XHRcdFxuXHRcdFx0ZGl2LnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5mb250V2VpZ2h0KS50by5lcXVhbCAnNjAwJ1xuXHRcdFx0XG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDkwMCwgMTAwMClcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmZvbnRXZWlnaHQpLnRvLmVxdWFsICc1MDAnXG5cdFx0XHRcblx0XHRcdGRpbWVuc2lvbnMuc2ltdWxhdGUoMTAwMCwgOTAwKVxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFdlaWdodCkudG8uZXF1YWwgJzYwMCdcblxuXG5cdFx0XHRkaXYuc3RhdGUgJ3JlbGF4ZWQnLCBvblxuXHRcdFx0ZXhwZWN0KGRpdi5yYXcuc3R5bGUuZm9udFdlaWdodCkudG8uZXF1YWwgJzYwMCdcblx0XHRcdFxuXHRcdFx0ZGltZW5zaW9ucy5zaW11bGF0ZSg5MDAsIDEwMDApXG5cdFx0XHRleHBlY3QoZGl2LnJhdy5zdHlsZS5mb250V2VpZ2h0KS50by5lcXVhbCAnNzAwJ1xuXHRcdFx0XG5cdFx0XHRkaW1lbnNpb25zLnNpbXVsYXRlKDEwMDAsIDkwMClcblx0XHRcdGV4cGVjdChkaXYucmF3LnN0eWxlLmZvbnRXZWlnaHQpLnRvLmVxdWFsICc2MDAnXG5cblxuXG5cblxuXG5cdHN1aXRlIFwiVHJhdmVyc2FsXCIsICgpLT5cblx0XHR0ZXN0IFwiQ2hpbGRyZW5cIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdihudWxsLCBEb20uZGl2KCksICdTb21lIFRleHQnKVxuXG5cdFx0XHRleHBlY3QoZGl2LmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChkaXYuZWwuY2hpbGROb2Rlcy5sZW5ndGgpLnRvLmVxdWFsKDIpXG5cblx0XHRcdGRpdi5hcHBlbmQoRG9tLnNwYW4oKSlcblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgzKVxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5jaGlsZE5vZGVzLmxlbmd0aCkudG8uZXF1YWwoMylcblx0XHRcdFxuXHRcdFx0ZGl2LmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuXHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDQpXG5cdFx0XHRleHBlY3QoZGl2LmVsLmNoaWxkTm9kZXMubGVuZ3RoKS50by5lcXVhbCg0KVxuXG5cdFx0XHRpZiB0eXBlb2Ygd2luZG93LkNvbW1lbnQgaXMgJ2Z1bmN0aW9uJ1xuXHRcdFx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdFx0XHRzcGFuQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuXHRcdFx0XHRzcGFuQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuXHRcdFx0XHR0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3NvbWVUZXh0Tm9kZScpXG5cdFx0XHRcdGNvbW1lbnQgPSBuZXcgQ29tbWVudCgnc29tZUNvbW1lbnROb2RlJylcblx0XHRcdFx0XG5cdFx0XHRcdGRpdi5hcHBlbmRDaGlsZChzcGFuQSlcblx0XHRcdFx0ZGl2LmFwcGVuZENoaWxkKGNvbW1lbnQpXG5cdFx0XHRcdGRpdi5hcHBlbmRDaGlsZChzcGFuQilcblx0XHRcdFx0ZGl2LmFwcGVuZENoaWxkKHRleHQpXG5cdFx0XHRcdGV4cGVjdChkaXYuY2hpbGROb2Rlcy5sZW5ndGgpLnRvLmVxdWFsKDQpXG5cdFx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgyKVxuXG5cdFx0XHRcdGRpdiQgPSBEb20oZGl2KVxuXHRcdFx0XHRleHBlY3QoZGl2JC5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDMpXG5cdFx0XHRcdGV4cGVjdChkaXYkLmNoaWxkcmVuWzBdLnJhdykudG8uZXF1YWwoc3BhbkEpXG5cdFx0XHRcdGV4cGVjdChkaXYkLmNoaWxkcmVuWzFdLnJhdykudG8uZXF1YWwoc3BhbkIpXG5cdFx0XHRcdGV4cGVjdChkaXYkLmNoaWxkcmVuWzJdLnJhdykudG8uZXF1YWwodGV4dClcblxuXG5cdFx0dGVzdCBcIlBhcmVudFwiLCAoKS0+XG5cdFx0XHRBID0gRG9tLmRpdihudWxsLCBEb20uZGl2KCksICdTb21lIFRleHQnKVxuXHRcdFx0QiA9IERvbS5kaXYoKVxuXHRcdFx0QyA9IERvbS5kaXYoKVxuXG5cdFx0XHRleHBlY3QoQS5wYXJlbnQpLnRvLmVxdWFsIHVuZGVmaW5lZFxuXHRcdFx0ZXhwZWN0KEEuY2hpbGRyZW5bMF0ucGFyZW50KS50by5lcXVhbCBBXG5cdFx0XHRleHBlY3QoQS5jaGlsZHJlblswXS5lbC5wYXJlbnROb2RlKS50by5lcXVhbCBBLmVsXG5cblx0XHRcdEIuYXBwZW5kKEEpXG5cdFx0XHRleHBlY3QoQS5wYXJlbnQpLnRvLmVxdWFsIEJcblx0XHRcdGV4cGVjdChBLmNoaWxkcmVuWzBdLnBhcmVudCkudG8uZXF1YWwgQVxuXHRcdFx0ZXhwZWN0KEEuY2hpbGRyZW5bMF0uZWwucGFyZW50Tm9kZSkudG8uZXF1YWwgQS5lbFxuXHRcdFx0ZXhwZWN0KEIuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KEIuY2hpbGRyZW5bMF0pLnRvLmVxdWFsKEEpXG5cblx0XHRcdEMuYXBwZW5kKEEpXG5cdFx0XHRleHBlY3QoQS5wYXJlbnQpLnRvLmVxdWFsIENcblx0XHRcdGV4cGVjdChBLmNoaWxkcmVuWzBdLnBhcmVudCkudG8uZXF1YWwgQVxuXHRcdFx0ZXhwZWN0KEEuY2hpbGRyZW5bMF0uZWwucGFyZW50Tm9kZSkudG8uZXF1YWwgQS5lbFxuXHRcdFx0ZXhwZWN0KEIuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgwKVxuXHRcdFx0ZXhwZWN0KEMuY2hpbGRyZW5bMF0pLnRvLmVxdWFsKEEpXG5cblxuXHRcdHRlc3QgXCJQYXJlbnRzXCIsICgpLT5cblx0XHRcdEEgPSBEb20uZGl2KCkuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdEIgPSBEb20uZGl2KCkuYXBwZW5kVG8oQSlcblx0XHRcdEMgPSBEb20uZGl2KCkuYXBwZW5kVG8oQilcblxuXHRcdFx0ZXhwZWN0KEEucGFyZW50LmVsKS50by5lcXVhbChzYW5kYm94KVxuXHRcdFx0ZXhwZWN0KEIucGFyZW50KS50by5lcXVhbChBKVxuXHRcdFx0ZXhwZWN0KEMucGFyZW50KS50by5lcXVhbChCKVxuXG5cdFx0XHRleHBlY3QoQS5wYXJlbnRzLmxlbmd0aCkudG8uZXF1YWwoQi5wYXJlbnRzLmxlbmd0aC0xKVxuXHRcdFx0ZXhwZWN0KEIucGFyZW50cy5sZW5ndGgpLnRvLmVxdWFsKEMucGFyZW50cy5sZW5ndGgtMSlcblx0XHRcdGV4cGVjdChCLnBhcmVudHNbMF0pLnRvLmVxdWFsKEEpXG5cdFx0XHRleHBlY3QoQy5wYXJlbnRzWzBdKS50by5lcXVhbChCKVxuXHRcdFx0ZXhwZWN0KEMucGFyZW50cy5sZW5ndGgpLnRvLmVxdWFsKDUpXG5cdFx0XHRleHBlY3QoQy5wYXJlbnRzLnNsaWNlKC0xKVswXS5lbCkudG8uZXF1YWwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KVxuXG5cblx0XHR0ZXN0IFwiUGFyZW50cyBVbnRpbFwiLCAoKS0+XG5cdFx0XHRBID0gRG9tLnNlY3Rpb24oKVxuXHRcdFx0QiA9IERvbS5kaXYoKS5hcHBlbmRUbyhBKVxuXHRcdFx0QyA9IERvbS5kaXYoKS5hcHBlbmRUbyhCKVxuXHRcdFx0RCA9IERvbS5zcGFuKCkuYXBwZW5kVG8oQylcblxuXHRcdFx0ZXhwZWN0KEQucGFyZW50cykudG8uZXFsIFtDLEIsQV1cblx0XHRcdGV4cGVjdChELnBhcmVudHNVbnRpbChudWxsKSkudG8uZXFsIFtDLEIsQV1cblx0XHRcdGV4cGVjdChELnBhcmVudHNVbnRpbCgpKS50by5lcWwgW0MsQixBXVxuXHRcdFx0ZXhwZWN0KEQucGFyZW50c1VudGlsKCdzb21lU3RyaW5nJykpLnRvLmVxbCBbQyxCLEFdXG5cdFx0XHRleHBlY3QoRC5wYXJlbnRzVW50aWwgKGVsKS0+IGVsIGlzIEEpLnRvLmVxbCBbQyxCXVxuXHRcdFx0ZXhwZWN0KEQucGFyZW50c1VudGlsIChlbCktPiBlbCBpcyBCKS50by5lcWwgW0NdXG5cdFx0XHRleHBlY3QoRC5wYXJlbnRzVW50aWwgKGVsKS0+IGZhbHNlKS50by5lcWwgW0MsQixBXVxuXG5cblx0XHR0ZXN0IFwiUGFyZW50IE1hdGNoaW5nXCIsICgpLT5cblx0XHRcdEEgPSBEb20uc2VjdGlvbigpXG5cdFx0XHRCID0gRG9tLmRpdigpLmFwcGVuZFRvKEEpXG5cdFx0XHRDID0gRG9tLmRpdigpLmFwcGVuZFRvKEIpXG5cdFx0XHREID0gRG9tLnNwYW4oKS5hcHBlbmRUbyhDKVxuXG5cdFx0XHRleHBlY3QoRC5wYXJlbnRzKS50by5lcWwgW0MsQixBXVxuXHRcdFx0ZXhwZWN0KEQucGFyZW50TWF0Y2hpbmcobnVsbCkpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChELnBhcmVudE1hdGNoaW5nKEIpKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoRC5wYXJlbnRNYXRjaGluZygnc3RyaW5nJykpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChELnBhcmVudE1hdGNoaW5nICgpLT4gZmFsc2UpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChELnBhcmVudE1hdGNoaW5nIChlbCktPiBlbCBpcyBCKS50by5lcXVhbChCKVxuXHRcdFx0ZXhwZWN0KEQucGFyZW50TWF0Y2hpbmcgKGVsKS0+IGVsIGlzIEEpLnRvLmVxdWFsKEEpXG5cdFx0XHRleHBlY3QoRC5wYXJlbnRNYXRjaGluZyAoZWwpLT4gZWwgaXMgQykudG8uZXF1YWwoQylcblxuXHRcdFx0QS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0ZXhwZWN0KEQucGFyZW50TWF0Y2hpbmcgKGVsKS0+IGVsLnJhdyBpcyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLnRvLmVxdWFsKERvbShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpKVxuXG5cblx0XHR0ZXN0IFwiTmV4dFwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KG51bGwsIEE9RG9tLmRpdigpLCBCPURvbS5kaXYoKSwgQz1Eb20uZGl2KCksIEQ9RG9tLmRpdigpLCBFPURvbS5kaXYoKSlcblxuXHRcdFx0ZXhwZWN0KEEubmV4dCkudG8uZXF1YWwoQilcblx0XHRcdGV4cGVjdChDLm5leHQpLnRvLmVxdWFsKEQpXG5cdFx0XHRleHBlY3QoRS5uZXh0KS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoQi5uZXh0QWxsKS50by5lcWwoW0MsRCxFXSlcblxuXG5cdFx0dGVzdCBcIlByZXZcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdihudWxsLCBBPURvbS5kaXYoKSwgQj1Eb20uZGl2KCksIEM9RG9tLmRpdigpLCBEPURvbS5kaXYoKSwgRT1Eb20uZGl2KCkpXG5cblx0XHRcdGV4cGVjdChFLnByZXYpLnRvLmVxdWFsKEQpXG5cdFx0XHRleHBlY3QoQy5wcmV2KS50by5lcXVhbChCKVxuXHRcdFx0ZXhwZWN0KEEucHJldikudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KEQucHJldkFsbCkudG8uZXFsKFtDLEIsQV0pXG5cblxuXHRcdHRlc3QgXCJTaWJsaW5nc1wiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KG51bGwsIEE9RG9tLmRpdigpLCBCPURvbS5kaXYoKSwgQz1Eb20uZGl2KCksIEQ9RG9tLmRpdigpLCBFPURvbS5kaXYoKSlcblxuXHRcdFx0ZXhwZWN0KEMuc2libGluZ3MpLnRvLmVxbChDLnByZXZBbGwucmV2ZXJzZSgpLmNvbmNhdChDLm5leHRBbGwpKVxuXHRcdFx0ZXhwZWN0KEMuc2libGluZ3MpLnRvLmVxbChbQSxCLEQsRV0pXG5cblxuXHRcdHRlc3QgXCJDaGlsZCAoYnkgcmVmKVwiLCAoKS0+XG5cdFx0XHRkaXZBID0gXG5cdFx0XHRcdERvbS5kaXYge2lkOidkaXZBJ30sXG5cdFx0XHRcdFx0RG9tLmRpdiB7aWQ6J2NoaWxkQSd9LFxuXHRcdFx0XHRcdFx0RG9tLnNwYW4ge3JlZjonY2hpbGRBXzEnfVxuXHRcdFx0XHRcdFx0RG9tLmRpdiB7cmVmOidjaGlsZEFfMicsIGlkOidjaGlsZEFfMid9XG5cdFx0XHRcdFx0RG9tLmRpdiB7fSxcblx0XHRcdFx0XHRcdERvbS5zcGFuIHtyZWY6J2NoaWxkQl8xJ31cblx0XHRcdFx0XHRcdERvbS50ZXh0IHtpZDonY2hpbGRCXzInfSwgJ1RoZSBUZXh0J1xuXG5cblx0XHRcdGRpdkIgPSBcblx0XHRcdFx0RG9tLnRlbXBsYXRlKFsnZGl2Jywge2lkOidkaXZCJ30sXG5cdFx0XHRcdFx0WydkaXYnLCB7aWQ6J2NoaWxkQScsIHN0eWxlOntjb2xvcjoncGluayd9fSxcblx0XHRcdFx0XHRcdFsnc3BhbicsIHtyZWY6J2NoaWxkQV8xJ31dXG5cdFx0XHRcdFx0XHRbJ2RpdicsIHtyZWY6J2NoaWxkQV8zJywgaWQ6J2NoaWxkQV8yJ31dXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFsnZGl2JywgbnVsbCwgXG5cdFx0XHRcdFx0XHRbJ3NwYW4nLCB7cmVmOidjaGlsZEJfMSd9XVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0XSkuc3Bhd24oKVxuXG5cdFx0XHRcblx0XHRcdGV4cGVjdChkaXZBLmNoaWxkLmNoaWxkQSkudG8uZXF1YWwoZGl2QS5jaGlsZHJlblswXSlcblx0XHRcdGV4cGVjdChkaXZBLmNoaWxkLmNoaWxkQV8xKS50by5lcXVhbChkaXZBLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdKVxuXHRcdFx0ZXhwZWN0KGRpdkEuY2hpbGQuY2hpbGRBXzIpLnRvLmVxdWFsKGRpdkEuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0pXG5cdFx0XHRleHBlY3QoZGl2QS5jaGlsZC5jaGlsZEFfMykudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KGRpdkEuY2hpbGQuY2hpbGRCKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoZGl2QS5jaGlsZC5jaGlsZEJfMSkudG8uZXF1YWwoZGl2QS5jaGlsZHJlblsxXS5jaGlsZHJlblswXSlcblx0XHRcdGV4cGVjdChkaXZBLmNoaWxkLmNoaWxkQl8yKS50by5lcXVhbChkaXZBLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdKVxuXHRcdFx0ZXhwZWN0KGRpdkEuY2hpbGQuY2hpbGRCXzIudHlwZSkudG8uZXF1YWwoJ3RleHQnKVxuXG5cdFx0XHRcblx0XHRcdGV4cGVjdChkaXZCLmNoaWxkLmNoaWxkQSkudG8uZXF1YWwoZGl2Qi5jaGlsZHJlblswXSlcblx0XHRcdGV4cGVjdChkaXZCLmNoaWxkLmNoaWxkQV8xKS50by5lcXVhbChkaXZCLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdKVxuXHRcdFx0ZXhwZWN0KGRpdkIuY2hpbGQuY2hpbGRBXzIpLnRvLmVxdWFsKGRpdkIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0pXG5cdFx0XHRleHBlY3QoZGl2Qi5jaGlsZC5jaGlsZEFfMykudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KGRpdkIuY2hpbGQuY2hpbGRCKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoZGl2Qi5jaGlsZC5jaGlsZEJfMSkudG8uZXF1YWwoZGl2Qi5jaGlsZHJlblsxXS5jaGlsZHJlblswXSlcblx0XHRcdGV4cGVjdChkaXZCLmNoaWxkLmNoaWxkQl8yKS50by5lcXVhbChkaXZCLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdKVxuXHRcdFx0ZXhwZWN0KGRpdkIuY2hpbGQuY2hpbGRBLnN0eWxlKCdjb2xvcicpKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZCLmNoaWxkLmNoaWxkQS5zdHlsZVNhZmUoJ2NvbG9yJykpLm5vdC50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChkaXZCLmNoaWxkLmNoaWxkQS5zdHlsZVNhZmUoJ2NvbG9yJykubGVuZ3RoID49IDQpLnRvLmJlLnRydWVcblxuXG5cdFx0XHRleHBlY3QoZGl2QS5jaGlsZC5jaGlsZEEucmF3LmdldEF0dHJpYnV0ZSgnaWQnKSkudG8uZXF1YWwoJ2NoaWxkQScpXG5cdFx0XHRleHBlY3QoZGl2QS5jaGlsZC5jaGlsZEEucmF3LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWYnKSkudG8uZXF1YWwoJ2NoaWxkQScpXG5cdFx0XHRleHBlY3QoZGl2QS5jaGlsZC5jaGlsZEFfMS5yYXcuZ2V0QXR0cmlidXRlKCdpZCcpKS50by5lcXVhbChudWxsKVxuXHRcdFx0ZXhwZWN0KGRpdkEuY2hpbGQuY2hpbGRBXzEucmF3LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWYnKSkudG8uZXF1YWwoJ2NoaWxkQV8xJylcblx0XHRcdGV4cGVjdChkaXZBLmNoaWxkLmNoaWxkQV8yLnJhdy5nZXRBdHRyaWJ1dGUoJ2lkJykpLnRvLmVxdWFsKCdjaGlsZEFfMicpXG5cdFx0XHRleHBlY3QoZGl2QS5jaGlsZC5jaGlsZEFfMi5yYXcuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZicpKS50by5lcXVhbCgnY2hpbGRBXzInKVxuXG5cdFx0XHRzYW5kQm94ID0gRG9tKHNhbmRib3gpXG5cdFx0XHRleHBlY3Qoc2FuZEJveC5jaGlsZC5jaGlsZEEpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChzYW5kQm94LmNoaWxkLmNoaWxkQl8yKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3Qoc2FuZEJveC5jaGlsZC5kaXZBKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRcblx0XHRcdHNhbmRCb3guYXBwZW5kKGRpdkEpXG5cdFx0XHRleHBlY3Qoc2FuZEJveC5jaGlsZC5jaGlsZEEpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdGV4cGVjdChzYW5kQm94LmNoaWxkLmNoaWxkQl8yKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3Qoc2FuZEJveC5jaGlsZC5kaXZBKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3Qoc2FuZEJveC5jaGlsZGYuZGl2QSkudG8uZXF1YWwoZGl2QSlcblx0XHRcdGV4cGVjdChzYW5kQm94LmNoaWxkLmNoaWxkQSkudG8uZXF1YWwoZGl2QS5jaGlsZHJlblswXSlcblx0XHRcdGV4cGVjdChzYW5kQm94LmNoaWxkLmNoaWxkQl8yKS50by5lcXVhbChkaXZBLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdKVxuXHRcdFx0ZXhwZWN0KHNhbmRCb3guY2hpbGQuZGl2QSkudG8uZXF1YWwoZGl2QSlcblxuXHRcdFx0bmV3Q2hpbGQgPSBEb20uZGl2KHJlZjonbmV3Q2hpbGQnKVxuXHRcdFx0bmV3Q2hpbGRDaGlsZCA9IERvbS5kaXYocmVmOiduZXdDaGlsZENoaWxkJylcblx0XHRcdGV4cGVjdChuZXdDaGlsZC5jaGlsZC5uZXdDaGlsZENoaWxkKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QobmV3Q2hpbGRDaGlsZC5jaGlsZC5uZXdDaGlsZENoaWxkKS50by5lcXVhbChuZXdDaGlsZENoaWxkKVxuXHRcdFx0ZXhwZWN0KE9iamVjdC5rZXlzKG5ld0NoaWxkQ2hpbGQuY2hpbGQpLmxlbmd0aCkudG8uZXF1YWwoMSlcblxuXHRcdFx0bmV3Q2hpbGRDaGlsZC5hcHBlbmRUbyhuZXdDaGlsZClcblx0XHRcdGV4cGVjdChuZXdDaGlsZC5jaGlsZC5uZXdDaGlsZENoaWxkKS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QobmV3Q2hpbGQuY2hpbGRmLm5ld0NoaWxkQ2hpbGQpLnRvLmVxdWFsKG5ld0NoaWxkQ2hpbGQpXG5cdFx0XHRleHBlY3QobmV3Q2hpbGQuY2hpbGQubmV3Q2hpbGRDaGlsZCkudG8uZXF1YWwobmV3Q2hpbGRDaGlsZClcblx0XHRcdGV4cGVjdChPYmplY3Qua2V5cyhuZXdDaGlsZENoaWxkLmNoaWxkKS5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cblx0XHRcdG5ld1BhcmVudCA9IERvbS5kaXYocmVmOiduZXdQYXJlbnQnKVxuXHRcdFx0bmV3Q2hpbGQuYXBwZW5kVG8obmV3UGFyZW50KVxuXHRcdFx0ZXhwZWN0KG5ld1BhcmVudC5jaGlsZC5uZXdDaGlsZENoaWxkKS50by5lcXVhbChuZXdDaGlsZENoaWxkKVxuXG5cblx0XHR0ZXN0IFwiSW5kZXhcIiwgKCktPlxuXHRcdFx0c2VjdGlvbiA9XG5cdFx0XHRcdERvbS5zZWN0aW9uKG51bGwsXG5cdFx0XHRcdFx0Y2hpbGRBID0gRG9tLmRpdigpXG5cdFx0XHRcdFx0Y2hpbGRCID0gRG9tLmRpdigpXG5cdFx0XHRcdFx0Y2hpbGRDID0gRG9tLnNwYW4oKVxuXHRcdFx0XHRcdGNoaWxkRCA9IERvbS50ZXh0KClcblx0XHRcdFx0XHRjaGlsZEUgPSBEb20uc3BhbigpXG5cdFx0XHRcdFx0Y2hpbGRGID0gRG9tLmRpdigpXG5cdFx0XHRcdClcblxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5pbmRleCkudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KGNoaWxkRC5pbmRleCkudG8uZXF1YWwgM1xuXHRcdFx0ZXhwZWN0KGNoaWxkRi5pbmRleCkudG8uZXF1YWwgNVxuXG5cdFx0XHRjaGlsZEMuZGV0YWNoKClcblx0XHRcdGV4cGVjdChjaGlsZEIuaW5kZXgpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjaGlsZEQuaW5kZXgpLnRvLmVxdWFsIDJcblx0XHRcdGV4cGVjdChjaGlsZEYuaW5kZXgpLnRvLmVxdWFsIDRcblx0XHRcdGV4cGVjdChjaGlsZEMuaW5kZXgpLnRvLmVxdWFsIG51bGxcblxuXG5cdFx0dGVzdCBcIkluZGV4IChieSB0eXBlKVwiLCAoKS0+XG5cdFx0XHRzZWN0aW9uID1cblx0XHRcdFx0RG9tLnNlY3Rpb24obnVsbCxcblx0XHRcdFx0XHRjaGlsZEEgPSBEb20uZGl2KClcblx0XHRcdFx0XHRjaGlsZEIgPSBEb20uZGl2KClcblx0XHRcdFx0XHRjaGlsZEMgPSBEb20uc3BhbigpXG5cdFx0XHRcdFx0Y2hpbGREID0gRG9tLnRleHQoKVxuXHRcdFx0XHRcdGNoaWxkRSA9IERvbS5zcGFuKClcblx0XHRcdFx0XHRjaGlsZEYgPSBEb20udGV4dCgpXG5cdFx0XHRcdFx0Y2hpbGRHID0gRG9tLmRpdigpXG5cdFx0XHRcdClcblxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5pbmRleFR5cGUpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjaGlsZEQuaW5kZXhUeXBlKS50by5lcXVhbCAwXG5cdFx0XHRleHBlY3QoY2hpbGRGLmluZGV4VHlwZSkudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KGNoaWxkRy5pbmRleFR5cGUpLnRvLmVxdWFsIDJcblxuXHRcdFx0Y2hpbGRDLmRldGFjaCgpXG5cdFx0XHRleHBlY3QoY2hpbGRCLmluZGV4VHlwZSkudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KGNoaWxkRC5pbmRleFR5cGUpLnRvLmVxdWFsIDBcblx0XHRcdGV4cGVjdChjaGlsZEYuaW5kZXhUeXBlKS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QoY2hpbGRHLmluZGV4VHlwZSkudG8uZXF1YWwgMlxuXG5cdFx0XHRjaGlsZEEuZGV0YWNoKClcblx0XHRcdGV4cGVjdChjaGlsZEIuaW5kZXhUeXBlKS50by5lcXVhbCAwXG5cdFx0XHRleHBlY3QoY2hpbGRELmluZGV4VHlwZSkudG8uZXF1YWwgMFxuXHRcdFx0ZXhwZWN0KGNoaWxkRi5pbmRleFR5cGUpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjaGlsZEcuaW5kZXhUeXBlKS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QoY2hpbGRBLmluZGV4VHlwZSkudG8uZXF1YWwgbnVsbFxuXHRcdFx0ZXhwZWN0KGNoaWxkQy5pbmRleFR5cGUpLnRvLmVxdWFsIG51bGxcblxuXG5cdFx0dGVzdCBcIkluZGV4IChieSByZWYpXCIsICgpLT5cblx0XHRcdHNlY3Rpb24gPVxuXHRcdFx0XHREb20uc2VjdGlvbihudWxsLFxuXHRcdFx0XHRcdGNoaWxkQSA9IERvbS5kaXYocmVmOidhYmMnKVxuXHRcdFx0XHRcdGNoaWxkQiA9IERvbS5kaXYocmVmOidhYmMnKVxuXHRcdFx0XHRcdGNoaWxkQyA9IERvbS5zcGFuKHJlZjonZGVmJylcblx0XHRcdFx0XHRjaGlsZEQgPSBEb20udGV4dChyZWY6J2FiYycpXG5cdFx0XHRcdFx0Y2hpbGRFID0gRG9tLnNwYW4ocmVmOidhYmMnKVxuXHRcdFx0XHRcdGNoaWxkRiA9IERvbS50ZXh0KHJlZjonZGVmJylcblx0XHRcdFx0XHRjaGlsZEcgPSBEb20uZGl2KHJlZjonYWJjJylcblx0XHRcdFx0KVxuXG5cdFx0XHRleHBlY3QoY2hpbGRCLmluZGV4UmVmKS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QoY2hpbGRELmluZGV4UmVmKS50by5lcXVhbCAyXG5cdFx0XHRleHBlY3QoY2hpbGRGLmluZGV4UmVmKS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QoY2hpbGRHLmluZGV4UmVmKS50by5lcXVhbCA0XG5cblx0XHRcdGNoaWxkQy5kZXRhY2goKVxuXHRcdFx0ZXhwZWN0KGNoaWxkQi5pbmRleFJlZikudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KGNoaWxkRC5pbmRleFJlZikudG8uZXF1YWwgMlxuXHRcdFx0ZXhwZWN0KGNoaWxkRi5pbmRleFJlZikudG8uZXF1YWwgMFxuXHRcdFx0ZXhwZWN0KGNoaWxkRy5pbmRleFJlZikudG8uZXF1YWwgNFxuXG5cdFx0XHRjaGlsZEEuZGV0YWNoKClcblx0XHRcdGV4cGVjdChjaGlsZEIuaW5kZXhSZWYpLnRvLmVxdWFsIDBcblx0XHRcdGV4cGVjdChjaGlsZEQuaW5kZXhSZWYpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjaGlsZEYuaW5kZXhSZWYpLnRvLmVxdWFsIDBcblx0XHRcdGV4cGVjdChjaGlsZEcuaW5kZXhSZWYpLnRvLmVxdWFsIDNcblx0XHRcdGV4cGVjdChjaGlsZEEuaW5kZXhSZWYpLnRvLmVxdWFsIG51bGxcblx0XHRcdGV4cGVjdChjaGlsZEMuaW5kZXhSZWYpLnRvLmVxdWFsIG51bGxcblxuXG5cblxuXG5cdHN1aXRlIFwiTWFuaXB1bGF0aW9uXCIsICgpLT5cblx0XHR0ZXN0IFwiLmFwcGVuZCgpXCIsICgpLT5cblx0XHRcdEEgPSBEb20uZGl2KClcblx0XHRcdEIgPSBEb20uZGl2KClcblx0XHRcdEMgPSBEb20udGV4dCgpXG5cdFx0XHREID0gRG9tLmRpdigpXG5cdFx0XHRNYWluQSA9IERvbS5kaXYobnVsbCwgQSwgQiwgQywgRClcblx0XHRcdE1haW5CID0gRG9tLmRpdigpXG5cblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkEpKEEsIEIsIEMsIEQpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5CKSgpXG5cblx0XHRcdE1haW5CLmFwcGVuZChBKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQSkoQiwgQywgRClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkIpKEEpXG5cblx0XHRcdEMuYXBwZW5kVG8oTWFpbkIpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5BKShCLCBEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQikoQSwgQylcblxuXG5cblx0XHR0ZXN0IFwiLnByZXBlbmQoKVwiLCAoKS0+XG5cdFx0XHRBID0gRG9tLmRpdigpXG5cdFx0XHRCID0gRG9tLmRpdigpXG5cdFx0XHRDID0gRG9tLnRleHQoKVxuXHRcdFx0RCA9IERvbS5kaXYoKVxuXHRcdFx0TWFpbkEgPSBEb20uZGl2KG51bGwsIEEsIEIsIEMsIEQpXG5cdFx0XHRNYWluQiA9IERvbS5kaXYoKVxuXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5BKShBLCBCLCBDLCBEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQikoKVxuXG5cdFx0XHRNYWluQi5wcmVwZW5kKEEpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5BKShCLCBDLCBEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQikoQSlcblxuXHRcdFx0Qy5wcmVwZW5kVG8oTWFpbkIpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5BKShCLCBEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQikoQywgQSlcblxuXG5cdFx0dGVzdCBcIi5hZnRlcigpXCIsICgpLT5cblx0XHRcdEEgPSBEb20uZGl2KClcblx0XHRcdEIgPSBEb20uZGl2KClcblx0XHRcdEMgPSBEb20udGV4dCgpXG5cdFx0XHREID0gRG9tLmRpdigpXG5cdFx0XHRNYWluQSA9IERvbS5kaXYobnVsbCwgQSwgQiwgQywgRClcblx0XHRcdE1haW5CID0gRG9tLmRpdigpXG5cblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkEpKEEsIEIsIEMsIEQpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5CKSgpXG5cblx0XHRcdE1haW5CLmFwcGVuZChCKVxuXHRcdFx0Qi5hZnRlcihBKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQSkoQywgRClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkIpKEIsIEEpXG5cblx0XHRcdEMuaW5zZXJ0QWZ0ZXIoQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkEpKEQpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5CKShCLCBDLCBBKVxuXG5cblx0XHR0ZXN0IFwiLmJlZm9yZSgpXCIsICgpLT5cblx0XHRcdEEgPSBEb20uZGl2KClcblx0XHRcdEIgPSBEb20uZGl2KClcblx0XHRcdEMgPSBEb20udGV4dCgpXG5cdFx0XHREID0gRG9tLmRpdigpXG5cdFx0XHRNYWluQSA9IERvbS5kaXYobnVsbCwgQSwgQiwgQywgRClcblx0XHRcdE1haW5CID0gRG9tLmRpdigpXG5cblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkEpKEEsIEIsIEMsIEQpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5CKSgpXG5cblx0XHRcdE1haW5CLmFwcGVuZChCKVxuXHRcdFx0Qi5iZWZvcmUoQSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkEpKEMsIEQpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW5CKShBLCBCKVxuXG5cdFx0XHRDLmluc2VydEJlZm9yZShCKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluQSkoRClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbkIpKEEsIEMsIEIpXG5cblxuXHRcdHRlc3QgXCIuZGV0YWNoKClcIiwgKCktPlxuXHRcdFx0ZW1pdENvdW50ID0gMFxuXHRcdFx0ZGl2ID0gRG9tLmRpdihudWxsLCAnSW5uZXIgVGV4dCBIZXJlJylcblx0XHRcdGRpdi5vbiAnYmVlcCcsICgpLT4gZW1pdENvdW50Kytcblx0XHRcdGRpdi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0ZGl2LnN0YXRlICdyZWxheGVkJywgb25cblxuXHRcdFx0ZXhwZWN0KGRpdi5wYXJlbnQpLm5vdC50by5leGlzdFxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwoMClcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLnRydWVcblx0XHRcdFxuXHRcdFx0ZGl2LmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRkaXYuZW1pdCgnYmVlcCcpXG5cdFx0XHRleHBlY3Qoc2FuZGJveC5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudC5lbCkudG8uZXF1YWwoc2FuZGJveClcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ3JlbGF4ZWQnKS50by5iZS50cnVlXG5cblx0XHRcdGRpdi5kZXRhY2goKVxuXHRcdFx0ZGl2LmVtaXQoJ2JlZXAnKVxuXHRcdFx0ZXhwZWN0KHNhbmRib3guY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgwKVxuXHRcdFx0ZXhwZWN0KGRpdi5wYXJlbnQpLm5vdC50by5leGlzdFxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLnRydWVcblxuXG5cdFx0dGVzdCBcIi5yZW1vdmUoKVwiLCAoKS0+XG5cdFx0XHRlbWl0Q291bnQgPSAwXG5cdFx0XHRkaXYgPSBEb20uZGl2KG51bGwsICdJbm5lciBUZXh0IEhlcmUnKVxuXHRcdFx0ZGl2Lm9uICdiZWVwJywgKCktPiBlbWl0Q291bnQrK1xuXHRcdFx0ZGl2LnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRkaXYuc3RhdGUgJ3JlbGF4ZWQnLCBvblxuXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkubm90LnRvLmV4aXN0XG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCgwKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdyZWxheGVkJykudG8uYmUudHJ1ZVxuXHRcdFx0XG5cdFx0XHRkaXYuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGRpdi5lbWl0KCdiZWVwJylcblx0XHRcdGV4cGVjdChzYW5kYm94LmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChkaXYucGFyZW50LmVsKS50by5lcXVhbChzYW5kYm94KVxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLnRydWVcblxuXHRcdFx0ZGl2LnJlbW92ZSgpXG5cdFx0XHRkaXYuZW1pdCgnYmVlcCcpXG5cdFx0XHRleHBlY3Qoc2FuZGJveC5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDApXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkubm90LnRvLmV4aXN0XG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnaGFwcHknKS50by5iZS5mYWxzZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAncmVsYXhlZCcpLnRvLmJlLmZhbHNlXG5cblxuXHRcdHRlc3QgXCIuZW1wdHkoKVwiLCAoKS0+XG5cdFx0XHRNYWluID0gRG9tLmRpdigpXG5cdFx0XHRBID0gRG9tLmRpdigpLmFwcGVuZFRvKE1haW4pXG5cdFx0XHRCID0gRG9tLmRpdigpLmFwcGVuZFRvKE1haW4pXG5cdFx0XHRBLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRCLnN0YXRlICdoYXBweScsIG9uXG5cblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikoQSwgQilcblx0XHRcdGV4cGVjdChBLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChCLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblxuXHRcdFx0TWFpbi5lbXB0eSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKClcblx0XHRcdGV4cGVjdChBLnBhcmVudCkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KEIucGFyZW50KS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoQS5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QoQi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cblxuXHRcdHRlc3QgXCIud3JhcCgpXCIsICgpLT5cblx0XHRcdE1haW4gPSBEb20uZGl2KClcblx0XHRcdEEgPSBEb20uZGl2KCkuYXBwZW5kVG8oTWFpbilcblx0XHRcdEIgPSBEb20uZGl2KCkuYXBwZW5kVG8oTWFpbilcblx0XHRcdEMgPSBEb20uZGl2KClcblx0XHRcdHdyYXBBID0gRG9tLnNlY3Rpb24oKVxuXHRcdFx0d3JhcEIgPSBEb20uc2VjdGlvbigpXG5cdFx0XHR3cmFwQyA9IERvbS5zZWN0aW9uKClcblx0XHRcdEEuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdEIuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdEMuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdHdyYXBBLnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdHdyYXBCLnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdHdyYXBDLnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikoQSwgQilcblx0XHRcdFxuXHRcdFx0QS53cmFwKHdyYXBBKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluKSh3cmFwQSwgQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUod3JhcEEpKEEpXG5cdFx0XHRcblx0XHRcdEIud3JhcCh3cmFwQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikod3JhcEEsIHdyYXBCKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZSh3cmFwQSkoQSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUod3JhcEIpKEIpXG5cdFx0XHRcblx0XHRcdEIud3JhcCh3cmFwQSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikod3JhcEEsIHdyYXBCKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZSh3cmFwQSkoQSwgQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUod3JhcEIpKClcblx0XHRcdFxuXHRcdFx0d3JhcEMuYXBwZW5kVG8od3JhcEIpXG5cdFx0XHRDLndyYXAod3JhcEMpXG5cdFx0XHRDLndyYXAoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluKSh3cmFwQSwgd3JhcEIpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKHdyYXBBKShBLCBCKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZSh3cmFwQikod3JhcEMpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKHdyYXBDKShDKVxuXHRcdFx0XG5cdFx0XHRDLndyYXAoQylcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikod3JhcEEsIHdyYXBCKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZSh3cmFwQSkoQSwgQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUod3JhcEIpKHdyYXBDKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZSh3cmFwQykoQylcblxuXHRcdFx0ZXhwZWN0KEEuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KEIuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KEMuc3RhdGUgJ2hhcHB5JykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KHdyYXBBLnN0YXRlICdyZWxheGVkJykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KHdyYXBCLnN0YXRlICdyZWxheGVkJykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KHdyYXBDLnN0YXRlICdyZWxheGVkJykudG8uYmUudHJ1ZVxuXG5cblx0XHR0ZXN0IFwiLnVud3JhcCgpXCIsICgpLT5cblx0XHRcdE1haW4gPSBEb20uZGl2KClcblx0XHRcdEEgPSBEb20uZGl2KCkucHJlcGVuZFRvKE1haW4pXG5cdFx0XHRCID0gRG9tLmRpdigpLmFwcGVuZFRvKEEpXG5cdFx0XHRDID0gRG9tLmRpdigpLmFwcGVuZFRvKEEpXG5cdFx0XHREID0gRG9tLmRpdigpLmFwcGVuZFRvKEMpXG5cdFx0XHRFID0gRG9tLmRpdigpLmFwcGVuZFRvKEQpXG5cdFx0XHRBLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRCLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRDLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRELnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRFLnN0YXRlICdoYXBweScsIG9uXG5cblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikoQSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQSkoQiwgQylcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQikoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShDKShEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShEKShFKVxuXG5cdFx0XHRFLnVud3JhcCgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKEEpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEEpKEIsIEMpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEIpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQykoRSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoRCkoKVxuXG5cdFx0XHRCLnVud3JhcCgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKEIsIEMpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEEpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQikoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShDKShFKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShEKSgpXG5cblx0XHRcdEUudW53cmFwKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikoQiwgRSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQSkoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShCKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEMpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoRCkoKVxuXG5cdFx0XHRBLmluc2VydEFmdGVyKEIpXG5cdFx0XHRDLmFwcGVuZFRvKEEpXG5cdFx0XHRELmFwcGVuZFRvKEEpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKEIsIEEsIEUpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEEpKEMsIEQpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEIpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQykoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShEKSgpXG5cblx0XHRcdEQudW53cmFwKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikoQiwgQywgRCwgRSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQSkoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShCKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEMpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoRCkoKVxuXG5cblxuXHRcdHRlc3QgXCIucmVwbGFjZSgpXCIsICgpLT5cblx0XHRcdE1haW4gPSBEb20uZGl2KClcblx0XHRcdEEgPSBEb20uZGl2KCkuYXBwZW5kVG8oTWFpbilcblx0XHRcdEIgPSBEb20uZGl2KCkuYXBwZW5kVG8oTWFpbilcblx0XHRcdEMgPSBEb20uZGl2KCkuYXBwZW5kVG8oQSlcblx0XHRcdEQgPSBEb20uZGl2KCkuYXBwZW5kVG8oQSlcblx0XHRcdEUgPSBEb20uZGl2KCkuYXBwZW5kVG8oRClcblx0XHRcdFxuXHRcdFx0QS5yZXBsYWNlKCk7IEUucmVwbGFjZSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKEEsIEIpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEEpKEMsIEQpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEIpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQykoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShEKShFKVxuXHRcdFx0XG5cdFx0XHRDLnJlcGxhY2UoRSkuYXBwZW5kVG8oQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikoQSwgQilcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQSkoRSwgRClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQikoQylcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQykoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShEKSgpXG5cdFx0XHRcblx0XHRcdEQucmVwbGFjZShFKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluKShBLCBCKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShBKShFKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShCKShDKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShDKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEQpKClcblx0XHRcdFxuXHRcdFx0Qi5yZXBsYWNlKEMpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKE1haW4pKEEsIEMpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEEpKEUpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEIpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQykoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShEKSgpXG5cdFx0XHRcblx0XHRcdEEucmVwbGFjZShEKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShNYWluKShELCBDKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShBKShFKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShCKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEMpKClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoRCkoKVxuXHRcdFx0XG5cdFx0XHRCLnJlcGxhY2UoRClcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoTWFpbikoQylcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQSkoRSlcblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoQikoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShDKSgpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKEQpKClcblxuXG5cdFx0dGVzdCBcIi5jbG9uZSgpXCIsICgpLT5cblx0XHRcdGVtaXRDb3VudCA9IDBcblx0XHRcdHNhbmRCb3ggPSBEb20oc2FuZGJveClcblx0XHRcdG9wdHMgPSB7c3R5bGU6ICRiYXNlOnt3aWR0aDonMzRweCd9LCAkaGFwcHk6e2hlaWdodDonOTlweCd9LCAkcmVsYXhlZDp7b3BhY2l0eTonMC41J319XG5cdFx0XHRBID0gRG9tLmRpdihvcHRzLCAnU29tZSBJbm5lciBUZXh0JykuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdEEuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdEEub24gJ3ByaXZhdGVFdmVudCcsICgpLT4gZW1pdENvdW50Kytcblx0XHRcdGNoaWxkQSA9IERvbS5kaXYoKS5hcHBlbmRUbyhBKVxuXHRcdFx0Y2hpbGRCID0gRG9tLnNwYW4oKS5hcHBlbmRUbyhBKVxuXHRcdFx0QiA9IEEuY2xvbmUoKVxuXG5cdFx0XHRBLnN0YXRlICdyZWxheGVkJywgb25cblx0XHRcdEEuZW1pdCgncHJpdmF0ZUV2ZW50Jylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoQS5wYXJlbnQpLnRvLmVxdWFsKHNhbmRCb3gpXG5cdFx0XHRleHBlY3QoQS5jc3MgJ3dpZHRoJykudG8uZXF1YWwoJzM0cHgnKVxuXHRcdFx0ZXhwZWN0KEEuY3NzICdoZWlnaHQnKS50by5lcXVhbCgnOTlweCcpXG5cdFx0XHRleHBlY3QoQS5jc3MgJ29wYWNpdHknKS50by5lcXVhbCgnMC41Jylcblx0XHRcdGV4cGVjdChBLnNpYmxpbmdzLmxlbmd0aCkudG8uZXF1YWwoMClcblx0XHRcdGV4cGVjdChBLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMylcblx0XHRcdGV4cGVjdChBLmNoaWxkcmVuWzBdLmVsLnRleHRDb250ZW50KS50by5lcXVhbCAnU29tZSBJbm5lciBUZXh0J1xuXHRcdFx0ZXhwZWN0KEEuY2hpbGRyZW5bMV0pLnRvLmVxdWFsKGNoaWxkQSlcblx0XHRcdGV4cGVjdChBLmNoaWxkcmVuWzJdKS50by5lcXVhbChjaGlsZEIpXG5cdFx0XHRleHBlY3QoQikubm90LnRvLmVxdWFsKEEpXG5cdFx0XHRleHBlY3QoQi5wYXJlbnQpLnRvLmVxdWFsKHVuZGVmaW5lZClcblx0XHRcdHNhbmRCb3guYXBwZW5kKEIpXG5cblx0XHRcdGV4cGVjdChCLnBhcmVudCkudG8uZXF1YWwoc2FuZEJveClcblx0XHRcdGV4cGVjdChCLmNzcyAnd2lkdGgnKS50by5lcXVhbCgnMzRweCcpXG5cdFx0XHRleHBlY3QoQi5jc3MgJ2hlaWdodCcpLnRvLmVxdWFsKCc5OXB4Jylcblx0XHRcdGV4cGVjdChCLmNzcyAnb3BhY2l0eScpLnRvLmVxdWFsKCcxJylcblx0XHRcdGV4cGVjdChCLnNpYmxpbmdzLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChCLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMylcblx0XHRcdGV4cGVjdChCLmNoaWxkcmVuWzBdLmVsLnRleHRDb250ZW50KS50by5lcXVhbCAnU29tZSBJbm5lciBUZXh0J1xuXHRcdFx0ZXhwZWN0KEIuY2hpbGRyZW5bMF0pLm5vdC50by5lcXVhbChBLmNoaWxkcmVuWzBdKVxuXHRcdFx0ZXhwZWN0KEIuY2hpbGRyZW5bMV0pLm5vdC50by5lcXVhbChjaGlsZEEpXG5cdFx0XHRleHBlY3QoQi5jaGlsZHJlblsyXSkubm90LnRvLmVxdWFsKGNoaWxkQilcblx0XHRcdGV4cGVjdChCLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChCLnN0YXRlICdyZWxheGVkJykudG8uYmUuZmFsc2VcblxuXHRcdFx0ZXhwZWN0KGVtaXRDb3VudCkudG8uZXF1YWwoMSlcblx0XHRcdEIuZW1pdCgncHJpdmF0ZUV2ZW50Jylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsKDIpXG5cdFx0XHRcblx0XHRcdEEub2ZmKClcblx0XHRcdEEuZW1pdCgncHJpdmF0ZUV2ZW50Jylcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsKDIpXG5cdFx0XHRCLmVtaXQoJ3ByaXZhdGVFdmVudCcpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCgzKVxuXG5cblx0XHR0ZXN0IFwiLnByb3AoKSAtIGVsZW1lbnQgcHJvcGVydHkgZ2V0dGVyL3NldHRlclwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KClcblx0XHRcdFxuXHRcdFx0ZXhwZWN0KGRpdi5wcm9wICdteVByb3AnKS50by5lcXVhbCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdChkaXYucHJvcCAnbXlQcm9wJywgMTkyKS50by5lcXVhbCBkaXZcblx0XHRcdGV4cGVjdChkaXYucHJvcCAnbXlQcm9wJykudG8uZXF1YWwgMTkyXG5cdFx0XHRleHBlY3QoZGl2LnByb3AgJ215UHJvcCcsICcxOTInKS50by5lcXVhbCBkaXZcblx0XHRcdGV4cGVjdChkaXYucHJvcCAnbXlQcm9wJykudG8uZXF1YWwgJzE5Midcblx0XHRcdGV4cGVjdChkaXYucHJvcCAnYW5vdGhlclByb3AnLCBbMSwyLDNdKS50by5lcXVhbCBkaXZcblx0XHRcdGV4cGVjdChkaXYucHJvcCAnYW5vdGhlclByb3AnKS50by5lcWwgWzEsMiwzXVxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5teVByb3ApLnRvLmVxdWFsICcxOTInXG5cdFx0XHRleHBlY3QoZGl2LmVsLmFub3RoZXJQcm9wKS50by5lcWwgWzEsMiwzXSBcblxuXHRcdFx0ZGl2LmVsLmxhc3RQcm9wID0gOTk5OVxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5sYXN0UHJvcCkudG8uZXF1YWwgOTk5OVxuXHRcdFx0ZXhwZWN0KGRpdi5wcm9wICdsYXN0UHJvcCcpLnRvLmVxdWFsIDk5OTlcblxuXHRcdFx0ZXhwZWN0KE9iamVjdC5rZXlzKGRpdi5lbCkpLm5vdC50by5jb250YWluKCdwcm9taXNlSXNMYXN0Jylcblx0XHRcdFxuXHRcdFx0ZGl2LnByb3AgJ3Byb21pc2VJc0xhc3QnLCAnb3ZlcjlrJ1xuXHRcdFx0ZXhwZWN0KE9iamVjdC5rZXlzKGRpdi5lbCkpLnRvLmNvbnRhaW4oJ3Byb21pc2VJc0xhc3QnKVxuXHRcdFx0XG5cdFx0XHRkaXYucHJvcCAncHJvbWlzZUlzTGFzdCcsIHVuZGVmaW5lZFxuXHRcdFx0ZXhwZWN0KE9iamVjdC5rZXlzKGRpdi5lbCkpLnRvLmNvbnRhaW4oJ3Byb21pc2VJc0xhc3QnKVxuXHRcdFx0XG5cdFx0XHRkaXYucHJvcCAncHJvbWlzZUlzTGFzdCcsIG51bGxcblx0XHRcdGV4cGVjdChPYmplY3Qua2V5cyhkaXYuZWwpKS50by5jb250YWluKCdwcm9taXNlSXNMYXN0JylcblxuXG5cblx0XHR0ZXN0IFwiLmF0dHIoKSAtIGVsZW1lbnQgcHJvcGVydHkgZ2V0dGVyL3NldHRlclwiLCAoKS0+XG5cdFx0XHRkaXYgPSBEb20uZGl2KClcblx0XHRcdFxuXHRcdFx0ZXhwZWN0KGRpdi5hdHRyICdteUF0dHInKS50by5lcXVhbCBudWxsXG5cdFx0XHRleHBlY3QoZGl2LmF0dHIgJ215QXR0cicsIDE5MikudG8uZXF1YWwgZGl2XG5cdFx0XHRleHBlY3QoZGl2LmF0dHIgJ215QXR0cicpLnRvLmVxdWFsICcxOTInXG5cdFx0XHRleHBlY3QoZGl2LmF0dHIgJ215QXR0cicsICcxOTInKS50by5lcXVhbCBkaXZcblx0XHRcdGV4cGVjdChkaXYuYXR0ciAnbXlBdHRyJykudG8uZXF1YWwgJzE5Midcblx0XHRcdGV4cGVjdChkaXYuYXR0ciAnYW5vdGhlckF0dHInLCBbMSwyLDNdKS50by5lcXVhbCBkaXZcblx0XHRcdGV4cGVjdChkaXYuYXR0ciAnYW5vdGhlckF0dHInKS50by5lcXVhbCAnMSwyLDMnXG5cdFx0XHRleHBlY3QoZGl2LmVsLmdldEF0dHJpYnV0ZSAnbXlBdHRyJykudG8uZXF1YWwgJzE5Midcblx0XHRcdGV4cGVjdChkaXYuZWwuZ2V0QXR0cmlidXRlICdhbm90aGVyQXR0cicpLnRvLmVxbCAnMSwyLDMnXG5cblx0XHRcdGRpdi5lbC5zZXRBdHRyaWJ1dGUgJ2xhc3RBdHRyJywgOTk5OVxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5nZXRBdHRyaWJ1dGUgJ2xhc3RBdHRyJykudG8uZXF1YWwgJzk5OTknXG5cdFx0XHRleHBlY3QoZGl2LmF0dHIgJ2xhc3RBdHRyJykudG8uZXF1YWwgJzk5OTknXG5cblx0XHRcdGV4cGVjdChkaXYuZWwuZ2V0QXR0cmlidXRlICdwcm9taXNlSXNMYXN0JykudG8uZXF1YWwgbnVsbFxuXHRcdFx0XG5cdFx0XHRkaXYuYXR0ciAncHJvbWlzZUlzTGFzdCcsICdvdmVyOWsnXG5cdFx0XHRleHBlY3QoZGl2LmVsLmdldEF0dHJpYnV0ZSAncHJvbWlzZUlzTGFzdCcpLnRvLmVxdWFsICdvdmVyOWsnXG5cdFx0XHRcblx0XHRcdGRpdi5hdHRyICdwcm9taXNlSXNMYXN0JywgdW5kZWZpbmVkXG5cdFx0XHRleHBlY3QoZGl2LmVsLmdldEF0dHJpYnV0ZSAncHJvbWlzZUlzTGFzdCcpLnRvLmVxdWFsICdvdmVyOWsnXG5cdFx0XHRcblx0XHRcdGRpdi5hdHRyICdwcm9taXNlSXNMYXN0JywgbnVsbFxuXHRcdFx0ZXhwZWN0KGRpdi5lbC5nZXRBdHRyaWJ1dGUgJ3Byb21pc2VJc0xhc3QnKS50by5lcXVhbCBudWxsXG5cblxuXG5cdFx0dGVzdCBcIi5odG1sIC0gaW5uZXJIVE1MIGdldHRlci9zZXR0ZXJcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdihudWxsLCBEb20uZGl2KCksICdTb21lIHRleHQnLCBEb20uc3BhbigpLCBEb20uZGl2KCkpXG5cblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCg0KVxuXHRcdFx0ZXhwZWN0KGRpdi5odG1sKS50by5lcXVhbChkaXYuZWwuaW5uZXJIVE1MKVxuXHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDQpXG5cblx0XHRcdGRpdi5odG1sID0gJzxzZWN0aW9uIElEPVwidGVzdFwiPjwvc2VjdGlvbj4nXG5cdFx0XHRleHBlY3QoZGl2Lmh0bWwpLnRvLmVxdWFsKCc8c2VjdGlvbiBpZD1cInRlc3RcIj48L3NlY3Rpb24+Jylcblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlblswXS5lbC5pZCkudG8uZXF1YWwoJ3Rlc3QnKVxuXHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlblswXS5lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKS50by5lcXVhbCgnc2VjdGlvbicpXG5cblxuXHRcdHRlc3QgXCIudGV4dCAtIHRleHRDb250ZW50IGdldHRlci9zZXR0ZXJcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdihudWxsLCAnU29tZSB0ZXh0JywgRG9tLnNwYW4obnVsbCwgJ0lubmVyIFRleHQnKSlcblxuXHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3QoZGl2LnRleHQpLnRvLmVxdWFsKGRpdi5lbC50ZXh0Q29udGVudClcblx0XHRcdGV4cGVjdChkaXYudGV4dCkudG8uZXF1YWwoJ1NvbWUgdGV4dElubmVyIFRleHQnKVxuXHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDIpXG5cblx0XHRcdGRpdi50ZXh0ID0gJ25ld1RleHQnXG5cdFx0XHRleHBlY3QoZGl2LnRleHQpLnRvLmVxdWFsKCduZXdUZXh0Jylcblx0XHRcdGV4cGVjdChkaXYuZWwudGV4dENvbnRlbnQpLnRvLmVxdWFsKCduZXdUZXh0Jylcblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlblswXS5lbC5ub2RlVHlwZSkudG8uZXF1YWwoMylcblxuXG5cdFx0dGVzdCBcIkFwcGVuZGluZy9wcmVwZW5kaW5nIGVsZW1lbnRzIHRvIGEgdGV4dCBub2RlIHNob3VsZCBkbyBub3RoaW5nXCIsICgpLT5cblx0XHRcdHRleHQgPSBEb20udGV4dCgnYWJjMTIzJylcblx0XHRcdGV4cGVjdCh0ZXh0LnRleHQpLnRvLmVxdWFsKCdhYmMxMjMnKVxuXHRcdFx0ZXhwZWN0KHRleHQucmF3LmNoaWxkTm9kZXMubGVuZ3RoKS50by5lcXVhbCgwKVxuXG5cdFx0XHR0ZXh0LmFwcGVuZChEb20udGV4dCgnZGVmJykpXG5cdFx0XHRleHBlY3QodGV4dC50ZXh0KS50by5lcXVhbCgnYWJjMTIzJylcblx0XHRcdGV4cGVjdCh0ZXh0LnJhdy5jaGlsZE5vZGVzLmxlbmd0aCkudG8uZXF1YWwoMClcblxuXHRcdFx0dGV4dC5wcmVwZW5kKERvbS5kaXYobnVsbCwgJ2RlZicpKVxuXHRcdFx0ZXhwZWN0KHRleHQudGV4dCkudG8uZXF1YWwoJ2FiYzEyMycpXG5cdFx0XHRleHBlY3QodGV4dC5yYXcuY2hpbGROb2Rlcy5sZW5ndGgpLnRvLmVxdWFsKDApXG5cdFx0XHRcblx0XHRcdGRpdiA9IERvbS5kaXYobnVsbCwgJzQ1NicpXG5cdFx0XHRkaXYuYXBwZW5kVG8odGV4dClcblx0XHRcdGV4cGVjdCh0ZXh0LnRleHQpLnRvLmVxdWFsKCdhYmMxMjMnKVxuXHRcdFx0ZXhwZWN0KHRleHQucmF3LmNoaWxkTm9kZXMubGVuZ3RoKS50by5lcXVhbCgwKVxuXHRcdFx0ZXhwZWN0KGRpdi5wYXJlbnQpLnRvLmVxdWFsKHVuZGVmaW5lZClcblxuXG5cblxuXHRzdWl0ZSBcIkJhdGNoXCIsICgpLT5cblx0XHR0ZXN0IFwiRG9tLmJhdGNoKCkgdGFrZXMgYW4gaXRlcmFibGUgY29udGFpbmluZyBhbiBhcnJheSBvZiBlbGVtZW50cyBvciBRdWlja0RvbSBlbGVtZW50cyBhbmQgcmV2ZWFscyB0aGUgUXVpY2tFbGVtZW50IEFQSSB3aGljaCB3aWxsIGJlIGFwcGxpZWQgZm9yIGVhY2ggZWxlbWVudFwiLCAoKS0+XG5cdFx0XHRzYW5kQm94ID0gRG9tKHNhbmRib3gpXG5cdFx0XHRkaXYgPSBEb20uZGl2KClcblx0XHRcdEEgPSBEb20uZGl2KCkuYXBwZW5kVG8oZGl2KVxuXHRcdFx0QiA9IERvbS5zZWN0aW9uKCkuYXBwZW5kVG8oZGl2KVxuXHRcdFx0QyA9IERvbS5kaXYoKS5hcHBlbmRUbyhkaXYpXG5cblx0XHRcdGNoZWNrQ2hpbGRTdHJ1Y3R1cmUoc2FuZEJveCkoKVxuXHRcdFx0Y2hlY2tDaGlsZFN0cnVjdHVyZShkaXYpKEEsIEIsIEMpXG5cblx0XHRcdERvbS5iYXRjaChbQSxCLENdKVxuXHRcdFx0XHQuYXBwZW5kVG8oc2FuZEJveClcblx0XHRcdFx0LnN0eWxlICdvcGFjaXR5JywgMC41XG5cdFx0XHRcdC5jc3Mge2hlaWdodDozMCwgYmFja2dyb3VuZENvbG9yOidwaW5rJ31cblx0XHRcdFx0LmFwcGVuZCAnU29tZSBJbm5lciBUZXh0J1xuXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKHNhbmRCb3gpKEEsIEIsIEMpXG5cdFx0XHRjaGVja0NoaWxkU3RydWN0dXJlKGRpdikoKVxuXG5cdFx0XHRleHBlY3QoZ2V0Q29tcHV0ZWRTdHlsZShBLmVsKS5vcGFjaXR5KS50by5lcXVhbCgnMC41Jylcblx0XHRcdGV4cGVjdChnZXRDb21wdXRlZFN0eWxlKEMuZWwpLm9wYWNpdHkpLnRvLmVxdWFsKCcwLjUnKVxuXHRcdFx0ZXhwZWN0KGdldENvbXB1dGVkU3R5bGUoQi5lbCkuaGVpZ2h0KS50by5lcXVhbCgnMzBweCcpXG5cdFx0XHRleHBlY3QoQS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoQi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoQy5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDEpXG5cdFx0XHRleHBlY3QoQi5jaGlsZHJlblswXS5lbC50ZXh0Q29udGVudCkudG8uZXF1YWwoJ1NvbWUgSW5uZXIgVGV4dCcpXG5cblxuXHRcdHRlc3QgXCJJZiBhIHRydXRoeSB2YWx1ZSBpcyBwYXNzZWQgYXMgdGhlIDJuZCBhcmcgb2YgRG9tLmJhdGNoKCksIGFuIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQgZm9yIHRoZSBmaXJzdCBtZXRob2QgaW52b2tlZCBjb250YWluaW5nIHRoZSByZXN1bHQgZm9yIGVhY2ggZWxlbWVudCBwcm92aWRlZFwiLCAoKS0+XG5cdFx0XHRzYW5kQm94ID0gRG9tKHNhbmRib3gpXG5cdFx0XHRBID0gRG9tLmRpdigpLmFwcGVuZFRvKHNhbmRCb3gpXG5cdFx0XHRCID0gRG9tLnNlY3Rpb24oKS5hcHBlbmRUbyhzYW5kQm94KVxuXHRcdFx0QyA9IERvbS5kaXYoKS5hcHBlbmRUbyhzYW5kQm94KVxuXG5cdFx0XHRiYXRjaDEgPSBEb20uYmF0Y2goW0EsQixDXSlcblx0XHRcdGJhdGNoMiA9IERvbS5iYXRjaChbQSxCLENdLCB0cnVlKVxuXG5cdFx0XHRleHBlY3QoYmF0Y2gxLnN0eWxlKCd3aWR0aCcpKS50by5lcXVhbChiYXRjaDEpXG5cdFx0XHRleHBlY3QoYmF0Y2gxLnN0eWxlKCd3aWR0aCcsIDQ3KSkudG8uZXF1YWwoYmF0Y2gxKVxuXHRcdFx0ZXhwZWN0KGJhdGNoMi5zdHlsZSgnd2lkdGgnKSkudG8uZXFsKFsnNDdweCcsICc0N3B4JywgJzQ3cHgnXSlcblx0XHRcdGV4cGVjdChiYXRjaDIuc3R5bGUoJ3dpZHRoJywgMzMpKS50by5lcWwoW0EsQixDXSlcblx0XHRcdGV4cGVjdChiYXRjaDIuc3R5bGUoJ3dpZHRoJykpLnRvLmVxbChbJzMzcHgnLCAnMzNweCcsICczM3B4J10pXG5cblxuXHRcdHRlc3QgXCJJZiB0aGUgLnJldHVybigpIG1ldGhvZCBpcyBpbnZva2VkIG9uIHRoZSBiYXRjaCBpbnN0YW5jZSwgaXQgd2lsbCByZXR1cm4gdGhlIHJlc3VsdCBzZXQgZnJvbSB0aGUgbGFzdCBtZXRob2QgaW52b2NhdGlvblwiLCAoKS0+XG5cdFx0XHRzYW5kQm94ID0gRG9tKHNhbmRib3gpXG5cdFx0XHRkaXYgPSBEb20uZGl2KClcblx0XHRcdEEgPSBEb20uZGl2KCkuYXBwZW5kVG8oZGl2KVxuXHRcdFx0QiA9IERvbS5zZWN0aW9uKCkuYXBwZW5kVG8oZGl2KVxuXHRcdFx0QyA9IERvbS5kaXYoKS5hcHBlbmRUbyhkaXYpXG5cdFx0XHRcblx0XHRcdHJlc3VsdCA9IERvbS5iYXRjaChbQSxCLENdKVxuXHRcdFx0XHQuYXBwZW5kVG8oc2FuZEJveClcblx0XHRcdFx0LnN0eWxlICdvcGFjaXR5JywgMC41XG5cdFx0XHRcdC5jc3Mge2hlaWdodDozMCwgYmFja2dyb3VuZENvbG9yOidwaW5rJ31cblx0XHRcdFx0LmFwcGVuZCAnU29tZSBJbm5lciBUZXh0J1xuXHRcdFx0XHQuc3R5bGUgJ29wYWNpdHknXG5cdFx0XHRcdC5yZXR1cm4oKVxuXG5cdFx0XHRleHBlY3QocmVzdWx0KS50by5lcWwgWycwLjUnLCcwLjUnLCcwLjUnXVxuXHRcdFx0ZXhwZWN0KERvbS5iYXRjaChbQSxCLENdKS5jc3MoJ3dpZHRoJywgJzM4cHgnKS5jc3MoJ3dpZHRoJykucmV0dXJuKCkpLnRvLmVxbCBbJzM4cHgnLCczOHB4JywnMzhweCddXG5cblxuXHRcdHRlc3QgXCJJZiB0aGUgLnJldHVybigpIG1ldGhvZCBpcyBpbnZva2VkIHdpdGggYSB0cnV0aHkgYXJndW1lbnQsIGl0IHdpbGwgY2F1c2UgdGhlIG5leHQgbWV0aG9kIGludm9jYXRpb24gdG8gcmV0dXJuIHRoZSByZXN1bHRzIG9mIHRoZSBpbnZvY2F0aW9uIGZvciBlYWNoIGVsZW1lbnQgcHJvdmlkZWRcIiwgKCktPlxuXHRcdFx0c2FuZEJveCA9IERvbShzYW5kYm94KVxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cdFx0XHRBID0gRG9tLmRpdigpLmFwcGVuZFRvKGRpdilcblx0XHRcdEIgPSBEb20uc2VjdGlvbigpLmFwcGVuZFRvKGRpdilcblx0XHRcdEMgPSBEb20uZGl2KCkuYXBwZW5kVG8oZGl2KVxuXHRcdFx0XG5cdFx0XHRyZXN1bHQgPSBEb20uYmF0Y2goW0EsQixDXSlcblx0XHRcdFx0LmFwcGVuZFRvKHNhbmRCb3gpXG5cdFx0XHRcdC5zdHlsZSAnb3BhY2l0eScsIDAuNVxuXHRcdFx0XHQuY3NzIHtoZWlnaHQ6MzAsIGJhY2tncm91bmRDb2xvcjoncGluayd9XG5cdFx0XHRcdC5hcHBlbmQgJ1NvbWUgSW5uZXIgVGV4dCdcblx0XHRcdFx0LnJldHVybih0cnVlKVxuXHRcdFx0XHQuc3R5bGUgJ29wYWNpdHknXG5cblx0XHRcdGV4cGVjdChyZXN1bHQpLnRvLmVxbCBbJzAuNScsJzAuNScsJzAuNSddXG5cdFx0XHRleHBlY3QoRG9tLmJhdGNoKFtBLEIsQ10pLmNzcygnd2lkdGgnLCAnMzhweCcpLmNzcygnaGVpZ2h0JywgJzI4cHgnKS5yZXR1cm4odHJ1ZSkuY3NzKCd3aWR0aCcpKS50by5lcWwgWyczOHB4JywnMzhweCcsJzM4cHgnXVxuXG5cblx0XHR0ZXN0IFwiSW52b2tpbmcgdGhlIC5yZXZlcnNlKCkgbWV0aG9kIG9uIHRoZSBiYXRjaCBpbnN0YW5jZSB3aWxsIHJldmVyc2UgdGhlIGVsZW1lbnRzIGFycmF5IGluIHRoZSBiYXRjaCBhbmQgdGh1cyB0aGUgZXhlY3V0aW9uIG9yZGVyXCIsICgpLT5cblx0XHRcdEEgPSBEb20uZGl2KG51bGwsICdBQUEnKS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0QiA9IERvbS5kaXYobnVsbCwgJ0JCQicpLmFwcGVuZFRvKHNhbmRib3gpXG5cdFx0XHRDID0gRG9tLmRpdihudWxsLCAnQ0NDJykuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdGFyciA9IFtBLEIsQ11cblx0XHRcdGV4cGVjdChEb20uYmF0Y2goYXJyKS5lbGVtZW50cykubm90LnRvLmVxdWFsKGFycilcblx0XHRcdGV4cGVjdChEb20uYmF0Y2goYXJyKS5lbGVtZW50cykudG8uZXFsIFtBLEIsQ11cblx0XHRcdGV4cGVjdChEb20uYmF0Y2goYXJyKS5yZXZlcnNlKCkuZWxlbWVudHMpLnRvLmVxbCBbQyxCLEFdXG5cdFx0XHRleHBlY3QoRG9tLmJhdGNoKGFyciwxKS50ZXh0KCkpLnRvLmVxbCBbJ0FBQScsJ0JCQicsJ0NDQyddXG5cdFx0XHRleHBlY3QoRG9tLmJhdGNoKGFyciwxKS5yZXZlcnNlKCkudGV4dCgpKS50by5lcWwgWydDQ0MnLCdCQkInLCdBQUEnXVxuXHRcdFx0ZXhwZWN0KERvbS5iYXRjaChhcnIsMSkucmV2ZXJzZSgpLnRleHQoKSkudG8uZXFsIFsnQ0NDJywnQkJCJywnQUFBJ11cblx0XHRcdGV4cGVjdChEb20uYmF0Y2goYXJyLDEpLnJldmVyc2UoKS5yZXZlcnNlKCkudGV4dCgpKS50by5lcWwgWydBQUEnLCdCQkInLCdDQ0MnXVxuXG5cblx0XHR0ZXN0IFwiQmF0Y2gudGV4dC8uaHRtbCBhcmUgbWV0aG9kcyBpbnN0ZWFkIG9mIGdldHRlcnMvc2V0dGVyc1wiLCAoKS0+XG5cdFx0XHRkaXZBID0gRG9tLmRpdihudWxsLCAnVGhlIGRpdkEnKVxuXHRcdFx0ZGl2QiA9IERvbS5kaXYobnVsbCwgJ1RoZSBkaXZCJylcblx0XHRcdGJhdGNoID0gRG9tLmJhdGNoKFtkaXZBLCBkaXZCXSwgdHJ1ZSlcblxuXHRcdFx0ZXhwZWN0KGJhdGNoLmh0bWwoKSkudG8uZXFsIFsnVGhlIGRpdkEnLCAnVGhlIGRpdkInXVxuXHRcdFx0ZXhwZWN0KGJhdGNoLnRleHQoKSkudG8uZXFsIFsnVGhlIGRpdkEnLCAnVGhlIGRpdkInXVxuXHRcdFx0XG5cdFx0XHRiYXRjaC5odG1sKCc8c3Bhbj5UaGUgZGl2PC9zcGFuPicpXG5cdFx0XHRleHBlY3QoYmF0Y2guaHRtbCgpKS50by5lcWwgWyc8c3Bhbj5UaGUgZGl2PC9zcGFuPicsICc8c3Bhbj5UaGUgZGl2PC9zcGFuPiddXG5cdFx0XHRleHBlY3QoYmF0Y2gudGV4dCgpKS50by5lcWwgWydUaGUgZGl2JywgJ1RoZSBkaXYnXVxuXG5cdFx0XHRiYXRjaC50ZXh0KCdUSEUgRElWJylcblx0XHRcdGV4cGVjdChiYXRjaC5odG1sKCkpLnRvLmVxbCBbJ1RIRSBESVYnLCAnVEhFIERJViddXG5cdFx0XHRleHBlY3QoYmF0Y2gudGV4dCgpKS50by5lcWwgWydUSEUgRElWJywgJ1RIRSBESVYnXVxuXG5cblxuXHRzdWl0ZSBcIlRlbXBsYXRlc1wiLCAoKS0+XG5cdFx0dGVzdCBcIkEgcmV1c2FibGUgdGVtcGxhdGUgY2FuIGJlIGdlbmVyYXRlZCB2aWEgUXVpY2tEb20udGVtcGxhdGUoKVwiLCAoKS0+XG5cdFx0XHR0ZW1wbGF0ZSA9IERvbS50ZW1wbGF0ZShbJ3NwYW4nLCBpZDondGhlU3BhbiddKVxuXG5cdFx0XHRleHBlY3QodHlwZW9mIHRlbXBsYXRlKS50by5lcXVhbCgnb2JqZWN0Jylcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS50eXBlKS50by5lcXVhbCgnc3BhbicpXG5cdFx0XHRleHBlY3QodGVtcGxhdGUub3B0aW9ucykudG8uZXFsKGlkOid0aGVTcGFuJylcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS5jaGlsZHJlbikudG8uZXFsKFtdKVxuXG5cblx0XHR0ZXN0IFwiVGVtcGxhdGVzIGNhbiBiZSB0dXJuZWQgaW50byBRdWlja0RvbSBpbnN0YW5jZXMgdmlhIHRlbXBsYXRlLnNwYXduKCkgb3IgYnkgcGFzc2luZyBhcyBhcmcgdG8gUXVpY2tEb21cIiwgKCktPlxuXHRcdFx0dGVtcGxhdGUgPSBEb20udGVtcGxhdGUoWydkaXYnLCBjbGFzc05hbWU6J3NvbWUtZGl2JywgJ1NvbWUgSW5uZXIgVGV4dCddKVxuXHRcdFx0c3Bhd25BID0gdGVtcGxhdGUuc3Bhd24oKVxuXHRcdFx0c3Bhd25BLnN0YXRlICdoYXBweScsIG9uXG5cdFx0XHRzcGF3bkIgPSBEb20odGVtcGxhdGUpXG5cblx0XHRcdGV4cGVjdChzcGF3bkEuZWwpLnRvLmJlLmluc3RhbmNlT2YoSFRNTERpdkVsZW1lbnQpXG5cdFx0XHRleHBlY3Qoc3Bhd25CLmVsKS50by5iZS5pbnN0YW5jZU9mKEhUTUxEaXZFbGVtZW50KVxuXHRcdFx0ZXhwZWN0KHNwYXduQSkubm90LnRvLmVxdWFsKHNwYXduQilcblx0XHRcdGV4cGVjdChzcGF3bkEuZWwpLm5vdC50by5lcXVhbChzcGF3bkIuZWwpXG5cdFx0XHRleHBlY3Qoc3Bhd25BLnN0YXRlICdoYXBweScpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChzcGF3bkIuc3RhdGUgJ2hhcHB5JykudG8uYmUuZmFsc2Vcblx0XHRcdGV4cGVjdChzcGF3bkEuZWwudGV4dENvbnRlbnQpLnRvLmVxdWFsKCdTb21lIElubmVyIFRleHQnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQi5lbC50ZXh0Q29udGVudCkudG8uZXF1YWwoJ1NvbWUgSW5uZXIgVGV4dCcpXG5cdFx0XHRleHBlY3Qoc3Bhd25BLmVsLmNsYXNzTmFtZSkudG8uZXF1YWwoJ3NvbWUtZGl2JylcblxuXG5cdFx0dGVzdCBcIlRlbXBsYXRlcyBjYW4gYmUgY3JlYXRlZCBmcm9tIFF1aWNrRWxlbWVudCBpbnN0YW5jZXNcIiwgKCktPlxuXHRcdFx0c2VjdGlvbiA9IERvbS5zZWN0aW9uKGNsYXNzTmFtZTonc2luZ2xlU2VjdGlvbicsICdTb21lIElubmVyIFRleHQnKVxuXHRcdFx0c2VjdGlvbi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0c2VjdGlvblRlbXBsYXRlID0gc2VjdGlvbi50b1RlbXBsYXRlKClcblx0XHRcdHRlbXBsYXRlU3Bhd24gPSBzZWN0aW9uVGVtcGxhdGUuc3Bhd24oKVxuXG5cdFx0XHRleHBlY3Qoc2VjdGlvblRlbXBsYXRlKS5ub3QudG8uZXF1YWwoc2VjdGlvbilcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZVNwYXduLmVsKS5ub3QudG8uZXF1YWwoc2VjdGlvbi5lbClcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZVNwYXduLmVsLmNsYXNzTmFtZSkudG8uZXF1YWwoJ3NpbmdsZVNlY3Rpb24nKVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlU3Bhd24udGV4dCkudG8uZXF1YWwoJ1NvbWUgSW5uZXIgVGV4dCcpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5zdGF0ZSAnaGFwcHknKS50by5iZS50cnVlXG5cdFx0XHRleHBlY3QodGVtcGxhdGVTcGF3bi5zdGF0ZSAnaGFwcHknKS50by5iZS5mYWxzZVxuXG5cblx0XHR0ZXN0IFwiVGVtcGxhdGVzIGNhbiBiZSBjcmVhdGVkIGZyb20gRE9NIEVsZW1lbnRzXCIsICgpLT5cblx0XHRcdHNlY3Rpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuXHRcdFx0c2VjdGlvbkVsLmNsYXNzTmFtZSA9ICdzaW5nbGVTZWN0aW9uJ1xuXHRcdFx0c2VjdGlvbkVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlICdTb21lIElubmVyIFRleHQnKVxuXHRcdFx0c2VjdGlvblRlbXBsYXRlID0gRG9tLnRlbXBsYXRlKHNlY3Rpb25FbClcblx0XHRcdHRlbXBsYXRlU3Bhd24gPSBzZWN0aW9uVGVtcGxhdGUuc3Bhd24oKVxuXG5cdFx0XHRleHBlY3QodGVtcGxhdGVTcGF3bi5lbCkubm90LnRvLmVxdWFsKHNlY3Rpb25FbClcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZVNwYXduLmVsLmNsYXNzTmFtZSkudG8uZXF1YWwoJ3NpbmdsZVNlY3Rpb24nKVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlU3Bhd24udGV4dCkudG8uZXF1YWwoJ1NvbWUgSW5uZXIgVGV4dCcpXG5cblxuXHRcdHRlc3QgXCJUZW1wbGF0ZXMgYXJlIGltbXV0YWJsZVwiLCAoKS0+XG5cdFx0XHR0ZW1wbGF0ZSA9IERvbS50ZW1wbGF0ZShbJ2RpdicsIGNsYXNzTmFtZTonc29tZS1kaXYnLCAnU29tZSBJbm5lciBUZXh0J10pXG5cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS50eXBlKS50by5lcXVhbCAnZGl2J1xuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLm9wdGlvbnMpLnRvLmVxbCB7Y2xhc3NOYW1lOidzb21lLWRpdid9XG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAxXG5cdFx0XHRcblx0XHRcdHRlbXBsYXRlLnR5cGUgPSAnc3Bhbidcblx0XHRcdHRlbXBsYXRlLm9wdGlvbnMgPSB7Y2xhc3NOYW1lOidzb21lLWRpdicsIGlkOid0YWcnfVxuXHRcdFx0dGVtcGxhdGUuY2hpbGRyZW4gPSBbJ2Fub3RoZXInLCAnb25lJ11cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS50eXBlKS50by5lcXVhbCAnZGl2J1xuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLm9wdGlvbnMpLnRvLmVxbCB7Y2xhc3NOYW1lOidzb21lLWRpdid9XG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAxXG5cblxuXHRcdHRlc3QgXCJUZW1wbGF0ZXMgY2FuIGJlIGV4dGVuZGVkIHZpYSB0ZW1wbGF0ZS5leHRlbmRcIiwgKCktPlxuXHRcdFx0d2luZG93LnRlbXBsYXRlID0gRG9tLnRlbXBsYXRlKFsnZGl2JywgY2xhc3NOYW1lOidzb21lLWRpdicsICdTb21lIElubmVyIFRleHQnXSlcblx0XHRcdHdpbmRvdy50ZW1wbGF0ZUNvcHlBID0gdGVtcGxhdGUuZXh0ZW5kIHt0eXBlOidzcGFuJywgb3B0aW9uczp7Y2xhc3NOYW1lOidzb21lLXNwYW4nfSwgY2hpbGRyZW46W119XG5cdFx0XHR3aW5kb3cudGVtcGxhdGVDb3B5QiA9IHRlbXBsYXRlLmV4dGVuZCB7b3B0aW9uczp7aWQ6J3RoZU1haW5EaXYnfSwgY2hpbGRyZW46WydUaGUgT3RoZXIgSW5uZXIgVGV4dCddfVxuXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5QSkubm90LnRvLmVxdWFsKHRlbXBsYXRlKVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weUIpLm5vdC50by5lcXVhbCh0ZW1wbGF0ZSlcblx0XHRcdHNwYXduID0gdGVtcGxhdGUuc3Bhd24oKVxuXHRcdFx0c3Bhd25BID0gdGVtcGxhdGVDb3B5QS5zcGF3bigpXG5cdFx0XHRzcGF3bkIgPSB0ZW1wbGF0ZUNvcHlCLnNwYXduKClcblxuXHRcdFx0ZXhwZWN0KHNwYXduLmVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpLnRvLmVxdWFsKCdkaXYnKVxuXHRcdFx0ZXhwZWN0KHNwYXduLmVsLmNsYXNzTmFtZSkudG8uZXF1YWwoJ3NvbWUtZGl2Jylcblx0XHRcdGV4cGVjdChzcGF3bi5lbC5pZCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3Qoc3Bhd24udGV4dCkudG8uZXF1YWwoJ1NvbWUgSW5uZXIgVGV4dCcpXG5cblx0XHRcdGV4cGVjdChzcGF3bkEuZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkudG8uZXF1YWwoJ3NwYW4nKVxuXHRcdFx0ZXhwZWN0KHNwYXduQS5lbC5jbGFzc05hbWUpLnRvLmVxdWFsKCdzb21lLXNwYW4nKVxuXHRcdFx0ZXhwZWN0KHNwYXduQS5lbC5pZCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3Qoc3Bhd25BLnRleHQpLnRvLmVxdWFsKCdTb21lIElubmVyIFRleHQnKVxuXG5cdFx0XHRleHBlY3Qoc3Bhd25CLmVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpLnRvLmVxdWFsKCdkaXYnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQi5lbC5jbGFzc05hbWUpLnRvLmVxdWFsKCdzb21lLWRpdicpXG5cdFx0XHRleHBlY3Qoc3Bhd25CLmVsLmlkKS50by5lcXVhbCgndGhlTWFpbkRpdicpXG5cdFx0XHRleHBlY3Qoc3Bhd25CLnRleHQpLnRvLmVxdWFsKCdUaGUgT3RoZXIgSW5uZXIgVGV4dCcpXG5cblxuXHRcdHRlc3QgXCJUZW1wbGF0ZXMgY2FuIGJlIHNwYXduZWQgdmlhIGV4dGVuZGVkIGNvbmZpZyBieSBwYXNzaW5nIGEgbmV3IGNvbmZpZyBvYmplY3QgdG8gdGVtcGxhdGUuc3Bhd24oKVwiLCAoKS0+XG5cdFx0XHR0ZW1wbGF0ZSA9IERvbS50ZW1wbGF0ZShcblx0XHRcdFx0WydkaXYnLCBjbGFzc05hbWU6J3NvbWUtZGl2Jyxcblx0XHRcdFx0XHQnU29tZSBJbm5lciBUZXh0Jyxcblx0XHRcdFx0XHRbJ3N0cm9uZycsIHtjbGFzc05hbWU6J2hpZ2hsaWdodGVkJywgc3R5bGU6e29wYWNpdHk6MC45fX0sICcgLSBCb2xkZWQgVGV4dCddXG5cdFx0XHRcdF1cblx0XHRcdClcblx0XHRcdHNwYXduUmF3ID0gdGVtcGxhdGUuc3Bhd24oKVxuXHRcdFx0c3Bhd25BID0gdGVtcGxhdGUuc3Bhd24odHlwZTonc2VjdGlvbicsIG9wdGlvbnM6e2NsYXNzTmFtZTonc29tZS1zZWN0aW9uJywgc3R5bGU6e29wYWNpdHk6MC43fX0pXG5cdFx0XHRzcGF3bkIgPSB0ZW1wbGF0ZS5zcGF3bihcblx0XHRcdFx0b3B0aW9uczpcblx0XHRcdFx0XHRjbGFzc05hbWU6ICdtYWluLWRpdidcblx0XHRcdFx0XHRpZDogJ3RoZU1haW5EaXYnXG5cdFx0XHRcdFx0c3R5bGU6IG9wYWNpdHk6IDAuNVxuXHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICdzcGFuJ1xuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0dHlwZTondGV4dCdcblx0XHRcdFx0XHRcdFx0b3B0aW9uczoge3RleHQ6ICdNYWluIElubmVyIFRleHQnfVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAnYidcblx0XHRcdFx0XHRcdG9wdGlvbnM6XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ3N1cGVyLWhpZ2hsaWdodGVkJ1xuXHRcdFx0XHRcdFx0XHRzdHlsZTogb3BhY2l0eTogJzAuMidcblx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHt0ZXh0OiAnIC0gVmVyeSBCb2xkZWQgVGV4dCd9XG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0J1xuXHRcdFx0XHRcdFx0b3B0aW9uczoge3RleHQ6ICcgKyBPdGhlciBUZXh0J31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdClcblxuXHRcdFx0ZXhwZWN0KHNwYXduUmF3LmVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpLnRvLmVxdWFsKCdkaXYnKVxuXHRcdFx0ZXhwZWN0KHNwYXduUmF3LmVsLmNsYXNzTmFtZSkudG8uZXF1YWwoJ3NvbWUtZGl2Jylcblx0XHRcdGV4cGVjdChzcGF3blJhdy5lbC5pZCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3Qoc3Bhd25SYXcudGV4dCkudG8uZXF1YWwoJ1NvbWUgSW5uZXIgVGV4dCAtIEJvbGRlZCBUZXh0Jylcblx0XHRcdGV4cGVjdChzcGF3blJhdy5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChzcGF3blJhdy5lbC5jaGlsZE5vZGVzLmxlbmd0aCkudG8uZXF1YWwoMilcblx0XHRcdGV4cGVjdChzcGF3blJhdy5lbC5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lKS50by5lcXVhbCgnI3RleHQnKVxuXHRcdFx0ZXhwZWN0KHNwYXduUmF3LmVsLmNoaWxkTm9kZXNbMV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkudG8uZXF1YWwoJ3N0cm9uZycpXG5cdFx0XHRleHBlY3Qoc3Bhd25SYXcuZWwuY2hpbGROb2Rlc1sxXS5jbGFzc05hbWUpLnRvLmVxdWFsKCdoaWdobGlnaHRlZCcpXG5cdFx0XHRleHBlY3Qoc3Bhd25SYXcuZWwuY2hpbGROb2Rlc1sxXS5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnMC45JylcblxuXHRcdFx0ZXhwZWN0KHNwYXduQS5lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKS50by5lcXVhbCgnc2VjdGlvbicpXG5cdFx0XHRleHBlY3Qoc3Bhd25BLmVsLmNsYXNzTmFtZSkudG8uZXF1YWwoJ3NvbWUtc2VjdGlvbicpXG5cdFx0XHRleHBlY3Qoc3Bhd25BLmVsLmlkKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChzcGF3bkEudGV4dCkudG8uZXF1YWwoJ1NvbWUgSW5uZXIgVGV4dCAtIEJvbGRlZCBUZXh0Jylcblx0XHRcdGV4cGVjdChzcGF3bkEuZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJzAuNycpXG5cdFx0XHRleHBlY3Qoc3Bhd25BLmVsLmNoaWxkTm9kZXMubGVuZ3RoKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KHNwYXduQS5lbC5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lKS50by5lcXVhbCgnI3RleHQnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQS5lbC5jaGlsZE5vZGVzWzFdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpLnRvLmVxdWFsKCdzdHJvbmcnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQS5lbC5jaGlsZE5vZGVzWzFdLmNsYXNzTmFtZSkudG8uZXF1YWwoJ2hpZ2hsaWdodGVkJylcblx0XHRcdGV4cGVjdChzcGF3bkEuZWwuY2hpbGROb2Rlc1sxXS5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnMC45JylcblxuXHRcdFx0ZXhwZWN0KHNwYXduQi5lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKS50by5lcXVhbCgnZGl2Jylcblx0XHRcdGV4cGVjdChzcGF3bkIuZWwuY2xhc3NOYW1lKS50by5lcXVhbCgnbWFpbi1kaXYnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQi5lbC5pZCkudG8uZXF1YWwoJ3RoZU1haW5EaXYnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQi50ZXh0KS50by5lcXVhbCgnTWFpbiBJbm5lciBUZXh0IC0gVmVyeSBCb2xkZWQgVGV4dCArIE90aGVyIFRleHQnKVxuXHRcdFx0ZXhwZWN0KHNwYXduQi5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnMC41Jylcblx0XHRcdGV4cGVjdChzcGF3bkIuZWwuY2hpbGROb2Rlcy5sZW5ndGgpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3Qoc3Bhd25CLmVsLmNoaWxkTm9kZXNbMF0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkudG8uZXF1YWwoJ3NwYW4nKVxuXHRcdFx0ZXhwZWN0KHNwYXduQi5lbC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXMubGVuZ3RoKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KHNwYXduQi5lbC5jaGlsZE5vZGVzWzFdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpLnRvLmVxdWFsKCdiJylcblx0XHRcdGV4cGVjdChzcGF3bkIuZWwuY2hpbGROb2Rlc1sxXS5jbGFzc05hbWUpLnRvLmVxdWFsKCdzdXBlci1oaWdobGlnaHRlZCcpXG5cdFx0XHRleHBlY3Qoc3Bhd25CLmVsLmNoaWxkTm9kZXNbMV0uc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoJzAuMicpXG5cblxuXHRcdHRlc3QgXCJUZW1wbGF0ZS5leHRlbmQvc3Bhd24oKSBjYW4gYWNjZXB0IGEgdGVtcGxhdGUgdHJlZSBhcnJheVwiLCAoKS0+XG5cdFx0XHR0ZW1wbGF0ZSA9IERvbS50ZW1wbGF0ZSBbJ2RpdicsIHN0eWxlOnsnb3BhY2l0eSc6MC41fSwgWydzcGFuJywgbnVsbCwgJ3RleHQgb2Ygc3BhbiddLCBbJ2RpdicsIG51bGwsICd0ZXh0IG9mIGRpdiddXVxuXHRcdFx0Y2xvbmVBID0gdGVtcGxhdGUuZXh0ZW5kKFsnc2VjdGlvbicsIHN0eWxlOnsnb3BhY2l0eSc6MC44fV0pXG5cdFx0XHRjbG9uZUIgPSB0ZW1wbGF0ZS5leHRlbmQoWydzcGFuJywgbnVsbCwgWydkaXYnXV0pXG5cdFx0XHRjbG9uZUMgPSB0ZW1wbGF0ZS5leHRlbmQoWydzZWN0aW9uJywge2NsYXNzTmFtZTondGhlLXNlY3Rpb24nLCBzdHlsZTp7Y29sb3I6J2JsdWUnfX0sIFsnc2VjdGlvbicsIG51bGwsICd0ZXh0IG9mIHN1YnNlY3Rpb24nXSwgJ2p1c3QgYSB0ZXh0IG5vZGUnXSlcblx0XHRcdHNwYXduID0gdGVtcGxhdGUuc3Bhd24gWydzcGFuJywgc3R5bGU6eyd3aWR0aCc6MTkwLCAnb3BhY2l0eSc6MX0sICdzbyBuaWNlJ11cblxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLnR5cGUpLnRvLmVxdWFsICdkaXYnXG5cdFx0XHRleHBlY3QodGVtcGxhdGUub3B0aW9ucykudG8uZXFsIHtzdHlsZTp7J29wYWNpdHknOjAuNX19XG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAyXG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGRyZW5bMF0udHlwZSkudG8uZXF1YWwgJ3NwYW4nXG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0ub3B0aW9ucy50ZXh0KS50by5lcXVhbCAndGV4dCBvZiBzcGFuJ1xuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLmNoaWxkcmVuWzFdLnR5cGUpLnRvLmVxdWFsICdkaXYnXG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGRyZW5bMV0uY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QodGVtcGxhdGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0ub3B0aW9ucy50ZXh0KS50by5lcXVhbCAndGV4dCBvZiBkaXYnXG5cblx0XHRcdGV4cGVjdChjbG9uZUEudHlwZSkudG8uZXF1YWwgJ3NlY3Rpb24nXG5cdFx0XHRleHBlY3QoY2xvbmVBLm9wdGlvbnMpLnRvLmVxbCB7c3R5bGU6eydvcGFjaXR5JzowLjh9fVxuXHRcdFx0ZXhwZWN0KGNsb25lQS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsIDJcblx0XHRcdGV4cGVjdChjbG9uZUEuY2hpbGRyZW5bMF0udHlwZSkudG8uZXF1YWwgJ3NwYW4nXG5cdFx0XHRleHBlY3QoY2xvbmVBLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KGNsb25lQS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5vcHRpb25zLnRleHQpLnRvLmVxdWFsICd0ZXh0IG9mIHNwYW4nXG5cdFx0XHRleHBlY3QoY2xvbmVBLmNoaWxkcmVuWzFdLnR5cGUpLnRvLmVxdWFsICdkaXYnXG5cdFx0XHRleHBlY3QoY2xvbmVBLmNoaWxkcmVuWzFdLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMVxuXHRcdFx0ZXhwZWN0KGNsb25lQS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5vcHRpb25zLnRleHQpLnRvLmVxdWFsICd0ZXh0IG9mIGRpdidcblxuXHRcdFx0ZXhwZWN0KGNsb25lQi50eXBlKS50by5lcXVhbCAnc3Bhbidcblx0XHRcdGV4cGVjdChjbG9uZUIub3B0aW9ucykudG8uZXFsIHtzdHlsZTp7J29wYWNpdHknOjAuNX19XG5cdFx0XHRleHBlY3QoY2xvbmVCLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMlxuXHRcdFx0ZXhwZWN0KGNsb25lQi5jaGlsZHJlblswXS50eXBlKS50by5lcXVhbCAnZGl2J1xuXHRcdFx0ZXhwZWN0KGNsb25lQi5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjbG9uZUIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0ub3B0aW9ucy50ZXh0KS50by5lcXVhbCAndGV4dCBvZiBzcGFuJ1xuXHRcdFx0ZXhwZWN0KGNsb25lQi5jaGlsZHJlblsxXS50eXBlKS50by5lcXVhbCAnZGl2J1xuXHRcdFx0ZXhwZWN0KGNsb25lQi5jaGlsZHJlblsxXS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsIDFcblx0XHRcdGV4cGVjdChjbG9uZUIuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0ub3B0aW9ucy50ZXh0KS50by5lcXVhbCAndGV4dCBvZiBkaXYnXG5cblx0XHRcdGV4cGVjdChjbG9uZUMudHlwZSkudG8uZXF1YWwgJ3NlY3Rpb24nXG5cdFx0XHRleHBlY3QoY2xvbmVDLm9wdGlvbnMpLnRvLmVxbCB7Y2xhc3NOYW1lOid0aGUtc2VjdGlvbicsIHN0eWxlOnsnb3BhY2l0eSc6MC41LCAnY29sb3InOidibHVlJ319XG5cdFx0XHRleHBlY3QoY2xvbmVDLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMlxuXHRcdFx0ZXhwZWN0KGNsb25lQy5jaGlsZHJlblswXS50eXBlKS50by5lcXVhbCAnc2VjdGlvbidcblx0XHRcdGV4cGVjdChjbG9uZUMuY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCAxXG5cdFx0XHRleHBlY3QoY2xvbmVDLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLm9wdGlvbnMudGV4dCkudG8uZXF1YWwgJ3RleHQgb2Ygc3Vic2VjdGlvbidcblx0XHRcdGV4cGVjdChjbG9uZUMuY2hpbGRyZW5bMV0udHlwZSkudG8uZXF1YWwgJ3RleHQnXG5cdFx0XHRleHBlY3QoY2xvbmVDLmNoaWxkcmVuWzFdLm9wdGlvbnMudGV4dCkudG8uZXF1YWwgJ2p1c3QgYSB0ZXh0IG5vZGUnXG5cblx0XHRcdGV4cGVjdChzcGF3bi5lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKS50by5lcXVhbCAnc3Bhbidcblx0XHRcdGV4cGVjdChzcGF3bi5lbC5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCAnMSdcblx0XHRcdGV4cGVjdChzcGF3bi5lbC5zdHlsZS53aWR0aCkudG8uZXF1YWwgJzE5MHB4J1xuXHRcdFx0ZXhwZWN0KHNwYXduLmVsLmNoaWxkTm9kZXMubGVuZ3RoKS50by5lcXVhbCAyXG5cdFx0XHRleHBlY3Qoc3Bhd24uZWwuY2hpbGROb2Rlc1swXS5ub2RlVHlwZSkudG8uZXF1YWwgM1xuXHRcdFx0ZXhwZWN0KHNwYXduLmVsLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQpLnRvLmVxdWFsICdzbyBuaWNlJ1xuXHRcdFx0ZXhwZWN0KHNwYXduLmVsLmNoaWxkTm9kZXNbMV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkudG8uZXF1YWwgJ2Rpdidcblx0XHRcdGV4cGVjdChzcGF3bi5lbC5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50KS50by5lcXVhbCAndGV4dCBvZiBkaXYnXG5cblxuXHRcdHRlc3QgXCJUZW1wbGF0ZS5leHRlbmQvc3Bhd24oKSBjYW4gYWNjZXB0IG90aGVyIHRlbXBsYXRlIGluc3RhbmNlcyBhcyBjaGlsZHJlbiB3aGljaCB3aWxsIHJlcGxhY2UgZXhpc3RpbmcgY2hpbGRyZW5cIiwgKCktPlxuXHRcdFx0dGVtcGxhdGUgPSBEb20udGVtcGxhdGUgWydkaXYnLCBudWxsLCBbJ3NwYW4nLCB7c3R5bGU6b3BhY2l0eTowLjV9XSwgJ29yaWdpbmFsIHRleHQnXVxuXHRcdFx0Y2hpbGRBID0gRG9tLnRlbXBsYXRlIFsnZGl2Jywge3N0eWxlOmZvbnRGYW1pbHk6J3BpbmsnfV1cblx0XHRcdGNoaWxkQiA9IERvbS50ZW1wbGF0ZSAncmVwbGFjZWQgdGV4dCdcblx0XHRcdGNoaWxkQyA9IERvbS50ZW1wbGF0ZSBbJ3NlY3Rpb24nXVxuXHRcdFx0dGVtcGxhdGVDb3B5ID0gdGVtcGxhdGUuZXh0ZW5kKFsnc3BhbicsIHtzdHlsZTpmb250U2l6ZTonNzdweCd9LCBjaGlsZEEsIGNoaWxkQiwgY2hpbGRDXSlcblx0XHRcdHNwYXduZWRBID0gdGVtcGxhdGUuc3Bhd24oKVxuXHRcdFx0c3Bhd25lZEIgPSB0ZW1wbGF0ZUNvcHkuc3Bhd24oKVxuXHRcdFx0c3Bhd25lZEMgPSB0ZW1wbGF0ZS5zcGF3bihbJ3NwYW4nLCB7c3R5bGU6Zm9udFNpemU6Jzc3cHgnfSwgY2hpbGRBLCBjaGlsZEIsIGNoaWxkQ10pXG5cblx0XHRcdGV4cGVjdChzcGF3bmVkQS50eXBlKS50by5lcXVhbCgnZGl2Jylcblx0XHRcdGV4cGVjdChzcGF3bmVkQS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEEuY2hpbGRyZW5bMF0udHlwZSkudG8uZXF1YWwoJ3NwYW4nKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRBLmNoaWxkcmVuWzBdLnJhdy5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnMC41Jylcblx0XHRcdGV4cGVjdChzcGF3bmVkQS5jaGlsZHJlblswXS5yYXcuc3R5bGUuZm9udEZhbWlseSkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEEuY2hpbGRyZW5bMV0udHlwZSkudG8uZXF1YWwoJ3RleHQnKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRBLnRleHQpLnRvLmVxdWFsKCdvcmlnaW5hbCB0ZXh0JylcblxuXHRcdFx0ZXhwZWN0KHNwYXduZWRCLnR5cGUpLnRvLmVxdWFsKCdzcGFuJylcblx0XHRcdGV4cGVjdChzcGF3bmVkQi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEIuY2hpbGRyZW5bMF0udHlwZSkudG8uZXF1YWwoJ2RpdicpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEIuY2hpbGRyZW5bMF0ucmF3LnN0eWxlLm9wYWNpdHkpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRCLmNoaWxkcmVuWzBdLnJhdy5zdHlsZS5mb250RmFtaWx5KS50by5lcXVhbCgncGluaycpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEIuY2hpbGRyZW5bMV0udHlwZSkudG8uZXF1YWwoJ3RleHQnKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRCLnRleHQpLnRvLmVxdWFsKCdyZXBsYWNlZCB0ZXh0Jylcblx0XHRcdGV4cGVjdChzcGF3bmVkQi5jaGlsZHJlblsyXS50eXBlKS50by5lcXVhbCgnc2VjdGlvbicpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEIucmF3LnN0eWxlLmZvbnRTaXplKS50by5lcXVhbCgnNzdweCcpXG5cblx0XHRcdGV4cGVjdChzcGF3bmVkQy50eXBlKS50by5lcXVhbCgnc3BhbicpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEMuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgzKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRDLmNoaWxkcmVuWzBdLnR5cGUpLnRvLmVxdWFsKCdkaXYnKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRDLmNoaWxkcmVuWzBdLnJhdy5zdHlsZS5vcGFjaXR5KS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChzcGF3bmVkQy5jaGlsZHJlblswXS5yYXcuc3R5bGUuZm9udEZhbWlseSkudG8uZXF1YWwoJ3BpbmsnKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRDLmNoaWxkcmVuWzFdLnR5cGUpLnRvLmVxdWFsKCd0ZXh0Jylcblx0XHRcdGV4cGVjdChzcGF3bmVkQy50ZXh0KS50by5lcXVhbCgncmVwbGFjZWQgdGV4dCcpXG5cdFx0XHRleHBlY3Qoc3Bhd25lZEMuY2hpbGRyZW5bMl0udHlwZSkudG8uZXF1YWwoJ3NlY3Rpb24nKVxuXHRcdFx0ZXhwZWN0KHNwYXduZWRDLnJhdy5zdHlsZS5mb250U2l6ZSkudG8uZXF1YWwoJzc3cHgnKVxuXG5cblxuXHRcdHRlc3QgXCJUZW1wbGF0ZXMgY2FuIGhhdmUgb3RoZXIgdGVtcGxhdGVzIGFzIHRoZWlyIGNoaWxkcmVuXCIsICgpLT5cblx0XHRcdGhlYWRlclRlbXBsYXRlID0gRG9tLnRlbXBsYXRlIFsnaGVhZGVyJywge3N0eWxlOidoZWlnaHQnOicyMDBweCd9LFxuXHRcdFx0XHRbJ3NwYW4nLCB7c3R5bGU6J3RleHRBbGlnbic6J2NlbnRlcid9LCAnVGhpcyBpcyBib2xkZWQgdGV4dCddXG5cdFx0XHRcdCcgd2hpbGUgdGhpcyBpcyBub3QnXG5cdFx0XHRdXG5cdFx0XHRoZWFkZXJUZW1wbGF0ZUNsb25lID0gRG9tLnRlbXBsYXRlKGhlYWRlclRlbXBsYXRlKVxuXHRcdFx0c2VjdGlvblRlbXBsYXRlID0gRG9tLnRlbXBsYXRlIFsnc2VjdGlvbicsIG51bGwsIGhlYWRlclRlbXBsYXRlXVxuXHRcdFx0c2VjdGlvbiA9IHNlY3Rpb25UZW1wbGF0ZS5zcGF3bigpLmFwcGVuZFRvKHNhbmRib3gpXG5cblx0XHRcdGV4cGVjdChoZWFkZXJUZW1wbGF0ZUNsb25lKS5ub3QudG8uZXF1YWwoaGVhZGVyVGVtcGxhdGUpXG5cdFx0XHRleHBlY3Qoc2VjdGlvblRlbXBsYXRlLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwoMSlcblx0XHRcdGV4cGVjdChzZWN0aW9uVGVtcGxhdGUuY2hpbGRyZW5bMF0pLm5vdC50by5lcXVhbChoZWFkZXJUZW1wbGF0ZSlcblx0XHRcdGV4cGVjdChzZWN0aW9uVGVtcGxhdGUuY2hpbGRyZW5bMF0uY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW5bMF0udHlwZSkudG8uZXF1YWwoJ2hlYWRlcicpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi50ZXh0KS50by5lcXVhbCgnVGhpcyBpcyBib2xkZWQgdGV4dCB3aGlsZSB0aGlzIGlzIG5vdCcpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5zdHlsZSgndGV4dEFsaWduJykpLnRvLmVxdWFsKCdjZW50ZXInKVxuXG5cblx0XHR0ZXN0IFwiQSBnbG9iYWwgb3B0aW9ucyBvYmplY3QgY2FuIGJlIHBhc3NlZCBhcyB0aGUgMm5kIGFyZyB0byB0ZW1wbGF0ZS5leHRlbmQvc3Bhd24oKSB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIHRlbXBsYXRlcywgc3Bhd25zLCAmIHRoZWlyIGNoaWxkcmVuXCIsICgpLT5cblx0XHRcdG9iaiA9IG15SGVpZ2h0OicxNTBweCdcblx0XHRcdGR5bmFtaWNIZWlnaHRTdHlsZSA9ICdoZWlnaHQnOiAocmVsYXRlZCktPiBleHBlY3QocmVsYXRlZCkudG8uZXF1YWwob2JqKTsgcmVsYXRlZC5teUhlaWdodFxuXHRcdFx0XG5cdFx0XHRoZWFkZXJUZW1wbGF0ZSA9IERvbS50ZW1wbGF0ZSBbJ2hlYWRlcicsIHtzdHlsZTond2lkdGgnOicyM3B4J30sXG5cdFx0XHRcdFsnZGl2Jywge3N0eWxlOid3aWR0aCc6JzIzcHgnfSwgJ1RoaXMgaXMgYm9sZGVkIHRleHQnXVxuXHRcdFx0XHQnIHdoaWxlIHRoaXMgaXMgbm90J1xuXHRcdFx0XVxuXHRcdFx0c2VjdGlvblRlbXBsYXRlID0gRG9tLnRlbXBsYXRlIFsnc2VjdGlvbicsIHtzdHlsZTond2lkdGgnOicyM3B4J30sIGhlYWRlclRlbXBsYXRlXVxuXHRcdFx0c2VjdGlvbiA9IHNlY3Rpb25UZW1wbGF0ZS5zcGF3bih7b3B0aW9uczp7cmVsYXRlZEluc3RhbmNlOndpbmRvd319LCB7cmVsYXRlZEluc3RhbmNlOm9iaiwgc3R5bGU6ZHluYW1pY0hlaWdodFN0eWxlfSkuYXBwZW5kVG8oc2FuZGJveClcblxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24ucmF3LnN0eWxlLmhlaWdodCkudG8uZXF1YWwoJzE1MHB4Jylcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuWzBdLnJhdy5zdHlsZS5oZWlnaHQpLnRvLmVxdWFsKCcxNTBweCcpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5yYXcuc3R5bGUuaGVpZ2h0KS50by5lcXVhbCgnMTUwcHgnKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24ucmF3LnN0eWxlLndpZHRoKS50by5lcXVhbCgnJylcblx0XHRcdGV4cGVjdChzZWN0aW9uLmNoaWxkcmVuWzBdLnJhdy5zdHlsZS53aWR0aCkudG8uZXF1YWwoJycpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5yYXcuc3R5bGUud2lkdGgpLnRvLmVxdWFsKCcnKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb24uY2hpbGRyZW5bMF0udHlwZSkudG8uZXF1YWwoJ2hlYWRlcicpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDIpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbi50ZXh0KS50by5lcXVhbCgnVGhpcyBpcyBib2xkZWQgdGV4dCB3aGlsZSB0aGlzIGlzIG5vdCcpXG5cblxuXHRcdHRlc3QgXCJUZW1wbGF0ZSBjaGlsZHJlbiBjYW4gYmUgbmF2aWdhdGVkIGJ5IHJlZiB1c2luZyB0aGUgLmNoaWxkIHByb3BlcnR5XCIsICgpLT5cblx0XHRcdHRlbXBsYXRlID0gXG5cdFx0XHRcdERvbS50ZW1wbGF0ZSBbJ2RpdicsIHtpZDonZGl2QSd9LFxuXHRcdFx0XHRcdFsnZGl2Jywge2lkOidjaGlsZEEnfSxcblx0XHRcdFx0XHRcdFsnc3BhbicsIHtyZWY6J2NoaWxkQV8xJ31dXG5cdFx0XHRcdFx0XHRbJ2RpdicsIHtyZWY6J2NoaWxkQV8yJywgaWQ6J2NoaWxkQV8yJ31dXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFsnZGl2JywgbnVsbCwgXG5cdFx0XHRcdFx0XHRbJ3NwYW4nLCB7cmVmOidjaGlsZEJfMSd9XVxuXHRcdFx0XHRcdFx0Wyd0ZXh0Jywge2lkOidjaGlsZEJfMicsIHRleHQ6J1RoZSBUZXh0J31dXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHRdXG5cblx0XHRcdGV4cGVjdCh0eXBlb2YgdGVtcGxhdGUuY2hpbGQpLnRvLmVxdWFsICdvYmplY3QnXG5cdFx0XHRleHBlY3QoT2JqZWN0LmtleXModGVtcGxhdGUuY2hpbGQpLmxlbmd0aCkudG8uZXF1YWwoNilcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS5jaGlsZC5kaXZBKS50by5lcXVhbCB0ZW1wbGF0ZVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLmNoaWxkLmNoaWxkQS50eXBlKS50by5lcXVhbCAnZGl2J1xuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlLmNoaWxkLmNoaWxkQSkudG8uZXF1YWwgdGVtcGxhdGUuY2hpbGRyZW5bMF1cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS5jaGlsZC5jaGlsZEFfMSkudG8uZXF1YWwgdGVtcGxhdGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF1cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS5jaGlsZC5jaGlsZEFfMikudG8uZXF1YWwgdGVtcGxhdGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV1cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS5jaGlsZC5jaGlsZEJfMSkudG8uZXF1YWwgdGVtcGxhdGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF1cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZS5jaGlsZC5jaGlsZEJfMikudG8uZXF1YWwgdGVtcGxhdGUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV1cblxuXHRcdFx0cmVuZGVyZWQgPSB0ZW1wbGF0ZS5zcGF3bigpXG5cdFx0XHRleHBlY3QocmVuZGVyZWQuY2hpbGQuY2hpbGRCXzIpLnRvLmVxdWFsIHJlbmRlcmVkLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdXG5cdFx0XHRleHBlY3QocmVuZGVyZWQudGV4dCkudG8uZXF1YWwoJ1RoZSBUZXh0JylcblxuXG5cdFx0dGVzdCBcIlRlbXBsYXRlJ3MgY2hpbGRyZW4gY2FuIGJlIGV4dGVuZC9zcGF3bmVkIHdpdGggYSB7cmVmOm5ld0NoaWxkfSBtYXAgaW5zdGVhZCBvZiBhIHBvc2l0aW9uYWwgYXJyYXlcIiwgKCktPlxuXHRcdFx0dGVtcGxhdGVNYWluID0gXG5cdFx0XHRcdERvbS50ZW1wbGF0ZSBbJ2RpdicsIHtpZDonZGl2QSd9LFxuXHRcdFx0XHRcdFsnZGl2Jywge2lkOidjaGlsZEEnfSxcblx0XHRcdFx0XHRcdFsnc3BhbicsIHtyZWY6J2NoaWxkQV8xJ31dXG5cdFx0XHRcdFx0XHRbJ2RpdicsIHtyZWY6J2NoaWxkQV8yJywgaWQ6J2NoaWxkQV8yJ31dXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFsnZGl2JywgbnVsbCwgXG5cdFx0XHRcdFx0XHRbJ3NwYW4nLCB7cmVmOidjaGlsZEJfMSd9XVxuXHRcdFx0XHRcdFx0Wyd0ZXh0Jywge2lkOidjaGlsZEJfMicsIHRleHQ6J1RoZSBUZXh0J31dXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHRdXG5cdFx0XHR0ZW1wbGF0ZUNvcHkgPSB0ZW1wbGF0ZU1haW4uZXh0ZW5kIFsnc2VjdGlvbicsIG51bGwsIFxuXHRcdFx0XHRjaGlsZEE6XG5cdFx0XHRcdFx0dHlwZTogJ2Zvcm0nXG5cdFx0XHRcdFx0b3B0aW9uczpcblx0XHRcdFx0XHRcdHN0eWxlOiBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuXHRcdFx0XHRjaGlsZEFfMjpcblx0XHRcdFx0XHRbJ2EnLCB7aWQ6J0NISUxEYV8yJywgaHJlZjonaHR0cDovL2dvb2dsZS5jb20nfSxcblx0XHRcdFx0XHRcdFsndGV4dCcsIHtyZWY6J2NoaWxkQV8yXzEnLCB0ZXh0OidOZXcgVGV4dCd9XVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0Y2hpbGRDOlxuXHRcdFx0XHRcdFsnZGl2JywgcmVmOidjaGlsZEQnXVxuXHRcdFx0XSwge3ZhbHVlOid0aGVWYWx1ZSd9XG5cblx0XHRcdGV4cGVjdCh0eXBlb2YgdGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkQV8yXzEpLm5vdC50by5lcXVhbCAndW5kZWZpbmVkJ1xuXHRcdFx0ZXhwZWN0KE9iamVjdC5rZXlzKHRlbXBsYXRlTWFpbi5jaGlsZCkubGVuZ3RoKS50by5lcXVhbCg2KVxuXHRcdFx0ZXhwZWN0KE9iamVjdC5rZXlzKHRlbXBsYXRlQ29weS5jaGlsZCkubGVuZ3RoKS50by5lcXVhbCg4KVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDMpXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmRpdkEpLnRvLmVxdWFsIHRlbXBsYXRlQ29weVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEEpLnRvLmVxdWFsIHRlbXBsYXRlQ29weS5jaGlsZHJlblswXVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEEudHlwZSkudG8uZXF1YWwgJ2Zvcm0nXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkQV8xKS50by5lcXVhbCB0ZW1wbGF0ZUNvcHkuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF1cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuY2hpbGRBXzIpLnRvLmVxdWFsIHVuZGVmaW5lZFxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5DSElMRGFfMikudG8uZXF1YWwgdGVtcGxhdGVDb3B5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkQV8yXzEpLnRvLmVxdWFsIHRlbXBsYXRlQ29weS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXVxuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEFfMl8xLm9wdGlvbnMudGV4dCkudG8uZXF1YWwgJ05ldyBUZXh0J1xuXHRcdFx0ZXhwZWN0KHRlbXBsYXRlQ29weS5jaGlsZC5jaGlsZEJfMSkudG8uZXF1YWwgdGVtcGxhdGVDb3B5LmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdXG5cdFx0XHRleHBlY3QodGVtcGxhdGVDb3B5LmNoaWxkLmNoaWxkQl8yKS50by5lcXVhbCB0ZW1wbGF0ZUNvcHkuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV1cblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuY2hpbGRDKS50by5lcXVhbCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUNvcHkuY2hpbGQuY2hpbGREKS50by5lcXVhbCB0ZW1wbGF0ZUNvcHkuY2hpbGRyZW5bMl1cblxuXHRcdFx0cmVuZGVyZWQgPSB0ZW1wbGF0ZUNvcHkuc3Bhd24oKVxuXHRcdFx0ZXhwZWN0KE9iamVjdC5rZXlzKHJlbmRlcmVkLmNoaWxkKS5sZW5ndGgpLnRvLmVxdWFsKDgpXG5cdFx0XHRleHBlY3QocmVuZGVyZWQuY2hpbGQuY2hpbGRCXzIpLnRvLmVxdWFsIHJlbmRlcmVkLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdXG5cdFx0XHRleHBlY3QocmVuZGVyZWQuY2hpbGQuY2hpbGRBLnJhdy5zdHlsZS5kaXNwbGF5KS50by5lcXVhbCAnaW5saW5lLWJsb2NrJ1xuXHRcdFx0ZXhwZWN0KHJlbmRlcmVkLmNoaWxkLkNISUxEYV8yLnByb3AoJ2hyZWYnKSkudG8uY29udGFpbiAnaHR0cDovL2dvb2dsZS5jb20nXG5cdFx0XHRleHBlY3QocmVuZGVyZWQuY2hpbGQuY2hpbGRCXzEucHJvcCgndmFsdWUnKSkudG8uZXF1YWwoJ3RoZVZhbHVlJylcblx0XHRcdGV4cGVjdChyZW5kZXJlZC5jaGlsZC5jaGlsZEQuYXR0cignZGF0YS1yZWYnKSkudG8uZXF1YWwoJ2NoaWxkRCcpXG5cblxuXHRcdHRlc3QgXCJXaGVuIHNwYXduaW5nIGVsZW1lbnRzIHRoZSBvcHRpb25zIG9iamVjdCBwYXNzZWQgdG8gdGhlIHNwYXducyBzaG91bGQgYmUgYSBjbG9uZSBvZiB0aGUgdGVtcGxhdGUncyBvcHRpb25zXCIsICgpLT5cblx0XHRcdHRlbXBsYXRlQSA9IERvbS50ZW1wbGF0ZSBbJ2RpdicsIHN0eWxlOntkaXNwbGF5OidibG9jayd9XVxuXHRcdFx0dGVtcGxhdGVCID0gRG9tLnRlbXBsYXRlIFsnZGl2Jywgc3R5bGU6e2Rpc3BsYXk6J2Jsb2NrJ31dXG5cdFx0XHRzcGF3bkEgPSB0ZW1wbGF0ZUEuc3Bhd24ocmVmOidhJykgIyBQYXNzZWQgb3B0aW9ucyB0byBtZXJnZSB3aXRoIG9yaWdcblx0XHRcdHNwYXduQiA9IHRlbXBsYXRlQS5zcGF3bigpXG5cblx0XHRcdGV4cGVjdChzcGF3bkEub3B0aW9ucykubm90LnRvLmVxdWFsKHRlbXBsYXRlQS5vcHRpb25zKVxuXHRcdFx0ZXhwZWN0KHNwYXduQS5vcHRpb25zLnN0eWxlKS5ub3QudG8uZXF1YWwodGVtcGxhdGVBLm9wdGlvbnMuc3R5bGUpXG5cdFx0XHRleHBlY3QodGVtcGxhdGVBLm9wdGlvbnMuc3R5bGUuJGJhc2UpLnRvLmVxdWFsKHVuZGVmaW5lZClcblxuXHRcdFx0ZXhwZWN0KHNwYXduQi5vcHRpb25zKS5ub3QudG8uZXF1YWwodGVtcGxhdGVCLm9wdGlvbnMpXG5cdFx0XHRleHBlY3Qoc3Bhd25CLm9wdGlvbnMuc3R5bGUpLm5vdC50by5lcXVhbCh0ZW1wbGF0ZUIub3B0aW9ucy5zdHlsZSlcblx0XHRcdGV4cGVjdCh0ZW1wbGF0ZUIub3B0aW9ucy5zdHlsZS4kYmFzZSkudG8uZXF1YWwodW5kZWZpbmVkKVxuXG5cblxuXHRzdWl0ZSBcIk1pc2NcIiwgKCktPlxuXHRcdHRlc3QgXCJTdHJpbmdpZmljYXRpb25cIiwgKCktPlxuXHRcdFx0c2VjdGlvbiA9IERvbSBbJ3NlY3Rpb24nLHtcblx0XHRcdFx0XHRpZDogJ3RoZVNlY3Rpb24nXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAndGhlU2VjdGlvbkNsYXNzJ1xuXHRcdFx0XHRcdHN0eWxlOlxuXHRcdFx0XHRcdFx0J3Bvc2l0aW9uJzogJ3JlbGF0aXZlJ1xuXHRcdFx0XHRcdFx0J29wYWNpdHknOiAwLjVcblx0XHRcdFx0XHRcdCdmb250U2l6ZSc6ICgpLT4gJzI5cHgnXG5cdFx0XHRcdFx0XHQkaGFwcHk6XG5cdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMTFweCdcblx0XHRcdFx0XHRcdFx0JHJlbGF4ZWQ6XG5cdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICc4cHgnXG5cdFx0XHRcdH1cblx0XHRcdFx0XHRbJ2RpdicsIHtpZDonY2hpbGRBJywgc3R5bGU6cG9zaXRpb246J3JlbGF0aXZlJ30sICdjaGlsZEEtaW5uZXJ0ZXh0J11cblx0XHRcdFx0XHQnc2VjdGlvbi1pbm5lcnRleHQnXG5cdFx0XHRcdFx0WydzcGFuJywge2lkOidjaGlsZEInLCByZWY6J2NoaWxkQi1yZWYhJywgc3R5bGU6cG9zaXRpb246J2Fic29sdXRlJ31cblx0XHRcdFx0XHRcdCdjaGlsZEItaW5uZXJ0ZXh0J1xuXHRcdFx0XHRcdFx0Wyd0ZXh0Jywge3RleHQ6J2NoaWxkQi1pbm5lcnRleHQgMid9XVxuXHRcdFx0XHRcdFx0WydhJywge3VybDonaHR0cHM6Ly9nb29nbGUuY29tJ31dXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHRdXG5cdFx0XHR3aW5kb3cuc3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeShzZWN0aW9uLCBudWxsLCAyKVxuXHRcdFx0c2VjdGlvbkNvcHkgPSBEb20gSlNPTi5wYXJzZShzdHJpbmdpZmllZClcblxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LnR5cGUpLnRvLmVxdWFsKHNlY3Rpb24udHlwZSlcblx0XHRcdGV4cGVjdChzZWN0aW9uQ29weS5yZWYpLnRvLmVxdWFsKHNlY3Rpb24ucmVmKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LmVsLmlkKS50by5lcXVhbChzZWN0aW9uLmVsLmlkKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LmVsLmNsYXNzTmFtZSkudG8uZXF1YWwoc2VjdGlvbi5lbC5jbGFzc05hbWUpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbkNvcHkuZWwuc3R5bGUucG9zaXRpb24pLnRvLmVxdWFsKHNlY3Rpb24uZWwuc3R5bGUucG9zaXRpb24pXG5cdFx0XHRleHBlY3Qoc2VjdGlvbkNvcHkuZWwuc3R5bGUub3BhY2l0eSkudG8uZXF1YWwoc2VjdGlvbi5lbC5zdHlsZS5vcGFjaXR5KVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LmVsLnN0eWxlLmZvbnRTaXplKS5ub3QudG8uZXF1YWwoc2VjdGlvbi5lbC5zdHlsZS5mb250U2l6ZSlcblx0XHRcdFxuXHRcdFx0c2VjdGlvbi5zdGF0ZSAnaGFwcHknLCBvblxuXHRcdFx0c2VjdGlvbkNvcHkuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdGV4cGVjdChzZWN0aW9uQ29weS5lbC5zdHlsZS5mb250U2l6ZSkudG8uZXF1YWwoc2VjdGlvbi5lbC5zdHlsZS5mb250U2l6ZSlcblx0XHRcdFxuXHRcdFx0c2VjdGlvbi5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRzZWN0aW9uQ29weS5zdGF0ZSAncmVsYXhlZCcsIG9uXG5cdFx0XHRleHBlY3Qoc2VjdGlvbkNvcHkuZWwuc3R5bGUuZm9udFNpemUpLnRvLmVxdWFsKHNlY3Rpb24uZWwuc3R5bGUuZm9udFNpemUpXG5cdFx0XHRcblx0XHRcdGV4cGVjdChzZWN0aW9uQ29weS5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKHNlY3Rpb24uY2hpbGRyZW4ubGVuZ3RoKVxuXHRcdFx0ZXhwZWN0KE9iamVjdC5rZXlzKHNlY3Rpb25Db3B5LmNoaWxkKS5sZW5ndGgpLnRvLmVxdWFsKE9iamVjdC5rZXlzKHNlY3Rpb24uY2hpbGQpLmxlbmd0aClcblx0XHRcdGV4cGVjdChzZWN0aW9uQ29weS50ZXh0KS50by5lcXVhbChzZWN0aW9uLnRleHQpXG5cdFx0XHRleHBlY3Qoc2VjdGlvbkNvcHkuaHRtbCkudG8uZXF1YWwoc2VjdGlvbi5odG1sKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LmNoaWxkcmVuWzBdLmVsLnN0eWxlLnBvc2l0aW9uKS50by5lcXVhbChzZWN0aW9uLmNoaWxkcmVuWzBdLmVsLnN0eWxlLnBvc2l0aW9uKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LmNoaWxkcmVuWzJdLmVsLnN0eWxlLnBvc2l0aW9uKS50by5lcXVhbChzZWN0aW9uLmNoaWxkcmVuWzJdLmVsLnN0eWxlLnBvc2l0aW9uKVxuXHRcdFx0ZXhwZWN0KHNlY3Rpb25Db3B5LmNoaWxkcmVuWzJdLnJlZikudG8uZXF1YWwoc2VjdGlvbi5jaGlsZHJlblsyXS5yZWYpXG5cblxuXG5cblx0XHR0ZXN0IFwiQ2hhaW5pbmdcIiwgKCktPlxuXHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cdFx0XHRjaGFpblJlc3VsdCA9IGRpdlxuXHRcdFx0XHQub24oJ2FiYycsICgpLT4pXG5cdFx0XHRcdC5lbWl0KCdhYmMnKVxuXHRcdFx0XHQub2ZmKCdhYmMnKVxuXHRcdFx0XHQub2ZmKClcblx0XHRcdFx0LnN0YXRlKCdhYmMnLCBvbilcblx0XHRcdFx0LnJlc2V0U3RhdGUoKVxuXHRcdFx0XHQuc3R5bGUoKVxuXHRcdFx0XHQuY3NzKCd3aWR0aCcsIDEyKVxuXHRcdFx0XHQuYXR0cigndGVzdCcsIDEyMylcblx0XHRcdFx0LnByb3AoJ2Fub3RoZXJUZXN0JywgMTIzKVxuXHRcdFx0XHQuYXBwZW5kKClcblx0XHRcdFx0LmFwcGVuZFRvKClcblx0XHRcdFx0LnByZXBlbmQoKVxuXHRcdFx0XHQucHJlcGVuZFRvKClcblx0XHRcdFx0LmJlZm9yZSgpXG5cdFx0XHRcdC5hZnRlcigpXG5cdFx0XHRcdC5pbnNlcnRCZWZvcmUoKVxuXHRcdFx0XHQuaW5zZXJ0QWZ0ZXIoKVxuXHRcdFx0XHQuZGV0YWNoKClcblx0XHRcdFx0LndyYXAoRG9tLnNlY3Rpb24oKSlcblx0XHRcdFx0LnVud3JhcCgpXG5cdFx0XHRcdC53cmFwKERvbS5oZWFkZXIoKSlcblx0XHRcdFx0LnJlcGxhY2UoKVxuXHRcdFx0XHQuYXBwZW5kVG8oc2FuZGJveClcblx0XHRcdFx0LndyYXAoaGVhZD1Eb20uaGVhZGVyKCkpXG5cblx0XHRcdGV4cGVjdChjaGFpblJlc3VsdCkudG8uZXF1YWwoZGl2KVxuXHRcdFx0ZXhwZWN0KHNhbmRib3guY2hpbGRyZW5bMF0pLnRvLmVxdWFsKGhlYWQuZWwpXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkudG8uZXF1YWwoaGVhZClcblx0XHRcdGV4cGVjdChkaXYuY3NzICd3aWR0aCcpLnRvLmVxdWFsKCcxMnB4JylcblxuXG5cblxuXHRcdHRlc3QgXCJJbnZhbGlkIEFyZ3VtZW50c1wiLCAoKS0+XG5cdFx0XHR0ZXh0ID0gRG9tLnRleHQoJ3NvbWVUZXh0Jywge2xvc3RPcHRzOnRydWV9KVxuXHRcdFx0ZGl2ID0gRG9tLmRpdih7bG9zdE9wdHM6dHJ1ZX0pXG5cblx0XHRcdGV4cGVjdChEb20oKSkudG8uZXF1YWwgdW5kZWZpbmVkXG5cdFx0XHRleHBlY3QoRG9tKG51bGwpKS50by5lcXVhbCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdChEb20oe30pKS50by5lcXVhbCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdChkaXYudXBkYXRlT3B0aW9ucygpKS50by5lcXVhbCBkaXZcblx0XHRcdGV4cGVjdCh0ZXh0Lm9wdGlvbnMubG9zdE9wdHMpLnRvLmVxdWFsIHVuZGVmaW5lZFxuXHRcdFx0ZXhwZWN0KGRpdi5vcHRpb25zLmxvc3RPcHRzKS50by5lcXVhbCB0cnVlXG5cdFx0XHRleHBlY3QoZGl2Lm9uKCkpLnRvLmVxdWFsIGRpdlxuXHRcdFx0ZXhwZWN0KGRpdi5vbignYWJjJykpLnRvLmVxdWFsIGRpdlxuXHRcdFx0ZXhwZWN0KGRpdi5vbignYWJjJywge30pKS50by5lcXVhbCBkaXZcblx0XHRcdGV4cGVjdChkaXYub25jZSgnYWJjJykpLnRvLmVxdWFsIGRpdlxuXHRcdFx0ZXhwZWN0KGRpdi5vZmYoJ3NvbWV0aGluZ0Zha2UnKSkudG8uZXF1YWwgZGl2XG5cblx0XHRcdGVtaXRDb3VudCA9IDA7IGRpdi5vbiAnc29tZXRoaW5nJywgY2I9KCktPiBlbWl0Q291bnQrK1xuXHRcdFx0ZXhwZWN0KGRpdi5lbWl0KCcnKSkudG8uZXF1YWwoZGl2KVxuXHRcdFx0ZXhwZWN0KGRpdi5lbWl0KCkpLnRvLmVxdWFsKGRpdilcblx0XHRcdGV4cGVjdChlbWl0Q291bnQpLnRvLmVxdWFsKDApXG5cdFx0XHRleHBlY3QoZGl2LmVtaXQoJ3NvbWV0aGluZycpKS50by5lcXVhbChkaXYpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCgxKVxuXHRcdFx0ZXhwZWN0KGRpdi5vZmYoJ3NvbWV0aGluZycsICgpLT4pKS50by5lcXVhbChkaXYpXG5cdFx0XHRleHBlY3QoZGl2LmVtaXQoJ3NvbWV0aGluZycpKS50by5lcXVhbChkaXYpXG5cdFx0XHRleHBlY3QoZW1pdENvdW50KS50by5lcXVhbCgyKVxuXHRcdFx0ZXhwZWN0KGRpdi5vbkluc2VydGVkICgpLT4pLnRvLmVxdWFsKGRpdilcblx0XHRcdGV4cGVjdChkaXYub25JbnNlcnRlZCh0cnVlKSkudG8uZXF1YWwodW5kZWZpbmVkKVxuXHRcdFx0ZXhwZWN0KGRpdi5vbkluc2VydGVkKG51bGwpKS50by5lcXVhbCh1bmRlZmluZWQpXG5cblx0XHRcdGRpdi5jc3MobnVsbCwgJzEyOScpXG5cdFx0XHRleHBlY3QoZGl2LmVsLnN0eWxlLm51bGwpLnRvLmVxdWFsKHVuZGVmaW5lZClcblxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSgpKS50by5lcXVhbCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUobnVsbCwgb24pKS50by5lcXVhbCB1bmRlZmluZWRcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUoMTIzLCBvbikpLnRvLmVxdWFsIHVuZGVmaW5lZFxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnYmFzZScsIG9uKS50by5lcXVhbCBkaXZcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2Jhc2UnKS50by5iZS5mYWxzZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnJHdoYXRldnMnLCBvbikudG8uZXF1YWwgZGl2XG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICd3aGF0ZXZzJykudG8uYmUudHJ1ZVxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnYW5vdGhlcicpLnRvLmJlLmZhbHNlXG5cdFx0XHRleHBlY3QoZGl2LnN0YXRlICdhbm90aGVyJywgb24pLnRvLmVxdWFsIGRpdlxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnYW5vdGhlcicpLnRvLmJlLnRydWVcblx0XHRcdGV4cGVjdChkaXYuc3RhdGUgJ2Fub3RoZXInLCB1bmRlZmluZWQpLnRvLmVxdWFsIGRpdlxuXHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnYW5vdGhlcicpLnRvLmJlLmZhbHNlXG5cblx0XHRcdGRpdi5hcHBlbmRUbyhEb20gc2FuZGJveClcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5lcXVhbChEb20gc2FuZGJveClcblxuXHRcdFx0ZGl2LmFwcGVuZCh0cnVlKVxuXHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDApXG5cdFx0XHRkaXYuYXBwZW5kVG8oZG9jdW1lbnQpXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkudG8uZXF1YWwoRG9tIHNhbmRib3gpXG5cdFx0XHRkaXYucHJlcGVuZCh0cnVlKVxuXHRcdFx0ZXhwZWN0KGRpdi5jaGlsZHJlbi5sZW5ndGgpLnRvLmVxdWFsKDApXG5cdFx0XHRkaXYucHJlcGVuZFRvKHRydWUpXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkudG8uZXF1YWwoRG9tIHNhbmRib3gpXG5cdFx0XHRkaXYuYWZ0ZXIodHJ1ZSlcblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgwKVxuXHRcdFx0ZGl2Lmluc2VydEFmdGVyKDEyMylcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5lcXVhbChEb20gc2FuZGJveClcblx0XHRcdGRpdi5iZWZvcmUodHJ1ZSlcblx0XHRcdGV4cGVjdChkaXYuY2hpbGRyZW4ubGVuZ3RoKS50by5lcXVhbCgwKVxuXHRcdFx0ZGl2Lmluc2VydEJlZm9yZSgxMjMpXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkudG8uZXF1YWwoRG9tIHNhbmRib3gpXG5cdFx0XHRkaXYud3JhcCgxMjMpXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkudG8uZXF1YWwoRG9tIHNhbmRib3gpXG5cdFx0XHRkaXYucmVwbGFjZSgxMjMpXG5cdFx0XHRleHBlY3QoZGl2LnBhcmVudCkudG8uZXF1YWwoRG9tIHNhbmRib3gpXG5cdFx0XHRkaXYuZGV0YWNoKClcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRkaXYudW53cmFwKClcblx0XHRcdGV4cGVjdChkaXYucGFyZW50KS50by5lcXVhbCh1bmRlZmluZWQpXG5cdFx0XHRleHBlY3QoRG9tKHNhbmRib3gpLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMFxuXG5cdFx0XHRkaXYuYXBwZW5kVG8oRG9tIHNhbmRib3gpXG5cdFx0XHRleHBlY3QoRG9tKHNhbmRib3gpLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMVxuXHRcdFx0aWYgRG9tKHNhbmRib3gpLl9yZW1vdmVDaGlsZFxuXHRcdFx0XHREb20oc2FuZGJveCkuX3JlbW92ZUNoaWxkKHRleHQpXG5cdFx0XHRcdERvbShzYW5kYm94KS5fcmVtb3ZlQ2hpbGQoRG9tLmRpdigpKVxuXHRcdFx0XHRleHBlY3QoRG9tKHNhbmRib3gpLmNoaWxkcmVuLmxlbmd0aCkudG8uZXF1YWwgMVxuXG5cdFx0XHRleHBlY3QgKCktPiBEb20uYmF0Y2goKVxuXHRcdFx0XHQudG8udGhyb3coKVxuXHRcdFx0XG5cdFx0XHRleHBlY3QgKCktPiBEb20uYmF0Y2goe30pXG5cdFx0XHRcdC50by50aHJvdygpXG5cdFx0XHRcblx0XHRcdGV4cGVjdCAoKS0+IERvbS5iYXRjaCg1NDMyKVxuXHRcdFx0XHQudG8udGhyb3coKVxuXHRcdFx0XG5cdFx0XHRleHBlY3QgKCktPiBEb20uYmF0Y2goW10pXG5cdFx0XHRcdC50by50aHJvdygpXG5cdFx0XHRcblx0XHRcdGV4cGVjdCAoKS0+IERvbS5iYXRjaChbMTJdKS5hcHBlbmQoRG9tLmRpdigpKVxuXHRcdFx0XHQudG8udGhyb3coKVxuXHRcdFx0XG5cdFx0XHRleHBlY3QgKCktPiBEb20uYmF0Y2goWzEyXSlcblx0XHRcdFx0Lm5vdC50by50aHJvdygpXG5cdFx0XHRcblx0XHRcdCMgZXhwZWN0ICgpLT4gRG9tLmJhdGNoKCQoJ2RpdicpKVxuXHRcdFx0IyBcdC5ub3QudG8udGhyb3coKVxuXG5cdFx0XHRleHBlY3QgKCktPiBEb20udGVtcGxhdGUoKVxuXHRcdFx0XHQudG8udGhyb3coKVxuXG5cdFx0XHRleHBlY3QgKCktPiBEb20udGVtcGxhdGUobnVsbClcblx0XHRcdFx0LnRvLnRocm93KClcblxuXHRcdFx0ZXhwZWN0ICgpLT4gRG9tLnRlbXBsYXRlKHt9KVxuXHRcdFx0XHQudG8udGhyb3coKVxuXG5cdFx0XHRleHBlY3QgKCktPiBEb20udGVtcGxhdGUoWzg0ODIsIHtjbGFzc05hbWU6J3QnfV0pXG5cdFx0XHRcdC50by50aHJvdygpXG5cblx0XHRcdGV4cGVjdCAoKS0+IERvbS50ZW1wbGF0ZShbJ2RpdicsICdzb21lU3RyaW5nJ10pXG5cdFx0XHRcdC50by50aHJvdygpXG5cblx0XHRcdGV4cGVjdCAoKS0+IERvbS50ZW1wbGF0ZShbJ2RpdicsIG51bGwsICdTb21lIElubmVyIFRleHQnXSlcblx0XHRcdFx0Lm5vdC50by50aHJvdygpXG5cblx0XHRcdGV4cGVjdCAoKS0+IERvbS5kaXYoc3R5bGU6e29wYWNpdHk6MC41LCAnQGFiYyhtYXgtd2lkdGg6MzkwKSc6e29wYWNpdHk6MX19KS5hcHBlbmRUbyhzYW5kYm94KVxuXHRcdFx0XHQubm90LnRvLnRocm93KClcblxuXHRcdFx0ZXhwZWN0KCgpLT5cblx0XHRcdFx0ZGl2ID0gRG9tLmRpdigpXG5cdFx0XHRcdGRpdi5waXBlU3RhdGUoZGl2KVxuXHRcdFx0XHRkaXYuc3RhdGUgJ2hhcHB5Jywgb25cblx0XHRcdFx0ZXhwZWN0KGRpdi5zdGF0ZSAnaGFwcHknKS50by5lcXVhbCBvblxuXHRcdFx0KS5ub3QudG8udGhyb3coKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuSFRNTEVsZW1lbnQ6Om9uRXZlbnQgPSAoZXZlbnROYW1lLCBjYWxsYmFjayktPlxuXHRpZiBAYWRkRXZlbnRMaXN0ZW5lclxuXHRcdEBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spXG5cdGVsc2Vcblx0XHRAYXR0YWNoRXZlbnQoXCJvbiN7ZXZlbnROYW1lfVwiLCBjYWxsYmFjaylcblxuXG5IVE1MRWxlbWVudDo6cmVtb3ZlRXZlbnQgPSAoZXZlbnROYW1lLCBjYWxsYmFjayktPlxuXHRpZiBAcmVtb3ZlRXZlbnRMaXN0ZW5lclxuXHRcdEByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spXG5cdGVsc2Vcblx0XHRAZGV0YWNoRXZlbnQoXCJvbiN7ZXZlbnROYW1lfVwiLCBjYWxsYmFjaylcblxuXG5IVE1MRWxlbWVudDo6ZW1pdEV2ZW50ID0gKGV2ZW50TmFtZSktPlxuXHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpXG5cdGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIGZhbHNlKVxuXHRAZGlzcGF0Y2hFdmVudChldmVudClcblxuXG5pZiBIVE1MRWxlbWVudC5uYW1lIGlzbnQgJ0hUTUxFbGVtZW50J1xuXHRIVE1MRWxlbWVudC5uYW1lID0gJ0hUTUxFbGVtZW50J1xuXHRUZXh0Lm5hbWUgPSAnVGV4dCdcblx0bm9uRWxlbWVudFN1ZmZpeCA9IFtcblx0XHQnT3B0aW9uc0NvbGxlY3Rpb24nXG5cdFx0J0Zvcm1Db250cm9sc0NvbGxlY3Rpb24nXG5cdFx0J0RvY3VtZW50J1xuXHRcdCdDb2xsZWN0aW9uJ1xuXHRcdCdBbGxDb2xsZWN0aW9uJ1xuXHRdXG5cdGVsZW1lbnRTdWZmaXggPSBbXG5cdFx0XCJWaWRlb1wiLFwiVW5rbm93blwiLFwiVUxpc3RcIixcIlRyYWNrXCIsXCJUaXRsZVwiLFxuXHRcdFwiVGV4dEFyZWFcIixcIlRlbXBsYXRlXCIsXCJUYWJsZVNlY3Rpb25cIixcIlRhYmxlUm93XCIsXG5cdFx0XCJUYWJsZVwiLFwiVGFibGVDb2xcIixcIlRhYmxlQ2VsbFwiLFwiVGFibGVDYXB0aW9uXCIsXG5cdFx0XCJTdHlsZVwiLFwiU3BhblwiLFwiU291cmNlXCIsXCJTbG90XCIsXCJTaGFkb3dcIixcIlNlbGVjdFwiLFxuXHRcdFwiU2NyaXB0XCIsXCJRdW90ZVwiLFwiUHJvZ3Jlc3NcIixcIlByZVwiLFwiUGljdHVyZVwiLFxuXHRcdFwiUGFyYW1cIixcIlBhcmFncmFwaFwiLFwiT3V0cHV0XCIsXCJPcHRpb25cIixcIk9wdEdyb3VwXCIsXG5cdFx0XCJPYmplY3RcIixcIk9MaXN0XCIsXCJNb2RcIixcIk1ldGVyXCIsXCJNZXRhXCIsXCJNZW51XCIsXG5cdFx0XCJNZWRpYVwiLFwiTWFycXVlZVwiLFwiTWFwXCIsXCJMaW5rXCIsXCJMZWdlbmRcIixcIkxhYmVsXCIsXG5cdFx0XCJMSVwiLFwiSW5wdXRcIixcIkltYWdlXCIsXCJJRnJhbWVcIixcIkh0bWxcIixcIkhlYWRpbmdcIixcblx0XHRcIkhlYWRcIixcIkhSXCIsXCJGcmFtZVNldFwiLFwiRnJhbWVcIixcIkZvcm1cIixcIkZvbnRcIixcblx0XHRcIkZpZWxkU2V0XCIsXCJFbWJlZFwiLFwiRGl2XCIsXCJEaXJlY3RvcnlcIixcIkRpYWxvZ1wiLFxuXHRcdFwiRGV0YWlsc1wiLFwiRGF0YUxpc3RcIixcIkRMaXN0XCIsXCJDb250ZW50XCIsXCJDYW52YXNcIixcblx0XHRcIkJ1dHRvblwiLFwiQm9keVwiLFwiQmFzZVwiLFwiQlJcIixcIkF1ZGlvXCIsXCJBcmVhXCIsXCJBbmNob3JcIlxuXHRdXG5cblx0Zm9yIGNyZWF0b3IgaW4gbm9uRWxlbWVudFN1ZmZpeFxuXHRcdHdpbmRvd1tcIkhUTUwje2NyZWF0b3J9XCJdPy5uYW1lID0gXCJIVE1MI3tjcmVhdG9yfVwiXG5cblx0Zm9yIGNyZWF0b3IgaW4gZWxlbWVudFN1ZmZpeFxuXHRcdHdpbmRvd1tcIkhUTUwje2NyZWF0b3J9RWxlbWVudFwiXT8ubmFtZSA9IFwiSFRNTCN7Y3JlYXRvcn1FbGVtZW50XCJcblxuXHR3aW5kb3cuU1ZHRWxlbWVudD8ubmFtZSA9ICdTVkdFbGVtZW50J1xuXHR3aW5kb3cuU1ZHU1ZHRWxlbWVudD8ubmFtZSA9ICdTVkdTVkdFbGVtZW50J1xuXHR3aW5kb3cuU1ZHUG9seWxpbmVFbGVtZW50Py5uYW1lID0gJ1NWR1BvbHlsaW5lRWxlbWVudCdcblxud2luZG93LkNsaWVudFJlY3QgPz0gRE9NUmVjdFxuXG5cblxuXG4iXX0=
;
return module.exports;
}
}, this);
return require(0);
}).call(this, null, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : this);
