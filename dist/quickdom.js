var slice=[].slice;
(function(){var E,e,J,y,h,f,u,v,z,F,K,A,G,p,B,n,x,L,C,D,H,M,N,I;E=function(a){var b={exports:a};(function(){var a,d,g,l,k,e,f,r;l=["webkit","moz","ms","o"];e="backgroundPositionX backgroundPositionY blockSize borderWidth columnRuleWidth cx cy fontSize gridColumnGap gridRowGap height inlineSize lineHeight minBlockSize minHeight minInlineSize minWidth maxHeight maxWidth outlineOffset outlineWidth perspective shapeMargin strokeDashoffset strokeWidth textIndent width wordSpacing top bottom left right x y".split(" ");["margin",
"padding","border","borderRadius"].forEach(function(a){var b,c,d,l,g;e.push(a);l=["Top","Bottom","Left","Right"];g=[];c=0;for(d=l.length;c<d;c++)b=l[c],g.push(e.push(a+b));return g});r=document.createElement("div").style;a=/^\d+(?:[a-z]|\%)+$/i;d=/\d+$/;g=/\s/;f={In:function(a,b){return a&&-1!==a.indexOf(b)},isIterable:function(a){return a&&"object"===typeof a&&"number"===typeof a.length&&!a.nodeType},isPropSupported:function(a){return"undefined"!==typeof r[a]},toTitleCase:function(a){return a[0].toUpperCase()+
a.slice(1)},normalizeProperty:function(a){var b,c,d;if(this.isPropSupported(a))return a;d=this.toTitleCase(a);a=0;for(b=l.length;a<b;a++)if(c=l[a],c=""+c+d,this.isPropSupported(c))return c},normalizeValue:function(b,c){this.In(e,b)&&null!==c&&(c=""+c,!d.test(c)||a.test(c)||g.test(c)||(c+="px"));return c}};k=function(a,b,c){var d,l,g;if(f.isIterable(a))for(d=0,l=a.length;d<l;d++)g=a[d],k(g,b,c);else if("object"===typeof b)for(d in b)c=b[d],k(a,d,c);else{b=f.normalizeProperty(b);if("undefined"===
typeof c)return getComputedStyle(a)[b];b&&(a.style[b]=f.normalizeValue(b,c))}};k.version="1.0.5";return null!=("undefined"!==typeof b&&null!==b?b.exports:void 0)?b.exports=k:"function"===typeof define&&define.amd?define(["quickdom"],function(){return k}):this.Css=k})();return b.exports}.call(this,{});p=function(a){var b={exports:a},c=[].slice;(function(){var a;a=function(a){return function(a){var b,d,l,g,e;d=function(a){var b,c,l;b=function(a){return Array.isArray(a)};c=function(a){return a&&"[object Object]"===
Object.prototype.toString.call(a)||b(a)};l=function(a,b){return b.notDeep?-1!==b.notDeep.indexOf(a):!1};return a=d=function(a,g,e){var w,k,f,m,q,t;if(!g||"object"!==typeof g&&"function"!==typeof g)g={};w=0;for(f=e.length;w<f;w++)if(m=e[w],null!=m)for(k in m)if(q=m[k],t=g[k],!(q===g||void 0===q||null===q&&!a.allowNull||a.keys&&-1===a.keys.indexOf(k)||a.notKeys&&-1!==a.notKeys.indexOf(k)||a.own&&!m.hasOwnProperty(k)||a.globalFilter&&!a.globalFilter(q,k,m)||a.filters&&a.filters[k]&&!a.filters[k](q,k,
m)))switch(a.globalTransform&&(q=a.globalTransform(q,k,m)),a.transforms&&a.transforms[k]&&(q=a.transforms[k](q,k,m)),!1){case !(a.concat&&b(q)&&b(t)):g[k]=t.concat(q);break;case !(a.deep&&c(q)&&!l(k,a)):t=c(t)?t:b(q)?[]:{};g[k]=d(a,t,[q]);break;default:g[k]=q}return g}}({});e=function(a){var b,c,d;c={};for(b in a)d=a[b],c[b]=d;return c};g=function(a){if(a)return"object"!==typeof a||Array.isArray(a)?[].concat(a):Object.keys(a)};b=function(a){var b;b=a.target?function(){var a;a=1<=arguments.length?
c.call(arguments,0):[];return d(b.options,b.options.target,a)}:function(){var a,g;g=arguments[0];a=2<=arguments.length?c.call(arguments,1):[];return d(b.options,g,a)};b.options=a;Object.defineProperties(b,l);return b};l={deep:{get:function(){var a;a=e(this.options);a.deep=!0;return b(a)}},own:{get:function(){var a;a=e(this.options);a.own=!0;return b(a)}},allowNull:{get:function(){var a;a=e(this.options);a.allowNull=!0;return b(a)}},concat:{get:function(){var a;a=e(this.options);a.concat=!0;return b(a)}},
clone:{get:function(){var a;a=e(this.options);a.target={};return b(a)}},notDeep:{get:function(){var a;a=e(this.options);return function(c){a.notDeep=g(c);return b(a)}}},keys:{get:function(){var a;a=e(this.options);return function(c){a.keys=g(c);return b(a)}}},notKeys:{get:function(){var a;a=e(this.options);return function(c){a.notKeys=g(c);return b(a)}}},transform:{get:function(){var a;a=e(this.options);return function(c){"function"===typeof c?a.globalTransform=c:c&&"object"===typeof c&&(a.transforms=
c);return b(a)}}},filter:{get:function(){var a;a=e(this.options);return function(c){"function"===typeof c?a.globalFilter=c:c&&"object"===typeof c&&(a.filters=c);return b(a)}}}};return a=b({})}}(this)({});null!=("undefined"!==typeof b&&null!==b?b.exports:void 0)?b.exports=a:"function"===typeof define&&define.amd?define(["smart-extend"],function(){return a}):window.extend=a})();return b.exports}.call(this,{});K="className href selected type name id checked".split(" ");n={In:function(a,b){return a&&
-1!==a.indexOf(b)},R:function(a,b){var c;c=a.indexOf(b);-1!==c&&a.splice(c,1);return a},N:function(a){switch(!1){case !e.dN(a):return h(a);case !e.St(a):return h.text(a);default:return a}},isStateStyle:function(a){return"$"===a[0]||"@"===a[0]}};e=function(a){return function(a){return e=a={De:function(a){return void 0!==a},Ar:function(a){return a instanceof Array},Ob:function(a){return"object"===typeof a&&a},objectPlain:function(a){return e.Ob(a)&&"[object Object]"===
Object.prototype.toString.call(a)},St:function(a){return"string"===typeof a},Nu:function(a){return"number"===typeof a},"function":function(a){return"function"===typeof a},iT:function(a){return e.Ob(a)&&e.Nu(a.length)}}}}(this)({});e=p.clone(e,{domDoc:function(a){return a&&9===a.nodeType},dE:function(a){return a&&1===a.nodeType},dT:function(a){return a&&3===a.nodeType},dN:function(a){return e.dE(a)||e.dT(a)},qE:function(a){return a instanceof f},template:function(a){return a instanceof
u}});f=function(a,b){this.type=a;this.options=b;this.el=this.options.existing||("text"===this.type?document.createTextNode(this.options.text):"*"===this.type[0]?document.createElementNS("http://www.w3.org/2000/svg",this.type.slice(1)):document.createElement(this.type));"text"===this.type&&(this.append=this.prepend=this.attr=function(){});this._p=null;this._s=[];this._c=[];this._i=[];this._e={_R:{}};this._n();this._a();this._ae();
this._pp();return this.el._quickElement=this};Object.defineProperties(f.prototype,{raw:{get:function(){return this.el}},0:{get:function(){return this.el}},css:{get:function(){return this.style}},replaceWith:{get:function(){return this.replace}}});f.prototype.parentsUntil=function(a){return F(this,a)};f.prototype.parentMatching=function(a){var b;if(e["function"](a))for(b=this.parent;b;){if(a(b))return b;b=b.parent}};Object.defineProperties(f.prototype,{children:{get:function(){var a,b,c,d;
if(this.el.childNodes.length!==this._c.length)for(this._c.length=0,d=this.el.childNodes,b=0,c=d.length;b<c;b++)a=d[b],4>a.nodeType&&this._c.push(h(a));return this._c}},parent:{get:function(){this._p&&this._p.el===this.el.parentNode||e.domDoc(this.el.parentNode)||(this._p=h(this.el.parentNode));return this._p}},parents:{get:function(){return F(this)}},next:{get:function(){return h(this.el.nextSibling)}},prev:{get:function(){return h(this.el.previousSibling)}},
nextAll:{get:function(){var a,b;b=[];for(a=h(this.el.nextSibling);a;)b.push(a),a=a.next;return b}},prevAll:{get:function(){var a,b;b=[];for(a=h(this.el.previousSibling);a;)b.push(a),a=a.prev;return b}},siblings:{get:function(){return this.prevAll.reverse().concat(this.nextAll)}},child:{get:function(){return this._C||z(this)}},childf:{get:function(){return z(this,!0)}}});F=function(a,b){var c,d;e["function"](b)||(b=void 0);d=[];for(c=a.parent;c;)d.push(c),c=c.parent,b&&b(c)&&(c=null);return d};
z=function(a,b){var c;if(b||!a._C)a._C={};c=a._C;a.ref&&(c[a.ref]=a);a.children.length&&p.apply(null,[a._C].concat(slice.call(a._c.map(function(a){return z(a,b)}))));return a._C};f.prototype._n=function(){var a;null==(a=this.options).style&&(a.style={});this.options.sS={};this.options["class"]&&(this.options.className=this.options["class"]);this.options.url&&(this.options.href=this.options.url);null==(a=this.options).relatedInstance&&
(a.relatedInstance=this);null==(a=this.options).unpassableStates&&(a.unpassableStates=[]);null==(a=this.options).passStateToChildren&&(a.passStateToChildren=!0);this.options.stateTriggers=p.deep({hover:{on:"mouseenter",off:"mouseleave"},focus:{on:"focus",off:"blur"}},this.options.stateTriggers);this._ns()};f.prototype._ns=function(){var a,b,c,d,g;b=Object.keys(this.options.style);c=b.filter(function(a){return n.isStateStyle(a)});d=n.R(c.slice(),"$base");this._m=
c.filter(function(a){return"@"===a[0]});this._ps=c.map(function(a){return a.slice(1)});!n.In(c,"$base")&&b.length&&(c.length?(b=b.filter(function(a){return!n.isStateStyle(a)}),this.options.style.$base=p.clone.keys(b)(this.options.style)):this.options.style={$base:this.options.style});a=function(b){return function(c,d){var g,l,e,k,f,m;e=Object.keys(c).filter(function(a){return n.isStateStyle(a)});if(e.length)for(b.hS=!0,null==b._sShared&&(b._sShared=[]),g=
0,k=e.length;g<k;g++)l=e[g],f=d.concat(l.slice(1)),m=f.join("+"),b.options.sS[m]=b.options.style["$"+m]=c[l],a(c[l],f),delete c[l]}}(this);b=0;for(c=d.length;b<c;b++)g=d[b],a(this.options.style[g],[g.slice(1)])};f.prototype._a=function(){var a,b,c;(b=this.options.id||this.options.ref)&&this.attr("data-ref",this.ref=b);this.options.id&&(this.el.id=this.options.id);this.options.className&&(this.el.className=this.options.className);this.options.href&&(this.el.href=this.options.href);
this.options.type&&(this.el.type=this.options.type);this.options.name&&(this.el.name=this.options.name);this.options.value&&(this.el.value=this.options.value);this.options.selected&&(this.el.selected=this.options.selected);this.options.checked&&(this.el.checked=this.options.checked);if(this.options.props)for(a in c=this.options.props,c)b=c[a],this.prop(a,b);if(this.options.attrs)for(a in c=this.options.attrs,c)b=c[a],this.attr(a,b);this.options.styleAfterInsert||this.style(this.options.style.$base);
this.onInserted(function(a){return function(){var b,c;a.options.styleAfterInsert&&a.style(p.clone.apply(p,[a.options.style.$base].concat(slice.call(a._ss(a._as())))));b=a._I=a;c=a._m;if(c.length)return a._m=new function(){var a,d,g;a=0;for(d=c.length;a<d;a++)g=c[a],g=g.slice(1),this[g]=J.rg(b,g);return this}}}(this))};f.prototype._ae=function(){var a,b,c,d;b=this.options.stateTriggers;a=function(a){return function(b,c){var d,
g;g=e.St(c)?c:c.on;e.Ob(c)&&(d=c.off);a._l(g,function(){return a.state(b,!0)});if(d)return a._l(d,function(){return a.state(b,!1)})}}(this);for(c in b)d=b[c],a(c,d)};f.prototype._pp=function(){var a;a=void 0;return Object.defineProperty(this,"_p",{get:function(){return a},set:function(b){var c;if(a=b)if(c=this.parents.slice(-1)[0],c.raw===document.documentElement)this._up(b);else a.onInserted(function(c){return function(){if(a===b)return c._up(b)}}(this))}})};
f.prototype._up=function(a){var b,c,d;delete this._p;this._p=a;d=this._i;b=0;for(c=d.length;b<c;b++)a=d[b],a(this)};H=/\s+/;f.prototype.on=function(a,b){var c,d;e.St(a)&&e["function"](b)&&(d=a.split("."),c=d[1],a=d[0],a.split(H).forEach(function(a){return function(d){a._e[d]||(a._e[d]=[],a._l(d,function(b){var c,g,e,l;l=a._e[d];g=0;for(e=l.length;g<e;g++)c=l[g],c.call(a.el,b)}));c&&(a._e._R[c]=
b);return a._e[d].push(b)}}(this)));return this};f.prototype.off=function(a,b){var c,d;if(e.St(a))d=a.split("."),c=d[1],a=d[0],a.split(H).forEach(function(a){return function(d){if(a._e[d]){null==b&&(b=a._e._R[c]);if(e["function"](b))return n.R(a._e[d],b);if(!c)return a._e[d].length=0}}}(this));else for(d in this._e)this.off(d);return this};f.prototype.emit=function(a,b,c){var d;null==b&&(b=!0);null==c&&
(c=!0);a&&e.St(a)&&(d=document.createEvent("Event"),d.initEvent(a,b,c),this.el.dispatchEvent(d));return this};f.prototype.onInserted=function(a,b){null==b&&(b=!0);if(e["function"](a))return this._I?b&&a(this):this._i.push(a),this};f.prototype._l=function(a,b){this.el[this.el.addEventListener?"addEventListener":"attachEvent"](this.el.addEventListener?a:"on"+a,b);return this};f.prototype.updateOptions=function(a){e.Ob(a)&&(this.options=a,this._n(),
this._a(this.options));return this};f.prototype.state=function(a,b,c){var d,g,l,f,m,t,r,h,w;if(1===arguments.length)return n.In(this._s,a);if(this._sPipeTarget&&c!==this)return this._sPipeTarget.state(a,b,this),this;if(e.St(a)){"$"===a[0]&&(a=a.slice(1));l=!!b;if("base"===a)return this;g=this._as(a,!1);d=this._ss(g);if(this.state(a)!==l){if(m=this.options.style["$"+a]||this.options.style["@"+a])w=this._ps.indexOf(a),g=g.filter(function(a){return function(b){return a._ps.indexOf(b)>
w}}(this)),t=this._ss(g);l?(this._s.push(a),m&&this.style(p.clone.keys(m).apply(null,[m].concat(slice.call(t))))):(n.R(this._s,a),m&&(f=p.clone.keys(m).apply(null,[this.options.style.$base].concat(slice.call(d))),m=p.transform(function(){return null}).clone(m),this.style(p(m,f))))}if(this.hS)for(r=Object.keys(this.options.sS),r=r.filter(function(b){return n.In(b,a)}),g=0,t=r.length;g<t;g++)if(h=r[g],f=h.split("+"),m=f.length===f.filter(function(b){return function(c){return c===
a||b.state(c)}}(this)).length)m=this.options.sS[h],l?(n.In(this._sShared,h)||this._sShared.push(h),f=this.options.sS[n.R(f,a).join("+")],this.style(p.clone(f,m))):(n.R(this._sShared,h),f=p.clone.keys(m).apply(null,[this.options.style.$base].concat(slice.call(d))),m=p.transform(function(){return null}).clone(m),this.style(p(m,f)));if(this.options.passStateToChildren&&!n.In(this.options.unpassableStates,a))for(g=this._c,l=0,m=g.length;l<
m;l++)d=g[l],d.state(a,b,c||this);return this}};f.prototype.resetState=function(){var a,b,c,d;d=this._s.slice();b=0;for(c=d.length;b<c;b++)a=d[b],this.state(a,!1);return this};f.prototype.pipeState=function(a){var b,c,d,g;if(a){if(a=n.N(a),e.qE(a)&&a!==this)for(this._sPipeTarget=a,g=this._s,c=0,d=g.length;c<d;c++)b=g[c],a.state(b,!0)}else!1===a&&delete this._sPipeTarget;return this};f.prototype.style=function(){var a,b;if("text"!==this.type){a=arguments;if(e.St(a[0])){if(b=
E(this.el,a[0],a[1]),!e.De(a[1]))return this._I?b:b?"":b}else e.Ob(a[0])&&E(this.el,p.allowNull.transform(function(a){return function(b){return"function"===typeof b?b.call(a,a.options.relatedInstance):b}}(this)).clone(a[0]));return this}};f.prototype.styleSafe=function(a,b){var c,d;if("text"!==this.type)return c=arguments,d=this.style(a),e.St(d)?(b&&(d=0),d||this.el.style[c[0]]||this.options.style.$base[c[0]]||""):this};f.prototype._as=function(a,b){var c;null==b&&
(b=!0);c=this._ps.filter(function(b){return function(c){return n.In(b._s,c)&&c!==a}}(this));return b&&this.hS?c.concat(this._sShared):c};f.prototype._ss=function(a){return a.map(function(a){return function(b){return a.options.style["$"+b]||a.options.style["@"+b]}}(this))};Object.defineProperties(f.prototype,{rect:{get:function(){return this.el.getBoundingClientRect()}},width:{get:function(){return parseFloat(this.style("width"))}},height:{get:function(){return parseFloat(this.style("height"))}},
orientation:x={get:function(){return this.width>this.height?"landscape":"portrait"}},aspectRatio:A={get:function(){return this.width/this.height}}});f.prototype.attr=function(a,b){switch(b){case void 0:return this.el.getAttribute(a);case null:return this.el.removeAttribute(a);default:return this.el.setAttribute(a,b),this}};f.prototype.prop=function(a,b){switch(b){case void 0:return this.el[a];default:return this.el[a]=b,this}};f.prototype.toTemplate=function(){return h.template(this)};f.prototype.clone=
function(){var a,b,c,d,g,e,k;c=this.el.cloneNode(!1);c=p.clone(this.options,{existing:c});c=new f(this.type,c);e=this._s;b=0;for(g=e.length;b<g;b++)a=e[b],c.state(a,!0);e=this.children;b=0;for(g=e.length;b<g;b++)a=e[b],c.append(a.clone());k=this._e;for(d in k)for(b=k[d],g=0,e=b.length;g<e;g++)a=b[g],c.on(d,a);return c};f.prototype.append=function(a){var b;a&&(a=n.N(a),e.qE(a)&&((b=a.parent)&&b._r(a),this._c.push(a),this.el.appendChild(a.el),
a.parent));return this};f.prototype.appendTo=function(a){a&&(a=n.N(a),e.qE(a)&&a.append(this));return this};f.prototype.prepend=function(a){var b;a&&(a=n.N(a),e.qE(a)&&((b=a.parent)&&b._r(a),this._c.unshift(a),this.el.insertBefore(a.el,this.el.firstChild),a.parent));return this};f.prototype.prependTo=function(a){a&&(a=n.N(a),e.qE(a)&&a.prepend(this));return this};f.prototype.html=function(a){if(!e.De(a))return this.el.innerHTML;
this.el.innerHTML=a;return this};f.prototype.text=function(a){if(!e.De(a))return this.el.textContent;this.el.textContent=a;return this};f.prototype.after=function(a){var b;a&&this.parent&&(a=n.N(a),e.qE(a)&&(b=this.parent._c.indexOf(this),this.parent._c.splice(b+1,0,a),this.el.parentNode.insertBefore(a.el,this.el.nextSibling),a.parent));return this};f.prototype.insertAfter=function(a){a&&(a=n.N(a),e.qE(a)&&a.after(this));return this};
f.prototype.before=function(a){var b;a&&this.parent&&(a=n.N(a),e.qE(a)&&(b=this.parent._c.indexOf(this),this.parent._c.splice(b,0,a),this.el.parentNode.insertBefore(a.el,this.el),a.parent));return this};f.prototype.insertBefore=function(a){a&&(a=n.N(a),e.qE(a)&&a.before(this));return this};f.prototype.detach=function(){var a;null!=(a=this.parent)&&a._r(this);return this};f.prototype.remove=function(){var a;this.detach();this.resetState();
for(a in this._e)this._e[a].length=0;return this};f.prototype.empty=function(){var a,b,c,d;d=this.children.slice();b=0;for(c=d.length;b<c;b++)a=d[b],this._r(a);return this};f.prototype.wrap=function(a){var b;a&&(a=n.N(a),b=this.parent,e.qE(a)&&a!==this&&a!==this.parent&&(b&&b._r(this,a.parent?void 0:a),a.append(this)));return this};f.prototype.unwrap=function(){var a,b,c,d;if(b=this.parent)if(c=h.batch(b.children),d=b.next,a=b.parent)b.detach(),
d?c.insertBefore(d):c.appendTo(a);return this};f.prototype.replace=function(a){var b;a&&(a=n.N(a),e.qE(a)&&a!==this&&(a.detach(),null!=(b=this.parent)&&b._r(this,a)));return this};f.prototype._r=function(a,b){var c;c=this._c.indexOf(a);-1!==c&&(b?(this.el.replaceChild(b.el,a.el),this._c.splice(c,1,b)):(this.el.removeChild(a.el),this._c.splice(c,1)));return this};v={type:"window",el:window,raw:window,_e:{_R:{}}};v.on=
f.prototype.on;v.off=f.prototype.off;v.emit=f.prototype.emit;v._l=f.prototype._l;Object.defineProperties(v,{width:{get:function(){return window.innerWidth}},height:{get:function(){return window.innerHeight}},orientation:x,aspectRatio:A});J=new function(){var a,b;a=[];window.addEventListener("resize",function(){var b,d,g;d=0;for(g=a.length;d<g;d++)b=a[d],b()});this.pQ=function(a,b){var c,d;c=b.split("(");d=c[0];d=function(){switch(d){case "window":return v;case "parent":return a.parent;
case "self":return a;default:return a.parentMatching(function(a){return a.ref===d.slice(1)})}}();c=c[1].slice(0,-1).split(M).map(function(a){var b,c,e,g;e=a.split(":");a=parseFloat(e[1]);isNaN(a)&&(a=e[1]);c=e[0];b=c.slice(0,4);e="max-"===b;g=!e&&"min-"===b;if(e||g)c=c.slice(4);b=function(){switch(c){case "orientation":return function(){return d.orientation};case "aspect-ratio":return function(){return d.aspectRatio};case "width":case "height":return function(){return d[c]};default:return function(){var a,
b;b=d.style(c);a=parseFloat(b);return isNaN(a)?b:a}}}();return{key:c,value:a,min:g,max:e,getter:b}});return{source:d,rules:c}};this.rg=function(c,d){var e,f;f=this.pQ(c,d);a.push(e=function(){return b(c,f,d)});e();return f};b=function(a,b,e){var c,d,g,f,h;g=!0;f=b.rules;b=0;for(d=f.length;b<d&&(h=f[b],c=h.getter(),g=function(){switch(!1){case !h.min:return c>=h.value;case !h.max:return c<=h.value;default:return c===h.value}}(),g);b++);return a.state(e,g)};return this};M=/,\s*/;h=function(){var a,
b,c,d,g;a=1<=arguments.length?slice.call(arguments,0):[];switch(!1){case !e.template(a[0]):return a[0].spawn();case !e.qE(a[0]):return a[1]?a[0].updateOptions(a[1]):a[0];case !(e.dN(a[0])||e.domDoc(a[0])):if(a[0]._quickElement)return a[0]._quickElement;c=a[0].nodeName.toLowerCase().replace("#","");b=a[1]||{};b.existing=a[0];return new f(c,b);case a[0]!==window:return v;case !e.St(a[0]):c=a[0].toLowerCase();b="text"===c?e.Ob(a[1])?a[1]:{text:a[1]||""}:e.Ob(a[1])?a[1]:{};a=
a.slice(2);c=new f(c,b);d=0;for(g=a.length;d<g;d++)b=a[d],e.St(b)&&(b=h.text(b)),e.template(b)&&(b=h(b)),e.qE(b)&&b.appendTo(c);return c}};h.template=function(a){return new u(a,!0)};y=function(a,b){this.elements=a;this.rR=b;this.elements=this.elements.map(function(a){return h(a)});return this};y.prototype.reverse=function(){this.elements=this.elements.reverse();return this};y.prototype["return"]=function(a){return a?(this.rR=!0,this):this.lR};Object.keys(f.prototype).concat("css",
"replaceWith").forEach(function(a){return y.prototype[a]=function(){var b,c;c=this.lR=function(){var c,e,f,k;f=this.elements;k=[];c=0;for(e=f.length;c<e;c++)b=f[c],k.push(b[a].apply(b,arguments));return k}.apply(this,arguments);return this.rR?c:this}});h.batch=function(a,b){if(!e.iT(a))throw Error("Batch: expected an iT, got "+String(a));if(!a.length)throw Error("Batch: expected a non-empty element collection");return new y(a,b)};G={type:"div",options:{},children:[]};
u=function(a,b){this._config=b?D(a):a;return this};Object.keys(G).forEach(function(a){return Object.defineProperty(u.prototype,a,{get:function(){return this._config[a]}})});u.prototype.spawn=function(a,b){var c;c=B(this._config,a,b);return h.apply(null,[c.type,c.options].concat(slice.call(c.children)))};u.prototype.extend=function(a,b){return new u(B(this._config,a,b))};B=function(a,b,c){var d,g,f,k,h,n,r;c&&(d={options:function(a){return p(a,c)}});e.Ar(b)&&(b=D(b,!1));d=p.deep.notKeys("children").notDeep("relatedInstance").transform(d).clone(a,
b);a=a.children||[];n=(null!=b?b.children:void 0)||[];d.children=[];f=g=0;for(r=Math.max(a.length,n.length);0<=r?g<r:g>r;f=0<=r?++g:--g)k=!1,b=a[f],h=n[f],f=function(){switch(!1){case !e.template(h):return h;case !e.Ar(h):return k=D(h,!1);case !e.St(h):return k={type:"text",options:{text:h}};default:return k=h||!0}}(),k&&(f=b?b.extend(f,c):new u(p.deep.clone(G,f))),d.children.push(f);return d};D=function(a,b){var c;switch(!1){case !e.Ar(a):c={};if(e.St(a[0]))c.type=a[0];else throw Error(C+
" string for 'type', got '"+String(a[0])+"'");if(1<a.length&&!e.Ob(a[1])&&null!==a[1])throw Error(C+" object for 'options', got '"+String(a[1])+"'");c.options=a[1]?p.deep.clone(a[1]):null;c.children=a.slice(2);!1!==b&&(c.children=c.children.map(h.template));return c;case !(e.St(a)||e.dT(a)):return{type:"text",options:{text:a.textContent||a}};case !e.dE(a):return{type:a.nodeName.toLowerCase(),options:p.clone.keys(K)(a),children:[].map.call(a.childNodes,h.template)};case !e.qE(a):return{type:a.type,
options:p.clone.deep.notKeys("relatedInstance")(a.options),children:a.children.map(h.template)};case !e.template(a):return B(a._config);default:throw Error(C+" (array || string || dE || qE || template), got "+String(a));}};C="Template Parse Error: expected";I="link:a anchor:a a text div span h1 h2 h3 h4 h5 h6 header footer section button br ul ol li fieldset input textarea select option form frame hr iframe img picture main nav meta object pre style table tbody th tr td tfoot video".split(" ");
A=function(a){var b,c;b=c=a;n.In(a,":")&&(a=a.split(":"),b=a[0],c=a[1]);return h[b]=function(){return h.apply(null,[c].concat(slice.call(arguments)))}};x=0;for(L=I.length;x<L;x++)N=I[x],A(N);h.version="1.0.21";return null!=("undefined"!==typeof module&&null!==module?module.exports:void 0)?module.exports=h:"function"===typeof define&&define.amd?define(["quickdom"],function(){return h}):this.Dom=h})();
