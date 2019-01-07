function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (require, global) {
  require = function (cache, modules, cx) {
    var loader = function loader(r) {
      if (!modules[r]) throw new Error(r + ' is not a module');
      return cache[r] ? cache[r].exports : (cache[r] = {
        exports: {}
      }, cache[r].exports = modules[r].call(cx, require, cache[r], cache[r].exports));
    };

    loader.modules = modules;
    return loader;
  }({}, {
    0: function _(require, module, exports) {
      var _QuickDom;

      var CSS = require(1);

      var extend = require(2);

      var allowedOptions, allowedTemplateOptions;
      allowedTemplateOptions = ['id', 'name', 'type', 'href', 'selected', 'checked', 'className']; // To copy from DOM Elements

      allowedOptions = ['id', 'ref', 'type', 'name', 'text', 'style', 'class', 'className', 'url', 'href', 'selected', 'checked', 'props', 'attrs', 'passStateToChildren', 'stateTriggers', 'unpassableStates']; // Used in QuickElement::toJSON
      // 'relatedInstance'

      ;
      var helpers, styleCache;
      helpers = {};

      helpers.includes = function (target, item) {
        return target && target.indexOf(item) !== -1;
      };

      helpers.removeItem = function (target, item) {
        var itemIndex;
        itemIndex = target.indexOf(item);

        if (itemIndex !== -1) {
          target.splice(itemIndex, 1);
        }

        return target;
      };

      helpers.normalizeGivenEl = function (targetEl) {
        switch (false) {
          case !IS.string(targetEl):
            return _QuickDom.text(targetEl);

          case !IS.domNode(targetEl):
            return _QuickDom(targetEl);

          case !IS.template(targetEl):
            return targetEl.spawn();

          default:
            return targetEl;
        }
      };

      helpers.isStateStyle = function (string) {
        return string[0] === '$' || string[0] === '@';
      };

      helpers.registerStyle = function (rule, level, important) {
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

      styleCache = new (
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
      }())();
      ;
      var IS;
      IS = require(18);
      IS = IS.create('natives', 'dom');
      IS.load({
        quickDomEl: function quickDomEl(subject) {
          return subject && subject.constructor.name === QuickElement.name;
        },
        template: function template(subject) {
          return subject && subject.constructor.name === QuickTemplate.name;
        }
      });
      ;
      var QuickElement, svgNamespace;
      svgNamespace = 'http://www.w3.org/2000/svg';

      QuickElement = function () {
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
            }

            this._parent = null;
            this._styles = {};
            this._state = [];
            this._children = [];

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
              output = [this.type, extend.clone.keys(allowedOptions)(this.options)];
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

        ;
        QuickElement.count = 0;
        return QuickElement;
      }.call(this);

      if (QuickElement.name == null) {
        QuickElement.name = 'QuickElement';
      }

      Object.defineProperties(QuickElement.prototype, {
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
      ;

      var _filterElements, _getChildRefs2, _getIndexByProp, _getParents;

      QuickElement.prototype.parentsUntil = function (filter) {
        return _getParents(this, filter);
      };

      QuickElement.prototype.parentMatching = function (filter) {
        var isRef, nextParent;

        if (IS.function(filter) || (isRef = IS.string(filter))) {
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

      QuickElement.prototype.query = function (selector) {
        return _QuickDom(this.raw.querySelector(selector));
      };

      QuickElement.prototype.queryAll = function (selector) {
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
          get: function get() {
            var child, i, len, ref1;

            if (this.el.childNodes.length !== this._children.length) {
              // Re-collect children	
              this._children.length = 0; // Empty out children array

              ref1 = this.el.childNodes;

              for (i = 0, len = ref1.length; i < len; i++) {
                child = ref1[i];

                if (child.nodeType < 4) {
                  this._children.push(_QuickDom(child));
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
            if ((!this._parent || this._parent.el !== this.el.parentNode) && !IS.domDoc(this.el.parentNode)) {
              this._parent = _QuickDom(this.el.parentNode);
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
            return _QuickDom(this.el.nextSibling);
          }
        },
        'nextEl': {
          get: function get() {
            return _QuickDom(this.el.nextElementSibling);
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
            nextSibling = _QuickDom(this.el.nextSibling);

            while (nextSibling) {
              siblings.push(nextSibling);
              nextSibling = nextSibling.next;
            }

            return siblings;
          }
        },
        'prev': {
          get: function get() {
            return _QuickDom(this.el.previousSibling);
          }
        },
        'prevEl': {
          get: function get() {
            return _QuickDom(this.el.previousElementSibling);
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
            prevSibling = _QuickDom(this.el.previousSibling);

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
            return this._childRefs || _getChildRefs2(this);
          }
        },
        'childf': {
          get: function get() {
            return _getChildRefs2(this, true);
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

      _getParents = function _getParents(targetEl, filter) {
        var isRef, nextParent, parents;

        if (!IS.function(filter) && !(isRef = IS.string(filter))) {
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

      _getChildRefs2 = function _getChildRefs(target, freshCopy) {
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
            childRefs = _getChildRefs2(child, freshCopy);

            for (ref in childRefs) {
              el = childRefs[ref];
              refs[ref] || (refs[ref] = el);
            }
          }
        }

        return refs;
      };

      _getIndexByProp = function _getIndexByProp(main, prop) {
        var parent;

        if (!(parent = main.parent)) {
          return null;
        } else {
          return parent.children.filter(function (child) {
            return child[prop] === main[prop];
          }).indexOf(main);
        }
      };

      _filterElements = function _filterElements(array) {
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

      ;
      var CACHED_FN_INSERTED, baseStateTriggers;
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

      QuickElement.prototype._normalizeOptions = function () {
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

        this.options.stateTriggers = this.options.stateTriggers ? extend.clone.deep(baseStateTriggers, this.options.stateTriggers) : baseStateTriggers;

        if (this.type === 'text') {
          extend(this, this._parseTexts(this.options.text, this._texts));
        } else {
          extend(this, this._parseStyles(this.options.style, this._styles));
        }
      };

      QuickElement.prototype._parseStyles = function (styles, store) {
        var _mediaStates, _providedStates, _providedStatesShared, _stateShared, _styles, base, _flattenNestedStates, forceStyle, i, keys, len, specialStates, state, stateStyles, state_, states;

        if (!IS.objectPlain(styles)) {
          return;
        }

        keys = Object.keys(styles);
        states = keys.filter(function (key) {
          return helpers.isStateStyle(key);
        });
        specialStates = helpers.removeItem(states.slice(), '$base');
        _mediaStates = states.filter(function (key) {
          return key[0] === '@';
        }).map(function (state) {
          return state.slice(1);
        });
        _providedStates = states.map(function (state) {
          return state.slice(1);
        });
        _styles = store || {};
        _stateShared = _providedStatesShared = void 0;
        base = !helpers.includes(states, '$base') ? styles : styles.$base;
        _styles.base = helpers.registerStyle(base, 0, forceStyle = this.options.forceStyle);

        if (specialStates.length) {
          _flattenNestedStates = function flattenNestedStates(styleObject, chain, level) {
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
                stateChain = new (require(33))(chain);

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

                _styles[stateChain.string] = helpers.registerStyle(_flattenNestedStates(styleObject[state], chain, level + 1), level + 1, forceStyle);
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
              _styles[state_] = helpers.registerStyle(stateStyles, 1);
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

      QuickElement.prototype._parseTexts = function (texts, store) {
        var _providedStates, _texts, i, len, state, states;

        if (!IS.objectPlain(texts)) {
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

      QuickElement.prototype._applyOptions = function () {
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
              if (IS.function(value)) {
                this[method] = value;
              } else if (IS.object(value)) {
                Object.defineProperty(this, method, {
                  configurable: true,
                  get: value.get,
                  set: value.set
                });
              }
            }
          }
        }

        if (this.type !== 'text' && IS.object(this.options.text)) {
          this.append(_QuickDom('text', {
            text: this.options.text
          }));
        }
      };

      QuickElement.prototype._postCreation = function (data) {
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

      QuickElement.prototype._attachStateEvents = function (force) {
        var _this2 = this;

        var states;
        states = Object.keys(this.options.stateTriggers);
        states.forEach(function (state) {
          var disabler, enabler, trigger;
          trigger = _this2.options.stateTriggers[state];

          if (!helpers.includes(_this2._providedStates, state) && !force && !trigger.force) {
            return;
          }

          enabler = IS.string(trigger) ? trigger : trigger.on;

          if (IS.object(trigger)) {
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

      QuickElement.prototype._proxyParent = function () {
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

      QuickElement.prototype._unproxyParent = function (newParent) {
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
            results.push(this._mediaStates[queryString] = MediaQuery.register(this, queryString));
          }

          return results;
        }
      };

      ;
      var regexWhitespace;
      regexWhitespace = /\s+/;

      QuickElement.prototype.on = function (eventNames, callback, useCapture, isPrivate) {
        var _this4 = this;

        var callbackRef, split;

        if (this._eventCallbacks == null) {
          this._eventCallbacks = {
            __refs: {}
          };
        }

        if (IS.string(eventNames) && IS.function(callback)) {
          split = eventNames.split('.');
          callbackRef = split[1];
          eventNames = split[0];

          if (eventNames === 'inserted' && this._inserted) {
            callback.call(this, this._parent);
            return this;
          }

          eventNames.split(regexWhitespace).forEach(function (eventName) {
            var base;

            if (!_this4._eventCallbacks[eventName]) {
              _this4._eventCallbacks[eventName] = [];

              if (!isPrivate) {
                _this4._listenTo(eventName, function (event) {
                  return _this4._invokeHandlers(eventName, event);
                }, useCapture);
              }
            }

            if (callbackRef) {
              if ((base = _this4._eventCallbacks.__refs)[eventName] == null) {
                base[eventName] = {};
              }

              _this4._eventCallbacks.__refs[eventName][callbackRef] = callback;
            }

            return _this4._eventCallbacks[eventName].push(callback);
          });
        }

        return this;
      };

      QuickElement.prototype.once = function (eventNames, callback) {
        var _this5 = this;

        var _onceCallback;

        if (IS.string(eventNames) && IS.function(callback)) {
          this.on(eventNames, _onceCallback = function onceCallback(event) {
            _this5.off(eventNames, _onceCallback);

            return callback.call(_this5, event);
          });
        }

        return this;
      };

      QuickElement.prototype.off = function (eventNames, callback) {
        var _this6 = this;

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
          eventNames.split(regexWhitespace).forEach(function (eventName) {
            var ref;

            if (_this6._eventCallbacks[eventName]) {
              if (callback == null) {
                callback = (ref = _this6._eventCallbacks.__refs[eventName]) != null ? ref[callbackRef] : void 0;
              }

              if (IS.function(callback)) {
                return helpers.removeItem(_this6._eventCallbacks[eventName], callback);
              } else if (!callbackRef) {
                return _this6._eventCallbacks[eventName].length = 0;
              }
            }
          });
        }

        return this;
      };

      QuickElement.prototype.emit = function (eventName) {
        var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var data = arguments.length > 3 ? arguments[3] : undefined;
        var event;

        if (eventName && IS.string(eventName)) {
          event = document.createEvent('Event');
          event.initEvent(eventName, bubbles, cancelable);

          if (data && _typeof(data) === 'object') {
            extend(event, data);
          }

          this.el.dispatchEvent(event);
        }

        return this;
      };

      QuickElement.prototype.emitPrivate = function (eventName, arg) {
        var ref;

        if (eventName && IS.string(eventName) && ((ref = this._eventCallbacks) != null ? ref[eventName] : void 0)) {
          this._invokeHandlers(eventName, arg);
        }

        return this;
      };

      QuickElement.prototype._invokeHandlers = function (eventName, arg) {
        var callbacks, cb, i, len;
        callbacks = this._eventCallbacks[eventName].slice();

        for (i = 0, len = callbacks.length; i < len; i++) {
          cb = callbacks[i];
          cb.call(this, arg);
        }
      };
      /* istanbul ignore next */


      QuickElement.prototype._listenTo = function (eventName, callback, useCapture) {
        var eventNameToListenFor, listenMethod;
        listenMethod = this.el.addEventListener ? 'addEventListener' : 'attachEvent';
        eventNameToListenFor = this.el.addEventListener ? eventName : "on".concat(eventName);
        this.el[listenMethod](eventNameToListenFor, callback, useCapture);
        return this;
      };

      ;
      var DUMMY_ARRAY;
      DUMMY_ARRAY = [];

      QuickElement.prototype.state = function (targetState, value, bubbles, source) {
        var activeStates, child, desiredValue, i, j, key, keys, len, prop, ref, toggle;

        if (arguments.length === 0) {
          return this._state.slice();
        }

        if (arguments.length === 1) {
          if (IS.string(targetState)) {
            return helpers.includes(this._state, targetState);
          } else if (IS.object(targetState)) {
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
        } else if (IS.string(targetState)) {
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
              helpers.removeItem(this._state, targetState);
              toggle = 'OFF';
            }

            this['_turn' + prop + toggle](targetState, activeStates);
            this.emitPrivate("stateChange:".concat(targetState), desiredValue);
          } // ==== Pass state to parent/children =================================================================================


          if (!helpers.includes(this.options.unpassableStates, targetState)) {
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

      QuickElement.prototype.toggleState = function (targetState) {
        return this.state(targetState, !this.state(targetState));
      };

      QuickElement.prototype.resetState = function () {
        var activeState, j, len, ref;
        ref = this._state.slice();

        for (j = 0, len = ref.length; j < len; j++) {
          activeState = ref[j];
          this.state(activeState, false);
        }

        return this;
      };

      QuickElement.prototype.pipeState = function (targetEl) {
        var activeState, j, len, ref;

        if (targetEl) {
          targetEl = helpers.normalizeGivenEl(targetEl);

          if (IS.quickDomEl(targetEl) && targetEl !== this) {
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

      QuickElement.prototype._applyRegisteredStyle = function (targetStyle, superiorStates, includeBase, skipFns) {
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

      QuickElement.prototype._removeRegisteredStyle = function (targetStyle, superiorStates, includeBase) {
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

      QuickElement.prototype._turnStyleON = function (targetState, activeStates) {
        var j, len, sharedStates, skipFns, stateChain;
        skipFns = this.options.styleAfterInsert && !this._inserted;

        if (this._styles[targetState]) {
          this._applyRegisteredStyle(this._styles[targetState], this._getSuperiorStates(targetState, activeStates), false, skipFns);
        }

        if (this._providedStatesShared) {
          sharedStates = this._getSharedStates(targetState);

          for (j = 0, len = sharedStates.length; j < len; j++) {
            stateChain = sharedStates[j];

            if (!helpers.includes(this._stateShared, stateChain.string)) {
              this._stateShared.push(stateChain.string);
            }

            this._applyRegisteredStyle(this._styles[stateChain.string], null, null, skipFns);
          }
        }
      };

      QuickElement.prototype._turnStyleOFF = function (targetState, activeStates) {
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
            helpers.removeItem(this._stateShared, stateChain.string);
            targetStyle = this._styles[stateChain.string];

            if (targetStyle.fns.length && this._stateShared.length && !activeSharedStates) {
              activeSharedStates = this._stateShared.filter(function (state) {
                return !helpers.includes(state, targetState);
              });
              activeStates = activeStates.concat(activeSharedStates);
            }

            this._removeRegisteredStyle(targetStyle, activeStates, true);
          }
        }
      };

      QuickElement.prototype._turnTextON = function (targetState, activeStates) {
        var superiorStates, targetText;

        if (this._texts && IS.string(targetText = this._texts[targetState])) {
          superiorStates = this._getSuperiorStates(targetState, activeStates);

          if (!superiorStates.length) {
            this.text = targetText;
          }
        }
      };

      QuickElement.prototype._turnTextOFF = function (targetState, activeStates) {
        var targetText;

        if (this._texts && IS.string(targetText = this._texts[targetState])) {
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

      QuickElement.prototype._getActiveStates = function (stateToExclude) {
        var includeSharedStates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var activeStates, j, len, plainStates, state;

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

      QuickElement.prototype._getSuperiorStates = function (targetState, activeStates) {
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

      QuickElement.prototype._getSharedStates = function (targetState) {
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

      QuickElement.prototype._resolveFnStyles = function (states, includeBase) {
        var entry, j, k, len, len1, output, ref, state;

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

      var aspectRatioGetter, orientationGetter;

      QuickElement.prototype.style = function (property) {
        var _this7 = this;

        var args, i, key, keys, result, value;

        if (this.type === 'text') {
          return;
        }

        args = arguments;

        if (IS.string(property)) {
          value = typeof args[1] === 'function' ? args[1].call(this, this.related) : args[1];

          if (args[1] === null && IS.defined(this.currentStateStyle(property)) && !IS.function(this.currentStateStyle(property))) {
            value = CSS.UNSET;
          }

          if (value && typeof value.then === 'function') {
            value.then(function (value) {
              return CSS(_this7.el, property, value, _this7.options.forceStyle);
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
        } else if (IS.object(property)) {
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


      QuickElement.prototype.styleSafe = function (property, skipComputed) {
        var computed, result, sample;

        if (this.type === 'text') {
          return;
        }

        sample = this.el.style[property];

        if (IS.string(sample) || IS.number(sample)) {
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

      QuickElement.prototype.styleParsed = function (property, skipComputed) {
        return parseFloat(this.styleSafe(property, skipComputed));
      };

      QuickElement.prototype.recalcStyle = function (recalcChildren) {
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

      QuickElement.prototype.currentStateStyle = function (property) {
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
              if (this._styles[state] && IS.defined(this._styles[state].rule[property])) {
                return this._styles[state].rule[property];
              }
            }
          }

          if (this._styles.base) {
            return this._styles.base.rule[property];
          }
        }
      };

      QuickElement.prototype.hide = function () {
        return this.style('display', 'none');
      };

      QuickElement.prototype.show = function (display) {
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

      Object.defineProperties(QuickElement.prototype, {
        'orientation': orientationGetter = {
          get: function get() {
            if (this.width > this.height) {
              return 'landscape';
            } else {
              return 'portrait';
            }
          }
        },
        'aspectRatio': aspectRatioGetter = {
          get: function get() {
            return this.width / this.height;
          }
        },
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
      ;

      QuickElement.prototype.attr = function (target, newValue) {
        var i, key, keys;

        if (arguments.length === 1) {
          if (typeof target === 'string') {
            return this.el.getAttribute(target);
          }

          if (IS.object(target)) {
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

      QuickElement.prototype.prop = function (target, newValue) {
        var i, key, keys;

        if (arguments.length === 1) {
          if (typeof target === 'string') {
            return this.el[target];
          }

          if (IS.object(target)) {
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

      ;

      QuickElement.prototype.toTemplate = function () {
        return _QuickDom.template(this);
      };

      QuickElement.prototype.clone = function () {
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

      QuickElement.prototype.append = function (targetEl) {
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

            targetEl._refreshParent(); // Force re-fresh targetEl._parent value to trigger inserted callback

          }
        }

        return this;
      };

      QuickElement.prototype.appendTo = function (targetEl) {
        if (targetEl) {
          targetEl = helpers.normalizeGivenEl(targetEl);

          if (IS.quickDomEl(targetEl)) {
            targetEl.append(this);
          }
        }

        return this;
      };

      QuickElement.prototype.prepend = function (targetEl) {
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

            targetEl._refreshParent(); // Force re-fresh targetEl._parent value to trigger inserted callback

          }
        }

        return this;
      };

      QuickElement.prototype.prependTo = function (targetEl) {
        if (targetEl) {
          targetEl = helpers.normalizeGivenEl(targetEl);

          if (IS.quickDomEl(targetEl)) {
            targetEl.prepend(this);
          }
        }

        return this;
      };

      QuickElement.prototype.after = function (targetEl) {
        var myIndex;

        if (targetEl && this.parent) {
          targetEl = helpers.normalizeGivenEl(targetEl);

          if (IS.quickDomEl(targetEl)) {
            myIndex = this.parent._children.indexOf(this);

            this.parent._children.splice(myIndex + 1, 0, targetEl);

            this.el.parentNode.insertBefore(targetEl.el, this.el.nextSibling);

            targetEl._refreshParent(); // Force re-fresh targetEl._parent value to trigger inserted callback

          }
        }

        return this;
      };

      QuickElement.prototype.insertAfter = function (targetEl) {
        if (targetEl) {
          targetEl = helpers.normalizeGivenEl(targetEl);

          if (IS.quickDomEl(targetEl)) {
            targetEl.after(this);
          }
        }

        return this;
      };

      QuickElement.prototype.before = function (targetEl) {
        var myIndex;

        if (targetEl && this.parent) {
          targetEl = helpers.normalizeGivenEl(targetEl);

          if (IS.quickDomEl(targetEl)) {
            myIndex = this.parent._children.indexOf(this);

            this.parent._children.splice(myIndex, 0, targetEl);

            this.el.parentNode.insertBefore(targetEl.el, this.el);

            targetEl._refreshParent(); // Force re-fresh targetEl._parent value to trigger inserted callback

          }
        }

        return this;
      };

      QuickElement.prototype.insertBefore = function (targetEl) {
        if (targetEl) {
          targetEl = helpers.normalizeGivenEl(targetEl);

          if (IS.quickDomEl(targetEl)) {
            targetEl.before(this);
          }
        }

        return this;
      };

      QuickElement.prototype.detach = function () {
        var ref;

        if ((ref = this.parent) != null) {
          ref._removeChild(this);
        }

        return this;
      };

      QuickElement.prototype.remove = function () {
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

      QuickElement.prototype.empty = function () {
        var child, i, len, ref;
        ref = this.children.slice();

        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];

          this._removeChild(child);
        }

        return this;
      };

      QuickElement.prototype.wrap = function (targetEl) {
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

      QuickElement.prototype.unwrap = function () {
        var grandParent, parent, parentChildren, parentSibling;
        parent = this.parent;

        if (parent) {
          parentChildren = _QuickDom.batch(parent.children);
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

      QuickElement.prototype.replace = function (targetEl) {
        var ref;

        if (targetEl) {
          targetEl = helpers.normalizeGivenEl(targetEl);

          if (IS.quickDomEl(targetEl) && targetEl !== this) {
            targetEl.detach();

            if ((ref = this.parent) != null) {
              ref._removeChild(this, targetEl);
            }

            targetEl._refreshParent(); // Force re-fresh targetEl._parent value to trigger inserted callback

          }
        }

        return this;
      };

      QuickElement.prototype.hasClass = function (target) {
        return helpers.includes(this.classList, target);
      };

      QuickElement.prototype.addClass = function (target) {
        var classList, targetIndex;
        classList = this.classList;
        targetIndex = classList.indexOf(target);

        if (targetIndex === -1) {
          classList.push(target);
          this.className = classList.length > 1 ? classList.join(' ') : classList[0];
        }

        return this;
      };

      QuickElement.prototype.removeClass = function (target) {
        var classList, targetIndex;
        classList = this.classList;
        targetIndex = classList.indexOf(target);

        if (targetIndex !== -1) {
          classList.splice(targetIndex, 1);
          this.className = classList.length ? classList.join(' ') : '';
        }

        return this;
      };

      QuickElement.prototype.toggleClass = function (target) {
        if (this.hasClass(target)) {
          this.removeClass(target);
        } else {
          this.addClass(target);
        }

        return this;
      };

      QuickElement.prototype.setRef = function (target) {
        this.ref = this.options.ref = target;
        this.attr('data-ref', target);
        return this;
      };

      QuickElement.prototype._refreshParent = function () {
        return this.parent;
      };

      QuickElement.prototype._removeChild = function (targetChild, replacementChild) {
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
      ;

      QuickElement.prototype.updateOptions = function (options) {
        if (IS.object(options)) {
          this.options = options;

          this._normalizeOptions();

          this._applyOptions(this.options);
        }

        return this;
      };

      QuickElement.prototype.updateStateStyles = function (styles) {
        var i, len, parsed, state, updatedStates;

        if (IS.objectPlain(styles)) {
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

      QuickElement.prototype.updateStateTexts = function (texts) {
        var parsed;

        if (IS.objectPlain(texts)) {
          extend.deep.concat(this, parsed = this._parseTexts(texts));
        }

        return this;
      };

      QuickElement.prototype.applyData = function (data, passThrough) {
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

      QuickElement.prototype._runComputer = function (computer, arg, data) {
        return this.options.computers[computer].call(this, arg, data);
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
      QuickWindow.emitPrivate = QuickElement.prototype.emitPrivate;
      QuickWindow._listenTo = QuickElement.prototype._listenTo;
      QuickWindow._invokeHandlers = QuickElement.prototype._invokeHandlers;
      Object.defineProperties(QuickWindow, {
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
      });
      ;
      var MediaQuery, ruleDelimiter;
      MediaQuery = new function () {
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
                return QuickWindow;

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

          rules = querySplit[1].slice(0, -1).split(ruleDelimiter).map(function (rule) {
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
      }();
      ruleDelimiter = /,\s*/;
      ;

      _QuickDom = function QuickDom() {
        var arg, args, element, i, j, len, prevCount;
        args = new Array(arguments.length);

        for (i = j = 0, len = arguments.length; j < len; i = ++j) {
          arg = arguments[i];
          args[i] = arg;
        }

        prevCount = QuickElement.count;
        element = _QuickDom.create(args);

        if (element && element._postCreation && QuickElement.count !== prevCount) {
          element._postCreation();
        }

        return element;
      };

      _QuickDom.create = function (args) {
        var argsLength, child, children, element, i, j, len, options, type;

        switch (false) {
          case !IS.array(args[0]):
            return _QuickDom.apply(void 0, _toConsumableArray(args[0]));

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
              children = new Array(argsLength = args.length);
              i = 1;

              while (++i < argsLength) {
                children[i + 1] = args[i];
              }

              for (j = 0, len = children.length; j < len; j++) {
                child = children[j];

                if (IS.string(child)) {
                  child = _QuickDom.text(child);
                }

                if (IS.array(child)) {
                  child = _QuickDom.apply(void 0, _toConsumableArray(child));
                }

                if (IS.quickDomEl(child)) {
                  element.append(child);
                }
              }
            }

            return element;

          case !(args[0] && (IS.domNode(args[0][0]) || IS.domDoc(args[0][0]))):
            return _QuickDom(args[0][0]);
        }
      };

      _QuickDom.template = function (tree) {
        return new QuickTemplate(tree, true);
      };

      _QuickDom.html = function (innerHTML) {
        var children, container;
        container = document.createElement('div');
        container.innerHTML = innerHTML;
        children = Array.prototype.slice.call(container.childNodes);
        return _QuickDom.batch(children);
      };

      _QuickDom.query = function (target) {
        return _QuickDom(document).query(target);
      };

      _QuickDom.queryAll = function (target) {
        return _QuickDom(document).queryAll(target);
      };

      _QuickDom.isTemplate = function (target) {
        return IS.template(target);
      };

      _QuickDom.isQuickEl = function (target) {
        return IS.quickDomEl(target);
      };

      _QuickDom.isEl = function (target) {
        return IS.domEl(target);
      };

      var QuickBatch;

      QuickBatch =
      /*#__PURE__*/
      function () {
        function QuickBatch(elements, returnResults1) {
          _classCallCheck(this, QuickBatch);

          this.returnResults = returnResults1;
          this.elements = elements.map(function (el) {
            return _QuickDom(el);
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

      Object.keys(QuickElement.prototype).concat('css', 'replaceWith', 'html', 'text').forEach(function (method) {
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

      _QuickDom.batch = function (elements, returnResults) {
        if (!IS.iterable(elements)) {
          throw new Error("Batch: expected an iterable, got ".concat(String(elements)));
        } else if (!elements.length) {
          throw new Error("Batch: expected a non-empty element collection");
        }

        return new QuickBatch(elements, returnResults);
      };

      ;
      var QuickTemplate;

      var _extendByRef, extendTemplate, notDeepKeys, notKeys;

      notDeepKeys = ['relatedInstance', 'related', 'data'];
      notKeys = ['children', '_childRefs'];

      extendTemplate = function extendTemplate(currentOpts, newOpts, globalOpts) {
        var currentChild, currentChildren, globalOptsTransform, index, maxLength, needsTemplateWrap, newChild, newChildProcessed, newChildren, noChanges, output, ref, remainingNewChildren;

        if (globalOpts) {
          globalOptsTransform = {
            options: function options(opts) {
              return extend(opts, globalOpts);
            }
          };
        }

        if (IS.array(newOpts)) {
          newOpts = parseTree(newOpts, false);
        } else if (newOpts && !matchesSchema(newOpts)) {
          newOpts = {
            options: newOpts
          };
        }

        output = extend.deep.nullDeletes.notKeys(notKeys).notDeep(notDeepKeys).transform(globalOptsTransform).clone(currentOpts, newOpts);
        currentChildren = currentOpts.children;
        newChildren = (newOpts != null ? newOpts.children : void 0) || [];
        output.children = [];
        /* istanbul ignore next */

        if (IS.array(newChildren)) {
          maxLength = Math.max(currentChildren.length, newChildren.length);
          index = -1;

          while (++index !== maxLength) {
            needsTemplateWrap = noChanges = false;
            currentChild = currentChildren[index];
            newChild = newChildren[index];

            newChildProcessed = function () {
              switch (false) {
                case !IS.template(newChild):
                  return newChild;

                case !IS.array(newChild):
                  return needsTemplateWrap = parseTree(newChild);

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
            }();

            if (noChanges) {
              newChildProcessed = currentChild;
            } else if (needsTemplateWrap) {
              newChildProcessed = currentChild ? currentChild.extend(newChildProcessed, globalOpts) : new QuickTemplate(extend.clone(schema, newChildProcessed));
            }

            output.children.push(newChildProcessed);
          }
        } else if (IS.object(newChildren)) {
          newChildren = extend.allowNull.clone(newChildren);
          output.children = _extendByRef(newChildren, currentChildren, globalOpts);
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
      };

      ;
      var parseErrorPrefix, parseTree;

      parseTree = function parseTree(tree, parseChildren) {
        var output;

        switch (false) {
          case !IS.array(tree):
            output = {};

            if (!IS.string(tree[0])) {
              throw new Error("".concat(parseErrorPrefix, " string for 'type', got '").concat(String(tree[0]), "'"));
            } else {
              output.type = tree[0];
            }

            if (tree.length > 1 && !IS.object(tree[1]) && tree[1] !== null) {
              throw new Error("".concat(parseErrorPrefix, " object for 'options', got '").concat(String(tree[1]), "'"));
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
              output.children = output.children.map(_QuickDom.template);
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
              children: schema.children.map.call(tree.childNodes, _QuickDom.template)
            };

          case !IS.quickDomEl(tree):
            return {
              type: tree.type,
              ref: tree.ref,
              options: extend.clone.deep.notKeys(['relatedInstance', 'related'])(tree.options),
              children: tree.children.map(_QuickDom.template)
            };

          case !IS.template(tree):
            return tree;

          default:
            throw new Error("".concat(parseErrorPrefix, " (array || string || domEl || quickDomEl || template), got ").concat(String(tree)));
        }
      };

      parseErrorPrefix = 'Template Parse Error: expected';
      ;
      var matchesSchema, schema;
      schema = {
        type: 'div',
        ref: void 0,
        options: {},
        children: []
      };

      matchesSchema = function matchesSchema(object) {
        return typeof object.type !== 'undefined' || typeof object.ref !== 'undefined' || typeof object.options !== 'undefined' || typeof object.children !== 'undefined';
      };

      ;

      QuickTemplate =
      /*#__PURE__*/
      function () {
        function QuickTemplate(config, isTree) {
          _classCallCheck(this, QuickTemplate);

          if (IS.template(config)) {
            return config;
          }

          config = isTree ? parseTree(config) : config;
          extend(this, config);
        }

        _createClass(QuickTemplate, [{
          key: "extend",
          value: function extend(newValues, globalOpts) {
            return new QuickTemplate(extendTemplate(this, newValues, globalOpts));
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
              var _extendTemplate = extendTemplate(this, newValues, globalOpts);

              options = _extendTemplate.options;
              children = _extendTemplate.children;
              type = _extendTemplate.type;
            } else {
              options = this.options;
              children = this.children;
              type = this.type;
              options = extend.clone(options);
            }

            element = _QuickDom.create([type, options]);

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

      if (QuickTemplate.name == null) {
        QuickTemplate.name = 'QuickTemplate';
      }

      Object.defineProperty(QuickTemplate.prototype, 'child', {
        get: function get() {
          return this._childRefs || _getChildRefs2(this);
        }
      });
      ;
      var i, len, shortcut, shortcuts;
      shortcuts = ['link:a', 'anchor:a', 'a', 'text', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'footer', 'section', 'button', 'br', 'ul', 'ol', 'li', 'fieldset', 'input', 'textarea', 'select', 'option', 'form', 'frame', 'hr', 'iframe', 'img', 'picture', 'main', 'nav', 'meta', 'object', 'pre', 'style', 'table', 'tbody', 'th', 'tr', 'td', 'tfoot', // 'template'
      'video'];

      for (i = 0, len = shortcuts.length; i < len; i++) {
        shortcut = shortcuts[i];

        (function (shortcut) {
          var prop, split, type;
          prop = type = shortcut;

          if (helpers.includes(shortcut, ':')) {
            split = shortcut.split(':');
            prop = split[0];
            type = split[1];
          }

          return _QuickDom[prop] = function () {
            return _QuickDom.apply(void 0, [type].concat(Array.prototype.slice.call(arguments)));
          };
        })(shortcut);
      }

      ;
      _QuickDom.version = "1.0.91";
      _QuickDom.CSS = CSS;
      module.exports = _QuickDom;
      return module.exports;
    },
    1: function _(require, module, exports) {
      var _QuickCSS, constants, helpers;

      constants = require(13);
      helpers = require(14);

      _QuickCSS = function QuickCSS(targetEl, property, value, important) {
        var computedStyle, i, len, subEl, subProperty, subValue;

        if (helpers.isIterable(targetEl)) {
          for (i = 0, len = targetEl.length; i < len; i++) {
            subEl = targetEl[i];

            _QuickCSS(subEl, property, value);
          }
        } else if (_typeof(property) === 'object') {
          for (subProperty in property) {
            subValue = property[subProperty];

            _QuickCSS(targetEl, subProperty, subValue);
          }
        } else {
          property = helpers.normalizeProperty(property);

          if (typeof value === 'undefined') {
            computedStyle = targetEl._computedStyle || (targetEl._computedStyle = getComputedStyle(targetEl));
            return computedStyle[property];
          } else if (property) {
            targetEl.style.setProperty(property, helpers.normalizeValue(property, value), important ? constants.IMPORTANT : void 0);
          }
        }
      };

      _QuickCSS.animation = function (name, frames) {
        var frame, generated, prefix, rules;

        if (name && typeof name === 'string' && frames && _typeof(frames) === 'object') {
          prefix = helpers.getPrefix('animation');
          generated = '';

          for (frame in frames) {
            rules = frames[frame];
            generated += "".concat(frame, " {").concat(helpers.ruleToString(rules), "}");
          }

          generated = "@".concat(prefix, "keyframes ").concat(name, " {").concat(generated, "}");
          return helpers.inlineStyle(generated, true, 0);
        }
      };

      _QuickCSS.register = function (rule, level, important) {
        var className, ref, style;

        if (rule && _typeof(rule) === 'object') {
          level || (level = 0);
          rule = helpers.ruleToString(rule, important);

          if (!(className = (ref = helpers.inlineStyleConfig[level]) != null ? ref[rule] : void 0)) {
            className = helpers.hash(rule);
            style = ".".concat(className, " {").concat(rule, "}");
            helpers.inlineStyle(style, className, level);
          }

          return className;
        }
      };

      _QuickCSS.clearRegistered = function (level) {
        return helpers.clearInlineStyle(level || 0);
      };

      _QuickCSS.UNSET = function () {
        switch (false) {
          case !helpers.isValueSupported('display', 'unset'):
            return 'unset';

          case !helpers.isValueSupported('display', 'initial'):
            return 'initial';

          case !helpers.isValueSupported('display', 'inherit'):
            return 'inherit';
        }
      }();

      _QuickCSS.supports = helpers.isValueSupported;
      _QuickCSS.supportsProperty = helpers.isPropSupported;
      _QuickCSS.normalizeProperty = helpers.normalizeProperty;
      _QuickCSS.normalizeValue = helpers.normalizeValue;
      _QuickCSS.version = "1.3.4";
      module.exports = _QuickCSS;
      return module.exports;
    },
    2: function _(require, module, exports) {
      var exports, extend, modifiers, newBuilder, normalizeKeys;
      extend = require(16);

      normalizeKeys = function normalizeKeys(keys) {
        var i, key, len, output;

        if (keys) {
          output = {};

          if (_typeof(keys) !== 'object') {
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

          while (++$_i < $_len) {
            sources[$_i] = arguments[$_i];
          }

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
              } else if (transform && _typeof(transform) === 'object') {
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
              } else if (filter && _typeof(filter) === 'object') {
                _.options.filters = filter;
              }

              return _;
            };
          }
        }
      };
      module.exports = exports = newBuilder(true);
      exports.version = "1.7.3";
      return module.exports;
    },
    13: function _(require, module, exports) {
      exports.REGEX_LEN_VAL = /^\d+(?:[a-z]|\%)+$/i;
      exports.REGEX_DIGITS = /\d+$/;
      exports.REGEX_SPACE = /\s/;
      exports.REGEX_KEBAB = /([A-Z])+/g;
      exports.IMPORTANT = 'important';
      exports.POSSIBLE_PREFIXES = ['webkit', 'moz', 'ms', 'o'];
      exports.REQUIRES_UNIT_VALUE = ['background-position-x', 'background-position-y', 'block-size', 'border-width', 'columnRule-width', 'cx', 'cy', 'font-size', 'grid-column-gap', 'grid-row-gap', 'height', 'inline-size', 'line-height', 'minBlock-size', 'min-height', 'min-inline-size', 'min-width', 'max-height', 'max-width', 'outline-offset', 'outline-width', 'perspective', 'shape-margin', 'stroke-dashoffset', 'stroke-width', 'text-indent', 'width', 'word-spacing', 'top', 'bottom', 'left', 'right', 'x', 'y'];
      exports.QUAD_SHORTHANDS = ['margin', 'padding', 'border', 'border-radius'];
      exports.DIRECTIONS = ['top', 'bottom', 'left', 'right'];
      exports.QUAD_SHORTHANDS.forEach(function (property) {
        var direction, i, len, ref;
        exports.REQUIRES_UNIT_VALUE.push(property);
        ref = exports.DIRECTIONS;

        for (i = 0, len = ref.length; i < len; i++) {
          direction = ref[i];
          exports.REQUIRES_UNIT_VALUE.push(property + '-' + direction);
        }
      });
      return module.exports;
    },
    14: function _(require, module, exports) {
      var constants, helpers, sampleStyle, styleConfig;
      constants = require(13);
      sampleStyle = document.createElement('div').style;
      helpers = exports;

      helpers.includes = function (target, item) {
        return target && target.indexOf(item) !== -1;
      };

      helpers.isIterable = function (target) {
        return target && _typeof(target) === 'object' && typeof target.length === 'number' && !target.nodeType;
      };

      helpers.toKebabCase = function (string) {
        return string.replace(constants.REGEX_KEBAB, function (e, letter) {
          return "-".concat(letter.toLowerCase());
        });
      };

      helpers.isPropSupported = function (property) {
        return typeof sampleStyle[property] !== 'undefined';
      };

      helpers.isValueSupported = function (property, value) {
        if (window.CSS && window.CSS.supports) {
          return window.CSS.supports(property, value);
        } else {
          sampleStyle[property] = value;
          return sampleStyle[property] === '' + value;
        }
      };

      helpers.getPrefix = function (property, skipInitialCheck) {
        var j, len1, prefix, ref;

        if (skipInitialCheck || !helpers.isPropSupported(property)) {
          ref = constants.POSSIBLE_PREFIXES;

          for (j = 0, len1 = ref.length; j < len1; j++) {
            prefix = ref[j];

            if (helpers.isPropSupported("-".concat(prefix, "-").concat(property))) {
              return "-".concat(prefix, "-");
            }
          }
        }

        return '';
      };

      helpers.normalizeProperty = function (property) {
        property = helpers.toKebabCase(property);

        if (helpers.isPropSupported(property)) {
          return property;
        } else {
          return "".concat(helpers.getPrefix(property, true)).concat(property);
        }
      };

      helpers.normalizeValue = function (property, value) {
        if (helpers.includes(constants.REQUIRES_UNIT_VALUE, property) && value !== null) {
          value = '' + value;

          if (constants.REGEX_DIGITS.test(value) && !constants.REGEX_LEN_VAL.test(value) && !constants.REGEX_SPACE.test(value)) {
            value += property === 'line-height' ? 'em' : 'px';
          }
        }

        return value;
      };

      helpers.sort = function (array) {
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

          return helpers.sort(less).concat(pivot, helpers.sort(great));
        }
      };

      helpers.hash = function (string) {
        var hash, i, length;
        hash = 5381;
        i = -1;
        length = string.length;

        while (++i !== string.length) {
          hash = (hash << 5) - hash + string.charCodeAt(i);
          hash |= 0;
        }

        return '_' + (hash < 0 ? hash * -2 : hash);
      };

      helpers.ruleToString = function (rule, important) {
        var j, len1, output, prop, property, props, value;
        output = '';
        props = helpers.sort(Object.keys(rule));

        for (j = 0, len1 = props.length; j < len1; j++) {
          prop = props[j];

          if (typeof rule[prop] === 'string' || typeof rule[prop] === 'number') {
            property = helpers.normalizeProperty(prop);
            value = helpers.normalizeValue(property, rule[prop]);

            if (important) {
              value += " !important";
            }

            output += "".concat(property, ":").concat(value, ";");
          }
        }

        return output;
      };

      helpers.inlineStyleConfig = styleConfig = Object.create(null);

      helpers.inlineStyle = function (rule, valueToStore, level) {
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

      helpers.clearInlineStyle = function (level) {
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

      return module.exports;
    },
    16: function _(require, module, exports) {
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
      };

      module.exports = _extend = function extend(options, target, sources, parentKey) {
        var i, key, len, source, sourceValue, subTarget, targetValue;

        if (!target || _typeof(target) !== 'object' && typeof target !== 'function') {
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

      return module.exports;
    },
    18: function _(require, module, exports) {
      var Checks, availSets;
      availSets = {
        natives: require(31),
        dom: require(32)
      };

      Checks =
      /*#__PURE__*/
      function () {
        _createClass(Checks, [{
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
          _classCallCheck(this, Checks);

          var i, len, set;

          if (sets == null) {
            sets = ['natives'];
          }

          for (i = 0, len = sets.length; i < len; i++) {
            set = sets[i];

            if (availSets[set]) {
              this.load(availSets[set]);
            }
          }
        }

        _createClass(Checks, [{
          key: "load",
          value: function load(set) {
            var key, value;

            if (availSets.natives.string(set)) {
              set = availSets[set];
            }

            if (!availSets.natives.objectPlain(set)) {
              return;
            }

            for (key in set) {
              value = set[key];
              this[key] = value;
            }
          }
        }]);

        return Checks;
      }();

      module.exports = Checks.prototype.create();
      return module.exports;
    },
    31: function _(require, module, exports) {
      var exports;
      module.exports = exports = {
        defined: function defined(subject) {
          return subject !== void 0;
        },
        array: function array(subject) {
          return subject instanceof Array;
        },
        object: function object(subject) {
          return _typeof(subject) === 'object' && subject;
        },
        objectPlain: function objectPlain(subject) {
          return exports.object(subject) && Object.prototype.toString.call(subject) === '[object Object]' && subject.constructor === Object;
        },
        string: function string(subject) {
          return typeof subject === 'string';
        },
        number: function number(subject) {
          return typeof subject === 'number' && !isNaN(subject);
        },
        numberLoose: function numberLoose(subject) {
          return exports.number(subject) || exports.string(subject) && exports.number(Number(subject));
        },
        function: function _function(subject) {
          return typeof subject === 'function';
        },
        iterable: function iterable(subject) {
          return exports.object(subject) && exports.number(subject.length);
        }
      };
      return module.exports;
    },
    32: function _(require, module, exports) {
      var exports;
      module.exports = exports = {
        domDoc: function domDoc(subject) {
          return subject && subject.nodeType === 9;
        },
        domEl: function domEl(subject) {
          return subject && subject.nodeType === 1;
        },
        domText: function domText(subject) {
          return subject && subject.nodeType === 3;
        },
        domNode: function domNode(subject) {
          return exports.domEl(subject) || exports.domText(subject);
        },
        domTextarea: function domTextarea(subject) {
          return subject && subject.nodeName === 'TEXTAREA';
        },
        domInput: function domInput(subject) {
          return subject && subject.nodeName === 'INPUT';
        },
        domSelect: function domSelect(subject) {
          return subject && subject.nodeName === 'SELECT';
        },
        domField: function domField(subject) {
          return exports.domInput(subject) || exports.domTextarea(subject) || exports.domSelect(subject);
        }
      };
      return module.exports;
    },
    33: function _(require, module, exports) {
      var StateChain;

      module.exports = StateChain =
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
      }();

      return module.exports;
    }
  }, this);

  if (typeof define === 'function' && define.umd) {
    define(function () {
      return require(0);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    module.exports = require(0);
  } else {
    return this['quickdom'] = require(0);
  }
}).call(this, null, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : this);
