var slice = [].slice;

(function(_this) {
  return (function() {
    var _s$m;
    _s$m = function(m, c, l, _s$m) {
      _s$m = function(r) {
        if (l[r]) {
          return c[r];
        } else {
          return (l[r]=1,c[r]={},c[r]=m[r](c[r]));
        }
      };
      m[1] = function(exports){
			var module = {exports:exports};
			(function(){var l,m,n,k,e,f,h,p;k=["webkit","moz","ms","o"];f="backgroundPositionX backgroundPositionY blockSize borderWidth columnRuleWidth cx cy fontSize gridColumnGap gridRowGap height inlineSize lineHeight minBlockSize minHeight minInlineSize minWidth maxHeight maxWidth outlineOffset outlineWidth perspective shapeMargin strokeDashoffset strokeWidth textIndent width wordSpacing top bottom left right x y".split(" ");["margin","padding","border","borderRadius"].forEach(function(a){var b,c,d,e,g;
			f.push(a);e=["Top","Bottom","Left","Right"];g=[];c=0;for(d=e.length;c<d;c++)b=e[c],g.push(f.push(a+b));return g});p=document.createElement("div").style;l=/^\d+(?:[a-z]|\%)+$/i;m=/\d+$/;n=/\s/;h={includes:function(a,b){return a&&-1!==a.indexOf(b)},isIterable:function(a){return a&&"object"===typeof a&&"number"===typeof a.length&&!a.nodeType},isPropSupported:function(a){return"undefined"!==typeof p[a]},toTitleCase:function(a){return a[0].toUpperCase()+a.slice(1)},normalizeProperty:function(a){var b,
			c,d;if(this.isPropSupported(a))return a;d=this.toTitleCase(a);a=0;for(b=k.length;a<b;a++)if(c=k[a],c=""+c+d,this.isPropSupported(c))return c},normalizeValue:function(a,b){this.includes(f,a)&&null!==b&&(b=""+b,!m.test(b)||l.test(b)||n.test(b)||(b+="px"));return b}};e=function(a,b,c){var d,f,g;if(h.isIterable(a))for(d=0,f=a.length;d<f;d++)g=a[d],e(g,b,c);else if("object"===typeof b)for(d in b)c=b[d],e(a,d,c);else{b=h.normalizeProperty(b);if("undefined"===typeof c)return getComputedStyle(a)[b];b&&(a.style[b]=
			h.normalizeValue(b,c))}};e.version="1.0.5";return null!=("undefined"!==typeof module&&null!==module?module.exports:void 0)?module.exports=e:"function"===typeof define&&define.amd?define(["quickdom"],function(){return e}):this.Css=e})();
			
			return module.exports;
		};
      m[2] = function(exports){
			var module = {exports:exports};
			(function(t){return function(){var l=function(g,m,l,r){r=function(h){return l[h]?m[h]:(l[h]=1,m[h]={},m[h]=g[h](m[h]))};g[1]=function(h){var g=r(2);var c=function(a){var k;var b={};for(k in a){var d=a[k];b[k]=d}return b};var p=function(a){var b;if(a){var c={};if("object"!==typeof a)c[a]=!0;else{Array.isArray(a)||(a=Object.keys(a));var d=0;for(b=a.length;d<b;d++){var e=a[d];c[e]=!0}}return c}};var e=function(a){var k=a.target?function(){for(var a=arguments.length,b=-1,c=Array(a);++b<a;)c[b]=arguments[b];
			return g(k.options,k.options.target,c)}:function(a){for(var b=arguments.length,c=0,e=Array(b);++c<b;)e[c]=arguments[c];return g(k.options,a,e)};k.options=a;Object.defineProperties(k,b);return k};var b={deep:{get:function(){var a=c(this.options);a.deep=!0;return e(a)}},own:{get:function(){var a=c(this.options);a.own=!0;return e(a)}},allowNull:{get:function(){var a=c(this.options);a.allowNull=!0;return e(a)}},nullDeletes:{get:function(){var a=c(this.options);a.nullDeletes=!0;return e(a)}},concat:{get:function(){var a=
			c(this.options);a.concat=!0;return e(a)}},clone:{get:function(){var a=c(this.options);a.target={};return e(a)}},notDeep:{get:function(){var a=c(this.options);return function(b){a.notDeep=p(b);return e(a)}}},deepOnly:{get:function(){var a=c(this.options);return function(b){a.deepOnly=p(b);return e(a)}}},keys:{get:function(){var a=c(this.options);return function(b){a.keys=p(b);return e(a)}}},notKeys:{get:function(){var a=c(this.options);return function(b){a.notKeys=p(b);return e(a)}}},transform:{get:function(){var a=
			c(this.options);return function(b){"function"===typeof b?a.globalTransform=b:b&&"object"===typeof b&&(a.transforms=b);return e(a)}}},filter:{get:function(){var a=c(this.options);return function(b){"function"===typeof b?a.globalFilter=b:b&&"object"===typeof b&&(a.filters=b);return e(a)}}}};return h=e({})};g[2]=function(h){var g;var c=function(b){return Array.isArray(b)};var p=function(b){return b&&"[object Object]"===Object.prototype.toString.call(b)||c(b)};var e=function(b,a,c){if(b.deep)return b.notDeep?
			!b.notDeep[a]:!0;if(b.deepOnly)return b.deepOnly[a]||c&&e(b,c)};return h=g=function(b,a,k,h){var d,l;if(!a||"object"!==typeof a&&"function"!==typeof a)a={};var m=0;for(l=k.length;m<l;m++){var n=k[m];if(null!=n)for(d in n){var f=n[d];var q=a[d];if(!(f===a||void 0===f||null===f&&!b.allowNull&&!b.nullDeletes||b.keys&&!b.keys[d]||b.notKeys&&b.notKeys[d]||b.own&&!n.hasOwnProperty(d)||b.globalFilter&&!b.globalFilter(f,d,n)||b.filters&&b.filters[d]&&!b.filters[d](f,d,n)))if(null===f&&b.nullDeletes)delete a[d];
			else switch(b.globalTransform&&(f=b.globalTransform(f,d,n)),b.transforms&&b.transforms[d]&&(f=b.transforms[d](f,d,n)),!1){case !(b.concat&&c(f)&&c(q)):a[d]=q.concat(f);break;case !(e(b,d,h)&&p(f)):q=p(q)?q:c(f)?[]:{};a[d]=g(b,q,[f],d);break;default:a[d]=f}}}return a}};return r};l=l({},{},{});return function(){var g=l(1);null!=("undefined"!==typeof module&&null!==module?module.exports:void 0)?module.exports=g:"function"===typeof define&&define.amd?define(["smart-extend"],function(){return g}):window.extend=
			g}()}})(this)();
			
			return module.exports;
		};
      m[22] = function(exports) {
        var module = {exports:exports};
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
        return module.exports;
      };
      return _s$m;
    };
    _s$m = _s$m({}, {}, {});
    return (function() {
      var CSS, IS, MediaQuery, QuickBatch, QuickDom, QuickElement, QuickTemplate, QuickWindow, _getChildRefs, _getIndexByProp, _getParents, allowedOptions, allowedTemplateOptions, aspectRatioGetter, baseStateTriggers, configSchema, extend, extendByRef, extendTemplate, fn, helpers, i, len, orientationGetter, parseErrorPrefix, parseTree, pholderRegex, regexWhitespace, ruleDelimiter, shortcut, shortcuts, svgNamespace;
      svgNamespace = 'http://www.w3.org/2000/svg';

      /* istanbul ignore next */
      CSS = _s$m(1);

      /* istanbul ignore next */
      extend = _s$m(2);
      allowedTemplateOptions = ['id', 'name', 'type', 'href', 'selected', 'checked', 'className'];
      allowedOptions = ['id', 'ref', 'type', 'name', 'text', 'style', 'class', 'className', 'url', 'href', 'selected', 'checked', 'props', 'attrs', 'passStateToChildren', 'stateTriggers'];
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

      /* istanbul ignore next */
      IS = _s$m(22);
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
          return subject && subject.constructor.name === 'QuickElement';
        },
        template: function(subject) {
          return subject && subject.constructor.name === 'QuickTemplate';
        },
        batch: function(subject) {
          return subject && subject.constructor.name === 'QuickBatch';
        }
      });
      QuickElement = (function() {
        function QuickElement(type1, options1) {
          this.type = type1;
          this.options = options1;
          this.el = this.options.existing || (this.type === 'text' ? document.createTextNode(this.options.text) : this.type[0] === '*' ? document.createElementNS(svgNamespace, this.type.slice(1)) : document.createElement(this.type));
          if (this.type === 'text') {
            this.append = this.prepend = this.attr = function() {};
          }
          this._parent = null;
          this._state = [];
          this._children = [];
          this._insertedCallbacks = [];
          this._eventCallbacks = {
            __refs: {}
          };
          this._normalizeOptions();
          this._applyOptions();
          this._attachStateEvents();
          this._proxyParent();
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
      Object.defineProperties(QuickElement.prototype, {
        'children': {
          get: function() {
            var child, i, len, ref1;
            if (this.el.childNodes.length !== this._children.length) {
              this._children.length = 0;
              ref1 = this.el.childNodes;
              for (i = 0, len = ref1.length; i < len; i++) {
                child = ref1[i];
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
        var base, base1, base2, base3;
        if ((base = this.options).style == null) {
          base.style = {};
        }
        this.options.styleShared = {};
        if (this.options["class"]) {
          this.options.className = this.options["class"];
        }
        if (this.options.url) {
          this.options.href = this.options.url;
        }
        if ((base1 = this.options).relatedInstance == null) {
          base1.relatedInstance = this;
        }
        if ((base2 = this.options).unpassableStates == null) {
          base2.unpassableStates = [];
        }
        if ((base3 = this.options).passStateToChildren == null) {
          base3.passStateToChildren = true;
        }
        this.options.stateTriggers = this.options.stateTriggers ? extend.clone.deep(baseStateTriggers, this.options.stateTriggers) : baseStateTriggers;
        this._normalizeStyle();
      };
      QuickElement.prototype._normalizeStyle = function() {
        var checkInnerStates, i, keys, len, nonStateProps, specialStates, state, states;
        keys = Object.keys(this.options.style);
        states = keys.filter(function(key) {
          return helpers.isStateStyle(key);
        });
        specialStates = helpers.removeItem(states.slice(), '$base');
        this._mediaStates = states.filter(function(key) {
          return key[0] === '@';
        });
        this._providedStates = states.map(function(state) {
          return state.slice(1);
        });
        if (!helpers.includes(states, '$base') && keys.length) {
          this.options = extend.clone(this.options);
          if (states.length) {
            nonStateProps = keys.filter(function(property) {
              return !helpers.isStateStyle(property);
            });
            this.options.style.$base = extend.clone.keys(nonStateProps)(this.options.style);
          } else {
            this.options.style = {
              $base: this.options.style
            };
          }
        }
        checkInnerStates = (function(_this) {
          return function(styleObject, parentStates) {
            var i, innerState, innerStates, len, stateChain, stateChainString;
            innerStates = Object.keys(styleObject).filter(function(key) {
              return helpers.isStateStyle(key);
            });
            if (innerStates.length) {
              _this.hasSharedStateStyle = true;
              if (_this._stateShared == null) {
                _this._stateShared = [];
              }
              for (i = 0, len = innerStates.length; i < len; i++) {
                innerState = innerStates[i];
                stateChain = parentStates.concat(innerState.slice(1));
                stateChainString = stateChain.join('+');
                _this.options.styleShared[stateChainString] = _this.options.style['$' + stateChainString] = styleObject[innerState];
                checkInnerStates(styleObject[innerState], stateChain);
                delete styleObject[innerState];
              }
            }
          };
        })(this);
        for (i = 0, len = specialStates.length; i < len; i++) {
          state = specialStates[i];
          checkInnerStates(this.options.style[state], [state.slice(1)]);
        }
      };
      QuickElement.prototype._applyOptions = function() {
        var key, ref, ref1, ref2, value;
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
          this.style(this.options.style.$base);
        }
        this.onInserted((function(_this) {
          return function() {
            var _, mediaStates;
            if (_this.options.styleAfterInsert) {
              _this.style(extend.clone.apply(extend, [_this.options.style.$base].concat(slice.call(_this._getStateStyles(_this._getActiveStates())))));
            }
            _ = _this._inserted = _this;
            mediaStates = _this._mediaStates;
            if (mediaStates.length) {
              return _this._mediaStates = new function() {
                var i, len, queryString;
                for (i = 0, len = mediaStates.length; i < len; i++) {
                  queryString = mediaStates[i];
                  queryString = queryString.slice(1);
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
      };
      QuickElement.prototype._attachStateEvents = function() {
        var fn, ref1, state, trigger;
        ref1 = this.options.stateTriggers;
        fn = (function(_this) {
          return function(state, trigger) {
            var disabler, enabler;
            enabler = IS.string(trigger) ? trigger : trigger.on;
            if (IS.object(trigger)) {
              disabler = trigger.off;
            }
            _this._listenTo(enabler, function() {
              return _this.state(state, true);
            });
            if (disabler) {
              return _this._listenTo(disabler, function() {
                return _this.state(state, false);
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
      regexWhitespace = /\s+/;
      QuickElement.prototype.on = function(eventNames, callback) {
        var callbackRef, split;
        if (IS.string(eventNames) && IS["function"](callback)) {
          split = eventNames.split('.');
          callbackRef = split[1];
          eventNames = split[0];
          eventNames.split(regexWhitespace).forEach((function(_this) {
            return function(eventName) {
              if (!_this._eventCallbacks[eventName]) {
                _this._eventCallbacks[eventName] = [];
                _this._listenTo(eventName, function(event) {
                  var callbacks, cb, i, len;
                  callbacks = _this._eventCallbacks[eventName].slice();
                  for (i = 0, len = callbacks.length; i < len; i++) {
                    cb = callbacks[i];
                    cb.call(_this.el, event);
                  }
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

      /* istanbul ignore next */
      QuickElement.prototype._listenTo = function(eventName, callback) {
        var eventNameToListenFor, listenMethod;
        listenMethod = this.el.addEventListener ? 'addEventListener' : 'attachEvent';
        eventNameToListenFor = this.el.addEventListener ? eventName : "on" + eventName;
        this.el[listenMethod](eventNameToListenFor, callback);
        return this;
      };
      QuickElement.prototype.updateOptions = function(options) {
        if (IS.object(options)) {
          this.options = options;
          this._normalizeOptions();
          this._applyOptions(this.options);
        }
        return this;
      };
      QuickElement.prototype.state = function(targetState, value, bubbles, source) {
        var activeStateStyles, activeStates, child, desiredValue, i, inferiorStateChains, isApplicable, j, len, len1, ref1, sharedStyles, split, stateChain, stylesToKeep, stylesToRemove, superiorStateStyles, superiorStates, targetStateIndex, targetStyle;
        if (arguments.length === 1) {
          return helpers.includes(this._state, targetState);
        } else if (this._statePipeTarget && source !== this) {
          this._statePipeTarget.state(targetState, value, bubbles, this);
          return this;
        } else if (IS.string(targetState)) {
          if (targetState[0] === '$') {
            targetState = targetState.slice(1);
          }
          desiredValue = !!value;
          if (targetState === 'base') {
            return this;
          }
          activeStates = this._getActiveStates(targetState, false);
          activeStateStyles = this._getStateStyles(activeStates);
          if (this.state(targetState) !== desiredValue) {
            targetStyle = this.options.style['$' + targetState] || this.options.style['@' + targetState];
            if (targetStyle) {
              targetStateIndex = this._providedStates.indexOf(targetState);
              superiorStates = activeStates.filter((function(_this) {
                return function(state) {
                  return _this._providedStates.indexOf(state) > targetStateIndex;
                };
              })(this));
              superiorStateStyles = this._getStateStyles(superiorStates);
            }
            if (desiredValue) {
              this._state.push(targetState);
              if (targetStyle) {
                this.style(extend.clone.keys(targetStyle).apply(null, [targetStyle].concat(slice.call(superiorStateStyles))));
              }
            } else {
              helpers.removeItem(this._state, targetState);
              if (targetStyle) {
                stylesToKeep = extend.clone.keys(targetStyle).apply(null, [this.options.style.$base].concat(slice.call(activeStateStyles)));
                stylesToRemove = extend.transform(function() {
                  return null;
                }).clone(targetStyle);
                this.style(extend(stylesToRemove, stylesToKeep));
              }
            }
          }
          if (this.hasSharedStateStyle) {
            sharedStyles = Object.keys(this.options.styleShared);
            sharedStyles = sharedStyles.filter(function(stateChain) {
              return helpers.includes(stateChain, targetState);
            });
            for (i = 0, len = sharedStyles.length; i < len; i++) {
              stateChain = sharedStyles[i];
              split = stateChain.split('+');
              isApplicable = split.length === split.filter((function(_this) {
                return function(state) {
                  return state === targetState || _this.state(state);
                };
              })(this)).length;
              if (isApplicable) {
                targetStyle = this.options.styleShared[stateChain];
                if (desiredValue) {
                  if (!helpers.includes(this._stateShared, stateChain)) {
                    this._stateShared.push(stateChain);
                  }
                  inferiorStateChains = this.options.styleShared[helpers.removeItem(split, targetState).join('+')];
                  this.style(extend.clone(inferiorStateChains, targetStyle));
                } else {
                  helpers.removeItem(this._stateShared, stateChain);
                  stylesToKeep = extend.clone.keys(targetStyle).apply(null, [this.options.style.$base].concat(slice.call(activeStateStyles)));
                  stylesToRemove = extend.transform(function() {
                    return null;
                  }).clone(targetStyle);
                  this.style(extend(stylesToRemove, stylesToKeep));
                }
              }
            }
          }
          if (!helpers.includes(this.options.unpassableStates, targetState)) {
            if (bubbles) {
              this.parent.state(targetState, value, true, source || this);
            } else if (this.options.passStateToChildren) {
              ref1 = this._children;
              for (j = 0, len1 = ref1.length; j < len1; j++) {
                child = ref1[j];
                child.state(targetState, value, false, source || this);
              }
            }
          }
          return this;
        }
      };
      QuickElement.prototype.resetState = function() {
        var activeState, i, len, ref1;
        ref1 = this._state.slice();
        for (i = 0, len = ref1.length; i < len; i++) {
          activeState = ref1[i];
          this.state(activeState, false);
        }
        return this;
      };
      QuickElement.prototype.pipeState = function(targetEl) {
        var activeState, i, len, ref1;
        if (targetEl) {
          targetEl = helpers.normalizeGivenEl(targetEl);
          if (IS.quickDomEl(targetEl) && targetEl !== this) {
            this._statePipeTarget = targetEl;
            ref1 = this._state;
            for (i = 0, len = ref1.length; i < len; i++) {
              activeState = ref1[i];
              targetEl.state(activeState, true);
            }
          }
        } else if (targetEl === false) {
          delete this._statePipeTarget;
        }
        return this;
      };

      /**
      		 * Sets/gets the value of a style property. In getter mode the computed property of
      		 * the style will be returned unless the element is not inserted into the DOM. In
      		 * webkit browsers all computed properties of a detached node are always an empty
      		 * string but in gecko they reflect on the actual computed value, hence we need
      		 * to "normalize" this behavior and make sure that even on gecko an empty string
      		 * is returned
      		 * @return {[type]} [description]
       */
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
        var args, computedResult;
        if (this.type === 'text') {
          return;
        }
        args = arguments;
        computedResult = this.style(property);
        if (IS.string(computedResult)) {
          if (skipComputed) {
            computedResult = 0;
          }
          return computedResult || this.el.style[args[0]] || this.options.style.$base[args[0]] || '';
        }
        return this;
      };
      QuickElement.prototype.styleParsed = function(property) {
        return parseFloat(this.styleSafe(property));
      };
      QuickElement.prototype.recalcStyle = function() {
        var activeStateStyles, targetStyles;
        activeStateStyles = this._getStateStyles(this._getActiveStates());
        targetStyles = extend.clone.filter(function(value) {
          return typeof value === 'function';
        }).apply(null, [this.options.style.$base].concat(slice.call(activeStateStyles)));
        return this.style(targetStyles);
      };
      QuickElement.prototype._getActiveStates = function(stateToExclude, includeSharedStates) {
        var plainStates;
        if (includeSharedStates == null) {
          includeSharedStates = true;
        }
        plainStates = this._providedStates.filter((function(_this) {
          return function(state) {
            return helpers.includes(_this._state, state) && state !== stateToExclude;
          };
        })(this));
        if (!includeSharedStates || !this.hasSharedStateStyle) {
          return plainStates;
        } else {
          return plainStates.concat(this._stateShared);
        }
      };
      QuickElement.prototype._getStateStyles = function(states) {
        return states.map((function(_this) {
          return function(state) {
            return _this.options.style['$' + state] || _this.options.style['@' + state];
          };
        })(this));
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
      QuickElement.prototype.toTemplate = function() {
        return QuickDom.template(this);
      };
      QuickElement.prototype.clone = function() {
        var activeState, callback, callbacks, child, elClone, eventName, i, j, k, len, len1, len2, newEl, options, ref1, ref2, ref3;
        elClone = this.el.cloneNode(false);
        options = extend.clone(this.options, {
          existing: elClone
        });
        newEl = new QuickElement(this.type, options);
        ref1 = this._state;
        for (i = 0, len = ref1.length; i < len; i++) {
          activeState = ref1[i];
          newEl.state(activeState, true);
        }
        ref2 = this.children;
        for (j = 0, len1 = ref2.length; j < len1; j++) {
          child = ref2[j];
          newEl.append(child.clone());
        }
        ref3 = this._eventCallbacks;
        for (eventName in ref3) {
          callbacks = ref3[eventName];
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
        var ref1;
        if ((ref1 = this.parent) != null) {
          ref1._removeChild(this);
        }
        return this;
      };
      QuickElement.prototype.remove = function() {
        var eventName;
        this.detach();
        this.resetState();
        for (eventName in this._eventCallbacks) {
          this._eventCallbacks[eventName].length = 0;
        }
        return this;
      };
      QuickElement.prototype.empty = function() {
        var child, i, len, ref1;
        ref1 = this.children.slice();
        for (i = 0, len = ref1.length; i < len; i++) {
          child = ref1[i];
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
        var ref1;
        if (targetEl) {
          targetEl = helpers.normalizeGivenEl(targetEl);
          if (IS.quickDomEl(targetEl) && targetEl !== this) {
            targetEl.detach();
            if ((ref1 = this.parent) != null) {
              ref1._removeChild(this, targetEl);
            }
            targetEl._refreshParent();
          }
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
        }
      });
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
          var currentValue, i, len, passed, ref1, rule;
          passed = true;
          ref1 = query.rules;
          for (i = 0, len = ref1.length; i < len; i++) {
            rule = ref1[i];
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
      QuickDom = function() {
        var args, child, children, element, i, len, options, type;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
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
            children = args.slice(2);
            element = new QuickElement(type, options);
            for (i = 0, len = children.length; i < len; i++) {
              child = children[i];
              if (IS.string(child)) {
                child = QuickDom.text(child);
              }
              if (IS.template(child)) {
                child = QuickDom(child);
              }
              if (IS.array(child)) {
                child = QuickDom.apply(null, child);
              }
              if (IS.quickDomEl(child)) {
                child.appendTo(element);
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
      if (QuickBatch.name == null) {
        QuickBatch.name = 'QuickBatch';
      }
      Object.keys(QuickElement.prototype).concat('css', 'replaceWith', 'html', 'text').forEach(function(method) {
        return QuickBatch.prototype[method] = function(newValue) {
          var element, results;
          results = this.lastResults = (function() {
            var i, len, ref1, results1;
            ref1 = this.elements;
            results1 = [];
            for (i = 0, len = ref1.length; i < len; i++) {
              element = ref1[i];
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
              newChildProcessed = currentChild ? currentChild.extend(newChildProcessed, globalOpts) : new QuickTemplate(extend.deep.clone(configSchema, newChildProcessed));
            }
            output.children.push(newChildProcessed);
          }
        } else if (IS.object(newChildren)) {
          output.children = extendByRef(newChildren, currentChildren, globalOpts);
          remainingNewChildren = newChildren;
          for (ref in remainingNewChildren) {
            newChild = remainingNewChildren[ref];
            newChildProcessed = IS.objectPlain(newChildProcessed) ? newChild : parseTree(newChild);
            output.children.push(new QuickTemplate(extend.deep.clone(configSchema, newChildProcessed)));
            delete remainingNewChildren[ref];
          }
        }
        return output;
      };
      extendByRef = function(newChildrenRefs, currentChildren, globalOpts) {
        var currentChild, i, len, newChild, newChildProcessed, output, theNewChildren;
        if (!currentChildren.length) {
          return currentChildren;
        } else {
          output = [];
          for (i = 0, len = currentChildren.length; i < len; i++) {
            currentChild = currentChildren[i];
            if (newChild = newChildrenRefs[currentChild.ref]) {
              newChildProcessed = currentChild.extend(newChild, globalOpts);
              delete newChildrenRefs[currentChild.ref];
            } else {
              newChildProcessed = globalOpts ? currentChild.extend(null, globalOpts) : currentChild;
            }
            newChildProcessed._config.children = theNewChildren = extendByRef(newChildrenRefs, newChildProcessed.children);
            output.push(newChildProcessed);
          }
          return output;
        }
      };
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
              output.options = tree[1] ? extend.deep.clone(tree[1]) : null;
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
              children: configSchema.children
            };
          case !IS.domEl(tree):
            return {
              type: tree.nodeName.toLowerCase(),
              ref: tree.id,
              options: extend.clone.keys(allowedTemplateOptions)(tree),
              children: configSchema.children.map.call(tree.childNodes, QuickDom.template)
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
      pholderRegex = /\{\{.+?\}\}/g;
      configSchema = {
        type: 'div',
        ref: void 0,
        options: {},
        children: []
      };
      QuickTemplate = (function() {
        function QuickTemplate(config, isTree) {
          this._config = isTree ? parseTree(config) : config;
        }

        QuickTemplate.prototype.spawn = function(newValues, globalOpts) {
          var opts;
          if (newValues || globalOpts) {
            opts = extendTemplate(this._config, newValues, globalOpts);
          } else {
            opts = extend.clone(this._config);
            opts.options = extend.deepOnly('style').clone(opts.options);
          }
          return QuickDom.apply(null, [opts.type, opts.options].concat(slice.call(opts.children)));
        };

        QuickTemplate.prototype.extend = function(newValues, globalOpts) {
          return new QuickTemplate(extendTemplate(this._config, newValues, globalOpts));
        };

        return QuickTemplate;

      })();
      if (QuickTemplate.name == null) {
        QuickTemplate.name = 'QuickTemplate';
      }
      Object.keys(configSchema).forEach(function(key) {
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
      QuickDom.version = '1.0.32';

      /* istanbul ignore next */
      if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
        return module.exports = QuickDom;
      } else if (typeof define === 'function' && define.amd) {
        return define(['quickdom'], function() {
          return QuickDom;
        });
      } else {
        return this.Dom = QuickDom;
      }
    })();
  });
})(this)();
