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
    this.el = this.options.existing || (this.type === 'text' ? document.createTextNode(this.options.text) : this.type[0] === '*' ? document.createElementNS(svgNamespace, this.type.slice(1)) : document.createElement(this.type));
    if (this.type === 'text') {
      this.append = this.prepend = this.attr = function() {};
    }
    this._parent = null;
    this._styles = {};
    this._stylesShared = [];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYXZlcnNpbmcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsMkNBQUE7RUFBQTs7QUFBQSxZQUFZLENBQUEsU0FBRSxDQUFBLFlBQWQsR0FBNkIsU0FBQyxRQUFEO1NBQzVCLFdBQUEsQ0FBWSxJQUFaLEVBQWUsUUFBZjtBQUQ0Qjs7QUFHN0IsWUFBWSxDQUFBLFNBQUUsQ0FBQSxjQUFkLEdBQStCLFNBQUMsUUFBRDtBQUFhLE1BQUE7RUFBQSxJQUFHLEVBQUUsRUFBQyxRQUFELEVBQUYsQ0FBWSxRQUFaLENBQUg7SUFDM0MsVUFBQSxHQUFhLElBQUMsQ0FBQTtBQUNkLFdBQU0sVUFBTjtNQUNDLElBQXFCLFFBQUEsQ0FBUyxVQUFULENBQXJCO0FBQUEsZUFBTyxXQUFQOztNQUNBLFVBQUEsR0FBYSxVQUFVLENBQUM7SUFGekIsQ0FGMkM7O0FBQWI7O0FBUy9CLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixZQUFZLENBQUEsU0FBcEMsRUFDQztFQUFBLFVBQUEsRUFBWTtJQUFBLEdBQUEsRUFBSyxTQUFBO0FBQ2hCLFVBQUE7TUFBQSxJQUFHLElBQUMsQ0FBQSxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQWYsS0FBMkIsSUFBQyxDQUFBLFNBQVMsQ0FBQyxNQUF6QztRQUNDLElBQUMsQ0FBQSxTQUFTLENBQUMsTUFBWCxHQUFvQjtBQUNwQjtBQUFBLGFBQUEscUNBQUE7O2NBQWtFLEtBQUssQ0FBQyxRQUFOLEdBQWlCO1lBQW5GLElBQUMsQ0FBQSxTQUFTLENBQUMsSUFBWCxDQUFnQixRQUFBLENBQVMsS0FBVCxDQUFoQjs7QUFBQSxTQUZEOztBQUlBLGFBQU8sSUFBQyxDQUFBO0lBTFEsQ0FBTDtHQUFaO0VBT0EsUUFBQSxFQUFVO0lBQUEsR0FBQSxFQUFLLFNBQUE7TUFDZCxJQUFHLENBQUMsQ0FBSSxJQUFDLENBQUEsT0FBTCxJQUFnQixJQUFDLENBQUEsT0FB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SUFBcUIsUUFBQSxJQUFhLFFBQUEsQ0FBUyxVQUFULENBQWxDO01BQUEsVUFBQSxHQUFhLEtBQWI7O0VBSEQ7QUFLQSxTQUFPO0FBVE07O0FBWWQsYUFBQSxHQUFnQixTQUFDLE1BQUQsRUFBUyxTQUFUO0FBQ2YsTUFBQTtFQUFBLElBQTBCLFNBQUEsSUFBYSxDQUFJLE1BQU0sQ0FBQyxVQUFsRDtJQUFBLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLEdBQXBCOztFQUNBLElBQUEsR0FBTyxNQUFNLENBQUM7RUFDZCxJQUE2QixNQUFNLENBQUMsR0FBcEM7SUFBQSxJQUFLLENBQUEsTUFBTSxDQUFDLEdBQVAsQ0FBTCxHQUFtQixPQUFuQjs7RUFDQSxRQUFBLEdBQVcsTUFBTSxDQUFDO0VBRWxCLElBQUcsUUFBUSxDQUFDLE1BQVo7SUFDQyxNQUFBLGFBQU8sQ0FBQSxNQUFNLENBQUMsVUFBWSxTQUFBLFdBQUEsUUFBUSxDQUFDLEdBQVQsQ0FBYSxTQUFDLEtBQUQ7YUFBVSxhQUFBLENBQWMsS0FBZCxFQUFxQixTQUFyQjtJQUFWLENBQWIsQ0FBQSxDQUFBLENBQTFCLEVBREQ7O0FBR0EsU0FBTyxNQUFNLENBQUM7QUFUQzs7QUFZaEIsZUFBQSxHQUFrQixTQUFDLElBQUQsRUFBTyxJQUFQO0FBQ2pCLE1BQUE7RUFBQSxJQUFHLENBQUksQ0FBQSxNQUFBLEdBQU8sSUFBSSxDQUFDLE1BQVosQ0FBUDtBQUNDLFdBQU8sS0FEUjtHQUFBLE1BQUE7V0FHQyxNQUFNLENBQUMsUUFDTixDQUFDLE1BREYsQ0FDUyxTQUFDLEtBQUQ7YUFBVSxLQUFNLENBQUEsSUFBQSxDQUFOLEtBQWUsSUFBSyxDQUFBLElBQUE7SUFBOUIsQ0FEVCxDQUVDLENBQUMsT0FGRixDQUVVLElBRlYsRUFIRDs7QUFEaUIiLCJzb3VyY2VzQ29udGVudCI6WyJRdWlja0VsZW1lbnQ6OnBhcmVudHNVbnRpbCA9IChmaWx0ZXJGbiktPlxuXHRfZ2V0UGFyZW50cyhALCBmaWx0ZXJGbilcblxuUXVpY2tFbGVtZW50OjpwYXJlbnRNYXRjaGluZyA9IChmaWx0ZXJGbiktPiBpZiBJUy5mdW5jdGlvbihmaWx0ZXJGbilcblx0bmV4dFBhcmVudCA9IEBwYXJlbnRcblx0d2hpbGUgbmV4dFBhcmVudFxuXHRcdHJldHVybiBuZXh0UGFyZW50IGlmIGZpbHRlckZuKG5leHRQYXJlbnQpXG5cdFx0bmV4dFBhcmVudCA9IG5leHRQYXJlbnQucGFyZW50XG5cdFxuXHRyZXR1cm5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyBRdWlja0VsZW1lbnQ6Oixcblx0J2NoaWxkcmVuJzogZ2V0OiAoKS0+XG5cdFx0aWYgQGVsLmNoaWxkTm9kZXMubGVuZ3RoIGlzbnQgQF9jaGlsZHJlbi5sZW5ndGggIyBSZS1jb2xsZWN0IGNoaWxkcmVuXHRcblx0XHRcdEBfY2hpbGRyZW4ubGVuZ3RoID0gMCAjIEVtcHR5IG91dCBjaGlsZHJlbiBhcnJheVxuXHRcdFx0QF9jaGlsZHJlbi5wdXNoKFF1aWNrRG9tKGNoaWxkKSkgZm9yIGNoaWxkIGluIEBlbC5jaGlsZE5vZGVzIHdoZW4gY2hpbGQubm9kZVR5cGUgPCA0XG5cblx0XHRyZXR1cm4gQF9jaGlsZHJlblxuXG5cdCdwYXJlbnQnOiBnZXQ6ICgpLT5cblx0XHRpZiAobm90IEBfcGFyZW50IG9yIEBfcGFyZW50LmVsIGlzbnQgQGVsLnBhcmVudE5vZGUpIGFuZCBub3QgSVMuZG9tRG9jKEBlbC5wYXJlbnROb2RlKVxuXHRcdFx0QF9wYXJlbnQgPSBRdWlja0RvbShAZWwucGFyZW50Tm9kZSlcblxuXHRcdHJldHVybiBAX3BhcmVudFxuXG5cblx0J3BhcmVudHMnOiBnZXQ6ICgpLT5cblx0XHRfZ2V0UGFyZW50cyhAKVxuXG5cdCduZXh0JzogZ2V0OiAoKS0+XG5cdFx0UXVpY2tEb20oQGVsLm5leHRTaWJsaW5nKVxuXG5cdCdwcmV2JzogZ2V0OiAoKS0+XG5cdFx0UXVpY2tEb20oQGVsLnByZXZpb3VzU2libGluZylcblxuXHQnbmV4dEFsbCc6IGdldDogKCktPlxuXHRcdHNpYmxpbmdzID0gW11cblx0XHRuZXh0U2libGluZyA9IFF1aWNrRG9tKEBlbC5uZXh0U2libGluZylcblx0XHR3aGlsZSBuZXh0U2libGluZ1xuXHRcdFx0c2libGluZ3MucHVzaChuZXh0U2libGluZylcblx0XHRcdG5leHRTaWJsaW5nID0gbmV4dFNpYmxpbmcubmV4dFxuXG5cdFx0cmV0dXJuIHNpYmxpbmdzXG5cblx0J3ByZXZBbGwnOiBnZXQ6ICgpLT5cblx0XHRzaWJsaW5ncyA9IFtdXG5cdFx0cHJldlNpYmxpbmcgPSBRdWlja0RvbShAZWwucHJldmlvdXNTaWJsaW5nKVxuXHRcdHdoaWxlIHByZXZTaWJsaW5nXG5cdFx0XHRzaWJsaW5ncy5wdXNoKHByZXZTaWJsaW5nKVxuXHRcdFx0cHJldlNpYmxpbmcgPSBwcmV2U2libGluZy5wcmV2XG5cblx0XHRyZXR1cm4gc2libGluZ3NcblxuXHQnc2libGluZ3MnOiBnZXQ6ICgpLT5cblx0XHRAcHJldkFsbC5yZXZlcnNlKCkuY29uY2F0KEBuZXh0QWxsKVxuXHRcblx0J2NoaWxkJzogZ2V0OiAoKS0+XG5cdFx0QF9jaGlsZFJlZnMgb3IgX2dldENoaWxkUmVmcyhAKVxuXG5cdCdjaGlsZGYnOiBnZXQ6ICgpLT5cblx0XHRfZ2V0Q2hpbGRSZWZzKEAsIHRydWUpXG5cblx0J2luZGV4JzogZ2V0OiAoKS0+XG5cdFx0aWYgbm90IHBhcmVudD1AcGFyZW50XG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdGVsc2Vcblx0XHRcdHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKEApXG5cblx0J2luZGV4VHlwZSc6IGdldDogKCktPlxuXHRcdF9nZXRJbmRleEJ5UHJvcChALCAndHlwZScpXG5cblx0J2luZGV4UmVmJzogZ2V0OiAoKS0+XG5cdFx0X2dldEluZGV4QnlQcm9wKEAsICdyZWYnKVxuXG5cblxuX2dldFBhcmVudHMgPSAodGFyZ2V0RWwsIGZpbHRlckZuKS0+XG5cdGZpbHRlckZuID0gdW5kZWZpbmVkIGlmIG5vdCBJUy5mdW5jdGlvbihmaWx0ZXJGbilcblx0cGFyZW50cyA9IFtdXG5cdG5leHRQYXJlbnQgPSB0YXJnZXRFbC5wYXJlbnRcblx0d2hpbGUgbmV4dFBhcmVudFxuXHRcdHBhcmVudHMucHVzaChuZXh0UGFyZW50KVxuXHRcdG5leHRQYXJlbnQgPSBuZXh0UGFyZW50LnBhcmVudFxuXHRcdG5leHRQYXJlbnQgPSBudWxsIGlmIGZpbHRlckZuIGFuZCBmaWx0ZXJGbihuZXh0UGFyZW50KVxuXG5cdHJldHVybiBwYXJlbnRzXG5cblxuX2dldENoaWxkUmVmcyA9ICh0YXJnZXQsIGZyZXNoQ29weSktPlxuXHR0YXJnZXQuX2NoaWxkUmVmcyA9IHt9IGlmIGZyZXNoQ29weSBvciBub3QgdGFyZ2V0Ll9jaGlsZFJlZnNcblx0cmVmcyA9IHRhcmdldC5fY2hpbGRSZWZzXG5cdHJlZnNbdGFyZ2V0LnJlZl0gPSB0YXJnZXQgaWYgdGFyZ2V0LnJlZlxuXHRjaGlsZHJlbiA9IHRhcmdldC5jaGlsZHJlblxuXG5cdGlmIGNoaWxkcmVuLmxlbmd0aFxuXHRcdGV4dGVuZCB0YXJnZXQuX2NoaWxkUmVmcywgY2hpbGRyZW4ubWFwKChjaGlsZCktPiBfZ2V0Q2hpbGRSZWZzKGNoaWxkLCBmcmVzaENvcHkpKS4uLlxuXG5cdHJldHVybiB0YXJnZXQuX2NoaWxkUmVmc1xuXG5cbl9nZXRJbmRleEJ5UHJvcCA9IChtYWluLCBwcm9wKS0+XG5cdGlmIG5vdCBwYXJlbnQ9bWFpbi5wYXJlbnRcblx0XHRyZXR1cm4gbnVsbFxuXHRlbHNlXG5cdFx0cGFyZW50LmNoaWxkcmVuXG5cdFx0XHQuZmlsdGVyIChjaGlsZCktPiBjaGlsZFtwcm9wXSBpcyBtYWluW3Byb3BdXG5cdFx0XHQuaW5kZXhPZihtYWluKVxuXG5cblxuXG5cbiJdfQ==
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
  if ((base = this.options).relatedInstance == null) {
    base.relatedInstance = this;
  }
  if ((base1 = this.options).unpassableStates == null) {
    base1.unpassableStates = [];
  }
  if ((base2 = this.options).passStateToChildren == null) {
    base2.passStateToChildren = true;
  }
  this.options.stateTriggers = this.options.stateTriggers ? extend.clone.deep(baseStateTriggers, this.options.stateTriggers) : baseStateTriggers;
  this._parseStyles();
};

