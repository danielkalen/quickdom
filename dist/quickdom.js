var slice=[].slice;
(function(){var y,e,q,g,f,p,C,z,m,t,D,A,l,w,E,x,F,G,B;y=function(a){var b={exports:a};(function(){var a,d,k,n,h,e,f,g;n=["webkit","moz","ms","o"];e="backgroundPositionX backgroundPositionY blockSize borderWidth columnRuleWidth cx cy fontSize gridColumnGap gridRowGap height inlineSize lineHeight minBlockSize minHeight minInlineSize minWidth maxHeight maxWidth outlineOffset outlineWidth perspective shapeMargin strokeDashoffset strokeWidth textIndent width wordSpacing top bottom left right x y".split(" ");["margin",
"padding","border","borderRadius"].forEach(function(a){var b,c,d,h,n;e.push(a);h=["Top","Bottom","Left","Right"];n=[];c=0;for(d=h.length;c<d;c++)b=h[c],n.push(e.push(a+b));return n});g=document.createElement("div").style;a=/^\d+(?:[a-z]|\%)+$/i;d=/\d+$/;k=/\s/;f={In:function(a,b){return a&&-1!==a.indexOf(b)},isIterable:function(a){return a&&"object"===typeof a&&"number"===typeof a.length&&!a.nodeType},isPropSupported:function(a){return"undefined"!==typeof g[a]},toTitleCase:function(a){return a[0].toUpperCase()+
a.slice(1)},normalizeProperty:function(a){var b,c,d;if(this.isPropSupported(a))return a;d=this.toTitleCase(a);a=0;for(b=n.length;a<b;a++)if(c=n[a],c=""+c+d,this.isPropSupported(c))return c},normalizeValue:function(b,c){this.In(e,b)&&null!==c&&(c=""+c,!d.test(c)||a.test(c)||k.test(c)||(c+="px"));return c}};h=function(a,b,c){var d,n,v;if(f.isIterable(a))for(d=0,n=a.length;d<n;d++)v=a[d],h(v,b,c);else if("object"===typeof b)for(d in b)c=b[d],h(a,d,c);else{b=f.normalizeProperty(b);if("undefined"===
typeof c)return getComputedStyle(a)[b];b&&(a.style[b]=f.normalizeValue(b,c))}};h.version="1.0.5";return null!=("undefined"!==typeof b&&null!==b?b.exports:void 0)?b.exports=h:"function"===typeof define&&define.amd?define(["quickdom"],function(){return h}):this.Css=h})();return b.exports}.call(this,{});m=function(a){var b={exports:a},c=[].slice;(function(){var a;a=function(a){return function(a){var b,d,n,e,k;d=function(a){var b,c,n;b=function(a){return Array.isArray(a)};c=function(a){return a&&"object"===
typeof a};n=function(a,b){return b.notDeep?-1!==b.notDeep.indexOf(a):!1};return a=d=function(a,k,e){var v,h,f,r,g,u;if(!k||"object"!==typeof k&&"function"!==typeof k)k={};v=0;for(f=e.length;v<f;v++)if(r=e[v],null!=r)for(h in r)if(g=r[h],u=k[h],!(g===k||void 0===g||null===g&&!a.allowNull||a.keys&&-1===a.keys.indexOf(h)||a.notKeys&&-1!==a.notKeys.indexOf(h)||a.own&&!r.hasOwnProperty(h)||a.globalFilter&&!a.globalFilter(g,h,r)||a.filters&&a.filters[h]&&!a.filters[h](g,h,r)))switch(a.globalTransform&&
(g=a.globalTransform(g,h,r)),a.transforms&&a.transforms[h]&&(g=a.transforms[h](g,h,r)),!1){case !(a.concat&&b(g)&&b(u)):k[h]=u.concat(g);break;case !(a.deep&&c(g)&&!n(h,a)):u=c(u)?u:b(g)?[]:{};k[h]=d(a,u,[g]);break;default:k[h]=g}return k}}({});k=function(a){var b,c,d;c={};for(b in a)d=a[b],c[b]=d;return c};e=function(a){if(a)return"object"!==typeof a||Array.isArray(a)?[].concat(a):Object.keys(a)};b=function(a){var b;b=a.target?function(){var a;a=1<=arguments.length?c.call(arguments,0):[];return d(b.options,
b.options.target,a)}:function(){var a,k;k=arguments[0];a=2<=arguments.length?c.call(arguments,1):[];return d(b.options,k,a)};b.options=a;Object.defineProperties(b,n);return b};n={deep:{get:function(){var a;a=k(this.options);a.deep=!0;return b(a)}},own:{get:function(){var a;a=k(this.options);a.own=!0;return b(a)}},allowNull:{get:function(){var a;a=k(this.options);a.allowNull=!0;return b(a)}},concat:{get:function(){var a;a=k(this.options);a.concat=!0;return b(a)}},clone:{get:function(){var a;a=k(this.options);
a.target={};return b(a)}},notDeep:{get:function(){var a;a=k(this.options);return function(c){a.notDeep=e(c);return b(a)}}},keys:{get:function(){var a;a=k(this.options);return function(c){a.keys=e(c);return b(a)}}},notKeys:{get:function(){var a;a=k(this.options);return function(c){a.notKeys=e(c);return b(a)}}},transform:{get:function(){var a;a=k(this.options);return function(c){"function"===typeof c?a.globalTransform=c:c&&"object"===typeof c&&(a.transforms=c);return b(a)}}},filter:{get:function(){var a;
a=k(this.options);return function(c){"function"===typeof c?a.globalFilter=c:c&&"object"===typeof c&&(a.filters=c);return b(a)}}}};return a=b({})}}(this)({});null!=("undefined"!==typeof b&&null!==b?b.exports:void 0)?b.exports=a:"function"===typeof define&&define.amd?define(["smart-extend"],function(){return a}):window.extend=a})();return b.exports}.call(this,{});C="className href selected type name id checked".split(" ");l={In:function(a,b){return a&&-1!==a.indexOf(b)},R:function(a,
b){var c;c=a.indexOf(b);-1!==c&&a.splice(c,1);return a},N:function(a){switch(!1){case !e.dN(a):return g(a);case !e.St(a):return g.text(a);default:return a}}};e=function(a){return function(a){return e=a={De:function(a){return void 0!==a},Ar:function(a){return a instanceof Array},Ob:function(a){return"object"===typeof a&&a},objectPlain:function(a){return e.Ob(a)&&"[object Object]"===Object.prototype.toString.call(a)},St:function(a){return"string"===typeof a},
Nu:function(a){return"number"===typeof a},"function":function(a){return"function"===typeof a},iT:function(a){return e.Ob(a)&&e.Nu(a.length)}}}}(this)({});e=m.clone(e,{dE:function(a){return a&&1===a.nodeType},dT:function(a){return a&&3===a.nodeType},dN:function(a){return e.dE(a)||e.dT(a)},qE:function(a){return a instanceof f},template:function(a){return a instanceof p}});f=function(a,b){this.type=a;this.options=b;this.el=this.options.existing||("text"===
this.type?document.createTextNode(this.options.text):"*"===this.type[0]?document.createElementNS("http://www.w3.org/2000/svg",this.type.slice(1)):document.createElement(this.type));"text"===this.type&&(this.append=this.prepend=function(){});this._p=null;this._s=[];this._c=[];this._i=[];this._e={};this._n();this._a();this._ae();return this.el._quickElement=this};Object.defineProperties(f.prototype,{raw:{get:function(){return this.el}},
0:{get:function(){return this.el}},css:{get:function(){return this.style}},replaceWith:{get:function(){return this.replace}}});f.prototype.parentsUntil=function(a){return A(this,a)};f.prototype.parentMatching=function(a){var b;if(e["function"](a))for(b=this.parent;b;){if(a(b))return b;b=b.parent}};Object.defineProperties(f.prototype,{children:{get:function(){var a,b,c,d;if(this.el.childNodes.length!==this._c.length)for(this._c.length=0,d=this.el.childNodes,b=0,c=d.length;b<c;b++)a=d[b],
this._c.push(g(a));return this._c}},parent:{get:function(){this._p&&this._p.el===this.el.parentNode||(this._p=g(this.el.parentNode));return this._p}},parents:{get:function(){return A(this)}},next:{get:function(){return g(this.el.nextSibling)}},prev:{get:function(){return g(this.el.previousSibling)}},nextAll:{get:function(){var a,b;b=[];for(a=g(this.el.nextSibling);a;)b.push(a),a=a.next;return b}},prevAll:{get:function(){var a,b;b=[];for(a=g(this.el.previousSibling);a;)b.push(a),
a=a.prev;return b}},siblings:{get:function(){return this.prevAll.reverse().concat(this.nextAll)}}});A=function(a,b){var c,d;e["function"](b)||(b=void 0);d=[];for(c=a.parent;c;)d.push(c),c=c.parent,b&&b(c)&&(c=null);return d};f.prototype._n=function(){var a;null==(a=this.options).style&&(a.style={});this.options.sS={};this.options["class"]&&(this.options.className=this.options["class"]);this.options.url&&(this.options.href=this.options.url);null==(a=this.options).relatedInstance&&
(a.relatedInstance=this);null==(a=this.options).passStateToChildren&&(a.passStateToChildren=!0);this.options.stateTriggers=m.deep({hover:{on:"mouseenter",off:"mouseleave"},focus:{on:"focus",off:"blur"}},this.options.stateTriggers);this._ns();return this};f.prototype._ns=function(){var a,b,c,d,k;b=Object.keys(this.options.style);c=b.filter(function(a){return"$"===a[0]});d=l.R(c.slice(),"$base");this.providedStates=c.map(function(a){return a.slice(1)});!l.In(c,
"$base")&&b.length&&(c.length?(b=b.filter(function(a){return"$"!==a[0]}),this.options.style.$base=m.clone.keys(b)(this.options.style)):this.options.style={$base:this.options.style});a=function(b){return function(c,d){var k,h,e,n,f,g;e=Object.keys(c).filter(function(a){return"$"===a[0]});if(e.length){b.hSS=!0;f=[];k=0;for(n=e.length;k<n;k++)h=e[k],g=d.concat(h.slice(1)),b.options.sS[g.join("+")]=c[h],a(c[h],g),f.push(delete c[h]);return f}}}(this);b=0;for(c=d.length;b<c;b++)k=
d[b],a(this.options.style[k],[k.slice(1)]);return this};f.prototype._a=function(){var a,b,c,d;this.options.id&&(this.el.id=this.options.id);this.options.className&&(this.el.className=this.options.className);this.options.href&&(this.el.href=this.options.href);this.options.type&&(this.el.type=this.options.type);this.options.name&&(this.el.name=this.options.name);this.options.value&&(this.el.value=this.options.value);this.options.selected&&(this.el.selected=this.options.selected);this.options.checked&&
(this.el.checked=this.options.checked);if(this.options.props)for(b in c=this.options.props,c)d=c[b],this.prop(b,d);if(this.options.attrs)for(b in c=this.options.attrs,c)d=c[b],this.attr(b,d);if(this.options.styleAfterInsert)this.onInserted(a=function(b){return function(){var c;c=b.parents.slice(-1)[0];return c.raw===document.documentElement?b.style(m.clone.apply(m,[b.options.style.$base].concat(slice.call(b._ss(b._as()))))):c.onInserted(a)}}(this));else this.style(this.options.style.$base);
Object.defineProperty(this,"_p",{set:function(a){var b,c,d;if(a)for(delete this._p,this._p=a,d=this._i,b=0,c=d.length;b<c;b++)a=d[b],a(this)}});return this};f.prototype._ae=function(){var a,b,c,d;b=this.options.stateTriggers;a=function(a){return function(b,c){var d,k;k=e.St(c)?c:c.on;e.Ob(c)&&(d=c.off);a._l(k,function(){return a.state(b,!0)});if(d)return a._l(d,function(){return a.state(b,!1)})}}(this);for(c in b)d=b[c],a(c,d);return this};
f.prototype._l=function(a,b){this.el[this.el.addEventListener?"addEventListener":"attachEvent"](this.el.addEventListener?a:"on"+a,b);return this};f.prototype._as=function(a){return this.providedStates.filter(function(b){return function(c){return l.In(b._s,c)&&c!==a}}(this))};f.prototype._ss=function(a){return a.map(function(a){return function(b){return a.options.style["$"+b]}}(this))};f.prototype.on=function(a,b){e.St(a)&&e["function"](b)&&(this._e[a]||
(this._e[a]=[],this._l(a,function(c){return function(d){var e,f,h;h=c._e[a];e=0;for(f=h.length;e<f;e++)b=h[e],b.call(c.el,d)}}(this))),this._e[a].push(b));return this};f.prototype.off=function(a,b){if(e.St(a))this._e[a]&&(e["function"](b)?l.R(this._e[a],b):this._e[a].length=0);else for(a in this._e)this.off(a);return this};f.prototype.emit=function(a,b,c){var d;null==b&&(b=!0);null==c&&(c=
!0);a&&e.St(a)&&(d=document.createEvent("Event"),d.initEvent(a,b,c),this.el.dispatchEvent(d));return this};f.prototype.onInserted=function(a,b){null==b&&(b=!0);if(e["function"](a))return this._p?b&&a(this):this._i.push(a),this};f.prototype.updateOptions=function(a){e.Ob(a)&&(this.options=a,this._n(),this._a(this.options));return this};f.prototype.state=function(a,b){var c,d,k,f,h,g,p,q,t;if(1===arguments.length)return l.In(this._s,a);
if(e.St(a)){"$"===a[0]&&(a=a.slice(1));k=!!b;if("base"===a)return this;d=this._as(a);c=this._ss(d);this.state(a)!==k&&(this.options.style["$"+a]&&(h=this.options.style["$"+a],t=this.providedStates.indexOf(a),d=d.filter(function(a){return function(b){return a.providedStates.indexOf(b)>t}}(this)),g=this._ss(d)),k?(this._s.push(a),h&&this.style(m.clone.keys(h).apply(null,[h].concat(slice.call(g))))):(l.R(this._s,a),h&&(f=m.clone.keys(h).apply(null,
[this.options.style.$base].concat(slice.call(c))),h=m.transform(function(){return null}).clone(h),this.style(m(h,f)))));if(this.hSS)for(p=Object.keys(this.options.sS),p=p.filter(function(b){return l.In(b,a)}),d=0,g=p.length;d<g;d++)if(q=p[d],f=q.split("+"),h=f.length===f.filter(function(b){return function(c){return c===a||b.state(c)}}(this)).length)h=this.options.sS[q],k?(f=this.options.sS[l.R(f,a).join("+")],this.style(m.clone(f,h))):(f=m.clone.keys(h).apply(null,
[this.options.style.$base].concat(slice.call(c))),h=m.transform(function(){return null}).clone(h),this.style(m(h,f)));if(this.options.passStateToChildren)for(g=this._c,k=0,d=g.length;k<d;k++)c=g[k],c.state(a,b);return this}};f.prototype.resetState=function(){var a,b,c,d;d=this._s.slice();b=0;for(c=d.length;b<c;b++)a=d[b],this.state(a,!1);return this};f.prototype.style=function(){var a,b;if("text"!==this.type){a=arguments;if(e.St(a[0])){if(b=y(this.el,a[0],a[1]),!e.De(a[1]))return b}else e.Ob(a[0])&&
y(this.el,m.allowNull.transform(function(a){return function(b){return"function"===typeof b?b.call(a,a.options.relatedInstance):b}}(this)).clone(a[0]));return this}};Object.defineProperty(f.prototype,"rect",{get:function(){return this.el.getBoundingClientRect()}});f.prototype.attr=function(a,b){switch(b){case void 0:return this.el.getAttribute(a);case null:return this.el.removeAttribute(a);default:return this.el.setAttribute(a,b),this}};f.prototype.prop=function(a,b){switch(b){case void 0:return this.el[a];
default:return this.el[a]=b,this}};f.prototype.toTemplate=function(){return g.template(this)};f.prototype.clone=function(){var a,b,c,d,e,g,h;c=this.el.cloneNode(!1);c=m.clone(this.options,{existing:c});c=new f(this.type,c);g=this._s;b=0;for(e=g.length;b<e;b++)a=g[b],c.state(a,!0);g=this.children;b=0;for(e=g.length;b<e;b++)a=g[b],c.append(a.clone());h=this._e;for(d in h)for(b=h[d],e=0,g=b.length;e<g;e++)a=b[e],c.on(d,a);return c};f.prototype.append=function(a){var b;a&&(a=l.N(a),
e.qE(a)&&((b=a.parent)&&b._r(a),this._c.push(a),this.el.appendChild(a.el),a.parent));return this};f.prototype.appendTo=function(a){a&&(a=l.N(a),e.qE(a)&&a.append(this));return this};f.prototype.prepend=function(a){var b;a&&(a=l.N(a),e.qE(a)&&((b=a.parent)&&b._r(a),this._c.unshift(a),this.el.insertBefore(a.el,this.el.firstChild),a.parent));return this};f.prototype.prependTo=function(a){a&&(a=l.N(a),
e.qE(a)&&a.prepend(this));return this};f.prototype.html=function(a){if(!e.De(a))return this.el.innerHTML;this.el.innerHTML=a;return this};f.prototype.text=function(a){if(!e.De(a))return this.el.textContent;this.el.textContent=a;return this};f.prototype.after=function(a){var b;a&&this.parent&&(a=l.N(a),e.qE(a)&&(b=this.parent._c.indexOf(this),this.parent._c.splice(b+1,0,a),this.el.parentNode.insertBefore(a.el,this.el.nextSibling),a.parent));return this};
f.prototype.insertAfter=function(a){a&&(a=l.N(a),e.qE(a)&&a.after(this));return this};f.prototype.before=function(a){var b;a&&this.parent&&(a=l.N(a),e.qE(a)&&(b=this.parent._c.indexOf(this),this.parent._c.splice(b,0,a),this.el.parentNode.insertBefore(a.el,this.el),a.parent));return this};f.prototype.insertBefore=function(a){a&&(a=l.N(a),e.qE(a)&&a.before(this));return this};f.prototype.detach=function(){var a;null!=
(a=this.parent)&&a._r(this);return this};f.prototype.remove=function(){var a;this.detach();this.resetState();for(a in this._e)this._e[a].length=0;return this};f.prototype.empty=function(){var a,b,c,d;d=this.children.slice();b=0;for(c=d.length;b<c;b++)a=d[b],this._r(a);return this};f.prototype.wrap=function(a){var b;a&&(a=l.N(a),b=this.parent,e.qE(a)&&a!==this&&a!==this.parent&&(b&&b._r(this,a.parent?void 0:a),a.append(this)));
return this};f.prototype.unwrap=function(){var a,b,c,d;if(b=this.parent)if(c=g.batch(b.children),d=b.next,a=b.parent)b.detach(),d?c.insertBefore(d):c.appendTo(a);return this};f.prototype.replace=function(a){var b;a&&(a=l.N(a),e.qE(a)&&a!==this&&(a.detach(),null!=(b=this.parent)&&b._r(this,a)));return this};f.prototype._r=function(a,b){var c;c=this._c.indexOf(a);-1!==c&&(b?(this.el.replaceChild(b.el,a.el),this._c.splice(c,1,b)):(this.el.removeChild(a.el),
this._c.splice(c,1)));return this};g=function(){var a,b,c,d,k;a=1<=arguments.length?slice.call(arguments,0):[];switch(!1){case !e.template(a[0]):return a[0].spawn();case !e.qE(a[0]):return a[1]?a[0].updateOptions(a[1]):a[0];case !e.dN(a[0]):if(a[0]._quickElement)return a[0]._quickElement;c=a[0].nodeName.toLowerCase().replace("#","");b=a[1]||{};b.existing=a[0];return new f(c,b);case !e.St(a[0]):c=a[0].toLowerCase();b="text"===c?e.Ob(a[1])?a[1]:{text:a[1]||""}:e.Ob(a[1])?
a[1]:{};a=a.slice(2);c=new f(c,b);d=0;for(k=a.length;d<k;d++)b=a[d],e.St(b)&&(b=g.text(b)),e.template(b)&&(b=g(b)),e.qE(b)&&b.appendTo(c);return c}};g.template=function(a){return new p(a,!0)};q=function(a,b){this.elements=a;this.returnResults=b;this.elements=this.elements.map(function(a){return g(a)});return this};q.prototype.reverse=function(){this.elements=this.elements.reverse();return this};q.prototype["return"]=function(a){return a?(this.returnResults=!0,this):this.lastResults};Object.keys(f.prototype).concat("css",
"replaceWith").forEach(function(a){return q.prototype[a]=function(){var b,c;c=this.lastResults=function(){var c,e,f,h;f=this.elements;h=[];c=0;for(e=f.length;c<e;c++)b=f[c],h.push(b[a].apply(b,arguments));return h}.apply(this,arguments);return this.returnResults?c:this}});g.batch=function(a,b){if(!e.iT(a))throw Error("Batch: expected an iT, got "+String(a));if(!a.length)throw Error("Batch: expected a non-empty element collection");return new q(a,b)};z={type:"div",options:{},children:[]};
p=function(a,b){this._config=b?F(a):a;return this};Object.keys(z).forEach(function(a){return Object.defineProperty(p.prototype,a,{get:function(){return this._config[a]}})});p.prototype.spawn=function(a,b){var c;c=t(this._config,a,b);return g.apply(null,[c.type,c.options].concat(slice.call(c.children)))};p.prototype.extend=function(a,b){return new p(t(this._config,a,b))};t=function(a,b,c){var d,f,g,h,l;c&&(d={options:function(a){return m(a,c)}});d=m.deep.notKeys("children").notDeep("relatedInstance").transform(d).clone(a,
b);a=a.children||[];h=(null!=b?b.children:void 0)||[];d.children=[];g=f=0;for(l=Math.max(a.length,h.length);0<=l?f<l:f>l;g=0<=l?++f:--f)b=a[g],g=h[g],e.St(g)&&(g={type:"text",options:{text:g}}),b?d.children.push(b.extend(g,c)):d.children.push(new p(m.deep.clone(z,g)));return d};F=function(a){var b;switch(!1){case !e.Ar(a):b={};if(e.St(a[0]))b.type=a[0];else throw Error(x+" string for 'type', got '"+String(a[0])+"'");if(1<a.length&&!e.Ob(a[1])&&null!==a[1])throw Error(x+" object for 'options', got '"+
String(a[1])+"'");b.options=a[1]?m.deep.clone(a[1]):null;b.children=a.slice(2).map(g.template);return b;case !(e.St(a)||e.dT(a)):return{type:"text",options:{text:a.textContent||a}};case !e.dE(a):return{type:a.nodeName.toLowerCase(),options:m.clone.keys(C)(a),children:[].map.call(a.childNodes,g.template)};case !e.qE(a):return{type:a.type,options:m.clone.deep.notKeys("relatedInstance")(a.options),children:a.children.map(g.template)};case !e.template(a):return t(a._config);default:throw Error(x+
" (array || string || dE || qE || template), got "+String(a));}};x="Template Parse Error: expected";B="link:a anchor:a a text div span h1 h2 h3 h4 h5 h6 header footer section button br ul ol li fieldset input textarea select option form frame hr iframe img picture main nav meta object pre style table tbody th tr td tfoot video".split(" ");D=function(a){var b,c;b=c=a;l.In(a,":")&&(a=a.split(":"),b=a[0],c=a[1]);return g[b]=function(){return g.apply(null,[c].concat(slice.call(arguments)))}};
w=0;for(E=B.length;w<E;w++)G=B[w],D(G);g.version="1.0.9";return null!=("undefined"!==typeof module&&null!==module?module.exports:void 0)?module.exports=g:"function"===typeof define&&define.amd?define(["quickdom"],function(){return g}):this.Dom=g})();
