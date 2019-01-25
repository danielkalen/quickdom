(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f(require('quickcss'),require('smart-extend'),require('@danielkalen/is')):typeof define==='function'&&define.amd?define(['quickcss','smart-extend','@danielkalen/is'],f):(g=g||self,g.quickdom=f(g.CSS,g.extend,g.IS_));}(this,function(CSS, extend, IS_){'use strict';CSS=CSS&&CSS.hasOwnProperty('default')?CSS['default']:CSS;extend=extend&&extend.hasOwnProperty('default')?extend['default']:extend;IS_=IS_&&IS_.hasOwnProperty('default')?IS_['default']:IS_;function _typeof(obj) {
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

  if (IS$1.string(eventNames) && IS$1.function(callback)) {
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

  if (IS$1.string(eventNames) && IS$1.function(callback)) {
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

        if (IS$1.function(callback)) {
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

    if (args[1] === null && IS$1.defined(this.currentStateStyle(property)) && !IS$1.function(this.currentStateStyle(property))) {
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

  if (this.options.class) {
    this.options.className = this.options.class;
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
        if (IS$1.function(value)) {
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

  if (IS$1.function(filter) || (isRef = IS$1.string(filter))) {
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

  if (!IS$1.function(filter) && !(isRef = IS$1.string(filter))) {
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
    value: function extend$$1(newValues, globalOpts) {
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
};var version = "1.0.93";var SHORTCUTS, i, len, shortcut;
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
return quickdom;}));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tkb20uZGVidWcuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9hbGxvd2VkT3B0aW9ucy5jb2ZmZWUiLCIuLi9zcmMvY2hlY2tzLmNvZmZlZSIsIi4uL3NyYy9xdWlja2RvbS5jb2ZmZWUiLCIuLi9zcmMvaGVscGVycy5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC9ldmVudHMuY29mZmVlIiwiLi4vc3JjL2VsZW1lbnQvc3R5bGUuY29mZmVlIiwiLi4vc3JjL3dpbmRvdy5jb2ZmZWUiLCIuLi9zcmMvbWVkaWFRdWVyeS5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC9zdGF0ZUNoYWluLmNvZmZlZSIsIi4uL3NyYy9lbGVtZW50L2luaXQuY29mZmVlIiwiLi4vc3JjL2VsZW1lbnQvYWxpYXNlcy5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC90cmF2ZXJzaW5nLmNvZmZlZSIsIi4uL3NyYy9lbGVtZW50L3N0YXRlLmNvZmZlZSIsIi4uL3NyYy9lbGVtZW50L21hbmlwdWxhdGlvbi5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC9hcHBsaWNhdGlvbi5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC9hdHRyaWJ1dGVzLWFuZC1wcm9wZXJ0aWVzLmNvZmZlZSIsIi4uL3NyYy9lbGVtZW50L2luZGV4LmNvZmZlZSIsIi4uL3NyYy90ZW1wbGF0ZS9zY2hlbWEuY29mZmVlIiwiLi4vc3JjL3RlbXBsYXRlL3BhcnNlVHJlZS5jb2ZmZWUiLCIuLi9zcmMvdGVtcGxhdGUvZXh0ZW5kVGVtcGxhdGUuY29mZmVlIiwiLi4vc3JjL3RlbXBsYXRlL2luZGV4LmNvZmZlZSIsIi4uL3NyYy9iYXRjaC5jb2ZmZWUiLCIuLi9zcmMvaW5zdGFuY2Utc2hvcnRjdXRzLmNvZmZlZSIsIi4uL3NyYy9pbmRleC5jb2ZmZWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHRlbXBsYXRlID0gWyAjIFRvIGNvcHkgZnJvbSBET00gRWxlbWVudHNcblx0J2lkJ1xuXHQnbmFtZSdcblx0J3R5cGUnXG5cdCdocmVmJ1xuXHQnc2VsZWN0ZWQnXG5cdCdjaGVja2VkJ1xuXHQnY2xhc3NOYW1lJ1xuXVxuXG5leHBvcnQgZWxlbWVudCA9IFsgIyBVc2VkIGluIFF1aWNrRWxlbWVudDo6dG9KU09OXG5cdCdpZCdcblx0J3JlZidcblx0J3R5cGUnXG5cdCduYW1lJ1xuXHQndGV4dCdcblx0J3N0eWxlJ1xuXHQnY2xhc3MnXG5cdCdjbGFzc05hbWUnXG5cdCd1cmwnXG5cdCdocmVmJ1xuXHQnc2VsZWN0ZWQnXG5cdCdjaGVja2VkJ1xuXHQncHJvcHMnXG5cdCdhdHRycydcblx0J3Bhc3NTdGF0ZVRvQ2hpbGRyZW4nXG5cdCdzdGF0ZVRyaWdnZXJzJ1xuXHQndW5wYXNzYWJsZVN0YXRlcydcblx0IyAncmVsYXRlZEluc3RhbmNlJ1xuXSIsImltcG9ydCBJU18gZnJvbSAnQGRhbmllbGthbGVuL2lzJ1xuSVMgPSBJU18uY3JlYXRlKCduYXRpdmVzJywnZG9tJylcbklTLmxvYWRcdFxuXHRxdWlja0RvbUVsOiAoc3ViamVjdCktPiBzdWJqZWN0IGFuZCBzdWJqZWN0LmNvbnN0cnVjdG9yLm5hbWUgaXMgJ1F1aWNrRWxlbWVudCdcblx0XG5cdHRlbXBsYXRlOiAoc3ViamVjdCktPiBzdWJqZWN0IGFuZCBzdWJqZWN0LmNvbnN0cnVjdG9yLm5hbWUgaXMgJ1F1aWNrVGVtcGxhdGUnXG5cdFxuXHQjIGJhdGNoOiAoc3ViamVjdCktPiBzdWJqZWN0IGFuZCBzdWJqZWN0LmNvbnN0cnVjdG9yLm5hbWUgaXMgJ1F1aWNrQmF0Y2gnXG5cbmV4cG9ydCBkZWZhdWx0IElTIiwiaW1wb3J0IElTIGZyb20gJy4vY2hlY2tzJ1xuUXVpY2tFbGVtZW50ID0gbnVsbFxuUXVpY2tXaW5kb3cgPSBudWxsXG5cbnF1aWNrZG9tID0gKCktPlxuXHRhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpXG5cdGFyZ3NbaV0gPSBhcmcgZm9yIGFyZyxpIGluIGFyZ3VtZW50c1xuXHRwcmV2Q291bnQgPSBRdWlja0VsZW1lbnQuY291bnRcblx0ZWxlbWVudCA9IHF1aWNrZG9tLmNyZWF0ZShhcmdzKVxuXHRlbGVtZW50Ll9wb3N0Q3JlYXRpb24oKSBpZiBlbGVtZW50IGFuZCBlbGVtZW50Ll9wb3N0Q3JlYXRpb24gYW5kIFF1aWNrRWxlbWVudC5jb3VudCBpc250IHByZXZDb3VudFxuXHRyZXR1cm4gZWxlbWVudFxuXG5xdWlja2RvbS5jcmVhdGUgPSAoYXJncyktPiBzd2l0Y2hcblx0d2hlbiBJUy5hcnJheShhcmdzWzBdKVxuXHRcdHJldHVybiBxdWlja2RvbShhcmdzWzBdLi4uKVxuXHRcblx0d2hlbiBJUy50ZW1wbGF0ZShhcmdzWzBdKVxuXHRcdHJldHVybiBhcmdzWzBdLnNwYXduKClcblx0XG5cdHdoZW4gSVMucXVpY2tEb21FbChhcmdzWzBdKVxuXHRcdHJldHVybiBpZiBhcmdzWzFdIHRoZW4gYXJnc1swXS51cGRhdGVPcHRpb25zKGFyZ3NbMV0pIGVsc2UgYXJnc1swXVxuXHRcblx0d2hlbiBJUy5kb21Ob2RlKGFyZ3NbMF0pIG9yIElTLmRvbURvYyhhcmdzWzBdKVxuXHRcdGlmIGFyZ3NbMF0uX3F1aWNrRWxlbWVudFxuXHRcdFx0cmV0dXJuIGFyZ3NbMF0uX3F1aWNrRWxlbWVudFxuXHRcdFxuXHRcdHR5cGUgPSBhcmdzWzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnIycsICcnKVxuXHRcdG9wdGlvbnMgPSBhcmdzWzFdIG9yIHt9XG5cdFx0b3B0aW9ucy5leGlzdGluZyA9IGFyZ3NbMF1cblx0XHRyZXR1cm4gbmV3IFF1aWNrRWxlbWVudCh0eXBlLCBvcHRpb25zKVxuXG5cdHdoZW4gYXJnc1swXSBpcyB3aW5kb3dcblx0XHRyZXR1cm4gUXVpY2tXaW5kb3dcblxuXHR3aGVuIElTLnN0cmluZyhhcmdzWzBdKVx0XHRcdFxuXHRcdHR5cGUgPSBhcmdzWzBdLnRvTG93ZXJDYXNlKClcblx0XHRpZiB0eXBlIGlzICd0ZXh0J1xuXHRcdFx0b3B0aW9ucyA9IGlmIElTLm9iamVjdChhcmdzWzFdKSB0aGVuIGFyZ3NbMV0gZWxzZSB7dGV4dDphcmdzWzFdIG9yICcnfVxuXHRcdGVsc2Vcblx0XHRcdG9wdGlvbnMgPSBpZiBJUy5vYmplY3QoYXJnc1sxXSkgdGhlbiBhcmdzWzFdIGVsc2Uge31cblx0XHRcblx0XHRlbGVtZW50ID0gbmV3IFF1aWNrRWxlbWVudCh0eXBlLCBvcHRpb25zKVxuXHRcdGlmIGFyZ3MubGVuZ3RoID4gMlxuXHRcdFx0Y2hpbGRyZW4gPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoKTsgaSA9IDE7XG5cdFx0XHRjaGlsZHJlbltpKzFdID0gYXJnc1tpXSB3aGlsZSArK2kgPCBhcmdzTGVuZ3RoXG5cblx0XHRcdGZvciBjaGlsZCBpbiBjaGlsZHJlblxuXHRcdFx0XHRjaGlsZCA9IHF1aWNrZG9tLnRleHQoY2hpbGQpIGlmIElTLnN0cmluZyhjaGlsZClcblx0XHRcdFx0Y2hpbGQgPSBxdWlja2RvbShjaGlsZC4uLikgaWYgSVMuYXJyYXkoY2hpbGQpXG5cdFx0XHRcdGVsZW1lbnQuYXBwZW5kKGNoaWxkKSBpZiBJUy5xdWlja0RvbUVsKGNoaWxkKVxuXG5cdFx0cmV0dXJuIGVsZW1lbnRcblxuXHR3aGVuIGFyZ3NbMF0gYW5kIChJUy5kb21Ob2RlKGFyZ3NbMF1bMF0pIG9yIElTLmRvbURvYyhhcmdzWzBdWzBdKSlcblx0XHRyZXR1cm4gcXVpY2tkb20oYXJnc1swXVswXSlcblxuXG5cbnF1aWNrZG9tLmh0bWwgPSAoaW5uZXJIVE1MKS0+XG5cdGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdGNvbnRhaW5lci5pbm5lckhUTUwgPSBpbm5lckhUTUxcblx0Y2hpbGRyZW4gPSBBcnJheTo6c2xpY2UuY2FsbCBjb250YWluZXIuY2hpbGROb2Rlc1xuXG5cdHJldHVybiBxdWlja2RvbS5iYXRjaChjaGlsZHJlbilcblxuXG5xdWlja2RvbS5pc1F1aWNrRWwgPSAodGFyZ2V0KS0+XG5cdElTLnF1aWNrRG9tRWwodGFyZ2V0KVxuXG5xdWlja2RvbS5pc0VsID0gKHRhcmdldCktPlxuXHRJUy5kb21FbCh0YXJnZXQpXG5cbmV4cG9ydCB7cXVpY2tkb20gYXMgZGVmYXVsdH1cbmV4cG9ydCBpbml0ID0gKFF1aWNrRWxlbWVudF8sIFF1aWNrV2luZG93XyktPlxuXHRRdWlja0VsZW1lbnQgPSBRdWlja0VsZW1lbnRfXG5cdFF1aWNrV2luZG93ID0gUXVpY2tXaW5kb3dfXG5cdHJldHVybiBxdWlja2RvbSIsImltcG9ydCBxdWlja2RvbSBmcm9tICcuLydcbmltcG9ydCBDU1MgZnJvbSAncXVpY2tjc3MnXG5pbXBvcnQgSVMgZnJvbSAnLi9jaGVja3MnXG5cbmV4cG9ydCBpbmNsdWRlcyA9ICh0YXJnZXQsIGl0ZW0pLT5cblx0dGFyZ2V0IGFuZCB0YXJnZXQuaW5kZXhPZihpdGVtKSBpc250IC0xXG5cbmV4cG9ydCByZW1vdmVJdGVtID0gKHRhcmdldCwgaXRlbSktPlxuXHRpdGVtSW5kZXggPSB0YXJnZXQuaW5kZXhPZihpdGVtKVxuXHR0YXJnZXQuc3BsaWNlKGl0ZW1JbmRleCwgMSkgIGlmIGl0ZW1JbmRleCBpc250IC0xXG5cdHJldHVybiB0YXJnZXRcblxuZXhwb3J0IG5vcm1hbGl6ZUVsZW1lbnRBcmcgPSAodGFyZ2V0RWwpLT4gc3dpdGNoXG5cdHdoZW4gSVMuc3RyaW5nKHRhcmdldEVsKSB0aGVuIHF1aWNrZG9tLnRleHQodGFyZ2V0RWwpXG5cdHdoZW4gSVMuZG9tTm9kZSh0YXJnZXRFbCkgdGhlbiBxdWlja2RvbSh0YXJnZXRFbClcblx0d2hlbiBJUy50ZW1wbGF0ZSh0YXJnZXRFbCkgdGhlbiB0YXJnZXRFbC5zcGF3bigpXG5cdGVsc2UgdGFyZ2V0RWxcblxuXG5leHBvcnQgaXNTdGF0ZVN0eWxlID0gKHN0cmluZyktPlxuXHRzdHJpbmdbMF0gaXMgJyQnIG9yIHN0cmluZ1swXSBpcyAnQCdcblxuXG5leHBvcnQgcmVnaXN0ZXJTdHlsZSA9IChydWxlLCBsZXZlbCwgaW1wb3J0YW50KS0+XG5cdGxldmVsIHx8PSAwXG5cdGNhY2hlZCA9IHN0eWxlQ2FjaGUuZ2V0KHJ1bGUsIGxldmVsKVxuXHRyZXR1cm4gY2FjaGVkIGlmIGNhY2hlZFxuXHRvdXRwdXQgPSB7Y2xhc3NOYW1lOltDU1MucmVnaXN0ZXIocnVsZSwgbGV2ZWwsIGltcG9ydGFudCldLCBmbnM6W10sIHJ1bGV9XG5cdHByb3BzID0gT2JqZWN0LmtleXMocnVsZSlcblx0XG5cdGZvciBwcm9wIGluIHByb3BzIHdoZW4gdHlwZW9mIHJ1bGVbcHJvcF0gaXMgJ2Z1bmN0aW9uJ1xuXHRcdG91dHB1dC5mbnMucHVzaCBbcHJvcCwgcnVsZVtwcm9wXV1cblxuXHRyZXR1cm4gc3R5bGVDYWNoZS5zZXQocnVsZSwgb3V0cHV0LCBsZXZlbClcblxuXG5leHBvcnQgc3R5bGVDYWNoZSA9IG5ldyBjbGFzc1xuXHRjb25zdHJ1Y3RvcjogKCktPlxuXHRcdEBrZXlzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXHRcdEB2YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cblx0Z2V0OiAoa2V5LCBsZXZlbCktPiBpZiBAa2V5c1tsZXZlbF1cblx0XHRpbmRleCA9IEBrZXlzW2xldmVsXS5pbmRleE9mKGtleSlcblx0XHRyZXR1cm4gQHZhbHVlc1tsZXZlbF1baW5kZXhdIGlmIGluZGV4IGlzbnQgLTFcblxuXHRzZXQ6IChrZXksIHZhbHVlLCBsZXZlbCktPlxuXHRcdGlmIG5vdCBAa2V5c1tsZXZlbF1cblx0XHRcdEBrZXlzW2xldmVsXSA9IFtdXG5cdFx0XHRAdmFsdWVzW2xldmVsXSA9IFtdXG5cblx0XHRAa2V5c1tsZXZlbF0ucHVzaCBrZXlcblx0XHRAdmFsdWVzW2xldmVsXS5wdXNoIHZhbHVlXG5cdFx0cmV0dXJuIHZhbHVlXG5cbiIsImltcG9ydCBJUyBmcm9tICcuLi9jaGVja3MnXG5pbXBvcnQge3JlbW92ZUl0ZW19IGZyb20gJy4uL2hlbHBlcnMnXG5pbXBvcnQgZXh0ZW5kIGZyb20gJ3NtYXJ0LWV4dGVuZCdcblJFR0VYX1dISVRFU1BBQ0UgPSAvXFxzKy9cblxuXG5leHBvcnQgb25fID0gKGV2ZW50TmFtZXMsIGNhbGxiYWNrLCB1c2VDYXB0dXJlLCBpc1ByaXZhdGUpLT5cblx0QF9ldmVudENhbGxiYWNrcyA/PSB7X19yZWZzOnt9fVxuXHRcblx0aWYgSVMuc3RyaW5nKGV2ZW50TmFtZXMpIGFuZCBJUy5mdW5jdGlvbihjYWxsYmFjaylcblx0XHRzcGxpdCA9IGV2ZW50TmFtZXMuc3BsaXQoJy4nKVxuXHRcdGNhbGxiYWNrUmVmID0gc3BsaXRbMV1cblx0XHRldmVudE5hbWVzID0gc3BsaXRbMF1cblx0XHRcblx0XHRpZiBldmVudE5hbWVzIGlzICdpbnNlcnRlZCcgYW5kIEBfaW5zZXJ0ZWRcblx0XHRcdGNhbGxiYWNrLmNhbGwoQCwgQF9wYXJlbnQpXG5cdFx0XHRyZXR1cm4gQFxuXHRcdFxuXHRcdGV2ZW50TmFtZXMuc3BsaXQoUkVHRVhfV0hJVEVTUEFDRSkuZm9yRWFjaCAoZXZlbnROYW1lKT0+XG5cdFx0XHRpZiBub3QgQF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdXG5cdFx0XHRcdEBfZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXSA9IFtdXHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dW5sZXNzIGlzUHJpdmF0ZSB0aGVuIEBfbGlzdGVuVG8gZXZlbnROYW1lLCAoZXZlbnQpPT5cblx0XHRcdFx0XHRAX2ludm9rZUhhbmRsZXJzKGV2ZW50TmFtZSwgZXZlbnQpXG5cdFx0XHRcdCwgdXNlQ2FwdHVyZVxuXG5cdFx0XHRpZiBjYWxsYmFja1JlZlxuXHRcdFx0XHRAX2V2ZW50Q2FsbGJhY2tzLl9fcmVmc1tldmVudE5hbWVdID89IHt9XG5cdFx0XHRcdEBfZXZlbnRDYWxsYmFja3MuX19yZWZzW2V2ZW50TmFtZV1bY2FsbGJhY2tSZWZdID0gY2FsbGJhY2tcblx0XHRcdEBfZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKVxuXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IG9uY2UgPSAoZXZlbnROYW1lcywgY2FsbGJhY2spLT5cblx0aWYgSVMuc3RyaW5nKGV2ZW50TmFtZXMpIGFuZCBJUy5mdW5jdGlvbihjYWxsYmFjaylcblx0XHRAb24gZXZlbnROYW1lcywgb25jZUNhbGxiYWNrPShldmVudCk9PlxuXHRcdFx0QG9mZihldmVudE5hbWVzLCBvbmNlQ2FsbGJhY2spXG5cdFx0XHRjYWxsYmFjay5jYWxsKEAsIGV2ZW50KVxuXHRcblx0cmV0dXJuIEBcblxuXG5cbmV4cG9ydCBvZmZfID0gKGV2ZW50TmFtZXMsIGNhbGxiYWNrKS0+XG5cdEBfZXZlbnRDYWxsYmFja3MgPz0ge19fcmVmczp7fX1cblx0aWYgbm90IElTLnN0cmluZyhldmVudE5hbWVzKVxuXHRcdEBvZmYoZXZlbnROYW1lKSBmb3IgZXZlbnROYW1lIG9mIEBfZXZlbnRDYWxsYmFja3Ncblx0XG5cdGVsc2Vcblx0XHRzcGxpdCA9IGV2ZW50TmFtZXMuc3BsaXQoJy4nKVxuXHRcdGNhbGxiYWNrUmVmID0gc3BsaXRbMV1cblx0XHRldmVudE5hbWVzID0gc3BsaXRbMF1cblx0XHRldmVudE5hbWVzLnNwbGl0KFJFR0VYX1dISVRFU1BBQ0UpLmZvckVhY2ggKGV2ZW50TmFtZSk9PlxuXHRcdFx0aWYgQF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdXG5cdFx0XHRcdGNhbGxiYWNrID89IEBfZXZlbnRDYWxsYmFja3MuX19yZWZzW2V2ZW50TmFtZV0/W2NhbGxiYWNrUmVmXVxuXG5cdFx0XHRcdGlmIElTLmZ1bmN0aW9uKGNhbGxiYWNrKVxuXHRcdFx0XHRcdHJlbW92ZUl0ZW0oQF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdLCBjYWxsYmFjaylcblx0XHRcdFx0ZWxzZSBpZiBub3QgY2FsbGJhY2tSZWZcblx0XHRcdFx0XHRAX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV0ubGVuZ3RoID0gMFxuXG5cdHJldHVybiBAXG5cblxuXG5leHBvcnQgZW1pdCA9IChldmVudE5hbWUsIGJ1YmJsZXM9dHJ1ZSwgY2FuY2VsYWJsZT10cnVlLCBkYXRhKS0+XG5cdGlmIGV2ZW50TmFtZSBhbmQgSVMuc3RyaW5nKGV2ZW50TmFtZSlcblx0XHRldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpXG5cdFx0ZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgYnViYmxlcywgY2FuY2VsYWJsZSlcblx0XHRleHRlbmQoZXZlbnQsIGRhdGEpIGlmIGRhdGEgYW5kIHR5cGVvZiBkYXRhIGlzICdvYmplY3QnXG5cdFx0QGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgZW1pdFByaXZhdGUgPSAoZXZlbnROYW1lLCBhcmcpLT5cblx0aWYgZXZlbnROYW1lIGFuZCBJUy5zdHJpbmcoZXZlbnROYW1lKSBhbmQgQF9ldmVudENhbGxiYWNrcz9bZXZlbnROYW1lXVxuXHRcdEBfaW52b2tlSGFuZGxlcnMoZXZlbnROYW1lLCBhcmcpXG5cdFxuXHRyZXR1cm4gQFxuXG5cblxuZXhwb3J0IF9pbnZva2VIYW5kbGVycyA9IChldmVudE5hbWUsIGFyZyktPlxuXHRjYWxsYmFja3MgPSBAX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV0uc2xpY2UoKVxuXHRjYi5jYWxsKEAsIGFyZykgZm9yIGNiIGluIGNhbGxiYWNrc1xuXHRyZXR1cm5cblxuXG4jIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5leHBvcnQgX2xpc3RlblRvID0gKGV2ZW50TmFtZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpLT5cblx0bGlzdGVuTWV0aG9kID0gaWYgQGVsLmFkZEV2ZW50TGlzdGVuZXIgdGhlbiAnYWRkRXZlbnRMaXN0ZW5lcicgZWxzZSAnYXR0YWNoRXZlbnQnXG5cdGV2ZW50TmFtZVRvTGlzdGVuRm9yID0gaWYgQGVsLmFkZEV2ZW50TGlzdGVuZXIgdGhlbiBldmVudE5hbWUgZWxzZSBcIm9uI3tldmVudE5hbWV9XCJcblx0XG5cdEBlbFtsaXN0ZW5NZXRob2RdKGV2ZW50TmFtZVRvTGlzdGVuRm9yLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSlcblx0cmV0dXJuIEBcblxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdFF1aWNrRWxlbWVudDo6b24gPSBvbl9cblx0UXVpY2tFbGVtZW50OjpvbmNlID0gb25jZVxuXHRRdWlja0VsZW1lbnQ6Om9mZiA9IG9mZl9cblx0UXVpY2tFbGVtZW50OjplbWl0ID0gZW1pdFxuXHRRdWlja0VsZW1lbnQ6OmVtaXRQcml2YXRlID0gZW1pdFByaXZhdGVcblx0UXVpY2tFbGVtZW50OjpfaW52b2tlSGFuZGxlcnMgPSBfaW52b2tlSGFuZGxlcnNcblx0UXVpY2tFbGVtZW50OjpfbGlzdGVuVG8gPSBfbGlzdGVuVG9cblxuIiwiaW1wb3J0IElTIGZyb20gJy4uL2NoZWNrcydcbmltcG9ydCBDU1MgZnJvbSAncXVpY2tjc3MnXG5cbiMjIypcbiAqIFNldHMvZ2V0cyB0aGUgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS4gSW4gZ2V0dGVyIG1vZGUgdGhlIGNvbXB1dGVkIHByb3BlcnR5IG9mXG4gKiB0aGUgc3R5bGUgd2lsbCBiZSByZXR1cm5lZCB1bmxlc3MgdGhlIGVsZW1lbnQgaXMgbm90IGluc2VydGVkIGludG8gdGhlIERPTS4gSW5cbiAqIHdlYmtpdCBicm93c2VycyBhbGwgY29tcHV0ZWQgcHJvcGVydGllcyBvZiBhIGRldGFjaGVkIG5vZGUgYXJlIGFsd2F5cyBhbiBlbXB0eVxuICogc3RyaW5nIGJ1dCBpbiBnZWNrbyB0aGV5IHJlZmxlY3Qgb24gdGhlIGFjdHVhbCBjb21wdXRlZCB2YWx1ZSwgaGVuY2Ugd2UgbmVlZFxuICogdG8gXCJub3JtYWxpemVcIiB0aGlzIGJlaGF2aW9yIGFuZCBtYWtlIHN1cmUgdGhhdCBldmVuIG9uIGdlY2tvIGFuIGVtcHR5IHN0cmluZ1xuICogaXMgcmV0dXJuZWRcbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuIyMjXG5leHBvcnQgc3R5bGUgPSAocHJvcGVydHkpLT5cblx0cmV0dXJuIGlmIEB0eXBlIGlzICd0ZXh0J1xuXHRhcmdzID0gYXJndW1lbnRzXG5cdFxuXHRpZiBJUy5zdHJpbmcocHJvcGVydHkpXG5cdFx0dmFsdWUgPSBpZiB0eXBlb2YgYXJnc1sxXSBpcyAnZnVuY3Rpb24nIHRoZW4gYXJnc1sxXS5jYWxsKEAsIEByZWxhdGVkKSBlbHNlIGFyZ3NbMV1cblx0XHR2YWx1ZSA9IENTUy5VTlNFVCBpZiBhcmdzWzFdIGlzIG51bGwgYW5kIElTLmRlZmluZWQoQGN1cnJlbnRTdGF0ZVN0eWxlKHByb3BlcnR5KSkgYW5kIG5vdCBJUy5mdW5jdGlvbihAY3VycmVudFN0YXRlU3R5bGUocHJvcGVydHkpKVxuXG5cdFx0aWYgdmFsdWUgYW5kIHR5cGVvZiB2YWx1ZS50aGVuIGlzICdmdW5jdGlvbidcblx0XHRcdHZhbHVlLnRoZW4gKHZhbHVlKT0+IENTUyhAZWwsIHByb3BlcnR5LCB2YWx1ZSwgQG9wdGlvbnMuZm9yY2VTdHlsZSlcblx0XHRlbHNlXG5cdFx0XHRyZXN1bHQgPSBDU1MoQGVsLCBwcm9wZXJ0eSwgdmFsdWUsIEBvcHRpb25zLmZvcmNlU3R5bGUpXG5cdFx0XG5cdFx0aWYgYXJncy5sZW5ndGggaXMgMVxuXHRcdFx0IyMjIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICMjI1xuXHRcdFx0cmV0dXJuIGlmIEBfaW5zZXJ0ZWQgdGhlbiByZXN1bHQgZWxzZSBpZiBub3QgcmVzdWx0IHRoZW4gcmVzdWx0IGVsc2UgJydcblxuXHRlbHNlIGlmIElTLm9iamVjdChwcm9wZXJ0eSlcblx0XHRrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydHkpOyBpID0gLTFcblx0XHRAc3R5bGUoa2V5LCBwcm9wZXJ0eVtrZXldKSB3aGlsZSBrZXk9a2V5c1srK2ldXG5cblx0cmV0dXJuIEBcblxuXG4jIyMqXG4gKiBBdHRlbXB0cyB0byByZXNvbHZlIHRoZSB2YWx1ZSBmb3IgYSBnaXZlbiBwcm9wZXJ0eSBpbiB0aGUgZm9sbG93aW5nIG9yZGVyIGlmIGVhY2ggb25lIGlzbid0IGEgdmFsaWQgdmFsdWU6XG4gKiAxLiBmcm9tIGNvbXB1dGVkIHN0eWxlIChmb3IgZG9tLWluc2VydGVkIGVscylcbiAqIDIuIGZyb20gRE9NRWxlbWVudC5zdHlsZSBvYmplY3QgKGZvciBub24taW5zZXJ0ZWQgZWxzOyBpZiBvcHRpb25zLnN0eWxlQWZ0ZXJJbnNlcnQsIHdpbGwgb25seSBoYXZlIHN0YXRlIHN0eWxlcylcbiAqIDMuIGZyb20gcHJvdmlkZWQgc3R5bGUgb3B0aW9uc1xuICogKGZvciBub24taW5zZXJ0ZWQgZWxzOyBjaGVja2luZyBvbmx5ICRiYXNlIHNpbmNlIHN0YXRlIHN0eWxlcyB3aWxsIGFsd2F5cyBiZSBhcHBsaWVkIHRvIHRoZSBzdHlsZSBvYmplY3QgZXZlbiBmb3Igbm9uLWluc2VydGVkKVxuIyMjXG5leHBvcnQgc3R5bGVTYWZlID0gKHByb3BlcnR5LCBza2lwQ29tcHV0ZWQpLT5cblx0cmV0dXJuIGlmIEB0eXBlIGlzICd0ZXh0J1xuXHRzYW1wbGUgPSBAZWwuc3R5bGVbcHJvcGVydHldXG5cblx0aWYgSVMuc3RyaW5nKHNhbXBsZSkgb3IgSVMubnVtYmVyKHNhbXBsZSlcblx0XHRjb21wdXRlZCA9IGlmIHNraXBDb21wdXRlZCB0aGVuIDAgZWxzZSBAc3R5bGUocHJvcGVydHkpXG5cdFx0cmVzdWx0ID0gY29tcHV0ZWQgb3IgQGVsLnN0eWxlW3Byb3BlcnR5XSBvciBAY3VycmVudFN0YXRlU3R5bGUocHJvcGVydHkpIG9yICcnXG5cdFx0cmV0dXJuIGlmIHR5cGVvZiByZXN1bHQgaXMgJ2Z1bmN0aW9uJyB0aGVuIHJlc3VsdC5jYWxsKEAsIEByZWxhdGVkKSBlbHNlIHJlc3VsdFxuXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHN0eWxlUGFyc2VkID0gKHByb3BlcnR5LCBza2lwQ29tcHV0ZWQpLT5cblx0cGFyc2VGbG9hdCBAc3R5bGVTYWZlKHByb3BlcnR5LCBza2lwQ29tcHV0ZWQpXG5cblxuZXhwb3J0IHJlY2FsY1N0eWxlID0gKHJlY2FsY0NoaWxkcmVuKS0+XG5cdHRhcmdldFN0eWxlcyA9IEBfcmVzb2x2ZUZuU3R5bGVzKEBfZ2V0QWN0aXZlU3RhdGVzKCksIHRydWUpXG5cblx0QHN0eWxlKHRhcmdldFN0eWxlcylcblx0XG5cdGlmIHJlY2FsY0NoaWxkcmVuXG5cdFx0Y2hpbGQucmVjYWxjU3R5bGUoKSBmb3IgY2hpbGQgaW4gQF9jaGlsZHJlblxuXHRcblx0cmV0dXJuIEBcblxuXG5leHBvcnQgY3VycmVudFN0YXRlU3R5bGUgPSAocHJvcGVydHkpLT4gaWYgcHJvcGVydHlcblx0aWYgQF9zdGF0ZS5sZW5ndGhcblx0XHRzdGF0ZXMgPSBAX3N0YXRlLnNsaWNlKClcblx0XHRzdGF0ZXMucHVzaChAX3N0YXRlU2hhcmVkLi4uKSBpZiBAX3N0YXRlU2hhcmVkIGFuZCBAX3N0YXRlU2hhcmVkLmxlbmd0aFxuXHRcdGkgPSBzdGF0ZXMubGVuZ3RoXG5cdFx0d2hpbGUgc3RhdGUgPSBzdGF0ZXNbLS1pXVxuXHRcdFx0cmV0dXJuIEBfc3R5bGVzW3N0YXRlXS5ydWxlW3Byb3BlcnR5XSBpZiBAX3N0eWxlc1tzdGF0ZV0gYW5kIElTLmRlZmluZWQoQF9zdHlsZXNbc3RhdGVdLnJ1bGVbcHJvcGVydHldKVxuXG5cdHJldHVybiBAX3N0eWxlcy5iYXNlLnJ1bGVbcHJvcGVydHldIGlmIEBfc3R5bGVzLmJhc2VcblxuXG5leHBvcnQgaGlkZSA9ICgpLT5cblx0QHN0eWxlICdkaXNwbGF5JywgJ25vbmUnXG5cblxuZXhwb3J0IHNob3cgPSAoZGlzcGxheSktPlxuXHRpZiBub3QgZGlzcGxheVxuXHRcdGRpc3BsYXkgPSBAY3VycmVudFN0YXRlU3R5bGUoJ2Rpc3BsYXknKVxuXHRcdGRpc3BsYXkgPSAnYmxvY2snIGlmIGRpc3BsYXkgaXMgJ25vbmUnIG9yIG5vdCBkaXNwbGF5XG5cdFxuXHRkaXNwbGF5ID89IEBfc3R5bGVzLmJhc2U/LmRpc3BsYXkgb3IgJ2Jsb2NrJ1xuXHRAc3R5bGUgJ2Rpc3BsYXknLCBkaXNwbGF5XG5cbmV4cG9ydCBvcmllbnRhdGlvbkdldHRlciA9XG5cdGdldDogKCktPiBpZiBAd2lkdGggPiBAaGVpZ2h0IHRoZW4gJ2xhbmRzY2FwZScgZWxzZSAncG9ydHJhaXQnXG5cbmV4cG9ydCBhc3BlY3RSYXRpb0dldHRlciA9XG5cdGdldDogKCktPiBAd2lkdGgvQGhlaWdodFxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIFF1aWNrRWxlbWVudDo6LFxuXHRcdCdvcmllbnRhdGlvbic6IG9yaWVudGF0aW9uR2V0dGVyXG5cdFx0J2FzcGVjdFJhdGlvJzogYXNwZWN0UmF0aW9HZXR0ZXJcblx0XHQncmVjdCc6IGdldDogKCktPiBAZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblx0XHQnd2lkdGgnOlxuXHRcdFx0Z2V0OiAoKS0+IHBhcnNlRmxvYXQgQHN0eWxlKCd3aWR0aCcpXG5cdFx0XHRzZXQ6ICh2YWx1ZSktPiBAc3R5bGUgJ3dpZHRoJywgdmFsdWVcblx0XHQnaGVpZ2h0Jzpcblx0XHRcdGdldDogKCktPiBwYXJzZUZsb2F0IEBzdHlsZSgnaGVpZ2h0Jylcblx0XHRcdHNldDogKHZhbHVlKS0+IEBzdHlsZSAnaGVpZ2h0JywgdmFsdWVcblxuXG5cdFF1aWNrRWxlbWVudDo6c3R5bGUgPSBzdHlsZVxuXHRRdWlja0VsZW1lbnQ6OnN0eWxlU2FmZSA9IHN0eWxlU2FmZVxuXHRRdWlja0VsZW1lbnQ6OnN0eWxlUGFyc2VkID0gc3R5bGVQYXJzZWRcblx0UXVpY2tFbGVtZW50OjpyZWNhbGNTdHlsZSA9IHJlY2FsY1N0eWxlXG5cdFF1aWNrRWxlbWVudDo6Y3VycmVudFN0YXRlU3R5bGUgPSBjdXJyZW50U3RhdGVTdHlsZVxuXHRRdWlja0VsZW1lbnQ6OmhpZGUgPSBoaWRlXG5cdFF1aWNrRWxlbWVudDo6c2hvdyA9IHNob3dcblxuXG4iLCJpbXBvcnQge29uXywgb2ZmXywgZW1pdCwgZW1pdFByaXZhdGUsIF9saXN0ZW5UbywgX2ludm9rZUhhbmRsZXJzfSBmcm9tICcuL2VsZW1lbnQvZXZlbnRzJ1xuaW1wb3J0IHtvcmllbnRhdGlvbkdldHRlciwgYXNwZWN0UmF0aW9HZXR0ZXJ9IGZyb20gJy4vZWxlbWVudC9zdHlsZSdcblxuZXhwb3J0IGRlZmF1bHQgUXVpY2tXaW5kb3cgPSBcblx0dHlwZTogJ3dpbmRvdydcblx0ZWw6IHdpbmRvd1xuXHRyYXc6IHdpbmRvd1xuXHRfZXZlbnRDYWxsYmFja3M6IHtfX3JlZnM6e319XG5cdFxuXG5RdWlja1dpbmRvdy5vbiA9ICBvbl9cblF1aWNrV2luZG93Lm9mZiA9ICBvZmZfXG5RdWlja1dpbmRvdy5lbWl0ID0gIGVtaXRcblF1aWNrV2luZG93LmVtaXRQcml2YXRlID0gIGVtaXRQcml2YXRlXG5RdWlja1dpbmRvdy5fbGlzdGVuVG8gPSAgX2xpc3RlblRvXG5RdWlja1dpbmRvdy5faW52b2tlSGFuZGxlcnMgPSAgX2ludm9rZUhhbmRsZXJzXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyBRdWlja1dpbmRvdyxcblx0J3dpZHRoJzogZ2V0OiAoKS0+IHdpbmRvdy5pbm5lcldpZHRoXG5cdCdoZWlnaHQnOiBnZXQ6ICgpLT4gd2luZG93LmlubmVySGVpZ2h0XG5cdCdvcmllbnRhdGlvbic6IG9yaWVudGF0aW9uR2V0dGVyXG5cdCdhc3BlY3RSYXRpbyc6IGFzcGVjdFJhdGlvR2V0dGVyXG5cbiIsImltcG9ydCBRdWlja1dpbmRvdyBmcm9tICcuL3dpbmRvdydcblJVTEVfREVJTElNSVRFUiA9IC8sXFxzKi9cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFRdWVyeSA9IG5ldyAoKS0+XG5cdGNhbGxiYWNrcyA9IFtdXG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJ3Jlc2l6ZScsICgpLT5cblx0XHRjYWxsYmFjaygpIGZvciBjYWxsYmFjayBpbiBjYWxsYmFja3Ncblx0XHRyZXR1cm5cblxuXHRAcGFyc2VRdWVyeSA9ICh0YXJnZXQsIHF1ZXJ5U3RyaW5nKS0+XG5cdFx0cXVlcnlTcGxpdCA9IHF1ZXJ5U3RyaW5nLnNwbGl0KCcoJylcblx0XHRzb3VyY2UgPSBxdWVyeVNwbGl0WzBdXG5cdFx0c291cmNlID0gc3dpdGNoIHNvdXJjZVxuXHRcdFx0d2hlbiAnd2luZG93JyB0aGVuIFF1aWNrV2luZG93XG5cdFx0XHR3aGVuICdwYXJlbnQnIHRoZW4gdGFyZ2V0LnBhcmVudFxuXHRcdFx0d2hlbiAnc2VsZicgdGhlbiB0YXJnZXRcblx0XHRcdGVsc2UgdGFyZ2V0LnBhcmVudE1hdGNoaW5nIChwYXJlbnQpLT4gcGFyZW50LnJlZiBpcyBzb3VyY2Uuc2xpY2UoMSlcblxuXHRcdHJ1bGVzID0gcXVlcnlTcGxpdFsxXVxuXHRcdFx0LnNsaWNlKDAsLTEpXG5cdFx0XHQuc3BsaXQoUlVMRV9ERUlMSU1JVEVSKVxuXHRcdFx0Lm1hcCAocnVsZSktPiBcblx0XHRcdFx0c3BsaXQgPSBydWxlLnNwbGl0KCc6Jylcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHNwbGl0WzFdKVxuXHRcdFx0XHR2YWx1ZSA9IHNwbGl0WzFdIGlmIGlzTmFOKHZhbHVlKVxuXHRcdFx0XHRrZXkgPSBzcGxpdFswXVxuXHRcdFx0XHRrZXlQcmVmaXggPSBrZXkuc2xpY2UoMCw0KVxuXHRcdFx0XHRtYXggPSBrZXlQcmVmaXggaXMgJ21heC0nXG5cdFx0XHRcdG1pbiA9IG5vdCBtYXggYW5kIGtleVByZWZpeCBpcyAnbWluLSdcblx0XHRcdFx0a2V5ID0ga2V5LnNsaWNlKDQpIGlmIG1heCBvciBtaW5cblx0XHRcdFx0Z2V0dGVyID0gc3dpdGNoIGtleVxuXHRcdFx0XHRcdHdoZW4gJ29yaWVudGF0aW9uJyB0aGVuICgpLT4gc291cmNlLm9yaWVudGF0aW9uXG5cdFx0XHRcdFx0d2hlbiAnYXNwZWN0LXJhdGlvJyB0aGVuICgpLT4gc291cmNlLmFzcGVjdFJhdGlvXG5cdFx0XHRcdFx0d2hlbiAnd2lkdGgnLCdoZWlnaHQnIHRoZW4gKCktPiBzb3VyY2Vba2V5XVxuXHRcdFx0XHRcdGVsc2UgKCktPlxuXHRcdFx0XHRcdFx0c3RyaW5nVmFsdWUgPSBzb3VyY2Uuc3R5bGUoa2V5KVxuXHRcdFx0XHRcdFx0cGFyc2VkVmFsdWUgPSBwYXJzZUZsb2F0IHN0cmluZ1ZhbHVlXG5cdFx0XHRcdFx0XHRyZXR1cm4gaWYgaXNOYU4ocGFyc2VkVmFsdWUpIHRoZW4gc3RyaW5nVmFsdWUgZWxzZSBwYXJzZWRWYWx1ZVxuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIHtrZXksdmFsdWUsbWluLG1heCxnZXR0ZXJ9XG5cblx0XHRyZXR1cm4ge3NvdXJjZSwgcnVsZXN9XG5cblxuXHRAcmVnaXN0ZXIgPSAodGFyZ2V0LCBxdWVyeVN0cmluZyktPlxuXHRcdHF1ZXJ5ID0gQHBhcnNlUXVlcnkodGFyZ2V0LCBxdWVyeVN0cmluZylcblx0XHRpZiBxdWVyeS5zb3VyY2Vcblx0XHRcdGNhbGxiYWNrcy5wdXNoIGNhbGxiYWNrID0gKCktPiB0ZXN0UnVsZSh0YXJnZXQsIHF1ZXJ5LCBxdWVyeVN0cmluZylcblx0XHRcdGNhbGxiYWNrKClcblx0XHRyZXR1cm4gcXVlcnlcblxuXG5cdHRlc3RSdWxlID0gKHRhcmdldCwgcXVlcnksIHF1ZXJ5U3RyaW5nKS0+XG5cdFx0cGFzc2VkID0gdHJ1ZVxuXG5cdFx0Zm9yIHJ1bGUgaW4gcXVlcnkucnVsZXNcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IHJ1bGUuZ2V0dGVyKClcblx0XHRcdHBhc3NlZCA9IHN3aXRjaFxuXHRcdFx0XHR3aGVuIHJ1bGUubWluIHRoZW4gY3VycmVudFZhbHVlID49IHJ1bGUudmFsdWVcblx0XHRcdFx0d2hlbiBydWxlLm1heCB0aGVuIGN1cnJlbnRWYWx1ZSA8PSBydWxlLnZhbHVlXG5cdFx0XHRcdGVsc2UgY3VycmVudFZhbHVlIGlzIHJ1bGUudmFsdWVcblxuXHRcdFx0YnJlYWsgaWYgbm90IHBhc3NlZFx0XHRcblx0XHRcblx0XHR0YXJnZXQuc3RhdGUocXVlcnlTdHJpbmcsIHBhc3NlZClcblxuXHRyZXR1cm4gQFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlQ2hhaW5cblx0Y29uc3RydWN0b3I6IChzdGF0ZXMpLT5cblx0XHRAc3RyaW5nID0gc3RhdGVzLmpvaW4oJysnKVxuXHRcdEBhcnJheSA9IHN0YXRlcy5zbGljZSgpXG5cdFx0QGxlbmd0aCA9IHN0YXRlcy5sZW5ndGhcblxuXHRpbmNsdWRlczogKHRhcmdldCktPlxuXHRcdGZvciBzdGF0ZSBpbiBAYXJyYXlcblx0XHRcdHJldHVybiB0cnVlIGlmIHN0YXRlIGlzIHRhcmdldFxuXG5cdFx0cmV0dXJuIGZhbHNlXG5cblx0d2l0aG91dDogKHRhcmdldCktPlxuXHRcdEBhcnJheVxuXHRcdFx0LmZpbHRlciAoc3RhdGUpLT4gc3RhdGUgaXNudCB0YXJnZXRcblx0XHRcdC5qb2luICcrJ1xuXG5cblx0aXNBcHBsaWNhYmxlOiAodGFyZ2V0LCBvdGhlckFjdGl2ZSktPlxuXHRcdGFjdGl2ZSA9IEBhcnJheS5maWx0ZXIgKHN0YXRlKS0+XG5cdFx0XHRzdGF0ZSBpcyB0YXJnZXQgb3Jcblx0XHRcdG90aGVyQWN0aXZlLmluZGV4T2Yoc3RhdGUpIGlzbnQgLTFcblxuXHRcdHJldHVybiBhY3RpdmUubGVuZ3RoIGlzIEBhcnJheS5sZW5ndGgiLCJpbXBvcnQgcXVpY2tkb20gZnJvbSAnLi4vcXVpY2tkb20nXG5pbXBvcnQgTWVkaWFRdWVyeSBmcm9tICcuLi9tZWRpYVF1ZXJ5J1xuaW1wb3J0IFN0YXRlQ2hhaW4gZnJvbSAnLi9zdGF0ZUNoYWluJ1xuaW1wb3J0IElTIGZyb20gJy4uL2NoZWNrcydcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCBleHRlbmQgZnJvbSAnc21hcnQtZXh0ZW5kJ1xuXG5CQVNFX1NUQVRFX1RSSUdHRVJTID1cblx0J2hvdmVyJzoge29uOidtb3VzZWVudGVyJywgb2ZmOidtb3VzZWxlYXZlJywgYnViYmxlczp0cnVlfVxuXHQnZm9jdXMnOiB7b246J2ZvY3VzJywgb2ZmOidibHVyJywgYnViYmxlczp0cnVlfVxuXG5cbmV4cG9ydCBfbm9ybWFsaXplT3B0aW9ucyA9ICgpLT5cblx0aWYgQG9wdGlvbnMucmVsYXRlZEluc3RhbmNlXG5cdFx0QG9wdGlvbnMucmVsYXRlZCB8fD0gQG9wdGlvbnMucmVsYXRlZEluc3RhbmNlXG5cdFx0QG9wdGlvbnMucmVsYXRlZEluc3RhbmNlID0gbnVsbFxuXHRcblx0QHJlbGF0ZWQgPSBAb3B0aW9ucy5yZWxhdGVkID89IEBcblx0QG9wdGlvbnMuY2xhc3NOYW1lID0gQG9wdGlvbnMuY2xhc3MgaWYgQG9wdGlvbnMuY2xhc3Ncblx0QG9wdGlvbnMuaHJlZiA9IEBvcHRpb25zLnVybCBpZiBAb3B0aW9ucy51cmxcblx0QG9wdGlvbnMudW5wYXNzYWJsZVN0YXRlcyA/PSBbXVxuXHRAb3B0aW9ucy5wYXNzU3RhdGVUb0NoaWxkcmVuID89IHRydWVcblx0QG9wdGlvbnMucGFzc0RhdGFUb0NoaWxkcmVuID89IHRydWVcblx0QG9wdGlvbnMuc3RhdGVUcmlnZ2VycyA9XG5cdFx0aWYgQG9wdGlvbnMuc3RhdGVUcmlnZ2Vyc1xuXHRcdFx0ZXh0ZW5kLmNsb25lLmRlZXAoQkFTRV9TVEFURV9UUklHR0VSUywgQG9wdGlvbnMuc3RhdGVUcmlnZ2Vycylcblx0XHRlbHNlXG5cdFx0XHRCQVNFX1NUQVRFX1RSSUdHRVJTXG5cdFxuXHRpZiBAdHlwZSBpcyAndGV4dCdcblx0XHRleHRlbmQgQCwgQF9wYXJzZVRleHRzKEBvcHRpb25zLnRleHQsIEBfdGV4dHMpXG5cdGVsc2Vcblx0XHRleHRlbmQgQCwgQF9wYXJzZVN0eWxlcyhAb3B0aW9ucy5zdHlsZSwgQF9zdHlsZXMpXG5cdFxuXHRyZXR1cm5cblxuXG5leHBvcnQgX3BhcnNlU3R5bGVzID0gKHN0eWxlcywgc3RvcmUpLT5cblx0cmV0dXJuIGlmIG5vdCBJUy5vYmplY3RQbGFpbihzdHlsZXMpXG5cdGtleXMgPSBPYmplY3Qua2V5cyhzdHlsZXMpXG5cdHN0YXRlcyA9IGtleXMuZmlsdGVyIChrZXkpLT4gaGVscGVycy5pc1N0YXRlU3R5bGUoa2V5KVxuXHRzcGVjaWFsU3RhdGVzID0gaGVscGVycy5yZW1vdmVJdGVtKHN0YXRlcy5zbGljZSgpLCAnJGJhc2UnKVxuXHRfbWVkaWFTdGF0ZXMgPSBzdGF0ZXMuZmlsdGVyKChrZXkpLT4ga2V5WzBdIGlzICdAJykubWFwIChzdGF0ZSktPiBzdGF0ZS5zbGljZSgxKVxuXHRfcHJvdmlkZWRTdGF0ZXMgPSBzdGF0ZXMubWFwIChzdGF0ZSktPiBzdGF0ZS5zbGljZSgxKSAjIFJlbW92ZSAnJCcgcHJlZml4XG5cdF9zdHlsZXMgPSBzdG9yZSBvciB7fVxuXHRfc3RhdGVTaGFyZWQgPSBfcHJvdmlkZWRTdGF0ZXNTaGFyZWQgPSB1bmRlZmluZWRcblxuXHRiYXNlID0gaWYgbm90IGhlbHBlcnMuaW5jbHVkZXMoc3RhdGVzLCAnJGJhc2UnKSB0aGVuIHN0eWxlcyBlbHNlIHN0eWxlcy4kYmFzZVxuXHRfc3R5bGVzLmJhc2UgPSBoZWxwZXJzLnJlZ2lzdGVyU3R5bGUoYmFzZSwgMCwgZm9yY2VTdHlsZT1Ab3B0aW9ucy5mb3JjZVN0eWxlKVxuXG5cblx0aWYgc3BlY2lhbFN0YXRlcy5sZW5ndGhcblx0XHRmbGF0dGVuTmVzdGVkU3RhdGVzID0gKHN0eWxlT2JqZWN0LCBjaGFpbiwgbGV2ZWwpLT5cblx0XHRcdHN0eWxlS2V5cyA9IE9iamVjdC5rZXlzKHN0eWxlT2JqZWN0KVxuXHRcdFx0b3V0cHV0ID0ge31cblx0XHRcdGhhc05vblN0YXRlUHJvcHMgPSBmYWxzZVxuXHRcdFx0XG5cdFx0XHRmb3Igc3RhdGUgaW4gc3R5bGVLZXlzXG5cdFx0XHRcdGlmIG5vdCBoZWxwZXJzLmlzU3RhdGVTdHlsZShzdGF0ZSlcblx0XHRcdFx0XHRoYXNOb25TdGF0ZVByb3BzID0gdHJ1ZVxuXHRcdFx0XHRcdG91dHB1dFtzdGF0ZV0gPSBzdHlsZU9iamVjdFtzdGF0ZV1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGNoYWluLnB1c2goc3RhdGVfID0gc3RhdGUuc2xpY2UoMSkpXG5cdFx0XHRcdFx0c3RhdGVDaGFpbiA9IG5ldyBTdGF0ZUNoYWluKGNoYWluKVxuXHRcdFx0XHRcdF9zdGF0ZVNoYXJlZCA/PSBbXVxuXHRcdFx0XHRcdF9wcm92aWRlZFN0YXRlc1NoYXJlZCA/PSBbXVxuXHRcdFx0XHRcdF9wcm92aWRlZFN0YXRlc1NoYXJlZC5wdXNoKHN0YXRlQ2hhaW4pXG5cdFx0XHRcdFx0X21lZGlhU3RhdGVzLnB1c2goc3RhdGVfKSBpZiBzdGF0ZVswXSBpcyAnQCdcblx0XHRcdFx0XHRfc3R5bGVzW3N0YXRlQ2hhaW4uc3RyaW5nXSA9IGhlbHBlcnMucmVnaXN0ZXJTdHlsZSBmbGF0dGVuTmVzdGVkU3RhdGVzKHN0eWxlT2JqZWN0W3N0YXRlXSwgY2hhaW4sIGxldmVsKzEpLCBsZXZlbCsxLCBmb3JjZVN0eWxlXG5cdFx0XHRcblx0XHRcdHJldHVybiBpZiBoYXNOb25TdGF0ZVByb3BzIHRoZW4gb3V0cHV0XG5cblx0XHRmb3Igc3RhdGUgaW4gc3BlY2lhbFN0YXRlc1xuXHRcdFx0c3RhdGVfID0gc3RhdGUuc2xpY2UoMSlcblx0XHRcdFxuXHRcdFx0c3RhdGVTdHlsZXMgPSBmbGF0dGVuTmVzdGVkU3RhdGVzKHN0eWxlc1tzdGF0ZV0sIFtzdGF0ZV9dLCAxKVxuXHRcdFx0X3N0eWxlc1tzdGF0ZV9dID0gaGVscGVycy5yZWdpc3RlclN0eWxlKHN0YXRlU3R5bGVzLCAxKSBpZiBzdGF0ZVN0eWxlc1xuXG5cblx0cmV0dXJuIHtfc3R5bGVzLCBfbWVkaWFTdGF0ZXMsIF9zdGF0ZVNoYXJlZCwgX3Byb3ZpZGVkU3RhdGVzLCBfcHJvdmlkZWRTdGF0ZXNTaGFyZWR9XG5cblxuXG5leHBvcnQgX3BhcnNlVGV4dHMgPSAodGV4dHMsIHN0b3JlKS0+XG5cdHJldHVybiBpZiBub3QgSVMub2JqZWN0UGxhaW4odGV4dHMpXG5cdHN0YXRlcyA9IE9iamVjdC5rZXlzKHRleHRzKS5tYXAgKHN0YXRlKS0+IHN0YXRlLnNsaWNlKDEpXG5cdF9wcm92aWRlZFN0YXRlcyA9IHN0YXRlcy5maWx0ZXIgKHN0YXRlKS0+IHN0YXRlIGlzbnQgJ2Jhc2UnXG5cdF90ZXh0cyA9IHN0b3JlIG9yIHt9XG5cdF90ZXh0cyA9IGJhc2U6Jydcblx0X3RleHRzW3N0YXRlXSA9IHRleHRzWyckJytzdGF0ZV0gZm9yIHN0YXRlIGluIHN0YXRlc1xuXHRcblx0cmV0dXJuIHtfdGV4dHMsIF9wcm92aWRlZFN0YXRlc31cblxuXG5leHBvcnQgX2FwcGx5T3B0aW9ucyA9ICgpLT5cblx0aWYgcmVmPShAb3B0aW9ucy5pZCBvciBAb3B0aW9ucy5yZWYpIHRoZW4gQGF0dHIoJ2RhdGEtcmVmJywgQHJlZj1yZWYpXG5cdGlmIEBvcHRpb25zLmlkIHRoZW4gQGVsLmlkID0gQG9wdGlvbnMuaWRcblx0aWYgQG9wdGlvbnMuY2xhc3NOYW1lIHRoZW4gQGVsLmNsYXNzTmFtZSA9IEBvcHRpb25zLmNsYXNzTmFtZVxuXHRpZiBAb3B0aW9ucy5zcmMgdGhlbiBAZWwuc3JjID0gQG9wdGlvbnMuc3JjXG5cdGlmIEBvcHRpb25zLmhyZWYgdGhlbiBAZWwuaHJlZiA9IEBvcHRpb25zLmhyZWZcblx0aWYgQG9wdGlvbnMudHlwZSB0aGVuIEBlbC50eXBlID0gQG9wdGlvbnMudHlwZVxuXHRpZiBAb3B0aW9ucy5uYW1lIHRoZW4gQGVsLm5hbWUgPSBAb3B0aW9ucy5uYW1lXG5cdGlmIEBvcHRpb25zLnZhbHVlIHRoZW4gQGVsLnZhbHVlID0gQG9wdGlvbnMudmFsdWVcblx0aWYgQG9wdGlvbnMuc2VsZWN0ZWQgdGhlbiBAZWwuc2VsZWN0ZWQgPSBAb3B0aW9ucy5zZWxlY3RlZFxuXHRpZiBAb3B0aW9ucy5jaGVja2VkIHRoZW4gQGVsLmNoZWNrZWQgPSBAb3B0aW9ucy5jaGVja2VkXG5cdGlmIEBvcHRpb25zLnByb3BzIHRoZW4gQHByb3AoQG9wdGlvbnMucHJvcHMpXG5cdGlmIEBvcHRpb25zLmF0dHJzIHRoZW4gQGF0dHIoQG9wdGlvbnMuYXR0cnMpXG5cdEBfYXBwbHlSZWdpc3RlcmVkU3R5bGUoQF9zdHlsZXMuYmFzZSwgbnVsbCwgbnVsbCwgQG9wdGlvbnMuc3R5bGVBZnRlckluc2VydClcblx0QHRleHQgPSBAX3RleHRzLmJhc2UgaWYgQF90ZXh0c1xuXG5cdEBvbignaW5zZXJ0ZWQnLCBDQUNIRURfRk5fSU5TRVJURUQsIGZhbHNlLCB0cnVlKVxuXG5cdGlmIEBvcHRpb25zLmludm9rZUNvbXB1dGVyc09uY2Vcblx0XHRAX2ludm9rZWRDb21wdXRlcnMgPSB7fVxuXHRcblx0aWYgQG9wdGlvbnMucmVjYWxjT25SZXNpemVcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAncmVzaXplJywgKCk9PiBAcmVjYWxjU3R5bGUoKVxuXG5cdGlmIEBvcHRpb25zLmV2ZW50c1xuXHRcdEBvbihldmVudCwgaGFuZGxlcikgZm9yIGV2ZW50LGhhbmRsZXIgb2YgQG9wdGlvbnMuZXZlbnRzXG5cblx0aWYgQG9wdGlvbnMubWV0aG9kc1xuXHRcdGZvciBtZXRob2QsdmFsdWUgb2YgQG9wdGlvbnMubWV0aG9kcyB3aGVuIG5vdCBAW21ldGhvZF1cblx0XHRcdGlmIElTLmZ1bmN0aW9uKHZhbHVlKVxuXHRcdFx0XHRAW21ldGhvZF0gPSB2YWx1ZVxuXHRcdFx0ZWxzZSBpZiBJUy5vYmplY3QodmFsdWUpXG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBALCBtZXRob2QsIHtjb25maWd1cmFibGU6dHJ1ZSwgZ2V0OnZhbHVlLmdldCwgc2V0OnZhbHVlLnNldH1cblxuXHRpZiBAdHlwZSBpc250ICd0ZXh0JyBhbmQgSVMub2JqZWN0KEBvcHRpb25zLnRleHQpXG5cdFx0QGFwcGVuZCBxdWlja2RvbSgndGV4dCcsIHRleHQ6QG9wdGlvbnMudGV4dClcblx0cmV0dXJuXG5cblxuZXhwb3J0IF9wb3N0Q3JlYXRpb24gPSAoZGF0YSktPlxuXHRpZiBAb3B0aW9ucy5jb21wdXRlcnNcblx0XHRkYXRhID0gZXh0ZW5kLmNsb25lKEBvcHRpb25zLmRhdGEsIGRhdGEpIGlmIGRhdGEgYW5kIEBvcHRpb25zLmRhdGFcblx0XHRkYXRhIHx8PSBAb3B0aW9ucy5kYXRhXG5cdFx0QGFwcGx5RGF0YShkYXRhLCBmYWxzZSlcblx0XHRcblx0XHRpZiBAb3B0aW9ucy5jb21wdXRlcnMuX2luaXRcblx0XHRcdEBfcnVuQ29tcHV0ZXIoJ19pbml0JywgZGF0YSlcblxuXHRpZiBAb3B0aW9ucy5zdGF0ZVxuXHRcdEBzdGF0ZShAb3B0aW9ucy5zdGF0ZSlcblx0XG5cdHJldHVyblxuXG5cbmV4cG9ydCBfYXR0YWNoU3RhdGVFdmVudHMgPSAoZm9yY2UpLT5cblx0c3RhdGVzID0gT2JqZWN0LmtleXMoQG9wdGlvbnMuc3RhdGVUcmlnZ2Vycylcblx0c3RhdGVzLmZvckVhY2ggKHN0YXRlKT0+XG5cdFx0dHJpZ2dlciA9IEBvcHRpb25zLnN0YXRlVHJpZ2dlcnNbc3RhdGVdXHRcblx0XHRyZXR1cm4gaWYgbm90IGhlbHBlcnMuaW5jbHVkZXMoQF9wcm92aWRlZFN0YXRlcywgc3RhdGUpIGFuZCBub3QgZm9yY2UgYW5kIG5vdCB0cmlnZ2VyLmZvcmNlXG5cdFx0ZW5hYmxlciA9IGlmIElTLnN0cmluZyh0cmlnZ2VyKSB0aGVuIHRyaWdnZXIgZWxzZSB0cmlnZ2VyLm9uXG5cdFx0ZGlzYWJsZXIgPSB0cmlnZ2VyLm9mZiBpZiBJUy5vYmplY3QodHJpZ2dlcilcblxuXHRcdEBfbGlzdGVuVG8gZW5hYmxlciwgKCk9PiBAc3RhdGUoc3RhdGUsIG9uLCB0cmlnZ2VyLmJ1YmJsZXMpXG5cdFx0aWYgZGlzYWJsZXIgdGhlbiBAX2xpc3RlblRvIGRpc2FibGVyLCAoKT0+IEBzdGF0ZShzdGF0ZSwgb2ZmLCB0cmlnZ2VyLmJ1YmJsZXMpXG5cdFxuXHRyZXR1cm5cblxuXG5cbmV4cG9ydCBfcHJveHlQYXJlbnQgPSAoKS0+XG5cdHBhcmVudCA9IHVuZGVmaW5lZFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkgQCwgJ19wYXJlbnQnLFxuXHRcdGdldDogKCktPiBwYXJlbnRcblx0XHRzZXQ6IChuZXdQYXJlbnQpLT4gaWYgcGFyZW50PW5ld1BhcmVudFxuXHRcdFx0bGFzdFBhcmVudCA9IEBwYXJlbnRzLnNsaWNlKC0xKVswXVxuXHRcdFx0aWYgbGFzdFBhcmVudC5yYXcgaXMgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cdFx0XHRcdEBfdW5wcm94eVBhcmVudChuZXdQYXJlbnQpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHBhcmVudC5vbiAnaW5zZXJ0ZWQnLCAoKT0+XG5cdFx0XHRcdFx0QF91bnByb3h5UGFyZW50KG5ld1BhcmVudCkgaWYgcGFyZW50IGlzIG5ld1BhcmVudFxuXHRcdFx0cmV0dXJuXG5cblxuZXhwb3J0IF91bnByb3h5UGFyZW50ID0gKG5ld1BhcmVudCktPlxuXHRkZWxldGUgQF9wYXJlbnRcblx0QF9wYXJlbnQgPSBuZXdQYXJlbnRcblx0QGVtaXRQcml2YXRlKCdpbnNlcnRlZCcsIG5ld1BhcmVudClcblx0cmV0dXJuXG5cblxuXG5DQUNIRURfRk5fSU5TRVJURUQgPSAoKS0+XG5cdEBfaW5zZXJ0ZWQgPSBAXG5cdEByZWNhbGNTdHlsZSgpIGlmIEBvcHRpb25zLnN0eWxlQWZ0ZXJJbnNlcnRcblxuXHRpZiAobWVkaWFTdGF0ZXM9QF9tZWRpYVN0YXRlcykgYW5kIEBfbWVkaWFTdGF0ZXMubGVuZ3RoXG5cdFx0QF9tZWRpYVN0YXRlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblx0XHRcblx0XHRmb3IgcXVlcnlTdHJpbmcgaW4gbWVkaWFTdGF0ZXNcblx0XHRcdEBfbWVkaWFTdGF0ZXNbcXVlcnlTdHJpbmddID0gTWVkaWFRdWVyeS5yZWdpc3RlcihALCBxdWVyeVN0cmluZylcblxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdFF1aWNrRWxlbWVudDo6X25vcm1hbGl6ZU9wdGlvbnMgPSBfbm9ybWFsaXplT3B0aW9uc1xuXHRRdWlja0VsZW1lbnQ6Ol9wYXJzZVN0eWxlcyA9IF9wYXJzZVN0eWxlc1xuXHRRdWlja0VsZW1lbnQ6Ol9wYXJzZVRleHRzID0gX3BhcnNlVGV4dHNcblx0UXVpY2tFbGVtZW50OjpfYXBwbHlPcHRpb25zID0gX2FwcGx5T3B0aW9uc1xuXHRRdWlja0VsZW1lbnQ6Ol9wb3N0Q3JlYXRpb24gPSBfcG9zdENyZWF0aW9uXG5cdFF1aWNrRWxlbWVudDo6X2F0dGFjaFN0YXRlRXZlbnRzID0gX2F0dGFjaFN0YXRlRXZlbnRzXG5cdFF1aWNrRWxlbWVudDo6X3Byb3h5UGFyZW50ID0gX3Byb3h5UGFyZW50XG5cdFF1aWNrRWxlbWVudDo6X3VucHJveHlQYXJlbnQgPSBfdW5wcm94eVBhcmVudFxuXG5cblxuXG4iLCJcbmV4cG9ydCBkZWZhdWx0IChRdWlja0VsZW1lbnQpLT5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMgUXVpY2tFbGVtZW50OjosXG5cdFx0J3Jhdyc6IGdldDogKCktPiBAZWxcblx0XHQnMCc6IGdldDogKCktPiBAZWxcblx0XHQnY3NzJzogZ2V0OiAoKS0+IEBzdHlsZVxuXHRcdCdyZXBsYWNlV2l0aCc6IGdldDogKCktPiBAcmVwbGFjZVxuXHRcdCdyZW1vdmVMaXN0ZW5lcic6IGdldDogKCktPiBAb2ZmXG5cbiIsImltcG9ydCBxdWlja2RvbSBmcm9tICcuLi9xdWlja2RvbSdcbmltcG9ydCBJUyBmcm9tICcuLi9jaGVja3MnXG5cbmV4cG9ydCBwYXJlbnRzVW50aWwgPSAoZmlsdGVyKS0+XG5cdF9nZXRQYXJlbnRzKEAsIGZpbHRlcilcblxuZXhwb3J0IHBhcmVudE1hdGNoaW5nID0gKGZpbHRlciktPlxuXHRpZiBJUy5mdW5jdGlvbihmaWx0ZXIpIG9yIGlzUmVmPUlTLnN0cmluZyhmaWx0ZXIpXG5cdFx0bmV4dFBhcmVudCA9IEBwYXJlbnRcblx0XHR3aGlsZSBuZXh0UGFyZW50XG5cdFx0XHRpZiBpc1JlZlxuXHRcdFx0XHRyZXR1cm4gbmV4dFBhcmVudCBpZiBuZXh0UGFyZW50LnJlZiBpcyBmaWx0ZXJcblx0XHRcdGVsc2Vcblx0XHRcdFx0cmV0dXJuIG5leHRQYXJlbnQgaWYgZmlsdGVyKG5leHRQYXJlbnQpXG5cblx0XHRcdG5leHRQYXJlbnQgPSBuZXh0UGFyZW50LnBhcmVudFxuXHRcdFxuXHRyZXR1cm5cblxuZXhwb3J0IHF1ZXJ5ID0gKHNlbGVjdG9yKS0+XG5cdHF1aWNrZG9tIEByYXcucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcblxuZXhwb3J0IHF1ZXJ5QWxsID0gKHNlbGVjdG9yKS0+XG5cdHJlc3VsdCA9IEByYXcucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcilcblx0b3V0cHV0ID0gW107IG91dHB1dC5wdXNoKGl0ZW0pIGZvciBpdGVtIGluIHJlc3VsdFxuXHRyZXR1cm4gcXVpY2tkb20uYmF0Y2gob3V0cHV0KVxuXG5cblxuXG5leHBvcnQgX2dldFBhcmVudHMgPSAodGFyZ2V0RWwsIGZpbHRlciktPlxuXHRmaWx0ZXIgPSB1bmRlZmluZWQgaWYgbm90IElTLmZ1bmN0aW9uKGZpbHRlcikgYW5kIG5vdCBpc1JlZj1JUy5zdHJpbmcoZmlsdGVyKVxuXHRwYXJlbnRzID0gW11cblx0bmV4dFBhcmVudCA9IHRhcmdldEVsLnBhcmVudFxuXHR3aGlsZSBuZXh0UGFyZW50XG5cdFx0cGFyZW50cy5wdXNoKG5leHRQYXJlbnQpXG5cdFx0bmV4dFBhcmVudCA9IG5leHRQYXJlbnQucGFyZW50XG5cdFx0aWYgaXNSZWZcblx0XHRcdG5leHRQYXJlbnQgPSBudWxsIGlmIG5leHRQYXJlbnQgYW5kIG5leHRQYXJlbnQucmVmIGlzIGZpbHRlclxuXHRcdGVsc2UgaWYgZmlsdGVyXG5cdFx0XHRuZXh0UGFyZW50ID0gbnVsbCBpZiBmaWx0ZXIobmV4dFBhcmVudClcblxuXHRyZXR1cm4gcGFyZW50c1xuXG5cbmV4cG9ydCBfZ2V0Q2hpbGRSZWZzID0gKHRhcmdldCwgZnJlc2hDb3B5KS0+XG5cdHRhcmdldC5fY2hpbGRSZWZzID0ge30gaWYgZnJlc2hDb3B5IG9yIG5vdCB0YXJnZXQuX2NoaWxkUmVmc1xuXHRyZWZzID0gdGFyZ2V0Ll9jaGlsZFJlZnNcblx0cmVmc1t0YXJnZXQucmVmXSA9IHRhcmdldCBpZiB0YXJnZXQucmVmXG5cdGNoaWxkcmVuID0gdGFyZ2V0LmNoaWxkcmVuXG5cblx0aWYgY2hpbGRyZW4ubGVuZ3RoXG5cdFx0Zm9yIGNoaWxkIGluIGNoaWxkcmVuXG5cdFx0XHRjaGlsZFJlZnMgPSBfZ2V0Q2hpbGRSZWZzKGNoaWxkLCBmcmVzaENvcHkpXG5cdFx0XHRyZWZzW3JlZl0gfHw9IGVsIGZvciByZWYsZWwgb2YgY2hpbGRSZWZzXG5cblx0cmV0dXJuIHJlZnNcblxuXG5leHBvcnQgX2dldEluZGV4QnlQcm9wID0gKG1haW4sIHByb3ApLT5cblx0aWYgbm90IHBhcmVudD1tYWluLnBhcmVudFxuXHRcdHJldHVybiBudWxsXG5cdGVsc2Vcblx0XHRwYXJlbnQuY2hpbGRyZW5cblx0XHRcdC5maWx0ZXIgKGNoaWxkKS0+IGNoaWxkW3Byb3BdIGlzIG1haW5bcHJvcF1cblx0XHRcdC5pbmRleE9mKG1haW4pXG5cblxuZXhwb3J0IF9maWx0ZXJFbGVtZW50cyA9IChhcnJheSktPlxuXHRpZiBub3QgYXJyYXkubGVuZ3RoXG5cdFx0cmV0dXJuIGFycmF5XG5cdGVsc2Vcblx0XHRvdXRwdXQgPSBbXVxuXHRcdG91dHB1dC5wdXNoKGl0ZW0pIGZvciBpdGVtIGluIGFycmF5IHdoZW4gaXRlbS50eXBlIGlzbnQgJ3RleHQnXG5cdFx0cmV0dXJuIG91dHB1dFxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdFF1aWNrRWxlbWVudDo6cGFyZW50c1VudGlsID0gcGFyZW50c1VudGlsXG5cdFF1aWNrRWxlbWVudDo6cGFyZW50TWF0Y2hpbmcgPSBwYXJlbnRNYXRjaGluZ1xuXHRRdWlja0VsZW1lbnQ6OnF1ZXJ5ID0gcXVlcnlcblx0UXVpY2tFbGVtZW50OjpxdWVyeUFsbCA9IHF1ZXJ5QWxsXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyBRdWlja0VsZW1lbnQ6Oixcblx0XHQnY2hpbGRyZW4nOiBnZXQ6ICgpLT5cblx0XHRcdGlmIEBlbC5jaGlsZE5vZGVzLmxlbmd0aCBpc250IEBfY2hpbGRyZW4ubGVuZ3RoICMgUmUtY29sbGVjdCBjaGlsZHJlblx0XG5cdFx0XHRcdEBfY2hpbGRyZW4ubGVuZ3RoID0gMCAjIEVtcHR5IG91dCBjaGlsZHJlbiBhcnJheVxuXHRcdFx0XHRAX2NoaWxkcmVuLnB1c2gocXVpY2tkb20oY2hpbGQpKSBmb3IgY2hpbGQgaW4gQGVsLmNoaWxkTm9kZXMgd2hlbiBjaGlsZC5ub2RlVHlwZSA8IDRcblxuXHRcdFx0cmV0dXJuIEBfY2hpbGRyZW5cblxuXHRcdCdlbGVtZW50Q2hpbGRyZW4nOiBnZXQ6ICgpLT5cblx0XHRcdF9maWx0ZXJFbGVtZW50cyhAY2hpbGRyZW4pXG5cblx0XHQncGFyZW50JzogZ2V0OiAoKS0+XG5cdFx0XHRpZiAobm90IEBfcGFyZW50IG9yIEBfcGFyZW50LmVsIGlzbnQgQGVsLnBhcmVudE5vZGUpIGFuZCBub3QgSVMuZG9tRG9jKEBlbC5wYXJlbnROb2RlKVxuXHRcdFx0XHRAX3BhcmVudCA9IHF1aWNrZG9tKEBlbC5wYXJlbnROb2RlKVxuXG5cdFx0XHRyZXR1cm4gQF9wYXJlbnRcblxuXG5cdFx0J3BhcmVudHMnOiBnZXQ6ICgpLT5cblx0XHRcdF9nZXRQYXJlbnRzKEApXG5cblx0XHQnbmV4dCc6IGdldDogKCktPlxuXHRcdFx0cXVpY2tkb20oQGVsLm5leHRTaWJsaW5nKVxuXHRcdFxuXHRcdCduZXh0RWwnOiBnZXQ6ICgpLT5cblx0XHRcdHF1aWNrZG9tKEBlbC5uZXh0RWxlbWVudFNpYmxpbmcpXG5cdFx0XG5cdFx0J25leHRFbEFsbCc6IGdldDogKCktPlxuXHRcdFx0X2ZpbHRlckVsZW1lbnRzKEBuZXh0QWxsKVxuXG5cdFx0J25leHRBbGwnOiBnZXQ6ICgpLT5cblx0XHRcdHNpYmxpbmdzID0gW11cblx0XHRcdG5leHRTaWJsaW5nID0gcXVpY2tkb20oQGVsLm5leHRTaWJsaW5nKVxuXHRcdFx0d2hpbGUgbmV4dFNpYmxpbmdcblx0XHRcdFx0c2libGluZ3MucHVzaChuZXh0U2libGluZylcblx0XHRcdFx0bmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5uZXh0XG5cblx0XHRcdHJldHVybiBzaWJsaW5nc1xuXG5cdFx0J3ByZXYnOiBnZXQ6ICgpLT5cblx0XHRcdHF1aWNrZG9tKEBlbC5wcmV2aW91c1NpYmxpbmcpXG5cdFx0XG5cdFx0J3ByZXZFbCc6IGdldDogKCktPlxuXHRcdFx0cXVpY2tkb20oQGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpXG5cdFx0XG5cdFx0J3ByZXZFbEFsbCc6IGdldDogKCktPlxuXHRcdFx0X2ZpbHRlckVsZW1lbnRzKEBwcmV2QWxsKVxuXG5cdFx0J3ByZXZBbGwnOiBnZXQ6ICgpLT5cblx0XHRcdHNpYmxpbmdzID0gW11cblx0XHRcdHByZXZTaWJsaW5nID0gcXVpY2tkb20oQGVsLnByZXZpb3VzU2libGluZylcblx0XHRcdHdoaWxlIHByZXZTaWJsaW5nXG5cdFx0XHRcdHNpYmxpbmdzLnB1c2gocHJldlNpYmxpbmcpXG5cdFx0XHRcdHByZXZTaWJsaW5nID0gcHJldlNpYmxpbmcucHJldlxuXG5cdFx0XHRyZXR1cm4gc2libGluZ3NcblxuXHRcdCdzaWJsaW5ncyc6IGdldDogKCktPlxuXHRcdFx0QHByZXZBbGwucmV2ZXJzZSgpLmNvbmNhdChAbmV4dEFsbClcblxuXHRcdCdlbGVtZW50U2libGluZ3MnOiBnZXQ6ICgpLT5cblx0XHRcdF9maWx0ZXJFbGVtZW50cyhAc2libGluZ3MpXG5cdFx0XG5cdFx0J2NoaWxkJzogZ2V0OiAoKS0+XG5cdFx0XHRAX2NoaWxkUmVmcyBvciBfZ2V0Q2hpbGRSZWZzKEApXG5cblx0XHQnY2hpbGRmJzogZ2V0OiAoKS0+XG5cdFx0XHRfZ2V0Q2hpbGRSZWZzKEAsIHRydWUpXG5cblx0XHQnZmlyc3RDaGlsZCc6IGdldDogKCktPlxuXHRcdFx0QGNoaWxkcmVuWzBdXG5cblx0XHQnbGFzdENoaWxkJzogZ2V0OiAoKS0+XG5cdFx0XHRjaGlsZHJlbiA9IEBjaGlsZHJlblxuXHRcdFx0Y2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoLTFdXG5cblx0XHQnaW5kZXgnOiBnZXQ6ICgpLT5cblx0XHRcdGlmIG5vdCBwYXJlbnQ9QHBhcmVudFxuXHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihAKVxuXG5cdFx0J2luZGV4VHlwZSc6IGdldDogKCktPlxuXHRcdFx0X2dldEluZGV4QnlQcm9wKEAsICd0eXBlJylcblxuXHRcdCdpbmRleFJlZic6IGdldDogKCktPlxuXHRcdFx0X2dldEluZGV4QnlQcm9wKEAsICdyZWYnKVxuXG5cblxucXVpY2tkb20ucXVlcnkgPSAodGFyZ2V0KS0+XG5cdHF1aWNrZG9tKGRvY3VtZW50KS5xdWVyeSh0YXJnZXQpXG5cbnF1aWNrZG9tLnF1ZXJ5QWxsID0gKHRhcmdldCktPlxuXHRxdWlja2RvbShkb2N1bWVudCkucXVlcnlBbGwodGFyZ2V0KVxuIiwiaW1wb3J0IElTIGZyb20gJy4uL2NoZWNrcydcbmltcG9ydCB7aW5jbHVkZXMsIHJlbW92ZUl0ZW0sIG5vcm1hbGl6ZUVsZW1lbnRBcmcgYXMgbm9ybWFsaXplRWxlbWVudH0gZnJvbSAnLi4vaGVscGVycydcbkRVTU1ZX0FSUkFZID0gW11cblxuXG5leHBvcnQgc3RhdGUgPSAodGFyZ2V0U3RhdGUsIHZhbHVlLCBidWJibGVzLCBzb3VyY2UpLT5cblx0aWYgYXJndW1lbnRzLmxlbmd0aCBpcyAwXG5cdFx0cmV0dXJuIEBfc3RhdGUuc2xpY2UoKVxuXHRcblx0aWYgYXJndW1lbnRzLmxlbmd0aCBpcyAxXG5cdFx0aWYgSVMuc3RyaW5nKHRhcmdldFN0YXRlKVxuXHRcdFx0cmV0dXJuIGluY2x1ZGVzKEBfc3RhdGUsIHRhcmdldFN0YXRlKVxuXHRcdFxuXHRcdGVsc2UgaWYgSVMub2JqZWN0KHRhcmdldFN0YXRlKVxuXHRcdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldFN0YXRlKVxuXHRcdFx0aSA9IC0xXG5cdFx0XHRAc3RhdGUoa2V5LCB0YXJnZXRTdGF0ZVtrZXldKSB3aGlsZSBrZXk9a2V5c1srK2ldXG5cdFx0XHRyZXR1cm4gQFxuXG5cdGVsc2UgaWYgQF9zdGF0ZVBpcGVUYXJnZXQgYW5kIHNvdXJjZSBpc250IEBcblx0XHRAX3N0YXRlUGlwZVRhcmdldC5zdGF0ZSh0YXJnZXRTdGF0ZSwgdmFsdWUsIGJ1YmJsZXMsIEApXG5cdFx0cmV0dXJuIEBcblx0XG5cdGVsc2UgaWYgSVMuc3RyaW5nKHRhcmdldFN0YXRlKVxuXHRcdHRhcmdldFN0YXRlID0gdGFyZ2V0U3RhdGUuc2xpY2UoMSkgaWYgdGFyZ2V0U3RhdGVbMF0gaXMgJyQnXG5cdFx0cmV0dXJuIEAgaWYgdGFyZ2V0U3RhdGUgaXMgJ2Jhc2UnXG5cdFx0ZGVzaXJlZFZhbHVlID0gISF2YWx1ZSAjIENvbnZlcnQgdGhlIHZhbHVlIHRvIGEgYm9vbGVhblxuXHRcdGFjdGl2ZVN0YXRlcyA9IEBfZ2V0QWN0aXZlU3RhdGVzKHRhcmdldFN0YXRlLCBmYWxzZSlcblx0XHRcblx0XHQjID09PT0gVG9nZ2xlIHN0eWxlcyBmb3IgdGhpcyBzdGF0ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRpZiBAc3RhdGUodGFyZ2V0U3RhdGUpIGlzbnQgZGVzaXJlZFZhbHVlXG5cdFx0XHRwcm9wID0gaWYgQHR5cGUgaXMgJ3RleHQnIHRoZW4gJ1RleHQnIGVsc2UgJ1N0eWxlJ1xuXHRcdFxuXHRcdFx0aWYgZGVzaXJlZFZhbHVlICNpcyBvblxuXHRcdFx0XHRAX3N0YXRlLnB1c2godGFyZ2V0U3RhdGUpXG5cdFx0XHRcdHRvZ2dsZSA9ICdPTidcblx0XHRcdGVsc2Vcblx0XHRcdFx0cmVtb3ZlSXRlbShAX3N0YXRlLCB0YXJnZXRTdGF0ZSlcblx0XHRcdFx0dG9nZ2xlID0gJ09GRidcblx0XHRcdFxuXHRcdFx0QFsnX3R1cm4nK3Byb3ArdG9nZ2xlXSh0YXJnZXRTdGF0ZSwgYWN0aXZlU3RhdGVzKVxuXHRcdFx0QGVtaXRQcml2YXRlIFwic3RhdGVDaGFuZ2U6I3t0YXJnZXRTdGF0ZX1cIiwgZGVzaXJlZFZhbHVlXG5cblxuXHRcdCMgPT09PSBQYXNzIHN0YXRlIHRvIHBhcmVudC9jaGlsZHJlbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRpZiBub3QgaW5jbHVkZXMoQG9wdGlvbnMudW5wYXNzYWJsZVN0YXRlcywgdGFyZ2V0U3RhdGUpXG5cdFx0XHRpZiBidWJibGVzXG5cdFx0XHRcdEBfcGFyZW50LnN0YXRlKHRhcmdldFN0YXRlLCB2YWx1ZSwgdHJ1ZSwgc291cmNlIG9yIEApIGlmIEBwYXJlbnRcblx0XHRcdGVsc2UgaWYgQG9wdGlvbnMucGFzc1N0YXRlVG9DaGlsZHJlblxuXHRcdFx0XHRjaGlsZC5zdGF0ZSh0YXJnZXRTdGF0ZSwgdmFsdWUsIGZhbHNlLCBzb3VyY2Ugb3IgQCkgZm9yIGNoaWxkIGluIEBfY2hpbGRyZW5cblx0XHRcblx0XHRyZXR1cm4gQFxuXG5cbmV4cG9ydCB0b2dnbGVTdGF0ZSA9ICh0YXJnZXRTdGF0ZSktPlxuXHRAc3RhdGUodGFyZ2V0U3RhdGUsICFAc3RhdGUodGFyZ2V0U3RhdGUpKVxuXG5cbmV4cG9ydCByZXNldFN0YXRlID0gKCktPlxuXHRmb3IgYWN0aXZlU3RhdGUgaW4gQF9zdGF0ZS5zbGljZSgpXG5cdFx0QHN0YXRlKGFjdGl2ZVN0YXRlLCBvZmYpXG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgcGlwZVN0YXRlID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBub3JtYWxpemVFbGVtZW50KHRhcmdldEVsKVxuXG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbCkgYW5kIHRhcmdldEVsIGlzbnQgQFxuXHRcdFx0QF9zdGF0ZVBpcGVUYXJnZXQgPSB0YXJnZXRFbFxuXHRcdFx0dGFyZ2V0RWwuc3RhdGUoYWN0aXZlU3RhdGUsIG9uKSBmb3IgYWN0aXZlU3RhdGUgaW4gQF9zdGF0ZVxuXG5cdGVsc2UgaWYgdGFyZ2V0RWwgaXMgZmFsc2Vcblx0XHRkZWxldGUgQF9zdGF0ZVBpcGVUYXJnZXRcblxuXHRyZXR1cm4gQFxuXG5cblxuXG5leHBvcnQgX2FwcGx5UmVnaXN0ZXJlZFN0eWxlID0gKHRhcmdldFN0eWxlLCBzdXBlcmlvclN0YXRlcywgaW5jbHVkZUJhc2UsIHNraXBGbnMpLT4gaWYgdGFyZ2V0U3R5bGVcblx0QGFkZENsYXNzKGNsYXNzTmFtZSkgZm9yIGNsYXNzTmFtZSBpbiB0YXJnZXRTdHlsZS5jbGFzc05hbWVcblx0XG5cdGlmIHRhcmdldFN0eWxlLmZucy5sZW5ndGggYW5kIG5vdCBza2lwRm5zXG5cdFx0c3VwZXJpb3JTdHlsZXMgPSBAX3Jlc29sdmVGblN0eWxlcyhzdXBlcmlvclN0YXRlcywgaW5jbHVkZUJhc2UpIGlmIHN1cGVyaW9yU3RhdGVzXG5cdFx0XG5cdFx0Zm9yIGVudHJ5IGluIHRhcmdldFN0eWxlLmZuc1xuXHRcdFx0QHN0eWxlKGVudHJ5WzBdLCBlbnRyeVsxXSkgdW5sZXNzIHN1cGVyaW9yU3R5bGVzIGFuZCBzdXBlcmlvclN0eWxlc1tlbnRyeVswXV1cblx0XG5cdHJldHVyblxuXG5cbmV4cG9ydCBfcmVtb3ZlUmVnaXN0ZXJlZFN0eWxlID0gKHRhcmdldFN0eWxlLCBzdXBlcmlvclN0YXRlcywgaW5jbHVkZUJhc2UpLT5cblx0QHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgZm9yIGNsYXNzTmFtZSBpbiB0YXJnZXRTdHlsZS5jbGFzc05hbWVcblxuXHRpZiB0YXJnZXRTdHlsZS5mbnMubGVuZ3RoXG5cdFx0c3VwZXJpb3JTdHlsZXMgPSBAX3Jlc29sdmVGblN0eWxlcyhzdXBlcmlvclN0YXRlcywgaW5jbHVkZUJhc2UpIGlmIHN1cGVyaW9yU3RhdGVzXG5cdFx0XG5cdFx0Zm9yIGVudHJ5IGluIHRhcmdldFN0eWxlLmZuc1xuXHRcdFx0cmVzZXRWYWx1ZSA9IHN1cGVyaW9yU3R5bGVzIGFuZCBzdXBlcmlvclN0eWxlc1tlbnRyeVswXV0gb3IgbnVsbFxuXHRcdFx0QHN0eWxlKGVudHJ5WzBdLCByZXNldFZhbHVlKVxuXG5cdHJldHVyblxuXG5cblxuXG5leHBvcnQgX3R1cm5TdHlsZU9OID0gKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpLT5cblx0c2tpcEZucyA9IEBvcHRpb25zLnN0eWxlQWZ0ZXJJbnNlcnQgYW5kIG5vdCBAX2luc2VydGVkXG5cdGlmIEBfc3R5bGVzW3RhcmdldFN0YXRlXVxuXHRcdEBfYXBwbHlSZWdpc3RlcmVkU3R5bGUoQF9zdHlsZXNbdGFyZ2V0U3RhdGVdLCBAX2dldFN1cGVyaW9yU3RhdGVzKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpLCBmYWxzZSwgc2tpcEZucylcblxuXG5cdGlmIEBfcHJvdmlkZWRTdGF0ZXNTaGFyZWRcblx0XHRzaGFyZWRTdGF0ZXMgPSBAX2dldFNoYXJlZFN0YXRlcyh0YXJnZXRTdGF0ZSlcblx0XHRcblx0XHRmb3Igc3RhdGVDaGFpbiBpbiBzaGFyZWRTdGF0ZXNcblx0XHRcdEBfc3RhdGVTaGFyZWQucHVzaChzdGF0ZUNoYWluLnN0cmluZykgdW5sZXNzIGluY2x1ZGVzKEBfc3RhdGVTaGFyZWQsIHN0YXRlQ2hhaW4uc3RyaW5nKVxuXHRcdFx0QF9hcHBseVJlZ2lzdGVyZWRTdHlsZShAX3N0eWxlc1tzdGF0ZUNoYWluLnN0cmluZ10sIG51bGwsIG51bGwsIHNraXBGbnMpXG5cblx0cmV0dXJuXG5cblxuZXhwb3J0IF90dXJuU3R5bGVPRkYgPSAodGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcyktPlxuXHRpZiBAX3N0eWxlc1t0YXJnZXRTdGF0ZV1cblx0XHRAX3JlbW92ZVJlZ2lzdGVyZWRTdHlsZShAX3N0eWxlc1t0YXJnZXRTdGF0ZV0sIGFjdGl2ZVN0YXRlcywgdHJ1ZSlcblxuXHRpZiBAX3Byb3ZpZGVkU3RhdGVzU2hhcmVkXG5cdFx0c2hhcmVkU3RhdGVzID0gQF9nZXRTaGFyZWRTdGF0ZXModGFyZ2V0U3RhdGUpXG5cdFx0cmV0dXJuIGlmIHNoYXJlZFN0YXRlcy5sZW5ndGggaXMgMFxuXG5cdFx0Zm9yIHN0YXRlQ2hhaW4gaW4gc2hhcmVkU3RhdGVzXG5cdFx0XHRyZW1vdmVJdGVtKEBfc3RhdGVTaGFyZWQsIHN0YXRlQ2hhaW4uc3RyaW5nKVxuXHRcdFx0dGFyZ2V0U3R5bGUgPSBAX3N0eWxlc1tzdGF0ZUNoYWluLnN0cmluZ11cblx0XHRcdFxuXHRcdFx0aWYgdGFyZ2V0U3R5bGUuZm5zLmxlbmd0aCBhbmQgQF9zdGF0ZVNoYXJlZC5sZW5ndGggYW5kIG5vdCBhY3RpdmVTaGFyZWRTdGF0ZXNcblx0XHRcdFx0YWN0aXZlU2hhcmVkU3RhdGVzID0gQF9zdGF0ZVNoYXJlZC5maWx0ZXIgKHN0YXRlKS0+IG5vdCBpbmNsdWRlcyhzdGF0ZSwgdGFyZ2V0U3RhdGUpXG5cdFx0XHRcdGFjdGl2ZVN0YXRlcyA9IGFjdGl2ZVN0YXRlcy5jb25jYXQoYWN0aXZlU2hhcmVkU3RhdGVzKVxuXHRcdFx0XG5cdFx0XHRAX3JlbW92ZVJlZ2lzdGVyZWRTdHlsZSh0YXJnZXRTdHlsZSwgYWN0aXZlU3RhdGVzLCB0cnVlKVxuXG5cdHJldHVyblxuXG5cblxuZXhwb3J0IF90dXJuVGV4dE9OID0gKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpLT5cblx0aWYgQF90ZXh0cyBhbmQgSVMuc3RyaW5nKHRhcmdldFRleHQgPSBAX3RleHRzW3RhcmdldFN0YXRlXSlcblx0XHRzdXBlcmlvclN0YXRlcyA9IEBfZ2V0U3VwZXJpb3JTdGF0ZXModGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcylcblx0XHRcblx0XHRAdGV4dCA9IHRhcmdldFRleHQgdW5sZXNzIHN1cGVyaW9yU3RhdGVzLmxlbmd0aFxuXHRyZXR1cm5cblxuXG5leHBvcnQgX3R1cm5UZXh0T0ZGID0gKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpLT5cblx0aWYgQF90ZXh0cyBhbmQgSVMuc3RyaW5nKHRhcmdldFRleHQgPSBAX3RleHRzW3RhcmdldFN0YXRlXSlcblx0XHRhY3RpdmVTdGF0ZXMgPSBhY3RpdmVTdGF0ZXMuZmlsdGVyIChzdGF0ZSktPiBzdGF0ZSBpc250IHRhcmdldFN0YXRlXG5cdFx0dGFyZ2V0VGV4dCA9IEBfdGV4dHNbYWN0aXZlU3RhdGVzW2FjdGl2ZVN0YXRlcy5sZW5ndGgtMV1dXG5cdFx0dGFyZ2V0VGV4dCA/PSBAX3RleHRzLmJhc2Vcblx0XHRcblx0XHRAdGV4dCA9IHRhcmdldFRleHRcblx0cmV0dXJuXG5cblxuXG5cblx0XG5cblxuXG5cbmV4cG9ydCBfZ2V0QWN0aXZlU3RhdGVzID0gKHN0YXRlVG9FeGNsdWRlLCBpbmNsdWRlU2hhcmVkU3RhdGVzPXRydWUpLT5cblx0cmV0dXJuIERVTU1ZX0FSUkFZIGlmIG5vdCBAX3Byb3ZpZGVkU3RhdGVzXG5cdGFjdGl2ZVN0YXRlcyA9IHBsYWluU3RhdGVzID0gQF9zdGF0ZVxuXHRpZiBzdGF0ZVRvRXhjbHVkZVxuXHRcdHBsYWluU3RhdGVzID0gW11cblx0XHRwbGFpblN0YXRlcy5wdXNoKHN0YXRlKSBmb3Igc3RhdGUgaW4gYWN0aXZlU3RhdGVzIHdoZW4gc3RhdGUgaXNudCBzdGF0ZVRvRXhjbHVkZVxuXHRcblx0aWYgbm90IGluY2x1ZGVTaGFyZWRTdGF0ZXMgb3Igbm90IEBfcHJvdmlkZWRTdGF0ZXNTaGFyZWRcblx0XHRyZXR1cm4gcGxhaW5TdGF0ZXNcblx0ZWxzZVxuXHRcdHJldHVybiBwbGFpblN0YXRlcy5jb25jYXQoQF9zdGF0ZVNoYXJlZClcblxuXG5leHBvcnQgX2dldFN1cGVyaW9yU3RhdGVzID0gKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpLT5cblx0dGFyZ2V0U3RhdGVJbmRleCA9IEBfcHJvdmlkZWRTdGF0ZXMuaW5kZXhPZih0YXJnZXRTdGF0ZSlcblx0cmV0dXJuIERVTU1ZX0FSUkFZIGlmIHRhcmdldFN0YXRlSW5kZXggaXMgQF9wcm92aWRlZFN0YXRlcy5sZW5ndGggLSAxXG5cdFxuXHRzdXBlcmlvciA9IFtdXG5cdGZvciBjYW5kaWRhdGUgaW4gYWN0aXZlU3RhdGVzXG5cdFx0c3VwZXJpb3IucHVzaChjYW5kaWRhdGUpIGlmIEBfcHJvdmlkZWRTdGF0ZXMuaW5kZXhPZihjYW5kaWRhdGUpID4gdGFyZ2V0U3RhdGVJbmRleFxuXG5cdHJldHVybiBzdXBlcmlvclxuXG5cbmV4cG9ydCBfZ2V0U2hhcmVkU3RhdGVzID0gKHRhcmdldFN0YXRlKS0+XG5cdGFjdGl2ZVN0YXRlcyA9IEBfc3RhdGVcblx0c2hhcmVkU3RhdGVzID0gW11cblxuXHRmb3Igc3RhdGVDaGFpbiBpbiBAX3Byb3ZpZGVkU3RhdGVzU2hhcmVkXG5cdFx0c2hhcmVkU3RhdGVzLnB1c2goc3RhdGVDaGFpbikgaWYgc3RhdGVDaGFpbi5pbmNsdWRlcyh0YXJnZXRTdGF0ZSkgYW5kIHN0YXRlQ2hhaW4uaXNBcHBsaWNhYmxlKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpXG5cblx0cmV0dXJuIHNoYXJlZFN0YXRlc1xuXG5cbmV4cG9ydCBfcmVzb2x2ZUZuU3R5bGVzID0gKHN0YXRlcywgaW5jbHVkZUJhc2UpLT5cblx0c3RhdGVzID0gWydiYXNlJ10uY29uY2F0KHN0YXRlcykgaWYgaW5jbHVkZUJhc2Vcblx0b3V0cHV0ID0ge31cblx0XG5cdGZvciBzdGF0ZSBpbiBzdGF0ZXMgd2hlbiBAX3N0eWxlc1tzdGF0ZV0gYW5kIEBfc3R5bGVzW3N0YXRlXS5mbnMubGVuZ3RoXG5cdFx0b3V0cHV0W2VudHJ5WzBdXSA9IGVudHJ5WzFdIGZvciBlbnRyeSBpbiBAX3N0eWxlc1tzdGF0ZV0uZm5zXG5cblx0cmV0dXJuIG91dHB1dFxuXG5cbmV4cG9ydCBkZWZhdWx0IChRdWlja0VsZW1lbnQpLT5cblx0UXVpY2tFbGVtZW50OjpzdGF0ZSA9IHN0YXRlXG5cdFF1aWNrRWxlbWVudDo6dG9nZ2xlU3RhdGUgPSB0b2dnbGVTdGF0ZVxuXHRRdWlja0VsZW1lbnQ6OnJlc2V0U3RhdGUgPSByZXNldFN0YXRlXG5cdFF1aWNrRWxlbWVudDo6cGlwZVN0YXRlID0gcGlwZVN0YXRlXG5cdFF1aWNrRWxlbWVudDo6X2FwcGx5UmVnaXN0ZXJlZFN0eWxlID0gX2FwcGx5UmVnaXN0ZXJlZFN0eWxlXG5cdFF1aWNrRWxlbWVudDo6X3JlbW92ZVJlZ2lzdGVyZWRTdHlsZSA9IF9yZW1vdmVSZWdpc3RlcmVkU3R5bGVcblx0UXVpY2tFbGVtZW50OjpfdHVyblN0eWxlT04gPSBfdHVyblN0eWxlT05cblx0UXVpY2tFbGVtZW50OjpfdHVyblN0eWxlT0ZGID0gX3R1cm5TdHlsZU9GRlxuXHRRdWlja0VsZW1lbnQ6Ol90dXJuVGV4dE9OID0gX3R1cm5UZXh0T05cblx0UXVpY2tFbGVtZW50OjpfdHVyblRleHRPRkYgPSBfdHVyblRleHRPRkZcblx0UXVpY2tFbGVtZW50OjpfZ2V0QWN0aXZlU3RhdGVzID0gX2dldEFjdGl2ZVN0YXRlc1xuXHRRdWlja0VsZW1lbnQ6Ol9nZXRTdXBlcmlvclN0YXRlcyA9IF9nZXRTdXBlcmlvclN0YXRlc1xuXHRRdWlja0VsZW1lbnQ6Ol9nZXRTaGFyZWRTdGF0ZXMgPSBfZ2V0U2hhcmVkU3RhdGVzXG5cdFF1aWNrRWxlbWVudDo6X3Jlc29sdmVGblN0eWxlcyA9IF9yZXNvbHZlRm5TdHlsZXNcblxuXG5cblxuXG5cbiIsImltcG9ydCBxdWlja2RvbSBmcm9tICcuLi9xdWlja2RvbSdcbmltcG9ydCBJUyBmcm9tICcuLi9jaGVja3MnXG5pbXBvcnQge2luY2x1ZGVzLCBub3JtYWxpemVFbGVtZW50QXJnIGFzIG5vcm1hbGl6ZUVsZW1lbnR9IGZyb20gJy4uL2hlbHBlcnMnXG5pbXBvcnQgZXh0ZW5kIGZyb20gJ3NtYXJ0LWV4dGVuZCdcblxuZXhwb3J0IHRvVGVtcGxhdGUgPSAoKS0+XG5cdHF1aWNrZG9tLnRlbXBsYXRlKEApXG5cblxuZXhwb3J0IGNsb25lID0gKCktPlxuXHRlbENsb25lID0gQGVsLmNsb25lTm9kZShmYWxzZSlcblx0b3B0aW9ucyA9IGV4dGVuZC5jbG9uZShAb3B0aW9ucywge2V4aXN0aW5nOmVsQ2xvbmV9KVxuXHRcblx0bmV3RWwgPSBuZXcgQGNvbnN0cnVjdG9yKEB0eXBlLCBvcHRpb25zKVxuXHRuZXdFbC5zdGF0ZShhY3RpdmVTdGF0ZSwgb24pIGZvciBhY3RpdmVTdGF0ZSBpbiBAX3N0YXRlXG5cdG5ld0VsLmFwcGVuZChjaGlsZC5jbG9uZSgpKSBmb3IgY2hpbGQgaW4gQGNoaWxkcmVuXG5cdGZvciBldmVudE5hbWUsIGNhbGxiYWNrcyBvZiBAX2V2ZW50Q2FsbGJhY2tzXG5cdFx0bmV3RWwub24oZXZlbnROYW1lLCBjYWxsYmFjaykgZm9yIGNhbGxiYWNrIGluIGNhbGxiYWNrc1xuXHRcblx0cmV0dXJuIG5ld0VsXG5cblxuZXhwb3J0IGFwcGVuZCA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblx0XHRcblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKVxuXHRcdFx0cHJldlBhcmVudCA9IHRhcmdldEVsLnBhcmVudFxuXHRcdFx0cHJldlBhcmVudC5fcmVtb3ZlQ2hpbGQodGFyZ2V0RWwpIGlmIHByZXZQYXJlbnRcblx0XHRcdEBfY2hpbGRyZW4ucHVzaCh0YXJnZXRFbClcblx0XHRcdEBlbC5hcHBlbmRDaGlsZCh0YXJnZXRFbC5lbClcblx0XHRcdHRhcmdldEVsLl9yZWZyZXNoUGFyZW50KCkgIyBGb3JjZSByZS1mcmVzaCB0YXJnZXRFbC5fcGFyZW50IHZhbHVlIHRvIHRyaWdnZXIgaW5zZXJ0ZWQgY2FsbGJhY2tcblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBhcHBlbmRUbyA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblx0XHRcblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKVxuXHRcdFx0dGFyZ2V0RWwuYXBwZW5kKEApXG5cdFxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBwcmVwZW5kID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBub3JtYWxpemVFbGVtZW50KHRhcmdldEVsKVxuXHRcdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHRwcmV2UGFyZW50ID0gdGFyZ2V0RWwucGFyZW50XG5cdFx0XHRwcmV2UGFyZW50Ll9yZW1vdmVDaGlsZCh0YXJnZXRFbCkgaWYgcHJldlBhcmVudFxuXHRcdFx0QF9jaGlsZHJlbi51bnNoaWZ0KHRhcmdldEVsKVxuXHRcdFx0QGVsLmluc2VydEJlZm9yZSh0YXJnZXRFbC5lbCwgQGVsLmZpcnN0Q2hpbGQpXG5cdFx0XHR0YXJnZXRFbC5fcmVmcmVzaFBhcmVudCgpICMgRm9yY2UgcmUtZnJlc2ggdGFyZ2V0RWwuX3BhcmVudCB2YWx1ZSB0byB0cmlnZ2VyIGluc2VydGVkIGNhbGxiYWNrXG5cdFxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBwcmVwZW5kVG8gPSAodGFyZ2V0RWwpLT5cblx0aWYgdGFyZ2V0RWxcblx0XHR0YXJnZXRFbCA9IG5vcm1hbGl6ZUVsZW1lbnQodGFyZ2V0RWwpXG5cdFx0XG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbClcblx0XHRcdHRhcmdldEVsLnByZXBlbmQoQClcblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBhZnRlciA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbCBhbmQgQHBhcmVudFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHRteUluZGV4ID0gQHBhcmVudC5fY2hpbGRyZW4uaW5kZXhPZihAKVxuXHRcdFx0QHBhcmVudC5fY2hpbGRyZW4uc3BsaWNlKG15SW5kZXgrMSwgMCwgdGFyZ2V0RWwpXG5cdFx0XHRAZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFyZ2V0RWwuZWwsIEBlbC5uZXh0U2libGluZylcblx0XHRcdHRhcmdldEVsLl9yZWZyZXNoUGFyZW50KCkgIyBGb3JjZSByZS1mcmVzaCB0YXJnZXRFbC5fcGFyZW50IHZhbHVlIHRvIHRyaWdnZXIgaW5zZXJ0ZWQgY2FsbGJhY2tcblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBpbnNlcnRBZnRlciA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblx0XHRcblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKVxuXHRcdFx0dGFyZ2V0RWwuYWZ0ZXIoQClcblx0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IGJlZm9yZSA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbCBhbmQgQHBhcmVudFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHRteUluZGV4ID0gQHBhcmVudC5fY2hpbGRyZW4uaW5kZXhPZihAKVxuXHRcdFx0QHBhcmVudC5fY2hpbGRyZW4uc3BsaWNlKG15SW5kZXgsIDAsIHRhcmdldEVsKVxuXHRcdFx0QGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhcmdldEVsLmVsLCBAZWwpXG5cdFx0XHR0YXJnZXRFbC5fcmVmcmVzaFBhcmVudCgpICMgRm9yY2UgcmUtZnJlc2ggdGFyZ2V0RWwuX3BhcmVudCB2YWx1ZSB0byB0cmlnZ2VyIGluc2VydGVkIGNhbGxiYWNrXG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgaW5zZXJ0QmVmb3JlID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBub3JtYWxpemVFbGVtZW50KHRhcmdldEVsKVxuXHRcdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHR0YXJnZXRFbC5iZWZvcmUoQClcblx0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IGRldGFjaCA9ICgpLT5cblx0QHBhcmVudD8uX3JlbW92ZUNoaWxkKEApXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHJlbW92ZSA9ICgpLT5cblx0QGRldGFjaCgpXG5cdEByZXNldFN0YXRlKClcblx0aWYgQF9ldmVudENhbGxiYWNrc1xuXHRcdEBfZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXS5sZW5ndGggPSAwIGZvciBldmVudE5hbWUgb2YgQF9ldmVudENhbGxiYWNrc1xuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBlbXB0eSA9ICgpLT5cblx0QF9yZW1vdmVDaGlsZChjaGlsZCkgZm9yIGNoaWxkIGluIEBjaGlsZHJlbi5zbGljZSgpXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHdyYXAgPSAodGFyZ2V0RWwpLT5cblx0aWYgdGFyZ2V0RWxcblx0XHR0YXJnZXRFbCA9IG5vcm1hbGl6ZUVsZW1lbnQodGFyZ2V0RWwpXG5cdFx0Y3VycmVudFBhcmVudCA9IEBwYXJlbnRcblxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpIGFuZCB0YXJnZXRFbCBpc250IEAgYW5kIHRhcmdldEVsIGlzbnQgQHBhcmVudFxuXHRcdFx0aWYgY3VycmVudFBhcmVudFxuXHRcdFx0XHRjdXJyZW50UGFyZW50Ll9yZW1vdmVDaGlsZChALCBpZiBub3QgdGFyZ2V0RWwucGFyZW50IHRoZW4gdGFyZ2V0RWwpXG5cdFx0XHRcblx0XHRcdHRhcmdldEVsLmFwcGVuZChAKVxuXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHVud3JhcCA9ICgpLT5cblx0cGFyZW50ID0gQHBhcmVudFxuXHRpZiBwYXJlbnRcblx0XHRwYXJlbnRDaGlsZHJlbiA9IHF1aWNrZG9tLmJhdGNoKHBhcmVudC5jaGlsZHJlbilcblx0XHRwYXJlbnRTaWJsaW5nID0gcGFyZW50Lm5leHRcblx0XHRncmFuZFBhcmVudCA9IHBhcmVudC5wYXJlbnRcblx0XHRpZiBncmFuZFBhcmVudFxuXHRcdFx0cGFyZW50LmRldGFjaCgpXG5cblx0XHRcdGlmIHBhcmVudFNpYmxpbmdcblx0XHRcdFx0cGFyZW50Q2hpbGRyZW4uaW5zZXJ0QmVmb3JlKHBhcmVudFNpYmxpbmcpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHBhcmVudENoaWxkcmVuLmFwcGVuZFRvKGdyYW5kUGFyZW50KVxuXHRcblx0cmV0dXJuIEBcblxuXG5leHBvcnQgcmVwbGFjZSA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblx0XG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbCkgYW5kIHRhcmdldEVsIGlzbnQgQFxuXHRcdFx0dGFyZ2V0RWwuZGV0YWNoKClcblx0XHRcdEBwYXJlbnQ/Ll9yZW1vdmVDaGlsZChALCB0YXJnZXRFbClcblx0XHRcdHRhcmdldEVsLl9yZWZyZXNoUGFyZW50KCkgIyBGb3JjZSByZS1mcmVzaCB0YXJnZXRFbC5fcGFyZW50IHZhbHVlIHRvIHRyaWdnZXIgaW5zZXJ0ZWQgY2FsbGJhY2tcblx0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IGhhc0NsYXNzID0gKHRhcmdldCktPlxuXHRpbmNsdWRlcyhAY2xhc3NMaXN0LCB0YXJnZXQpXG5cblxuZXhwb3J0IGFkZENsYXNzID0gKHRhcmdldCktPlxuXHRjbGFzc0xpc3QgPSBAY2xhc3NMaXN0XG5cdHRhcmdldEluZGV4ID0gY2xhc3NMaXN0LmluZGV4T2YodGFyZ2V0KVxuXG5cdGlmIHRhcmdldEluZGV4IGlzIC0xXG5cdFx0Y2xhc3NMaXN0LnB1c2godGFyZ2V0KVxuXHRcdEBjbGFzc05hbWUgPSBpZiBjbGFzc0xpc3QubGVuZ3RoID4gMSB0aGVuIGNsYXNzTGlzdC5qb2luKCcgJykgZWxzZSBjbGFzc0xpc3RbMF1cblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCByZW1vdmVDbGFzcyA9ICh0YXJnZXQpLT5cblx0Y2xhc3NMaXN0ID0gQGNsYXNzTGlzdFxuXHR0YXJnZXRJbmRleCA9IGNsYXNzTGlzdC5pbmRleE9mKHRhcmdldClcblx0XG5cdGlmIHRhcmdldEluZGV4IGlzbnQgLTFcblx0XHRjbGFzc0xpc3Quc3BsaWNlKHRhcmdldEluZGV4LCAxKVxuXHRcdEBjbGFzc05hbWUgPSBpZiBjbGFzc0xpc3QubGVuZ3RoIHRoZW4gY2xhc3NMaXN0LmpvaW4oJyAnKSBlbHNlICcnXG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgdG9nZ2xlQ2xhc3MgPSAodGFyZ2V0KS0+XG5cdGlmIEBoYXNDbGFzcyh0YXJnZXQpXG5cdFx0QHJlbW92ZUNsYXNzKHRhcmdldClcblx0ZWxzZVxuXHRcdEBhZGRDbGFzcyh0YXJnZXQpXG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgc2V0UmVmID0gKHRhcmdldCktPlxuXHRAcmVmID0gQG9wdGlvbnMucmVmID0gdGFyZ2V0XG5cdEBhdHRyICdkYXRhLXJlZicsIHRhcmdldFxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBfcmVmcmVzaFBhcmVudCA9ICgpLT5cblx0QHBhcmVudFxuXG5cbmV4cG9ydCBfcmVtb3ZlQ2hpbGQgPSAodGFyZ2V0Q2hpbGQsIHJlcGxhY2VtZW50Q2hpbGQpLT5cblx0aW5kZXhPZkNoaWxkID0gQGNoaWxkcmVuLmluZGV4T2YodGFyZ2V0Q2hpbGQpXG5cdGlmIGluZGV4T2ZDaGlsZCBpc250IC0xXG5cdFx0aWYgcmVwbGFjZW1lbnRDaGlsZFxuXHRcdFx0QGVsLnJlcGxhY2VDaGlsZChyZXBsYWNlbWVudENoaWxkLmVsLCB0YXJnZXRDaGlsZC5lbClcblx0XHRcdEBfY2hpbGRyZW4uc3BsaWNlKGluZGV4T2ZDaGlsZCwgMSwgcmVwbGFjZW1lbnRDaGlsZClcblx0XHRlbHNlXG5cdFx0XHRAZWwucmVtb3ZlQ2hpbGQodGFyZ2V0Q2hpbGQuZWwpXG5cdFx0XHRAX2NoaWxkcmVuLnNwbGljZShpbmRleE9mQ2hpbGQsIDEpXG5cdFx0XG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIFF1aWNrRWxlbWVudDo6LFxuXHRcdCdodG1sJzpcblx0XHRcdGdldDogKCktPiBAZWwuaW5uZXJIVE1MXG5cdFx0XHRzZXQ6IChuZXdWYWx1ZSktPiBAZWwuaW5uZXJIVE1MID0gbmV3VmFsdWVcblx0XHRcblx0XHQndGV4dCc6XG5cdFx0XHRnZXQ6ICgpLT4gQGVsLnRleHRDb250ZW50XG5cdFx0XHRzZXQ6IChuZXdWYWx1ZSktPiBAZWwudGV4dENvbnRlbnQgPSBuZXdWYWx1ZVxuXG5cdFx0J2NsYXNzTmFtZSc6XG5cdFx0XHRnZXQ6ICgpLT4gaWYgQHN2ZyB0aGVuIChAYXR0cignY2xhc3MnKSBvciAnJykgZWxzZSBAcmF3LmNsYXNzTmFtZVxuXHRcdFx0c2V0OiAobmV3VmFsdWUpLT4gaWYgQHN2ZyB0aGVuIEBhdHRyKCdjbGFzcycsIG5ld1ZhbHVlKSBlbHNlIEByYXcuY2xhc3NOYW1lID0gbmV3VmFsdWVcblxuXHRcdCdjbGFzc0xpc3QnOlxuXHRcdFx0Z2V0OiAoKS0+XG5cdFx0XHRcdGxpc3QgPSBAY2xhc3NOYW1lLnNwbGl0KC9cXHMrLylcblx0XHRcdFx0bGlzdC5wb3AoKSBpZiBsaXN0W2xpc3QubGVuZ3RoLTFdIGlzICcnXG5cdFx0XHRcdGxpc3Quc2hpZnQoKSBpZiBsaXN0WzBdIGlzICcnXG5cdFx0XHRcdHJldHVybiBsaXN0XG5cblxuXG5cdFF1aWNrRWxlbWVudDo6dG9UZW1wbGF0ZSA9IHRvVGVtcGxhdGVcblx0UXVpY2tFbGVtZW50OjpjbG9uZSA9IGNsb25lXG5cdFF1aWNrRWxlbWVudDo6YXBwZW5kID0gYXBwZW5kXG5cdFF1aWNrRWxlbWVudDo6YXBwZW5kVG8gPSBhcHBlbmRUb1xuXHRRdWlja0VsZW1lbnQ6OnByZXBlbmQgPSBwcmVwZW5kXG5cdFF1aWNrRWxlbWVudDo6cHJlcGVuZFRvID0gcHJlcGVuZFRvXG5cdFF1aWNrRWxlbWVudDo6YWZ0ZXIgPSBhZnRlclxuXHRRdWlja0VsZW1lbnQ6Omluc2VydEFmdGVyID0gaW5zZXJ0QWZ0ZXJcblx0UXVpY2tFbGVtZW50OjpiZWZvcmUgPSBiZWZvcmVcblx0UXVpY2tFbGVtZW50OjppbnNlcnRCZWZvcmUgPSBpbnNlcnRCZWZvcmVcblx0UXVpY2tFbGVtZW50OjpkZXRhY2ggPSBkZXRhY2hcblx0UXVpY2tFbGVtZW50OjpyZW1vdmUgPSByZW1vdmVcblx0UXVpY2tFbGVtZW50OjplbXB0eSA9IGVtcHR5XG5cdFF1aWNrRWxlbWVudDo6d3JhcCA9IHdyYXBcblx0UXVpY2tFbGVtZW50Ojp1bndyYXAgPSB1bndyYXBcblx0UXVpY2tFbGVtZW50OjpyZXBsYWNlID0gcmVwbGFjZVxuXHRRdWlja0VsZW1lbnQ6Omhhc0NsYXNzID0gaGFzQ2xhc3Ncblx0UXVpY2tFbGVtZW50OjphZGRDbGFzcyA9IGFkZENsYXNzXG5cdFF1aWNrRWxlbWVudDo6cmVtb3ZlQ2xhc3MgPSByZW1vdmVDbGFzc1xuXHRRdWlja0VsZW1lbnQ6OnRvZ2dsZUNsYXNzID0gdG9nZ2xlQ2xhc3Ncblx0UXVpY2tFbGVtZW50OjpzZXRSZWYgPSBzZXRSZWZcblx0UXVpY2tFbGVtZW50OjpfcmVmcmVzaFBhcmVudCA9IF9yZWZyZXNoUGFyZW50XG5cdFF1aWNrRWxlbWVudDo6X3JlbW92ZUNoaWxkID0gX3JlbW92ZUNoaWxkXG5cblxuXG4iLCJpbXBvcnQgSVMgZnJvbSAnLi4vY2hlY2tzJ1xuaW1wb3J0IGV4dGVuZCBmcm9tICdzbWFydC1leHRlbmQnXG5cbmV4cG9ydCB1cGRhdGVPcHRpb25zID0gKG9wdGlvbnMpLT5cblx0aWYgSVMub2JqZWN0KG9wdGlvbnMpIFxuXHRcdEBvcHRpb25zID0gb3B0aW9uc1xuXHRcdEBfbm9ybWFsaXplT3B0aW9ucygpXG5cdFx0QF9hcHBseU9wdGlvbnMoQG9wdGlvbnMpXG5cdFxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCB1cGRhdGVTdGF0ZVN0eWxlcyA9IChzdHlsZXMpLT5cblx0aWYgSVMub2JqZWN0UGxhaW4oc3R5bGVzKVxuXHRcdGV4dGVuZC5kZWVwLmNvbmNhdCBALCBwYXJzZWQgPSBAX3BhcnNlU3R5bGVzKHN0eWxlcylcblxuXHRcdGlmIHBhcnNlZC5fc3R5bGVzXG5cdFx0XHR1cGRhdGVkU3RhdGVzID0gT2JqZWN0LmtleXMocGFyc2VkLl9zdHlsZXMpXG5cdFx0XHRcblx0XHRcdGZvciBzdGF0ZSBpbiB1cGRhdGVkU3RhdGVzIHdoZW4gQHN0YXRlKHN0YXRlKSBvciBzdGF0ZSBpcyAnYmFzZSdcblx0XHRcdFx0QF9hcHBseVJlZ2lzdGVyZWRTdHlsZShAX3N0eWxlc1tzdGF0ZV0sIEBfZ2V0QWN0aXZlU3RhdGVzKHN0YXRlKSwgZmFsc2UpXG5cdFx0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHVwZGF0ZVN0YXRlVGV4dHMgPSAodGV4dHMpLT5cblx0aWYgSVMub2JqZWN0UGxhaW4odGV4dHMpXG5cdFx0ZXh0ZW5kLmRlZXAuY29uY2F0IEAsIHBhcnNlZCA9IEBfcGFyc2VUZXh0cyh0ZXh0cylcblx0XG5cdHJldHVybiBAXG5cblxuXG5leHBvcnQgYXBwbHlEYXRhID0gKGRhdGEsIHBhc3NUaHJvdWdoKS0+XG5cdGlmIEBvcHRpb25zLnBhc3NEYXRhVG9DaGlsZHJlbiBhbmQgQF9jaGlsZHJlbi5sZW5ndGggYW5kIChwYXNzVGhyb3VnaCA/PSB0cnVlKVxuXHRcdGNoaWxkLmFwcGx5RGF0YShkYXRhKSBmb3IgY2hpbGQgaW4gQF9jaGlsZHJlblxuXG5cdGlmIGNvbXB1dGVycyA9IEBvcHRpb25zLmNvbXB1dGVyc1xuXHRcdGRlZmF1bHRzID0gQG9wdGlvbnMuZGVmYXVsdHNcblx0XHRrZXlzID0gT2JqZWN0LmtleXMoY29tcHV0ZXJzKVxuXHRcdFxuXHRcdGZvciBrZXkgaW4ga2V5c1xuXHRcdFx0aWYgQG9wdGlvbnMuaW52b2tlQ29tcHV0ZXJzT25jZVxuXHRcdFx0XHRjb250aW51ZSBpZiBAX2ludm9rZWRDb21wdXRlcnNba2V5XVxuXHRcdFx0XHRAX2ludm9rZWRDb21wdXRlcnNba2V5XSA9IDFcblx0XHRcdFxuXHRcdFx0aWYgZGF0YSBhbmQgZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpXG5cdFx0XHRcdEBfcnVuQ29tcHV0ZXIoa2V5LCBkYXRhW2tleV0sIGRhdGEpXG5cdFx0XHRcblx0XHRcdGVsc2UgaWYgZGVmYXVsdHMgYW5kIGRlZmF1bHRzLmhhc093blByb3BlcnR5KGtleSlcblx0XHRcdFx0QF9ydW5Db21wdXRlcihrZXksIGRlZmF1bHRzW2tleV0sIGRhdGEpXG5cdFxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBfcnVuQ29tcHV0ZXIgPSAoY29tcHV0ZXIsIGFyZywgZGF0YSktPlxuXHRAb3B0aW9ucy5jb21wdXRlcnNbY29tcHV0ZXJdLmNhbGwoQCwgYXJnLCBkYXRhKVxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdFF1aWNrRWxlbWVudDo6dXBkYXRlT3B0aW9ucyA9IHVwZGF0ZU9wdGlvbnNcblx0UXVpY2tFbGVtZW50Ojp1cGRhdGVTdGF0ZVN0eWxlcyA9IHVwZGF0ZVN0YXRlU3R5bGVzXG5cdFF1aWNrRWxlbWVudDo6dXBkYXRlU3RhdGVUZXh0cyA9IHVwZGF0ZVN0YXRlVGV4dHNcblx0UXVpY2tFbGVtZW50OjphcHBseURhdGEgPSBhcHBseURhdGFcblx0UXVpY2tFbGVtZW50OjpfcnVuQ29tcHV0ZXIgPSBfcnVuQ29tcHV0ZXJcblxuXG5cbiIsImltcG9ydCBJUyBmcm9tICcuLi9jaGVja3MnXG5cbmV4cG9ydCBhdHRyID0gKHRhcmdldCwgbmV3VmFsdWUpLT5cblx0aWYgYXJndW1lbnRzLmxlbmd0aCBpcyAxXG5cdFx0aWYgdHlwZW9mIHRhcmdldCBpcyAnc3RyaW5nJ1xuXHRcdFx0cmV0dXJuIEBlbC5nZXRBdHRyaWJ1dGUodGFyZ2V0KVxuXHRcblx0XHRpZiBJUy5vYmplY3QodGFyZ2V0KVxuXHRcdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldCk7IGkgPSAtMVxuXHRcdFx0QGF0dHIoa2V5LCB0YXJnZXRba2V5XSkgd2hpbGUga2V5PWtleXNbKytpXVxuXG5cdGVsc2UgaWYgbmV3VmFsdWUgaXMgbnVsbFxuXHRcdHJldHVybiBAZWwucmVtb3ZlQXR0cmlidXRlKHRhcmdldClcblxuXHRlbHNlXG5cdFx0QGVsLnNldEF0dHJpYnV0ZSh0YXJnZXQsIG5ld1ZhbHVlKVxuXHRcblx0cmV0dXJuIEBcblxuXG5cbmV4cG9ydCBwcm9wID0gKHRhcmdldCwgbmV3VmFsdWUpLT5cblx0aWYgYXJndW1lbnRzLmxlbmd0aCBpcyAxXG5cdFx0aWYgdHlwZW9mIHRhcmdldCBpcyAnc3RyaW5nJ1xuXHRcdFx0cmV0dXJuIEBlbFt0YXJnZXRdXG5cdFxuXHRcdGlmIElTLm9iamVjdCh0YXJnZXQpXG5cdFx0XHRrZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTsgaSA9IC0xXG5cdFx0XHRAcHJvcChrZXksIHRhcmdldFtrZXldKSB3aGlsZSBrZXk9a2V5c1srK2ldXG5cdFxuXHRlbHNlXG5cdFx0QGVsW3RhcmdldF0gPSBuZXdWYWx1ZVxuXHRcdFxuXHRyZXR1cm4gQFxuXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tFbGVtZW50KS0+XG5cdFF1aWNrRWxlbWVudDo6YXR0ciA9IGF0dHJcblx0UXVpY2tFbGVtZW50Ojpwcm9wID0gcHJvcCIsImltcG9ydCBleHRlbmQgZnJvbSAnc21hcnQtZXh0ZW5kJ1xuaW1wb3J0IHtlbGVtZW50IGFzIEFMTE9XRURfT1BUSU9OU30gZnJvbSAnLi4vYWxsb3dlZE9wdGlvbnMnXG5zdmdOYW1lc3BhY2UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrRWxlbWVudFxuXHRAY291bnQgPSAwXG5cdGNvbnN0cnVjdG9yOiAoQHR5cGUsIEBvcHRpb25zKS0+XG5cdFx0UXVpY2tFbGVtZW50LmNvdW50Kytcblx0XHRAc3ZnID0gdHJ1ZSBpZiBAdHlwZVswXSBpcyAnKidcblx0XHRAZWwgPSBAb3B0aW9ucy5leGlzdGluZyBvclxuXHRcdFx0aWYgQHR5cGUgaXMgJ3RleHQnIHRoZW4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaWYgdHlwZW9mIEBvcHRpb25zLnRleHQgaXMgJ3N0cmluZycgdGhlbiBAb3B0aW9ucy50ZXh0IGVsc2UgJycpXG5cdFx0XHRlbHNlIGlmIEBzdmcgdGhlbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBAdHlwZS5zbGljZSgxKSlcblx0XHRcdGVsc2UgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChAdHlwZSlcblxuXHRcdGlmIEB0eXBlIGlzICd0ZXh0J1xuXHRcdFx0QGFwcGVuZCA9IEBwcmVwZW5kID0gQGF0dHIgPSAoKS0+XG5cdFx0XHQjIEBfdGV4dHMgPSB7fSAjIGRlZmluZWQgY29uZGl0aW9uYWxseVxuXG5cdFx0QF9wYXJlbnQgPSBudWxsXG5cdFx0QF9zdHlsZXMgPSB7fVxuXHRcdEBfc3RhdGUgPSBbXVxuXHRcdEBfY2hpbGRyZW4gPSBbXVxuXHRcdCMgQF9wcm92aWRlZFN0YXRlcyA9IFtdXHRcdFx0XHQjIGRlZmluZWQgY29uZGl0aW9uYWxseVxuXHRcdCMgQF9wcm92aWRlZFN0YXRlc1NoYXJlZCA9IFtdXHRcdCMgZGVmaW5lZCBjb25kaXRpb25hbGx5XG5cdFx0IyBAX2V2ZW50Q2FsbGJhY2tzID0ge19fcmVmczp7fX1cdCMgZGVmaW5lZCBjb25kaXRpb25hbGx5XG5cdFx0XG5cdFx0QF9ub3JtYWxpemVPcHRpb25zKClcblx0XHRAX2FwcGx5T3B0aW9ucygpXG5cdFx0QF9hdHRhY2hTdGF0ZUV2ZW50cygpXG5cdFx0QF9wcm94eVBhcmVudCgpXG5cdFx0QF9yZWZyZXNoUGFyZW50KCkgaWYgQG9wdGlvbnMuZXhpc3Rpbmdcblx0XHRAZWwuX3F1aWNrRWxlbWVudCA9IEBcblxuXG5cdHRvSlNPTjogKCktPlxuXHRcdG91dHB1dCA9IFtAdHlwZSwgZXh0ZW5kLmNsb25lLmtleXMoQUxMT1dFRF9PUFRJT05TKShAb3B0aW9ucyldXG5cdFx0Y2hpbGRyZW4gPSBAY2hpbGRyZW5cblx0XHRvdXRwdXQucHVzaChjaGlsZC50b0pTT04oKSkgZm9yIGNoaWxkIGluIGNoaWxkcmVuXG5cdFx0cmV0dXJuIG91dHB1dFxuXG4jIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5RdWlja0VsZW1lbnQubmFtZSA/PSAnUXVpY2tFbGVtZW50J1xuXG5pbXBvcnQgaW5pdCBmcm9tICcuL2luaXQnXG5pbXBvcnQgYWxpYXNlcyBmcm9tICcuL2FsaWFzZXMnXG5pbXBvcnQgdHJhdmVyc2luZyBmcm9tICcuL3RyYXZlcnNpbmcnXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzJ1xuaW1wb3J0IHN0YXRlIGZyb20gJy4vc3RhdGUnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSdcbmltcG9ydCBtYW5pcHVsYXRpb24gZnJvbSAnLi9tYW5pcHVsYXRpb24nXG5pbXBvcnQgYXBwbGljYXRpb24gZnJvbSAnLi9hcHBsaWNhdGlvbidcbmltcG9ydCBhdHRyaWJ1dGVzQW5kUHJvcGVydGllcyBmcm9tICcuL2F0dHJpYnV0ZXMtYW5kLXByb3BlcnRpZXMnXG5pbml0KFF1aWNrRWxlbWVudClcbmFsaWFzZXMoUXVpY2tFbGVtZW50KVxudHJhdmVyc2luZyhRdWlja0VsZW1lbnQpXG5ldmVudHMoUXVpY2tFbGVtZW50KVxuc3RhdGUoUXVpY2tFbGVtZW50KVxuc3R5bGUoUXVpY2tFbGVtZW50KVxubWFuaXB1bGF0aW9uKFF1aWNrRWxlbWVudClcbmFwcGxpY2F0aW9uKFF1aWNrRWxlbWVudClcbmF0dHJpYnV0ZXNBbmRQcm9wZXJ0aWVzKFF1aWNrRWxlbWVudClcbiIsImV4cG9ydCBzY2hlbWEgPSBcblx0dHlwZTogJ2Rpdidcblx0cmVmOiB1bmRlZmluZWRcblx0b3B0aW9uczoge31cblx0Y2hpbGRyZW46IFtdXG5cblxuZXhwb3J0IG1hdGNoZXNTY2hlbWEgPSAob2JqZWN0KS0+XG5cdHR5cGVvZiBvYmplY3QudHlwZSBpc250ICd1bmRlZmluZWQnIG9yXG5cdHR5cGVvZiBvYmplY3QucmVmIGlzbnQgJ3VuZGVmaW5lZCcgb3Jcblx0dHlwZW9mIG9iamVjdC5vcHRpb25zIGlzbnQgJ3VuZGVmaW5lZCcgb3Jcblx0dHlwZW9mIG9iamVjdC5jaGlsZHJlbiBpc250ICd1bmRlZmluZWQnXG5cblxuXG4iLCJpbXBvcnQgcXVpY2tkb20gZnJvbSAnLi4vJ1xuaW1wb3J0IGV4dGVuZCBmcm9tICdzbWFydC1leHRlbmQnXG5pbXBvcnQgSVMgZnJvbSAnLi4vY2hlY2tzJ1xuaW1wb3J0IHt0ZW1wbGF0ZSBhcyBBTExPV0VEX1RFTVBMQVRFX09QVElPTlN9IGZyb20gJy4uL2FsbG93ZWRPcHRpb25zJ1xuaW1wb3J0IHtzY2hlbWF9IGZyb20gJy4vc2NoZW1hJ1xuUEFSU0VfRVJST1JfUFJFRklYID0gJ1RlbXBsYXRlIFBhcnNlIEVycm9yOiBleHBlY3RlZCdcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VUcmVlID0gKHRyZWUsIHBhcnNlQ2hpbGRyZW4pLT4gc3dpdGNoXG5cdHdoZW4gSVMuYXJyYXkodHJlZSlcblx0XHRvdXRwdXQgPSB7fVxuXG5cdFx0aWYgbm90IElTLnN0cmluZyh0cmVlWzBdKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yIFwiI3tQQVJTRV9FUlJPUl9QUkVGSVh9IHN0cmluZyBmb3IgJ3R5cGUnLCBnb3QgJyN7U3RyaW5nKHRyZWVbMF0pfSdcIlxuXHRcdGVsc2Vcblx0XHRcdG91dHB1dC50eXBlID0gdHJlZVswXVxuXHRcdFxuXHRcdGlmIHRyZWUubGVuZ3RoID4gMSBhbmQgbm90IElTLm9iamVjdCh0cmVlWzFdKSBhbmQgdHJlZVsxXSBpc250IG51bGxcblx0XHRcdHRocm93IG5ldyBFcnJvciBcIiN7UEFSU0VfRVJST1JfUFJFRklYfSBvYmplY3QgZm9yICdvcHRpb25zJywgZ290ICcje1N0cmluZyh0cmVlWzFdKX0nXCJcblx0XHRlbHNlXG5cdFx0XHRvdXRwdXQub3B0aW9ucyA9IGlmIHRyZWVbMV0gdGhlbiBleHRlbmQuZGVlcC5jbG9uZSh0cmVlWzFdKSBlbHNlIHNjaGVtYS5vcHRpb25zXG5cdFx0XHRvdXRwdXQucmVmID0gdHJlZVsxXS5pZCBvciB0cmVlWzFdLnJlZiBpZiB0cmVlWzFdXG5cblx0XHRvdXRwdXQuY2hpbGRyZW4gPSB0cmVlLnNsaWNlKDIpXG5cdFx0aWYgcGFyc2VDaGlsZHJlbiBpcyBmYWxzZVxuXHRcdFx0b3V0cHV0LmNoaWxkcmVuID0gdHJlZVsyXSBpZiB0cmVlLmxlbmd0aCBpcyAzIGFuZCBJUy5vYmplY3RQbGFpbih0cmVlWzJdKSBhbmQgbm90IElTLnRlbXBsYXRlKHRyZWVbMl0pXG5cdFx0ZWxzZVxuXHRcdFx0b3V0cHV0LmNoaWxkcmVuID0gb3V0cHV0LmNoaWxkcmVuLm1hcChxdWlja2RvbS50ZW1wbGF0ZSlcblx0XHRyZXR1cm4gb3V0cHV0XG5cblxuXHR3aGVuIElTLnN0cmluZyh0cmVlKSBvciBJUy5kb21UZXh0KHRyZWUpXG5cdFx0dHlwZTondGV4dCcsIG9wdGlvbnM6e3RleHQ6IHRyZWUudGV4dENvbnRlbnQgb3IgdHJlZX0sIGNoaWxkcmVuOnNjaGVtYS5jaGlsZHJlblxuXG5cdHdoZW4gSVMuZG9tRWwodHJlZSlcblx0XHR0eXBlOiB0cmVlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblx0XHRyZWY6IHRyZWUuaWRcblx0XHRvcHRpb25zOiBleHRlbmQuY2xvbmUua2V5cyhBTExPV0VEX1RFTVBMQVRFX09QVElPTlMpKHRyZWUpXG5cdFx0Y2hpbGRyZW46IHNjaGVtYS5jaGlsZHJlbi5tYXAuY2FsbCh0cmVlLmNoaWxkTm9kZXMsIHF1aWNrZG9tLnRlbXBsYXRlKVxuXG5cdHdoZW4gSVMucXVpY2tEb21FbCh0cmVlKVxuXHRcdHR5cGU6IHRyZWUudHlwZVxuXHRcdHJlZjogdHJlZS5yZWZcblx0XHRvcHRpb25zOiBleHRlbmQuY2xvbmUuZGVlcC5ub3RLZXlzKFsncmVsYXRlZEluc3RhbmNlJywgJ3JlbGF0ZWQnXSkodHJlZS5vcHRpb25zKVxuXHRcdGNoaWxkcmVuOiB0cmVlLmNoaWxkcmVuLm1hcChxdWlja2RvbS50ZW1wbGF0ZSlcblxuXHR3aGVuIElTLnRlbXBsYXRlKHRyZWUpXG5cdFx0cmV0dXJuIHRyZWVcblxuXHRlbHNlXG5cdFx0dGhyb3cgbmV3IEVycm9yIFwiI3tQQVJTRV9FUlJPUl9QUkVGSVh9IChhcnJheSB8fCBzdHJpbmcgfHwgZG9tRWwgfHwgcXVpY2tEb21FbCB8fCB0ZW1wbGF0ZSksIGdvdCAje1N0cmluZyh0cmVlKX1cIlxuXG5cbiIsImltcG9ydCBRdWlja1RlbXBsYXRlIGZyb20gJy4vJ1xuaW1wb3J0IHBhcnNlVHJlZSBmcm9tICcuL3BhcnNlVHJlZSdcbmltcG9ydCB7c2NoZW1hLCBtYXRjaGVzU2NoZW1hfSBmcm9tICcuL3NjaGVtYSdcbmltcG9ydCBleHRlbmQgZnJvbSAnc21hcnQtZXh0ZW5kJ1xuaW1wb3J0IElTIGZyb20gJy4uL2NoZWNrcydcbk5PVF9ERUVQX0tFWVMgPSBbJ3JlbGF0ZWRJbnN0YW5jZScsJ3JlbGF0ZWQnLCdkYXRhJ11cbk5PVF9LRVlTID0gWydjaGlsZHJlbicsJ19jaGlsZFJlZnMnXVxuXG5leHBvcnQgZGVmYXVsdCBleHRlbmRUZW1wbGF0ZSA9IChjdXJyZW50T3B0cywgbmV3T3B0cywgZ2xvYmFsT3B0cyktPlxuXHRpZiBnbG9iYWxPcHRzIHRoZW4gZ2xvYmFsT3B0c1RyYW5zZm9ybSA9IG9wdGlvbnM6IChvcHRzKS0+IGV4dGVuZChvcHRzLCBnbG9iYWxPcHRzKVxuXHRpZiBJUy5hcnJheShuZXdPcHRzKVxuXHRcdG5ld09wdHMgPSBwYXJzZVRyZWUobmV3T3B0cywgZmFsc2UpXG5cdGVsc2UgaWYgbmV3T3B0cyBhbmQgbm90IG1hdGNoZXNTY2hlbWEobmV3T3B0cylcblx0XHRuZXdPcHRzID0gb3B0aW9uczpuZXdPcHRzXG5cblxuXHRvdXRwdXQgPSBleHRlbmQuZGVlcC5udWxsRGVsZXRlcy5ub3RLZXlzKE5PVF9LRVlTKS5ub3REZWVwKE5PVF9ERUVQX0tFWVMpLnRyYW5zZm9ybShnbG9iYWxPcHRzVHJhbnNmb3JtKS5jbG9uZShjdXJyZW50T3B0cywgbmV3T3B0cylcblx0Y3VycmVudENoaWxkcmVuID0gY3VycmVudE9wdHMuY2hpbGRyZW5cblx0bmV3Q2hpbGRyZW4gPSBuZXdPcHRzPy5jaGlsZHJlbiBvciBbXVxuXHRvdXRwdXQuY2hpbGRyZW4gPSBbXVxuXG5cdCMjIyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAjIyNcblx0aWYgSVMuYXJyYXkobmV3Q2hpbGRyZW4pXG5cdFx0bWF4TGVuZ3RoID0gTWF0aC5tYXgoY3VycmVudENoaWxkcmVuLmxlbmd0aCwgbmV3Q2hpbGRyZW4ubGVuZ3RoKVxuXHRcdGluZGV4ID0gLTFcblx0XHR3aGlsZSArK2luZGV4IGlzbnQgbWF4TGVuZ3RoXG5cdFx0XHRuZWVkc1RlbXBsYXRlV3JhcCA9IG5vQ2hhbmdlcyA9IGZhbHNlXG5cdFx0XHRjdXJyZW50Q2hpbGQgPSBjdXJyZW50Q2hpbGRyZW5baW5kZXhdXG5cdFx0XHRuZXdDaGlsZCA9IG5ld0NoaWxkcmVuW2luZGV4XVxuXHRcdFx0bmV3Q2hpbGRQcm9jZXNzZWQgPSBzd2l0Y2hcblx0XHRcdFx0d2hlbiBJUy50ZW1wbGF0ZShuZXdDaGlsZCkgdGhlbiBuZXdDaGlsZFxuXHRcdFx0XHR3aGVuIElTLmFycmF5KG5ld0NoaWxkKSB0aGVuIG5lZWRzVGVtcGxhdGVXcmFwID0gcGFyc2VUcmVlKG5ld0NoaWxkKVxuXHRcdFx0XHR3aGVuIElTLnN0cmluZyhuZXdDaGlsZCkgdGhlbiBuZWVkc1RlbXBsYXRlV3JhcCA9IHt0eXBlOid0ZXh0Jywgb3B0aW9uczp7dGV4dDpuZXdDaGlsZH19XG5cdFx0XHRcdHdoZW4gbm90IG5ld0NoaWxkIGFuZCBub3QgZ2xvYmFsT3B0cyB0aGVuIG5vQ2hhbmdlcyA9IHRydWVcblx0XHRcdFx0ZWxzZSBuZWVkc1RlbXBsYXRlV3JhcCA9IG5ld0NoaWxkIG9yIHRydWVcblxuXG5cdFx0XHRpZiBub0NoYW5nZXNcblx0XHRcdFx0bmV3Q2hpbGRQcm9jZXNzZWQgPSBjdXJyZW50Q2hpbGRcblx0XHRcdFxuXHRcdFx0ZWxzZSBpZiBuZWVkc1RlbXBsYXRlV3JhcFxuXHRcdFx0XHRuZXdDaGlsZFByb2Nlc3NlZCA9IFxuXHRcdFx0XHRcdGlmIGN1cnJlbnRDaGlsZFxuXHRcdFx0XHRcdFx0Y3VycmVudENoaWxkLmV4dGVuZChuZXdDaGlsZFByb2Nlc3NlZCwgZ2xvYmFsT3B0cylcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRuZXcgUXVpY2tUZW1wbGF0ZShleHRlbmQuY2xvbmUoc2NoZW1hLCBuZXdDaGlsZFByb2Nlc3NlZCkpXG5cblx0XHRcdG91dHB1dC5jaGlsZHJlbi5wdXNoIG5ld0NoaWxkUHJvY2Vzc2VkXG5cdFxuXHRcblx0ZWxzZSBpZiBJUy5vYmplY3QobmV3Q2hpbGRyZW4pXG5cdFx0bmV3Q2hpbGRyZW4gPSBleHRlbmQuYWxsb3dOdWxsLmNsb25lIG5ld0NoaWxkcmVuXG5cdFx0b3V0cHV0LmNoaWxkcmVuID0gZXh0ZW5kQnlSZWYobmV3Q2hpbGRyZW4sIGN1cnJlbnRDaGlsZHJlbiwgZ2xvYmFsT3B0cylcblx0XHRyZW1haW5pbmdOZXdDaGlsZHJlbiA9IG5ld0NoaWxkcmVuXG5cdFx0XG5cdFx0Zm9yIHJlZixuZXdDaGlsZCBvZiByZW1haW5pbmdOZXdDaGlsZHJlblxuXHRcdFx0bmV3Q2hpbGRQcm9jZXNzZWQgPSBpZiBJUy5vYmplY3RQbGFpbihuZXdDaGlsZCkgYW5kIG5vdCBJUy50ZW1wbGF0ZShuZXdDaGlsZCkgdGhlbiBuZXdDaGlsZCBlbHNlIHBhcnNlVHJlZShuZXdDaGlsZClcblx0XHRcdG91dHB1dC5jaGlsZHJlbi5wdXNoIG5ldyBRdWlja1RlbXBsYXRlIG5ld0NoaWxkUHJvY2Vzc2VkXG5cdFx0XHRkZWxldGUgcmVtYWluaW5nTmV3Q2hpbGRyZW5bcmVmXVxuXG5cdHJldHVybiBvdXRwdXRcblxuXG5cblxuZXh0ZW5kQnlSZWYgPSAobmV3Q2hpbGRyZW5SZWZzLCBjdXJyZW50Q2hpbGRyZW4sIGdsb2JhbE9wdHMpLT4gaWYgbm90IGN1cnJlbnRDaGlsZHJlbi5sZW5ndGggdGhlbiBjdXJyZW50Q2hpbGRyZW4gZWxzZVxuXHRvdXRwdXQgPSBbXVxuXHRcblx0Zm9yIGN1cnJlbnRDaGlsZCBpbiBjdXJyZW50Q2hpbGRyZW5cblx0XHRuZXdDaGlsZCA9IG5ld0NoaWxkcmVuUmVmc1tjdXJyZW50Q2hpbGQucmVmXVxuXHRcdGlmIG5ld0NoaWxkXG5cdFx0XHRuZXdDaGlsZFByb2Nlc3NlZCA9IGN1cnJlbnRDaGlsZC5leHRlbmQobmV3Q2hpbGQsIGdsb2JhbE9wdHMpXG5cdFx0XHRkZWxldGUgbmV3Q2hpbGRyZW5SZWZzW2N1cnJlbnRDaGlsZC5yZWZdXG5cdFx0XG5cdFx0ZWxzZSBpZiBuZXdDaGlsZCBpcyBudWxsXG5cdFx0XHRkZWxldGUgbmV3Q2hpbGRyZW5SZWZzW2N1cnJlbnRDaGlsZC5yZWZdXG5cdFx0XHRjb250aW51ZVxuXHRcdFxuXHRcdGVsc2Vcblx0XHRcdG5ld0NoaWxkUHJvY2Vzc2VkID0gc3dpdGNoXG5cdFx0XHRcdHdoZW4gZ2xvYmFsT3B0cyB0aGVuIGN1cnJlbnRDaGlsZC5leHRlbmQobnVsbCwgZ2xvYmFsT3B0cylcblx0XHRcdFx0d2hlbiBPYmplY3Qua2V5cyhuZXdDaGlsZHJlblJlZnMpLmxlbmd0aCB0aGVuIGN1cnJlbnRDaGlsZC5leHRlbmQoKVxuXHRcdFx0XHRlbHNlIGN1cnJlbnRDaGlsZFxuXG5cdFx0bmV3Q2hpbGRQcm9jZXNzZWQuY2hpbGRyZW4gPSBleHRlbmRCeVJlZihuZXdDaGlsZHJlblJlZnMsIG5ld0NoaWxkUHJvY2Vzc2VkLmNoaWxkcmVuKVxuXHRcdG91dHB1dC5wdXNoKG5ld0NoaWxkUHJvY2Vzc2VkKVxuXG5cdHJldHVybiBvdXRwdXRcblxuXG5cblxuIiwiaW1wb3J0IGV4dGVuZCBmcm9tICdzbWFydC1leHRlbmQnXG5pbXBvcnQgcXVpY2tkb20gZnJvbSAnLi4vcXVpY2tkb20nXG5pbXBvcnQgSVMgZnJvbSAnLi4vY2hlY2tzJ1xuaW1wb3J0IGV4dGVuZFRlbXBsYXRlIGZyb20gJy4vZXh0ZW5kVGVtcGxhdGUnXG5pbXBvcnQgcGFyc2VUcmVlIGZyb20gJy4vcGFyc2VUcmVlJ1xuaW1wb3J0IHtfZ2V0Q2hpbGRSZWZzfSBmcm9tICcuLi9lbGVtZW50L3RyYXZlcnNpbmcnXG5pbXBvcnQge3NjaGVtYX0gZnJvbSAnLi9zY2hlbWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrVGVtcGxhdGVcblx0Y29uc3RydWN0b3I6IChjb25maWcsIGlzVHJlZSktPlxuXHRcdHJldHVybiBjb25maWcgaWYgSVMudGVtcGxhdGUoY29uZmlnKVxuXHRcdGNvbmZpZyA9IGlmIGlzVHJlZSB0aGVuIHBhcnNlVHJlZShjb25maWcpIGVsc2UgY29uZmlnXG5cdFx0ZXh0ZW5kIEAsIGNvbmZpZ1xuXHRcblx0ZXh0ZW5kOiAobmV3VmFsdWVzLCBnbG9iYWxPcHRzKS0+XG5cdFx0bmV3IFF1aWNrVGVtcGxhdGUgZXh0ZW5kVGVtcGxhdGUoQCwgbmV3VmFsdWVzLCBnbG9iYWxPcHRzKVxuXG5cdHNwYXduOiAobmV3VmFsdWVzLCBnbG9iYWxPcHRzLCBkYXRhKS0+XG5cdFx0aWYgbmV3VmFsdWVzIGFuZCBuZXdWYWx1ZXMuZGF0YVxuXHRcdFx0ZGF0YSA9IG5ld1ZhbHVlcy5kYXRhXG5cdFx0XHRuZXdWYWx1ZXMgPSBudWxsIGlmIE9iamVjdC5rZXlzKG5ld1ZhbHVlcykubGVuZ3RoIGlzIDFcblx0XHRcblx0XHRpZiBuZXdWYWx1ZXMgb3IgZ2xvYmFsT3B0c1xuXHRcdFx0e29wdGlvbnMsIGNoaWxkcmVuLCB0eXBlfSA9IGV4dGVuZFRlbXBsYXRlKEAsIG5ld1ZhbHVlcywgZ2xvYmFsT3B0cylcblx0XHRlbHNlXG5cdFx0XHR7b3B0aW9ucywgY2hpbGRyZW4sIHR5cGV9ID0gQFxuXHRcdFx0b3B0aW9ucyA9IGV4dGVuZC5jbG9uZShvcHRpb25zKVxuXG5cdFx0XG5cdFx0ZWxlbWVudCA9IHF1aWNrZG9tLmNyZWF0ZShbdHlwZSwgb3B0aW9uc10pXG5cdFx0XG5cdFx0aWYgY2hpbGRyZW5cblx0XHRcdGNoaWxkRGF0YSA9IGlmIG9wdGlvbnMucGFzc0RhdGFUb0NoaWxkcmVuIHRoZW4gZGF0YSBvciBvcHRpb25zLmRhdGFcblx0XHRcdGZvciBjaGlsZCBpbiBjaGlsZHJlblxuXHRcdFx0XHRlbGVtZW50LmFwcGVuZCBjaGlsZC5zcGF3bihudWxsLCBudWxsLCBjaGlsZERhdGEpXG5cblx0XHRlbGVtZW50Ll9wb3N0Q3JlYXRpb24oZGF0YSlcblx0XHRyZXR1cm4gZWxlbWVudFxuXG5cbiMjIyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAjIyNcblF1aWNrVGVtcGxhdGUubmFtZSA/PSAnUXVpY2tUZW1wbGF0ZSdcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkgUXVpY2tUZW1wbGF0ZTo6LCAnY2hpbGQnLCBnZXQ6ICgpLT5cblx0QF9jaGlsZFJlZnMgb3IgX2dldENoaWxkUmVmcyhAKVxuXG5cbnF1aWNrZG9tLnRlbXBsYXRlID0gKHRyZWUpLT5cblx0bmV3IFF1aWNrVGVtcGxhdGUodHJlZSwgdHJ1ZSlcblxucXVpY2tkb20uaXNUZW1wbGF0ZSA9ICh0YXJnZXQpLT5cblx0SVMudGVtcGxhdGUodGFyZ2V0KVxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCBJUyBmcm9tICcuL2NoZWNrcydcbmltcG9ydCBRdWlja0VsZW1lbnQgZnJvbSAnLi9lbGVtZW50J1xuaW1wb3J0IHF1aWNrZG9tIGZyb20gJy4vcXVpY2tkb20nXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tCYXRjaFxuXHRjb25zdHJ1Y3RvcjogKGVsZW1lbnRzLCBAcmV0dXJuUmVzdWx0cyktPlxuXHRcdEBlbGVtZW50cyA9IGVsZW1lbnRzLm1hcCAoZWwpLT4gcXVpY2tkb20oZWwpXG5cblx0cmV2ZXJzZTogKCktPlxuXHRcdEBlbGVtZW50cyA9IEBlbGVtZW50cy5yZXZlcnNlKClcblx0XHRyZXR1cm4gQFxuXG5cdHJldHVybjogKHJldHVybk5leHQpLT5cblx0XHRpZiByZXR1cm5OZXh0XG5cdFx0XHRAcmV0dXJuUmVzdWx0cyA9IHRydWVcblx0XHRcdHJldHVybiBAXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIEBsYXN0UmVzdWx0c1xuXG4jIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5RdWlja0JhdGNoLm5hbWUgPz0gJ1F1aWNrQmF0Y2gnXG5cblxuXG5PYmplY3Qua2V5cyhRdWlja0VsZW1lbnQ6OikuY29uY2F0KCdjc3MnLCAncmVwbGFjZVdpdGgnLCAnaHRtbCcsICd0ZXh0JykuZm9yRWFjaCAobWV0aG9kKS0+XG5cdFF1aWNrQmF0Y2g6OlttZXRob2RdID0gKG5ld1ZhbHVlKS0+XG5cdFx0cmVzdWx0cyA9IEBsYXN0UmVzdWx0cyA9IGZvciBlbGVtZW50IGluIEBlbGVtZW50c1xuXHRcdFx0aWYgbWV0aG9kIGlzICdodG1sJyBvciBtZXRob2QgaXMgJ3RleHQnXG5cdFx0XHRcdGlmIG5ld1ZhbHVlIHRoZW4gZWxlbWVudFttZXRob2RdID0gbmV3VmFsdWUgZWxzZSBlbGVtZW50W21ldGhvZF1cblx0XHRcdGVsc2Vcblx0XHRcdFx0ZWxlbWVudFttZXRob2RdKGFyZ3VtZW50cy4uLilcblx0XHRcblx0XHRyZXR1cm4gaWYgQHJldHVyblJlc3VsdHMgdGhlbiByZXN1bHRzIGVsc2UgQFxuXG5cbnF1aWNrZG9tLmJhdGNoID0gKGVsZW1lbnRzLCByZXR1cm5SZXN1bHRzKS0+XG5cdGlmIG5vdCBJUy5pdGVyYWJsZShlbGVtZW50cylcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJCYXRjaDogZXhwZWN0ZWQgYW4gaXRlcmFibGUsIGdvdCAje1N0cmluZyhlbGVtZW50cyl9XCIpXG5cblx0cmV0dXJuIG5ldyBRdWlja0JhdGNoKGVsZW1lbnRzLCByZXR1cm5SZXN1bHRzKVxuXG5cbiIsImltcG9ydCB7aW5jbHVkZXN9IGZyb20gJy4vaGVscGVycydcbmltcG9ydCBxdWlja2RvbSBmcm9tICcuL3F1aWNrZG9tJ1xuXG5TSE9SVENVVFMgPSBbXG5cdCdsaW5rOmEnXG5cdCdhbmNob3I6YSdcblx0J2EnXG5cdCd0ZXh0J1xuXHQnZGl2J1xuXHQnc3Bhbidcblx0J2gxJ1xuXHQnaDInXG5cdCdoMydcblx0J2g0J1xuXHQnaDUnXG5cdCdoNidcblx0J2hlYWRlcidcblx0J2Zvb3Rlcidcblx0J3NlY3Rpb24nXG5cdCdidXR0b24nXG5cdCdicidcblx0J3VsJ1xuXHQnb2wnXG5cdCdsaSdcblx0J2ZpZWxkc2V0J1xuXHQnaW5wdXQnXG5cdCd0ZXh0YXJlYSdcblx0J3NlbGVjdCdcblx0J29wdGlvbidcblx0J2Zvcm0nXG5cdCdmcmFtZSdcblx0J2hyJ1xuXHQnaWZyYW1lJ1xuXHQnaW1nJ1xuXHQncGljdHVyZSdcblx0J21haW4nXG5cdCduYXYnXG5cdCdtZXRhJ1xuXHQnb2JqZWN0J1xuXHQncHJlJ1xuXHQnc3R5bGUnXG5cdCd0YWJsZSdcblx0J3Rib2R5J1xuXHQndGgnXG5cdCd0cidcblx0J3RkJ1xuXHQndGZvb3QnXG5cdCMgJ3RlbXBsYXRlJ1xuXHQndmlkZW8nXG5dXG5cblxuZm9yIHNob3J0Y3V0IGluIFNIT1JUQ1VUUyB0aGVuIGRvIChzaG9ydGN1dCktPlxuXHRwcm9wID0gdHlwZSA9IHNob3J0Y3V0XG5cdGlmIGluY2x1ZGVzKHNob3J0Y3V0LCAnOicpXG5cdFx0c3BsaXQgPSBzaG9ydGN1dC5zcGxpdCgnOicpXG5cdFx0cHJvcCA9IHNwbGl0WzBdXG5cdFx0dHlwZSA9IHNwbGl0WzFdXG5cblx0cXVpY2tkb21bcHJvcF0gPSAoKS0+IHF1aWNrZG9tKHR5cGUsIGFyZ3VtZW50cy4uLilcbiIsImltcG9ydCBDU1MgZnJvbSAncXVpY2tjc3MnXG5pbXBvcnQgUXVpY2tFbGVtZW50IGZyb20gJy4vZWxlbWVudCdcbmltcG9ydCBRdWlja1RlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnXG5pbXBvcnQgUXVpY2tXaW5kb3cgZnJvbSAnLi93aW5kb3cnXG5pbXBvcnQgUXVpY2tCYXRjaCBmcm9tICcuL2JhdGNoJ1xuaW1wb3J0IHt2ZXJzaW9ufSBmcm9tICcuLi9wYWNrYWdlLmpzb24nXG5cbmltcG9ydCBxdWlja2RvbSx7aW5pdH0gZnJvbSAnLi9xdWlja2RvbSdcbmltcG9ydCAnLi9pbnN0YW5jZS1zaG9ydGN1dHMnXG5cbmluaXQoUXVpY2tFbGVtZW50LCBRdWlja1dpbmRvdylcbnF1aWNrZG9tLlF1aWNrRWxlbWVudCA9IFF1aWNrRWxlbWVudFxucXVpY2tkb20uUXVpY2tUZW1wbGF0ZSA9IFF1aWNrVGVtcGxhdGVcbnF1aWNrZG9tLlF1aWNrV2luZG93ID0gUXVpY2tXaW5kb3dcbnF1aWNrZG9tLlF1aWNrQmF0Y2ggPSBRdWlja0JhdGNoXG5cbnF1aWNrZG9tLnZlcnNpb24gPSB2ZXJzaW9uXG5xdWlja2RvbS5DU1MgPSBDU1NcblxuZXhwb3J0IGRlZmF1bHQgcXVpY2tkb21cbiMgZXhwb3J0IHtxdWlja2RvbSBhcyBkZWZhdWx0LCBRdWlja0VsZW1lbnQsIFF1aWNrVGVtcGxhdGUsIFF1aWNrV2luZG93LCBRdWlja0JhdGNofVxuXG4iXSwibmFtZXMiOlsidGVtcGxhdGUiLCJlbGVtZW50IiwiSVMiLCJJU18iLCJjcmVhdGUiLCJsb2FkIiwicXVpY2tEb21FbCIsInN1YmplY3QiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJRdWlja0VsZW1lbnQiLCJRdWlja1dpbmRvdyIsInF1aWNrZG9tIiwiYXJnIiwiYXJncyIsImkiLCJqIiwibGVuIiwicHJldkNvdW50IiwiQXJyYXkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjb3VudCIsIl9wb3N0Q3JlYXRpb24iLCJhcmdzTGVuZ3RoIiwiY2hpbGQiLCJjaGlsZHJlbiIsIm9wdGlvbnMiLCJ0eXBlIiwiYXJyYXkiLCJzcGF3biIsInVwZGF0ZU9wdGlvbnMiLCJkb21Ob2RlIiwiZG9tRG9jIiwiX3F1aWNrRWxlbWVudCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZXhpc3RpbmciLCJ3aW5kb3ciLCJzdHJpbmciLCJvYmplY3QiLCJ0ZXh0IiwiYXBwZW5kIiwiaHRtbCIsImlubmVySFRNTCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImNoaWxkTm9kZXMiLCJiYXRjaCIsImlzUXVpY2tFbCIsInRhcmdldCIsImlzRWwiLCJkb21FbCIsImluaXQiLCJRdWlja0VsZW1lbnRfIiwiUXVpY2tXaW5kb3dfIiwiaW5jbHVkZXMiLCJpdGVtIiwiaW5kZXhPZiIsInJlbW92ZUl0ZW0iLCJpdGVtSW5kZXgiLCJzcGxpY2UiLCJub3JtYWxpemVFbGVtZW50QXJnIiwidGFyZ2V0RWwiLCJpc1N0YXRlU3R5bGUiLCJyZWdpc3RlclN0eWxlIiwicnVsZSIsImxldmVsIiwiaW1wb3J0YW50IiwiY2FjaGVkIiwib3V0cHV0IiwicHJvcCIsInByb3BzIiwic3R5bGVDYWNoZSIsImdldCIsImNsYXNzTmFtZSIsIkNTUyIsInJlZ2lzdGVyIiwiZm5zIiwiT2JqZWN0Iiwia2V5cyIsInB1c2giLCJzZXQiLCJ2YWx1ZXMiLCJrZXkiLCJpbmRleCIsInZhbHVlIiwiUkVHRVhfV0hJVEVTUEFDRSIsIm9uXyIsImV2ZW50TmFtZXMiLCJjYWxsYmFjayIsInVzZUNhcHR1cmUiLCJpc1ByaXZhdGUiLCJjYWxsYmFja1JlZiIsInNwbGl0IiwiX2V2ZW50Q2FsbGJhY2tzIiwiX19yZWZzIiwiZnVuY3Rpb24iLCJfaW5zZXJ0ZWQiLCJfcGFyZW50IiwiZm9yRWFjaCIsImV2ZW50TmFtZSIsImJhc2UiLCJfbGlzdGVuVG8iLCJldmVudCIsIl9pbnZva2VIYW5kbGVycyIsIm9uY2UiLCJvbmNlQ2FsbGJhY2siLCJvbiIsIm9mZiIsIm9mZl8iLCJyZWYiLCJlbWl0IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkYXRhIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJleHRlbmQiLCJlbCIsImRpc3BhdGNoRXZlbnQiLCJlbWl0UHJpdmF0ZSIsImNhbGxiYWNrcyIsImNiIiwiZXZlbnROYW1lVG9MaXN0ZW5Gb3IiLCJsaXN0ZW5NZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJwcm9wZXJ0eSIsInJlc3VsdCIsInJlbGF0ZWQiLCJkZWZpbmVkIiwiY3VycmVudFN0YXRlU3R5bGUiLCJVTlNFVCIsInRoZW4iLCJmb3JjZVN0eWxlIiwic3R5bGVTYWZlIiwic2tpcENvbXB1dGVkIiwiY29tcHV0ZWQiLCJzYW1wbGUiLCJudW1iZXIiLCJzdHlsZVBhcnNlZCIsInBhcnNlRmxvYXQiLCJyZWNhbGNTdHlsZSIsInJlY2FsY0NoaWxkcmVuIiwidGFyZ2V0U3R5bGVzIiwiX3Jlc29sdmVGblN0eWxlcyIsIl9nZXRBY3RpdmVTdGF0ZXMiLCJzdGF0ZSIsInN0YXRlcyIsIl9zdGF0ZSIsIl9zdGF0ZVNoYXJlZCIsIl9zdHlsZXMiLCJoaWRlIiwic2hvdyIsImRpc3BsYXkiLCJvcmllbnRhdGlvbkdldHRlciIsIndpZHRoIiwiaGVpZ2h0IiwiYXNwZWN0UmF0aW9HZXR0ZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmF3IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiTWVkaWFRdWVyeSIsIlJVTEVfREVJTElNSVRFUiIsInRlc3RSdWxlIiwicGFyc2VRdWVyeSIsInF1ZXJ5U3RyaW5nIiwicXVlcnlTcGxpdCIsInJ1bGVzIiwic291cmNlIiwicGFyZW50IiwicGFyZW50TWF0Y2hpbmciLCJtYXAiLCJnZXR0ZXIiLCJrZXlQcmVmaXgiLCJtYXgiLCJtaW4iLCJpc05hTiIsIm9yaWVudGF0aW9uIiwiYXNwZWN0UmF0aW8iLCJwYXJzZWRWYWx1ZSIsInN0cmluZ1ZhbHVlIiwicXVlcnkiLCJjdXJyZW50VmFsdWUiLCJwYXNzZWQiLCJTdGF0ZUNoYWluIiwiam9pbiIsImZpbHRlciIsIm90aGVyQWN0aXZlIiwiYWN0aXZlIiwiQkFTRV9TVEFURV9UUklHR0VSUyIsIkNBQ0hFRF9GTl9JTlNFUlRFRCIsIl9ub3JtYWxpemVPcHRpb25zIiwiYmFzZTEiLCJiYXNlMiIsImJhc2UzIiwiYmFzZTQiLCJiYXNlNSIsInJlbGF0ZWRJbnN0YW5jZSIsImNsYXNzIiwidXJsIiwiaHJlZiIsInVucGFzc2FibGVTdGF0ZXMiLCJwYXNzU3RhdGVUb0NoaWxkcmVuIiwicGFzc0RhdGFUb0NoaWxkcmVuIiwic3RhdGVUcmlnZ2VycyIsImNsb25lIiwiZGVlcCIsIl9wYXJzZVRleHRzIiwiX3RleHRzIiwiX3BhcnNlU3R5bGVzIiwic3R5bGVzIiwic3RvcmUiLCJfbWVkaWFTdGF0ZXMiLCJfcHJvdmlkZWRTdGF0ZXMiLCJfcHJvdmlkZWRTdGF0ZXNTaGFyZWQiLCJmbGF0dGVuTmVzdGVkU3RhdGVzIiwic3BlY2lhbFN0YXRlcyIsInN0YXRlU3R5bGVzIiwic3RhdGVfIiwib2JqZWN0UGxhaW4iLCJoZWxwZXJzIiwiJGJhc2UiLCJzdHlsZU9iamVjdCIsImNoYWluIiwiaGFzTm9uU3RhdGVQcm9wcyIsInN0YXRlQ2hhaW4iLCJzdHlsZUtleXMiLCJ0ZXh0cyIsIl9hcHBseU9wdGlvbnMiLCJoYW5kbGVyIiwibWV0aG9kIiwicmVmMSIsInJlZjIiLCJpZCIsImF0dHIiLCJzcmMiLCJzZWxlY3RlZCIsImNoZWNrZWQiLCJhdHRycyIsIl9hcHBseVJlZ2lzdGVyZWRTdHlsZSIsInN0eWxlQWZ0ZXJJbnNlcnQiLCJpbnZva2VDb21wdXRlcnNPbmNlIiwiX2ludm9rZWRDb21wdXRlcnMiLCJyZWNhbGNPblJlc2l6ZSIsImV2ZW50cyIsIm1ldGhvZHMiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImNvbXB1dGVycyIsImFwcGx5RGF0YSIsIl9pbml0IiwiX3J1bkNvbXB1dGVyIiwiX2F0dGFjaFN0YXRlRXZlbnRzIiwiZm9yY2UiLCJkaXNhYmxlciIsImVuYWJsZXIiLCJ0cmlnZ2VyIiwiX3Byb3h5UGFyZW50IiwibmV3UGFyZW50IiwibGFzdFBhcmVudCIsInBhcmVudHMiLCJkb2N1bWVudEVsZW1lbnQiLCJfdW5wcm94eVBhcmVudCIsIm1lZGlhU3RhdGVzIiwicmVzdWx0cyIsInBhcmVudHNVbnRpbCIsIl9nZXRQYXJlbnRzIiwiaXNSZWYiLCJuZXh0UGFyZW50Iiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlBbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2dldENoaWxkUmVmcyIsImZyZXNoQ29weSIsImNoaWxkUmVmcyIsInJlZnMiLCJfY2hpbGRSZWZzIiwiX2dldEluZGV4QnlQcm9wIiwibWFpbiIsIl9maWx0ZXJFbGVtZW50cyIsIl9jaGlsZHJlbiIsIm5vZGVUeXBlIiwicGFyZW50Tm9kZSIsIm5leHRTaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibmV4dEFsbCIsInNpYmxpbmdzIiwibmV4dCIsInByZXZpb3VzU2libGluZyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJwcmV2QWxsIiwicHJldlNpYmxpbmciLCJwcmV2IiwicmV2ZXJzZSIsImNvbmNhdCIsIkRVTU1ZX0FSUkFZIiwidGFyZ2V0U3RhdGUiLCJhY3RpdmVTdGF0ZXMiLCJkZXNpcmVkVmFsdWUiLCJ0b2dnbGUiLCJfc3RhdGVQaXBlVGFyZ2V0IiwidG9nZ2xlU3RhdGUiLCJyZXNldFN0YXRlIiwiYWN0aXZlU3RhdGUiLCJwaXBlU3RhdGUiLCJub3JtYWxpemVFbGVtZW50IiwidGFyZ2V0U3R5bGUiLCJzdXBlcmlvclN0YXRlcyIsImluY2x1ZGVCYXNlIiwic2tpcEZucyIsImVudHJ5IiwiayIsImxlbjEiLCJzdXBlcmlvclN0eWxlcyIsImFkZENsYXNzIiwiX3JlbW92ZVJlZ2lzdGVyZWRTdHlsZSIsInJlc2V0VmFsdWUiLCJyZW1vdmVDbGFzcyIsIl90dXJuU3R5bGVPTiIsInNoYXJlZFN0YXRlcyIsIl9nZXRTdXBlcmlvclN0YXRlcyIsIl9nZXRTaGFyZWRTdGF0ZXMiLCJfdHVyblN0eWxlT0ZGIiwiYWN0aXZlU2hhcmVkU3RhdGVzIiwiX3R1cm5UZXh0T04iLCJ0YXJnZXRUZXh0IiwiX3R1cm5UZXh0T0ZGIiwic3RhdGVUb0V4Y2x1ZGUiLCJpbmNsdWRlU2hhcmVkU3RhdGVzIiwicGxhaW5TdGF0ZXMiLCJjYW5kaWRhdGUiLCJzdXBlcmlvciIsInRhcmdldFN0YXRlSW5kZXgiLCJpc0FwcGxpY2FibGUiLCJ0b1RlbXBsYXRlIiwiZWxDbG9uZSIsImxlbjIiLCJuZXdFbCIsImNsb25lTm9kZSIsInByZXZQYXJlbnQiLCJfcmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsIl9yZWZyZXNoUGFyZW50IiwiYXBwZW5kVG8iLCJwcmVwZW5kIiwidW5zaGlmdCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJwcmVwZW5kVG8iLCJhZnRlciIsIm15SW5kZXgiLCJpbnNlcnRBZnRlciIsImJlZm9yZSIsImRldGFjaCIsInJlbW92ZSIsImVtcHR5Iiwid3JhcCIsImN1cnJlbnRQYXJlbnQiLCJ1bndyYXAiLCJncmFuZFBhcmVudCIsInBhcmVudENoaWxkcmVuIiwicGFyZW50U2libGluZyIsImhhc0NsYXNzIiwiY2xhc3NMaXN0IiwidGFyZ2V0SW5kZXgiLCJ0b2dnbGVDbGFzcyIsInNldFJlZiIsInRhcmdldENoaWxkIiwicmVwbGFjZW1lbnRDaGlsZCIsImluZGV4T2ZDaGlsZCIsInJlcGxhY2VDaGlsZCIsInJlbW92ZUNoaWxkIiwibmV3VmFsdWUiLCJ0ZXh0Q29udGVudCIsInN2ZyIsImxpc3QiLCJwb3AiLCJzaGlmdCIsInVwZGF0ZVN0YXRlU3R5bGVzIiwicGFyc2VkIiwidXBkYXRlZFN0YXRlcyIsInVwZGF0ZVN0YXRlVGV4dHMiLCJwYXNzVGhyb3VnaCIsImRlZmF1bHRzIiwiaGFzT3duUHJvcGVydHkiLCJjb21wdXRlciIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInN2Z05hbWVzcGFjZSIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlRWxlbWVudE5TIiwiQUxMT1dFRF9PUFRJT05TIiwidG9KU09OIiwiYWxpYXNlcyIsInRyYXZlcnNpbmciLCJtYW5pcHVsYXRpb24iLCJhcHBsaWNhdGlvbiIsImF0dHJpYnV0ZXNBbmRQcm9wZXJ0aWVzIiwic2NoZW1hIiwibWF0Y2hlc1NjaGVtYSIsIlBBUlNFX0VSUk9SX1BSRUZJWCIsInBhcnNlVHJlZSIsInRyZWUiLCJwYXJzZUNoaWxkcmVuIiwiRXJyb3IiLCJTdHJpbmciLCJkb21UZXh0IiwiQUxMT1dFRF9URU1QTEFURV9PUFRJT05TIiwibm90S2V5cyIsIk5PVF9ERUVQX0tFWVMiLCJOT1RfS0VZUyIsImV4dGVuZEJ5UmVmIiwiZXh0ZW5kVGVtcGxhdGUiLCJjdXJyZW50T3B0cyIsIm5ld09wdHMiLCJnbG9iYWxPcHRzIiwiY3VycmVudENoaWxkIiwiY3VycmVudENoaWxkcmVuIiwiZ2xvYmFsT3B0c1RyYW5zZm9ybSIsIm1heExlbmd0aCIsIm5lZWRzVGVtcGxhdGVXcmFwIiwibmV3Q2hpbGQiLCJuZXdDaGlsZFByb2Nlc3NlZCIsIm5ld0NoaWxkcmVuIiwibm9DaGFuZ2VzIiwicmVtYWluaW5nTmV3Q2hpbGRyZW4iLCJvcHRzIiwibnVsbERlbGV0ZXMiLCJub3REZWVwIiwidHJhbnNmb3JtIiwiTWF0aCIsIlF1aWNrVGVtcGxhdGUiLCJhbGxvd051bGwiLCJuZXdDaGlsZHJlblJlZnMiLCJjb25maWciLCJpc1RyZWUiLCJuZXdWYWx1ZXMiLCJjaGlsZERhdGEiLCJpc1RlbXBsYXRlIiwiUXVpY2tCYXRjaCIsImVsZW1lbnRzIiwicmV0dXJuUmVzdWx0cyIsInJldHVybk5leHQiLCJsYXN0UmVzdWx0cyIsIml0ZXJhYmxlIiwiU0hPUlRDVVRTIiwic2hvcnRjdXQiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSxJQUFPQSxRQUFQLEdBQWtCLENBQ2pCLElBRGlCLEVBRWpCLE1BRmlCLEVBR2pCLE1BSGlCLEVBSWpCLE1BSmlCLEVBS2pCLFVBTGlCLEVBTWpCLFNBTmlCLEVBT2pCLFdBUGlCLENBQWxCOztBQVVBLEFBQUEsSUFBT0MsT0FBUCxHQUFpQixDQUNoQixJQURnQixFQUVoQixLQUZnQixFQUdoQixNQUhnQixFQUloQixNQUpnQixFQUtoQixNQUxnQixFQU1oQixPQU5nQixFQU9oQixPQVBnQixFQVFoQixXQVJnQixFQVNoQixLQVRnQixFQVVoQixNQVZnQixFQVdoQixVQVhnQixFQVloQixTQVpnQixFQWFoQixPQWJnQixFQWNoQixPQWRnQixFQWVoQixxQkFmZ0IsRUFnQmhCLGVBaEJnQixFQWlCaEIsa0JBakJnQixDQUFqQjs7QUNWQSxJQUFBQyxFQUFBO0FBQUEsQUFDQUEsRUFBQSxHQUFLQyxHQUFHLENBQUNDLE1BQUosQ0FBVyxTQUFYLEVBQXFCLEtBQXJCLENBQUw7QUFDQUYsRUFBRSxDQUFDRyxJQUFILENBQ0M7RUFBQUMsVUFBQSxFQUFZLG9CQUFDQyxPQUFEO1dBQVlBLE9BQUEsSUFBWUEsT0FBTyxDQUFDQyxXQUFSLENBQW9CQyxJQUFwQixLQUE0QjtHQUFoRTtFQUVBVCxRQUFBLEVBQVUsa0JBQUNPLE9BQUQ7V0FBWUEsT0FBQSxJQUFZQSxPQUFPLENBQUNDLFdBQVIsQ0FB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
