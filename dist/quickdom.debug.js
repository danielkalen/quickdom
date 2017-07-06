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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxFQUFBLEdBQUssTUFBTSxDQUFDLE9BQVAsR0FDSjtFQUFBLE9BQUEsRUFBUyxTQUFDLE9BQUQ7V0FBWSxPQUFBLEtBQWE7RUFBekIsQ0FBVDtFQUVBLEtBQUEsRUFBTyxTQUFDLE9BQUQ7V0FBWSxPQUFBLFlBQW1CO0VBQS9CLENBRlA7RUFJQSxNQUFBLEVBQVEsU0FBQyxPQUFEO1dBQVksT0FBTyxPQUFQLEtBQWtCLFFBQWxCLElBQStCO0VBQTNDLENBSlI7RUFNQSxXQUFBLEVBQWEsU0FBQyxPQUFEO1dBQVksRUFBRSxDQUFDLE1BQUgsQ0FBVSxPQUFWLENBQUEsSUFBdUIsTUFBTSxDQUFBLFNBQUUsQ0FBQSxRQUFRLENBQUMsSUFBakIsQ0FBc0IsT0FBdEIsQ0FBQSxLQUFrQztFQUFyRSxDQU5iO0VBUUEsTUFBQSxFQUFRLFNBQUMsT0FBRDtXQUFZLE9BQU8sT0FBUCxLQUFrQjtFQUE5QixDQVJSO0VBVUEsTUFBQSxFQUFRLFNBQUMsT0FBRDtXQUFZLE9BQU8sT0FBUCxLQUFrQjtFQUE5QixDQVZSO0VBWUEsQ0FBQSxRQUFBLENBQUEsRUFBVSxTQUFDLE9BQUQ7V0FBWSxPQUFPLE9BQVAsS0FBa0I7RUFBOUIsQ0FaVjtFQWNBLFFBQUEsRUFBVSxTQUFDLE9BQUQ7V0FBWSxFQUFFLENBQUMsTUFBSCxDQUFVLE9BQVYsQ0FBQSxJQUF1QixFQUFFLENBQUMsTUFBSCxDQUFVLE9BQU8sQ0FBQyxNQUFsQjtFQUFuQyxDQWRWIiwic291cmNlc0NvbnRlbnQiOlsiSVMgPSBtb2R1bGUuZXhwb3J0cyA9XG5cdGRlZmluZWQ6IChzdWJqZWN0KS0+IHN1YmplY3QgaXNudCB1bmRlZmluZWRcblx0XG5cdGFycmF5OiAoc3ViamVjdCktPiBzdWJqZWN0IGluc3RhbmNlb2YgQXJyYXlcblx0XG5cdG9iamVjdDogKHN1YmplY3QpLT4gdHlwZW9mIHN1YmplY3QgaXMgJ29iamVjdCcgYW5kIHN1YmplY3QgIyAybmQgY2hlY2sgaXMgdG8gdGVzdCBhZ2FpbnN0ICdudWxsJyB2YWx1ZXNcblxuXHRvYmplY3RQbGFpbjogKHN1YmplY3QpLT4gSVMub2JqZWN0KHN1YmplY3QpIGFuZCBPYmplY3Q6OnRvU3RyaW5nLmNhbGwoc3ViamVjdCkgaXMgJ1tvYmplY3QgT2JqZWN0XSdcblxuXHRzdHJpbmc6IChzdWJqZWN0KS0+IHR5cGVvZiBzdWJqZWN0IGlzICdzdHJpbmcnXG5cdFxuXHRudW1iZXI6IChzdWJqZWN0KS0+IHR5cGVvZiBzdWJqZWN0IGlzICdudW1iZXInXG5cdFxuXHRmdW5jdGlvbjogKHN1YmplY3QpLT4gdHlwZW9mIHN1YmplY3QgaXMgJ2Z1bmN0aW9uJ1xuXG5cdGl0ZXJhYmxlOiAoc3ViamVjdCktPiBJUy5vYmplY3Qoc3ViamVjdCkgYW5kIElTLm51bWJlcihzdWJqZWN0Lmxlbmd0aCkiXX0=
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVDaGFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXRlQ2hhaW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsTUFBTSxDQUFDLE9BQVAsR0FBdUI7RUFDVCxvQkFBQyxNQUFEO0lBQ1osSUFBQyxDQUFBLE1BQUQsR0FBVSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQVo7SUFDVixJQUFDLENBQUEsS0FBRCxHQUFTLE1BQU0sQ0FBQyxLQUFQLENBQUE7SUFDVCxJQUFDLENBQUEsTUFBRCxHQUFVLE1BQU0sQ0FBQztFQUhMOzt1QkFLYixRQUFBLEdBQVUsU0FBQyxNQUFEO0FBQ1QsUUFBQTtBQUFBO0FBQUEsU0FBQSxxQ0FBQTs7TUFDQyxJQUFlLEtBQUEsS0FBUyxNQUF4QjtBQUFBLGVBQU8sS0FBUDs7QUFERDtBQUdBLFdBQU87RUFKRTs7dUJBTVYsT0FBQSxHQUFTLFNBQUMsTUFBRDtXQUNSLElBQUMsQ0FBQSxLQUNBLENBQUMsTUFERixDQUNTLFNBQUMsS0FBRDthQUFVLEtBQUEsS0FBVztJQUFyQixDQURULENBRUMsQ0FBQyxJQUZGLENBRU8sR0FGUDtFQURROzt1QkFNVCxZQUFBLEdBQWMsU0FBQyxNQUFELEVBQVMsV0FBVDtBQUNiLFFBQUE7SUFBQSxNQUFBLEdBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFQLENBQWMsU0FBQyxLQUFEO2FBQ3RCLEtBQUEsS0FBUyxNQUFULElBQ0EsV0FBVyxDQUFDLE9BQVosQ0FBb0IsS0FBcEIsQ0FBQSxLQUFnQyxDQUFDO0lBRlgsQ0FBZDtBQUlULFdBQU8sTUFBTSxDQUFDLE1BQVAsS0FBaUIsSUFBQyxDQUFBLEtBQUssQ0FBQztFQUxsQiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgU3RhdGVDaGFpblxuXHRjb25zdHJ1Y3RvcjogKHN0YXRlcyktPlxuXHRcdEBzdHJpbmcgPSBzdGF0ZXMuam9pbignKycpXG5cdFx0QGFycmF5ID0gc3RhdGVzLnNsaWNlKClcblx0XHRAbGVuZ3RoID0gc3RhdGVzLmxlbmd0aFxuXG5cdGluY2x1ZGVzOiAodGFyZ2V0KS0+XG5cdFx0Zm9yIHN0YXRlIGluIEBhcnJheVxuXHRcdFx0cmV0dXJuIHRydWUgaWYgc3RhdGUgaXMgdGFyZ2V0XG5cblx0XHRyZXR1cm4gZmFsc2VcblxuXHR3aXRob3V0OiAodGFyZ2V0KS0+XG5cdFx0QGFycmF5XG5cdFx0XHQuZmlsdGVyIChzdGF0ZSktPiBzdGF0ZSBpc250IHRhcmdldFxuXHRcdFx0LmpvaW4gJysnXG5cblxuXHRpc0FwcGxpY2FibGU6ICh0YXJnZXQsIG90aGVyQWN0aXZlKS0+XG5cdFx0YWN0aXZlID0gQGFycmF5LmZpbHRlciAoc3RhdGUpLT5cblx0XHRcdHN0YXRlIGlzIHRhcmdldCBvclxuXHRcdFx0b3RoZXJBY3RpdmUuaW5kZXhPZihzdGF0ZSkgaXNudCAtMVxuXG5cdFx0cmV0dXJuIGFjdGl2ZS5sZW5ndGggaXMgQGFycmF5Lmxlbmd0aCJdfQ==
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsb3dlZE9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGxvd2VkT3B0aW9ucy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxzQkFBQSxHQUF5QixDQUN4QixJQUR3QixFQUV4QixNQUZ3QixFQUd4QixNQUh3QixFQUl4QixNQUp3QixFQUt4QixVQUx3QixFQU14QixTQU53QixFQU94QixXQVB3Qjs7QUFVekIsY0FBQSxHQUFpQixDQUNoQixJQURnQixFQUVoQixLQUZnQixFQUdoQixNQUhnQixFQUloQixNQUpnQixFQUtoQixNQUxnQixFQU1oQixPQU5nQixFQU9oQixPQVBnQixFQVFoQixXQVJnQixFQVNoQixLQVRnQixFQVVoQixNQVZnQixFQVdoQixVQVhnQixFQVloQixTQVpnQixFQWFoQixPQWJnQixFQWNoQixPQWRnQixFQWVoQixxQkFmZ0IsRUFnQmhCLGVBaEJnQiIsInNvdXJjZXNDb250ZW50IjpbImFsbG93ZWRUZW1wbGF0ZU9wdGlvbnMgPSBbICMgVG8gY29weSBmcm9tIERPTSBFbGVtZW50c1xuXHQnaWQnXG5cdCduYW1lJ1xuXHQndHlwZSdcblx0J2hyZWYnXG5cdCdzZWxlY3RlZCdcblx0J2NoZWNrZWQnXG5cdCdjbGFzc05hbWUnXG5dXG5cbmFsbG93ZWRPcHRpb25zID0gWyAjIFVzZWQgaW4gUXVpY2tFbGVtZW50Ojp0b0pTT05cblx0J2lkJ1xuXHQncmVmJ1xuXHQndHlwZSdcblx0J25hbWUnXG5cdCd0ZXh0J1xuXHQnc3R5bGUnXG5cdCdjbGFzcydcblx0J2NsYXNzTmFtZSdcblx0J3VybCdcblx0J2hyZWYnXG5cdCdzZWxlY3RlZCdcblx0J2NoZWNrZWQnXG5cdCdwcm9wcydcblx0J2F0dHJzJ1xuXHQncGFzc1N0YXRlVG9DaGlsZHJlbidcblx0J3N0YXRlVHJpZ2dlcnMnXG5cdCMgJ3JlbGF0ZWRJbnN0YW5jZSdcbl0iXX0=
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbHBlcnMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsT0FBQSxHQUFVOztBQUVWLE9BQU8sQ0FBQyxRQUFSLEdBQW1CLFNBQUMsTUFBRCxFQUFTLElBQVQ7U0FDbEIsTUFBQSxJQUFXLE1BQU0sQ0FBQyxPQUFQLENBQWUsSUFBZixDQUFBLEtBQTBCLENBQUM7QUFEcEI7O0FBR25CLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUMsTUFBRCxFQUFTLElBQVQ7QUFDcEIsTUFBQTtFQUFBLFNBQUEsR0FBWSxNQUFNLENBQUMsT0FBUCxDQUFlLElBQWY7RUFDWixJQUFnQyxTQUFBLEtBQWUsQ0FBQyxDQUFoRDtJQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsU0FBZCxFQUF5QixDQUF6QixFQUFBOztBQUNBLFNBQU87QUFIYTs7QUFLckIsT0FBTyxDQUFDLGdCQUFSLEdBQTJCLFNBQUMsUUFBRDtBQUFhLFVBQUEsS0FBQTtBQUFBLFVBQ2xDLEVBQUUsQ0FBQyxPQUFILENBQVcsUUFBWCxDQURrQzthQUNSLFFBQUEsQ0FBUyxRQUFUO0FBRFEsVUFFbEMsRUFBRSxDQUFDLE1BQUgsQ0FBVSxRQUFWLENBRmtDO2FBRVQsUUFBUSxDQUFDLElBQVQsQ0FBYyxRQUFkO0FBRlM7YUFHbEM7QUFIa0M7QUFBYjs7QUFNM0IsT0FBTyxDQUFDLFlBQVIsR0FBdUIsU0FBQyxNQUFEO1NBQ3RCLE1BQU8sQ0FBQSxDQUFBLENBQVAsS0FBYSxHQUFiLElBQW9CLE1BQU8sQ0FBQSxDQUFBLENBQVAsS0FBYTtBQURYIiwic291cmNlc0NvbnRlbnQiOlsiaGVscGVycyA9IHt9XG5cbmhlbHBlcnMuaW5jbHVkZXMgPSAodGFyZ2V0LCBpdGVtKS0+XG5cdHRhcmdldCBhbmQgdGFyZ2V0LmluZGV4T2YoaXRlbSkgaXNudCAtMVxuXG5oZWxwZXJzLnJlbW92ZUl0ZW0gPSAodGFyZ2V0LCBpdGVtKS0+XG5cdGl0ZW1JbmRleCA9IHRhcmdldC5pbmRleE9mKGl0ZW0pXG5cdHRhcmdldC5zcGxpY2UoaXRlbUluZGV4LCAxKSAgaWYgaXRlbUluZGV4IGlzbnQgLTFcblx0cmV0dXJuIHRhcmdldFxuXG5oZWxwZXJzLm5vcm1hbGl6ZUdpdmVuRWwgPSAodGFyZ2V0RWwpLT4gc3dpdGNoXG5cdHdoZW4gSVMuZG9tTm9kZSh0YXJnZXRFbCkgdGhlbiBRdWlja0RvbSh0YXJnZXRFbClcblx0d2hlbiBJUy5zdHJpbmcodGFyZ2V0RWwpIHRoZW4gUXVpY2tEb20udGV4dCh0YXJnZXRFbClcblx0ZWxzZSB0YXJnZXRFbFxuXG5cbmhlbHBlcnMuaXNTdGF0ZVN0eWxlID0gKHN0cmluZyktPlxuXHRzdHJpbmdbMF0gaXMgJyQnIG9yIHN0cmluZ1swXSBpcyAnQCciXX0=
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hlY2tzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQSxJQUFBOztBQUNBLEVBQUEsR0FBSyxPQUFBLENBQVEsaUJBQVI7O0FBQ0wsRUFBQSxHQUFLLE1BQU0sQ0FBQyxLQUFQLENBQWEsRUFBYixFQUNKO0VBQUEsTUFBQSxFQUFRLFNBQUMsT0FBRDtXQUFZLE9BQUEsSUFBWSxPQUFPLENBQUMsUUFBUixLQUFvQjtFQUE1QyxDQUFSO0VBRUEsS0FBQSxFQUFPLFNBQUMsT0FBRDtXQUFZLE9BQUEsSUFBWSxPQUFPLENBQUMsUUFBUixLQUFvQjtFQUE1QyxDQUZQO0VBSUEsT0FBQSxFQUFTLFNBQUMsT0FBRDtXQUFZLE9BQUEsSUFBWSxPQUFPLENBQUMsUUFBUixLQUFvQjtFQUE1QyxDQUpUO0VBTUEsT0FBQSxFQUFTLFNBQUMsT0FBRDtXQUFZLEVBQUUsQ0FBQyxLQUFILENBQVMsT0FBVCxDQUFBLElBQXFCLEVBQUUsQ0FBQyxPQUFILENBQVcsT0FBWDtFQUFqQyxDQU5UO0VBUUEsVUFBQSxFQUFZLFNBQUMsT0FBRDtXQUFZLE9BQUEsSUFBWSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQXBCLEtBQTRCLFlBQVksQ0FBQztFQUFqRSxDQVJaO0VBVUEsUUFBQSxFQUFVLFNBQUMsT0FBRDtXQUFZLE9BQUEsSUFBWSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQXBCLEtBQTRCLGFBQWEsQ0FBQztFQUFsRSxDQVZWO0NBREkiLCJzb3VyY2VzQ29udGVudCI6WyIjIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5JUyA9IHJlcXVpcmUoJ0BkYW5pZWxrYWxlbi9pcycpXG5JUyA9IGV4dGVuZC5jbG9uZSBJUywgXG5cdGRvbURvYzogKHN1YmplY3QpLT4gc3ViamVjdCBhbmQgc3ViamVjdC5ub2RlVHlwZSBpcyA5XG5cblx0ZG9tRWw6IChzdWJqZWN0KS0+IHN1YmplY3QgYW5kIHN1YmplY3Qubm9kZVR5cGUgaXMgMVxuXG5cdGRvbVRleHQ6IChzdWJqZWN0KS0+IHN1YmplY3QgYW5kIHN1YmplY3Qubm9kZVR5cGUgaXMgM1xuXG5cdGRvbU5vZGU6IChzdWJqZWN0KS0+IElTLmRvbUVsKHN1YmplY3QpIG9yIElTLmRvbVRleHQoc3ViamVjdClcblx0XG5cdHF1aWNrRG9tRWw6IChzdWJqZWN0KS0+IHN1YmplY3QgYW5kIHN1YmplY3QuY29uc3RydWN0b3IubmFtZSBpcyBRdWlja0VsZW1lbnQubmFtZVxuXHRcblx0dGVtcGxhdGU6IChzdWJqZWN0KS0+IHN1YmplY3QgYW5kIHN1YmplY3QuY29uc3RydWN0b3IubmFtZSBpcyBRdWlja1RlbXBsYXRlLm5hbWVcblx0XG5cdCMgYmF0Y2g6IChzdWJqZWN0KS0+IHN1YmplY3QgYW5kIHN1YmplY3QuY29uc3RydWN0b3IubmFtZSBpcyAnUXVpY2tCYXRjaCdcblx0XG5cdCMgZG9tSW5wdXQ6IChzdWJqZWN0KS0+XG5cdCMgXHRub2RlTmFtZSA9IHN1YmplY3Qubm9kZU5hbWVcblx0IyBcdHJldHVybiBub2RlTmFtZSBpcyAnSU5QVVQnIG9yIG5vZGVOYW1lIGlzICdURVhUQVJFQScgb3Igbm9kZU5hbWUgaXMgJ1NFTEVDVCdcblxuIl19
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsaWFzZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixZQUFZLENBQUEsU0FBcEMsRUFDQztFQUFBLEtBQUEsRUFBTztJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUssSUFBQyxDQUFBO0lBQU4sQ0FBTDtHQUFQO0VBQ0EsR0FBQSxFQUFLO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBSyxJQUFDLENBQUE7SUFBTixDQUFMO0dBREw7RUFFQSxLQUFBLEVBQU87SUFBQSxHQUFBLEVBQUssU0FBQTthQUFLLElBQUMsQ0FBQTtJQUFOLENBQUw7R0FGUDtFQUdBLGFBQUEsRUFBZTtJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUssSUFBQyxDQUFBO0lBQU4sQ0FBTDtHQUhmO0NBREQiLCJzb3VyY2VzQ29udGVudCI6WyJPYmplY3QuZGVmaW5lUHJvcGVydGllcyBRdWlja0VsZW1lbnQ6Oixcblx0J3Jhdyc6IGdldDogKCktPiBAZWxcblx0JzAnOiBnZXQ6ICgpLT4gQGVsXG5cdCdjc3MnOiBnZXQ6ICgpLT4gQHN0eWxlXG5cdCdyZXBsYWNlV2l0aCc6IGdldDogKCktPiBAcmVwbGFjZVxuXG4iXX0=
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYXZlcnNpbmcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsMkNBQUE7RUFBQTs7QUFBQSxZQUFZLENBQUEsU0FBRSxDQUFBLFlBQWQsR0FBNkIsU0FBQyxRQUFEO1NBQzVCLFdBQUEsQ0FBWSxJQUFaLEVBQWUsUUFBZjtBQUQ0Qjs7QUFHN0IsWUFBWSxDQUFBLFNBQUUsQ0FBQSxjQUFkLEdBQStCLFNBQUMsUUFBRDtBQUFhLE1BQUE7RUFBQSxJQUFHLEVBQUUsRUFBQyxRQUFELEVBQUYsQ0FBWSxRQUFaLENBQUg7SUFDM0MsVUFBQSxHQUFhLElBQUMsQ0FBQTtBQUNkLFdBQU0sVUFBTjtNQUNDLElBQXFCLFFBQUEsQ0FBUyxVQUFULENBQXJCO0FBQUEsZUFBTyxXQUFQOztNQUNBLFVBQUEsR0FBYSxVQUFVLENBQUM7SUFGekIsQ0FGMkM7O0FBQWI7O0FBUS9CLFlBQVksQ0FBQSxTQUFFLENBQUEsS0FBZCxHQUFzQixTQUFDLFFBQUQ7U0FDckIsUUFBQSxDQUFTLElBQUMsQ0FBQSxHQUFHLENBQUMsYUFBTCxDQUFtQixRQUFuQixDQUFUO0FBRHFCOztBQUd0QixZQUFZLENBQUEsU0FBRSxDQUFBLFFBQWQsR0FBeUIsU0FBQyxRQUFEO0FBQ3hCLE1BQUE7RUFBQSxNQUFBLEdBQVMsSUFBQyxDQUFBLEdBQUcsQ0FBQyxnQkFBTCxDQUFzQixRQUF0QjtFQUNULE1BQUEsR0FBUztBQUFJLE9BQUEsd0NBQUE7O0lBQUEsTUFBTSxDQUFDLElBQVAsQ0FBWSxJQUFaO0FBQUE7QUFDYixTQUFPLElBQUksVUFBSixDQUFlLE1BQWY7QUFIaUI7O0FBT3pCLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixZQUFZLENBQUEsU0FBcEMsRUFDQztFQUFBLFVBQUEsRUFBWTtJQUFBLEdBQUEsRUFBSyxTQUFBO0FBQ2hCLFVBQUE7TUFBQSxJQUFHLElBQUMsQ0FBQSxFQUFFLENBQUMs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LENBQUksQ0FBQSxNQUFBLEdBQU8sSUFBSSxDQUFDLE1BQVosQ0FBUDtBQUNDLFdBQU8sS0FEUjtHQUFBLE1BQUE7V0FHQyxNQUFNLENBQUMsUUFDTixDQUFDLE1BREYsQ0FDUyxTQUFDLEtBQUQ7YUFBVSxLQUFNLENBQUEsSUFBQSxDQUFOLEtBQWUsSUFBSyxDQUFBLElBQUE7SUFBOUIsQ0FEVCxDQUVDLENBQUMsT0FGRixDQUVVLElBRlYsRUFIRDs7QUFEaUIiLCJzb3VyY2VzQ29udGVudCI6WyJRdWlja0VsZW1lbnQ6OnBhcmVudHNVbnRpbCA9IChmaWx0ZXJGbiktPlxuXHRfZ2V0UGFyZW50cyhALCBmaWx0ZXJGbilcblxuUXVpY2tFbGVtZW50OjpwYXJlbnRNYXRjaGluZyA9IChmaWx0ZXJGbiktPiBpZiBJUy5mdW5jdGlvbihmaWx0ZXJGbilcblx0bmV4dFBhcmVudCA9IEBwYXJlbnRcblx0d2hpbGUgbmV4dFBhcmVudFxuXHRcdHJldHVybiBuZXh0UGFyZW50IGlmIGZpbHRlckZuKG5leHRQYXJlbnQpXG5cdFx0bmV4dFBhcmVudCA9IG5leHRQYXJlbnQucGFyZW50XG5cdFxuXHRyZXR1cm5cblxuUXVpY2tFbGVtZW50OjpxdWVyeSA9IChzZWxlY3RvciktPlxuXHRRdWlja0RvbSBAcmF3LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG5cblF1aWNrRWxlbWVudDo6cXVlcnlBbGwgPSAoc2VsZWN0b3IpLT5cblx0cmVzdWx0ID0gQHJhdy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXHRvdXRwdXQgPSBbXTsgb3V0cHV0LnB1c2goaXRlbSkgZm9yIGl0ZW0gaW4gcmVzdWx0XG5cdHJldHVybiBuZXcgUXVpY2tCYXRjaChvdXRwdXQpXG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyBRdWlja0VsZW1lbnQ6Oixcblx0J2NoaWxkcmVuJzogZ2V0OiAoKS0+XG5cdFx0aWYgQGVsLmNoaWxkTm9kZXMubGVuZ3RoIGlzbnQgQF9jaGlsZHJlbi5sZW5ndGggIyBSZS1jb2xsZWN0IGNoaWxkcmVuXHRcblx0XHRcdEBfY2hpbGRyZW4ubGVuZ3RoID0gMCAjIEVtcHR5IG91dCBjaGlsZHJlbiBhcnJheVxuXHRcdFx0QF9jaGlsZHJlbi5wdXNoKFF1aWNrRG9tKGNoaWxkKSkgZm9yIGNoaWxkIGluIEBlbC5jaGlsZE5vZGVzIHdoZW4gY2hpbGQubm9kZVR5cGUgPCA0XG5cblx0XHRyZXR1cm4gQF9jaGlsZHJlblxuXG5cdCdwYXJlbnQnOiBnZXQ6ICgpLT5cblx0XHRpZiAobm90IEBfcGFyZW50IG9yIEBfcGFyZW50LmVsIGlzbnQgQGVsLnBhcmVudE5vZGUpIGFuZCBub3QgSVMuZG9tRG9jKEBlbC5wYXJlbnROb2RlKVxuXHRcdFx0QF9wYXJlbnQgPSBRdWlja0RvbShAZWwucGFyZW50Tm9kZSlcblxuXHRcdHJldHVybiBAX3BhcmVudFxuXG5cblx0J3BhcmVudHMnOiBnZXQ6ICgpLT5cblx0XHRfZ2V0UGFyZW50cyhAKVxuXG5cdCduZXh0JzogZ2V0OiAoKS0+XG5cdFx0UXVpY2tEb20oQGVsLm5leHRTaWJsaW5nKVxuXG5cdCdwcmV2JzogZ2V0OiAoKS0+XG5cdFx0UXVpY2tEb20oQGVsLnByZXZpb3VzU2libGluZylcblxuXHQnbmV4dEFsbCc6IGdldDogKCktPlxuXHRcdHNpYmxpbmdzID0gW11cblx0XHRuZXh0U2libGluZyA9IFF1aWNrRG9tKEBlbC5uZXh0U2libGluZylcblx0XHR3aGlsZSBuZXh0U2libGluZ1xuXHRcdFx0c2libGluZ3MucHVzaChuZXh0U2libGluZylcblx0XHRcdG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcubmV4dFxuXG5cdFx0cmV0dXJuIHNpYmxpbmdzXG5cblx0J3ByZXZBbGwnOiBnZXQ6ICgpLT5cblx0XHRzaWJsaW5ncyA9IFtdXG5cdFx0cHJldlNpYmxpbmcgPSBRdWlja0RvbShAZWwucHJldmlvdXNTaWJsaW5nKVxuXHRcdHdoaWxlIHByZXZTaWJsaW5nXG5cdFx0XHRzaWJsaW5ncy5wdXNoKHByZXZTaWJsaW5nKVxuXHRcdFx0cHJldlNpYmxpbmcgPSBwcmV2U2libGluZy5wcmV2XG5cblx0XHRyZXR1cm4gc2libGluZ3NcblxuXHQnc2libGluZ3MnOiBnZXQ6ICgpLT5cblx0XHRAcHJldkFsbC5yZXZlcnNlKCkuY29uY2F0KEBuZXh0QWxsKVxuXHRcblx0J2NoaWxkJzogZ2V0OiAoKS0+XG5cdFx0QF9jaGlsZFJlZnMgb3IgX2dldENoaWxkUmVmcyhAKVxuXG5cdCdjaGlsZGYnOiBnZXQ6ICgpLT5cblx0XHRfZ2V0Q2hpbGRSZWZzKEAsIHRydWUpXG5cblx0J2luZGV4JzogZ2V0OiAoKS0+XG5cdFx0aWYgbm90IHBhcmVudD1AcGFyZW50XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdGVsc2Vcblx0XHRcdHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKEApXG5cblx0J2luZGV4VHlwZSc6IGdldDogKCktPlxuXHRcdF9nZXRJbmRleEJ5UHJvcChALCAndHlwZScpXG5cblx0J2luZGV4UmVmJzogZ2V0OiAoKS0+XG5cdFx0X2dldEluZGV4QnlQcm9wKEAsICdyZWYnKVxuXG5cblxuX2dldFBhcmVudHMgPSAodGFyZ2V0RWwsIGZpbHRlckZuKS0+XG5cdGZpbHRlckZuID0gdW5kZWZpbmVkIGlmIG5vdCBJUy5mdW5jdGlvbihmaWx0ZXJGbilcblx0cGFyZW50cyA9IFtdXG5cdG5leHRQYXJlbnQgPSB0YXJnZXRFbC5wYXJlbnRcblx0d2hpbGUgbmV4dFBhcmVudFxuXHRcdHBhcmVudHMucHVzaChuZXh0UGFyZW50KVxuXHRcdG5leHRQYXJlbnQgPSBuZXh0UGFyZW50LnBhcmVudFxuXHRcdG5leHRQYXJlbnQgPSBudWxsIGlmIGZpbHRlckZuIGFuZCBmaWx0ZXJGbihuZXh0UGFyZW50KVxuXG5cdHJldHVybiBwYXJlbnRzXG5cblxuX2dldENoaWxkUmVmcyA9ICh0YXJnZXQsIGZyZXNoQ29weSktPlxuXHR0YXJnZXQuX2NoaWxkUmVmcyA9IHt9IGlmIGZyZXNoQ29weSBvciBub3QgdGFyZ2V0Ll9jaGlsZFJlZnNcblx0cmVmcyA9IHRhcmdldC5fY2hpbGRSZWZzXG5cdHJlZnNbdGFyZ2V0LnJlZl0gPSB0YXJnZXQgaWYgdGFyZ2V0LnJlZlxuXHRjaGlsZHJlbiA9IHRhcmdldC5jaGlsZHJlblxuXG5cdGlmIGNoaWxkcmVuLmxlbmd0aFxuXHRcdGV4dGVuZCB0YXJnZXQuX2NoaWxkUmVmcywgY2hpbGRyZW4ubWFwKChjaGlsZCktPiBfZ2V0Q2hpbGRSZWZzKGNoaWxkLCBmcmVzaENvcHkpKS4uLlxuXG5cdHJldHVybiB0YXJnZXQuX2NoaWxkUmVmc1xuXG5cbl9nZXRJbmRleEJ5UHJvcCA9IChtYWluLCBwcm9wKS0+XG5cdGlmIG5vdCBwYXJlbnQ9bWFpbi5wYXJlbnRcblx0XHRyZXR1cm4gbnVsbFxuXHRlbHNlXG5cdFx0cGFyZW50LmNoaWxkcmVuXG5cdFx0XHQuZmlsdGVyIChjaGlsZCktPiBjaGlsZFtwcm9wXSBpcyBtYWluW3Byb3BdXG5cdFx0XHQuaW5kZXhPZihtYWluKVxuXG5cblxuXG5cbiJdfQ==
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

