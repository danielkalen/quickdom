var slice=[].slice;
(function(){var y,d,t,h,e,q,C,z,m,v,D,A,l,w,E,x,F,G,B;y=function(a){var b={exports:a};(function(){var a,g,d,k,f,e,n,h;k=["webkit","moz","ms","o"];e="backgroundPositionX backgroundPositionY blockSize borderWidth columnRuleWidth cx cy fontSize gridColumnGap gridRowGap height inlineSize lineHeight minBlockSize minHeight minInlineSize minWidth maxHeight maxWidth outlineOffset outlineWidth perspective shapeMargin strokeDashoffset strokeWidth textIndent width wordSpacing top bottom left right x y".split(" ");["margin",
"padding","border","borderRadius"].forEach(function(a){var b,c,g,f,d;e.push(a);f=["Top","Bottom","Left","Right"];d=[];c=0;for(g=f.length;c<g;c++)b=f[c],d.push(e.push(a+b));return d});h=document.createElement("div").style;a=/^\d+(?:[a-z]|\%)+$/i;g=/\d+$/;d=/\s/;n={In:function(a,b){return a&&-1!==a.indexOf(b)},isIterable:function(a){return a&&"object"===typeof a&&"number"===typeof a.length&&!a.nodeType},isPropSupported:function(a){return"undefined"!==typeof h[a]},toTitleCase:function(a){return a[0].toUpperCase()+
a.slice(1)},normalizeProperty:function(a){var b,c,g;if(this.isPropSupported(a))return a;g=this.toTitleCase(a);a=0;for(b=k.length;a<b;a++)if(c=k[a],c=""+c+g,this.isPropSupported(c))return c},normalizeValue:function(b,c){this.In(e,b)&&null!==c&&(c=""+c,!g.test(c)||a.test(c)||d.test(c)||(c+="px"));return c}};f=function(a,b,c){var g,p,d;if(n.isIterable(a))for(g=0,p=a.length;g<p;g++)d=a[g],f(d,b,c);else if("object"===typeof b)for(g in b)c=b[g],f(a,g,c);else{b=n.normalizeProperty(b);if("undefined"===
typeof c)return getComputedStyle(a)[b];b&&(a.style[b]=n.normalizeValue(b,c))}};f.version="1.0.5";return null!=("undefined"!==typeof b&&null!==b?b.exports:void 0)?b.exports=f:"function"===typeof define&&define.amd?define(["quickdom"],function(){return f}):this.Css=f})();return b.exports}.call(this,{});m=function(a){var b={exports:a},c=[].slice;(function(){var a;a=function(a){return function(a){var b,g,d,k,e;g=function(a){var b,c,d;b=function(a){return Array.isArray(a)};c=function(a){return a&&"object"===
typeof a};d=function(a,b){return b.notDeep?-1!==b.notDeep.indexOf(a):!1};return a=g=function(a,p,e){var k,f,u,r,h,n;if(!p||"object"!==typeof p&&"function"!==typeof p)p={};k=0;for(u=e.length;k<u;k++)if(r=e[k],null!=r)for(f in r)if(h=r[f],n=p[f],!(h===p||void 0===h||null===h&&!a.allowNull||a.keys&&-1===a.keys.indexOf(f)||a.notKeys&&-1!==a.notKeys.indexOf(f)||a.own&&!r.hasOwnProperty(f)||a.globalFilter&&!a.globalFilter(h,f,r)||a.filters&&a.filters[f]&&!a.filters[f](h,f,r)))switch(a.globalTransform&&
(h=a.globalTransform(h,f,r)),a.transforms&&a.transforms[f]&&(h=a.transforms[f](h,f,r)),!1){case !(a.concat&&b(h)&&b(n)):p[f]=n.concat(h);break;case !(a.deep&&c(h)&&!d(f,a)):n=c(n)?n:b(h)?[]:{};p[f]=g(a,n,[h]);break;default:p[f]=h}return p}}({});e=function(a){var b,c,g;c={};for(b in a)g=a[b],c[b]=g;return c};k=function(a){if(a)return"object"!==typeof a||Array.isArray(a)?[].concat(a):Object.keys(a)};b=function(a){var b;b=a.target?function(){var a;a=1<=arguments.length?c.call(arguments,0):[];return g(b.options,
b.options.target,a)}:function(){var a,f;f=arguments[0];a=2<=arguments.length?c.call(arguments,1):[];return g(b.options,f,a)};b.options=a;Object.defineProperties(b,d);return b};d={deep:{get:function(){var a;a=e(this.options);a.deep=!0;return b(a)}},own:{get:function(){var a;a=e(this.options);a.own=!0;return b(a)}},allowNull:{get:function(){var a;a=e(this.options);a.allowNull=!0;return b(a)}},concat:{get:function(){var a;a=e(this.options);a.concat=!0;return b(a)}},clone:{get:function(){var a;a=e(this.options);
a.target={};return b(a)}},notDeep:{get:function(){var a;a=e(this.options);return function(c){a.notDeep=k(c);return b(a)}}},keys:{get:function(){var a;a=e(this.options);return function(c){a.keys=k(c);return b(a)}}},notKeys:{get:function(){var a;a=e(this.options);return function(c){a.notKeys=k(c);return b(a)}}},transform:{get:function(){var a;a=e(this.options);return function(c){"function"===typeof c?a.globalTransform=c:c&&"object"===typeof c&&(a.transforms=c);return b(a)}}},filter:{get:function(){var a;
a=e(this.options);return function(c){"function"===typeof c?a.globalFilter=c:c&&"object"===typeof c&&(a.filters=c);return b(a)}}}};return a=b({})}}(this)({});null!=("undefined"!==typeof b&&null!==b?b.exports:void 0)?b.exports=a:"function"===typeof define&&define.amd?define(["smart-extend"],function(){return a}):window.extend=a})();return b.exports}.call(this,{});C="className href selected type name id checked".split(" ");l={In:function(a,b){return a&&-1!==a.indexOf(b)},R:function(a,
b){var c;c=a.indexOf(b);-1!==c&&a.splice(c,1);return a},N:function(a){switch(!1){case !d.dN(a):return h(a);case !d.St(a):return h.text(a);default:return a}}};d=function(a){return function(a){return d=a={De:function(a){return void 0!==a},Ar:function(a){return a instanceof Array},Ob:function(a){return"object"===typeof a&&a},objectPlain:function(a){return d.Ob(a)&&"[object Object]"===Object.prototype.toString.call(a)},St:function(a){return"string"===typeof a},
Nu:function(a){return"number"===typeof a},"function":function(a){return"function"===typeof a},iT:function(a){return d.Ob(a)&&d.Nu(a.length)}}}}(this)({});d=m.clone(d,{dE:function(a){return a&&1===a.nodeType},dT:function(a){return a&&3===a.nodeType},dN:function(a){return d.dE(a)||d.dT(a)},qE:function(a){return a instanceof e},template:function(a){return a instanceof q}});e=function(a,b){this.type=a;this.options=b;this.el=this.options.existing||("text"===
this.type?document.createTextNode(this.options.text):"*"===this.type[0]?document.createElementNS("http://www.w3.org/2000/svg",this.type.slice(1)):document.createElement(this.type));this._p=null;this._s=[];this._c=[];this._e={};this._n();this._a();this._ae();return this.el._quickElement=this};Object.defineProperties(e.prototype,{raw:{get:function(){return this.el}},0:{get:function(){return this.el}},css:{get:function(){return this.style}},
replaceWith:{get:function(){return this.replace}}});e.prototype.parentsUntil=function(a){return A(this,a)};e.prototype.parentMatching=function(a){var b;if(d["function"](a))for(b=this.parent;b;){if(a(b))return b;b=b.parent}};Object.defineProperties(e.prototype,{children:{get:function(){var a,b,c,g;if(this.el.childNodes.length!==this._c.length)for(this._c.length=0,g=this.el.childNodes,b=0,c=g.length;b<c;b++)a=g[b],this._c.push(h(a));return this._c}},parent:{get:function(){this._p&&
this._p.el===this.el.parentNode||(this._p=h(this.el.parentNode));return this._p}},parents:{get:function(){return A(this)}},next:{get:function(){return h(this.el.nextSibling)}},prev:{get:function(){return h(this.el.previousSibling)}},nextAll:{get:function(){var a,b;b=[];for(a=h(this.el.nextSibling);a;)b.push(a),a=a.next;return b}},prevAll:{get:function(){var a,b;b=[];for(a=h(this.el.previousSibling);a;)b.push(a),a=a.prev;return b}},siblings:{get:function(){return this.prevAll.reverse().concat(this.nextAll)}}});
A=function(a,b){var c,g;d["function"](b)||(b=void 0);g=[];for(c=a.parent;c;)g.push(c),c=c.parent,b&&b(c)&&(c=null);return g};e.prototype._n=function(){var a;null==(a=this.options).style&&(a.style={});this.options.sS={};this.options["class"]&&(this.options.className=this.options["class"]);this.options.url&&(this.options.href=this.options.url);null==(a=this.options).relatedInstance&&(a.relatedInstance=this);null==(a=this.options).passStateToChildren&&(a.passStateToChildren=!0);
this.options.stateTriggers=m.deep({hover:{on:"mouseenter",off:"mouseleave"},focus:{on:"focus",off:"blur"}},this.options.stateTriggers);this._ns();return this};e.prototype._ns=function(){var a,b,c,g,d;b=Object.keys(this.options.style);c=b.filter(function(a){return"$"===a[0]});g=l.R(c.slice(),"$base");this.providedStates=c.map(function(a){return a.slice(1)});!l.In(c,"$base")&&b.length&&(c.length?(b=b.filter(function(a){return"$"!==a[0]}),this.options.style.$base=
m.clone.keys(b)(this.options.style)):this.options.style={$base:this.options.style});a=function(b){return function(c,g){var d,f,e,k,h,u;e=Object.keys(c).filter(function(a){return"$"===a[0]});if(e.length){b.hSS=!0;h=[];d=0;for(k=e.length;d<k;d++)f=e[d],u=g.concat(f.slice(1)),b.options.sS[u.join("+")]=c[f],a(c[f],u),h.push(delete c[f]);return h}}}(this);b=0;for(c=g.length;b<c;b++)d=g[b],a(this.options.style[d],[d.slice(1)]);return this};e.prototype._a=function(){var a,
b,c;this.options.id&&(this.el.id=this.options.id);this.options.className&&(this.el.className=this.options.className);this.options.href&&(this.el.href=this.options.href);this.options.type&&(this.el.type=this.options.type);this.options.name&&(this.el.name=this.options.name);this.options.value&&(this.el.value=this.options.value);this.options.selected&&(this.el.selected=this.options.selected);this.options.checked&&(this.el.checked=this.options.checked);if(this.options.props)for(a in b=this.options.props,
b)c=b[a],this.prop(a,c);if(this.options.attrs)for(a in b=this.options.attrs,b)c=b[a],this.attr(a,c);this.options.styleAfterInsert?Object.defineProperty(this,"_p",{set:function(a){a&&(delete this._p,this._p=a,this.style(m.clone.apply(m,[this.options.style.$base].concat(slice.call(this._ss(this._as()))))))}}):this.style(this.options.style.$base);return this};e.prototype._ae=function(){var a,b,c,g;b=this.options.stateTriggers;a=function(a){return function(b,
c){var g,f;f=d.St(c)?c:c.on;d.Ob(c)&&(g=c.off);a._l(f,function(){return a.state(b,!0)});if(g)return a._l(g,function(){return a.state(b,!1)})}}(this);for(c in b)g=b[c],a(c,g);return this};e.prototype._l=function(a,b){this.el[this.el.addEventListener?"addEventListener":"attachEvent"](this.el.addEventListener?a:"on"+a,b);return this};e.prototype._as=function(a){return this.providedStates.filter(function(b){return function(c){return l.In(b._s,c)&&c!==
a}}(this))};e.prototype._ss=function(a){return a.map(function(a){return function(b){return a.options.style["$"+b]}}(this))};e.prototype.on=function(a,b){d.St(a)&&d["function"](b)&&(this._e[a]||(this._e[a]=[],this._l(a,function(c){return function(g){var d,e,f;f=c._e[a];d=0;for(e=f.length;d<e;d++)b=f[d],b.call(c.el,g)}}(this))),this._e[a].push(b));return this};e.prototype.off=function(a,b){if(d.St(a))this._e[a]&&
(d["function"](b)?l.R(this._e[a],b):this._e[a].length=0);else for(a in this._e)this.off(a);return this};e.prototype.emit=function(a,b,c){var g;null==b&&(b=!0);null==c&&(c=!0);a&&d.St(a)&&(g=document.createEvent("Event"),g.initEvent(a,b,c),this.el.dispatchEvent(g));return this};e.prototype.updateOptions=function(a){d.Ob(a)&&(this.options=a,this._n(),this._a(this.options));return this};e.prototype.state=function(a,b){var c,
g,e,k,f,h,n,q,t;if(1===arguments.length)return l.In(this._s,a);if(d.St(a)){"$"===a[0]&&(a=a.slice(1));g=!!b;if("base"===a)return this;this.state(a)!==g&&(this.options.style["$"+a]&&(f=this.options.style["$"+a],t=this.providedStates.indexOf(a),c=this._as(a),e=c.filter(function(a){return function(b){return a.providedStates.indexOf(b)>t}}(this)),c=this._ss(c),e=this._ss(e)),g?(this._s.push(a),f&&this.style(m.clone.keys(f).apply(null,[f].concat(slice.call(e))))):
(l.R(this._s,a),f&&(k=m.clone.keys(f).apply(null,[this.options.style.$base].concat(slice.call(c))),f=m.transform(function(){return null}).clone(f),this.style(m(f,k)))));if(this.hSS)for(n=Object.keys(this.options.sS),n=n.filter(function(b){return l.In(b,a)}),e=0,h=n.length;e<h;e++)if(q=n[e],k=q.split("+"),f=k.length===k.filter(function(b){return function(c){return c===a||b.state(c)}}(this)).length)f=this.options.sS[q],g?(k=this.options.sS[l.R(k,
a).join("+")],this.style(m.clone(k,f))):(k=m.clone.keys(f).apply(null,[this.options.style.$base].concat(slice.call(c))),f=m.transform(function(){return null}).clone(f),this.style(m(f,k)));if(this.options.passStateToChildren)for(h=this._c,c=0,e=h.length;c<e;c++)g=h[c],g.state(a,b);return this}};e.prototype.resetState=function(){var a,b,c,g;g=this._s.slice();b=0;for(c=g.length;b<c;b++)a=g[b],this.state(a,!1);return this};e.prototype.style=function(){var a,b;a=arguments;if(d.St(a[0])){if(b=
y(this.el,a[0],a[1]),!d.De(a[1]))return b}else d.Ob(a[0])&&y(this.el,m.allowNull.transform(function(a){return function(b){return"function"===typeof b?b.call(a,a.options.relatedInstance):b}}(this)).clone(a[0]));return this};Object.defineProperty(e.prototype,"rect",{get:function(){return this.el.getBoundingClientRect()}});e.prototype.attr=function(a,b){switch(b){case void 0:return this.el.getAttribute(a);case null:return this.el.removeAttribute(a);default:return this.el.setAttribute(a,b),this}};
e.prototype.prop=function(a,b){switch(b){case void 0:return this.el[a];default:return this.el[a]=b,this}};e.prototype.toTemplate=function(){return h.template(this)};e.prototype.clone=function(){var a,b,c,g,d,h,f;c=this.el.cloneNode(!1);c=m.clone(this.options,{existing:c});c=new e(this.type,c);h=this._s;b=0;for(d=h.length;b<d;b++)a=h[b],c.state(a,!0);h=this.children;b=0;for(d=h.length;b<d;b++)a=h[b],c.append(a.clone());f=this._e;for(g in f)for(b=f[g],d=0,h=b.length;d<h;d++)a=b[d],
c.on(g,a);return c};e.prototype.append=function(a){var b;a&&(a=l.N(a),d.qE(a)&&((b=a.parent)&&b._r(a),this._c.push(a),this.el.appendChild(a.el),a.parent));return this};e.prototype.appendTo=function(a){a&&(a=l.N(a),d.qE(a)&&a.append(this));return this};e.prototype.prepend=function(a){var b;a&&(a=l.N(a),d.qE(a)&&((b=a.parent)&&b._r(a),this._c.unshift(a),this.el.insertBefore(a.el,this.el.firstChild),
a.parent));return this};e.prototype.prependTo=function(a){a&&(a=l.N(a),d.qE(a)&&a.prepend(this));return this};e.prototype.html=function(a){if(!d.De(a))return this.el.innerHTML;this.el.innerHTML=a;return this};e.prototype.text=function(a){if(!d.De(a))return this.el.textContent;this.el.textContent=a;return this};e.prototype.after=function(a){var b;a&&this.parent&&(a=l.N(a),d.qE(a)&&(b=this.parent._c.indexOf(this),this.parent._c.splice(b+
1,0,a),this.el.parentNode.insertBefore(a.el,this.el.nextSibling),a.parent));return this};e.prototype.insertAfter=function(a){a&&(a=l.N(a),d.qE(a)&&a.after(this));return this};e.prototype.before=function(a){var b;a&&this.parent&&(a=l.N(a),d.qE(a)&&(b=this.parent._c.indexOf(this),this.parent._c.splice(b,0,a),this.el.parentNode.insertBefore(a.el,this.el),a.parent));return this};e.prototype.insertBefore=function(a){a&&(a=l.N(a),
d.qE(a)&&a.before(this));return this};e.prototype.detach=function(){var a;null!=(a=this.parent)&&a._r(this);return this};e.prototype.remove=function(){var a;this.detach();this.resetState();for(a in this._e)this._e[a].length=0;return this};e.prototype.empty=function(){var a,b,c,d;d=this.children.slice();b=0;for(c=d.length;b<c;b++)a=d[b],this._r(a);return this};e.prototype.wrap=function(a){var b;a&&(a=l.N(a),b=this.parent,d.qE(a)&&
a!==this&&a!==this.parent&&(b&&b._r(this,a.parent?void 0:a),a.append(this)));return this};e.prototype.unwrap=function(){var a,b,c,d;if(b=this.parent)if(c=h.batch(b.children),d=b.next,a=b.parent)b.detach(),d?c.insertBefore(d):c.appendTo(a);return this};e.prototype.replace=function(a){var b;a&&(a=l.N(a),d.qE(a)&&a!==this&&(a.detach(),null!=(b=this.parent)&&b._r(this,a)));return this};e.prototype._r=function(a,b){var c;c=this._c.indexOf(a);
-1!==c&&(b?(this.el.replaceChild(b.el,a.el),this._c.splice(c,1,b)):(this.el.removeChild(a.el),this._c.splice(c,1)));return this};h=function(){var a,b,c,g,m;a=1<=arguments.length?slice.call(arguments,0):[];switch(!1){case !d.template(a[0]):return a[0].spawn();case !d.qE(a[0]):return a[1]?a[0].updateOptions(a[1]):a[0];case !d.dN(a[0]):if(a[0]._quickElement)return a[0]._quickElement;c=a[0].nodeName.toLowerCase().replace("#","");b=a[1]||{};b.existing=a[0];return new e(c,b);
case !d.St(a[0]):c=a[0].toLowerCase();b="text"===c?d.Ob(a[1])?a[1]:{text:a[1]||""}:d.Ob(a[1])?a[1]:{};a=a.slice(2);c=new e(c,b);g=0;for(m=a.length;g<m;g++)b=a[g],d.St(b)&&(b=h.text(b)),d.template(b)&&(b=h(b)),d.qE(b)&&b.appendTo(c);return c}};h.template=function(a){return new q(a,!0)};t=function(a,b){this.elements=a;this.returnResults=b;this.elements=this.elements.map(function(a){return h(a)});return this};t.prototype.reverse=function(){this.elements=this.elements.reverse();
return this};t.prototype["return"]=function(a){return a?(this.returnResults=!0,this):this.lastResults};Object.keys(e.prototype).concat("css","replaceWith").forEach(function(a){return t.prototype[a]=function(){var b,c;c=this.lastResults=function(){var c,d,e,f;e=this.elements;f=[];c=0;for(d=e.length;c<d;c++)b=e[c],f.push(b[a].apply(b,arguments));return f}.apply(this,arguments);return this.returnResults?c:this}});h.batch=function(a,b){if(!d.iT(a))throw Error("Batch: expected an iT, got "+
String(a));if(!a.length)throw Error("Batch: expected a non-empty element collection");return new t(a,b)};z={type:"div",options:{},children:[]};q=function(a,b){this._config=b?F(a):a;return this};Object.keys(z).forEach(function(a){return Object.defineProperty(q.prototype,a,{get:function(){return this._config[a]}})});q.prototype.spawn=function(a){a=v(this._config,a);return h.apply(null,[a.type,a.options].concat(slice.call(a.children)))};q.prototype.extend=function(a){return new q(v(this._config,a))};
v=function(a,b){var c,e,h,k,f,l,n;l=m.deep.notKeys("children").notDeep("relatedInstance").clone(a,b);e=a.children||[];f=(null!=b?b.children:void 0)||[];l.children=[];k=h=0;for(n=Math.max(e.length,f.length);0<=n?h<n:h>n;k=0<=n?++h:--h)c=e[k],k=f[k],d.St(k)&&(k={type:"text",options:{text:k}}),c?l.children.push(c.extend(k)):l.children.push(new q(m.deep.clone(z,k)));return l};F=function(a){var b;switch(!1){case !d.Ar(a):b={};if(d.St(a[0]))b.type=a[0];else throw Error(x+" string for 'type', got '"+
String(a[0])+"'");if(1<a.length&&!d.Ob(a[1])&&null!==a[1])throw Error(x+" object for 'options', got '"+String(a[1])+"'");b.options=a[1]?m.deep.clone(a[1]):null;b.children=a.slice(2).map(h.template);return b;case !(d.St(a)||d.dT(a)):return{type:"text",options:{text:a.textContent||a}};case !d.dE(a):return{type:a.nodeName.toLowerCase(),options:m.clone.keys(C)(a),children:[].map.call(a.childNodes,h.template)};case !d.qE(a):return{type:a.type,options:m.clone.deep.notKeys("relatedInstance")(a.options),
children:a.children.map(h.template)};case !d.template(a):return v(a._config);default:throw Error(x+" (array || string || dE || qE || template), got "+String(a));}};x="Template Parse Error: expected";B="link:a anchor:a a text div span h1 h2 h3 h4 h5 h6 header footer section button br ul ol li fieldset input textarea select option form frame hr iframe img picture main nav meta object pre style table tbody th tr td tfoot video".split(" ");D=function(a){var b,c;b=c=a;l.In(a,":")&&(a=
a.split(":"),b=a[0],c=a[1]);return h[b]=function(){return h.apply(null,[c].concat(slice.call(arguments)))}};w=0;for(E=B.length;w<E;w++)G=B[w],D(G);h.version="1.0.6";return null!=("undefined"!==typeof module&&null!==module?module.exports:void 0)?module.exports=h:"function"===typeof define&&define.amd?define(["quickdom"],function(){return h}):this.Dom=h})();
