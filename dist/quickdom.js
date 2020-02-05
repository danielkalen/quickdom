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
return quickdom;})));