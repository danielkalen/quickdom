(function(t,e){if(t=function(e,n,i){return function(r){if(!n[r])throw new Error(r+" is not a module");return e[r]?e[r].exports:(e[r]={exports:{}},e[r].exports=n[r].call(i,t,e[r],e[r].exports))}}({},{33:function(t,e,n){var i;return e.exports=i=function(){function StateChain(t){this.St=t.join("+"),this.Ar=t.slice(),this.length=t.length}return StateChain.prototype.In=function(t){var e,n,i,r;for(e=0,n=(i=this.Ar).length;e<n;e++)if((r=i[e])===t)return!0;return!1},StateChain.prototype.without=function(t){return this.Ar.filter(function(e){return e!==t}).join("+")},StateChain.prototype.isApplicable=function(t,e){var n;return(n=this.Ar.filter(function(n){return n===t||-1!==e.indexOf(n)})).length===this.Ar.length},StateChain}(),e.exports},2:function(t,e,n){var n,i,r,s,o;return i=t(16),o=function(t){var e,n,i,r;if(t){if(r={},"object"!=typeof t)r[t]=!0;else for(Array.isArray(t)||(t=Object.keys(t)),e=0,i=t.length;e<i;e++)r[n=t[e]]=!0;return r}},s=function(t){var e;return e=function(t){for(var n,r=arguments.length,s=-1,o=new Array(r);++s<r;)o[s]=arguments[s];return e.options.target?n=e.options.target:(n=t,o.shift()),i(e.options,n,o)},t&&(e.isBase=!0),e.options={},Object.defineProperties(e,r),e},r={deep:{get:function(){var t;return t=this.isBase?s():this,t.options.deep=!0,t}},own:{get:function(){var t;return t=this.isBase?s():this,t.options.own=!0,t}},allowNull:{get:function(){var t;return t=this.isBase?s():this,t.options.allowNull=!0,t}},nullDeletes:{get:function(){var t;return t=this.isBase?s():this,t.options.nullDeletes=!0,t}},concat:{get:function(){var t;return t=this.isBase?s():this,t.options.concat=!0,t}},clone:{get:function(){var t;return t=this.isBase?s():this,t.options.target={},t}},notDeep:{get:function(){var t;return t=this.isBase?s():this,function(e){return t.options.notDeep=o(e),t}}},deepOnly:{get:function(){var t;return t=this.isBase?s():this,function(e){return t.options.deepOnly=o(e),t}}},keys:{get:function(){var t;return t=this.isBase?s():this,function(e){return t.options.keys=o(e),t}}},notKeys:{get:function(){var t;return t=this.isBase?s():this,function(e){return t.options.notKeys=o(e),t}}},transform:{get:function(){var t;return t=this.isBase?s():this,function(e){return"function"==typeof e?t.options.globalTransform=e:e&&"object"==typeof e&&(t.options.transforms=e),t}}},filter:{get:function(){var t;return t=this.isBase?s():this,function(e){return"function"==typeof e?t.options.globalFilter=e:e&&"object"==typeof e&&(t.options.filters=e),t}}}},e.exports=n=s(!0),n.version="1.7.2",e.exports},18:function(t,e,n){var i,r;return r={natives:t(31),dom:t(32)},i=function(){function Checks(t){var e,n,i;for(null==t&&(t=["natives"]),e=0,n=t.length;e<n;e++)i=t[e],r[i]&&this.load(r[i])}return Checks.prototype.create=function(){var t;return arguments.length&&(t=Array.prototype.slice.call(arguments)),new Checks(t)},Checks.prototype.load=function(t){var e,n;if(r.natives.St(t)&&(t=r[t]),r.natives.ObP(t))for(e in t)n=t[e],this[e]=n},Checks}(),e.exports=i.prototype.create(),e.exports},32:function(t,e,n){var n;return e.exports=n={domDoc:function(t){return t&&9===t.nodeType},dE:function(t){return t&&1===t.nodeType},dT:function(t){return t&&3===t.nodeType},dN:function(t){return n.dE(t)||n.dT(t)},dTarea:function(t){return t&&"TEXTAREA"===t.nodeName},domInput:function(t){return t&&"INPUT"===t.nodeName},domSelect:function(t){return t&&"SELECT"===t.nodeName},domField:function(t){return n.domInput(t)||n.dTarea(t)||n.domSelect(t)}},e.exports},1:function(t,e,n){var i,r,s,o,u;r=["webkit","moz","ms","o"],o=["background-position-x","background-position-y","block-size","border-width","columnRule-width","cx","cy","font-size","grid-column-gap","grid-row-gap","height","inline-size","line-height","minBlock-size","min-height","min-inline-size","min-width","max-height","max-width","outline-offset","outline-width","perspective","shape-margin","stroke-dashoffset","stroke-width","text-indent","width","word-spacing","top","bottom","left","right","x","y"],u=["top","bottom","left","right"],(s=["margin","padding","border","border-radius"]).forEach(function(t){var e,n,i;for(o.push(t),n=0,i=u.length;n<i;n++)e=u[n],o.push(t+"-"+e)});var h,l,a,c,p,f,d,y;return f=document.createElement("div").style,a=/^\d+(?:[a-z]|\%)+$/i,h=/\d+$/,c=/\s/,l=/([A-Z])+/g,p={},p.In=function(t,e){return t&&-1!==t.indexOf(e)},p.isIterable=function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&!t.nodeType},p.isPropSupported=function(t){return void 0!==f[t]},p.toKebabCase=function(t){return t.replace(l,function(t,e){return"-"+e.toLowerCase()})},p.normalizeProperty=function(t){return t=p.toKebabCase(t),p.isPropSupported(t)?t:""+p.getPrefix(t,!0)+t},p.getPrefix=function(t,e){var n,i,s;if(e||!p.isPropSupported(t))for(n=0,i=r.length;n<i;n++)if(s=r[n],p.isPropSupported("-"+s+"-"+t))return"-"+s+"-";return""},p.normalizeValue=function(t,e){return p.In(o,t)&&null!==e&&(e=""+e,!h.test(e)||a.test(e)||c.test(e)||(e+="line-height"===t?"em":"px")),e},y=null,d="",p.inlineStyle=function(t){if(y||((y=document.createElement("style")).id="quickcss",document.head.appendChild(y)),!p.In(d,t))return y.innerHTML=d+=t},i=function(t,e,n){var r,s,o,u,h,l;if(p.isIterable(t))for(s=0,o=t.length;s<o;s++)u=t[s],i(u,e,n);else if("object"==typeof e)for(h in e)l=e[h],i(t,h,l);else{if(e=p.normalizeProperty(e),void 0===n)return(r=t._computedStyle||(t._computedStyle=getComputedStyle(t)))[e];e&&(t.style[e]=p.normalizeValue(e,n))}},i.animation=function(t,e){var n,i,r,s,o,u;if(t&&"string"==typeof t&&e&&"object"==typeof e){r=p.getPrefix("animation"),i="";for(n in e){o=e[n],i+=n+" {";for(s in o)u=o[s],i+=(s=p.normalizeProperty(s))+": "+(u=p.normalizeValue(s,u))+";";i+="}"}return i="@"+r+"keyframes "+t+" {"+i+"}",p.inlineStyle(i)}},i.version="1.1.2",e.exports=i,e.exports},31:function(t,e,n){var n;return e.exports=n={De:function(t){return void 0!==t},Ar:function(t){return t instanceof Array},Ob:function(t){return"object"==typeof t&&t},ObP:function(t){return n.Ob(t)&&"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object},St:function(t){return"string"==typeof t},Nu:function(t){return"number"==typeof t&&!isNaN(t)},numberLoose:function(t){return n.Nu(t)||n.St(t)&&n.Nu(Number(t))},function:function(t){return"function"==typeof t},iT:function(t){return n.Ob(t)&&n.Nu(t.length)}},e.exports},0:function(t,e,n){var i,r;r="http://www.w3.org/2000/svg";var s=t(1),o=t(2),u,h;h=["id","name","type","href","selected","checked","className"],u=["id","ref","type","name","text","style","class","className","url","href","selected","checked","props","attrs","passStateToChildren","stateTriggers"];var l;(l={}).In=function(t,e){return t&&-1!==t.indexOf(e)},l.R=function(t,e){var n;return-1!==(n=t.indexOf(e))&&t.splice(n,1),t},l.N=function(t){switch(!1){case!a.dN(t):return i(t);case!a.St(t):return i.text(t);default:return t}},l.isStateStyle=function(t){return"$"===t[0]||"@"===t[0]};var a;a=t(18),(a=a.create("natives","dom")).load({qE:function(t){return t&&t.constructor.name===c.name},template:function(t){return t&&t.constructor.name===k.name}});var c;null==(c=function(){function QuickElement(t,e){this.type=t,this.options=e,this.el=this.options.existing||("text"===this.type?document.createTextNode("string"==typeof this.options.text?this.options.text:""):"*"===this.type[0]?document.createElementNS(r,this.type.slice(1)):document.createElement(this.type)),"text"===this.type&&(this.append=this.prepend=this.attr=function(){}),this._p=null,this._st={},this._s=[],this._c=[],this._i=[],this._n(),this._a(),this._ae(),this._pp(),this.options.existing&&this._rP(),this.el._quickElement=this}return QuickElement.prototype.toJSON=function(){var t,e,n,i,r;for(r=[this.type,o.clone.keys(u)(this.options)],n=0,i=(e=this.children).length;n<i;n++)t=e[n],r.push(t.toJSON());return r},QuickElement}()).name&&(c.name="QuickElement"),Object.defineProperties(c.prototype,{raw:{get:function(){return this.el}},0:{get:function(){return this.el}},css:{get:function(){return this.style}},replaceWith:{get:function(){return this.replace}}});var p,f,d,y=[].slice;c.prototype.parentsUntil=function(t){return d(this,t)},c.prototype.parentMatching=function(t){var e;if(a.function(t))for(e=this.parent;e;){if(t(e))return e;e=e.parent}},c.prototype.query=function(t){return i(this.raw.querySelector(t))},c.prototype.queryAll=function(t){var e,n,i,r,s;for(r=[],e=0,i=(s=this.raw.querySelectorAll(t)).length;e<i;e++)n=s[e],r.push(n);return new O(r)},Object.defineProperties(c.prototype,{children:{get:function(){var t,e,n,r;if(this.el.childNodes.length!==this._c.length)for(this._c.length=0,e=0,n=(r=this.el.childNodes).length;e<n;e++)(t=r[e]).nodeType<4&&this._c.push(i(t));return this._c}},parent:{get:function(){return this._p&&this._p.el===this.el.parentNode||a.domDoc(this.el.parentNode)||(this._p=i(this.el.parentNode)),this._p}},parents:{get:function(){return d(this)}},next:{get:function(){return i(this.el.nextSibling)}},prev:{get:function(){return i(this.el.previousSibling)}},nextAll:{get:function(){var t,e;for(e=[],t=i(this.el.nextSibling);t;)e.push(t),t=t.next;return e}},prevAll:{get:function(){var t,e;for(e=[],t=i(this.el.previousSibling);t;)e.push(t),t=t.prev;return e}},siblings:{get:function(){return this.prevAll.reverse().concat(this.nextAll)}},child:{get:function(){return this._C||p(this)}},childf:{get:function(){return p(this,!0)}},index:{get:function(){var t;return(t=this.parent)?t.children.indexOf(this):null}},indexType:{get:function(){return f(this,"type")}},indexRef:{get:function(){return f(this,"ref")}}}),d=function(t,e){var n,i;for(a.function(e)||(e=void 0),i=[],n=t.parent;n;)i.push(n),n=n.parent,e&&e(n)&&(n=null);return i},p=function(t,e){var n,i;return!e&&t._C||(t._C={}),i=t._C,t.ref&&(i[t.ref]=t),(n=t.children).length&&o.apply(null,[t._C].concat(y.call(n.map(function(t){return p(t,e)})))),t._C},f=function(t,e){var n;return(n=t.parent)?n.children.filter(function(n){return n[e]===t[e]}).indexOf(t):null};var g,y=[].slice;g={hover:{on:"mouseenter",off:"mouseleave",bubbles:!0},focus:{on:"focus",off:"blur",bubbles:!0}},c.prototype._n=function(){var t,e,n;this.options.class&&(this.options.className=this.options.class),this.options.url&&(this.options.href=this.options.url),this.related=null!=(t=this.options).relatedInstance?t.relatedInstance:t.relatedInstance=this,null==(e=this.options).unpassableStates&&(e.unpassableStates=[]),null==(n=this.options).passStateToChildren&&(n.passStateToChildren=!0),this.options.stateTriggers=this.options.stateTriggers?o.clone.deep(g,this.options.stateTriggers):g,"text"===this.type?this._parseText():this._ns()},c.prototype._ns=function(){var e,n,i,r,s,u,h,c,p;if(a.ObP(this.options.style))for(p=(i=Object.keys(this.options.style)).filter(function(t){return l.isStateStyle(t)}),s=l.R(p.slice(),"$base"),this._m=p.filter(function(t){return"@"===t[0]}).map(function(t){return t.slice(1)}),this._ps=p.map(function(t){return t.slice(1)}),l.In(p,"$base")?this._st.base=this.options.style.$base:p.length?this._st.base=o.clone.notKeys(p)(this.options.style):this._st.base=this.options.style,e=function(n){return function(i,r){var s,o,u,h,a,c,p,f;for(h={},s=!1,o=0,u=(f=Object.keys(i)).length;o<u;o++)a=f[o],l.isStateStyle(a)?(r.push(p=a.slice(1)),c=new(t(33))(r),null==n._sShared&&(n._sShared=[]),null==n._psh&&(n._psh=[]),n._psh.push(c),"@"===a[0]&&n._m.push(p),n._st[c.St]=e(i[a],r)):(s=!0,h[a]=i[a]);if(s)return h}}(this),n=0,r=s.length;n<r;n++)c=(u=s[n]).slice(1),(h=e(this.options.style[u],[c]))&&(this._st[c]=h)},c.prototype._parseText=function(){var t,e,n,i;if(a.ObP(this.options.text))for(i=Object.keys(this.options.text).map(function(t){return t.slice(1)}),this._ps=i.filter(function(t){return"base"!==t}),this._t={base:""},t=0,e=i.length;t<e;t++)n=i[t],this._t[n]=this.options.text["$"+n]},c.prototype._a=function(){var t,e,n,i,r,s,u,h;if((i=this.options.id||this.options.ref)&&this.attr("data-ref",this.ref=i),this.options.id&&(this.el.id=this.options.id),this.options.className&&(this.el.className=this.options.className),this.options.src&&(this.el.src=this.options.src),this.options.href&&(this.el.href=this.options.href),this.options.type&&(this.el.type=this.options.type),this.options.name&&(this.el.name=this.options.name),this.options.value&&(this.el.value=this.options.value),this.options.selected&&(this.el.selected=this.options.selected),this.options.checked&&(this.el.checked=this.options.checked),this.options.props){r=this.options.props;for(n in r)h=r[n],this.prop(n,h)}if(this.options.attrs){s=this.options.attrs;for(n in s)h=s[n],this.attr(n,h)}if(this.options.styleAfterInsert||this.style(this._st.base),this._t&&(this.text=this._t.base),this.onInserted(function(t){return function(){var e,n;if(t.options.styleAfterInsert&&t.style(o.clone.apply(o,[t._st.base].concat(y.call(t._SS(t._as()))))),e=t._I=t,(n=t._m)&&t._m.length)return t._m=new function(){var t,i,r;for(t=0,i=n.length;t<i;t++)this[r=n[t]]=w.rg(e,r);return this}}}(this)),this.options.recalcOnResize&&window.addEventListener("resize",function(t){return function(){return t.recalcStyle()}}(this)),this.options.events){u=this.options.events;for(t in u)e=u[t],this.on(t,e)}},c.prototype._ae=function(t){var e,n,i,r;n=this.options.stateTriggers,e=function(e){return function(n,i){var r,s;if(l.In(e._ps,n)||t||i.force)return s=a.St(i)?i:i.on,a.Ob(i)&&(r=i.off),e._l(s,function(){return e.state(n,!0,i.bubbles)}),r?e._l(r,function(){return e.state(n,!1,i.bubbles)}):void 0}}(this);for(i in n)e(i,r=n[i])},c.prototype._pp=function(){var t;return t=void 0,Object.defineProperty(this,"_p",{get:function(){return t},set:function(e){var n;(t=e)&&((n=this.parents.slice(-1)[0]).raw===document.documentElement?this._up(e):t.onInserted(function(n){return function(){if(t===e)return n._up(e)}}(this)))}})},c.prototype._up=function(t){var e,n,i,r;for(delete this._p,this._p=t,n=0,i=(r=this._i).length;n<i;n++)(e=r[n])(this)};var _;_=/\s+/,c.prototype.on=function(t,e,n){var i,r;return null==this._e&&(this._e={_R:{}}),a.St(t)&&a.function(e)&&(r=t.split("."),i=r[1],(t=r[0]).split(_).forEach(function(t){return function(r){return t._e[r]||(t._e[r]=[],t._l(r,function(e){return t._ih(r,e)},n)),i&&(t._e._R[i]=e),t._e[r].push(e)}}(this))),this},c.prototype.once=function(t,e){var n;return a.St(t)&&a.function(e)&&this.on(t,n=function(i){return function(r){return i.off(t,n),e.call(i.el,r)}}(this)),this},c.prototype.off=function(t,e){var n,i,r;if(null==this._e&&(this._e={_R:{}}),a.St(t))r=t.split("."),n=r[1],(t=r[0]).split(_).forEach(function(t){return function(i){if(t._e[i]){if(null==e&&(e=t._e._R[n]),a.function(e))return l.R(t._e[i],e);if(!n)return t._e[i].length=0}}}(this));else for(i in this._e)this.off(i);return this},c.prototype.emit=function(t,e,n){var i;return null==e&&(e=!0),null==n&&(n=!0),t&&a.St(t)&&((i=document.createEvent("Event")).initEvent(t,e,n),this.el.dispatchEvent(i)),this},c.prototype.emitPrivate=function(t,e){var n;return t&&a.St(t)&&(null!=(n=this._e)?n[t]:void 0)&&this._ih(t,e),this},c.prototype.onInserted=function(t,e){if(null==e&&(e=!0),a.function(t))return this._I?e&&t(this):this._i.push(t),this},c.prototype._ih=function(t,e){var n,i,r,s;for(r=0,s=(n=this._e[t].slice()).length;r<s;r++)(i=n[r]).call(this,e)},c.prototype._l=function(t,e,n){var i,r;return r=this.el.addEventListener?"addEventListener":"attachEvent",i=this.el.addEventListener?t:"on"+t,this.el[r](i,e,n),this};var v,y=[].slice;v=[],c.prototype.state=function(t,e,n,i){var r,s,o,u,h,c,p,f,d,y,g;if(1===arguments.length){if(a.St(t))return l.In(this._s,t);if(a.Ob(t)){for(p=Object.keys(t),u=-1;c=p[++u];)this.state(c,t[c]);return this}}else{if(this._sPipeTarget&&i!==this)return this._sPipeTarget.state(t,e,n,this),this;if(a.St(t)){if("$"===t[0]&&(t=t.slice(1)),"base"===t)return this;if(o=!!e,r=this._as(t,!1),this.state(t)!==o&&(d="text"===this.type?"Text":"Style",o?(this._s.push(t),g="ON"):(l.R(this._s,t),g="OFF"),this["_T"+d+g](t,r),this.emitPrivate("stateChange:"+t,o)),!l.In(this.options.unpassableStates,t))if(n)this.parent&&this._p.state(t,e,!0,i||this);else if(this.options.passStateToChildren)for(h=0,f=(y=this._c).length;h<f;h++)(s=y[h]).state(t,e,!1,i||this);return this}}},c.prototype.resetState=function(){var t,e,n,i;for(e=0,n=(i=this._s.slice()).length;e<n;e++)t=i[e],this.state(t,!1);return this},c.prototype.pipeState=function(t){var e,n,i,r;if(t){if(t=l.N(t),a.qE(t)&&t!==this)for(this._sPipeTarget=t,n=0,i=(r=this._s).length;n<i;n++)e=r[n],t.state(e,!0)}else!1===t&&delete this._sPipeTarget;return this},c.prototype._as=function(t,e){var n;return null==e&&(e=!0),this._ps?(n=this._ps.filter(function(e){return function(n){return l.In(e._s,n)&&n!==t}}(this)),e&&this._psh?n.concat(this._sShared):n):v},c.prototype._ss=function(t,e){var n,i;return i=this._ps.indexOf(t),n=e.filter(function(t){return function(e){return t._ps.indexOf(e)>i}}(this))},c.prototype._shs=function(t){var e;return e=this._s,this._psh.filter(function(n){return n.In(t)&&n.isApplicable(t,e)})},c.prototype._SS=function(t){return t.map(function(t){return function(e){return t._st[e]}}(this))},c.prototype._TStyleON=function(t,e){var n,i,r,s,u,h,a;if((a=this._st[t])&&(h=this._SS(this._ss(t,e)),this.style(o.clone.keys(a).apply(null,[a].concat(y.call(h))))),this._psh)for(i=0,r=(s=this._shs(t)).length;i<r;i++)u=s[i],l.In(this._sShared,u.St)||this._sShared.push(u.St),a=this._st[u.St],u.length>2?(n=this._st[u.without(t)],this.style(o.clone(n,a))):this.style(a)},c.prototype._TStyleOFF=function(t,e){var n,i,r,s,u,h,a,c;if((c=this._st[t])&&(n=this._SS(e),h=o.clone.keys(c).apply(null,[this._st.base].concat(y.call(n))),a=o.transform(function(){return null}).clone(c),this.style(o(a,h))),this._psh)for(s=this._shs(t),null==n&&(n=this._SS(e)),i=0,r=s.length;i<r;i++)u=s[i],l.R(this._sShared,u.St),c=this._st[u.St],this._sShared.length&&n.push.apply(n,this._sShared.filter(function(e){return!l.In(e,t)}).map(function(t){return function(e){return t._st[e]}}(this))),h=o.clone.keys(c).apply(null,[this._st.base].concat(y.call(n))),a=o.transform(function(){return null}).clone(c),this.style(o(a,h))},c.prototype._TTextON=function(t,e){var n,i;this._t&&a.St(i=this._t[t])&&((n=this._ss(t,e)).length||(this.text=i))},c.prototype._TTextOFF=function(t,e){var n;this._t&&a.St(n=this._t[t])&&(e=e.filter(function(e){return e!==t}),null==(n=this._t[e[e.length-1]])&&(n=this._t.base),this.text=n)};var m,b,y=[].slice;c.prototype.style=function(t){var e,n,i,r,o,u;if("text"!==this.type){if(e=arguments,a.St(t)){if(o=s(this.el,t,e[1]),1===e.length)return this._I?o:o?"":o}else if(a.Ob(t))for(r=Object.keys(t),n=-1;i=r[++n];)u="function"==typeof t[i]?t[i].call(this,this.related):t[i],s(this.el,i,u);return this}},c.prototype.styleSafe=function(t,e){var n,i,r;if("text"!==this.type)return a.St(this.el.style[t])?(n=e?0:this.style(t),"function"==typeof(r=n||this.el.style[t]||(null!=(i=this._st.base)?i[t]:void 0)||"")?r.call(this,this.related):r):this},c.prototype.styleParsed=function(t,e){return parseFloat(this.styleSafe(t,e))},c.prototype.recalcStyle=function(t){var e,n,i,r,s,u;if(e=this._SS(this._as()),u=o.clone.filter(function(t){return"function"==typeof t}).apply(null,[this._st.base].concat(y.call(e))),this.style(u),t)for(i=0,r=(s=this._c).length;i<r;i++)(n=s[i]).recalcStyle();return this},c.prototype.show=function(t){var e;return null==t&&(t=(null!=(e=this._st.base)?e.display:void 0)||"block"),this.style("display",t)},c.prototype.hide=function(){return this.style("display","none")},Object.defineProperties(c.prototype,{rect:{get:function(){return this.el.getBoundingClientRect()}},width:{get:function(){return parseFloat(this.style("width"))}},height:{get:function(){return parseFloat(this.style("height"))}},orientation:b={get:function(){return this.width>this.height?"landscape":"portrait"}},aspectRatio:m={get:function(){return this.width/this.height}}}),c.prototype.attr=function(t,e){switch(e){case void 0:return this.el.getAttribute(t);case null:return this.el.removeAttribute(t);default:return this.el.setAttribute(t,e),this}},c.prototype.prop=function(t,e){switch(e){case void 0:return this.el[t];default:return this.el[t]=e,this}},c.prototype.toTemplate=function(){return i.template(this)},c.prototype.clone=function(){var t,e,n,i,r,s,u,h,l,a,p,f,d,y,g,_,v;for(r=this.el.cloneNode(!1),y=o.clone(this.options,{existing:r}),d=new c(this.type,y),u=0,a=(g=this._s).length;u<a;u++)t=g[u],d.state(t,!0);for(h=0,p=(_=this.children).length;h<p;h++)i=_[h],d.append(i.clone());v=this._e;for(s in v)for(l=0,f=(n=v[s]).length;l<f;l++)e=n[l],d.on(s,e);return d},c.prototype.append=function(t){var e;return t&&(t=l.N(t),a.qE(t)&&((e=t.parent)&&e._r(t),this._c.push(t),this.el.appendChild(t.el),t._rP())),this},c.prototype.appendTo=function(t){return t&&(t=l.N(t),a.qE(t)&&t.append(this)),this},c.prototype.prepend=function(t){var e;return t&&(t=l.N(t),a.qE(t)&&((e=t.parent)&&e._r(t),this._c.unshift(t),this.el.insertBefore(t.el,this.el.firstChild),t._rP())),this},c.prototype.prependTo=function(t){return t&&(t=l.N(t),a.qE(t)&&t.prepend(this)),this},c.prototype.after=function(t){var e;return t&&this.parent&&(t=l.N(t),a.qE(t)&&(e=this.parent._c.indexOf(this),this.parent._c.splice(e+1,0,t),this.el.parentNode.insertBefore(t.el,this.el.nextSibling),t._rP())),this},c.prototype.insertAfter=function(t){return t&&(t=l.N(t),a.qE(t)&&t.after(this)),this},c.prototype.before=function(t){var e;return t&&this.parent&&(t=l.N(t),a.qE(t)&&(e=this.parent._c.indexOf(this),this.parent._c.splice(e,0,t),this.el.parentNode.insertBefore(t.el,this.el),t._rP())),this},c.prototype.insertBefore=function(t){return t&&(t=l.N(t),a.qE(t)&&t.before(this)),this},c.prototype.detach=function(){var t;return null!=(t=this.parent)&&t._r(this),this},c.prototype.remove=function(){var t;if(this.detach(),this.resetState(),this._e)for(t in this._e)this._e[t].length=0;return this},c.prototype.empty=function(){var t,e,n,i;for(e=0,n=(i=this.children.slice()).length;e<n;e++)t=i[e],this._r(t);return this},c.prototype.wrap=function(t){var e;return t&&(t=l.N(t),e=this.parent,a.qE(t)&&t!==this&&t!==this.parent&&(e&&e._r(this,t.parent?void 0:t),t.append(this))),this},c.prototype.unwrap=function(){var t,e,n,r;return(e=this.parent)&&(n=i.batch(e.children),r=e.next,(t=e.parent)&&(e.detach(),r?n.insertBefore(r):n.appendTo(t))),this},c.prototype.replace=function(t){var e;return t&&(t=l.N(t),a.qE(t)&&t!==this&&(t.detach(),null!=(e=this.parent)&&e._r(this,t),t._rP())),this},c.prototype.hasClass=function(t){return l.In(this.classList,t)},c.prototype.addClass=function(t){var e,n;return e=this.classList,-1===(n=e.indexOf(t))&&(e.push(t),this.raw.className=e.length>1?e.join(" "):e[0]),this},c.prototype.removeClass=function(t){var e,n;return e=this.classList,-1!==(n=e.indexOf(t))&&(e.splice(n,1),this.raw.className=e.length?e.join(" "):""),this},c.prototype.toggleClass=function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t),this},c.prototype._rP=function(){return this.parent},c.prototype._r=function(t,e){var n;return-1!==(n=this.children.indexOf(t))&&(e?(this.el.replaceChild(e.el,t.el),this._c.splice(n,1,e)):(this.el.removeChild(t.el),this._c.splice(n,1))),this},Object.defineProperties(c.prototype,{html:{get:function(){return this.el.innerHTML},set:function(t){return this.el.innerHTML=t}},text:{get:function(){return this.el.textContent},set:function(t){return this.el.textContent=t}},classList:{get:function(){var t;return""===(t=this.raw.className.split(/\s+/))[t.length-1]&&t.pop(),""===t[0]&&t.shift(),t}}}),c.prototype.updateOptions=function(t){return a.Ob(t)&&(this.options=t,this._n(),this._a(this.options)),this},c.prototype.applyData=function(t){var e,n,i,r,s,o,u,h,l,a;if(n=this.options.computers)for(i=this.options.defaults,r=0,h=(u=Object.keys(n)).length;r<h;r++)o=u[r],t&&t.hasOwnProperty(o)?this._runComputer(o,t[o]):i&&i.hasOwnProperty(o)&&this._runComputer(o,i[o]);for(s=0,l=(a=this._c).length;s<l;s++)(e=a[s]).applyData(t)},c.prototype._runComputer=function(t,e){return this.options.computers[t].call(this,e)};var x;(x={type:"window",el:window,raw:window,_e:{_R:{}}}).on=c.prototype.on,x.off=c.prototype.off,x.emit=c.prototype.emit,x.emitPrivate=c.prototype.emitPrivate,x._l=c.prototype._l,x._ih=c.prototype._ih,Object.defineProperties(x,{width:{get:function(){return window.innerWidth}},height:{get:function(){return window.innerHeight}},orientation:b,aspectRatio:m});var w,S;w=new function(){var t,e;return t=[],window.addEventListener("resize",function(){var e,n,i;for(n=0,i=t.length;n<i;n++)(e=t[n])()}),this.pQ=function(t,e){var n,i,r;return n=e.split("("),r=n[0],r=function(){switch(r){case"window":return x;case"parent":return t.parent;case"self":return t;default:return t.parentMatching(function(t){return t.ref===r.slice(1)})}}(),i=n[1].slice(0,-1).split(S).map(function(t){var e,n,i,s,o,u,h;return u=t.split(":"),h=parseFloat(u[1]),isNaN(h)&&(h=u[1]),n=u[0],i=n.slice(0,4),s="max-"===i,o=!s&&"min-"===i,(s||o)&&(n=n.slice(4)),e=function(){switch(n){case"orientation":return function(){return r.orientation};case"aspect-ratio":return function(){return r.aspectRatio};case"width":case"height":return function(){return r[n]};default:return function(){var t,e;return e=r.style(n),t=parseFloat(e),isNaN(t)?e:t}}}(),{key:n,value:h,min:o,max:s,getter:e}}),{source:r,rules:i}},this.rg=function(n,i){var r,s;return(s=this.pQ(n,i)).source&&(t.push(r=function(){return e(n,s,i)}),r()),s},e=function(t,e,n){var i,r,s,o,u,h;for(o=!0,r=0,s=(u=e.rules).length;r<s&&(h=u[r],i=h.getter(),o=function(){switch(!1){case!h.min:return i>=h.value;case!h.max:return i<=h.value;default:return i===h.value}}());r++);return t.state(n,o)},this},S=/,\s*/,(i=function(){var t,e,n,r,s,o,u,h,l,p;switch(t=arguments,!1){case!a.Ar(t[0]):return i.apply(null,t[0]);case!a.template(t[0]):return t[0].spawn();case!a.qE(t[0]):return t[1]?t[0].updateOptions(t[1]):t[0];case!(a.dN(t[0])||a.domDoc(t[0])):return t[0]._quickElement?t[0]._quickElement:(p=t[0].nodeName.toLowerCase().replace("#",""),l=t[1]||{},l.existing=t[0],new c(p,l));case t[0]!==window:return x;case!a.St(t[0]):if(p=t[0].toLowerCase(),l="text"===p?a.Ob(t[1])?t[1]:{text:t[1]||""}:a.Ob(t[1])?t[1]:{},s=new c(p,l),t.length>2){for(r=[],o=1,e=t.length;++o<e;)r.push(t[o]);for(u=0,h=r.length;u<h;u++)n=r[u],a.St(n)&&(n=i.text(n)),a.template(n)&&(n=n.spawn(!1)),a.Ar(n)&&(n=i.apply(null,n)),a.qE(n)&&n.appendTo(s)}return s}}).template=function(t){return new k(t,!0)},i.html=function(t){var e,n;return n=document.createElement("div"),n.innerHTML=t,e=Array.prototype.slice.call(n.childNodes),i.batch(e)},i.isTemplate=function(t){return a.template(t)},i.isQuickEl=function(t){return a.qE(t)},i.isEl=function(t){return a.dE(t)};var O;null==(O=function(){function QuickBatch(t,e){this.rR=e,this.elements=t.map(function(t){return i(t)})}return QuickBatch.prototype.reverse=function(){return this.elements=this.elements.reverse(),this},QuickBatch.prototype.return=function(t){return t?(this.rR=!0,this):this.lR},QuickBatch}()).name&&(O.name="QuickBatch"),Object.keys(c.prototype).concat("css","replaceWith","html","text").forEach(function(t){return O.prototype[t]=function(e){var n,i;return i=this.lR=function(){var i,r,s,o;for(o=[],i=0,r=(s=this.elements).length;i<r;i++)n=s[i],"html"===t||"text"===t?e?o.push(n[t]=e):o.push(n[t]):o.push(n[t].apply(n,arguments));return o}.apply(this,arguments),this.rR?i:this}}),i.batch=function(t,e){if(!a.iT(t))throw new Error("Batch: expected an iT, got "+String(t));if(!t.length)throw new Error("Batch: expected a non-empty element collection");return new O(t,e)};var k,y=[].slice,E,T;T=function(t,e,n){var i,r,s,u,h,l,c,p,f,d,y,g,_,v;if(n&&(s={options:function(t){return o(t,n)}}),a.Ar(e)&&(e=C(e,!1)),a.template(e)&&(e=e._config),y=o.deep.nullDeletes.notKeys("children").notDeep(["relatedInstance","data"]).transform(s).clone(t,e),r=t.children,f=(null!=e?e.children:void 0)||[],y.children=[],a.Ar(f))for(h=u=0,_=Math.max(r.length,f.length);0<=_?u<_:u>_;h=0<=_?++u:--u)l=d=!1,i=r[h],c=f[h],p=function(){switch(!1){case!a.template(c):return c;case!a.Ar(c):return l=C(c,!1);case!a.St(c):return l={type:"text",options:{text:c}};case!(!c&&!n):return d=!0;default:return l=c||!0}}(),d?p=i:l&&(p=i?i.extend(p,n):new k(o.deep.clone(P,p))),y.children.push(p);else if(a.Ob(f)){y.children=E(f,r,n),v=f;for(g in v)c=v[g],p=a.ObP(c)&&!a.template(c)?c:C(c),y.children.push(new k(p)),delete v[g]}return y},E=function(t,e,n){var i,r,s,o,u,h;if(e.length){for(h=[],r=0,s=e.length;r<s;r++){if(i=e[r],o=t[i.ref])u=i.extend(o,n),delete t[i.ref];else{if(null===o){delete t[i.ref];continue}u=function(){switch(!1){case!n:return i.extend(null,n);case!Object.keys(t).length:return i.extend();default:return i}}()}u._config.children=E(t,u.children),h.push(u)}return h}return e};var N,C;C=function(t,e){var n;switch(!1){case!a.Ar(t):if(n={},!a.St(t[0]))throw new Error(N+" string for 'type', got '"+String(t[0])+"'");if(n.type=t[0],t.length>1&&!a.Ob(t[1])&&null!==t[1])throw new Error(N+" object for 'options', got '"+String(t[1])+"'");return n.options=t[1]?o.deep.clone(t[1]):P.options,t[1]&&(n.ref=t[1].id||t[1].ref),n.children=t.slice(2),!1===e?3===t.length&&a.ObP(t[2])&&!a.template(t[2])&&(n.children=t[2]):n.children=n.children.map(i.template),n;case!(a.St(t)||a.dT(t)):return{type:"text",options:{text:t.textContent||t},children:P.children};case!a.dE(t):return{type:t.nodeName.toLowerCase(),ref:t.id,options:o.clone.keys(h)(t),children:P.children.map.call(t.childNodes,i.template)};case!a.qE(t):return{type:t.type,ref:t.ref,options:o.clone.deep.notKeys("relatedInstance")(t.options),children:t.children.map(i.template)};case!a.template(t):return t;default:throw new Error(N+" (array || string || dE || qE || template), got "+String(t))}},N="Template Parse Error: expected";var P;P={type:"div",ref:void 0,options:{},children:[]},null==(k=function(){function QuickTemplate(t,e){var n,i,r,s;if(a.template(t))return t;if(this._config=e?C(t):t,this.hC=!!this._config.options.computers,!this.hC&&this._config.children.length)for(i=0,r=(s=this._config.children).length;i<r;i++)if((n=s[i]).hC||n._config.options.computers){this.hC=!0;break}}return QuickTemplate.prototype.extend=function(t,e){return new QuickTemplate(T(this._config,t,e))},QuickTemplate.prototype.spawn=function(t,e){var n,r,s,u;return t&&t.data&&(n=t.data,1===Object.keys(t).length&&(t=null)),t||e?s=T(this._config,t,e):(s=o.clone(this._config)).options=o.deepOnly("style").clone(s.options),r=i.apply(null,[s.type,s.options].concat(y.call(s.children))),this.hC&&(!1!==t&&r.applyData(n),(null!=(u=r.options.computers)?u._init:void 0)&&r._runComputer("_init")),r},QuickTemplate}()).name&&(k.name="QuickTemplate"),Object.keys(P).forEach(function(t){return Object.defineProperty(k.prototype,t,{get:function(){return this._config[t]}})}),Object.defineProperty(k.prototype,"child",{get:function(){return this._C||p(this)}});var j,A,I,B,q,y=[].slice;for(j=function(t){var e,n,r;return e=r=t,l.In(t,":")&&(e=(n=t.split(":"))[0],r=n[1]),i[e]=function(){return i.apply(null,[r].concat(y.call(arguments)))}},A=0,I=(q=["link:a","anchor:a","a","text","div","span","h1","h2","h3","h4","h5","h6","header","footer","section","button","br","ul","ol","li","fieldset","input","textarea","select","option","form","frame","hr","iframe","img","picture","main","nav","meta","object","pre","style","table","tbody","th","tr","td","tfoot","video"]).length;A<I;A++)j(B=q[A]);return i.version="1.0.60",e.exports=i,e.exports},16:function(t,e,n){var i,r,s,o;return r=function(t){return Array.isArray(t)},s=function(t){return t&&"[object Object]"===Object.prototype.toString.call(t)||r(t)},o=function(t,e,n){return t.deep?!t.notDeep||!t.notDeep[e]:t.deepOnly?t.deepOnly[e]||n&&o(t,n):void 0},e.exports=i=function(t,e,n,u){var h,l,a,c,p,f,d;for((!e||"object"!=typeof e&&"function"!=typeof e)&&(e={}),h=0,a=n.length;h<a;h++)if(null!=(c=n[h]))for(l in c)if(p=c[l],d=e[l],!(p===e||void 0===p||null===p&&!t.allowNull&&!t.nullDeletes||t.keys&&!t.keys[l]||t.notKeys&&t.notKeys[l]||t.own&&!c.hasOwnProperty(l)||t.globalFilter&&!t.globalFilter(p,l,c)||t.filters&&t.filters[l]&&!t.filters[l](p,l,c)))if(null===p&&t.nullDeletes)delete e[l];else switch(t.globalTransform&&(p=t.globalTransform(p,l,c)),t.transforms&&t.transforms[l]&&(p=t.transforms[l](p,l,c)),!1){case!(t.concat&&r(p)&&r(d)):e[l]=d.concat(p);break;case!(o(t,l,u)&&s(p)):f=s(d)?d:r(p)?[]:{},e[l]=i(t,f,[p],l);break;default:e[l]=p}return e},e.exports}},this),"function"==typeof define&&define.umd)define(function(){return t(0)});else{if("object"!=typeof module||!module.exports)return this.quickdom=t(0);module.exports=t(0)}}).call(this,null,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:this);