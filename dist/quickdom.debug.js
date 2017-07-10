(function (require) {
require = (function (cache, modules, cx) {
return function (r) {
if (!modules[r]) throw new Error(r + ' is not a module');
return cache[r] ? cache[r].exports : ((cache[r] = {
exports: {}
}, cache[r].exports = modules[r].call(cx, require, cache[r], cache[r].exports)));
};
})({}, {
13: function (require, module, exports) {
var IS;

IS = module.exports = {
  defined: function(subject) {
    return subject !== void 0;
  },
  array: function(subject) {
    return subject instanceof Array;
  },
  object: function(subject) {
    return typeof subject === 'object' && subject;
  },
  objectPlain: function(subject) {
    return IS.object(subject) && Object.prototype.toString.call(subject) === '[object Object]';
  },
  string: function(subject) {
    return typeof subject === 'string';
  },
  number: function(subject) {
    return typeof subject === 'number';
  },
  "function": function(subject) {
    return typeof subject === 'function';
  },
  iterable: function(subject) {
    return IS.object(subject) && IS.number(subject.length);
  }
};

;
return module.exports;
},
2: function (require, module, exports) {
(function(r){return function(){var h=function(g,m,h,n){n=function(e){return h[e]?m[e]:(h[e]=1,m[e]={},m[e]=g[e](m[e]))};g[1]=function(e){var g=n(2);var k=function(a){var b;if(a){var c={};if("object"!==typeof a)c[a]=!0;else{Array.isArray(a)||(a=Object.keys(a));var e=0;for(b=a.length;e<b;e++){var d=a[e];c[d]=!0}}return c}};var c=function(a){var b=function(a){var c=arguments.length;for(var d=-1,e=Array(c);++d<c;)e[d]=arguments[d];b.options.target?c=b.options.target:(c=a,e.shift());return g(b.options,
c,e)};a&&(b.isBase=!0);b.options={};Object.defineProperties(b,h);return b};var h={deep:{get:function(){var a=this.isBase?c():this;a.options.deep=!0;return a}},own:{get:function(){var a=this.isBase?c():this;a.options.own=!0;return a}},allowNull:{get:function(){var a=this.isBase?c():this;a.options.allowNull=!0;return a}},nullDeletes:{get:function(){var a=this.isBase?c():this;a.options.nullDeletes=!0;return a}},concat:{get:function(){var a=this.isBase?c():this;a.options.concat=!0;return a}},clone:{get:function(){var a=
this.isBase?c():this;a.options.target={};return a}},notDeep:{get:function(){var a=this.isBase?c():this;return function(b){a.options.notDeep=k(b);return a}}},deepOnly:{get:function(){var a=this.isBase?c():this;return function(b){a.options.deepOnly=k(b);return a}}},keys:{get:function(){var a=this.isBase?c():this;return function(b){a.options.keys=k(b);return a}}},notKeys:{get:function(){var a=this.isBase?c():this;return function(b){a.options.notKeys=k(b);return a}}},transform:{get:function(){var a=this.isBase?
c():this;return function(b){"function"===typeof b?a.options.globalTransform=b:b&&"object"===typeof b&&(a.options.transforms=b);return a}}},filter:{get:function(){var a=this.isBase?c():this;return function(b){"function"===typeof b?a.options.globalFilter=b:b&&"object"===typeof b&&(a.options.filters=b);return a}}}};return e=c(!0)};g[2]=function(e){var g;var k=function(a){return Array.isArray(a)};var c=function(a){return a&&"[object Object]"===Object.prototype.toString.call(a)||k(a)};var h=function(a,
b,c){if(a.deep)return a.notDeep?!a.notDeep[b]:!0;if(a.deepOnly)return a.deepOnly[b]||c&&h(a,c)};return e=g=function(a,b,e,m){var d,n;if(!b||"object"!==typeof b&&"function"!==typeof b)b={};var q=0;for(n=e.length;q<n;q++){var l=e[q];if(null!=l)for(d in l){var f=l[d];var p=b[d];if(!(f===b||void 0===f||null===f&&!a.allowNull&&!a.nullDeletes||a.keys&&!a.keys[d]||a.notKeys&&a.notKeys[d]||a.own&&!l.hasOwnProperty(d)||a.globalFilter&&!a.globalFilter(f,d,l)||a.filters&&a.filters[d]&&!a.filters[d](f,d,l)))if(null===
f&&a.nullDeletes)delete b[d];else switch(a.globalTransform&&(f=a.globalTransform(f,d,l)),a.transforms&&a.transforms[d]&&(f=a.transforms[d](f,d,l)),!1){case !(a.concat&&k(f)&&k(p)):b[d]=p.concat(f);break;case !(h(a,d,m)&&c(f)):p=c(p)?p:k(f)?[]:{};b[d]=g(a,p,[f],d);break;default:b[d]=f}}}return b}};return n};h=h({},{},{});return function(){var g=h(1);null!=("undefined"!==typeof module&&null!==module?module.exports:void 0)?module.exports=g:"function"===typeof define&&define.amd?define(["smart-extend"],
function(){return g}):window.extend=g}()}})(this)();
;
return module.exports;
},
26: function (require, module, exports) {
var StateChain;

module.exports = StateChain = (function() {
  function StateChain(states) {
    this.string = states.join('+');
    this.array = states.slice();
    this.length = states.length;
  }

  StateChain.prototype.includes = function(target) {
    var i, len, ref, state;
    ref = this.array;
    for (i = 0, len = ref.length; i < len; i++) {
      state = ref[i];
      if (state === target) {
        return true;
      }
    }
    return false;
  };

  StateChain.prototype.without = function(target) {
    return this.array.filter(function(state) {
      return state !== target;
    }).join('+');
  };

  StateChain.prototype.isApplicable = function(target, otherActive) {
    var active;
    active = this.array.filter(function(state) {
      return state === target || otherActive.indexOf(state) !== -1;
    });
    return active.length === this.array.length;
  };

  return StateChain;

})();

;
return module.exports;
},
1: function (require, module, exports) {
(function(){var k=["webkit","moz","ms","o"];var g="backgroundPositionX backgroundPositionY blockSize borderWidth columnRuleWidth cx cy fontSize gridColumnGap gridRowGap height inlineSize lineHeight minBlockSize minHeight minInlineSize minWidth maxHeight maxWidth outlineOffset outlineWidth perspective shapeMargin strokeDashoffset strokeWidth textIndent width wordSpacing top bottom left right x y".split(" ");["margin","padding","border","borderRadius"].forEach(function(a){var b;g.push(a);var c=["Top",
"Bottom","Left","Right"];var d=[];var e=0;for(b=c.length;e<b;e++){var f=c[e];d.push(g.push(a+f))}return d});var l=document.createElement("div").style;var m=/^\d+(?:[a-z]|\%)+$/i;var n=/\d+$/;var p=/\s/;var h={includes:function(a,b){return a&&-1!==a.indexOf(b)},isIterable:function(a){return a&&"object"===typeof a&&"number"===typeof a.length&&!a.nodeType},isPropSupported:function(a){return"undefined"!==typeof l[a]},toTitleCase:function(a){return a[0].toUpperCase()+a.slice(1)},normalizeProperty:function(a){var b;
if(this.isPropSupported(a))return a;var c=this.toTitleCase(a);a=0;for(b=k.length;a<b;a++){var d=k[a];d=""+d+c;if(this.isPropSupported(d))return d}},normalizeValue:function(a,b){this.includes(g,a)&&null!==b&&(b=""+b,!n.test(b)||m.test(b)||p.test(b)||(b+="px"));return b}};var f=function(a,b,c){var d;if(h.isIterable(a)){var e=0;for(d=a.length;e<d;e++){var g=a[e];f(g,b,c)}}else if("object"===typeof b)for(e in b)c=b[e],f(a,e,c);else{b=h.normalizeProperty(b);if("undefined"===typeof c)return getComputedStyle(a)[b];
b&&(a.style[b]=h.normalizeValue(b,c))}};f.version="1.0.6";return null!=("undefined"!==typeof module&&null!==module?module.exports:void 0)?module.exports=f:"function"===typeof define&&define.amd?define(["quickdom"],function(){return f}):this.Css=f})();
;
return module.exports;
},
0: function (require, module, exports) {
var QuickDom, svgNamespace;

svgNamespace = 'http://www.w3.org/2000/svg';


/* istanbul ignore next */

var CSS = require(1);


/* istanbul ignore next */

var extend = require(2);

var allowedOptions, allowedTemplateOptions;

allowedTemplateOptions = ['id', 'name', 'type', 'href', 'selected', 'checked', 'className'];

allowedOptions = ['id', 'ref', 'type', 'name', 'text', 'style', 'class', 'className', 'url', 'href', 'selected', 'checked', 'props', 'attrs', 'passStateToChildren', 'stateTriggers'];

;

var helpers;

helpers = {};

helpers.includes = function(target, item) {
  return target && target.indexOf(item) !== -1;
};

helpers.removeItem = function(target, item) {
  var itemIndex;
  itemIndex = target.indexOf(item);
  if (itemIndex !== -1) {
    target.splice(itemIndex, 1);
  }
  return target;
};

helpers.normalizeGivenEl = function(targetEl) {
  switch (false) {
    case !IS.domNode(targetEl):
      return QuickDom(targetEl);
    case !IS.string(targetEl):
      return QuickDom.text(targetEl);
    default:
      return targetEl;
  }
};

helpers.isStateStyle = function(string) {
  return string[0] === '$' || string[0] === '@';
};

;


/* istanbul ignore next */
var IS;

IS = require(13);

IS = extend.clone(IS, {
  domDoc: function(subject) {
    return subject && subject.nodeType === 9;
  },
  domEl: function(subject) {
    return subject && subject.nodeType === 1;
  },
  domText: function(subject) {
    return subject && subject.nodeType === 3;
  },
  domNode: function(subject) {
    return IS.domEl(subject) || IS.domText(subject);
  },
  quickDomEl: function(subject) {
    return subject && subject.constructor.name === QuickElement.name;
  },
  template: function(subject) {
    return subject && subject.constructor.name === QuickTemplate.name;
  }
});

;

var QuickElement;

QuickElement = (function() {
  function QuickElement(type, options) {
    this.type = type;
    this.options = options;
    this.el = this.options.existing || (this.type === 'text' ? document.createTextNode(typeof this.options.text === 'string' ? this.options.text : '') : this.type[0] === '*' ? document.createElementNS(svgNamespace, this.type.slice(1)) : document.createElement(this.type));
    if (this.type === 'text') {
      this.append = this.prepend = this.attr = function() {};
    }
    this._parent = null;
    this._styles = {};
    this._state = [];
    this._children = [];
    this._insertedCallbacks = [];
    this._normalizeOptions();
    this._applyOptions();
    this._attachStateEvents();
    this._proxyParent();
    if (this.options.existing) {
      this._refreshParent();
    }
    this.el._quickElement = this;
  }

  QuickElement.prototype.toJSON = function() {
    var child, children, i, len, output;
    output = [this.type, extend.clone.keys(allowedOptions)(this.options)];
    children = this.children;
    for (i = 0, len = children.length; i < len; i++) {
      child = children[i];
      output.push(child.toJSON());
    }
    return output;
  };

  return QuickElement;

})();


/* istanbul ignore next */

if (QuickElement.name == null) {
  QuickElement.name = 'QuickElement';
}

Object.defineProperties(QuickElement.prototype, {
  'raw': {
    get: function() {
      return this.el;
    }
  },
  '0': {
    get: function() {
      return this.el;
    }
  },
  'css': {
    get: function() {
      return this.style;
    }
  },
  'replaceWith': {
    get: function() {
      return this.replace;
    }
  }
});

;

var _getChildRefs, _getIndexByProp, _getParents,
  slice = [].slice;

QuickElement.prototype.parentsUntil = function(filterFn) {
  return _getParents(this, filterFn);
};

QuickElement.prototype.parentMatching = function(filterFn) {
  var nextParent;
  if (IS["function"](filterFn)) {
    nextParent = this.parent;
    while (nextParent) {
      if (filterFn(nextParent)) {
        return nextParent;
      }
      nextParent = nextParent.parent;
    }
  }
};

QuickElement.prototype.query = function(selector) {
  return QuickDom(this.raw.querySelector(selector));
};

QuickElement.prototype.queryAll = function(selector) {
  var i, item, len, output, result;
  result = this.raw.querySelectorAll(selector);
  output = [];
  for (i = 0, len = result.length; i < len; i++) {
    item = result[i];
    output.push(item);
  }
  return new QuickBatch(output);
};

Object.defineProperties(QuickElement.prototype, {
  'children': {
    get: function() {
      var child, i, len, ref;
      if (this.el.childNodes.length !== this._children.length) {
        this._children.length = 0;
        ref = this.el.childNodes;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          if (child.nodeType < 4) {
            this._children.push(QuickDom(child));
          }
        }
      }
      return this._children;
    }
  },
  'parent': {
    get: function() {
      if ((!this._parent || this._parent.el !== this.el.parentNode) && !IS.domDoc(this.el.parentNode)) {
        this._parent = QuickDom(this.el.parentNode);
      }
      return this._parent;
    }
  },
  'parents': {
    get: function() {
      return _getParents(this);
    }
  },
  'next': {
    get: function() {
      return QuickDom(this.el.nextSibling);
    }
  },
  'prev': {
    get: function() {
      return QuickDom(this.el.previousSibling);
    }
  },
  'nextAll': {
    get: function() {
      var nextSibling, siblings;
      siblings = [];
      nextSibling = QuickDom(this.el.nextSibling);
      while (nextSibling) {
        siblings.push(nextSibling);
        nextSibling = nextSibling.next;
      }
      return siblings;
    }
  },
  'prevAll': {
    get: function() {
      var prevSibling, siblings;
      siblings = [];
      prevSibling = QuickDom(this.el.previousSibling);
      while (prevSibling) {
        siblings.push(prevSibling);
        prevSibling = prevSibling.prev;
      }
      return siblings;
    }
  },
  'siblings': {
    get: function() {
      return this.prevAll.reverse().concat(this.nextAll);
    }
  },
  'child': {
    get: function() {
      return this._childRefs || _getChildRefs(this);
    }
  },
  'childf': {
    get: function() {
      return _getChildRefs(this, true);
    }
  },
  'index': {
    get: function() {
      var parent;
      if (!(parent = this.parent)) {
        return null;
      } else {
        return parent.children.indexOf(this);
      }
    }
  },
  'indexType': {
    get: function() {
      return _getIndexByProp(this, 'type');
    }
  },
  'indexRef': {
    get: function() {
      return _getIndexByProp(this, 'ref');
    }
  }
});

_getParents = function(targetEl, filterFn) {
  var nextParent, parents;
  if (!IS["function"](filterFn)) {
    filterFn = void 0;
  }
  parents = [];
  nextParent = targetEl.parent;
  while (nextParent) {
    parents.push(nextParent);
    nextParent = nextParent.parent;
    if (filterFn && filterFn(nextParent)) {
      nextParent = null;
    }
  }
  return parents;
};

_getChildRefs = function(target, freshCopy) {
  var children, refs;
  if (freshCopy || !target._childRefs) {
    target._childRefs = {};
  }
  refs = target._childRefs;
  if (target.ref) {
    refs[target.ref] = target;
  }
  children = target.children;
  if (children.length) {
    extend.apply(null, [target._childRefs].concat(slice.call(children.map(function(child) {
      return _getChildRefs(child, freshCopy);
    }))));
  }
  return target._childRefs;
};

_getIndexByProp = function(main, prop) {
  var parent;
  if (!(parent = main.parent)) {
    return null;
  } else {
    return parent.children.filter(function(child) {
      return child[prop] === main[prop];
    }).indexOf(main);
  }
};

;

var baseStateTriggers,
  slice = [].slice;

baseStateTriggers = {
  'hover': {
    on: 'mouseenter',
    off: 'mouseleave',
    bubbles: true
  },
  'focus': {
    on: 'focus',
    off: 'blur',
    bubbles: true
  }
};

QuickElement.prototype._normalizeOptions = function() {
  var base, base1, base2;
  if (this.options["class"]) {
    this.options.className = this.options["class"];
  }
  if (this.options.url) {
    this.options.href = this.options.url;
  }
  this.related = (base = this.options).relatedInstance != null ? base.relatedInstance : base.relatedInstance = this;
  if ((base1 = this.options).unpassableStates == null) {
    base1.unpassableStates = [];
  }
  if ((base2 = this.options).passStateToChildren == null) {
    base2.passStateToChildren = true;
  }
  this.options.stateTriggers = this.options.stateTriggers ? extend.clone.deep(baseStateTriggers, this.options.stateTriggers) : baseStateTriggers;
  if (this.type === 'text') {
    this._parseText();
  } else {
    this._parseStyles();
  }
};

QuickElement.prototype._parseStyles = function() {
  var flattenNestedStates, i, keys, len, specialStates, state, stateStyles, state_, states;
  if (!IS.objectPlain(this.options.style)) {
    return;
  }
  keys = Object.keys(this.options.style);
  states = keys.filter(function(key) {
    return helpers.isStateStyle(key);
  });
  specialStates = helpers.removeItem(states.slice(), '$base');
  this._mediaStates = states.filter(function(key) {
    return key[0] === '@';
  }).map(function(state) {
    return state.slice(1);
  });
  this._providedStates = states.map(function(state) {
    return state.slice(1);
  });
  if (!helpers.includes(states, '$base')) {
    if (states.length) {
      this._styles.base = extend.clone.notKeys(states)(this.options.style);
    } else {
      this._styles.base = this.options.style;
    }
  } else {
    this._styles.base = this.options.style.$base;
  }
  flattenNestedStates = (function(_this) {
    return function(styleObject, chain) {
      var hasNonStateProps, i, len, output, state, stateChain, state_, styleKeys;
      styleKeys = Object.keys(styleObject);
      output = {};
      hasNonStateProps = false;
      for (i = 0, len = styleKeys.length; i < len; i++) {
        state = styleKeys[i];
        if (!helpers.isStateStyle(state)) {
          hasNonStateProps = true;
          output[state] = styleObject[state];
        } else {
          chain.push(state_ = state.slice(1));
          stateChain = new (require(26))(chain);
          if (_this._stateShared == null) {
            _this._stateShared = [];
          }
          if (_this._providedStatesShared == null) {
            _this._providedStatesShared = [];
          }
          _this._providedStatesShared.push(stateChain);
          if (state[0] === '@') {
            _this._mediaStates.push(state_);
          }
          _this._styles[stateChain.string] = flattenNestedStates(styleObject[state], chain);
        }
      }
      if (hasNonStateProps) {
        return output;
      }
    };
  })(this);
  for (i = 0, len = specialStates.length; i < len; i++) {
    state = specialStates[i];
    state_ = state.slice(1);
    stateStyles = flattenNestedStates(this.options.style[state], [state_]);
    if (stateStyles) {
      this._styles[state_] = stateStyles;
    }
  }
};

QuickElement.prototype._parseText = function() {
  var i, len, state, states;
  if (!IS.objectPlain(this.options.text)) {
    return;
  }
  states = Object.keys(this.options.text).map(function(state) {
    return state.slice(1);
  });
  this._providedStates = states.filter(function(state) {
    return state !== 'base';
  });
  this._texts = {
    base: ''
  };
  for (i = 0, len = states.length; i < len; i++) {
    state = states[i];
    this._texts[state] = this.options.text['$' + state];
  }
};

QuickElement.prototype._applyOptions = function() {
  var event, handler, key, ref, ref1, ref2, ref3, value;
  if (ref = this.options.id || this.options.ref) {
    this.attr('data-ref', this.ref = ref);
  }
  if (this.options.id) {
    this.el.id = this.options.id;
  }
  if (this.options.className) {
    this.el.className = this.options.className;
  }
  if (this.options.src) {
    this.el.src = this.options.src;
  }
  if (this.options.href) {
    this.el.href = this.options.href;
  }
  if (this.options.type) {
    this.el.type = this.options.type;
  }
  if (this.options.name) {
    this.el.name = this.options.name;
  }
  if (this.options.value) {
    this.el.value = this.options.value;
  }
  if (this.options.selected) {
    this.el.selected = this.options.selected;
  }
  if (this.options.checked) {
    this.el.checked = this.options.checked;
  }
  if (this.options.props) {
    ref1 = this.options.props;
    for (key in ref1) {
      value = ref1[key];
      this.prop(key, value);
    }
  }
  if (this.options.attrs) {
    ref2 = this.options.attrs;
    for (key in ref2) {
      value = ref2[key];
      this.attr(key, value);
    }
  }
  if (!this.options.styleAfterInsert) {
    this.style(this._styles.base);
  }
  if (this._texts) {
    this.text = this._texts.base;
  }
  this.onInserted((function(_this) {
    return function() {
      var _, mediaStates;
      if (_this.options.styleAfterInsert) {
        _this.style(extend.clone.apply(extend, [_this._styles.base].concat(slice.call(_this._getStateStyles(_this._getActiveStates())))));
      }
      _ = _this._inserted = _this;
      if ((mediaStates = _this._mediaStates) && _this._mediaStates.length) {
        return _this._mediaStates = new function() {
          var i, len, queryString;
          for (i = 0, len = mediaStates.length; i < len; i++) {
            queryString = mediaStates[i];
            this[queryString] = MediaQuery.register(_, queryString);
          }
          return this;
        };
      }
    };
  })(this));
  if (this.options.recalcOnResize) {
    window.addEventListener('resize', (function(_this) {
      return function() {
        return _this.recalcStyle();
      };
    })(this));
  }
  if (this.options.events) {
    ref3 = this.options.events;
    for (event in ref3) {
      handler = ref3[event];
      this.on(event, handler);
    }
  }
};

QuickElement.prototype._attachStateEvents = function(force) {
  var fn, ref1, state, trigger;
  ref1 = this.options.stateTriggers;
  fn = (function(_this) {
    return function(state, trigger) {
      var disabler, enabler;
      if (!helpers.includes(_this._providedStates, state) && !force && !trigger.force) {
        return;
      }
      enabler = IS.string(trigger) ? trigger : trigger.on;
      if (IS.object(trigger)) {
        disabler = trigger.off;
      }
      _this._listenTo(enabler, function() {
        return _this.state(state, true, trigger.bubbles);
      });
      if (disabler) {
        return _this._listenTo(disabler, function() {
          return _this.state(state, false, trigger.bubbles);
        });
      }
    };
  })(this);
  for (state in ref1) {
    trigger = ref1[state];
    fn(state, trigger);
  }
};

QuickElement.prototype._proxyParent = function() {
  var parent;
  parent = void 0;
  return Object.defineProperty(this, '_parent', {
    get: function() {
      return parent;
    },
    set: function(newParent) {
      var lastParent;
      if (parent = newParent) {
        lastParent = this.parents.slice(-1)[0];
        if (lastParent.raw === document.documentElement) {
          this._unproxyParent(newParent);
        } else {
          parent.onInserted((function(_this) {
            return function() {
              if (parent === newParent) {
                return _this._unproxyParent(newParent);
              }
            };
          })(this));
        }
      }
    }
  });
};

QuickElement.prototype._unproxyParent = function(newParent) {
  var callback, i, len, ref1;
  delete this._parent;
  this._parent = newParent;
  ref1 = this._insertedCallbacks;
  for (i = 0, len = ref1.length; i < len; i++) {
    callback = ref1[i];
    callback(this);
  }
};

;

var regexWhitespace;

regexWhitespace = /\s+/;

QuickElement.prototype.on = function(eventNames, callback) {
  var callbackRef, split;
  if (this._eventCallbacks == null) {
    this._eventCallbacks = {
      __refs: {}
    };
  }
  if (IS.string(eventNames) && IS["function"](callback)) {
    split = eventNames.split('.');
    callbackRef = split[1];
    eventNames = split[0];
    eventNames.split(regexWhitespace).forEach((function(_this) {
      return function(eventName) {
        if (!_this._eventCallbacks[eventName]) {
          _this._eventCallbacks[eventName] = [];
          _this._listenTo(eventName, function(event) {
            return _this._invokeHandlers(eventName, event);
          });
        }
        if (callbackRef) {
          _this._eventCallbacks.__refs[callbackRef] = callback;
        }
        return _this._eventCallbacks[eventName].push(callback);
      };
    })(this));
  }
  return this;
};

QuickElement.prototype.once = function(eventNames, callback) {
  var onceCallback;
  if (IS.string(eventNames) && IS["function"](callback)) {
    this.on(eventNames, onceCallback = (function(_this) {
      return function(event) {
        _this.off(eventNames, onceCallback);
        return callback.call(_this.el, event);
      };
    })(this));
  }
  return this;
};

QuickElement.prototype.off = function(eventNames, callback) {
  var callbackRef, eventName, split;
  if (this._eventCallbacks == null) {
    this._eventCallbacks = {
      __refs: {}
    };
  }
  if (!IS.string(eventNames)) {
    for (eventName in this._eventCallbacks) {
      this.off(eventName);
    }
  } else {
    split = eventNames.split('.');
    callbackRef = split[1];
    eventNames = split[0];
    eventNames.split(regexWhitespace).forEach((function(_this) {
      return function(eventName) {
        if (_this._eventCallbacks[eventName]) {
          if (callback == null) {
            callback = _this._eventCallbacks.__refs[callbackRef];
          }
          if (IS["function"](callback)) {
            return helpers.removeItem(_this._eventCallbacks[eventName], callback);
          } else if (!callbackRef) {
            return _this._eventCallbacks[eventName].length = 0;
          }
        }
      };
    })(this));
  }
  return this;
};

QuickElement.prototype.emit = function(eventName, bubbles, cancelable) {
  var event;
  if (bubbles == null) {
    bubbles = true;
  }
  if (cancelable == null) {
    cancelable = true;
  }
  if (eventName && IS.string(eventName)) {
    event = document.createEvent('Event');
    event.initEvent(eventName, bubbles, cancelable);
    this.el.dispatchEvent(event);
  }
  return this;
};

QuickElement.prototype.emitPrivate = function(eventName, arg) {
  var ref;
  if (eventName && IS.string(eventName) && ((ref = this._eventCallbacks) != null ? ref[eventName] : void 0)) {
    this._invokeHandlers(eventName, arg);
  }
  return this;
};

QuickElement.prototype.onInserted = function(callback, invokeIfInserted) {
  if (invokeIfInserted == null) {
    invokeIfInserted = true;
  }
  if (IS["function"](callback)) {
    if (!this._inserted) {
      this._insertedCallbacks.push(callback);
    } else if (invokeIfInserted) {
      callback(this);
    }
    return this;
  }
};

QuickElement.prototype._invokeHandlers = function(eventName, arg) {
  var callbacks, cb, i, len;
  callbacks = this._eventCallbacks[eventName].slice();
  for (i = 0, len = callbacks.length; i < len; i++) {
    cb = callbacks[i];
    cb.call(this.el, arg);
  }
};


/* istanbul ignore next */

QuickElement.prototype._listenTo = function(eventName, callback) {
  var eventNameToListenFor, listenMethod;
  listenMethod = this.el.addEventListener ? 'addEventListener' : 'attachEvent';
  eventNameToListenFor = this.el.addEventListener ? eventName : "on" + eventName;
  this.el[listenMethod](eventNameToListenFor, callback);
  return this;
};

;

var DUMMY_ARRAY,
  slice = [].slice;

DUMMY_ARRAY = [];

QuickElement.prototype.state = function(targetState, value, bubbles, source) {
  var activeStates, child, desiredValue, i, len, prop, ref, toggle;
  if (arguments.length === 1) {
    return helpers.includes(this._state, targetState);
  } else if (this._statePipeTarget && source !== this) {
    this._statePipeTarget.state(targetState, value, bubbles, this);
    return this;
  } else if (IS.string(targetState)) {
    if (targetState[0] === '$') {
      targetState = targetState.slice(1);
    }
    if (targetState === 'base') {
      return this;
    }
    desiredValue = !!value;
    activeStates = this._getActiveStates(targetState, false);
    if (this.state(targetState) !== desiredValue) {
      prop = this.type === 'text' ? 'Text' : 'Style';
      if (desiredValue) {
        this._state.push(targetState);
        toggle = 'ON';
      } else {
        helpers.removeItem(this._state, targetState);
        toggle = 'OFF';
      }
      this['_turn' + prop + toggle](targetState, activeStates);
      this.emitPrivate("stateChange:" + targetState, desiredValue);
    }
    if (!helpers.includes(this.options.unpassableStates, targetState)) {
      if (bubbles) {
        if (this.parent) {
          this._parent.state(targetState, value, true, source || this);
        }
      } else if (this.options.passStateToChildren) {
        ref = this._children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          child.state(targetState, value, false, source || this);
        }
      }
    }
    return this;
  }
};

QuickElement.prototype.resetState = function() {
  var activeState, i, len, ref;
  ref = this._state.slice();
  for (i = 0, len = ref.length; i < len; i++) {
    activeState = ref[i];
    this.state(activeState, false);
  }
  return this;
};

QuickElement.prototype.pipeState = function(targetEl) {
  var activeState, i, len, ref;
  if (targetEl) {
    targetEl = helpers.normalizeGivenEl(targetEl);
    if (IS.quickDomEl(targetEl) && targetEl !== this) {
      this._statePipeTarget = targetEl;
      ref = this._state;
      for (i = 0, len = ref.length; i < len; i++) {
        activeState = ref[i];
        targetEl.state(activeState, true);
      }
    }
  } else if (targetEl === false) {
    delete this._statePipeTarget;
  }
  return this;
};

QuickElement.prototype._getActiveStates = function(stateToExclude, includeSharedStates) {
  var plainStates;
  if (includeSharedStates == null) {
    includeSharedStates = true;
  }
  if (!this._providedStates) {
    return DUMMY_ARRAY;
  }
  plainStates = this._providedStates.filter((function(_this) {
    return function(state) {
      return helpers.includes(_this._state, state) && state !== stateToExclude;
    };
  })(this));
  if (!includeSharedStates || !this._providedStatesShared) {
    return plainStates;
  } else {
    return plainStates.concat(this._stateShared);
  }
};

QuickElement.prototype._getSuperiorStates = function(targetState, activeStates) {
  var superior, targetStateIndex;
  targetStateIndex = this._providedStates.indexOf(targetState);
  return superior = activeStates.filter((function(_this) {
    return function(state) {
      return _this._providedStates.indexOf(state) > targetStateIndex;
    };
  })(this));
};

QuickElement.prototype._getSharedStates = function(targetState) {
  var activeStates;
  activeStates = this._state;
  return this._providedStatesShared.filter(function(stateChain) {
    return stateChain.includes(targetState) && stateChain.isApplicable(targetState, activeStates);
  });
};

QuickElement.prototype._getStateStyles = function(states) {
  return states.map((function(_this) {
    return function(state) {
      return _this._styles[state];
    };
  })(this));
};

QuickElement.prototype._turnStyleON = function(targetState, activeStates) {
  var i, inferiorStateChains, len, sharedStates, stateChain, superiorStyles, targetStyle;
  if (targetStyle = this._styles[targetState]) {
    superiorStyles = this._getStateStyles(this._getSuperiorStates(targetState, activeStates));
    this.style(extend.clone.keys(targetStyle).apply(null, [targetStyle].concat(slice.call(superiorStyles))));
  }
  if (this._providedStatesShared) {
    sharedStates = this._getSharedStates(targetState);
    for (i = 0, len = sharedStates.length; i < len; i++) {
      stateChain = sharedStates[i];
      if (!helpers.includes(this._stateShared, stateChain.string)) {
        this._stateShared.push(stateChain.string);
      }
      targetStyle = this._styles[stateChain.string];
      if (stateChain.length > 2) {
        inferiorStateChains = this._styles[stateChain.without(targetState)];
        this.style(extend.clone(inferiorStateChains, targetStyle));
      } else {
        this.style(targetStyle);
      }
    }
  }
};

QuickElement.prototype._turnStyleOFF = function(targetState, activeStates) {
  var activeStyles, i, len, sharedStates, stateChain, stylesToKeep, stylesToRemove, targetStyle;
  if (targetStyle = this._styles[targetState]) {
    activeStyles = this._getStateStyles(activeStates);
    stylesToKeep = extend.clone.keys(targetStyle).apply(null, [this._styles.base].concat(slice.call(activeStyles)));
    stylesToRemove = extend.transform(function() {
      return null;
    }).clone(targetStyle);
    this.style(extend(stylesToRemove, stylesToKeep));
  }
  if (this._providedStatesShared) {
    sharedStates = this._getSharedStates(targetState);
    if (activeStyles == null) {
      activeStyles = this._getStateStyles(activeStates);
    }
    for (i = 0, len = sharedStates.length; i < len; i++) {
      stateChain = sharedStates[i];
      helpers.removeItem(this._stateShared, stateChain.string);
      targetStyle = this._styles[stateChain.string];
      if (this._stateShared.length) {
        activeStyles.push.apply(activeStyles, this._stateShared.filter(function(state) {
          return !helpers.includes(state, targetState);
        }).map((function(_this) {
          return function(state) {
            return _this._styles[state];
          };
        })(this)));
      }
      stylesToKeep = extend.clone.keys(targetStyle).apply(null, [this._styles.base].concat(slice.call(activeStyles)));
      stylesToRemove = extend.transform(function() {
        return null;
      }).clone(targetStyle);
      this.style(extend(stylesToRemove, stylesToKeep));
    }
  }
};

QuickElement.prototype._turnTextON = function(targetState, activeStates) {
  var superiorStates, targetText;
  if (this._texts && IS.string(targetText = this._texts[targetState])) {
    superiorStates = this._getSuperiorStates(targetState, activeStates);
    if (!superiorStates.length) {
      this.text = targetText;
    }
  }
};

QuickElement.prototype._turnTextOFF = function(targetState, activeStates) {
  var targetText;
  if (this._texts && IS.string(targetText = this._texts[targetState])) {
    activeStates = activeStates.filter(function(state) {
      return state !== targetState;
    });
    targetText = this._texts[activeStates[activeStates.length - 1]];
    if (targetText == null) {
      targetText = this._texts.base;
    }
    this.text = targetText;
  }
};

;


/**
 * Sets/gets the value of a style property. In getter mode the computed property of
 * the style will be returned unless the element is not inserted into the DOM. In
 * webkit browsers all computed properties of a detached node are always an empty
 * string but in gecko they reflect on the actual computed value, hence we need
 * to "normalize" this behavior and make sure that even on gecko an empty string
 * is returned
 * @return {[type]} [description]
 */
var aspectRatioGetter, orientationGetter,
  slice = [].slice;

QuickElement.prototype.style = function() {
  var args, returnValue;
  if (this.type === 'text') {
    return;
  }
  args = arguments;
  if (IS.string(args[0])) {
    returnValue = CSS(this.el, args[0], args[1]);
    if (!IS.defined(args[1])) {

      /* istanbul ignore next */
      if (this._inserted) {
        return returnValue;
      } else if (!returnValue) {
        return returnValue;
      } else {
        return '';
      }
    }
  } else if (IS.object(args[0])) {
    CSS(this.el, extend.allowNull.transform((function(_this) {
      return function(value) {
        if (typeof value === 'function') {
          return value.call(_this, _this.options.relatedInstance);
        } else {
          return value;
        }
      };
    })(this)).clone(args[0]));
  }
  return this;
};


/**
 * Attempts to resolve the value for a given property in the following order if each one isn't a valid value:
 * 1. from computed style (for dom-inserted els)
 * 2. from DOMElement.style object (for non-inserted els; if options.styleAfterInsert, will only have state styles)
 * 3. from provided style options
 * (for non-inserted els; checking only $base since state styles will always be applied to the style object even for non-inserted)
 */

QuickElement.prototype.styleSafe = function(property, skipComputed) {
  var args, computedResult, ref;
  if (this.type === 'text') {
    return;
  }
  args = arguments;
  computedResult = this.style(property);
  if (IS.string(computedResult)) {
    if (skipComputed) {
      computedResult = 0;
    }
    return computedResult || this.el.style[args[0]] || ((ref = this._styles.base) != null ? ref[args[0]] : void 0) || '';
  }
  return this;
};

QuickElement.prototype.styleParsed = function(property) {
  return parseFloat(this.styleSafe(property));
};

QuickElement.prototype.recalcStyle = function(recalcChildren) {
  var activeStyles, child, i, len, ref, targetStyles;
  activeStyles = this._getStateStyles(this._getActiveStates());
  targetStyles = extend.clone.filter(function(value) {
    return typeof value === 'function';
  }).apply(null, [this._styles.base].concat(slice.call(activeStyles)));
  this.style(targetStyles);
  if (recalcChildren) {
    ref = this._children;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      child.recalcStyle();
    }
  }
  return this;
};

QuickElement.prototype.show = function(display) {
  var ref;
  if (display == null) {
    display = ((ref = this._styles.base) != null ? ref.display : void 0) || 'block';
  }
  return this.style('display', display);
};

QuickElement.prototype.hide = function() {
  return this.style('display', 'none');
};

Object.defineProperties(QuickElement.prototype, {
  'rect': {
    get: function() {
      return this.el.getBoundingClientRect();
    }
  },
  'width': {
    get: function() {
      return parseFloat(this.style('width'));
    }
  },
  'height': {
    get: function() {
      return parseFloat(this.style('height'));
    }
  },
  'orientation': orientationGetter = {
    get: function() {
      if (this.width > this.height) {
        return 'landscape';
      } else {
        return 'portrait';
      }
    }
  },
  'aspectRatio': aspectRatioGetter = {
    get: function() {
      return this.width / this.height;
    }
  }
});

;

QuickElement.prototype.attr = function(attrName, newValue) {
  switch (newValue) {
    case void 0:
      return this.el.getAttribute(attrName);
    case null:
      return this.el.removeAttribute(attrName);
    default:
      this.el.setAttribute(attrName, newValue);
      return this;
  }
};

QuickElement.prototype.prop = function(propName, newValue) {
  switch (newValue) {
    case void 0:
      return this.el[propName];
    default:
      this.el[propName] = newValue;
      return this;
  }
};

;

QuickElement.prototype.toTemplate = function() {
  return QuickDom.template(this);
};

QuickElement.prototype.clone = function() {
  var activeState, callback, callbacks, child, elClone, eventName, i, j, k, len, len1, len2, newEl, options, ref, ref1, ref2;
  elClone = this.el.cloneNode(false);
  options = extend.clone(this.options, {
    existing: elClone
  });
  newEl = new QuickElement(this.type, options);
  ref = this._state;
  for (i = 0, len = ref.length; i < len; i++) {
    activeState = ref[i];
    newEl.state(activeState, true);
  }
  ref1 = this.children;
  for (j = 0, len1 = ref1.length; j < len1; j++) {
    child = ref1[j];
    newEl.append(child.clone());
  }
  ref2 = this._eventCallbacks;
  for (eventName in ref2) {
    callbacks = ref2[eventName];
    for (k = 0, len2 = callbacks.length; k < len2; k++) {
      callback = callbacks[k];
      newEl.on(eventName, callback);
    }
  }
  return newEl;
};

QuickElement.prototype.append = function(targetEl) {
  var prevParent;
  if (targetEl) {
    targetEl = helpers.normalizeGivenEl(targetEl);
    if (IS.quickDomEl(targetEl)) {
      prevParent = targetEl.parent;
      if (prevParent) {
        prevParent._removeChild(targetEl);
      }
      this._children.push(targetEl);
      this.el.appendChild(targetEl.el);
      targetEl._refreshParent();
    }
  }
  return this;
};

QuickElement.prototype.appendTo = function(targetEl) {
  if (targetEl) {
    targetEl = helpers.normalizeGivenEl(targetEl);
    if (IS.quickDomEl(targetEl)) {
      targetEl.append(this);
    }
  }
  return this;
};

QuickElement.prototype.prepend = function(targetEl) {
  var prevParent;
  if (targetEl) {
    targetEl = helpers.normalizeGivenEl(targetEl);
    if (IS.quickDomEl(targetEl)) {
      prevParent = targetEl.parent;
      if (prevParent) {
        prevParent._removeChild(targetEl);
      }
      this._children.unshift(targetEl);
      this.el.insertBefore(targetEl.el, this.el.firstChild);
      targetEl._refreshParent();
    }
  }
  return this;
};

QuickElement.prototype.prependTo = function(targetEl) {
  if (targetEl) {
    targetEl = helpers.normalizeGivenEl(targetEl);
    if (IS.quickDomEl(targetEl)) {
      targetEl.prepend(this);
    }
  }
  return this;
};

QuickElement.prototype.after = function(targetEl) {
  var myIndex;
  if (targetEl && this.parent) {
    targetEl = helpers.normalizeGivenEl(targetEl);
    if (IS.quickDomEl(targetEl)) {
      myIndex = this.parent._children.indexOf(this);
      this.parent._children.splice(myIndex + 1, 0, targetEl);
      this.el.parentNode.insertBefore(targetEl.el, this.el.nextSibling);
      targetEl._refreshParent();
    }
  }
  return this;
};

QuickElement.prototype.insertAfter = function(targetEl) {
  if (targetEl) {
    targetEl = helpers.normalizeGivenEl(targetEl);
    if (IS.quickDomEl(targetEl)) {
      targetEl.after(this);
    }
  }
  return this;
};

QuickElement.prototype.before = function(targetEl) {
  var myIndex;
  if (targetEl && this.parent) {
    targetEl = helpers.normalizeGivenEl(targetEl);
    if (IS.quickDomEl(targetEl)) {
      myIndex = this.parent._children.indexOf(this);
      this.parent._children.splice(myIndex, 0, targetEl);
      this.el.parentNode.insertBefore(targetEl.el, this.el);
      targetEl._refreshParent();
    }
  }
  return this;
};

QuickElement.prototype.insertBefore = function(targetEl) {
  if (targetEl) {
    targetEl = helpers.normalizeGivenEl(targetEl);
    if (IS.quickDomEl(targetEl)) {
      targetEl.before(this);
    }
  }
  return this;
};

QuickElement.prototype.detach = function() {
  var ref;
  if ((ref = this.parent) != null) {
    ref._removeChild(this);
  }
  return this;
};

QuickElement.prototype.remove = function() {
  var eventName;
  this.detach();
  this.resetState();
  if (this._eventCallbacks) {
    for (eventName in this._eventCallbacks) {
      this._eventCallbacks[eventName].length = 0;
    }
  }
  return this;
};

QuickElement.prototype.empty = function() {
  var child, i, len, ref;
  ref = this.children.slice();
  for (i = 0, len = ref.length; i < len; i++) {
    child = ref[i];
    this._removeChild(child);
  }
  return this;
};

QuickElement.prototype.wrap = function(targetEl) {
  var currentParent;
  if (targetEl) {
    targetEl = helpers.normalizeGivenEl(targetEl);
    currentParent = this.parent;
    if (IS.quickDomEl(targetEl) && targetEl !== this && targetEl !== this.parent) {
      if (currentParent) {
        currentParent._removeChild(this, !targetEl.parent ? targetEl : void 0);
      }
      targetEl.append(this);
    }
  }
  return this;
};

QuickElement.prototype.unwrap = function() {
  var grandParent, parent, parentChildren, parentSibling;
  parent = this.parent;
  if (parent) {
    parentChildren = QuickDom.batch(parent.children);
    parentSibling = parent.next;
    grandParent = parent.parent;
    if (grandParent) {
      parent.detach();
      if (parentSibling) {
        parentChildren.insertBefore(parentSibling);
      } else {
        parentChildren.appendTo(grandParent);
      }
    }
  }
  return this;
};

QuickElement.prototype.replace = function(targetEl) {
  var ref;
  if (targetEl) {
    targetEl = helpers.normalizeGivenEl(targetEl);
    if (IS.quickDomEl(targetEl) && targetEl !== this) {
      targetEl.detach();
      if ((ref = this.parent) != null) {
        ref._removeChild(this, targetEl);
      }
      targetEl._refreshParent();
    }
  }
  return this;
};

QuickElement.prototype.hasClass = function(target) {
  return helpers.includes(this.classList, target);
};

QuickElement.prototype.addClass = function(target) {
  var classList, targetIndex;
  classList = this.classList;
  targetIndex = classList.indexOf(target);
  if (targetIndex === -1) {
    classList.push(target);
    this.raw.className = classList.length > 1 ? classList.join(' ') : classList[0];
  }
  return this;
};

QuickElement.prototype.removeClass = function(target) {
  var classList, targetIndex;
  classList = this.classList;
  targetIndex = classList.indexOf(target);
  if (targetIndex !== -1) {
    classList.splice(targetIndex, 1);
    this.raw.className = classList.length ? classList.join(' ') : '';
  }
  return this;
};

QuickElement.prototype.toggleClass = function(target) {
  if (this.hasClass(target)) {
    this.removeClass(target);
  } else {
    this.addClass(target);
  }
  return this;
};

QuickElement.prototype._refreshParent = function() {
  return this.parent;
};

QuickElement.prototype._removeChild = function(targetChild, replacementChild) {
  var indexOfChild;
  indexOfChild = this._children.indexOf(targetChild);
  if (indexOfChild !== -1) {
    if (replacementChild) {
      this.el.replaceChild(replacementChild.el, targetChild.el);
      this._children.splice(indexOfChild, 1, replacementChild);
    } else {
      this.el.removeChild(targetChild.el);
      this._children.splice(indexOfChild, 1);
    }
  }
  return this;
};

Object.defineProperties(QuickElement.prototype, {
  'html': {
    get: function() {
      return this.el.innerHTML;
    },
    set: function(newValue) {
      return this.el.innerHTML = newValue;
    }
  },
  'text': {
    get: function() {
      return this.el.textContent;
    },
    set: function(newValue) {
      return this.el.textContent = newValue;
    }
  },
  'classList': {
    get: function() {
      var list;
      list = this.raw.className.split(/\s+/);
      if (list[list.length - 1] === '') {
        list.pop();
      }
      if (list[0] === '') {
        list.shift();
      }
      return list;
    }
  }
});

;

QuickElement.prototype.updateOptions = function(options) {
  if (IS.object(options)) {
    this.options = options;
    this._normalizeOptions();
    this._applyOptions(this.options);
  }
  return this;
};

QuickElement.prototype.applyData = function(data) {
  var child, computers, defaults, i, j, key, keys, len, len1, ref;
  if (computers = this.options.computers) {
    defaults = this.options.defaults;
    keys = Object.keys(computers);
    for (i = 0, len = keys.length; i < len; i++) {
      key = keys[i];
      if (data && data.hasOwnProperty(key)) {
        computers[key].call(this, data[key]);
      } else if (defaults && defaults.hasOwnProperty(key)) {
        computers[key].call(this, defaults[key]);
      }
    }
  }
  ref = this._children;
  for (j = 0, len1 = ref.length; j < len1; j++) {
    child = ref[j];
    child.applyData(data);
  }
};

;

;

var QuickWindow;

QuickWindow = {
  type: 'window',
  el: window,
  raw: window,
  _eventCallbacks: {
    __refs: {}
  }
};

QuickWindow.on = QuickElement.prototype.on;

QuickWindow.off = QuickElement.prototype.off;

QuickWindow.emit = QuickElement.prototype.emit;

QuickWindow._listenTo = QuickElement.prototype._listenTo;

Object.defineProperties(QuickWindow, {
  'width': {
    get: function() {
      return window.innerWidth;
    }
  },
  'height': {
    get: function() {
      return window.innerHeight;
    }
  },
  'orientation': orientationGetter,
  'aspectRatio': aspectRatioGetter
});

;

var MediaQuery, ruleDelimiter;

MediaQuery = new function() {
  var callbacks, testRule;
  callbacks = [];
  window.addEventListener('resize', function() {
    var callback, i, len;
    for (i = 0, len = callbacks.length; i < len; i++) {
      callback = callbacks[i];
      callback();
    }
  });
  this.parseQuery = function(target, queryString) {
    var querySplit, rules, source;
    querySplit = queryString.split('(');
    source = querySplit[0];
    source = (function() {
      switch (source) {
        case 'window':
          return QuickWindow;
        case 'parent':
          return target.parent;
        case 'self':
          return target;
        default:
          return target.parentMatching(function(parent) {
            return parent.ref === source.slice(1);
          });
      }
    })();
    rules = querySplit[1].slice(0, -1).split(ruleDelimiter).map(function(rule) {
      var getter, key, keyPrefix, max, min, split, value;
      split = rule.split(':');
      value = parseFloat(split[1]);
      if (isNaN(value)) {
        value = split[1];
      }
      key = split[0];
      keyPrefix = key.slice(0, 4);
      max = keyPrefix === 'max-';
      min = !max && keyPrefix === 'min-';
      if (max || min) {
        key = key.slice(4);
      }
      getter = (function() {
        switch (key) {
          case 'orientation':
            return function() {
              return source.orientation;
            };
          case 'aspect-ratio':
            return function() {
              return source.aspectRatio;
            };
          case 'width':
          case 'height':
            return function() {
              return source[key];
            };
          default:
            return function() {
              var parsedValue, stringValue;
              stringValue = source.style(key);
              parsedValue = parseFloat(stringValue);
              if (isNaN(parsedValue)) {
                return stringValue;
              } else {
                return parsedValue;
              }
            };
        }
      })();
      return {
        key: key,
        value: value,
        min: min,
        max: max,
        getter: getter
      };
    });
    return {
      source: source,
      rules: rules
    };
  };
  this.register = function(target, queryString) {
    var callback, query;
    query = this.parseQuery(target, queryString);
    if (query.source) {
      callbacks.push(callback = function() {
        return testRule(target, query, queryString);
      });
      callback();
    }
    return query;
  };
  testRule = function(target, query, queryString) {
    var currentValue, i, len, passed, ref, rule;
    passed = true;
    ref = query.rules;
    for (i = 0, len = ref.length; i < len; i++) {
      rule = ref[i];
      currentValue = rule.getter();
      passed = (function() {
        switch (false) {
          case !rule.min:
            return currentValue >= rule.value;
          case !rule.max:
            return currentValue <= rule.value;
          default:
            return currentValue === rule.value;
        }
      })();
      if (!passed) {
        break;
      }
    }
    return target.state(queryString, passed);
  };
  return this;
};

ruleDelimiter = /,\s*/;

;

QuickDom = function() {
  var args, argsLength, child, children, element, i, j, len, options, type;
  args = arguments;
  switch (false) {
    case !IS.array(args[0]):
      return QuickDom.apply(null, args[0]);
    case !IS.template(args[0]):
      return args[0].spawn();
    case !IS.quickDomEl(args[0]):
      if (args[1]) {
        return args[0].updateOptions(args[1]);
      } else {
        return args[0];
      }
    case !(IS.domNode(args[0]) || IS.domDoc(args[0])):
      if (args[0]._quickElement) {
        return args[0]._quickElement;
      }
      type = args[0].nodeName.toLowerCase().replace('#', '');
      options = args[1] || {};
      options.existing = args[0];
      return new QuickElement(type, options);
    case args[0] !== window:
      return QuickWindow;
    case !IS.string(args[0]):
      type = args[0].toLowerCase();
      if (type === 'text') {
        options = IS.object(args[1]) ? args[1] : {
          text: args[1] || ''
        };
      } else {
        options = IS.object(args[1]) ? args[1] : {};
      }
      element = new QuickElement(type, options);
      if (args.length > 2) {
        children = [];
        i = 1;
        argsLength = args.length;
        while (++i < argsLength) {
          children.push(args[i]);
        }
        for (j = 0, len = children.length; j < len; j++) {
          child = children[j];
          if (IS.string(child)) {
            child = QuickDom.text(child);
          }
          if (IS.template(child)) {
            child = child.spawn(false);
          }
          if (IS.array(child)) {
            child = QuickDom.apply(null, child);
          }
          if (IS.quickDomEl(child)) {
            child.appendTo(element);
          }
        }
      }
      return element;
  }
};

QuickDom.template = function(tree) {
  return new QuickTemplate(tree, true);
};

QuickDom.html = function(innerHTML) {
  var children, container;
  container = document.createElement('div');
  container.innerHTML = innerHTML;
  children = Array.prototype.slice.call(container.childNodes);
  return QuickDom.batch(children);
};

QuickDom.isTemplate = function(target) {
  return IS.template(target);
};

QuickDom.isQuickEl = function(target) {
  return IS.quickDomEl(target);
};

QuickDom.isEl = function(target) {
  return IS.domEl(target);
};

var QuickBatch;

QuickBatch = (function() {
  function QuickBatch(elements, returnResults1) {
    this.returnResults = returnResults1;
    this.elements = elements.map(function(el) {
      return QuickDom(el);
    });
  }

  QuickBatch.prototype.reverse = function() {
    this.elements = this.elements.reverse();
    return this;
  };

  QuickBatch.prototype["return"] = function(returnNext) {
    if (returnNext) {
      this.returnResults = true;
      return this;
    } else {
      return this.lastResults;
    }
  };

  return QuickBatch;

})();


/* istanbul ignore next */

if (QuickBatch.name == null) {
  QuickBatch.name = 'QuickBatch';
}

Object.keys(QuickElement.prototype).concat('css', 'replaceWith', 'html', 'text').forEach(function(method) {
  return QuickBatch.prototype[method] = function(newValue) {
    var element, results;
    results = this.lastResults = (function() {
      var i, len, ref, results1;
      ref = this.elements;
      results1 = [];
      for (i = 0, len = ref.length; i < len; i++) {
        element = ref[i];
        if (method === 'html' || method === 'text') {
          if (newValue) {
            results1.push(element[method] = newValue);
          } else {
            results1.push(element[method]);
          }
        } else {
          results1.push(element[method].apply(element, arguments));
        }
      }
      return results1;
    }).apply(this, arguments);
    if (this.returnResults) {
      return results;
    } else {
      return this;
    }
  };
});

QuickDom.batch = function(elements, returnResults) {
  if (!IS.iterable(elements)) {
    throw new Error("Batch: expected an iterable, got " + (String(elements)));
  } else if (!elements.length) {
    throw new Error("Batch: expected a non-empty element collection");
  }
  return new QuickBatch(elements, returnResults);
};

;

var QuickTemplate,
  slice = [].slice;

var extendByRef, extendTemplate;

extendTemplate = function(currentOpts, newOpts, globalOpts) {
  var currentChild, currentChildren, globalOptsTransform, i, index, needsTemplateWrap, newChild, newChildProcessed, newChildren, noChanges, output, ref, ref1, remainingNewChildren;
  if (globalOpts) {
    globalOptsTransform = {
      options: function(opts) {
        return extend(opts, globalOpts);
      }
    };
  }
  if (IS.array(newOpts)) {
    newOpts = parseTree(newOpts, false);
  }
  if (IS.template(newOpts)) {
    newOpts = newOpts._config;
  }
  output = extend.deep.notKeys('children').notDeep('relatedInstance').transform(globalOptsTransform).clone(currentOpts, newOpts);
  currentChildren = currentOpts.children;
  newChildren = (newOpts != null ? newOpts.children : void 0) || [];
  output.children = [];

  /* istanbul ignore next */
  if (IS.array(newChildren)) {
    for (index = i = 0, ref1 = Math.max(currentChildren.length, newChildren.length); 0 <= ref1 ? i < ref1 : i > ref1; index = 0 <= ref1 ? ++i : --i) {
      needsTemplateWrap = noChanges = false;
      currentChild = currentChildren[index];
      newChild = newChildren[index];
      newChildProcessed = (function() {
        switch (false) {
          case !IS.template(newChild):
            return newChild;
          case !IS.array(newChild):
            return needsTemplateWrap = parseTree(newChild, false);
          case !IS.string(newChild):
            return needsTemplateWrap = {
              type: 'text',
              options: {
                text: newChild
              }
            };
          case !(!newChild && !globalOpts):
            return noChanges = true;
          default:
            return needsTemplateWrap = newChild || true;
        }
      })();
      if (noChanges) {
        newChildProcessed = currentChild;
      } else if (needsTemplateWrap) {
        newChildProcessed = currentChild ? currentChild.extend(newChildProcessed, globalOpts) : new QuickTemplate(extend.deep.clone(schema, newChildProcessed));
      }
      output.children.push(newChildProcessed);
    }
  } else if (IS.object(newChildren)) {
    output.children = extendByRef(newChildren, currentChildren, globalOpts);
    remainingNewChildren = newChildren;
    for (ref in remainingNewChildren) {
      newChild = remainingNewChildren[ref];
      newChildProcessed = IS.objectPlain(newChild) && !IS.template(newChild) ? newChild : parseTree(newChild);
      output.children.push(new QuickTemplate(newChildProcessed));
      delete remainingNewChildren[ref];
    }
  }
  return output;
};

extendByRef = function(newChildrenRefs, currentChildren, globalOpts) {
  var currentChild, i, len, newChild, newChildProcessed, output;
  if (!currentChildren.length) {
    return currentChildren;
  } else {
    output = [];
    for (i = 0, len = currentChildren.length; i < len; i++) {
      currentChild = currentChildren[i];
      newChild = newChildrenRefs[currentChild.ref];
      if (newChild) {
        newChildProcessed = currentChild.extend(newChild, globalOpts);
        delete newChildrenRefs[currentChild.ref];
      } else if (newChild === null) {
        delete newChildrenRefs[currentChild.ref];
        continue;
      } else {
        newChildProcessed = (function() {
          switch (false) {
            case !globalOpts:
              return currentChild.extend(null, globalOpts);
            case !Object.keys(newChildrenRefs).length:
              return currentChild.extend();
            default:
              return currentChild;
          }
        })();
      }
      newChildProcessed._config.children = extendByRef(newChildrenRefs, newChildProcessed.children);
      output.push(newChildProcessed);
    }
    return output;
  }
};

;

var parseErrorPrefix, parseTree;

parseTree = function(tree, parseChildren) {
  var output;
  switch (false) {
    case !IS.array(tree):
      output = {};
      if (!IS.string(tree[0])) {
        throw new Error(parseErrorPrefix + " string for 'type', got '" + (String(tree[0])) + "'");
      } else {
        output.type = tree[0];
      }
      if (tree.length > 1 && !IS.object(tree[1]) && tree[1] !== null) {
        throw new Error(parseErrorPrefix + " object for 'options', got '" + (String(tree[1])) + "'");
      } else {
        output.options = tree[1] ? extend.deep.clone(tree[1]) : schema.options;
        if (tree[1]) {
          output.ref = tree[1].id || tree[1].ref;
        }
      }
      output.children = tree.slice(2);
      if (parseChildren === false) {
        if (tree.length === 3 && IS.objectPlain(tree[2]) && !IS.template(tree[2])) {
          output.children = tree[2];
        }
      } else {
        output.children = output.children.map(QuickDom.template);
      }
      return output;
    case !(IS.string(tree) || IS.domText(tree)):
      return {
        type: 'text',
        options: {
          text: tree.textContent || tree
        },
        children: schema.children
      };
    case !IS.domEl(tree):
      return {
        type: tree.nodeName.toLowerCase(),
        ref: tree.id,
        options: extend.clone.keys(allowedTemplateOptions)(tree),
        children: schema.children.map.call(tree.childNodes, QuickDom.template)
      };
    case !IS.quickDomEl(tree):
      return {
        type: tree.type,
        ref: tree.ref,
        options: extend.clone.deep.notKeys('relatedInstance')(tree.options),
        children: tree.children.map(QuickDom.template)
      };
    case !IS.template(tree):
      return extendTemplate(tree._config);
    default:
      throw new Error(parseErrorPrefix + " (array || string || domEl || quickDomEl || template), got " + (String(tree)));
  }
};

parseErrorPrefix = 'Template Parse Error: expected';

;

var schema;

schema = {
  type: 'div',
  ref: void 0,
  options: {},
  children: []
};

;

QuickTemplate = (function() {
  function QuickTemplate(config, isTree) {
    var child, i, len, ref;
    this._config = isTree ? parseTree(config) : config;
    this._hasComputers = !!this._config.options.computers;
    if (!this._hasComputers && this._config.children.length) {
      ref = this._config.children;
      for (i = 0, len = ref.length; i < len; i++) {
        child = ref[i];
        if (!(child._hasComputers || child._config.options.computers)) {
          continue;
        }
        this._hasComputers = true;
        break;
      }
    }
  }

  QuickTemplate.prototype.extend = function(newValues, globalOpts) {
    return new QuickTemplate(extendTemplate(this._config, newValues, globalOpts));
  };

  QuickTemplate.prototype.spawn = function(newValues, globalOpts) {
    var data, element, opts;
    if (newValues && newValues.data) {
      data = newValues.data;
      if (Object.keys(newValues).length === 1) {
        newValues = null;
      }
    }
    if (newValues || globalOpts) {
      opts = extendTemplate(this._config, newValues, globalOpts);
    } else {
      opts = extend.clone(this._config);
      opts.options = extend.deepOnly('style').clone(opts.options);
    }
    element = QuickDom.apply(null, [opts.type, opts.options].concat(slice.call(opts.children)));
    if (this._hasComputers && newValues !== false) {
      element.applyData(data);
    }
    return element;
  };

  return QuickTemplate;

})();


/* istanbul ignore next */

if (QuickTemplate.name == null) {
  QuickTemplate.name = 'QuickTemplate';
}

Object.keys(schema).forEach(function(key) {
  return Object.defineProperty(QuickTemplate.prototype, key, {
    get: function() {
      return this._config[key];
    }
  });
});

Object.defineProperty(QuickTemplate.prototype, 'child', {
  get: function() {
    return this._childRefs || _getChildRefs(this);
  }
});

;

var fn, i, len, shortcut, shortcuts,
  slice = [].slice;

shortcuts = ['link:a', 'anchor:a', 'a', 'text', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'footer', 'section', 'button', 'br', 'ul', 'ol', 'li', 'fieldset', 'input', 'textarea', 'select', 'option', 'form', 'frame', 'hr', 'iframe', 'img', 'picture', 'main', 'nav', 'meta', 'object', 'pre', 'style', 'table', 'tbody', 'th', 'tr', 'td', 'tfoot', 'video'];

fn = function(shortcut) {
  var prop, split, type;
  prop = type = shortcut;
  if (helpers.includes(shortcut, ':')) {
    split = shortcut.split(':');
    prop = split[0];
    type = split[1];
  }
  return QuickDom[prop] = function() {
    return QuickDom.apply(null, [type].concat(slice.call(arguments)));
  };
};
for (i = 0, len = shortcuts.length; i < len; i++) {
  shortcut = shortcuts[i];
  fn(shortcut);
}

;

QuickDom.version = "1.0.48";

module.exports = QuickDom;

;
return module.exports;
}
}, this);
if (typeof define === 'function' && define.umd) {
define(function () {
return require(0);
});
} else if (typeof module === 'object' && module.exports) {
module.exports = require(0);
} else {
return this['quickdom'] = require(0);
}
}).call(this, null);
