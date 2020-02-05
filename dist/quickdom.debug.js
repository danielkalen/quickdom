(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f(require('quickcss'),require('smart-extend'),require('@danielkalen/is')):typeof define==='function'&&define.amd?define(['quickcss','smart-extend','@danielkalen/is'],f):(g=g||self,g.quickdom=f(g.CSS,g.extend,g.IS_));}(this,(function(CSS, extend, IS_){'use strict';CSS=CSS&&CSS.hasOwnProperty('default')?CSS['default']:CSS;extend=extend&&extend.hasOwnProperty('default')?extend['default']:extend;IS_=IS_&&IS_.hasOwnProperty('default')?IS_['default']:IS_;function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}var template = ['id', 'name', 'type', 'href', 'selected', 'checked', 'className']; // To copy from DOM Elements

var element = ['id', 'ref', 'type', 'name', 'text', 'style', 'class', 'className', 'url', 'href', 'selected', 'checked', 'props', 'attrs', 'passStateToChildren', 'stateTriggers', 'unpassableStates']; // Used in QuickElement::toJSON
// 'relatedInstance'
var IS;
IS = IS_.create('natives', 'dom');
IS.load({
  quickDomEl: function quickDomEl(subject) {
    return subject && subject.constructor.name === 'QuickElement';
  },
  template: function template(subject) {
    return subject && subject.constructor.name === 'QuickTemplate';
  }
}); // batch: (subject)-> subject and subject.constructor.name is 'QuickBatch'

var IS$1 = IS;var QuickElement, QuickWindow, _quickdom;
QuickElement = null;
QuickWindow = null;

_quickdom = function quickdom() {
  var arg, args, element, i, j, len, prevCount;
  args = new Array(arguments.length);

  for (i = j = 0, len = arguments.length; j < len; i = ++j) {
    arg = arguments[i];
    args[i] = arg;
  }

  prevCount = QuickElement.count;
  element = _quickdom.create(args);

  if (element && element._postCreation && QuickElement.count !== prevCount) {
    element._postCreation();
  }

  return element;
};

_quickdom.create = function (args) {
  var argsLength, child, children, element, i, j, len, options, type;

  switch (false) {
    case !IS$1.array(args[0]):
      return _quickdom.apply(void 0, _toConsumableArray(args[0]));

    case !IS$1.template(args[0]):
      return args[0].spawn();

    case !IS$1.quickDomEl(args[0]):
      if (args[1]) {
        return args[0].updateOptions(args[1]);
      } else {
        return args[0];
      }

    case !(IS$1.domNode(args[0]) || IS$1.domDoc(args[0])):
      if (args[0]._quickElement) {
        return args[0]._quickElement;
      }

      type = args[0].nodeName.toLowerCase().replace('#', '');
      options = args[1] || {};
      options.existing = args[0];
      return new QuickElement(type, options);

    case args[0] !== window:
      return QuickWindow;

    case !IS$1.string(args[0]):
      type = args[0].toLowerCase();

      if (type === 'text') {
        options = IS$1.object(args[1]) ? args[1] : {
          text: args[1] || ''
        };
      } else {
        options = IS$1.object(args[1]) ? args[1] : {};
      }

      element = new QuickElement(type, options);

      if (args.length > 2) {
        children = new Array(argsLength = args.length);
        i = 1;

        while (++i < argsLength) {
          children[i + 1] = args[i];
        }

        for (j = 0, len = children.length; j < len; j++) {
          child = children[j];

          if (IS$1.string(child)) {
            child = _quickdom.text(child);
          }

          if (IS$1.array(child)) {
            child = _quickdom.apply(void 0, _toConsumableArray(child));
          }

          if (IS$1.quickDomEl(child)) {
            element.append(child);
          }
        }
      }

      return element;

    case !(args[0] && (IS$1.domNode(args[0][0]) || IS$1.domDoc(args[0][0]))):
      return _quickdom(args[0][0]);
  }
};

_quickdom.html = function (innerHTML) {
  var children, container;
  container = document.createElement('div');
  container.innerHTML = innerHTML;
  children = Array.prototype.slice.call(container.childNodes);
  return _quickdom.batch(children);
};

_quickdom.isQuickEl = function (target) {
  return IS$1.quickDomEl(target);
};

_quickdom.isEl = function (target) {
  return IS$1.domEl(target);
};
var init = function init(QuickElement_, QuickWindow_) {
  QuickElement = QuickElement_;
  QuickWindow = QuickWindow_;
  return _quickdom;
};var includes = function includes(target, item) {
  return target && target.indexOf(item) !== -1;
};
var removeItem = function removeItem(target, item) {
  var itemIndex;
  itemIndex = target.indexOf(item);

  if (itemIndex !== -1) {
    target.splice(itemIndex, 1);
  }

  return target;
};
var normalizeElementArg = function normalizeElementArg(targetEl) {
  switch (false) {
    case !IS$1.string(targetEl):
      return quickdom.text(targetEl);

    case !IS$1.domNode(targetEl):
      return quickdom(targetEl);

    case !IS$1.template(targetEl):
      return targetEl.spawn();

    default:
      return targetEl;
  }
};
var isStateStyle = function isStateStyle(string) {
  return string[0] === '$' || string[0] === '@';
};
var registerStyle = function registerStyle(rule, level, important) {
  var cached, i, len, output, prop, props;
  level || (level = 0);
  cached = styleCache.get(rule, level);

  if (cached) {
    return cached;
  }

  output = {
    className: [CSS.register(rule, level, important)],
    fns: [],
    rule: rule
  };
  props = Object.keys(rule);

  for (i = 0, len = props.length; i < len; i++) {
    prop = props[i];

    if (typeof rule[prop] === 'function') {
      output.fns.push([prop, rule[prop]]);
    }
  }

  return styleCache.set(rule, output, level);
};
var styleCache = new (
/*#__PURE__*/
function () {
  function _class() {
    _classCallCheck(this, _class);

    this.keys = Object.create(null);
    this.values = Object.create(null);
  }

  _createClass(_class, [{
    key: "get",
    value: function get(key, level) {
      var index;

      if (this.keys[level]) {
        index = this.keys[level].indexOf(key);

        if (index !== -1) {
          return this.values[level][index];
        }
      }
    }
  }, {
    key: "set",
    value: function set(key, value, level) {
      if (!this.keys[level]) {
        this.keys[level] = [];
        this.values[level] = [];
      }

      this.keys[level].push(key);
      this.values[level].push(value);
      return value;
    }
  }]);

  return _class;
}())();var REGEX_WHITESPACE;
REGEX_WHITESPACE = /\s+/;
var on_ = function on_(eventNames, callback, useCapture, isPrivate) {
  var _this = this;

  var callbackRef, split;

  if (this._eventCallbacks == null) {
    this._eventCallbacks = {
      __refs: {}
    };
  }

  if (IS$1.string(eventNames) && IS$1["function"](callback)) {
    split = eventNames.split('.');
    callbackRef = split[1];
    eventNames = split[0];

    if (eventNames === 'inserted' && this._inserted) {
      callback.call(this, this._parent);
      return this;
    }

    eventNames.split(REGEX_WHITESPACE).forEach(function (eventName) {
      var base;

      if (!_this._eventCallbacks[eventName]) {
        _this._eventCallbacks[eventName] = [];

        if (!isPrivate) {
          _this._listenTo(eventName, function (event) {
            return _this._invokeHandlers(eventName, event);
          }, useCapture);
        }
      }

      if (callbackRef) {
        if ((base = _this._eventCallbacks.__refs)[eventName] == null) {
          base[eventName] = {};
        }

        _this._eventCallbacks.__refs[eventName][callbackRef] = callback;
      }

      return _this._eventCallbacks[eventName].push(callback);
    });
  }

  return this;
};
var once = function once(eventNames, callback) {
  var _this2 = this;

  var _onceCallback;

  if (IS$1.string(eventNames) && IS$1["function"](callback)) {
    this.on(eventNames, _onceCallback = function onceCallback(event) {
      _this2.off(eventNames, _onceCallback);

      return callback.call(_this2, event);
    });
  }

  return this;
};
var off_ = function off_(eventNames, callback) {
  var _this3 = this;

  var callbackRef, eventName, split;

  if (this._eventCallbacks == null) {
    this._eventCallbacks = {
      __refs: {}
    };
  }

  if (!IS$1.string(eventNames)) {
    for (eventName in this._eventCallbacks) {
      this.off(eventName);
    }
  } else {
    split = eventNames.split('.');
    callbackRef = split[1];
    eventNames = split[0];
    eventNames.split(REGEX_WHITESPACE).forEach(function (eventName) {
      var ref;

      if (_this3._eventCallbacks[eventName]) {
        if (callback == null) {
          callback = (ref = _this3._eventCallbacks.__refs[eventName]) != null ? ref[callbackRef] : void 0;
        }

        if (IS$1["function"](callback)) {
          return removeItem(_this3._eventCallbacks[eventName], callback);
        } else if (!callbackRef) {
          return _this3._eventCallbacks[eventName].length = 0;
        }
      }
    });
  }

  return this;
};
var emit = function emit(eventName) {
  var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var data = arguments.length > 3 ? arguments[3] : undefined;
  var event;

  if (eventName && IS$1.string(eventName)) {
    event = document.createEvent('Event');
    event.initEvent(eventName, bubbles, cancelable);

    if (data && _typeof(data) === 'object') {
      extend(event, data);
    }

    this.el.dispatchEvent(event);
  }

  return this;
};
var emitPrivate = function emitPrivate(eventName, arg) {
  var ref;

  if (eventName && IS$1.string(eventName) && ((ref = this._eventCallbacks) != null ? ref[eventName] : void 0)) {
    this._invokeHandlers(eventName, arg);
  }

  return this;
};
var _invokeHandlers = function _invokeHandlers(eventName, arg) {
  var callbacks, cb, i, len;
  callbacks = this._eventCallbacks[eventName].slice();

  for (i = 0, len = callbacks.length; i < len; i++) {
    cb = callbacks[i];
    cb.call(this, arg);
  }
};
/* istanbul ignore next */

var _listenTo = function _listenTo(eventName, callback, useCapture) {
  var eventNameToListenFor, listenMethod;
  listenMethod = this.el.addEventListener ? 'addEventListener' : 'attachEvent';
  eventNameToListenFor = this.el.addEventListener ? eventName : "on".concat(eventName);
  this.el[listenMethod](eventNameToListenFor, callback, useCapture);
  return this;
};
function events (QuickElement) {
  QuickElement.prototype.on = on_;
  QuickElement.prototype.once = once;
  QuickElement.prototype.off = off_;
  QuickElement.prototype.emit = emit;
  QuickElement.prototype.emitPrivate = emitPrivate;
  QuickElement.prototype._invokeHandlers = _invokeHandlers;
  return QuickElement.prototype._listenTo = _listenTo;
}/**
 * Sets/gets the value of a style property. In getter mode the computed property of
 * the style will be returned unless the element is not inserted into the DOM. In
 * webkit browsers all computed properties of a detached node are always an empty
 * string but in gecko they reflect on the actual computed value, hence we need
 * to "normalize" this behavior and make sure that even on gecko an empty string
 * is returned
 * @return {[type]} [description]
 */

var style = function style(property) {
  var _this = this;

  var args, i, key, keys, result, value;

  if (this.type === 'text') {
    return;
  }

  args = arguments;

  if (IS$1.string(property)) {
    value = typeof args[1] === 'function' ? args[1].call(this, this.related) : args[1];

    if (args[1] === null && IS$1.defined(this.currentStateStyle(property)) && !IS$1["function"](this.currentStateStyle(property))) {
      value = CSS.UNSET;
    }

    if (value && typeof value.then === 'function') {
      value.then(function (value) {
        return CSS(_this.el, property, value, _this.options.forceStyle);
      });
    } else {
      result = CSS(this.el, property, value, this.options.forceStyle);
    }

    if (args.length === 1) {
      /* istanbul ignore next */
      if (this._inserted) {
        return result;
      } else if (!result) {
        return result;
      } else {
        return '';
      }
    }
  } else if (IS$1.object(property)) {
    keys = Object.keys(property);
    i = -1;

    while (key = keys[++i]) {
      this.style(key, property[key]);
    }
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

var styleSafe = function styleSafe(property, skipComputed) {
  var computed, result, sample;

  if (this.type === 'text') {
    return;
  }

  sample = this.el.style[property];

  if (IS$1.string(sample) || IS$1.number(sample)) {
    computed = skipComputed ? 0 : this.style(property);
    result = computed || this.el.style[property] || this.currentStateStyle(property) || '';

    if (typeof result === 'function') {
      return result.call(this, this.related);
    } else {
      return result;
    }
  }

  return this;
};
var styleParsed = function styleParsed(property, skipComputed) {
  return parseFloat(this.styleSafe(property, skipComputed));
};
var recalcStyle = function recalcStyle(recalcChildren) {
  var child, j, len, ref, targetStyles;
  targetStyles = this._resolveFnStyles(this._getActiveStates(), true);
  this.style(targetStyles);

  if (recalcChildren) {
    ref = this._children;

    for (j = 0, len = ref.length; j < len; j++) {
      child = ref[j];
      child.recalcStyle();
    }
  }

  return this;
};
var currentStateStyle = function currentStateStyle(property) {
  var i, state, states;

  if (property) {
    if (this._state.length) {
      states = this._state.slice();

      if (this._stateShared && this._stateShared.length) {
        var _states;

        (_states = states).push.apply(_states, _toConsumableArray(this._stateShared));
      }

      i = states.length;

      while (state = states[--i]) {
        if (this._styles[state] && IS$1.defined(this._styles[state].rule[property])) {
          return this._styles[state].rule[property];
        }
      }
    }

    if (this._styles.base) {
      return this._styles.base.rule[property];
    }
  }
};
var hide = function hide() {
  return this.style('display', 'none');
};
var show = function show(display) {
  var ref;

  if (!display) {
    display = this.currentStateStyle('display');

    if (display === 'none' || !display) {
      display = 'block';
    }
  }

  if (display == null) {
    display = ((ref = this._styles.base) != null ? ref.display : void 0) || 'block';
  }

  return this.style('display', display);
};
var orientationGetter = {
  get: function get() {
    if (this.width > this.height) {
      return 'landscape';
    } else {
      return 'portrait';
    }
  }
};
var aspectRatioGetter = {
  get: function get() {
    return this.width / this.height;
  }
};
function style$1 (QuickElement) {
  Object.defineProperties(QuickElement.prototype, {
    'orientation': orientationGetter,
    'aspectRatio': aspectRatioGetter,
    'rect': {
      get: function get() {
        return this.el.getBoundingClientRect();
      }
    },
    'width': {
      get: function get() {
        return parseFloat(this.style('width'));
      },
      set: function set(value) {
        return this.style('width', value);
      }
    },
    'height': {
      get: function get() {
        return parseFloat(this.style('height'));
      },
      set: function set(value) {
        return this.style('height', value);
      }
    }
  });
  QuickElement.prototype.style = style;
  QuickElement.prototype.styleSafe = styleSafe;
  QuickElement.prototype.styleParsed = styleParsed;
  QuickElement.prototype.recalcStyle = recalcStyle;
  QuickElement.prototype.currentStateStyle = currentStateStyle;
  QuickElement.prototype.hide = hide;
  return QuickElement.prototype.show = show;
}var QuickWindow$1;
var QuickWindow$2 = QuickWindow$1 = {
  type: 'window',
  el: window,
  raw: window,
  _eventCallbacks: {
    __refs: {}
  }
};
QuickWindow$1.on = on_;
QuickWindow$1.off = off_;
QuickWindow$1.emit = emit;
QuickWindow$1.emitPrivate = emitPrivate;
QuickWindow$1._listenTo = _listenTo;
QuickWindow$1._invokeHandlers = _invokeHandlers;
Object.defineProperties(QuickWindow$1, {
  'width': {
    get: function get() {
      return window.innerWidth;
    }
  },
  'height': {
    get: function get() {
      return window.innerHeight;
    }
  },
  'orientation': orientationGetter,
  'aspectRatio': aspectRatioGetter
});var MediaQuery, RULE_DEILIMITER;
RULE_DEILIMITER = /,\s*/;
var MediaQuery$1 = MediaQuery = new function () {
  var callbacks, testRule;
  callbacks = [];
  window.addEventListener('resize', function () {
    var callback, i, len;

    for (i = 0, len = callbacks.length; i < len; i++) {
      callback = callbacks[i];
      callback();
    }
  });

  this.parseQuery = function (target, queryString) {
    var querySplit, rules, source;
    querySplit = queryString.split('(');
    source = querySplit[0];

    source = function () {
      switch (source) {
        case 'window':
          return QuickWindow$2;

        case 'parent':
          return target.parent;

        case 'self':
          return target;

        default:
          return target.parentMatching(function (parent) {
            return parent.ref === source.slice(1);
          });
      }
    }();

    rules = querySplit[1].slice(0, -1).split(RULE_DEILIMITER).map(function (rule) {
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

      getter = function () {
        switch (key) {
          case 'orientation':
            return function () {
              return source.orientation;
            };

          case 'aspect-ratio':
            return function () {
              return source.aspectRatio;
            };

          case 'width':
          case 'height':
            return function () {
              return source[key];
            };

          default:
            return function () {
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
      }();

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

  this.register = function (target, queryString) {
    var callback, query;
    query = this.parseQuery(target, queryString);

    if (query.source) {
      callbacks.push(callback = function callback() {
        return testRule(target, query, queryString);
      });
      callback();
    }

    return query;
  };

  testRule = function testRule(target, query, queryString) {
    var currentValue, i, len, passed, ref, rule;
    passed = true;
    ref = query.rules;

    for (i = 0, len = ref.length; i < len; i++) {
      rule = ref[i];
      currentValue = rule.getter();

      passed = function () {
        switch (false) {
          case !rule.min:
            return currentValue >= rule.value;

          case !rule.max:
            return currentValue <= rule.value;

          default:
            return currentValue === rule.value;
        }
      }();

      if (!passed) {
        break;
      }
    }

    return target.state(queryString, passed);
  };

  return this;
}();var StateChain;
var StateChain$1 = StateChain =
/*#__PURE__*/
function () {
  function StateChain(states) {
    _classCallCheck(this, StateChain);

    this.string = states.join('+');
    this.array = states.slice();
    this.length = states.length;
  }

  _createClass(StateChain, [{
    key: "includes",
    value: function includes(target) {
      var i, len, ref, state;
      ref = this.array;

      for (i = 0, len = ref.length; i < len; i++) {
        state = ref[i];

        if (state === target) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "without",
    value: function without(target) {
      return this.array.filter(function (state) {
        return state !== target;
      }).join('+');
    }
  }, {
    key: "isApplicable",
    value: function isApplicable(target, otherActive) {
      var active;
      active = this.array.filter(function (state) {
        return state === target || otherActive.indexOf(state) !== -1;
      });
      return active.length === this.array.length;
    }
  }]);

  return StateChain;
}();var BASE_STATE_TRIGGERS, CACHED_FN_INSERTED;
BASE_STATE_TRIGGERS = {
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
var _normalizeOptions = function _normalizeOptions() {
  var base1, base2, base3, base4, base5;

  if (this.options.relatedInstance) {
    (base1 = this.options).related || (base1.related = this.options.relatedInstance);
    this.options.relatedInstance = null;
  }

  this.related = (base2 = this.options).related != null ? base2.related : base2.related = this;

  if (this.options["class"]) {
    this.options.className = this.options["class"];
  }

  if (this.options.url) {
    this.options.href = this.options.url;
  }

  if ((base3 = this.options).unpassableStates == null) {
    base3.unpassableStates = [];
  }

  if ((base4 = this.options).passStateToChildren == null) {
    base4.passStateToChildren = true;
  }

  if ((base5 = this.options).passDataToChildren == null) {
    base5.passDataToChildren = true;
  }

  this.options.stateTriggers = this.options.stateTriggers ? extend.clone.deep(BASE_STATE_TRIGGERS, this.options.stateTriggers) : BASE_STATE_TRIGGERS;

  if (this.type === 'text') {
    extend(this, this._parseTexts(this.options.text, this._texts));
  } else {
    extend(this, this._parseStyles(this.options.style, this._styles));
  }
};
var _parseStyles = function _parseStyles(styles, store) {
  var _mediaStates, _providedStates, _providedStatesShared, _stateShared, _styles, base, _flattenNestedStates, forceStyle, i, keys, len, specialStates, state, stateStyles, state_, states;

  if (!IS$1.objectPlain(styles)) {
    return;
  }

  keys = Object.keys(styles);
  states = keys.filter(function (key) {
    return isStateStyle(key);
  });
  specialStates = removeItem(states.slice(), '$base');
  _mediaStates = states.filter(function (key) {
    return key[0] === '@';
  }).map(function (state) {
    return state.slice(1);
  });
  _providedStates = states.map(function (state) {
    return state.slice(1); // Remove '$' prefix
  });
  _styles = store || {};
  _stateShared = _providedStatesShared = void 0;
  base = !includes(states, '$base') ? styles : styles.$base;
  _styles.base = registerStyle(base, 0, forceStyle = this.options.forceStyle);

  if (specialStates.length) {
    _flattenNestedStates = function flattenNestedStates(styleObject, chain, level) {
      var hasNonStateProps, i, len, output, state, stateChain, state_, styleKeys;
      styleKeys = Object.keys(styleObject);
      output = {};
      hasNonStateProps = false;

      for (i = 0, len = styleKeys.length; i < len; i++) {
        state = styleKeys[i];

        if (!isStateStyle(state)) {
          hasNonStateProps = true;
          output[state] = styleObject[state];
        } else {
          chain.push(state_ = state.slice(1));
          stateChain = new StateChain$1(chain);

          if (_stateShared == null) {
            _stateShared = [];
          }

          if (_providedStatesShared == null) {
            _providedStatesShared = [];
          }

          _providedStatesShared.push(stateChain);

          if (state[0] === '@') {
            _mediaStates.push(state_);
          }

          _styles[stateChain.string] = registerStyle(_flattenNestedStates(styleObject[state], chain, level + 1), level + 1, forceStyle);
        }
      }

      if (hasNonStateProps) {
        return output;
      }
    };

    for (i = 0, len = specialStates.length; i < len; i++) {
      state = specialStates[i];
      state_ = state.slice(1);
      stateStyles = _flattenNestedStates(styles[state], [state_], 1);

      if (stateStyles) {
        _styles[state_] = registerStyle(stateStyles, 1);
      }
    }
  }

  return {
    _styles: _styles,
    _mediaStates: _mediaStates,
    _stateShared: _stateShared,
    _providedStates: _providedStates,
    _providedStatesShared: _providedStatesShared
  };
};
var _parseTexts = function _parseTexts(texts, store) {
  var _providedStates, _texts, i, len, state, states;

  if (!IS$1.objectPlain(texts)) {
    return;
  }

  states = Object.keys(texts).map(function (state) {
    return state.slice(1);
  });
  _providedStates = states.filter(function (state) {
    return state !== 'base';
  });
  _texts = store || {};
  _texts = {
    base: ''
  };

  for (i = 0, len = states.length; i < len; i++) {
    state = states[i];
    _texts[state] = texts['$' + state];
  }

  return {
    _texts: _texts,
    _providedStates: _providedStates
  };
};
var _applyOptions = function _applyOptions() {
  var _this = this;

  var event, handler, method, ref, ref1, ref2, value;

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
    this.prop(this.options.props);
  }

  if (this.options.attrs) {
    this.attr(this.options.attrs);
  }

  this._applyRegisteredStyle(this._styles.base, null, null, this.options.styleAfterInsert);

  if (this._texts) {
    this.text = this._texts.base;
  }

  this.on('inserted', CACHED_FN_INSERTED, false, true);

  if (this.options.invokeComputersOnce) {
    this._invokedComputers = {};
  }

  if (this.options.recalcOnResize) {
    window.addEventListener('resize', function () {
      return _this.recalcStyle();
    });
  }

  if (this.options.events) {
    ref1 = this.options.events;

    for (event in ref1) {
      handler = ref1[event];
      this.on(event, handler);
    }
  }

  if (this.options.methods) {
    ref2 = this.options.methods;

    for (method in ref2) {
      value = ref2[method];

      if (!this[method]) {
        if (IS$1["function"](value)) {
          this[method] = value;
        } else if (IS$1.object(value)) {
          Object.defineProperty(this, method, {
            configurable: true,
            get: value.get,
            set: value.set
          });
        }
      }
    }
  }

  if (this.type !== 'text' && IS$1.object(this.options.text)) {
    this.append(_quickdom('text', {
      text: this.options.text
    }));
  }
};
var _postCreation = function _postCreation(data) {
  if (this.options.computers) {
    if (data && this.options.data) {
      data = extend.clone(this.options.data, data);
    }

    data || (data = this.options.data);
    this.applyData(data, false);

    if (this.options.computers._init) {
      this._runComputer('_init', data);
    }
  }

  if (this.options.state) {
    this.state(this.options.state);
  }
};
var _attachStateEvents = function _attachStateEvents(force) {
  var _this2 = this;

  var states;
  states = Object.keys(this.options.stateTriggers);
  states.forEach(function (state) {
    var disabler, enabler, trigger;
    trigger = _this2.options.stateTriggers[state];

    if (!includes(_this2._providedStates, state) && !force && !trigger.force) {
      return;
    }

    enabler = IS$1.string(trigger) ? trigger : trigger.on;

    if (IS$1.object(trigger)) {
      disabler = trigger.off;
    }

    _this2._listenTo(enabler, function () {
      return _this2.state(state, true, trigger.bubbles);
    });

    if (disabler) {
      return _this2._listenTo(disabler, function () {
        return _this2.state(state, false, trigger.bubbles);
      });
    }
  });
};
var _proxyParent = function _proxyParent() {
  var parent;
  parent = void 0;
  return Object.defineProperty(this, '_parent', {
    get: function get() {
      return parent;
    },
    set: function set(newParent) {
      var _this3 = this;

      var lastParent;

      if (parent = newParent) {
        lastParent = this.parents.slice(-1)[0];

        if (lastParent.raw === document.documentElement) {
          this._unproxyParent(newParent);
        } else {
          parent.on('inserted', function () {
            if (parent === newParent) {
              return _this3._unproxyParent(newParent);
            }
          });
        }
      }
    }
  });
};
var _unproxyParent = function _unproxyParent(newParent) {
  delete this._parent;
  this._parent = newParent;
  this.emitPrivate('inserted', newParent);
};

CACHED_FN_INSERTED = function CACHED_FN_INSERTED() {
  var i, len, mediaStates, queryString, results;
  this._inserted = this;

  if (this.options.styleAfterInsert) {
    this.recalcStyle();
  }

  if ((mediaStates = this._mediaStates) && this._mediaStates.length) {
    this._mediaStates = Object.create(null);
    results = [];

    for (i = 0, len = mediaStates.length; i < len; i++) {
      queryString = mediaStates[i];
      results.push(this._mediaStates[queryString] = MediaQuery$1.register(this, queryString));
    }

    return results;
  }
};

function init$1 (QuickElement) {
  QuickElement.prototype._normalizeOptions = _normalizeOptions;
  QuickElement.prototype._parseStyles = _parseStyles;
  QuickElement.prototype._parseTexts = _parseTexts;
  QuickElement.prototype._applyOptions = _applyOptions;
  QuickElement.prototype._postCreation = _postCreation;
  QuickElement.prototype._attachStateEvents = _attachStateEvents;
  QuickElement.prototype._proxyParent = _proxyParent;
  return QuickElement.prototype._unproxyParent = _unproxyParent;
}function aliases (QuickElement) {
  return Object.defineProperties(QuickElement.prototype, {
    'raw': {
      get: function get() {
        return this.el;
      }
    },
    '0': {
      get: function get() {
        return this.el;
      }
    },
    'css': {
      get: function get() {
        return this.style;
      }
    },
    'replaceWith': {
      get: function get() {
        return this.replace;
      }
    },
    'removeListener': {
      get: function get() {
        return this.off;
      }
    }
  });
}var parentsUntil = function parentsUntil(filter) {
  return _getParents(this, filter);
};
var parentMatching = function parentMatching(filter) {
  var isRef, nextParent;

  if (IS$1["function"](filter) || (isRef = IS$1.string(filter))) {
    nextParent = this.parent;

    while (nextParent) {
      if (isRef) {
        if (nextParent.ref === filter) {
          return nextParent;
        }
      } else {
        if (filter(nextParent)) {
          return nextParent;
        }
      }

      nextParent = nextParent.parent;
    }
  }
};
var query = function query(selector) {
  return _quickdom(this.raw.querySelector(selector));
};
var queryAll = function queryAll(selector) {
  var i, item, len, output, result;
  result = this.raw.querySelectorAll(selector);
  output = [];

  for (i = 0, len = result.length; i < len; i++) {
    item = result[i];
    output.push(item);
  }

  return _quickdom.batch(output);
};
var _getParents = function _getParents(targetEl, filter) {
  var isRef, nextParent, parents;

  if (!IS$1["function"](filter) && !(isRef = IS$1.string(filter))) {
    filter = void 0;
  }

  parents = [];
  nextParent = targetEl.parent;

  while (nextParent) {
    parents.push(nextParent);
    nextParent = nextParent.parent;

    if (isRef) {
      if (nextParent && nextParent.ref === filter) {
        nextParent = null;
      }
    } else if (filter) {
      if (filter(nextParent)) {
        nextParent = null;
      }
    }
  }

  return parents;
};
var _getChildRefs = function _getChildRefs(target, freshCopy) {
  var child, childRefs, children, el, i, len, ref, refs;

  if (freshCopy || !target._childRefs) {
    target._childRefs = {};
  }

  refs = target._childRefs;

  if (target.ref) {
    refs[target.ref] = target;
  }

  children = target.children;

  if (children.length) {
    for (i = 0, len = children.length; i < len; i++) {
      child = children[i];
      childRefs = _getChildRefs(child, freshCopy);

      for (ref in childRefs) {
        el = childRefs[ref];
        refs[ref] || (refs[ref] = el);
      }
    }
  }

  return refs;
};
var _getIndexByProp = function _getIndexByProp(main, prop) {
  var parent;

  if (!(parent = main.parent)) {
    return null;
  } else {
    return parent.children.filter(function (child) {
      return child[prop] === main[prop];
    }).indexOf(main);
  }
};
var _filterElements = function _filterElements(array) {
  var i, item, len, output;

  if (!array.length) {
    return array;
  } else {
    output = [];

    for (i = 0, len = array.length; i < len; i++) {
      item = array[i];

      if (item.type !== 'text') {
        output.push(item);
      }
    }

    return output;
  }
};
function traversing (QuickElement) {
  QuickElement.prototype.parentsUntil = parentsUntil;
  QuickElement.prototype.parentMatching = parentMatching;
  QuickElement.prototype.query = query;
  QuickElement.prototype.queryAll = queryAll;
  return Object.defineProperties(QuickElement.prototype, {
    'children': {
      get: function get() {
        var child, i, len, ref1;

        if (this.el.childNodes.length !== this._children.length) {
          // Re-collect children	
          this._children.length = 0; // Empty out children array

          ref1 = this.el.childNodes;

          for (i = 0, len = ref1.length; i < len; i++) {
            child = ref1[i];

            if (child.nodeType < 4) {
              this._children.push(_quickdom(child));
            }
          }
        }

        return this._children;
      }
    },
    'elementChildren': {
      get: function get() {
        return _filterElements(this.children);
      }
    },
    'parent': {
      get: function get() {
        if ((!this._parent || this._parent.el !== this.el.parentNode) && !IS$1.domDoc(this.el.parentNode)) {
          this._parent = _quickdom(this.el.parentNode);
        }

        return this._parent;
      }
    },
    'parents': {
      get: function get() {
        return _getParents(this);
      }
    },
    'next': {
      get: function get() {
        return _quickdom(this.el.nextSibling);
      }
    },
    'nextEl': {
      get: function get() {
        return _quickdom(this.el.nextElementSibling);
      }
    },
    'nextElAll': {
      get: function get() {
        return _filterElements(this.nextAll);
      }
    },
    'nextAll': {
      get: function get() {
        var nextSibling, siblings;
        siblings = [];
        nextSibling = _quickdom(this.el.nextSibling);

        while (nextSibling) {
          siblings.push(nextSibling);
          nextSibling = nextSibling.next;
        }

        return siblings;
      }
    },
    'prev': {
      get: function get() {
        return _quickdom(this.el.previousSibling);
      }
    },
    'prevEl': {
      get: function get() {
        return _quickdom(this.el.previousElementSibling);
      }
    },
    'prevElAll': {
      get: function get() {
        return _filterElements(this.prevAll);
      }
    },
    'prevAll': {
      get: function get() {
        var prevSibling, siblings;
        siblings = [];
        prevSibling = _quickdom(this.el.previousSibling);

        while (prevSibling) {
          siblings.push(prevSibling);
          prevSibling = prevSibling.prev;
        }

        return siblings;
      }
    },
    'siblings': {
      get: function get() {
        return this.prevAll.reverse().concat(this.nextAll);
      }
    },
    'elementSiblings': {
      get: function get() {
        return _filterElements(this.siblings);
      }
    },
    'child': {
      get: function get() {
        return this._childRefs || _getChildRefs(this);
      }
    },
    'childf': {
      get: function get() {
        return _getChildRefs(this, true);
      }
    },
    'firstChild': {
      get: function get() {
        return this.children[0];
      }
    },
    'lastChild': {
      get: function get() {
        var children;
        children = this.children;
        return children[children.length - 1];
      }
    },
    'index': {
      get: function get() {
        var parent;

        if (!(parent = this.parent)) {
          return null;
        } else {
          return parent.children.indexOf(this);
        }
      }
    },
    'indexType': {
      get: function get() {
        return _getIndexByProp(this, 'type');
      }
    },
    'indexRef': {
      get: function get() {
        return _getIndexByProp(this, 'ref');
      }
    }
  });
}

_quickdom.query = function (target) {
  return _quickdom(document).query(target);
};

_quickdom.queryAll = function (target) {
  return _quickdom(document).queryAll(target);
};var DUMMY_ARRAY;
DUMMY_ARRAY = [];
var state = function state(targetState, value, bubbles, source) {
  var activeStates, child, desiredValue, i, j, key, keys, len, prop, ref, toggle;

  if (arguments.length === 0) {
    return this._state.slice();
  }

  if (arguments.length === 1) {
    if (IS$1.string(targetState)) {
      return includes(this._state, targetState);
    } else if (IS$1.object(targetState)) {
      keys = Object.keys(targetState);
      i = -1;

      while (key = keys[++i]) {
        this.state(key, targetState[key]);
      }

      return this;
    }
  } else if (this._statePipeTarget && source !== this) {
    this._statePipeTarget.state(targetState, value, bubbles, this);

    return this;
  } else if (IS$1.string(targetState)) {
    if (targetState[0] === '$') {
      targetState = targetState.slice(1);
    }

    if (targetState === 'base') {
      return this;
    }

    desiredValue = !!value; // Convert the value to a boolean

    activeStates = this._getActiveStates(targetState, false); // ==== Toggle styles for this state =================================================================================

    if (this.state(targetState) !== desiredValue) {
      prop = this.type === 'text' ? 'Text' : 'Style';

      if (desiredValue) {
        //is on
        this._state.push(targetState);

        toggle = 'ON';
      } else {
        removeItem(this._state, targetState);
        toggle = 'OFF';
      }

      this['_turn' + prop + toggle](targetState, activeStates);
      this.emitPrivate("stateChange:".concat(targetState), desiredValue);
    } // ==== Pass state to parent/children =================================================================================


    if (!includes(this.options.unpassableStates, targetState)) {
      if (bubbles) {
        if (this.parent) {
          this._parent.state(targetState, value, true, source || this);
        }
      } else if (this.options.passStateToChildren) {
        ref = this._children;

        for (j = 0, len = ref.length; j < len; j++) {
          child = ref[j];
          child.state(targetState, value, false, source || this);
        }
      }
    }

    return this;
  }
};
var toggleState = function toggleState(targetState) {
  return this.state(targetState, !this.state(targetState));
};
var resetState = function resetState() {
  var activeState, j, len, ref;
  ref = this._state.slice();

  for (j = 0, len = ref.length; j < len; j++) {
    activeState = ref[j];
    this.state(activeState, false);
  }

  return this;
};
var pipeState = function pipeState(targetEl) {
  var activeState, j, len, ref;

  if (targetEl) {
    targetEl = normalizeElementArg(targetEl);

    if (IS$1.quickDomEl(targetEl) && targetEl !== this) {
      this._statePipeTarget = targetEl;
      ref = this._state;

      for (j = 0, len = ref.length; j < len; j++) {
        activeState = ref[j];
        targetEl.state(activeState, true);
      }
    }
  } else if (targetEl === false) {
    delete this._statePipeTarget;
  }

  return this;
};
var _applyRegisteredStyle = function _applyRegisteredStyle(targetStyle, superiorStates, includeBase, skipFns) {
  var className, entry, j, k, len, len1, ref, ref1, superiorStyles;

  if (targetStyle) {
    ref = targetStyle.className;

    for (j = 0, len = ref.length; j < len; j++) {
      className = ref[j];
      this.addClass(className);
    }

    if (targetStyle.fns.length && !skipFns) {
      if (superiorStates) {
        superiorStyles = this._resolveFnStyles(superiorStates, includeBase);
      }

      ref1 = targetStyle.fns;

      for (k = 0, len1 = ref1.length; k < len1; k++) {
        entry = ref1[k];

        if (!(superiorStyles && superiorStyles[entry[0]])) {
          this.style(entry[0], entry[1]);
        }
      }
    }
  }
};
var _removeRegisteredStyle = function _removeRegisteredStyle(targetStyle, superiorStates, includeBase) {
  var className, entry, j, k, len, len1, ref, ref1, resetValue, superiorStyles;
  ref = targetStyle.className;

  for (j = 0, len = ref.length; j < len; j++) {
    className = ref[j];
    this.removeClass(className);
  }

  if (targetStyle.fns.length) {
    if (superiorStates) {
      superiorStyles = this._resolveFnStyles(superiorStates, includeBase);
    }

    ref1 = targetStyle.fns;

    for (k = 0, len1 = ref1.length; k < len1; k++) {
      entry = ref1[k];
      resetValue = superiorStyles && superiorStyles[entry[0]] || null;
      this.style(entry[0], resetValue);
    }
  }
};
var _turnStyleON = function _turnStyleON(targetState, activeStates) {
  var j, len, sharedStates, skipFns, stateChain;
  skipFns = this.options.styleAfterInsert && !this._inserted;

  if (this._styles[targetState]) {
    this._applyRegisteredStyle(this._styles[targetState], this._getSuperiorStates(targetState, activeStates), false, skipFns);
  }

  if (this._providedStatesShared) {
    sharedStates = this._getSharedStates(targetState);

    for (j = 0, len = sharedStates.length; j < len; j++) {
      stateChain = sharedStates[j];

      if (!includes(this._stateShared, stateChain.string)) {
        this._stateShared.push(stateChain.string);
      }

      this._applyRegisteredStyle(this._styles[stateChain.string], null, null, skipFns);
    }
  }
};
var _turnStyleOFF = function _turnStyleOFF(targetState, activeStates) {
  var activeSharedStates, j, len, sharedStates, stateChain, targetStyle;

  if (this._styles[targetState]) {
    this._removeRegisteredStyle(this._styles[targetState], activeStates, true);
  }

  if (this._providedStatesShared) {
    sharedStates = this._getSharedStates(targetState);

    if (sharedStates.length === 0) {
      return;
    }

    for (j = 0, len = sharedStates.length; j < len; j++) {
      stateChain = sharedStates[j];
      removeItem(this._stateShared, stateChain.string);
      targetStyle = this._styles[stateChain.string];

      if (targetStyle.fns.length && this._stateShared.length && !activeSharedStates) {
        activeSharedStates = this._stateShared.filter(function (state) {
          return !includes(state, targetState);
        });
        activeStates = activeStates.concat(activeSharedStates);
      }

      this._removeRegisteredStyle(targetStyle, activeStates, true);
    }
  }
};
var _turnTextON = function _turnTextON(targetState, activeStates) {
  var superiorStates, targetText;

  if (this._texts && IS$1.string(targetText = this._texts[targetState])) {
    superiorStates = this._getSuperiorStates(targetState, activeStates);

    if (!superiorStates.length) {
      this.text = targetText;
    }
  }
};
var _turnTextOFF = function _turnTextOFF(targetState, activeStates) {
  var targetText;

  if (this._texts && IS$1.string(targetText = this._texts[targetState])) {
    activeStates = activeStates.filter(function (state) {
      return state !== targetState;
    });
    targetText = this._texts[activeStates[activeStates.length - 1]];

    if (targetText == null) {
      targetText = this._texts.base;
    }

    this.text = targetText;
  }
};
var _getActiveStates = function _getActiveStates(stateToExclude) {
  var includeSharedStates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var activeStates, j, len, plainStates;

  if (!this._providedStates) {
    return DUMMY_ARRAY;
  }

  activeStates = plainStates = this._state;

  if (stateToExclude) {
    plainStates = [];

    for (j = 0, len = activeStates.length; j < len; j++) {
      state = activeStates[j];

      if (state !== stateToExclude) {
        plainStates.push(state);
      }
    }
  }

  if (!includeSharedStates || !this._providedStatesShared) {
    return plainStates;
  } else {
    return plainStates.concat(this._stateShared);
  }
};
var _getSuperiorStates = function _getSuperiorStates(targetState, activeStates) {
  var candidate, j, len, superior, targetStateIndex;
  targetStateIndex = this._providedStates.indexOf(targetState);

  if (targetStateIndex === this._providedStates.length - 1) {
    return DUMMY_ARRAY;
  }

  superior = [];

  for (j = 0, len = activeStates.length; j < len; j++) {
    candidate = activeStates[j];

    if (this._providedStates.indexOf(candidate) > targetStateIndex) {
      superior.push(candidate);
    }
  }

  return superior;
};
var _getSharedStates = function _getSharedStates(targetState) {
  var activeStates, j, len, ref, sharedStates, stateChain;
  activeStates = this._state;
  sharedStates = [];
  ref = this._providedStatesShared;

  for (j = 0, len = ref.length; j < len; j++) {
    stateChain = ref[j];

    if (stateChain.includes(targetState) && stateChain.isApplicable(targetState, activeStates)) {
      sharedStates.push(stateChain);
    }
  }

  return sharedStates;
};
var _resolveFnStyles = function _resolveFnStyles(states, includeBase) {
  var entry, j, k, len, len1, output, ref;

  if (includeBase) {
    states = ['base'].concat(states);
  }

  output = {};

  for (j = 0, len = states.length; j < len; j++) {
    state = states[j];

    if (this._styles[state] && this._styles[state].fns.length) {
      ref = this._styles[state].fns;

      for (k = 0, len1 = ref.length; k < len1; k++) {
        entry = ref[k];
        output[entry[0]] = entry[1];
      }
    }
  }

  return output;
};
function state$1 (QuickElement) {
  QuickElement.prototype.state = state;
  QuickElement.prototype.toggleState = toggleState;
  QuickElement.prototype.resetState = resetState;
  QuickElement.prototype.pipeState = pipeState;
  QuickElement.prototype._applyRegisteredStyle = _applyRegisteredStyle;
  QuickElement.prototype._removeRegisteredStyle = _removeRegisteredStyle;
  QuickElement.prototype._turnStyleON = _turnStyleON;
  QuickElement.prototype._turnStyleOFF = _turnStyleOFF;
  QuickElement.prototype._turnTextON = _turnTextON;
  QuickElement.prototype._turnTextOFF = _turnTextOFF;
  QuickElement.prototype._getActiveStates = _getActiveStates;
  QuickElement.prototype._getSuperiorStates = _getSuperiorStates;
  QuickElement.prototype._getSharedStates = _getSharedStates;
  return QuickElement.prototype._resolveFnStyles = _resolveFnStyles;
}var toTemplate = function toTemplate() {
  return _quickdom.template(this);
};
var clone = function clone() {
  var activeState, callback, callbacks, child, elClone, eventName, i, j, k, len, len1, len2, newEl, options, ref, ref1, ref2;
  elClone = this.el.cloneNode(false);
  options = extend.clone(this.options, {
    existing: elClone
  });
  newEl = new this.constructor(this.type, options);
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
var append = function append(targetEl) {
  var prevParent;

  if (targetEl) {
    targetEl = normalizeElementArg(targetEl);

    if (IS$1.quickDomEl(targetEl)) {
      prevParent = targetEl.parent;

      if (prevParent) {
        prevParent._removeChild(targetEl);
      }

      this._children.push(targetEl);

      this.el.appendChild(targetEl.el);

      targetEl._refreshParent(); // Force re-fresh targetEl._parent value to trigger inserted callback

    }
  }

  return this;
};
var appendTo = function appendTo(targetEl) {
  if (targetEl) {
    targetEl = normalizeElementArg(targetEl);

    if (IS$1.quickDomEl(targetEl)) {
      targetEl.append(this);
    }
  }

  return this;
};
var prepend = function prepend(targetEl) {
  var prevParent;

  if (targetEl) {
    targetEl = normalizeElementArg(targetEl);

    if (IS$1.quickDomEl(targetEl)) {
      prevParent = targetEl.parent;

      if (prevParent) {
        prevParent._removeChild(targetEl);
      }

      this._children.unshift(targetEl);

      this.el.insertBefore(targetEl.el, this.el.firstChild);

      targetEl._refreshParent(); // Force re-fresh targetEl._parent value to trigger inserted callback

    }
  }

  return this;
};
var prependTo = function prependTo(targetEl) {
  if (targetEl) {
    targetEl = normalizeElementArg(targetEl);

    if (IS$1.quickDomEl(targetEl)) {
      targetEl.prepend(this);
    }
  }

  return this;
};
var after = function after(targetEl) {
  var myIndex;

  if (targetEl && this.parent) {
    targetEl = normalizeElementArg(targetEl);

    if (IS$1.quickDomEl(targetEl)) {
      myIndex = this.parent._children.indexOf(this);

      this.parent._children.splice(myIndex + 1, 0, targetEl);

      this.el.parentNode.insertBefore(targetEl.el, this.el.nextSibling);

      targetEl._refreshParent(); // Force re-fresh targetEl._parent value to trigger inserted callback

    }
  }

  return this;
};
var insertAfter = function insertAfter(targetEl) {
  if (targetEl) {
    targetEl = normalizeElementArg(targetEl);

    if (IS$1.quickDomEl(targetEl)) {
      targetEl.after(this);
    }
  }

  return this;
};
var before = function before(targetEl) {
  var myIndex;

  if (targetEl && this.parent) {
    targetEl = normalizeElementArg(targetEl);

    if (IS$1.quickDomEl(targetEl)) {
      myIndex = this.parent._children.indexOf(this);

      this.parent._children.splice(myIndex, 0, targetEl);

      this.el.parentNode.insertBefore(targetEl.el, this.el);

      targetEl._refreshParent(); // Force re-fresh targetEl._parent value to trigger inserted callback

    }
  }

  return this;
};
var insertBefore = function insertBefore(targetEl) {
  if (targetEl) {
    targetEl = normalizeElementArg(targetEl);

    if (IS$1.quickDomEl(targetEl)) {
      targetEl.before(this);
    }
  }

  return this;
};
var detach = function detach() {
  var ref;

  if ((ref = this.parent) != null) {
    ref._removeChild(this);
  }

  return this;
};
var remove = function remove() {
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
var empty = function empty() {
  var child, i, len, ref;
  ref = this.children.slice();

  for (i = 0, len = ref.length; i < len; i++) {
    child = ref[i];

    this._removeChild(child);
  }

  return this;
};
var wrap = function wrap(targetEl) {
  var currentParent;

  if (targetEl) {
    targetEl = normalizeElementArg(targetEl);
    currentParent = this.parent;

    if (IS$1.quickDomEl(targetEl) && targetEl !== this && targetEl !== this.parent) {
      if (currentParent) {
        currentParent._removeChild(this, !targetEl.parent ? targetEl : void 0);
      }

      targetEl.append(this);
    }
  }

  return this;
};
var unwrap = function unwrap() {
  var grandParent, parent, parentChildren, parentSibling;
  parent = this.parent;

  if (parent) {
    parentChildren = _quickdom.batch(parent.children);
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
var replace = function replace(targetEl) {
  var ref;

  if (targetEl) {
    targetEl = normalizeElementArg(targetEl);

    if (IS$1.quickDomEl(targetEl) && targetEl !== this) {
      targetEl.detach();

      if ((ref = this.parent) != null) {
        ref._removeChild(this, targetEl);
      }

      targetEl._refreshParent(); // Force re-fresh targetEl._parent value to trigger inserted callback

    }
  }

  return this;
};
var hasClass = function hasClass(target) {
  return includes(this.classList, target);
};
var addClass = function addClass(target) {
  var classList, targetIndex;
  classList = this.classList;
  targetIndex = classList.indexOf(target);

  if (targetIndex === -1) {
    classList.push(target);
    this.className = classList.length > 1 ? classList.join(' ') : classList[0];
  }

  return this;
};
var removeClass = function removeClass(target) {
  var classList, targetIndex;
  classList = this.classList;
  targetIndex = classList.indexOf(target);

  if (targetIndex !== -1) {
    classList.splice(targetIndex, 1);
    this.className = classList.length ? classList.join(' ') : '';
  }

  return this;
};
var toggleClass = function toggleClass(target) {
  if (this.hasClass(target)) {
    this.removeClass(target);
  } else {
    this.addClass(target);
  }

  return this;
};
var setRef = function setRef(target) {
  this.ref = this.options.ref = target;
  this.attr('data-ref', target);
  return this;
};
var _refreshParent = function _refreshParent() {
  return this.parent;
};
var _removeChild = function _removeChild(targetChild, replacementChild) {
  var indexOfChild;
  indexOfChild = this.children.indexOf(targetChild);

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
function manipulation (QuickElement) {
  Object.defineProperties(QuickElement.prototype, {
    'html': {
      get: function get() {
        return this.el.innerHTML;
      },
      set: function set(newValue) {
        return this.el.innerHTML = newValue;
      }
    },
    'text': {
      get: function get() {
        return this.el.textContent;
      },
      set: function set(newValue) {
        return this.el.textContent = newValue;
      }
    },
    'className': {
      get: function get() {
        if (this.svg) {
          return this.attr('class') || '';
        } else {
          return this.raw.className;
        }
      },
      set: function set(newValue) {
        if (this.svg) {
          return this.attr('class', newValue);
        } else {
          return this.raw.className = newValue;
        }
      }
    },
    'classList': {
      get: function get() {
        var list;
        list = this.className.split(/\s+/);

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
  QuickElement.prototype.toTemplate = toTemplate;
  QuickElement.prototype.clone = clone;
  QuickElement.prototype.append = append;
  QuickElement.prototype.appendTo = appendTo;
  QuickElement.prototype.prepend = prepend;
  QuickElement.prototype.prependTo = prependTo;
  QuickElement.prototype.after = after;
  QuickElement.prototype.insertAfter = insertAfter;
  QuickElement.prototype.before = before;
  QuickElement.prototype.insertBefore = insertBefore;
  QuickElement.prototype.detach = detach;
  QuickElement.prototype.remove = remove;
  QuickElement.prototype.empty = empty;
  QuickElement.prototype.wrap = wrap;
  QuickElement.prototype.unwrap = unwrap;
  QuickElement.prototype.replace = replace;
  QuickElement.prototype.hasClass = hasClass;
  QuickElement.prototype.addClass = addClass;
  QuickElement.prototype.removeClass = removeClass;
  QuickElement.prototype.toggleClass = toggleClass;
  QuickElement.prototype.setRef = setRef;
  QuickElement.prototype._refreshParent = _refreshParent;
  return QuickElement.prototype._removeChild = _removeChild;
}var updateOptions = function updateOptions(options) {
  if (IS$1.object(options)) {
    this.options = options;

    this._normalizeOptions();

    this._applyOptions(this.options);
  }

  return this;
};
var updateStateStyles = function updateStateStyles(styles) {
  var i, len, parsed, state, updatedStates;

  if (IS$1.objectPlain(styles)) {
    extend.deep.concat(this, parsed = this._parseStyles(styles));

    if (parsed._styles) {
      updatedStates = Object.keys(parsed._styles);

      for (i = 0, len = updatedStates.length; i < len; i++) {
        state = updatedStates[i];

        if (this.state(state) || state === 'base') {
          this._applyRegisteredStyle(this._styles[state], this._getActiveStates(state), false);
        }
      }
    }
  }

  return this;
};
var updateStateTexts = function updateStateTexts(texts) {
  var parsed;

  if (IS$1.objectPlain(texts)) {
    extend.deep.concat(this, parsed = this._parseTexts(texts));
  }

  return this;
};
var applyData = function applyData(data, passThrough) {
  var child, computers, defaults, i, j, key, keys, len, len1, ref;

  if (this.options.passDataToChildren && this._children.length && (passThrough != null ? passThrough : passThrough = true)) {
    ref = this._children;

    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      child.applyData(data);
    }
  }

  if (computers = this.options.computers) {
    defaults = this.options.defaults;
    keys = Object.keys(computers);

    for (j = 0, len1 = keys.length; j < len1; j++) {
      key = keys[j];

      if (this.options.invokeComputersOnce) {
        if (this._invokedComputers[key]) {
          continue;
        }

        this._invokedComputers[key] = 1;
      }

      if (data && data.hasOwnProperty(key)) {
        this._runComputer(key, data[key], data);
      } else if (defaults && defaults.hasOwnProperty(key)) {
        this._runComputer(key, defaults[key], data);
      }
    }
  }

  return this;
};
var _runComputer = function _runComputer(computer, arg, data) {
  return this.options.computers[computer].call(this, arg, data);
};
function application (QuickElement) {
  QuickElement.prototype.updateOptions = updateOptions;
  QuickElement.prototype.updateStateStyles = updateStateStyles;
  QuickElement.prototype.updateStateTexts = updateStateTexts;
  QuickElement.prototype.applyData = applyData;
  return QuickElement.prototype._runComputer = _runComputer;
}var attr = function attr(target, newValue) {
  var i, key, keys;

  if (arguments.length === 1) {
    if (typeof target === 'string') {
      return this.el.getAttribute(target);
    }

    if (IS$1.object(target)) {
      keys = Object.keys(target);
      i = -1;

      while (key = keys[++i]) {
        this.attr(key, target[key]);
      }
    }
  } else if (newValue === null) {
    return this.el.removeAttribute(target);
  } else {
    this.el.setAttribute(target, newValue);
  }

  return this;
};
var prop = function prop(target, newValue) {
  var i, key, keys;

  if (arguments.length === 1) {
    if (typeof target === 'string') {
      return this.el[target];
    }

    if (IS$1.object(target)) {
      keys = Object.keys(target);
      i = -1;

      while (key = keys[++i]) {
        this.prop(key, target[key]);
      }
    }
  } else {
    this.el[target] = newValue;
  }

  return this;
};
function attributesAndProperties (QuickElement) {
  QuickElement.prototype.attr = attr;
  return QuickElement.prototype.prop = prop;
}var QuickElement$1, svgNamespace;
svgNamespace = 'http://www.w3.org/2000/svg';
var QuickElement$2 = QuickElement$1 = function () {
  var QuickElement =
  /*#__PURE__*/
  function () {
    function QuickElement(type, options) {
      _classCallCheck(this, QuickElement);

      this.type = type;
      this.options = options;
      QuickElement.count++;

      if (this.type[0] === '*') {
        this.svg = true;
      }

      this.el = this.options.existing || (this.type === 'text' ? document.createTextNode(typeof this.options.text === 'string' ? this.options.text : '') : this.svg ? document.createElementNS(svgNamespace, this.type.slice(1)) : document.createElement(this.type));

      if (this.type === 'text') {
        this.append = this.prepend = this.attr = function () {};
      } // @_texts = {} # defined conditionally


      this._parent = null;
      this._styles = {};
      this._state = [];
      this._children = []; // @_providedStates = []				# defined conditionally
      // @_providedStatesShared = []		# defined conditionally
      // @_eventCallbacks = {__refs:{}}	# defined conditionally

      this._normalizeOptions();

      this._applyOptions();

      this._attachStateEvents();

      this._proxyParent();

      if (this.options.existing) {
        this._refreshParent();
      }

      this.el._quickElement = this;
    }

    _createClass(QuickElement, [{
      key: "toJSON",
      value: function toJSON() {
        var child, children, i, len, output;
        output = [this.type, extend.clone.keys(element)(this.options)];
        children = this.children;

        for (i = 0, len = children.length; i < len; i++) {
          child = children[i];
          output.push(child.toJSON());
        }

        return output;
      }
    }]);

    return QuickElement;
  }();
  QuickElement.count = 0;
  return QuickElement;
}.call(undefined);
/* istanbul ignore next */

if (QuickElement$1.name == null) {
  QuickElement$1.name = 'QuickElement';
}
init$1(QuickElement$1);
aliases(QuickElement$1);
traversing(QuickElement$1);
events(QuickElement$1);
state$1(QuickElement$1);
style$1(QuickElement$1);
manipulation(QuickElement$1);
application(QuickElement$1);
attributesAndProperties(QuickElement$1);var schema = {
  type: 'div',
  ref: void 0,
  options: {},
  children: []
};
var matchesSchema = function matchesSchema(object) {
  return typeof object.type !== 'undefined' || typeof object.ref !== 'undefined' || typeof object.options !== 'undefined' || typeof object.children !== 'undefined';
};var PARSE_ERROR_PREFIX, parseTree;
PARSE_ERROR_PREFIX = 'Template Parse Error: expected';
var parseTree$1 = parseTree = function parseTree(tree, parseChildren) {
  var output;

  switch (false) {
    case !IS$1.array(tree):
      output = {};

      if (!IS$1.string(tree[0])) {
        throw new Error("".concat(PARSE_ERROR_PREFIX, " string for 'type', got '").concat(String(tree[0]), "'"));
      } else {
        output.type = tree[0];
      }

      if (tree.length > 1 && !IS$1.object(tree[1]) && tree[1] !== null) {
        throw new Error("".concat(PARSE_ERROR_PREFIX, " object for 'options', got '").concat(String(tree[1]), "'"));
      } else {
        output.options = tree[1] ? extend.deep.clone(tree[1]) : schema.options;

        if (tree[1]) {
          output.ref = tree[1].id || tree[1].ref;
        }
      }

      output.children = tree.slice(2);

      if (parseChildren === false) {
        if (tree.length === 3 && IS$1.objectPlain(tree[2]) && !IS$1.template(tree[2])) {
          output.children = tree[2];
        }
      } else {
        output.children = output.children.map(quickdom.template);
      }

      return output;

    case !(IS$1.string(tree) || IS$1.domText(tree)):
      return {
        type: 'text',
        options: {
          text: tree.textContent || tree
        },
        children: schema.children
      };

    case !IS$1.domEl(tree):
      return {
        type: tree.nodeName.toLowerCase(),
        ref: tree.id,
        options: extend.clone.keys(template)(tree),
        children: schema.children.map.call(tree.childNodes, quickdom.template)
      };

    case !IS$1.quickDomEl(tree):
      return {
        type: tree.type,
        ref: tree.ref,
        options: extend.clone.deep.notKeys(['relatedInstance', 'related'])(tree.options),
        children: tree.children.map(quickdom.template)
      };

    case !IS$1.template(tree):
      return tree;

    default:
      throw new Error("".concat(PARSE_ERROR_PREFIX, " (array || string || domEl || quickDomEl || template), got ").concat(String(tree)));
  }
};var NOT_DEEP_KEYS, NOT_KEYS, _extendByRef, extendTemplate;
NOT_DEEP_KEYS = ['relatedInstance', 'related', 'data'];
NOT_KEYS = ['children', '_childRefs'];
var extendTemplate$1 = extendTemplate = function extendTemplate(currentOpts, newOpts, globalOpts) {
  var currentChild, currentChildren, globalOptsTransform, index, maxLength, needsTemplateWrap, newChild, newChildProcessed, newChildren, noChanges, output, ref, remainingNewChildren;

  if (globalOpts) {
    globalOptsTransform = {
      options: function options(opts) {
        return extend(opts, globalOpts);
      }
    };
  }

  if (IS$1.array(newOpts)) {
    newOpts = parseTree$1(newOpts, false);
  } else if (newOpts && !matchesSchema(newOpts)) {
    newOpts = {
      options: newOpts
    };
  }

  output = extend.deep.nullDeletes.notKeys(NOT_KEYS).notDeep(NOT_DEEP_KEYS).transform(globalOptsTransform).clone(currentOpts, newOpts);
  currentChildren = currentOpts.children;
  newChildren = (newOpts != null ? newOpts.children : void 0) || [];
  output.children = [];
  /* istanbul ignore next */

  if (IS$1.array(newChildren)) {
    maxLength = Math.max(currentChildren.length, newChildren.length);
    index = -1;

    while (++index !== maxLength) {
      needsTemplateWrap = noChanges = false;
      currentChild = currentChildren[index];
      newChild = newChildren[index];

      newChildProcessed = function () {
        switch (false) {
          case !IS$1.template(newChild):
            return newChild;

          case !IS$1.array(newChild):
            return needsTemplateWrap = parseTree$1(newChild);

          case !IS$1.string(newChild):
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
      }();

      if (noChanges) {
        newChildProcessed = currentChild;
      } else if (needsTemplateWrap) {
        newChildProcessed = currentChild ? currentChild.extend(newChildProcessed, globalOpts) : new QuickTemplate$1(extend.clone(schema, newChildProcessed));
      }

      output.children.push(newChildProcessed);
    }
  } else if (IS$1.object(newChildren)) {
    newChildren = extend.allowNull.clone(newChildren);
    output.children = _extendByRef(newChildren, currentChildren, globalOpts);
    remainingNewChildren = newChildren;

    for (ref in remainingNewChildren) {
      newChild = remainingNewChildren[ref];
      newChildProcessed = IS$1.objectPlain(newChild) && !IS$1.template(newChild) ? newChild : parseTree$1(newChild);
      output.children.push(new QuickTemplate$1(newChildProcessed));
      delete remainingNewChildren[ref];
    }
  }

  return output;
};

_extendByRef = function extendByRef(newChildrenRefs, currentChildren, globalOpts) {
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
        newChildProcessed = function () {
          switch (false) {
            case !globalOpts:
              return currentChild.extend(null, globalOpts);

            case !Object.keys(newChildrenRefs).length:
              return currentChild.extend();

            default:
              return currentChild;
          }
        }();
      }

      newChildProcessed.children = _extendByRef(newChildrenRefs, newChildProcessed.children);
      output.push(newChildProcessed);
    }

    return output;
  }
};var QuickTemplate;
var QuickTemplate$1 = QuickTemplate =
/*#__PURE__*/
function () {
  function QuickTemplate(config, isTree) {
    _classCallCheck(this, QuickTemplate);

    if (IS$1.template(config)) {
      return config;
    }

    config = isTree ? parseTree$1(config) : config;
    extend(this, config);
  }

  _createClass(QuickTemplate, [{
    key: "extend",
    value: function extend(newValues, globalOpts) {
      return new QuickTemplate(extendTemplate$1(this, newValues, globalOpts));
    }
  }, {
    key: "spawn",
    value: function spawn(newValues, globalOpts, data) {
      var child, childData, children, element, i, len, options, type;

      if (newValues && newValues.data) {
        data = newValues.data;

        if (Object.keys(newValues).length === 1) {
          newValues = null;
        }
      }

      if (newValues || globalOpts) {
        var _extendTemplate = extendTemplate$1(this, newValues, globalOpts);

        options = _extendTemplate.options;
        children = _extendTemplate.children;
        type = _extendTemplate.type;
      } else {
        options = this.options;
        children = this.children;
        type = this.type;
        options = extend.clone(options);
      }

      element = _quickdom.create([type, options]);

      if (children) {
        childData = options.passDataToChildren ? data || options.data : void 0;

        for (i = 0, len = children.length; i < len; i++) {
          child = children[i];
          element.append(child.spawn(null, null, childData));
        }
      }

      element._postCreation(data);

      return element;
    }
  }]);

  return QuickTemplate;
}();
/* istanbul ignore next */

if (QuickTemplate.name == null) {
  QuickTemplate.name = 'QuickTemplate';
}

Object.defineProperty(QuickTemplate.prototype, 'child', {
  get: function get() {
    return this._childRefs || _getChildRefs(this);
  }
});

_quickdom.template = function (tree) {
  return new QuickTemplate(tree, true);
};

_quickdom.isTemplate = function (target) {
  return IS$1.template(target);
};var QuickBatch;
var QuickBatch$1 = QuickBatch =
/*#__PURE__*/
function () {
  function QuickBatch(elements, returnResults1) {
    _classCallCheck(this, QuickBatch);

    this.returnResults = returnResults1;
    this.elements = elements.map(function (el) {
      return _quickdom(el);
    });
  }

  _createClass(QuickBatch, [{
    key: "reverse",
    value: function reverse() {
      this.elements = this.elements.reverse();
      return this;
    }
  }, {
    key: "return",
    value: function _return(returnNext) {
      if (returnNext) {
        this.returnResults = true;
        return this;
      } else {
        return this.lastResults;
      }
    }
  }]);

  return QuickBatch;
}();
/* istanbul ignore next */

if (QuickBatch.name == null) {
  QuickBatch.name = 'QuickBatch';
}

Object.keys(QuickElement$2.prototype).concat('css', 'replaceWith', 'html', 'text').forEach(function (method) {
  return QuickBatch.prototype[method] = function (newValue) {
    var element, results;

    results = this.lastResults = function () {
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
          var _element;

          results1.push((_element = element)[method].apply(_element, arguments));
        }
      }

      return results1;
    }.apply(this, arguments);

    if (this.returnResults) {
      return results;
    } else {
      return this;
    }
  };
});

_quickdom.batch = function (elements, returnResults) {
  if (!IS$1.iterable(elements)) {
    throw new Error("Batch: expected an iterable, got ".concat(String(elements)));
  }

  return new QuickBatch(elements, returnResults);
};var version = "1.0.94";var SHORTCUTS, i, len, shortcut;
SHORTCUTS = ['link:a', 'anchor:a', 'a', 'text', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'footer', 'section', 'button', 'br', 'ul', 'ol', 'li', 'fieldset', 'input', 'textarea', 'select', 'option', 'form', 'frame', 'hr', 'iframe', 'img', 'picture', 'main', 'nav', 'meta', 'object', 'pre', 'style', 'table', 'tbody', 'th', 'tr', 'td', 'tfoot', // 'template'
'video'];

for (i = 0, len = SHORTCUTS.length; i < len; i++) {
  shortcut = SHORTCUTS[i];

  (function (shortcut) {
    var prop, split, type;
    prop = type = shortcut;

    if (includes(shortcut, ':')) {
      split = shortcut.split(':');
      prop = split[0];
      type = split[1];
    }

    return _quickdom[prop] = function () {
      return _quickdom.apply(void 0, [type].concat(Array.prototype.slice.call(arguments)));
    };
  })(shortcut);
}init(QuickElement$2, QuickWindow$2);
_quickdom.QuickElement = QuickElement$2;
_quickdom.QuickTemplate = QuickTemplate$1;
_quickdom.QuickWindow = QuickWindow$2;
_quickdom.QuickBatch = QuickBatch$1;
_quickdom.version = version;
_quickdom.CSS = CSS;
var quickdom = _quickdom; // export {quickdom as default, QuickElement, QuickTemplate, QuickWindow, QuickBatch}
return quickdom;})));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tkb20uZGVidWcuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9hbGxvd2VkT3B0aW9ucy5jb2ZmZWUiLCIuLi9zcmMvY2hlY2tzLmNvZmZlZSIsIi4uL3NyYy9xdWlja2RvbS5jb2ZmZWUiLCIuLi9zcmMvaGVscGVycy5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC9ldmVudHMuY29mZmVlIiwiLi4vc3JjL2VsZW1lbnQvc3R5bGUuY29mZmVlIiwiLi4vc3JjL3dpbmRvdy5jb2ZmZWUiLCIuLi9zcmMvbWVkaWFRdWVyeS5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC9zdGF0ZUNoYWluLmNvZmZlZSIsIi4uL3NyYy9lbGVtZW50L2luaXQuY29mZmVlIiwiLi4vc3JjL2VsZW1lbnQvYWxpYXNlcy5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC90cmF2ZXJzaW5nLmNvZmZlZSIsIi4uL3NyYy9lbGVtZW50L3N0YXRlLmNvZmZlZSIsIi4uL3NyYy9lbGVtZW50L21hbmlwdWxhdGlvbi5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC9hcHBsaWNhdGlvbi5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC9hdHRyaWJ1dGVzLWFuZC1wcm9wZXJ0aWVzLmNvZmZlZSIsIi4uL3NyYy9lbGVtZW50L2luZGV4LmNvZmZlZSIsIi4uL3NyYy90ZW1wbGF0ZS9zY2hlbWEuY29mZmVlIiwiLi4vc3JjL3RlbXBsYXRlL3BhcnNlVHJlZS5jb2ZmZWUiLCIuLi9zcmMvdGVtcGxhdGUvZXh0ZW5kVGVtcGxhdGUuY29mZmVlIiwiLi4vc3JjL3RlbXBsYXRlL2luZGV4LmNvZmZlZSIsIi4uL3NyYy9iYXRjaC5jb2ZmZWUiLCIuLi9zcmMvaW5zdGFuY2Utc2hvcnRjdXRzLmNvZmZlZSIsIi4uL3NyYy9pbmRleC5jb2ZmZWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHRlbXBsYXRlID0gWyAjIFRvIGNvcHkgZnJvbSBET00gRWxlbWVudHNcblx0J2lkJ1xuXHQnbmFtZSdcblx0J3R5cGUnXG5cdCdocmVmJ1xuXHQnc2VsZWN0ZWQnXG5cdCdjaGVja2VkJ1xuXHQnY2xhc3NOYW1lJ1xuXVxuXG5leHBvcnQgZWxlbWVudCA9IFsgIyBVc2VkIGluIFF1aWNrRWxlbWVudDo6dG9KU09OXG5cdCdpZCdcblx0J3JlZidcblx0J3R5cGUnXG5cdCduYW1lJ1xuXHQndGV4dCdcblx0J3N0eWxlJ1xuXHQnY2xhc3MnXG5cdCdjbGFzc05hbWUnXG5cdCd1cmwnXG5cdCdocmVmJ1xuXHQnc2VsZWN0ZWQnXG5cdCdjaGVja2VkJ1xuXHQncHJvcHMnXG5cdCdhdHRycydcblx0J3Bhc3NTdGF0ZVRvQ2hpbGRyZW4nXG5cdCdzdGF0ZVRyaWdnZXJzJ1xuXHQndW5wYXNzYWJsZVN0YXRlcydcblx0IyAncmVsYXRlZEluc3RhbmNlJ1xuXSIsImltcG9ydCBJU18gZnJvbSAnQGRhbmllbGthbGVuL2lzJ1xuSVMgPSBJU18uY3JlYXRlKCduYXRpdmVzJywnZG9tJylcbklTLmxvYWRcdFxuXHRxdWlja0RvbUVsOiAoc3ViamVjdCktPiBzdWJqZWN0IGFuZCBzdWJqZWN0LmNvbnN0cnVjdG9yLm5hbWUgaXMgJ1F1aWNrRWxlbWVudCdcblx0XG5cdHRlbXBsYXRlOiAoc3ViamVjdCktPiBzdWJqZWN0IGFuZCBzdWJqZWN0LmNvbnN0cnVjdG9yLm5hbWUgaXMgJ1F1aWNrVGVtcGxhdGUnXG5cdFxuXHQjIGJhdGNoOiAoc3ViamVjdCktPiBzdWJqZWN0IGFuZCBzdWJqZWN0LmNvbnN0cnVjdG9yLm5hbWUgaXMgJ1F1aWNrQmF0Y2gnXG5cbmV4cG9ydCBkZWZhdWx0IElTIiwiaW1wb3J0IElTIGZyb20gJy4vY2hlY2tzJ1xuUXVpY2tFbGVtZW50ID0gbnVsbFxuUXVpY2tXaW5kb3cgPSBudWxsXG5cbnF1aWNrZG9tID0gKCktPlxuXHRhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpXG5cdGFyZ3NbaV0gPSBhcmcgZm9yIGFyZyxpIGluIGFyZ3VtZW50c1xuXHRwcmV2Q291bnQgPSBRdWlja0VsZW1lbnQuY291bnRcblx0ZWxlbWVudCA9IHF1aWNrZG9tLmNyZWF0ZShhcmdzKVxuXHRlbGVtZW50Ll9wb3N0Q3JlYXRpb24oKSBpZiBlbGVtZW50IGFuZCBlbGVtZW50Ll9wb3N0Q3JlYXRpb24gYW5kIFF1aWNrRWxlbWVudC5jb3VudCBpc250IHByZXZDb3VudFxuXHRyZXR1cm4gZWxlbWVudFxuXG5xdWlja2RvbS5jcmVhdGUgPSAoYXJncyktPiBzd2l0Y2hcblx0d2hlbiBJUy5hcnJheShhcmdzWzBdKVxuXHRcdHJldHVybiBxdWlja2RvbShhcmdzWzBdLi4uKVxuXHRcblx0d2hlbiBJUy50ZW1wbGF0ZShhcmdzWzBdKVxuXHRcdHJldHVybiBhcmdzWzBdLnNwYXduKClcblx0XG5cdHdoZW4gSVMucXVpY2tEb21FbChhcmdzWzBdKVxuXHRcdHJldHVybiBpZiBhcmdzWzFdIHRoZW4gYXJnc1swXS51cGRhdGVPcHRpb25zKGFyZ3NbMV0pIGVsc2UgYXJnc1swXVxuXHRcblx0d2hlbiBJUy5kb21Ob2RlKGFyZ3NbMF0pIG9yIElTLmRvbURvYyhhcmdzWzBdKVxuXHRcdGlmIGFyZ3NbMF0uX3F1aWNrRWxlbWVudFxuXHRcdFx0cmV0dXJuIGFyZ3NbMF0uX3F1aWNrRWxlbWVudFxuXHRcdFxuXHRcdHR5cGUgPSBhcmdzWzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnIycsICcnKVxuXHRcdG9wdGlvbnMgPSBhcmdzWzFdIG9yIHt9XG5cdFx0b3B0aW9ucy5leGlzdGluZyA9IGFyZ3NbMF1cblx0XHRyZXR1cm4gbmV3IFF1aWNrRWxlbWVudCh0eXBlLCBvcHRpb25zKVxuXG5cdHdoZW4gYXJnc1swXSBpcyB3aW5kb3dcblx0XHRyZXR1cm4gUXVpY2tXaW5kb3dcblxuXHR3aGVuIElTLnN0cmluZyhhcmdzWzBdKVx0XHRcdFxuXHRcdHR5cGUgPSBhcmdzWzBdLnRvTG93ZXJDYXNlKClcblx0XHRpZiB0eXBlIGlzICd0ZXh0J1xuXHRcdFx0b3B0aW9ucyA9IGlmIElTLm9iamVjdChhcmdzWzFdKSB0aGVuIGFyZ3NbMV0gZWxzZSB7dGV4dDphcmdzWzFdIG9yICcnfVxuXHRcdGVsc2Vcblx0XHRcdG9wdGlvbnMgPSBpZiBJUy5vYmplY3QoYXJnc1sxXSkgdGhlbiBhcmdzWzFdIGVsc2Uge31cblx0XHRcblx0XHRlbGVtZW50ID0gbmV3IFF1aWNrRWxlbWVudCh0eXBlLCBvcHRpb25zKVxuXHRcdGlmIGFyZ3MubGVuZ3RoID4gMlxuXHRcdFx0Y2hpbGRyZW4gPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoKTsgaSA9IDE7XG5cdFx0XHRjaGlsZHJlbltpKzFdID0gYXJnc1tpXSB3aGlsZSArK2kgPCBhcmdzTGVuZ3RoXG5cblx0XHRcdGZvciBjaGlsZCBpbiBjaGlsZHJlblxuXHRcdFx0XHRjaGlsZCA9IHF1aWNrZG9tLnRleHQoY2hpbGQpIGlmIElTLnN0cmluZyhjaGlsZClcblx0XHRcdFx0Y2hpbGQgPSBxdWlja2RvbShjaGlsZC4uLikgaWYgSVMuYXJyYXkoY2hpbGQpXG5cdFx0XHRcdGVsZW1lbnQuYXBwZW5kKGNoaWxkKSBpZiBJUy5xdWlja0RvbUVsKGNoaWxkKVxuXG5cdFx0cmV0dXJuIGVsZW1lbnRcblxuXHR3aGVuIGFyZ3NbMF0gYW5kIChJUy5kb21Ob2RlKGFyZ3NbMF1bMF0pIG9yIElTLmRvbURvYyhhcmdzWzBdWzBdKSlcblx0XHRyZXR1cm4gcXVpY2tkb20oYXJnc1swXVswXSlcblxuXG5cbnF1aWNrZG9tLmh0bWwgPSAoaW5uZXJIVE1MKS0+XG5cdGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdGNvbnRhaW5lci5pbm5lckhUTUwgPSBpbm5lckhUTUxcblx0Y2hpbGRyZW4gPSBBcnJheTo6c2xpY2UuY2FsbCBjb250YWluZXIuY2hpbGROb2Rlc1xuXG5cdHJldHVybiBxdWlja2RvbS5iYXRjaChjaGlsZHJlbilcblxuXG5xdWlja2RvbS5pc1F1aWNrRWwgPSAodGFyZ2V0KS0+XG5cdElTLnF1aWNrRG9tRWwodGFyZ2V0KVxuXG5xdWlja2RvbS5pc0VsID0gKHRhcmdldCktPlxuXHRJUy5kb21FbCh0YXJnZXQpXG5cbmV4cG9ydCB7cXVpY2tkb20gYXMgZGVmYXVsdH1cbmV4cG9ydCBpbml0ID0gKFF1aWNrRWxlbWVudF8sIFF1aWNrV2luZG93XyktPlxuXHRRdWlja0VsZW1lbnQgPSBRdWlja0VsZW1lbnRfXG5cdFF1aWNrV2luZG93ID0gUXVpY2tXaW5kb3dfXG5cdHJldHVybiBxdWlja2RvbSIsImltcG9ydCBxdWlja2RvbSBmcm9tICcuLydcbmltcG9ydCBDU1MgZnJvbSAncXVpY2tjc3MnXG5pbXBvcnQgSVMgZnJvbSAnLi9jaGVja3MnXG5cbmV4cG9ydCBpbmNsdWRlcyA9ICh0YXJnZXQsIGl0ZW0pLT5cblx0dGFyZ2V0IGFuZCB0YXJnZXQuaW5kZXhPZihpdGVtKSBpc250IC0xXG5cbmV4cG9ydCByZW1vdmVJdGVtID0gKHRhcmdldCwgaXRlbSktPlxuXHRpdGVtSW5kZXggPSB0YXJnZXQuaW5kZXhPZihpdGVtKVxuXHR0YXJnZXQuc3BsaWNlKGl0ZW1JbmRleCwgMSkgIGlmIGl0ZW1JbmRleCBpc250IC0xXG5cdHJldHVybiB0YXJnZXRcblxuZXhwb3J0IG5vcm1hbGl6ZUVsZW1lbnRBcmcgPSAodGFyZ2V0RWwpLT4gc3dpdGNoXG5cdHdoZW4gSVMuc3RyaW5nKHRhcmdldEVsKSB0aGVuIHF1aWNrZG9tLnRleHQodGFyZ2V0RWwpXG5cdHdoZW4gSVMuZG9tTm9kZSh0YXJnZXRFbCkgdGhlbiBxdWlja2RvbSh0YXJnZXRFbClcblx0d2hlbiBJUy50ZW1wbGF0ZSh0YXJnZXRFbCkgdGhlbiB0YXJnZXRFbC5zcGF3bigpXG5cdGVsc2UgdGFyZ2V0RWxcblxuXG5leHBvcnQgaXNTdGF0ZVN0eWxlID0gKHN0cmluZyktPlxuXHRzdHJpbmdbMF0gaXMgJyQnIG9yIHN0cmluZ1swXSBpcyAnQCdcblxuXG5leHBvcnQgcmVnaXN0ZXJTdHlsZSA9IChydWxlLCBsZXZlbCwgaW1wb3J0YW50KS0+XG5cdGxldmVsIHx8PSAwXG5cdGNhY2hlZCA9IHN0eWxlQ2FjaGUuZ2V0KHJ1bGUsIGxldmVsKVxuXHRyZXR1cm4gY2FjaGVkIGlmIGNhY2hlZFxuXHRvdXRwdXQgPSB7Y2xhc3NOYW1lOltDU1MucmVnaXN0ZXIocnVsZSwgbGV2ZWwsIGltcG9ydGFudCldLCBmbnM6W10sIHJ1bGV9XG5cdHByb3BzID0gT2JqZWN0LmtleXMocnVsZSlcblx0XG5cdGZvciBwcm9wIGluIHByb3BzIHdoZW4gdHlwZW9mIHJ1bGVbcHJvcF0gaXMgJ2Z1bmN0aW9uJ1xuXHRcdG91dHB1dC5mbnMucHVzaCBbcHJvcCwgcnVsZVtwcm9wXV1cblxuXHRyZXR1cm4gc3R5bGVDYWNoZS5zZXQocnVsZSwgb3V0cHV0LCBsZXZlbClcblxuXG5leHBvcnQgc3R5bGVDYWNoZSA9IG5ldyBjbGFzc1xuXHRjb25zdHJ1Y3RvcjogKCktPlxuXHRcdEBrZXlzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXHRcdEB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cblx0Z2V0OiAoa2V5LCBsZXZlbCktPiBpZiBAa2V5c1tsZXZlbF1cblx0XHRpbmRleCA9IEBrZXlzW2xldmVsXS5pbmRleE9mKGtleSlcblx0XHRyZXR1cm4gQHZhbHVlc1tsZXZlbF1baW5kZXhdIGlmIGluZGV4IGlzbnQgLTFcblxuXHRzZXQ6IChrZXksIHZhbHVlLCBsZXZlbCktPlxuXHRcdGlmIG5vdCBAa2V5c1tsZXZlbF1cblx0XHRcdEBrZXlzW2xldmVsXSA9IFtdXG5cdFx0XHRAdmFsdWVzW2xldmVsXSA9IFtdXG5cblx0XHRAa2V5c1tsZXZlbF0ucHVzaCBrZXlcblx0XHRAdmFsdWVzW2xldmVsXS5wdXNoIHZhbHVlXG5cdFx0cmV0dXJuIHZhbHVlXG5cbiIsImltcG9ydCBJUyBmcm9tICcuLi9jaGVja3MnXG5pbXBvcnQge3JlbW92ZUl0ZW19IGZyb20gJy4uL2hlbHBlcnMnXG5pbXBvcnQgZXh0ZW5kIGZyb20gJ3NtYXJ0LWV4dGVuZCdcblJFR0VYX1dISVRFU1BBQ0UgPSAvXFxzKy9cblxuXG5leHBvcnQgb25fID0gKGV2ZW50TmFtZXMsIGNhbGxiYWNrLCB1c2VDYXB0dXJlLCBpc1ByaXZhdGUpLT5cblx0QF9ldmVudENhbGxiYWNrcyA/PSB7X19yZWZzOnt9fVxuXHRcblx0aWYgSVMuc3RyaW5nKGV2ZW50TmFtZXMpIGFuZCBJUy5mdW5jdGlvbihjYWxsYmFjaylcblx0XHRzcGxpdCA9IGV2ZW50TmFtZXMuc3BsaXQoJy4nKVxuXHRcdGNhbGxiYWNrUmVmID0gc3BsaXRbMV1cblx0XHRldmVudE5hbWVzID0gc3BsaXRbMF1cblx0XHRcblx0XHRpZiBldmVudE5hbWVzIGlzICdpbnNlcnRlZCcgYW5kIEBfaW5zZXJ0ZWRcblx0XHRcdGNhbGxiYWNrLmNhbGwoQCwgQF9wYXJlbnQpXG5cdFx0XHRyZXR1cm4gQFxuXHRcdFxuXHRcdGV2ZW50TmFtZXMuc3BsaXQoUkVHRVhfV0hJVEVTUEFDRSkuZm9yRWFjaCAoZXZlbnROYW1lKT0+XG5cdFx0XHRpZiBub3QgQF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdXG5cdFx0XHRcdEBfZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXSA9IFtdXHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dW5sZXNzIGlzUHJpdmF0ZSB0aGVuIEBfbGlzdGVuVG8gZXZlbnROYW1lLCAoZXZlbnQpPT5cblx0XHRcdFx0XHRAX2ludm9rZUhhbmRsZXJzKGV2ZW50TmFtZSwgZXZlbnQpXG5cdFx0XHRcdCwgdXNlQ2FwdHVyZVxuXG5cdFx0XHRpZiBjYWxsYmFja1JlZlxuXHRcdFx0XHRAX2V2ZW50Q2FsbGJhY2tzLl9fcmVmc1tldmVudE5hbWVdID89IHt9XG5cdFx0XHRcdEBfZXZlbnRDYWxsYmFja3MuX19yZWZzW2V2ZW50TmFtZV1bY2FsbGJhY2tSZWZdID0gY2FsbGJhY2tcblx0XHRcdEBfZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKVxuXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IG9uY2UgPSAoZXZlbnROYW1lcywgY2FsbGJhY2spLT5cblx0aWYgSVMuc3RyaW5nKGV2ZW50TmFtZXMpIGFuZCBJUy5mdW5jdGlvbihjYWxsYmFjaylcblx0XHRAb24gZXZlbnROYW1lcywgb25jZUNhbGxiYWNrPShldmVudCk9PlxuXHRcdFx0QG9mZihldmVudE5hbWVzLCBvbmNlQ2FsbGJhY2spXG5cdFx0XHRjYWxsYmFjay5jYWxsKEAsIGV2ZW50KVxuXHRcblx0cmV0dXJuIEBcblxuXG5cbmV4cG9ydCBvZmZfID0gKGV2ZW50TmFtZXMsIGNhbGxiYWNrKS0+XG5cdEBfZXZlbnRDYWxsYmFja3MgPz0ge19fcmVmczp7fX1cblx0aWYgbm90IElTLnN0cmluZyhldmVudE5hbWVzKVxuXHRcdEBvZmYoZXZlbnROYW1lKSBmb3IgZXZlbnROYW1lIG9mIEBfZXZlbnRDYWxsYmFja3Ncblx0XG5cdGVsc2Vcblx0XHRzcGxpdCA9IGV2ZW50TmFtZXMuc3BsaXQoJy4nKVxuXHRcdGNhbGxiYWNrUmVmID0gc3BsaXRbMV1cblx0XHRldmVudE5hbWVzID0gc3BsaXRbMF1cblx0XHRldmVudE5hbWVzLnNwbGl0KFJFR0VYX1dISVRFU1BBQ0UpLmZvckVhY2ggKGV2ZW50TmFtZSk9PlxuXHRcdFx0aWYgQF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdXG5cdFx0XHRcdGNhbGxiYWNrID89IEBfZXZlbnRDYWxsYmFja3MuX19yZWZzW2V2ZW50TmFtZV0/W2NhbGxiYWNrUmVmXVxuXG5cdFx0XHRcdGlmIElTLmZ1bmN0aW9uKGNhbGxiYWNrKVxuXHRcdFx0XHRcdHJlbW92ZUl0ZW0oQF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdLCBjYWxsYmFjaylcblx0XHRcdFx0ZWxzZSBpZiBub3QgY2FsbGJhY2tSZWZcblx0XHRcdFx0XHRAX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV0ubGVuZ3RoID0gMFxuXG5cdHJldHVybiBAXG5cblxuXG5leHBvcnQgZW1pdCA9IChldmVudE5hbWUsIGJ1YmJsZXM9dHJ1ZSwgY2FuY2VsYWJsZT10cnVlLCBkYXRhKS0+XG5cdGlmIGV2ZW50TmFtZSBhbmQgSVMuc3RyaW5nKGV2ZW50TmFtZSlcblx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpXG5cdFx0ZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgYnViYmxlcywgY2FuY2VsYWJsZSlcblx0XHRleHRlbmQoZXZlbnQsIGRhdGEpIGlmIGRhdGEgYW5kIHR5cGVvZiBkYXRhIGlzICdvYmplY3QnXG5cdFx0QGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgZW1pdFByaXZhdGUgPSAoZXZlbnROYW1lLCBhcmcpLT5cblx0aWYgZXZlbnROYW1lIGFuZCBJUy5zdHJpbmcoZXZlbnROYW1lKSBhbmQgQF9ldmVudENhbGxiYWNrcz9bZXZlbnROYW1lXVxuXHRcdEBfaW52b2tlSGFuZGxlcnMoZXZlbnROYW1lLCBhcmcpXG5cdFxuXHRyZXR1cm4gQFxuXG5cblxuZXhwb3J0IF9pbnZva2VIYW5kbGVycyA9IChldmVudE5hbWUsIGFyZyktPlxuXHRjYWxsYmFja3MgPSBAX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV0uc2xpY2UoKVxuXHRjYi5jYWxsKEAsIGFyZykgZm9yIGNiIGluIGNhbGxiYWNrc1xuXHRyZXR1cm5cblxuXG4jIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5leHBvcnQgX2xpc3RlblRvID0gKGV2ZW50TmFtZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpLT5cblx0bGlzdGVuTWV0aG9kID0gaWYgQGVsLmFkZEV2ZW50TGlzdGVuZXIgdGhlbiAnYWRkRXZlbnRMaXN0ZW5lcicgZWxzZSAnYXR0YWNoRXZlbnQnXG5cdGV2ZW50TmFtZVRvTGlzdGVuRm9yID0gaWYgQGVsLmFkZEV2ZW50TGlzdGVuZXIgdGhlbiBldmVudE5hbWUgZWxzZSBcIm9uI3tldmVudE5hbWV9XCJcblx0XG5cdEBlbFtsaXN0ZW5NZXRob2RdKGV2ZW50TmFtZVRvTGlzdGVuRm9yLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSlcblx0cmV0dXJuIEBcblxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdFF1aWNrRWxlbWVudDo6b24gPSBvbl9cblx0UXVpY2tFbGVtZW50OjpvbmNlID0gb25jZVxuXHRRdWlja0VsZW1lbnQ6Om9mZiA9IG9mZl9cblx0UXVpY2tFbGVtZW50OjplbWl0ID0gZW1pdFxuXHRRdWlja0VsZW1lbnQ6OmVtaXRQcml2YXRlID0gZW1pdFByaXZhdGVcblx0UXVpY2tFbGVtZW50OjpfaW52b2tlSGFuZGxlcnMgPSBfaW52b2tlSGFuZGxlcnNcblx0UXVpY2tFbGVtZW50OjpfbGlzdGVuVG8gPSBfbGlzdGVuVG9cblxuIiwiaW1wb3J0IElTIGZyb20gJy4uL2NoZWNrcydcbmltcG9ydCBDU1MgZnJvbSAncXVpY2tjc3MnXG5cbiMjIypcbiAqIFNldHMvZ2V0cyB0aGUgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS4gSW4gZ2V0dGVyIG1vZGUgdGhlIGNvbXB1dGVkIHByb3BlcnR5IG9mXG4gKiB0aGUgc3R5bGUgd2lsbCBiZSByZXR1cm5lZCB1bmxlc3MgdGhlIGVsZW1lbnQgaXMgbm90IGluc2VydGVkIGludG8gdGhlIERPTS4gSW5cbiAqIHdlYmtpdCBicm93c2VycyBhbGwgY29tcHV0ZWQgcHJvcGVydGllcyBvZiBhIGRldGFjaGVkIG5vZGUgYXJlIGFsd2F5cyBhbiBlbXB0eVxuICogc3RyaW5nIGJ1dCBpbiBnZWNrbyB0aGV5IHJlZmxlY3Qgb24gdGhlIGFjdHVhbCBjb21wdXRlZCB2YWx1ZSwgaGVuY2Ugd2UgbmVlZFxuICogdG8gXCJub3JtYWxpemVcIiB0aGlzIGJlaGF2aW9yIGFuZCBtYWtlIHN1cmUgdGhhdCBldmVuIG9uIGdlY2tvIGFuIGVtcHR5IHN0cmluZ1xuICogaXMgcmV0dXJuZWRcbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuIyMjXG5leHBvcnQgc3R5bGUgPSAocHJvcGVydHkpLT5cblx0cmV0dXJuIGlmIEB0eXBlIGlzICd0ZXh0J1xuXHRhcmdzID0gYXJndW1lbnRzXG5cdFxuXHRpZiBJUy5zdHJpbmcocHJvcGVydHkpXG5cdFx0dmFsdWUgPSBpZiB0eXBlb2YgYXJnc1sxXSBpcyAnZnVuY3Rpb24nIHRoZW4gYXJnc1sxXS5jYWxsKEAsIEByZWxhdGVkKSBlbHNlIGFyZ3NbMV1cblx0XHR2YWx1ZSA9IENTUy5VTlNFVCBpZiBhcmdzWzFdIGlzIG51bGwgYW5kIElTLmRlZmluZWQoQGN1cnJlbnRTdGF0ZVN0eWxlKHByb3BlcnR5KSkgYW5kIG5vdCBJUy5mdW5jdGlvbihAY3VycmVudFN0YXRlU3R5bGUocHJvcGVydHkpKVxuXG5cdFx0aWYgdmFsdWUgYW5kIHR5cGVvZiB2YWx1ZS50aGVuIGlzICdmdW5jdGlvbidcblx0XHRcdHZhbHVlLnRoZW4gKHZhbHVlKT0+IENTUyhAZWwsIHByb3BlcnR5LCB2YWx1ZSwgQG9wdGlvbnMuZm9yY2VTdHlsZSlcblx0XHRlbHNlXG5cdFx0XHRyZXN1bHQgPSBDU1MoQGVsLCBwcm9wZXJ0eSwgdmFsdWUsIEBvcHRpb25zLmZvcmNlU3R5bGUpXG5cdFx0XG5cdFx0aWYgYXJncy5sZW5ndGggaXMgMVxuXHRcdFx0IyMjIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICMjI1xuXHRcdFx0cmV0dXJuIGlmIEBfaW5zZXJ0ZWQgdGhlbiByZXN1bHQgZWxzZSBpZiBub3QgcmVzdWx0IHRoZW4gcmVzdWx0IGVsc2UgJydcblxuXHRlbHNlIGlmIElTLm9iamVjdChwcm9wZXJ0eSlcblx0XHRrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydHkpOyBpID0gLTFcblx0XHRAc3R5bGUoa2V5LCBwcm9wZXJ0eVtrZXldKSB3aGlsZSBrZXk9a2V5c1srK2ldXG5cblx0cmV0dXJuIEBcblxuXG4jIyMqXG4gKiBBdHRlbXB0cyB0byByZXNvbHZlIHRoZSB2YWx1ZSBmb3IgYSBnaXZlbiBwcm9wZXJ0eSBpbiB0aGUgZm9sbG93aW5nIG9yZGVyIGlmIGVhY2ggb25lIGlzbid0IGEgdmFsaWQgdmFsdWU6XG4gKiAxLiBmcm9tIGNvbXB1dGVkIHN0eWxlIChmb3IgZG9tLWluc2VydGVkIGVscylcbiAqIDIuIGZyb20gRE9NRWxlbWVudC5zdHlsZSBvYmplY3QgKGZvciBub24taW5zZXJ0ZWQgZWxzOyBpZiBvcHRpb25zLnN0eWxlQWZ0ZXJJbnNlcnQsIHdpbGwgb25seSBoYXZlIHN0YXRlIHN0eWxlcylcbiAqIDMuIGZyb20gcHJvdmlkZWQgc3R5bGUgb3B0aW9uc1xuICogKGZvciBub24taW5zZXJ0ZWQgZWxzOyBjaGVja2luZyBvbmx5ICRiYXNlIHNpbmNlIHN0YXRlIHN0eWxlcyB3aWxsIGFsd2F5cyBiZSBhcHBsaWVkIHRvIHRoZSBzdHlsZSBvYmplY3QgZXZlbiBmb3Igbm9uLWluc2VydGVkKVxuIyMjXG5leHBvcnQgc3R5bGVTYWZlID0gKHByb3BlcnR5LCBza2lwQ29tcHV0ZWQpLT5cblx0cmV0dXJuIGlmIEB0eXBlIGlzICd0ZXh0J1xuXHRzYW1wbGUgPSBAZWwuc3R5bGVbcHJvcGVydHldXG5cblx0aWYgSVMuc3RyaW5nKHNhbXBsZSkgb3IgSVMubnVtYmVyKHNhbXBsZSlcblx0XHRjb21wdXRlZCA9IGlmIHNraXBDb21wdXRlZCB0aGVuIDAgZWxzZSBAc3R5bGUocHJvcGVydHkpXG5cdFx0cmVzdWx0ID0gY29tcHV0ZWQgb3IgQGVsLnN0eWxlW3Byb3BlcnR5XSBvciBAY3VycmVudFN0YXRlU3R5bGUocHJvcGVydHkpIG9yICcnXG5cdFx0cmV0dXJuIGlmIHR5cGVvZiByZXN1bHQgaXMgJ2Z1bmN0aW9uJyB0aGVuIHJlc3VsdC5jYWxsKEAsIEByZWxhdGVkKSBlbHNlIHJlc3VsdFxuXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHN0eWxlUGFyc2VkID0gKHByb3BlcnR5LCBza2lwQ29tcHV0ZWQpLT5cblx0cGFyc2VGbG9hdCBAc3R5bGVTYWZlKHByb3BlcnR5LCBza2lwQ29tcHV0ZWQpXG5cblxuZXhwb3J0IHJlY2FsY1N0eWxlID0gKHJlY2FsY0NoaWxkcmVuKS0+XG5cdHRhcmdldFN0eWxlcyA9IEBfcmVzb2x2ZUZuU3R5bGVzKEBfZ2V0QWN0aXZlU3RhdGVzKCksIHRydWUpXG5cblx0QHN0eWxlKHRhcmdldFN0eWxlcylcblx0XG5cdGlmIHJlY2FsY0NoaWxkcmVuXG5cdFx0Y2hpbGQucmVjYWxjU3R5bGUoKSBmb3IgY2hpbGQgaW4gQF9jaGlsZHJlblxuXHRcblx0cmV0dXJuIEBcblxuXG5leHBvcnQgY3VycmVudFN0YXRlU3R5bGUgPSAocHJvcGVydHkpLT4gaWYgcHJvcGVydHlcblx0aWYgQF9zdGF0ZS5sZW5ndGhcblx0XHRzdGF0ZXMgPSBAX3N0YXRlLnNsaWNlKClcblx0XHRzdGF0ZXMucHVzaChAX3N0YXRlU2hhcmVkLi4uKSBpZiBAX3N0YXRlU2hhcmVkIGFuZCBAX3N0YXRlU2hhcmVkLmxlbmd0aFxuXHRcdGkgPSBzdGF0ZXMubGVuZ3RoXG5cdFx0d2hpbGUgc3RhdGUgPSBzdGF0ZXNbLS1pXVxuXHRcdFx0cmV0dXJuIEBfc3R5bGVzW3N0YXRlXS5ydWxlW3Byb3BlcnR5XSBpZiBAX3N0eWxlc1tzdGF0ZV0gYW5kIElTLmRlZmluZWQoQF9zdHlsZXNbc3RhdGVdLnJ1bGVbcHJvcGVydHldKVxuXG5cdHJldHVybiBAX3N0eWxlcy5iYXNlLnJ1bGVbcHJvcGVydHldIGlmIEBfc3R5bGVzLmJhc2VcblxuXG5leHBvcnQgaGlkZSA9ICgpLT5cblx0QHN0eWxlICdkaXNwbGF5JywgJ25vbmUnXG5cblxuZXhwb3J0IHNob3cgPSAoZGlzcGxheSktPlxuXHRpZiBub3QgZGlzcGxheVxuXHRcdGRpc3BsYXkgPSBAY3VycmVudFN0YXRlU3R5bGUoJ2Rpc3BsYXknKVxuXHRcdGRpc3BsYXkgPSAnYmxvY2snIGlmIGRpc3BsYXkgaXMgJ25vbmUnIG9yIG5vdCBkaXNwbGF5XG5cdFxuXHRkaXNwbGF5ID89IEBfc3R5bGVzLmJhc2U/LmRpc3BsYXkgb3IgJ2Jsb2NrJ1xuXHRAc3R5bGUgJ2Rpc3BsYXknLCBkaXNwbGF5XG5cbmV4cG9ydCBvcmllbnRhdGlvbkdldHRlciA9XG5cdGdldDogKCktPiBpZiBAd2lkdGggPiBAaGVpZ2h0IHRoZW4gJ2xhbmRzY2FwZScgZWxzZSAncG9ydHJhaXQnXG5cbmV4cG9ydCBhc3BlY3RSYXRpb0dldHRlciA9XG5cdGdldDogKCktPiBAd2lkdGgvQGhlaWdodFxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIFF1aWNrRWxlbWVudDo6LFxuXHRcdCdvcmllbnRhdGlvbic6IG9yaWVudGF0aW9uR2V0dGVyXG5cdFx0J2FzcGVjdFJhdGlvJzogYXNwZWN0UmF0aW9HZXR0ZXJcblx0XHQncmVjdCc6IGdldDogKCktPiBAZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblx0XHQnd2lkdGgnOlxuXHRcdFx0Z2V0OiAoKS0+IHBhcnNlRmxvYXQgQHN0eWxlKCd3aWR0aCcpXG5cdFx0XHRzZXQ6ICh2YWx1ZSktPiBAc3R5bGUgJ3dpZHRoJywgdmFsdWVcblx0XHQnaGVpZ2h0Jzpcblx0XHRcdGdldDogKCktPiBwYXJzZUZsb2F0IEBzdHlsZSgnaGVpZ2h0Jylcblx0XHRcdHNldDogKHZhbHVlKS0+IEBzdHlsZSAnaGVpZ2h0JywgdmFsdWVcblxuXG5cdFF1aWNrRWxlbWVudDo6c3R5bGUgPSBzdHlsZVxuXHRRdWlja0VsZW1lbnQ6OnN0eWxlU2FmZSA9IHN0eWxlU2FmZVxuXHRRdWlja0VsZW1lbnQ6OnN0eWxlUGFyc2VkID0gc3R5bGVQYXJzZWRcblx0UXVpY2tFbGVtZW50OjpyZWNhbGNTdHlsZSA9IHJlY2FsY1N0eWxlXG5cdFF1aWNrRWxlbWVudDo6Y3VycmVudFN0YXRlU3R5bGUgPSBjdXJyZW50U3RhdGVTdHlsZVxuXHRRdWlja0VsZW1lbnQ6OmhpZGUgPSBoaWRlXG5cdFF1aWNrRWxlbWVudDo6c2hvdyA9IHNob3dcblxuXG4iLCJpbXBvcnQge29uXywgb2ZmXywgZW1pdCwgZW1pdFByaXZhdGUsIF9saXN0ZW5UbywgX2ludm9rZUhhbmRsZXJzfSBmcm9tICcuL2VsZW1lbnQvZXZlbnRzJ1xuaW1wb3J0IHtvcmllbnRhdGlvbkdldHRlciwgYXNwZWN0UmF0aW9HZXR0ZXJ9IGZyb20gJy4vZWxlbWVudC9zdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgUXVpY2tXaW5kb3cgPSBcblx0dHlwZTogJ3dpbmRvdydcblx0ZWw6IHdpbmRvd1xuXHRyYXc6IHdpbmRvd1xuXHRfZXZlbnRDYWxsYmFja3M6IHtfX3JlZnM6e319XG5cdFxuXG5RdWlja1dpbmRvdy5vbiA9ICBvbl9cblF1aWNrV2luZG93Lm9mZiA9ICBvZmZfXG5RdWlja1dpbmRvdy5lbWl0ID0gIGVtaXRcblF1aWNrV2luZG93LmVtaXRQcml2YXRlID0gIGVtaXRQcml2YXRlXG5RdWlja1dpbmRvdy5fbGlzdGVuVG8gPSAgX2xpc3RlblRvXG5RdWlja1dpbmRvdy5faW52b2tlSGFuZGxlcnMgPSAgX2ludm9rZUhhbmRsZXJzXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyBRdWlja1dpbmRvdyxcblx0J3dpZHRoJzogZ2V0OiAoKS0+IHdpbmRvdy5pbm5lcldpZHRoXG5cdCdoZWlnaHQnOiBnZXQ6ICgpLT4gd2luZG93LmlubmVySGVpZ2h0XG5cdCdvcmllbnRhdGlvbic6IG9yaWVudGF0aW9uR2V0dGVyXG5cdCdhc3BlY3RSYXRpbyc6IGFzcGVjdFJhdGlvR2V0dGVyXG5cbiIsImltcG9ydCBRdWlja1dpbmRvdyBmcm9tICcuL3dpbmRvdydcblJVTEVfREVJTElNSVRFUiA9IC8sXFxzKi9cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFRdWVyeSA9IG5ldyAoKS0+XG5cdGNhbGxiYWNrcyA9IFtdXG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJ3Jlc2l6ZScsICgpLT5cblx0XHRjYWxsYmFjaygpIGZvciBjYWxsYmFjayBpbiBjYWxsYmFja3Ncblx0XHRyZXR1cm5cblxuXHRAcGFyc2VRdWVyeSA9ICh0YXJnZXQsIHF1ZXJ5U3RyaW5nKS0+XG5cdFx0cXVlcnlTcGxpdCA9IHF1ZXJ5U3RyaW5nLnNwbGl0KCcoJylcblx0XHRzb3VyY2UgPSBxdWVyeVNwbGl0WzBdXG5cdFx0c291cmNlID0gc3dpdGNoIHNvdXJjZVxuXHRcdFx0d2hlbiAnd2luZG93JyB0aGVuIFF1aWNrV2luZG93XG5cdFx0XHR3aGVuICdwYXJlbnQnIHRoZW4gdGFyZ2V0LnBhcmVudFxuXHRcdFx0d2hlbiAnc2VsZicgdGhlbiB0YXJnZXRcblx0XHRcdGVsc2UgdGFyZ2V0LnBhcmVudE1hdGNoaW5nIChwYXJlbnQpLT4gcGFyZW50LnJlZiBpcyBzb3VyY2Uuc2xpY2UoMSlcblxuXHRcdHJ1bGVzID0gcXVlcnlTcGxpdFsxXVxuXHRcdFx0LnNsaWNlKDAsLTEpXG5cdFx0XHQuc3BsaXQoUlVMRV9ERUlMSU1JVEVSKVxuXHRcdFx0Lm1hcCAocnVsZSktPiBcblx0XHRcdFx0c3BsaXQgPSBydWxlLnNwbGl0KCc6Jylcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHNwbGl0WzFdKVxuXHRcdFx0XHR2YWx1ZSA9IHNwbGl0WzFdIGlmIGlzTmFOKHZhbHVlKVxuXHRcdFx0XHRrZXkgPSBzcGxpdFswXVxuXHRcdFx0XHRrZXlQcmVmaXggPSBrZXkuc2xpY2UoMCw0KVxuXHRcdFx0XHRtYXggPSBrZXlQcmVmaXggaXMgJ21heC0nXG5cdFx0XHRcdG1pbiA9IG5vdCBtYXggYW5kIGtleVByZWZpeCBpcyAnbWluLSdcblx0XHRcdFx0a2V5ID0ga2V5LnNsaWNlKDQpIGlmIG1heCBvciBtaW5cblx0XHRcdFx0Z2V0dGVyID0gc3dpdGNoIGtleVxuXHRcdFx0XHRcdHdoZW4gJ29yaWVudGF0aW9uJyB0aGVuICgpLT4gc291cmNlLm9yaWVudGF0aW9uXG5cdFx0XHRcdFx0d2hlbiAnYXNwZWN0LXJhdGlvJyB0aGVuICgpLT4gc291cmNlLmFzcGVjdFJhdGlvXG5cdFx0XHRcdFx0d2hlbiAnd2lkdGgnLCdoZWlnaHQnIHRoZW4gKCktPiBzb3VyY2Vba2V5XVxuXHRcdFx0XHRcdGVsc2UgKCktPlxuXHRcdFx0XHRcdFx0c3RyaW5nVmFsdWUgPSBzb3VyY2Uuc3R5bGUoa2V5KVxuXHRcdFx0XHRcdFx0cGFyc2VkVmFsdWUgPSBwYXJzZUZsb2F0IHN0cmluZ1ZhbHVlXG5cdFx0XHRcdFx0XHRyZXR1cm4gaWYgaXNOYU4ocGFyc2VkVmFsdWUpIHRoZW4gc3RyaW5nVmFsdWUgZWxzZSBwYXJzZWRWYWx1ZVxuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIHtrZXksdmFsdWUsbWluLG1heCxnZXR0ZXJ9XG5cblx0XHRyZXR1cm4ge3NvdXJjZSwgcnVsZXN9XG5cblxuXHRAcmVnaXN0ZXIgPSAodGFyZ2V0LCBxdWVyeVN0cmluZyktPlxuXHRcdHF1ZXJ5ID0gQHBhcnNlUXVlcnkodGFyZ2V0LCBxdWVyeVN0cmluZylcblx0XHRpZiBxdWVyeS5zb3VyY2Vcblx0XHRcdGNhbGxiYWNrcy5wdXNoIGNhbGxiYWNrID0gKCktPiB0ZXN0UnVsZSh0YXJnZXQsIHF1ZXJ5LCBxdWVyeVN0cmluZylcblx0XHRcdGNhbGxiYWNrKClcblx0XHRyZXR1cm4gcXVlcnlcblxuXG5cdHRlc3RSdWxlID0gKHRhcmdldCwgcXVlcnksIHF1ZXJ5U3RyaW5nKS0+XG5cdFx0cGFzc2VkID0gdHJ1ZVxuXG5cdFx0Zm9yIHJ1bGUgaW4gcXVlcnkucnVsZXNcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IHJ1bGUuZ2V0dGVyKClcblx0XHRcdHBhc3NlZCA9IHN3aXRjaFxuXHRcdFx0XHR3aGVuIHJ1bGUubWluIHRoZW4gY3VycmVudFZhbHVlID49IHJ1bGUudmFsdWVcblx0XHRcdFx0d2hlbiBydWxlLm1heCB0aGVuIGN1cnJlbnRWYWx1ZSA8PSBydWxlLnZhbHVlXG5cdFx0XHRcdGVsc2UgY3VycmVudFZhbHVlIGlzIHJ1bGUudmFsdWVcblxuXHRcdFx0YnJlYWsgaWYgbm90IHBhc3NlZFx0XHRcblx0XHRcblx0XHR0YXJnZXQuc3RhdGUocXVlcnlTdHJpbmcsIHBhc3NlZClcblxuXHRyZXR1cm4gQFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlQ2hhaW5cblx0Y29uc3RydWN0b3I6IChzdGF0ZXMpLT5cblx0XHRAc3RyaW5nID0gc3RhdGVzLmpvaW4oJysnKVxuXHRcdEBhcnJheSA9IHN0YXRlcy5zbGljZSgpXG5cdFx0QGxlbmd0aCA9IHN0YXRlcy5sZW5ndGhcblxuXHRpbmNsdWRlczogKHRhcmdldCktPlxuXHRcdGZvciBzdGF0ZSBpbiBAYXJyYXlcblx0XHRcdHJldHVybiB0cnVlIGlmIHN0YXRlIGlzIHRhcmdldFxuXG5cdFx0cmV0dXJuIGZhbHNlXG5cblx0d2l0aG91dDogKHRhcmdldCktPlxuXHRcdEBhcnJheVxuXHRcdFx0LmZpbHRlciAoc3RhdGUpLT4gc3RhdGUgaXNudCB0YXJnZXRcblx0XHRcdC5qb2luICcrJ1xuXG5cblx0aXNBcHBsaWNhYmxlOiAodGFyZ2V0LCBvdGhlckFjdGl2ZSktPlxuXHRcdGFjdGl2ZSA9IEBhcnJheS5maWx0ZXIgKHN0YXRlKS0+XG5cdFx0XHRzdGF0ZSBpcyB0YXJnZXQgb3Jcblx0XHRcdG90aGVyQWN0aXZlLmluZGV4T2Yoc3RhdGUpIGlzbnQgLTFcblxuXHRcdHJldHVybiBhY3RpdmUubGVuZ3RoIGlzIEBhcnJheS5sZW5ndGgiLCJpbXBvcnQgcXVpY2tkb20gZnJvbSAnLi4vcXVpY2tkb20nXG5pbXBvcnQgTWVkaWFRdWVyeSBmcm9tICcuLi9tZWRpYVF1ZXJ5J1xuaW1wb3J0IFN0YXRlQ2hhaW4gZnJvbSAnLi9zdGF0ZUNoYWluJ1xuaW1wb3J0IElTIGZyb20gJy4uL2NoZWNrcydcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCBleHRlbmQgZnJvbSAnc21hcnQtZXh0ZW5kJ1xuXG5CQVNFX1NUQVRFX1RSSUdHRVJTID1cblx0J2hvdmVyJzoge29uOidtb3VzZWVudGVyJywgb2ZmOidtb3VzZWxlYXZlJywgYnViYmxlczp0cnVlfVxuXHQnZm9jdXMnOiB7b246J2ZvY3VzJywgb2ZmOidibHVyJywgYnViYmxlczp0cnVlfVxuXG5cbmV4cG9ydCBfbm9ybWFsaXplT3B0aW9ucyA9ICgpLT5cblx0aWYgQG9wdGlvbnMucmVsYXRlZEluc3RhbmNlXG5cdFx0QG9wdGlvbnMucmVsYXRlZCB8fD0gQG9wdGlvbnMucmVsYXRlZEluc3RhbmNlXG5cdFx0QG9wdGlvbnMucmVsYXRlZEluc3RhbmNlID0gbnVsbFxuXHRcblx0QHJlbGF0ZWQgPSBAb3B0aW9ucy5yZWxhdGVkID89IEBcblx0QG9wdGlvbnMuY2xhc3NOYW1lID0gQG9wdGlvbnMuY2xhc3MgaWYgQG9wdGlvbnMuY2xhc3Ncblx0QG9wdGlvbnMuaHJlZiA9IEBvcHRpb25zLnVybCBpZiBAb3B0aW9ucy51cmxcblx0QG9wdGlvbnMudW5wYXNzYWJsZVN0YXRlcyA/PSBbXVxuXHRAb3B0aW9ucy5wYXNzU3RhdGVUb0NoaWxkcmVuID89IHRydWVcblx0QG9wdGlvbnMucGFzc0RhdGFUb0NoaWxkcmVuID89IHRydWVcblx0QG9wdGlvbnMuc3RhdGVUcmlnZ2VycyA9XG5cdFx0aWYgQG9wdGlvbnMuc3RhdGVUcmlnZ2Vyc1xuXHRcdFx0ZXh0ZW5kLmNsb25lLmRlZXAoQkFTRV9TVEFURV9UUklHR0VSUywgQG9wdGlvbnMuc3RhdGVUcmlnZ2Vycylcblx0XHRlbHNlXG5cdFx0XHRCQVNFX1NUQVRFX1RSSUdHRVJTXG5cdFxuXHRpZiBAdHlwZSBpcyAndGV4dCdcblx0XHRleHRlbmQgQCwgQF9wYXJzZVRleHRzKEBvcHRpb25zLnRleHQsIEBfdGV4dHMpXG5cdGVsc2Vcblx0XHRleHRlbmQgQCwgQF9wYXJzZVN0eWxlcyhAb3B0aW9ucy5zdHlsZSwgQF9zdHlsZXMpXG5cdFxuXHRyZXR1cm5cblxuXG5leHBvcnQgX3BhcnNlU3R5bGVzID0gKHN0eWxlcywgc3RvcmUpLT5cblx0cmV0dXJuIGlmIG5vdCBJUy5vYmplY3RQbGFpbihzdHlsZXMpXG5cdGtleXMgPSBPYmplY3Qua2V5cyhzdHlsZXMpXG5cdHN0YXRlcyA9IGtleXMuZmlsdGVyIChrZXkpLT4gaGVscGVycy5pc1N0YXRlU3R5bGUoa2V5KVxuXHRzcGVjaWFsU3RhdGVzID0gaGVscGVycy5yZW1vdmVJdGVtKHN0YXRlcy5zbGljZSgpLCAnJGJhc2UnKVxuXHRfbWVkaWFTdGF0ZXMgPSBzdGF0ZXMuZmlsdGVyKChrZXkpLT4ga2V5WzBdIGlzICdAJykubWFwIChzdGF0ZSktPiBzdGF0ZS5zbGljZSgxKVxuXHRfcHJvdmlkZWRTdGF0ZXMgPSBzdGF0ZXMubWFwIChzdGF0ZSktPiBzdGF0ZS5zbGljZSgxKSAjIFJlbW92ZSAnJCcgcHJlZml4XG5cdF9zdHlsZXMgPSBzdG9yZSBvciB7fVxuXHRfc3RhdGVTaGFyZWQgPSBfcHJvdmlkZWRTdGF0ZXNTaGFyZWQgPSB1bmRlZmluZWRcblxuXHRiYXNlID0gaWYgbm90IGhlbHBlcnMuaW5jbHVkZXMoc3RhdGVzLCAnJGJhc2UnKSB0aGVuIHN0eWxlcyBlbHNlIHN0eWxlcy4kYmFzZVxuXHRfc3R5bGVzLmJhc2UgPSBoZWxwZXJzLnJlZ2lzdGVyU3R5bGUoYmFzZSwgMCwgZm9yY2VTdHlsZT1Ab3B0aW9ucy5mb3JjZVN0eWxlKVxuXG5cblx0aWYgc3BlY2lhbFN0YXRlcy5sZW5ndGhcblx0XHRmbGF0dGVuTmVzdGVkU3RhdGVzID0gKHN0eWxlT2JqZWN0LCBjaGFpbiwgbGV2ZWwpLT5cblx0XHRcdHN0eWxlS2V5cyA9IE9iamVjdC5rZXlzKHN0eWxlT2JqZWN0KVxuXHRcdFx0b3V0cHV0ID0ge31cblx0XHRcdGhhc05vblN0YXRlUHJvcHMgPSBmYWxzZVxuXHRcdFx0XG5cdFx0XHRmb3Igc3RhdGUgaW4gc3R5bGVLZXlzXG5cdFx0XHRcdGlmIG5vdCBoZWxwZXJzLmlzU3RhdGVTdHlsZShzdGF0ZSlcblx0XHRcdFx0XHRoYXNOb25TdGF0ZVByb3BzID0gdHJ1ZVxuXHRcdFx0XHRcdG91dHB1dFtzdGF0ZV0gPSBzdHlsZU9iamVjdFtzdGF0ZV1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGNoYWluLnB1c2goc3RhdGVfID0gc3RhdGUuc2xpY2UoMSkpXG5cdFx0XHRcdFx0c3RhdGVDaGFpbiA9IG5ldyBTdGF0ZUNoYWluKGNoYWluKVxuXHRcdFx0XHRcdF9zdGF0ZVNoYXJlZCA/PSBbXVxuXHRcdFx0XHRcdF9wcm92aWRlZFN0YXRlc1NoYXJlZCA/PSBbXVxuXHRcdFx0XHRcdF9wcm92aWRlZFN0YXRlc1NoYXJlZC5wdXNoKHN0YXRlQ2hhaW4pXG5cdFx0XHRcdFx0X21lZGlhU3RhdGVzLnB1c2goc3RhdGVfKSBpZiBzdGF0ZVswXSBpcyAnQCdcblx0XHRcdFx0XHRfc3R5bGVzW3N0YXRlQ2hhaW4uc3RyaW5nXSA9IGhlbHBlcnMucmVnaXN0ZXJTdHlsZSBmbGF0dGVuTmVzdGVkU3RhdGVzKHN0eWxlT2JqZWN0W3N0YXRlXSwgY2hhaW4sIGxldmVsKzEpLCBsZXZlbCsxLCBmb3JjZVN0eWxlXG5cdFx0XHRcblx0XHRcdHJldHVybiBpZiBoYXNOb25TdGF0ZVByb3BzIHRoZW4gb3V0cHV0XG5cblx0XHRmb3Igc3RhdGUgaW4gc3BlY2lhbFN0YXRlc1xuXHRcdFx0c3RhdGVfID0gc3RhdGUuc2xpY2UoMSlcblx0XHRcdFxuXHRcdFx0c3RhdGVTdHlsZXMgPSBmbGF0dGVuTmVzdGVkU3RhdGVzKHN0eWxlc1tzdGF0ZV0sIFtzdGF0ZV9dLCAxKVxuXHRcdFx0X3N0eWxlc1tzdGF0ZV9dID0gaGVscGVycy5yZWdpc3RlclN0eWxlKHN0YXRlU3R5bGVzLCAxKSBpZiBzdGF0ZVN0eWxlc1xuXG5cblx0cmV0dXJuIHtfc3R5bGVzLCBfbWVkaWFTdGF0ZXMsIF9zdGF0ZVNoYXJlZCwgX3Byb3ZpZGVkU3RhdGVzLCBfcHJvdmlkZWRTdGF0ZXNTaGFyZWR9XG5cblxuXG5leHBvcnQgX3BhcnNlVGV4dHMgPSAodGV4dHMsIHN0b3JlKS0+XG5cdHJldHVybiBpZiBub3QgSVMub2JqZWN0UGxhaW4odGV4dHMpXG5cdHN0YXRlcyA9IE9iamVjdC5rZXlzKHRleHRzKS5tYXAgKHN0YXRlKS0+IHN0YXRlLnNsaWNlKDEpXG5cdF9wcm92aWRlZFN0YXRlcyA9IHN0YXRlcy5maWx0ZXIgKHN0YXRlKS0+IHN0YXRlIGlzbnQgJ2Jhc2UnXG5cdF90ZXh0cyA9IHN0b3JlIG9yIHt9XG5cdF90ZXh0cyA9IGJhc2U6Jydcblx0X3RleHRzW3N0YXRlXSA9IHRleHRzWyckJytzdGF0ZV0gZm9yIHN0YXRlIGluIHN0YXRlc1xuXHRcblx0cmV0dXJuIHtfdGV4dHMsIF9wcm92aWRlZFN0YXRlc31cblxuXG5leHBvcnQgX2FwcGx5T3B0aW9ucyA9ICgpLT5cblx0aWYgcmVmPShAb3B0aW9ucy5pZCBvciBAb3B0aW9ucy5yZWYpIHRoZW4gQGF0dHIoJ2RhdGEtcmVmJywgQHJlZj1yZWYpXG5cdGlmIEBvcHRpb25zLmlkIHRoZW4gQGVsLmlkID0gQG9wdGlvbnMuaWRcblx0aWYgQG9wdGlvbnMuY2xhc3NOYW1lIHRoZW4gQGVsLmNsYXNzTmFtZSA9IEBvcHRpb25zLmNsYXNzTmFtZVxuXHRpZiBAb3B0aW9ucy5zcmMgdGhlbiBAZWwuc3JjID0gQG9wdGlvbnMuc3JjXG5cdGlmIEBvcHRpb25zLmhyZWYgdGhlbiBAZWwuaHJlZiA9IEBvcHRpb25zLmhyZWZcblx0aWYgQG9wdGlvbnMudHlwZSB0aGVuIEBlbC50eXBlID0gQG9wdGlvbnMudHlwZVxuXHRpZiBAb3B0aW9ucy5uYW1lIHRoZW4gQGVsLm5hbWUgPSBAb3B0aW9ucy5uYW1lXG5cdGlmIEBvcHRpb25zLnZhbHVlIHRoZW4gQGVsLnZhbHVlID0gQG9wdGlvbnMudmFsdWVcblx0aWYgQG9wdGlvbnMuc2VsZWN0ZWQgdGhlbiBAZWwuc2VsZWN0ZWQgPSBAb3B0aW9ucy5zZWxlY3RlZFxuXHRpZiBAb3B0aW9ucy5jaGVja2VkIHRoZW4gQGVsLmNoZWNrZWQgPSBAb3B0aW9ucy5jaGVja2VkXG5cdGlmIEBvcHRpb25zLnByb3BzIHRoZW4gQHByb3AoQG9wdGlvbnMucHJvcHMpXG5cdGlmIEBvcHRpb25zLmF0dHJzIHRoZW4gQGF0dHIoQG9wdGlvbnMuYXR0cnMpXG5cdEBfYXBwbHlSZWdpc3RlcmVkU3R5bGUoQF9zdHlsZXMuYmFzZSwgbnVsbCwgbnVsbCwgQG9wdGlvbnMuc3R5bGVBZnRlckluc2VydClcblx0QHRleHQgPSBAX3RleHRzLmJhc2UgaWYgQF90ZXh0c1xuXG5cdEBvbignaW5zZXJ0ZWQnLCBDQUNIRURfRk5fSU5TRVJURUQsIGZhbHNlLCB0cnVlKVxuXG5cdGlmIEBvcHRpb25zLmludm9rZUNvbXB1dGVyc09uY2Vcblx0XHRAX2ludm9rZWRDb21wdXRlcnMgPSB7fVxuXHRcblx0aWYgQG9wdGlvbnMucmVjYWxjT25SZXNpemVcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAncmVzaXplJywgKCk9PiBAcmVjYWxjU3R5bGUoKVxuXG5cdGlmIEBvcHRpb25zLmV2ZW50c1xuXHRcdEBvbihldmVudCwgaGFuZGxlcikgZm9yIGV2ZW50LGhhbmRsZXIgb2YgQG9wdGlvbnMuZXZlbnRzXG5cblx0aWYgQG9wdGlvbnMubWV0aG9kc1xuXHRcdGZvciBtZXRob2QsdmFsdWUgb2YgQG9wdGlvbnMubWV0aG9kcyB3aGVuIG5vdCBAW21ldGhvZF1cblx0XHRcdGlmIElTLmZ1bmN0aW9uKHZhbHVlKVxuXHRcdFx0XHRAW21ldGhvZF0gPSB2YWx1ZVxuXHRcdFx0ZWxzZSBpZiBJUy5vYmplY3QodmFsdWUpXG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBALCBtZXRob2QsIHtjb25maWd1cmFibGU6dHJ1ZSwgZ2V0OnZhbHVlLmdldCwgc2V0OnZhbHVlLnNldH1cblxuXHRpZiBAdHlwZSBpc250ICd0ZXh0JyBhbmQgSVMub2JqZWN0KEBvcHRpb25zLnRleHQpXG5cdFx0QGFwcGVuZCBxdWlja2RvbSgndGV4dCcsIHRleHQ6QG9wdGlvbnMudGV4dClcblx0cmV0dXJuXG5cblxuZXhwb3J0IF9wb3N0Q3JlYXRpb24gPSAoZGF0YSktPlxuXHRpZiBAb3B0aW9ucy5jb21wdXRlcnNcblx0XHRkYXRhID0gZXh0ZW5kLmNsb25lKEBvcHRpb25zLmRhdGEsIGRhdGEpIGlmIGRhdGEgYW5kIEBvcHRpb25zLmRhdGFcblx0XHRkYXRhIHx8PSBAb3B0aW9ucy5kYXRhXG5cdFx0QGFwcGx5RGF0YShkYXRhLCBmYWxzZSlcblx0XHRcblx0XHRpZiBAb3B0aW9ucy5jb21wdXRlcnMuX2luaXRcblx0XHRcdEBfcnVuQ29tcHV0ZXIoJ19pbml0JywgZGF0YSlcblxuXHRpZiBAb3B0aW9ucy5zdGF0ZVxuXHRcdEBzdGF0ZShAb3B0aW9ucy5zdGF0ZSlcblx0XG5cdHJldHVyblxuXG5cbmV4cG9ydCBfYXR0YWNoU3RhdGVFdmVudHMgPSAoZm9yY2UpLT5cblx0c3RhdGVzID0gT2JqZWN0LmtleXMoQG9wdGlvbnMuc3RhdGVUcmlnZ2Vycylcblx0c3RhdGVzLmZvckVhY2ggKHN0YXRlKT0+XG5cdFx0dHJpZ2dlciA9IEBvcHRpb25zLnN0YXRlVHJpZ2dlcnNbc3RhdGVdXHRcblx0XHRyZXR1cm4gaWYgbm90IGhlbHBlcnMuaW5jbHVkZXMoQF9wcm92aWRlZFN0YXRlcywgc3RhdGUpIGFuZCBub3QgZm9yY2UgYW5kIG5vdCB0cmlnZ2VyLmZvcmNlXG5cdFx0ZW5hYmxlciA9IGlmIElTLnN0cmluZyh0cmlnZ2VyKSB0aGVuIHRyaWdnZXIgZWxzZSB0cmlnZ2VyLm9uXG5cdFx0ZGlzYWJsZXIgPSB0cmlnZ2VyLm9mZiBpZiBJUy5vYmplY3QodHJpZ2dlcilcblxuXHRcdEBfbGlzdGVuVG8gZW5hYmxlciwgKCk9PiBAc3RhdGUoc3RhdGUsIG9uLCB0cmlnZ2VyLmJ1YmJsZXMpXG5cdFx0aWYgZGlzYWJsZXIgdGhlbiBAX2xpc3RlblRvIGRpc2FibGVyLCAoKT0+IEBzdGF0ZShzdGF0ZSwgb2ZmLCB0cmlnZ2VyLmJ1YmJsZXMpXG5cdFxuXHRyZXR1cm5cblxuXG5cbmV4cG9ydCBfcHJveHlQYXJlbnQgPSAoKS0+XG5cdHBhcmVudCA9IHVuZGVmaW5lZFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkgQCwgJ19wYXJlbnQnLFxuXHRcdGdldDogKCktPiBwYXJlbnRcblx0XHRzZXQ6IChuZXdQYXJlbnQpLT4gaWYgcGFyZW50PW5ld1BhcmVudFxuXHRcdFx0bGFzdFBhcmVudCA9IEBwYXJlbnRzLnNsaWNlKC0xKVswXVxuXHRcdFx0aWYgbGFzdFBhcmVudC5yYXcgaXMgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cdFx0XHRcdEBfdW5wcm94eVBhcmVudChuZXdQYXJlbnQpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHBhcmVudC5vbiAnaW5zZXJ0ZWQnLCAoKT0+XG5cdFx0XHRcdFx0QF91bnByb3h5UGFyZW50KG5ld1BhcmVudCkgaWYgcGFyZW50IGlzIG5ld1BhcmVudFxuXHRcdFx0cmV0dXJuXG5cblxuZXhwb3J0IF91bnByb3h5UGFyZW50ID0gKG5ld1BhcmVudCktPlxuXHRkZWxldGUgQF9wYXJlbnRcblx0QF9wYXJlbnQgPSBuZXdQYXJlbnRcblx0QGVtaXRQcml2YXRlKCdpbnNlcnRlZCcsIG5ld1BhcmVudClcblx0cmV0dXJuXG5cblxuXG5DQUNIRURfRk5fSU5TRVJURUQgPSAoKS0+XG5cdEBfaW5zZXJ0ZWQgPSBAXG5cdEByZWNhbGNTdHlsZSgpIGlmIEBvcHRpb25zLnN0eWxlQWZ0ZXJJbnNlcnRcblxuXHRpZiAobWVkaWFTdGF0ZXM9QF9tZWRpYVN0YXRlcykgYW5kIEBfbWVkaWFTdGF0ZXMubGVuZ3RoXG5cdFx0QF9tZWRpYVN0YXRlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblx0XHRcblx0XHRmb3IgcXVlcnlTdHJpbmcgaW4gbWVkaWFTdGF0ZXNcblx0XHRcdEBfbWVkaWFTdGF0ZXNbcXVlcnlTdHJpbmddID0gTWVkaWFRdWVyeS5yZWdpc3RlcihALCBxdWVyeVN0cmluZylcblxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdFF1aWNrRWxlbWVudDo6X25vcm1hbGl6ZU9wdGlvbnMgPSBfbm9ybWFsaXplT3B0aW9uc1xuXHRRdWlja0VsZW1lbnQ6Ol9wYXJzZVN0eWxlcyA9IF9wYXJzZVN0eWxlc1xuXHRRdWlja0VsZW1lbnQ6Ol9wYXJzZVRleHRzID0gX3BhcnNlVGV4dHNcblx0UXVpY2tFbGVtZW50OjpfYXBwbHlPcHRpb25zID0gX2FwcGx5T3B0aW9uc1xuXHRRdWlja0VsZW1lbnQ6Ol9wb3N0Q3JlYXRpb24gPSBfcG9zdENyZWF0aW9uXG5cdFF1aWNrRWxlbWVudDo6X2F0dGFjaFN0YXRlRXZlbnRzID0gX2F0dGFjaFN0YXRlRXZlbnRzXG5cdFF1aWNrRWxlbWVudDo6X3Byb3h5UGFyZW50ID0gX3Byb3h5UGFyZW50XG5cdFF1aWNrRWxlbWVudDo6X3VucHJveHlQYXJlbnQgPSBfdW5wcm94eVBhcmVudFxuXG5cblxuXG4iLCJcbmV4cG9ydCBkZWZhdWx0IChRdWlja0VsZW1lbnQpLT5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMgUXVpY2tFbGVtZW50OjosXG5cdFx0J3Jhdyc6IGdldDogKCktPiBAZWxcblx0XHQnMCc6IGdldDogKCktPiBAZWxcblx0XHQnY3NzJzogZ2V0OiAoKS0+IEBzdHlsZVxuXHRcdCdyZXBsYWNlV2l0aCc6IGdldDogKCktPiBAcmVwbGFjZVxuXHRcdCdyZW1vdmVMaXN0ZW5lcic6IGdldDogKCktPiBAb2ZmXG5cbiIsImltcG9ydCBxdWlja2RvbSBmcm9tICcuLi9xdWlja2RvbSdcbmltcG9ydCBJUyBmcm9tICcuLi9jaGVja3MnXG5cbmV4cG9ydCBwYXJlbnRzVW50aWwgPSAoZmlsdGVyKS0+XG5cdF9nZXRQYXJlbnRzKEAsIGZpbHRlcilcblxuZXhwb3J0IHBhcmVudE1hdGNoaW5nID0gKGZpbHRlciktPlxuXHRpZiBJUy5mdW5jdGlvbihmaWx0ZXIpIG9yIGlzUmVmPUlTLnN0cmluZyhmaWx0ZXIpXG5cdFx0bmV4dFBhcmVudCA9IEBwYXJlbnRcblx0XHR3aGlsZSBuZXh0UGFyZW50XG5cdFx0XHRpZiBpc1JlZlxuXHRcdFx0XHRyZXR1cm4gbmV4dFBhcmVudCBpZiBuZXh0UGFyZW50LnJlZiBpcyBmaWx0ZXJcblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIG5leHRQYXJlbnQgaWYgZmlsdGVyKG5leHRQYXJlbnQpXG5cblx0XHRcdG5leHRQYXJlbnQgPSBuZXh0UGFyZW50LnBhcmVudFxuXHRcdFxuXHRyZXR1cm5cblxuZXhwb3J0IHF1ZXJ5ID0gKHNlbGVjdG9yKS0+XG5cdHF1aWNrZG9tIEByYXcucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcblxuZXhwb3J0IHF1ZXJ5QWxsID0gKHNlbGVjdG9yKS0+XG5cdHJlc3VsdCA9IEByYXcucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcilcblx0b3V0cHV0ID0gW107IG91dHB1dC5wdXNoKGl0ZW0pIGZvciBpdGVtIGluIHJlc3VsdFxuXHRyZXR1cm4gcXVpY2tkb20uYmF0Y2gob3V0cHV0KVxuXG5cblxuXG5leHBvcnQgX2dldFBhcmVudHMgPSAodGFyZ2V0RWwsIGZpbHRlciktPlxuXHRmaWx0ZXIgPSB1bmRlZmluZWQgaWYgbm90IElTLmZ1bmN0aW9uKGZpbHRlcikgYW5kIG5vdCBpc1JlZj1JUy5zdHJpbmcoZmlsdGVyKVxuXHRwYXJlbnRzID0gW11cblx0bmV4dFBhcmVudCA9IHRhcmdldEVsLnBhcmVudFxuXHR3aGlsZSBuZXh0UGFyZW50XG5cdFx0cGFyZW50cy5wdXNoKG5leHRQYXJlbnQpXG5cdFx0bmV4dFBhcmVudCA9IG5leHRQYXJlbnQucGFyZW50XG5cdFx0aWYgaXNSZWZcblx0XHRcdG5leHRQYXJlbnQgPSBudWxsIGlmIG5leHRQYXJlbnQgYW5kIG5leHRQYXJlbnQucmVmIGlzIGZpbHRlclxuXHRcdGVsc2UgaWYgZmlsdGVyXG5cdFx0XHRuZXh0UGFyZW50ID0gbnVsbCBpZiBmaWx0ZXIobmV4dFBhcmVudClcblxuXHRyZXR1cm4gcGFyZW50c1xuXG5cbmV4cG9ydCBfZ2V0Q2hpbGRSZWZzID0gKHRhcmdldCwgZnJlc2hDb3B5KS0+XG5cdHRhcmdldC5fY2hpbGRSZWZzID0ge30gaWYgZnJlc2hDb3B5IG9yIG5vdCB0YXJnZXQuX2NoaWxkUmVmc1xuXHRyZWZzID0gdGFyZ2V0Ll9jaGlsZFJlZnNcblx0cmVmc1t0YXJnZXQucmVmXSA9IHRhcmdldCBpZiB0YXJnZXQucmVmXG5cdGNoaWxkcmVuID0gdGFyZ2V0LmNoaWxkcmVuXG5cblx0aWYgY2hpbGRyZW4ubGVuZ3RoXG5cdFx0Zm9yIGNoaWxkIGluIGNoaWxkcmVuXG5cdFx0XHRjaGlsZFJlZnMgPSBfZ2V0Q2hpbGRSZWZzKGNoaWxkLCBmcmVzaENvcHkpXG5cdFx0XHRyZWZzW3JlZl0gfHw9IGVsIGZvciByZWYsZWwgb2YgY2hpbGRSZWZzXG5cblx0cmV0dXJuIHJlZnNcblxuXG5leHBvcnQgX2dldEluZGV4QnlQcm9wID0gKG1haW4sIHByb3ApLT5cblx0aWYgbm90IHBhcmVudD1tYWluLnBhcmVudFxuXHRcdHJldHVybiBudWxsXG5cdGVsc2Vcblx0XHRwYXJlbnQuY2hpbGRyZW5cblx0XHRcdC5maWx0ZXIgKGNoaWxkKS0+IGNoaWxkW3Byb3BdIGlzIG1haW5bcHJvcF1cblx0XHRcdC5pbmRleE9mKG1haW4pXG5cblxuZXhwb3J0IF9maWx0ZXJFbGVtZW50cyA9IChhcnJheSktPlxuXHRpZiBub3QgYXJyYXkubGVuZ3RoXG5cdFx0cmV0dXJuIGFycmF5XG5cdGVsc2Vcblx0XHRvdXRwdXQgPSBbXVxuXHRcdG91dHB1dC5wdXNoKGl0ZW0pIGZvciBpdGVtIGluIGFycmF5IHdoZW4gaXRlbS50eXBlIGlzbnQgJ3RleHQnXG5cdFx0cmV0dXJuIG91dHB1dFxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdFF1aWNrRWxlbWVudDo6cGFyZW50c1VudGlsID0gcGFyZW50c1VudGlsXG5cdFF1aWNrRWxlbWVudDo6cGFyZW50TWF0Y2hpbmcgPSBwYXJlbnRNYXRjaGluZ1xuXHRRdWlja0VsZW1lbnQ6OnF1ZXJ5ID0gcXVlcnlcblx0UXVpY2tFbGVtZW50OjpxdWVyeUFsbCA9IHF1ZXJ5QWxsXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyBRdWlja0VsZW1lbnQ6Oixcblx0XHQnY2hpbGRyZW4nOiBnZXQ6ICgpLT5cblx0XHRcdGlmIEBlbC5jaGlsZE5vZGVzLmxlbmd0aCBpc250IEBfY2hpbGRyZW4ubGVuZ3RoICMgUmUtY29sbGVjdCBjaGlsZHJlblx0XG5cdFx0XHRcdEBfY2hpbGRyZW4ubGVuZ3RoID0gMCAjIEVtcHR5IG91dCBjaGlsZHJlbiBhcnJheVxuXHRcdFx0XHRAX2NoaWxkcmVuLnB1c2gocXVpY2tkb20oY2hpbGQpKSBmb3IgY2hpbGQgaW4gQGVsLmNoaWxkTm9kZXMgd2hlbiBjaGlsZC5ub2RlVHlwZSA8IDRcblxuXHRcdFx0cmV0dXJuIEBfY2hpbGRyZW5cblxuXHRcdCdlbGVtZW50Q2hpbGRyZW4nOiBnZXQ6ICgpLT5cblx0XHRcdF9maWx0ZXJFbGVtZW50cyhAY2hpbGRyZW4pXG5cblx0XHQncGFyZW50JzogZ2V0OiAoKS0+XG5cdFx0XHRpZiAobm90IEBfcGFyZW50IG9yIEBfcGFyZW50LmVsIGlzbnQgQGVsLnBhcmVudE5vZGUpIGFuZCBub3QgSVMuZG9tRG9jKEBlbC5wYXJlbnROb2RlKVxuXHRcdFx0XHRAX3BhcmVudCA9IHF1aWNrZG9tKEBlbC5wYXJlbnROb2RlKVxuXG5cdFx0XHRyZXR1cm4gQF9wYXJlbnRcblxuXG5cdFx0J3BhcmVudHMnOiBnZXQ6ICgpLT5cblx0XHRcdF9nZXRQYXJlbnRzKEApXG5cblx0XHQnbmV4dCc6IGdldDogKCktPlxuXHRcdFx0cXVpY2tkb20oQGVsLm5leHRTaWJsaW5nKVxuXHRcdFxuXHRcdCduZXh0RWwnOiBnZXQ6ICgpLT5cblx0XHRcdHF1aWNrZG9tKEBlbC5uZXh0RWxlbWVudFNpYmxpbmcpXG5cdFx0XG5cdFx0J25leHRFbEFsbCc6IGdldDogKCktPlxuXHRcdFx0X2ZpbHRlckVsZW1lbnRzKEBuZXh0QWxsKVxuXG5cdFx0J25leHRBbGwnOiBnZXQ6ICgpLT5cblx0XHRcdHNpYmxpbmdzID0gW11cblx0XHRcdG5leHRTaWJsaW5nID0gcXVpY2tkb20oQGVsLm5leHRTaWJsaW5nKVxuXHRcdFx0d2hpbGUgbmV4dFNpYmxpbmdcblx0XHRcdFx0c2libGluZ3MucHVzaChuZXh0U2libGluZylcblx0XHRcdFx0bmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5uZXh0XG5cblx0XHRcdHJldHVybiBzaWJsaW5nc1xuXG5cdFx0J3ByZXYnOiBnZXQ6ICgpLT5cblx0XHRcdHF1aWNrZG9tKEBlbC5wcmV2aW91c1NpYmxpbmcpXG5cdFx0XG5cdFx0J3ByZXZFbCc6IGdldDogKCktPlxuXHRcdFx0cXVpY2tkb20oQGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpXG5cdFx0XG5cdFx0J3ByZXZFbEFsbCc6IGdldDogKCktPlxuXHRcdFx0X2ZpbHRlckVsZW1lbnRzKEBwcmV2QWxsKVxuXG5cdFx0J3ByZXZBbGwnOiBnZXQ6ICgpLT5cblx0XHRcdHNpYmxpbmdzID0gW11cblx0XHRcdHByZXZTaWJsaW5nID0gcXVpY2tkb20oQGVsLnByZXZpb3VzU2libGluZylcblx0XHRcdHdoaWxlIHByZXZTaWJsaW5nXG5cdFx0XHRcdHNpYmxpbmdzLnB1c2gocHJldlNpYmxpbmcpXG5cdFx0XHRcdHByZXZTaWJsaW5nID0gcHJldlNpYmxpbmcucHJldlxuXG5cdFx0XHRyZXR1cm4gc2libGluZ3NcblxuXHRcdCdzaWJsaW5ncyc6IGdldDogKCktPlxuXHRcdFx0QHByZXZBbGwucmV2ZXJzZSgpLmNvbmNhdChAbmV4dEFsbClcblxuXHRcdCdlbGVtZW50U2libGluZ3MnOiBnZXQ6ICgpLT5cblx0XHRcdF9maWx0ZXJFbGVtZW50cyhAc2libGluZ3MpXG5cdFx0XG5cdFx0J2NoaWxkJzogZ2V0OiAoKS0+XG5cdFx0XHRAX2NoaWxkUmVmcyBvciBfZ2V0Q2hpbGRSZWZzKEApXG5cblx0XHQnY2hpbGRmJzogZ2V0OiAoKS0+XG5cdFx0XHRfZ2V0Q2hpbGRSZWZzKEAsIHRydWUpXG5cblx0XHQnZmlyc3RDaGlsZCc6IGdldDogKCktPlxuXHRcdFx0QGNoaWxkcmVuWzBdXG5cblx0XHQnbGFzdENoaWxkJzogZ2V0OiAoKS0+XG5cdFx0XHRjaGlsZHJlbiA9IEBjaGlsZHJlblxuXHRcdFx0Y2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoLTFdXG5cblx0XHQnaW5kZXgnOiBnZXQ6ICgpLT5cblx0XHRcdGlmIG5vdCBwYXJlbnQ9QHBhcmVudFxuXHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihAKVxuXG5cdFx0J2luZGV4VHlwZSc6IGdldDogKCktPlxuXHRcdFx0X2dldEluZGV4QnlQcm9wKEAsICd0eXBlJylcblxuXHRcdCdpbmRleFJlZic6IGdldDogKCktPlxuXHRcdFx0X2dldEluZGV4QnlQcm9wKEAsICdyZWYnKVxuXG5cblxucXVpY2tkb20ucXVlcnkgPSAodGFyZ2V0KS0+XG5cdHF1aWNrZG9tKGRvY3VtZW50KS5xdWVyeSh0YXJnZXQpXG5cbnF1aWNrZG9tLnF1ZXJ5QWxsID0gKHRhcmdldCktPlxuXHRxdWlja2RvbShkb2N1bWVudCkucXVlcnlBbGwodGFyZ2V0KVxuIiwiaW1wb3J0IElTIGZyb20gJy4uL2NoZWNrcydcbmltcG9ydCB7aW5jbHVkZXMsIHJlbW92ZUl0ZW0sIG5vcm1hbGl6ZUVsZW1lbnRBcmcgYXMgbm9ybWFsaXplRWxlbWVudH0gZnJvbSAnLi4vaGVscGVycydcbkRVTU1ZX0FSUkFZID0gW11cblxuXG5leHBvcnQgc3RhdGUgPSAodGFyZ2V0U3RhdGUsIHZhbHVlLCBidWJibGVzLCBzb3VyY2UpLT5cblx0aWYgYXJndW1lbnRzLmxlbmd0aCBpcyAwXG5cdFx0cmV0dXJuIEBfc3RhdGUuc2xpY2UoKVxuXHRcblx0aWYgYXJndW1lbnRzLmxlbmd0aCBpcyAxXG5cdFx0aWYgSVMuc3RyaW5nKHRhcmdldFN0YXRlKVxuXHRcdFx0cmV0dXJuIGluY2x1ZGVzKEBfc3RhdGUsIHRhcmdldFN0YXRlKVxuXHRcdFxuXHRcdGVsc2UgaWYgSVMub2JqZWN0KHRhcmdldFN0YXRlKVxuXHRcdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldFN0YXRlKVxuXHRcdFx0aSA9IC0xXG5cdFx0XHRAc3RhdGUoa2V5LCB0YXJnZXRTdGF0ZVtrZXldKSB3aGlsZSBrZXk9a2V5c1srK2ldXG5cdFx0XHRyZXR1cm4gQFxuXG5cdGVsc2UgaWYgQF9zdGF0ZVBpcGVUYXJnZXQgYW5kIHNvdXJjZSBpc250IEBcblx0XHRAX3N0YXRlUGlwZVRhcmdldC5zdGF0ZSh0YXJnZXRTdGF0ZSwgdmFsdWUsIGJ1YmJsZXMsIEApXG5cdFx0cmV0dXJuIEBcblx0XG5cdGVsc2UgaWYgSVMuc3RyaW5nKHRhcmdldFN0YXRlKVxuXHRcdHRhcmdldFN0YXRlID0gdGFyZ2V0U3RhdGUuc2xpY2UoMSkgaWYgdGFyZ2V0U3RhdGVbMF0gaXMgJyQnXG5cdFx0cmV0dXJuIEAgaWYgdGFyZ2V0U3RhdGUgaXMgJ2Jhc2UnXG5cdFx0ZGVzaXJlZFZhbHVlID0gISF2YWx1ZSAjIENvbnZlcnQgdGhlIHZhbHVlIHRvIGEgYm9vbGVhblxuXHRcdGFjdGl2ZVN0YXRlcyA9IEBfZ2V0QWN0aXZlU3RhdGVzKHRhcmdldFN0YXRlLCBmYWxzZSlcblx0XHRcblx0XHQjID09PT0gVG9nZ2xlIHN0eWxlcyBmb3IgdGhpcyBzdGF0ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRpZiBAc3RhdGUodGFyZ2V0U3RhdGUpIGlzbnQgZGVzaXJlZFZhbHVlXG5cdFx0XHRwcm9wID0gaWYgQHR5cGUgaXMgJ3RleHQnIHRoZW4gJ1RleHQnIGVsc2UgJ1N0eWxlJ1xuXHRcdFxuXHRcdFx0aWYgZGVzaXJlZFZhbHVlICNpcyBvblxuXHRcdFx0XHRAX3N0YXRlLnB1c2godGFyZ2V0U3RhdGUpXG5cdFx0XHRcdHRvZ2dsZSA9ICdPTidcblx0XHRcdGVsc2Vcblx0XHRcdFx0cmVtb3ZlSXRlbShAX3N0YXRlLCB0YXJnZXRTdGF0ZSlcblx0XHRcdFx0dG9nZ2xlID0gJ09GRidcblx0XHRcdFxuXHRcdFx0QFsnX3R1cm4nK3Byb3ArdG9nZ2xlXSh0YXJnZXRTdGF0ZSwgYWN0aXZlU3RhdGVzKVxuXHRcdFx0QGVtaXRQcml2YXRlIFwic3RhdGVDaGFuZ2U6I3t0YXJnZXRTdGF0ZX1cIiwgZGVzaXJlZFZhbHVlXG5cblxuXHRcdCMgPT09PSBQYXNzIHN0YXRlIHRvIHBhcmVudC9jaGlsZHJlbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRpZiBub3QgaW5jbHVkZXMoQG9wdGlvbnMudW5wYXNzYWJsZVN0YXRlcywgdGFyZ2V0U3RhdGUpXG5cdFx0XHRpZiBidWJibGVzXG5cdFx0XHRcdEBfcGFyZW50LnN0YXRlKHRhcmdldFN0YXRlLCB2YWx1ZSwgdHJ1ZSwgc291cmNlIG9yIEApIGlmIEBwYXJlbnRcblx0XHRcdGVsc2UgaWYgQG9wdGlvbnMucGFzc1N0YXRlVG9DaGlsZHJlblxuXHRcdFx0XHRjaGlsZC5zdGF0ZSh0YXJnZXRTdGF0ZSwgdmFsdWUsIGZhbHNlLCBzb3VyY2Ugb3IgQCkgZm9yIGNoaWxkIGluIEBfY2hpbGRyZW5cblx0XHRcblx0XHRyZXR1cm4gQFxuXG5cbmV4cG9ydCB0b2dnbGVTdGF0ZSA9ICh0YXJnZXRTdGF0ZSktPlxuXHRAc3RhdGUodGFyZ2V0U3RhdGUsICFAc3RhdGUodGFyZ2V0U3RhdGUpKVxuXG5cbmV4cG9ydCByZXNldFN0YXRlID0gKCktPlxuXHRmb3IgYWN0aXZlU3RhdGUgaW4gQF9zdGF0ZS5zbGljZSgpXG5cdFx0QHN0YXRlKGFjdGl2ZVN0YXRlLCBvZmYpXG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgcGlwZVN0YXRlID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBub3JtYWxpemVFbGVtZW50KHRhcmdldEVsKVxuXG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbCkgYW5kIHRhcmdldEVsIGlzbnQgQFxuXHRcdFx0QF9zdGF0ZVBpcGVUYXJnZXQgPSB0YXJnZXRFbFxuXHRcdFx0dGFyZ2V0RWwuc3RhdGUoYWN0aXZlU3RhdGUsIG9uKSBmb3IgYWN0aXZlU3RhdGUgaW4gQF9zdGF0ZVxuXG5cdGVsc2UgaWYgdGFyZ2V0RWwgaXMgZmFsc2Vcblx0XHRkZWxldGUgQF9zdGF0ZVBpcGVUYXJnZXRcblxuXHRyZXR1cm4gQFxuXG5cblxuXG5leHBvcnQgX2FwcGx5UmVnaXN0ZXJlZFN0eWxlID0gKHRhcmdldFN0eWxlLCBzdXBlcmlvclN0YXRlcywgaW5jbHVkZUJhc2UsIHNraXBGbnMpLT4gaWYgdGFyZ2V0U3R5bGVcblx0QGFkZENsYXNzKGNsYXNzTmFtZSkgZm9yIGNsYXNzTmFtZSBpbiB0YXJnZXRTdHlsZS5jbGFzc05hbWVcblx0XG5cdGlmIHRhcmdldFN0eWxlLmZucy5sZW5ndGggYW5kIG5vdCBza2lwRm5zXG5cdFx0c3VwZXJpb3JTdHlsZXMgPSBAX3Jlc29sdmVGblN0eWxlcyhzdXBlcmlvclN0YXRlcywgaW5jbHVkZUJhc2UpIGlmIHN1cGVyaW9yU3RhdGVzXG5cdFx0XG5cdFx0Zm9yIGVudHJ5IGluIHRhcmdldFN0eWxlLmZuc1xuXHRcdFx0QHN0eWxlKGVudHJ5WzBdLCBlbnRyeVsxXSkgdW5sZXNzIHN1cGVyaW9yU3R5bGVzIGFuZCBzdXBlcmlvclN0eWxlc1tlbnRyeVswXV1cblx0XG5cdHJldHVyblxuXG5cbmV4cG9ydCBfcmVtb3ZlUmVnaXN0ZXJlZFN0eWxlID0gKHRhcmdldFN0eWxlLCBzdXBlcmlvclN0YXRlcywgaW5jbHVkZUJhc2UpLT5cblx0QHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgZm9yIGNsYXNzTmFtZSBpbiB0YXJnZXRTdHlsZS5jbGFzc05hbWVcblxuXHRpZiB0YXJnZXRTdHlsZS5mbnMubGVuZ3RoXG5cdFx0c3VwZXJpb3JTdHlsZXMgPSBAX3Jlc29sdmVGblN0eWxlcyhzdXBlcmlvclN0YXRlcywgaW5jbHVkZUJhc2UpIGlmIHN1cGVyaW9yU3RhdGVzXG5cdFx0XG5cdFx0Zm9yIGVudHJ5IGluIHRhcmdldFN0eWxlLmZuc1xuXHRcdFx0cmVzZXRWYWx1ZSA9IHN1cGVyaW9yU3R5bGVzIGFuZCBzdXBlcmlvclN0eWxlc1tlbnRyeVswXV0gb3IgbnVsbFxuXHRcdFx0QHN0eWxlKGVudHJ5WzBdLCByZXNldFZhbHVlKVxuXG5cdHJldHVyblxuXG5cblxuXG5leHBvcnQgX3R1cm5TdHlsZU9OID0gKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpLT5cblx0c2tpcEZucyA9IEBvcHRpb25zLnN0eWxlQWZ0ZXJJbnNlcnQgYW5kIG5vdCBAX2luc2VydGVkXG5cdGlmIEBfc3R5bGVzW3RhcmdldFN0YXRlXVxuXHRcdEBfYXBwbHlSZWdpc3RlcmVkU3R5bGUoQF9zdHlsZXNbdGFyZ2V0U3RhdGVdLCBAX2dldFN1cGVyaW9yU3RhdGVzKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpLCBmYWxzZSwgc2tpcEZucylcblxuXG5cdGlmIEBfcHJvdmlkZWRTdGF0ZXNTaGFyZWRcblx0XHRzaGFyZWRTdGF0ZXMgPSBAX2dldFNoYXJlZFN0YXRlcyh0YXJnZXRTdGF0ZSlcblx0XHRcblx0XHRmb3Igc3RhdGVDaGFpbiBpbiBzaGFyZWRTdGF0ZXNcblx0XHRcdEBfc3RhdGVTaGFyZWQucHVzaChzdGF0ZUNoYWluLnN0cmluZykgdW5sZXNzIGluY2x1ZGVzKEBfc3RhdGVTaGFyZWQsIHN0YXRlQ2hhaW4uc3RyaW5nKVxuXHRcdFx0QF9hcHBseVJlZ2lzdGVyZWRTdHlsZShAX3N0eWxlc1tzdGF0ZUNoYWluLnN0cmluZ10sIG51bGwsIG51bGwsIHNraXBGbnMpXG5cblx0cmV0dXJuXG5cblxuZXhwb3J0IF90dXJuU3R5bGVPRkYgPSAodGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcyktPlxuXHRpZiBAX3N0eWxlc1t0YXJnZXRTdGF0ZV1cblx0XHRAX3JlbW92ZVJlZ2lzdGVyZWRTdHlsZShAX3N0eWxlc1t0YXJnZXRTdGF0ZV0sIGFjdGl2ZVN0YXRlcywgdHJ1ZSlcblxuXHRpZiBAX3Byb3ZpZGVkU3RhdGVzU2hhcmVkXG5cdFx0c2hhcmVkU3RhdGVzID0gQF9nZXRTaGFyZWRTdGF0ZXModGFyZ2V0U3RhdGUpXG5cdFx0cmV0dXJuIGlmIHNoYXJlZFN0YXRlcy5sZW5ndGggaXMgMFxuXG5cdFx0Zm9yIHN0YXRlQ2hhaW4gaW4gc2hhcmVkU3RhdGVzXG5cdFx0XHRyZW1vdmVJdGVtKEBfc3RhdGVTaGFyZWQsIHN0YXRlQ2hhaW4uc3RyaW5nKVxuXHRcdFx0dGFyZ2V0U3R5bGUgPSBAX3N0eWxlc1tzdGF0ZUNoYWluLnN0cmluZ11cblx0XHRcdFxuXHRcdFx0aWYgdGFyZ2V0U3R5bGUuZm5zLmxlbmd0aCBhbmQgQF9zdGF0ZVNoYXJlZC5sZW5ndGggYW5kIG5vdCBhY3RpdmVTaGFyZWRTdGF0ZXNcblx0XHRcdFx0YWN0aXZlU2hhcmVkU3RhdGVzID0gQF9zdGF0ZVNoYXJlZC5maWx0ZXIgKHN0YXRlKS0+IG5vdCBpbmNsdWRlcyhzdGF0ZSwgdGFyZ2V0U3RhdGUpXG5cdFx0XHRcdGFjdGl2ZVN0YXRlcyA9IGFjdGl2ZVN0YXRlcy5jb25jYXQoYWN0aXZlU2hhcmVkU3RhdGVzKVxuXHRcdFx0XG5cdFx0XHRAX3JlbW92ZVJlZ2lzdGVyZWRTdHlsZSh0YXJnZXRTdHlsZSwgYWN0aXZlU3RhdGVzLCB0cnVlKVxuXG5cdHJldHVyblxuXG5cblxuZXhwb3J0IF90dXJuVGV4dE9OID0gKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpLT5cblx0aWYgQF90ZXh0cyBhbmQgSVMuc3RyaW5nKHRhcmdldFRleHQgPSBAX3RleHRzW3RhcmdldFN0YXRlXSlcblx0XHRzdXBlcmlvclN0YXRlcyA9IEBfZ2V0U3VwZXJpb3JTdGF0ZXModGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcylcblx0XHRcblx0XHRAdGV4dCA9IHRhcmdldFRleHQgdW5sZXNzIHN1cGVyaW9yU3RhdGVzLmxlbmd0aFxuXHRyZXR1cm5cblxuXG5leHBvcnQgX3R1cm5UZXh0T0ZGID0gKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpLT5cblx0aWYgQF90ZXh0cyBhbmQgSVMuc3RyaW5nKHRhcmdldFRleHQgPSBAX3RleHRzW3RhcmdldFN0YXRlXSlcblx0XHRhY3RpdmVTdGF0ZXMgPSBhY3RpdmVTdGF0ZXMuZmlsdGVyIChzdGF0ZSktPiBzdGF0ZSBpc250IHRhcmdldFN0YXRlXG5cdFx0dGFyZ2V0VGV4dCA9IEBfdGV4dHNbYWN0aXZlU3RhdGVzW2FjdGl2ZVN0YXRlcy5sZW5ndGgtMV1dXG5cdFx0dGFyZ2V0VGV4dCA/PSBAX3RleHRzLmJhc2Vcblx0XHRcblx0XHRAdGV4dCA9IHRhcmdldFRleHRcblx0cmV0dXJuXG5cblxuXG5cblx0XG5cblxuXG5cbmV4cG9ydCBfZ2V0QWN0aXZlU3RhdGVzID0gKHN0YXRlVG9FeGNsdWRlLCBpbmNsdWRlU2hhcmVkU3RhdGVzPXRydWUpLT5cblx0cmV0dXJuIERVTU1ZX0FSUkFZIGlmIG5vdCBAX3Byb3ZpZGVkU3RhdGVzXG5cdGFjdGl2ZVN0YXRlcyA9IHBsYWluU3RhdGVzID0gQF9zdGF0ZVxuXHRpZiBzdGF0ZVRvRXhjbHVkZVxuXHRcdHBsYWluU3RhdGVzID0gW11cblx0XHRwbGFpblN0YXRlcy5wdXNoKHN0YXRlKSBmb3Igc3RhdGUgaW4gYWN0aXZlU3RhdGVzIHdoZW4gc3RhdGUgaXNudCBzdGF0ZVRvRXhjbHVkZVxuXHRcblx0aWYgbm90IGluY2x1ZGVTaGFyZWRTdGF0ZXMgb3Igbm90IEBfcHJvdmlkZWRTdGF0ZXNTaGFyZWRcblx0XHRyZXR1cm4gcGxhaW5TdGF0ZXNcblx0ZWxzZVxuXHRcdHJldHVybiBwbGFpblN0YXRlcy5jb25jYXQoQF9zdGF0ZVNoYXJlZClcblxuXG5leHBvcnQgX2dldFN1cGVyaW9yU3RhdGVzID0gKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpLT5cblx0dGFyZ2V0U3RhdGVJbmRleCA9IEBfcHJvdmlkZWRTdGF0ZXMuaW5kZXhPZih0YXJnZXRTdGF0ZSlcblx0cmV0dXJuIERVTU1ZX0FSUkFZIGlmIHRhcmdldFN0YXRlSW5kZXggaXMgQF9wcm92aWRlZFN0YXRlcy5sZW5ndGggLSAxXG5cdFxuXHRzdXBlcmlvciA9IFtdXG5cdGZvciBjYW5kaWRhdGUgaW4gYWN0aXZlU3RhdGVzXG5cdFx0c3VwZXJpb3IucHVzaChjYW5kaWRhdGUpIGlmIEBfcHJvdmlkZWRTdGF0ZXMuaW5kZXhPZihjYW5kaWRhdGUpID4gdGFyZ2V0U3RhdGVJbmRleFxuXG5cdHJldHVybiBzdXBlcmlvclxuXG5cbmV4cG9ydCBfZ2V0U2hhcmVkU3RhdGVzID0gKHRhcmdldFN0YXRlKS0+XG5cdGFjdGl2ZVN0YXRlcyA9IEBfc3RhdGVcblx0c2hhcmVkU3RhdGVzID0gW11cblxuXHRmb3Igc3RhdGVDaGFpbiBpbiBAX3Byb3ZpZGVkU3RhdGVzU2hhcmVkXG5cdFx0c2hhcmVkU3RhdGVzLnB1c2goc3RhdGVDaGFpbikgaWYgc3RhdGVDaGFpbi5pbmNsdWRlcyh0YXJnZXRTdGF0ZSkgYW5kIHN0YXRlQ2hhaW4uaXNBcHBsaWNhYmxlKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpXG5cblx0cmV0dXJuIHNoYXJlZFN0YXRlc1xuXG5cbmV4cG9ydCBfcmVzb2x2ZUZuU3R5bGVzID0gKHN0YXRlcywgaW5jbHVkZUJhc2UpLT5cblx0c3RhdGVzID0gWydiYXNlJ10uY29uY2F0KHN0YXRlcykgaWYgaW5jbHVkZUJhc2Vcblx0b3V0cHV0ID0ge31cblx0XG5cdGZvciBzdGF0ZSBpbiBzdGF0ZXMgd2hlbiBAX3N0eWxlc1tzdGF0ZV0gYW5kIEBfc3R5bGVzW3N0YXRlXS5mbnMubGVuZ3RoXG5cdFx0b3V0cHV0W2VudHJ5WzBdXSA9IGVudHJ5WzFdIGZvciBlbnRyeSBpbiBAX3N0eWxlc1tzdGF0ZV0uZm5zXG5cblx0cmV0dXJuIG91dHB1dFxuXG5cbmV4cG9ydCBkZWZhdWx0IChRdWlja0VsZW1lbnQpLT5cblx0UXVpY2tFbGVtZW50OjpzdGF0ZSA9IHN0YXRlXG5cdFF1aWNrRWxlbWVudDo6dG9nZ2xlU3RhdGUgPSB0b2dnbGVTdGF0ZVxuXHRRdWlja0VsZW1lbnQ6OnJlc2V0U3RhdGUgPSByZXNldFN0YXRlXG5cdFF1aWNrRWxlbWVudDo6cGlwZVN0YXRlID0gcGlwZVN0YXRlXG5cdFF1aWNrRWxlbWVudDo6X2FwcGx5UmVnaXN0ZXJlZFN0eWxlID0gX2FwcGx5UmVnaXN0ZXJlZFN0eWxlXG5cdFF1aWNrRWxlbWVudDo6X3JlbW92ZVJlZ2lzdGVyZWRTdHlsZSA9IF9yZW1vdmVSZWdpc3RlcmVkU3R5bGVcblx0UXVpY2tFbGVtZW50OjpfdHVyblN0eWxlT04gPSBfdHVyblN0eWxlT05cblx0UXVpY2tFbGVtZW50OjpfdHVyblN0eWxlT0ZGID0gX3R1cm5TdHlsZU9GRlxuXHRRdWlja0VsZW1lbnQ6Ol90dXJuVGV4dE9OID0gX3R1cm5UZXh0T05cblx0UXVpY2tFbGVtZW50OjpfdHVyblRleHRPRkYgPSBfdHVyblRleHRPRkZcblx0UXVpY2tFbGVtZW50OjpfZ2V0QWN0aXZlU3RhdGVzID0gX2dldEFjdGl2ZVN0YXRlc1xuXHRRdWlja0VsZW1lbnQ6Ol9nZXRTdXBlcmlvclN0YXRlcyA9IF9nZXRTdXBlcmlvclN0YXRlc1xuXHRRdWlja0VsZW1lbnQ6Ol9nZXRTaGFyZWRTdGF0ZXMgPSBfZ2V0U2hhcmVkU3RhdGVzXG5cdFF1aWNrRWxlbWVudDo6X3Jlc29sdmVGblN0eWxlcyA9IF9yZXNvbHZlRm5TdHlsZXNcblxuXG5cblxuXG5cbiIsImltcG9ydCBxdWlja2RvbSBmcm9tICcuLi9xdWlja2RvbSdcbmltcG9ydCBJUyBmcm9tICcuLi9jaGVja3MnXG5pbXBvcnQge2luY2x1ZGVzLCBub3JtYWxpemVFbGVtZW50QXJnIGFzIG5vcm1hbGl6ZUVsZW1lbnR9IGZyb20gJy4uL2hlbHBlcnMnXG5pbXBvcnQgZXh0ZW5kIGZyb20gJ3NtYXJ0LWV4dGVuZCdcblxuZXhwb3J0IHRvVGVtcGxhdGUgPSAoKS0+XG5cdHF1aWNrZG9tLnRlbXBsYXRlKEApXG5cblxuZXhwb3J0IGNsb25lID0gKCktPlxuXHRlbENsb25lID0gQGVsLmNsb25lTm9kZShmYWxzZSlcblx0b3B0aW9ucyA9IGV4dGVuZC5jbG9uZShAb3B0aW9ucywge2V4aXN0aW5nOmVsQ2xvbmV9KVxuXHRcblx0bmV3RWwgPSBuZXcgQGNvbnN0cnVjdG9yKEB0eXBlLCBvcHRpb25zKVxuXHRuZXdFbC5zdGF0ZShhY3RpdmVTdGF0ZSwgb24pIGZvciBhY3RpdmVTdGF0ZSBpbiBAX3N0YXRlXG5cdG5ld0VsLmFwcGVuZChjaGlsZC5jbG9uZSgpKSBmb3IgY2hpbGQgaW4gQGNoaWxkcmVuXG5cdGZvciBldmVudE5hbWUsIGNhbGxiYWNrcyBvZiBAX2V2ZW50Q2FsbGJhY2tzXG5cdFx0bmV3RWwub24oZXZlbnROYW1lLCBjYWxsYmFjaykgZm9yIGNhbGxiYWNrIGluIGNhbGxiYWNrc1xuXHRcblx0cmV0dXJuIG5ld0VsXG5cblxuZXhwb3J0IGFwcGVuZCA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblx0XHRcblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKVxuXHRcdFx0cHJldlBhcmVudCA9IHRhcmdldEVsLnBhcmVudFxuXHRcdFx0cHJldlBhcmVudC5fcmVtb3ZlQ2hpbGQodGFyZ2V0RWwpIGlmIHByZXZQYXJlbnRcblx0XHRcdEBfY2hpbGRyZW4ucHVzaCh0YXJnZXRFbClcblx0XHRcdEBlbC5hcHBlbmRDaGlsZCh0YXJnZXRFbC5lbClcblx0XHRcdHRhcmdldEVsLl9yZWZyZXNoUGFyZW50KCkgIyBGb3JjZSByZS1mcmVzaCB0YXJnZXRFbC5fcGFyZW50IHZhbHVlIHRvIHRyaWdnZXIgaW5zZXJ0ZWQgY2FsbGJhY2tcblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBhcHBlbmRUbyA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblx0XHRcblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKVxuXHRcdFx0dGFyZ2V0RWwuYXBwZW5kKEApXG5cdFxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBwcmVwZW5kID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBub3JtYWxpemVFbGVtZW50KHRhcmdldEVsKVxuXHRcdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHRwcmV2UGFyZW50ID0gdGFyZ2V0RWwucGFyZW50XG5cdFx0XHRwcmV2UGFyZW50Ll9yZW1vdmVDaGlsZCh0YXJnZXRFbCkgaWYgcHJldlBhcmVudFxuXHRcdFx0QF9jaGlsZHJlbi51bnNoaWZ0KHRhcmdldEVsKVxuXHRcdFx0QGVsLmluc2VydEJlZm9yZSh0YXJnZXRFbC5lbCwgQGVsLmZpcnN0Q2hpbGQpXG5cdFx0XHR0YXJnZXRFbC5fcmVmcmVzaFBhcmVudCgpICMgRm9yY2UgcmUtZnJlc2ggdGFyZ2V0RWwuX3BhcmVudCB2YWx1ZSB0byB0cmlnZ2VyIGluc2VydGVkIGNhbGxiYWNrXG5cdFxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBwcmVwZW5kVG8gPSAodGFyZ2V0RWwpLT5cblx0aWYgdGFyZ2V0RWxcblx0XHR0YXJnZXRFbCA9IG5vcm1hbGl6ZUVsZW1lbnQodGFyZ2V0RWwpXG5cdFx0XG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbClcblx0XHRcdHRhcmdldEVsLnByZXBlbmQoQClcblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBhZnRlciA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbCBhbmQgQHBhcmVudFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHRteUluZGV4ID0gQHBhcmVudC5fY2hpbGRyZW4uaW5kZXhPZihAKVxuXHRcdFx0QHBhcmVudC5fY2hpbGRyZW4uc3BsaWNlKG15SW5kZXgrMSwgMCwgdGFyZ2V0RWwpXG5cdFx0XHRAZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFyZ2V0RWwuZWwsIEBlbC5uZXh0U2libGluZylcblx0XHRcdHRhcmdldEVsLl9yZWZyZXNoUGFyZW50KCkgIyBGb3JjZSByZS1mcmVzaCB0YXJnZXRFbC5fcGFyZW50IHZhbHVlIHRvIHRyaWdnZXIgaW5zZXJ0ZWQgY2FsbGJhY2tcblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBpbnNlcnRBZnRlciA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblx0XHRcblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKVxuXHRcdFx0dGFyZ2V0RWwuYWZ0ZXIoQClcblx0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IGJlZm9yZSA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbCBhbmQgQHBhcmVudFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHRteUluZGV4ID0gQHBhcmVudC5fY2hpbGRyZW4uaW5kZXhPZihAKVxuXHRcdFx0QHBhcmVudC5fY2hpbGRyZW4uc3BsaWNlKG15SW5kZXgsIDAsIHRhcmdldEVsKVxuXHRcdFx0QGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhcmdldEVsLmVsLCBAZWwpXG5cdFx0XHR0YXJnZXRFbC5fcmVmcmVzaFBhcmVudCgpICMgRm9yY2UgcmUtZnJlc2ggdGFyZ2V0RWwuX3BhcmVudCB2YWx1ZSB0byB0cmlnZ2VyIGluc2VydGVkIGNhbGxiYWNrXG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgaW5zZXJ0QmVmb3JlID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBub3JtYWxpemVFbGVtZW50KHRhcmdldEVsKVxuXHRcdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHR0YXJnZXRFbC5iZWZvcmUoQClcblx0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IGRldGFjaCA9ICgpLT5cblx0QHBhcmVudD8uX3JlbW92ZUNoaWxkKEApXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHJlbW92ZSA9ICgpLT5cblx0QGRldGFjaCgpXG5cdEByZXNldFN0YXRlKClcblx0aWYgQF9ldmVudENhbGxiYWNrc1xuXHRcdEBfZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXS5sZW5ndGggPSAwIGZvciBldmVudE5hbWUgb2YgQF9ldmVudENhbGxiYWNrc1xuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBlbXB0eSA9ICgpLT5cblx0QF9yZW1vdmVDaGlsZChjaGlsZCkgZm9yIGNoaWxkIGluIEBjaGlsZHJlbi5zbGljZSgpXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHdyYXAgPSAodGFyZ2V0RWwpLT5cblx0aWYgdGFyZ2V0RWxcblx0XHR0YXJnZXRFbCA9IG5vcm1hbGl6ZUVsZW1lbnQodGFyZ2V0RWwpXG5cdFx0Y3VycmVudFBhcmVudCA9IEBwYXJlbnRcblxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpIGFuZCB0YXJnZXRFbCBpc250IEAgYW5kIHRhcmdldEVsIGlzbnQgQHBhcmVudFxuXHRcdFx0aWYgY3VycmVudFBhcmVudFxuXHRcdFx0XHRjdXJyZW50UGFyZW50Ll9yZW1vdmVDaGlsZChALCBpZiBub3QgdGFyZ2V0RWwucGFyZW50IHRoZW4gdGFyZ2V0RWwpXG5cdFx0XHRcblx0XHRcdHRhcmdldEVsLmFwcGVuZChAKVxuXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHVud3JhcCA9ICgpLT5cblx0cGFyZW50ID0gQHBhcmVudFxuXHRpZiBwYXJlbnRcblx0XHRwYXJlbnRDaGlsZHJlbiA9IHF1aWNrZG9tLmJhdGNoKHBhcmVudC5jaGlsZHJlbilcblx0XHRwYXJlbnRTaWJsaW5nID0gcGFyZW50Lm5leHRcblx0XHRncmFuZFBhcmVudCA9IHBhcmVudC5wYXJlbnRcblx0XHRpZiBncmFuZFBhcmVudFxuXHRcdFx0cGFyZW50LmRldGFjaCgpXG5cblx0XHRcdGlmIHBhcmVudFNpYmxpbmdcblx0XHRcdFx0cGFyZW50Q2hpbGRyZW4uaW5zZXJ0QmVmb3JlKHBhcmVudFNpYmxpbmcpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHBhcmVudENoaWxkcmVuLmFwcGVuZFRvKGdyYW5kUGFyZW50KVxuXHRcblx0cmV0dXJuIEBcblxuXG5leHBvcnQgcmVwbGFjZSA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblx0XG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbCkgYW5kIHRhcmdldEVsIGlzbnQgQFxuXHRcdFx0dGFyZ2V0RWwuZGV0YWNoKClcblx0XHRcdEBwYXJlbnQ/Ll9yZW1vdmVDaGlsZChALCB0YXJnZXRFbClcblx0XHRcdHRhcmdldEVsLl9yZWZyZXNoUGFyZW50KCkgIyBGb3JjZSByZS1mcmVzaCB0YXJnZXRFbC5fcGFyZW50IHZhbHVlIHRvIHRyaWdnZXIgaW5zZXJ0ZWQgY2FsbGJhY2tcblx0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IGhhc0NsYXNzID0gKHRhcmdldCktPlxuXHRpbmNsdWRlcyhAY2xhc3NMaXN0LCB0YXJnZXQpXG5cblxuZXhwb3J0IGFkZENsYXNzID0gKHRhcmdldCktPlxuXHRjbGFzc0xpc3QgPSBAY2xhc3NMaXN0XG5cdHRhcmdldEluZGV4ID0gY2xhc3NMaXN0LmluZGV4T2YodGFyZ2V0KVxuXG5cdGlmIHRhcmdldEluZGV4IGlzIC0xXG5cdFx0Y2xhc3NMaXN0LnB1c2godGFyZ2V0KVxuXHRcdEBjbGFzc05hbWUgPSBpZiBjbGFzc0xpc3QubGVuZ3RoID4gMSB0aGVuIGNsYXNzTGlzdC5qb2luKCcgJykgZWxzZSBjbGFzc0xpc3RbMF1cblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCByZW1vdmVDbGFzcyA9ICh0YXJnZXQpLT5cblx0Y2xhc3NMaXN0ID0gQGNsYXNzTGlzdFxuXHR0YXJnZXRJbmRleCA9IGNsYXNzTGlzdC5pbmRleE9mKHRhcmdldClcblx0XG5cdGlmIHRhcmdldEluZGV4IGlzbnQgLTFcblx0XHRjbGFzc0xpc3Quc3BsaWNlKHRhcmdldEluZGV4LCAxKVxuXHRcdEBjbGFzc05hbWUgPSBpZiBjbGFzc0xpc3QubGVuZ3RoIHRoZW4gY2xhc3NMaXN0LmpvaW4oJyAnKSBlbHNlICcnXG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgdG9nZ2xlQ2xhc3MgPSAodGFyZ2V0KS0+XG5cdGlmIEBoYXNDbGFzcyh0YXJnZXQpXG5cdFx0QHJlbW92ZUNsYXNzKHRhcmdldClcblx0ZWxzZVxuXHRcdEBhZGRDbGFzcyh0YXJnZXQpXG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgc2V0UmVmID0gKHRhcmdldCktPlxuXHRAcmVmID0gQG9wdGlvbnMucmVmID0gdGFyZ2V0XG5cdEBhdHRyICdkYXRhLXJlZicsIHRhcmdldFxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBfcmVmcmVzaFBhcmVudCA9ICgpLT5cblx0QHBhcmVudFxuXG5cbmV4cG9ydCBfcmVtb3ZlQ2hpbGQgPSAodGFyZ2V0Q2hpbGQsIHJlcGxhY2VtZW50Q2hpbGQpLT5cblx0aW5kZXhPZkNoaWxkID0gQGNoaWxkcmVuLmluZGV4T2YodGFyZ2V0Q2hpbGQpXG5cdGlmIGluZGV4T2ZDaGlsZCBpc250IC0xXG5cdFx0aWYgcmVwbGFjZW1lbnRDaGlsZFxuXHRcdFx0QGVsLnJlcGxhY2VDaGlsZChyZXBsYWNlbWVudENoaWxkLmVsLCB0YXJnZXRDaGlsZC5lbClcblx0XHRcdEBfY2hpbGRyZW4uc3BsaWNlKGluZGV4T2ZDaGlsZCwgMSwgcmVwbGFjZW1lbnRDaGlsZClcblx0XHRlbHNlXG5cdFx0XHRAZWwucmVtb3ZlQ2hpbGQodGFyZ2V0Q2hpbGQuZWwpXG5cdFx0XHRAX2NoaWxkcmVuLnNwbGljZShpbmRleE9mQ2hpbGQsIDEpXG5cdFx0XG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIFF1aWNrRWxlbWVudDo6LFxuXHRcdCdodG1sJzpcblx0XHRcdGdldDogKCktPiBAZWwuaW5uZXJIVE1MXG5cdFx0XHRzZXQ6IChuZXdWYWx1ZSktPiBAZWwuaW5uZXJIVE1MID0gbmV3VmFsdWVcblx0XHRcblx0XHQndGV4dCc6XG5cdFx0XHRnZXQ6ICgpLT4gQGVsLnRleHRDb250ZW50XG5cdFx0XHRzZXQ6IChuZXdWYWx1ZSktPiBAZWwudGV4dENvbnRlbnQgPSBuZXdWYWx1ZVxuXG5cdFx0J2NsYXNzTmFtZSc6XG5cdFx0XHRnZXQ6ICgpLT4gaWYgQHN2ZyB0aGVuIChAYXR0cignY2xhc3MnKSBvciAnJykgZWxzZSBAcmF3LmNsYXNzTmFtZVxuXHRcdFx0c2V0OiAobmV3VmFsdWUpLT4gaWYgQHN2ZyB0aGVuIEBhdHRyKCdjbGFzcycsIG5ld1ZhbHVlKSBlbHNlIEByYXcuY2xhc3NOYW1lID0gbmV3VmFsdWVcblxuXHRcdCdjbGFzc0xpc3QnOlxuXHRcdFx0Z2V0OiAoKS0+XG5cdFx0XHRcdGxpc3QgPSBAY2xhc3NOYW1lLnNwbGl0KC9cXHMrLylcblx0XHRcdFx0bGlzdC5wb3AoKSBpZiBsaXN0W2xpc3QubGVuZ3RoLTFdIGlzICcnXG5cdFx0XHRcdGxpc3Quc2hpZnQoKSBpZiBsaXN0WzBdIGlzICcnXG5cdFx0XHRcdHJldHVybiBsaXN0XG5cblxuXG5cdFF1aWNrRWxlbWVudDo6dG9UZW1wbGF0ZSA9IHRvVGVtcGxhdGVcblx0UXVpY2tFbGVtZW50OjpjbG9uZSA9IGNsb25lXG5cdFF1aWNrRWxlbWVudDo6YXBwZW5kID0gYXBwZW5kXG5cdFF1aWNrRWxlbWVudDo6YXBwZW5kVG8gPSBhcHBlbmRUb1xuXHRRdWlja0VsZW1lbnQ6OnByZXBlbmQgPSBwcmVwZW5kXG5cdFF1aWNrRWxlbWVudDo6cHJlcGVuZFRvID0gcHJlcGVuZFRvXG5cdFF1aWNrRWxlbWVudDo6YWZ0ZXIgPSBhZnRlclxuXHRRdWlja0VsZW1lbnQ6Omluc2VydEFmdGVyID0gaW5zZXJ0QWZ0ZXJcblx0UXVpY2tFbGVtZW50OjpiZWZvcmUgPSBiZWZvcmVcblx0UXVpY2tFbGVtZW50OjppbnNlcnRCZWZvcmUgPSBpbnNlcnRCZWZvcmVcblx0UXVpY2tFbGVtZW50OjpkZXRhY2ggPSBkZXRhY2hcblx0UXVpY2tFbGVtZW50OjpyZW1vdmUgPSByZW1vdmVcblx0UXVpY2tFbGVtZW50OjplbXB0eSA9IGVtcHR5XG5cdFF1aWNrRWxlbWVudDo6d3JhcCA9IHdyYXBcblx0UXVpY2tFbGVtZW50Ojp1bndyYXAgPSB1bndyYXBcblx0UXVpY2tFbGVtZW50OjpyZXBsYWNlID0gcmVwbGFjZVxuXHRRdWlja0VsZW1lbnQ6Omhhc0NsYXNzID0gaGFzQ2xhc3Ncblx0UXVpY2tFbGVtZW50OjphZGRDbGFzcyA9IGFkZENsYXNzXG5cdFF1aWNrRWxlbWVudDo6cmVtb3ZlQ2xhc3MgPSByZW1vdmVDbGFzc1xuXHRRdWlja0VsZW1lbnQ6OnRvZ2dsZUNsYXNzID0gdG9nZ2xlQ2xhc3Ncblx0UXVpY2tFbGVtZW50OjpzZXRSZWYgPSBzZXRSZWZcblx0UXVpY2tFbGVtZW50OjpfcmVmcmVzaFBhcmVudCA9IF9yZWZyZXNoUGFyZW50XG5cdFF1aWNrRWxlbWVudDo6X3JlbW92ZUNoaWxkID0gX3JlbW92ZUNoaWxkXG5cblxuXG4iLCJpbXBvcnQgSVMgZnJvbSAnLi4vY2hlY2tzJ1xuaW1wb3J0IGV4dGVuZCBmcm9tICdzbWFydC1leHRlbmQnXG5cbmV4cG9ydCB1cGRhdGVPcHRpb25zID0gKG9wdGlvbnMpLT5cblx0aWYgSVMub2JqZWN0KG9wdGlvbnMpIFxuXHRcdEBvcHRpb25zID0gb3B0aW9uc1xuXHRcdEBfbm9ybWFsaXplT3B0aW9ucygpXG5cdFx0QF9hcHBseU9wdGlvbnMoQG9wdGlvbnMpXG5cdFxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCB1cGRhdGVTdGF0ZVN0eWxlcyA9IChzdHlsZXMpLT5cblx0aWYgSVMub2JqZWN0UGxhaW4oc3R5bGVzKVxuXHRcdGV4dGVuZC5kZWVwLmNvbmNhdCBALCBwYXJzZWQgPSBAX3BhcnNlU3R5bGVzKHN0eWxlcylcblxuXHRcdGlmIHBhcnNlZC5fc3R5bGVzXG5cdFx0XHR1cGRhdGVkU3RhdGVzID0gT2JqZWN0LmtleXMocGFyc2VkLl9zdHlsZXMpXG5cdFx0XHRcblx0XHRcdGZvciBzdGF0ZSBpbiB1cGRhdGVkU3RhdGVzIHdoZW4gQHN0YXRlKHN0YXRlKSBvciBzdGF0ZSBpcyAnYmFzZSdcblx0XHRcdFx0QF9hcHBseVJlZ2lzdGVyZWRTdHlsZShAX3N0eWxlc1tzdGF0ZV0sIEBfZ2V0QWN0aXZlU3RhdGVzKHN0YXRlKSwgZmFsc2UpXG5cdFx0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHVwZGF0ZVN0YXRlVGV4dHMgPSAodGV4dHMpLT5cblx0aWYgSVMub2JqZWN0UGxhaW4odGV4dHMpXG5cdFx0ZXh0ZW5kLmRlZXAuY29uY2F0IEAsIHBhcnNlZCA9IEBfcGFyc2VUZXh0cyh0ZXh0cylcblx0XG5cdHJldHVybiBAXG5cblxuXG5leHBvcnQgYXBwbHlEYXRhID0gKGRhdGEsIHBhc3NUaHJvdWdoKS0+XG5cdGlmIEBvcHRpb25zLnBhc3NEYXRhVG9DaGlsZHJlbiBhbmQgQF9jaGlsZHJlbi5sZW5ndGggYW5kIChwYXNzVGhyb3VnaCA/PSB0cnVlKVxuXHRcdGNoaWxkLmFwcGx5RGF0YShkYXRhKSBmb3IgY2hpbGQgaW4gQF9jaGlsZHJlblxuXG5cdGlmIGNvbXB1dGVycyA9IEBvcHRpb25zLmNvbXB1dGVyc1xuXHRcdGRlZmF1bHRzID0gQG9wdGlvbnMuZGVmYXVsdHNcblx0XHRrZXlzID0gT2JqZWN0LmtleXMoY29tcHV0ZXJzKVxuXHRcdFxuXHRcdGZvciBrZXkgaW4ga2V5c1xuXHRcdFx0aWYgQG9wdGlvbnMuaW52b2tlQ29tcHV0ZXJzT25jZVxuXHRcdFx0XHRjb250aW51ZSBpZiBAX2ludm9rZWRDb21wdXRlcnNba2V5XVxuXHRcdFx0XHRAX2ludm9rZWRDb21wdXRlcnNba2V5XSA9IDFcblx0XHRcdFxuXHRcdFx0aWYgZGF0YSBhbmQgZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpXG5cdFx0XHRcdEBfcnVuQ29tcHV0ZXIoa2V5LCBkYXRhW2tleV0sIGRhdGEpXG5cdFx0XHRcblx0XHRcdGVsc2UgaWYgZGVmYXVsdHMgYW5kIGRlZmF1bHRzLmhhc093blByb3BlcnR5KGtleSlcblx0XHRcdFx0QF9ydW5Db21wdXRlcihrZXksIGRlZmF1bHRzW2tleV0sIGRhdGEpXG5cdFxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBfcnVuQ29tcHV0ZXIgPSAoY29tcHV0ZXIsIGFyZywgZGF0YSktPlxuXHRAb3B0aW9ucy5jb21wdXRlcnNbY29tcHV0ZXJdLmNhbGwoQCwgYXJnLCBkYXRhKVxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdFF1aWNrRWxlbWVudDo6dXBkYXRlT3B0aW9ucyA9IHVwZGF0ZU9wdGlvbnNcblx0UXVpY2tFbGVtZW50Ojp1cGRhdGVTdGF0ZVN0eWxlcyA9IHVwZGF0ZVN0YXRlU3R5bGVzXG5cdFF1aWNrRWxlbWVudDo6dXBkYXRlU3RhdGVUZXh0cyA9IHVwZGF0ZVN0YXRlVGV4dHNcblx0UXVpY2tFbGVtZW50OjphcHBseURhdGEgPSBhcHBseURhdGFcblx0UXVpY2tFbGVtZW50OjpfcnVuQ29tcHV0ZXIgPSBfcnVuQ29tcHV0ZXJcblxuXG5cbiIsImltcG9ydCBJUyBmcm9tICcuLi9jaGVja3MnXG5cbmV4cG9ydCBhdHRyID0gKHRhcmdldCwgbmV3VmFsdWUpLT5cblx0aWYgYXJndW1lbnRzLmxlbmd0aCBpcyAxXG5cdFx0aWYgdHlwZW9mIHRhcmdldCBpcyAnc3RyaW5nJ1xuXHRcdFx0cmV0dXJuIEBlbC5nZXRBdHRyaWJ1dGUodGFyZ2V0KVxuXHRcblx0XHRpZiBJUy5vYmplY3QodGFyZ2V0KVxuXHRcdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldCk7IGkgPSAtMVxuXHRcdFx0QGF0dHIoa2V5LCB0YXJnZXRba2V5XSkgd2hpbGUga2V5PWtleXNbKytpXVxuXG5cdGVsc2UgaWYgbmV3VmFsdWUgaXMgbnVsbFxuXHRcdHJldHVybiBAZWwucmVtb3ZlQXR0cmlidXRlKHRhcmdldClcblxuXHRlbHNlXG5cdFx0QGVsLnNldEF0dHJpYnV0ZSh0YXJnZXQsIG5ld1ZhbHVlKVxuXHRcblx0cmV0dXJuIEBcblxuXG5cbmV4cG9ydCBwcm9wID0gKHRhcmdldCwgbmV3VmFsdWUpLT5cblx0aWYgYXJndW1lbnRzLmxlbmd0aCBpcyAxXG5cdFx0aWYgdHlwZW9mIHRhcmdldCBpcyAnc3RyaW5nJ1xuXHRcdFx0cmV0dXJuIEBlbFt0YXJnZXRdXG5cdFxuXHRcdGlmIElTLm9iamVjdCh0YXJnZXQpXG5cdFx0XHRrZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTsgaSA9IC0xXG5cdFx0XHRAcHJvcChrZXksIHRhcmdldFtrZXldKSB3aGlsZSBrZXk9a2V5c1srK2ldXG5cdFxuXHRlbHNlXG5cdFx0QGVsW3RhcmdldF0gPSBuZXdWYWx1ZVxuXHRcdFxuXHRyZXR1cm4gQFxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdFF1aWNrRWxlbWVudDo6YXR0ciA9IGF0dHJcblx0UXVpY2tFbGVtZW50Ojpwcm9wID0gcHJvcCIsImltcG9ydCBleHRlbmQgZnJvbSAnc21hcnQtZXh0ZW5kJ1xuaW1wb3J0IHtlbGVtZW50IGFzIEFMTE9XRURfT1BUSU9OU30gZnJvbSAnLi4vYWxsb3dlZE9wdGlvbnMnXG5zdmdOYW1lc3BhY2UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrRWxlbWVudFxuXHRAY291bnQgPSAwXG5cdGNvbnN0cnVjdG9yOiAoQHR5cGUsIEBvcHRpb25zKS0+XG5cdFx0UXVpY2tFbGVtZW50LmNvdW50Kytcblx0XHRAc3ZnID0gdHJ1ZSBpZiBAdHlwZVswXSBpcyAnKidcblx0XHRAZWwgPSBAb3B0aW9ucy5leGlzdGluZyBvclxuXHRcdFx0aWYgQHR5cGUgaXMgJ3RleHQnIHRoZW4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaWYgdHlwZW9mIEBvcHRpb25zLnRleHQgaXMgJ3N0cmluZycgdGhlbiBAb3B0aW9ucy50ZXh0IGVsc2UgJycpXG5cdFx0XHRlbHNlIGlmIEBzdmcgdGhlbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBAdHlwZS5zbGljZSgxKSlcblx0XHRcdGVsc2UgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChAdHlwZSlcblxuXHRcdGlmIEB0eXBlIGlzICd0ZXh0J1xuXHRcdFx0QGFwcGVuZCA9IEBwcmVwZW5kID0gQGF0dHIgPSAoKS0+XG5cdFx0XHQjIEBfdGV4dHMgPSB7fSAjIGRlZmluZWQgY29uZGl0aW9uYWxseVxuXG5cdFx0QF9wYXJlbnQgPSBudWxsXG5cdFx0QF9zdHlsZXMgPSB7fVxuXHRcdEBfc3RhdGUgPSBbXVxuXHRcdEBfY2hpbGRyZW4gPSBbXVxuXHRcdCMgQF9wcm92aWRlZFN0YXRlcyA9IFtdXHRcdFx0XHQjIGRlZmluZWQgY29uZGl0aW9uYWxseVxuXHRcdCMgQF9wcm92aWRlZFN0YXRlc1NoYXJlZCA9IFtdXHRcdCMgZGVmaW5lZCBjb25kaXRpb25hbGx5XG5cdFx0IyBAX2V2ZW50Q2FsbGJhY2tzID0ge19fcmVmczp7fX1cdCMgZGVmaW5lZCBjb25kaXRpb25hbGx5XG5cdFx0XG5cdFx0QF9ub3JtYWxpemVPcHRpb25zKClcblx0XHRAX2FwcGx5T3B0aW9ucygpXG5cdFx0QF9hdHRhY2hTdGF0ZUV2ZW50cygpXG5cdFx0QF9wcm94eVBhcmVudCgpXG5cdFx0QF9yZWZyZXNoUGFyZW50KCkgaWYgQG9wdGlvbnMuZXhpc3Rpbmdcblx0XHRAZWwuX3F1aWNrRWxlbWVudCA9IEBcblxuXG5cdHRvSlNPTjogKCktPlxuXHRcdG91dHB1dCA9IFtAdHlwZSwgZXh0ZW5kLmNsb25lLmtleXMoQUxMT1dFRF9PUFRJT05TKShAb3B0aW9ucyldXG5cdFx0Y2hpbGRyZW4gPSBAY2hpbGRyZW5cblx0XHRvdXRwdXQucHVzaChjaGlsZC50b0pTT04oKSkgZm9yIGNoaWxkIGluIGNoaWxkcmVuXG5cdFx0cmV0dXJuIG91dHB1dFxuXG4jIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5RdWlja0VsZW1lbnQubmFtZSA/PSAnUXVpY2tFbGVtZW50J1xuXG5pbXBvcnQgaW5pdCBmcm9tICcuL2luaXQnXG5pbXBvcnQgYWxpYXNlcyBmcm9tICcuL2FsaWFzZXMnXG5pbXBvcnQgdHJhdmVyc2luZyBmcm9tICcuL3RyYXZlcnNpbmcnXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzJ1xuaW1wb3J0IHN0YXRlIGZyb20gJy4vc3RhdGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSdcbmltcG9ydCBtYW5pcHVsYXRpb24gZnJvbSAnLi9tYW5pcHVsYXRpb24nXG5pbXBvcnQgYXBwbGljYXRpb24gZnJvbSAnLi9hcHBsaWNhdGlvbidcbmltcG9ydCBhdHRyaWJ1dGVzQW5kUHJvcGVydGllcyBmcm9tICcuL2F0dHJpYnV0ZXMtYW5kLXByb3BlcnRpZXMnXG5pbml0KFF1aWNrRWxlbWVudClcbmFsaWFzZXMoUXVpY2tFbGVtZW50KVxudHJhdmVyc2luZyhRdWlja0VsZW1lbnQpXG5ldmVudHMoUXVpY2tFbGVtZW50KVxuc3RhdGUoUXVpY2tFbGVtZW50KVxuc3R5bGUoUXVpY2tFbGVtZW50KVxubWFuaXB1bGF0aW9uKFF1aWNrRWxlbWVudClcbmFwcGxpY2F0aW9uKFF1aWNrRWxlbWVudClcbmF0dHJpYnV0ZXNBbmRQcm9wZXJ0aWVzKFF1aWNrRWxlbWVudClcbiIsImV4cG9ydCBzY2hlbWEgPSBcblx0dHlwZTogJ2Rpdidcblx0cmVmOiB1bmRlZmluZWRcblx0b3B0aW9uczoge31cblx0Y2hpbGRyZW46IFtdXG5cblxuZXhwb3J0IG1hdGNoZXNTY2hlbWEgPSAob2JqZWN0KS0+XG5cdHR5cGVvZiBvYmplY3QudHlwZSBpc250ICd1bmRlZmluZWQnIG9yXG5cdHR5cGVvZiBvYmplY3QucmVmIGlzbnQgJ3VuZGVmaW5lZCcgb3Jcblx0dHlwZW9mIG9iamVjdC5vcHRpb25zIGlzbnQgJ3VuZGVmaW5lZCcgb3Jcblx0dHlwZW9mIG9iamVjdC5jaGlsZHJlbiBpc250ICd1bmRlZmluZWQnXG5cblxuXG4iLCJpbXBvcnQgcXVpY2tkb20gZnJvbSAnLi4vJ1xuaW1wb3J0IGV4dGVuZCBmcm9tICdzbWFydC1leHRlbmQnXG5pbXBvcnQgSVMgZnJvbSAnLi4vY2hlY2tzJ1xuaW1wb3J0IHt0ZW1wbGF0ZSBhcyBBTExPV0VEX1RFTVBMQVRFX09QVElPTlN9IGZyb20gJy4uL2FsbG93ZWRPcHRpb25zJ1xuaW1wb3J0IHtzY2hlbWF9IGZyb20gJy4vc2NoZW1hJ1xuUEFSU0VfRVJST1JfUFJFRklYID0gJ1RlbXBsYXRlIFBhcnNlIEVycm9yOiBleHBlY3RlZCdcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VUcmVlID0gKHRyZWUsIHBhcnNlQ2hpbGRyZW4pLT4gc3dpdGNoXG5cdHdoZW4gSVMuYXJyYXkodHJlZSlcblx0XHRvdXRwdXQgPSB7fVxuXG5cdFx0aWYgbm90IElTLnN0cmluZyh0cmVlWzBdKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yIFwiI3tQQVJTRV9FUlJPUl9QUkVGSVh9IHN0cmluZyBmb3IgJ3R5cGUnLCBnb3QgJyN7U3RyaW5nKHRyZWVbMF0pfSdcIlxuXHRcdGVsc2Vcblx0XHRcdG91dHB1dC50eXBlID0gdHJlZVswXVxuXHRcdFxuXHRcdGlmIHRyZWUubGVuZ3RoID4gMSBhbmQgbm90IElTLm9iamVjdCh0cmVlWzFdKSBhbmQgdHJlZVsxXSBpc250IG51bGxcblx0XHRcdHRocm93IG5ldyBFcnJvciBcIiN7UEFSU0VfRVJST1JfUFJFRklYfSBvYmplY3QgZm9yICdvcHRpb25zJywgZ290ICcje1N0cmluZyh0cmVlWzFdKX0nXCJcblx0XHRlbHNlXG5cdFx0XHRvdXRwdXQub3B0aW9ucyA9IGlmIHRyZWVbMV0gdGhlbiBleHRlbmQuZGVlcC5jbG9uZSh0cmVlWzFdKSBlbHNlIHNjaGVtYS5vcHRpb25zXG5cdFx0XHRvdXRwdXQucmVmID0gdHJlZVsxXS5pZCBvciB0cmVlWzFdLnJlZiBpZiB0cmVlWzFdXG5cblx0XHRvdXRwdXQuY2hpbGRyZW4gPSB0cmVlLnNsaWNlKDIpXG5cdFx0aWYgcGFyc2VDaGlsZHJlbiBpcyBmYWxzZVxuXHRcdFx0b3V0cHV0LmNoaWxkcmVuID0gdHJlZVsyXSBpZiB0cmVlLmxlbmd0aCBpcyAzIGFuZCBJUy5vYmplY3RQbGFpbih0cmVlWzJdKSBhbmQgbm90IElTLnRlbXBsYXRlKHRyZWVbMl0pXG5cdFx0ZWxzZVxuXHRcdFx0b3V0cHV0LmNoaWxkcmVuID0gb3V0cHV0LmNoaWxkcmVuLm1hcChxdWlja2RvbS50ZW1wbGF0ZSlcblx0XHRyZXR1cm4gb3V0cHV0XG5cblxuXHR3aGVuIElTLnN0cmluZyh0cmVlKSBvciBJUy5kb21UZXh0KHRyZWUpXG5cdFx0dHlwZTondGV4dCcsIG9wdGlvbnM6e3RleHQ6IHRyZWUudGV4dENvbnRlbnQgb3IgdHJlZX0sIGNoaWxkcmVuOnNjaGVtYS5jaGlsZHJlblxuXG5cdHdoZW4gSVMuZG9tRWwodHJlZSlcblx0XHR0eXBlOiB0cmVlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblx0XHRyZWY6IHRyZWUuaWRcblx0XHRvcHRpb25zOiBleHRlbmQuY2xvbmUua2V5cyhBTExPV0VEX1RFTVBMQVRFX09QVElPTlMpKHRyZWUpXG5cdFx0Y2hpbGRyZW46IHNjaGVtYS5jaGlsZHJlbi5tYXAuY2FsbCh0cmVlLmNoaWxkTm9kZXMsIHF1aWNrZG9tLnRlbXBsYXRlKVxuXG5cdHdoZW4gSVMucXVpY2tEb21FbCh0cmVlKVxuXHRcdHR5cGU6IHRyZWUudHlwZVxuXHRcdHJlZjogdHJlZS5yZWZcblx0XHRvcHRpb25zOiBleHRlbmQuY2xvbmUuZGVlcC5ub3RLZXlzKFsncmVsYXRlZEluc3RhbmNlJywgJ3JlbGF0ZWQnXSkodHJlZS5vcHRpb25zKVxuXHRcdGNoaWxkcmVuOiB0cmVlLmNoaWxkcmVuLm1hcChxdWlja2RvbS50ZW1wbGF0ZSlcblxuXHR3aGVuIElTLnRlbXBsYXRlKHRyZWUpXG5cdFx0cmV0dXJuIHRyZWVcblxuXHRlbHNlXG5cdFx0dGhyb3cgbmV3IEVycm9yIFwiI3tQQVJTRV9FUlJPUl9QUkVGSVh9IChhcnJheSB8fCBzdHJpbmcgfHwgZG9tRWwgfHwgcXVpY2tEb21FbCB8fCB0ZW1wbGF0ZSksIGdvdCAje1N0cmluZyh0cmVlKX1cIlxuXG5cbiIsImltcG9ydCBRdWlja1RlbXBsYXRlIGZyb20gJy4vJ1xuaW1wb3J0IHBhcnNlVHJlZSBmcm9tICcuL3BhcnNlVHJlZSdcbmltcG9ydCB7c2NoZW1hLCBtYXRjaGVzU2NoZW1hfSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBleHRlbmQgZnJvbSAnc21hcnQtZXh0ZW5kJ1xuaW1wb3J0IElTIGZyb20gJy4uL2NoZWNrcydcbk5PVF9ERUVQX0tFWVMgPSBbJ3JlbGF0ZWRJbnN0YW5jZScsJ3JlbGF0ZWQnLCdkYXRhJ11cbk5PVF9LRVlTID0gWydjaGlsZHJlbicsJ19jaGlsZFJlZnMnXVxuXG5leHBvcnQgZGVmYXVsdCBleHRlbmRUZW1wbGF0ZSA9IChjdXJyZW50T3B0cywgbmV3T3B0cywgZ2xvYmFsT3B0cyktPlxuXHRpZiBnbG9iYWxPcHRzIHRoZW4gZ2xvYmFsT3B0c1RyYW5zZm9ybSA9IG9wdGlvbnM6IChvcHRzKS0+IGV4dGVuZChvcHRzLCBnbG9iYWxPcHRzKVxuXHRpZiBJUy5hcnJheShuZXdPcHRzKVxuXHRcdG5ld09wdHMgPSBwYXJzZVRyZWUobmV3T3B0cywgZmFsc2UpXG5cdGVsc2UgaWYgbmV3T3B0cyBhbmQgbm90IG1hdGNoZXNTY2hlbWEobmV3T3B0cylcblx0XHRuZXdPcHRzID0gb3B0aW9uczpuZXdPcHRzXG5cblxuXHRvdXRwdXQgPSBleHRlbmQuZGVlcC5udWxsRGVsZXRlcy5ub3RLZXlzKE5PVF9LRVlTKS5ub3REZWVwKE5PVF9ERUVQX0tFWVMpLnRyYW5zZm9ybShnbG9iYWxPcHRzVHJhbnNmb3JtKS5jbG9uZShjdXJyZW50T3B0cywgbmV3T3B0cylcblx0Y3VycmVudENoaWxkcmVuID0gY3VycmVudE9wdHMuY2hpbGRyZW5cblx0bmV3Q2hpbGRyZW4gPSBuZXdPcHRzPy5jaGlsZHJlbiBvciBbXVxuXHRvdXRwdXQuY2hpbGRyZW4gPSBbXVxuXG5cdCMjIyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAjIyNcblx0aWYgSVMuYXJyYXkobmV3Q2hpbGRyZW4pXG5cdFx0bWF4TGVuZ3RoID0gTWF0aC5tYXgoY3VycmVudENoaWxkcmVuLmxlbmd0aCwgbmV3Q2hpbGRyZW4ubGVuZ3RoKVxuXHRcdGluZGV4ID0gLTFcblx0XHR3aGlsZSArK2luZGV4IGlzbnQgbWF4TGVuZ3RoXG5cdFx0XHRuZWVkc1RlbXBsYXRlV3JhcCA9IG5vQ2hhbmdlcyA9IGZhbHNlXG5cdFx0XHRjdXJyZW50Q2hpbGQgPSBjdXJyZW50Q2hpbGRyZW5baW5kZXhdXG5cdFx0XHRuZXdDaGlsZCA9IG5ld0NoaWxkcmVuW2luZGV4XVxuXHRcdFx0bmV3Q2hpbGRQcm9jZXNzZWQgPSBzd2l0Y2hcblx0XHRcdFx0d2hlbiBJUy50ZW1wbGF0ZShuZXdDaGlsZCkgdGhlbiBuZXdDaGlsZFxuXHRcdFx0XHR3aGVuIElTLmFycmF5KG5ld0NoaWxkKSB0aGVuIG5lZWRzVGVtcGxhdGVXcmFwID0gcGFyc2VUcmVlKG5ld0NoaWxkKVxuXHRcdFx0XHR3aGVuIElTLnN0cmluZyhuZXdDaGlsZCkgdGhlbiBuZWVkc1RlbXBsYXRlV3JhcCA9IHt0eXBlOid0ZXh0Jywgb3B0aW9uczp7dGV4dDpuZXdDaGlsZH19XG5cdFx0XHRcdHdoZW4gbm90IG5ld0NoaWxkIGFuZCBub3QgZ2xvYmFsT3B0cyB0aGVuIG5vQ2hhbmdlcyA9IHRydWVcblx0XHRcdFx0ZWxzZSBuZWVkc1RlbXBsYXRlV3JhcCA9IG5ld0NoaWxkIG9yIHRydWVcblxuXG5cdFx0XHRpZiBub0NoYW5nZXNcblx0XHRcdFx0bmV3Q2hpbGRQcm9jZXNzZWQgPSBjdXJyZW50Q2hpbGRcblx0XHRcdFxuXHRcdFx0ZWxzZSBpZiBuZWVkc1RlbXBsYXRlV3JhcFxuXHRcdFx0XHRuZXdDaGlsZFByb2Nlc3NlZCA9IFxuXHRcdFx0XHRcdGlmIGN1cnJlbnRDaGlsZFxuXHRcdFx0XHRcdFx0Y3VycmVudENoaWxkLmV4dGVuZChuZXdDaGlsZFByb2Nlc3NlZCwgZ2xvYmFsT3B0cylcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRuZXcgUXVpY2tUZW1wbGF0ZShleHRlbmQuY2xvbmUoc2NoZW1hLCBuZXdDaGlsZFByb2Nlc3NlZCkpXG5cblx0XHRcdG91dHB1dC5jaGlsZHJlbi5wdXNoIG5ld0NoaWxkUHJvY2Vzc2VkXG5cdFxuXHRcblx0ZWxzZSBpZiBJUy5vYmplY3QobmV3Q2hpbGRyZW4pXG5cdFx0bmV3Q2hpbGRyZW4gPSBleHRlbmQuYWxsb3dOdWxsLmNsb25lIG5ld0NoaWxkcmVuXG5cdFx0b3V0cHV0LmNoaWxkcmVuID0gZXh0ZW5kQnlSZWYobmV3Q2hpbGRyZW4sIGN1cnJlbnRDaGlsZHJlbiwgZ2xvYmFsT3B0cylcblx0XHRyZW1haW5pbmdOZXdDaGlsZHJlbiA9IG5ld0NoaWxkcmVuXG5cdFx0XG5cdFx0Zm9yIHJlZixuZXdDaGlsZCBvZiByZW1haW5pbmdOZXdDaGlsZHJlblxuXHRcdFx0bmV3Q2hpbGRQcm9jZXNzZWQgPSBpZiBJUy5vYmplY3RQbGFpbihuZXdDaGlsZCkgYW5kIG5vdCBJUy50ZW1wbGF0ZShuZXdDaGlsZCkgdGhlbiBuZXdDaGlsZCBlbHNlIHBhcnNlVHJlZShuZXdDaGlsZClcblx0XHRcdG91dHB1dC5jaGlsZHJlbi5wdXNoIG5ldyBRdWlja1RlbXBsYXRlIG5ld0NoaWxkUHJvY2Vzc2VkXG5cdFx0XHRkZWxldGUgcmVtYWluaW5nTmV3Q2hpbGRyZW5bcmVmXVxuXG5cdHJldHVybiBvdXRwdXRcblxuXG5cblxuZXh0ZW5kQnlSZWYgPSAobmV3Q2hpbGRyZW5SZWZzLCBjdXJyZW50Q2hpbGRyZW4sIGdsb2JhbE9wdHMpLT4gaWYgbm90IGN1cnJlbnRDaGlsZHJlbi5sZW5ndGggdGhlbiBjdXJyZW50Q2hpbGRyZW4gZWxzZVxuXHRvdXRwdXQgPSBbXVxuXHRcblx0Zm9yIGN1cnJlbnRDaGlsZCBpbiBjdXJyZW50Q2hpbGRyZW5cblx0XHRuZXdDaGlsZCA9IG5ld0NoaWxkcmVuUmVmc1tjdXJyZW50Q2hpbGQucmVmXVxuXHRcdGlmIG5ld0NoaWxkXG5cdFx0XHRuZXdDaGlsZFByb2Nlc3NlZCA9IGN1cnJlbnRDaGlsZC5leHRlbmQobmV3Q2hpbGQsIGdsb2JhbE9wdHMpXG5cdFx0XHRkZWxldGUgbmV3Q2hpbGRyZW5SZWZzW2N1cnJlbnRDaGlsZC5yZWZdXG5cdFx0XG5cdFx0ZWxzZSBpZiBuZXdDaGlsZCBpcyBudWxsXG5cdFx0XHRkZWxldGUgbmV3Q2hpbGRyZW5SZWZzW2N1cnJlbnRDaGlsZC5yZWZdXG5cdFx0XHRjb250aW51ZVxuXHRcdFxuXHRcdGVsc2Vcblx0XHRcdG5ld0NoaWxkUHJvY2Vzc2VkID0gc3dpdGNoXG5cdFx0XHRcdHdoZW4gZ2xvYmFsT3B0cyB0aGVuIGN1cnJlbnRDaGlsZC5leHRlbmQobnVsbCwgZ2xvYmFsT3B0cylcblx0XHRcdFx0d2hlbiBPYmplY3Qua2V5cyhuZXdDaGlsZHJlblJlZnMpLmxlbmd0aCB0aGVuIGN1cnJlbnRDaGlsZC5leHRlbmQoKVxuXHRcdFx0XHRlbHNlIGN1cnJlbnRDaGlsZFxuXG5cdFx0bmV3Q2hpbGRQcm9jZXNzZWQuY2hpbGRyZW4gPSBleHRlbmRCeVJlZihuZXdDaGlsZHJlblJlZnMsIG5ld0NoaWxkUHJvY2Vzc2VkLmNoaWxkcmVuKVxuXHRcdG91dHB1dC5wdXNoKG5ld0NoaWxkUHJvY2Vzc2VkKVxuXG5cdHJldHVybiBvdXRwdXRcblxuXG5cblxuIiwiaW1wb3J0IGV4dGVuZCBmcm9tICdzbWFydC1leHRlbmQnXG5pbXBvcnQgcXVpY2tkb20gZnJvbSAnLi4vcXVpY2tkb20nXG5pbXBvcnQgSVMgZnJvbSAnLi4vY2hlY2tzJ1xuaW1wb3J0IGV4dGVuZFRlbXBsYXRlIGZyb20gJy4vZXh0ZW5kVGVtcGxhdGUnXG5pbXBvcnQgcGFyc2VUcmVlIGZyb20gJy4vcGFyc2VUcmVlJ1xuaW1wb3J0IHtfZ2V0Q2hpbGRSZWZzfSBmcm9tICcuLi9lbGVtZW50L3RyYXZlcnNpbmcnXG5pbXBvcnQge3NjaGVtYX0gZnJvbSAnLi9zY2hlbWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrVGVtcGxhdGVcblx0Y29uc3RydWN0b3I6IChjb25maWcsIGlzVHJlZSktPlxuXHRcdHJldHVybiBjb25maWcgaWYgSVMudGVtcGxhdGUoY29uZmlnKVxuXHRcdGNvbmZpZyA9IGlmIGlzVHJlZSB0aGVuIHBhcnNlVHJlZShjb25maWcpIGVsc2UgY29uZmlnXG5cdFx0ZXh0ZW5kIEAsIGNvbmZpZ1xuXHRcblx0ZXh0ZW5kOiAobmV3VmFsdWVzLCBnbG9iYWxPcHRzKS0+XG5cdFx0bmV3IFF1aWNrVGVtcGxhdGUgZXh0ZW5kVGVtcGxhdGUoQCwgbmV3VmFsdWVzLCBnbG9iYWxPcHRzKVxuXG5cdHNwYXduOiAobmV3VmFsdWVzLCBnbG9iYWxPcHRzLCBkYXRhKS0+XG5cdFx0aWYgbmV3VmFsdWVzIGFuZCBuZXdWYWx1ZXMuZGF0YVxuXHRcdFx0ZGF0YSA9IG5ld1ZhbHVlcy5kYXRhXG5cdFx0XHRuZXdWYWx1ZXMgPSBudWxsIGlmIE9iamVjdC5rZXlzKG5ld1ZhbHVlcykubGVuZ3RoIGlzIDFcblx0XHRcblx0XHRpZiBuZXdWYWx1ZXMgb3IgZ2xvYmFsT3B0c1xuXHRcdFx0e29wdGlvbnMsIGNoaWxkcmVuLCB0eXBlfSA9IGV4dGVuZFRlbXBsYXRlKEAsIG5ld1ZhbHVlcywgZ2xvYmFsT3B0cylcblx0XHRlbHNlXG5cdFx0XHR7b3B0aW9ucywgY2hpbGRyZW4sIHR5cGV9ID0gQFxuXHRcdFx0b3B0aW9ucyA9IGV4dGVuZC5jbG9uZShvcHRpb25zKVxuXG5cdFx0XG5cdFx0ZWxlbWVudCA9IHF1aWNrZG9tLmNyZWF0ZShbdHlwZSwgb3B0aW9uc10pXG5cdFx0XG5cdFx0aWYgY2hpbGRyZW5cblx0XHRcdGNoaWxkRGF0YSA9IGlmIG9wdGlvbnMucGFzc0RhdGFUb0NoaWxkcmVuIHRoZW4gZGF0YSBvciBvcHRpb25zLmRhdGFcblx0XHRcdGZvciBjaGlsZCBpbiBjaGlsZHJlblxuXHRcdFx0XHRlbGVtZW50LmFwcGVuZCBjaGlsZC5zcGF3bihudWxsLCBudWxsLCBjaGlsZERhdGEpXG5cblx0XHRlbGVtZW50Ll9wb3N0Q3JlYXRpb24oZGF0YSlcblx0XHRyZXR1cm4gZWxlbWVudFxuXG5cbiMjIyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAjIyNcblF1aWNrVGVtcGxhdGUubmFtZSA/PSAnUXVpY2tUZW1wbGF0ZSdcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkgUXVpY2tUZW1wbGF0ZTo6LCAnY2hpbGQnLCBnZXQ6ICgpLT5cblx0QF9jaGlsZFJlZnMgb3IgX2dldENoaWxkUmVmcyhAKVxuXG5cbnF1aWNrZG9tLnRlbXBsYXRlID0gKHRyZWUpLT5cblx0bmV3IFF1aWNrVGVtcGxhdGUodHJlZSwgdHJ1ZSlcblxucXVpY2tkb20uaXNUZW1wbGF0ZSA9ICh0YXJnZXQpLT5cblx0SVMudGVtcGxhdGUodGFyZ2V0KVxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCBJUyBmcm9tICcuL2NoZWNrcydcbmltcG9ydCBRdWlja0VsZW1lbnQgZnJvbSAnLi9lbGVtZW50J1xuaW1wb3J0IHF1aWNrZG9tIGZyb20gJy4vcXVpY2tkb20nXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tCYXRjaFxuXHRjb25zdHJ1Y3RvcjogKGVsZW1lbnRzLCBAcmV0dXJuUmVzdWx0cyktPlxuXHRcdEBlbGVtZW50cyA9IGVsZW1lbnRzLm1hcCAoZWwpLT4gcXVpY2tkb20oZWwpXG5cblx0cmV2ZXJzZTogKCktPlxuXHRcdEBlbGVtZW50cyA9IEBlbGVtZW50cy5yZXZlcnNlKClcblx0XHRyZXR1cm4gQFxuXG5cdHJldHVybjogKHJldHVybk5leHQpLT5cblx0XHRpZiByZXR1cm5OZXh0XG5cdFx0XHRAcmV0dXJuUmVzdWx0cyA9IHRydWVcblx0XHRcdHJldHVybiBAXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIEBsYXN0UmVzdWx0c1xuXG4jIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5RdWlja0JhdGNoLm5hbWUgPz0gJ1F1aWNrQmF0Y2gnXG5cblxuXG5PYmplY3Qua2V5cyhRdWlja0VsZW1lbnQ6OikuY29uY2F0KCdjc3MnLCAncmVwbGFjZVdpdGgnLCAnaHRtbCcsICd0ZXh0JykuZm9yRWFjaCAobWV0aG9kKS0+XG5cdFF1aWNrQmF0Y2g6OlttZXRob2RdID0gKG5ld1ZhbHVlKS0+XG5cdFx0cmVzdWx0cyA9IEBsYXN0UmVzdWx0cyA9IGZvciBlbGVtZW50IGluIEBlbGVtZW50c1xuXHRcdFx0aWYgbWV0aG9kIGlzICdodG1sJyBvciBtZXRob2QgaXMgJ3RleHQnXG5cdFx0XHRcdGlmIG5ld1ZhbHVlIHRoZW4gZWxlbWVudFttZXRob2RdID0gbmV3VmFsdWUgZWxzZSBlbGVtZW50W21ldGhvZF1cblx0XHRcdGVsc2Vcblx0XHRcdFx0ZWxlbWVudFttZXRob2RdKGFyZ3VtZW50cy4uLilcblx0XHRcblx0XHRyZXR1cm4gaWYgQHJldHVyblJlc3VsdHMgdGhlbiByZXN1bHRzIGVsc2UgQFxuXG5cbnF1aWNrZG9tLmJhdGNoID0gKGVsZW1lbnRzLCByZXR1cm5SZXN1bHRzKS0+XG5cdGlmIG5vdCBJUy5pdGVyYWJsZShlbGVtZW50cylcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJCYXRjaDogZXhwZWN0ZWQgYW4gaXRlcmFibGUsIGdvdCAje1N0cmluZyhlbGVtZW50cyl9XCIpXG5cblx0cmV0dXJuIG5ldyBRdWlja0JhdGNoKGVsZW1lbnRzLCByZXR1cm5SZXN1bHRzKVxuXG5cbiIsImltcG9ydCB7aW5jbHVkZXN9IGZyb20gJy4vaGVscGVycydcbmltcG9ydCBxdWlja2RvbSBmcm9tICcuL3F1aWNrZG9tJ1xuXG5TSE9SVENVVFMgPSBbXG5cdCdsaW5rOmEnXG5cdCdhbmNob3I6YSdcblx0J2EnXG5cdCd0ZXh0J1xuXHQnZGl2J1xuXHQnc3Bhbidcblx0J2gxJ1xuXHQnaDInXG5cdCdoMydcblx0J2g0J1xuXHQnaDUnXG5cdCdoNidcblx0J2hlYWRlcidcblx0J2Zvb3Rlcidcblx0J3NlY3Rpb24nXG5cdCdidXR0b24nXG5cdCdicidcblx0J3VsJ1xuXHQnb2wnXG5cdCdsaSdcblx0J2ZpZWxkc2V0J1xuXHQnaW5wdXQnXG5cdCd0ZXh0YXJlYSdcblx0J3NlbGVjdCdcblx0J29wdGlvbidcblx0J2Zvcm0nXG5cdCdmcmFtZSdcblx0J2hyJ1xuXHQnaWZyYW1lJ1xuXHQnaW1nJ1xuXHQncGljdHVyZSdcblx0J21haW4nXG5cdCduYXYnXG5cdCdtZXRhJ1xuXHQnb2JqZWN0J1xuXHQncHJlJ1xuXHQnc3R5bGUnXG5cdCd0YWJsZSdcblx0J3Rib2R5J1xuXHQndGgnXG5cdCd0cidcblx0J3RkJ1xuXHQndGZvb3QnXG5cdCMgJ3RlbXBsYXRlJ1xuXHQndmlkZW8nXG5dXG5cblxuZm9yIHNob3J0Y3V0IGluIFNIT1JUQ1VUUyB0aGVuIGRvIChzaG9ydGN1dCktPlxuXHRwcm9wID0gdHlwZSA9IHNob3J0Y3V0XG5cdGlmIGluY2x1ZGVzKHNob3J0Y3V0LCAnOicpXG5cdFx0c3BsaXQgPSBzaG9ydGN1dC5zcGxpdCgnOicpXG5cdFx0cHJvcCA9IHNwbGl0WzBdXG5cdFx0dHlwZSA9IHNwbGl0WzFdXG5cblx0cXVpY2tkb21bcHJvcF0gPSAoKS0+IHF1aWNrZG9tKHR5cGUsIGFyZ3VtZW50cy4uLilcbiIsImltcG9ydCBDU1MgZnJvbSAncXVpY2tjc3MnXG5pbXBvcnQgUXVpY2tFbGVtZW50IGZyb20gJy4vZWxlbWVudCdcbmltcG9ydCBRdWlja1RlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnXG5pbXBvcnQgUXVpY2tXaW5kb3cgZnJvbSAnLi93aW5kb3cnXG5pbXBvcnQgUXVpY2tCYXRjaCBmcm9tICcuL2JhdGNoJ1xuaW1wb3J0IHt2ZXJzaW9ufSBmcm9tICcuLi9wYWNrYWdlLmpzb24nXG5cbmltcG9ydCBxdWlja2RvbSx7aW5pdH0gZnJvbSAnLi9xdWlja2RvbSdcbmltcG9ydCAnLi9pbnN0YW5jZS1zaG9ydGN1dHMnXG5cbmluaXQoUXVpY2tFbGVtZW50LCBRdWlja1dpbmRvdylcbnF1aWNrZG9tLlF1aWNrRWxlbWVudCA9IFF1aWNrRWxlbWVudFxucXVpY2tkb20uUXVpY2tUZW1wbGF0ZSA9IFF1aWNrVGVtcGxhdGVcbnF1aWNrZG9tLlF1aWNrV2luZG93ID0gUXVpY2tXaW5kb3dcbnF1aWNrZG9tLlF1aWNrQmF0Y2ggPSBRdWlja0JhdGNoXG5cbnF1aWNrZG9tLnZlcnNpb24gPSB2ZXJzaW9uXG5xdWlja2RvbS5DU1MgPSBDU1NcblxuZXhwb3J0IGRlZmF1bHQgcXVpY2tkb21cbiMgZXhwb3J0IHtxdWlja2RvbSBhcyBkZWZhdWx0LCBRdWlja0VsZW1lbnQsIFF1aWNrVGVtcGxhdGUsIFF1aWNrV2luZG93LCBRdWlja0JhdGNofVxuXG4iXSwibmFtZXMiOlsidGVtcGxhdGUiLCJlbGVtZW50IiwiSVMiLCJJU18iLCJjcmVhdGUiLCJsb2FkIiwicXVpY2tEb21FbCIsInN1YmplY3QiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJRdWlja0VsZW1lbnQiLCJRdWlja1dpbmRvdyIsInF1aWNrZG9tIiwiYXJnIiwiYXJncyIsImkiLCJqIiwibGVuIiwicHJldkNvdW50IiwiQXJyYXkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjb3VudCIsIl9wb3N0Q3JlYXRpb24iLCJhcmdzTGVuZ3RoIiwiY2hpbGQiLCJjaGlsZHJlbiIsIm9wdGlvbnMiLCJ0eXBlIiwiYXJyYXkiLCJzcGF3biIsInVwZGF0ZU9wdGlvbnMiLCJkb21Ob2RlIiwiZG9tRG9jIiwiX3F1aWNrRWxlbWVudCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZXhpc3RpbmciLCJ3aW5kb3ciLCJzdHJpbmciLCJvYmplY3QiLCJ0ZXh0IiwiYXBwZW5kIiwiaHRtbCIsImlubmVySFRNTCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImNoaWxkTm9kZXMiLCJiYXRjaCIsImlzUXVpY2tFbCIsInRhcmdldCIsImlzRWwiLCJkb21FbCIsImluaXQiLCJRdWlja0VsZW1lbnRfIiwiUXVpY2tXaW5kb3dfIiwiaW5jbHVkZXMiLCJpdGVtIiwiaW5kZXhPZiIsInJlbW92ZUl0ZW0iLCJpdGVtSW5kZXgiLCJzcGxpY2UiLCJub3JtYWxpemVFbGVtZW50QXJnIiwidGFyZ2V0RWwiLCJpc1N0YXRlU3R5bGUiLCJyZWdpc3RlclN0eWxlIiwicnVsZSIsImxldmVsIiwiaW1wb3J0YW50IiwiY2FjaGVkIiwib3V0cHV0IiwicHJvcCIsInByb3BzIiwic3R5bGVDYWNoZSIsImdldCIsImNsYXNzTmFtZSIsIkNTUyIsInJlZ2lzdGVyIiwiZm5zIiwiT2JqZWN0Iiwia2V5cyIsInB1c2giLCJzZXQiLCJ2YWx1ZXMiLCJrZXkiLCJpbmRleCIsInZhbHVlIiwiUkVHRVhfV0hJVEVTUEFDRSIsIm9uXyIsImV2ZW50TmFtZXMiLCJjYWxsYmFjayIsInVzZUNhcHR1cmUiLCJpc1ByaXZhdGUiLCJjYWxsYmFja1JlZiIsInNwbGl0IiwiX2V2ZW50Q2FsbGJhY2tzIiwiX19yZWZzIiwiX2luc2VydGVkIiwiX3BhcmVudCIsImZvckVhY2giLCJldmVudE5hbWUiLCJiYXNlIiwiX2xpc3RlblRvIiwiZXZlbnQiLCJfaW52b2tlSGFuZGxlcnMiLCJvbmNlIiwib25jZUNhbGxiYWNrIiwib24iLCJvZmYiLCJvZmZfIiwicmVmIiwiZW1pdCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGF0YSIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZXh0ZW5kIiwiZWwiLCJkaXNwYXRjaEV2ZW50IiwiZW1pdFByaXZhdGUiLCJjYWxsYmFja3MiLCJjYiIsImV2ZW50TmFtZVRvTGlzdGVuRm9yIiwibGlzdGVuTWV0aG9kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwicHJvcGVydHkiLCJyZXN1bHQiLCJyZWxhdGVkIiwiZGVmaW5lZCIsImN1cnJlbnRTdGF0ZVN0eWxlIiwiVU5TRVQiLCJ0aGVuIiwiZm9yY2VTdHlsZSIsInN0eWxlU2FmZSIsInNraXBDb21wdXRlZCIsImNvbXB1dGVkIiwic2FtcGxlIiwibnVtYmVyIiwic3R5bGVQYXJzZWQiLCJwYXJzZUZsb2F0IiwicmVjYWxjU3R5bGUiLCJyZWNhbGNDaGlsZHJlbiIsInRhcmdldFN0eWxlcyIsIl9yZXNvbHZlRm5TdHlsZXMiLCJfZ2V0QWN0aXZlU3RhdGVzIiwic3RhdGUiLCJzdGF0ZXMiLCJfc3RhdGUiLCJfc3RhdGVTaGFyZWQiLCJfc3R5bGVzIiwiaGlkZSIsInNob3ciLCJkaXNwbGF5Iiwib3JpZW50YXRpb25HZXR0ZXIiLCJ3aWR0aCIsImhlaWdodCIsImFzcGVjdFJhdGlvR2V0dGVyIiwiZGVmaW5lUHJvcGVydGllcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJhdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIk1lZGlhUXVlcnkiLCJSVUxFX0RFSUxJTUlURVIiLCJ0ZXN0UnVsZSIsInBhcnNlUXVlcnkiLCJxdWVyeVN0cmluZyIsInF1ZXJ5U3BsaXQiLCJydWxlcyIsInNvdXJjZSIsInBhcmVudCIsInBhcmVudE1hdGNoaW5nIiwibWFwIiwiZ2V0dGVyIiwia2V5UHJlZml4IiwibWF4IiwibWluIiwiaXNOYU4iLCJvcmllbnRhdGlvbiIsImFzcGVjdFJhdGlvIiwicGFyc2VkVmFsdWUiLCJzdHJpbmdWYWx1ZSIsInF1ZXJ5IiwiY3VycmVudFZhbHVlIiwicGFzc2VkIiwiU3RhdGVDaGFpbiIsImpvaW4iLCJmaWx0ZXIiLCJvdGhlckFjdGl2ZSIsImFjdGl2ZSIsIkJBU0VfU1RBVEVfVFJJR0dFUlMiLCJDQUNIRURfRk5fSU5TRVJURUQiLCJfbm9ybWFsaXplT3B0aW9ucyIsImJhc2UxIiwiYmFzZTIiLCJiYXNlMyIsImJhc2U0IiwiYmFzZTUiLCJyZWxhdGVkSW5zdGFuY2UiLCJ1cmwiLCJocmVmIiwidW5wYXNzYWJsZVN0YXRlcyIsInBhc3NTdGF0ZVRvQ2hpbGRyZW4iLCJwYXNzRGF0YVRvQ2hpbGRyZW4iLCJzdGF0ZVRyaWdnZXJzIiwiY2xvbmUiLCJkZWVwIiwiX3BhcnNlVGV4dHMiLCJfdGV4dHMiLCJfcGFyc2VTdHlsZXMiLCJzdHlsZXMiLCJzdG9yZSIsIl9tZWRpYVN0YXRlcyIsIl9wcm92aWRlZFN0YXRlcyIsIl9wcm92aWRlZFN0YXRlc1NoYXJlZCIsImZsYXR0ZW5OZXN0ZWRTdGF0ZXMiLCJzcGVjaWFsU3RhdGVzIiwic3RhdGVTdHlsZXMiLCJzdGF0ZV8iLCJvYmplY3RQbGFpbiIsImhlbHBlcnMiLCIkYmFzZSIsInN0eWxlT2JqZWN0IiwiY2hhaW4iLCJoYXNOb25TdGF0ZVByb3BzIiwic3RhdGVDaGFpbiIsInN0eWxlS2V5cyIsInRleHRzIiwiX2FwcGx5T3B0aW9ucyIsImhhbmRsZXIiLCJtZXRob2QiLCJyZWYxIiwicmVmMiIsImlkIiwiYXR0ciIsInNyYyIsInNlbGVjdGVkIiwiY2hlY2tlZCIsImF0dHJzIiwiX2FwcGx5UmVnaXN0ZXJlZFN0eWxlIiwic3R5bGVBZnRlckluc2VydCIsImludm9rZUNvbXB1dGVyc09uY2UiLCJfaW52b2tlZENvbXB1dGVycyIsInJlY2FsY09uUmVzaXplIiwiZXZlbnRzIiwibWV0aG9kcyIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiY29tcHV0ZXJzIiwiYXBwbHlEYXRhIiwiX2luaXQiLCJfcnVuQ29tcHV0ZXIiLCJfYXR0YWNoU3RhdGVFdmVudHMiLCJmb3JjZSIsImRpc2FibGVyIiwiZW5hYmxlciIsInRyaWdnZXIiLCJfcHJveHlQYXJlbnQiLCJuZXdQYXJlbnQiLCJsYXN0UGFyZW50IiwicGFyZW50cyIsImRvY3VtZW50RWxlbWVudCIsIl91bnByb3h5UGFyZW50IiwibWVkaWFTdGF0ZXMiLCJyZXN1bHRzIiwicGFyZW50c1VudGlsIiwiX2dldFBhcmVudHMiLCJpc1JlZiIsIm5leHRQYXJlbnQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeUFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfZ2V0Q2hpbGRSZWZzIiwiZnJlc2hDb3B5IiwiY2hpbGRSZWZzIiwicmVmcyIsIl9jaGlsZFJlZnMiLCJfZ2V0SW5kZXhCeVByb3AiLCJtYWluIiwiX2ZpbHRlckVsZW1lbnRzIiwiX2NoaWxkcmVuIiwibm9kZVR5cGUiLCJwYXJlbnROb2RlIiwibmV4dFNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJuZXh0QWxsIiwic2libGluZ3MiLCJuZXh0IiwicHJldmlvdXNTaWJsaW5nIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInByZXZBbGwiLCJwcmV2U2libGluZyIsInByZXYiLCJyZXZlcnNlIiwiY29uY2F0IiwiRFVNTVlfQVJSQVkiLCJ0YXJnZXRTdGF0ZSIsImFjdGl2ZVN0YXRlcyIsImRlc2lyZWRWYWx1ZSIsInRvZ2dsZSIsIl9zdGF0ZVBpcGVUYXJnZXQiLCJ0b2dnbGVTdGF0ZSIsInJlc2V0U3RhdGUiLCJhY3RpdmVTdGF0ZSIsInBpcGVTdGF0ZSIsIm5vcm1hbGl6ZUVsZW1lbnQiLCJ0YXJnZXRTdHlsZSIsInN1cGVyaW9yU3RhdGVzIiwiaW5jbHVkZUJhc2UiLCJza2lwRm5zIiwiZW50cnkiLCJrIiwibGVuMSIsInN1cGVyaW9yU3R5bGVzIiwiYWRkQ2xhc3MiLCJfcmVtb3ZlUmVnaXN0ZXJlZFN0eWxlIiwicmVzZXRWYWx1ZSIsInJlbW92ZUNsYXNzIiwiX3R1cm5TdHlsZU9OIiwic2hhcmVkU3RhdGVzIiwiX2dldFN1cGVyaW9yU3RhdGVzIiwiX2dldFNoYXJlZFN0YXRlcyIsIl90dXJuU3R5bGVPRkYiLCJhY3RpdmVTaGFyZWRTdGF0ZXMiLCJfdHVyblRleHRPTiIsInRhcmdldFRleHQiLCJfdHVyblRleHRPRkYiLCJzdGF0ZVRvRXhjbHVkZSIsImluY2x1ZGVTaGFyZWRTdGF0ZXMiLCJwbGFpblN0YXRlcyIsImNhbmRpZGF0ZSIsInN1cGVyaW9yIiwidGFyZ2V0U3RhdGVJbmRleCIsImlzQXBwbGljYWJsZSIsInRvVGVtcGxhdGUiLCJlbENsb25lIiwibGVuMiIsIm5ld0VsIiwiY2xvbmVOb2RlIiwicHJldlBhcmVudCIsIl9yZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiX3JlZnJlc2hQYXJlbnQiLCJhcHBlbmRUbyIsInByZXBlbmQiLCJ1bnNoaWZ0IiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInByZXBlbmRUbyIsImFmdGVyIiwibXlJbmRleCIsImluc2VydEFmdGVyIiwiYmVmb3JlIiwiZGV0YWNoIiwicmVtb3ZlIiwiZW1wdHkiLCJ3cmFwIiwiY3VycmVudFBhcmVudCIsInVud3JhcCIsImdyYW5kUGFyZW50IiwicGFyZW50Q2hpbGRyZW4iLCJwYXJlbnRTaWJsaW5nIiwiaGFzQ2xhc3MiLCJjbGFzc0xpc3QiLCJ0YXJnZXRJbmRleCIsInRvZ2dsZUNsYXNzIiwic2V0UmVmIiwidGFyZ2V0Q2hpbGQiLCJyZXBsYWNlbWVudENoaWxkIiwiaW5kZXhPZkNoaWxkIiwicmVwbGFjZUNoaWxkIiwicmVtb3ZlQ2hpbGQiLCJuZXdWYWx1ZSIsInRleHRDb250ZW50Iiwic3ZnIiwibGlzdCIsInBvcCIsInNoaWZ0IiwidXBkYXRlU3RhdGVTdHlsZXMiLCJwYXJzZWQiLCJ1cGRhdGVkU3RhdGVzIiwidXBkYXRlU3RhdGVUZXh0cyIsInBhc3NUaHJvdWdoIiwiZGVmYXVsdHMiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbXB1dGVyIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic3ZnTmFtZXNwYWNlIiwiY3JlYXRlVGV4dE5vZGUiLCJjcmVhdGVFbGVtZW50TlMiLCJBTExPV0VEX09QVElPTlMiLCJ0b0pTT04iLCJhbGlhc2VzIiwidHJhdmVyc2luZyIsIm1hbmlwdWxhdGlvbiIsImFwcGxpY2F0aW9uIiwiYXR0cmlidXRlc0FuZFByb3BlcnRpZXMiLCJzY2hlbWEiLCJtYXRjaGVzU2NoZW1hIiwiUEFSU0VfRVJST1JfUFJFRklYIiwicGFyc2VUcmVlIiwidHJlZSIsInBhcnNlQ2hpbGRyZW4iLCJFcnJvciIsIlN0cmluZyIsImRvbVRleHQiLCJBTExPV0VEX1RFTVBMQVRFX09QVElPTlMiLCJub3RLZXlzIiwiTk9UX0RFRVBfS0VZUyIsIk5PVF9LRVlTIiwiZXh0ZW5kQnlSZWYiLCJleHRlbmRUZW1wbGF0ZSIsImN1cnJlbnRPcHRzIiwibmV3T3B0cyIsImdsb2JhbE9wdHMiLCJjdXJyZW50Q2hpbGQiLCJjdXJyZW50Q2hpbGRyZW4iLCJnbG9iYWxPcHRzVHJhbnNmb3JtIiwibWF4TGVuZ3RoIiwibmVlZHNUZW1wbGF0ZVdyYXAiLCJuZXdDaGlsZCIsIm5ld0NoaWxkUHJvY2Vzc2VkIiwibmV3Q2hpbGRyZW4iLCJub0NoYW5nZXMiLCJyZW1haW5pbmdOZXdDaGlsZHJlbiIsIm9wdHMiLCJudWxsRGVsZXRlcyIsIm5vdERlZXAiLCJ0cmFuc2Zvcm0iLCJNYXRoIiwiUXVpY2tUZW1wbGF0ZSIsImFsbG93TnVsbCIsIm5ld0NoaWxkcmVuUmVmcyIsImNvbmZpZyIsImlzVHJlZSIsIm5ld1ZhbHVlcyIsImNoaWxkRGF0YSIsImlzVGVtcGxhdGUiLCJRdWlja0JhdGNoIiwiZWxlbWVudHMiLCJyZXR1cm5SZXN1bHRzIiwicmV0dXJuTmV4dCIsImxhc3RSZXN1bHRzIiwiaXRlcmFibGUiLCJTSE9SVENVVFMiLCJzaG9ydGN1dCIsInZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUEsSUFBT0EsUUFBQSxHQUFXLENBQ2pCLElBRGlCLEVBRWpCLE1BRmlCLEVBR2pCLE1BSGlCLEVBSWpCLE1BSmlCLEVBS2pCLFVBTGlCLEVBTWpCLFNBTmlCLEVBT2pCLFdBUGlCLENBQWxCOztBQVVBLElBQU9DLE9BQUEsR0FBVSxDQUNoQixJQURnQixFQUVoQixLQUZnQixFQUdoQixNQUhnQixFQUloQixNQUpnQixFQUtoQixNQUxnQixFQU1oQixPQU5nQixFQU9oQixPQVBnQixFQVFoQixXQVJnQixFQVNoQixLQVRnQixFQVVoQixNQVZnQixFQVdoQixVQVhnQixFQVloQixTQVpnQixFQWFoQixPQWJnQixFQWNoQixPQWRnQixFQWVoQixxQkFmZ0IsRUFnQmhCLGVBaEJnQixFQWlCaEIsa0JBakJnQixDQUFqQjtBQVZBO0FDQUEsSUFBQUMsRUFBQTtBQUFBLEFBQ0FBLEVBQUEsR0FBS0MsR0FBRyxDQUFDQyxNQUFKLENBQVcsU0FBWCxFQUFxQixLQUFyQixDQUFMO0FBQ0FGLEVBQUUsQ0FBQ0csSUFBSCxDQUNDO0FBQUFDLEVBQUFBLFVBQUEsRUFBWSxvQkFBQ0MsT0FBRDtXQUFZQSxPQUFBLElBQVlBLE9BQU8sQ0FBQ0MsV0FBUixDQUFvQkMsSUFBcEIsS0FBNEI7QUFBaEUsR0FBQTtBQUVBVCxFQUFBQSxRQUFBLEVBQVUsa0JBQUNPLE9BQUQ7V0FBWUEsT0FBQSxJQUFZQSxPQUFPLENBQUNDLFdBQVIsQ0FBb0JD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
