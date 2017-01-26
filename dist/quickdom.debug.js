var slice = [].slice;

(function() {
  var CSS, IS, QuickBatch, QuickDom, QuickElement, QuickTemplate, QuickTemplateProto, _sim_2d2e1, _sim_2f1c4, allowedTemplateOptions, extend, fn, helpers, i, len, parseTree, pholderRegex, shortcut, shortcuts, throwParseError;
  allowedTemplateOptions = ['className', 'href', 'selected', 'type', 'name', 'id', 'checked'];
  helpers = {};
  helpers.includes = function(target, item) {
    return target && target.indexOf(item) !== -1;
  };
  helpers.removeItem = function(target, item) {
    var itemIndex;
    itemIndex = target.indexOf(item);
    if (itemIndex !== -1) {
      return target.splice(itemIndex, 1);
    }
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
  IS = {
    defined: function(subject) {
      return subject !== void 0;
    },
    array: function(subject) {
      return subject instanceof Array;
    },
    object: function(subject) {
      return typeof subject === 'object' && subject;
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
      return subject instanceof QuickElement;
    },
    template: function(subject) {
      return subject instanceof QuickTemplate;
    }
  };
  QuickElement = function(type1, options1) {
    this.type = type1;
    this.options = options1;
    this.el = this.options.existing || (this.type === 'text' ? document.createTextNode(this.options.text) : document.createElement(this.type));
    this._parent = null;
    this._state = [];
    this._children = [];
    this._eventCallbacks = {};
    this._normalizeOptions();
    this._applyOptions();
    this._attachStateEvents();
    return this.el._quickElement = this;
  };
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
    },
    'children': {
      get: function() {
        var child, i, len, ref;
        if (this.el.childNodes.length !== this._children.length) {
          this._children.length = 0;
          ref = this.el.childNodes;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            this._children.push(QuickDom(child));
          }
        }
        return this._children;
      }
    },
    'parent': {
      get: function() {
        if (!this._parent || this._parent.el !== this.el.parentNode) {
          this._parent = QuickDom(this.el.parentNode);
        }
        return this._parent;
      }
    },
    'parents': {
      get: function() {
        var nextParent, parents;
        parents = [];
        nextParent = this.parent;
        while (nextParent) {
          parents.push(nextParent);
          nextParent = nextParent.parent;
        }
        return parents;
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
    }
  });
  QuickElement.prototype._normalizeOptions = function() {
    var base, base1, base2;
    if ((base = this.options).style == null) {
      base.style = {};
    }
    if (this.options["class"]) {
      this.options.className = this.options["class"];
    }
    if (this.options.url) {
      this.options.href = this.options.url;
    }
    if ((base1 = this.options).relatedInstance == null) {
      base1.relatedInstance = this;
    }
    if ((base2 = this.options).passStateToChildren == null) {
      base2.passStateToChildren = true;
    }
    this.options.stateTriggers = extend.deep({
      'hover': {
        on: 'mouseenter',
        off: 'mouseleave'
      },
      'focus': {
        on: 'focus',
        off: 'blur'
      }
    }, this.options.stateTriggers);
    this._normalizeStyle();
    return this;
  };
  QuickElement.prototype._normalizeStyle = function() {
    var keys, nonStateProps, states;
    keys = Object.keys(this.options.style);
    states = keys.filter(function(key) {
      return key[0] === '$';
    });
    this.providedStates = states.map(function(state) {
      return state.slice(1);
    });
    if (!helpers.includes(states, '$base') && keys.length) {
      if (states.length) {
        nonStateProps = keys.filter(function(property) {
          return property[0] !== '$';
        });
        this.options.style.$base = extend.clone.keys(nonStateProps)(this.options.style);
      } else {
        this.options.style = {
          $base: this.options.style
        };
      }
    }
    return this;
  };
  QuickElement.prototype._applyOptions = function() {
    var key, ref, ref1, value;
    if (this.options.id) {
      this.el.id = this.options.id;
    }
    if (this.options.className) {
      this.el.className = this.options.className;
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
      ref = this.options.props;
      for (key in ref) {
        value = ref[key];
        this.prop(key, value);
      }
    }
    if (this.options.attrs) {
      ref1 = this.options.attrs;
      for (key in ref1) {
        value = ref1[key];
        this.attr(key, value);
      }
    }
    this.style(this.options.style.$base);
    return this;
  };
  QuickElement.prototype._attachStateEvents = function() {
    var fn, ref, state, trigger;
    ref = this.options.stateTriggers;
    fn = (function(_this) {
      return function(state, trigger) {
        var disabler, enabler;
        enabler = IS.string(trigger) ? trigger : trigger.on;
        if (IS.object(trigger)) {
          disabler = trigger.off;
        }
        _this._listenTo(enabler, function() {
          return _this.setState(state, true);
        });
        if (disabler) {
          return _this._listenTo(disabler, function() {
            return _this.setState(state, false);
          });
        }
      };
    })(this);
    for (state in ref) {
      trigger = ref[state];
      fn(state, trigger);
    }
    return this;
  };

  /* istanbul ignore next */
  QuickElement.prototype._listenTo = function(eventName, callback) {
    var eventNameToListenFor, listenMethod;
    listenMethod = this.el.addEventListener ? 'addEventListener' : 'attachEvent';
    eventNameToListenFor = this.el.addEventListener ? eventName : "on" + eventName;
    this.el[listenMethod](eventNameToListenFor, callback);
    return this;
  };
  QuickElement.prototype.on = function(eventName, callback) {
    if (IS.string(eventName) && IS["function"](callback)) {
      if (!this._eventCallbacks[eventName]) {
        this._eventCallbacks[eventName] = [];
        this._listenTo(eventName, (function(_this) {
          return function(event) {
            var i, len, ref;
            ref = _this._eventCallbacks[eventName];
            for (i = 0, len = ref.length; i < len; i++) {
              callback = ref[i];
              callback.call(_this.el, event);
            }
          };
        })(this));
      }
      this._eventCallbacks[eventName].push(callback);
    }
    return this;
  };
  QuickElement.prototype.off = function(eventName, callback) {
    if (!IS.string(eventName)) {
      for (eventName in this._eventCallbacks) {
        this.off(eventName);
      }
    } else if (this._eventCallbacks[eventName]) {
      if (IS["function"](callback)) {
        helpers.removeItem(this._eventCallbacks[eventName], callback);
      } else {
        this._eventCallbacks[eventName].length = 0;
      }
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
  QuickElement.prototype.updateOptions = function(options) {
    if (IS.object(options)) {
      this.options = options;
      this._normalizeOptions();
      this._applyOptions(this.options);
    }
    return this;
  };
  QuickElement.prototype.getState = function(targetState) {
    return helpers.includes(this._state, targetState);
  };
  QuickElement.prototype.setState = function(targetState, value) {
    var activeStateStyles, activeStates, child, desiredValue, i, len, ref, stateStyle, stylesToKeep, stylesToRemove, superiorStateStyles, superiorStates, targetStateIndex;
    if (value == null) {
      value = true;
    }
    if (IS.string(targetState)) {
      if (targetState[0] === '$') {
        targetState = targetState.slice(1);
      }
      desiredValue = !!value;
      if (targetState === 'base') {
        return this;
      }
      if (this.getState(targetState) !== desiredValue) {
        if (this.options.style['$' + targetState]) {
          stateStyle = this.options.style['$' + targetState];
          targetStateIndex = this.providedStates.indexOf(targetState);
          activeStates = this.providedStates.filter((function(_this) {
            return function(state) {
              return helpers.includes(_this._state, state) && state !== targetState;
            };
          })(this));
          superiorStates = activeStates.filter((function(_this) {
            return function(state) {
              return _this.providedStates.indexOf(state) > targetStateIndex;
            };
          })(this));
          activeStateStyles = activeStates.map((function(_this) {
            return function(state) {
              return _this.options.style['$' + state];
            };
          })(this));
          superiorStateStyles = superiorStates.map((function(_this) {
            return function(state) {
              return _this.options.style['$' + state];
            };
          })(this));
        }
        if (desiredValue) {
          this._state.push(targetState);
          if (stateStyle) {
            this.style(extend.clone.keys(stateStyle).apply(null, [stateStyle].concat(superiorStateStyles)));
          }
        } else {
          helpers.removeItem(this._state, targetState);
          if (stateStyle) {
            stylesToKeep = extend.clone.keys(stateStyle).apply(null, [this.options.style.$base].concat(activeStateStyles));
            stylesToRemove = extend.transform(function() {
              return null;
            }).clone(stateStyle);
            this.style(extend(stylesToRemove, stylesToKeep));
          }
        }
      }
      if (this.options.passStateToChildren) {
        ref = this._children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          child.setState(targetState, value);
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
      this.setState(activeState, false);
    }
    return this;
  };
  QuickElement.prototype.style = function() {
    var args, returnValue;
    args = arguments;
    if (IS.string(args[0])) {
      returnValue = CSS(this.el, args[0], args[1]);
      if (!IS.defined(args[1])) {
        return returnValue;
      }
    } else if (IS.object(args[0])) {
      CSS(this.el, extend.allowNull.transform((function(_this) {
        return function(value) {
          if (typeof value === 'function') {
            return value(_this.options.relatedInstance);
          } else {
            return value;
          }
        };
      })(this)).clone(args[0]));
    }
    return this;
  };
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
    var activeState, callback, callbacks, child, elClone, eventName, i, j, k, len, len1, len2, newEl, options, ref, ref1, ref2;
    elClone = this.el.cloneNode(false);
    options = extend.clone(this.options, {
      existing: elClone
    });
    newEl = new QuickElement(this.type, options);
    ref = this._state;
    for (i = 0, len = ref.length; i < len; i++) {
      activeState = ref[i];
      newEl.setState(activeState);
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
  QuickElement.prototype.html = function(newValue) {
    if (!IS.defined(newValue)) {
      return this.el.innerHTML;
    }
    this.el.innerHTML = newValue;
    return this;
  };
  QuickElement.prototype.text = function(newValue) {
    if (!IS.defined(newValue)) {
      return this.el.textContent;
    }
    this.el.textContent = newValue;
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
    for (eventName in this._eventCallbacks) {
      this._eventCallbacks[eventName].length = 0;
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
      }
    }
    return this;
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
  QuickDom = function() {
    var args, child, children, element, i, len, options, type;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    switch (false) {
      case !IS.template(args[0]):
        return args[0].spawn();
      case !IS.quickDomEl(args[0]):
        if (args[1]) {
          return args[0].updateOptions(args[1]);
        } else {
          return args[0];
        }
      case !IS.domNode(args[0]):
        if (args[0]._quickElement) {
          return args[0]._quickElement;
        }
        type = args[0].nodeName.toLowerCase().replace('#', '');
        options = args[1] || {};
        options.existing = args[0];
        return new QuickElement(type, options);
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
          if (IS.quickDomEl(child)) {
            child.appendTo(element);
          }
        }
        return element;
    }
  };
  QuickDom.template = function(tree) {
    return new QuickTemplate(tree);
  };
  QuickBatch = function(elements1, returnResults1) {
    this.elements = elements1;
    this.returnResults = returnResults1;
    this.elements = this.elements.map(function(el) {
      return QuickDom(el);
    });
    return this;
  };
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
  Object.keys(QuickElement.prototype).concat('css', 'replaceWith').forEach(function(method) {
    return QuickBatch.prototype[method] = function() {
      var element, results;
      results = this.lastResults = (function() {
        var i, len, ref, results1;
        ref = this.elements;
        results1 = [];
        for (i = 0, len = ref.length; i < len; i++) {
          element = ref[i];
          results1.push(element[method].apply(element, arguments));
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
  pholderRegex = /\{\{.+?\}\}/g;
  QuickTemplate = function(tree) {
    this._parsed = parseTree(tree);
    return this;
  };
  QuickTemplateProto = QuickTemplate.prototype;
  Object.defineProperties(QuickTemplateProto, {
    type: {
      get: function() {
        return this._parsed.type;
      }
    },
    options: {
      get: function() {
        return this._parsed.options;
      }
    },
    children: {
      get: function() {
        return this._parsed.children;
      }
    }
  });
  QuickTemplate.prototype.spawn = function() {
    var args;
    args = [this.type, extend.clone.deep(this.options)];
    args = args.concat(this.children);
    return QuickDom.apply(null, args);
  };
  QuickTemplate.prototype.extend = function(newValues, isReplaceValues) {
    var clone, ref, transformFn;
    if (isReplaceValues && newValues) {
      transformFn = function(value) {
        if (typeof value !== 'string') {
          return value;
        } else {
          return value.replace(pholderRegex, function(pholder) {
            return newValues[pholder.slice(2, -2)] || pholder;
          });
        }
      };
    }
    clone = Object.create(QuickTemplateProto);
    clone._parsed = extend.deep.clone.notKeys(['children']).transform(transformFn)(this._parsed, newValues);
    clone._parsed.children = (ref = this.children) != null ? ref.map(function(child) {
      return child.extend(isReplaceValues ? newValues : void 0, isReplaceValues);
    }) : void 0;
    return clone;
  };
  parseTree = function(tree) {
    var output;
    switch (false) {
      case !IS.array(tree):
        output = {};
        if (!IS.string(tree[0])) {
          throwParseError('type', 'string', tree[0]);
        } else {
          output.type = tree[0];
        }
        if (tree.length > 1 && !IS.object(tree[1]) && tree[1] !== null) {
          throwParseError('options', 'object', tree[1]);
        } else {
          output.options = tree[1] ? extend.deep.clone(tree[1]) : null;
        }
        output.children = tree.slice(2).map(QuickDom.template);
        return output;
      case !(IS.string(tree) || IS.domText(tree)):
        return {
          type: 'text',
          options: {
            text: tree.textContent || tree
          }
        };
      case !IS.domEl(tree):
        return {
          type: tree.nodeName.toLowerCase(),
          options: extend.clone.keys(allowedTemplateOptions)(tree),
          children: [].map.call(tree.childNodes, QuickDom.template)
        };
      case !IS.quickDomEl(tree):
        return {
          type: tree.type,
          options: extend.clone.deep.notKeys(['relatedInstance'])(tree.options),
          children: tree.children.map(QuickDom.template)
        };
      default:
        return throwParseError('template', '(array || string || domEl || quickDomEl)', tree);
    }
  };
  throwParseError = function(label, expected, received) {
    throw new Error("Template Parse Error: expected " + expected + " for " + label + ", got " + (String(received)));
  };
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
      return QuickDom.apply(null, [type].concat([].slice.call(arguments)));
    };
  };
  for (i = 0, len = shortcuts.length; i < len; i++) {
    shortcut = shortcuts[i];
    fn(shortcut);
  }
  QuickDom.version = '1.0.1';

  /* istanbul ignore next */
  _sim_2f1c4 = (function(exports){
		var module = {exports:exports};
		(function(){var l,m,n,k,e,f,h,p;k=["webkit","moz","ms","o"];f="backgroundPositionX backgroundPositionY blockSize borderWidth columnRuleWidth cx cy fontSize gridColumnGap gridRowGap height inlineSize lineHeight minBlockSize minHeight minInlineSize minWidth outlineOffset outlineWidth perspective shapeMargin strokeDashoffset strokeWidth textIndent width wordSpacing x y".split(" ");["margin","padding","border","borderRadius"].forEach(function(a){var b,c,d,e,g;f.push(a);e=["Top","Bottom","Left","Right"];
		g=[];c=0;for(d=e.length;c<d;c++)b=e[c],g.push(f.push(a+b));return g});p=document.createElement("div").style;l=/^\d+(?:[a-z]|\%)+$/i;m=/\d+$/;n=/\s/;h={includes:function(a,b){return a&&-1!==a.indexOf(b)},isIterable:function(a){return a&&"object"===typeof a&&"number"===typeof a.length&&!a.nodeType},isPropSupported:function(a){return"undefined"!==typeof p[a]},toTitleCase:function(a){return a[0].toUpperCase()+a.slice(1)},normalizeProperty:function(a){var b,c,d;if(this.isPropSupported(a))return a;d=this.toTitleCase(a);
		a=0;for(b=k.length;a<b;a++)if(c=k[a],c=""+c+d,this.isPropSupported(c))return c},normalizeValue:function(a,b){this.includes(f,a)&&null!==b&&(b=""+b,!m.test(b)||l.test(b)||n.test(b)||(b+="px"));return b}};e=function(a,b,c){var d,f,g;if(h.isIterable(a))for(d=0,f=a.length;d<f;d++)g=a[d],e(g,b,c);else if("object"===typeof b)for(d in b)c=b[d],e(a,d,c);else{b=h.normalizeProperty(b);if("undefined"===typeof c)return getComputedStyle(a)[b];b&&(a.style[b]=h.normalizeValue(b,c))}};e.version="1.0.4";return null!=
		("undefined"!==typeof module&&null!==module?module.exports:void 0)?module.exports=e:"function"===typeof define&&define.amd?define(["quickdom"],function(){return e}):this.Css=e})();
		
		return module.exports;
	}).call(this, {});
  CSS = _sim_2f1c4;

  /* istanbul ignore next */
  _sim_2d2e1 = (function(exports){
		var module = {exports:exports};
		var slice = [].slice;
		
		(function() {
		  var _sim_2f567, extend;
		  _sim_2f567 = (function(_this) {
		    return function(exports) {
		      var module = {exports:exports};
		      var build, extend, modifiers, simpleClone;
		      extend = (function(exports) {
		        var module = {exports:exports};
		        var isArray, isObject;
		        isArray = function(target) {
		          return Array.isArray(target);
		        };
		        isObject = function(target) {
		          return target && typeof target === 'object';
		        };
		        module.exports = extend = function(options, target, sources) {
		          var i, key, len, source, sourceValue, subTarget, targetValue;
		          if (!target || typeof target !== 'object' && typeof target !== 'function') {
		            target = {};
		          }
		          for (i = 0, len = sources.length; i < len; i++) {
		            source = sources[i];
		            if (source != null) {
		              for (key in source) {
		                sourceValue = source[key];
		                targetValue = target[key];
		                if (sourceValue === target || sourceValue === void 0 || (sourceValue === null && !options.allowNull) || (options.specificKeys && options.specificKeys.indexOf(key) === -1) || (options.notKeys && options.notKeys.indexOf(key) !== -1) || (options.onlyOwn && !source.hasOwnProperty(key)) || (options.globalFilter && !options.globalFilter(sourceValue, key, source)) || (options.filters && options.filters[key] && !options.filters[key](sourceValue, key, source))) {
		                  continue;
		                }
		                switch (false) {
		                  case !(options.concat && isArray(sourceValue) && isArray(targetValue)):
		                    target[key] = targetValue.concat(sourceValue);
		                    break;
		                  case !(options.deep && isObject(sourceValue)):
		                    subTarget = isObject(targetValue) ? targetValue : isArray(sourceValue) ? [] : {};
		                    target[key] = extend(options, subTarget, [sourceValue]);
		                    break;
		                  default:
		                    if (options.transform) {
		                      sourceValue = options.transform(sourceValue, key, source);
		                    }
		                    target[key] = sourceValue;
		                }
		              }
		            }
		          }
		          return target;
		        };
		        return module.exports;
		      })({});
		      simpleClone = function(source) {
		        var key, output, value;
		        output = {};
		        for (key in source) {
		          value = source[key];
		          output[key] = value;
		        }
		        return output;
		      };
		      build = function(options) {
		        var builder;
		        if (options.target) {
		          builder = function() {
		            var sources;
		            sources = 1 <= arguments.length ? slice.call(arguments, 0) : [];
		            return extend(builder.options, builder.options.target, sources);
		          };
		        } else {
		          builder = function() {
		            var sources, target;
		            target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
		            return extend(builder.options, target, sources);
		          };
		        }
		        builder.options = options;
		        Object.defineProperties(builder, modifiers);
		        return builder;
		      };
		      modifiers = {
		        'deep': {
		          get: function() {
		            var newOptions;
		            newOptions = simpleClone(this.options);
		            newOptions.deep = true;
		            return build(newOptions);
		          }
		        },
		        'own': {
		          get: function() {
		            var newOptions;
		            newOptions = simpleClone(this.options);
		            newOptions.onlyOwn = true;
		            return build(newOptions);
		          }
		        },
		        'allowNull': {
		          get: function() {
		            var newOptions;
		            newOptions = simpleClone(this.options);
		            newOptions.allowNull = true;
		            return build(newOptions);
		          }
		        },
		        'concat': {
		          get: function() {
		            var newOptions;
		            newOptions = simpleClone(this.options);
		            newOptions.concat = true;
		            return build(newOptions);
		          }
		        },
		        'clone': {
		          get: function() {
		            var newOptions;
		            newOptions = simpleClone(this.options);
		            newOptions.target = {};
		            return build(newOptions);
		          }
		        },
		        'keys': {
		          get: function() {
		            var newOptions;
		            newOptions = simpleClone(this.options);
		            return function(keys) {
		              if (Array.isArray(keys)) {
		                newOptions.specificKeys = keys;
		              } else if (keys && typeof keys === 'object') {
		                newOptions.specificKeys = Object.keys(keys);
		              }
		              return build(newOptions);
		            };
		          }
		        },
		        'notKeys': {
		          get: function() {
		            var newOptions;
		            newOptions = simpleClone(this.options);
		            return function(keys) {
		              if (Array.isArray(keys)) {
		                newOptions.notKeys = keys;
		              } else if (keys && typeof keys === 'object') {
		                newOptions.notKeys = Object.keys(keys);
		              }
		              return build(newOptions);
		            };
		          }
		        },
		        'transform': {
		          get: function() {
		            var newOptions;
		            newOptions = simpleClone(this.options);
		            return function(transform) {
		              if (typeof transform === 'function') {
		                newOptions.transform = transform;
		              }
		              return build(newOptions);
		            };
		          }
		        },
		        'filter': {
		          get: function() {
		            var newOptions;
		            newOptions = simpleClone(this.options);
		            return function(filter) {
		              if (typeof filter === 'function') {
		                newOptions.globalFilter = filter;
		              }
		              return build(newOptions);
		            };
		          }
		        },
		        'filters': {
		          get: function() {
		            var newOptions;
		            newOptions = simpleClone(this.options);
		            return function(filters) {
		              if (filters && typeof filters === 'object') {
		                newOptions.filters = filters;
		              }
		              return build(newOptions);
		            };
		          }
		        }
		      };
		      module.exports = build({});
		      return module.exports;
		    };
		  })(this)({});
		  extend = _sim_2f567;
		  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
		    module.exports = extend;
		  } else if (typeof define === 'function' && define.amd) {
		    define(['smart-extend'], function() {
		      return extend;
		    });
		  } else {
		    window.extend = extend;
		  }
		})();
		
		return module.exports;
	}).call(this, {});
  extend = _sim_2d2e1;

  /* istanbul ignore next */
  if ((typeof exports !== "undefined" && exports !== null ? exports.module : void 0) != null) {
    return module.exports = QuickDom;
  } else if (typeof define === 'function' && define.amd) {
    return define(['quickdom'], function() {
      return QuickDom;
    });
  } else {
    return this.Dom = QuickDom;
  }
})();