QuickElement.prototype.updateOptions = function(options) {
  if (IS.object(options)) {
    this.options = options;
    this._normalizeOptions();
    this._applyOptions(this.options);
  }
  return this;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsaUJBQUE7RUFBQTs7QUFBQSxpQkFBQSxHQUNDO0VBQUEsT0FBQSxFQUFTO0lBQUMsRUFBQSxFQUFHLFlBQUo7SUFBa0IsR0FBQSxFQUFJLFlBQXRCO0lBQW9DLE9BQUEsRUFBUSxJQUE1QztHQUFUO0VBQ0EsT0FBQSxFQUFTO0lBQUMsRUFBQSxFQUFHLE9BQUo7SUFBYSxHQUFBLEVBQUksTUFBakI7SUFBeUIsT0FBQSxFQUFRLElBQWpDO0dBRFQ7OztBQUlELFlBQVksQ0FBQSxTQUFFLENBQUEsYUFBZCxHQUE4QixTQUFDLE9BQUQ7RUFDN0IsSUFBRyxFQUFFLENBQUMsTUFBSCxDQUFVLE9BQVYsQ0FBSDtJQUNDLElBQUMsQ0FBQSxPQUFELEdBQVc7SUFDWCxJQUFDLENBQUEsaUJBQUQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxhQUFELENBQWUsSUFBQyxDQUFBLE9BQWhCLEVBSEQ7O0FBS0EsU0FBTztBQU5zQjs7QUFTOUIsWUFBWSxDQUFBLFNBQUUsQ0FBQSxpQkFBZCxHQUFrQyxTQUFBO0FBQ2pDLE1BQUE7RUFBQSxJQUF1QyxJQUFDLENBQUEsT0FBTyxFQUFDLEtBQUQsRUFBL0M7SUFBQSxJQUFDLENBQUEsT0FBTyxDQUFDLFNBQVQsR0FBcUIsSUFBQyxDQUFBLE9BQU8sRUFBQyxLQUFELEdBQTdCOztFQUNBLElBQWdDLElBQUMsQ0FBQSxPQUFPLENBQUMsR0FBekM7SUFBQSxJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsR0FBZ0IsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUF6Qjs7RUFDQSxJQUFDLENBQUEsT0FBRCx1REFBbUIsQ0FBQyxzQkFBRCxDQUFDLGtCQUFtQjs7U0FDL0IsQ0FBQyxtQkFBb0I7OztTQUNyQixDQUFDLHNCQUF1Qjs7RUFDaEMsSUFBQyxDQUFBLE9BQU8sQ0FBQyxhQUFULEdBQ0ksSUFBQyxD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ZCxDQURMO0dBREQ7QUFGNEI7O0FBYzdCLFlBQVksQ0FBQSxTQUFFLENBQUEsY0FBZCxHQUErQixTQUFDLFNBQUQ7QUFDOUIsTUFBQTtFQUFBLE9BQU8sSUFBQyxDQUFBO0VBQ1IsSUFBQyxDQUFBLE9BQUQsR0FBVztBQUNYO0FBQUEsT0FBQSxzQ0FBQTs7SUFBQSxRQUFBLENBQVMsSUFBVDtBQUFBO0FBSDhCIiwic291cmNlc0NvbnRlbnQiOlsiYmFzZVN0YXRlVHJpZ2dlcnMgPVxuXHQnaG92ZXInOiB7b246J21vdXNlZW50ZXInLCBvZmY6J21vdXNlbGVhdmUnLCBidWJibGVzOnRydWV9XG5cdCdmb2N1cyc6IHtvbjonZm9jdXMnLCBvZmY6J2JsdXInLCBidWJibGVzOnRydWV9XG5cblxuUXVpY2tFbGVtZW50Ojp1cGRhdGVPcHRpb25zID0gKG9wdGlvbnMpLT5cblx0aWYgSVMub2JqZWN0KG9wdGlvbnMpIFxuXHRcdEBvcHRpb25zID0gb3B0aW9uc1xuXHRcdEBfbm9ybWFsaXplT3B0aW9ucygpXG5cdFx0QF9hcHBseU9wdGlvbnMoQG9wdGlvbnMpXG5cdFxuXHRyZXR1cm4gQFxuXG5cblF1aWNrRWxlbWVudDo6X25vcm1hbGl6ZU9wdGlvbnMgPSAoKS0+XG5cdEBvcHRpb25zLmNsYXNzTmFtZSA9IEBvcHRpb25zLmNsYXNzIGlmIEBvcHRpb25zLmNsYXNzXG5cdEBvcHRpb25zLmhyZWYgPSBAb3B0aW9ucy51cmwgaWYgQG9wdGlvbnMudXJsXG5cdEByZWxhdGVkID0gQG9wdGlvbnMucmVsYXRlZEluc3RhbmNlID89IEBcblx0QG9wdGlvbnMudW5wYXNzYWJsZVN0YXRlcyA/PSBbXVxuXHRAb3B0aW9ucy5wYXNzU3RhdGVUb0NoaWxkcmVuID89IHRydWVcblx0QG9wdGlvbnMuc3RhdGVUcmlnZ2VycyA9XG5cdFx0aWYgQG9wdGlvbnMuc3RhdGVUcmlnZ2Vyc1xuXHRcdFx0ZXh0ZW5kLmNsb25lLmRlZXAoYmFzZVN0YXRlVHJpZ2dlcnMsIEBvcHRpb25zLnN0YXRlVHJpZ2dlcnMpXG5cdFx0ZWxzZVxuXHRcdFx0YmFzZVN0YXRlVHJpZ2dlcnNcblx0XG5cdGlmIEB0eXBlIGlzICd0ZXh0J1xuXHRcdEBfcGFyc2VUZXh0KClcblx0ZWxzZVxuXHRcdEBfcGFyc2VTdHlsZXMoKVxuXHRcblx0cmV0dXJuXG5cblxuUXVpY2tFbGVtZW50OjpfcGFyc2VTdHlsZXMgPSAoKS0+XG5cdHJldHVybiBpZiBub3QgSVMub2JqZWN0UGxhaW4oQG9wdGlvbnMuc3R5bGUpXG5cdGtleXMgPSBPYmplY3Qua2V5cyhAb3B0aW9ucy5zdHlsZSlcblx0c3RhdGVzID0ga2V5cy5maWx0ZXIgKGtleSktPiBoZWxwZXJzLmlzU3RhdGVTdHlsZShrZXkpXG5cdHNwZWNpYWxTdGF0ZXMgPSBoZWxwZXJzLnJlbW92ZUl0ZW0oc3RhdGVzLnNsaWNlKCksICckYmFzZScpXG5cdEBfbWVkaWFTdGF0ZXMgPSBzdGF0ZXMuZmlsdGVyKChrZXkpLT4ga2V5WzBdIGlzICdAJykubWFwIChzdGF0ZSktPiBzdGF0ZS5zbGljZSgxKVxuXHRAX3Byb3ZpZGVkU3RhdGVzID0gc3RhdGVzLm1hcCAoc3RhdGUpLT4gc3RhdGUuc2xpY2UoMSkgIyBSZW1vdmUgJyQnIHByZWZpeFxuXG5cdGlmIG5vdCBoZWxwZXJzLmluY2x1ZGVzKHN0YXRlcywgJyRiYXNlJylcblx0XHRpZiBzdGF0ZXMubGVuZ3RoICMgSW5kaWNhdGVzIG90aGVyIHN0YXRlcyB3ZXJlIHByb3ZpZGVkIGJ1dCB0aGUgJGJhc2Ugc3RhdGUgaGFzIG5vIHN0eWxpbmdcblx0XHRcdEBfc3R5bGVzLmJhc2UgPSBleHRlbmQuY2xvbmUubm90S2V5cyhzdGF0ZXMpKEBvcHRpb25zLnN0eWxlKVxuXHRcdGVsc2Vcblx0XHRcdEBfc3R5bGVzLmJhc2UgPSBAb3B0aW9ucy5zdHlsZVxuXHRlbHNlXG5cdFx0QF9zdHlsZXMuYmFzZSA9IEBvcHRpb25zLnN0eWxlLiRiYXNlXG5cblxuXHRmbGF0dGVuTmVzdGVkU3RhdGVzID0gKHN0eWxlT2JqZWN0LCBjaGFpbik9PlxuXHRcdHN0eWxlS2V5cyA9IE9iamVjdC5rZXlzKHN0eWxlT2JqZWN0KVxuXHRcdG91dHB1dCA9IHt9XG5cdFx0aGFzTm9uU3RhdGVQcm9wcyA9IGZhbHNlXG5cdFx0XG5cdFx0Zm9yIHN0YXRlIGluIHN0eWxlS2V5c1xuXHRcdFx0aWYgbm90IGhlbHBlcnMuaXNTdGF0ZVN0eWxlKHN0YXRlKVxuXHRcdFx0XHRoYXNOb25TdGF0ZVByb3BzID0gdHJ1ZVxuXHRcdFx0XHRvdXRwdXRbc3RhdGVdID0gc3R5bGVPYmplY3Rbc3RhdGVdXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNoYWluLnB1c2goc3RhdGVfID0gc3RhdGUuc2xpY2UoMSkpXG5cdFx0XHRcdHN0YXRlQ2hhaW4gPSBuZXcgKF8kc20oJy4vc3RhdGVDaGFpbicgKSkoY2hhaW4pXG5cdFx0XHRcdEBfc3RhdGVTaGFyZWQgPz0gW11cblx0XHRcdFx0QF9wcm92aWRlZFN0YXRlc1NoYXJlZCA/PSBbXVxuXHRcdFx0XHRAX3Byb3ZpZGVkU3RhdGVzU2hhcmVkLnB1c2goc3RhdGVDaGFpbilcblx0XHRcdFx0QF9tZWRpYVN0YXRlcy5wdXNoKHN0YXRlXykgaWYgc3RhdGVbMF0gaXMgJ0AnXG5cdFx0XHRcdEBfc3R5bGVzW3N0YXRlQ2hhaW4uc3RyaW5nXSA9IGZsYXR0ZW5OZXN0ZWRTdGF0ZXMoc3R5bGVPYmplY3Rbc3RhdGVdLCBjaGFpbilcblx0XHRcblx0XHRyZXR1cm4gaWYgaGFzTm9uU3RhdGVQcm9wcyB0aGVuIG91dHB1dFxuXG5cblx0Zm9yIHN0YXRlIGluIHNwZWNpYWxTdGF0ZXNcblx0XHRzdGF0ZV8gPSBzdGF0ZS5zbGljZSgxKVxuXHRcdFxuXHRcdHN0YXRlU3R5bGVzID0gZmxhdHRlbk5lc3RlZFN0YXRlcyhAb3B0aW9ucy5zdHlsZVtzdGF0ZV0sIFtzdGF0ZV9dKVxuXHRcdEBfc3R5bGVzW3N0YXRlX10gPSBzdGF0ZVN0eWxlcyBpZiBzdGF0ZVN0eWxlc1xuXG5cdHJldHVyblxuXG5cblxuUXVpY2tFbGVtZW50OjpfcGFyc2VUZXh0ID0gKCktPlxuXHRyZXR1cm4gaWYgbm90IElTLm9iamVjdFBsYWluKEBvcHRpb25zLnRleHQpXG5cdHN0YXRlcyA9IE9iamVjdC5rZXlzKEBvcHRpb25zLnRleHQpLm1hcCAoc3RhdGUpLT4gc3RhdGUuc2xpY2UoMSlcblx0QF9wcm92aWRlZFN0YXRlcyA9IHN0YXRlcy5maWx0ZXIgKHN0YXRlKS0+IHN0YXRlIGlzbnQgJ2Jhc2UnXG5cdEBfdGV4dHMgPSBiYXNlOicnXG5cdEBfdGV4dHNbc3RhdGVdID0gQG9wdGlvbnMudGV4dFsnJCcrc3RhdGVdIGZvciBzdGF0ZSBpbiBzdGF0ZXNcblx0XG5cdHJldHVyblxuXG5cblF1aWNrRWxlbWVudDo6X2FwcGx5T3B0aW9ucyA9ICgpLT5cblx0aWYgcmVmPShAb3B0aW9ucy5pZCBvciBAb3B0aW9ucy5yZWYpIHRoZW4gQGF0dHIoJ2RhdGEtcmVmJywgQHJlZj1yZWYpXG5cdGlmIEBvcHRpb25zLmlkIHRoZW4gQGVsLmlkID0gQG9wdGlvbnMuaWRcblx0aWYgQG9wdGlvbnMuY2xhc3NOYW1lIHRoZW4gQGVsLmNsYXNzTmFtZSA9IEBvcHRpb25zLmNsYXNzTmFtZVxuXHRpZiBAb3B0aW9ucy5zcmMgdGhlbiBAZWwuc3JjID0gQG9wdGlvbnMuc3JjXG5cdGlmIEBvcHRpb25zLmhyZWYgdGhlbiBAZWwuaHJlZiA9IEBvcHRpb25zLmhyZWZcblx0aWYgQG9wdGlvbnMudHlwZSB0aGVuIEBlbC50eXBlID0gQG9wdGlvbnMudHlwZVxuXHRpZiBAb3B0aW9ucy5uYW1lIHRoZW4gQGVsLm5hbWUgPSBAb3B0aW9ucy5uYW1lXG5cdGlmIEBvcHRpb25zLnZhbHVlIHRoZW4gQGVsLnZhbHVlID0gQG9wdGlvbnMudmFsdWVcblx0aWYgQG9wdGlvbnMuc2VsZWN0ZWQgdGhlbiBAZWwuc2VsZWN0ZWQgPSBAb3B0aW9ucy5zZWxlY3RlZFxuXHRpZiBAb3B0aW9ucy5jaGVja2VkIHRoZW4gQGVsLmNoZWNrZWQgPSBAb3B0aW9ucy5jaGVja2VkXG5cdGlmIEBvcHRpb25zLnByb3BzIHRoZW4gQHByb3Aoa2V5LHZhbHVlKSBmb3Iga2V5LHZhbHVlIG9mIEBvcHRpb25zLnByb3BzXG5cdGlmIEBvcHRpb25zLmF0dHJzIHRoZW4gQGF0dHIoa2V5LHZhbHVlKSBmb3Iga2V5LHZhbHVlIG9mIEBvcHRpb25zLmF0dHJzXG5cdEBzdHlsZShAX3N0eWxlcy5iYXNlKSBpZiBub3QgQG9wdGlvbnMuc3R5bGVBZnRlckluc2VydFxuXHRAdGV4dCA9IEBfdGV4dHMuYmFzZSBpZiBAX3RleHRzXG5cblx0QG9uSW5zZXJ0ZWQgKCk9PlxuXHRcdGlmIEBvcHRpb25zLnN0eWxlQWZ0ZXJJbnNlcnRcblx0XHRcdEBzdHlsZShleHRlbmQuY2xvbmUgQF9zdHlsZXMuYmFzZSwgQF9nZXRTdGF0ZVN0eWxlcyhAX2dldEFjdGl2ZVN0YXRlcygpKS4uLilcblxuXHRcdF8gPSBAX2luc2VydGVkID0gQFxuXG5cdFx0aWYgKG1lZGlhU3RhdGVzPUBfbWVkaWFTdGF0ZXMpIGFuZCBAX21lZGlhU3RhdGVzLmxlbmd0aFxuXHRcdFx0QF9tZWRpYVN0YXRlcyA9IG5ldyAoKS0+XG5cdFx0XHRcdGZvciBxdWVyeVN0cmluZyBpbiBtZWRpYVN0YXRlc1xuXHRcdFx0XHRcdEBbcXVlcnlTdHJpbmddID0gTWVkaWFRdWVyeS5yZWdpc3RlcihfLCBxdWVyeVN0cmluZylcblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBAXG5cblx0aWYgQG9wdGlvbnMucmVjYWxjT25SZXNpemVcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAncmVzaXplJywgKCk9PiBAcmVjYWxjU3R5bGUoKVxuXG5cdGlmIEBvcHRpb25zLmV2ZW50c1xuXHRcdEBvbihldmVudCwgaGFuZGxlcikgZm9yIGV2ZW50LGhhbmRsZXIgb2YgQG9wdGlvbnMuZXZlbnRzXG5cblx0cmV0dXJuXG5cblxuUXVpY2tFbGVtZW50OjpfYXR0YWNoU3RhdGVFdmVudHMgPSAoZm9yY2UpLT5cblx0Zm9yIHN0YXRlLHRyaWdnZXIgb2YgQG9wdGlvbnMuc3RhdGVUcmlnZ2VycyB0aGVuIGRvIChzdGF0ZSx0cmlnZ2VyKT0+XG5cdFx0cmV0dXJuIGlmIG5vdCBoZWxwZXJzLmluY2x1ZGVzKEBfcHJvdmlkZWRTdGF0ZXMsIHN0YXRlKSBhbmQgbm90IGZvcmNlIGFuZCBub3QgdHJpZ2dlci5mb3JjZVxuXHRcdGVuYWJsZXIgPSBpZiBJUy5zdHJpbmcodHJpZ2dlcikgdGhlbiB0cmlnZ2VyIGVsc2UgdHJpZ2dlci5vblxuXHRcdGRpc2FibGVyID0gdHJpZ2dlci5vZmYgaWYgSVMub2JqZWN0KHRyaWdnZXIpXG5cblx0XHRAX2xpc3RlblRvIGVuYWJsZXIsICgpPT4gQHN0YXRlKHN0YXRlLCBvbiwgdHJpZ2dlci5idWJibGVzKVxuXHRcdGlmIGRpc2FibGVyIHRoZW4gQF9saXN0ZW5UbyBkaXNhYmxlciwgKCk9PiBAc3RhdGUoc3RhdGUsIG9mZiwgdHJpZ2dlci5idWJibGVzKVxuXHRcblx0cmV0dXJuXG5cblxuXG5RdWlja0VsZW1lbnQ6Ol9wcm94eVBhcmVudCA9ICgpLT5cblx0cGFyZW50ID0gdW5kZWZpbmVkXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBALCAnX3BhcmVudCcsXG5cdFx0Z2V0OiAoKS0+IHBhcmVudFxuXHRcdHNldDogKG5ld1BhcmVudCktPiBpZiBwYXJlbnQ9bmV3UGFyZW50XG5cdFx0XHRsYXN0UGFyZW50ID0gQHBhcmVudHMuc2xpY2UoLTEpWzBdXG5cdFx0XHRpZiBsYXN0UGFyZW50LnJhdyBpcyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblx0XHRcdFx0QF91bnByb3h5UGFyZW50KG5ld1BhcmVudClcblx0XHRcdGVsc2Vcblx0XHRcdFx0cGFyZW50Lm9uSW5zZXJ0ZWQgKCk9PlxuXHRcdFx0XHRcdEBfdW5wcm94eVBhcmVudChuZXdQYXJlbnQpIGlmIHBhcmVudCBpcyBuZXdQYXJlbnRcblx0XHRcdHJldHVyblxuXG5cblF1aWNrRWxlbWVudDo6X3VucHJveHlQYXJlbnQgPSAobmV3UGFyZW50KS0+XG5cdGRlbGV0ZSBAX3BhcmVudFxuXHRAX3BhcmVudCA9IG5ld1BhcmVudFxuXHRjYWxsYmFjayhAKSBmb3IgY2FsbGJhY2sgaW4gQF9pbnNlcnRlZENhbGxiYWNrc1xuXHRyZXR1cm5cblxuXG5cblxuIl19
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnRzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLGVBQUEsR0FBa0I7O0FBRWxCLFlBQVksQ0FBQSxTQUFFLENBQUEsRUFBZCxHQUFtQixTQUFDLFVBQUQsRUFBYSxRQUFiO0FBQ2xCLE1BQUE7O0lBQUEsSUFBQyxDQUFBLGtCQUFtQjtNQUFDLE1BQUEsRUFBTyxFQUFSOzs7RUFFcEIsSUFBRyxFQUFFLENBQUMsTUFBSCxDQUFVLFVBQVYsQ0FBQSxJQUEwQixFQUFFLEVBQUMsUUFBRCxFQUFGLENBQVksUUFBWixDQUE3QjtJQUNDLEtBQUEsR0FBUSxVQUFVLENBQUMsS0FBWCxDQUFpQixHQUFqQjtJQUNSLFdBQUEsR0FBYyxLQUFNLENBQUEsQ0FBQTtJQUNwQixVQUFBLEdBQWEsS0FBTSxDQUFBLENBQUE7SUFFbkIsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsZUFBakIsQ0FBaUMsQ0FBQyxPQUFsQyxDQUEwQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsU0FBRDtRQUN6QyxJQUFHLENBQUksS0FBQyxDQUFBLGVBQWdCLENBQUEsU0FBQSxDQUF4QjtVQUNDLEtBQUMsQ0FBQSxlQUFnQixDQUFBLFNBQUEsQ0FBakIsR0FBOEI7VUFDOUIsS0FBQyxDQUFBLFNBQUQsQ0FBVyxTQUFYLEVBQXNCLFNBQUMsS0FBRDttQkFBVSxLQUFDLENBQUEsZUFBRCxDQUFpQixTQUFqQixFQUE0QixLQUE1QjtVQUFWLENBQXRCLEVBRkQ7O1FBSUEsSUFBbUQsV0FBbkQ7VUFBQSxLQUFDLENBQUEsZUFBZSxDQUFDLE1BQU8sQ0FBQSxXQUFBLENBQXhCLEdBQXVDLFNBQXZDOztlQUNBLEtBQUMsQ0FBQSxlQUFnQixDQUFBLFNBQUEsQ0FBVSxDQUFDLElBQTVCLENBQWlDLFFBQWpDO01BTnlDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUExQyxFQUxEOztBQWFBLFNBQU87QUFoQlc7O0FBbUJuQixZQUFZLENBQUEsU0FBRSxDQUFBLElBQWQsR0FBcUIsU0FBQyxVQUFELEVBQWEsUUFBYjtBQUNwQixNQUFBO0VBQUEsSUFBRyxFQUFFLENBQUMsTUFBSCxDQUFVLFVBQVYsQ0FBQSxJQUEwQixFQUFFLEVBQUMsUUFBRCxFQUFGLENBQVksUUFBWixDQUE3QjtJQUNDLElBQUMsQ0FBQSxFQUFELENBQUksVUFBSixFQUFnQixZQUFBLEdBQWEsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLEtBQUQ7UUFDNUIsS0FBQyxDQUFBLEdBQUQsQ0FBSyxVQUFMLEVBQWlCLFlBQWpCO2VBQ0EsUUFBUSxDQUFDLElBQVQsQ0FBYyxLQUFDLENBQUEsRUFBZixFQUFtQixLQUFuQjtNQUY0QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBN0IsRUFERDs7QUFLQSxTQUFPO0FBTmE7O0FBVXJCLFlBQVksQ0FBQSxTQUFFLENBQUEsR0FBZCxHQUFvQixTQUFDLFVBQUQsRUFBYSxRQUFiO0FBQ25CLE1BQUE7O0lBQUEsSUFBQyxDQUFBLGtCQUFtQjtNQUFDLE1BQUEsRUFBTyxFQUFSOzs7RUFDcEIsSUFBRyxDQUFJLEVBQUUsQ0FBQyxNQUFILENBQVUsVUFBVixDQUFQO0FBQ0MsU0FBQSxpQ0FBQTtNQUFBLElBQUMsQ0FBQSxHQUFELENBQUssU0FBTDtBQUFBLEtBREQ7R0FBQSxNQUFBO0lBSUMsS0FBQSxHQUFRLFVBQVUsQ0FBQyxLQUFYLENBQWlCLEdBQWpCO0lBQ1IsV0FBQSxHQUFjLEtBQU0sQ0FBQSxDQUFBO0lBQ3BCLFVBQUEsR0FBYSxLQUFNLENBQUEsQ0FBQTtJQUNuQixVQUFVLENBQUMsS0FBWCxDQUFpQixlQUFqQixDQUFpQyxDQUFDLE9BQWxDLENBQTBDLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxTQUFEO1FBQ3pDLElBQUcsS0FBQyxDQUFBLGVBQWdCLENBQUEsU0FBQSxDQUFwQjs7WUFDQyxXQUFZLEtBQUMsQ0FBQSxlQUFlLENBQUMsTUFBTyxDQUFBLFdBQUE7O1VBRXBDLElBQUcsRUFBRSxFQUFDLFFBQUQsRUFBRixDQUFZLFFBQVosQ0FBSDttQkFDQyxPQUFPLENBQUMsVUFBUixDQUFtQixLQUFDLENBQUEsZUFBZ0IsQ0FBQSxTQUFBLENBQXBDLEVBQWdELFFBQWhELEVBREQ7V0FBQSxNQUVLLElBQUcsQ0FBSSxXQUFQO21CQUNKLEtBQUMsQ0FBQSxlQUFnQixDQUFBLFNBQUEsQ0FBVSxDQUFDLE1BQTVCLEdBQXFDLEVBRGpDO1dBTE47O01BRHlDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUExQyxFQVBEOztBQWdCQSxTQUFPO0FBbEJZOztBQXNCcEIsWUFBWSxDQUFBLFNBQUUsQ0FBQSxJQUFkLEdBQXFCLFNBQUMsU0FBRCxFQUFZLE9BQVosRUFBMEIsVUFBMUI7QUFDcEIsTUFBQTs7SUFEZ0MsVUFBUTs7O0lBQU0sYUFBVzs7RUFDekQsSUFBRyxTQUFBLElBQWMsRUFBRSxDQUFDLE1BQUgsQ0FBVSxTQUFWLENBQWpCO0lBQ0MsS0FBQSxHQUFRLFFBQVEsQ0FBQyxXQUFULENBQXFCLE9BQXJCO0lBQ1IsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsU0FBaEIsRUFBMkIsT0FBM0IsRUFBb0MsVUFBcEM7SUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLGFBQUosQ0FBa0IsS0FBbEIsRUFIRDs7QUFLQSxTQUFPO0FBTmE7O0FBU3JCLFlBQVksQ0FBQSxTQUFFLENBQUEsV0FBZCxHQUE0QixTQUFDLFNBQUQsRUFBWSxHQUFaO0FBQzNCLE1BQUE7RUFBQSxJQUFHLFNBQUEsSUFBYyxFQUFFLENBQUMsTUFBSCxDQUFVLFNBQVYsQ0FBZCwrQ0FBeUQsQ0FBQSxTQUFBLFdBQTVEO0lBQ0MsSUFBQyxDQUFBLGVBQUQsQ0FBaUIsU0FBakIsRUFBNEIsR0FBNUIsRUFERDs7QUFHQSxTQUFPO0FBSm9COztBQVE1QixZQUFZLENBQUEsU0FBRSxDQUFBLFVBQWQsR0FBMkIsU0FBQyxRQUFELEVBQVcsZ0JBQVg7O0lBQVcsbUJBQWlCOztFQUFRLElBQUcsRUFBRSxFQUFDLFFBQUQsRUFBRixDQUFZLFFBQVosQ0FBSDtJQUM5RCxJQUFHLENBQUksSUFBQyxDQUFBLFNBQVI7TUFDQyxJQUFDLENBQUEsa0JBQWtCLENBQUMsSUFBcEIsQ0FBeUIsUUFBekIsRUFERDtLQUFBLE1BR0ssSUFBRyxnQkFBSDtNQUNKLFFBQUEsQ0FBUyxJQUFULEVBREk7O0FBR0wsV0FBTyxLQVB1RDs7QUFBcEM7O0FBVTNCLFlBQVksQ0FBQSxTQUFFLENBQUEsZUFBZCxHQUFnQyxTQUFDLFNBQUQsRUFBWSxHQUFaO0FBQy9CLE1BQUE7RUFBQSxTQUFBLEdBQVksSUFBQyxDQUFBLGVBQWdCLENBQUEsU0FBQSxDQUFVLENBQUMsS0FBNUIsQ0FBQTtBQUNaLE9BQUEsMkNBQUE7O0lBQUEsRUFBRSxDQUFDLElBQUgsQ0FBUSxJQUFDLENBQUEsRUFBVCxFQUFhLEdBQWI7QUFBQTtBQUYrQjs7O0FBTWhDOztBQUNBLFlBQVksQ0FBQSxTQUFFLENBQUEsU0FBZCxHQUEwQixTQUFDLFNBQUQsRUFBWSxRQUFaO0FBQ3pCLE1BQUE7RUFBQSxZQUFBLEdBQWtCLElBQUMsQ0FBQSxFQUFFLENBQUMsZ0JBQVAsR0FBNkIsa0JBQTdCLEdBQXFEO0VBQ3BFLG9CQUFBLEdBQTBCLElBQUMsQ0FBQSxFQUFFLENBQUMsZ0JBQVAsR0FBNkIsU0FBN0IsR0FBNEMsSUFBQSxHQUFLO0VBRXhFLElBQUMsQ0FBQSxFQUFHLENBQUEsWUFBQSxDQUFKLENBQWtCLG9CQUFsQixFQUF3QyxRQUF4QztBQUNBLFNBQU87QUFMa0IiLCJzb3VyY2VzQ29udGVudCI6WyJyZWdleFdoaXRlc3BhY2UgPSAvXFxzKy9cblxuUXVpY2tFbGVtZW50OjpvbiA9IChldmVudE5hbWVzLCBjYWxsYmFjayktPlxuXHRAX2V2ZW50Q2FsbGJhY2tzID89IHtfX3JlZnM6e319XG5cdFxuXHRpZiBJUy5zdHJpbmcoZXZlbnROYW1lcykgYW5kIElTLmZ1bmN0aW9uKGNhbGxiYWNrKVxuXHRcdHNwbGl0ID0gZXZlbnROYW1lcy5zcGxpdCgnLicpXG5cdFx0Y2FsbGJhY2tSZWYgPSBzcGxpdFsxXVxuXHRcdGV2ZW50TmFtZXMgPSBzcGxpdFswXVxuXHRcdFxuXHRcdGV2ZW50TmFtZXMuc3BsaXQocmVnZXhXaGl0ZXNwYWNlKS5mb3JFYWNoIChldmVudE5hbWUpPT5cblx0XHRcdGlmIG5vdCBAX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV1cblx0XHRcdFx0QF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdID0gW11cdFx0XG5cdFx0XHRcdEBfbGlzdGVuVG8gZXZlbnROYW1lLCAoZXZlbnQpPT4gQF9pbnZva2VIYW5kbGVycyhldmVudE5hbWUsIGV2ZW50KVxuXG5cdFx0XHRAX2V2ZW50Q2FsbGJhY2tzLl9fcmVmc1tjYWxsYmFja1JlZl0gPSBjYWxsYmFjayBpZiBjYWxsYmFja1JlZlxuXHRcdFx0QF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spXG5cblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6Om9uY2UgPSAoZXZlbnROYW1lcywgY2FsbGJhY2spLT5cblx0aWYgSVMuc3RyaW5nKGV2ZW50TmFtZXMpIGFuZCBJUy5mdW5jdGlvbihjYWxsYmFjaylcblx0XHRAb24gZXZlbnROYW1lcywgb25jZUNhbGxiYWNrPShldmVudCk9PlxuXHRcdFx0QG9mZihldmVudE5hbWVzLCBvbmNlQ2FsbGJhY2spXG5cdFx0XHRjYWxsYmFjay5jYWxsKEBlbCwgZXZlbnQpXG5cdFxuXHRyZXR1cm4gQFxuXG5cblxuUXVpY2tFbGVtZW50OjpvZmYgPSAoZXZlbnROYW1lcywgY2FsbGJhY2spLT5cblx0QF9ldmVudENhbGxiYWNrcyA/PSB7X19yZWZzOnt9fVxuXHRpZiBub3QgSVMuc3RyaW5nKGV2ZW50TmFtZXMpXG5cdFx0QG9mZihldmVudE5hbWUpIGZvciBldmVudE5hbWUgb2YgQF9ldmVudENhbGxiYWNrc1xuXHRcblx0ZWxzZVxuXHRcdHNwbGl0ID0gZXZlbnROYW1lcy5zcGxpdCgnLicpXG5cdFx0Y2FsbGJhY2tSZWYgPSBzcGxpdFsxXVxuXHRcdGV2ZW50TmFtZXMgPSBzcGxpdFswXVxuXHRcdGV2ZW50TmFtZXMuc3BsaXQocmVnZXhXaGl0ZXNwYWNlKS5mb3JFYWNoIChldmVudE5hbWUpPT5cblx0XHRcdGlmIEBfZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXVxuXHRcdFx0XHRjYWxsYmFjayA/PSBAX2V2ZW50Q2FsbGJhY2tzLl9fcmVmc1tjYWxsYmFja1JlZl1cblxuXHRcdFx0XHRpZiBJUy5mdW5jdGlvbihjYWxsYmFjaylcblx0XHRcdFx0XHRoZWxwZXJzLnJlbW92ZUl0ZW0oQF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdLCBjYWxsYmFjaylcblx0XHRcdFx0ZWxzZSBpZiBub3QgY2FsbGJhY2tSZWZcblx0XHRcdFx0XHRAX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV0ubGVuZ3RoID0gMFxuXG5cdHJldHVybiBAXG5cblxuXG5RdWlja0VsZW1lbnQ6OmVtaXQgPSAoZXZlbnROYW1lLCBidWJibGVzPXRydWUsIGNhbmNlbGFibGU9dHJ1ZSktPlxuXHRpZiBldmVudE5hbWUgYW5kIElTLnN0cmluZyhldmVudE5hbWUpXG5cdFx0ZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuXHRcdGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIGJ1YmJsZXMsIGNhbmNlbGFibGUpXG5cdFx0QGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG5cblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6OmVtaXRQcml2YXRlID0gKGV2ZW50TmFtZSwgYXJnKS0+XG5cdGlmIGV2ZW50TmFtZSBhbmQgSVMuc3RyaW5nKGV2ZW50TmFtZSkgYW5kIEBfZXZlbnRDYWxsYmFja3M/W2V2ZW50TmFtZV1cblx0XHRAX2ludm9rZUhhbmRsZXJzKGV2ZW50TmFtZSwgYXJnKVxuXHRcblx0cmV0dXJuIEBcblxuXG5cblF1aWNrRWxlbWVudDo6b25JbnNlcnRlZCA9IChjYWxsYmFjaywgaW52b2tlSWZJbnNlcnRlZD10cnVlKS0+IGlmIElTLmZ1bmN0aW9uKGNhbGxiYWNrKVxuXHRpZiBub3QgQF9pbnNlcnRlZFxuXHRcdEBfaW5zZXJ0ZWRDYWxsYmFja3MucHVzaChjYWxsYmFjaylcblx0XG5cdGVsc2UgaWYgaW52b2tlSWZJbnNlcnRlZFxuXHRcdGNhbGxiYWNrKEApXG5cblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6Ol9pbnZva2VIYW5kbGVycyA9IChldmVudE5hbWUsIGFyZyktPlxuXHRjYWxsYmFja3MgPSBAX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV0uc2xpY2UoKVxuXHRjYi5jYWxsKEBlbCwgYXJnKSBmb3IgY2IgaW4gY2FsbGJhY2tzXG5cdHJldHVyblxuXG5cbiMjIyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAjIyNcblF1aWNrRWxlbWVudDo6X2xpc3RlblRvID0gKGV2ZW50TmFtZSwgY2FsbGJhY2spLT5cblx0bGlzdGVuTWV0aG9kID0gaWYgQGVsLmFkZEV2ZW50TGlzdGVuZXIgdGhlbiAnYWRkRXZlbnRMaXN0ZW5lcicgZWxzZSAnYXR0YWNoRXZlbnQnXG5cdGV2ZW50TmFtZVRvTGlzdGVuRm9yID0gaWYgQGVsLmFkZEV2ZW50TGlzdGVuZXIgdGhlbiBldmVudE5hbWUgZWxzZSBcIm9uI3tldmVudE5hbWV9XCJcblx0XG5cdEBlbFtsaXN0ZW5NZXRob2RdKGV2ZW50TmFtZVRvTGlzdGVuRm9yLCBjYWxsYmFjaylcblx0cmV0dXJuIEBcblxuXG5cblxuIl19
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxXQUFBO0VBQUE7O0FBQUEsV0FBQSxHQUFjOztBQUdkLFlBQVksQ0FBQSxTQUFFLENBQUEsS0FBZCxHQUFzQixTQUFDLFdBQUQsRUFBYyxLQUFkLEVBQXFCLE9BQXJCLEVBQThCLE1BQTlCO0FBQ3JCLE1BQUE7RUFBQSxJQUFHLFNBQVMsQ0FBQyxNQUFWLEtBQW9CLENBQXZCO1dBQ0MsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsSUFBQyxDQUFBLE1BQWxCLEVBQTBCLFdBQTFCLEVBREQ7R0FBQSxNQUdLLElBQUcsSUFBQyxDQUFBLGdCQUFELElBQXNCLE1BQUEsS0FBWSxJQUFyQztJQUNKLElBQUMsQ0FBQSxnQkFBZ0IsQ0FBQyxLQUFsQixDQUF3QixXQUF4QixFQUFxQyxLQUFyQyxFQUE0QyxPQUE1QyxFQUFxRCxJQUFyRDtBQUNBLFdBQU8sS0FGSDtHQUFBLE1BSUEsSUFBRyxFQUFFLENBQUMsTUFBSCxDQUFVLFdBQVYsQ0FBSDtJQUNKLElBQXNDLFdBQVksQ0FBQSxDQUFBLENBQVosS0FBa0IsR0FBeEQ7TUFBQSxXQUFBLEdBQWMsV0FBVyxDQUFDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBZDs7SUFDQSxJQUFZLFdBQUEsS0FBZSxNQUEzQjtBQUFBLGFBQU8sS0FBUDs7SUFDQSxZQUFBLEdBQWUsQ0FBQyxDQUFDO0lBQ2pCLFlBQUEsR0FBZSxJQUFDLENBQUEsZ0JBQUQsQ0FBa0IsV0FBbEIsRUFBK0IsS0FBL0I7SUFHZixJQUFHLElBQUMsQ0FBQSxLQUFELENBQU8sV0FBUCxDQUFBLEtBQXlCLFlBQTVCO01BQ0MsSUFBQSxHQUFVLElBQUMsQ0FBQSxJQUFELEtBQVMsTUFBWixHQUF3QixNQUF4QixHQUFvQztNQUUzQyxJQUFHLFlBQUg7UUFDQyxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxXQUFiO1FBQ0Es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QWEsSUFBQyxDQUFBLE1BQU8sQ0FBQSxXQUFBLENBQS9CLENBQWY7SUFDQyxjQUFBLEdBQWlCLElBQUMsQ0FBQSxrQkFBRCxDQUFvQixXQUFwQixFQUFpQyxZQUFqQztJQUVqQixJQUFBLENBQTBCLGNBQWMsQ0FBQyxNQUF6QztNQUFBLElBQUMsQ0FBQSxJQUFELEdBQVEsV0FBUjtLQUhEOztBQUQyQjs7QUFRNUIsWUFBWSxDQUFBLFNBQUUsQ0FBQSxZQUFkLEdBQTZCLFNBQUMsV0FBRCxFQUFjLFlBQWQ7QUFDNUIsTUFBQTtFQUFBLElBQUcsSUFBQyxDQUFBLE1BQUQsSUFBWSxFQUFFLENBQUMsTUFBSCxDQUFVLFVBQUEsR0FBYSxJQUFDLENBQUEsTUFBTyxDQUFBLFdBQUEsQ0FBL0IsQ0FBZjtJQUNDLFlBQUEsR0FBZSxZQUFZLENBQUMsTUFBYixDQUFvQixTQUFDLEtBQUQ7YUFBVSxLQUFBLEtBQVc7SUFBckIsQ0FBcEI7SUFDZixVQUFBLEdBQWEsSUFBQyxDQUFBLE1BQU8sQ0FBQSxZQUFhLENBQUEsWUFBWSxDQUFDLE1BQWIsR0FBb0IsQ0FBcEIsQ0FBYjs7TUFDckIsYUFBYyxJQUFDLENBQUEsTUFBTSxDQUFDOztJQUV0QixJQUFDLENBQUEsSUFBRCxHQUFRLFdBTFQ7O0FBRDRCIiwic291cmNlc0NvbnRlbnQiOlsiRFVNTVlfQVJSQVkgPSBbXVxuXG5cblF1aWNrRWxlbWVudDo6c3RhdGUgPSAodGFyZ2V0U3RhdGUsIHZhbHVlLCBidWJibGVzLCBzb3VyY2UpLT5cblx0aWYgYXJndW1lbnRzLmxlbmd0aCBpcyAxXG5cdFx0aGVscGVycy5pbmNsdWRlcyhAX3N0YXRlLCB0YXJnZXRTdGF0ZSlcblxuXHRlbHNlIGlmIEBfc3RhdGVQaXBlVGFyZ2V0IGFuZCBzb3VyY2UgaXNudCBAXG5cdFx0QF9zdGF0ZVBpcGVUYXJnZXQuc3RhdGUodGFyZ2V0U3RhdGUsIHZhbHVlLCBidWJibGVzLCBAKVxuXHRcdHJldHVybiBAXG5cdFxuXHRlbHNlIGlmIElTLnN0cmluZyh0YXJnZXRTdGF0ZSlcblx0XHR0YXJnZXRTdGF0ZSA9IHRhcmdldFN0YXRlLnNsaWNlKDEpIGlmIHRhcmdldFN0YXRlWzBdIGlzICckJ1xuXHRcdHJldHVybiBAIGlmIHRhcmdldFN0YXRlIGlzICdiYXNlJ1xuXHRcdGRlc2lyZWRWYWx1ZSA9ICEhdmFsdWUgIyBDb252ZXJ0IHRoZSB2YWx1ZSB0byBhIGJvb2xlYW5cblx0XHRhY3RpdmVTdGF0ZXMgPSBAX2dldEFjdGl2ZVN0YXRlcyh0YXJnZXRTdGF0ZSwgZmFsc2UpXG5cdFx0XG5cdFx0IyA9PT09IFRvZ2dsZSBzdHlsZXMgZm9yIHRoaXMgc3RhdGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0aWYgQHN0YXRlKHRhcmdldFN0YXRlKSBpc250IGRlc2lyZWRWYWx1ZVxuXHRcdFx0cHJvcCA9IGlmIEB0eXBlIGlzICd0ZXh0JyB0aGVuICdUZXh0JyBlbHNlICdTdHlsZSdcblx0XHRcblx0XHRcdGlmIGRlc2lyZWRWYWx1ZSAjaXMgb25cblx0XHRcdFx0QF9zdGF0ZS5wdXNoKHRhcmdldFN0YXRlKVxuXHRcdFx0XHR0b2dnbGUgPSAnT04nXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGhlbHBlcnMucmVtb3ZlSXRlbShAX3N0YXRlLCB0YXJnZXRTdGF0ZSlcblx0XHRcdFx0dG9nZ2xlID0gJ09GRidcblx0XHRcdFxuXHRcdFx0QFsnX3R1cm4nK3Byb3ArdG9nZ2xlXSh0YXJnZXRTdGF0ZSwgYWN0aXZlU3RhdGVzKVxuXHRcdFx0QGVtaXRQcml2YXRlIFwic3RhdGVDaGFuZ2U6I3t0YXJnZXRTdGF0ZX1cIiwgZGVzaXJlZFZhbHVlXG5cblxuXHRcdCMgPT09PSBQYXNzIHN0YXRlIHRvIHBhcmVudC9jaGlsZHJlbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRpZiBub3QgaGVscGVycy5pbmNsdWRlcyhAb3B0aW9ucy51bnBhc3NhYmxlU3RhdGVzLCB0YXJnZXRTdGF0ZSlcblx0XHRcdGlmIGJ1YmJsZXNcblx0XHRcdFx0QF9wYXJlbnQuc3RhdGUodGFyZ2V0U3RhdGUsIHZhbHVlLCB0cnVlLCBzb3VyY2Ugb3IgQCkgaWYgQHBhcmVudFxuXHRcdFx0ZWxzZSBpZiBAb3B0aW9ucy5wYXNzU3RhdGVUb0NoaWxkcmVuXG5cdFx0XHRcdGNoaWxkLnN0YXRlKHRhcmdldFN0YXRlLCB2YWx1ZSwgZmFsc2UsIHNvdXJjZSBvciBAKSBmb3IgY2hpbGQgaW4gQF9jaGlsZHJlblxuXHRcdFxuXHRcdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjpyZXNldFN0YXRlID0gKCktPlxuXHRmb3IgYWN0aXZlU3RhdGUgaW4gQF9zdGF0ZS5zbGljZSgpXG5cdFx0QHN0YXRlKGFjdGl2ZVN0YXRlLCBvZmYpXG5cblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6OnBpcGVTdGF0ZSA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gaGVscGVycy5ub3JtYWxpemVHaXZlbkVsKHRhcmdldEVsKVxuXG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbCkgYW5kIHRhcmdldEVsIGlzbnQgQFxuXHRcdFx0QF9zdGF0ZVBpcGVUYXJnZXQgPSB0YXJnZXRFbFxuXHRcdFx0dGFyZ2V0RWwuc3RhdGUoYWN0aXZlU3RhdGUsIG9uKSBmb3IgYWN0aXZlU3RhdGUgaW4gQF9zdGF0ZVxuXG5cdGVsc2UgaWYgdGFyZ2V0RWwgaXMgZmFsc2Vcblx0XHRkZWxldGUgQF9zdGF0ZVBpcGVUYXJnZXRcblxuXHRyZXR1cm4gQFxuXG5cblxuXG5RdWlja0VsZW1lbnQ6Ol9nZXRBY3RpdmVTdGF0ZXMgPSAoc3RhdGVUb0V4Y2x1ZGUsIGluY2x1ZGVTaGFyZWRTdGF0ZXM9dHJ1ZSktPlxuXHRyZXR1cm4gRFVNTVlfQVJSQVkgaWYgbm90IEBfcHJvdmlkZWRTdGF0ZXNcblx0cGxhaW5TdGF0ZXMgPSBAX3Byb3ZpZGVkU3RhdGVzLmZpbHRlciAoc3RhdGUpPT4gaGVscGVycy5pbmNsdWRlcyhAX3N0YXRlLCBzdGF0ZSkgYW5kIHN0YXRlIGlzbnQgc3RhdGVUb0V4Y2x1ZGVcblx0XG5cdGlmIG5vdCBpbmNsdWRlU2hhcmVkU3RhdGVzIG9yIG5vdCBAX3Byb3ZpZGVkU3RhdGVzU2hhcmVkXG5cdFx0cmV0dXJuIHBsYWluU3RhdGVzXG5cdGVsc2Vcblx0XHRyZXR1cm4gcGxhaW5TdGF0ZXMuY29uY2F0KEBfc3RhdGVTaGFyZWQpXG5cblxuUXVpY2tFbGVtZW50OjpfZ2V0U3VwZXJpb3JTdGF0ZXMgPSAodGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcyktPlxuXHR0YXJnZXRTdGF0ZUluZGV4ID0gQF9wcm92aWRlZFN0YXRlcy5pbmRleE9mKHRhcmdldFN0YXRlKVxuXHRzdXBlcmlvciA9IGFjdGl2ZVN0YXRlcy5maWx0ZXIgKHN0YXRlKT0+XG5cdFx0QF9wcm92aWRlZFN0YXRlcy5pbmRleE9mKHN0YXRlKSA+IHRhcmdldFN0YXRlSW5kZXhcblxuXG5RdWlja0VsZW1lbnQ6Ol9nZXRTaGFyZWRTdGF0ZXMgPSAodGFyZ2V0U3RhdGUpLT5cblx0YWN0aXZlU3RhdGVzID0gQF9zdGF0ZVxuXHRcblx0QF9wcm92aWRlZFN0YXRlc1NoYXJlZC5maWx0ZXIgKHN0YXRlQ2hhaW4pLT5cblx0XHRzdGF0ZUNoYWluLmluY2x1ZGVzKHRhcmdldFN0YXRlKSBhbmRcblx0XHRzdGF0ZUNoYWluLmlzQXBwbGljYWJsZSh0YXJnZXRTdGF0ZSwgYWN0aXZlU3RhdGVzKVxuXG5cblF1aWNrRWxlbWVudDo6X2dldFN0YXRlU3R5bGVzID0gKHN0YXRlcyktPlxuXHRzdGF0ZXMubWFwIChzdGF0ZSk9PiBAX3N0eWxlc1tzdGF0ZV1cblxuXG5RdWlja0VsZW1lbnQ6Ol90dXJuU3R5bGVPTiA9ICh0YXJnZXRTdGF0ZSwgYWN0aXZlU3RhdGVzKS0+XG5cdGlmIHRhcmdldFN0eWxlID0gQF9zdHlsZXNbdGFyZ2V0U3RhdGVdXG5cdFx0c3VwZXJpb3JTdHlsZXMgPSBAX2dldFN0YXRlU3R5bGVzIEBfZ2V0U3VwZXJpb3JTdGF0ZXModGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcylcblx0XHRAc3R5bGUgZXh0ZW5kLmNsb25lLmtleXModGFyZ2V0U3R5bGUpKHRhcmdldFN0eWxlLCBzdXBlcmlvclN0eWxlcy4uLilcblxuXHRpZiBAX3Byb3ZpZGVkU3RhdGVzU2hhcmVkXG5cdFx0c2hhcmVkU3RhdGVzID0gQF9nZXRTaGFyZWRTdGF0ZXModGFyZ2V0U3RhdGUpXG5cdFx0XG5cdFx0Zm9yIHN0YXRlQ2hhaW4gaW4gc2hhcmVkU3RhdGVzXG5cdFx0XHRAX3N0YXRlU2hhcmVkLnB1c2goc3RhdGVDaGFpbi5zdHJpbmcpIHVubGVzcyBoZWxwZXJzLmluY2x1ZGVzKEBfc3RhdGVTaGFyZWQsIHN0YXRlQ2hhaW4uc3RyaW5nKVxuXHRcdFx0dGFyZ2V0U3R5bGUgPSBAX3N0eWxlc1tzdGF0ZUNoYWluLnN0cmluZ11cblx0XHRcdFxuXHRcdFx0aWYgc3RhdGVDaGFpbi5sZW5ndGggPiAyXG5cdFx0XHRcdGluZmVyaW9yU3RhdGVDaGFpbnMgPSBAX3N0eWxlc1tzdGF0ZUNoYWluLndpdGhvdXQodGFyZ2V0U3RhdGUpXVxuXHRcdFx0XHRAc3R5bGUgZXh0ZW5kLmNsb25lKGluZmVyaW9yU3RhdGVDaGFpbnMsIHRhcmdldFN0eWxlKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAc3R5bGUgdGFyZ2V0U3R5bGVcblx0cmV0dXJuXG5cblxuUXVpY2tFbGVtZW50OjpfdHVyblN0eWxlT0ZGID0gKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpLT5cblx0aWYgdGFyZ2V0U3R5bGUgPSBAX3N0eWxlc1t0YXJnZXRTdGF0ZV1cblx0XHRhY3RpdmVTdHlsZXMgPSBAX2dldFN0YXRlU3R5bGVzKGFjdGl2ZVN0YXRlcylcblx0XHRzdHlsZXNUb0tlZXAgPSBleHRlbmQuY2xvbmUua2V5cyh0YXJnZXRTdHlsZSkoQF9zdHlsZXMuYmFzZSwgYWN0aXZlU3R5bGVzLi4uKVxuXHRcdHN0eWxlc1RvUmVtb3ZlID0gZXh0ZW5kLnRyYW5zZm9ybSgtPiBudWxsKS5jbG9uZSh0YXJnZXRTdHlsZSlcblxuXHRcdEBzdHlsZSBleHRlbmQoc3R5bGVzVG9SZW1vdmUsIHN0eWxlc1RvS2VlcClcblx0XG5cdGlmIEBfcHJvdmlkZWRTdGF0ZXNTaGFyZWRcblx0XHRzaGFyZWRTdGF0ZXMgPSBAX2dldFNoYXJlZFN0YXRlcyh0YXJnZXRTdGF0ZSlcblx0XHRhY3RpdmVTdHlsZXMgPz0gQF9nZXRTdGF0ZVN0eWxlcyhhY3RpdmVTdGF0ZXMpXG5cblx0XHRmb3Igc3RhdGVDaGFpbiBpbiBzaGFyZWRTdGF0ZXNcblx0XHRcdGhlbHBlcnMucmVtb3ZlSXRlbShAX3N0YXRlU2hhcmVkLCBzdGF0ZUNoYWluLnN0cmluZylcblx0XHRcdHRhcmdldFN0eWxlID0gQF9zdHlsZXNbc3RhdGVDaGFpbi5zdHJpbmddXG5cdFx0XHRcblx0XHRcdGlmIEBfc3RhdGVTaGFyZWQubGVuZ3RoXG5cdFx0XHRcdGFjdGl2ZVN0eWxlcy5wdXNoIChcblx0XHRcdFx0XHRAX3N0YXRlU2hhcmVkXG5cdFx0XHRcdFx0XHQuZmlsdGVyIChzdGF0ZSktPiBub3QgaGVscGVycy5pbmNsdWRlcyhzdGF0ZSwgdGFyZ2V0U3RhdGUpXG5cdFx0XHRcdFx0XHQubWFwIChzdGF0ZSk9PiBAX3N0eWxlc1tzdGF0ZV1cblx0XHRcdFx0KS4uLlxuXHRcdFx0XG5cdFx0XHRzdHlsZXNUb0tlZXAgPSBleHRlbmQuY2xvbmUua2V5cyh0YXJnZXRTdHlsZSkoQF9zdHlsZXMuYmFzZSwgYWN0aXZlU3R5bGVzLi4uKVxuXHRcdFx0c3R5bGVzVG9SZW1vdmUgPSBleHRlbmQudHJhbnNmb3JtKC0+IG51bGwpLmNsb25lKHRhcmdldFN0eWxlKVxuXHRcdFx0QHN0eWxlIGV4dGVuZChzdHlsZXNUb1JlbW92ZSwgc3R5bGVzVG9LZWVwKVxuXG5cdHJldHVyblxuXG5cblxuUXVpY2tFbGVtZW50OjpfdHVyblRleHRPTiA9ICh0YXJnZXRTdGF0ZSwgYWN0aXZlU3RhdGVzKS0+XG5cdGlmIEBfdGV4dHMgYW5kIElTLnN0cmluZyh0YXJnZXRUZXh0ID0gQF90ZXh0c1t0YXJnZXRTdGF0ZV0pXG5cdFx0c3VwZXJpb3JTdGF0ZXMgPSBAX2dldFN1cGVyaW9yU3RhdGVzKHRhcmdldFN0YXRlLCBhY3RpdmVTdGF0ZXMpXG5cdFx0XG5cdFx0QHRleHQgPSB0YXJnZXRUZXh0IHVubGVzcyBzdXBlcmlvclN0YXRlcy5sZW5ndGhcblx0cmV0dXJuXG5cblxuUXVpY2tFbGVtZW50OjpfdHVyblRleHRPRkYgPSAodGFyZ2V0U3RhdGUsIGFjdGl2ZVN0YXRlcyktPlxuXHRpZiBAX3RleHRzIGFuZCBJUy5zdHJpbmcodGFyZ2V0VGV4dCA9IEBfdGV4dHNbdGFyZ2V0U3RhdGVdKVxuXHRcdGFjdGl2ZVN0YXRlcyA9IGFjdGl2ZVN0YXRlcy5maWx0ZXIgKHN0YXRlKS0+IHN0YXRlIGlzbnQgdGFyZ2V0U3RhdGVcblx0XHR0YXJnZXRUZXh0ID0gQF90ZXh0c1thY3RpdmVTdGF0ZXNbYWN0aXZlU3RhdGVzLmxlbmd0aC0xXV1cblx0XHR0YXJnZXRUZXh0ID89IEBfdGV4dHMuYmFzZVxuXHRcdFxuXHRcdEB0ZXh0ID0gdGFyZ2V0VGV4dFxuXHRyZXR1cm5cblxuXG5cblxuXHRcblxuXG5cbiJdfQ==
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHlsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7QUFBQSxJQUFBLG9DQUFBO0VBQUE7O0FBU0EsWUFBWSxDQUFBLFNBQUUsQ0FBQSxLQUFkLEdBQXNCLFNBQUE7QUFDckIsTUFBQTtFQUFBLElBQVUsSUFBQyxDQUFBLElBQUQsS0FBUyxNQUFuQjtBQUFBLFdBQUE7O0VBQ0EsSUFBQSxHQUFPO0VBRVAsSUFBRyxFQUFFLENBQUMsTUFBSCxDQUFVLElBQUssQ0FBQSxDQUFBLENBQWYsQ0FBSDtJQUNDLFdBQUEsR0FBYyxHQUFBLENBQUksSUFBQyxDQUFBLEVBQUwsRUFBUyxJQUFLLENBQUEsQ0FBQSxDQUFkLEVBQWtCLElBQUssQ0FBQSxDQUFBLENBQXZCO0lBQ2QsSUFBRyxDQUFJLEVBQUUsQ0FBQyxPQUFILENBQVcsSUFBSyxDQUFBLENBQUEsQ0FBaEIsQ0FBUDs7QUFDQztNQUNPLElBQUcsSUFBQyxDQUFBLFNBQUo7ZUFBbUIsWUFBbkI7T0FBQSxNQUFvQyxJQUFHLENBQUksV0FBUDtlQUF3QixZQUF4QjtPQUFBLE1BQUE7ZUFBeUMsR0FBekM7T0FGNUM7S0FGRDtHQUFBLE1BTUssSUFBRyxFQUFFLENBQUMsTUFBSCxDQUFVLElBQUssQ0FBQSxDQUFBLENBQWYsQ0FBSDtJQUNKLEdBQUEsQ0FBSSxJQUFDLENBQUEsRUFBTCxFQUFTLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBakIsQ0FBMkIsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLEtBQUQ7UUFDbkMsSUFBRyxPQUFPLEtBQVAsS0FBZ0IsVUFBbkI7aUJBQW1DLEtBQUssQ0FBQyxJQUFOLENBQVcsS0FBWCxFQUFjLEtBQUMsQ0FBQSxPQUFPLENBQUMsZUFBdkIsRUFBbkM7U0FBQSxNQUFBO2lCQUFnRixNQUFoRjs7TUFEbUM7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTNCLENBRVIsQ0FBQyxLQUZPLENBRUQsSUFBSyxDQUFBLENBQUEsQ0FGSixDQUFULEVBREk7O0FBS0wsU0FBTztBQWZjOzs7QUFrQnRCOzs7Ozs7OztBQU9BLFlBQVksQ0FBQSxTQUFFLENBQUEsU0FBZCxHQUEwQixTQUFDLFFBQUQsRUFBVyxZQUFYO0FBQ3pCLE1BQUE7RUFBQSxJQUFVLElBQUMsQ0FBQSxJQUFELEtBQVMsTUFBbkI7QUFBQSxXQUFBOztFQUNBLElBQUEsR0FBTztFQUNQLGNBQUEsR0FBaUIsSUFBQyxDQUFBLEtBQUQsQ0FBTyxRQUFQO0VBRWpCLElBQUcsRUFBRSxDQUFDLE1BQUgsQ0FBVSxjQUFWLENBQUg7SUFDQyxJQUFzQixZQUF0QjtNQUFBLGNBQUEsR0FBaUIsRUFBakI7O0FBQ0EsV0FBTyxjQUFBLElBQWtCLElBQUMsQ0FBQSxFQUFFLENBQUMsS0FBTSxDQUFBLElBQUssQ0FBQSxDQUFBLENBQUwsQ0FBNUIsNENBQXVELENBQUEsSUFBSyxDQUFBLENBQUEsQ0FBTCxXQUF2RCxJQUFtRSxHQUYzRTs7QUFJQSxTQUFPO0FBVGtCOztBQVkxQixZQUFZLENBQUEsU0FBRSxDQUFBLFdBQWQsR0FBNEIsU0FBQyxRQUFEO1NBQzNCLFVBQUEsQ0FBVyxJQUFDLENBQUEsU0FBRCxDQUFXLFFBQVgsQ0FBWDtBQUQyQjs7QUFJNUIsWUFBWSxDQUFBLFNBQUUsQ0FBQSxXQUFkLEdBQTRCLFNBQUMsY0FBRDtBQUMzQixNQUFBO0VBQUEsWUFBQSxHQUFlLElBQUMsQ0FBQSxlQUFELENBQWlCLElBQUMsQ0FBQSxnQkFBRCxDQUFBLENBQWpCO0VBQ2YsWUFBQSxHQUFlLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBYixDQUNkLFNBQUMsS0FBRDtXQUFVLE9BQU8sS0FBUCxLQUFnQjtFQUExQixDQURjLENBQUEsYUFFYixDQUFBLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBTSxTQUFBLFdBQUEsWUFBQSxDQUFBLENBRkY7RUFJZixJQUFDLENBQUEsS0FBRCxDQUFPLFlBQVA7RUFFQSxJQUFHLGNBQUg7QUFDQztBQUFBLFNBQUEscUNBQUE7O01BQUEsS0FBSyxDQUFDLFdBQU4sQ0FBQTtBQUFBLEtBREQ7O0FBR0EsU0FBTztBQVhvQjs7QUFjNUIsWUFBWSxDQUFBLFNBQUUsQ0FBQSxJQUFkLEdBQXFCLFNBQUMsT0FBRDtBQUNwQixNQUFBOztJQUFBLGtEQUF3QixDQUFFLGlCQUFmLElBQTBCOztTQUNyQyxJQUFDLENBQUEsS0FBRCxDQUFPLFNBQVAsRUFBa0IsT0FBbEI7QUFGb0I7O0FBSXJCLFlBQVksQ0FBQSxTQUFFLENBQUEsSUFBZCxHQUFxQixTQUFBO1NBQ3BCLElBQUMsQ0FBQSxLQUFELENBQU8sU0FBUCxFQUFrQixNQUFsQjtBQURvQjs7QUFJckIsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFlBQVksQ0FBQSxTQUFwQyxFQUNDO0VBQUEsTUFBQSxFQUFRO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBSyxJQUFDLENBQUEsRUFBRSxDQUFDLHFCQUFKLENBQUE7SUFBTCxDQUFMO0dBQVI7RUFDQSxPQUFBLEVBQVM7SUFBQSxHQUFBLEVBQUssU0FBQTthQUFLLFVBQUEsQ0FBVyxJQUFDLENBQUEsS0FBRCxDQUFPLE9BQVAsQ0FBWDtJQUFMLENBQUw7R0FEVDtFQUVBLFFBQUEsRUFBVTtJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUssVUFBQSxDQUFXLElBQUMsQ0FBQSxLQUFELENBQU8sUUFBUCxDQUFYO0lBQUwsQ0FBTDtHQUZWO0VBR0EsYUFBQSxFQUFlLGlCQUFBLEdBQW9CO0lBQUEsR0FBQSxFQUFLLFNBQUE7TUFBSyxJQUFHLElBQUMsQ0FBQSxLQUFELEdBQVMsSUFBQyxDQUFBLE1BQWI7ZUFBeUIsWUFBekI7T0FBQSxNQUFBO2VBQTBDLFdBQTFDOztJQUFMLENBQUw7R0FIbkM7RUFJQSxhQUFBLEVBQWUsaUJBQUEsR0FBb0I7SUFBQSxHQUFBLEVBQUssU0FBQTthQUFLLElBQUMsQ0FBQSxLQUFELEdBQU8sSUFBQyxDQUFBO0lBQWIsQ0FBTDtHQUpuQztDQUREIiwic291cmNlc0NvbnRlbnQiOlsiIyMjKlxuICogU2V0cy9nZXRzIHRoZSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LiBJbiBnZXR0ZXIgbW9kZSB0aGUgY29tcHV0ZWQgcHJvcGVydHkgb2ZcbiAqIHRoZSBzdHlsZSB3aWxsIGJlIHJldHVybmVkIHVubGVzcyB0aGUgZWxlbWVudCBpcyBub3QgaW5zZXJ0ZWQgaW50byB0aGUgRE9NLiBJblxuICogd2Via2l0IGJyb3dzZXJzIGFsbCBjb21wdXRlZCBwcm9wZXJ0aWVzIG9mIGEgZGV0YWNoZWQgbm9kZSBhcmUgYWx3YXlzIGFuIGVtcHR5XG4gKiBzdHJpbmcgYnV0IGluIGdlY2tvIHRoZXkgcmVmbGVjdCBvbiB0aGUgYWN0dWFsIGNvbXB1dGVkIHZhbHVlLCBoZW5jZSB3ZSBuZWVkXG4gKiB0byBcIm5vcm1hbGl6ZVwiIHRoaXMgYmVoYXZpb3IgYW5kIG1ha2Ugc3VyZSB0aGF0IGV2ZW4gb24gZ2Vja28gYW4gZW1wdHkgc3RyaW5nXG4gKiBpcyByZXR1cm5lZFxuICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4jIyNcblF1aWNrRWxlbWVudDo6c3R5bGUgPSAoKS0+XG5cdHJldHVybiBpZiBAdHlwZSBpcyAndGV4dCdcblx0YXJncyA9IGFyZ3VtZW50c1xuXHRcblx0aWYgSVMuc3RyaW5nKGFyZ3NbMF0pXG5cdFx0cmV0dXJuVmFsdWUgPSBDU1MoQGVsLCBhcmdzWzBdLCBhcmdzWzFdKVxuXHRcdGlmIG5vdCBJUy5kZWZpbmVkKGFyZ3NbMV0pXG5cdFx0XHQjIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5cdFx0XHRyZXR1cm4gaWYgQF9pbnNlcnRlZCB0aGVuIHJldHVyblZhbHVlIGVsc2UgaWYgbm90IHJldHVyblZhbHVlIHRoZW4gcmV0dXJuVmFsdWUgZWxzZSAnJ1xuXG5cdGVsc2UgaWYgSVMub2JqZWN0KGFyZ3NbMF0pXG5cdFx0Q1NTIEBlbCwgZXh0ZW5kLmFsbG93TnVsbC50cmFuc2Zvcm0oKHZhbHVlKT0+XG5cdFx0XHRpZiB0eXBlb2YgdmFsdWUgaXMgJ2Z1bmN0aW9uJyB0aGVuIHZhbHVlLmNhbGwoQCwgQG9wdGlvbnMucmVsYXRlZEluc3RhbmNlKSBlbHNlIHZhbHVlXG5cdFx0KS5jbG9uZShhcmdzWzBdKVxuXG5cdHJldHVybiBAXG5cblxuIyMjKlxuICogQXR0ZW1wdHMgdG8gcmVzb2x2ZSB0aGUgdmFsdWUgZm9yIGEgZ2l2ZW4gcHJvcGVydHkgaW4gdGhlIGZvbGxvd2luZyBvcmRlciBpZiBlYWNoIG9uZSBpc24ndCBhIHZhbGlkIHZhbHVlOlxuICogMS4gZnJvbSBjb21wdXRlZCBzdHlsZSAoZm9yIGRvbS1pbnNlcnRlZCBlbHMpXG4gKiAyLiBmcm9tIERPTUVsZW1lbnQuc3R5bGUgb2JqZWN0IChmb3Igbm9uLWluc2VydGVkIGVsczsgaWYgb3B0aW9ucy5zdHlsZUFmdGVySW5zZXJ0LCB3aWxsIG9ubHkgaGF2ZSBzdGF0ZSBzdHlsZXMpXG4gKiAzLiBmcm9tIHByb3ZpZGVkIHN0eWxlIG9wdGlvbnNcbiAqIChmb3Igbm9uLWluc2VydGVkIGVsczsgY2hlY2tpbmcgb25seSAkYmFzZSBzaW5jZSBzdGF0ZSBzdHlsZXMgd2lsbCBhbHdheXMgYmUgYXBwbGllZCB0byB0aGUgc3R5bGUgb2JqZWN0IGV2ZW4gZm9yIG5vbi1pbnNlcnRlZClcbiMjI1xuUXVpY2tFbGVtZW50OjpzdHlsZVNhZmUgPSAocHJvcGVydHksIHNraXBDb21wdXRlZCktPlxuXHRyZXR1cm4gaWYgQHR5cGUgaXMgJ3RleHQnXG5cdGFyZ3MgPSBhcmd1bWVudHNcblx0Y29tcHV0ZWRSZXN1bHQgPSBAc3R5bGUocHJvcGVydHkpXG5cblx0aWYgSVMuc3RyaW5nKGNvbXB1dGVkUmVzdWx0KVxuXHRcdGNvbXB1dGVkUmVzdWx0ID0gMCBpZiBza2lwQ29tcHV0ZWRcblx0XHRyZXR1cm4gY29tcHV0ZWRSZXN1bHQgb3IgQGVsLnN0eWxlW2FyZ3NbMF1dIG9yIEBfc3R5bGVzLmJhc2U/W2FyZ3NbMF1dIG9yICcnXG5cblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6OnN0eWxlUGFyc2VkID0gKHByb3BlcnR5KS0+XG5cdHBhcnNlRmxvYXQgQHN0eWxlU2FmZShwcm9wZXJ0eSlcblxuXG5RdWlja0VsZW1lbnQ6OnJlY2FsY1N0eWxlID0gKHJlY2FsY0NoaWxkcmVuKS0+XG5cdGFjdGl2ZVN0eWxlcyA9IEBfZ2V0U3RhdGVTdHlsZXMgQF9nZXRBY3RpdmVTdGF0ZXMoKVxuXHR0YXJnZXRTdHlsZXMgPSBleHRlbmQuY2xvbmUuZmlsdGVyKFxuXHRcdCh2YWx1ZSktPiB0eXBlb2YgdmFsdWUgaXMgJ2Z1bmN0aW9uJ1xuXHQpKEBfc3R5bGVzLmJhc2UsIGFjdGl2ZVN0eWxlcy4uLilcblxuXHRAc3R5bGUodGFyZ2V0U3R5bGVzKVxuXHRcblx0aWYgcmVjYWxjQ2hpbGRyZW5cblx0XHRjaGlsZC5yZWNhbGNTdHlsZSgpIGZvciBjaGlsZCBpbiBAX2NoaWxkcmVuXG5cdFxuXHRyZXR1cm4gQFxuXG5cblF1aWNrRWxlbWVudDo6c2hvdyA9IChkaXNwbGF5KS0+XG5cdGRpc3BsYXkgPz0gQF9zdHlsZXMuYmFzZT8uZGlzcGxheSBvciAnYmxvY2snXG5cdEBzdHlsZSAnZGlzcGxheScsIGRpc3BsYXlcblxuUXVpY2tFbGVtZW50OjpoaWRlID0gKCktPlxuXHRAc3R5bGUgJ2Rpc3BsYXknLCAnbm9uZSdcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyBRdWlja0VsZW1lbnQ6Oixcblx0J3JlY3QnOiBnZXQ6ICgpLT4gQGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cdCd3aWR0aCc6IGdldDogKCktPiBwYXJzZUZsb2F0IEBzdHlsZSgnd2lkdGgnKVxuXHQnaGVpZ2h0JzogZ2V0OiAoKS0+IHBhcnNlRmxvYXQgQHN0eWxlKCdoZWlnaHQnKVxuXHQnb3JpZW50YXRpb24nOiBvcmllbnRhdGlvbkdldHRlciA9IGdldDogKCktPiBpZiBAd2lkdGggPiBAaGVpZ2h0IHRoZW4gJ2xhbmRzY2FwZScgZWxzZSAncG9ydHJhaXQnXG5cdCdhc3BlY3RSYXRpbyc6IGFzcGVjdFJhdGlvR2V0dGVyID0gZ2V0OiAoKS0+IEB3aWR0aC9AaGVpZ2h0XG5cblxuIl19
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlcy1hbmQtcHJvcGVydGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF0dHJpYnV0ZXMtYW5kLXByb3BlcnRpZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQSxTQUFFLENBQUEsSUFBZCxHQUFxQixTQUFDLFFBQUQsRUFBVyxRQUFYO0FBQXVCLFVBQU8sUUFBUDtBQUFBLFNBQ3RDLE1BRHNDO2FBQ3ZCLElBQUMsQ0FBQSxFQUFFLENBQUMsWUFBSixDQUFpQixRQUFqQjtBQUR1QixTQUV0QyxJQUZzQzthQUU1QixJQUFDLENBQUEsRUFBRSxDQUFDLGVBQUosQ0FBb0IsUUFBcEI7QUFGNEI7TUFJMUMsSUFBQyxDQUFBLEVBQUUsQ0FBQyxZQUFKLENBQWlCLFFBQWpCLEVBQTJCLFFBQTNCO0FBQ0EsYUFBTztBQUxtQztBQUF2Qjs7QUFTckIsWUFBWSxDQUFBLFNBQUUsQ0FBQSxJQUFkLEdBQXFCLFNBQUMsUUFBRCxFQUFXLFFBQVg7QUFBdUIsVUFBTyxRQUFQO0FBQUEsU0FDdEMsTUFEc0M7YUFDdkIsSUFBQyxDQUFBLEVBQUcsQ0FBQSxRQUFBO0FBRG1CO01BRzFDLElBQUMsQ0FBQSxFQUFHLENBQUEsUUFBQSxDQUFKLEdBQWdCO0FBQ2hCLGFBQU87QUFKbUM7QUFBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJRdWlja0VsZW1lbnQ6OmF0dHIgPSAoYXR0ck5hbWUsIG5ld1ZhbHVlKS0+IHN3aXRjaCBuZXdWYWx1ZVxuXHR3aGVuIHVuZGVmaW5lZCB0aGVuIEBlbC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpXG5cdHdoZW4gbnVsbCB0aGVuIEBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpXG5cdGVsc2Vcblx0XHRAZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBuZXdWYWx1ZSlcblx0XHRyZXR1cm4gQFxuXG5cblxuUXVpY2tFbGVtZW50Ojpwcm9wID0gKHByb3BOYW1lLCBuZXdWYWx1ZSktPiBzd2l0Y2ggbmV3VmFsdWVcblx0d2hlbiB1bmRlZmluZWQgdGhlbiBAZWxbcHJvcE5hbWVdXG5cdGVsc2Vcblx0XHRAZWxbcHJvcE5hbWVdID0gbmV3VmFsdWVcblx0XHRyZXR1cm4gQCJdfQ==
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuaXB1bGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFuaXB1bGF0aW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUEsU0FBRSxDQUFBLFVBQWQsR0FBMkIsU0FBQTtTQUMxQixRQUFRLENBQUMsUUFBVCxDQUFrQixJQUFsQjtBQUQwQjs7QUFJM0IsWUFBWSxDQUFBLFNBQUUsQ0FBQSxLQUFkLEdBQXNCLFNBQUE7QUFDckIsTUFBQTtFQUFBLE9BQUEsR0FBVSxJQUFDLENBQUEsRUFBRSxDQUFDLFNBQUosQ0FBYyxLQUFkO0VBQ1YsT0FBQSxHQUFVLE1BQU0sQ0FBQyxLQUFQLENBQWEsSUFBQyxDQUFBLE9BQWQsRUFBdUI7SUFBQyxRQUFBLEVBQVMsT0FBVjtHQUF2QjtFQUVWLEtBQUEsR0FBUSxJQUFJLFlBQUosQ0FBaUIsSUFBQyxDQUFBLElBQWxCLEVBQXdCLE9BQXhCO0FBQ1I7QUFBQSxPQUFBLHFDQUFBOztJQUFBLEtBQUssQ0FBQyxLQUFOLENBQVksV0FBWixFQUF5QixJQUF6QjtBQUFBO0FBQ0E7QUFBQSxPQUFBLHdDQUFBOztJQUFBLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBSyxDQUFDLEtBQU4sQ0FBQSxDQUFiO0FBQUE7QUFDQTtBQUFBLE9BQUEsaUJBQUE7O0FBQ0MsU0FBQSw2Q0FBQTs7TUFBQSxLQUFLLENBQUMsRUFBTixDQUFTLFNBQVQsRUFBb0IsUUFBcEI7QUFBQTtBQUREO0FBR0EsU0FBTztBQVZjOztBQWF0QixZQUFZLENBQUEsU0FBRSxDQUFBLE1BQWQsR0FBdUIsU0FBQyxRQUFEO0FBQ3RCLE1BQUE7RUFBQSxJQUFHLFFBQUg7SUFDQyxRQUFBLEdBQVcsT0FBTyxDQUFDLGdCQUFSLENBQXlCLFFBQXpCO0lBRVgsSUFBRyxFQUFFLENBQUMsVUFBSCxDQUFjLFFBQWQsQ0FBSDtNQUNDLFVBQUEsR0FBYSxRQUFRLENBQUM7TUFDdEIsSUFBcUMsVUFBckM7UUFBQSxVQUFVLENB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QTthQUFLLElBQUMsQ0FBQSxFQUFFLENBQUM7SUFBVCxDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsUUFBRDthQUFhLElBQUMsQ0FBQSxFQUFFLENBQUMsU0FBSixHQUFnQjtJQUE3QixDQURMO0dBREQ7RUFJQSxNQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQUssU0FBQTthQUFLLElBQUMsQ0FBQSxFQUFFLENBQUM7SUFBVCxDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsUUFBRDthQUFhLElBQUMsQ0FBQSxFQUFFLENBQUMsV0FBSixHQUFrQjtJQUEvQixDQURMO0dBTEQ7RUFRQSxXQUFBLEVBQ0M7SUFBQSxHQUFBLEVBQUssU0FBQTtBQUNKLFVBQUE7TUFBQSxJQUFBLEdBQU8sSUFBQyxDQUFBLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBZixDQUFxQixLQUFyQjtNQUNQLElBQWMsSUFBSyxDQUFBLElBQUksQ0FBQyxNQUFMLEdBQVksQ0FBWixDQUFMLEtBQXVCLEVBQXJDO1FBQUEsSUFBSSxDQUFDLEdBQUwsQ0FBQSxFQUFBOztNQUNBLElBQWdCLElBQUssQ0FBQSxDQUFBLENBQUwsS0FBVyxFQUEzQjtRQUFBLElBQUksQ0FBQyxLQUFMLENBQUEsRUFBQTs7QUFDQSxhQUFPO0lBSkgsQ0FBTDtHQVREO0NBREQiLCJzb3VyY2VzQ29udGVudCI6WyJRdWlja0VsZW1lbnQ6OnRvVGVtcGxhdGUgPSAoKS0+XG5cdFF1aWNrRG9tLnRlbXBsYXRlKEApXG5cblxuUXVpY2tFbGVtZW50OjpjbG9uZSA9ICgpLT5cblx0ZWxDbG9uZSA9IEBlbC5jbG9uZU5vZGUoZmFsc2UpXG5cdG9wdGlvbnMgPSBleHRlbmQuY2xvbmUoQG9wdGlvbnMsIHtleGlzdGluZzplbENsb25lfSlcblx0XG5cdG5ld0VsID0gbmV3IFF1aWNrRWxlbWVudChAdHlwZSwgb3B0aW9ucylcblx0bmV3RWwuc3RhdGUoYWN0aXZlU3RhdGUsIG9uKSBmb3IgYWN0aXZlU3RhdGUgaW4gQF9zdGF0ZVxuXHRuZXdFbC5hcHBlbmQoY2hpbGQuY2xvbmUoKSkgZm9yIGNoaWxkIGluIEBjaGlsZHJlblxuXHRmb3IgZXZlbnROYW1lLCBjYWxsYmFja3Mgb2YgQF9ldmVudENhbGxiYWNrc1xuXHRcdG5ld0VsLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIGZvciBjYWxsYmFjayBpbiBjYWxsYmFja3Ncblx0XG5cdHJldHVybiBuZXdFbFxuXG5cblF1aWNrRWxlbWVudDo6YXBwZW5kID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBoZWxwZXJzLm5vcm1hbGl6ZUdpdmVuRWwodGFyZ2V0RWwpXG5cdFx0XG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbClcblx0XHRcdHByZXZQYXJlbnQgPSB0YXJnZXRFbC5wYXJlbnRcblx0XHRcdHByZXZQYXJlbnQuX3JlbW92ZUNoaWxkKHRhcmdldEVsKSBpZiBwcmV2UGFyZW50XG5cdFx0XHRAX2NoaWxkcmVuLnB1c2godGFyZ2V0RWwpXG5cdFx0XHRAZWwuYXBwZW5kQ2hpbGQodGFyZ2V0RWwuZWwpXG5cdFx0XHR0YXJnZXRFbC5fcmVmcmVzaFBhcmVudCgpICMgRm9yY2UgcmUtZnJlc2ggdGFyZ2V0RWwuX3BhcmVudCB2YWx1ZSB0byB0cmlnZ2VyIG9uSW5zZXJ0ZWQgY2FsbGJhY2tcblxuXHRyZXR1cm4gQFxuXG5cblF1aWNrRWxlbWVudDo6YXBwZW5kVG8gPSAodGFyZ2V0RWwpLT5cblx0aWYgdGFyZ2V0RWxcblx0XHR0YXJnZXRFbCA9IGhlbHBlcnMubm9ybWFsaXplR2l2ZW5FbCh0YXJnZXRFbClcblx0XHRcblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKVxuXHRcdFx0dGFyZ2V0RWwuYXBwZW5kKEApXG5cdFxuXHRyZXR1cm4gQFxuXG5cblF1aWNrRWxlbWVudDo6cHJlcGVuZCA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gaGVscGVycy5ub3JtYWxpemVHaXZlbkVsKHRhcmdldEVsKVxuXHRcdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHRwcmV2UGFyZW50ID0gdGFyZ2V0RWwucGFyZW50XG5cdFx0XHRwcmV2UGFyZW50Ll9yZW1vdmVDaGlsZCh0YXJnZXRFbCkgaWYgcHJldlBhcmVudFxuXHRcdFx0QF9jaGlsZHJlbi51bnNoaWZ0KHRhcmdldEVsKVxuXHRcdFx0QGVsLmluc2VydEJlZm9yZSh0YXJnZXRFbC5lbCwgQGVsLmZpcnN0Q2hpbGQpXG5cdFx0XHR0YXJnZXRFbC5fcmVmcmVzaFBhcmVudCgpICMgRm9yY2UgcmUtZnJlc2ggdGFyZ2V0RWwuX3BhcmVudCB2YWx1ZSB0byB0cmlnZ2VyIG9uSW5zZXJ0ZWQgY2FsbGJhY2tcblx0XG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjpwcmVwZW5kVG8gPSAodGFyZ2V0RWwpLT5cblx0aWYgdGFyZ2V0RWxcblx0XHR0YXJnZXRFbCA9IGhlbHBlcnMubm9ybWFsaXplR2l2ZW5FbCh0YXJnZXRFbClcblx0XHRcblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKVxuXHRcdFx0dGFyZ2V0RWwucHJlcGVuZChAKVxuXG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjphZnRlciA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbCBhbmQgQHBhcmVudFxuXHRcdHRhcmdldEVsID0gaGVscGVycy5ub3JtYWxpemVHaXZlbkVsKHRhcmdldEVsKVxuXG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbClcblx0XHRcdG15SW5kZXggPSBAcGFyZW50Ll9jaGlsZHJlbi5pbmRleE9mKEApXG5cdFx0XHRAcGFyZW50Ll9jaGlsZHJlbi5zcGxpY2UobXlJbmRleCsxLCAwLCB0YXJnZXRFbClcblx0XHRcdEBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXJnZXRFbC5lbCwgQGVsLm5leHRTaWJsaW5nKVxuXHRcdFx0dGFyZ2V0RWwuX3JlZnJlc2hQYXJlbnQoKSAjIEZvcmNlIHJlLWZyZXNoIHRhcmdldEVsLl9wYXJlbnQgdmFsdWUgdG8gdHJpZ2dlciBvbkluc2VydGVkIGNhbGxiYWNrXG5cblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6Omluc2VydEFmdGVyID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBoZWxwZXJzLm5vcm1hbGl6ZUdpdmVuRWwodGFyZ2V0RWwpXG5cdFx0XG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbClcblx0XHRcdHRhcmdldEVsLmFmdGVyKEApXG5cdFxuXHRyZXR1cm4gQFxuXG5cblF1aWNrRWxlbWVudDo6YmVmb3JlID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsIGFuZCBAcGFyZW50XG5cdFx0dGFyZ2V0RWwgPSBoZWxwZXJzLm5vcm1hbGl6ZUdpdmVuRWwodGFyZ2V0RWwpXG5cblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKVxuXHRcdFx0bXlJbmRleCA9IEBwYXJlbnQuX2NoaWxkcmVuLmluZGV4T2YoQClcblx0XHRcdEBwYXJlbnQuX2NoaWxkcmVuLnNwbGljZShteUluZGV4LCAwLCB0YXJnZXRFbClcblx0XHRcdEBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXJnZXRFbC5lbCwgQGVsKVxuXHRcdFx0dGFyZ2V0RWwuX3JlZnJlc2hQYXJlbnQoKSAjIEZvcmNlIHJlLWZyZXNoIHRhcmdldEVsLl9wYXJlbnQgdmFsdWUgdG8gdHJpZ2dlciBvbkluc2VydGVkIGNhbGxiYWNrXG5cblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6Omluc2VydEJlZm9yZSA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gaGVscGVycy5ub3JtYWxpemVHaXZlbkVsKHRhcmdldEVsKVxuXHRcdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHR0YXJnZXRFbC5iZWZvcmUoQClcblx0XG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjpkZXRhY2ggPSAoKS0+XG5cdEBwYXJlbnQ/Ll9yZW1vdmVDaGlsZChAKVxuXHRyZXR1cm4gQFxuXG5cblF1aWNrRWxlbWVudDo6cmVtb3ZlID0gKCktPlxuXHRAZGV0YWNoKClcblx0QHJlc2V0U3RhdGUoKVxuXHRpZiBAX2V2ZW50Q2FsbGJhY2tzXG5cdFx0QF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdLmxlbmd0aCA9IDAgZm9yIGV2ZW50TmFtZSBvZiBAX2V2ZW50Q2FsbGJhY2tzXG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjplbXB0eSA9ICgpLT5cblx0QF9yZW1vdmVDaGlsZChjaGlsZCkgZm9yIGNoaWxkIGluIEBjaGlsZHJlbi5zbGljZSgpXG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50Ojp3cmFwID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBoZWxwZXJzLm5vcm1hbGl6ZUdpdmVuRWwodGFyZ2V0RWwpXG5cdFx0Y3VycmVudFBhcmVudCA9IEBwYXJlbnRcblxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpIGFuZCB0YXJnZXRFbCBpc250IEAgYW5kIHRhcmdldEVsIGlzbnQgQHBhcmVudFxuXHRcdFx0aWYgY3VycmVudFBhcmVudFxuXHRcdFx0XHRjdXJyZW50UGFyZW50Ll9yZW1vdmVDaGlsZChALCBpZiBub3QgdGFyZ2V0RWwucGFyZW50IHRoZW4gdGFyZ2V0RWwpXG5cdFx0XHRcblx0XHRcdHRhcmdldEVsLmFwcGVuZChAKVxuXG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50Ojp1bndyYXAgPSAoKS0+XG5cdHBhcmVudCA9IEBwYXJlbnRcblx0aWYgcGFyZW50XG5cdFx0cGFyZW50Q2hpbGRyZW4gPSBRdWlja0RvbS5iYXRjaChwYXJlbnQuY2hpbGRyZW4pXG5cdFx0cGFyZW50U2libGluZyA9IHBhcmVudC5uZXh0XG5cdFx0Z3JhbmRQYXJlbnQgPSBwYXJlbnQucGFyZW50XG5cdFx0aWYgZ3JhbmRQYXJlbnRcblx0XHRcdHBhcmVudC5kZXRhY2goKVxuXG5cdFx0XHRpZiBwYXJlbnRTaWJsaW5nXG5cdFx0XHRcdHBhcmVudENoaWxkcmVuLmluc2VydEJlZm9yZShwYXJlbnRTaWJsaW5nKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRwYXJlbnRDaGlsZHJlbi5hcHBlbmRUbyhncmFuZFBhcmVudClcblx0XG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjpyZXBsYWNlID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBoZWxwZXJzLm5vcm1hbGl6ZUdpdmVuRWwodGFyZ2V0RWwpXG5cdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpIGFuZCB0YXJnZXRFbCBpc250IEBcblx0XHRcdHRhcmdldEVsLmRldGFjaCgpXG5cdFx0XHRAcGFyZW50Py5fcmVtb3ZlQ2hpbGQoQCwgdGFyZ2V0RWwpXG5cdFx0XHR0YXJnZXRFbC5fcmVmcmVzaFBhcmVudCgpICMgRm9yY2UgcmUtZnJlc2ggdGFyZ2V0RWwuX3BhcmVudCB2YWx1ZSB0byB0cmlnZ2VyIG9uSW5zZXJ0ZWQgY2FsbGJhY2tcblx0XG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjpoYXNDbGFzcyA9ICh0YXJnZXQpLT5cblx0aGVscGVycy5pbmNsdWRlcyhAY2xhc3NMaXN0LCB0YXJnZXQpXG5cblxuUXVpY2tFbGVtZW50OjphZGRDbGFzcyA9ICh0YXJnZXQpLT5cblx0Y2xhc3NMaXN0ID0gQGNsYXNzTGlzdFxuXHR0YXJnZXRJbmRleCA9IGNsYXNzTGlzdC5pbmRleE9mKHRhcmdldClcblxuXHRpZiB0YXJnZXRJbmRleCBpcyAtMVxuXHRcdGNsYXNzTGlzdC5wdXNoKHRhcmdldClcblx0XHRAcmF3LmNsYXNzTmFtZSA9IGlmIGNsYXNzTGlzdC5sZW5ndGggPiAxIHRoZW4gY2xhc3NMaXN0LmpvaW4oJyAnKSBlbHNlIGNsYXNzTGlzdFswXVxuXG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjpyZW1vdmVDbGFzcyA9ICh0YXJnZXQpLT5cblx0Y2xhc3NMaXN0ID0gQGNsYXNzTGlzdFxuXHR0YXJnZXRJbmRleCA9IGNsYXNzTGlzdC5pbmRleE9mKHRhcmdldClcblx0XG5cdGlmIHRhcmdldEluZGV4IGlzbnQgLTFcblx0XHRjbGFzc0xpc3Quc3BsaWNlKHRhcmdldEluZGV4LCAxKVxuXHRcdEByYXcuY2xhc3NOYW1lID0gaWYgY2xhc3NMaXN0Lmxlbmd0aCB0aGVuIGNsYXNzTGlzdC5qb2luKCcgJykgZWxzZSAnJ1xuXG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50Ojp0b2dnbGVDbGFzcyA9ICh0YXJnZXQpLT5cblx0aWYgQGhhc0NsYXNzKHRhcmdldClcblx0XHRAcmVtb3ZlQ2xhc3ModGFyZ2V0KVxuXHRlbHNlXG5cdFx0QGFkZENsYXNzKHRhcmdldClcblxuXHRyZXR1cm4gQFxuXG5cblF1aWNrRWxlbWVudDo6X3JlZnJlc2hQYXJlbnQgPSAoKS0+XG5cdEBwYXJlbnRcblxuXG5RdWlja0VsZW1lbnQ6Ol9yZW1vdmVDaGlsZCA9ICh0YXJnZXRDaGlsZCwgcmVwbGFjZW1lbnRDaGlsZCktPlxuXHRpbmRleE9mQ2hpbGQgPSBAX2NoaWxkcmVuLmluZGV4T2YodGFyZ2V0Q2hpbGQpXG5cdGlmIGluZGV4T2ZDaGlsZCBpc250IC0xXG5cdFx0aWYgcmVwbGFjZW1lbnRDaGlsZFxuXHRcdFx0QGVsLnJlcGxhY2VDaGlsZChyZXBsYWNlbWVudENoaWxkLmVsLCB0YXJnZXRDaGlsZC5lbClcblx0XHRcdEBfY2hpbGRyZW4uc3BsaWNlKGluZGV4T2ZDaGlsZCwgMSwgcmVwbGFjZW1lbnRDaGlsZClcblx0XHRlbHNlXG5cdFx0XHRAZWwucmVtb3ZlQ2hpbGQodGFyZ2V0Q2hpbGQuZWwpXG5cdFx0XHRAX2NoaWxkcmVuLnNwbGljZShpbmRleE9mQ2hpbGQsIDEpXG5cdFx0XG5cblx0cmV0dXJuIEBcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyBRdWlja0VsZW1lbnQ6Oixcblx0J2h0bWwnOlxuXHRcdGdldDogKCktPiBAZWwuaW5uZXJIVE1MXG5cdFx0c2V0OiAobmV3VmFsdWUpLT4gQGVsLmlubmVySFRNTCA9IG5ld1ZhbHVlXG5cdFxuXHQndGV4dCc6XG5cdFx0Z2V0OiAoKS0+IEBlbC50ZXh0Q29udGVudFxuXHRcdHNldDogKG5ld1ZhbHVlKS0+IEBlbC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlXG5cblx0J2NsYXNzTGlzdCc6XG5cdFx0Z2V0OiAoKS0+XG5cdFx0XHRsaXN0ID0gQHJhdy5jbGFzc05hbWUuc3BsaXQoL1xccysvKVxuXHRcdFx0bGlzdC5wb3AoKSBpZiBsaXN0W2xpc3QubGVuZ3RoLTFdIGlzICcnXG5cdFx0XHRsaXN0LnNoaWZ0KCkgaWYgbGlzdFswXSBpcyAnJ1xuXHRcdFx0cmV0dXJuIGxpc3RcblxuXG5cblxuXG5cblxuIl19
;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBTTtFQUNRLHNCQUFDLElBQUQsRUFBUSxPQUFSO0lBQUMsSUFBQyxDQUFBLE9BQUQ7SUFBTyxJQUFDLENBQUEsVUFBRDtJQUNwQixJQUFDLENBQUEsRUFBRCxHQUFNLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBVCxJQUNMLENBQUcsSUFBQyxDQUFBLElBQUQsS0FBUyxNQUFaLEdBQXdCLFFBQVEsQ0FBQyxjQUFULENBQTJCLE9BQU8sSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFoQixLQUF3QixRQUEzQixHQUF5QyxJQUFDLENBQUEsT0FBTyxDQUFDLElBQWxELEdBQTRELEVBQXBGLENBQXhCLEdBQ1EsSUFBQyxDQUFBLElBQUssQ0FBQSxDQUFBLENBQU4sS0FBWSxHQUFmLEdBQXdCLFFBQVEsQ0FBQyxlQUFULENBQXlCLFlBQXpCLEVBQXVDLElBQUMsQ0FBQSxJQUFJLENBQUMsS0FBTixDQUFZLENBQVosQ0FBdkMsQ0FBeEIsR0FDQSxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUFDLENBQUEsSUFBeEIsQ0FGTDtJQUlELElBQUcsSUFBQyxDQUFBLElBQUQsS0FBUyxNQUFaO01BQ0MsSUFBQyxDQUFBLE1BQUQsR0FBVSxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxJQUFELEdBQVEsU0FBQSxHQUFBLEVBRDlCOztJQUlBLElBQUMsQ0FBQSxPQUFELEdBQVc7SUFDWCxJQUFDLENBQUEsT0FBRCxHQUFXO0lBQ1gsSUFBQyxDQUFBLE1BQUQsR0FBVTtJQUNWLElBQUMsQ0FBQSxTQUFELEdBQWE7SUFDYixJQUFDLENBQUEsa0JBQUQsR0FBc0I7SUFLdEIsSUFBQyxDQUFBLGlCQUFELENBQUE7SUFDQSxJQUFDLENBQUEsYUFBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLGtCQUFELENBQUE7SUFDQSxJQUFDLENBQUEsWUFBRCxDQUFBO0lBQ0EsSUFBcUIsSUFBQyxDQUFBLE9BQU8sQ0FBQyxRQUE5QjtNQUFBLElBQUMsQ0FBQSxjQUFELENBQUEsRUFBQTs7SUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLGFBQUosR0FBb0I7RUF4QlI7O3lCQTJCYixNQUFBLEdBQVEsU0FBQTtBQUNQLFFBQUE7SUFBQSxNQUFBLEdBQVMsQ0FBQyxJQUFDLENBQUEsSUFBRixFQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixDQUFrQixjQUFsQixDQUFBLENBQWtDLElBQUMsQ0FBQSxPQUFuQyxDQUFSO0lBQ1QsUUFBQSxHQUFXLElBQUMsQ0FBQTtBQUNaLFNBQUEsMENBQUE7O01BQUEsTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFLLENBQUMsTUFBTixDQUFBLENBQVo7QUFBQTtBQUNBLFdBQU87RUFKQTs7Ozs7OztBQU1UOzs7RUFDQSxZQUFZLENBQUMsT0FBUTs7O0FBRXJCLElBQUEsQ0FBSyxXQUFMOztBQUNBLElBQUEsQ0FBSyxjQUFMOztBQUNBLElBQUEsQ0FBSyxRQUFMOztBQUNBLElBQUEsQ0FBSyxVQUFMOztBQUNBLElBQUEsQ0FBSyxTQUFMOztBQUNBLElBQUEsQ0FBSyxTQUFMOztBQUNBLElBQUEsQ0FBSyw2QkFBTDs7QUFDQSxJQUFBLENBQUssZ0JBQUwiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBRdWlja0VsZW1lbnRcblx0Y29uc3RydWN0b3I6IChAdHlwZSwgQG9wdGlvbnMpLT5cblx0XHRAZWwgPSBAb3B0aW9ucy5leGlzdGluZyBvclxuXHRcdFx0aWYgQHR5cGUgaXMgJ3RleHQnIHRoZW4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaWYgdHlwZW9mIEBvcHRpb25zLnRleHQgaXMgJ3N0cmluZycgdGhlbiBAb3B0aW9ucy50ZXh0IGVsc2UgJycpXG5cdFx0XHRlbHNlIGlmIEB0eXBlWzBdIGlzICcqJyB0aGVuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIEB0eXBlLnNsaWNlKDEpKVxuXHRcdFx0ZWxzZSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KEB0eXBlKVxuXG5cdFx0aWYgQHR5cGUgaXMgJ3RleHQnXG5cdFx0XHRAYXBwZW5kID0gQHByZXBlbmQgPSBAYXR0ciA9ICgpLT5cblx0XHRcdCMgQF90ZXh0cyA9IHt9ICMgZGVmaW5lZCBjb25kaXRpb25hbGx5XG5cblx0XHRAX3BhcmVudCA9IG51bGxcblx0XHRAX3N0eWxlcyA9IHt9XG5cdFx0QF9zdGF0ZSA9IFtdXG5cdFx0QF9jaGlsZHJlbiA9IFtdXG5cdFx0QF9pbnNlcnRlZENhbGxiYWNrcyA9IFtdXG5cdFx0IyBAX3Byb3ZpZGVkU3RhdGVzID0gW11cdFx0XHRcdCMgZGVmaW5lZCBjb25kaXRpb25hbGx5XG5cdFx0IyBAX3Byb3ZpZGVkU3RhdGVzU2hhcmVkID0gW11cdFx0IyBkZWZpbmVkIGNvbmRpdGlvbmFsbHlcblx0XHQjIEBfZXZlbnRDYWxsYmFja3MgPSB7X19yZWZzOnt9fVx0IyBkZWZpbmVkIGNvbmRpdGlvbmFsbHlcblx0XHRcblx0XHRAX25vcm1hbGl6ZU9wdGlvbnMoKVxuXHRcdEBfYXBwbHlPcHRpb25zKClcblx0XHRAX2F0dGFjaFN0YXRlRXZlbnRzKClcblx0XHRAX3Byb3h5UGFyZW50KClcblx0XHRAX3JlZnJlc2hQYXJlbnQoKSBpZiBAb3B0aW9ucy5leGlzdGluZ1xuXHRcdEBlbC5fcXVpY2tFbGVtZW50ID0gQFxuXG5cblx0dG9KU09OOiAoKS0+XG5cdFx0b3V0cHV0ID0gW0B0eXBlLCBleHRlbmQuY2xvbmUua2V5cyhhbGxvd2VkT3B0aW9ucykoQG9wdGlvbnMpXVxuXHRcdGNoaWxkcmVuID0gQGNoaWxkcmVuXG5cdFx0b3V0cHV0LnB1c2goY2hpbGQudG9KU09OKCkpIGZvciBjaGlsZCBpbiBjaGlsZHJlblxuXHRcdHJldHVybiBvdXRwdXRcblxuIyMjIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICMjI1xuUXVpY2tFbGVtZW50Lm5hbWUgPz0gJ1F1aWNrRWxlbWVudCdcblxuXyRzbSgnLi9hbGlhc2VzJyApXG5fJHNtKCcuL3RyYXZlcnNpbmcnIClcbl8kc20oJy4vaW5pdCcgKVxuXyRzbSgnLi9ldmVudHMnIClcbl8kc20oJy4vc3RhdGUnIClcbl8kc20oJy4vc3R5bGUnIClcbl8kc20oJy4vYXR0cmlidXRlcy1hbmQtcHJvcGVydGllcycgKVxuXyRzbSgnLi9tYW5pcHVsYXRpb24nIClcbiJdfQ==
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2luZG93LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLFdBQUEsR0FDQztFQUFBLElBQUEsRUFBTSxRQUFOO0VBQ0EsRUFBQSxFQUFJLE1BREo7RUFFQSxHQUFBLEVBQUssTUFGTDtFQUdBLGVBQUEsRUFBaUI7SUFBQyxNQUFBLEVBQU8sRUFBUjtHQUhqQjs7O0FBTUQsV0FBVyxDQUFDLEVBQVosR0FBa0IsWUFBWSxDQUFBLFNBQUUsQ0FBQTs7QUFDaEMsV0FBVyxDQUFDLEdBQVosR0FBbUIsWUFBWSxDQUFBLFNBQUUsQ0FBQTs7QUFDakMsV0FBVyxDQUFDLElBQVosR0FBb0IsWUFBWSxDQUFBLFNBQUUsQ0FBQTs7QUFDbEMsV0FBVyxDQUFDLFNBQVosR0FBeUIsWUFBWSxDQUFBLFNBQUUsQ0FBQTs7QUFDdkMsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFdBQXhCLEVBQ0M7RUFBQSxPQUFBLEVBQVM7SUFBQSxHQUFBLEVBQUssU0FBQTthQUFLLE1BQU0sQ0FBQztJQUFaLENBQUw7R0FBVDtFQUNBLFFBQUEsRUFBVTtJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUssTUFBTSxDQUFDO0lBQVosQ0FBTDtHQURWO0VBRUEsYUFBQSxFQUFlLGlCQUZmO0VBR0EsYUFBQSxFQUFlLGlCQUhmO0NBREQiLCJzb3VyY2VzQ29udGVudCI6WyJRdWlja1dpbmRvdyA9IFxuXHR0eXBlOiAnd2luZG93J1xuXHRlbDogd2luZG93XG5cdHJhdzogd2luZG93XG5cdF9ldmVudENhbGxiYWNrczoge19fcmVmczp7fX1cblx0XG5cblF1aWNrV2luZG93Lm9uID0gIFF1aWNrRWxlbWVudDo6b25cblF1aWNrV2luZG93Lm9mZiA9ICBRdWlja0VsZW1lbnQ6Om9mZlxuUXVpY2tXaW5kb3cuZW1pdCA9ICBRdWlja0VsZW1lbnQ6OmVtaXRcblF1aWNrV2luZG93Ll9saXN0ZW5UbyA9ICBRdWlja0VsZW1lbnQ6Ol9saXN0ZW5Ub1xuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgUXVpY2tXaW5kb3csXG5cdCd3aWR0aCc6IGdldDogKCktPiB3aW5kb3cuaW5uZXJXaWR0aFxuXHQnaGVpZ2h0JzogZ2V0OiAoKS0+IHdpbmRvdy5pbm5lckhlaWdodFxuXHQnb3JpZW50YXRpb24nOiBvcmllbnRhdGlvbkdldHRlclxuXHQnYXNwZWN0UmF0aW8nOiBhc3BlY3RSYXRpb0dldHRlclxuXG4iXX0=
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWFRdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lZGlhUXVlcnkuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsVUFBQSxHQUFhLElBQUksU0FBQTtBQUNoQixNQUFBO0VBQUEsU0FBQSxHQUFZO0VBRVosTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFNBQUE7QUFDakMsUUFBQTtBQUFBLFNBQUEsMkNBQUE7O01BQUEsUUFBQSxDQUFBO0FBQUE7RUFEaUMsQ0FBbEM7RUFJQSxJQUFDLENBQUEsVUFBRCxHQUFjLFNBQUMsTUFBRCxFQUFTLFdBQVQ7QUFDYixRQUFBO0lBQUEsVUFBQSxHQUFhLFdBQVcsQ0FBQyxLQUFaLENBQWtCLEdBQWxCO0lBQ2IsTUFBQSxHQUFTLFVBQVcsQ0FBQSxDQUFBO0lBQ3BCLE1BQUE7QUFBUyxjQUFPLE1BQVA7QUFBQSxhQUNILFFBREc7aUJBQ1c7QUFEWCxhQUVILFFBRkc7aUJBRVcsTUFBTSxDQUFDO0FBRmxCLGFBR0gsTUFIRztpQkFHUztBQUhUO2lCQUlILE1BQU0sQ0FBQyxjQUFQLENBQXNCLFNBQUMsTUFBRDttQkFBVyxNQUFNLENBQUMsR0FBUCxLQUFjLE1BQU0sQ0FBQyxLQUFQLENBQWEsQ0FBYjtVQUF6QixDQUF0QjtBQUpHOztJQU1ULEtBQUEsR0FBUSxVQUFXLENBQUEsQ0FBQSxDQUNsQixDQUFDLEtBRE0sQ0FDQSxDQURBLEVBQ0UsQ0FBQyxDQURILENBRVAsQ0FBQyxLQUZNLENBRUEsYUFGQSxDQUdQLENBQUMsR0FITSxDQUdGLFNBQUMsSUFBRDtBQUNKLFVBQUE7TUFBQSxLQUFBLEdBQVEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO01BQ1IsS0FBQSxHQUFRLFVBQUEsQ0FBVyxLQUFNLENBQUEsQ0FBQSxDQUFqQjtNQUNSLElBQW9CLEtBQUEsQ0FBTSxLQUFOLENBQXBCO1FBQUEsS0FBQSxHQUFRLEtBQU0sQ0FBQSxDQUFBLEVBQWQ7O01BQ0EsR0FBQSxHQUFNLEtBQU0sQ0FBQSxDQUFBO01BQ1osU0FBQSxHQUFZLEdBQUcsQ0FBQyxLQUFKLENBQVUsQ0FBVixFQUFZLENBQVo7TUFDWixHQUFBLEdBQU0sU0FBQSxLQUFhO01BQ25CLEdBQUEsR0FBTSxDQUFJLEdBQUosSUFBWSxTQUFBLEtBQWE7TUFDL0IsSUFBc0IsR0FBQSxJQUFPLEdBQTdCO1FBQUEsR0FBQSxHQUFNLEdBQUcsQ0FBQyxLQUFKLENBQVUsQ0FBVixFQUFOOztNQUNBLE1BQUE7QUFBUyxnQkFBTyxHQUFQO0FBQUEsZUFDSCxhQURHO21CQUNnQixTQUFBO3FCQUFLLE1BQU0sQ0FBQztZQUFaO0FBRGhCLGVBRUgsY0FGRzttQkFFaUIsU0FBQTtxQkFBSyxNQUFNLENBQUM7WUFBWjtBQUZqQixlQUdILE9BSEc7QUFBQSxlQUdLLFFBSEw7bUJBR21CLFNBQUE7cUJBQUssTUFBTyxDQUFBLEdBQUE7WUFBWjtBQUhuQjttQkFJSCxTQUFBO0FBQ0osa0JBQUE7Y0FBQSxXQUFBLEdBQWMsTUFBTSxDQUFDLEtBQVAsQ0FBYSxHQUFiO2NBQ2QsV0FBQSxHQUFjLFVBQUEsQ0FBVyxXQUFYO2NBQ1AsSUFBRyxLQUFBLENBQU0sV0FBTixDQUFIO3VCQUEyQixZQUEzQjtlQUFBLE1BQUE7dUJBQTRDLFlBQTVDOztZQUhIO0FBSkc7O0FBU1QsYUFBTztRQUFDLEtBQUEsR0FBRDtRQUFLLE9BQUEsS0FBTDtRQUFXLEtBQUEsR0FBWDtRQUFlLEtBQUEsR0FBZjtRQUFtQixRQUFBLE1BQW5COztJQWxCSCxDQUhFO0FBdUJSLFdBQU87TUFBQyxRQUFBLE1BQUQ7TUFBUyxPQUFBLEtBQVQ7O0VBaENNO0VBbUNkLElBQUMsQ0FBQSxRQUFELEdBQVksU0FBQyxNQUFELEVBQVMsV0FBVDtBQUNYLFFBQUE7SUFBQSxLQUFBLEdBQVEsSUFBQyxDQUFBLFVBQUQsQ0FBWSxNQUFaLEVBQW9CLFdBQXBCO0lBQ1IsSUFBRyxLQUFLLENBQUMsTUFBVDtNQUNDLFNBQVMsQ0FBQyxJQUFWLENBQWUsUUFBQSxHQUFXLFNBQUE7ZUFBSyxRQUFBLENBQVMsTUFBVCxFQUFpQixLQUFqQixFQUF3QixXQUF4QjtNQUFMLENBQTFCO01BQ0EsUUFBQSxDQUFBLEVBRkQ7O0FBR0EsV0FBTztFQUxJO0VBUVosUUFBQSxHQUFXLFNBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsV0FBaEI7QUFDVixRQUFBO0lBQUEsTUFBQSxHQUFTO0FBRVQ7QUFBQSxTQUFBLHFDQUFBOztNQUNDLFlBQUEsR0FBZSxJQUFJLENBQUMsTUFBTCxDQUFBO01BQ2YsTUFBQTtBQUFTLGdCQUFBLEtBQUE7QUFBQSxnQkFDSCxJQUFJLENBQUMsR0FERjttQkFDVyxZQUFBLElBQWdCLElBQUksQ0FBQztBQURoQyxnQkFFSCxJQUFJLENBQUMsR0FGRjttQkFFVyxZQUFBLElBQWdCLElBQUksQ0FBQztBQUZoQzttQkFHSCxZQUFBLEtBQWdCLElBQUksQ0FBQztBQUhsQjs7TUFLVCxJQUFTLENBQUksTUFBYjtBQUFBLGNBQUE7O0FBUEQ7V0FTQSxNQUFNLENBQUMsS0FBUCxDQUFhLFdBQWIsRUFBMEIsTUFBMUI7RUFaVTtBQWNYLFNBQU87QUFoRVM7O0FBcUVqQixhQUFBLEdBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiTWVkaWFRdWVyeSA9IG5ldyAoKS0+XG5cdGNhbGxiYWNrcyA9IFtdXG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJ3Jlc2l6ZScsICgpLT5cblx0XHRjYWxsYmFjaygpIGZvciBjYWxsYmFjayBpbiBjYWxsYmFja3Ncblx0XHRyZXR1cm5cblxuXHRAcGFyc2VRdWVyeSA9ICh0YXJnZXQsIHF1ZXJ5U3RyaW5nKS0+XG5cdFx0cXVlcnlTcGxpdCA9IHF1ZXJ5U3RyaW5nLnNwbGl0KCcoJylcblx0XHRzb3VyY2UgPSBxdWVyeVNwbGl0WzBdXG5cdFx0c291cmNlID0gc3dpdGNoIHNvdXJjZVxuXHRcdFx0d2hlbiAnd2luZG93JyB0aGVuIFF1aWNrV2luZG93XG5cdFx0XHR3aGVuICdwYXJlbnQnIHRoZW4gdGFyZ2V0LnBhcmVudFxuXHRcdFx0d2hlbiAnc2VsZicgdGhlbiB0YXJnZXRcblx0XHRcdGVsc2UgdGFyZ2V0LnBhcmVudE1hdGNoaW5nIChwYXJlbnQpLT4gcGFyZW50LnJlZiBpcyBzb3VyY2Uuc2xpY2UoMSlcblxuXHRcdHJ1bGVzID0gcXVlcnlTcGxpdFsxXVxuXHRcdFx0LnNsaWNlKDAsLTEpXG5cdFx0XHQuc3BsaXQocnVsZURlbGltaXRlcilcblx0XHRcdC5tYXAgKHJ1bGUpLT4gXG5cdFx0XHRcdHNwbGl0ID0gcnVsZS5zcGxpdCgnOicpXG5cdFx0XHRcdHZhbHVlID0gcGFyc2VGbG9hdChzcGxpdFsxXSlcblx0XHRcdFx0dmFsdWUgPSBzcGxpdFsxXSBpZiBpc05hTih2YWx1ZSlcblx0XHRcdFx0a2V5ID0gc3BsaXRbMF1cblx0XHRcdFx0a2V5UHJlZml4ID0ga2V5LnNsaWNlKDAsNClcblx0XHRcdFx0bWF4ID0ga2V5UHJlZml4IGlzICdtYXgtJ1xuXHRcdFx0XHRtaW4gPSBub3QgbWF4IGFuZCBrZXlQcmVmaXggaXMgJ21pbi0nXG5cdFx0XHRcdGtleSA9IGtleS5zbGljZSg0KSBpZiBtYXggb3IgbWluXG5cdFx0XHRcdGdldHRlciA9IHN3aXRjaCBrZXlcblx0XHRcdFx0XHR3aGVuICdvcmllbnRhdGlvbicgdGhlbiAoKS0+IHNvdXJjZS5vcmllbnRhdGlvblxuXHRcdFx0XHRcdHdoZW4gJ2FzcGVjdC1yYXRpbycgdGhlbiAoKS0+IHNvdXJjZS5hc3BlY3RSYXRpb1xuXHRcdFx0XHRcdHdoZW4gJ3dpZHRoJywnaGVpZ2h0JyB0aGVuICgpLT4gc291cmNlW2tleV1cblx0XHRcdFx0XHRlbHNlICgpLT5cblx0XHRcdFx0XHRcdHN0cmluZ1ZhbHVlID0gc291cmNlLnN0eWxlKGtleSlcblx0XHRcdFx0XHRcdHBhcnNlZFZhbHVlID0gcGFyc2VGbG9hdCBzdHJpbmdWYWx1ZVxuXHRcdFx0XHRcdFx0cmV0dXJuIGlmIGlzTmFOKHBhcnNlZFZhbHVlKSB0aGVuIHN0cmluZ1ZhbHVlIGVsc2UgcGFyc2VkVmFsdWVcblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiB7a2V5LHZhbHVlLG1pbixtYXgsZ2V0dGVyfVxuXG5cdFx0cmV0dXJuIHtzb3VyY2UsIHJ1bGVzfVxuXG5cblx0QHJlZ2lzdGVyID0gKHRhcmdldCwgcXVlcnlTdHJpbmcpLT5cblx0XHRxdWVyeSA9IEBwYXJzZVF1ZXJ5KHRhcmdldCwgcXVlcnlTdHJpbmcpXG5cdFx0aWYgcXVlcnkuc291cmNlXG5cdFx0XHRjYWxsYmFja3MucHVzaCBjYWxsYmFjayA9ICgpLT4gdGVzdFJ1bGUodGFyZ2V0LCBxdWVyeSwgcXVlcnlTdHJpbmcpXG5cdFx0XHRjYWxsYmFjaygpXG5cdFx0cmV0dXJuIHF1ZXJ5XG5cblxuXHR0ZXN0UnVsZSA9ICh0YXJnZXQsIHF1ZXJ5LCBxdWVyeVN0cmluZyktPlxuXHRcdHBhc3NlZCA9IHRydWVcblxuXHRcdGZvciBydWxlIGluIHF1ZXJ5LnJ1bGVzXG5cdFx0XHRjdXJyZW50VmFsdWUgPSBydWxlLmdldHRlcigpXG5cdFx0XHRwYXNzZWQgPSBzd2l0Y2hcblx0XHRcdFx0d2hlbiBydWxlLm1pbiB0aGVuIGN1cnJlbnRWYWx1ZSA+PSBydWxlLnZhbHVlXG5cdFx0XHRcdHdoZW4gcnVsZS5tYXggdGhlbiBjdXJyZW50VmFsdWUgPD0gcnVsZS52YWx1ZVxuXHRcdFx0XHRlbHNlIGN1cnJlbnRWYWx1ZSBpcyBydWxlLnZhbHVlXG5cblx0XHRcdGJyZWFrIGlmIG5vdCBwYXNzZWRcdFx0XG5cdFx0XG5cdFx0dGFyZ2V0LnN0YXRlKHF1ZXJ5U3RyaW5nLCBwYXNzZWQpXG5cblx0cmV0dXJuIEBcblxuXG5cblxucnVsZURlbGltaXRlciA9IC8sXFxzKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==
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
            child = QuickDom(child);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBTTtFQUNRLG9CQUFDLFFBQUQsRUFBVyxjQUFYO0lBQVcsSUFBQyxDQUFBLGdCQUFEO0lBQ3ZCLElBQUMsQ0FBQSxRQUFELEdBQVksUUFBUSxDQUFDLEdBQVQsQ0FBYSxTQUFDLEVBQUQ7YUFBTyxRQUFBLENBQVMsRUFBVDtJQUFQLENBQWI7RUFEQTs7dUJBR2IsT0FBQSxHQUFTLFNBQUE7SUFDUixJQUFDLENBQUEsUUFBRCxHQUFZLElBQUMsQ0FBQSxRQUFRLENBQUMsT0FBVixDQUFBO0FBQ1osV0FBTztFQUZDOzt3QkFJVCxRQUFBLEdBQVEsU0FBQyxVQUFEO0lBQ1AsSUFBRyxVQUFIO01BQ0MsSUFBQyxDQUFBLGFBQUQsR0FBaUI7QUFDakIsYUFBTyxLQUZSO0tBQUEsTUFBQTtBQUlDLGFBQU8sSUFBQyxDQUFBLFlBSlQ7O0VBRE87Ozs7Ozs7QUFPVDs7O0VBQ0EsVUFBVSxDQUFDLE9BQVE7OztBQUluQixNQUFNLENBQUMsSUFBUCxDQUFZLFlBQVksQ0FBQSxTQUF4QixDQUEyQixDQUFDLE1BQTVCLENBQW1DLEtBQW5DLEVBQTBDLGFBQTFDLEVBQXlELE1BQXpELEVBQWlFLE1BQWpFLENBQXdFLENBQUMsT0FBekUsQ0FBaUYsU0FBQyxNQUFEO1NBQ2hGLFVBQVUsQ0FBQSxTQUFHLENBQUEsTUFBQSxDQUFiLEdBQXVCLFNBQUMsUUFBRDtBQUN0QixRQUFBO0lBQUEsT0FBQSxHQUFVLElBQUMsQ0FBQSxXQUFEOztBQUFlO0FBQUE7V0FBQSxxQ0FBQTs7UUFDeEIsSUFBRyxNQUFBLEtBQVUsTUFBVixJQUFvQixNQUFBLEtBQVUsTUFBakM7VUFDQyxJQUFHLFFBQUg7MEJBQWlCLE9BQVEsQ0FBQSxNQUFBLENBQVIsR0FBa0IsVUFBbkM7V0FBQSxNQUFBOzBCQUFpRCxPQUFRLENBQUEsTUFBQSxHQUF6RDtXQUREO1NBQUEsTUFBQTt3QkFHQyxPQUFRLENBQUEsTUFBQSxDQUFSLGdCQUFnQixTQUFoQixHQUhEOztBQUR3Qjs7O0lBTWxCLElBQUcsSUFBQyxDQUFBLGFBQUo7YUFBdUIsUUFBdkI7S0FBQSxNQUFBO2FBQW9DLEtBQXBDOztFQVBlO0FBRHlELENBQWpGOztBQVdBLFFBQVEsQ0FBQyxLQUFULEdBQWlCLFNBQUMsUUFBRCxFQUFXLGFBQVg7RUFDaEIsSUFBRyxDQUFJLEVBQUUsQ0FBQyxRQUFILENBQVksUUFBWixDQUFQO0FBQ0MsVUFBTSxJQUFJLEtBQUosQ0FBVSxtQ0FBQSxHQUFtQyxDQUFDLE1BQUEsQ0FBTyxRQUFQLENBQUQsQ0FBN0MsRUFEUDtHQUFBLE1BRUssSUFBRyxDQUFJLFFBQVEsQ0FBQyxNQUFoQjtBQUNKLFVBQU0sSUFBSSxLQUFKLENBQVUsZ0RBQVYsRUFERjs7QUFHTCxTQUFPLElBQUksVUFBSixDQUFlLFFBQWYsRUFBeUIsYUFBekI7QUFOUyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFF1aWNrQmF0Y2hcblx0Y29uc3RydWN0b3I6IChlbGVtZW50cywgQHJldHVyblJlc3VsdHMpLT5cblx0XHRAZWxlbWVudHMgPSBlbGVtZW50cy5tYXAgKGVsKS0+IFF1aWNrRG9tKGVsKVxuXG5cdHJldmVyc2U6ICgpLT5cblx0XHRAZWxlbWVudHMgPSBAZWxlbWVudHMucmV2ZXJzZSgpXG5cdFx0cmV0dXJuIEBcblxuXHRyZXR1cm46IChyZXR1cm5OZXh0KS0+XG5cdFx0aWYgcmV0dXJuTmV4dFxuXHRcdFx0QHJldHVyblJlc3VsdHMgPSB0cnVlXG5cdFx0XHRyZXR1cm4gQFxuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBAbGFzdFJlc3VsdHNcblxuIyMjIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICMjI1xuUXVpY2tCYXRjaC5uYW1lID89ICdRdWlja0JhdGNoJ1xuXG5cblxuT2JqZWN0LmtleXMoUXVpY2tFbGVtZW50OjopLmNvbmNhdCgnY3NzJywgJ3JlcGxhY2VXaXRoJywgJ2h0bWwnLCAndGV4dCcpLmZvckVhY2ggKG1ldGhvZCktPlxuXHRRdWlja0JhdGNoOjpbbWV0aG9kXSA9IChuZXdWYWx1ZSktPlxuXHRcdHJlc3VsdHMgPSBAbGFzdFJlc3VsdHMgPSBmb3IgZWxlbWVudCBpbiBAZWxlbWVudHNcblx0XHRcdGlmIG1ldGhvZCBpcyAnaHRtbCcgb3IgbWV0aG9kIGlzICd0ZXh0J1xuXHRcdFx0XHRpZiBuZXdWYWx1ZSB0aGVuIGVsZW1lbnRbbWV0aG9kXSA9IG5ld1ZhbHVlIGVsc2UgZWxlbWVudFttZXRob2RdXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGVsZW1lbnRbbWV0aG9kXShhcmd1bWVudHMuLi4pXG5cdFx0XG5cdFx0cmV0dXJuIGlmIEByZXR1cm5SZXN1bHRzIHRoZW4gcmVzdWx0cyBlbHNlIEBcblxuXG5RdWlja0RvbS5iYXRjaCA9IChlbGVtZW50cywgcmV0dXJuUmVzdWx0cyktPlxuXHRpZiBub3QgSVMuaXRlcmFibGUoZWxlbWVudHMpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQmF0Y2g6IGV4cGVjdGVkIGFuIGl0ZXJhYmxlLCBnb3QgI3tTdHJpbmcoZWxlbWVudHMpfVwiKVxuXHRlbHNlIGlmIG5vdCBlbGVtZW50cy5sZW5ndGhcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJCYXRjaDogZXhwZWN0ZWQgYSBub24tZW1wdHkgZWxlbWVudCBjb2xsZWN0aW9uXCIpXG5cblx0cmV0dXJuIG5ldyBRdWlja0JhdGNoKGVsZW1lbnRzLCByZXR1cm5SZXN1bHRzKVxuXG5cbiJdfQ==
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5kVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleHRlbmRUZW1wbGF0ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxjQUFBLEdBQWlCLFNBQUMsV0FBRCxFQUFjLE9BQWQsRUFBdUIsVUFBdkI7QUFDaEIsTUFBQTtFQUFBLElBQUcsVUFBSDtJQUFtQixtQkFBQSxHQUFzQjtNQUFBLE9BQUEsRUFBUyxTQUFDLElBQUQ7ZUFBUyxNQUFBLENBQU8sSUFBUCxFQUFhLFVBQWI7TUFBVCxDQUFUO01BQXpDOztFQUNBLElBQXVDLEVBQUUsQ0FBQyxLQUFILENBQVMsT0FBVCxDQUF2QztJQUFBLE9BQUEsR0FBVSxTQUFBLENBQVUsT0FBVixFQUFtQixLQUFuQixFQUFWOztFQUNBLElBQTZCLEVBQUUsQ0FBQyxRQUFILENBQVksT0FBWixDQUE3QjtJQUFBLE9BQUEsR0FBVSxPQUFPLENBQUMsUUFBbEI7O0VBRUEsTUFBQSxHQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBWixDQUFvQixVQUFwQixDQUErQixDQUFDLE9BQWhDLENBQXdDLGlCQUF4QyxDQUEwRCxDQUFDLFNBQTNELENBQXFFLG1CQUFyRSxDQUF5RixDQUFDLEtBQTFGLENBQWdHLFdBQWhHLEVBQTZHLE9BQTdHO0VBQ1QsZUFBQSxHQUFrQixXQUFXLENBQUM7RUFDOUIsV0FBQSxzQkFBYyxPQUFPLENBQUUsa0JBQVQsSUFBcUI7RUFDbkMsTUFBTSxDQUFDLFFBQVAsR0FBa0I7O0FBRWxCO0VBQ0EsSUFBRyxFQUFFLENBQUMsS0FBSCxDQUFTLFdBQVQsQ0FBSDtBQUNDLFNBQWEsMElBQWI7TUFDQyxpQkFBQSxHQUFvQixTQUFBLEdBQVk7TUFDaEMsWUFBQSxHQUFlLGVBQWdCLENBQUEsS0FBQTtNQUMvQixRQUFBLEdBQVcsV0FBWSxDQUFBLEtBQUE7TUFDdkIsaUJBQUE7QUFBb0IsZ0JBQUEsS0FBQTtBQUFBLGdCQUNkLEVBQUUsQ0FBQyxRQUFILENBQVksUUFBWixDQURjO21CQUNhO0FBRGIsZ0JBRWQsRUFBRSxDQUFDLEtBQUgsQ0FBUyxRQUFULENBRmM7bUJBRVUsaUJBQUEsR0FBb0IsU0FBQSxDQUFVLFFBQVYsRUFBb0IsS0FBcEI7QUFGOUIsZ0JBR2QsRUFBRSxDQUFDLE1BQUgsQ0FBVSxRQUFWLENBSGM7bUJBR1csaUJBQUEsR0FBb0I7Y0FBQyxJQUFBLEVBQUssTUFBTjtjQUFjLE9BQUEsRUFBUTtnQkFBQyxJQUFBLEVBQUssUUFBTjtlQUF0Qjs7QUFIL0IsaUJBSWQsQ0FBSSxRQUFKLElBQWlCLENBQUksV0FKUDttQkFJdUIsU0FBQSxHQUFZO0FBSm5DO21CQUtkLGlCQUFBLEdBQW9CLFFBQUEsSUFBWTtBQUxsQjs7TUFRcEIsSUFBRyxTQUFIO1FBQ0MsaUJBQUEsR0FBb0IsYUFEckI7T0FBQSxNQUdLLElBQUcsaUJBQUg7UUFDSixpQkFBQSxHQUNJLFlBQUgsR0FDQyxZQUFZLENBQUMsTUFBYixDQUFvQixpQkFBcEIsRUFBdUMsVUFBdkMsQ0FERCxHQUdDLElBQUksYUFBSixDQUFrQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQVosQ0FBa0IsTUFBbEIsRUFBMEIsaUJBQTFCLENBQWxCLEVBTEU7O01BT0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFoQixDQUFxQixpQkFBckI7QUF0QkQsS0FERDtHQUFBLE1BMEJLLElBQUcsRUFBRSxDQUFDLE1BQUgsQ0FBVSxXQUFWLENBQUg7SUFDSixNQUFNLENBQUMsUUFBUCxHQUFrQixXQUFBLENBQVksV0FBWixFQUF5QixlQUF6QixFQUEwQyxVQUExQztJQUNsQixvQkFBQSxHQUF1QjtBQUV2QixTQUFBLDJCQUFBOztNQUNDLGlCQUFBLEdBQXVCLEVBQUUsQ0FBQyxXQUFILENBQWUsUUFBZixDQUFBLElBQTZCLENBQUksRUFBRSxDQUFDLFFBQUgsQ0FBWSxRQUFaLENBQXBDLEdBQStELFFBQS9ELEdBQTZFLFNBQUEsQ0FBVSxRQUFWO01BQ2pHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBaEIsQ0FBcUIsSUFBSSxhQUFKLENBQWtCLGlCQUFsQixDQUFyQjtNQUNBLE9BQU8sb0JBQXFCLENBQUEsR0FBQTtBQUg3QixLQUpJOztBQVVMLFNBQU87QUEvQ1M7O0FBb0RqQixXQUFBLEdBQWMsU0FBQyxlQUFELEVBQWtCLGVBQWxCLEVBQW1DLFVBQW5DO0FBQWlELE1BQUE7RUFBQSxJQUFHLENBQUksZUFBZSxDQUFDLE1BQXZCO1dBQW1DLGdCQUFuQztHQUFBLE1BQUE7SUFDOUQsTUFBQSxHQUFTO0FBRVQsU0FBQSxpREFBQTs7TUFDQyxRQUFBLEdBQVcsZUFBZ0IsQ0FBQSxZQUFZLENBQUMsR0FBYjtNQUMzQixJQUFHLFFBQUg7UUFDQyxpQkFBQSxHQUFvQixZQUFZLENBQUMsTUFBYixDQUFvQixRQUFwQixFQUE4QixVQUE5QjtRQUNwQixPQUFPLGVBQWdCLENBQUEsWUFBWSxDQUFDLEdBQWIsRUFGeEI7T0FBQSxNQUlLLElBQUcsUUFBQSxLQUFZLElBQWY7UUFDSixPQUFPLGVBQWdCLENBQUEsWUFBWSxDQUFDLEdBQWI7QUFDdkIsaUJBRkk7T0FBQSxNQUFBO1FBS0osaUJBQUE7QUFBb0Isa0JBQUEsS0FBQTtBQUFBLGtCQUNkLFVBRGM7cUJBQ0UsWUFBWSxDQUFDLE1BQWIsQ0FBb0IsSUFBcEIsRUFBMEIsVUFBMUI7QUFERixrQkFFZCxNQUFNLENBQUMsSUFBUCxDQUFZLGVBQVosQ0FBNEIsQ0FBQyxNQUZmO3FCQUUyQixZQUFZLENBQUMsTUFBYixDQUFBO0FBRjNCO3FCQUdkO0FBSGM7YUFMaEI7O01BVUwsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQTFCLEdBQXFDLFdBQUEsQ0FBWSxlQUFaLEVBQTZCLGlCQUFpQixDQUFDLFFBQS9DO01BQ3JDLE1BQU0sQ0FBQyxJQUFQLENBQVksaUJBQVo7QUFqQkQ7QUFtQkEsV0FBTyxPQXRCdUQ7O0FBQWpEIiwic291cmNlc0NvbnRlbnQiOlsiZXh0ZW5kVGVtcGxhdGUgPSAoY3VycmVudE9wdHMsIG5ld09wdHMsIGdsb2JhbE9wdHMpLT5cblx0aWYgZ2xvYmFsT3B0cyB0aGVuIGdsb2JhbE9wdHNUcmFuc2Zvcm0gPSBvcHRpb25zOiAob3B0cyktPiBleHRlbmQob3B0cywgZ2xvYmFsT3B0cylcblx0bmV3T3B0cyA9IHBhcnNlVHJlZShuZXdPcHRzLCBmYWxzZSkgaWYgSVMuYXJyYXkobmV3T3B0cylcblx0bmV3T3B0cyA9IG5ld09wdHMuX2NvbmZpZyBpZiBJUy50ZW1wbGF0ZShuZXdPcHRzKVxuXG5cdG91dHB1dCA9IGV4dGVuZC5kZWVwLm5vdEtleXMoJ2NoaWxkcmVuJykubm90RGVlcCgncmVsYXRlZEluc3RhbmNlJykudHJhbnNmb3JtKGdsb2JhbE9wdHNUcmFuc2Zvcm0pLmNsb25lKGN1cnJlbnRPcHRzLCBuZXdPcHRzKVxuXHRjdXJyZW50Q2hpbGRyZW4gPSBjdXJyZW50T3B0cy5jaGlsZHJlblxuXHRuZXdDaGlsZHJlbiA9IG5ld09wdHM/LmNoaWxkcmVuIG9yIFtdXG5cdG91dHB1dC5jaGlsZHJlbiA9IFtdXG5cblx0IyMjIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICMjI1xuXHRpZiBJUy5hcnJheShuZXdDaGlsZHJlbilcblx0XHRmb3IgaW5kZXggaW4gWzAuLi5NYXRoLm1heChjdXJyZW50Q2hpbGRyZW4ubGVuZ3RoLCBuZXdDaGlsZHJlbi5sZW5ndGgpXVxuXHRcdFx0bmVlZHNUZW1wbGF0ZVdyYXAgPSBub0NoYW5nZXMgPSBmYWxzZVxuXHRcdFx0Y3VycmVudENoaWxkID0gY3VycmVudENoaWxkcmVuW2luZGV4XVxuXHRcdFx0bmV3Q2hpbGQgPSBuZXdDaGlsZHJlbltpbmRleF1cblx0XHRcdG5ld0NoaWxkUHJvY2Vzc2VkID0gc3dpdGNoXG5cdFx0XHRcdHdoZW4gSVMudGVtcGxhdGUobmV3Q2hpbGQpIHRoZW4gbmV3Q2hpbGRcblx0XHRcdFx0d2hlbiBJUy5hcnJheShuZXdDaGlsZCkgdGhlbiBuZWVkc1RlbXBsYXRlV3JhcCA9IHBhcnNlVHJlZShuZXdDaGlsZCwgZmFsc2UpXG5cdFx0XHRcdHdoZW4gSVMuc3RyaW5nKG5ld0NoaWxkKSB0aGVuIG5lZWRzVGVtcGxhdGVXcmFwID0ge3R5cGU6J3RleHQnLCBvcHRpb25zOnt0ZXh0Om5ld0NoaWxkfX1cblx0XHRcdFx0d2hlbiBub3QgbmV3Q2hpbGQgYW5kIG5vdCBnbG9iYWxPcHRzIHRoZW4gbm9DaGFuZ2VzID0gdHJ1ZVxuXHRcdFx0XHRlbHNlIG5lZWRzVGVtcGxhdGVXcmFwID0gbmV3Q2hpbGQgb3IgdHJ1ZVxuXG5cblx0XHRcdGlmIG5vQ2hhbmdlc1xuXHRcdFx0XHRuZXdDaGlsZFByb2Nlc3NlZCA9IGN1cnJlbnRDaGlsZFxuXHRcdFx0XG5cdFx0XHRlbHNlIGlmIG5lZWRzVGVtcGxhdGVXcmFwXG5cdFx0XHRcdG5ld0NoaWxkUHJvY2Vzc2VkID0gXG5cdFx0XHRcdFx0aWYgY3VycmVudENoaWxkXG5cdFx0XHRcdFx0XHRjdXJyZW50Q2hpbGQuZXh0ZW5kKG5ld0NoaWxkUHJvY2Vzc2VkLCBnbG9iYWxPcHRzKVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdG5ldyBRdWlja1RlbXBsYXRlKGV4dGVuZC5kZWVwLmNsb25lKHNjaGVtYSwgbmV3Q2hpbGRQcm9jZXNzZWQpKVxuXG5cdFx0XHRvdXRwdXQuY2hpbGRyZW4ucHVzaCBuZXdDaGlsZFByb2Nlc3NlZFxuXHRcblx0XG5cdGVsc2UgaWYgSVMub2JqZWN0KG5ld0NoaWxkcmVuKVxuXHRcdG91dHB1dC5jaGlsZHJlbiA9IGV4dGVuZEJ5UmVmKG5ld0NoaWxkcmVuLCBjdXJyZW50Q2hpbGRyZW4sIGdsb2JhbE9wdHMpXG5cdFx0cmVtYWluaW5nTmV3Q2hpbGRyZW4gPSBuZXdDaGlsZHJlblxuXHRcdFxuXHRcdGZvciByZWYsbmV3Q2hpbGQgb2YgcmVtYWluaW5nTmV3Q2hpbGRyZW5cblx0XHRcdG5ld0NoaWxkUHJvY2Vzc2VkID0gaWYgSVMub2JqZWN0UGxhaW4obmV3Q2hpbGQpIGFuZCBub3QgSVMudGVtcGxhdGUobmV3Q2hpbGQpIHRoZW4gbmV3Q2hpbGQgZWxzZSBwYXJzZVRyZWUobmV3Q2hpbGQpXG5cdFx0XHRvdXRwdXQuY2hpbGRyZW4ucHVzaCBuZXcgUXVpY2tUZW1wbGF0ZSBuZXdDaGlsZFByb2Nlc3NlZFxuXHRcdFx0ZGVsZXRlIHJlbWFpbmluZ05ld0NoaWxkcmVuW3JlZl1cblxuXG5cdHJldHVybiBvdXRwdXRcblxuXG5cblxuZXh0ZW5kQnlSZWYgPSAobmV3Q2hpbGRyZW5SZWZzLCBjdXJyZW50Q2hpbGRyZW4sIGdsb2JhbE9wdHMpLT4gaWYgbm90IGN1cnJlbnRDaGlsZHJlbi5sZW5ndGggdGhlbiBjdXJyZW50Q2hpbGRyZW4gZWxzZVxuXHRvdXRwdXQgPSBbXVxuXHRcblx0Zm9yIGN1cnJlbnRDaGlsZCBpbiBjdXJyZW50Q2hpbGRyZW5cblx0XHRuZXdDaGlsZCA9IG5ld0NoaWxkcmVuUmVmc1tjdXJyZW50Q2hpbGQucmVmXVxuXHRcdGlmIG5ld0NoaWxkXG5cdFx0XHRuZXdDaGlsZFByb2Nlc3NlZCA9IGN1cnJlbnRDaGlsZC5leHRlbmQobmV3Q2hpbGQsIGdsb2JhbE9wdHMpXG5cdFx0XHRkZWxldGUgbmV3Q2hpbGRyZW5SZWZzW2N1cnJlbnRDaGlsZC5yZWZdXG5cdFx0XG5cdFx0ZWxzZSBpZiBuZXdDaGlsZCBpcyBudWxsXG5cdFx0XHRkZWxldGUgbmV3Q2hpbGRyZW5SZWZzW2N1cnJlbnRDaGlsZC5yZWZdXG5cdFx0XHRjb250aW51ZVxuXHRcdFxuXHRcdGVsc2Vcblx0XHRcdG5ld0NoaWxkUHJvY2Vzc2VkID0gc3dpdGNoXG5cdFx0XHRcdHdoZW4gZ2xvYmFsT3B0cyB0aGVuIGN1cnJlbnRDaGlsZC5leHRlbmQobnVsbCwgZ2xvYmFsT3B0cylcblx0XHRcdFx0d2hlbiBPYmplY3Qua2V5cyhuZXdDaGlsZHJlblJlZnMpLmxlbmd0aCB0aGVuIGN1cnJlbnRDaGlsZC5leHRlbmQoKVxuXHRcdFx0XHRlbHNlIGN1cnJlbnRDaGlsZFxuXG5cdFx0bmV3Q2hpbGRQcm9jZXNzZWQuX2NvbmZpZy5jaGlsZHJlbiA9IGV4dGVuZEJ5UmVmKG5ld0NoaWxkcmVuUmVmcywgbmV3Q2hpbGRQcm9jZXNzZWQuY2hpbGRyZW4pXG5cdFx0b3V0cHV0LnB1c2gobmV3Q2hpbGRQcm9jZXNzZWQpXG5cblx0cmV0dXJuIG91dHB1dFxuXG5cblxuXG4iXX0=
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VUcmVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VUcmVlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLFNBQUEsR0FBWSxTQUFDLElBQUQsRUFBTyxhQUFQO0FBQXdCLE1BQUE7QUFBQSxVQUFBLEtBQUE7QUFBQSxVQUM5QixFQUFFLENBQUMsS0FBSCxDQUFTLElBQVQsQ0FEOEI7TUFFbEMsTUFBQSxHQUFTO01BRVQsSUFBRyxDQUFJLEVBQUUsQ0FBQyxNQUFILENBQVUsSUFBSyxDQUFBLENBQUEsQ0FBZixDQUFQO0FBQ0MsY0FBTSxJQUFJLEtBQUosQ0FBYSxnQkFBRCxHQUFrQiwyQkFBbEIsR0FBNEMsQ0FBQyxNQUFBLENBQU8sSUFBSyxDQUFBLENBQUEsQ0FBWixDQUFELENBQTVDLEdBQTZELEdBQXpFLEVBRFA7T0FBQSxNQUFBO1FBR0MsTUFBTSxDQUFDLElBQVAsR0FBYyxJQUFLLENBQUEsQ0FBQSxFQUhwQjs7TUFLQSxJQUFHLElBQUksQ0FBQyxNQUFMLEdBQWMsQ0FBZCxJQUFvQixDQUFJLEVBQUUsQ0FBQyxNQUFILENBQVUsSUFBSyxDQUFBLENBQUEsQ0FBZixDQUF4QixJQUErQyxJQUFLLENBQUEsQ0FBQSxDQUFMLEtBQWEsSUFBL0Q7QUFDQyxjQUFNLElBQUksS0FBSixDQUFhLGdCQUFELEdBQWtCLDhCQUFsQixHQUErQyxDQUFDLE1BQUEsQ0FBTyxJQUFLLENBQUEsQ0FBQSxDQUFaLENBQUQsQ0FBL0MsR0FBZ0UsR0FBNUUsRUFEUDtPQUFBLE1BQUE7UUFHQyxNQUFNLENBQUMsT0FBUCxHQUFvQixJQUFLLENBQUEsQ0FBQSxDQUFSLEdBQWdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBWixDQUFrQixJQUFLLENBQUEsQ0FBQSxDQUF2QixDQUFoQixHQUFnRCxNQUFNLENBQUM7UUFDeEUsSUFBMEMsSUFBSyxDQUFBLENBQUEsQ0FBL0M7VUFBQSxNQUFNLENBQUMsR0FBUCxHQUFhLElBQUssQ0FBQSxDQUFBLENBQUUsQ0FBQyxFQUFSLElBQWMsSUFBSyxDQUFBLENBQUEsQ0FBRSxDQUFDLElBQW5DO1NBSkQ7O01BTUEsTUFBTSxDQUFDLFFBQVAsR0FBa0IsSUFBSSxDQUFDLEtBQUwsQ0FBVyxDQUFYO01BQ2xCLElBQUcsYUFBQSxLQUFpQixLQUFwQjtRQUNDLElBQTZCLElBQUksQ0FBQyxNQUFMLEtBQWUsQ0FBZixJQUFxQixFQUFFLENBQUMsV0FBSCxDQUFlLElBQUssQ0FBQSxDQUFBLENBQXBCLENBQXJCLElBQWlELENBQUksRUFBRSxDQUFDLFFBQUgsQ0FBWSxJQUFLLENBQUEsQ0FBQSxDQUFqQixDQUFsRjtVQUFBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLElBQUssQ0FBQSxDQUFBLEVBQXZCO1NBREQ7T0FBQSxNQUFBO1FBR0MsTUFBTSxDQUFDLFFBQVAsR0FBa0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFoQixDQUFvQixRQUFRLENBQUMsUUFBN0IsRUFIbkI7O0FBSUEsYUFBTztBQXBCMkIsV0F1QjlCLEVBQUUsQ0FBQyxNQUFILENBQVUsSUFBVixDQUFBLElBQW1CLEVBQUUsQ0FBQyxPQUFILENBQVcsSUFBWCxFQXZCVzthQXdCbEM7UUFBQSxJQUFBLEVBQUssTUFBTDtRQUFhLE9BQUEsRUFBUTtVQUFDLElBQUEsRUFBTSxJQUFJLENBQUMsV0FBTCxJQUFvQixJQUEzQjtTQUFyQjtRQUF1RCxRQUFBLEVBQVMsTUFBTSxDQUFDLFFBQXZFOztBQXhCa0MsVUEwQjlCLEVBQUUsQ0FBQyxLQUFILENBQVMsSUFBVCxDQTFCOEI7YUEyQmxDO1FBQUEsSUFBQSxFQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBZCxDQUFBLENBQU47UUFDQSxHQUFBLEVBQUssSUFBSSxDQUFDLEVBRFY7UUFFQSxPQUFBLEVBQVMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLENBQWtCLHNCQUFsQixDQUFBLENBQTBDLElBQTFDLENBRlQ7UUFHQSxRQUFBLEVBQVUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBcEIsQ0FBeUIsSUFBSSxDQUFDLFVBQTlCLEVBQTBDLFFBQVEsQ0FBQyxRQUFuRCxDQUhWOztBQTNCa0MsVUFnQzlCLEVBQUUsQ0FBQyxVQUFILENBQWMsSUFBZCxDQWhDOEI7YUFpQ2xDO1FBQUEsSUFBQSxFQUFNLElBQUksQ0FBQyxJQUFYO1FBQ0EsR0FBQSxFQUFLLElBQUksQ0FBQyxHQURWO1FBRUEsT0FBQSxFQUFTLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWxCLENBQTBCLGlCQUExQixDQUFBLENBQTZDLElBQUksQ0FBQyxPQUFsRCxDQUZUO1FBR0EsUUFBQSxFQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBZCxDQUFrQixRQUFRLENBQUMsUUFBM0IsQ0FIVjs7QUFqQ2tDLFVBc0M5QixFQUFFLENBQUMsUUFBSCxDQUFZLElBQVosQ0F0QzhCO2FBdUNsQyxjQUFBLENBQWUsSUFBSSxDQUFDLE9BQXBCO0FBdkNrQztBQTBDbEMsWUFBTSxJQUFJLEtBQUosQ0FBYSxnQkFBRCxHQUFrQiw2REFBbEIsR0FBOEUsQ0FBQyxNQUFBLENBQU8sSUFBUCxDQUFELENBQTFGO0FBMUM0QjtBQUF4Qjs7QUErQ1osZ0JBQUEsR0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJwYXJzZVRyZWUgPSAodHJlZSwgcGFyc2VDaGlsZHJlbiktPiBzd2l0Y2hcblx0d2hlbiBJUy5hcnJheSh0cmVlKVxuXHRcdG91dHB1dCA9IHt9XG5cblx0XHRpZiBub3QgSVMuc3RyaW5nKHRyZWVbMF0pXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IgXCIje3BhcnNlRXJyb3JQcmVmaXh9IHN0cmluZyBmb3IgJ3R5cGUnLCBnb3QgJyN7U3RyaW5nKHRyZWVbMF0pfSdcIlxuXHRcdGVsc2Vcblx0XHRcdG91dHB1dC50eXBlID0gdHJlZVswXVxuXHRcdFxuXHRcdGlmIHRyZWUubGVuZ3RoID4gMSBhbmQgbm90IElTLm9iamVjdCh0cmVlWzFdKSBhbmQgdHJlZVsxXSBpc250IG51bGxcblx0XHRcdHRocm93IG5ldyBFcnJvciBcIiN7cGFyc2VFcnJvclByZWZpeH0gb2JqZWN0IGZvciAnb3B0aW9ucycsIGdvdCAnI3tTdHJpbmcodHJlZVsxXSl9J1wiXG5cdFx0ZWxzZVxuXHRcdFx0b3V0cHV0Lm9wdGlvbnMgPSBpZiB0cmVlWzFdIHRoZW4gZXh0ZW5kLmRlZXAuY2xvbmUodHJlZVsxXSkgZWxzZSBzY2hlbWEub3B0aW9uc1xuXHRcdFx0b3V0cHV0LnJlZiA9IHRyZWVbMV0uaWQgb3IgdHJlZVsxXS5yZWYgaWYgdHJlZVsxXVxuXG5cdFx0b3V0cHV0LmNoaWxkcmVuID0gdHJlZS5zbGljZSgyKVxuXHRcdGlmIHBhcnNlQ2hpbGRyZW4gaXMgZmFsc2Vcblx0XHRcdG91dHB1dC5jaGlsZHJlbiA9IHRyZWVbMl0gaWYgdHJlZS5sZW5ndGggaXMgMyBhbmQgSVMub2JqZWN0UGxhaW4odHJlZVsyXSkgYW5kIG5vdCBJUy50ZW1wbGF0ZSh0cmVlWzJdKVxuXHRcdGVsc2Vcblx0XHRcdG91dHB1dC5jaGlsZHJlbiA9IG91dHB1dC5jaGlsZHJlbi5tYXAoUXVpY2tEb20udGVtcGxhdGUpXG5cdFx0cmV0dXJuIG91dHB1dFxuXG5cblx0d2hlbiBJUy5zdHJpbmcodHJlZSkgb3IgSVMuZG9tVGV4dCh0cmVlKVxuXHRcdHR5cGU6J3RleHQnLCBvcHRpb25zOnt0ZXh0OiB0cmVlLnRleHRDb250ZW50IG9yIHRyZWV9LCBjaGlsZHJlbjpzY2hlbWEuY2hpbGRyZW5cblxuXHR3aGVuIElTLmRvbUVsKHRyZWUpXG5cdFx0dHlwZTogdHJlZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0cmVmOiB0cmVlLmlkXG5cdFx0b3B0aW9uczogZXh0ZW5kLmNsb25lLmtleXMoYWxsb3dlZFRlbXBsYXRlT3B0aW9ucykodHJlZSlcblx0XHRjaGlsZHJlbjogc2NoZW1hLmNoaWxkcmVuLm1hcC5jYWxsKHRyZWUuY2hpbGROb2RlcywgUXVpY2tEb20udGVtcGxhdGUpXG5cblx0d2hlbiBJUy5xdWlja0RvbUVsKHRyZWUpXG5cdFx0dHlwZTogdHJlZS50eXBlXG5cdFx0cmVmOiB0cmVlLnJlZlxuXHRcdG9wdGlvbnM6IGV4dGVuZC5jbG9uZS5kZWVwLm5vdEtleXMoJ3JlbGF0ZWRJbnN0YW5jZScpKHRyZWUub3B0aW9ucylcblx0XHRjaGlsZHJlbjogdHJlZS5jaGlsZHJlbi5tYXAoUXVpY2tEb20udGVtcGxhdGUpXG5cblx0d2hlbiBJUy50ZW1wbGF0ZSh0cmVlKVxuXHRcdGV4dGVuZFRlbXBsYXRlKHRyZWUuX2NvbmZpZylcblxuXHRlbHNlXG5cdFx0dGhyb3cgbmV3IEVycm9yIFwiI3twYXJzZUVycm9yUHJlZml4fSAoYXJyYXkgfHwgc3RyaW5nIHx8IGRvbUVsIHx8IHF1aWNrRG9tRWwgfHwgdGVtcGxhdGUpLCBnb3QgI3tTdHJpbmcodHJlZSl9XCJcblxuXG5cblxucGFyc2VFcnJvclByZWZpeCA9ICdUZW1wbGF0ZSBQYXJzZSBFcnJvcjogZXhwZWN0ZWQnIl19
;

var applyData;

applyData = function(element, data) {
  var child, computers, defaults, i, j, key, keys, len, len1, ref;
  if (computers = element.options.computers) {
    defaults = element.options.defaults;
    keys = Object.keys(computers);
    for (i = 0, len = keys.length; i < len; i++) {
      key = keys[i];
      if (data && data.hasOwnProperty(key)) {
        computers[key].call(element, data[key]);
      } else if (defaults && defaults.hasOwnProperty(key)) {
        computers[key].call(element, defaults[key]);
      }
    }
  }
  ref = element._children;
  for (j = 0, len1 = ref.length; j < len1; j++) {
    child = ref[j];
    applyData(child, data);
  }
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHlEYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwbHlEYXRhLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLFNBQUEsR0FBWSxTQUFDLE9BQUQsRUFBVSxJQUFWO0FBQ1gsTUFBQTtFQUFBLElBQUcsU0FBQSxHQUFZLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBL0I7SUFDQyxRQUFBLEdBQVcsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUMzQixJQUFBLEdBQU8sTUFBTSxDQUFDLElBQVAsQ0FBWSxTQUFaO0FBRVAsU0FBQSxzQ0FBQTs7TUFDQyxJQUFHLElBQUEsSUFBUyxJQUFJLENBQUMsY0FBTCxDQUFvQixHQUFwQixDQUFaO1FBQ0MsU0FBVSxDQUFBLEdBQUEsQ0FBSSxDQUFDLElBQWYsQ0FBb0IsT0FBcEIsRUFBNkIsSUFBSyxDQUFBLEdBQUEsQ0FBbEMsRUFERDtPQUFBLE1BR0ssSUFBRyxRQUFBLElBQWEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsR0FBeEIsQ0FBaEI7UUFDSixTQUFVLENBQUEsR0FBQSxDQUFJLENBQUMsSUFBZixDQUFvQixPQUFwQixFQUE2QixRQUFTLENBQUEsR0FBQSxDQUF0QyxFQURJOztBQUpOLEtBSkQ7O0FBWUE7QUFBQSxPQUFBLHVDQUFBOztJQUFBLFNBQUEsQ0FBVSxLQUFWLEVBQWlCLElBQWpCO0FBQUE7QUFiVyIsInNvdXJjZXNDb250ZW50IjpbImFwcGx5RGF0YSA9IChlbGVtZW50LCBkYXRhKS0+XG5cdGlmIGNvbXB1dGVycyA9IGVsZW1lbnQub3B0aW9ucy5jb21wdXRlcnNcblx0XHRkZWZhdWx0cyA9IGVsZW1lbnQub3B0aW9ucy5kZWZhdWx0c1xuXHRcdGtleXMgPSBPYmplY3Qua2V5cyhjb21wdXRlcnMpXG5cdFx0XG5cdFx0Zm9yIGtleSBpbiBrZXlzXG5cdFx0XHRpZiBkYXRhIGFuZCBkYXRhLmhhc093blByb3BlcnR5KGtleSlcblx0XHRcdFx0Y29tcHV0ZXJzW2tleV0uY2FsbChlbGVtZW50LCBkYXRhW2tleV0pXG5cdFx0XHRcblx0XHRcdGVsc2UgaWYgZGVmYXVsdHMgYW5kIGRlZmF1bHRzLmhhc093blByb3BlcnR5KGtleSlcblx0XHRcdFx0Y29tcHV0ZXJzW2tleV0uY2FsbChlbGVtZW50LCBkZWZhdWx0c1trZXldKVxuXG5cblx0YXBwbHlEYXRhKGNoaWxkLCBkYXRhKSBmb3IgY2hpbGQgaW4gZWxlbWVudC5fY2hpbGRyZW5cblx0cmV0dXJuIl19
;

var schema;

schema = {
  type: 'div',
  ref: void 0,
  options: {},
  children: []
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZW1hLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLE1BQUEsR0FDQztFQUFBLElBQUEsRUFBTSxLQUFOO0VBQ0EsR0FBQSxFQUFLLE1BREw7RUFFQSxPQUFBLEVBQVMsRUFGVDtFQUdBLFFBQUEsRUFBVSxFQUhWIiwic291cmNlc0NvbnRlbnQiOlsic2NoZW1hID0gXG5cdHR5cGU6ICdkaXYnXG5cdHJlZjogdW5kZWZpbmVkXG5cdG9wdGlvbnM6IHt9XG5cdGNoaWxkcmVuOiBbXSJdfQ==
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
        if (!child._config.options.computers) {
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
    if (this._hasComputers) {
      applyData(element, data);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxhQUFBO0VBQUE7O0FBQUEsSUFBQSxDQUFLLGtCQUFMOztBQUNBLElBQUEsQ0FBSyxhQUFMOztBQUNBLElBQUEsQ0FBSyxhQUFMOztBQUNBLElBQUEsQ0FBSyxVQUFMOztBQUVNO0VBQ1EsdUJBQUMsTUFBRCxFQUFTLE1BQVQ7QUFDWixRQUFBO0lBQUEsSUFBQyxDQUFBLE9BQUQsR0FBYyxNQUFILEdBQWUsU0FBQSxDQUFVLE1BQVYsQ0FBZixHQUFzQztJQUNqRCxJQUFDLENBQUEsYUFBRCxHQUFpQixDQUFDLENBQUMsSUFBQyxDQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFFcEMsSUFBRyxDQUFJLElBQUMsQ0FBQSxhQUFMLElBQXVCLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQTVDO0FBQ0M7QUFBQSxXQUFBLHFDQUFBOzthQUFvQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7O1FBQ3pELElBQUMsQ0FBQSxhQUFELEdBQWlCO0FBQ2pCO0FBRkQsT0FERDs7RUFKWTs7MEJBU2IsTUFBQSxHQUFRLFNBQUMsU0FBRCxFQUFZLFVBQVo7V0FDUCxJQUFJLGFBQUosQ0FBa0IsY0FBQSxDQUFlLElBQUMsQ0FBQSxPQUFoQixFQUF5QixTQUF6QixFQUFvQyxVQUFwQyxDQUFsQjtFQURPOzswQkFHUixLQUFBLEdBQU8sU0FBQyxTQUFELEVBQVksVUFBWjtBQUNOLFFBQUE7SUFBQSxJQUFHLFNBQUEsSUFBYyxTQUFTLENBQUMsSUFBM0I7TUFDQyxJQUFBLEdBQU8sU0FBUyxDQUFDO01BQ2pCLElBQW9CLE1BQU0sQ0FBQyxJQUFQLENBQVksU0FBWixDQUFzQixDQUFDLE1BQXZCLEtBQWlDLENBQXJEO1FBQUEsU0FBQSxHQUFZLEtBQVo7T0FGRDs7SUFJQSxJQUFHLFNBQUEsSUFBYSxVQUFoQjtNQUNDLElBQUEsR0FBTyxjQUFBLENBQWUsSUFBQyxDQUFBLE9BQWhCLEVBQXlCLFNBQXpCLEVBQW9DLFVBQXBDLEVBRFI7S0FBQSxNQUFBO01BR0MsSUFBQSxHQUFPLE1BQU0sQ0FBQyxLQUFQLENBQWEsSUFBQyxDQUFBLE9BQWQ7TUFDUCxJQUFJLENBQUMsT0FBTCxHQUFlLE1BQU0sQ0FBQyxRQUFQLENBQWdCLE9BQWhCLENBQXdCLENBQUMsS0FBekIsQ0FBK0IsSUFBSSxDQUFDLE9BQXBDLEVBSmhCOztJQU9BLE9BQUEsR0FBVSxRQUFBLGFBQVMsQ0FBQSxJQUFJLENBQUMsSUFBTCxFQUFXLElBQUksQ0FBQyxPQUFTLFNBQUEsV0FBQSxJQUFJLENBQUMsUUFBTCxDQUFBLENBQWxDO0lBRVYsSUFBRyxJQUFDLENBQUEsYUFBSjtNQUNDLFNBQUEsQ0FBVSxPQUFWLEVBQW1CLElBQW5CLEVBREQ7O0FBR0EsV0FBTztFQWpCRDs7Ozs7OztBQW9CUjs7O0VBQ0EsYUFBYSxDQUFDLE9BQVE7OztBQUd0QixNQUFNLENBQUMsSUFBUCxDQUFZLE1BQVosQ0FBbUIsQ0FBQyxPQUFwQixDQUE0QixTQUFDLEdBQUQ7U0FDM0IsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsYUFBYSxDQUFBLFNBQW5DLEVBQXVDLEdBQXZDLEVBQTRDO0lBQUEsR0FBQSxFQUFJLFNBQUE7YUFBSyxJQUFDLENBQUEsT0FBUSxDQUFBLEdBQUE7SUFBZCxDQUFKO0dBQTVDO0FBRDJCLENBQTVCOztBQUdBLE1BQU0sQ0FBQyxjQUFQLENBQXNCLGFBQWEsQ0FBQSxTQUFuQyxFQUF1QyxPQUF2QyxFQUFnRDtFQUFBLEdBQUEsRUFBSyxTQUFBO1dBQ3BELElBQUMsQ0FBQSxVQUFELElBQWUsYUFBQSxDQUFjLElBQWQ7RUFEcUMsQ0FBTDtDQUFoRCIsInNvdXJjZXNDb250ZW50IjpbIl8kc20oJy4vZXh0ZW5kVGVtcGxhdGUnIClcbl8kc20oJy4vcGFyc2VUcmVlJyApXG5fJHNtKCcuL2FwcGx5RGF0YScgKVxuXyRzbSgnLi9zY2hlbWEnIClcblxuY2xhc3MgUXVpY2tUZW1wbGF0ZVxuXHRjb25zdHJ1Y3RvcjogKGNvbmZpZywgaXNUcmVlKS0+XG5cdFx0QF9jb25maWcgPSBpZiBpc1RyZWUgdGhlbiBwYXJzZVRyZWUoY29uZmlnKSBlbHNlIGNvbmZpZ1xuXHRcdEBfaGFzQ29tcHV0ZXJzID0gISFAX2NvbmZpZy5vcHRpb25zLmNvbXB1dGVyc1xuXHRcdFxuXHRcdGlmIG5vdCBAX2hhc0NvbXB1dGVycyBhbmQgQF9jb25maWcuY2hpbGRyZW4ubGVuZ3RoXG5cdFx0XHRmb3IgY2hpbGQgaW4gQF9jb25maWcuY2hpbGRyZW4gd2hlbiBjaGlsZC5fY29uZmlnLm9wdGlvbnMuY29tcHV0ZXJzXG5cdFx0XHRcdEBfaGFzQ29tcHV0ZXJzID0gdHJ1ZVxuXHRcdFx0XHRicmVha1xuXHRcblx0ZXh0ZW5kOiAobmV3VmFsdWVzLCBnbG9iYWxPcHRzKS0+XG5cdFx0bmV3IFF1aWNrVGVtcGxhdGUgZXh0ZW5kVGVtcGxhdGUoQF9jb25maWcsIG5ld1ZhbHVlcywgZ2xvYmFsT3B0cylcblxuXHRzcGF3bjogKG5ld1ZhbHVlcywgZ2xvYmFsT3B0cyktPlxuXHRcdGlmIG5ld1ZhbHVlcyBhbmQgbmV3VmFsdWVzLmRhdGFcblx0XHRcdGRhdGEgPSBuZXdWYWx1ZXMuZGF0YVxuXHRcdFx0bmV3VmFsdWVzID0gbnVsbCBpZiBPYmplY3Qua2V5cyhuZXdWYWx1ZXMpLmxlbmd0aCBpcyAxXG5cdFx0XG5cdFx0aWYgbmV3VmFsdWVzIG9yIGdsb2JhbE9wdHNcblx0XHRcdG9wdHMgPSBleHRlbmRUZW1wbGF0ZShAX2NvbmZpZywgbmV3VmFsdWVzLCBnbG9iYWxPcHRzKVxuXHRcdGVsc2Vcblx0XHRcdG9wdHMgPSBleHRlbmQuY2xvbmUoQF9jb25maWcpXG5cdFx0XHRvcHRzLm9wdGlvbnMgPSBleHRlbmQuZGVlcE9ubHkoJ3N0eWxlJykuY2xvbmUob3B0cy5vcHRpb25zKVxuXHRcblxuXHRcdGVsZW1lbnQgPSBRdWlja0RvbShvcHRzLnR5cGUsIG9wdHMub3B0aW9ucywgb3B0cy5jaGlsZHJlbi4uLilcblxuXHRcdGlmIEBfaGFzQ29tcHV0ZXJzXG5cdFx0XHRhcHBseURhdGEoZWxlbWVudCwgZGF0YSlcblxuXHRcdHJldHVybiBlbGVtZW50XG5cblxuIyMjIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICMjI1xuUXVpY2tUZW1wbGF0ZS5uYW1lID89ICdRdWlja1RlbXBsYXRlJ1xuXG5cbk9iamVjdC5rZXlzKHNjaGVtYSkuZm9yRWFjaCAoa2V5KS0+XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBRdWlja1RlbXBsYXRlOjosIGtleSwgZ2V0OigpLT4gQF9jb25maWdba2V5XVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkgUXVpY2tUZW1wbGF0ZTo6LCAnY2hpbGQnLCBnZXQ6ICgpLT5cblx0QF9jaGlsZFJlZnMgb3IgX2dldENoaWxkUmVmcyhAKSAjIHNvdXJjZSBpbiAvc3JjL3BhcnRzL2VsZW1lbnQvdHJhdmVyc2luZy5jb2ZmZWVcblxuXG5cblxuXG5cblxuXG4iXX0=
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRjdXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcnRjdXRzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLCtCQUFBO0VBQUE7O0FBQUEsU0FBQSxHQUFZLENBQ1gsUUFEVyxFQUVYLFVBRlcsRUFHWCxHQUhXLEVBSVgsTUFKVyxFQUtYLEtBTFcsRUFNWCxNQU5XLEVBT1gsSUFQVyxFQVFYLElBUlcsRUFTWCxJQVRXLEVBVVgsSUFWVyxFQVdYLElBWFcsRUFZWCxJQVpXLEVBYVgsUUFiVyxFQWNYLFFBZFcsRUFlWCxTQWZXLEVBZ0JYLFFBaEJXLEVBaUJYLElBakJXLEVBa0JYLElBbEJXLEVBbUJYLElBbkJXLEVBb0JYLElBcEJXLEVBcUJYLFVBckJXLEVBc0JYLE9BdEJXLEVBdUJYLFVBdkJXLEVBd0JYLFFBeEJXLEVBeUJYLFFBekJXLEVBMEJYLE1BMUJXLEVBMkJYLE9BM0JXLEVBNEJYLElBNUJXLEVBNkJYLFFBN0JXLEVBOEJYLEtBOUJXLEVBK0JYLFNBL0JXLEVBZ0NYLE1BaENXLEVBaUNYLEtBakNXLEVBa0NYLE1BbENXLEVBbUNYLFFBbkNXLEVBb0NYLEtBcENXLEVBcUNYLE9BckNXLEVBc0NYLE9BdENXLEVBdUNYLE9BdkNXLEVBd0NYLElBeENXLEVBeUNYLElBekNXLEVBMENYLElBMUNXLEVBMkNYLE9BM0NXLEVBNkNYLE9BN0NXOztLQWlEc0IsU0FBQyxRQUFEO0FBQ2pDLE1BQUE7RUFBQSxJQUFBLEdBQU8sSUFBQSxHQUFPO0VBQ2QsSUFBRyxPQUFPLENBQUMsUUFBUixDQUFpQixRQUFqQixFQUEyQixHQUEzQixDQUFIO0lBQ0MsS0FBQSxHQUFRLFFBQVEsQ0FBQyxLQUFULENBQWUsR0FBZjtJQUNSLElBQUEsR0FBTyxLQUFNLENBQUEsQ0FBQTtJQUNiLElBQUEsR0FBTyxLQUFNLENBQUEsQ0FBQSxFQUhkOztTQUtBLFFBQVMsQ0FBQSxJQUFBLENBQVQsR0FBaUIsU0FBQTtXQUFLLFFBQUEsYUFBUyxDQUFBLElBQU0sU0FBQSxXQUFBLFNBQUEsQ0FBQSxDQUFmO0VBQUw7QUFQZ0I7QUFBbEMsS0FBQSwyQ0FBQTs7S0FBbUM7QUFBbkMiLCJzb3VyY2VzQ29udGVudCI6WyJzaG9ydGN1dHMgPSBbXG5cdCdsaW5rOmEnXG5cdCdhbmNob3I6YSdcblx0J2EnXG5cdCd0ZXh0J1xuXHQnZGl2J1xuXHQnc3Bhbidcblx0J2gxJ1xuXHQnaDInXG5cdCdoMydcblx0J2g0J1xuXHQnaDUnXG5cdCdoNidcblx0J2hlYWRlcidcblx0J2Zvb3Rlcidcblx0J3NlY3Rpb24nXG5cdCdidXR0b24nXG5cdCdicidcblx0J3VsJ1xuXHQnb2wnXG5cdCdsaSdcblx0J2ZpZWxkc2V0J1xuXHQnaW5wdXQnXG5cdCd0ZXh0YXJlYSdcblx0J3NlbGVjdCdcblx0J29wdGlvbidcblx0J2Zvcm0nXG5cdCdmcmFtZSdcblx0J2hyJ1xuXHQnaWZyYW1lJ1xuXHQnaW1nJ1xuXHQncGljdHVyZSdcblx0J21haW4nXG5cdCduYXYnXG5cdCdtZXRhJ1xuXHQnb2JqZWN0J1xuXHQncHJlJ1xuXHQnc3R5bGUnXG5cdCd0YWJsZSdcblx0J3Rib2R5J1xuXHQndGgnXG5cdCd0cidcblx0J3RkJ1xuXHQndGZvb3QnXG5cdCMgJ3RlbXBsYXRlJ1xuXHQndmlkZW8nXG5dXG5cblxuZm9yIHNob3J0Y3V0IGluIHNob3J0Y3V0cyB0aGVuIGRvIChzaG9ydGN1dCktPlxuXHRwcm9wID0gdHlwZSA9IHNob3J0Y3V0XG5cdGlmIGhlbHBlcnMuaW5jbHVkZXMoc2hvcnRjdXQsICc6Jylcblx0XHRzcGxpdCA9IHNob3J0Y3V0LnNwbGl0KCc6Jylcblx0XHRwcm9wID0gc3BsaXRbMF1cblx0XHR0eXBlID0gc3BsaXRbMV1cblxuXHRRdWlja0RvbVtwcm9wXSA9ICgpLT4gUXVpY2tEb20odHlwZSwgYXJndW1lbnRzLi4uKVxuIl19
;

QuickDom.version = "1.0.45";

module.exports = QuickDom;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tkb20uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWlja2RvbS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxZQUFBLEdBQWU7OztBQUNmOztBQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWdCLFVBQWhCOzs7QUFDQTs7QUFDQSxJQUFBLENBQUssY0FBTCxFQUFvQixhQUFwQjs7QUFDQSxJQUFBLENBQUssd0JBQUw7O0FBQ0EsSUFBQSxDQUFLLGlCQUFMOztBQUNBLElBQUEsQ0FBSyxnQkFBTDs7QUFDQSxJQUFBLENBQUssaUJBQUw7O0FBQ0EsSUFBQSxDQUFLLGdCQUFMOztBQUNBLElBQUEsQ0FBSyxvQkFBTDs7QUFFQSxRQUFBLEdBQVcsU0FBQTtBQUFLLE1BQUE7RUFBQSxJQUFBLEdBQUs7QUFBVyxVQUFBLEtBQUE7QUFBQSxVQUMxQixFQUFFLENBQUMsS0FBSCxDQUFTLElBQUssQ0FBQSxDQUFBLENBQWQsQ0FEMEI7QUFFOUIsYUFBTyxRQUFBLGFBQVMsSUFBSyxDQUFBLENBQUEsQ0FBZDtBQUZ1QixVQUkxQixFQUFFLENBQUMsUUFBSCxDQUFZLElBQUssQ0FBQSxDQUFBLENBQWpCLENBSjBCO0FBSzlCLGFBQU8sSUFBSyxDQUFBLENBQUEsQ0FBRSxDQUFDLEtBQVIsQ0FBQTtBQUx1QixVQU8xQixFQUFFLENBQUMsVUFBSCxDQUFjLElBQUssQ0FBQSxDQUFBLENBQW5CLENBUDBCO01BUXZCLElBQUcsSUFBSyxDQUFBLENBQUEsQ0FBUjtlQUFnQixJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsYUFBUixDQUFzQixJQUFLLENBQUEsQ0FBQSxDQUEzQixFQUFoQjtPQUFBLE1BQUE7ZUFBb0QsSUFBSyxDQUFBLENBQUEsRUFBekQ7O0FBUnVCLFdBVTFCLEVBQUUsQ0FBQyxPQUFILENBQVcsSUFBSyxDQUFBLENBQUEsQ0FBaEIsQ0FBQSxJQUF1QixFQUFFLENBQUMsTUFBSCxDQUFVLElBQUssQ0FBQSxDQUFB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TUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJzdmdOYW1lc3BhY2UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4jIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5fJHNtKCdxdWlja2NzcycsJyogYXMgQ1NTJyAgICApXG4jIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5fJHNtKCdzbWFydC1leHRlbmQnLCcqIGFzIGV4dGVuZCcgICAgKVxuXyRzbSgnLi9wYXJ0cy9hbGxvd2VkT3B0aW9ucycgKVxuXyRzbSgnLi9wYXJ0cy9oZWxwZXJzJyApXG5fJHNtKCcuL3BhcnRzL2NoZWNrcycgKVxuXyRzbSgnLi9wYXJ0cy9lbGVtZW50JyApXG5fJHNtKCcuL3BhcnRzL3dpbmRvdycgKVxuXyRzbSgnLi9wYXJ0cy9tZWRpYVF1ZXJ5JyApXG5cblF1aWNrRG9tID0gKCktPiBhcmdzPWFyZ3VtZW50czsgc3dpdGNoXG5cdHdoZW4gSVMuYXJyYXkoYXJnc1swXSlcblx0XHRyZXR1cm4gUXVpY2tEb20oYXJnc1swXS4uLilcblx0XG5cdHdoZW4gSVMudGVtcGxhdGUoYXJnc1swXSlcblx0XHRyZXR1cm4gYXJnc1swXS5zcGF3bigpXG5cdFxuXHR3aGVuIElTLnF1aWNrRG9tRWwoYXJnc1swXSlcblx0XHRyZXR1cm4gaWYgYXJnc1sxXSB0aGVuIGFyZ3NbMF0udXBkYXRlT3B0aW9ucyhhcmdzWzFdKSBlbHNlIGFyZ3NbMF1cblx0XG5cdHdoZW4gSVMuZG9tTm9kZShhcmdzWzBdKSBvciBJUy5kb21Eb2MoYXJnc1swXSlcblx0XHRpZiBhcmdzWzBdLl9xdWlja0VsZW1lbnRcblx0XHRcdHJldHVybiBhcmdzWzBdLl9xdWlja0VsZW1lbnRcblx0XHRcblx0XHR0eXBlID0gYXJnc1swXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyMnLCAnJylcblx0XHRvcHRpb25zID0gYXJnc1sxXSBvciB7fVxuXHRcdG9wdGlvbnMuZXhpc3RpbmcgPSBhcmdzWzBdXG5cdFx0cmV0dXJuIG5ldyBRdWlja0VsZW1lbnQodHlwZSwgb3B0aW9ucylcblxuXHR3aGVuIGFyZ3NbMF0gaXMgd2luZG93XG5cdFx0cmV0dXJuIFF1aWNrV2luZG93XG5cblx0d2hlbiBJUy5zdHJpbmcoYXJnc1swXSlcdFx0XHRcblx0XHR0eXBlID0gYXJnc1swXS50b0xvd2VyQ2FzZSgpXG5cdFx0aWYgdHlwZSBpcyAndGV4dCdcblx0XHRcdG9wdGlvbnMgPSBpZiBJUy5vYmplY3QoYXJnc1sxXSkgdGhlbiBhcmdzWzFdIGVsc2Uge3RleHQ6YXJnc1sxXSBvciAnJ31cblx0XHRlbHNlXG5cdFx0XHRvcHRpb25zID0gaWYgSVMub2JqZWN0KGFyZ3NbMV0pIHRoZW4gYXJnc1sxXSBlbHNlIHt9XG5cdFx0XG5cdFx0ZWxlbWVudCA9IG5ldyBRdWlja0VsZW1lbnQodHlwZSwgb3B0aW9ucylcblx0XHRpZiBhcmdzLmxlbmd0aCA+IDJcblx0XHRcdGNoaWxkcmVuID0gW107IGkgPSAxOyBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7IGNoaWxkcmVuLnB1c2goYXJnc1tpXSkgd2hpbGUgKytpIDwgYXJnc0xlbmd0aFxuXG5cdFx0XHRmb3IgY2hpbGQgaW4gY2hpbGRyZW5cblx0XHRcdFx0Y2hpbGQgPSBRdWlja0RvbS50ZXh0KGNoaWxkKSBpZiBJUy5zdHJpbmcoY2hpbGQpXG5cdFx0XHRcdGNoaWxkID0gUXVpY2tEb20oY2hpbGQpIGlmIElTLnRlbXBsYXRlKGNoaWxkKVxuXHRcdFx0XHRjaGlsZCA9IFF1aWNrRG9tKGNoaWxkLi4uKSBpZiBJUy5hcnJheShjaGlsZClcblx0XHRcdFx0Y2hpbGQuYXBwZW5kVG8oZWxlbWVudCkgaWYgSVMucXVpY2tEb21FbChjaGlsZClcblxuXHRcdHJldHVybiBlbGVtZW50XG5cblxuUXVpY2tEb20udGVtcGxhdGUgPSAodHJlZSktPlxuXHRuZXcgUXVpY2tUZW1wbGF0ZSh0cmVlLCB0cnVlKVxuXG5cblF1aWNrRG9tLmh0bWwgPSAoaW5uZXJIVE1MKS0+XG5cdGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdGNvbnRhaW5lci5pbm5lckhUTUwgPSBpbm5lckhUTUxcblx0Y2hpbGRyZW4gPSBBcnJheTo6c2xpY2UuY2FsbCBjb250YWluZXIuY2hpbGROb2Rlc1xuXG5cdHJldHVybiBRdWlja0RvbS5iYXRjaChjaGlsZHJlbilcblxuXG5cblxuXG5cblxuXG5fJHNtKCcuL3BhcnRzL2JhdGNoJyApXG5fJHNtKCcuL3BhcnRzL3RlbXBsYXRlJyApXG5fJHNtKCcuL3BhcnRzL3Nob3J0Y3V0cycgKVxuUXVpY2tEb20udmVyc2lvbiA9IF8kc20oJy4uL3BhY2thZ2UuanNvbiAkIHZlcnNpb24nIClcbm1vZHVsZS5leHBvcnRzID0gUXVpY2tEb21cblxuXG5cbiJdfQ==
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