QuickElement.prototype._parseStyles = function() {
  var flattenNestedStates, i, keys, len, specialStates, state, stateStyles, state_, states;
  if (!IS.objectPlain(this.options.style)) {
    return this._providedStates = [];
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
    return function(styleObject, stateChain) {
      var hasNonStateProps, i, len, output, state, stateChainString, state_, styleKeys;
      styleKeys = Object.keys(styleObject);
      output = {};
      hasNonStateProps = false;
      for (i = 0, len = styleKeys.length; i < len; i++) {
        state = styleKeys[i];
        if (!helpers.isStateStyle(state)) {
          hasNonStateProps = true;
          output[state] = styleObject[state];
        } else {
          state_ = state.slice(1);
          stateChain.push(state_);
          stateChainString = stateChain.join('+');
          _this._hasSharedStateStyle = true;
          if (_this._stateShared == null) {
            _this._stateShared = [];
          }
          _this._stylesShared.push(stateChainString);
          if (state[0] === '@') {
            _this._mediaStates.push(state_);
          }
          _this._styles[stateChainString] = flattenNestedStates(styleObject[state], stateChain);
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
    this.style(this._styles.base);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsaUJBQUE7RUFBQTs7QUFBQSxpQkFBQSxHQUNDO0VBQUEsT0FBQSxFQUFTO0lBQUMsRUFBQSxFQUFHLFlBQUo7SUFBa0IsR0FBQSxFQUFJLFlBQXRCO0lBQW9DLE9BQUEsRUFBUSxJQUE1QztHQUFUO0VBQ0EsT0FBQSxFQUFTO0lBQUMsRUFBQSxFQUFHLE9BQUo7SUFBYSxHQUFBLEVBQUksTUFBakI7SUFBeUIsT0FBQSxFQUFRLElBQWpDO0dBRFQ7OztBQUdELFlBQVksQ0FBQSxTQUFFLENBQUEsaUJBQWQsR0FBa0MsU0FBQTtBQUNqQyxNQUFBO0VBQUEsSUFBdUMsSUFBQyxDQUFBLE9BQU8sRUFBQyxLQUFELEVBQS9DO0lBQUEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxTQUFULEdBQXFCLElBQUMsQ0FBQSxPQUFPLEVBQUMsS0FBRCxHQUE3Qjs7RUFDQSxJQUFnQyxJQUFDLENBQUEsT0FBTyxDQUFDLEdBQXpDO0lBQUEsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULEdBQWdCLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBekI7OztRQUNRLENBQUMsa0JBQW1COzs7U0FDcEIsQ0FBQyxtQkFBb0I7OztTQUNyQixDQUFDLHNCQUF1Qjs7RUFDaEMsSUFBQyxDQUFBLE9BQU8sQ0FBQyxhQUFULEdBQ0ksSUFBQyxDQUFBLE9BQU8sQ0FBQyxhQUFaLEdBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLENBQWtCLGlCQUFsQixFQUFxQyxJQUFDLENBQUEsT0FBTyxDQUFDLGFBQTlDLENBREQsR0FHQztFQUVGLElBQUMsQ0FBQSxZQUFELENBQUE7QUFaaUM7O0FBZ0JsQyxZQUFZLENBQUEsU0FBRSxDQUFBLFlBQWQsR0FBNkIsU0FBQTtBQUM1QixNQUFBO0VBQUEsSUFBZ0MsQ0FBSSxFQUFFLENBQUMsV0FBSCxDQUFlLElBQUMsQ0FB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LElBQUMsQ0FBQSxPQUFELEdBQVc7QUFDWDtBQUFBLE9BQUEsc0NBQUE7O0lBQUEsUUFBQSxDQUFTLElBQVQ7QUFBQTtBQUg4QiIsInNvdXJjZXNDb250ZW50IjpbImJhc2VTdGF0ZVRyaWdnZXJzID1cblx0J2hvdmVyJzoge29uOidtb3VzZWVudGVyJywgb2ZmOidtb3VzZWxlYXZlJywgYnViYmxlczp0cnVlfVxuXHQnZm9jdXMnOiB7b246J2ZvY3VzJywgb2ZmOidibHVyJywgYnViYmxlczp0cnVlfVxuXG5RdWlja0VsZW1lbnQ6Ol9ub3JtYWxpemVPcHRpb25zID0gKCktPlxuXHRAb3B0aW9ucy5jbGFzc05hbWUgPSBAb3B0aW9ucy5jbGFzcyBpZiBAb3B0aW9ucy5jbGFzc1xuXHRAb3B0aW9ucy5ocmVmID0gQG9wdGlvbnMudXJsIGlmIEBvcHRpb25zLnVybFxuXHRAb3B0aW9ucy5yZWxhdGVkSW5zdGFuY2UgPz0gQFxuXHRAb3B0aW9ucy51bnBhc3NhYmxlU3RhdGVzID89IFtdXG5cdEBvcHRpb25zLnBhc3NTdGF0ZVRvQ2hpbGRyZW4gPz0gdHJ1ZVxuXHRAb3B0aW9ucy5zdGF0ZVRyaWdnZXJzID1cblx0XHRpZiBAb3B0aW9ucy5zdGF0ZVRyaWdnZXJzXG5cdFx0XHRleHRlbmQuY2xvbmUuZGVlcChiYXNlU3RhdGVUcmlnZ2VycywgQG9wdGlvbnMuc3RhdGVUcmlnZ2Vycylcblx0XHRlbHNlXG5cdFx0XHRiYXNlU3RhdGVUcmlnZ2Vyc1xuXHRcblx0QF9wYXJzZVN0eWxlcygpXG5cdHJldHVyblxuXG5cblF1aWNrRWxlbWVudDo6X3BhcnNlU3R5bGVzID0gKCktPlxuXHRyZXR1cm4gQF9wcm92aWRlZFN0YXRlcyA9IFtdIGlmIG5vdCBJUy5vYmplY3RQbGFpbihAb3B0aW9ucy5zdHlsZSlcblx0a2V5cyA9IE9iamVjdC5rZXlzKEBvcHRpb25zLnN0eWxlKVxuXHRzdGF0ZXMgPSBrZXlzLmZpbHRlciAoa2V5KS0+IGhlbHBlcnMuaXNTdGF0ZVN0eWxlKGtleSlcblx0c3BlY2lhbFN0YXRlcyA9IGhlbHBlcnMucmVtb3ZlSXRlbShzdGF0ZXMuc2xpY2UoKSwgJyRiYXNlJylcblx0QF9tZWRpYVN0YXRlcyA9IHN0YXRlcy5maWx0ZXIoKGtleSktPiBrZXlbMF0gaXMgJ0AnKS5tYXAgKHN0YXRlKS0+IHN0YXRlLnNsaWNlKDEpXG5cdEBfcHJvdmlkZWRTdGF0ZXMgPSBzdGF0ZXMubWFwIChzdGF0ZSktPiBzdGF0ZS5zbGljZSgxKSAjIFJlbW92ZSAnJCcgcHJlZml4XG5cblx0aWYgbm90IGhlbHBlcnMuaW5jbHVkZXMoc3RhdGVzLCAnJGJhc2UnKVxuXHRcdGlmIHN0YXRlcy5sZW5ndGggIyBJbmRpY2F0ZXMgb3RoZXIgc3RhdGVzIHdlcmUgcHJvdmlkZWQgYnV0IHRoZSAkYmFzZSBzdGF0ZSBoYXMgbm8gc3R5bGluZ1xuXHRcdFx0QF9zdHlsZXMuYmFzZSA9IGV4dGVuZC5jbG9uZS5ub3RLZXlzKHN0YXRlcykoQG9wdGlvbnMuc3R5bGUpXG5cdFx0ZWxzZVxuXHRcdFx0QF9zdHlsZXMuYmFzZSA9IEBvcHRpb25zLnN0eWxlXG5cdGVsc2Vcblx0XHRAX3N0eWxlcy5iYXNlID0gQG9wdGlvbnMuc3R5bGUuJGJhc2VcblxuXG5cdGZsYXR0ZW5OZXN0ZWRTdGF0ZXMgPSAoc3R5bGVPYmplY3QsIHN0YXRlQ2hhaW4pPT5cblx0XHRzdHlsZUtleXMgPSBPYmplY3Qua2V5cyhzdHlsZU9iamVjdClcblx0XHRvdXRwdXQgPSB7fVxuXHRcdGhhc05vblN0YXRlUHJvcHMgPSBmYWxzZVxuXHRcdFxuXHRcdGZvciBzdGF0ZSBpbiBzdHlsZUtleXNcblx0XHRcdGlmIG5vdCBoZWxwZXJzLmlzU3RhdGVTdHlsZShzdGF0ZSlcblx0XHRcdFx0aGFzTm9uU3RhdGVQcm9wcyA9IHRydWVcblx0XHRcdFx0b3V0cHV0W3N0YXRlXSA9IHN0eWxlT2JqZWN0W3N0YXRlXVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzdGF0ZV8gPSBzdGF0ZS5zbGljZSgxKVxuXHRcdFx0XHRzdGF0ZUNoYWluLnB1c2goc3RhdGVfKVxuXHRcdFx0XHRzdGF0ZUNoYWluU3RyaW5nID0gc3RhdGVDaGFpbi5qb2luKCcrJylcblx0XHRcdFx0QF9oYXNTaGFyZWRTdGF0ZVN0eWxlID0gdHJ1ZVxuXHRcdFx0XHRAX3N0YXRlU2hhcmVkID89IFtdXG5cdFx0XHRcdEBfc3R5bGVzU2hhcmVkLnB1c2goc3RhdGVDaGFpblN0cmluZylcblx0XHRcdFx0QF9tZWRpYVN0YXRlcy5wdXNoKHN0YXRlXykgaWYgc3RhdGVbMF0gaXMgJ0AnXG5cdFx0XHRcdEBfc3R5bGVzW3N0YXRlQ2hhaW5TdHJpbmddID0gZmxhdHRlbk5lc3RlZFN0YXRlcyhzdHlsZU9iamVjdFtzdGF0ZV0sIHN0YXRlQ2hhaW4pXG5cdFx0XG5cdFx0cmV0dXJuIGlmIGhhc05vblN0YXRlUHJvcHMgdGhlbiBvdXRwdXRcblxuXG5cdGZvciBzdGF0ZSBpbiBzcGVjaWFsU3RhdGVzXG5cdFx0c3RhdGVfID0gc3RhdGUuc2xpY2UoMSlcblx0XHRcblx0XHRzdGF0ZVN0eWxlcyA9IGZsYXR0ZW5OZXN0ZWRTdGF0ZXMoQG9wdGlvbnMuc3R5bGVbc3RhdGVdLCBbc3RhdGVfXSlcblx0XHRAX3N0eWxlc1tzdGF0ZV9dID0gc3RhdGVTdHlsZXMgaWYgc3RhdGVTdHlsZXNcblxuXHRyZXR1cm5cblxuXG5cblxuUXVpY2tFbGVtZW50OjpfYXBwbHlPcHRpb25zID0gKCktPlxuXHRpZiByZWY9KEBvcHRpb25zLmlkIG9yIEBvcHRpb25zLnJlZikgdGhlbiBAYXR0cignZGF0YS1yZWYnLCBAcmVmPXJlZilcblx0aWYgQG9wdGlvbnMuaWQgdGhlbiBAZWwuaWQgPSBAb3B0aW9ucy5pZFxuXHRpZiBAb3B0aW9ucy5jbGFzc05hbWUgdGhlbiBAZWwuY2xhc3NOYW1lID0gQG9wdGlvbnMuY2xhc3NOYW1lXG5cdGlmIEBvcHRpb25zLnNyYyB0aGVuIEBlbC5zcmMgPSBAb3B0aW9ucy5zcmNcblx0aWYgQG9wdGlvbnMuaHJlZiB0aGVuIEBlbC5ocmVmID0gQG9wdGlvbnMuaHJlZlxuXHRpZiBAb3B0aW9ucy50eXBlIHRoZW4gQGVsLnR5cGUgPSBAb3B0aW9ucy50eXBlXG5cdGlmIEBvcHRpb25zLm5hbWUgdGhlbiBAZWwubmFtZSA9IEBvcHRpb25zLm5hbWVcblx0aWYgQG9wdGlvbnMudmFsdWUgdGhlbiBAZWwudmFsdWUgPSBAb3B0aW9ucy52YWx1ZVxuXHRpZiBAb3B0aW9ucy5zZWxlY3RlZCB0aGVuIEBlbC5zZWxlY3RlZCA9IEBvcHRpb25zLnNlbGVjdGVkXG5cdGlmIEBvcHRpb25zLmNoZWNrZWQgdGhlbiBAZWwuY2hlY2tlZCA9IEBvcHRpb25zLmNoZWNrZWRcblx0aWYgQG9wdGlvbnMucHJvcHMgdGhlbiBAcHJvcChrZXksdmFsdWUpIGZvciBrZXksdmFsdWUgb2YgQG9wdGlvbnMucHJvcHNcblx0aWYgQG9wdGlvbnMuYXR0cnMgdGhlbiBAYXR0cihrZXksdmFsdWUpIGZvciBrZXksdmFsdWUgb2YgQG9wdGlvbnMuYXR0cnNcblx0QHN0eWxlKEBfc3R5bGVzLmJhc2UpIGlmIG5vdCBAb3B0aW9ucy5zdHlsZUFmdGVySW5zZXJ0XG5cblx0QG9uSW5zZXJ0ZWQgKCk9PlxuXHRcdGlmIEBvcHRpb25zLnN0eWxlQWZ0ZXJJbnNlcnRcblx0XHRcdEBzdHlsZShleHRlbmQuY2xvbmUgQF9zdHlsZXMuYmFzZSwgQF9nZXRTdGF0ZVN0eWxlcyhAX2dldEFjdGl2ZVN0YXRlcygpKS4uLilcblxuXHRcdF8gPSBAX2luc2VydGVkID0gQFxuXG5cdFx0aWYgKG1lZGlhU3RhdGVzPUBfbWVkaWFTdGF0ZXMpIGFuZCBAX21lZGlhU3RhdGVzLmxlbmd0aFxuXHRcdFx0QF9tZWRpYVN0YXRlcyA9IG5ldyAoKS0+XG5cdFx0XHRcdGZvciBxdWVyeVN0cmluZyBpbiBtZWRpYVN0YXRlc1xuXHRcdFx0XHRcdEBbcXVlcnlTdHJpbmddID0gTWVkaWFRdWVyeS5yZWdpc3RlcihfLCBxdWVyeVN0cmluZylcblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBAXG5cblx0aWYgQG9wdGlvbnMucmVjYWxjT25SZXNpemVcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAncmVzaXplJywgKCk9PiBAcmVjYWxjU3R5bGUoKVxuXG5cdHJldHVyblxuXG5cblF1aWNrRWxlbWVudDo6X2F0dGFjaFN0YXRlRXZlbnRzID0gKGZvcmNlKS0+XG5cdGZvciBzdGF0ZSx0cmlnZ2VyIG9mIEBvcHRpb25zLnN0YXRlVHJpZ2dlcnMgdGhlbiBkbyAoc3RhdGUsdHJpZ2dlcik9PlxuXHRcdHJldHVybiBpZiBub3QgaGVscGVycy5pbmNsdWRlcyhAX3Byb3ZpZGVkU3RhdGVzLCBzdGF0ZSkgYW5kIG5vdCBmb3JjZSBhbmQgbm90IHRyaWdnZXIuZm9yY2Vcblx0XHRlbmFibGVyID0gaWYgSVMuc3RyaW5nKHRyaWdnZXIpIHRoZW4gdHJpZ2dlciBlbHNlIHRyaWdnZXIub25cblx0XHRkaXNhYmxlciA9IHRyaWdnZXIub2ZmIGlmIElTLm9iamVjdCh0cmlnZ2VyKVxuXG5cdFx0QF9saXN0ZW5UbyBlbmFibGVyLCAoKT0+IEBzdGF0ZShzdGF0ZSwgb24sIHRyaWdnZXIuYnViYmxlcylcblx0XHRpZiBkaXNhYmxlciB0aGVuIEBfbGlzdGVuVG8gZGlzYWJsZXIsICgpPT4gQHN0YXRlKHN0YXRlLCBvZmYsIHRyaWdnZXIuYnViYmxlcylcblx0XG5cdHJldHVyblxuXG5cblxuUXVpY2tFbGVtZW50OjpfcHJveHlQYXJlbnQgPSAoKS0+XG5cdHBhcmVudCA9IHVuZGVmaW5lZFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkgQCwgJ19wYXJlbnQnLFxuXHRcdGdldDogKCktPiBwYXJlbnRcblx0XHRzZXQ6IChuZXdQYXJlbnQpLT4gaWYgcGFyZW50PW5ld1BhcmVudFxuXHRcdFx0bGFzdFBhcmVudCA9IEBwYXJlbnRzLnNsaWNlKC0xKVswXVxuXHRcdFx0aWYgbGFzdFBhcmVudC5yYXcgaXMgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cdFx0XHRcdEBfdW5wcm94eVBhcmVudChuZXdQYXJlbnQpXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHBhcmVudC5vbkluc2VydGVkICgpPT5cblx0XHRcdFx0XHRAX3VucHJveHlQYXJlbnQobmV3UGFyZW50KSBpZiBwYXJlbnQgaXMgbmV3UGFyZW50XG5cdFx0XHRyZXR1cm5cblxuXG5RdWlja0VsZW1lbnQ6Ol91bnByb3h5UGFyZW50ID0gKG5ld1BhcmVudCktPlxuXHRkZWxldGUgQF9wYXJlbnRcblx0QF9wYXJlbnQgPSBuZXdQYXJlbnRcblx0Y2FsbGJhY2soQCkgZm9yIGNhbGxiYWNrIGluIEBfaW5zZXJ0ZWRDYWxsYmFja3Ncblx0cmV0dXJuXG5cblxuXG5cbiJdfQ==
;

var regexWhitespace;

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZlbnRzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLGVBQUEsR0FBa0I7O0FBRWxCLFlBQVksQ0FBQSxTQUFFLENBQUEsRUFBZCxHQUFtQixTQUFDLFVBQUQsRUFBYSxRQUFiO0FBQ2xCLE1BQUE7RUFBQSxJQUFHLEVBQUUsQ0FBQyxNQUFILENBQVUsVUFBVixDQUFBLElBQTBCLEVBQUUsRUFBQyxRQUFELEVBQUYsQ0FBWSxRQUFaLENBQTdCO0lBQ0MsS0FBQSxHQUFRLFVBQVUsQ0FBQyxLQUFYLENBQWlCLEdBQWpCO0lBQ1IsV0FBQSxHQUFjLEtBQU0sQ0FBQSxDQUFBO0lBQ3BCLFVBQUEsR0FBYSxLQUFNLENBQUEsQ0FBQTtJQUNuQixVQUFVLENBQUMsS0FBWCxDQUFpQixlQUFqQixDQUFpQyxDQUFDLE9BQWxDLENBQTBDLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxTQUFEO1FBQ3pDLElBQUcsQ0FBSSxLQUFDLENBQUEsZUFBZ0IsQ0FBQSxTQUFBLENBQXhCO1VBQ0MsS0FBQyxDQUFBLGVBQWdCLENBQUEsU0FBQSxDQUFqQixHQUE4QjtVQUM5QixLQUFDLENBQUEsU0FBRCxDQUFXLFNBQVgsRUFBc0IsU0FBQyxLQUFEO0FBQ3JCLGdCQUFBO1lBQUEsU0FBQSxHQUFZLEtBQUMsQ0FBQSxlQUFnQixDQUFBLFNBQUEsQ0FBVSxDQUFDLEtBQTVCLENBQUE7QUFDWixpQkFBQSwyQ0FBQTs7Y0FBQSxFQUFFLENBQUMsSUFBSCxDQUFRLEtBQUMsQ0FBQSxFQUFULEVBQWEsS0FBYjtBQUFBO1VBRnFCLENBQXRCLEVBRkQ7O1FBT0EsSUFBbUQsV0FBbkQ7VUFBQSxLQUFDLENBQUEsZUFBZSxDQUFDLE1BQU8sQ0FBQSxXQUFBLENBQXhCLEdBQXVDLFNBQXZDOztlQUNBLEtBQUMsQ0FBQSxlQUFnQixDQUFBLFNBQUEsQ0FBVSxDQUFDLElBQTVCLENBQWlDLFFB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QWQsR0FBMEIsU0FBQyxTQUFELEVBQVksUUFBWjtBQUN6QixNQUFBO0VBQUEsWUFBQSxHQUFrQixJQUFDLENBQUEsRUFBRSxDQUFDLGdCQUFQLEdBQTZCLGtCQUE3QixHQUFxRDtFQUNwRSxvQkFBQSxHQUEwQixJQUFDLENBQUEsRUFBRSxDQUFDLGdCQUFQLEdBQTZCLFNBQTdCLEdBQTRDLElBQUEsR0FBSztFQUV4RSxJQUFDLENBQUEsRUFBRyxDQUFBLFlBQUEsQ0FBSixDQUFrQixvQkFBbEIsRUFBd0MsUUFBeEM7QUFDQSxTQUFPO0FBTGtCIiwic291cmNlc0NvbnRlbnQiOlsicmVnZXhXaGl0ZXNwYWNlID0gL1xccysvXG5cblF1aWNrRWxlbWVudDo6b24gPSAoZXZlbnROYW1lcywgY2FsbGJhY2spLT5cblx0aWYgSVMuc3RyaW5nKGV2ZW50TmFtZXMpIGFuZCBJUy5mdW5jdGlvbihjYWxsYmFjaylcblx0XHRzcGxpdCA9IGV2ZW50TmFtZXMuc3BsaXQoJy4nKVxuXHRcdGNhbGxiYWNrUmVmID0gc3BsaXRbMV1cblx0XHRldmVudE5hbWVzID0gc3BsaXRbMF1cblx0XHRldmVudE5hbWVzLnNwbGl0KHJlZ2V4V2hpdGVzcGFjZSkuZm9yRWFjaCAoZXZlbnROYW1lKT0+XG5cdFx0XHRpZiBub3QgQF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdXG5cdFx0XHRcdEBfZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXSA9IFtdXHRcdFxuXHRcdFx0XHRAX2xpc3RlblRvIGV2ZW50TmFtZSwgKGV2ZW50KT0+XG5cdFx0XHRcdFx0Y2FsbGJhY2tzID0gQF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdLnNsaWNlKClcblx0XHRcdFx0XHRjYi5jYWxsKEBlbCwgZXZlbnQpIGZvciBjYiBpbiBjYWxsYmFja3Ncblx0XHRcdFx0XHRyZXR1cm5cblxuXHRcdFx0QF9ldmVudENhbGxiYWNrcy5fX3JlZnNbY2FsbGJhY2tSZWZdID0gY2FsbGJhY2sgaWYgY2FsbGJhY2tSZWZcblx0XHRcdEBfZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKVxuXHRyZXR1cm4gQFxuXG5cblF1aWNrRWxlbWVudDo6b25jZSA9IChldmVudE5hbWVzLCBjYWxsYmFjayktPlxuXHRpZiBJUy5zdHJpbmcoZXZlbnROYW1lcykgYW5kIElTLmZ1bmN0aW9uKGNhbGxiYWNrKVxuXHRcdEBvbiBldmVudE5hbWVzLCBvbmNlQ2FsbGJhY2s9KGV2ZW50KT0+XG5cdFx0XHRAb2ZmKGV2ZW50TmFtZXMsIG9uY2VDYWxsYmFjaylcblx0XHRcdGNhbGxiYWNrLmNhbGwoQGVsLCBldmVudClcblx0XG5cdHJldHVybiBAXG5cblxuXG5RdWlja0VsZW1lbnQ6Om9mZiA9IChldmVudE5hbWVzLCBjYWxsYmFjayktPlxuXHRpZiBub3QgSVMuc3RyaW5nKGV2ZW50TmFtZXMpXG5cdFx0QG9mZihldmVudE5hbWUpIGZvciBldmVudE5hbWUgb2YgQF9ldmVudENhbGxiYWNrc1xuXHRcblx0ZWxzZVxuXHRcdHNwbGl0ID0gZXZlbnROYW1lcy5zcGxpdCgnLicpXG5cdFx0Y2FsbGJhY2tSZWYgPSBzcGxpdFsxXVxuXHRcdGV2ZW50TmFtZXMgPSBzcGxpdFswXVxuXHRcdGV2ZW50TmFtZXMuc3BsaXQocmVnZXhXaGl0ZXNwYWNlKS5mb3JFYWNoIChldmVudE5hbWUpPT5cblx0XHRcdGlmIEBfZXZlbnRDYWxsYmFja3NbZXZlbnROYW1lXVxuXHRcdFx0XHRjYWxsYmFjayA/PSBAX2V2ZW50Q2FsbGJhY2tzLl9fcmVmc1tjYWxsYmFja1JlZl1cblxuXHRcdFx0XHRpZiBJUy5mdW5jdGlvbihjYWxsYmFjaylcblx0XHRcdFx0XHRoZWxwZXJzLnJlbW92ZUl0ZW0oQF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdLCBjYWxsYmFjaylcblx0XHRcdFx0ZWxzZSBpZiBub3QgY2FsbGJhY2tSZWZcblx0XHRcdFx0XHRAX2V2ZW50Q2FsbGJhY2tzW2V2ZW50TmFtZV0ubGVuZ3RoID0gMFxuXG5cdHJldHVybiBAXG5cblxuXG5RdWlja0VsZW1lbnQ6OmVtaXQgPSAoZXZlbnROYW1lLCBidWJibGVzPXRydWUsIGNhbmNlbGFibGU9dHJ1ZSktPlxuXHRpZiBldmVudE5hbWUgYW5kIElTLnN0cmluZyhldmVudE5hbWUpXG5cdFx0ZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuXHRcdGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIGJ1YmJsZXMsIGNhbmNlbGFibGUpXG5cdFx0QGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG5cblx0cmV0dXJuIEBcblxuXG5cblF1aWNrRWxlbWVudDo6b25JbnNlcnRlZCA9IChjYWxsYmFjaywgaW52b2tlSWZJbnNlcnRlZD10cnVlKS0+IGlmIElTLmZ1bmN0aW9uKGNhbGxiYWNrKVxuXHRpZiBub3QgQF9pbnNlcnRlZFxuXHRcdEBfaW5zZXJ0ZWRDYWxsYmFja3MucHVzaChjYWxsYmFjaylcblx0XG5cdGVsc2UgaWYgaW52b2tlSWZJbnNlcnRlZFxuXHRcdGNhbGxiYWNrKEApXG5cblx0cmV0dXJuIEBcblxuXG5cbiMjIyBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAjIyNcblF1aWNrRWxlbWVudDo6X2xpc3RlblRvID0gKGV2ZW50TmFtZSwgY2FsbGJhY2spLT5cblx0bGlzdGVuTWV0aG9kID0gaWYgQGVsLmFkZEV2ZW50TGlzdGVuZXIgdGhlbiAnYWRkRXZlbnRMaXN0ZW5lcicgZWxzZSAnYXR0YWNoRXZlbnQnXG5cdGV2ZW50TmFtZVRvTGlzdGVuRm9yID0gaWYgQGVsLmFkZEV2ZW50TGlzdGVuZXIgdGhlbiBldmVudE5hbWUgZWxzZSBcIm9uI3tldmVudE5hbWV9XCJcblx0XG5cdEBlbFtsaXN0ZW5NZXRob2RdKGV2ZW50TmFtZVRvTGlzdGVuRm9yLCBjYWxsYmFjaylcblx0cmV0dXJuIEBcblxuXG5cblxuIl19
;

var aspectRatioGetter, orientationGetter,
  slice = [].slice;

QuickElement.prototype.updateOptions = function(options) {
  if (IS.object(options)) {
    this.options = options;
    this._normalizeOptions();
    this._applyOptions(this.options);
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

QuickElement.prototype.state = function(targetState, value, bubbles, source) {
  var activeStateStyles, activeStates, child, desiredValue, i, inferiorStateChains, isApplicable, j, len, len1, ref, sharedStyles, split, stateChain, stylesToKeep, stylesToRemove, superiorStateStyles, superiorStates, targetStateIndex, targetStyle;
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
      targetStyle = this._styles[targetState] || this._styles[targetState];
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
          stylesToKeep = extend.clone.keys(targetStyle).apply(null, [this._styles.base].concat(slice.call(activeStateStyles)));
          stylesToRemove = extend.transform(function() {
            return null;
          }).clone(targetStyle);
          this.style(extend(stylesToRemove, stylesToKeep));
        }
      }
    }
    if (this._hasSharedStateStyle) {
      sharedStyles = this._stylesShared.filter(function(stateChain) {
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
          targetStyle = this._styles[stateChain];
          if (desiredValue) {
            if (!helpers.includes(this._stateShared, stateChain)) {
              this._stateShared.push(stateChain);
            }
            if (split.length > 2) {
              inferiorStateChains = this._styles[helpers.removeItem(split, targetState).join('+')];
              targetStyle = extend.clone(inferiorStateChains, targetStyle);
            }
            this.style(targetStyle);
          } else {
            helpers.removeItem(this._stateShared, stateChain);
            if (this._stateShared.length) {
              activeStateStyles.push.apply(activeStateStyles, this._stateShared.filter(function(state) {
                return !helpers.includes(state, targetState);
              }).map((function(_this) {
                return function(state) {
                  return _this._styles[state];
                };
              })(this)));
            }
            stylesToKeep = extend.clone.keys(targetStyle).apply(null, [this._styles.base].concat(slice.call(activeStateStyles)));
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
        if (this.parent) {
          this._parent.state(targetState, value, true, source || this);
        }
      } else if (this.options.passStateToChildren) {
        ref = this._children;
        for (j = 0, len1 = ref.length; j < len1; j++) {
          child = ref[j];
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

QuickElement.prototype.recalcStyle = function() {
  var activeStateStyles, targetStyles;
  activeStateStyles = this._getStateStyles(this._getActiveStates());
  targetStyles = extend.clone.filter(function(value) {
    return typeof value === 'function';
  }).apply(null, [this._styles.base].concat(slice.call(activeStateStyles)));
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
  if (!includeSharedStates || !this._hasSharedStateStyle) {
    return plainStates;
  } else {
    return plainStates.concat(this._stateShared);
  }
};

QuickElement.prototype._getStateStyles = function(states) {
  return states.map((function(_this) {
    return function(state) {
      return _this._styles[state] || _this._styles[state];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtYW5kLXN0eWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdGUtYW5kLXN0eWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLG9DQUFBO0VBQUE7O0FBQUEsWUFBWSxDQUFBLFNBQUUsQ0FBQSxhQUFkLEdBQThCLFNBQUMsT0FBRDtFQUM3QixJQUFHLEVBQUUsQ0FBQyxNQUFILENBQVUsT0FBVixDQUFIO0lBQ0MsSUFBQyxDQUFBLE9BQUQsR0FBVztJQUNYLElBQUMsQ0FBQSxpQkFBRCxDQUFBO0lBQ0EsSUFBQyxDQUFBLGFBQUQsQ0FBZSxJQUFDLENBQUEsT0FBaEIsRUFIRDs7QUFLQSxTQUFPO0FBTnNCOztBQVM5QixZQUFZLENBQUEsU0FBRSxDQUFBLElBQWQsR0FBcUIsU0FBQyxPQUFEO0FBQ3BCLE1BQUE7O0lBQUEsa0RBQXdCLENBQUUsaUJBQWYsSUFBMEI7O1NBQ3JDLElBQUMsQ0FBQSxLQUFELENBQU8sU0FBUCxFQUFrQixPQUFsQjtBQUZvQjs7QUFJckIsWUFBWSxDQUFBLFNBQUUsQ0FBQSxJQUFkLEdBQXFCLFNBQUE7U0FDcEIsSUFBQyxDQUFBLEtBQUQsQ0FBTyxTQUFQLEVBQWtCLE1BQWxCO0FBRG9COztBQUlyQixZQUFZLENBQUEsU0FBRSxDQUFBLEtBQWQsR0FBc0IsU0FBQyxXQUFELEVBQWMsS0FBZCxFQUFxQixPQUFyQixFQUE4QixNQUE5QjtBQUNyQixNQUFBO0VBQUEsSUFBRyxTQUFTLENBQUMsTUFBVixLQUFvQixDQUF2QjtXQUNDLE9BQU8sQ0FBQyxRQUFSLENBQWlCLElBQUMsQ0FBQSxNQUFsQixFQUEwQixXQUExQixFQUREO0dBQUEsTUFHSyxJQUFHLElBQUMsQ0FBQSxnQkFBRCxJQUFzQixNQUFBLEtBQVksSUFBckM7SUFDSixJQUFDLENBQUEsZ0JBQWdCLENBQUMsS0FBbEIsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBckMsRUFBNEMsT0FBNUMsRUFBcUQsSUFBckQ7QUFDQSxX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QUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FBQSxNQUFiO2VBQXlCLFlBQXpCO09BQUEsTUFBQTtlQUEwQyxXQUExQzs7SUFBTCxDQUFMO0dBSG5DO0VBSUEsYUFBQSxFQUFlLGlCQUFBLEdBQW9CO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBSyxJQUFDLENBQUEsS0FBRCxHQUFPLElBQUMsQ0FBQTtJQUFiLENBQUw7R0FKbkM7Q0FERCIsInNvdXJjZXNDb250ZW50IjpbIlF1aWNrRWxlbWVudDo6dXBkYXRlT3B0aW9ucyA9IChvcHRpb25zKS0+XG5cdGlmIElTLm9iamVjdChvcHRpb25zKSBcblx0XHRAb3B0aW9ucyA9IG9wdGlvbnNcblx0XHRAX25vcm1hbGl6ZU9wdGlvbnMoKVxuXHRcdEBfYXBwbHlPcHRpb25zKEBvcHRpb25zKVxuXHRcblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6OnNob3cgPSAoZGlzcGxheSktPlxuXHRkaXNwbGF5ID89IEBfc3R5bGVzLmJhc2U/LmRpc3BsYXkgb3IgJ2Jsb2NrJ1xuXHRAc3R5bGUgJ2Rpc3BsYXknLCBkaXNwbGF5XG5cblF1aWNrRWxlbWVudDo6aGlkZSA9ICgpLT5cblx0QHN0eWxlICdkaXNwbGF5JywgJ25vbmUnXG5cblxuUXVpY2tFbGVtZW50OjpzdGF0ZSA9ICh0YXJnZXRTdGF0ZSwgdmFsdWUsIGJ1YmJsZXMsIHNvdXJjZSktPlxuXHRpZiBhcmd1bWVudHMubGVuZ3RoIGlzIDFcblx0XHRoZWxwZXJzLmluY2x1ZGVzKEBfc3RhdGUsIHRhcmdldFN0YXRlKVxuXG5cdGVsc2UgaWYgQF9zdGF0ZVBpcGVUYXJnZXQgYW5kIHNvdXJjZSBpc250IEBcblx0XHRAX3N0YXRlUGlwZVRhcmdldC5zdGF0ZSh0YXJnZXRTdGF0ZSwgdmFsdWUsIGJ1YmJsZXMsIEApXG5cdFx0cmV0dXJuIEBcblx0XG5cdGVsc2UgaWYgSVMuc3RyaW5nKHRhcmdldFN0YXRlKVxuXHRcdHRhcmdldFN0YXRlID0gdGFyZ2V0U3RhdGUuc2xpY2UoMSkgaWYgdGFyZ2V0U3RhdGVbMF0gaXMgJyQnXG5cdFx0ZGVzaXJlZFZhbHVlID0gISF2YWx1ZSAjIENvbnZlcnQgdGhlIHZhbHVlIHRvIGEgYm9vbGVhblxuXHRcdHJldHVybiBAIGlmIHRhcmdldFN0YXRlIGlzICdiYXNlJ1xuXHRcdGFjdGl2ZVN0YXRlcyA9IEBfZ2V0QWN0aXZlU3RhdGVzKHRhcmdldFN0YXRlLCBmYWxzZSlcblx0XHRhY3RpdmVTdGF0ZVN0eWxlcyA9IEBfZ2V0U3RhdGVTdHlsZXMoYWN0aXZlU3RhdGVzKVxuXHRcdFxuXHRcdCMgPT09PSBUb2dnbGUgc3R5bGVzIGZvciB0aGlzIHN0YXRlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdGlmIEBzdGF0ZSh0YXJnZXRTdGF0ZSkgaXNudCBkZXNpcmVkVmFsdWVcblx0XHRcdHRhcmdldFN0eWxlID0gQF9zdHlsZXNbdGFyZ2V0U3RhdGVdIG9yIEBfc3R5bGVzW3RhcmdldFN0YXRlXVxuXHRcdFx0aWYgdGFyZ2V0U3R5bGVcblx0XHRcdFx0dGFyZ2V0U3RhdGVJbmRleCA9IEBfcHJvdmlkZWRTdGF0ZXMuaW5kZXhPZih0YXJnZXRTdGF0ZSlcblx0XHRcdFx0c3VwZXJpb3JTdGF0ZXMgPSBhY3RpdmVTdGF0ZXMuZmlsdGVyIChzdGF0ZSk9PiBAX3Byb3ZpZGVkU3RhdGVzLmluZGV4T2Yoc3RhdGUpID4gdGFyZ2V0U3RhdGVJbmRleFxuXHRcdFx0XHRzdXBlcmlvclN0YXRlU3R5bGVzID0gQF9nZXRTdGF0ZVN0eWxlcyhzdXBlcmlvclN0YXRlcylcblxuXG5cdFx0XHRpZiBkZXNpcmVkVmFsdWUgI2lzIG9uXG5cdFx0XHRcdEBfc3RhdGUucHVzaCh0YXJnZXRTdGF0ZSlcblx0XHRcdFx0aWYgdGFyZ2V0U3R5bGVcblx0XHRcdFx0XHRAc3R5bGUgZXh0ZW5kLmNsb25lLmtleXModGFyZ2V0U3R5bGUpKHRhcmdldFN0eWxlLCBzdXBlcmlvclN0YXRlU3R5bGVzLi4uKVxuXHRcdFx0XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGhlbHBlcnMucmVtb3ZlSXRlbShAX3N0YXRlLCB0YXJnZXRTdGF0ZSlcblx0XHRcdFx0aWYgdGFyZ2V0U3R5bGVcblx0XHRcdFx0XHRzdHlsZXNUb0tlZXAgPSBleHRlbmQuY2xvbmUua2V5cyh0YXJnZXRTdHlsZSkoQF9zdHlsZXMuYmFzZSwgYWN0aXZlU3RhdGVTdHlsZXMuLi4pXG5cdFx0XHRcdFx0c3R5bGVzVG9SZW1vdmUgPSBleHRlbmQudHJhbnNmb3JtKC0+IG51bGwpLmNsb25lKHRhcmdldFN0eWxlKVxuXHRcdFx0XHRcdEBzdHlsZSBleHRlbmQoc3R5bGVzVG9SZW1vdmUsIHN0eWxlc1RvS2VlcClcblxuXG5cdFx0IyA9PT09IFRvZ2dsZSBzaGFyZWQgc3R5bGVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdGlmIEBfaGFzU2hhcmVkU3RhdGVTdHlsZVxuXHRcdFx0c2hhcmVkU3R5bGVzID0gQF9zdHlsZXNTaGFyZWQuZmlsdGVyIChzdGF0ZUNoYWluKS0+IGhlbHBlcnMuaW5jbHVkZXMoc3RhdGVDaGFpbiwgdGFyZ2V0U3RhdGUpXG5cdFx0XHRcblx0XHRcdGZvciBzdGF0ZUNoYWluIGluIHNoYXJlZFN0eWxlc1xuXHRcdFx0XHRzcGxpdCA9IHN0YXRlQ2hhaW4uc3BsaXQoJysnKVxuXHRcdFx0XHRpc0FwcGxpY2FibGUgPSBzcGxpdC5sZW5ndGggaXMgc3BsaXQuZmlsdGVyKChzdGF0ZSk9PiBzdGF0ZSBpcyB0YXJnZXRTdGF0ZSBvciBAc3RhdGUoc3RhdGUpKS5sZW5ndGhcblx0XHRcdFx0XG5cdFx0XHRcdGlmIGlzQXBwbGljYWJsZVxuXHRcdFx0XHRcdHRhcmdldFN0eWxlID0gQF9zdHlsZXNbc3RhdGVDaGFpbl1cblx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgZGVzaXJlZFZhbHVlICNpcyBvblxuXHRcdFx0XHRcdFx0QF9zdGF0ZVNoYXJlZC5wdXNoKHN0YXRlQ2hhaW4pIHVubGVzcyBoZWxwZXJzLmluY2x1ZGVzKEBfc3RhdGVTaGFyZWQsIHN0YXRlQ2hhaW4pXG5cdFx0XHRcdFx0XHRpZiBzcGxpdC5sZW5ndGggPiAyXG5cdFx0XHRcdFx0XHRcdGluZmVyaW9yU3RhdGVDaGFpbnMgPSBAX3N0eWxlc1toZWxwZXJzLnJlbW92ZUl0ZW0oc3BsaXQsIHRhcmdldFN0YXRlKS5qb2luKCcrJyldXG5cdFx0XHRcdFx0XHRcdHRhcmdldFN0eWxlID0gZXh0ZW5kLmNsb25lKGluZmVyaW9yU3RhdGVDaGFpbnMsIHRhcmdldFN0eWxlKVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRAc3R5bGUgdGFyZ2V0U3R5bGVcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRoZWxwZXJzLnJlbW92ZUl0ZW0oQF9zdGF0ZVNoYXJlZCwgc3RhdGVDaGFpbilcblx0XHRcdFx0XHRcdGlmIEBfc3RhdGVTaGFyZWQubGVuZ3RoXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZVN0YXRlU3R5bGVzLnB1c2ggKFxuXHRcdFx0XHRcdFx0XHRcdEBfc3RhdGVTaGFyZWRcblx0XHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIgKHN0YXRlKS0+IG5vdCBoZWxwZXJzLmluY2x1ZGVzKHN0YXRlLCB0YXJnZXRTdGF0ZSlcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAgKHN0YXRlKT0+IEBfc3R5bGVzW3N0YXRlXVxuXHRcdFx0XHRcdFx0XHQpLi4uXG5cblx0XHRcdFx0XHRcdHN0eWxlc1RvS2VlcCA9IGV4dGVuZC5jbG9uZS5rZXlzKHRhcmdldFN0eWxlKShAX3N0eWxlcy5iYXNlLCBhY3RpdmVTdGF0ZVN0eWxlcy4uLilcblx0XHRcdFx0XHRcdHN0eWxlc1RvUmVtb3ZlID0gZXh0ZW5kLnRyYW5zZm9ybSgtPiBudWxsKS5jbG9uZSh0YXJnZXRTdHlsZSlcblx0XHRcdFx0XHRcdEBzdHlsZSBleHRlbmQoc3R5bGVzVG9SZW1vdmUsIHN0eWxlc1RvS2VlcClcblxuXG5cdFx0IyA9PT09IFBhc3Mgc3RhdGUgdG8gcGFyZW50L2NoaWxkcmVuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRcdGlmIG5vdCBoZWxwZXJzLmluY2x1ZGVzKEBvcHRpb25zLnVucGFzc2FibGVTdGF0ZXMsIHRhcmdldFN0YXRlKVxuXHRcdFx0aWYgYnViYmxlc1xuXHRcdFx0XHRAX3BhcmVudC5zdGF0ZSh0YXJnZXRTdGF0ZSwgdmFsdWUsIHRydWUsIHNvdXJjZSBvciBAKSBpZiBAcGFyZW50XG5cdFx0XHRlbHNlIGlmIEBvcHRpb25zLnBhc3NTdGF0ZVRvQ2hpbGRyZW5cblx0XHRcdFx0Y2hpbGQuc3RhdGUodGFyZ2V0U3RhdGUsIHZhbHVlLCBmYWxzZSwgc291cmNlIG9yIEApIGZvciBjaGlsZCBpbiBAX2NoaWxkcmVuXG5cdFx0XG5cdFx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6OnJlc2V0U3RhdGUgPSAoKS0+XG5cdGZvciBhY3RpdmVTdGF0ZSBpbiBAX3N0YXRlLnNsaWNlKClcblx0XHRAc3RhdGUoYWN0aXZlU3RhdGUsIG9mZilcblxuXHRyZXR1cm4gQFxuXG5cblF1aWNrRWxlbWVudDo6cGlwZVN0YXRlID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBoZWxwZXJzLm5vcm1hbGl6ZUdpdmVuRWwodGFyZ2V0RWwpXG5cblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKSBhbmQgdGFyZ2V0RWwgaXNudCBAXG5cdFx0XHRAX3N0YXRlUGlwZVRhcmdldCA9IHRhcmdldEVsXG5cdFx0XHR0YXJnZXRFbC5zdGF0ZShhY3RpdmVTdGF0ZSwgb24pIGZvciBhY3RpdmVTdGF0ZSBpbiBAX3N0YXRlXG5cblx0ZWxzZSBpZiB0YXJnZXRFbCBpcyBmYWxzZVxuXHRcdGRlbGV0ZSBAX3N0YXRlUGlwZVRhcmdldFxuXG5cdHJldHVybiBAXG5cblxuIyMjKlxuICogU2V0cy9nZXRzIHRoZSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LiBJbiBnZXR0ZXIgbW9kZSB0aGUgY29tcHV0ZWQgcHJvcGVydHkgb2ZcbiAqIHRoZSBzdHlsZSB3aWxsIGJlIHJldHVybmVkIHVubGVzcyB0aGUgZWxlbWVudCBpcyBub3QgaW5zZXJ0ZWQgaW50byB0aGUgRE9NLiBJblxuICogd2Via2l0IGJyb3dzZXJzIGFsbCBjb21wdXRlZCBwcm9wZXJ0aWVzIG9mIGEgZGV0YWNoZWQgbm9kZSBhcmUgYWx3YXlzIGFuIGVtcHR5XG4gKiBzdHJpbmcgYnV0IGluIGdlY2tvIHRoZXkgcmVmbGVjdCBvbiB0aGUgYWN0dWFsIGNvbXB1dGVkIHZhbHVlLCBoZW5jZSB3ZSBuZWVkXG4gKiB0byBcIm5vcm1hbGl6ZVwiIHRoaXMgYmVoYXZpb3IgYW5kIG1ha2Ugc3VyZSB0aGF0IGV2ZW4gb24gZ2Vja28gYW4gZW1wdHkgc3RyaW5nXG4gKiBpcyByZXR1cm5lZFxuICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4jIyNcblF1aWNrRWxlbWVudDo6c3R5bGUgPSAoKS0+XG5cdHJldHVybiBpZiBAdHlwZSBpcyAndGV4dCdcblx0YXJncyA9IGFyZ3VtZW50c1xuXHRcblx0aWYgSVMuc3RyaW5nKGFyZ3NbMF0pXG5cdFx0cmV0dXJuVmFsdWUgPSBDU1MoQGVsLCBhcmdzWzBdLCBhcmdzWzFdKVxuXHRcdGlmIG5vdCBJUy5kZWZpbmVkKGFyZ3NbMV0pXG5cdFx0XHQjIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5cdFx0XHRyZXR1cm4gaWYgQF9pbnNlcnRlZCB0aGVuIHJldHVyblZhbHVlIGVsc2UgaWYgbm90IHJldHVyblZhbHVlIHRoZW4gcmV0dXJuVmFsdWUgZWxzZSAnJ1xuXG5cdGVsc2UgaWYgSVMub2JqZWN0KGFyZ3NbMF0pXG5cdFx0Q1NTIEBlbCwgZXh0ZW5kLmFsbG93TnVsbC50cmFuc2Zvcm0oKHZhbHVlKT0+XG5cdFx0XHRpZiB0eXBlb2YgdmFsdWUgaXMgJ2Z1bmN0aW9uJyB0aGVuIHZhbHVlLmNhbGwoQCwgQG9wdGlvbnMucmVsYXRlZEluc3RhbmNlKSBlbHNlIHZhbHVlXG5cdFx0KS5jbG9uZShhcmdzWzBdKVxuXG5cdHJldHVybiBAXG5cblxuIyMjKlxuICogQXR0ZW1wdHMgdG8gcmVzb2x2ZSB0aGUgdmFsdWUgZm9yIGEgZ2l2ZW4gcHJvcGVydHkgaW4gdGhlIGZvbGxvd2luZyBvcmRlciBpZiBlYWNoIG9uZSBpc24ndCBhIHZhbGlkIHZhbHVlOlxuICogMS4gZnJvbSBjb21wdXRlZCBzdHlsZSAoZm9yIGRvbS1pbnNlcnRlZCBlbHMpXG4gKiAyLiBmcm9tIERPTUVsZW1lbnQuc3R5bGUgb2JqZWN0IChmb3Igbm9uLWluc2VydGVkIGVsczsgaWYgb3B0aW9ucy5zdHlsZUFmdGVySW5zZXJ0LCB3aWxsIG9ubHkgaGF2ZSBzdGF0ZSBzdHlsZXMpXG4gKiAzLiBmcm9tIHByb3ZpZGVkIHN0eWxlIG9wdGlvbnNcbiAqIChmb3Igbm9uLWluc2VydGVkIGVsczsgY2hlY2tpbmcgb25seSAkYmFzZSBzaW5jZSBzdGF0ZSBzdHlsZXMgd2lsbCBhbHdheXMgYmUgYXBwbGllZCB0byB0aGUgc3R5bGUgb2JqZWN0IGV2ZW4gZm9yIG5vbi1pbnNlcnRlZClcbiMjI1xuUXVpY2tFbGVtZW50OjpzdHlsZVNhZmUgPSAocHJvcGVydHksIHNraXBDb21wdXRlZCktPlxuXHRyZXR1cm4gaWYgQHR5cGUgaXMgJ3RleHQnXG5cdGFyZ3MgPSBhcmd1bWVudHNcblx0Y29tcHV0ZWRSZXN1bHQgPSBAc3R5bGUocHJvcGVydHkpXG5cblx0aWYgSVMuc3RyaW5nKGNvbXB1dGVkUmVzdWx0KVxuXHRcdGNvbXB1dGVkUmVzdWx0ID0gMCBpZiBza2lwQ29tcHV0ZWRcblx0XHRyZXR1cm4gY29tcHV0ZWRSZXN1bHQgb3IgQGVsLnN0eWxlW2FyZ3NbMF1dIG9yIEBfc3R5bGVzLmJhc2U/W2FyZ3NbMF1dIG9yICcnXG5cblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6OnN0eWxlUGFyc2VkID0gKHByb3BlcnR5KS0+XG5cdHBhcnNlRmxvYXQgQHN0eWxlU2FmZShwcm9wZXJ0eSlcblxuXG5RdWlja0VsZW1lbnQ6OnJlY2FsY1N0eWxlID0gKCktPlxuXHRhY3RpdmVTdGF0ZVN0eWxlcyA9IEBfZ2V0U3RhdGVTdHlsZXMgQF9nZXRBY3RpdmVTdGF0ZXMoKVxuXHR0YXJnZXRTdHlsZXMgPSBleHRlbmQuY2xvbmUuZmlsdGVyKFxuXHRcdCh2YWx1ZSktPiB0eXBlb2YgdmFsdWUgaXMgJ2Z1bmN0aW9uJ1xuXHQpKEBfc3R5bGVzLmJhc2UsIGFjdGl2ZVN0YXRlU3R5bGVzLi4uKVxuXG5cdEBzdHlsZSh0YXJnZXRTdHlsZXMpXG5cblxuUXVpY2tFbGVtZW50OjpfZ2V0QWN0aXZlU3RhdGVzID0gKHN0YXRlVG9FeGNsdWRlLCBpbmNsdWRlU2hhcmVkU3RhdGVzPXRydWUpLT5cblx0cGxhaW5TdGF0ZXMgPSBAX3Byb3ZpZGVkU3RhdGVzLmZpbHRlciAoc3RhdGUpPT4gaGVscGVycy5pbmNsdWRlcyhAX3N0YXRlLCBzdGF0ZSkgYW5kIHN0YXRlIGlzbnQgc3RhdGVUb0V4Y2x1ZGVcblx0cmV0dXJuIGlmIG5vdCBpbmNsdWRlU2hhcmVkU3RhdGVzIG9yIG5vdCBAX2hhc1NoYXJlZFN0YXRlU3R5bGUgdGhlbiBwbGFpblN0YXRlcyBlbHNlIHBsYWluU3RhdGVzLmNvbmNhdChAX3N0YXRlU2hhcmVkKVxuXG5RdWlja0VsZW1lbnQ6Ol9nZXRTdGF0ZVN0eWxlcyA9IChzdGF0ZXMpLT5cblx0c3RhdGVzLm1hcCAoc3RhdGUpPT4gQF9zdHlsZXNbc3RhdGVdIG9yIEBfc3R5bGVzW3N0YXRlXVxuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgUXVpY2tFbGVtZW50OjosXG5cdCdyZWN0JzogZ2V0OiAoKS0+IEBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXHQnd2lkdGgnOiBnZXQ6ICgpLT4gcGFyc2VGbG9hdCBAc3R5bGUoJ3dpZHRoJylcblx0J2hlaWdodCc6IGdldDogKCktPiBwYXJzZUZsb2F0IEBzdHlsZSgnaGVpZ2h0Jylcblx0J29yaWVudGF0aW9uJzogb3JpZW50YXRpb25HZXR0ZXIgPSBnZXQ6ICgpLT4gaWYgQHdpZHRoID4gQGhlaWdodCB0aGVuICdsYW5kc2NhcGUnIGVsc2UgJ3BvcnRyYWl0J1xuXHQnYXNwZWN0UmF0aW8nOiBhc3BlY3RSYXRpb0dldHRlciA9IGdldDogKCktPiBAd2lkdGgvQGhlaWdodFxuXG5cblxuXG5cdCJdfQ==
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuaXB1bGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFuaXB1bGF0aW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUEsU0FBRSxDQUFBLFVBQWQsR0FBMkIsU0FBQTtTQUMxQixRQUFRLENBQUMsUUFBVCxDQUFrQixJQUFsQjtBQUQwQjs7QUFJM0IsWUFBWSxDQUFBLFNBQUUsQ0FBQSxLQUFkLEdBQXNCLFNBQUE7QUFDckIsTUFBQTtFQUFBLE9BQUEsR0FBVSxJQUFDLENBQUEsRUFBRSxDQUFDLFNBQUosQ0FBYyxLQUFkO0VBQ1YsT0FBQSxHQUFVLE1BQU0sQ0FBQyxLQUFQLENBQWEsSUFBQyxDQUFBLE9BQWQsRUFBdUI7SUFBQyxRQUFBLEVBQVMsT0FBVjtHQUF2QjtFQUVWLEtBQUEsR0FBUSxJQUFJLFlBQUosQ0FBaUIsSUFBQyxDQUFBLElBQWxCLEVBQXdCLE9BQXhCO0FBQ1I7QUFBQSxPQUFBLHFDQUFBOztJQUFBLEtBQUssQ0FBQyxLQUFOLENBQVksV0FBWixFQUF5QixJQUF6QjtBQUFBO0FBQ0E7QUFBQSxPQUFBLHdDQUFBOztJQUFBLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBSyxDQUFDLEtBQU4sQ0FBQSxDQUFiO0FBQUE7QUFDQTtBQUFBLE9BQUEsaUJBQUE7O0FBQ0MsU0FBQSw2Q0FBQTs7TUFBQSxLQUFLLENBQUMsRUFBTixDQUFTLFNBQVQsRUFBb0IsUUFBcEI7QUFBQTtBQUREO0FBR0EsU0FBTztBQVZjOztBQWF0QixZQUFZLENBQUEsU0FBRSxDQUFBLE1BQWQsR0FBdUIsU0FBQyxRQUFEO0FBQ3RCLE1BQUE7RUFBQSxJQUFHLFFBQUg7SUFDQyxRQUFBLEdBQVcsT0FBTyxDQUFDLGdCQUFSLENBQXlCLFFBQXpCO0lBRVgsSUFBRyxFQUFFLENBQUMsVUFBSCxDQUFjLFFBQWQsQ0FBSDtNQUNDLFVBQUEsR0FBYSxRQUFRLENBQUM7TUFDdEIsSUFBcUMsVUFBckM7UUFBQSxVQUFVLENB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LEVBQUUsQ0FBQyxTQUFKLEdBQWdCO0lBQTdCLENBREw7R0FERDtFQUlBLE1BQUEsRUFDQztJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUssSUFBQyxDQUFBLEVBQUUsQ0FBQztJQUFULENBQUw7SUFDQSxHQUFBLEVBQUssU0FBQyxRQUFEO2FBQWEsSUFBQyxDQUFBLEVBQUUsQ0FBQyxXQUFKLEdBQWtCO0lBQS9CLENBREw7R0FMRDtDQUREIiwic291cmNlc0NvbnRlbnQiOlsiUXVpY2tFbGVtZW50Ojp0b1RlbXBsYXRlID0gKCktPlxuXHRRdWlja0RvbS50ZW1wbGF0ZShAKVxuXG5cblF1aWNrRWxlbWVudDo6Y2xvbmUgPSAoKS0+XG5cdGVsQ2xvbmUgPSBAZWwuY2xvbmVOb2RlKGZhbHNlKVxuXHRvcHRpb25zID0gZXh0ZW5kLmNsb25lKEBvcHRpb25zLCB7ZXhpc3Rpbmc6ZWxDbG9uZX0pXG5cdFxuXHRuZXdFbCA9IG5ldyBRdWlja0VsZW1lbnQoQHR5cGUsIG9wdGlvbnMpXG5cdG5ld0VsLnN0YXRlKGFjdGl2ZVN0YXRlLCBvbikgZm9yIGFjdGl2ZVN0YXRlIGluIEBfc3RhdGVcblx0bmV3RWwuYXBwZW5kKGNoaWxkLmNsb25lKCkpIGZvciBjaGlsZCBpbiBAY2hpbGRyZW5cblx0Zm9yIGV2ZW50TmFtZSwgY2FsbGJhY2tzIG9mIEBfZXZlbnRDYWxsYmFja3Ncblx0XHRuZXdFbC5vbihldmVudE5hbWUsIGNhbGxiYWNrKSBmb3IgY2FsbGJhY2sgaW4gY2FsbGJhY2tzXG5cdFxuXHRyZXR1cm4gbmV3RWxcblxuXG5RdWlja0VsZW1lbnQ6OmFwcGVuZCA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gaGVscGVycy5ub3JtYWxpemVHaXZlbkVsKHRhcmdldEVsKVxuXHRcdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHRwcmV2UGFyZW50ID0gdGFyZ2V0RWwucGFyZW50XG5cdFx0XHRwcmV2UGFyZW50Ll9yZW1vdmVDaGlsZCh0YXJnZXRFbCkgaWYgcHJldlBhcmVudFxuXHRcdFx0QF9jaGlsZHJlbi5wdXNoKHRhcmdldEVsKVxuXHRcdFx0QGVsLmFwcGVuZENoaWxkKHRhcmdldEVsLmVsKVxuXHRcdFx0dGFyZ2V0RWwuX3JlZnJlc2hQYXJlbnQoKSAjIEZvcmNlIHJlLWZyZXNoIHRhcmdldEVsLl9wYXJlbnQgdmFsdWUgdG8gdHJpZ2dlciBvbkluc2VydGVkIGNhbGxiYWNrXG5cblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6OmFwcGVuZFRvID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBoZWxwZXJzLm5vcm1hbGl6ZUdpdmVuRWwodGFyZ2V0RWwpXG5cdFx0XG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbClcblx0XHRcdHRhcmdldEVsLmFwcGVuZChAKVxuXHRcblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6OnByZXBlbmQgPSAodGFyZ2V0RWwpLT5cblx0aWYgdGFyZ2V0RWxcblx0XHR0YXJnZXRFbCA9IGhlbHBlcnMubm9ybWFsaXplR2l2ZW5FbCh0YXJnZXRFbClcblx0XHRcblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKVxuXHRcdFx0cHJldlBhcmVudCA9IHRhcmdldEVsLnBhcmVudFxuXHRcdFx0cHJldlBhcmVudC5fcmVtb3ZlQ2hpbGQodGFyZ2V0RWwpIGlmIHByZXZQYXJlbnRcblx0XHRcdEBfY2hpbGRyZW4udW5zaGlmdCh0YXJnZXRFbClcblx0XHRcdEBlbC5pbnNlcnRCZWZvcmUodGFyZ2V0RWwuZWwsIEBlbC5maXJzdENoaWxkKVxuXHRcdFx0dGFyZ2V0RWwuX3JlZnJlc2hQYXJlbnQoKSAjIEZvcmNlIHJlLWZyZXNoIHRhcmdldEVsLl9wYXJlbnQgdmFsdWUgdG8gdHJpZ2dlciBvbkluc2VydGVkIGNhbGxiYWNrXG5cdFxuXHRyZXR1cm4gQFxuXG5cblF1aWNrRWxlbWVudDo6cHJlcGVuZFRvID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBoZWxwZXJzLm5vcm1hbGl6ZUdpdmVuRWwodGFyZ2V0RWwpXG5cdFx0XG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbClcblx0XHRcdHRhcmdldEVsLnByZXBlbmQoQClcblxuXHRyZXR1cm4gQFxuXG5cblF1aWNrRWxlbWVudDo6YWZ0ZXIgPSAodGFyZ2V0RWwpLT5cblx0aWYgdGFyZ2V0RWwgYW5kIEBwYXJlbnRcblx0XHR0YXJnZXRFbCA9IGhlbHBlcnMubm9ybWFsaXplR2l2ZW5FbCh0YXJnZXRFbClcblxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHRteUluZGV4ID0gQHBhcmVudC5fY2hpbGRyZW4uaW5kZXhPZihAKVxuXHRcdFx0QHBhcmVudC5fY2hpbGRyZW4uc3BsaWNlKG15SW5kZXgrMSwgMCwgdGFyZ2V0RWwpXG5cdFx0XHRAZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFyZ2V0RWwuZWwsIEBlbC5uZXh0U2libGluZylcblx0XHRcdHRhcmdldEVsLl9yZWZyZXNoUGFyZW50KCkgIyBGb3JjZSByZS1mcmVzaCB0YXJnZXRFbC5fcGFyZW50IHZhbHVlIHRvIHRyaWdnZXIgb25JbnNlcnRlZCBjYWxsYmFja1xuXG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjppbnNlcnRBZnRlciA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbFxuXHRcdHRhcmdldEVsID0gaGVscGVycy5ub3JtYWxpemVHaXZlbkVsKHRhcmdldEVsKVxuXHRcdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpXG5cdFx0XHR0YXJnZXRFbC5hZnRlcihAKVxuXHRcblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6OmJlZm9yZSA9ICh0YXJnZXRFbCktPlxuXHRpZiB0YXJnZXRFbCBhbmQgQHBhcmVudFxuXHRcdHRhcmdldEVsID0gaGVscGVycy5ub3JtYWxpemVHaXZlbkVsKHRhcmdldEVsKVxuXG5cdFx0aWYgSVMucXVpY2tEb21FbCh0YXJnZXRFbClcblx0XHRcdG15SW5kZXggPSBAcGFyZW50Ll9jaGlsZHJlbi5pbmRleE9mKEApXG5cdFx0XHRAcGFyZW50Ll9jaGlsZHJlbi5zcGxpY2UobXlJbmRleCwgMCwgdGFyZ2V0RWwpXG5cdFx0XHRAZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFyZ2V0RWwuZWwsIEBlbClcblx0XHRcdHRhcmdldEVsLl9yZWZyZXNoUGFyZW50KCkgIyBGb3JjZSByZS1mcmVzaCB0YXJnZXRFbC5fcGFyZW50IHZhbHVlIHRvIHRyaWdnZXIgb25JbnNlcnRlZCBjYWxsYmFja1xuXG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjppbnNlcnRCZWZvcmUgPSAodGFyZ2V0RWwpLT5cblx0aWYgdGFyZ2V0RWxcblx0XHR0YXJnZXRFbCA9IGhlbHBlcnMubm9ybWFsaXplR2l2ZW5FbCh0YXJnZXRFbClcblx0XHRcblx0XHRpZiBJUy5xdWlja0RvbUVsKHRhcmdldEVsKVxuXHRcdFx0dGFyZ2V0RWwuYmVmb3JlKEApXG5cdFxuXHRyZXR1cm4gQFxuXG5cblF1aWNrRWxlbWVudDo6ZGV0YWNoID0gKCktPlxuXHRAcGFyZW50Py5fcmVtb3ZlQ2hpbGQoQClcblx0cmV0dXJuIEBcblxuXG5RdWlja0VsZW1lbnQ6OnJlbW92ZSA9ICgpLT5cblx0QGRldGFjaCgpXG5cdEByZXNldFN0YXRlKClcblx0QF9ldmVudENhbGxiYWNrc1tldmVudE5hbWVdLmxlbmd0aCA9IDAgZm9yIGV2ZW50TmFtZSBvZiBAX2V2ZW50Q2FsbGJhY2tzXG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjplbXB0eSA9ICgpLT5cblx0QF9yZW1vdmVDaGlsZChjaGlsZCkgZm9yIGNoaWxkIGluIEBjaGlsZHJlbi5zbGljZSgpXG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50Ojp3cmFwID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBoZWxwZXJzLm5vcm1hbGl6ZUdpdmVuRWwodGFyZ2V0RWwpXG5cdFx0Y3VycmVudFBhcmVudCA9IEBwYXJlbnRcblxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpIGFuZCB0YXJnZXRFbCBpc250IEAgYW5kIHRhcmdldEVsIGlzbnQgQHBhcmVudFxuXHRcdFx0aWYgY3VycmVudFBhcmVudFxuXHRcdFx0XHRjdXJyZW50UGFyZW50Ll9yZW1vdmVDaGlsZChALCBpZiBub3QgdGFyZ2V0RWwucGFyZW50IHRoZW4gdGFyZ2V0RWwpXG5cdFx0XHRcblx0XHRcdHRhcmdldEVsLmFwcGVuZChAKVxuXG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50Ojp1bndyYXAgPSAoKS0+XG5cdHBhcmVudCA9IEBwYXJlbnRcblx0aWYgcGFyZW50XG5cdFx0cGFyZW50Q2hpbGRyZW4gPSBRdWlja0RvbS5iYXRjaChwYXJlbnQuY2hpbGRyZW4pXG5cdFx0cGFyZW50U2libGluZyA9IHBhcmVudC5uZXh0XG5cdFx0Z3JhbmRQYXJlbnQgPSBwYXJlbnQucGFyZW50XG5cdFx0aWYgZ3JhbmRQYXJlbnRcblx0XHRcdHBhcmVudC5kZXRhY2goKVxuXG5cdFx0XHRpZiBwYXJlbnRTaWJsaW5nXG5cdFx0XHRcdHBhcmVudENoaWxkcmVuLmluc2VydEJlZm9yZShwYXJlbnRTaWJsaW5nKVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRwYXJlbnRDaGlsZHJlbi5hcHBlbmRUbyhncmFuZFBhcmVudClcblx0XG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjpyZXBsYWNlID0gKHRhcmdldEVsKS0+XG5cdGlmIHRhcmdldEVsXG5cdFx0dGFyZ2V0RWwgPSBoZWxwZXJzLm5vcm1hbGl6ZUdpdmVuRWwodGFyZ2V0RWwpXG5cdFxuXHRcdGlmIElTLnF1aWNrRG9tRWwodGFyZ2V0RWwpIGFuZCB0YXJnZXRFbCBpc250IEBcblx0XHRcdHRhcmdldEVsLmRldGFjaCgpXG5cdFx0XHRAcGFyZW50Py5fcmVtb3ZlQ2hpbGQoQCwgdGFyZ2V0RWwpXG5cdFx0XHR0YXJnZXRFbC5fcmVmcmVzaFBhcmVudCgpICMgRm9yY2UgcmUtZnJlc2ggdGFyZ2V0RWwuX3BhcmVudCB2YWx1ZSB0byB0cmlnZ2VyIG9uSW5zZXJ0ZWQgY2FsbGJhY2tcblx0XG5cdHJldHVybiBAXG5cblxuUXVpY2tFbGVtZW50OjpfcmVmcmVzaFBhcmVudCA9ICgpLT5cblx0QHBhcmVudFxuXG5cblF1aWNrRWxlbWVudDo6X3JlbW92ZUNoaWxkID0gKHRhcmdldENoaWxkLCByZXBsYWNlbWVudENoaWxkKS0+XG5cdGluZGV4T2ZDaGlsZCA9IEBfY2hpbGRyZW4uaW5kZXhPZih0YXJnZXRDaGlsZClcblx0aWYgaW5kZXhPZkNoaWxkIGlzbnQgLTFcblx0XHRpZiByZXBsYWNlbWVudENoaWxkXG5cdFx0XHRAZWwucmVwbGFjZUNoaWxkKHJlcGxhY2VtZW50Q2hpbGQuZWwsIHRhcmdldENoaWxkLmVsKVxuXHRcdFx0QF9jaGlsZHJlbi5zcGxpY2UoaW5kZXhPZkNoaWxkLCAxLCByZXBsYWNlbWVudENoaWxkKVxuXHRcdGVsc2Vcblx0XHRcdEBlbC5yZW1vdmVDaGlsZCh0YXJnZXRDaGlsZC5lbClcblx0XHRcdEBfY2hpbGRyZW4uc3BsaWNlKGluZGV4T2ZDaGlsZCwgMSlcblx0XHRcblxuXHRyZXR1cm4gQFxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIFF1aWNrRWxlbWVudDo6LFxuXHQnaHRtbCc6XG5cdFx0Z2V0OiAoKS0+IEBlbC5pbm5lckhUTUxcblx0XHRzZXQ6IChuZXdWYWx1ZSktPiBAZWwuaW5uZXJIVE1MID0gbmV3VmFsdWVcblx0XG5cdCd0ZXh0Jzpcblx0XHRnZXQ6ICgpLT4gQGVsLnRleHRDb250ZW50XG5cdFx0c2V0OiAobmV3VmFsdWUpLT4gQGVsLnRleHRDb250ZW50ID0gbmV3VmFsdWVcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==
;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBTTtFQUNRLHNCQUFDLElBQUQsRUFBUSxPQUFSO0lBQUMsSUFBQyxDQUFBLE9BQUQ7SUFBTyxJQUFDLENBQUEsVUFBRDtJQUNwQixJQUFDLENBQUEsRUFBRCxHQUFNLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBVCxJQUNMLENBQUcsSUFBQyxDQUFBLElBQUQsS0FBUyxNQUFaLEdBQXdCLFFBQVEsQ0FBQyxjQUFULENBQXdCLElBQUMsQ0FBQSxPQUFPLENBQUMsSUFBakMsQ0FBeEIsR0FDUSxJQUFDLENBQUEsSUFBSyxDQUFBLENBQUEsQ0FBTixLQUFZLEdBQWYsR0FBd0IsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsWUFBekIsRUFBdUMsSUFBQyxDQUFBLElBQUksQ0FBQyxLQUFOLENBQVksQ0FBWixDQUF2QyxDQUF4QixHQUNBLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQUMsQ0FBQSxJQUF4QixDQUZMO0lBSUQsSUFBRyxJQUFDLENBQUEsSUFBRCxLQUFTLE1BQVo7TUFDQyxJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLElBQUQsR0FBUSxTQUFBLEdBQUEsRUFEOUI7O0lBR0EsSUFBQyxDQUFBLE9BQUQsR0FBVztJQUNYLElBQUMsQ0FBQSxPQUFELEdBQVc7SUFDWCxJQUFDLENBQUEsYUFBRCxHQUFpQjtJQUNqQixJQUFDLENBQUEsTUFBRCxHQUFVO0lBQ1YsSUFBQyxDQUFBLFNBQUQsR0FBYTtJQUNiLElBQUMsQ0FBQSxrQkFBRCxHQUFzQjtJQUN0QixJQUFDLENBQUEsZUFBRCxHQUFtQjtNQUFDLE1BQUEsRUFBTyxFQUFSOztJQUVuQixJQUFDLENBQUEsaUJBQUQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxhQUFELENBQUE7SUFDQSxJQUFDLENBQUEsa0JBQUQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxZQUFELENBQUE7SUFDQSxJQUFxQixJQUFDLENBQUEsT0FBTyxDQUFDLFFBQTlCO01BQUEsSUFBQyxDQUFBLGNBQUQsQ0FBQSxFQUFBOztJQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsYUFBSixHQUFvQjtFQXRCUjs7eUJBeUJiLE1BQUEsR0FBUSxTQUFBO0FBQ1AsUUFBQTtJQUFBLE1BQUEsR0FBUyxDQUFDLElBQUMsQ0FBQSxJQUFGLEVBQVEsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLENBQWtCLGNBQWxCLENBQUEsQ0FBa0MsSUFBQyxDQUFBLE9BQW5DLENBQVI7SUFDVCxRQUFBLEdBQVcsSUFBQyxDQUFBO0FBQ1osU0FBQSwwQ0FBQTs7TUFBQSxNQUFNLENBQUMsSUFBUCxDQUFZLEtBQUssQ0FBQyxNQUFOLENBQUEsQ0FBWjtBQUFBO0FBQ0EsV0FBTztFQUpBOzs7Ozs7O0FBTVQ7OztFQUNBLFlBQVksQ0FBQyxPQUFROzs7QUFFckIsSUFBQSxDQUFLLFdBQUw7O0FBQ0EsSUFBQSxDQUFLLGNBQUw7O0FBQ0EsSUFBQSxDQUFLLFFBQUw7O0FBQ0EsSUFBQSxDQUFLLFVBQUw7O0FBQ0EsSUFBQSxDQUFLLG1CQUFMOztBQUNBLElBQUEsQ0FBSyw2QkFBTDs7QUFDQSxJQUFBLENBQUssZ0JBQUwiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBRdWlja0VsZW1lbnRcblx0Y29uc3RydWN0b3I6IChAdHlwZSwgQG9wdGlvbnMpLT5cblx0XHRAZWwgPSBAb3B0aW9ucy5leGlzdGluZyBvclxuXHRcdFx0aWYgQHR5cGUgaXMgJ3RleHQnIHRoZW4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoQG9wdGlvbnMudGV4dClcblx0XHRcdGVsc2UgaWYgQHR5cGVbMF0gaXMgJyonIHRoZW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgQHR5cGUuc2xpY2UoMSkpXG5cdFx0XHRlbHNlIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoQHR5cGUpXG5cblx0XHRpZiBAdHlwZSBpcyAndGV4dCdcblx0XHRcdEBhcHBlbmQgPSBAcHJlcGVuZCA9IEBhdHRyID0gKCktPlxuXG5cdFx0QF9wYXJlbnQgPSBudWxsXG5cdFx0QF9zdHlsZXMgPSB7fVxuXHRcdEBfc3R5bGVzU2hhcmVkID0gW11cblx0XHRAX3N0YXRlID0gW11cblx0XHRAX2NoaWxkcmVuID0gW11cblx0XHRAX2luc2VydGVkQ2FsbGJhY2tzID0gW11cblx0XHRAX2V2ZW50Q2FsbGJhY2tzID0ge19fcmVmczp7fX1cblx0XHRcblx0XHRAX25vcm1hbGl6ZU9wdGlvbnMoKVxuXHRcdEBfYXBwbHlPcHRpb25zKClcblx0XHRAX2F0dGFjaFN0YXRlRXZlbnRzKClcblx0XHRAX3Byb3h5UGFyZW50KClcblx0XHRAX3JlZnJlc2hQYXJlbnQoKSBpZiBAb3B0aW9ucy5leGlzdGluZ1xuXHRcdEBlbC5fcXVpY2tFbGVtZW50ID0gQFxuXG5cblx0dG9KU09OOiAoKS0+XG5cdFx0b3V0cHV0ID0gW0B0eXBlLCBleHRlbmQuY2xvbmUua2V5cyhhbGxvd2VkT3B0aW9ucykoQG9wdGlvbnMpXVxuXHRcdGNoaWxkcmVuID0gQGNoaWxkcmVuXG5cdFx0b3V0cHV0LnB1c2goY2hpbGQudG9KU09OKCkpIGZvciBjaGlsZCBpbiBjaGlsZHJlblxuXHRcdHJldHVybiBvdXRwdXRcblxuIyMjIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICMjI1xuUXVpY2tFbGVtZW50Lm5hbWUgPz0gJ1F1aWNrRWxlbWVudCdcblxuXyRzbSgnLi9hbGlhc2VzJyApXG5fJHNtKCcuL3RyYXZlcnNpbmcnIClcbl8kc20oJy4vaW5pdCcgKVxuXyRzbSgnLi9ldmVudHMnIClcbl8kc20oJy4vc3RhdGUtYW5kLXN0eWxlJyApXG5fJHNtKCcuL2F0dHJpYnV0ZXMtYW5kLXByb3BlcnRpZXMnIClcbl8kc20oJy4vbWFuaXB1bGF0aW9uJyApXG4iXX0=
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

var QuickTemplate, configSchema, pholderRegex,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5kVGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleHRlbmRUZW1wbGF0ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxjQUFBLEdBQWlCLFNBQUMsV0FBRCxFQUFjLE9BQWQsRUFBdUIsVUFBdkI7QUFDaEIsTUFBQTtFQUFBLElBQUcsVUFBSDtJQUFtQixtQkFBQSxHQUFzQjtNQUFBLE9BQUEsRUFBUyxTQUFDLElBQUQ7ZUFBUyxNQUFBLENBQU8sSUFBUCxFQUFhLFVBQWI7TUFBVCxDQUFUO01BQXpDOztFQUNBLElBQXVDLEVBQUUsQ0FBQyxLQUFILENBQVMsT0FBVCxDQUF2QztJQUFBLE9BQUEsR0FBVSxTQUFBLENBQVUsT0FBVixFQUFtQixLQUFuQixFQUFWOztFQUVBLE1BQUEsR0FBUyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQVosQ0FBb0IsVUFBcEIsQ0FBK0IsQ0FBQyxPQUFoQyxDQUF3QyxpQkFBeEMsQ0FBMEQsQ0FBQyxTQUEzRCxDQUFxRSxtQkFBckUsQ0FBeUYsQ0FBQyxLQUExRixDQUFnRyxXQUFoRyxFQUE2RyxPQUE3RztFQUNULGVBQUEsR0FBa0IsV0FBVyxDQUFDO0VBQzlCLFdBQUEsc0JBQWMsT0FBTyxDQUFFLGtCQUFULElBQXFCO0VBQ25DLE1BQU0sQ0FBQyxRQUFQLEdBQWtCOztBQUVsQjtFQUNBLElBQUcsRUFBRSxDQUFDLEtBQUgsQ0FBUyxXQUFULENBQUg7QUFDQyxTQUFhLDBJQUFiO01BQ0MsaUJBQUEsR0FBb0IsU0FBQSxHQUFZO01BQ2hDLFlBQUEsR0FBZSxlQUFnQixDQUFBLEtBQUE7TUFDL0IsUUFBQSxHQUFXLFdBQVksQ0FBQSxLQUFBO01BQ3ZCLGlCQUFBO0FBQW9CLGdCQUFBLEtBQUE7QUFBQSxnQkFDZCxFQUFFLENBQUMsUUFBSCxDQUFZLFFBQVosQ0FEYzttQkFDYTtBQURiLGdCQUVkLEVBQUUsQ0FBQyxLQUFILENBQVMsUUFBVCxDQUZjO21CQUVVLGlCQUFBLEdBQW9CLFNBQUEsQ0FBVSxRQUFWLEVBQW9CLEtBQXBCO0FBRjlCLGdCQUdkLEVBQUUsQ0FBQyxNQUFILENBQVUsUUFBVixDQUhjO21CQUdXLGlCQUFBLEdBQW9CO2NBQUMsSUFBQSxFQUFLLE1BQU47Y0FBYyxPQUFBLEVBQVE7Z0JBQUMsSUFBQSxFQUFLLFFBQU47ZUFBdEI7O0FBSC9CLGlCQUlkLENBQUksUUFBSixJQUFpQixDQUFJLFdBSlA7bUJBSXVCLFNBQUEsR0FBWTtBQUpuQzttQkFLZCxpQkFBQSxHQUFvQixRQUFBLElBQVk7QUFMbEI7O01BUXBCLElBQUcsU0FBSDtRQUNDLGlCQUFBLEdBQW9CLGFBRHJCO09BQUEsTUFHSyxJQUFHLGlCQUFIO1FBQ0osaUJBQUEsR0FDSSxZQUFILEdBQ0MsWUFBWSxDQUFDLE1BQWIsQ0FBb0IsaUJBQXBCLEVBQXVDLFVBQXZDLENBREQsR0FHQyxJQUFJLGFBQUosQ0FBa0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFaLENBQWtCLFlBQWxCLEVBQWdDLGlCQUFoQyxDQUFsQixFQUxFOztNQU9MLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBaEIsQ0FBcUIsaUJBQXJCO0FBdEJELEtBREQ7R0FBQSxNQTBCSyxJQUFHLEVBQUUsQ0FBQyxNQUFILENBQVUsV0FBVixDQUFIO0lBQ0osTUFBTSxDQUFDLFFBQVAsR0FBa0IsV0FBQSxDQUFZLFdBQVosRUFBeUIsZUFBekIsRUFBMEMsVUFBMUM7SUFDbEIsb0JBQUEsR0FBdUI7QUFFdkIsU0FBQSwyQkFBQTs7TUFDQyxpQkFBQSxHQUF1QixFQUFFLENBQUMsV0FBSCxDQUFlLGlCQUFmLENBQUgsR0FBMEMsUUFBMUMsR0FBd0QsU0FBQSxDQUFVLFFBQVY7TUFDNUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFoQixDQUFxQixJQUFJLGFBQUosQ0FBa0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFaLENBQWtCLFlBQWxCLEVBQWdDLGlCQUFoQyxDQUFsQixDQUFyQjtNQUNBLE9BQU8sb0JBQXFCLENBQUEsR0FBQTtBQUg3QixLQUpJOztBQVVMLFNBQU87QUE5Q1M7O0FBaURqQixXQUFBLEdBQWMsU0FBQyxlQUFELEVBQWtCLGVBQWxCLEVBQW1DLFVBQW5DO0FBQWlELE1BQUE7RUFBQSxJQUFHLENBQUksZUFBZSxDQUFDLE1BQXZCO1dBQW1DLGdCQUFuQztHQUFBLE1BQUE7SUFDOUQsTUFBQSxHQUFTO0FBRVQsU0FBQSxpREFBQTs7TUFDQyxJQUFHLFFBQUEsR0FBUyxlQUFnQixDQUFBLFlBQVksQ0FBQyxHQUFiLENBQTVCO1FBQ0MsaUJBQUEsR0FBb0IsWUFBWSxDQUFDLE1BQWIsQ0FBb0IsUUFBcEIsRUFBOEIsVUFBOUI7UUFDcEIsT0FBTyxlQUFnQixDQUFBLFlBQVksQ0FBQyxHQUFiLEVBRnhCO09BQUEsTUFBQTtRQUlDLGlCQUFBLEdBQXVCLFVBQUgsR0FBbUIsWUFBWSxDQUFDLE1BQWIsQ0FBb0IsSUFBcEIsRUFBMEIsVUFBMUIsQ0FBbkIsR0FBOEQsYUFKbkY7O01BTUEsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQTFCLEdBQXFDLGNBQUEsR0FBaUIsV0FBQSxDQUFZLGVBQVosRUFBNkIsaUJBQWlCLENBQUMsUUFBL0M7TUFDdEQsTUFBTSxDQUFDLElBQVAsQ0FBWSxpQkFBWjtBQVJEO0FBVUEsV0FBTyxPQWJ1RDs7QUFBakQiLCJzb3VyY2VzQ29udGVudCI6WyJleHRlbmRUZW1wbGF0ZSA9IChjdXJyZW50T3B0cywgbmV3T3B0cywgZ2xvYmFsT3B0cyktPlxuXHRpZiBnbG9iYWxPcHRzIHRoZW4gZ2xvYmFsT3B0c1RyYW5zZm9ybSA9IG9wdGlvbnM6IChvcHRzKS0+IGV4dGVuZChvcHRzLCBnbG9iYWxPcHRzKVxuXHRuZXdPcHRzID0gcGFyc2VUcmVlKG5ld09wdHMsIGZhbHNlKSBpZiBJUy5hcnJheShuZXdPcHRzKVxuXG5cdG91dHB1dCA9IGV4dGVuZC5kZWVwLm5vdEtleXMoJ2NoaWxkcmVuJykubm90RGVlcCgncmVsYXRlZEluc3RhbmNlJykudHJhbnNmb3JtKGdsb2JhbE9wdHNUcmFuc2Zvcm0pLmNsb25lKGN1cnJlbnRPcHRzLCBuZXdPcHRzKVxuXHRjdXJyZW50Q2hpbGRyZW4gPSBjdXJyZW50T3B0cy5jaGlsZHJlblxuXHRuZXdDaGlsZHJlbiA9IG5ld09wdHM/LmNoaWxkcmVuIG9yIFtdXG5cdG91dHB1dC5jaGlsZHJlbiA9IFtdXG5cdFxuXHQjIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5cdGlmIElTLmFycmF5KG5ld0NoaWxkcmVuKVxuXHRcdGZvciBpbmRleCBpbiBbMC4uLk1hdGgubWF4KGN1cnJlbnRDaGlsZHJlbi5sZW5ndGgsIG5ld0NoaWxkcmVuLmxlbmd0aCldXG5cdFx0XHRuZWVkc1RlbXBsYXRlV3JhcCA9IG5vQ2hhbmdlcyA9IGZhbHNlXG5cdFx0XHRjdXJyZW50Q2hpbGQgPSBjdXJyZW50Q2hpbGRyZW5baW5kZXhdXG5cdFx0XHRuZXdDaGlsZCA9IG5ld0NoaWxkcmVuW2luZGV4XVxuXHRcdFx0bmV3Q2hpbGRQcm9jZXNzZWQgPSBzd2l0Y2hcblx0XHRcdFx0d2hlbiBJUy50ZW1wbGF0ZShuZXdDaGlsZCkgdGhlbiBuZXdDaGlsZFxuXHRcdFx0XHR3aGVuIElTLmFycmF5KG5ld0NoaWxkKSB0aGVuIG5lZWRzVGVtcGxhdGVXcmFwID0gcGFyc2VUcmVlKG5ld0NoaWxkLCBmYWxzZSlcblx0XHRcdFx0d2hlbiBJUy5zdHJpbmcobmV3Q2hpbGQpIHRoZW4gbmVlZHNUZW1wbGF0ZVdyYXAgPSB7dHlwZTondGV4dCcsIG9wdGlvbnM6e3RleHQ6bmV3Q2hpbGR9fVxuXHRcdFx0XHR3aGVuIG5vdCBuZXdDaGlsZCBhbmQgbm90IGdsb2JhbE9wdHMgdGhlbiBub0NoYW5nZXMgPSB0cnVlXG5cdFx0XHRcdGVsc2UgbmVlZHNUZW1wbGF0ZVdyYXAgPSBuZXdDaGlsZCBvciB0cnVlXG5cblxuXHRcdFx0aWYgbm9DaGFuZ2VzXG5cdFx0XHRcdG5ld0NoaWxkUHJvY2Vzc2VkID0gY3VycmVudENoaWxkXG5cdFx0XHRcblx0XHRcdGVsc2UgaWYgbmVlZHNUZW1wbGF0ZVdyYXBcblx0XHRcdFx0bmV3Q2hpbGRQcm9jZXNzZWQgPSBcblx0XHRcdFx0XHRpZiBjdXJyZW50Q2hpbGRcblx0XHRcdFx0XHRcdGN1cnJlbnRDaGlsZC5leHRlbmQobmV3Q2hpbGRQcm9jZXNzZWQsIGdsb2JhbE9wdHMpXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0bmV3IFF1aWNrVGVtcGxhdGUoZXh0ZW5kLmRlZXAuY2xvbmUoY29uZmlnU2NoZW1hLCBuZXdDaGlsZFByb2Nlc3NlZCkpXG5cblx0XHRcdG91dHB1dC5jaGlsZHJlbi5wdXNoIG5ld0NoaWxkUHJvY2Vzc2VkXG5cdFxuXHRcblx0ZWxzZSBpZiBJUy5vYmplY3QobmV3Q2hpbGRyZW4pXG5cdFx0b3V0cHV0LmNoaWxkcmVuID0gZXh0ZW5kQnlSZWYobmV3Q2hpbGRyZW4sIGN1cnJlbnRDaGlsZHJlbiwgZ2xvYmFsT3B0cylcblx0XHRyZW1haW5pbmdOZXdDaGlsZHJlbiA9IG5ld0NoaWxkcmVuXG5cdFx0XG5cdFx0Zm9yIHJlZixuZXdDaGlsZCBvZiByZW1haW5pbmdOZXdDaGlsZHJlblxuXHRcdFx0bmV3Q2hpbGRQcm9jZXNzZWQgPSBpZiBJUy5vYmplY3RQbGFpbihuZXdDaGlsZFByb2Nlc3NlZCkgdGhlbiBuZXdDaGlsZCBlbHNlIHBhcnNlVHJlZShuZXdDaGlsZClcblx0XHRcdG91dHB1dC5jaGlsZHJlbi5wdXNoIG5ldyBRdWlja1RlbXBsYXRlIGV4dGVuZC5kZWVwLmNsb25lKGNvbmZpZ1NjaGVtYSwgbmV3Q2hpbGRQcm9jZXNzZWQpXG5cdFx0XHRkZWxldGUgcmVtYWluaW5nTmV3Q2hpbGRyZW5bcmVmXVxuXHRcdFxuXG5cdHJldHVybiBvdXRwdXRcblxuXG5leHRlbmRCeVJlZiA9IChuZXdDaGlsZHJlblJlZnMsIGN1cnJlbnRDaGlsZHJlbiwgZ2xvYmFsT3B0cyktPiBpZiBub3QgY3VycmVudENoaWxkcmVuLmxlbmd0aCB0aGVuIGN1cnJlbnRDaGlsZHJlbiBlbHNlXG5cdG91dHB1dCA9IFtdXG5cdFxuXHRmb3IgY3VycmVudENoaWxkIGluIGN1cnJlbnRDaGlsZHJlblxuXHRcdGlmIG5ld0NoaWxkPW5ld0NoaWxkcmVuUmVmc1tjdXJyZW50Q2hpbGQucmVmXVxuXHRcdFx0bmV3Q2hpbGRQcm9jZXNzZWQgPSBjdXJyZW50Q2hpbGQuZXh0ZW5kKG5ld0NoaWxkLCBnbG9iYWxPcHRzKVxuXHRcdFx0ZGVsZXRlIG5ld0NoaWxkcmVuUmVmc1tjdXJyZW50Q2hpbGQucmVmXVxuXHRcdGVsc2Vcblx0XHRcdG5ld0NoaWxkUHJvY2Vzc2VkID0gaWYgZ2xvYmFsT3B0cyB0aGVuIGN1cnJlbnRDaGlsZC5leHRlbmQobnVsbCwgZ2xvYmFsT3B0cykgZWxzZSBjdXJyZW50Q2hpbGRcblxuXHRcdG5ld0NoaWxkUHJvY2Vzc2VkLl9jb25maWcuY2hpbGRyZW4gPSB0aGVOZXdDaGlsZHJlbiA9IGV4dGVuZEJ5UmVmKG5ld0NoaWxkcmVuUmVmcywgbmV3Q2hpbGRQcm9jZXNzZWQuY2hpbGRyZW4pXG5cdFx0b3V0cHV0LnB1c2gobmV3Q2hpbGRQcm9jZXNzZWQpXG5cblx0cmV0dXJuIG91dHB1dFxuXG5cblxuXG4iXX0=
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VUcmVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyc2VUcmVlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLFNBQUEsR0FBWSxTQUFDLElBQUQsRUFBTyxhQUFQO0FBQXdCLE1BQUE7QUFBQSxVQUFBLEtBQUE7QUFBQSxVQUM5QixFQUFFLENBQUMsS0FBSCxDQUFTLElBQVQsQ0FEOEI7TUFFbEMsTUFBQSxHQUFTO01BRVQsSUFBRyxDQUFJLEVBQUUsQ0FBQyxNQUFILENBQVUsSUFBSyxDQUFBLENBQUEsQ0FBZixDQUFQO0FBQ0MsY0FBTSxJQUFJLEtBQUosQ0FBYSxnQkFBRCxHQUFrQiwyQkFBbEIsR0FBNEMsQ0FBQyxNQUFBLENBQU8sSUFBSyxDQUFBLENBQUEsQ0FBWixDQUFELENBQTVDLEdBQTZELEdBQXpFLEVBRFA7T0FBQSxNQUFBO1FBR0MsTUFBTSxDQUFDLElBQVAsR0FBYyxJQUFLLENBQUEsQ0FBQSxFQUhwQjs7TUFLQSxJQUFHLElBQUksQ0FBQyxNQUFMLEdBQWMsQ0FBZCxJQUFvQixDQUFJLEVBQUUsQ0FBQyxNQUFILENBQVUsSUFBSyxDQUFBLENBQUEsQ0FBZixDQUF4QixJQUErQyxJQUFLLENBQUEsQ0FBQSxDQUFMLEtBQWEsSUFBL0Q7QUFDQyxjQUFNLElBQUksS0FBSixDQUFhLGdCQUFELEdBQWtCLDhCQUFsQixHQUErQyxDQUFDLE1BQUEsQ0FBTyxJQUFLLENBQUEsQ0FBQSxDQUFaLENBQUQsQ0FBL0MsR0FBZ0UsR0FBNUUsRUFEUDtPQUFBLE1BQUE7UUFHQyxNQUFNLENBQUMsT0FBUCxHQUFvQixJQUFLLENBQUEsQ0FBQSxDQUFSLEdBQWdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBWixDQUFrQixJQUFLLENBQUEsQ0FBQSxDQUF2QixDQUFoQixHQUFnRDtRQUNqRSxJQUEwQyxJQUFLLENBQUEsQ0FBQSxDQUEvQztVQUFBLE1BQU0sQ0FBQyxHQUFQLEdBQWEsSUFBSyxDQUFBLENBQUEsQ0FBRSxDQUFDLEVBQVIsSUFBYyxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsSUFBbkM7U0FKRDs7TUFNQSxNQUFNLENBQUMsUUFBUCxHQUFrQixJQUFJLENBQUMsS0FBTCxDQUFXLENBQVg7TUFDbEIsSUFBRyxhQUFBLEtBQWlCLEtBQXBCO1FBQ0MsSUFBNkIsSUFBSSxDQUFDLE1BQUwsS0FBZSxDQUFmLElBQXFCLEVBQUUsQ0FBQyxXQUFILENBQWUsSUFBSyxDQUFBLENBQUEsQ0FBcEIsQ0FBckIsSUFBaUQsQ0FBSSxFQUFFLENBQUMsUUFBSCxDQUFZLElBQUssQ0FBQSxDQUFBLENBQWpCLENBQWxGO1VBQUEsTUFBTSxDQUFDLFFBQVAsR0FBa0IsSUFBSyxDQUFBLENBQUEsRUFBdkI7U0FERDtPQUFBLE1BQUE7UUFHQyxNQUFNLENBQUMsUUFBUCxHQUFrQixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQWhCLENBQW9CLFFBQVEsQ0FBQyxRQUE3QixFQUhuQjs7QUFJQSxhQUFPO0FBcEIyQixXQXVCOUIsRUFBRSxDQUFDLE1BQUgsQ0FBVSxJQUFWLENBQUEsSUFBbUIsRUFBRSxDQUFDLE9BQUgsQ0FBVyxJQUFYLEVBdkJXO2FBd0JsQztRQUFBLElBQUEsRUFBSyxNQUFMO1FBQWEsT0FBQSxFQUFRO1VBQUMsSUFBQSxFQUFNLElBQUksQ0FBQyxXQUFMLElBQW9CLElBQTNCO1NBQXJCO1FBQXVELFFBQUEsRUFBUyxZQUFZLENBQUMsUUFBN0U7O0FBeEJrQyxVQTBCOUIsRUFBRSxDQUFDLEtBQUgsQ0FBUyxJQUFULENBMUI4QjthQTJCbEM7UUFBQSxJQUFBLEVBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFkLENBQUEsQ0FBTjtRQUNBLEdBQUEsRUFBSyxJQUFJLENBQUMsRUFEVjtRQUVBLE9BQUEsRUFBUyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWIsQ0FBa0Isc0JBQWxCLENBQUEsQ0FBMEMsSUFBMUMsQ0FGVDtRQUdBLFFBQUEsRUFBVSxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUExQixDQUErQixJQUFJLENBQUMsVUFBcEMsRUFBZ0QsUUFBUSxDQUFDLFFBQXpELENBSFY7O0FBM0JrQyxVQWdDOUIsRUFBRSxDQUFDLFVBQUgsQ0FBYyxJQUFkLENBaEM4QjthQWlDbEM7UUFBQSxJQUFBLEVBQU0sSUFBSSxDQUFDLElBQVg7UUFDQSxHQUFBLEVBQUssSUFBSSxDQUFDLEdBRFY7UUFFQSxPQUFBLEVBQVMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBbEIsQ0FBMEIsaUJBQTFCLENBQUEsQ0FBNkMsSUFBSSxDQUFDLE9BQWxELENBRlQ7UUFHQSxRQUFBLEVBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFkLENBQWtCLFFBQVEsQ0FBQyxRQUEzQixDQUhWOztBQWpDa0MsVUFzQzlCLEVBQUUsQ0FBQyxRQUFILENBQVksSUFBWixDQXRDOEI7YUF1Q2xDLGNBQUEsQ0FBZSxJQUFJLENBQUMsT0FBcEI7QUF2Q2tDO0FBMENsQyxZQUFNLElBQUksS0FBSixDQUFhLGdCQUFELEdBQWtCLDZEQUFsQixHQUE4RSxDQUFDLE1BQUEsQ0FBTyxJQUFQLENBQUQsQ0FBMUY7QUExQzRCO0FBQXhCOztBQStDWixnQkFBQSxHQUFtQiIsInNvdXJjZXNDb250ZW50IjpbInBhcnNlVHJlZSA9ICh0cmVlLCBwYXJzZUNoaWxkcmVuKS0+IHN3aXRjaFxuXHR3aGVuIElTLmFycmF5KHRyZWUpXG5cdFx0b3V0cHV0ID0ge31cblxuXHRcdGlmIG5vdCBJUy5zdHJpbmcodHJlZVswXSlcblx0XHRcdHRocm93IG5ldyBFcnJvciBcIiN7cGFyc2VFcnJvclByZWZpeH0gc3RyaW5nIGZvciAndHlwZScsIGdvdCAnI3tTdHJpbmcodHJlZVswXSl9J1wiXG5cdFx0ZWxzZVxuXHRcdFx0b3V0cHV0LnR5cGUgPSB0cmVlWzBdXG5cdFx0XG5cdFx0aWYgdHJlZS5sZW5ndGggPiAxIGFuZCBub3QgSVMub2JqZWN0KHRyZWVbMV0pIGFuZCB0cmVlWzFdIGlzbnQgbnVsbFxuXHRcdFx0dGhyb3cgbmV3IEVycm9yIFwiI3twYXJzZUVycm9yUHJlZml4fSBvYmplY3QgZm9yICdvcHRpb25zJywgZ290ICcje1N0cmluZyh0cmVlWzFdKX0nXCJcblx0XHRlbHNlXG5cdFx0XHRvdXRwdXQub3B0aW9ucyA9IGlmIHRyZWVbMV0gdGhlbiBleHRlbmQuZGVlcC5jbG9uZSh0cmVlWzFdKSBlbHNlIG51bGxcblx0XHRcdG91dHB1dC5yZWYgPSB0cmVlWzFdLmlkIG9yIHRyZWVbMV0ucmVmIGlmIHRyZWVbMV1cblxuXHRcdG91dHB1dC5jaGlsZHJlbiA9IHRyZWUuc2xpY2UoMilcblx0XHRpZiBwYXJzZUNoaWxkcmVuIGlzIGZhbHNlXG5cdFx0XHRvdXRwdXQuY2hpbGRyZW4gPSB0cmVlWzJdIGlmIHRyZWUubGVuZ3RoIGlzIDMgYW5kIElTLm9iamVjdFBsYWluKHRyZWVbMl0pIGFuZCBub3QgSVMudGVtcGxhdGUodHJlZVsyXSlcblx0XHRlbHNlXG5cdFx0XHRvdXRwdXQuY2hpbGRyZW4gPSBvdXRwdXQuY2hpbGRyZW4ubWFwKFF1aWNrRG9tLnRlbXBsYXRlKVxuXHRcdHJldHVybiBvdXRwdXRcblxuXG5cdHdoZW4gSVMuc3RyaW5nKHRyZWUpIG9yIElTLmRvbVRleHQodHJlZSlcblx0XHR0eXBlOid0ZXh0Jywgb3B0aW9uczp7dGV4dDogdHJlZS50ZXh0Q29udGVudCBvciB0cmVlfSwgY2hpbGRyZW46Y29uZmlnU2NoZW1hLmNoaWxkcmVuXG5cblx0d2hlbiBJUy5kb21FbCh0cmVlKVxuXHRcdHR5cGU6IHRyZWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXHRcdHJlZjogdHJlZS5pZFxuXHRcdG9wdGlvbnM6IGV4dGVuZC5jbG9uZS5rZXlzKGFsbG93ZWRUZW1wbGF0ZU9wdGlvbnMpKHRyZWUpXG5cdFx0Y2hpbGRyZW46IGNvbmZpZ1NjaGVtYS5jaGlsZHJlbi5tYXAuY2FsbCh0cmVlLmNoaWxkTm9kZXMsIFF1aWNrRG9tLnRlbXBsYXRlKVxuXG5cdHdoZW4gSVMucXVpY2tEb21FbCh0cmVlKVxuXHRcdHR5cGU6IHRyZWUudHlwZVxuXHRcdHJlZjogdHJlZS5yZWZcblx0XHRvcHRpb25zOiBleHRlbmQuY2xvbmUuZGVlcC5ub3RLZXlzKCdyZWxhdGVkSW5zdGFuY2UnKSh0cmVlLm9wdGlvbnMpXG5cdFx0Y2hpbGRyZW46IHRyZWUuY2hpbGRyZW4ubWFwKFF1aWNrRG9tLnRlbXBsYXRlKVxuXG5cdHdoZW4gSVMudGVtcGxhdGUodHJlZSlcblx0XHRleHRlbmRUZW1wbGF0ZSh0cmVlLl9jb25maWcpXG5cblx0ZWxzZVxuXHRcdHRocm93IG5ldyBFcnJvciBcIiN7cGFyc2VFcnJvclByZWZpeH0gKGFycmF5IHx8IHN0cmluZyB8fCBkb21FbCB8fCBxdWlja0RvbUVsIHx8IHRlbXBsYXRlKSwgZ290ICN7U3RyaW5nKHRyZWUpfVwiXG5cblxuXG5cbnBhcnNlRXJyb3JQcmVmaXggPSAnVGVtcGxhdGUgUGFyc2UgRXJyb3I6IGV4cGVjdGVkJyJdfQ==
;

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


/* istanbul ignore next */

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSx5Q0FBQTtFQUFBOztBQUFBLElBQUEsQ0FBSyxrQkFBTDs7QUFDQSxJQUFBLENBQUssYUFBTDs7QUFDQSxZQUFBLEdBQWU7O0FBQ2YsWUFBQSxHQUNDO0VBQUEsSUFBQSxFQUFNLEtBQU47RUFDQSxHQUFBLEVBQUssTUFETDtFQUVBLE9BQUEsRUFBUyxFQUZUO0VBR0EsUUFBQSxFQUFVLEVBSFY7OztBQUtLO0VBQ1EsdUJBQUMsTUFBRCxFQUFTLE1BQVQ7SUFDWixJQUFDLENBQUEsT0FBRCxHQUFjLE1BQUgsR0FBZSxTQUFBLENBQVUsTUFBVixDQUFmLEdBQXNDO0VBRHJDOzswQkFHYixLQUFBLEdBQU8sU0FBQyxTQUFELEVBQVksVUFBWjtBQUNOLFFBQUE7SUFBQSxJQUFHLFNBQUEsSUFBYSxVQUFoQjtNQUNDLElBQUEsR0FBTyxjQUFBLENBQWUsSUFBQyxDQUFBLE9BQWhCLEVBQXlCLFNBQXpCLEVBQW9DLFVBQXBDLEVBRFI7S0FBQSxNQUFBO01BR0MsSUFBQSxHQUFPLE1BQU0sQ0FBQyxLQUFQLENBQWEsSUFBQyxDQUFBLE9BQWQ7TUFDUCxJQUFJLENBQUMsT0FBTCxHQUFlLE1BQU0sQ0FBQyxRQUFQLENBQWdCLE9BQWhCLENBQXdCLENBQUMsS0FBekIsQ0FBK0IsSUFBSSxDQUFDLE9BQXBDLEVBSmhCOztBQU1BLFdBQU8sUUFBQSxhQUFTLENBQUEsSUFBSSxDQUFDLElBQUwsRUFBVyxJQUFJLENBQUMsT0FBUyxTQUFBLFdBQUEsSUFBSSxDQUFDLFFBQUwsQ0FBQSxDQUFsQztFQVBEOzswQkFTUCxNQUFBLEdBQVEsU0FBQyxTQUFELEVBQVksVUFBWjtXQUNQLElBQUksYUFBSixDQUFrQixjQUFBLENBQWUsSUFBQyxDQUFBLE9BQWhCLEVBQXlCLFNBQXpCLEVBQW9DLFVBQXBDLENBQWxCO0VBRE87Ozs7Ozs7QUFHVDs7O0VBQ0EsYUFBYSxDQUFDLE9BQVE7OztBQUd0QixNQUFNLENBQUMsSUFBUCxDQUFZLFlBQVosQ0FBeUIsQ0FBQyxPQUExQixDQUFrQyxTQUFDLEdBQUQ7U0FDakMsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsYUFBYSxDQUFBLFNBQW5DLEVBQXVDLEdBQXZDLEVBQTRDO0lBQUEsR0FBQSxFQUFJLFNBQUE7YUFBSyxJQUFDLENBQUEsT0FBUSxDQUFBLEdBQUE7SUFBZCxDQUFKO0dBQTVDO0FBRGlDLENBQWxDOztBQUdBLE1BQU0sQ0FBQyxjQUFQLENBQXNCLGFBQWEsQ0FBQSxTQUFuQyxFQUF1QyxPQUF2QyxFQUFnRDtFQUFBLEdBQUEsRUFBSyxTQUFBO1dBQ3BELElBQUMsQ0FBQSxVQUFELElBQWUsYUFBQSxDQUFjLElBQWQ7RUFEcUMsQ0FBTDtDQUFoRCIsInNvdXJjZXNDb250ZW50IjpbIl8kc20oJy4vZXh0ZW5kVGVtcGxhdGUnIClcbl8kc20oJy4vcGFyc2VUcmVlJyApXG5waG9sZGVyUmVnZXggPSAvXFx7XFx7Lis/XFx9XFx9L2dcbmNvbmZpZ1NjaGVtYSA9IFxuXHR0eXBlOiAnZGl2J1xuXHRyZWY6IHVuZGVmaW5lZFxuXHRvcHRpb25zOiB7fVxuXHRjaGlsZHJlbjogW11cblxuY2xhc3MgUXVpY2tUZW1wbGF0ZVxuXHRjb25zdHJ1Y3RvcjogKGNvbmZpZywgaXNUcmVlKS0+XG5cdFx0QF9jb25maWcgPSBpZiBpc1RyZWUgdGhlbiBwYXJzZVRyZWUoY29uZmlnKSBlbHNlIGNvbmZpZ1xuXG5cdHNwYXduOiAobmV3VmFsdWVzLCBnbG9iYWxPcHRzKS0+XG5cdFx0aWYgbmV3VmFsdWVzIG9yIGdsb2JhbE9wdHNcblx0XHRcdG9wdHMgPSBleHRlbmRUZW1wbGF0ZShAX2NvbmZpZywgbmV3VmFsdWVzLCBnbG9iYWxPcHRzKVxuXHRcdGVsc2Vcblx0XHRcdG9wdHMgPSBleHRlbmQuY2xvbmUoQF9jb25maWcpXG5cdFx0XHRvcHRzLm9wdGlvbnMgPSBleHRlbmQuZGVlcE9ubHkoJ3N0eWxlJykuY2xvbmUob3B0cy5vcHRpb25zKVxuXHRcblx0XHRyZXR1cm4gUXVpY2tEb20ob3B0cy50eXBlLCBvcHRzLm9wdGlvbnMsIG9wdHMuY2hpbGRyZW4uLi4pXG5cdFxuXHRleHRlbmQ6IChuZXdWYWx1ZXMsIGdsb2JhbE9wdHMpLT5cblx0XHRuZXcgUXVpY2tUZW1wbGF0ZSBleHRlbmRUZW1wbGF0ZShAX2NvbmZpZywgbmV3VmFsdWVzLCBnbG9iYWxPcHRzKVxuXG4jIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5RdWlja1RlbXBsYXRlLm5hbWUgPz0gJ1F1aWNrVGVtcGxhdGUnXG5cblxuT2JqZWN0LmtleXMoY29uZmlnU2NoZW1hKS5mb3JFYWNoIChrZXkpLT5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5IFF1aWNrVGVtcGxhdGU6Oiwga2V5LCBnZXQ6KCktPiBAX2NvbmZpZ1trZXldXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSBRdWlja1RlbXBsYXRlOjosICdjaGlsZCcsIGdldDogKCktPlxuXHRAX2NoaWxkUmVmcyBvciBfZ2V0Q2hpbGRSZWZzKEApICMgc291cmNlIGluIC9zcmMvcGFydHMvZWxlbWVudC90cmF2ZXJzaW5nLmNvZmZlZVxuXG5cblxuXG5cblxuXG5cbiJdfQ==
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

QuickDom.version = "1.0.37";

module.exports = QuickDom;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tkb20uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWlja2RvbS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxZQUFBLEdBQWU7OztBQUNmOztBQUNBLElBQUEsQ0FBSyxVQUFMLEVBQWdCLFVBQWhCOzs7QUFDQTs7QUFDQSxJQUFBLENBQUssY0FBTCxFQUFvQixhQUFwQjs7QUFDQSxJQUFBLENBQUssd0JBQUw7O0FBQ0EsSUFBQSxDQUFLLGlCQUFMOztBQUNBLElBQUEsQ0FBSyxnQkFBTDs7QUFDQSxJQUFBLENBQUssaUJBQUw7O0FBQ0EsSUFBQSxDQUFLLGdCQUFMOztBQUNBLElBQUEsQ0FBSyxvQkFBTDs7QUFFQSxRQUFBLEdBQVcsU0FBQTtBQUFLLE1BQUE7RUFBQSxJQUFBLEdBQUs7QUFBVyxVQUFBLEtBQUE7QUFBQSxVQUMxQixFQUFFLENBQUMsS0FBSCxDQUFTLElBQUssQ0FBQSxDQUFBLENBQWQsQ0FEMEI7QUFFOUIsYUFBTyxRQUFBLGFBQVMsSUFBSyxDQUFBLENBQUEsQ0FBZDtBQUZ1QixVQUkxQixFQUFFLENBQUMsUUFBSCxDQUFZLElBQUssQ0FBQSxDQUFBLENBQWpCLENBSjBCO0FBSzlCLGFBQU8sSUFBSyxDQUFBLENBQUEsQ0FBRSxDQUFDLEtBQVIsQ0FBQTtBQUx1QixVQU8xQixFQUFFLENBQUMsVUFBSCxDQUFjLElBQUssQ0FBQSxDQUFBLENBQW5CLENBUDBCO01BUXZCLElBQUcsSUFBSyxDQUFBLENBQUEsQ0FBUjtlQUFnQixJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsYUFBUixDQUFzQixJQUFLLENBQUEsQ0FBQSxDQUEzQixFQUFoQjtPQUFBLE1BQUE7ZUFBb0QsSUFBSyxDQUFBLENBQUEsRUFBekQ7O0FBUnVCLFdBVTFCLEVBQUUsQ0FBQyxPQUFILENBQVcsSUFBSyxDQUFBLENBQUEsQ0FBaEIsQ0FBQSxJQUF1QixFQUFFLENBQUMsTUFBSCxDQUFVLElBQUssQ0FBQSxDQUFBLENBQWYsRUFWRztNQVc5QixJQUFHLElBQUssQ0FBQSxDQUFBLENBQUUsQ0FBQyxhQUFYO0FBQ0MsZUFBTyxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsY0FEaEI7O01BR0EsSUFBQSxHQUFPLElBQUssQ0FBQSxDQUFBLENBQUUsQ0FBQyxRQUFRLENBQUMsV0FBakIsQ0FBQSxDQUE4QixDQUFDLE9BQS9CLENBQXVDLEdBQXZDLEVBQTRDLEVBQTVDO01BQ1AsT0FBQSxHQUFVLElBQUssQ0FBQSxDQUFBLENBQUwsSUFBVztNQUNyQixPQUFPLENBQUMsUUFBUixHQUFtQixJQUFLLENBQUEsQ0FBQTtBQUN4QixhQUFPLElBQUksWUFBSixDQUFpQixJQUFqQixFQUF1QixPQUF2QjtBQWpCdUIsU0FtQjFCLElBQUssQ0FBQSxDQUFBLENBQUwsS0FBVyxNQW5CZTtBQW9COUIsYUFBTztBQXBCdUIsVUFzQjFCLEVBQUUsQ0FBQyxNQUFILENBQVUsSUFBSyxDQUFBLENBQUEsQ0FBZixDQXRCMEI7TUF1QjlCLElBQUEsR0FBTyxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsV0FBUixDQUFBO01BQ1AsSUFBRyxJQUFBLEtBQVEsTUFBWDtRQUNDLE9BQUEsR0FBYSxFQUFFLENBQUMsTUFBSCxDQUFVLElBQUssQ0FBQSxDQUFBLENBQWYsQ0FBSCxHQUEyQixJQUFLLENBQUEsQ0FBQSxDQUFoQyxHQUF3QztVQUFDLElBQUEsRUFBSyxJQUFLLENBQUEsQ0FBQSxDQUFMLElBQVcsRUFBakI7VUFEbkQ7T0FBQSxNQUFBO1FBR0MsT0FBQSxHQUFhLEVBQUUsQ0FBQyxNQUFILENBQVUsSUFBSyxDQUFBLENBQUEsQ0FBZixDQUFILEdBQTJCLElBQUssQ0FBQSxDQUFBLENBQWhDLEdBQXdDLEdBSG5EOztNQUtBLE9BQUEsR0FBVSxJQUFJLFlBQUosQ0FBaUIsSUFBakIsRUFBdUIsT0FBdkI7TUFDVixJQUFHLElBQUksQ0FBQyxNQUFMLEdBQWMsQ0FBakI7UUFDQyxRQUFBLEdBQVc7UUFBSSxDQUFBLEdBQUk7UUFBRyxVQUFBLEdBQWEsSUFBSSxDQUFDO0FBQStCLGVBQU0sRUFBRSxDQUFGLEdBQU0sVUFBWjtVQUF2QixRQUFRLENBQUMsSUFBVCxDQUFjLElBQUssQ0FBQSxDQUFBLENBQW5CO1FBQXVCO0FBRXZFLGFBQUEsMENBQUE7O1VBQ0MsSUFBZ0MsRUFBRSxDQUFDLE1BQUgsQ0FBVSxLQUFWLENBQWhDO1lBQUEsS0FBQSxHQUFRLFFBQVEsQ0FBQyxJQUFULENBQWMsS0FBZCxFQUFSOztVQUNBLElBQTJCLEVBQUUsQ0FBQyxRQUFILENBQVksS0FBWixDQUEzQjtZQUFBLEtBQUEsR0FBUSxRQUFBLENBQVMsS0FBVCxFQUFSOztVQUNBLElBQThCLEVBQUUsQ0FBQyxLQUFILENBQVMsS0FBVCxDQUE5QjtZQUFBLEtBQUEsR0FBUSxRQUFBLGFBQVMsS0FBVCxFQUFSOztVQUNBLElBQTJCLEVBQUUsQ0FBQyxVQUFILENBQWMsS0FBZCxDQUEzQjtZQUFBLEtBQUssQ0FBQyxRQUFOLENBQWUsT0FBZixFQUFBOztBQUpELFNBSEQ7O0FBU0EsYUFBTztBQXZDdUI7QUFBckI7O0FBMENYLFFBQVEsQ0FBQyxRQUFULEdBQW9CLFNBQUMsSUFBRDtTQUNuQixJQUFJLGFBQUosQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEI7QUFEbUI7O0FBSXBCLFFBQVEsQ0FBQyxJQUFULEdBQWdCLFNBQUMsU0FBRDtBQUNmLE1BQUE7RUFBQSxTQUFBLEdBQVksUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkI7RUFDWixTQUFTLENBQUMsU0FBVixHQUFzQjtFQUN0QixRQUFBLEdBQVcsS0FBSyxDQUFBLFNBQUUsQ0FBQSxLQUFLLENBQUMsSUFBYixDQUFrQixTQUFTLENBQUMsVUFBNUI7QUFFWCxTQUFPLFFBQVEsQ0FBQyxLQUFULENBQWUsUUFBZjtBQUxROztBQWNoQixJQUFBLENBQUssZUFBTDs7QUFDQSxJQUFBLENBQUssa0JBQUw7O0FBQ0EsSUFBQSxDQUFLLG1CQUFMOztBQUNBLFFBQVEsQ0FBQyxPQUFULEdBQW1CLElBQUEsQ0FBSywyQkFBTDs7QUFDbkIsTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJzdmdOYW1lc3BhY2UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4jIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5fJHNtKCdxdWlja2NzcycsJyogYXMgQ1NTJyAgICApXG4jIyMgaXN0YW5idWwgaWdub3JlIG5leHQgIyMjXG5fJHNtKCdzbWFydC1leHRlbmQnLCcqIGFzIGV4dGVuZCcgICAgKVxuXyRzbSgnLi9wYXJ0cy9hbGxvd2VkT3B0aW9ucycgKVxuXyRzbSgnLi9wYXJ0cy9oZWxwZXJzJyApXG5fJHNtKCcuL3BhcnRzL2NoZWNrcycgKVxuXyRzbSgnLi9wYXJ0cy9lbGVtZW50JyApXG5fJHNtKCcuL3BhcnRzL3dpbmRvdycgKVxuXyRzbSgnLi9wYXJ0cy9tZWRpYVF1ZXJ5JyApXG5cblF1aWNrRG9tID0gKCktPiBhcmdzPWFyZ3VtZW50czsgc3dpdGNoXG5cdHdoZW4gSVMuYXJyYXkoYXJnc1swXSlcblx0XHRyZXR1cm4gUXVpY2tEb20oYXJnc1swXS4uLilcblx0XG5cdHdoZW4gSVMudGVtcGxhdGUoYXJnc1swXSlcblx0XHRyZXR1cm4gYXJnc1swXS5zcGF3bigpXG5cdFxuXHR3aGVuIElTLnF1aWNrRG9tRWwoYXJnc1swXSlcblx0XHRyZXR1cm4gaWYgYXJnc1sxXSB0aGVuIGFyZ3NbMF0udXBkYXRlT3B0aW9ucyhhcmdzWzFdKSBlbHNlIGFyZ3NbMF1cblx0XG5cdHdoZW4gSVMuZG9tTm9kZShhcmdzWzBdKSBvciBJUy5kb21Eb2MoYXJnc1swXSlcblx0XHRpZiBhcmdzWzBdLl9xdWlja0VsZW1lbnRcblx0XHRcdHJldHVybiBhcmdzWzBdLl9xdWlja0VsZW1lbnRcblx0XHRcblx0XHR0eXBlID0gYXJnc1swXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyMnLCAnJylcblx0XHRvcHRpb25zID0gYXJnc1sxXSBvciB7fVxuXHRcdG9wdGlvbnMuZXhpc3RpbmcgPSBhcmdzWzBdXG5cdFx0cmV0dXJuIG5ldyBRdWlja0VsZW1lbnQodHlwZSwgb3B0aW9ucylcblxuXHR3aGVuIGFyZ3NbMF0gaXMgd2luZG93XG5cdFx0cmV0dXJuIFF1aWNrV2luZG93XG5cblx0d2hlbiBJUy5zdHJpbmcoYXJnc1swXSlcdFx0XHRcblx0XHR0eXBlID0gYXJnc1swXS50b0xvd2VyQ2FzZSgpXG5cdFx0aWYgdHlwZSBpcyAndGV4dCdcblx0XHRcdG9wdGlvbnMgPSBpZiBJUy5vYmplY3QoYXJnc1sxXSkgdGhlbiBhcmdzWzFdIGVsc2Uge3RleHQ6YXJnc1sxXSBvciAnJ31cblx0XHRlbHNlXG5cdFx0XHRvcHRpb25zID0gaWYgSVMub2JqZWN0KGFyZ3NbMV0pIHRoZW4gYXJnc1sxXSBlbHNlIHt9XG5cdFx0XG5cdFx0ZWxlbWVudCA9IG5ldyBRdWlja0VsZW1lbnQodHlwZSwgb3B0aW9ucylcblx0XHRpZiBhcmdzLmxlbmd0aCA+IDJcblx0XHRcdGNoaWxkcmVuID0gW107IGkgPSAxOyBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7IGNoaWxkcmVuLnB1c2goYXJnc1tpXSkgd2hpbGUgKytpIDwgYXJnc0xlbmd0aFxuXG5cdFx0XHRmb3IgY2hpbGQgaW4gY2hpbGRyZW5cblx0XHRcdFx0Y2hpbGQgPSBRdWlja0RvbS50ZXh0KGNoaWxkKSBpZiBJUy5zdHJpbmcoY2hpbGQpXG5cdFx0XHRcdGNoaWxkID0gUXVpY2tEb20oY2hpbGQpIGlmIElTLnRlbXBsYXRlKGNoaWxkKVxuXHRcdFx0XHRjaGlsZCA9IFF1aWNrRG9tKGNoaWxkLi4uKSBpZiBJUy5hcnJheShjaGlsZClcblx0XHRcdFx0Y2hpbGQuYXBwZW5kVG8oZWxlbWVudCkgaWYgSVMucXVpY2tEb21FbChjaGlsZClcblxuXHRcdHJldHVybiBlbGVtZW50XG5cblxuUXVpY2tEb20udGVtcGxhdGUgPSAodHJlZSktPlxuXHRuZXcgUXVpY2tUZW1wbGF0ZSh0cmVlLCB0cnVlKVxuXG5cblF1aWNrRG9tLmh0bWwgPSAoaW5uZXJIVE1MKS0+XG5cdGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdGNvbnRhaW5lci5pbm5lckhUTUwgPSBpbm5lckhUTUxcblx0Y2hpbGRyZW4gPSBBcnJheTo6c2xpY2UuY2FsbCBjb250YWluZXIuY2hpbGROb2Rlc1xuXG5cdHJldHVybiBRdWlja0RvbS5iYXRjaChjaGlsZHJlbilcblxuXG5cblxuXG5cblxuXG5fJHNtKCcuL3BhcnRzL2JhdGNoJyApXG5fJHNtKCcuL3BhcnRzL3RlbXBsYXRlJyApXG5fJHNtKCcuL3BhcnRzL3Nob3J0Y3V0cycgKVxuUXVpY2tEb20udmVyc2lvbiA9IF8kc20oJy4uL3BhY2thZ2UuanNvbiAkIHZlcnNpb24nIClcbm1vZHVsZS5leHBvcnRzID0gUXVpY2tEb21cblxuXG5cbiJdfQ==
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
