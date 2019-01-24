(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f():typeof define==='function'&&define.amd?define(f):(g=g||self,g.quickdom=f());}(this,function(){'use strict';function _typeof(obj) {
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

var REGEX_LEN_VAL = /^\d+(?:[a-z]|\%)+$/i;
var REGEX_DIGITS = /\d+$/;
var REGEX_SPACE = /\s/;
var REGEX_KEBAB = /([A-Z])+/g;
var IMPORTANT = 'important';
var POSSIBLE_PREFIXES = ['webkit', 'moz', 'ms', 'o'];
var REQUIRES_UNIT_VALUE = ['background-position-x', 'background-position-y', 'block-size', 'border-width', 'columnRule-width', 'cx', 'cy', 'font-size', 'grid-column-gap', 'grid-row-gap', 'height', 'inline-size', 'line-height', 'minBlock-size', 'min-height', 'min-inline-size', 'min-width', 'max-height', 'max-width', 'outline-offset', 'outline-width', 'perspective', 'shape-margin', 'stroke-dashoffset', 'stroke-width', 'text-indent', 'width', 'word-spacing', 'top', 'bottom', 'left', 'right', 'x', 'y'];
var QUAD_SHORTHANDS = ['margin', 'padding', 'border', 'border-radius'];
var DIRECTIONS = ['top', 'bottom', 'left', 'right'];
QUAD_SHORTHANDS.forEach(function (property) {
  var direction, i, len;
  REQUIRES_UNIT_VALUE.push(property);

  for (i = 0, len = DIRECTIONS.length; i < len; i++) {
    direction = DIRECTIONS[i];
    REQUIRES_UNIT_VALUE.push(property + '-' + direction);
  }
});
var SAMPLE_STYLE, styleConfig;
SAMPLE_STYLE = document.createElement('div').style;

var includes = function includes(target, item) {
  return target && target.indexOf(item) !== -1;
};

var isIterable = function isIterable(target) {
  return target && _typeof(target) === 'object' && typeof target.length === 'number' && !target.nodeType;
};

var toKebabCase = function toKebabCase(string) {
  return string.replace(REGEX_KEBAB, function (e, letter) {
    return "-".concat(letter.toLowerCase());
  });
};

var isPropSupported = function isPropSupported(property) {
  return typeof SAMPLE_STYLE[property] !== 'undefined';
};

var isValueSupported = function isValueSupported(property, value) {
  if (window.CSS && window.CSS.supports) {
    return window.CSS.supports(property, value);
  } else {
    SAMPLE_STYLE[property] = value;
    return SAMPLE_STYLE[property] === '' + value;
  }
};

var getPrefix = function getPrefix(property, skipInitialCheck) {
  var j, len1, prefix;

  if (skipInitialCheck || !isPropSupported(property)) {
    for (j = 0, len1 = POSSIBLE_PREFIXES.length; j < len1; j++) {
      prefix = POSSIBLE_PREFIXES[j];

      if (isPropSupported("-".concat(prefix, "-").concat(property))) {
        /* istanbul ignore next */
        return "-".concat(prefix, "-");
      }
    }
  }

  return '';
};

var normalizeProperty = function normalizeProperty(property) {
  property = toKebabCase(property);

  if (isPropSupported(property)) {
    return property;
  } else {
    return "".concat(getPrefix(property, true)).concat(property);
  }
};

var normalizeValue = function normalizeValue(property, value) {
  if (includes(REQUIRES_UNIT_VALUE, property) && value !== null) {
    value = '' + value;

    if (REGEX_DIGITS.test(value) && !REGEX_LEN_VAL.test(value) && !REGEX_SPACE.test(value)) {
      value += property === 'line-height' ? 'em' : 'px';
    }
  }

  return value;
};

var sort = function sort(array) {
  var great, i, len, less, pivot;

  if (array.length < 2) {
    return array;
  } else {
    pivot = array[0];
    less = [];
    great = [];
    len = array.length;
    i = 0;

    while (++i !== len) {
      if (array[i] <= pivot) {
        less.push(array[i]);
      } else {
        great.push(array[i]);
      }
    }

    return sort(less).concat(pivot, sort(great));
  }
};

var hash = function hash(string) {
  var hsh, i, length;
  hsh = 5381;
  i = -1;
  length = string.length;

  while (++i !== string.length) {
    hsh = (hsh << 5) - hsh + string.charCodeAt(i);
    hsh |= 0;
  }

  return '_' + (hsh < 0 ? hsh * -2 : hsh);
};

var ruleToString = function ruleToString(rule, important) {
  var j, len1, output, prop, property, props, value;
  output = '';
  props = sort(Object.keys(rule));

  for (j = 0, len1 = props.length; j < len1; j++) {
    prop = props[j];

    if (typeof rule[prop] === 'string' || typeof rule[prop] === 'number') {
      property = normalizeProperty(prop);
      value = normalizeValue(property, rule[prop]);

      if (important) {
        value += " !important";
      }

      output += "".concat(property, ":").concat(value, ";");
    }
  }

  return output;
};

var inlineStyleConfig = styleConfig = Object.create(null);

var inlineStyle = function inlineStyle(rule, valueToStore, level) {
  var config, styleEl;

  if (!(config = styleConfig[level])) {
    styleEl = document.createElement('style');
    styleEl.id = "quickcss".concat(level || '');
    document.head.appendChild(styleEl);
    styleConfig[level] = config = {
      el: styleEl,
      content: '',
      cache: Object.create(null)
    };
  }

  if (!config.cache[rule]) {
    config.cache[rule] = valueToStore || true;
    config.el.textContent = config.content += rule;
  }
};

var clearInlineStyle = function clearInlineStyle(level) {
  var config, j, key, keys, len1;

  if (config = styleConfig[level]) {
    if (!config.content) {
      return;
    }

    config.el.textContent = config.content = '';
    keys = Object.keys(config.cache);

    for (j = 0, len1 = keys.length; j < len1; j++) {
      key = keys[j];
      config.cache[key] = null;
    }
  }
};

var version = "1.4.2";

var _quickcss;

var index = _quickcss = function quickcss(targetEl, property, value, important) {
  var computedStyle, i, len, subEl, subProperty, subValue;

  switch (false) {
    case !isIterable(targetEl):
      for (i = 0, len = targetEl.length; i < len; i++) {
        subEl = targetEl[i];

        _quickcss(subEl, property, value);
      }

      break;

    case _typeof(property) !== 'object':
      // Passed a style map
      for (subProperty in property) {
        subValue = property[subProperty];

        _quickcss(targetEl, subProperty, subValue);
      }

      break;

    default:
      property = normalizeProperty(property);

      if (typeof value === 'undefined') {
        computedStyle = targetEl._computedStyle || (targetEl._computedStyle = getComputedStyle(targetEl));
        return computedStyle[property];
      } else if (property) {
        targetEl.style.setProperty(property, normalizeValue(property, value), important ? IMPORTANT : void 0);
      }

  }
};

_quickcss.animation = function (name$$1, frames) {
  var frame, generated, prefix, rules;

  if (name$$1 && typeof name$$1 === 'string' && frames && _typeof(frames) === 'object') {
    prefix = getPrefix('animation');
    generated = '';

    for (frame in frames) {
      rules = frames[frame];
      generated += "".concat(frame, " {").concat(ruleToString(rules), "}");
    }

    generated = "@".concat(prefix, "keyframes ").concat(name$$1, " {").concat(generated, "}");
    return inlineStyle(generated, true, 0);
  }
};

_quickcss.register = function (rule, level, important) {
  var className, ref, style;

  if (rule && _typeof(rule) === 'object') {
    level || (level = 0);
    rule = ruleToString(rule, important);

    if (!(className = (ref = inlineStyleConfig[level]) != null ? ref[rule] : void 0)) {
      className = hash(rule);
      style = ".".concat(className, " {").concat(rule, "}");
      inlineStyle(style, className, level);
    }

    return className;
  }
};

_quickcss.clearRegistered = function (level) {
  return clearInlineStyle(level || 0);
};
/* istanbul ignore next */


_quickcss.UNSET = function () {
  switch (false) {
    case !isValueSupported('display', 'unset'):
      return 'unset';

    case !isValueSupported('display', 'initial'):
      return 'initial';

    case !isValueSupported('display', 'inherit'):
      return 'inherit';
  }
}();

_quickcss.supports = isValueSupported;
_quickcss.supportsProperty = isPropSupported;
_quickcss.normalizeProperty = normalizeProperty;
_quickcss.normalizeValue = normalizeValue;
_quickcss.version = version;function _typeof$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
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
}function _typeof$2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$2 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$2(obj);
}

var _extend, isArray, isObject, _shouldDeepExtend;

isArray = function isArray(target) {
  return Array.isArray(target);
};

isObject = function isObject(target) {
  return target && Object.prototype.toString.call(target) === '[object Object]' || isArray(target);
};

_shouldDeepExtend = function shouldDeepExtend(options, target, parentKey) {
  if (options.deep) {
    if (options.notDeep) {
      return !options.notDeep[target];
    } else {
      return true;
    }
  } else if (options.deepOnly) {
    return options.deepOnly[target] || parentKey && _shouldDeepExtend(options, parentKey);
  }
}; // else false


var extend = _extend = function extend(options, target, sources, parentKey) {
  var i, key, len, source, sourceValue, subTarget, targetValue;

  if (!target || _typeof$2(target) !== 'object' && typeof target !== 'function') {
    target = {};
  }

  for (i = 0, len = sources.length; i < len; i++) {
    source = sources[i];

    if (source != null) {
      for (key in source) {
        sourceValue = source[key];
        targetValue = target[key];

        if (sourceValue === target || sourceValue === void 0 || sourceValue === null && !options.allowNull && !options.nullDeletes || options.keys && !options.keys[key] || options.notKeys && options.notKeys[key] || options.own && !source.hasOwnProperty(key) || options.globalFilter && !options.globalFilter(sourceValue, key, source) || options.filters && options.filters[key] && !options.filters[key](sourceValue, key, source)) {
          continue;
        }

        if (sourceValue === null && options.nullDeletes) {
          delete target[key];
          continue;
        }

        if (options.globalTransform) {
          sourceValue = options.globalTransform(sourceValue, key, source);
        }

        if (options.transforms && options.transforms[key]) {
          sourceValue = options.transforms[key](sourceValue, key, source);
        }

        switch (false) {
          case !(options.concat && isArray(sourceValue) && isArray(targetValue)):
            target[key] = targetValue.concat(sourceValue);
            break;

          case !(_shouldDeepExtend(options, key, parentKey) && isObject(sourceValue)):
            subTarget = isObject(targetValue) ? targetValue : isArray(sourceValue) ? [] : {};
            target[key] = _extend(options, subTarget, [sourceValue], key);
            break;

          default:
            target[key] = sourceValue;
        }
      }
    }
  }

  return target;
};

var version$1 = "1.7.4";
var modifiers, newBuilder, normalizeKeys, primaryBuilder;

normalizeKeys = function normalizeKeys(keys) {
  var i, key, len, output;

  if (keys) {
    output = {};

    if (_typeof$2(keys) !== 'object') {
      output[keys] = true;
    } else {
      if (!Array.isArray(keys)) {
        keys = Object.keys(keys);
      }

      for (i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        output[key] = true;
      }
    }

    return output;
  }
};

newBuilder = function newBuilder(isBase) {
  var _builder;

  _builder = function builder(target) {
    var theTarget;
    var $_len = arguments.length,
        $_i = -1,
        sources = new Array($_len);

    while (++$_i < $_len) sources[$_i] = arguments[$_i];

    if (_builder.options.target) {
      theTarget = _builder.options.target;
    } else {
      theTarget = target;
      sources.shift();
    }

    return extend(_builder.options, theTarget, sources);
  };

  if (isBase) {
    _builder.isBase = true;
  }

  _builder.options = {};
  Object.defineProperties(_builder, modifiers);
  return _builder;
};

modifiers = {
  'deep': {
    get: function get() {
      var _;

      _ = this.isBase ? newBuilder() : this;
      _.options.deep = true;
      return _;
    }
  },
  'own': {
    get: function get() {
      var _;

      _ = this.isBase ? newBuilder() : this;
      _.options.own = true;
      return _;
    }
  },
  'allowNull': {
    get: function get() {
      var _;

      _ = this.isBase ? newBuilder() : this;
      _.options.allowNull = true;
      return _;
    }
  },
  'nullDeletes': {
    get: function get() {
      var _;

      _ = this.isBase ? newBuilder() : this;
      _.options.nullDeletes = true;
      return _;
    }
  },
  'concat': {
    get: function get() {
      var _;

      _ = this.isBase ? newBuilder() : this;
      _.options.concat = true;
      return _;
    }
  },
  'clone': {
    get: function get() {
      var _;

      _ = this.isBase ? newBuilder() : this;
      _.options.target = {};
      return _;
    }
  },
  'notDeep': {
    get: function get() {
      var _;

      _ = this.isBase ? newBuilder() : this;
      return function (keys) {
        _.options.notDeep = normalizeKeys(keys);
        return _;
      };
    }
  },
  'deepOnly': {
    get: function get() {
      var _;

      _ = this.isBase ? newBuilder() : this;
      return function (keys) {
        _.options.deepOnly = normalizeKeys(keys);
        return _;
      };
    }
  },
  'keys': {
    get: function get() {
      var _;

      _ = this.isBase ? newBuilder() : this;
      return function (keys) {
        _.options.keys = normalizeKeys(keys);
        return _;
      };
    }
  },
  'notKeys': {
    get: function get() {
      var _;

      _ = this.isBase ? newBuilder() : this;
      return function (keys) {
        _.options.notKeys = normalizeKeys(keys);
        return _;
      };
    }
  },
  'transform': {
    get: function get() {
      var _;

      _ = this.isBase ? newBuilder() : this;
      return function (transform) {
        if (typeof transform === 'function') {
          _.options.globalTransform = transform;
        } else if (transform && _typeof$2(transform) === 'object') {
          _.options.transforms = transform;
        }

        return _;
      };
    }
  },
  'filter': {
    get: function get() {
      var _;

      _ = this.isBase ? newBuilder() : this;
      return function (filter) {
        if (typeof filter === 'function') {
          _.options.globalFilter = filter;
        } else if (filter && _typeof$2(filter) === 'object') {
          _.options.filters = filter;
        }

        return _;
      };
    }
  }
};
primaryBuilder = newBuilder(true);
primaryBuilder.version = version$1;
var primaryBuilder$1 = primaryBuilder;var template = ['id', 'name', 'type', 'href', 'selected', 'checked', 'className']; // To copy from DOM Elements

var element = ['id', 'ref', 'type', 'name', 'text', 'style', 'class', 'className', 'url', 'href', 'selected', 'checked', 'props', 'attrs', 'passStateToChildren', 'stateTriggers', 'unpassableStates']; // Used in QuickElement::toJSON
// 'relatedInstance'
function _typeof$3(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$3 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$3(obj);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

var defined = function defined(subject) {
  return subject !== void 0;
};

var array = function array(subject) {
  return subject instanceof Array;
};

var object = function object(subject) {
  return _typeof$3(subject) === 'object' && subject; // 2nd check is to test against 'null' values
};

var objectPlain = function objectPlain(subject) {
  return object(subject) && Object.prototype.toString.call(subject) === '[object Object]' && subject.constructor === Object;
};

var string = function string(subject) {
  return typeof subject === 'string';
};

var number = function number(subject) {
  return typeof subject === 'number' && !isNaN(subject);
};

var numberLoose = function numberLoose(subject) {
  return number(subject) || string(subject) && number(Number(subject));
};

var iterable = function iterable(subject) {
  return object(subject) && number(subject.length);
};

var function_ = function function_(subject) {
  return typeof subject === 'function';
};

var natives =
/*#__PURE__*/
Object.freeze({
  defined: defined,
  array: array,
  object: object,
  objectPlain: objectPlain,
  string: string,
  number: number,
  numberLoose: numberLoose,
  iterable: iterable,
  function_: function_
});

var domDoc = function domDoc(subject) {
  return subject && subject.nodeType === 9;
};

var domEl = function domEl(subject) {
  return subject && subject.nodeType === 1;
};

var domText = function domText(subject) {
  return subject && subject.nodeType === 3;
};

var domNode = function domNode(subject) {
  return domEl(subject) || domText(subject);
};

var domTextarea = function domTextarea(subject) {
  return subject && subject.nodeName === 'TEXTAREA';
};

var domInput = function domInput(subject) {
  return subject && subject.nodeName === 'INPUT';
};

var domSelect = function domSelect(subject) {
  return subject && subject.nodeName === 'SELECT';
};

var domField = function domField(subject) {
  return domInput(subject) || domTextarea(subject) || domSelect(subject);
};

var dom =
/*#__PURE__*/
Object.freeze({
  domDoc: domDoc,
  domEl: domEl,
  domText: domText,
  domNode: domNode,
  domTextarea: domTextarea,
  domInput: domInput,
  domSelect: domSelect,
  domField: domField
});
var AVAIL_SETS, Checks;
AVAIL_SETS = {
  natives: natives,
  dom: dom
};

Checks =
/*#__PURE__*/
function () {
  _createClass$1(Checks, [{
    key: "create",
    value: function create() {
      var args;

      if (arguments.length) {
        args = Array.prototype.slice.call(arguments);
      }

      return new Checks(args);
    }
  }]);

  function Checks(sets) {
    _classCallCheck$1(this, Checks);

    var i, len, set;

    if (sets == null) {
      sets = ['natives'];
    }

    for (i = 0, len = sets.length; i < len; i++) {
      set = sets[i];

      if (AVAIL_SETS[set]) {
        this.load(AVAIL_SETS[set]);
      }
    }
  }

  _createClass$1(Checks, [{
    key: "load",
    value: function load(set) {
      var key, value;

      if (AVAIL_SETS.natives.string(set)) {
        set = AVAIL_SETS[set];
      }

      if (!AVAIL_SETS.natives.objectPlain(set)) {
        return;
      }

      for (key in set) {
        value = set[key];

        if (key === 'function_') {
          key = 'function';
        }

        this[key] = value;
      }
    }
  }]);

  return Checks;
}();

var index$1 = Checks.prototype.create();var IS;
IS = index$1.create('natives', 'dom');
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
};var includes$1 = function includes(target, item) {
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
    className: [index.register(rule, level, important)],
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
      var index$$1;

      if (this.keys[level]) {
        index$$1 = this.keys[level].indexOf(key);

        if (index$$1 !== -1) {
          return this.values[level][index$$1];
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

    if (data && _typeof$1(data) === 'object') {
      primaryBuilder$1(event, data);
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
      value = index.UNSET;
    }

    if (value && typeof value.then === 'function') {
      value.then(function (value) {
        return index(_this.el, property, value, _this.options.forceStyle);
      });
    } else {
      result = index(this.el, property, value, this.options.forceStyle);
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

  this.options.stateTriggers = this.options.stateTriggers ? primaryBuilder$1.clone.deep(BASE_STATE_TRIGGERS, this.options.stateTriggers) : BASE_STATE_TRIGGERS;

  if (this.type === 'text') {
    primaryBuilder$1(this, this._parseTexts(this.options.text, this._texts));
  } else {
    primaryBuilder$1(this, this._parseStyles(this.options.style, this._styles));
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
  base = !includes$1(states, '$base') ? styles : styles.$base;
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
      data = primaryBuilder$1.clone(this.options.data, data);
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

    if (!includes$1(_this2._providedStates, state) && !force && !trigger.force) {
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
      return includes$1(this._state, targetState);
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


    if (!includes$1(this.options.unpassableStates, targetState)) {
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

      if (!includes$1(this._stateShared, stateChain.string)) {
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
          return !includes$1(state, targetState);
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
  options = primaryBuilder$1.clone(this.options, {
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
  return includes$1(this.classList, target);
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
    primaryBuilder$1.deep.concat(this, parsed = this._parseStyles(styles));

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
    primaryBuilder$1.deep.concat(this, parsed = this._parseTexts(texts));
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
        output = [this.type, primaryBuilder$1.clone.keys(element)(this.options)];
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
        output.options = tree[1] ? primaryBuilder$1.deep.clone(tree[1]) : schema.options;

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
        options: primaryBuilder$1.clone.keys(template)(tree),
        children: schema.children.map.call(tree.childNodes, quickdom.template)
      };

    case !IS$1.quickDomEl(tree):
      return {
        type: tree.type,
        ref: tree.ref,
        options: primaryBuilder$1.clone.deep.notKeys(['relatedInstance', 'related'])(tree.options),
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
        return primaryBuilder$1(opts, globalOpts);
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

  output = primaryBuilder$1.deep.nullDeletes.notKeys(NOT_KEYS).notDeep(NOT_DEEP_KEYS).transform(globalOptsTransform).clone(currentOpts, newOpts);
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
        newChildProcessed = currentChild ? currentChild.extend(newChildProcessed, globalOpts) : new QuickTemplate$1(primaryBuilder$1.clone(schema, newChildProcessed));
      }

      output.children.push(newChildProcessed);
    }
  } else if (IS$1.object(newChildren)) {
    newChildren = primaryBuilder$1.allowNull.clone(newChildren);
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
    primaryBuilder$1(this, config);
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
        options = primaryBuilder$1.clone(options);
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
};var version$2 = "1.0.92";var SHORTCUTS, i, len, shortcut;
SHORTCUTS = ['link:a', 'anchor:a', 'a', 'text', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'footer', 'section', 'button', 'br', 'ul', 'ol', 'li', 'fieldset', 'input', 'textarea', 'select', 'option', 'form', 'frame', 'hr', 'iframe', 'img', 'picture', 'main', 'nav', 'meta', 'object', 'pre', 'style', 'table', 'tbody', 'th', 'tr', 'td', 'tfoot', // 'template'
'video'];

for (i = 0, len = SHORTCUTS.length; i < len; i++) {
  shortcut = SHORTCUTS[i];

  (function (shortcut) {
    var prop, split, type;
    prop = type = shortcut;

    if (includes$1(shortcut, ':')) {
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
_quickdom.version = version$2;
_quickdom.CSS = index;
var quickdom = _quickdom; // export {quickdom as default, QuickElement, QuickTemplate, QuickWindow, QuickBatch}
return quickdom;}));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tkb20uZGVidWcuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9xdWlja2Nzcy9kaXN0L3F1aWNrY3NzLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zbWFydC1leHRlbmQvZGlzdC9zbWFydC1leHRlbmQuZXNtLmpzIiwiLi4vc3JjL2FsbG93ZWRPcHRpb25zLmNvZmZlZSIsIi4uL25vZGVfbW9kdWxlcy9AZGFuaWVsa2FsZW4vaXMvZGlzdC9pcy5lc20uanMiLCIuLi9zcmMvY2hlY2tzLmNvZmZlZSIsIi4uL3NyYy9xdWlja2RvbS5jb2ZmZWUiLCIuLi9zcmMvaGVscGVycy5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC9ldmVudHMuY29mZmVlIiwiLi4vc3JjL2VsZW1lbnQvc3R5bGUuY29mZmVlIiwiLi4vc3JjL3dpbmRvdy5jb2ZmZWUiLCIuLi9zcmMvbWVkaWFRdWVyeS5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC9zdGF0ZUNoYWluLmNvZmZlZSIsIi4uL3NyYy9lbGVtZW50L2luaXQuY29mZmVlIiwiLi4vc3JjL2VsZW1lbnQvYWxpYXNlcy5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC90cmF2ZXJzaW5nLmNvZmZlZSIsIi4uL3NyYy9lbGVtZW50L3N0YXRlLmNvZmZlZSIsIi4uL3NyYy9lbGVtZW50L21hbmlwdWxhdGlvbi5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC9hcHBsaWNhdGlvbi5jb2ZmZWUiLCIuLi9zcmMvZWxlbWVudC9hdHRyaWJ1dGVzLWFuZC1wcm9wZXJ0aWVzLmNvZmZlZSIsIi4uL3NyYy9lbGVtZW50L2luZGV4LmNvZmZlZSIsIi4uL3NyYy90ZW1wbGF0ZS9zY2hlbWEuY29mZmVlIiwiLi4vc3JjL3RlbXBsYXRlL3BhcnNlVHJlZS5jb2ZmZWUiLCIuLi9zcmMvdGVtcGxhdGUvZXh0ZW5kVGVtcGxhdGUuY29mZmVlIiwiLi4vc3JjL3RlbXBsYXRlL2luZGV4LmNvZmZlZSIsIi4uL3NyYy9iYXRjaC5jb2ZmZWUiLCIuLi9zcmMvaW5zdGFuY2Utc2hvcnRjdXRzLmNvZmZlZSIsIi4uL3NyYy9pbmRleC5jb2ZmZWUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufXZhciBSRUdFWF9MRU5fVkFMID0gL15cXGQrKD86W2Etel18XFwlKSskL2k7XG52YXIgUkVHRVhfRElHSVRTID0gL1xcZCskLztcbnZhciBSRUdFWF9TUEFDRSA9IC9cXHMvO1xudmFyIFJFR0VYX0tFQkFCID0gLyhbQS1aXSkrL2c7XG52YXIgSU1QT1JUQU5UID0gJ2ltcG9ydGFudCc7XG52YXIgUE9TU0lCTEVfUFJFRklYRVMgPSBbJ3dlYmtpdCcsICdtb3onLCAnbXMnLCAnbyddO1xudmFyIFJFUVVJUkVTX1VOSVRfVkFMVUUgPSBbJ2JhY2tncm91bmQtcG9zaXRpb24teCcsICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXknLCAnYmxvY2stc2l6ZScsICdib3JkZXItd2lkdGgnLCAnY29sdW1uUnVsZS13aWR0aCcsICdjeCcsICdjeScsICdmb250LXNpemUnLCAnZ3JpZC1jb2x1bW4tZ2FwJywgJ2dyaWQtcm93LWdhcCcsICdoZWlnaHQnLCAnaW5saW5lLXNpemUnLCAnbGluZS1oZWlnaHQnLCAnbWluQmxvY2stc2l6ZScsICdtaW4taGVpZ2h0JywgJ21pbi1pbmxpbmUtc2l6ZScsICdtaW4td2lkdGgnLCAnbWF4LWhlaWdodCcsICdtYXgtd2lkdGgnLCAnb3V0bGluZS1vZmZzZXQnLCAnb3V0bGluZS13aWR0aCcsICdwZXJzcGVjdGl2ZScsICdzaGFwZS1tYXJnaW4nLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLXdpZHRoJywgJ3RleHQtaW5kZW50JywgJ3dpZHRoJywgJ3dvcmQtc3BhY2luZycsICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnLCAneCcsICd5J107XG52YXIgUVVBRF9TSE9SVEhBTkRTID0gWydtYXJnaW4nLCAncGFkZGluZycsICdib3JkZXInLCAnYm9yZGVyLXJhZGl1cyddO1xudmFyIERJUkVDVElPTlMgPSBbJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCddO1xuUVVBRF9TSE9SVEhBTkRTLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gIHZhciBkaXJlY3Rpb24sIGksIGxlbjtcbiAgUkVRVUlSRVNfVU5JVF9WQUxVRS5wdXNoKHByb3BlcnR5KTtcblxuICBmb3IgKGkgPSAwLCBsZW4gPSBESVJFQ1RJT05TLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgZGlyZWN0aW9uID0gRElSRUNUSU9OU1tpXTtcbiAgICBSRVFVSVJFU19VTklUX1ZBTFVFLnB1c2gocHJvcGVydHkgKyAnLScgKyBkaXJlY3Rpb24pO1xuICB9XG59KTt2YXIgU0FNUExFX1NUWUxFLCBzdHlsZUNvbmZpZztcblNBTVBMRV9TVFlMRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xudmFyIGluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXModGFyZ2V0LCBpdGVtKSB7XG4gIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0LmluZGV4T2YoaXRlbSkgIT09IC0xO1xufTtcbnZhciBpc0l0ZXJhYmxlID0gZnVuY3Rpb24gaXNJdGVyYWJsZSh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCAmJiBfdHlwZW9mKHRhcmdldCkgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQubGVuZ3RoID09PSAnbnVtYmVyJyAmJiAhdGFyZ2V0Lm5vZGVUeXBlO1xufTtcbnZhciB0b0tlYmFiQ2FzZSA9IGZ1bmN0aW9uIHRvS2ViYWJDYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoUkVHRVhfS0VCQUIsIGZ1bmN0aW9uIChlLCBsZXR0ZXIpIHtcbiAgICByZXR1cm4gXCItXCIuY29uY2F0KGxldHRlci50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG59O1xudmFyIGlzUHJvcFN1cHBvcnRlZCA9IGZ1bmN0aW9uIGlzUHJvcFN1cHBvcnRlZChwcm9wZXJ0eSkge1xuICByZXR1cm4gdHlwZW9mIFNBTVBMRV9TVFlMRVtwcm9wZXJ0eV0gIT09ICd1bmRlZmluZWQnO1xufTtcbnZhciBpc1ZhbHVlU3VwcG9ydGVkID0gZnVuY3Rpb24gaXNWYWx1ZVN1cHBvcnRlZChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHdpbmRvdy5DU1MgJiYgd2luZG93LkNTUy5zdXBwb3J0cykge1xuICAgIHJldHVybiB3aW5kb3cuQ1NTLnN1cHBvcnRzKHByb3BlcnR5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgU0FNUExFX1NUWUxFW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIHJldHVybiBTQU1QTEVfU1RZTEVbcHJvcGVydHldID09PSAnJyArIHZhbHVlO1xuICB9XG59O1xudmFyIGdldFByZWZpeCA9IGZ1bmN0aW9uIGdldFByZWZpeChwcm9wZXJ0eSwgc2tpcEluaXRpYWxDaGVjaykge1xuICB2YXIgaiwgbGVuMSwgcHJlZml4O1xuXG4gIGlmIChza2lwSW5pdGlhbENoZWNrIHx8ICFpc1Byb3BTdXBwb3J0ZWQocHJvcGVydHkpKSB7XG4gICAgZm9yIChqID0gMCwgbGVuMSA9IFBPU1NJQkxFX1BSRUZJWEVTLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgcHJlZml4ID0gUE9TU0lCTEVfUFJFRklYRVNbal07XG5cbiAgICAgIGlmIChpc1Byb3BTdXBwb3J0ZWQoXCItXCIuY29uY2F0KHByZWZpeCwgXCItXCIpLmNvbmNhdChwcm9wZXJ0eSkpKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBcIi1cIi5jb25jYXQocHJlZml4LCBcIi1cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcbnZhciBub3JtYWxpemVQcm9wZXJ0eSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIHByb3BlcnR5ID0gdG9LZWJhYkNhc2UocHJvcGVydHkpO1xuXG4gIGlmIChpc1Byb3BTdXBwb3J0ZWQocHJvcGVydHkpKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChnZXRQcmVmaXgocHJvcGVydHksIHRydWUpKS5jb25jYXQocHJvcGVydHkpO1xuICB9XG59O1xudmFyIG5vcm1hbGl6ZVZhbHVlID0gZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChpbmNsdWRlcyhSRVFVSVJFU19VTklUX1ZBTFVFLCBwcm9wZXJ0eSkgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XG5cbiAgICBpZiAoUkVHRVhfRElHSVRTLnRlc3QodmFsdWUpICYmICFSRUdFWF9MRU5fVkFMLnRlc3QodmFsdWUpICYmICFSRUdFWF9TUEFDRS50ZXN0KHZhbHVlKSkge1xuICAgICAgdmFsdWUgKz0gcHJvcGVydHkgPT09ICdsaW5lLWhlaWdodCcgPyAnZW0nIDogJ3B4JztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIHNvcnQgPSBmdW5jdGlvbiBzb3J0KGFycmF5KSB7XG4gIHZhciBncmVhdCwgaSwgbGVuLCBsZXNzLCBwaXZvdDtcblxuICBpZiAoYXJyYXkubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBhcnJheTtcbiAgfSBlbHNlIHtcbiAgICBwaXZvdCA9IGFycmF5WzBdO1xuICAgIGxlc3MgPSBbXTtcbiAgICBncmVhdCA9IFtdO1xuICAgIGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgICBpID0gMDtcblxuICAgIHdoaWxlICgrK2kgIT09IGxlbikge1xuICAgICAgaWYgKGFycmF5W2ldIDw9IHBpdm90KSB7XG4gICAgICAgIGxlc3MucHVzaChhcnJheVtpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmVhdC5wdXNoKGFycmF5W2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc29ydChsZXNzKS5jb25jYXQocGl2b3QsIHNvcnQoZ3JlYXQpKTtcbiAgfVxufTtcbnZhciBoYXNoID0gZnVuY3Rpb24gaGFzaChzdHJpbmcpIHtcbiAgdmFyIGhzaCwgaSwgbGVuZ3RoO1xuICBoc2ggPSA1MzgxO1xuICBpID0gLTE7XG4gIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraSAhPT0gc3RyaW5nLmxlbmd0aCkge1xuICAgIGhzaCA9IChoc2ggPDwgNSkgLSBoc2ggKyBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICBoc2ggfD0gMDtcbiAgfVxuXG4gIHJldHVybiAnXycgKyAoaHNoIDwgMCA/IGhzaCAqIC0yIDogaHNoKTtcbn07XG52YXIgcnVsZVRvU3RyaW5nID0gZnVuY3Rpb24gcnVsZVRvU3RyaW5nKHJ1bGUsIGltcG9ydGFudCkge1xuICB2YXIgaiwgbGVuMSwgb3V0cHV0LCBwcm9wLCBwcm9wZXJ0eSwgcHJvcHMsIHZhbHVlO1xuICBvdXRwdXQgPSAnJztcbiAgcHJvcHMgPSBzb3J0KE9iamVjdC5rZXlzKHJ1bGUpKTtcblxuICBmb3IgKGogPSAwLCBsZW4xID0gcHJvcHMubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgcHJvcCA9IHByb3BzW2pdO1xuXG4gICAgaWYgKHR5cGVvZiBydWxlW3Byb3BdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgcnVsZVtwcm9wXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHByb3BlcnR5ID0gbm9ybWFsaXplUHJvcGVydHkocHJvcCk7XG4gICAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHByb3BlcnR5LCBydWxlW3Byb3BdKTtcblxuICAgICAgaWYgKGltcG9ydGFudCkge1xuICAgICAgICB2YWx1ZSArPSBcIiAhaW1wb3J0YW50XCI7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCArPSBcIlwiLmNvbmNhdChwcm9wZXJ0eSwgXCI6XCIpLmNvbmNhdCh2YWx1ZSwgXCI7XCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59O1xudmFyIGlubGluZVN0eWxlQ29uZmlnID0gc3R5bGVDb25maWcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIGlubGluZVN0eWxlID0gZnVuY3Rpb24gaW5saW5lU3R5bGUocnVsZSwgdmFsdWVUb1N0b3JlLCBsZXZlbCkge1xuICB2YXIgY29uZmlnLCBzdHlsZUVsO1xuXG4gIGlmICghKGNvbmZpZyA9IHN0eWxlQ29uZmlnW2xldmVsXSkpIHtcbiAgICBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsLmlkID0gXCJxdWlja2Nzc1wiLmNvbmNhdChsZXZlbCB8fCAnJyk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgICBzdHlsZUNvbmZpZ1tsZXZlbF0gPSBjb25maWcgPSB7XG4gICAgICBlbDogc3R5bGVFbCxcbiAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgY2FjaGU6IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFjb25maWcuY2FjaGVbcnVsZV0pIHtcbiAgICBjb25maWcuY2FjaGVbcnVsZV0gPSB2YWx1ZVRvU3RvcmUgfHwgdHJ1ZTtcbiAgICBjb25maWcuZWwudGV4dENvbnRlbnQgPSBjb25maWcuY29udGVudCArPSBydWxlO1xuICB9XG59O1xudmFyIGNsZWFySW5saW5lU3R5bGUgPSBmdW5jdGlvbiBjbGVhcklubGluZVN0eWxlKGxldmVsKSB7XG4gIHZhciBjb25maWcsIGosIGtleSwga2V5cywgbGVuMTtcblxuICBpZiAoY29uZmlnID0gc3R5bGVDb25maWdbbGV2ZWxdKSB7XG4gICAgaWYgKCFjb25maWcuY29udGVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZy5lbC50ZXh0Q29udGVudCA9IGNvbmZpZy5jb250ZW50ID0gJyc7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZy5jYWNoZSk7XG5cbiAgICBmb3IgKGogPSAwLCBsZW4xID0ga2V5cy5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgIGtleSA9IGtleXNbal07XG4gICAgICBjb25maWcuY2FjaGVba2V5XSA9IG51bGw7XG4gICAgfVxuICB9XG59O3ZhciB2ZXJzaW9uID0gXCIxLjQuMlwiO3ZhciBfcXVpY2tjc3M7XG52YXIgaW5kZXggPSBfcXVpY2tjc3MgPSBmdW5jdGlvbiBxdWlja2Nzcyh0YXJnZXRFbCwgcHJvcGVydHksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgdmFyIGNvbXB1dGVkU3R5bGUsIGksIGxlbiwgc3ViRWwsIHN1YlByb3BlcnR5LCBzdWJWYWx1ZTtcblxuICBzd2l0Y2ggKGZhbHNlKSB7XG4gICAgY2FzZSAhaXNJdGVyYWJsZSh0YXJnZXRFbCk6XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSB0YXJnZXRFbC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBzdWJFbCA9IHRhcmdldEVsW2ldO1xuXG4gICAgICAgIF9xdWlja2NzcyhzdWJFbCwgcHJvcGVydHksIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIF90eXBlb2YocHJvcGVydHkpICE9PSAnb2JqZWN0JzpcbiAgICAgIC8vIFBhc3NlZCBhIHN0eWxlIG1hcFxuICAgICAgZm9yIChzdWJQcm9wZXJ0eSBpbiBwcm9wZXJ0eSkge1xuICAgICAgICBzdWJWYWx1ZSA9IHByb3BlcnR5W3N1YlByb3BlcnR5XTtcblxuICAgICAgICBfcXVpY2tjc3ModGFyZ2V0RWwsIHN1YlByb3BlcnR5LCBzdWJWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHByb3BlcnR5ID0gbm9ybWFsaXplUHJvcGVydHkocHJvcGVydHkpO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb21wdXRlZFN0eWxlID0gdGFyZ2V0RWwuX2NvbXB1dGVkU3R5bGUgfHwgKHRhcmdldEVsLl9jb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXRFbCkpO1xuICAgICAgICByZXR1cm4gY29tcHV0ZWRTdHlsZVtwcm9wZXJ0eV07XG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgIHRhcmdldEVsLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCBub3JtYWxpemVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpLCBpbXBvcnRhbnQgPyBJTVBPUlRBTlQgOiB2b2lkIDApO1xuICAgICAgfVxuXG4gIH1cbn07XG5cbl9xdWlja2Nzcy5hbmltYXRpb24gPSBmdW5jdGlvbiAobmFtZSQkMSwgZnJhbWVzKSB7XG4gIHZhciBmcmFtZSwgZ2VuZXJhdGVkLCBwcmVmaXgsIHJ1bGVzO1xuXG4gIGlmIChuYW1lJCQxICYmIHR5cGVvZiBuYW1lJCQxID09PSAnc3RyaW5nJyAmJiBmcmFtZXMgJiYgX3R5cGVvZihmcmFtZXMpID09PSAnb2JqZWN0Jykge1xuICAgIHByZWZpeCA9IGdldFByZWZpeCgnYW5pbWF0aW9uJyk7XG4gICAgZ2VuZXJhdGVkID0gJyc7XG5cbiAgICBmb3IgKGZyYW1lIGluIGZyYW1lcykge1xuICAgICAgcnVsZXMgPSBmcmFtZXNbZnJhbWVdO1xuICAgICAgZ2VuZXJhdGVkICs9IFwiXCIuY29uY2F0KGZyYW1lLCBcIiB7XCIpLmNvbmNhdChydWxlVG9TdHJpbmcocnVsZXMpLCBcIn1cIik7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVkID0gXCJAXCIuY29uY2F0KHByZWZpeCwgXCJrZXlmcmFtZXMgXCIpLmNvbmNhdChuYW1lJCQxLCBcIiB7XCIpLmNvbmNhdChnZW5lcmF0ZWQsIFwifVwiKTtcbiAgICByZXR1cm4gaW5saW5lU3R5bGUoZ2VuZXJhdGVkLCB0cnVlLCAwKTtcbiAgfVxufTtcblxuX3F1aWNrY3NzLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHJ1bGUsIGxldmVsLCBpbXBvcnRhbnQpIHtcbiAgdmFyIGNsYXNzTmFtZSwgcmVmLCBzdHlsZTtcblxuICBpZiAocnVsZSAmJiBfdHlwZW9mKHJ1bGUpID09PSAnb2JqZWN0Jykge1xuICAgIGxldmVsIHx8IChsZXZlbCA9IDApO1xuICAgIHJ1bGUgPSBydWxlVG9TdHJpbmcocnVsZSwgaW1wb3J0YW50KTtcblxuICAgIGlmICghKGNsYXNzTmFtZSA9IChyZWYgPSBpbmxpbmVTdHlsZUNvbmZpZ1tsZXZlbF0pICE9IG51bGwgPyByZWZbcnVsZV0gOiB2b2lkIDApKSB7XG4gICAgICBjbGFzc05hbWUgPSBoYXNoKHJ1bGUpO1xuICAgICAgc3R5bGUgPSBcIi5cIi5jb25jYXQoY2xhc3NOYW1lLCBcIiB7XCIpLmNvbmNhdChydWxlLCBcIn1cIik7XG4gICAgICBpbmxpbmVTdHlsZShzdHlsZSwgY2xhc3NOYW1lLCBsZXZlbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxufTtcblxuX3F1aWNrY3NzLmNsZWFyUmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICByZXR1cm4gY2xlYXJJbmxpbmVTdHlsZShsZXZlbCB8fCAwKTtcbn07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbl9xdWlja2Nzcy5VTlNFVCA9IGZ1bmN0aW9uICgpIHtcbiAgc3dpdGNoIChmYWxzZSkge1xuICAgIGNhc2UgIWlzVmFsdWVTdXBwb3J0ZWQoJ2Rpc3BsYXknLCAndW5zZXQnKTpcbiAgICAgIHJldHVybiAndW5zZXQnO1xuXG4gICAgY2FzZSAhaXNWYWx1ZVN1cHBvcnRlZCgnZGlzcGxheScsICdpbml0aWFsJyk6XG4gICAgICByZXR1cm4gJ2luaXRpYWwnO1xuXG4gICAgY2FzZSAhaXNWYWx1ZVN1cHBvcnRlZCgnZGlzcGxheScsICdpbmhlcml0Jyk6XG4gICAgICByZXR1cm4gJ2luaGVyaXQnO1xuICB9XG59KCk7XG5cbl9xdWlja2Nzcy5zdXBwb3J0cyA9IGlzVmFsdWVTdXBwb3J0ZWQ7XG5fcXVpY2tjc3Muc3VwcG9ydHNQcm9wZXJ0eSA9IGlzUHJvcFN1cHBvcnRlZDtcbl9xdWlja2Nzcy5ub3JtYWxpemVQcm9wZXJ0eSA9IG5vcm1hbGl6ZVByb3BlcnR5O1xuX3F1aWNrY3NzLm5vcm1hbGl6ZVZhbHVlID0gbm9ybWFsaXplVmFsdWU7XG5fcXVpY2tjc3MudmVyc2lvbiA9IHZlcnNpb247ZXhwb3J0IGRlZmF1bHQgaW5kZXg7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufXZhciBfZXh0ZW5kLCBpc0FycmF5LCBpc09iamVjdCwgX3Nob3VsZERlZXBFeHRlbmQ7XG5cbmlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KHRhcmdldCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xufTtcblxuaXNPYmplY3QgPSBmdW5jdGlvbiBpc09iamVjdCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGFyZ2V0KSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgfHwgaXNBcnJheSh0YXJnZXQpO1xufTtcblxuX3Nob3VsZERlZXBFeHRlbmQgPSBmdW5jdGlvbiBzaG91bGREZWVwRXh0ZW5kKG9wdGlvbnMsIHRhcmdldCwgcGFyZW50S2V5KSB7XG4gIGlmIChvcHRpb25zLmRlZXApIHtcbiAgICBpZiAob3B0aW9ucy5ub3REZWVwKSB7XG4gICAgICByZXR1cm4gIW9wdGlvbnMubm90RGVlcFt0YXJnZXRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5kZWVwT25seSkge1xuICAgIHJldHVybiBvcHRpb25zLmRlZXBPbmx5W3RhcmdldF0gfHwgcGFyZW50S2V5ICYmIF9zaG91bGREZWVwRXh0ZW5kKG9wdGlvbnMsIHBhcmVudEtleSk7XG4gIH1cbn07IC8vIGVsc2UgZmFsc2VcblxuXG52YXIgZXh0ZW5kID0gX2V4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZChvcHRpb25zLCB0YXJnZXQsIHNvdXJjZXMsIHBhcmVudEtleSkge1xuICB2YXIgaSwga2V5LCBsZW4sIHNvdXJjZSwgc291cmNlVmFsdWUsIHN1YlRhcmdldCwgdGFyZ2V0VmFsdWU7XG5cbiAgaWYgKCF0YXJnZXQgfHwgX3R5cGVvZih0YXJnZXQpICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGFyZ2V0ID0ge307XG4gIH1cblxuICBmb3IgKGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgc291cmNlID0gc291cmNlc1tpXTtcblxuICAgIGlmIChzb3VyY2UgIT0gbnVsbCkge1xuICAgICAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIHNvdXJjZVZhbHVlID0gc291cmNlW2tleV07XG4gICAgICAgIHRhcmdldFZhbHVlID0gdGFyZ2V0W2tleV07XG5cbiAgICAgICAgaWYgKHNvdXJjZVZhbHVlID09PSB0YXJnZXQgfHwgc291cmNlVmFsdWUgPT09IHZvaWQgMCB8fCBzb3VyY2VWYWx1ZSA9PT0gbnVsbCAmJiAhb3B0aW9ucy5hbGxvd051bGwgJiYgIW9wdGlvbnMubnVsbERlbGV0ZXMgfHwgb3B0aW9ucy5rZXlzICYmICFvcHRpb25zLmtleXNba2V5XSB8fCBvcHRpb25zLm5vdEtleXMgJiYgb3B0aW9ucy5ub3RLZXlzW2tleV0gfHwgb3B0aW9ucy5vd24gJiYgIXNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IG9wdGlvbnMuZ2xvYmFsRmlsdGVyICYmICFvcHRpb25zLmdsb2JhbEZpbHRlcihzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpIHx8IG9wdGlvbnMuZmlsdGVycyAmJiBvcHRpb25zLmZpbHRlcnNba2V5XSAmJiAhb3B0aW9ucy5maWx0ZXJzW2tleV0oc291cmNlVmFsdWUsIGtleSwgc291cmNlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNvdXJjZVZhbHVlID09PSBudWxsICYmIG9wdGlvbnMubnVsbERlbGV0ZXMpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5nbG9iYWxUcmFuc2Zvcm0pIHtcbiAgICAgICAgICBzb3VyY2VWYWx1ZSA9IG9wdGlvbnMuZ2xvYmFsVHJhbnNmb3JtKHNvdXJjZVZhbHVlLCBrZXksIHNvdXJjZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy50cmFuc2Zvcm1zICYmIG9wdGlvbnMudHJhbnNmb3Jtc1trZXldKSB7XG4gICAgICAgICAgc291cmNlVmFsdWUgPSBvcHRpb25zLnRyYW5zZm9ybXNba2V5XShzb3VyY2VWYWx1ZSwga2V5LCBzb3VyY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChmYWxzZSkge1xuICAgICAgICAgIGNhc2UgIShvcHRpb25zLmNvbmNhdCAmJiBpc0FycmF5KHNvdXJjZVZhbHVlKSAmJiBpc0FycmF5KHRhcmdldFZhbHVlKSk6XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHRhcmdldFZhbHVlLmNvbmNhdChzb3VyY2VWYWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgIShfc2hvdWxkRGVlcEV4dGVuZChvcHRpb25zLCBrZXksIHBhcmVudEtleSkgJiYgaXNPYmplY3Qoc291cmNlVmFsdWUpKTpcbiAgICAgICAgICAgIHN1YlRhcmdldCA9IGlzT2JqZWN0KHRhcmdldFZhbHVlKSA/IHRhcmdldFZhbHVlIDogaXNBcnJheShzb3VyY2VWYWx1ZSkgPyBbXSA6IHt9O1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBfZXh0ZW5kKG9wdGlvbnMsIHN1YlRhcmdldCwgW3NvdXJjZVZhbHVlXSwga2V5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTt2YXIgdmVyc2lvbiA9IFwiMS43LjRcIjt2YXIgbW9kaWZpZXJzLCBuZXdCdWlsZGVyLCBub3JtYWxpemVLZXlzLCBwcmltYXJ5QnVpbGRlcjtcblxubm9ybWFsaXplS2V5cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUtleXMoa2V5cykge1xuICB2YXIgaSwga2V5LCBsZW4sIG91dHB1dDtcblxuICBpZiAoa2V5cykge1xuICAgIG91dHB1dCA9IHt9O1xuXG4gICAgaWYgKF90eXBlb2Yoa2V5cykgIT09ICdvYmplY3QnKSB7XG4gICAgICBvdXRwdXRba2V5c10gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGtleXMpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgIG91dHB1dFtrZXldID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG59O1xuXG5uZXdCdWlsZGVyID0gZnVuY3Rpb24gbmV3QnVpbGRlcihpc0Jhc2UpIHtcbiAgdmFyIF9idWlsZGVyO1xuXG4gIF9idWlsZGVyID0gZnVuY3Rpb24gYnVpbGRlcih0YXJnZXQpIHtcbiAgICB2YXIgdGhlVGFyZ2V0O1xuICAgIHZhciAkX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsICRfaSA9IC0xLCBzb3VyY2VzID0gbmV3IEFycmF5KCRfbGVuKTsgd2hpbGUgKCsrJF9pIDwgJF9sZW4pIHNvdXJjZXNbJF9pXSA9IGFyZ3VtZW50c1skX2ldO1xuXG4gICAgaWYgKF9idWlsZGVyLm9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICB0aGVUYXJnZXQgPSBfYnVpbGRlci5vcHRpb25zLnRhcmdldDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhlVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgc291cmNlcy5zaGlmdCgpO1xuICAgIH1cblxuICAgIHJldHVybiBleHRlbmQoX2J1aWxkZXIub3B0aW9ucywgdGhlVGFyZ2V0LCBzb3VyY2VzKTtcbiAgfTtcblxuICBpZiAoaXNCYXNlKSB7XG4gICAgX2J1aWxkZXIuaXNCYXNlID0gdHJ1ZTtcbiAgfVxuXG4gIF9idWlsZGVyLm9wdGlvbnMgPSB7fTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoX2J1aWxkZXIsIG1vZGlmaWVycyk7XG4gIHJldHVybiBfYnVpbGRlcjtcbn07XG5cbm1vZGlmaWVycyA9IHtcbiAgJ2RlZXAnOiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgXztcblxuICAgICAgXyA9IHRoaXMuaXNCYXNlID8gbmV3QnVpbGRlcigpIDogdGhpcztcbiAgICAgIF8ub3B0aW9ucy5kZWVwID0gdHJ1ZTtcbiAgICAgIHJldHVybiBfO1xuICAgIH1cbiAgfSxcbiAgJ293bic6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfO1xuXG4gICAgICBfID0gdGhpcy5pc0Jhc2UgPyBuZXdCdWlsZGVyKCkgOiB0aGlzO1xuICAgICAgXy5vcHRpb25zLm93biA9IHRydWU7XG4gICAgICByZXR1cm4gXztcbiAgICB9XG4gIH0sXG4gICdhbGxvd051bGwnOiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgXztcblxuICAgICAgXyA9IHRoaXMuaXNCYXNlID8gbmV3QnVpbGRlcigpIDogdGhpcztcbiAgICAgIF8ub3B0aW9ucy5hbGxvd051bGwgPSB0cnVlO1xuICAgICAgcmV0dXJuIF87XG4gICAgfVxuICB9LFxuICAnbnVsbERlbGV0ZXMnOiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgXztcblxuICAgICAgXyA9IHRoaXMuaXNCYXNlID8gbmV3QnVpbGRlcigpIDogdGhpcztcbiAgICAgIF8ub3B0aW9ucy5udWxsRGVsZXRlcyA9IHRydWU7XG4gICAgICByZXR1cm4gXztcbiAgICB9XG4gIH0sXG4gICdjb25jYXQnOiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgXztcblxuICAgICAgXyA9IHRoaXMuaXNCYXNlID8gbmV3QnVpbGRlcigpIDogdGhpcztcbiAgICAgIF8ub3B0aW9ucy5jb25jYXQgPSB0cnVlO1xuICAgICAgcmV0dXJuIF87XG4gICAgfVxuICB9LFxuICAnY2xvbmUnOiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgXztcblxuICAgICAgXyA9IHRoaXMuaXNCYXNlID8gbmV3QnVpbGRlcigpIDogdGhpcztcbiAgICAgIF8ub3B0aW9ucy50YXJnZXQgPSB7fTtcbiAgICAgIHJldHVybiBfO1xuICAgIH1cbiAgfSxcbiAgJ25vdERlZXAnOiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgXztcblxuICAgICAgXyA9IHRoaXMuaXNCYXNlID8gbmV3QnVpbGRlcigpIDogdGhpcztcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoa2V5cykge1xuICAgICAgICBfLm9wdGlvbnMubm90RGVlcCA9IG5vcm1hbGl6ZUtleXMoa2V5cyk7XG4gICAgICAgIHJldHVybiBfO1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gICdkZWVwT25seSc6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfO1xuXG4gICAgICBfID0gdGhpcy5pc0Jhc2UgPyBuZXdCdWlsZGVyKCkgOiB0aGlzO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgIF8ub3B0aW9ucy5kZWVwT25seSA9IG5vcm1hbGl6ZUtleXMoa2V5cyk7XG4gICAgICAgIHJldHVybiBfO1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gICdrZXlzJzoge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF87XG5cbiAgICAgIF8gPSB0aGlzLmlzQmFzZSA/IG5ld0J1aWxkZXIoKSA6IHRoaXM7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGtleXMpIHtcbiAgICAgICAgXy5vcHRpb25zLmtleXMgPSBub3JtYWxpemVLZXlzKGtleXMpO1xuICAgICAgICByZXR1cm4gXztcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICAnbm90S2V5cyc6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfO1xuXG4gICAgICBfID0gdGhpcy5pc0Jhc2UgPyBuZXdCdWlsZGVyKCkgOiB0aGlzO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgIF8ub3B0aW9ucy5ub3RLZXlzID0gbm9ybWFsaXplS2V5cyhrZXlzKTtcbiAgICAgICAgcmV0dXJuIF87XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgJ3RyYW5zZm9ybSc6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfO1xuXG4gICAgICBfID0gdGhpcy5pc0Jhc2UgPyBuZXdCdWlsZGVyKCkgOiB0aGlzO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2Zvcm0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBfLm9wdGlvbnMuZ2xvYmFsVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zZm9ybSAmJiBfdHlwZW9mKHRyYW5zZm9ybSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgXy5vcHRpb25zLnRyYW5zZm9ybXMgPSB0cmFuc2Zvcm07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXztcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICAnZmlsdGVyJzoge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF87XG5cbiAgICAgIF8gPSB0aGlzLmlzQmFzZSA/IG5ld0J1aWxkZXIoKSA6IHRoaXM7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIF8ub3B0aW9ucy5nbG9iYWxGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyICYmIF90eXBlb2YoZmlsdGVyKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBfLm9wdGlvbnMuZmlsdGVycyA9IGZpbHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG5wcmltYXJ5QnVpbGRlciA9IG5ld0J1aWxkZXIodHJ1ZSk7XG5wcmltYXJ5QnVpbGRlci52ZXJzaW9uID0gdmVyc2lvbjtcbnZhciBwcmltYXJ5QnVpbGRlciQxID0gcHJpbWFyeUJ1aWxkZXI7ZXhwb3J0IGRlZmF1bHQgcHJpbWFyeUJ1aWxkZXIkMTsiLCJleHBvcnQgdGVtcGxhdGUgPSBbICMgVG8gY29weSBmcm9tIERPTSBFbGVtZW50c1xuXHQnaWQnXG5cdCduYW1lJ1xuXHQndHlwZSdcblx0J2hyZWYnXG5cdCdzZWxlY3RlZCdcblx0J2NoZWNrZWQnXG5cdCdjbGFzc05hbWUnXG5dXG5cbmV4cG9ydCBlbGVtZW50ID0gWyAjIFVzZWQgaW4gUXVpY2tFbGVtZW50Ojp0b0pTT05cblx0J2lkJ1xuXHQncmVmJ1xuXHQndHlwZSdcblx0J25hbWUnXG5cdCd0ZXh0J1xuXHQnc3R5bGUnXG5cdCdjbGFzcydcblx0J2NsYXNzTmFtZSdcblx0J3VybCdcblx0J2hyZWYnXG5cdCdzZWxlY3RlZCdcblx0J2NoZWNrZWQnXG5cdCdwcm9wcydcblx0J2F0dHJzJ1xuXHQncGFzc1N0YXRlVG9DaGlsZHJlbidcblx0J3N0YXRlVHJpZ2dlcnMnXG5cdCd1bnBhc3NhYmxlU3RhdGVzJ1xuXHQjICdyZWxhdGVkSW5zdGFuY2UnXG5dIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59dmFyIGRlZmluZWQgPSBmdW5jdGlvbiBkZWZpbmVkKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QgIT09IHZvaWQgMDtcbn07XG52YXIgYXJyYXkgPSBmdW5jdGlvbiBhcnJheShzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0IGluc3RhbmNlb2YgQXJyYXk7XG59O1xudmFyIG9iamVjdCA9IGZ1bmN0aW9uIG9iamVjdChzdWJqZWN0KSB7XG4gIHJldHVybiBfdHlwZW9mKHN1YmplY3QpID09PSAnb2JqZWN0JyAmJiBzdWJqZWN0OyAvLyAybmQgY2hlY2sgaXMgdG8gdGVzdCBhZ2FpbnN0ICdudWxsJyB2YWx1ZXNcbn07XG52YXIgb2JqZWN0UGxhaW4gPSBmdW5jdGlvbiBvYmplY3RQbGFpbihzdWJqZWN0KSB7XG4gIHJldHVybiBvYmplY3Qoc3ViamVjdCkgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN1YmplY3QpID09PSAnW29iamVjdCBPYmplY3RdJyAmJiBzdWJqZWN0LmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59O1xudmFyIHN0cmluZyA9IGZ1bmN0aW9uIHN0cmluZyhzdWJqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygc3ViamVjdCA9PT0gJ3N0cmluZyc7XG59O1xudmFyIG51bWJlciA9IGZ1bmN0aW9uIG51bWJlcihzdWJqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygc3ViamVjdCA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHN1YmplY3QpO1xufTtcbnZhciBudW1iZXJMb29zZSA9IGZ1bmN0aW9uIG51bWJlckxvb3NlKHN1YmplY3QpIHtcbiAgcmV0dXJuIG51bWJlcihzdWJqZWN0KSB8fCBzdHJpbmcoc3ViamVjdCkgJiYgbnVtYmVyKE51bWJlcihzdWJqZWN0KSk7XG59O1xudmFyIGl0ZXJhYmxlID0gZnVuY3Rpb24gaXRlcmFibGUoc3ViamVjdCkge1xuICByZXR1cm4gb2JqZWN0KHN1YmplY3QpICYmIG51bWJlcihzdWJqZWN0Lmxlbmd0aCk7XG59O1xudmFyIGZ1bmN0aW9uXyA9IGZ1bmN0aW9uIGZ1bmN0aW9uXyhzdWJqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygc3ViamVjdCA9PT0gJ2Z1bmN0aW9uJztcbn07dmFyIG5hdGl2ZXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7ZGVmaW5lZDogZGVmaW5lZCxhcnJheTogYXJyYXksb2JqZWN0OiBvYmplY3Qsb2JqZWN0UGxhaW46IG9iamVjdFBsYWluLHN0cmluZzogc3RyaW5nLG51bWJlcjogbnVtYmVyLG51bWJlckxvb3NlOiBudW1iZXJMb29zZSxpdGVyYWJsZTogaXRlcmFibGUsZnVuY3Rpb25fOiBmdW5jdGlvbl99KTt2YXIgZG9tRG9jID0gZnVuY3Rpb24gZG9tRG9jKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QgJiYgc3ViamVjdC5ub2RlVHlwZSA9PT0gOTtcbn07XG52YXIgZG9tRWwgPSBmdW5jdGlvbiBkb21FbChzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0ICYmIHN1YmplY3Qubm9kZVR5cGUgPT09IDE7XG59O1xudmFyIGRvbVRleHQgPSBmdW5jdGlvbiBkb21UZXh0KHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QgJiYgc3ViamVjdC5ub2RlVHlwZSA9PT0gMztcbn07XG52YXIgZG9tTm9kZSA9IGZ1bmN0aW9uIGRvbU5vZGUoc3ViamVjdCkge1xuICByZXR1cm4gZG9tRWwoc3ViamVjdCkgfHwgZG9tVGV4dChzdWJqZWN0KTtcbn07XG52YXIgZG9tVGV4dGFyZWEgPSBmdW5jdGlvbiBkb21UZXh0YXJlYShzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0ICYmIHN1YmplY3Qubm9kZU5hbWUgPT09ICdURVhUQVJFQSc7XG59O1xudmFyIGRvbUlucHV0ID0gZnVuY3Rpb24gZG9tSW5wdXQoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdCAmJiBzdWJqZWN0Lm5vZGVOYW1lID09PSAnSU5QVVQnO1xufTtcbnZhciBkb21TZWxlY3QgPSBmdW5jdGlvbiBkb21TZWxlY3Qoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdCAmJiBzdWJqZWN0Lm5vZGVOYW1lID09PSAnU0VMRUNUJztcbn07XG52YXIgZG9tRmllbGQgPSBmdW5jdGlvbiBkb21GaWVsZChzdWJqZWN0KSB7XG4gIHJldHVybiBkb21JbnB1dChzdWJqZWN0KSB8fCBkb21UZXh0YXJlYShzdWJqZWN0KSB8fCBkb21TZWxlY3Qoc3ViamVjdCk7XG59O3ZhciBkb20gPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7ZG9tRG9jOiBkb21Eb2MsZG9tRWw6IGRvbUVsLGRvbVRleHQ6IGRvbVRleHQsZG9tTm9kZTogZG9tTm9kZSxkb21UZXh0YXJlYTogZG9tVGV4dGFyZWEsZG9tSW5wdXQ6IGRvbUlucHV0LGRvbVNlbGVjdDogZG9tU2VsZWN0LGRvbUZpZWxkOiBkb21GaWVsZH0pO3ZhciBBVkFJTF9TRVRTLCBDaGVja3M7XG5BVkFJTF9TRVRTID0ge1xuICBuYXRpdmVzOiBuYXRpdmVzLFxuICBkb206IGRvbVxufTtcblxuQ2hlY2tzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgX2NyZWF0ZUNsYXNzKENoZWNrcywgW3tcbiAgICBrZXk6IFwiY3JlYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHZhciBhcmdzO1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBDaGVja3MoYXJncyk7XG4gICAgfVxuICB9XSk7XG5cbiAgZnVuY3Rpb24gQ2hlY2tzKHNldHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hlY2tzKTtcblxuICAgIHZhciBpLCBsZW4sIHNldDtcblxuICAgIGlmIChzZXRzID09IG51bGwpIHtcbiAgICAgIHNldHMgPSBbJ25hdGl2ZXMnXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBzZXRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBzZXQgPSBzZXRzW2ldO1xuXG4gICAgICBpZiAoQVZBSUxfU0VUU1tzZXRdKSB7XG4gICAgICAgIHRoaXMubG9hZChBVkFJTF9TRVRTW3NldF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDaGVja3MsIFt7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZChzZXQpIHtcbiAgICAgIHZhciBrZXksIHZhbHVlO1xuXG4gICAgICBpZiAoQVZBSUxfU0VUUy5uYXRpdmVzLnN0cmluZyhzZXQpKSB7XG4gICAgICAgIHNldCA9IEFWQUlMX1NFVFNbc2V0XTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFBVkFJTF9TRVRTLm5hdGl2ZXMub2JqZWN0UGxhaW4oc2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAoa2V5IGluIHNldCkge1xuICAgICAgICB2YWx1ZSA9IHNldFtrZXldO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdmdW5jdGlvbl8nKSB7XG4gICAgICAgICAga2V5ID0gJ2Z1bmN0aW9uJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaGVja3M7XG59KCk7XG5cbnZhciBpbmRleCA9IENoZWNrcy5wcm90b3R5cGUuY3JlYXRlKCk7ZXhwb3J0IGRlZmF1bHQgaW5kZXg7IiwiaW1wb3J0IElTXyBmcm9tICdAZGFuaWVsa2FsZW4vaXMnXG5JUyA9IElTXy5jcmVhdGUoJ25hdGl2ZXMnLCdkb20nKVxuSVMubG9hZFx0XG5cdHF1aWNrRG9tRWw6IChzdWJqZWN0KS0+IHN1YmplY3QgYW5kIHN1YmplY3QuY29uc3RydWN0b3IubmFtZSBpcyAnUXVpY2tFbGVtZW50J1xuXHRcblx0dGVtcGxhdGU6IChzdWJqZWN0KS0+IHN1YmplY3QgYW5kIHN1YmplY3QuY29uc3RydWN0b3IubmFtZSBpcyAnUXVpY2tUZW1wbGF0ZSdcblx0XG5cdCMgYmF0Y2g6IChzdWJqZWN0KS0+IHN1YmplY3QgYW5kIHN1YmplY3QuY29uc3RydWN0b3IubmFtZSBpcyAnUXVpY2tCYXRjaCdcblxuZXhwb3J0IGRlZmF1bHQgSVMiLCJpbXBvcnQgSVMgZnJvbSAnLi9jaGVja3MnXG5RdWlja0VsZW1lbnQgPSBudWxsXG5RdWlja1dpbmRvdyA9IG51bGxcblxucXVpY2tkb20gPSAoKS0+XG5cdGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aClcblx0YXJnc1tpXSA9IGFyZyBmb3IgYXJnLGkgaW4gYXJndW1lbnRzXG5cdHByZXZDb3VudCA9IFF1aWNrRWxlbWVudC5jb3VudFxuXHRlbGVtZW50ID0gcXVpY2tkb20uY3JlYXRlKGFyZ3MpXG5cdGVsZW1lbnQuX3Bvc3RDcmVhdGlvbigpIGlmIGVsZW1lbnQgYW5kIGVsZW1lbnQuX3Bvc3RDcmVhdGlvbiBhbmQgUXVpY2tFbGVtZW50LmNvdW50IGlzbnQgcHJldkNvdW50XG5cdHJldHVybiBlbGVtZW50XG5cbnF1aWNrZG9tLmNyZWF0ZSA9IChhcmdzKS0+IHN3aXRjaFxuXHR3aGVuIElTLmFycmF5KGFyZ3NbMF0pXG5cdFx0cmV0dXJuIHF1aWNrZG9tKGFyZ3NbMF0uLi4pXG5cdFxuXHR3aGVuIElTLnRlbXBsYXRlKGFyZ3NbMF0pXG5cdFx0cmV0dXJuIGFyZ3NbMF0uc3Bhd24oKVxuXHRcblx0d2hlbiBJUy5xdWlja0RvbUVsKGFyZ3NbMF0pXG5cdFx0cmV0dXJuIGlmIGFyZ3NbMV0gdGhlbiBhcmdzWzBdLnVwZGF0ZU9wdGlvbnMoYXJnc1sxXSkgZWxzZSBhcmdzWzBdXG5cdFxuXHR3aGVuIElTLmRvbU5vZGUoYXJnc1swXSkgb3IgSVMuZG9tRG9jKGFyZ3NbMF0pXG5cdFx0aWYgYXJnc1swXS5fcXVpY2tFbGVtZW50XG5cdFx0XHRyZXR1cm4gYXJnc1swXS5fcXVpY2tFbGVtZW50XG5cdFx0XG5cdFx0dHlwZSA9IGFyZ3NbMF0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcjJywgJycpXG5cdFx0b3B0aW9ucyA9IGFyZ3NbMV0gb3Ige31cblx0XHRvcHRpb25zLmV4aXN0aW5nID0gYXJnc1swXVxuXHRcdHJldHVybiBuZXcgUXVpY2tFbGVtZW50KHR5cGUsIG9wdGlvbnMpXG5cblx0d2hlbiBhcmdzWzBdIGlzIHdpbmRvd1xuXHRcdHJldHVybiBRdWlja1dpbmRvd1xuXG5cdHdoZW4gSVMuc3RyaW5nKGFyZ3NbMF0pXHRcdFx0XG5cdFx0dHlwZSA9IGFyZ3NbMF0udG9Mb3dlckNhc2UoKVxuXHRcdGlmIHR5cGUgaXMgJ3RleHQnXG5cdFx0XHRvcHRpb25zID0gaWYgSVMub2JqZWN0KGFyZ3NbMV0pIHRoZW4gYXJnc1sxXSBlbHNlIHt0ZXh0OmFyZ3NbMV0gb3IgJyd9XG5cdFx0ZWxzZVxuXHRcdFx0b3B0aW9ucyA9IGlmIElTLm9iamVjdChhcmdzWzFdKSB0aGVuIGFyZ3NbMV0gZWxzZSB7fVxuXHRcdFxuXHRcdGVsZW1lbnQgPSBuZXcgUXVpY2tFbGVtZW50KHR5cGUsIG9wdGlvbnMpXG5cdFx0aWYgYXJncy5sZW5ndGggPiAyXG5cdFx0XHRjaGlsZHJlbiA9IG5ldyBBcnJheShhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGgpOyBpID0gMTtcblx0XHRcdGNoaWxkcmVuW2krMV0gPSBhcmdzW2ldIHdoaWxlICsraSA8IGFyZ3NMZW5ndGhcblxuXHRcdFx0Zm9yIGNoaWxkIGluIGNoaWxkcmVuXG5cdFx0XHRcdGNoaWxkID0gcXVpY2tkb20udGV4dChjaGlsZCkgaWYgSVMuc3RyaW5nKGNoaWxkKVxuXHRcdFx0XHRjaGlsZCA9IHF1aWNrZG9tKGNoaWxkLi4uKSBpZiBJUy5hcnJheShjaGlsZClcblx0XHRcdFx0ZWxlbWVudC5hcHBlbmQoY2hpbGQpIGlmIElTLnF1aWNrRG9tRWwoY2hpbGQpXG5cblx0XHRyZXR1cm4gZWxlbWVudFxuXG5cdHdoZW4gYXJnc1swXSBhbmQgKElTLmRvbU5vZGUoYXJnc1swXVswXSkgb3IgSVMuZG9tRG9jKGFyZ3NbMF1bMF0pKVxuXHRcdHJldHVybiBxdWlja2RvbShhcmdzWzBdWzBdKVxuXG5cblxucXVpY2tkb20uaHRtbCA9IChpbm5lckhUTUwpLT5cblx0Y29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0Y29udGFpbmVyLmlubmVySFRNTCA9IGlubmVySFRNTFxuXHRjaGlsZHJlbiA9IEFycmF5OjpzbGljZS5jYWxsIGNvbnRhaW5lci5jaGlsZE5vZGVzXG5cblx0cmV0dXJuIHF1aWNrZG9tLmJhdGNoKGNoaWxkcmVuKVxuXG5cbnF1aWNrZG9tLmlzUXVpY2tFbCA9ICh0YXJnZXQpLT5cblx0SVMucXVpY2tEb21FbCh0YXJnZXQpXG5cbnF1aWNrZG9tLmlzRWwgPSAodGFyZ2V0KS0+XG5cdElTLmRvbUVsKHRhcmdldClcblxuZXhwb3J0IHtxdWlja2RvbSBhcyBkZWZhdWx0fVxuZXhwb3J0IGluaXQgPSAoUXVpY2tFbGVtZW50XywgUXVpY2tXaW5kb3dfKS0+XG5cdFF1aWNrRWxlbWVudCA9IFF1aWNrRWxlbWVudF9cblx0UXVpY2tXaW5kb3cgPSBRdWlja1dpbmRvd19cblx0cmV0dXJuIHF1aWNrZG9tIiwiaW1wb3J0IHF1aWNrZG9tIGZyb20gJy4vJ1xuaW1wb3J0IENTUyBmcm9tICdxdWlja2NzcydcbmltcG9ydCBJUyBmcm9tICcuL2NoZWNrcydcblxuZXhwb3J0IGluY2x1ZGVzID0gKHRhcmdldCwgaXRlbSktPlxuXHR0YXJnZXQgYW5kIHRhcmdldC5pbmRleE9mKGl0ZW0pIGlzbnQgLTFcblxuZXhwb3J0IHJlbW92ZUl0ZW0gPSAodGFyZ2V0LCBpdGVtKS0+XG5cdGl0ZW1JbmRleCA9IHRhcmdldC5pbmRleE9mKGl0ZW0pXG5cdHRhcmdldC5zcGxpY2UoaXRlbUluZGV4LCAxKSAgaWYgaXRlbUluZGV4IGlzbnQgLTFcblx0cmV0dXJuIHRhcmdldFxuXG5leHBvcnQgbm9ybWFsaXplRWxlbWVudEFyZyA9ICh0YXJnZXRFbCktPiBzd2l0Y2hcblx0d2hlbiBJUy5zdHJpbmcodGFyZ2V0RWwpIHRoZW4gcXVpY2tkb20udGV4dCh0YXJnZXRFbClcblx0d2hlbiBJUy5kb21Ob2RlKHRhcmdldEVsKSB0aGVuIHF1aWNrZG9tKHRhcmdldEVsKVxuXHR3aGVuIElTLnRlbXBsYXRlKHRhcmdldEVsKSB0aGVuIHRhcmdldEVsLnNwYXduKClcblx0ZWxzZSB0YXJnZXRFbFxuXG5cbmV4cG9ydCBpc1N0YXRlU3R5bGUgPSAoc3RyaW5nKS0+XG5cdHN0cmluZ1swXSBpcyAnJCcgb3Igc3RyaW5nWzBdIGlzICdAJ1xuXG5cbmV4cG9ydCByZWdpc3RlclN0eWxlID0gKHJ1bGUsIGxldmVsLCBpbXBvcnRhbnQpLT5cblx0bGV2ZWwgfHw9IDBcblx0Y2FjaGVkID0gc3R5bGVDYWNoZS5nZXQocnVsZSwgbGV2ZWwpXG5cdHJldHVybiBjYWNoZWQgaWYgY2FjaGVkXG5cdG91dHB1dCA9IHtjbGFzc05hbWU6W0NTUy5yZWdpc3RlcihydWxlLCBsZXZlbCwgaW1wb3J0YW50KV0sIGZuczpbXSwgcnVsZX1cblx0cHJvcHMgPSBPYmplY3Qua2V5cyhydWxlKVxuXHRcblx0Zm9yIHByb3AgaW4gcHJvcHMgd2hlbiB0eXBlb2YgcnVsZVtwcm9wXSBpcyAnZnVuY3Rpb24nXG5cdFx0b3V0cHV0LmZucy5wdXNoIFtwcm9wLCBydWxlW3Byb3BdXVxuXG5cdHJldHVybiBzdHlsZUNhY2hlLnNldChydWxlLCBvdXRwdXQsIGxldmVsKVxuXG5cbmV4cG9ydCBzdHlsZUNhY2hlID0gbmV3IGNsYXNzXG5cdGNvbnN0cnVjdG9yOiAoKS0+XG5cdFx0QGtleXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cdFx0QHZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuXHRnZXQ6IChrZXksIGxldmVsKS0+IGlmIEBrZXlzW2xldmVsXVxuXHRcdGluZGV4ID0gQGtleXNbbGV2ZWxdLmluZGV4T2Yoa2V5KVxuXHRcdHJldHVybiBAdmFsdWVzW2xldmVsXVtpbmRleF0gaWYgaW5kZXggaXNudCAtMVxuXG5cdHNldDogKGtleSwgdmFsdWUsIGxldmVsKS0+XG5cdFx0aWYgbm90IEBrZXlzW2xldmVsXVxuXHRcdFx0QGtleXNbbGV2ZWxdID0gW11cblx0XHRcdEB2YWx1ZXNbbGV2ZWxdID0gW11cblxuXHRcdEBrZXlzW2xldmVsXS5wdXNoIGtleVxuXHRcdEB2YWx1ZXNbbGV2ZWxdLnB1c2ggdmFsdWVcblx0XHRyZXR1cm4gdmFsdWVcblxuIiwiaW1wb3J0IElTIGZyb20gJy4uL2NoZWNrcydcbmltcG9ydCB7cmVtb3ZlSXRlbX0gZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCBleHRlbmQgZnJvbSAnc21hcnQtZXh0ZW5kJ1xuUkVHRVhfV0hJVEVTUEFDRSA9IC9cXHMrL1xuXG5cbmV4cG9ydCBvbl8gPSAoZXZlbnROYW1lcywgY2FsbGJhY2ssIHVzZUNhcHR1cmUsIGlzUHJpdmF0ZSktPlxuXHRAX2V2ZW50Q2FsbGJhY2tzID89IHtfX3JlZnM6e319XG5cdFxuXHRpZiBJUy5zdHJpbmcoZXZlbnROYW1lcykgYW5kIElTLmZ1bmN0aW9uKGNhbGxiYWNrKVxuXHRcdHNwbGl0ID0gZXZlbnROYW1lcy5zcGxpdCgnLicpXG5cdFx0Y2FsbGJhY2tSZWYgPSBzcGxpdFsxXVxuXHRcdGV2ZW50TmFtZXMgPSBzcGxpdFswXVxuXHRcdFxuXHRcdGlmIGV2ZW50TmFtZXMgaXMgJ2luc2VydGVkJyBhbmQgQF9pbnNlcnRlZFxuXHRcdFx0Y2FsbGJhY2suY2FsbChALCBAX3BhcmVudClcblx0XHRcdHJldHVybiBAXG5cdFx0XG5cdFx0ZXZlbnROYW1lcy5zcGxpdChSRUdFWF9XSElURVNQQUNFKS5mb3JFYWNoIChldmVudE5hbWUpPT5cblx0XHRcdGlmIG5vdCBAX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV1cblx0XHRcdFx0QF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdID0gW11cdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHR1bmxlc3MgaXNQcml2YXRlIHRoZW4gQF9saXN0ZW5UbyBldmVudE5hbWUsIChldmVudCk9PlxuXHRcdFx0XHRcdEBfaW52b2tlSGFuZGxlcnMoZXZlbnROYW1lLCBldmVudClcblx0XHRcdFx0LCB1c2VDYXB0dXJlXG5cblx0XHRcdGlmIGNhbGxiYWNrUmVmXG5cdFx0XHRcdEBfZXZlbnRDYWxsYmFja3MuX19yZWZzW2V2ZW50TmFtZV0gPz0ge31cblx0XHRcdFx0QF9ldmVudENhbGxiYWNrcy5fX3JlZnNbZXZlbnROYW1lXVtjYWxsYmFja1JlZl0gPSBjYWxsYmFja1xuXHRcdFx0QF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spXG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgb25jZSA9IChldmVudE5hbWVzLCBjYWxsYmFjayktPlxuXHRpZiBJUy5zdHJpbmcoZXZlbnROYW1lcykgYW5kIElTLmZ1bmN0aW9uKGNhbGxiYWNrKVxuXHRcdEBvbiBldmVudE5hbWVzLCBvbmNlQ2FsbGJhY2s9KGV2ZW50KT0+XG5cdFx0XHRAb2ZmKGV2ZW50TmFtZXMsIG9uY2VDYWxsYmFjaylcblx0XHRcdGNhbGxiYWNrLmNhbGwoQCwgZXZlbnQpXG5cdFxuXHRyZXR1cm4gQFxuXG5cblxuZXhwb3J0IG9mZl8gPSAoZXZlbnROYW1lcywgY2FsbGJhY2spLT5cblx0QF9ldmVudENhbGxiYWNrcyA/PSB7X19yZWZzOnt9fVxuXHRpZiBub3QgSVMuc3RyaW5nKGV2ZW50TmFtZXMpXG5cdFx0QG9mZihldmVudE5hbWUpIGZvciBldmVudE5hbWUgb2YgQF9ldmVudENhbGxiYWNrc1xuXHRcblx0ZWxzZVxuXHRcdHNwbGl0ID0gZXZlbnROYW1lcy5zcGxpdCgnLicpXG5cdFx0Y2FsbGJhY2tSZWYgPSBzcGxpdFsxXVxuXHRcdGV2ZW50TmFtZXMgPSBzcGxpdFswXVxuXHRcdGV2ZW50TmFtZXMuc3BsaXQoUkVHRVhfV0hJVEVTUEFDRSkuZm9yRWFjaCAoZXZlbnROYW1lKT0+XG5cdFx0XHRpZiBAX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV1cblx0XHRcdFx0Y2FsbGJhY2sgPz0gQF9ldmVudENhbGxiYWNrcy5fX3JlZnNbZXZlbnROYW1lXT9bY2FsbGJhY2tSZWZdXG5cblx0XHRcdFx0aWYgSVMuZnVuY3Rpb24oY2FsbGJhY2spXG5cdFx0XHRcdFx0cmVtb3ZlSXRlbShAX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV0sIGNhbGxiYWNrKVxuXHRcdFx0XHRlbHNlIGlmIG5vdCBjYWxsYmFja1JlZlxuXHRcdFx0XHRcdEBfZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXS5sZW5ndGggPSAwXG5cblx0cmV0dXJuIEBcblxuXG5cbmV4cG9ydCBlbWl0ID0gKGV2ZW50TmFtZSwgYnViYmxlcz10cnVlLCBjYW5jZWxhYmxlPXRydWUsIGRhdGEpLT5cblx0aWYgZXZlbnROYW1lIGFuZCBJUy5zdHJpbmcoZXZlbnROYW1lKVxuXHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jylcblx0XHRldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCBidWJibGVzLCBjYW5jZWxhYmxlKVxuXHRcdGV4dGVuZChldmVudCwgZGF0YSkgaWYgZGF0YSBhbmQgdHlwZW9mIGRhdGEgaXMgJ29iamVjdCdcblx0XHRAZWwuZGlzcGF0Y2hFdmVudChldmVudClcblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBlbWl0UHJpdmF0ZSA9IChldmVudE5hbWUsIGFyZyktPlxuXHRpZiBldmVudE5hbWUgYW5kIElTLnN0cmluZyhldmVudE5hbWUpIGFuZCBAX2V2ZW50Q2FsbGJhY2tzP1tldmVudE5hbWVdXG5cdFx0QF9pbnZva2VIYW5kbGVycyhldmVudE5hbWUsIGFyZylcblx0XG5cdHJldHVybiBAXG5cblxuXG5leHBvcnQgX2ludm9rZUhhbmRsZXJzID0gKGV2ZW50TmFtZSwgYXJnKS0+XG5cdGNhbGxiYWNrcyA9IEBfZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXS5zbGljZSgpXG5cdGNiLmNhbGwoQCwgYXJnKSBmb3IgY2IgaW4gY2FsbGJhY2tzXG5cdHJldHVyblxuXG5cbiMjIyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAjIyNcbmV4cG9ydCBfbGlzdGVuVG8gPSAoZXZlbnROYW1lLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSktPlxuXHRsaXN0ZW5NZXRob2QgPSBpZiBAZWwuYWRkRXZlbnRMaXN0ZW5lciB0aGVuICdhZGRFdmVudExpc3RlbmVyJyBlbHNlICdhdHRhY2hFdmVudCdcblx0ZXZlbnROYW1lVG9MaXN0ZW5Gb3IgPSBpZiBAZWwuYWRkRXZlbnRMaXN0ZW5lciB0aGVuIGV2ZW50TmFtZSBlbHNlIFwib24je2V2ZW50TmFtZX1cIlxuXHRcblx0QGVsW2xpc3Rlbk1ldGhvZF0oZXZlbnROYW1lVG9MaXN0ZW5Gb3IsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKVxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBkZWZhdWx0IChRdWlja0VsZW1lbnQpLT5cblx0UXVpY2tFbGVtZW50OjpvbiA9IG9uX1xuXHRRdWlja0VsZW1lbnQ6Om9uY2UgPSBvbmNlXG5cdFF1aWNrRWxlbWVudDo6b2ZmID0gb2ZmX1xuXHRRdWlja0VsZW1lbnQ6OmVtaXQgPSBlbWl0XG5cdFF1aWNrRWxlbWVudDo6ZW1pdFByaXZhdGUgPSBlbWl0UHJpdmF0ZVxuXHRRdWlja0VsZW1lbnQ6Ol9pbnZva2VIYW5kbGVycyA9IF9pbnZva2VIYW5kbGVyc1xuXHRRdWlja0VsZW1lbnQ6Ol9saXN0ZW5UbyA9IF9saXN0ZW5Ub1xuXG4iLCJpbXBvcnQgSVMgZnJvbSAnLi4vY2hlY2tzJ1xuaW1wb3J0IENTUyBmcm9tICdxdWlja2NzcydcblxuIyMjKlxuICogU2V0cy9nZXRzIHRoZSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LiBJbiBnZXR0ZXIgbW9kZSB0aGUgY29tcHV0ZWQgcHJvcGVydHkgb2ZcbiAqIHRoZSBzdHlsZSB3aWxsIGJlIHJldHVybmVkIHVubGVzcyB0aGUgZWxlbWVudCBpcyBub3QgaW5zZXJ0ZWQgaW50byB0aGUgRE9NLiBJblxuICogd2Via2l0IGJyb3dzZXJzIGFsbCBjb21wdXRlZCBwcm9wZXJ0aWVzIG9mIGEgZGV0YWNoZWQgbm9kZSBhcmUgYWx3YXlzIGFuIGVtcHR5XG4gKiBzdHJpbmcgYnV0IGluIGdlY2tvIHRoZXkgcmVmbGVjdCBvbiB0aGUgYWN0dWFsIGNvbXB1dGVkIHZhbHVlLCBoZW5jZSB3ZSBuZWVkXG4gKiB0byBcIm5vcm1hbGl6ZVwiIHRoaXMgYmVoYXZpb3IgYW5kIG1ha2Ugc3VyZSB0aGF0IGV2ZW4gb24gZ2Vja28gYW4gZW1wdHkgc3RyaW5nXG4gKiBpcyByZXR1cm5lZFxuICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4jIyNcbmV4cG9ydCBzdHlsZSA9IChwcm9wZXJ0eSktPlxuXHRyZXR1cm4gaWYgQHR5cGUgaXMgJ3RleHQnXG5cdGFyZ3MgPSBhcmd1bWVudHNcblx0XG5cdGlmIElTLnN0cmluZyhwcm9wZXJ0eSlcblx0XHR2YWx1ZSA9IGlmIHR5cGVvZiBhcmdzWzFdIGlzICdmdW5jdGlvbicgdGhlbiBhcmdzWzFdLmNhbGwoQCwgQHJlbGF0ZWQpIGVsc2UgYXJnc1sxXVxuXHRcdHZhbHVlID0gQ1NTLlVOU0VUIGlmIGFyZ3NbMV0gaXMgbnVsbCBhbmQgSVMuZGVmaW5lZChAY3VycmVudFN0YXRlU3R5bGUocHJvcGVydHkpKSBhbmQgbm90IElTLmZ1bmN0aW9uKEBjdXJyZW50U3RhdGVTdHlsZShwcm9wZXJ0eSkpXG5cblx0XHRpZiB2YWx1ZSBhbmQgdHlwZW9mIHZhbHVlLnRoZW4gaXMgJ2Z1bmN0aW9uJ1xuXHRcdFx0dmFsdWUudGhlbiAodmFsdWUpPT4gQ1NTKEBlbCwgcHJvcGVydHksIHZhbHVlLCBAb3B0aW9ucy5mb3JjZVN0eWxlKVxuXHRcdGVsc2Vcblx0XHRcdHJlc3VsdCA9IENTUyhAZWwsIHByb3BlcnR5LCB2YWx1ZSwgQG9wdGlvbnMuZm9yY2VTdHlsZSlcblx0XHRcblx0XHRpZiBhcmdzLmxlbmd0aCBpcyAxXG5cdFx0XHQjIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5cdFx0XHRyZXR1cm4gaWYgQF9pbnNlcnRlZCB0aGVuIHJlc3VsdCBlbHNlIGlmIG5vdCByZXN1bHQgdGhlbiByZXN1bHQgZWxzZSAnJ1xuXG5cdGVsc2UgaWYgSVMub2JqZWN0KHByb3BlcnR5KVxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0eSk7IGkgPSAtMVxuXHRcdEBzdHlsZShrZXksIHByb3BlcnR5W2tleV0pIHdoaWxlIGtleT1rZXlzWysraV1cblxuXHRyZXR1cm4gQFxuXG5cbiMjIypcbiAqIEF0dGVtcHRzIHRvIHJlc29sdmUgdGhlIHZhbHVlIGZvciBhIGdpdmVuIHByb3BlcnR5IGluIHRoZSBmb2xsb3dpbmcgb3JkZXIgaWYgZWFjaCBvbmUgaXNuJ3QgYSB2YWxpZCB2YWx1ZTpcbiAqIDEuIGZyb20gY29tcHV0ZWQgc3R5bGUgKGZvciBkb20taW5zZXJ0ZWQgZWxzKVxuICogMi4gZnJvbSBET01FbGVtZW50LnN0eWxlIG9iamVjdCAoZm9yIG5vbi1pbnNlcnRlZCBlbHM7IGlmIG9wdGlvbnMuc3R5bGVBZnRlckluc2VydCwgd2lsbCBvbmx5IGhhdmUgc3RhdGUgc3R5bGVzKVxuICogMy4gZnJvbSBwcm92aWRlZCBzdHlsZSBvcHRpb25zXG4gKiAoZm9yIG5vbi1pbnNlcnRlZCBlbHM7IGNoZWNraW5nIG9ubHkgJGJhc2Ugc2luY2Ugc3RhdGUgc3R5bGVzIHdpbGwgYWx3YXlzIGJlIGFwcGxpZWQgdG8gdGhlIHN0eWxlIG9iamVjdCBldmVuIGZvciBub24taW5zZXJ0ZWQpXG4jIyNcbmV4cG9ydCBzdHlsZVNhZmUgPSAocHJvcGVydHksIHNraXBDb21wdXRlZCktPlxuXHRyZXR1cm4gaWYgQHR5cGUgaXMgJ3RleHQnXG5cdHNhbXBsZSA9IEBlbC5zdHlsZVtwcm9wZXJ0eV1cblxuXHRpZiBJUy5zdHJpbmcoc2FtcGxlKSBvciBJUy5udW1iZXIoc2FtcGxlKVxuXHRcdGNvbXB1dGVkID0gaWYgc2tpcENvbXB1dGVkIHRoZW4gMCBlbHNlIEBzdHlsZShwcm9wZXJ0eSlcblx0XHRyZXN1bHQgPSBjb21wdXRlZCBvciBAZWwuc3R5bGVbcHJvcGVydHldIG9yIEBjdXJyZW50U3RhdGVTdHlsZShwcm9wZXJ0eSkgb3IgJydcblx0XHRyZXR1cm4gaWYgdHlwZW9mIHJlc3VsdCBpcyAnZnVuY3Rpb24nIHRoZW4gcmVzdWx0LmNhbGwoQCwgQHJlbGF0ZWQpIGVsc2UgcmVzdWx0XG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgc3R5bGVQYXJzZWQgPSAocHJvcGVydHksIHNraXBDb21wdXRlZCktPlxuXHRwYXJzZUZsb2F0IEBzdHlsZVNhZmUocHJvcGVydHksIHNraXBDb21wdXRlZClcblxuXG5leHBvcnQgcmVjYWxjU3R5bGUgPSAocmVjYWxjQ2hpbGRyZW4pLT5cblx0dGFyZ2V0U3R5bGVzID0gQF9yZXNvbHZlRm5TdHlsZXMoQF9nZXRBY3RpdmVTdGF0ZXMoKSwgdHJ1ZSlcblxuXHRAc3R5bGUodGFyZ2V0U3R5bGVzKVxuXHRcblx0aWYgcmVjYWxjQ2hpbGRyZW5cblx0XHRjaGlsZC5yZWNhbGNTdHlsZSgpIGZvciBjaGlsZCBpbiBAX2NoaWxkcmVuXG5cdFxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBjdXJyZW50U3RhdGVTdHlsZSA9IChwcm9wZXJ0eSktPiBpZiBwcm9wZXJ0eVxuXHRpZiBAX3N0YXRlLmxlbmd0aFxuXHRcdHN0YXRlcyA9IEBfc3RhdGUuc2xpY2UoKVxuXHRcdHN0YXRlcy5wdXNoKEBfc3RhdGVTaGFyZWQuLi4pIGlmIEBfc3RhdGVTaGFyZWQgYW5kIEBfc3RhdGVTaGFyZWQubGVuZ3RoXG5cdFx0aSA9IHN0YXRlcy5sZW5ndGhcblx0XHR3aGlsZSBzdGF0ZSA9IHN0YXRlc1stLWldXG5cdFx0XHRyZXR1cm4gQF9zdHlsZXNbc3RhdGVdLnJ1bGVbcHJvcGVydHldIGlmIEBfc3R5bGVzW3N0YXRlXSBhbmQgSVMuZGVmaW5lZChAX3N0eWxlc1tzdGF0ZV0ucnVsZVtwcm9wZXJ0eV0pXG5cblx0cmV0dXJuIEBfc3R5bGVzLmJhc2UucnVsZVtwcm9wZXJ0eV0gaWYgQF9zdHlsZXMuYmFzZVxuXG5cbmV4cG9ydCBoaWRlID0gKCktPlxuXHRAc3R5bGUgJ2Rpc3BsYXknLCAnbm9uZSdcblxuXG5leHBvcnQgc2hvdyA9IChkaXNwbGF5KS0+XG5cdGlmIG5vdCBkaXNwbGF5XG5cdFx0ZGlzcGxheSA9IEBjdXJyZW50U3RhdGVTdHlsZSgnZGlzcGxheScpXG5cdFx0ZGlzcGxheSA9ICdibG9jaycgaWYgZGlzcGxheSBpcyAnbm9uZScgb3Igbm90IGRpc3BsYXlcblx0XG5cdGRpc3BsYXkgPz0gQF9zdHlsZXMuYmFzZT8uZGlzcGxheSBvciAnYmxvY2snXG5cdEBzdHlsZSAnZGlzcGxheScsIGRpc3BsYXlcblxuZXhwb3J0IG9yaWVudGF0aW9uR2V0dGVyID1cblx0Z2V0OiAoKS0+IGlmIEB3aWR0aCA+IEBoZWlnaHQgdGhlbiAnbGFuZHNjYXBlJyBlbHNlICdwb3J0cmFpdCdcblxuZXhwb3J0IGFzcGVjdFJhdGlvR2V0dGVyID1cblx0Z2V0OiAoKS0+IEB3aWR0aC9AaGVpZ2h0XG5cbmV4cG9ydCBkZWZhdWx0IChRdWlja0VsZW1lbnQpLT5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMgUXVpY2tFbGVtZW50OjosXG5cdFx0J29yaWVudGF0aW9uJzogb3JpZW50YXRpb25HZXR0ZXJcblx0XHQnYXNwZWN0UmF0aW8nOiBhc3BlY3RSYXRpb0dldHRlclxuXHRcdCdyZWN0JzogZ2V0OiAoKS0+IEBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXHRcdCd3aWR0aCc6XG5cdFx0XHRnZXQ6ICgpLT4gcGFyc2VGbG9hdCBAc3R5bGUoJ3dpZHRoJylcblx0XHRcdHNldDogKHZhbHVlKS0+IEBzdHlsZSAnd2lkdGgnLCB2YWx1ZVxuXHRcdCdoZWlnaHQnOlxuXHRcdFx0Z2V0OiAoKS0+IHBhcnNlRmxvYXQgQHN0eWxlKCdoZWlnaHQnKVxuXHRcdFx0c2V0OiAodmFsdWUpLT4gQHN0eWxlICdoZWlnaHQnLCB2YWx1ZVxuXG5cblx0UXVpY2tFbGVtZW50OjpzdHlsZSA9IHN0eWxlXG5cdFF1aWNrRWxlbWVudDo6c3R5bGVTYWZlID0gc3R5bGVTYWZlXG5cdFF1aWNrRWxlbWVudDo6c3R5bGVQYXJzZWQgPSBzdHlsZVBhcnNlZFxuXHRRdWlja0VsZW1lbnQ6OnJlY2FsY1N0eWxlID0gcmVjYWxjU3R5bGVcblx0UXVpY2tFbGVtZW50OjpjdXJyZW50U3RhdGVTdHlsZSA9IGN1cnJlbnRTdGF0ZVN0eWxlXG5cdFF1aWNrRWxlbWVudDo6aGlkZSA9IGhpZGVcblx0UXVpY2tFbGVtZW50OjpzaG93ID0gc2hvd1xuXG5cbiIsImltcG9ydCB7b25fLCBvZmZfLCBlbWl0LCBlbWl0UHJpdmF0ZSwgX2xpc3RlblRvLCBfaW52b2tlSGFuZGxlcnN9IGZyb20gJy4vZWxlbWVudC9ldmVudHMnXG5pbXBvcnQge29yaWVudGF0aW9uR2V0dGVyLCBhc3BlY3RSYXRpb0dldHRlcn0gZnJvbSAnLi9lbGVtZW50L3N0eWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBRdWlja1dpbmRvdyA9IFxuXHR0eXBlOiAnd2luZG93J1xuXHRlbDogd2luZG93XG5cdHJhdzogd2luZG93XG5cdF9ldmVudENhbGxiYWNrczoge19fcmVmczp7fX1cblx0XG5cblF1aWNrV2luZG93Lm9uID0gIG9uX1xuUXVpY2tXaW5kb3cub2ZmID0gIG9mZl9cblF1aWNrV2luZG93LmVtaXQgPSAgZW1pdFxuUXVpY2tXaW5kb3cuZW1pdFByaXZhdGUgPSAgZW1pdFByaXZhdGVcblF1aWNrV2luZG93Ll9saXN0ZW5UbyA9ICBfbGlzdGVuVG9cblF1aWNrV2luZG93Ll9pbnZva2VIYW5kbGVycyA9ICBfaW52b2tlSGFuZGxlcnNcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIFF1aWNrV2luZG93LFxuXHQnd2lkdGgnOiBnZXQ6ICgpLT4gd2luZG93LmlubmVyV2lkdGhcblx0J2hlaWdodCc6IGdldDogKCktPiB3aW5kb3cuaW5uZXJIZWlnaHRcblx0J29yaWVudGF0aW9uJzogb3JpZW50YXRpb25HZXR0ZXJcblx0J2FzcGVjdFJhdGlvJzogYXNwZWN0UmF0aW9HZXR0ZXJcblxuIiwiaW1wb3J0IFF1aWNrV2luZG93IGZyb20gJy4vd2luZG93J1xuUlVMRV9ERUlMSU1JVEVSID0gLyxcXHMqL1xuXG5leHBvcnQgZGVmYXVsdCBNZWRpYVF1ZXJ5ID0gbmV3ICgpLT5cblx0Y2FsbGJhY2tzID0gW11cblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAncmVzaXplJywgKCktPlxuXHRcdGNhbGxiYWNrKCkgZm9yIGNhbGxiYWNrIGluIGNhbGxiYWNrc1xuXHRcdHJldHVyblxuXG5cdEBwYXJzZVF1ZXJ5ID0gKHRhcmdldCwgcXVlcnlTdHJpbmcpLT5cblx0XHRxdWVyeVNwbGl0ID0gcXVlcnlTdHJpbmcuc3BsaXQoJygnKVxuXHRcdHNvdXJjZSA9IHF1ZXJ5U3BsaXRbMF1cblx0XHRzb3VyY2UgPSBzd2l0Y2ggc291cmNlXG5cdFx0XHR3aGVuICd3aW5kb3cnIHRoZW4gUXVpY2tXaW5kb3dcblx0XHRcdHdoZW4gJ3BhcmVudCcgdGhlbiB0YXJnZXQucGFyZW50XG5cdFx0XHR3aGVuICdzZWxmJyB0aGVuIHRhcmdldFxuXHRcdFx0ZWxzZSB0YXJnZXQucGFyZW50TWF0Y2hpbmcgKHBhcmVudCktPiBwYXJlbnQucmVmIGlzIHNvdXJjZS5zbGljZSgxKVxuXG5cdFx0cnVsZXMgPSBxdWVyeVNwbGl0WzFdXG5cdFx0XHQuc2xpY2UoMCwtMSlcblx0XHRcdC5zcGxpdChSVUxFX0RFSUxJTUlURVIpXG5cdFx0XHQubWFwIChydWxlKS0+IFxuXHRcdFx0XHRzcGxpdCA9IHJ1bGUuc3BsaXQoJzonKVxuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlRmxvYXQoc3BsaXRbMV0pXG5cdFx0XHRcdHZhbHVlID0gc3BsaXRbMV0gaWYgaXNOYU4odmFsdWUpXG5cdFx0XHRcdGtleSA9IHNwbGl0WzBdXG5cdFx0XHRcdGtleVByZWZpeCA9IGtleS5zbGljZSgwLDQpXG5cdFx0XHRcdG1heCA9IGtleVByZWZpeCBpcyAnbWF4LSdcblx0XHRcdFx0bWluID0gbm90IG1heCBhbmQga2V5UHJlZml4IGlzICdtaW4tJ1xuXHRcdFx0XHRrZXkgPSBrZXkuc2xpY2UoNCkgaWYgbWF4IG9yIG1pblxuXHRcdFx0XHRnZXR0ZXIgPSBzd2l0Y2gga2V5XG5cdFx0XHRcdFx0d2hlbiAnb3JpZW50YXRpb24nIHRoZW4gKCktPiBzb3VyY2Uub3JpZW50YXRpb25cblx0XHRcdFx0XHR3aGVuICdhc3BlY3QtcmF0aW8nIHRoZW4gKCktPiBzb3VyY2UuYXNwZWN0UmF0aW9cblx0XHRcdFx0XHR3aGVuICd3aWR0aCcsJ2hlaWdodCcgdGhlbiAoKS0+IHNvdXJjZVtrZXldXG5cdFx0XHRcdFx0ZWxzZSAoKS0+XG5cdFx0XHRcdFx0XHRzdHJpbmdWYWx1ZSA9IHNvdXJjZS5zdHlsZShrZXkpXG5cdFx0XHRcdFx0XHRwYXJzZWRWYWx1ZSA9IHBhcnNlRmxvYXQgc3RyaW5nVmFsdWVcblx0XHRcdFx0XHRcdHJldHVybiBpZiBpc05hTihwYXJzZWRWYWx1ZSkgdGhlbiBzdHJpbmdWYWx1ZSBlbHNlIHBhcnNlZFZhbHVlXG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4ge2tleSx2YWx1ZSxtaW4sbWF4LGdldHRlcn1cblxuXHRcdHJldHVybiB7c291cmNlLCBydWxlc31cblxuXG5cdEByZWdpc3RlciA9ICh0YXJnZXQsIHF1ZXJ5U3RyaW5nKS0+XG5cdFx0cXVlcnkgPSBAcGFyc2VRdWVyeSh0YXJnZXQsIHF1ZXJ5U3RyaW5nKVxuXHRcdGlmIHF1ZXJ5LnNvdXJjZVxuXHRcdFx0Y2FsbGJhY2tzLnB1c2ggY2FsbGJhY2sgPSAoKS0+IHRlc3RSdWxlKHRhcmdldCwgcXVlcnksIHF1ZXJ5U3RyaW5nKVxuXHRcdFx0Y2FsbGJhY2soKVxuXHRcdHJldHVybiBxdWVyeVxuXG5cblx0dGVzdFJ1bGUgPSAodGFyZ2V0LCBxdWVyeSwgcXVlcnlTdHJpbmcpLT5cblx0XHRwYXNzZWQgPSB0cnVlXG5cblx0XHRmb3IgcnVsZSBpbiBxdWVyeS5ydWxlc1xuXHRcdFx0Y3VycmVudFZhbHVlID0gcnVsZS5nZXR0ZXIoKVxuXHRcdFx0cGFzc2VkID0gc3dpdGNoXG5cdFx0XHRcdHdoZW4gcnVsZS5taW4gdGhlbiBjdXJyZW50VmFsdWUgPj0gcnVsZS52YWx1ZVxuXHRcdFx0XHR3aGVuIHJ1bGUubWF4IHRoZW4gY3VycmVudFZhbHVlIDw9IHJ1bGUudmFsdWVcblx0XHRcdFx0ZWxzZSBjdXJyZW50VmFsdWUgaXMgcnVsZS52YWx1ZVxuXG5cdFx0XHRicmVhayBpZiBub3QgcGFzc2VkXHRcdFxuXHRcdFxuXHRcdHRhcmdldC5zdGF0ZShxdWVyeVN0cmluZywgcGFzc2VkKVxuXG5cdHJldHVybiBAXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVDaGFpblxuXHRjb25zdHJ1Y3RvcjogKHN0YXRlcyktPlxuXHRcdEBzdHJpbmcgPSBzdGF0ZXMuam9pbignKycpXG5cdFx0QGFycmF5ID0gc3RhdGVzLnNsaWNlKClcblx0XHRAbGVuZ3RoID0gc3RhdGVzLmxlbmd0aFxuXG5cdGluY2x1ZGVzOiAodGFyZ2V0KS0+XG5cdFx0Zm9yIHN0YXRlIGluIEBhcnJheVxuXHRcdFx0cmV0dXJuIHRydWUgaWYgc3RhdGUgaXMgdGFyZ2V0XG5cblx0XHRyZXR1cm4gZmFsc2VcblxuXHR3aXRob3V0OiAodGFyZ2V0KS0+XG5cdFx0QGFycmF5XG5cdFx0XHQuZmlsdGVyIChzdGF0ZSktPiBzdGF0ZSBpc250IHRhcmdldFxuXHRcdFx0LmpvaW4gJysnXG5cblxuXHRpc0FwcGxpY2FibGU6ICh0YXJnZXQsIG90aGVyQWN0aXZlKS0+XG5cdFx0YWN0aXZlID0gQGFycmF5LmZpbHRlciAoc3RhdGUpLT5cblx0XHRcdHN0YXRlIGlzIHRhcmdldCBvclxuXHRcdFx0b3RoZXJBY3RpdmUuaW5kZXhPZihzdGF0ZSkgaXNudCAtMVxuXG5cdFx0cmV0dXJuIGFjdGl2ZS5sZW5ndGggaXMgQGFycmF5Lmxlbmd0aCIsImltcG9ydCBxdWlja2RvbSBmcm9tICcuLi9xdWlja2RvbSdcbmltcG9ydCBNZWRpYVF1ZXJ5IGZyb20gJy4uL21lZGlhUXVlcnknXG5pbXBvcnQgU3RhdGVDaGFpbiBmcm9tICcuL3N0YXRlQ2hhaW4nXG5pbXBvcnQgSVMgZnJvbSAnLi4vY2hlY2tzJ1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuLi9oZWxwZXJzJ1xuaW1wb3J0IGV4dGVuZCBmcm9tICdzbWFydC1leHRlbmQnXG5cbkJBU0VfU1RBVEVfVFJJR0dFUlMgPVxuXHQnaG92ZXInOiB7b246J21vdXNlZW50ZXInLCBvZmY6J21vdXNlbGVhdmUnLCBidWJibGVzOnRydWV9XG5cdCdmb2N1cyc6IHtvbjonZm9jdXMnLCBvZmY6J2JsdXInLCBidWJibGVzOnRydWV9XG5cblxuZXhwb3J0IF9ub3JtYWxpemVPcHRpb25zID0gKCktPlxuXHRpZiBAb3B0aW9ucy5yZWxhdGVkSW5zdGFuY2Vcblx0XHRAb3B0aW9ucy5yZWxhdGVkIHx8PSBAb3B0aW9ucy5yZWxhdGVkSW5zdGFuY2Vcblx0XHRAb3B0aW9ucy5yZWxhdGVkSW5zdGFuY2UgPSBudWxsXG5cdFxuXHRAcmVsYXRlZCA9IEBvcHRpb25zLnJlbGF0ZWQgPz0gQFxuXHRAb3B0aW9ucy5jbGFzc05hbWUgPSBAb3B0aW9ucy5jbGFzcyBpZiBAb3B0aW9ucy5jbGFzc1xuXHRAb3B0aW9ucy5ocmVmID0gQG9wdGlvbnMudXJsIGlmIEBvcHRpb25zLnVybFxuXHRAb3B0aW9ucy51bnBhc3NhYmxlU3RhdGVzID89IFtdXG5cdEBvcHRpb25zLnBhc3NTdGF0ZVRvQ2hpbGRyZW4gPz0gdHJ1ZVxuXHRAb3B0aW9ucy5wYXNzRGF0YVRvQ2hpbGRyZW4gPz0gdHJ1ZVxuXHRAb3B0aW9ucy5zdGF0ZVRyaWdnZXJzID1cblx0XHRpZiBAb3B0aW9ucy5zdGF0ZVRyaWdnZXJzXG5cdFx0XHRleHRlbmQuY2xvbmUuZGVlcChCQVNFX1NUQVRFX1RSSUdHRVJTLCBAb3B0aW9ucy5zdGF0ZVRyaWdnZXJzKVxuXHRcdGVsc2Vcblx0XHRcdEJBU0VfU1RBVEVfVFJJR0dFUlNcblx0XG5cdGlmIEB0eXBlIGlzICd0ZXh0J1xuXHRcdGV4dGVuZCBALCBAX3BhcnNlVGV4dHMoQG9wdGlvbnMudGV4dCwgQF90ZXh0cylcblx0ZWxzZVxuXHRcdGV4dGVuZCBALCBAX3BhcnNlU3R5bGVzKEBvcHRpb25zLnN0eWxlLCBAX3N0eWxlcylcblx0XG5cdHJldHVyblxuXG5cbmV4cG9ydCBfcGFyc2VTdHlsZXMgPSAoc3R5bGVzLCBzdG9yZSktPlxuXHRyZXR1cm4gaWYgbm90IElTLm9iamVjdFBsYWluKHN0eWxlcylcblx0a2V5cyA9IE9iamVjdC5rZXlzKHN0eWxlcylcblx0c3RhdGVzID0ga2V5cy5maWx0ZXIgKGtleSktPiBoZWxwZXJzLmlzU3RhdGVTdHlsZShrZXkpXG5cdHNwZWNpYWxTdGF0ZXMgPSBoZWxwZXJzLnJlbW92ZUl0ZW0oc3RhdGVzLnNsaWNlKCksICckYmFzZScpXG5cdF9tZWRpYVN0YXRlcyA9IHN0YXRlcy5maWx0ZXIoKGtleSktPiBrZXlbMF0gaXMgJ0AnKS5tYXAgKHN0YXRlKS0+IHN0YXRlLnNsaWNlKDEpXG5cdF9wcm92aWRlZFN0YXRlcyA9IHN0YXRlcy5tYXAgKHN0YXRlKS0+IHN0YXRlLnNsaWNlKDEpICMgUmVtb3ZlICckJyBwcmVmaXhcblx0X3N0eWxlcyA9IHN0b3JlIG9yIHt9XG5cdF9zdGF0ZVNoYXJlZCA9IF9wcm92aWRlZFN0YXRlc1NoYXJlZCA9IHVuZGVmaW5lZFxuXG5cdGJhc2UgPSBpZiBub3QgaGVscGVycy5pbmNsdWRlcyhzdGF0ZXMsICckYmFzZScpIHRoZW4gc3R5bGVzIGVsc2Ugc3R5bGVzLiRiYXNlXG5cdF9zdHlsZXMuYmFzZSA9IGhlbHBlcnMucmVnaXN0ZXJTdHlsZShiYXNlLCAwLCBmb3JjZVN0eWxlPUBvcHRpb25zLmZvcmNlU3R5bGUpXG5cblxuXHRpZiBzcGVjaWFsU3RhdGVzLmxlbmd0aFxuXHRcdGZsYXR0ZW5OZXN0ZWRTdGF0ZXMgPSAoc3R5bGVPYmplY3QsIGNoYWluLCBsZXZlbCktPlxuXHRcdFx0c3R5bGVLZXlzID0gT2JqZWN0LmtleXMoc3R5bGVPYmplY3QpXG5cdFx0XHRvdXRwdXQgPSB7fVxuXHRcdFx0aGFzTm9uU3RhdGVQcm9wcyA9IGZhbHNlXG5cdFx0XHRcblx0XHRcdGZvciBzdGF0ZSBpbiBzdHlsZUtleXNcblx0XHRcdFx0aWYgbm90IGhlbHBlcnMuaXNTdGF0ZVN0eWxlKHN0YXRlKVxuXHRcdFx0XHRcdGhhc05vblN0YXRlUHJvcHMgPSB0cnVlXG5cdFx0XHRcdFx0b3V0cHV0W3N0YXRlXSA9IHN0eWxlT2JqZWN0W3N0YXRlXVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0Y2hhaW4ucHVzaChzdGF0ZV8gPSBzdGF0ZS5zbGljZSgxKSlcblx0XHRcdFx0XHRzdGF0ZUNoYWluID0gbmV3IFN0YXRlQ2hhaW4oY2hhaW4pXG5cdFx0XHRcdFx0X3N0YXRlU2hhcmVkID89IFtdXG5cdFx0XHRcdFx0X3Byb3ZpZGVkU3RhdGVzU2hhcmVkID89IFtdXG5cdFx0XHRcdFx0X3Byb3ZpZGVkU3RhdGVzU2hhcmVkLnB1c2goc3RhdGVDaGFpbilcblx0XHRcdFx0XHRfbWVkaWFTdGF0ZXMucHVzaChzdGF0ZV8pIGlmIHN0YXRlWzBdIGlzICdAJ1xuXHRcdFx0XHRcdF9zdHlsZXNbc3RhdGVDaGFpbi5zdHJpbmddID0gaGVscGVycy5yZWdpc3RlclN0eWxlIGZsYXR0ZW5OZXN0ZWRTdGF0ZXMoc3R5bGVPYmplY3Rbc3RhdGVdLCBjaGFpbiwgbGV2ZWwrMSksIGxldmVsKzEsIGZvcmNlU3R5bGVcblx0XHRcdFxuXHRcdFx0cmV0dXJuIGlmIGhhc05vblN0YXRlUHJvcHMgdGhlbiBvdXRwdXRcblxuXHRcdGZvciBzdGF0ZSBpbiBzcGVjaWFsU3RhdGVzXG5cdFx0XHRzdGF0ZV8gPSBzdGF0ZS5zbGljZSgxKVxuXHRcdFx0XG5cdFx0XHRzdGF0ZVN0eWxlcyA9IGZsYXR0ZW5OZXN0ZWRTdGF0ZXMoc3R5bGVzW3N0YXRlXSwgW3N0YXRlX10sIDEpXG5cdFx0XHRfc3R5bGVzW3N0YXRlX10gPSBoZWxwZXJzLnJlZ2lzdGVyU3R5bGUoc3RhdGVTdHlsZXMsIDEpIGlmIHN0YXRlU3R5bGVzXG5cblxuXHRyZXR1cm4ge19zdHlsZXMsIF9tZWRpYVN0YXRlcywgX3N0YXRlU2hhcmVkLCBfcHJvdmlkZWRTdGF0ZXMsIF9wcm92aWRlZFN0YXRlc1NoYXJlZH1cblxuXG5cbmV4cG9ydCBfcGFyc2VUZXh0cyA9ICh0ZXh0cywgc3RvcmUpLT5cblx0cmV0dXJuIGlmIG5vdCBJUy5vYmplY3RQbGFpbih0ZXh0cylcblx0c3RhdGVzID0gT2JqZWN0LmtleXModGV4dHMpLm1hcCAoc3RhdGUpLT4gc3RhdGUuc2xpY2UoMSlcblx0X3Byb3ZpZGVkU3RhdGVzID0gc3RhdGVzLmZpbHRlciAoc3RhdGUpLT4gc3RhdGUgaXNudCAnYmFzZSdcblx0X3RleHRzID0gc3RvcmUgb3Ige31cblx0X3RleHRzID0gYmFzZTonJ1xuXHRfdGV4dHNbc3RhdGVdID0gdGV4dHNbJyQnK3N0YXRlXSBmb3Igc3RhdGUgaW4gc3RhdGVzXG5cdFxuXHRyZXR1cm4ge190ZXh0cywgX3Byb3ZpZGVkU3RhdGVzfVxuXG5cbmV4cG9ydCBfYXBwbHlPcHRpb25zID0gKCktPlxuXHRpZiByZWY9KEBvcHRpb25zLmlkIG9yIEBvcHRpb25zLnJlZikgdGhlbiBAYXR0cignZGF0YS1yZWYnLCBAcmVmPXJlZilcblx0aWYgQG9wdGlvbnMuaWQgdGhlbiBAZWwuaWQgPSBAb3B0aW9ucy5pZFxuXHRpZiBAb3B0aW9ucy5jbGFzc05hbWUgdGhlbiBAZWwuY2xhc3NOYW1lID0gQG9wdGlvbnMuY2xhc3NOYW1lXG5cdGlmIEBvcHRpb25zLnNyYyB0aGVuIEBlbC5zcmMgPSBAb3B0aW9ucy5zcmNcblx0aWYgQG9wdGlvbnMuaHJlZiB0aGVuIEBlbC5ocmVmID0gQG9wdGlvbnMuaHJlZlxuXHRpZiBAb3B0aW9ucy50eXBlIHRoZW4gQGVsLnR5cGUgPSBAb3B0aW9ucy50eXBlXG5cdGlmIEBvcHRpb25zLm5hbWUgdGhlbiBAZWwubmFtZSA9IEBvcHRpb25zLm5hbWVcblx0aWYgQG9wdGlvbnMudmFsdWUgdGhlbiBAZWwudmFsdWUgPSBAb3B0aW9ucy52YWx1ZVxuXHRpZiBAb3B0aW9ucy5zZWxlY3RlZCB0aGVuIEBlbC5zZWxlY3RlZCA9IEBvcHRpb25zLnNlbGVjdGVkXG5cdGlmIEBvcHRpb25zLmNoZWNrZWQgdGhlbiBAZWwuY2hlY2tlZCA9IEBvcHRpb25zLmNoZWNrZWRcblx0aWYgQG9wdGlvbnMucHJvcHMgdGhlbiBAcHJvcChAb3B0aW9ucy5wcm9wcylcblx0aWYgQG9wdGlvbnMuYXR0cnMgdGhlbiBAYXR0cihAb3B0aW9ucy5hdHRycylcblx0QF9hcHBseVJlZ2lzdGVyZWRTdHlsZShAX3N0eWxlcy5iYXNlLCBudWxsLCBudWxsLCBAb3B0aW9ucy5zdHlsZUFmdGVySW5zZXJ0KVxuXHRAdGV4dCA9IEBfdGV4dHMuYmFzZSBpZiBAX3RleHRzXG5cblx0QG9uKCdpbnNlcnRlZCcsIENBQ0hFRF9GTl9JTlNFUlRFRCwgZmFsc2UsIHRydWUpXG5cblx0aWYgQG9wdGlvbnMuaW52b2tlQ29tcHV0ZXJzT25jZVxuXHRcdEBfaW52b2tlZENvbXB1dGVycyA9IHt9XG5cdFxuXHRpZiBAb3B0aW9ucy5yZWNhbGNPblJlc2l6ZVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICdyZXNpemUnLCAoKT0+IEByZWNhbGNTdHlsZSgpXG5cblx0aWYgQG9wdGlvbnMuZXZlbnRzXG5cdFx0QG9uKGV2ZW50LCBoYW5kbGVyKSBmb3IgZXZlbnQsaGFuZGxlciBvZiBAb3B0aW9ucy5ldmVudHNcblxuXHRpZiBAb3B0aW9ucy5tZXRob2RzXG5cdFx0Zm9yIG1ldGhvZCx2YWx1ZSBvZiBAb3B0aW9ucy5tZXRob2RzIHdoZW4gbm90IEBbbWV0aG9kXVxuXHRcdFx0aWYgSVMuZnVuY3Rpb24odmFsdWUpXG5cdFx0XHRcdEBbbWV0aG9kXSA9IHZhbHVlXG5cdFx0XHRlbHNlIGlmIElTLm9iamVjdCh2YWx1ZSlcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5IEAsIG1ldGhvZCwge2NvbmZpZ3VyYWJsZTp0cnVlLCBnZXQ6dmFsdWUuZ2V0LCBzZXQ6dmFsdWUuc2V0fVxuXG5cdGlmIEB0eXBlIGlzbnQgJ3RleHQnIGFuZCBJUy5vYmplY3QoQG9wdGlvbnMudGV4dClcblx0XHRAYXBwZW5kIHF1aWNrZG9tKCd0ZXh0JywgdGV4dDpAb3B0aW9ucy50ZXh0KVxuXHRyZXR1cm5cblxuXG5leHBvcnQgX3Bvc3RDcmVhdGlvbiA9IChkYXRhKS0+XG5cdGlmIEBvcHRpb25zLmNvbXB1dGVyc1xuXHRcdGRhdGEgPSBleHRlbmQuY2xvbmUoQG9wdGlvbnMuZGF0YSwgZGF0YSkgaWYgZGF0YSBhbmQgQG9wdGlvbnMuZGF0YVxuXHRcdGRhdGEgfHw9IEBvcHRpb25zLmRhdGFcblx0XHRAYXBwbHlEYXRhKGRhdGEsIGZhbHNlKVxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLmNvbXB1dGVycy5faW5pdFxuXHRcdFx0QF9ydW5Db21wdXRlcignX2luaXQnLCBkYXRhKVxuXG5cdGlmIEBvcHRpb25zLnN0YXRlXG5cdFx0QHN0YXRlKEBvcHRpb25zLnN0YXRlKVxuXHRcblx0cmV0dXJuXG5cblxuZXhwb3J0IF9hdHRhY2hTdGF0ZUV2ZW50cyA9IChmb3JjZSktPlxuXHRzdGF0ZXMgPSBPYmplY3Qua2V5cyhAb3B0aW9ucy5zdGF0ZVRyaWdnZXJzKVxuXHRzdGF0ZXMuZm9yRWFjaCAoc3RhdGUpPT5cblx0XHR0cmlnZ2VyID0gQG9wdGlvbnMuc3RhdGVUcmlnZ2Vyc1tzdGF0ZV1cdFxuXHRcdHJldHVybiBpZiBub3QgaGVscGVycy5pbmNsdWRlcyhAX3Byb3ZpZGVkU3RhdGVzLCBzdGF0ZSkgYW5kIG5vdCBmb3JjZSBhbmQgbm90IHRyaWdnZXIuZm9yY2Vcblx0XHRlbmFibGVyID0gaWYgSVMuc3RyaW5nKHRyaWdnZXIpIHRoZW4gdHJpZ2dlciBlbHNlIHRyaWdnZXIub25cblx0XHRkaXNhYmxlciA9IHRyaWdnZXIub2ZmIGlmIElTLm9iamVjdCh0cmlnZ2VyKVxuXG5cdFx0QF9saXN0ZW5UbyBlbmFibGVyLCAoKT0+IEBzdGF0ZShzdGF0ZSwgb24sIHRyaWdnZXIuYnViYmxlcylcblx0XHRpZiBkaXNhYmxlciB0aGVuIEBfbGlzdGVuVG8gZGlzYWJsZXIsICgpPT4gQHN0YXRlKHN0YXRlLCBvZmYsIHRyaWdnZXIuYnViYmxlcylcblx0XG5cdHJldHVyblxuXG5cblxuZXhwb3J0IF9wcm94eVBhcmVudCA9ICgpLT5cblx0cGFyZW50ID0gdW5kZWZpbmVkXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBALCAnX3BhcmVudCcsXG5cdFx0Z2V0OiAoKS0+IHBhcmVudFxuXHRcdHNldDogKG5ld1BhcmVudCktPiBpZiBwYXJlbnQ9bmV3UGFyZW50XG5cdFx0XHRsYXN0UGFyZW50ID0gQHBhcmVudHMuc2xpY2UoLTEpWzBdXG5cdFx0XHRpZiBsYXN0UGFyZW50LnJhdyBpcyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblx0XHRcdFx0QF91bnByb3h5UGFyZW50KG5ld1BhcmVudClcblx0XHRcdGVsc2Vcblx0XHRcdFx0cGFyZW50Lm9uICdpbnNlcnRlZCcsICgpPT5cblx0XHRcdFx0XHRAX3VucHJveHlQYXJlbnQobmV3UGFyZW50KSBpZiBwYXJlbnQgaXMgbmV3UGFyZW50XG5cdFx0XHRyZXR1cm5cblxuXG5leHBvcnQgX3VucHJveHlQYXJlbnQgPSAobmV3UGFyZW50KS0+XG5cdGRlbGV0ZSBAX3BhcmVudFxuXHRAX3BhcmVudCA9IG5ld1BhcmVudFxuXHRAZW1pdFByaXZhdGUoJ2luc2VydGVkJywgbmV3UGFyZW50KVxuXHRyZXR1cm5cblxuXG5cbkNBQ0hFRF9GTl9JTlNFUlRFRCA9ICgpLT5cblx0QF9pbnNlcnRlZCA9IEBcblx0QHJlY2FsY1N0eWxlKCkgaWYgQG9wdGlvbnMuc3R5bGVBZnRlckluc2VydFxuXG5cdGlmIChtZWRpYVN0YXRlcz1AX21lZGlhU3RhdGVzKSBhbmQgQF9tZWRpYVN0YXRlcy5sZW5ndGhcblx0XHRAX21lZGlhU3RhdGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXHRcdFxuXHRcdGZvciBxdWVyeVN0cmluZyBpbiBtZWRpYVN0YXRlc1xuXHRcdFx0QF9tZWRpYVN0YXRlc1txdWVyeVN0cmluZ10gPSBNZWRpYVF1ZXJ5LnJlZ2lzdGVyKEAsIHF1ZXJ5U3RyaW5nKVxuXG5cbmV4cG9ydCBkZWZhdWx0IChRdWlja0VsZW1lbnQpLT5cblx0UXVpY2tFbGVtZW50Ojpfbm9ybWFsaXplT3B0aW9ucyA9IF9ub3JtYWxpemVPcHRpb25zXG5cdFF1aWNrRWxlbWVudDo6X3BhcnNlU3R5bGVzID0gX3BhcnNlU3R5bGVzXG5cdFF1aWNrRWxlbWVudDo6X3BhcnNlVGV4dHMgPSBfcGFyc2VUZXh0c1xuXHRRdWlja0VsZW1lbnQ6Ol9hcHBseU9wdGlvbnMgPSBfYXBwbHlPcHRpb25zXG5cdFF1aWNrRWxlbWVudDo6X3Bvc3RDcmVhdGlvbiA9IF9wb3N0Q3JlYXRpb25cblx0UXVpY2tFbGVtZW50OjpfYXR0YWNoU3RhdGVFdmVudHMgPSBfYXR0YWNoU3RhdGVFdmVudHNcblx0UXVpY2tFbGVtZW50OjpfcHJveHlQYXJlbnQgPSBfcHJveHlQYXJlbnRcblx0UXVpY2tFbGVtZW50OjpfdW5wcm94eVBhcmVudCA9IF91bnByb3h5UGFyZW50XG5cblxuXG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgKFF1aWNrRWxlbWVudCktPlxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyBRdWlja0VsZW1lbnQ6Oixcblx0XHQncmF3JzogZ2V0OiAoKS0+IEBlbFxuXHRcdCcwJzogZ2V0OiAoKS0+IEBlbFxuXHRcdCdjc3MnOiBnZXQ6ICgpLT4gQHN0eWxlXG5cdFx0J3JlcGxhY2VXaXRoJzogZ2V0OiAoKS0+IEByZXBsYWNlXG5cdFx0J3JlbW92ZUxpc3RlbmVyJzogZ2V0OiAoKS0+IEBvZmZcblxuIiwiaW1wb3J0IHF1aWNrZG9tIGZyb20gJy4uL3F1aWNrZG9tJ1xuaW1wb3J0IElTIGZyb20gJy4uL2NoZWNrcydcblxuZXhwb3J0IHBhcmVudHNVbnRpbCA9IChmaWx0ZXIpLT5cblx0X2dldFBhcmVudHMoQCwgZmlsdGVyKVxuXG5leHBvcnQgcGFyZW50TWF0Y2hpbmcgPSAoZmlsdGVyKS0+XG5cdGlmIElTLmZ1bmN0aW9uKGZpbHRlcikgb3IgaXNSZWY9SVMuc3RyaW5nKGZpbHRlcilcblx0XHRuZXh0UGFyZW50ID0gQHBhcmVudFxuXHRcdHdoaWxlIG5leHRQYXJlbnRcblx0XHRcdGlmIGlzUmVmXG5cdFx0XHRcdHJldHVybiBuZXh0UGFyZW50IGlmIG5leHRQYXJlbnQucmVmIGlzIGZpbHRlclxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gbmV4dFBhcmVudCBpZiBmaWx0ZXIobmV4dFBhcmVudClcblxuXHRcdFx0bmV4dFBhcmVudCA9IG5leHRQYXJlbnQucGFyZW50XG5cdFx0XG5cdHJldHVyblxuXG5leHBvcnQgcXVlcnkgPSAoc2VsZWN0b3IpLT5cblx0cXVpY2tkb20gQHJhdy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuXG5leHBvcnQgcXVlcnlBbGwgPSAoc2VsZWN0b3IpLT5cblx0cmVzdWx0ID0gQHJhdy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXHRvdXRwdXQgPSBbXTsgb3V0cHV0LnB1c2goaXRlbSkgZm9yIGl0ZW0gaW4gcmVzdWx0XG5cdHJldHVybiBxdWlja2RvbS5iYXRjaChvdXRwdXQpXG5cblxuXG5cbmV4cG9ydCBfZ2V0UGFyZW50cyA9ICh0YXJnZXRFbCwgZmlsdGVyKS0+XG5cdGZpbHRlciA9IHVuZGVmaW5lZCBpZiBub3QgSVMuZnVuY3Rpb24oZmlsdGVyKSBhbmQgbm90IGlzUmVmPUlTLnN0cmluZyhmaWx0ZXIpXG5cdHBhcmVudHMgPSBbXVxuXHRuZXh0UGFyZW50ID0gdGFyZ2V0RWwucGFyZW50XG5cdHdoaWxlIG5leHRQYXJlbnRcblx0XHRwYXJlbnRzLnB1c2gobmV4dFBhcmVudClcblx0XHRuZXh0UGFyZW50ID0gbmV4dFBhcmVudC5wYXJlbnRcblx0XHRpZiBpc1JlZlxuXHRcdFx0bmV4dFBhcmVudCA9IG51bGwgaWYgbmV4dFBhcmVudCBhbmQgbmV4dFBhcmVudC5yZWYgaXMgZmlsdGVyXG5cdFx0ZWxzZSBpZiBmaWx0ZXJcblx0XHRcdG5leHRQYXJlbnQgPSBudWxsIGlmIGZpbHRlcihuZXh0UGFyZW50KVxuXG5cdHJldHVybiBwYXJlbnRzXG5cblxuZXhwb3J0IF9nZXRDaGlsZFJlZnMgPSAodGFyZ2V0LCBmcmVzaENvcHkpLT5cblx0dGFyZ2V0Ll9jaGlsZFJlZnMgPSB7fSBpZiBmcmVzaENvcHkgb3Igbm90IHRhcmdldC5fY2hpbGRSZWZzXG5cdHJlZnMgPSB0YXJnZXQuX2NoaWxkUmVmc1xuXHRyZWZzW3RhcmdldC5yZWZdID0gdGFyZ2V0IGlmIHRhcmdldC5yZWZcblx0Y2hpbGRyZW4gPSB0YXJnZXQuY2hpbGRyZW5cblxuXHRpZiBjaGlsZHJlbi5sZW5ndGhcblx0XHRmb3IgY2hpbGQgaW4gY2hpbGRyZW5cblx0XHRcdGNoaWxkUmVmcyA9IF9nZXRDaGlsZFJlZnMoY2hpbGQsIGZyZXNoQ29weSlcblx0XHRcdHJlZnNbcmVmXSB8fD0gZWwgZm9yIHJlZixlbCBvZiBjaGlsZFJlZnNcblxuXHRyZXR1cm4gcmVmc1xuXG5cbmV4cG9ydCBfZ2V0SW5kZXhCeVByb3AgPSAobWFpbiwgcHJvcCktPlxuXHRpZiBub3QgcGFyZW50PW1haW4ucGFyZW50XG5cdFx0cmV0dXJuIG51bGxcblx0ZWxzZVxuXHRcdHBhcmVudC5jaGlsZHJlblxuXHRcdFx0LmZpbHRlciAoY2hpbGQpLT4gY2hpbGRbcHJvcF0gaXMgbWFpbltwcm9wXVxuXHRcdFx0LmluZGV4T2YobWFpbilcblxuXG5leHBvcnQgX2ZpbHRlckVsZW1lbnRzID0gKGFycmF5KS0+XG5cdGlmIG5vdCBhcnJheS5sZW5ndGhcblx0XHRyZXR1cm4gYXJyYXlcblx0ZWxzZVxuXHRcdG91dHB1dCA9IFtdXG5cdFx0b3V0cHV0LnB1c2goaXRlbSkgZm9yIGl0ZW0gaW4gYXJyYXkgd2hlbiBpdGVtLnR5cGUgaXNudCAndGV4dCdcblx0XHRyZXR1cm4gb3V0cHV0XG5cbmV4cG9ydCBkZWZhdWx0IChRdWlja0VsZW1lbnQpLT5cblx0UXVpY2tFbGVtZW50OjpwYXJlbnRzVW50aWwgPSBwYXJlbnRzVW50aWxcblx0UXVpY2tFbGVtZW50OjpwYXJlbnRNYXRjaGluZyA9IHBhcmVudE1hdGNoaW5nXG5cdFF1aWNrRWxlbWVudDo6cXVlcnkgPSBxdWVyeVxuXHRRdWlja0VsZW1lbnQ6OnF1ZXJ5QWxsID0gcXVlcnlBbGxcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIFF1aWNrRWxlbWVudDo6LFxuXHRcdCdjaGlsZHJlbic6IGdldDogKCktPlxuXHRcdFx0aWYgQGVsLmNoaWxkTm9kZXMubGVuZ3RoIGlzbnQgQF9jaGlsZHJlbi5sZW5ndGggIyBSZS1jb2xsZWN0IGNoaWxkcmVuXHRcblx0XHRcdFx0QF9jaGlsZHJlbi5sZW5ndGggPSAwICMgRW1wdHkgb3V0IGNoaWxkcmVuIGFycmF5XG5cdFx0XHRcdEBfY2hpbGRyZW4ucHVzaChxdWlja2RvbShjaGlsZCkpIGZvciBjaGlsZCBpbiBAZWwuY2hpbGROb2RlcyB3aGVuIGNoaWxkLm5vZGVUeXBlIDwgNFxuXG5cdFx0XHRyZXR1cm4gQF9jaGlsZHJlblxuXG5cdFx0J2VsZW1lbnRDaGlsZHJlbic6IGdldDogKCktPlxuXHRcdFx0X2ZpbHRlckVsZW1lbnRzKEBjaGlsZHJlbilcblxuXHRcdCdwYXJlbnQnOiBnZXQ6ICgpLT5cblx0XHRcdGlmIChub3QgQF9wYXJlbnQgb3IgQF9wYXJlbnQuZWwgaXNudCBAZWwucGFyZW50Tm9kZSkgYW5kIG5vdCBJUy5kb21Eb2MoQGVsLnBhcmVudE5vZGUpXG5cdFx0XHRcdEBfcGFyZW50ID0gcXVpY2tkb20oQGVsLnBhcmVudE5vZGUpXG5cblx0XHRcdHJldHVybiBAX3BhcmVudFxuXG5cblx0XHQncGFyZW50cyc6IGdldDogKCktPlxuXHRcdFx0X2dldFBhcmVudHMoQClcblxuXHRcdCduZXh0JzogZ2V0OiAoKS0+XG5cdFx0XHRxdWlja2RvbShAZWwubmV4dFNpYmxpbmcpXG5cdFx0XG5cdFx0J25leHRFbCc6IGdldDogKCktPlxuXHRcdFx0cXVpY2tkb20oQGVsLm5leHRFbGVtZW50U2libGluZylcblx0XHRcblx0XHQnbmV4dEVsQWxsJzogZ2V0OiAoKS0+XG5cdFx0XHRfZmlsdGVyRWxlbWVudHMoQG5leHRBbGwpXG5cblx0XHQnbmV4dEFsbCc6IGdldDogKCktPlxuXHRcdFx0c2libGluZ3MgPSBbXVxuXHRcdFx0bmV4dFNpYmxpbmcgPSBxdWlja2RvbShAZWwubmV4dFNpYmxpbmcpXG5cdFx0XHR3aGlsZSBuZXh0U2libGluZ1xuXHRcdFx0XHRzaWJsaW5ncy5wdXNoKG5leHRTaWJsaW5nKVxuXHRcdFx0XHRuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRcblxuXHRcdFx0cmV0dXJuIHNpYmxpbmdzXG5cblx0XHQncHJldic6IGdldDogKCktPlxuXHRcdFx0cXVpY2tkb20oQGVsLnByZXZpb3VzU2libGluZylcblx0XHRcblx0XHQncHJldkVsJzogZ2V0OiAoKS0+XG5cdFx0XHRxdWlja2RvbShAZWwucHJldmlvdXNFbGVtZW50U2libGluZylcblx0XHRcblx0XHQncHJldkVsQWxsJzogZ2V0OiAoKS0+XG5cdFx0XHRfZmlsdGVyRWxlbWVudHMoQHByZXZBbGwpXG5cblx0XHQncHJldkFsbCc6IGdldDogKCktPlxuXHRcdFx0c2libGluZ3MgPSBbXVxuXHRcdFx0cHJldlNpYmxpbmcgPSBxdWlja2RvbShAZWwucHJldmlvdXNTaWJsaW5nKVxuXHRcdFx0d2hpbGUgcHJldlNpYmxpbmdcblx0XHRcdFx0c2libGluZ3MucHVzaChwcmV2U2libGluZylcblx0XHRcdFx0cHJldlNpYmxpbmcgPSBwcmV2U2libGluZy5wcmV2XG5cblx0XHRcdHJldHVybiBzaWJsaW5nc1xuXG5cdFx0J3NpYmxpbmdzJzogZ2V0OiAoKS0+XG5cdFx0XHRAcHJldkFsbC5yZXZlcnNlKCkuY29uY2F0KEBuZXh0QWxsKVxuXG5cdFx0J2VsZW1lbnRTaWJsaW5ncyc6IGdldDogKCktPlxuXHRcdFx0X2ZpbHRlckVsZW1lbnRzKEBzaWJsaW5ncylcblx0XHRcblx0XHQnY2hpbGQnOiBnZXQ6ICgpLT5cblx0XHRcdEBfY2hpbGRSZWZzIG9yIF9nZXRDaGlsZFJlZnMoQClcblxuXHRcdCdjaGlsZGYnOiBnZXQ6ICgpLT5cblx0XHRcdF9nZXRDaGlsZFJlZnMoQCwgdHJ1ZSlcblxuXHRcdCdmaXJzdENoaWxkJzogZ2V0OiAoKS0+XG5cdFx0XHRAY2hpbGRyZW5bMF1cblxuXHRcdCdsYXN0Q2hpbGQnOiBnZXQ6ICgpLT5cblx0XHRcdGNoaWxkcmVuID0gQGNoaWxkcmVuXG5cdFx0XHRjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGgtMV1cblxuXHRcdCdpbmRleCc6IGdldDogKCktPlxuXHRcdFx0aWYgbm90IHBhcmVudD1AcGFyZW50XG5cdFx0XHRcdHJldHVybiBudWxsXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKEApXG5cblx0XHQnaW5kZXhUeXBlJzogZ2V0OiAoKS0+XG5cdFx0XHRfZ2V0SW5kZXhCeVByb3AoQCwgJ3R5cGUnKVxuXG5cdFx0J2luZGV4UmVmJzogZ2V0OiAoKS0+XG5cdFx0XHRfZ2V0SW5kZXhCeVByb3AoQCwgJ3JlZicpXG5cblxuXG5xdWlja2RvbS5xdWVyeSA9ICh0YXJnZXQpLT5cblx0cXVpY2tkb20oZG9jdW1lbnQpLnF1ZXJ5KHRhcmdldClcblxucXVpY2tkb20ucXVlcnlBbGwgPSAodGFyZ2V0KS0+XG5cdHF1aWNrZG9tKGRvY3VtZW50KS5xdWVyeUFsbCh0YXJnZXQpXG4iLCJpbXBvcnQgSVMgZnJvbSAnLi4vY2hlY2tzJ1xuaW1wb3J0IHtpbmNsdWRlcywgcmVtb3ZlSXRlbSwgbm9ybWFsaXplRWxlbWVudEFyZyBhcyBub3JtYWxpemVFbGVtZW50fSBmcm9tICcuLi9oZWxwZXJzJ1xuRFVNTVlfQVJSQVkgPSBbXVxuXG5cbmV4cG9ydCBzdGF0ZSA9ICh0YXJnZXRTdGF0ZSwgdmFsdWUsIGJ1YmJsZXMsIHNvdXJjZSktPlxuXHRpZiBhcmd1bWVudHMubGVuZ3RoIGlzIDBcblx0XHRyZXR1cm4gQF9zdGF0ZS5zbGljZSgpXG5cdFxuXHRpZiBhcmd1bWVudHMubGVuZ3RoIGlzIDFcblx0XHRpZiBJUy5zdHJpbmcodGFyZ2V0U3RhdGUpXG5cdFx0XHRyZXR1cm4gaW5jbHVkZXMoQF9zdGF0ZSwgdGFyZ2V0U3RhdGUpXG5cdFx0XG5cdFx0ZWxzZSBpZiBJUy5vYmplY3QodGFyZ2V0U3RhdGUpXG5cdFx0XHRrZXlzID0gT2JqZWN0LmtleXModGFyZ2V0U3RhdGUpXG5cdFx0XHRpID0gLTFcblx0XHRcdEBzdGF0ZShrZXksIHRhcmdldFN0YXRlW2tleV0pIHdoaWxlIGtleT1rZXlzWysraV1cblx0XHRcdHJldHVybiBAXG5cblx0ZWxzZSBpZiBAX3N0YXRlUGlwZVRhcmdldCBhbmQgc291cmNlIGlzbnQgQFxuXHRcdEBfc3RhdGVQaXBlVGFyZ2V0LnN0YXRlKHRhcmdldFN0YXRlLCB2YWx1ZSwgYnViYmxlcywgQClcblx0XHRyZXR1cm4gQFxuXHRcblx0ZWxzZSBpZiBJUy5zdHJpbmcodGFyZ2V0U3RhdGUpXG5cdFx0dGFyZ2V0U3RhdGUgPSB0YXJnZXRTdGF0ZS5zbGljZSgxKSBpZiB0YXJnZXRTdGF0ZVswXSBpcyAnJCdcblx0XHRyZXR1cm4gQCBpZiB0YXJnZXRTdGF0ZSBpcyAnYmFzZSdcblx0XHRkZXNpcmVkVmFsdWUgPSAhIXZhbHVlICMgQ29udmVydCB0aGUgdmFsdWUgdG8gYSBib29sZWFuXG5cdFx0YWN0aXZlU3RhdGVzID0gQF9nZXRBY3RpdmVTdGF0ZXModGFyZ2V0U3RhdGUsIGZhbHNlKVxuXHRcdFxuXHRcdCMgPT09PSBUb2dnbGUgc3R5bGVzIGZvciB0aGlzIHN0YXRlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdGlmIEBzdGF0ZSh0YXJnZXRTdGF0ZSkgaXNudCBkZXNpcmVkVmFsdWVcblx0XHRcdHByb3AgPSBpZiBAdHlwZSBpcyAndGV4dCcgdGhlbiAnVGV4dCcgZWxzZSAnU3R5bGUnXG5cdFx0XG5cdFx0XHRpZiBkZXNpcmVkVmFsdWUgI2lzIG9uXG5cdFx0XHRcdEBfc3RhdGUucHVzaCh0YXJnZXRTdGF0ZSlcblx0XHRcdFx0dG9nZ2xlID0gJ09OJ1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZW1vdmVJdGVtKEBfc3RhdGUsIHRhcmdldFN0YXRlKVxuXHRcdFx0XHR0b2dnbGUgPSAnT0ZGJ1xuXHRcdFx0XG5cdFx0XHRAWydfdHVybicrcHJvcCt0b2dnbGVdKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpXG5cdFx0XHRAZW1pdFByaXZhdGUgXCJzdGF0ZUNoYW5nZToje3RhcmdldFN0YXRlfVwiLCBkZXNpcmVkVmFsdWVcblxuXG5cdFx0IyA9PT09IFBhc3Mgc3RhdGUgdG8gcGFyZW50L2NoaWxkcmVuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdGlmIG5vdCBpbmNsdWRlcyhAb3B0aW9ucy51bnBhc3NhYmxlU3RhdGVzLCB0YXJnZXRTdGF0ZSlcblx0XHRcdGlmIGJ1YmJsZXNcblx0XHRcdFx0QF9wYXJlbnQuc3RhdGUodGFyZ2V0U3RhdGUsIHZhbHVlLCB0cnVlLCBzb3VyY2Ugb3IgQCkgaWYgQHBhcmVudFxuXHRcdFx0ZWxzZSBpZiBAb3B0aW9ucy5wYXNzU3RhdGVUb0NoaWxkcmVuXG5cdFx0XHRcdGNoaWxkLnN0YXRlKHRhcmdldFN0YXRlLCB2YWx1ZSwgZmFsc2UsIHNvdXJjZSBvciBAKSBmb3IgY2hpbGQgaW4gQF9jaGlsZHJlblxuXHRcdFxuXHRcdHJldHVybiBAXG5cblxuZXhwb3J0IHRvZ2dsZVN0YXRlID0gKHRhcmdldFN0YXRlKS0+XG5cdEBzdGF0ZSh0YXJnZXRTdGF0ZSwgIUBzdGF0ZSh0YXJnZXRTdGF0ZSkpXG5cblxuZXhwb3J0IHJlc2V0U3RhdGUgPSAoKS0+XG5cdGZvciBhY3RpdmVTdGF0ZSBpbiBAX3N0YXRlLnNsaWNlKClcblx0XHRAc3RhdGUoYWN0aXZlU3RhdGUsIG9mZilcblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBwaXBlU3RhdGUgPSAodGFyZ2V0RWwpLT5cblx0aWYgdGFyZ2V0RWxcblx0XHR0YXJnZXRFbCA9IG5vcm1hbGl6ZUVsZW1lbnQodGFyZ2V0RWwpXG5cblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKSBhbmQgdGFyZ2V0RWwgaXNudCBAXG5cdFx0XHRAX3N0YXRlUGlwZVRhcmdldCA9IHRhcmdldEVsXG5cdFx0XHR0YXJnZXRFbC5zdGF0ZShhY3RpdmVTdGF0ZSwgb24pIGZvciBhY3RpdmVTdGF0ZSBpbiBAX3N0YXRlXG5cblx0ZWxzZSBpZiB0YXJnZXRFbCBpcyBmYWxzZVxuXHRcdGRlbGV0ZSBAX3N0YXRlUGlwZVRhcmdldFxuXG5cdHJldHVybiBAXG5cblxuXG5cbmV4cG9ydCBfYXBwbHlSZWdpc3RlcmVkU3R5bGUgPSAodGFyZ2V0U3R5bGUsIHN1cGVyaW9yU3RhdGVzLCBpbmNsdWRlQmFzZSwgc2tpcEZucyktPiBpZiB0YXJnZXRTdHlsZVxuXHRAYWRkQ2xhc3MoY2xhc3NOYW1lKSBmb3IgY2xhc3NOYW1lIGluIHRhcmdldFN0eWxlLmNsYXNzTmFtZVxuXHRcblx0aWYgdGFyZ2V0U3R5bGUuZm5zLmxlbmd0aCBhbmQgbm90IHNraXBGbnNcblx0XHRzdXBlcmlvclN0eWxlcyA9IEBfcmVzb2x2ZUZuU3R5bGVzKHN1cGVyaW9yU3RhdGVzLCBpbmNsdWRlQmFzZSkgaWYgc3VwZXJpb3JTdGF0ZXNcblx0XHRcblx0XHRmb3IgZW50cnkgaW4gdGFyZ2V0U3R5bGUuZm5zXG5cdFx0XHRAc3R5bGUoZW50cnlbMF0sIGVudHJ5WzFdKSB1bmxlc3Mgc3VwZXJpb3JTdHlsZXMgYW5kIHN1cGVyaW9yU3R5bGVzW2VudHJ5WzBdXVxuXHRcblx0cmV0dXJuXG5cblxuZXhwb3J0IF9yZW1vdmVSZWdpc3RlcmVkU3R5bGUgPSAodGFyZ2V0U3R5bGUsIHN1cGVyaW9yU3RhdGVzLCBpbmNsdWRlQmFzZSktPlxuXHRAcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSBmb3IgY2xhc3NOYW1lIGluIHRhcmdldFN0eWxlLmNsYXNzTmFtZVxuXG5cdGlmIHRhcmdldFN0eWxlLmZucy5sZW5ndGhcblx0XHRzdXBlcmlvclN0eWxlcyA9IEBfcmVzb2x2ZUZuU3R5bGVzKHN1cGVyaW9yU3RhdGVzLCBpbmNsdWRlQmFzZSkgaWYgc3VwZXJpb3JTdGF0ZXNcblx0XHRcblx0XHRmb3IgZW50cnkgaW4gdGFyZ2V0U3R5bGUuZm5zXG5cdFx0XHRyZXNldFZhbHVlID0gc3VwZXJpb3JTdHlsZXMgYW5kIHN1cGVyaW9yU3R5bGVzW2VudHJ5WzBdXSBvciBudWxsXG5cdFx0XHRAc3R5bGUoZW50cnlbMF0sIHJlc2V0VmFsdWUpXG5cblx0cmV0dXJuXG5cblxuXG5cbmV4cG9ydCBfdHVyblN0eWxlT04gPSAodGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcyktPlxuXHRza2lwRm5zID0gQG9wdGlvbnMuc3R5bGVBZnRlckluc2VydCBhbmQgbm90IEBfaW5zZXJ0ZWRcblx0aWYgQF9zdHlsZXNbdGFyZ2V0U3RhdGVdXG5cdFx0QF9hcHBseVJlZ2lzdGVyZWRTdHlsZShAX3N0eWxlc1t0YXJnZXRTdGF0ZV0sIEBfZ2V0U3VwZXJpb3JTdGF0ZXModGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcyksIGZhbHNlLCBza2lwRm5zKVxuXG5cblx0aWYgQF9wcm92aWRlZFN0YXRlc1NoYXJlZFxuXHRcdHNoYXJlZFN0YXRlcyA9IEBfZ2V0U2hhcmVkU3RhdGVzKHRhcmdldFN0YXRlKVxuXHRcdFxuXHRcdGZvciBzdGF0ZUNoYWluIGluIHNoYXJlZFN0YXRlc1xuXHRcdFx0QF9zdGF0ZVNoYXJlZC5wdXNoKHN0YXRlQ2hhaW4uc3RyaW5nKSB1bmxlc3MgaW5jbHVkZXMoQF9zdGF0ZVNoYXJlZCwgc3RhdGVDaGFpbi5zdHJpbmcpXG5cdFx0XHRAX2FwcGx5UmVnaXN0ZXJlZFN0eWxlKEBfc3R5bGVzW3N0YXRlQ2hhaW4uc3RyaW5nXSwgbnVsbCwgbnVsbCwgc2tpcEZucylcblxuXHRyZXR1cm5cblxuXG5leHBvcnQgX3R1cm5TdHlsZU9GRiA9ICh0YXJnZXRTdGF0ZSwgYWN0aXZlU3RhdGVzKS0+XG5cdGlmIEBfc3R5bGVzW3RhcmdldFN0YXRlXVxuXHRcdEBfcmVtb3ZlUmVnaXN0ZXJlZFN0eWxlKEBfc3R5bGVzW3RhcmdldFN0YXRlXSwgYWN0aXZlU3RhdGVzLCB0cnVlKVxuXG5cdGlmIEBfcHJvdmlkZWRTdGF0ZXNTaGFyZWRcblx0XHRzaGFyZWRTdGF0ZXMgPSBAX2dldFNoYXJlZFN0YXRlcyh0YXJnZXRTdGF0ZSlcblx0XHRyZXR1cm4gaWYgc2hhcmVkU3RhdGVzLmxlbmd0aCBpcyAwXG5cblx0XHRmb3Igc3RhdGVDaGFpbiBpbiBzaGFyZWRTdGF0ZXNcblx0XHRcdHJlbW92ZUl0ZW0oQF9zdGF0ZVNoYXJlZCwgc3RhdGVDaGFpbi5zdHJpbmcpXG5cdFx0XHR0YXJnZXRTdHlsZSA9IEBfc3R5bGVzW3N0YXRlQ2hhaW4uc3RyaW5nXVxuXHRcdFx0XG5cdFx0XHRpZiB0YXJnZXRTdHlsZS5mbnMubGVuZ3RoIGFuZCBAX3N0YXRlU2hhcmVkLmxlbmd0aCBhbmQgbm90IGFjdGl2ZVNoYXJlZFN0YXRlc1xuXHRcdFx0XHRhY3RpdmVTaGFyZWRTdGF0ZXMgPSBAX3N0YXRlU2hhcmVkLmZpbHRlciAoc3RhdGUpLT4gbm90IGluY2x1ZGVzKHN0YXRlLCB0YXJnZXRTdGF0ZSlcblx0XHRcdFx0YWN0aXZlU3RhdGVzID0gYWN0aXZlU3RhdGVzLmNvbmNhdChhY3RpdmVTaGFyZWRTdGF0ZXMpXG5cdFx0XHRcblx0XHRcdEBfcmVtb3ZlUmVnaXN0ZXJlZFN0eWxlKHRhcmdldFN0eWxlLCBhY3RpdmVTdGF0ZXMsIHRydWUpXG5cblx0cmV0dXJuXG5cblxuXG5leHBvcnQgX3R1cm5UZXh0T04gPSAodGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcyktPlxuXHRpZiBAX3RleHRzIGFuZCBJUy5zdHJpbmcodGFyZ2V0VGV4dCA9IEBfdGV4dHNbdGFyZ2V0U3RhdGVdKVxuXHRcdHN1cGVyaW9yU3RhdGVzID0gQF9nZXRTdXBlcmlvclN0YXRlcyh0YXJnZXRTdGF0ZSwgYWN0aXZlU3RhdGVzKVxuXHRcdFxuXHRcdEB0ZXh0ID0gdGFyZ2V0VGV4dCB1bmxlc3Mgc3VwZXJpb3JTdGF0ZXMubGVuZ3RoXG5cdHJldHVyblxuXG5cbmV4cG9ydCBfdHVyblRleHRPRkYgPSAodGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcyktPlxuXHRpZiBAX3RleHRzIGFuZCBJUy5zdHJpbmcodGFyZ2V0VGV4dCA9IEBfdGV4dHNbdGFyZ2V0U3RhdGVdKVxuXHRcdGFjdGl2ZVN0YXRlcyA9IGFjdGl2ZVN0YXRlcy5maWx0ZXIgKHN0YXRlKS0+IHN0YXRlIGlzbnQgdGFyZ2V0U3RhdGVcblx0XHR0YXJnZXRUZXh0ID0gQF90ZXh0c1thY3RpdmVTdGF0ZXNbYWN0aXZlU3RhdGVzLmxlbmd0aC0xXV1cblx0XHR0YXJnZXRUZXh0ID89IEBfdGV4dHMuYmFzZVxuXHRcdFxuXHRcdEB0ZXh0ID0gdGFyZ2V0VGV4dFxuXHRyZXR1cm5cblxuXG5cblxuXHRcblxuXG5cblxuZXhwb3J0IF9nZXRBY3RpdmVTdGF0ZXMgPSAoc3RhdGVUb0V4Y2x1ZGUsIGluY2x1ZGVTaGFyZWRTdGF0ZXM9dHJ1ZSktPlxuXHRyZXR1cm4gRFVNTVlfQVJSQVkgaWYgbm90IEBfcHJvdmlkZWRTdGF0ZXNcblx0YWN0aXZlU3RhdGVzID0gcGxhaW5TdGF0ZXMgPSBAX3N0YXRlXG5cdGlmIHN0YXRlVG9FeGNsdWRlXG5cdFx0cGxhaW5TdGF0ZXMgPSBbXVxuXHRcdHBsYWluU3RhdGVzLnB1c2goc3RhdGUpIGZvciBzdGF0ZSBpbiBhY3RpdmVTdGF0ZXMgd2hlbiBzdGF0ZSBpc250IHN0YXRlVG9FeGNsdWRlXG5cdFxuXHRpZiBub3QgaW5jbHVkZVNoYXJlZFN0YXRlcyBvciBub3QgQF9wcm92aWRlZFN0YXRlc1NoYXJlZFxuXHRcdHJldHVybiBwbGFpblN0YXRlc1xuXHRlbHNlXG5cdFx0cmV0dXJuIHBsYWluU3RhdGVzLmNvbmNhdChAX3N0YXRlU2hhcmVkKVxuXG5cbmV4cG9ydCBfZ2V0U3VwZXJpb3JTdGF0ZXMgPSAodGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcyktPlxuXHR0YXJnZXRTdGF0ZUluZGV4ID0gQF9wcm92aWRlZFN0YXRlcy5pbmRleE9mKHRhcmdldFN0YXRlKVxuXHRyZXR1cm4gRFVNTVlfQVJSQVkgaWYgdGFyZ2V0U3RhdGVJbmRleCBpcyBAX3Byb3ZpZGVkU3RhdGVzLmxlbmd0aCAtIDFcblx0XG5cdHN1cGVyaW9yID0gW11cblx0Zm9yIGNhbmRpZGF0ZSBpbiBhY3RpdmVTdGF0ZXNcblx0XHRzdXBlcmlvci5wdXNoKGNhbmRpZGF0ZSkgaWYgQF9wcm92aWRlZFN0YXRlcy5pbmRleE9mKGNhbmRpZGF0ZSkgPiB0YXJnZXRTdGF0ZUluZGV4XG5cblx0cmV0dXJuIHN1cGVyaW9yXG5cblxuZXhwb3J0IF9nZXRTaGFyZWRTdGF0ZXMgPSAodGFyZ2V0U3RhdGUpLT5cblx0YWN0aXZlU3RhdGVzID0gQF9zdGF0ZVxuXHRzaGFyZWRTdGF0ZXMgPSBbXVxuXG5cdGZvciBzdGF0ZUNoYWluIGluIEBfcHJvdmlkZWRTdGF0ZXNTaGFyZWRcblx0XHRzaGFyZWRTdGF0ZXMucHVzaChzdGF0ZUNoYWluKSBpZiBzdGF0ZUNoYWluLmluY2x1ZGVzKHRhcmdldFN0YXRlKSBhbmQgc3RhdGVDaGFpbi5pc0FwcGxpY2FibGUodGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcylcblxuXHRyZXR1cm4gc2hhcmVkU3RhdGVzXG5cblxuZXhwb3J0IF9yZXNvbHZlRm5TdHlsZXMgPSAoc3RhdGVzLCBpbmNsdWRlQmFzZSktPlxuXHRzdGF0ZXMgPSBbJ2Jhc2UnXS5jb25jYXQoc3RhdGVzKSBpZiBpbmNsdWRlQmFzZVxuXHRvdXRwdXQgPSB7fVxuXHRcblx0Zm9yIHN0YXRlIGluIHN0YXRlcyB3aGVuIEBfc3R5bGVzW3N0YXRlXSBhbmQgQF9zdHlsZXNbc3RhdGVdLmZucy5sZW5ndGhcblx0XHRvdXRwdXRbZW50cnlbMF1dID0gZW50cnlbMV0gZm9yIGVudHJ5IGluIEBfc3R5bGVzW3N0YXRlXS5mbnNcblxuXHRyZXR1cm4gb3V0cHV0XG5cblxuZXhwb3J0IGRlZmF1bHQgKFF1aWNrRWxlbWVudCktPlxuXHRRdWlja0VsZW1lbnQ6OnN0YXRlID0gc3RhdGVcblx0UXVpY2tFbGVtZW50Ojp0b2dnbGVTdGF0ZSA9IHRvZ2dsZVN0YXRlXG5cdFF1aWNrRWxlbWVudDo6cmVzZXRTdGF0ZSA9IHJlc2V0U3RhdGVcblx0UXVpY2tFbGVtZW50OjpwaXBlU3RhdGUgPSBwaXBlU3RhdGVcblx0UXVpY2tFbGVtZW50OjpfYXBwbHlSZWdpc3RlcmVkU3R5bGUgPSBfYXBwbHlSZWdpc3RlcmVkU3R5bGVcblx0UXVpY2tFbGVtZW50OjpfcmVtb3ZlUmVnaXN0ZXJlZFN0eWxlID0gX3JlbW92ZVJlZ2lzdGVyZWRTdHlsZVxuXHRRdWlja0VsZW1lbnQ6Ol90dXJuU3R5bGVPTiA9IF90dXJuU3R5bGVPTlxuXHRRdWlja0VsZW1lbnQ6Ol90dXJuU3R5bGVPRkYgPSBfdHVyblN0eWxlT0ZGXG5cdFF1aWNrRWxlbWVudDo6X3R1cm5UZXh0T04gPSBfdHVyblRleHRPTlxuXHRRdWlja0VsZW1lbnQ6Ol90dXJuVGV4dE9GRiA9IF90dXJuVGV4dE9GRlxuXHRRdWlja0VsZW1lbnQ6Ol9nZXRBY3RpdmVTdGF0ZXMgPSBfZ2V0QWN0aXZlU3RhdGVzXG5cdFF1aWNrRWxlbWVudDo6X2dldFN1cGVyaW9yU3RhdGVzID0gX2dldFN1cGVyaW9yU3RhdGVzXG5cdFF1aWNrRWxlbWVudDo6X2dldFNoYXJlZFN0YXRlcyA9IF9nZXRTaGFyZWRTdGF0ZXNcblx0UXVpY2tFbGVtZW50OjpfcmVzb2x2ZUZuU3R5bGVzID0gX3Jlc29sdmVGblN0eWxlc1xuXG5cblxuXG5cblxuIiwiaW1wb3J0IHF1aWNrZG9tIGZyb20gJy4uL3F1aWNrZG9tJ1xuaW1wb3J0IElTIGZyb20gJy4uL2NoZWNrcydcbmltcG9ydCB7aW5jbHVkZXMsIG5vcm1hbGl6ZUVsZW1lbnRBcmcgYXMgbm9ybWFsaXplRWxlbWVudH0gZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCBleHRlbmQgZnJvbSAnc21hcnQtZXh0ZW5kJ1xuXG5leHBvcnQgdG9UZW1wbGF0ZSA9ICgpLT5cblx0cXVpY2tkb20udGVtcGxhdGUoQClcblxuXG5leHBvcnQgY2xvbmUgPSAoKS0+XG5cdGVsQ2xvbmUgPSBAZWwuY2xvbmVOb2RlKGZhbHNlKVxuXHRvcHRpb25zID0gZXh0ZW5kLmNsb25lKEBvcHRpb25zLCB7ZXhpc3Rpbmc6ZWxDbG9uZX0pXG5cdFxuXHRuZXdFbCA9IG5ldyBAY29uc3RydWN0b3IoQHR5cGUsIG9wdGlvbnMpXG5cdG5ld0VsLnN0YXRlKGFjdGl2ZVN0YXRlLCBvbikgZm9yIGFjdGl2ZVN0YXRlIGluIEBfc3RhdGVcblx0bmV3RWwuYXBwZW5kKGNoaWxkLmNsb25lKCkpIGZvciBjaGlsZCBpbiBAY2hpbGRyZW5cblx0Zm9yIGV2ZW50TmFtZSwgY2FsbGJhY2tzIG9mIEBfZXZlbnRDYWxsYmFja3Ncblx0XHRuZXdFbC5vbihldmVudE5hbWUsIGNhbGxiYWNrKSBmb3IgY2FsbGJhY2sgaW4gY2FsbGJhY2tzXG5cdFxuXHRyZXR1cm4gbmV3RWxcblxuXG5leHBvcnQgYXBwZW5kID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBub3JtYWxpemVFbGVtZW50KHRhcmdldEVsKVxuXHRcdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHRwcmV2UGFyZW50ID0gdGFyZ2V0RWwucGFyZW50XG5cdFx0XHRwcmV2UGFyZW50Ll9yZW1vdmVDaGlsZCh0YXJnZXRFbCkgaWYgcHJldlBhcmVudFxuXHRcdFx0QF9jaGlsZHJlbi5wdXNoKHRhcmdldEVsKVxuXHRcdFx0QGVsLmFwcGVuZENoaWxkKHRhcmdldEVsLmVsKVxuXHRcdFx0dGFyZ2V0RWwuX3JlZnJlc2hQYXJlbnQoKSAjIEZvcmNlIHJlLWZyZXNoIHRhcmdldEVsLl9wYXJlbnQgdmFsdWUgdG8gdHJpZ2dlciBpbnNlcnRlZCBjYWxsYmFja1xuXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IGFwcGVuZFRvID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBub3JtYWxpemVFbGVtZW50KHRhcmdldEVsKVxuXHRcdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHR0YXJnZXRFbC5hcHBlbmQoQClcblx0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHByZXBlbmQgPSAodGFyZ2V0RWwpLT5cblx0aWYgdGFyZ2V0RWxcblx0XHR0YXJnZXRFbCA9IG5vcm1hbGl6ZUVsZW1lbnQodGFyZ2V0RWwpXG5cdFx0XG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbClcblx0XHRcdHByZXZQYXJlbnQgPSB0YXJnZXRFbC5wYXJlbnRcblx0XHRcdHByZXZQYXJlbnQuX3JlbW92ZUNoaWxkKHRhcmdldEVsKSBpZiBwcmV2UGFyZW50XG5cdFx0XHRAX2NoaWxkcmVuLnVuc2hpZnQodGFyZ2V0RWwpXG5cdFx0XHRAZWwuaW5zZXJ0QmVmb3JlKHRhcmdldEVsLmVsLCBAZWwuZmlyc3RDaGlsZClcblx0XHRcdHRhcmdldEVsLl9yZWZyZXNoUGFyZW50KCkgIyBGb3JjZSByZS1mcmVzaCB0YXJnZXRFbC5fcGFyZW50IHZhbHVlIHRvIHRyaWdnZXIgaW5zZXJ0ZWQgY2FsbGJhY2tcblx0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHByZXBlbmRUbyA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblx0XHRcblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKVxuXHRcdFx0dGFyZ2V0RWwucHJlcGVuZChAKVxuXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IGFmdGVyID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsIGFuZCBAcGFyZW50XG5cdFx0dGFyZ2V0RWwgPSBub3JtYWxpemVFbGVtZW50KHRhcmdldEVsKVxuXG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbClcblx0XHRcdG15SW5kZXggPSBAcGFyZW50Ll9jaGlsZHJlbi5pbmRleE9mKEApXG5cdFx0XHRAcGFyZW50Ll9jaGlsZHJlbi5zcGxpY2UobXlJbmRleCsxLCAwLCB0YXJnZXRFbClcblx0XHRcdEBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXJnZXRFbC5lbCwgQGVsLm5leHRTaWJsaW5nKVxuXHRcdFx0dGFyZ2V0RWwuX3JlZnJlc2hQYXJlbnQoKSAjIEZvcmNlIHJlLWZyZXNoIHRhcmdldEVsLl9wYXJlbnQgdmFsdWUgdG8gdHJpZ2dlciBpbnNlcnRlZCBjYWxsYmFja1xuXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IGluc2VydEFmdGVyID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBub3JtYWxpemVFbGVtZW50KHRhcmdldEVsKVxuXHRcdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHR0YXJnZXRFbC5hZnRlcihAKVxuXHRcblx0cmV0dXJuIEBcblxuXG5leHBvcnQgYmVmb3JlID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsIGFuZCBAcGFyZW50XG5cdFx0dGFyZ2V0RWwgPSBub3JtYWxpemVFbGVtZW50KHRhcmdldEVsKVxuXG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbClcblx0XHRcdG15SW5kZXggPSBAcGFyZW50Ll9jaGlsZHJlbi5pbmRleE9mKEApXG5cdFx0XHRAcGFyZW50Ll9jaGlsZHJlbi5zcGxpY2UobXlJbmRleCwgMCwgdGFyZ2V0RWwpXG5cdFx0XHRAZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFyZ2V0RWwuZWwsIEBlbClcblx0XHRcdHRhcmdldEVsLl9yZWZyZXNoUGFyZW50KCkgIyBGb3JjZSByZS1mcmVzaCB0YXJnZXRFbC5fcGFyZW50IHZhbHVlIHRvIHRyaWdnZXIgaW5zZXJ0ZWQgY2FsbGJhY2tcblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBpbnNlcnRCZWZvcmUgPSAodGFyZ2V0RWwpLT5cblx0aWYgdGFyZ2V0RWxcblx0XHR0YXJnZXRFbCA9IG5vcm1hbGl6ZUVsZW1lbnQodGFyZ2V0RWwpXG5cdFx0XG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbClcblx0XHRcdHRhcmdldEVsLmJlZm9yZShAKVxuXHRcblx0cmV0dXJuIEBcblxuXG5leHBvcnQgZGV0YWNoID0gKCktPlxuXHRAcGFyZW50Py5fcmVtb3ZlQ2hpbGQoQClcblx0cmV0dXJuIEBcblxuXG5leHBvcnQgcmVtb3ZlID0gKCktPlxuXHRAZGV0YWNoKClcblx0QHJlc2V0U3RhdGUoKVxuXHRpZiBAX2V2ZW50Q2FsbGJhY2tzXG5cdFx0QF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdLmxlbmd0aCA9IDAgZm9yIGV2ZW50TmFtZSBvZiBAX2V2ZW50Q2FsbGJhY2tzXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IGVtcHR5ID0gKCktPlxuXHRAX3JlbW92ZUNoaWxkKGNoaWxkKSBmb3IgY2hpbGQgaW4gQGNoaWxkcmVuLnNsaWNlKClcblx0cmV0dXJuIEBcblxuXG5leHBvcnQgd3JhcCA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gbm9ybWFsaXplRWxlbWVudCh0YXJnZXRFbClcblx0XHRjdXJyZW50UGFyZW50ID0gQHBhcmVudFxuXG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbCkgYW5kIHRhcmdldEVsIGlzbnQgQCBhbmQgdGFyZ2V0RWwgaXNudCBAcGFyZW50XG5cdFx0XHRpZiBjdXJyZW50UGFyZW50XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnQuX3JlbW92ZUNoaWxkKEAsIGlmIG5vdCB0YXJnZXRFbC5wYXJlbnQgdGhlbiB0YXJnZXRFbClcblx0XHRcdFxuXHRcdFx0dGFyZ2V0RWwuYXBwZW5kKEApXG5cblx0cmV0dXJuIEBcblxuXG5leHBvcnQgdW53cmFwID0gKCktPlxuXHRwYXJlbnQgPSBAcGFyZW50XG5cdGlmIHBhcmVudFxuXHRcdHBhcmVudENoaWxkcmVuID0gcXVpY2tkb20uYmF0Y2gocGFyZW50LmNoaWxkcmVuKVxuXHRcdHBhcmVudFNpYmxpbmcgPSBwYXJlbnQubmV4dFxuXHRcdGdyYW5kUGFyZW50ID0gcGFyZW50LnBhcmVudFxuXHRcdGlmIGdyYW5kUGFyZW50XG5cdFx0XHRwYXJlbnQuZGV0YWNoKClcblxuXHRcdFx0aWYgcGFyZW50U2libGluZ1xuXHRcdFx0XHRwYXJlbnRDaGlsZHJlbi5pbnNlcnRCZWZvcmUocGFyZW50U2libGluZylcblx0XHRcdGVsc2Vcblx0XHRcdFx0cGFyZW50Q2hpbGRyZW4uYXBwZW5kVG8oZ3JhbmRQYXJlbnQpXG5cdFxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCByZXBsYWNlID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBub3JtYWxpemVFbGVtZW50KHRhcmdldEVsKVxuXHRcblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKSBhbmQgdGFyZ2V0RWwgaXNudCBAXG5cdFx0XHR0YXJnZXRFbC5kZXRhY2goKVxuXHRcdFx0QHBhcmVudD8uX3JlbW92ZUNoaWxkKEAsIHRhcmdldEVsKVxuXHRcdFx0dGFyZ2V0RWwuX3JlZnJlc2hQYXJlbnQoKSAjIEZvcmNlIHJlLWZyZXNoIHRhcmdldEVsLl9wYXJlbnQgdmFsdWUgdG8gdHJpZ2dlciBpbnNlcnRlZCBjYWxsYmFja1xuXHRcblx0cmV0dXJuIEBcblxuXG5leHBvcnQgaGFzQ2xhc3MgPSAodGFyZ2V0KS0+XG5cdGluY2x1ZGVzKEBjbGFzc0xpc3QsIHRhcmdldClcblxuXG5leHBvcnQgYWRkQ2xhc3MgPSAodGFyZ2V0KS0+XG5cdGNsYXNzTGlzdCA9IEBjbGFzc0xpc3Rcblx0dGFyZ2V0SW5kZXggPSBjbGFzc0xpc3QuaW5kZXhPZih0YXJnZXQpXG5cblx0aWYgdGFyZ2V0SW5kZXggaXMgLTFcblx0XHRjbGFzc0xpc3QucHVzaCh0YXJnZXQpXG5cdFx0QGNsYXNzTmFtZSA9IGlmIGNsYXNzTGlzdC5sZW5ndGggPiAxIHRoZW4gY2xhc3NMaXN0LmpvaW4oJyAnKSBlbHNlIGNsYXNzTGlzdFswXVxuXG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHJlbW92ZUNsYXNzID0gKHRhcmdldCktPlxuXHRjbGFzc0xpc3QgPSBAY2xhc3NMaXN0XG5cdHRhcmdldEluZGV4ID0gY2xhc3NMaXN0LmluZGV4T2YodGFyZ2V0KVxuXHRcblx0aWYgdGFyZ2V0SW5kZXggaXNudCAtMVxuXHRcdGNsYXNzTGlzdC5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXG5cdFx0QGNsYXNzTmFtZSA9IGlmIGNsYXNzTGlzdC5sZW5ndGggdGhlbiBjbGFzc0xpc3Quam9pbignICcpIGVsc2UgJydcblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCB0b2dnbGVDbGFzcyA9ICh0YXJnZXQpLT5cblx0aWYgQGhhc0NsYXNzKHRhcmdldClcblx0XHRAcmVtb3ZlQ2xhc3ModGFyZ2V0KVxuXHRlbHNlXG5cdFx0QGFkZENsYXNzKHRhcmdldClcblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBzZXRSZWYgPSAodGFyZ2V0KS0+XG5cdEByZWYgPSBAb3B0aW9ucy5yZWYgPSB0YXJnZXRcblx0QGF0dHIgJ2RhdGEtcmVmJywgdGFyZ2V0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IF9yZWZyZXNoUGFyZW50ID0gKCktPlxuXHRAcGFyZW50XG5cblxuZXhwb3J0IF9yZW1vdmVDaGlsZCA9ICh0YXJnZXRDaGlsZCwgcmVwbGFjZW1lbnRDaGlsZCktPlxuXHRpbmRleE9mQ2hpbGQgPSBAY2hpbGRyZW4uaW5kZXhPZih0YXJnZXRDaGlsZClcblx0aWYgaW5kZXhPZkNoaWxkIGlzbnQgLTFcblx0XHRpZiByZXBsYWNlbWVudENoaWxkXG5cdFx0XHRAZWwucmVwbGFjZUNoaWxkKHJlcGxhY2VtZW50Q2hpbGQuZWwsIHRhcmdldENoaWxkLmVsKVxuXHRcdFx0QF9jaGlsZHJlbi5zcGxpY2UoaW5kZXhPZkNoaWxkLCAxLCByZXBsYWNlbWVudENoaWxkKVxuXHRcdGVsc2Vcblx0XHRcdEBlbC5yZW1vdmVDaGlsZCh0YXJnZXRDaGlsZC5lbClcblx0XHRcdEBfY2hpbGRyZW4uc3BsaWNlKGluZGV4T2ZDaGlsZCwgMSlcblx0XHRcblxuXHRyZXR1cm4gQFxuXG5cbmV4cG9ydCBkZWZhdWx0IChRdWlja0VsZW1lbnQpLT5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMgUXVpY2tFbGVtZW50OjosXG5cdFx0J2h0bWwnOlxuXHRcdFx0Z2V0OiAoKS0+IEBlbC5pbm5lckhUTUxcblx0XHRcdHNldDogKG5ld1ZhbHVlKS0+IEBlbC5pbm5lckhUTUwgPSBuZXdWYWx1ZVxuXHRcdFxuXHRcdCd0ZXh0Jzpcblx0XHRcdGdldDogKCktPiBAZWwudGV4dENvbnRlbnRcblx0XHRcdHNldDogKG5ld1ZhbHVlKS0+IEBlbC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlXG5cblx0XHQnY2xhc3NOYW1lJzpcblx0XHRcdGdldDogKCktPiBpZiBAc3ZnIHRoZW4gKEBhdHRyKCdjbGFzcycpIG9yICcnKSBlbHNlIEByYXcuY2xhc3NOYW1lXG5cdFx0XHRzZXQ6IChuZXdWYWx1ZSktPiBpZiBAc3ZnIHRoZW4gQGF0dHIoJ2NsYXNzJywgbmV3VmFsdWUpIGVsc2UgQHJhdy5jbGFzc05hbWUgPSBuZXdWYWx1ZVxuXG5cdFx0J2NsYXNzTGlzdCc6XG5cdFx0XHRnZXQ6ICgpLT5cblx0XHRcdFx0bGlzdCA9IEBjbGFzc05hbWUuc3BsaXQoL1xccysvKVxuXHRcdFx0XHRsaXN0LnBvcCgpIGlmIGxpc3RbbGlzdC5sZW5ndGgtMV0gaXMgJydcblx0XHRcdFx0bGlzdC5zaGlmdCgpIGlmIGxpc3RbMF0gaXMgJydcblx0XHRcdFx0cmV0dXJuIGxpc3RcblxuXG5cblx0UXVpY2tFbGVtZW50Ojp0b1RlbXBsYXRlID0gdG9UZW1wbGF0ZVxuXHRRdWlja0VsZW1lbnQ6OmNsb25lID0gY2xvbmVcblx0UXVpY2tFbGVtZW50OjphcHBlbmQgPSBhcHBlbmRcblx0UXVpY2tFbGVtZW50OjphcHBlbmRUbyA9IGFwcGVuZFRvXG5cdFF1aWNrRWxlbWVudDo6cHJlcGVuZCA9IHByZXBlbmRcblx0UXVpY2tFbGVtZW50OjpwcmVwZW5kVG8gPSBwcmVwZW5kVG9cblx0UXVpY2tFbGVtZW50OjphZnRlciA9IGFmdGVyXG5cdFF1aWNrRWxlbWVudDo6aW5zZXJ0QWZ0ZXIgPSBpbnNlcnRBZnRlclxuXHRRdWlja0VsZW1lbnQ6OmJlZm9yZSA9IGJlZm9yZVxuXHRRdWlja0VsZW1lbnQ6Omluc2VydEJlZm9yZSA9IGluc2VydEJlZm9yZVxuXHRRdWlja0VsZW1lbnQ6OmRldGFjaCA9IGRldGFjaFxuXHRRdWlja0VsZW1lbnQ6OnJlbW92ZSA9IHJlbW92ZVxuXHRRdWlja0VsZW1lbnQ6OmVtcHR5ID0gZW1wdHlcblx0UXVpY2tFbGVtZW50Ojp3cmFwID0gd3JhcFxuXHRRdWlja0VsZW1lbnQ6OnVud3JhcCA9IHVud3JhcFxuXHRRdWlja0VsZW1lbnQ6OnJlcGxhY2UgPSByZXBsYWNlXG5cdFF1aWNrRWxlbWVudDo6aGFzQ2xhc3MgPSBoYXNDbGFzc1xuXHRRdWlja0VsZW1lbnQ6OmFkZENsYXNzID0gYWRkQ2xhc3Ncblx0UXVpY2tFbGVtZW50OjpyZW1vdmVDbGFzcyA9IHJlbW92ZUNsYXNzXG5cdFF1aWNrRWxlbWVudDo6dG9nZ2xlQ2xhc3MgPSB0b2dnbGVDbGFzc1xuXHRRdWlja0VsZW1lbnQ6OnNldFJlZiA9IHNldFJlZlxuXHRRdWlja0VsZW1lbnQ6Ol9yZWZyZXNoUGFyZW50ID0gX3JlZnJlc2hQYXJlbnRcblx0UXVpY2tFbGVtZW50OjpfcmVtb3ZlQ2hpbGQgPSBfcmVtb3ZlQ2hpbGRcblxuXG5cbiIsImltcG9ydCBJUyBmcm9tICcuLi9jaGVja3MnXG5pbXBvcnQgZXh0ZW5kIGZyb20gJ3NtYXJ0LWV4dGVuZCdcblxuZXhwb3J0IHVwZGF0ZU9wdGlvbnMgPSAob3B0aW9ucyktPlxuXHRpZiBJUy5vYmplY3Qob3B0aW9ucykgXG5cdFx0QG9wdGlvbnMgPSBvcHRpb25zXG5cdFx0QF9ub3JtYWxpemVPcHRpb25zKClcblx0XHRAX2FwcGx5T3B0aW9ucyhAb3B0aW9ucylcblx0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IHVwZGF0ZVN0YXRlU3R5bGVzID0gKHN0eWxlcyktPlxuXHRpZiBJUy5vYmplY3RQbGFpbihzdHlsZXMpXG5cdFx0ZXh0ZW5kLmRlZXAuY29uY2F0IEAsIHBhcnNlZCA9IEBfcGFyc2VTdHlsZXMoc3R5bGVzKVxuXG5cdFx0aWYgcGFyc2VkLl9zdHlsZXNcblx0XHRcdHVwZGF0ZWRTdGF0ZXMgPSBPYmplY3Qua2V5cyhwYXJzZWQuX3N0eWxlcylcblx0XHRcdFxuXHRcdFx0Zm9yIHN0YXRlIGluIHVwZGF0ZWRTdGF0ZXMgd2hlbiBAc3RhdGUoc3RhdGUpIG9yIHN0YXRlIGlzICdiYXNlJ1xuXHRcdFx0XHRAX2FwcGx5UmVnaXN0ZXJlZFN0eWxlKEBfc3R5bGVzW3N0YXRlXSwgQF9nZXRBY3RpdmVTdGF0ZXMoc3RhdGUpLCBmYWxzZSlcblx0XHRcblx0cmV0dXJuIEBcblxuXG5leHBvcnQgdXBkYXRlU3RhdGVUZXh0cyA9ICh0ZXh0cyktPlxuXHRpZiBJUy5vYmplY3RQbGFpbih0ZXh0cylcblx0XHRleHRlbmQuZGVlcC5jb25jYXQgQCwgcGFyc2VkID0gQF9wYXJzZVRleHRzKHRleHRzKVxuXHRcblx0cmV0dXJuIEBcblxuXG5cbmV4cG9ydCBhcHBseURhdGEgPSAoZGF0YSwgcGFzc1Rocm91Z2gpLT5cblx0aWYgQG9wdGlvbnMucGFzc0RhdGFUb0NoaWxkcmVuIGFuZCBAX2NoaWxkcmVuLmxlbmd0aCBhbmQgKHBhc3NUaHJvdWdoID89IHRydWUpXG5cdFx0Y2hpbGQuYXBwbHlEYXRhKGRhdGEpIGZvciBjaGlsZCBpbiBAX2NoaWxkcmVuXG5cblx0aWYgY29tcHV0ZXJzID0gQG9wdGlvbnMuY29tcHV0ZXJzXG5cdFx0ZGVmYXVsdHMgPSBAb3B0aW9ucy5kZWZhdWx0c1xuXHRcdGtleXMgPSBPYmplY3Qua2V5cyhjb21wdXRlcnMpXG5cdFx0XG5cdFx0Zm9yIGtleSBpbiBrZXlzXG5cdFx0XHRpZiBAb3B0aW9ucy5pbnZva2VDb21wdXRlcnNPbmNlXG5cdFx0XHRcdGNvbnRpbnVlIGlmIEBfaW52b2tlZENvbXB1dGVyc1trZXldXG5cdFx0XHRcdEBfaW52b2tlZENvbXB1dGVyc1trZXldID0gMVxuXHRcdFx0XG5cdFx0XHRpZiBkYXRhIGFuZCBkYXRhLmhhc093blByb3BlcnR5KGtleSlcblx0XHRcdFx0QF9ydW5Db21wdXRlcihrZXksIGRhdGFba2V5XSwgZGF0YSlcblx0XHRcdFxuXHRcdFx0ZWxzZSBpZiBkZWZhdWx0cyBhbmQgZGVmYXVsdHMuaGFzT3duUHJvcGVydHkoa2V5KVxuXHRcdFx0XHRAX3J1bkNvbXB1dGVyKGtleSwgZGVmYXVsdHNba2V5XSwgZGF0YSlcblx0XG5cdHJldHVybiBAXG5cblxuZXhwb3J0IF9ydW5Db21wdXRlciA9IChjb21wdXRlciwgYXJnLCBkYXRhKS0+XG5cdEBvcHRpb25zLmNvbXB1dGVyc1tjb21wdXRlcl0uY2FsbChALCBhcmcsIGRhdGEpXG5cbmV4cG9ydCBkZWZhdWx0IChRdWlja0VsZW1lbnQpLT5cblx0UXVpY2tFbGVtZW50Ojp1cGRhdGVPcHRpb25zID0gdXBkYXRlT3B0aW9uc1xuXHRRdWlja0VsZW1lbnQ6OnVwZGF0ZVN0YXRlU3R5bGVzID0gdXBkYXRlU3RhdGVTdHlsZXNcblx0UXVpY2tFbGVtZW50Ojp1cGRhdGVTdGF0ZVRleHRzID0gdXBkYXRlU3RhdGVUZXh0c1xuXHRRdWlja0VsZW1lbnQ6OmFwcGx5RGF0YSA9IGFwcGx5RGF0YVxuXHRRdWlja0VsZW1lbnQ6Ol9ydW5Db21wdXRlciA9IF9ydW5Db21wdXRlclxuXG5cblxuIiwiaW1wb3J0IElTIGZyb20gJy4uL2NoZWNrcydcblxuZXhwb3J0IGF0dHIgPSAodGFyZ2V0LCBuZXdWYWx1ZSktPlxuXHRpZiBhcmd1bWVudHMubGVuZ3RoIGlzIDFcblx0XHRpZiB0eXBlb2YgdGFyZ2V0IGlzICdzdHJpbmcnXG5cdFx0XHRyZXR1cm4gQGVsLmdldEF0dHJpYnV0ZSh0YXJnZXQpXG5cdFxuXHRcdGlmIElTLm9iamVjdCh0YXJnZXQpXG5cdFx0XHRrZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTsgaSA9IC0xXG5cdFx0XHRAYXR0cihrZXksIHRhcmdldFtrZXldKSB3aGlsZSBrZXk9a2V5c1srK2ldXG5cblx0ZWxzZSBpZiBuZXdWYWx1ZSBpcyBudWxsXG5cdFx0cmV0dXJuIEBlbC5yZW1vdmVBdHRyaWJ1dGUodGFyZ2V0KVxuXG5cdGVsc2Vcblx0XHRAZWwuc2V0QXR0cmlidXRlKHRhcmdldCwgbmV3VmFsdWUpXG5cdFxuXHRyZXR1cm4gQFxuXG5cblxuZXhwb3J0IHByb3AgPSAodGFyZ2V0LCBuZXdWYWx1ZSktPlxuXHRpZiBhcmd1bWVudHMubGVuZ3RoIGlzIDFcblx0XHRpZiB0eXBlb2YgdGFyZ2V0IGlzICdzdHJpbmcnXG5cdFx0XHRyZXR1cm4gQGVsW3RhcmdldF1cblx0XG5cdFx0aWYgSVMub2JqZWN0KHRhcmdldClcblx0XHRcdGtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpOyBpID0gLTFcblx0XHRcdEBwcm9wKGtleSwgdGFyZ2V0W2tleV0pIHdoaWxlIGtleT1rZXlzWysraV1cblx0XG5cdGVsc2Vcblx0XHRAZWxbdGFyZ2V0XSA9IG5ld1ZhbHVlXG5cdFx0XG5cdHJldHVybiBAXG5cbmV4cG9ydCBkZWZhdWx0IChRdWlja0VsZW1lbnQpLT5cblx0UXVpY2tFbGVtZW50OjphdHRyID0gYXR0clxuXHRRdWlja0VsZW1lbnQ6OnByb3AgPSBwcm9wIiwiaW1wb3J0IGV4dGVuZCBmcm9tICdzbWFydC1leHRlbmQnXG5pbXBvcnQge2VsZW1lbnQgYXMgQUxMT1dFRF9PUFRJT05TfSBmcm9tICcuLi9hbGxvd2VkT3B0aW9ucydcbnN2Z05hbWVzcGFjZSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tFbGVtZW50XG5cdEBjb3VudCA9IDBcblx0Y29uc3RydWN0b3I6IChAdHlwZSwgQG9wdGlvbnMpLT5cblx0XHRRdWlja0VsZW1lbnQuY291bnQrK1xuXHRcdEBzdmcgPSB0cnVlIGlmIEB0eXBlWzBdIGlzICcqJ1xuXHRcdEBlbCA9IEBvcHRpb25zLmV4aXN0aW5nIG9yXG5cdFx0XHRpZiBAdHlwZSBpcyAndGV4dCcgdGhlbiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpZiB0eXBlb2YgQG9wdGlvbnMudGV4dCBpcyAnc3RyaW5nJyB0aGVuIEBvcHRpb25zLnRleHQgZWxzZSAnJylcblx0XHRcdGVsc2UgaWYgQHN2ZyB0aGVuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIEB0eXBlLnNsaWNlKDEpKVxuXHRcdFx0ZWxzZSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KEB0eXBlKVxuXG5cdFx0aWYgQHR5cGUgaXMgJ3RleHQnXG5cdFx0XHRAYXBwZW5kID0gQHByZXBlbmQgPSBAYXR0ciA9ICgpLT5cblx0XHRcdCMgQF90ZXh0cyA9IHt9ICMgZGVmaW5lZCBjb25kaXRpb25hbGx5XG5cblx0XHRAX3BhcmVudCA9IG51bGxcblx0XHRAX3N0eWxlcyA9IHt9XG5cdFx0QF9zdGF0ZSA9IFtdXG5cdFx0QF9jaGlsZHJlbiA9IFtdXG5cdFx0IyBAX3Byb3ZpZGVkU3RhdGVzID0gW11cdFx0XHRcdCMgZGVmaW5lZCBjb25kaXRpb25hbGx5XG5cdFx0IyBAX3Byb3ZpZGVkU3RhdGVzU2hhcmVkID0gW11cdFx0IyBkZWZpbmVkIGNvbmRpdGlvbmFsbHlcblx0XHQjIEBfZXZlbnRDYWxsYmFja3MgPSB7X19yZWZzOnt9fVx0IyBkZWZpbmVkIGNvbmRpdGlvbmFsbHlcblx0XHRcblx0XHRAX25vcm1hbGl6ZU9wdGlvbnMoKVxuXHRcdEBfYXBwbHlPcHRpb25zKClcblx0XHRAX2F0dGFjaFN0YXRlRXZlbnRzKClcblx0XHRAX3Byb3h5UGFyZW50KClcblx0XHRAX3JlZnJlc2hQYXJlbnQoKSBpZiBAb3B0aW9ucy5leGlzdGluZ1xuXHRcdEBlbC5fcXVpY2tFbGVtZW50ID0gQFxuXG5cblx0dG9KU09OOiAoKS0+XG5cdFx0b3V0cHV0ID0gW0B0eXBlLCBleHRlbmQuY2xvbmUua2V5cyhBTExPV0VEX09QVElPTlMpKEBvcHRpb25zKV1cblx0XHRjaGlsZHJlbiA9IEBjaGlsZHJlblxuXHRcdG91dHB1dC5wdXNoKGNoaWxkLnRvSlNPTigpKSBmb3IgY2hpbGQgaW4gY2hpbGRyZW5cblx0XHRyZXR1cm4gb3V0cHV0XG5cbiMjIyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAjIyNcblF1aWNrRWxlbWVudC5uYW1lID89ICdRdWlja0VsZW1lbnQnXG5cbmltcG9ydCBpbml0IGZyb20gJy4vaW5pdCdcbmltcG9ydCBhbGlhc2VzIGZyb20gJy4vYWxpYXNlcydcbmltcG9ydCB0cmF2ZXJzaW5nIGZyb20gJy4vdHJhdmVyc2luZydcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMnXG5pbXBvcnQgc3RhdGUgZnJvbSAnLi9zdGF0ZSdcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJ1xuaW1wb3J0IG1hbmlwdWxhdGlvbiBmcm9tICcuL21hbmlwdWxhdGlvbidcbmltcG9ydCBhcHBsaWNhdGlvbiBmcm9tICcuL2FwcGxpY2F0aW9uJ1xuaW1wb3J0IGF0dHJpYnV0ZXNBbmRQcm9wZXJ0aWVzIGZyb20gJy4vYXR0cmlidXRlcy1hbmQtcHJvcGVydGllcydcbmluaXQoUXVpY2tFbGVtZW50KVxuYWxpYXNlcyhRdWlja0VsZW1lbnQpXG50cmF2ZXJzaW5nKFF1aWNrRWxlbWVudClcbmV2ZW50cyhRdWlja0VsZW1lbnQpXG5zdGF0ZShRdWlja0VsZW1lbnQpXG5zdHlsZShRdWlja0VsZW1lbnQpXG5tYW5pcHVsYXRpb24oUXVpY2tFbGVtZW50KVxuYXBwbGljYXRpb24oUXVpY2tFbGVtZW50KVxuYXR0cmlidXRlc0FuZFByb3BlcnRpZXMoUXVpY2tFbGVtZW50KVxuIiwiZXhwb3J0IHNjaGVtYSA9IFxuXHR0eXBlOiAnZGl2J1xuXHRyZWY6IHVuZGVmaW5lZFxuXHRvcHRpb25zOiB7fVxuXHRjaGlsZHJlbjogW11cblxuXG5leHBvcnQgbWF0Y2hlc1NjaGVtYSA9IChvYmplY3QpLT5cblx0dHlwZW9mIG9iamVjdC50eXBlIGlzbnQgJ3VuZGVmaW5lZCcgb3Jcblx0dHlwZW9mIG9iamVjdC5yZWYgaXNudCAndW5kZWZpbmVkJyBvclxuXHR0eXBlb2Ygb2JqZWN0Lm9wdGlvbnMgaXNudCAndW5kZWZpbmVkJyBvclxuXHR0eXBlb2Ygb2JqZWN0LmNoaWxkcmVuIGlzbnQgJ3VuZGVmaW5lZCdcblxuXG5cbiIsImltcG9ydCBxdWlja2RvbSBmcm9tICcuLi8nXG5pbXBvcnQgZXh0ZW5kIGZyb20gJ3NtYXJ0LWV4dGVuZCdcbmltcG9ydCBJUyBmcm9tICcuLi9jaGVja3MnXG5pbXBvcnQge3RlbXBsYXRlIGFzIEFMTE9XRURfVEVNUExBVEVfT1BUSU9OU30gZnJvbSAnLi4vYWxsb3dlZE9wdGlvbnMnXG5pbXBvcnQge3NjaGVtYX0gZnJvbSAnLi9zY2hlbWEnXG5QQVJTRV9FUlJPUl9QUkVGSVggPSAnVGVtcGxhdGUgUGFyc2UgRXJyb3I6IGV4cGVjdGVkJ1xuXG5leHBvcnQgZGVmYXVsdCBwYXJzZVRyZWUgPSAodHJlZSwgcGFyc2VDaGlsZHJlbiktPiBzd2l0Y2hcblx0d2hlbiBJUy5hcnJheSh0cmVlKVxuXHRcdG91dHB1dCA9IHt9XG5cblx0XHRpZiBub3QgSVMuc3RyaW5nKHRyZWVbMF0pXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IgXCIje1BBUlNFX0VSUk9SX1BSRUZJWH0gc3RyaW5nIGZvciAndHlwZScsIGdvdCAnI3tTdHJpbmcodHJlZVswXSl9J1wiXG5cdFx0ZWxzZVxuXHRcdFx0b3V0cHV0LnR5cGUgPSB0cmVlWzBdXG5cdFx0XG5cdFx0aWYgdHJlZS5sZW5ndGggPiAxIGFuZCBub3QgSVMub2JqZWN0KHRyZWVbMV0pIGFuZCB0cmVlWzFdIGlzbnQgbnVsbFxuXHRcdFx0dGhyb3cgbmV3IEVycm9yIFwiI3tQQVJTRV9FUlJPUl9QUkVGSVh9IG9iamVjdCBmb3IgJ29wdGlvbnMnLCBnb3QgJyN7U3RyaW5nKHRyZWVbMV0pfSdcIlxuXHRcdGVsc2Vcblx0XHRcdG91dHB1dC5vcHRpb25zID0gaWYgdHJlZVsxXSB0aGVuIGV4dGVuZC5kZWVwLmNsb25lKHRyZWVbMV0pIGVsc2Ugc2NoZW1hLm9wdGlvbnNcblx0XHRcdG91dHB1dC5yZWYgPSB0cmVlWzFdLmlkIG9yIHRyZWVbMV0ucmVmIGlmIHRyZWVbMV1cblxuXHRcdG91dHB1dC5jaGlsZHJlbiA9IHRyZWUuc2xpY2UoMilcblx0XHRpZiBwYXJzZUNoaWxkcmVuIGlzIGZhbHNlXG5cdFx0XHRvdXRwdXQuY2hpbGRyZW4gPSB0cmVlWzJdIGlmIHRyZWUubGVuZ3RoIGlzIDMgYW5kIElTLm9iamVjdFBsYWluKHRyZWVbMl0pIGFuZCBub3QgSVMudGVtcGxhdGUodHJlZVsyXSlcblx0XHRlbHNlXG5cdFx0XHRvdXRwdXQuY2hpbGRyZW4gPSBvdXRwdXQuY2hpbGRyZW4ubWFwKHF1aWNrZG9tLnRlbXBsYXRlKVxuXHRcdHJldHVybiBvdXRwdXRcblxuXG5cdHdoZW4gSVMuc3RyaW5nKHRyZWUpIG9yIElTLmRvbVRleHQodHJlZSlcblx0XHR0eXBlOid0ZXh0Jywgb3B0aW9uczp7dGV4dDogdHJlZS50ZXh0Q29udGVudCBvciB0cmVlfSwgY2hpbGRyZW46c2NoZW1hLmNoaWxkcmVuXG5cblx0d2hlbiBJUy5kb21FbCh0cmVlKVxuXHRcdHR5cGU6IHRyZWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXHRcdHJlZjogdHJlZS5pZFxuXHRcdG9wdGlvbnM6IGV4dGVuZC5jbG9uZS5rZXlzKEFMTE9XRURfVEVNUExBVEVfT1BUSU9OUykodHJlZSlcblx0XHRjaGlsZHJlbjogc2NoZW1hLmNoaWxkcmVuLm1hcC5jYWxsKHRyZWUuY2hpbGROb2RlcywgcXVpY2tkb20udGVtcGxhdGUpXG5cblx0d2hlbiBJUy5xdWlja0RvbUVsKHRyZWUpXG5cdFx0dHlwZTogdHJlZS50eXBlXG5cdFx0cmVmOiB0cmVlLnJlZlxuXHRcdG9wdGlvbnM6IGV4dGVuZC5jbG9uZS5kZWVwLm5vdEtleXMoWydyZWxhdGVkSW5zdGFuY2UnLCAncmVsYXRlZCddKSh0cmVlLm9wdGlvbnMpXG5cdFx0Y2hpbGRyZW46IHRyZWUuY2hpbGRyZW4ubWFwKHF1aWNrZG9tLnRlbXBsYXRlKVxuXG5cdHdoZW4gSVMudGVtcGxhdGUodHJlZSlcblx0XHRyZXR1cm4gdHJlZVxuXG5cdGVsc2Vcblx0XHR0aHJvdyBuZXcgRXJyb3IgXCIje1BBUlNFX0VSUk9SX1BSRUZJWH0gKGFycmF5IHx8IHN0cmluZyB8fCBkb21FbCB8fCBxdWlja0RvbUVsIHx8IHRlbXBsYXRlKSwgZ290ICN7U3RyaW5nKHRyZWUpfVwiXG5cblxuIiwiaW1wb3J0IFF1aWNrVGVtcGxhdGUgZnJvbSAnLi8nXG5pbXBvcnQgcGFyc2VUcmVlIGZyb20gJy4vcGFyc2VUcmVlJ1xuaW1wb3J0IHtzY2hlbWEsIG1hdGNoZXNTY2hlbWF9IGZyb20gJy4vc2NoZW1hJ1xuaW1wb3J0IGV4dGVuZCBmcm9tICdzbWFydC1leHRlbmQnXG5pbXBvcnQgSVMgZnJvbSAnLi4vY2hlY2tzJ1xuTk9UX0RFRVBfS0VZUyA9IFsncmVsYXRlZEluc3RhbmNlJywncmVsYXRlZCcsJ2RhdGEnXVxuTk9UX0tFWVMgPSBbJ2NoaWxkcmVuJywnX2NoaWxkUmVmcyddXG5cbmV4cG9ydCBkZWZhdWx0IGV4dGVuZFRlbXBsYXRlID0gKGN1cnJlbnRPcHRzLCBuZXdPcHRzLCBnbG9iYWxPcHRzKS0+XG5cdGlmIGdsb2JhbE9wdHMgdGhlbiBnbG9iYWxPcHRzVHJhbnNmb3JtID0gb3B0aW9uczogKG9wdHMpLT4gZXh0ZW5kKG9wdHMsIGdsb2JhbE9wdHMpXG5cdGlmIElTLmFycmF5KG5ld09wdHMpXG5cdFx0bmV3T3B0cyA9IHBhcnNlVHJlZShuZXdPcHRzLCBmYWxzZSlcblx0ZWxzZSBpZiBuZXdPcHRzIGFuZCBub3QgbWF0Y2hlc1NjaGVtYShuZXdPcHRzKVxuXHRcdG5ld09wdHMgPSBvcHRpb25zOm5ld09wdHNcblxuXG5cdG91dHB1dCA9IGV4dGVuZC5kZWVwLm51bGxEZWxldGVzLm5vdEtleXMoTk9UX0tFWVMpLm5vdERlZXAoTk9UX0RFRVBfS0VZUykudHJhbnNmb3JtKGdsb2JhbE9wdHNUcmFuc2Zvcm0pLmNsb25lKGN1cnJlbnRPcHRzLCBuZXdPcHRzKVxuXHRjdXJyZW50Q2hpbGRyZW4gPSBjdXJyZW50T3B0cy5jaGlsZHJlblxuXHRuZXdDaGlsZHJlbiA9IG5ld09wdHM/LmNoaWxkcmVuIG9yIFtdXG5cdG91dHB1dC5jaGlsZHJlbiA9IFtdXG5cblx0IyMjIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICMjI1xuXHRpZiBJUy5hcnJheShuZXdDaGlsZHJlbilcblx0XHRtYXhMZW5ndGggPSBNYXRoLm1heChjdXJyZW50Q2hpbGRyZW4ubGVuZ3RoLCBuZXdDaGlsZHJlbi5sZW5ndGgpXG5cdFx0aW5kZXggPSAtMVxuXHRcdHdoaWxlICsraW5kZXggaXNudCBtYXhMZW5ndGhcblx0XHRcdG5lZWRzVGVtcGxhdGVXcmFwID0gbm9DaGFuZ2VzID0gZmFsc2Vcblx0XHRcdGN1cnJlbnRDaGlsZCA9IGN1cnJlbnRDaGlsZHJlbltpbmRleF1cblx0XHRcdG5ld0NoaWxkID0gbmV3Q2hpbGRyZW5baW5kZXhdXG5cdFx0XHRuZXdDaGlsZFByb2Nlc3NlZCA9IHN3aXRjaFxuXHRcdFx0XHR3aGVuIElTLnRlbXBsYXRlKG5ld0NoaWxkKSB0aGVuIG5ld0NoaWxkXG5cdFx0XHRcdHdoZW4gSVMuYXJyYXkobmV3Q2hpbGQpIHRoZW4gbmVlZHNUZW1wbGF0ZVdyYXAgPSBwYXJzZVRyZWUobmV3Q2hpbGQpXG5cdFx0XHRcdHdoZW4gSVMuc3RyaW5nKG5ld0NoaWxkKSB0aGVuIG5lZWRzVGVtcGxhdGVXcmFwID0ge3R5cGU6J3RleHQnLCBvcHRpb25zOnt0ZXh0Om5ld0NoaWxkfX1cblx0XHRcdFx0d2hlbiBub3QgbmV3Q2hpbGQgYW5kIG5vdCBnbG9iYWxPcHRzIHRoZW4gbm9DaGFuZ2VzID0gdHJ1ZVxuXHRcdFx0XHRlbHNlIG5lZWRzVGVtcGxhdGVXcmFwID0gbmV3Q2hpbGQgb3IgdHJ1ZVxuXG5cblx0XHRcdGlmIG5vQ2hhbmdlc1xuXHRcdFx0XHRuZXdDaGlsZFByb2Nlc3NlZCA9IGN1cnJlbnRDaGlsZFxuXHRcdFx0XG5cdFx0XHRlbHNlIGlmIG5lZWRzVGVtcGxhdGVXcmFwXG5cdFx0XHRcdG5ld0NoaWxkUHJvY2Vzc2VkID0gXG5cdFx0XHRcdFx0aWYgY3VycmVudENoaWxkXG5cdFx0XHRcdFx0XHRjdXJyZW50Q2hpbGQuZXh0ZW5kKG5ld0NoaWxkUHJvY2Vzc2VkLCBnbG9iYWxPcHRzKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdG5ldyBRdWlja1RlbXBsYXRlKGV4dGVuZC5jbG9uZShzY2hlbWEsIG5ld0NoaWxkUHJvY2Vzc2VkKSlcblxuXHRcdFx0b3V0cHV0LmNoaWxkcmVuLnB1c2ggbmV3Q2hpbGRQcm9jZXNzZWRcblx0XG5cdFxuXHRlbHNlIGlmIElTLm9iamVjdChuZXdDaGlsZHJlbilcblx0XHRuZXdDaGlsZHJlbiA9IGV4dGVuZC5hbGxvd051bGwuY2xvbmUgbmV3Q2hpbGRyZW5cblx0XHRvdXRwdXQuY2hpbGRyZW4gPSBleHRlbmRCeVJlZihuZXdDaGlsZHJlbiwgY3VycmVudENoaWxkcmVuLCBnbG9iYWxPcHRzKVxuXHRcdHJlbWFpbmluZ05ld0NoaWxkcmVuID0gbmV3Q2hpbGRyZW5cblx0XHRcblx0XHRmb3IgcmVmLG5ld0NoaWxkIG9mIHJlbWFpbmluZ05ld0NoaWxkcmVuXG5cdFx0XHRuZXdDaGlsZFByb2Nlc3NlZCA9IGlmIElTLm9iamVjdFBsYWluKG5ld0NoaWxkKSBhbmQgbm90IElTLnRlbXBsYXRlKG5ld0NoaWxkKSB0aGVuIG5ld0NoaWxkIGVsc2UgcGFyc2VUcmVlKG5ld0NoaWxkKVxuXHRcdFx0b3V0cHV0LmNoaWxkcmVuLnB1c2ggbmV3IFF1aWNrVGVtcGxhdGUgbmV3Q2hpbGRQcm9jZXNzZWRcblx0XHRcdGRlbGV0ZSByZW1haW5pbmdOZXdDaGlsZHJlbltyZWZdXG5cblx0cmV0dXJuIG91dHB1dFxuXG5cblxuXG5leHRlbmRCeVJlZiA9IChuZXdDaGlsZHJlblJlZnMsIGN1cnJlbnRDaGlsZHJlbiwgZ2xvYmFsT3B0cyktPiBpZiBub3QgY3VycmVudENoaWxkcmVuLmxlbmd0aCB0aGVuIGN1cnJlbnRDaGlsZHJlbiBlbHNlXG5cdG91dHB1dCA9IFtdXG5cdFxuXHRmb3IgY3VycmVudENoaWxkIGluIGN1cnJlbnRDaGlsZHJlblxuXHRcdG5ld0NoaWxkID0gbmV3Q2hpbGRyZW5SZWZzW2N1cnJlbnRDaGlsZC5yZWZdXG5cdFx0aWYgbmV3Q2hpbGRcblx0XHRcdG5ld0NoaWxkUHJvY2Vzc2VkID0gY3VycmVudENoaWxkLmV4dGVuZChuZXdDaGlsZCwgZ2xvYmFsT3B0cylcblx0XHRcdGRlbGV0ZSBuZXdDaGlsZHJlblJlZnNbY3VycmVudENoaWxkLnJlZl1cblx0XHRcblx0XHRlbHNlIGlmIG5ld0NoaWxkIGlzIG51bGxcblx0XHRcdGRlbGV0ZSBuZXdDaGlsZHJlblJlZnNbY3VycmVudENoaWxkLnJlZl1cblx0XHRcdGNvbnRpbnVlXG5cdFx0XG5cdFx0ZWxzZVxuXHRcdFx0bmV3Q2hpbGRQcm9jZXNzZWQgPSBzd2l0Y2hcblx0XHRcdFx0d2hlbiBnbG9iYWxPcHRzIHRoZW4gY3VycmVudENoaWxkLmV4dGVuZChudWxsLCBnbG9iYWxPcHRzKVxuXHRcdFx0XHR3aGVuIE9iamVjdC5rZXlzKG5ld0NoaWxkcmVuUmVmcykubGVuZ3RoIHRoZW4gY3VycmVudENoaWxkLmV4dGVuZCgpXG5cdFx0XHRcdGVsc2UgY3VycmVudENoaWxkXG5cblx0XHRuZXdDaGlsZFByb2Nlc3NlZC5jaGlsZHJlbiA9IGV4dGVuZEJ5UmVmKG5ld0NoaWxkcmVuUmVmcywgbmV3Q2hpbGRQcm9jZXNzZWQuY2hpbGRyZW4pXG5cdFx0b3V0cHV0LnB1c2gobmV3Q2hpbGRQcm9jZXNzZWQpXG5cblx0cmV0dXJuIG91dHB1dFxuXG5cblxuXG4iLCJpbXBvcnQgZXh0ZW5kIGZyb20gJ3NtYXJ0LWV4dGVuZCdcbmltcG9ydCBxdWlja2RvbSBmcm9tICcuLi9xdWlja2RvbSdcbmltcG9ydCBJUyBmcm9tICcuLi9jaGVja3MnXG5pbXBvcnQgZXh0ZW5kVGVtcGxhdGUgZnJvbSAnLi9leHRlbmRUZW1wbGF0ZSdcbmltcG9ydCBwYXJzZVRyZWUgZnJvbSAnLi9wYXJzZVRyZWUnXG5pbXBvcnQge19nZXRDaGlsZFJlZnN9IGZyb20gJy4uL2VsZW1lbnQvdHJhdmVyc2luZydcbmltcG9ydCB7c2NoZW1hfSBmcm9tICcuL3NjaGVtYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVpY2tUZW1wbGF0ZVxuXHRjb25zdHJ1Y3RvcjogKGNvbmZpZywgaXNUcmVlKS0+XG5cdFx0cmV0dXJuIGNvbmZpZyBpZiBJUy50ZW1wbGF0ZShjb25maWcpXG5cdFx0Y29uZmlnID0gaWYgaXNUcmVlIHRoZW4gcGFyc2VUcmVlKGNvbmZpZykgZWxzZSBjb25maWdcblx0XHRleHRlbmQgQCwgY29uZmlnXG5cdFxuXHRleHRlbmQ6IChuZXdWYWx1ZXMsIGdsb2JhbE9wdHMpLT5cblx0XHRuZXcgUXVpY2tUZW1wbGF0ZSBleHRlbmRUZW1wbGF0ZShALCBuZXdWYWx1ZXMsIGdsb2JhbE9wdHMpXG5cblx0c3Bhd246IChuZXdWYWx1ZXMsIGdsb2JhbE9wdHMsIGRhdGEpLT5cblx0XHRpZiBuZXdWYWx1ZXMgYW5kIG5ld1ZhbHVlcy5kYXRhXG5cdFx0XHRkYXRhID0gbmV3VmFsdWVzLmRhdGFcblx0XHRcdG5ld1ZhbHVlcyA9IG51bGwgaWYgT2JqZWN0LmtleXMobmV3VmFsdWVzKS5sZW5ndGggaXMgMVxuXHRcdFxuXHRcdGlmIG5ld1ZhbHVlcyBvciBnbG9iYWxPcHRzXG5cdFx0XHR7b3B0aW9ucywgY2hpbGRyZW4sIHR5cGV9ID0gZXh0ZW5kVGVtcGxhdGUoQCwgbmV3VmFsdWVzLCBnbG9iYWxPcHRzKVxuXHRcdGVsc2Vcblx0XHRcdHtvcHRpb25zLCBjaGlsZHJlbiwgdHlwZX0gPSBAXG5cdFx0XHRvcHRpb25zID0gZXh0ZW5kLmNsb25lKG9wdGlvbnMpXG5cblx0XHRcblx0XHRlbGVtZW50ID0gcXVpY2tkb20uY3JlYXRlKFt0eXBlLCBvcHRpb25zXSlcblx0XHRcblx0XHRpZiBjaGlsZHJlblxuXHRcdFx0Y2hpbGREYXRhID0gaWYgb3B0aW9ucy5wYXNzRGF0YVRvQ2hpbGRyZW4gdGhlbiBkYXRhIG9yIG9wdGlvbnMuZGF0YVxuXHRcdFx0Zm9yIGNoaWxkIGluIGNoaWxkcmVuXG5cdFx0XHRcdGVsZW1lbnQuYXBwZW5kIGNoaWxkLnNwYXduKG51bGwsIG51bGwsIGNoaWxkRGF0YSlcblxuXHRcdGVsZW1lbnQuX3Bvc3RDcmVhdGlvbihkYXRhKVxuXHRcdHJldHVybiBlbGVtZW50XG5cblxuIyMjIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICMjI1xuUXVpY2tUZW1wbGF0ZS5uYW1lID89ICdRdWlja1RlbXBsYXRlJ1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSBRdWlja1RlbXBsYXRlOjosICdjaGlsZCcsIGdldDogKCktPlxuXHRAX2NoaWxkUmVmcyBvciBfZ2V0Q2hpbGRSZWZzKEApXG5cblxucXVpY2tkb20udGVtcGxhdGUgPSAodHJlZSktPlxuXHRuZXcgUXVpY2tUZW1wbGF0ZSh0cmVlLCB0cnVlKVxuXG5xdWlja2RvbS5pc1RlbXBsYXRlID0gKHRhcmdldCktPlxuXHRJUy50ZW1wbGF0ZSh0YXJnZXQpXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IElTIGZyb20gJy4vY2hlY2tzJ1xuaW1wb3J0IFF1aWNrRWxlbWVudCBmcm9tICcuL2VsZW1lbnQnXG5pbXBvcnQgcXVpY2tkb20gZnJvbSAnLi9xdWlja2RvbSdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWlja0JhdGNoXG5cdGNvbnN0cnVjdG9yOiAoZWxlbWVudHMsIEByZXR1cm5SZXN1bHRzKS0+XG5cdFx0QGVsZW1lbnRzID0gZWxlbWVudHMubWFwIChlbCktPiBxdWlja2RvbShlbClcblxuXHRyZXZlcnNlOiAoKS0+XG5cdFx0QGVsZW1lbnRzID0gQGVsZW1lbnRzLnJldmVyc2UoKVxuXHRcdHJldHVybiBAXG5cblx0cmV0dXJuOiAocmV0dXJuTmV4dCktPlxuXHRcdGlmIHJldHVybk5leHRcblx0XHRcdEByZXR1cm5SZXN1bHRzID0gdHJ1ZVxuXHRcdFx0cmV0dXJuIEBcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gQGxhc3RSZXN1bHRzXG5cbiMjIyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAjIyNcblF1aWNrQmF0Y2gubmFtZSA/PSAnUXVpY2tCYXRjaCdcblxuXG5cbk9iamVjdC5rZXlzKFF1aWNrRWxlbWVudDo6KS5jb25jYXQoJ2NzcycsICdyZXBsYWNlV2l0aCcsICdodG1sJywgJ3RleHQnKS5mb3JFYWNoIChtZXRob2QpLT5cblx0UXVpY2tCYXRjaDo6W21ldGhvZF0gPSAobmV3VmFsdWUpLT5cblx0XHRyZXN1bHRzID0gQGxhc3RSZXN1bHRzID0gZm9yIGVsZW1lbnQgaW4gQGVsZW1lbnRzXG5cdFx0XHRpZiBtZXRob2QgaXMgJ2h0bWwnIG9yIG1ldGhvZCBpcyAndGV4dCdcblx0XHRcdFx0aWYgbmV3VmFsdWUgdGhlbiBlbGVtZW50W21ldGhvZF0gPSBuZXdWYWx1ZSBlbHNlIGVsZW1lbnRbbWV0aG9kXVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRlbGVtZW50W21ldGhvZF0oYXJndW1lbnRzLi4uKVxuXHRcdFxuXHRcdHJldHVybiBpZiBAcmV0dXJuUmVzdWx0cyB0aGVuIHJlc3VsdHMgZWxzZSBAXG5cblxucXVpY2tkb20uYmF0Y2ggPSAoZWxlbWVudHMsIHJldHVyblJlc3VsdHMpLT5cblx0aWYgbm90IElTLml0ZXJhYmxlKGVsZW1lbnRzKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkJhdGNoOiBleHBlY3RlZCBhbiBpdGVyYWJsZSwgZ290ICN7U3RyaW5nKGVsZW1lbnRzKX1cIilcblxuXHRyZXR1cm4gbmV3IFF1aWNrQmF0Y2goZWxlbWVudHMsIHJldHVyblJlc3VsdHMpXG5cblxuIiwiaW1wb3J0IHtpbmNsdWRlc30gZnJvbSAnLi9oZWxwZXJzJ1xuaW1wb3J0IHF1aWNrZG9tIGZyb20gJy4vcXVpY2tkb20nXG5cblNIT1JUQ1VUUyA9IFtcblx0J2xpbms6YSdcblx0J2FuY2hvcjphJ1xuXHQnYSdcblx0J3RleHQnXG5cdCdkaXYnXG5cdCdzcGFuJ1xuXHQnaDEnXG5cdCdoMidcblx0J2gzJ1xuXHQnaDQnXG5cdCdoNSdcblx0J2g2J1xuXHQnaGVhZGVyJ1xuXHQnZm9vdGVyJ1xuXHQnc2VjdGlvbidcblx0J2J1dHRvbidcblx0J2JyJ1xuXHQndWwnXG5cdCdvbCdcblx0J2xpJ1xuXHQnZmllbGRzZXQnXG5cdCdpbnB1dCdcblx0J3RleHRhcmVhJ1xuXHQnc2VsZWN0J1xuXHQnb3B0aW9uJ1xuXHQnZm9ybSdcblx0J2ZyYW1lJ1xuXHQnaHInXG5cdCdpZnJhbWUnXG5cdCdpbWcnXG5cdCdwaWN0dXJlJ1xuXHQnbWFpbidcblx0J25hdidcblx0J21ldGEnXG5cdCdvYmplY3QnXG5cdCdwcmUnXG5cdCdzdHlsZSdcblx0J3RhYmxlJ1xuXHQndGJvZHknXG5cdCd0aCdcblx0J3RyJ1xuXHQndGQnXG5cdCd0Zm9vdCdcblx0IyAndGVtcGxhdGUnXG5cdCd2aWRlbydcbl1cblxuXG5mb3Igc2hvcnRjdXQgaW4gU0hPUlRDVVRTIHRoZW4gZG8gKHNob3J0Y3V0KS0+XG5cdHByb3AgPSB0eXBlID0gc2hvcnRjdXRcblx0aWYgaW5jbHVkZXMoc2hvcnRjdXQsICc6Jylcblx0XHRzcGxpdCA9IHNob3J0Y3V0LnNwbGl0KCc6Jylcblx0XHRwcm9wID0gc3BsaXRbMF1cblx0XHR0eXBlID0gc3BsaXRbMV1cblxuXHRxdWlja2RvbVtwcm9wXSA9ICgpLT4gcXVpY2tkb20odHlwZSwgYXJndW1lbnRzLi4uKVxuIiwiaW1wb3J0IENTUyBmcm9tICdxdWlja2NzcydcbmltcG9ydCBRdWlja0VsZW1lbnQgZnJvbSAnLi9lbGVtZW50J1xuaW1wb3J0IFF1aWNrVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSdcbmltcG9ydCBRdWlja1dpbmRvdyBmcm9tICcuL3dpbmRvdydcbmltcG9ydCBRdWlja0JhdGNoIGZyb20gJy4vYmF0Y2gnXG5pbXBvcnQge3ZlcnNpb259IGZyb20gJy4uL3BhY2thZ2UuanNvbidcblxuaW1wb3J0IHF1aWNrZG9tLHtpbml0fSBmcm9tICcuL3F1aWNrZG9tJ1xuaW1wb3J0ICcuL2luc3RhbmNlLXNob3J0Y3V0cydcblxuaW5pdChRdWlja0VsZW1lbnQsIFF1aWNrV2luZG93KVxucXVpY2tkb20uUXVpY2tFbGVtZW50ID0gUXVpY2tFbGVtZW50XG5xdWlja2RvbS5RdWlja1RlbXBsYXRlID0gUXVpY2tUZW1wbGF0ZVxucXVpY2tkb20uUXVpY2tXaW5kb3cgPSBRdWlja1dpbmRvd1xucXVpY2tkb20uUXVpY2tCYXRjaCA9IFF1aWNrQmF0Y2hcblxucXVpY2tkb20udmVyc2lvbiA9IHZlcnNpb25cbnF1aWNrZG9tLkNTUyA9IENTU1xuXG5leHBvcnQgZGVmYXVsdCBxdWlja2RvbVxuIyBleHBvcnQge3F1aWNrZG9tIGFzIGRlZmF1bHQsIFF1aWNrRWxlbWVudCwgUXVpY2tUZW1wbGF0ZSwgUXVpY2tXaW5kb3csIFF1aWNrQmF0Y2h9XG5cbiJdLCJuYW1lcyI6WyJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIlJFR0VYX0xFTl9WQUwiLCJSRUdFWF9ESUdJVFMiLCJSRUdFWF9TUEFDRSIsIlJFR0VYX0tFQkFCIiwiSU1QT1JUQU5UIiwiUE9TU0lCTEVfUFJFRklYRVMiLCJSRVFVSVJFU19VTklUX1ZBTFVFIiwiUVVBRF9TSE9SVEhBTkRTIiwiRElSRUNUSU9OUyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImRpcmVjdGlvbiIsImkiLCJsZW4iLCJwdXNoIiwibGVuZ3RoIiwiU0FNUExFX1NUWUxFIiwic3R5bGVDb25maWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImluY2x1ZGVzIiwidGFyZ2V0IiwiaXRlbSIsImluZGV4T2YiLCJpc0l0ZXJhYmxlIiwibm9kZVR5cGUiLCJ0b0tlYmFiQ2FzZSIsInN0cmluZyIsInJlcGxhY2UiLCJlIiwibGV0dGVyIiwiY29uY2F0IiwidG9Mb3dlckNhc2UiLCJpc1Byb3BTdXBwb3J0ZWQiLCJpc1ZhbHVlU3VwcG9ydGVkIiwidmFsdWUiLCJ3aW5kb3ciLCJDU1MiLCJzdXBwb3J0cyIsImdldFByZWZpeCIsInNraXBJbml0aWFsQ2hlY2siLCJqIiwibGVuMSIsInByZWZpeCIsIm5vcm1hbGl6ZVByb3BlcnR5Iiwibm9ybWFsaXplVmFsdWUiLCJ0ZXN0Iiwic29ydCIsImFycmF5IiwiZ3JlYXQiLCJsZXNzIiwicGl2b3QiLCJoYXNoIiwiaHNoIiwiY2hhckNvZGVBdCIsInJ1bGVUb1N0cmluZyIsInJ1bGUiLCJpbXBvcnRhbnQiLCJvdXRwdXQiLCJwcm9wIiwicHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiaW5saW5lU3R5bGVDb25maWciLCJjcmVhdGUiLCJpbmxpbmVTdHlsZSIsInZhbHVlVG9TdG9yZSIsImxldmVsIiwiY29uZmlnIiwic3R5bGVFbCIsImlkIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiZWwiLCJjb250ZW50IiwiY2FjaGUiLCJ0ZXh0Q29udGVudCIsImNsZWFySW5saW5lU3R5bGUiLCJrZXkiLCJ2ZXJzaW9uIiwiX3F1aWNrY3NzIiwiaW5kZXgiLCJxdWlja2NzcyIsInRhcmdldEVsIiwiY29tcHV0ZWRTdHlsZSIsInN1YkVsIiwic3ViUHJvcGVydHkiLCJzdWJWYWx1ZSIsIl9jb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNldFByb3BlcnR5IiwiYW5pbWF0aW9uIiwibmFtZSQkMSIsImZyYW1lcyIsImZyYW1lIiwiZ2VuZXJhdGVkIiwicnVsZXMiLCJyZWdpc3RlciIsImNsYXNzTmFtZSIsInJlZiIsImNsZWFyUmVnaXN0ZXJlZCIsIlVOU0VUIiwic3VwcG9ydHNQcm9wZXJ0eSIsIl9leHRlbmQiLCJpc0FycmF5IiwiaXNPYmplY3QiLCJfc2hvdWxkRGVlcEV4dGVuZCIsIkFycmF5IiwidG9TdHJpbmciLCJjYWxsIiwic2hvdWxkRGVlcEV4dGVuZCIsIm9wdGlvbnMiLCJwYXJlbnRLZXkiLCJkZWVwIiwibm90RGVlcCIsImRlZXBPbmx5IiwiZXh0ZW5kIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVZhbHVlIiwic3ViVGFyZ2V0IiwidGFyZ2V0VmFsdWUiLCJhbGxvd051bGwiLCJudWxsRGVsZXRlcyIsIm5vdEtleXMiLCJvd24iLCJoYXNPd25Qcm9wZXJ0eSIsImdsb2JhbEZpbHRlciIsImZpbHRlcnMiLCJnbG9iYWxUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm1zIiwibW9kaWZpZXJzIiwibmV3QnVpbGRlciIsIm5vcm1hbGl6ZUtleXMiLCJwcmltYXJ5QnVpbGRlciIsImlzQmFzZSIsIl9idWlsZGVyIiwiYnVpbGRlciIsInRoZVRhcmdldCIsIiRfbGVuIiwiYXJndW1lbnRzIiwiJF9pIiwic2hpZnQiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ2V0IiwiXyIsInRyYW5zZm9ybSIsImZpbHRlciIsInByaW1hcnlCdWlsZGVyJDEiLCJ0ZW1wbGF0ZSIsImVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJkZWZpbmVkIiwic3ViamVjdCIsIm9iamVjdCIsIm9iamVjdFBsYWluIiwibnVtYmVyIiwiaXNOYU4iLCJudW1iZXJMb29zZSIsIk51bWJlciIsIml0ZXJhYmxlIiwiZnVuY3Rpb25fIiwibmF0aXZlcyIsImZyZWV6ZSIsImRvbURvYyIsImRvbUVsIiwiZG9tVGV4dCIsImRvbU5vZGUiLCJkb21UZXh0YXJlYSIsIm5vZGVOYW1lIiwiZG9tSW5wdXQiLCJkb21TZWxlY3QiLCJkb21GaWVsZCIsImRvbSIsIkFWQUlMX1NFVFMiLCJDaGVja3MiLCJhcmdzIiwic2xpY2UiLCJzZXRzIiwic2V0IiwibG9hZCIsIklTIiwiSVNfIiwicXVpY2tEb21FbCIsIm5hbWUiLCJRdWlja0VsZW1lbnQiLCJRdWlja1dpbmRvdyIsInF1aWNrZG9tIiwiYXJnIiwicHJldkNvdW50IiwiY291bnQiLCJfcG9zdENyZWF0aW9uIiwiYXJnc0xlbmd0aCIsImNoaWxkIiwiY2hpbGRyZW4iLCJ0eXBlIiwic3Bhd24iLCJ1cGRhdGVPcHRpb25zIiwiX3F1aWNrRWxlbWVudCIsImV4aXN0aW5nIiwidGV4dCIsImFwcGVuZCIsImh0bWwiLCJpbm5lckhUTUwiLCJjb250YWluZXIiLCJjaGlsZE5vZGVzIiwiYmF0Y2giLCJpc1F1aWNrRWwiLCJpc0VsIiwiaW5pdCIsIlF1aWNrRWxlbWVudF8iLCJRdWlja1dpbmRvd18iLCJyZW1vdmVJdGVtIiwiaXRlbUluZGV4Iiwic3BsaWNlIiwibm9ybWFsaXplRWxlbWVudEFyZyIsImlzU3RhdGVTdHlsZSIsInJlZ2lzdGVyU3R5bGUiLCJjYWNoZWQiLCJzdHlsZUNhY2hlIiwiZm5zIiwidmFsdWVzIiwiUkVHRVhfV0hJVEVTUEFDRSIsIm9uXyIsImV2ZW50TmFtZXMiLCJjYWxsYmFjayIsInVzZUNhcHR1cmUiLCJpc1ByaXZhdGUiLCJjYWxsYmFja1JlZiIsInNwbGl0IiwiX2V2ZW50Q2FsbGJhY2tzIiwiX19yZWZzIiwiZnVuY3Rpb24iLCJfaW5zZXJ0ZWQiLCJfcGFyZW50IiwiZXZlbnROYW1lIiwiYmFzZSIsIl9saXN0ZW5UbyIsImV2ZW50IiwiX2ludm9rZUhhbmRsZXJzIiwib25jZSIsIm9uY2VDYWxsYmFjayIsIm9uIiwib2ZmIiwib2ZmXyIsImVtaXQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRhdGEiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJlbWl0UHJpdmF0ZSIsImNhbGxiYWNrcyIsImNiIiwiZXZlbnROYW1lVG9MaXN0ZW5Gb3IiLCJsaXN0ZW5NZXRob2QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVsYXRlZCIsImN1cnJlbnRTdGF0ZVN0eWxlIiwidGhlbiIsImZvcmNlU3R5bGUiLCJzdHlsZVNhZmUiLCJza2lwQ29tcHV0ZWQiLCJjb21wdXRlZCIsInNhbXBsZSIsInN0eWxlUGFyc2VkIiwicGFyc2VGbG9hdCIsInJlY2FsY1N0eWxlIiwicmVjYWxjQ2hpbGRyZW4iLCJ0YXJnZXRTdHlsZXMiLCJfcmVzb2x2ZUZuU3R5bGVzIiwiX2dldEFjdGl2ZVN0YXRlcyIsInN0YXRlIiwic3RhdGVzIiwiX3N0YXRlIiwiX3N0YXRlU2hhcmVkIiwiX3N0eWxlcyIsImhpZGUiLCJzaG93IiwiZGlzcGxheSIsIm9yaWVudGF0aW9uR2V0dGVyIiwid2lkdGgiLCJoZWlnaHQiLCJhc3BlY3RSYXRpb0dldHRlciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJhdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIk1lZGlhUXVlcnkiLCJSVUxFX0RFSUxJTUlURVIiLCJ0ZXN0UnVsZSIsInBhcnNlUXVlcnkiLCJxdWVyeVN0cmluZyIsInF1ZXJ5U3BsaXQiLCJwYXJlbnQiLCJwYXJlbnRNYXRjaGluZyIsIm1hcCIsImdldHRlciIsImtleVByZWZpeCIsIm1heCIsIm1pbiIsIm9yaWVudGF0aW9uIiwiYXNwZWN0UmF0aW8iLCJwYXJzZWRWYWx1ZSIsInN0cmluZ1ZhbHVlIiwicXVlcnkiLCJjdXJyZW50VmFsdWUiLCJwYXNzZWQiLCJTdGF0ZUNoYWluIiwiam9pbiIsIm90aGVyQWN0aXZlIiwiYWN0aXZlIiwiQkFTRV9TVEFURV9UUklHR0VSUyIsIkNBQ0hFRF9GTl9JTlNFUlRFRCIsIl9ub3JtYWxpemVPcHRpb25zIiwiYmFzZTEiLCJiYXNlMiIsImJhc2UzIiwiYmFzZTQiLCJiYXNlNSIsInJlbGF0ZWRJbnN0YW5jZSIsImNsYXNzIiwidXJsIiwiaHJlZiIsInVucGFzc2FibGVTdGF0ZXMiLCJwYXNzU3RhdGVUb0NoaWxkcmVuIiwicGFzc0RhdGFUb0NoaWxkcmVuIiwic3RhdGVUcmlnZ2VycyIsImNsb25lIiwiX3BhcnNlVGV4dHMiLCJfdGV4dHMiLCJfcGFyc2VTdHlsZXMiLCJzdHlsZXMiLCJzdG9yZSIsIl9tZWRpYVN0YXRlcyIsIl9wcm92aWRlZFN0YXRlcyIsIl9wcm92aWRlZFN0YXRlc1NoYXJlZCIsImZsYXR0ZW5OZXN0ZWRTdGF0ZXMiLCJzcGVjaWFsU3RhdGVzIiwic3RhdGVTdHlsZXMiLCJzdGF0ZV8iLCJoZWxwZXJzIiwiJGJhc2UiLCJzdHlsZU9iamVjdCIsImNoYWluIiwiaGFzTm9uU3RhdGVQcm9wcyIsInN0YXRlQ2hhaW4iLCJzdHlsZUtleXMiLCJ0ZXh0cyIsIl9hcHBseU9wdGlvbnMiLCJoYW5kbGVyIiwibWV0aG9kIiwicmVmMSIsInJlZjIiLCJhdHRyIiwic3JjIiwic2VsZWN0ZWQiLCJjaGVja2VkIiwiYXR0cnMiLCJfYXBwbHlSZWdpc3RlcmVkU3R5bGUiLCJzdHlsZUFmdGVySW5zZXJ0IiwiaW52b2tlQ29tcHV0ZXJzT25jZSIsIl9pbnZva2VkQ29tcHV0ZXJzIiwicmVjYWxjT25SZXNpemUiLCJldmVudHMiLCJtZXRob2RzIiwiY29tcHV0ZXJzIiwiYXBwbHlEYXRhIiwiX2luaXQiLCJfcnVuQ29tcHV0ZXIiLCJfYXR0YWNoU3RhdGVFdmVudHMiLCJmb3JjZSIsImRpc2FibGVyIiwiZW5hYmxlciIsInRyaWdnZXIiLCJfcHJveHlQYXJlbnQiLCJuZXdQYXJlbnQiLCJsYXN0UGFyZW50IiwicGFyZW50cyIsImRvY3VtZW50RWxlbWVudCIsIl91bnByb3h5UGFyZW50IiwibWVkaWFTdGF0ZXMiLCJyZXN1bHRzIiwicGFyZW50c1VudGlsIiwiX2dldFBhcmVudHMiLCJpc1JlZiIsIm5leHRQYXJlbnQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeUFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfZ2V0Q2hpbGRSZWZzIiwiZnJlc2hDb3B5IiwiY2hpbGRSZWZzIiwicmVmcyIsIl9jaGlsZFJlZnMiLCJfZ2V0SW5kZXhCeVByb3AiLCJtYWluIiwiX2ZpbHRlckVsZW1lbnRzIiwiX2NoaWxkcmVuIiwicGFyZW50Tm9kZSIsIm5leHRTaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibmV4dEFsbCIsInNpYmxpbmdzIiwibmV4dCIsInByZXZpb3VzU2libGluZyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJwcmV2QWxsIiwicHJldlNpYmxpbmciLCJwcmV2IiwicmV2ZXJzZSIsIkRVTU1ZX0FSUkFZIiwidGFyZ2V0U3RhdGUiLCJhY3RpdmVTdGF0ZXMiLCJkZXNpcmVkVmFsdWUiLCJ0b2dnbGUiLCJfc3RhdGVQaXBlVGFyZ2V0IiwidG9nZ2xlU3RhdGUiLCJyZXNldFN0YXRlIiwiYWN0aXZlU3RhdGUiLCJwaXBlU3RhdGUiLCJub3JtYWxpemVFbGVtZW50IiwidGFyZ2V0U3R5bGUiLCJzdXBlcmlvclN0YXRlcyIsImluY2x1ZGVCYXNlIiwic2tpcEZucyIsImVudHJ5IiwiayIsInN1cGVyaW9yU3R5bGVzIiwiYWRkQ2xhc3MiLCJfcmVtb3ZlUmVnaXN0ZXJlZFN0eWxlIiwicmVzZXRWYWx1ZSIsInJlbW92ZUNsYXNzIiwiX3R1cm5TdHlsZU9OIiwic2hhcmVkU3RhdGVzIiwiX2dldFN1cGVyaW9yU3RhdGVzIiwiX2dldFNoYXJlZFN0YXRlcyIsIl90dXJuU3R5bGVPRkYiLCJhY3RpdmVTaGFyZWRTdGF0ZXMiLCJfdHVyblRleHRPTiIsInRhcmdldFRleHQiLCJfdHVyblRleHRPRkYiLCJzdGF0ZVRvRXhjbHVkZSIsImluY2x1ZGVTaGFyZWRTdGF0ZXMiLCJwbGFpblN0YXRlcyIsImNhbmRpZGF0ZSIsInN1cGVyaW9yIiwidGFyZ2V0U3RhdGVJbmRleCIsImlzQXBwbGljYWJsZSIsInRvVGVtcGxhdGUiLCJlbENsb25lIiwibGVuMiIsIm5ld0VsIiwiY2xvbmVOb2RlIiwicHJldlBhcmVudCIsIl9yZW1vdmVDaGlsZCIsIl9yZWZyZXNoUGFyZW50IiwiYXBwZW5kVG8iLCJwcmVwZW5kIiwidW5zaGlmdCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJwcmVwZW5kVG8iLCJhZnRlciIsIm15SW5kZXgiLCJpbnNlcnRBZnRlciIsImJlZm9yZSIsImRldGFjaCIsInJlbW92ZSIsImVtcHR5Iiwid3JhcCIsImN1cnJlbnRQYXJlbnQiLCJ1bndyYXAiLCJncmFuZFBhcmVudCIsInBhcmVudENoaWxkcmVuIiwicGFyZW50U2libGluZyIsImhhc0NsYXNzIiwiY2xhc3NMaXN0IiwidGFyZ2V0SW5kZXgiLCJ0b2dnbGVDbGFzcyIsInNldFJlZiIsInRhcmdldENoaWxkIiwicmVwbGFjZW1lbnRDaGlsZCIsImluZGV4T2ZDaGlsZCIsInJlcGxhY2VDaGlsZCIsInJlbW92ZUNoaWxkIiwibmV3VmFsdWUiLCJzdmciLCJsaXN0IiwicG9wIiwidXBkYXRlU3RhdGVTdHlsZXMiLCJwYXJzZWQiLCJ1cGRhdGVkU3RhdGVzIiwidXBkYXRlU3RhdGVUZXh0cyIsInBhc3NUaHJvdWdoIiwiZGVmYXVsdHMiLCJjb21wdXRlciIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInN2Z05hbWVzcGFjZSIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlRWxlbWVudE5TIiwiQUxMT1dFRF9PUFRJT05TIiwidG9KU09OIiwiYWxpYXNlcyIsInRyYXZlcnNpbmciLCJtYW5pcHVsYXRpb24iLCJhcHBsaWNhdGlvbiIsImF0dHJpYnV0ZXNBbmRQcm9wZXJ0aWVzIiwic2NoZW1hIiwibWF0Y2hlc1NjaGVtYSIsIlBBUlNFX0VSUk9SX1BSRUZJWCIsInBhcnNlVHJlZSIsInRyZWUiLCJwYXJzZUNoaWxkcmVuIiwiRXJyb3IiLCJTdHJpbmciLCJBTExPV0VEX1RFTVBMQVRFX09QVElPTlMiLCJOT1RfREVFUF9LRVlTIiwiTk9UX0tFWVMiLCJleHRlbmRCeVJlZiIsImV4dGVuZFRlbXBsYXRlIiwiY3VycmVudE9wdHMiLCJuZXdPcHRzIiwiZ2xvYmFsT3B0cyIsImN1cnJlbnRDaGlsZCIsImN1cnJlbnRDaGlsZHJlbiIsImdsb2JhbE9wdHNUcmFuc2Zvcm0iLCJtYXhMZW5ndGgiLCJuZWVkc1RlbXBsYXRlV3JhcCIsIm5ld0NoaWxkIiwibmV3Q2hpbGRQcm9jZXNzZWQiLCJuZXdDaGlsZHJlbiIsIm5vQ2hhbmdlcyIsInJlbWFpbmluZ05ld0NoaWxkcmVuIiwib3B0cyIsIk1hdGgiLCJRdWlja1RlbXBsYXRlIiwibmV3Q2hpbGRyZW5SZWZzIiwiaXNUcmVlIiwibmV3VmFsdWVzIiwiY2hpbGREYXRhIiwiaXNUZW1wbGF0ZSIsIlF1aWNrQmF0Y2giLCJlbGVtZW50cyIsInJldHVyblJlc3VsdHMiLCJyZXR1cm5OZXh0IiwibGFzdFJlc3VsdHMiLCJTSE9SVENVVFMiLCJzaG9ydGN1dCJdLCJtYXBwaW5ncyI6Im9NQUFBLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO01BQ2hCLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFFBQS9ELEVBQXlFO0lBQ3ZFSCxPQUFPLEdBQUcsVUFBVUMsR0FBVixFQUFlO2FBQ2hCLE9BQU9BLEdBQWQ7S0FERjtHQURGLE1BSU87SUFDTEQsT0FBTyxHQUFHLFVBQVVDLEdBQVYsRUFBZTthQUNoQkEsR0FBRyxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsVUFBekIsSUFBdUNELEdBQUcsQ0FBQ0csV0FBSixLQUFvQkYsTUFBM0QsSUFBcUVELEdBQUcsS0FBS0MsTUFBTSxDQUFDRyxTQUFwRixHQUFnRyxRQUFoRyxHQUEyRyxPQUFPSixHQUF6SDtLQURGOzs7U0FLS0QsT0FBTyxDQUFDQyxHQUFELENBQWQ7OztBQUNELElBQUlLLGFBQWEsR0FBRyxxQkFBcEI7QUFDRCxJQUFJQyxZQUFZLEdBQUcsTUFBbkI7QUFDQSxJQUFJQyxXQUFXLEdBQUcsSUFBbEI7QUFDQSxJQUFJQyxXQUFXLEdBQUcsV0FBbEI7QUFDQSxJQUFJQyxTQUFTLEdBQUcsV0FBaEI7QUFDQSxJQUFJQyxpQkFBaUIsR0FBRyxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLElBQWxCLEVBQXdCLEdBQXhCLENBQXhCO0FBQ0EsSUFBSUMsbUJBQW1CLEdBQUcsQ0FBQyx1QkFBRCxFQUEwQix1QkFBMUIsRUFBbUQs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
