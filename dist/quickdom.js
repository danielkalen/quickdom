var slice=[].slice;
(function(){var A,f,v,h,e,p,q,F,B,n,w,G,C,m,x,H,y,z,D,I,E;A=function(a){var b={exports:a};(function(){var a,d,l,g,f,e,t,h;g=["webkit","moz","ms","o"];e="backgroundPositionX backgroundPositionY blockSize borderWidth columnRuleWidth cx cy fontSize gridColumnGap gridRowGap height inlineSize lineHeight minBlockSize minHeight minInlineSize minWidth maxHeight maxWidth outlineOffset outlineWidth perspective shapeMargin strokeDashoffset strokeWidth textIndent width wordSpacing top bottom left right x y".split(" ");["margin",
"padding","border","borderRadius"].forEach(function(a){var b,c,d,l,g;e.push(a);l=["Top","Bottom","Left","Right"];g=[];c=0;for(d=l.length;c<d;c++)b=l[c],g.push(e.push(a+b));return g});h=document.createElement("div").style;a=/^\d+(?:[a-z]|\%)+$/i;d=/\d+$/;l=/\s/;t={In:function(a,b){return a&&-1!==a.indexOf(b)},isIterable:function(a){return a&&"object"===typeof a&&"number"===typeof a.length&&!a.nodeType},isPropSupported:function(a){return"undefined"!==typeof h[a]},toTitleCase:function(a){return a[0].toUpperCase()+
a.slice(1)},normalizeProperty:function(a){var b,c,d;if(this.isPropSupported(a))return a;d=this.toTitleCase(a);a=0;for(b=g.length;a<b;a++)if(c=g[a],c=""+c+d,this.isPropSupported(c))return c},normalizeValue:function(b,c){this.In(e,b)&&null!==c&&(c=""+c,!d.test(c)||a.test(c)||l.test(c)||(c+="px"));return c}};f=function(a,b,c){var d,l,g;if(t.isIterable(a))for(d=0,l=a.length;d<l;d++)g=a[d],f(g,b,c);else if("object"===typeof b)for(d in b)c=b[d],f(a,d,c);else{b=t.normalizeProperty(b);if("undefined"===
typeof c)return getComputedStyle(a)[b];b&&(a.style[b]=t.normalizeValue(b,c))}};f.version="1.0.5";return null!=("undefined"!==typeof b&&null!==b?b.exports:void 0)?b.exports=f:"function"===typeof define&&define.amd?define(["quickdom"],function(){return f}):this.Css=f})();return b.exports}.call(this,{});n=function(a){var b={exports:a},c=[].slice;(function(){var a;a=function(a){return function(a){var b,d,l,g,f;d=function(a){var b,c,l;b=function(a){return Array.isArray(a)};c=function(a){return a&&"[object Object]"===
Object.prototype.toString.call(a)||b(a)};l=function(a,b){return b.notDeep?-1!==b.notDeep.indexOf(a):!1};return a=d=function(a,g,f){var u,e,J,r,k,h;if(!g||"object"!==typeof g&&"function"!==typeof g)g={};u=0;for(J=f.length;u<J;u++)if(r=f[u],null!=r)for(e in r)if(k=r[e],h=g[e],!(k===g||void 0===k||null===k&&!a.allowNull||a.keys&&-1===a.keys.indexOf(e)||a.notKeys&&-1!==a.notKeys.indexOf(e)||a.own&&!r.hasOwnProperty(e)||a.globalFilter&&!a.globalFilter(k,e,r)||a.filters&&a.filters[e]&&!a.filters[e](k,e,
r)))switch(a.globalTransform&&(k=a.globalTransform(k,e,r)),a.transforms&&a.transforms[e]&&(k=a.transforms[e](k,e,r)),!1){case !(a.concat&&b(k)&&b(h)):g[e]=h.concat(k);break;case !(a.deep&&c(k)&&!l(e,a)):h=c(h)?h:b(k)?[]:{};g[e]=d(a,h,[k]);break;default:g[e]=k}return g}}({});f=function(a){var b,c,d;c={};for(b in a)d=a[b],c[b]=d;return c};g=function(a){if(a)return"object"!==typeof a||Array.isArray(a)?[].concat(a):Object.keys(a)};b=function(a){var b;b=a.target?function(){var a;a=1<=arguments.length?
c.call(arguments,0):[];return d(b.options,b.options.target,a)}:function(){var a,g;g=arguments[0];a=2<=arguments.length?c.call(arguments,1):[];return d(b.options,g,a)};b.options=a;Object.defineProperties(b,l);return b};l={deep:{get:function(){var a;a=f(this.options);a.deep=!0;return b(a)}},own:{get:function(){var a;a=f(this.options);a.own=!0;return b(a)}},allowNull:{get:function(){var a;a=f(this.options);a.allowNull=!0;return b(a)}},concat:{get:function(){var a;a=f(this.options);a.concat=!0;return b(a)}},
clone:{get:function(){var a;a=f(this.options);a.target={};return b(a)}},notDeep:{get:function(){var a;a=f(this.options);return function(c){a.notDeep=g(c);return b(a)}}},keys:{get:function(){var a;a=f(this.options);return function(c){a.keys=g(c);return b(a)}}},notKeys:{get:function(){var a;a=f(this.options);return function(c){a.notKeys=g(c);return b(a)}}},transform:{get:function(){var a;a=f(this.options);return function(c){"function"===typeof c?a.globalTransform=c:c&&"object"===typeof c&&(a.transforms=
c);return b(a)}}},filter:{get:function(){var a;a=f(this.options);return function(c){"function"===typeof c?a.globalFilter=c:c&&"object"===typeof c&&(a.filters=c);return b(a)}}}};return a=b({})}}(this)({});null!=("undefined"!==typeof b&&null!==b?b.exports:void 0)?b.exports=a:"function"===typeof define&&define.amd?define(["smart-extend"],function(){return a}):window.extend=a})();return b.exports}.call(this,{});F="className href selected type name id checked".split(" ");m={In:function(a,b){return a&&
-1!==a.indexOf(b)},R:function(a,b){var c;c=a.indexOf(b);-1!==c&&a.splice(c,1);return a},N:function(a){switch(!1){case !f.dN(a):return h(a);case !f.St(a):return h.text(a);default:return a}}};f=function(a){return function(a){return f=a={De:function(a){return void 0!==a},Ar:function(a){return a instanceof Array},Ob:function(a){return"object"===typeof a&&a},objectPlain:function(a){return f.Ob(a)&&"[object Object]"===Object.prototype.toString.call(a)},St:function(a){return"string"===
typeof a},Nu:function(a){return"number"===typeof a},"function":function(a){return"function"===typeof a},iT:function(a){return f.Ob(a)&&f.Nu(a.length)}}}}(this)({});f=n.clone(f,{domDoc:function(a){return a&&9===a.nodeType},dE:function(a){return a&&1===a.nodeType},dT:function(a){return a&&3===a.nodeType},dN:function(a){return f.dE(a)||f.dT(a)},qE:function(a){return a instanceof e},template:function(a){return a instanceof p}});e=function(a,b){this.type=
a;this.options=b;this.el=this.options.existing||("text"===this.type?document.createTextNode(this.options.text):"*"===this.type[0]?document.createElementNS("http://www.w3.org/2000/svg",this.type.slice(1)):document.createElement(this.type));"text"===this.type&&(this.append=this.prepend=this.attr=function(){});this._p=null;this._s=[];this._c=[];this._childRefs={};this._i=[];this._e={_R:{}};this._n();this._a();this._ae();
return this.el._quickElement=this};Object.defineProperties(e.prototype,{raw:{get:function(){return this.el}},0:{get:function(){return this.el}},css:{get:function(){return this.style}},replaceWith:{get:function(){return this.replace}}});e.prototype.parentsUntil=function(a){return C(this,a)};e.prototype.parentMatching=function(a){var b;if(f["function"](a))for(b=this.parent;b;){if(a(b))return b;b=b.parent}};Object.defineProperties(e.prototype,{children:{get:function(){var a,b,c,d;if(this.el.childNodes.length!==
this._c.length)for(this._c.length=0,d=this.el.childNodes,b=0,c=d.length;b<c;b++)a=d[b],4>a.nodeType&&this._c.push(h(a));return this._c}},parent:{get:function(){this._p&&this._p.el===this.el.parentNode||f.domDoc(this.el.parentNode)||(this._p=h(this.el.parentNode));return this._p}},parents:{get:function(){return C(this)}},next:{get:function(){return h(this.el.nextSibling)}},prev:{get:function(){return h(this.el.previousSibling)}},nextAll:{get:function(){var a,
b;b=[];for(a=h(this.el.nextSibling);a;)b.push(a),a=a.next;return b}},prevAll:{get:function(){var a,b;b=[];for(a=h(this.el.previousSibling);a;)b.push(a),a=a.prev;return b}},siblings:{get:function(){return this.prevAll.reverse().concat(this.nextAll)}}});C=function(a,b){var c,d;f["function"](b)||(b=void 0);d=[];for(c=a.parent;c;)d.push(c),c=c.parent,b&&b(c)&&(c=null);return d};e.prototype._n=function(){var a;null==(a=this.options).style&&(a.style={});this.options.sS={};this.options["class"]&&
(this.options.className=this.options["class"]);this.options.url&&(this.options.href=this.options.url);null==(a=this.options).relatedInstance&&(a.relatedInstance=this);null==(a=this.options).unpassableStates&&(a.unpassableStates=[]);null==(a=this.options).passStateToChildren&&(a.passStateToChildren=!0);this.options.stateTriggers=n.deep({hover:{on:"mouseenter",off:"mouseleave"},focus:{on:"focus",off:"blur"}},this.options.stateTriggers);this._ns();return this};e.prototype._ns=
function(){var a,b,c,d,l;b=Object.keys(this.options.style);c=b.filter(function(a){return"$"===a[0]});d=m.R(c.slice(),"$base");this.providedStates=c.map(function(a){return a.slice(1)});!m.In(c,"$base")&&b.length&&(c.length?(b=b.filter(function(a){return"$"!==a[0]}),this.options.style.$base=n.clone.keys(b)(this.options.style)):this.options.style={$base:this.options.style});a=function(b){return function(c,d){var l,g,f,e,k,r,h;f=Object.keys(c).filter(function(a){return"$"===a[0]});if(f.length){b.hS=
!0;null==b._sShared&&(b._sShared=[]);k=[];l=0;for(e=f.length;l<e;l++)g=f[l],r=d.concat(g.slice(1)),h=r.join("+"),b.options.sS[h]=b.options.style["$"+h]=c[g],a(c[g],r),k.push(delete c[g]);return k}}}(this);b=0;for(c=d.length;b<c;b++)l=d[b],a(this.options.style[l],[l.slice(1)]);return this};e.prototype._a=function(){var a,b,c,d;(c=this.options.id||this.options.ref)&&this.attr("data-ref",this.ref=c);this.options.id&&(this.el.id=this.options.id);this.options.className&&(this.el.className=
this.options.className);this.options.href&&(this.el.href=this.options.href);this.options.type&&(this.el.type=this.options.type);this.options.name&&(this.el.name=this.options.name);this.options.value&&(this.el.value=this.options.value);this.options.selected&&(this.el.selected=this.options.selected);this.options.checked&&(this.el.checked=this.options.checked);if(this.options.props)for(b in d=this.options.props,d)c=d[b],this.prop(b,c);if(this.options.attrs)for(b in d=this.options.attrs,d)c=d[b],this.attr(b,
c);if(this.options.styleAfterInsert)this.onInserted(a=function(b){return function(){var c;c=b.parents.slice(-1)[0];return c.raw===document.documentElement?b.style(n.clone.apply(n,[b.options.style.$base].concat(slice.call(b._ss(b._as()))))):c.onInserted(a)}}(this));else this.style(this.options.style.$base);Object.defineProperty(this,"_p",{set:function(a){var b,c,d;if(a)for(delete this._p,this._p=a,d=this._i,b=0,c=d.length;b<c;b++)a=d[b],a(this)}});
return this};e.prototype._ae=function(){var a,b,c,d;b=this.options.stateTriggers;a=function(a){return function(b,c){var d,g;g=f.St(c)?c:c.on;f.Ob(c)&&(d=c.off);a._l(g,function(){return a.state(b,!0)});if(d)return a._l(d,function(){return a.state(b,!1)})}}(this);for(c in b)d=b[c],a(c,d);return this};D=/\s+/;e.prototype.on=function(a,b){var c,d;f.St(a)&&f["function"](b)&&(d=a.split("."),c=d[1],a=d[0],a.split(D).forEach(function(a){return function(d){a._e[d]||
(a._e[d]=[],a._l(d,function(b){var c,f,e,g;g=a._e[d];f=0;for(e=g.length;f<e;f++)c=g[f],c.call(a.el,b)}));c&&(a._e._R[c]=b);return a._e[d].push(b)}}(this)));return this};e.prototype.off=function(a,b){var c,d;if(f.St(a))d=a.split("."),c=d[1],a=d[0],a.split(D).forEach(function(a){return function(d){if(a._e[d]){null==b&&(b=a._e._R[c]);if(f["function"](b))return m.R(a._e[d],b);if(!c)return a._e[d].length=
0}}}(this));else for(d in this._e)this.off(d);return this};e.prototype.emit=function(a,b,c){var d;null==b&&(b=!0);null==c&&(c=!0);a&&f.St(a)&&(d=document.createEvent("Event"),d.initEvent(a,b,c),this.el.dispatchEvent(d));return this};e.prototype.onInserted=function(a,b){null==b&&(b=!0);if(f["function"](a))return this._p?b&&a(this):this._i.push(a),this};e.prototype._l=function(a,b){this.el[this.el.addEventListener?"addEventListener":"attachEvent"](this.el.addEventListener?
a:"on"+a,b);return this};e.prototype.updateOptions=function(a){f.Ob(a)&&(this.options=a,this._n(),this._a(this.options));return this};e.prototype.state=function(a,b,c){var d,e,g,h,k,t,p,q,u;if(1===arguments.length)return m.In(this._s,a);if(this._sPipeTarget&&c!==this)return this._sPipeTarget.state(a,b,this),this;if(f.St(a)){"$"===a[0]&&(a=a.slice(1));g=!!b;if("base"===a)return this;e=this._as(a,!1);d=this._ss(e);this.state(a)!==
g&&(this.options.style["$"+a]&&(k=this.options.style["$"+a],u=this.providedStates.indexOf(a),e=e.filter(function(a){return function(b){return a.providedStates.indexOf(b)>u}}(this)),t=this._ss(e)),g?(this._s.push(a),k&&this.style(n.clone.keys(k).apply(null,[k].concat(slice.call(t))))):(m.R(this._s,a),k&&(h=n.clone.keys(k).apply(null,[this.options.style.$base].concat(slice.call(d))),k=n.transform(function(){return null}).clone(k),this.style(n(k,h)))));if(this.hS)for(p=
Object.keys(this.options.sS),p=p.filter(function(b){return m.In(b,a)}),e=0,t=p.length;e<t;e++)if(q=p[e],h=q.split("+"),k=h.length===h.filter(function(b){return function(c){return c===a||b.state(c)}}(this)).length)k=this.options.sS[q],g?(m.In(this._sShared,q)||this._sShared.push(q),h=this.options.sS[m.R(h,a).join("+")],this.style(n.clone(h,k))):(m.R(this._sShared,q),h=n.clone.keys(k).apply(null,[this.options.style.$base].concat(slice.call(d))),
k=n.transform(function(){return null}).clone(k),this.style(n(k,h)));if(this.options.passStateToChildren&&!m.In(this.options.unpassableStates,a))for(e=this._c,g=0,k=e.length;g<k;g++)d=e[g],d.state(a,b,c||this);return this}};e.prototype.resetState=function(){var a,b,c,d;d=this._s.slice();b=0;for(c=d.length;b<c;b++)a=d[b],this.state(a,!1);return this};e.prototype.pipeState=function(a){var b,c,d,e;if(a){if(a=m.N(a),f.qE(a)&&a!==this)for(this._sPipeTarget=a,
e=this._s,c=0,d=e.length;c<d;c++)b=e[c],a.state(b,!0)}else!1===a&&delete this._sPipeTarget;return this};e.prototype.style=function(){var a,b;if("text"!==this.type){a=arguments;if(f.St(a[0])){if(b=A(this.el,a[0],a[1]),!f.De(a[1]))return b}else f.Ob(a[0])&&A(this.el,n.allowNull.transform(function(a){return function(b){return"function"===typeof b?b.call(a,a.options.relatedInstance):b}}(this)).clone(a[0]));return this}};e.prototype.styleSafe=function(a,b){var c,d;if("text"!==this.type)return c=
arguments,d=this.style(a),f.St(d)?(b&&(d=0),d||this.el.style[c[0]]||this.options.style.$base[c[0]]||""):this};e.prototype._as=function(a,b){var c;null==b&&(b=!0);c=this.providedStates.filter(function(b){return function(c){return m.In(b._s,c)&&c!==a}}(this));return b&&this.hS?c.concat(this._sShared):c};e.prototype._ss=function(a){return a.map(function(a){return function(b){return a.options.style["$"+b]}}(this))};Object.defineProperty(e.prototype,
"rect",{get:function(){return this.el.getBoundingClientRect()}});e.prototype.attr=function(a,b){switch(b){case void 0:return this.el.getAttribute(a);case null:return this.el.removeAttribute(a);default:return this.el.setAttribute(a,b),this}};e.prototype.prop=function(a,b){switch(b){case void 0:return this.el[a];default:return this.el[a]=b,this}};e.prototype.toTemplate=function(){return h.template(this)};e.prototype.clone=function(){var a,b,c,d,f,g,h;c=this.el.cloneNode(!1);c=n.clone(this.options,{existing:c});
c=new e(this.type,c);g=this._s;b=0;for(f=g.length;b<f;b++)a=g[b],c.state(a,!0);g=this.children;b=0;for(f=g.length;b<f;b++)a=g[b],c.append(a.clone());h=this._e;for(d in h)for(b=h[d],f=0,g=b.length;f<g;f++)a=b[f],c.on(d,a);return c};e.prototype.append=function(a){var b;a&&(a=m.N(a),f.qE(a)&&((b=a.parent)&&b._r(a),this._c.push(a),this.el.appendChild(a.el),a.parent));return this};e.prototype.appendTo=function(a){a&&(a=m.N(a),f.qE(a)&&
a.append(this));return this};e.prototype.prepend=function(a){var b;a&&(a=m.N(a),f.qE(a)&&((b=a.parent)&&b._r(a),this._c.unshift(a),this.el.insertBefore(a.el,this.el.firstChild),a.parent));return this};e.prototype.prependTo=function(a){a&&(a=m.N(a),f.qE(a)&&a.prepend(this));return this};e.prototype.html=function(a){if(!f.De(a))return this.el.innerHTML;this.el.innerHTML=a;return this};e.prototype.text=function(a){if(!f.De(a))return this.el.textContent;
this.el.textContent=a;return this};e.prototype.after=function(a){var b;a&&this.parent&&(a=m.N(a),f.qE(a)&&(b=this.parent._c.indexOf(this),this.parent._c.splice(b+1,0,a),this.el.parentNode.insertBefore(a.el,this.el.nextSibling),a.parent));return this};e.prototype.insertAfter=function(a){a&&(a=m.N(a),f.qE(a)&&a.after(this));return this};e.prototype.before=function(a){var b;a&&this.parent&&(a=m.N(a),f.qE(a)&&(b=this.parent._c.indexOf(this),
this.parent._c.splice(b,0,a),this.el.parentNode.insertBefore(a.el,this.el),a.parent));return this};e.prototype.insertBefore=function(a){a&&(a=m.N(a),f.qE(a)&&a.before(this));return this};e.prototype.detach=function(){var a;null!=(a=this.parent)&&a._r(this);return this};e.prototype.remove=function(){var a;this.detach();this.resetState();for(a in this._e)this._e[a].length=0;return this};e.prototype.empty=function(){var a,b,c,d;d=this.children.slice();
b=0;for(c=d.length;b<c;b++)a=d[b],this._r(a);return this};e.prototype.wrap=function(a){var b;a&&(a=m.N(a),b=this.parent,f.qE(a)&&a!==this&&a!==this.parent&&(b&&b._r(this,a.parent?void 0:a),a.append(this)));return this};e.prototype.unwrap=function(){var a,b,c,d;if(b=this.parent)if(c=h.batch(b.children),d=b.next,a=b.parent)b.detach(),d?c.insertBefore(d):c.appendTo(a);return this};e.prototype.replace=function(a){var b;a&&(a=m.N(a),f.qE(a)&&
a!==this&&(a.detach(),null!=(b=this.parent)&&b._r(this,a)));return this};e.prototype._r=function(a,b){var c;c=this._c.indexOf(a);-1!==c&&(b?(this.el.replaceChild(b.el,a.el),this._c.splice(c,1,b)):(this.el.removeChild(a.el),this._c.splice(c,1)));return this};q={type:"window",el:window,raw:window,_e:{_R:{}}};q.on=e.prototype.on;q.off=e.prototype.off;q.emit=e.prototype.emit;q._l=e.prototype._l;h=function(){var a,b,c,d,l;a=1<=arguments.length?
slice.call(arguments,0):[];switch(!1){case !f.template(a[0]):return a[0].spawn();case !f.qE(a[0]):return a[1]?a[0].updateOptions(a[1]):a[0];case !(f.dN(a[0])||f.domDoc(a[0])):if(a[0]._quickElement)return a[0]._quickElement;c=a[0].nodeName.toLowerCase().replace("#","");b=a[1]||{};b.existing=a[0];return new e(c,b);case a[0]!==window:return q;case !f.St(a[0]):c=a[0].toLowerCase();b="text"===c?f.Ob(a[1])?a[1]:{text:a[1]||""}:f.Ob(a[1])?a[1]:{};a=a.slice(2);c=new e(c,b);d=0;for(l=
a.length;d<l;d++)b=a[d],f.St(b)&&(b=h.text(b)),f.template(b)&&(b=h(b)),f.qE(b)&&b.appendTo(c);return c}};h.template=function(a){return new p(a,!0)};v=function(a,b){this.elements=a;this.returnResults=b;this.elements=this.elements.map(function(a){return h(a)});return this};v.prototype.reverse=function(){this.elements=this.elements.reverse();return this};v.prototype["return"]=function(a){return a?(this.returnResults=!0,this):this.lastResults};Object.keys(e.prototype).concat("css","replaceWith").forEach(function(a){return v.prototype[a]=
function(){var b,c;c=this.lastResults=function(){var c,f,e,h;e=this.elements;h=[];c=0;for(f=e.length;c<f;c++)b=e[c],h.push(b[a].apply(b,arguments));return h}.apply(this,arguments);return this.returnResults?c:this}});h.batch=function(a,b){if(!f.iT(a))throw Error("Batch: expected an iT, got "+String(a));if(!a.length)throw Error("Batch: expected a non-empty element collection");return new v(a,b)};B={type:"div",options:{},children:[]};p=function(a,b){this._config=b?z(a):a;return this};Object.keys(B).forEach(function(a){return Object.defineProperty(p.prototype,
a,{get:function(){return this._config[a]}})});p.prototype.spawn=function(a,b){var c;c=w(this._config,a,b);return h.apply(null,[c.type,c.options].concat(slice.call(c.children)))};p.prototype.extend=function(a,b){return new p(w(this._config,a,b))};w=function(a,b,c){var d,e,g,h,k;c&&(d={options:function(a){return n(a,c)}});f.Ar(b)&&(b=z(b,!1));d=n.deep.notKeys("children").notDeep("relatedInstance").transform(d).clone(a,b);a=a.children||[];h=(null!=b?b.children:void 0)||[];d.children=[];g=e=0;for(k=
Math.max(a.length,h.length);0<=k?e<k:e>k;g=0<=k?++e:--e)b=a[g],g=h[g],f.Ar(g)&&(g=z(g,!1)),f.St(g)&&(g={type:"text",options:{text:g}}),b?d.children.push(b.extend(g,c)):d.children.push(new p(n.deep.clone(B,g)));return d};z=function(a,b){var c;switch(!1){case !f.Ar(a):c={};if(f.St(a[0]))c.type=a[0];else throw Error(y+" string for 'type', got '"+String(a[0])+"'");if(1<a.length&&!f.Ob(a[1])&&null!==a[1])throw Error(y+" object for 'options', got '"+String(a[1])+"'");c.options=a[1]?n.deep.clone(a[1]):
null;c.children=a.slice(2);!1!==b&&(c.children=c.children.map(h.template));return c;case !(f.St(a)||f.dT(a)):return{type:"text",options:{text:a.textContent||a}};case !f.dE(a):return{type:a.nodeName.toLowerCase(),options:n.clone.keys(F)(a),children:[].map.call(a.childNodes,h.template)};case !f.qE(a):return{type:a.type,options:n.clone.deep.notKeys("relatedInstance")(a.options),children:a.children.map(h.template)};case !f.template(a):return w(a._config);default:throw Error(y+" (array || string || dE || qE || template), got "+
String(a));}};y="Template Parse Error: expected";E="link:a anchor:a a text div span h1 h2 h3 h4 h5 h6 header footer section button br ul ol li fieldset input textarea select option form frame hr iframe img picture main nav meta object pre style table tbody th tr td tfoot video".split(" ");G=function(a){var b,c;b=c=a;m.In(a,":")&&(a=a.split(":"),b=a[0],c=a[1]);return h[b]=function(){return h.apply(null,[c].concat(slice.call(arguments)))}};x=0;for(H=E.length;x<H;x++)I=E[x],G(I);h.version="1.0.17";
return null!=("undefined"!==typeof module&&null!==module?module.exports:void 0)?module.exports=h:"function"===typeof define&&define.amd?define(["quickdom"],function(){return h}):this.Dom=h})();
