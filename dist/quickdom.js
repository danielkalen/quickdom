var slice=[].slice;!function(){var t,e,n,i,r,o,s,l,a,u,c,h,p,f,d,y,m,v,g,_,b,x,S,w,k,E,C,j,T,O;for(O="http://www.w3.org/2000/svg",h=function(t){var e={exports:t};return function(){var t,n,i,r,o,s,l,a;return r=["webkit","moz","ms","o"],s="backgroundPositionX backgroundPositionY blockSize borderWidth columnRuleWidth cx cy fontSize gridColumnGap gridRowGap height inlineSize lineHeight minBlockSize minHeight minInlineSize minWidth maxHeight maxWidth outlineOffset outlineWidth perspective shapeMargin strokeDashoffset strokeWidth textIndent width wordSpacing top bottom left right x y".split(" "),["margin","padding","border","borderRadius"].forEach(function(t){var e,n,i,r,o;for(s.push(t),r=["Top","Bottom","Left","Right"],o=[],n=0,i=r.length;n<i;n++)e=r[n],o.push(s.push(t+e));return o}),a=document.createElement("div").style,t=/^\d+(?:[a-z]|\%)+$/i,n=/\d+$/,i=/\s/,l={includes:function(t,e){return t&&-1!==t.indexOf(e)},isIterable:function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&!t.nodeType},isPropSupported:function(t){return"undefined"!=typeof a[t]},toTitleCase:function(t){return t[0].toUpperCase()+t.slice(1)},normalizeProperty:function(t){var e,n,i;if(this.isPropSupported(t))return t;for(i=this.toTitleCase(t),t=0,e=r.length;t<e;t++)if(n=r[t],n=""+n+i,this.isPropSupported(n))return n},normalizeValue:function(e,r){return this.includes(s,e)&&null!==r&&(r=""+r,!n.test(r)||t.test(r)||i.test(r)||(r+="px")),r}},o=function(t,e,n){var i,r,s;if(l.isIterable(t))for(i=0,r=t.length;i<r;i++)s=t[i],o(s,e,n);else if("object"==typeof e)for(i in e)n=e[i],o(t,i,n);else{if(e=l.normalizeProperty(e),"undefined"==typeof n)return getComputedStyle(t)[e];e&&(t.style[e]=l.normalizeValue(e,n))}},o.version="1.0.5",null!=("undefined"!=typeof e&&null!==e?e.exports:void 0)?e.exports=o:"function"==typeof define&&define.amd?define(["quickdom"],function(){return o}):this.Css=o}(),e.exports}.call(this,{}),t=h,c=function(t){var e={exports:t},n=[].slice;return function(){var t,i;t=function(t){return function(t){var e={exports:t},i,r,o,s,l;return r=function(t){var e={exports:t},n,i,o;return n=function(t){return Array.isArray(t)},i=function(t){return t&&"[object Object]"===Object.prototype.toString.call(t)||n(t)},o=function(t,e){return!!e.notDeep&&e.notDeep.indexOf(t)!==-1},e.exports=r=function(t,e,s){var l,a,u,c,h,p,f;for((!e||"object"!=typeof e&&"function"!=typeof e)&&(e={}),l=0,u=s.length;l<u;l++)if(c=s[l],null!=c)for(a in c)if(h=c[a],f=e[a],!(h===e||void 0===h||null===h&&!t.allowNull||t.keys&&t.keys.indexOf(a)===-1||t.notKeys&&t.notKeys.indexOf(a)!==-1||t.own&&!c.hasOwnProperty(a)||t.globalFilter&&!t.globalFilter(h,a,c)||t.filters&&t.filters[a]&&!t.filters[a](h,a,c)))switch(t.globalTransform&&(h=t.globalTransform(h,a,c)),t.transforms&&t.transforms[a]&&(h=t.transforms[a](h,a,c)),!1){case!(t.concat&&n(h)&&n(f)):e[a]=f.concat(h);break;case!(t.deep&&i(h)&&!o(a,t)):p=i(f)?f:n(h)?[]:{},e[a]=r(t,p,[h]);break;default:e[a]=h}return e},e.exports}({}),l=function(t){var e,n,i;n={};for(e in t)i=t[e],n[e]=i;return n},s=function(t){if(t)return"object"!=typeof t||Array.isArray(t)?[].concat(t):Object.keys(t)},i=function(t){var e;return e=t.target?function(){var t;return t=1<=arguments.length?n.call(arguments,0):[],r(e.options,e.options.target,t)}:function(){var t,i;return i=arguments[0],t=2<=arguments.length?n.call(arguments,1):[],r(e.options,i,t)},e.options=t,Object.defineProperties(e,o),e},o={deep:{get:function(){var t;return t=l(this.options),t.deep=!0,i(t)}},own:{get:function(){var t;return t=l(this.options),t.own=!0,i(t)}},allowNull:{get:function(){var t;return t=l(this.options),t.allowNull=!0,i(t)}},concat:{get:function(){var t;return t=l(this.options),t.concat=!0,i(t)}},clone:{get:function(){var t;return t=l(this.options),t.target={},i(t)}},notDeep:{get:function(){var t;return t=l(this.options),function(e){return t.notDeep=s(e),i(t)}}},keys:{get:function(){var t;return t=l(this.options),function(e){return t.keys=s(e),i(t)}}},notKeys:{get:function(){var t;return t=l(this.options),function(e){return t.notKeys=s(e),i(t)}}},transform:{get:function(){var t;return t=l(this.options),function(e){return"function"==typeof e?t.globalTransform=e:e&&"object"==typeof e&&(t.transforms=e),i(t)}}},filter:{get:function(){var t;return t=l(this.options),function(e){return"function"==typeof e?t.globalFilter=e:e&&"object"==typeof e&&(t.filters=e),i(t)}}}},e.exports=i({}),e.exports}}(this)({}),i=t,null!=("undefined"!=typeof e&&null!==e?e.exports:void 0)?e.exports=i:"function"==typeof define&&define.amd?define(["smart-extend"],function(){return i}):window.extend=i}(),e.exports}.call(this,{}),y=c,p=["className","href","selected","type","name","id","checked"],g={},g.includes=function(t,e){return t&&t.indexOf(e)!==-1},g.removeItem=function(t,e){var n;return n=t.indexOf(e),n!==-1&&t.splice(n,1),t},g.normalizeGivenEl=function(t){switch(!1){case!e.domNode(t):return r(t);case!e.string(t):return r.text(t);default:return t}},g.isStateStyle=function(t){return"$"===t[0]||"@"===t[0]},e=function(t){return function(t){var n={exports:t};return e=n.exports={defined:function(t){return void 0!==t},array:function(t){return t instanceof Array},object:function(t){return"object"==typeof t&&t},objectPlain:function(t){return e.object(t)&&"[object Object]"===Object.prototype.toString.call(t)},string:function(t){return"string"==typeof t},number:function(t){return"number"==typeof t},function:function(t){return"function"==typeof t},iterable:function(t){return e.object(t)&&e.number(t.length)}},n.exports}}(this)({}),e=y.clone(e,{domDoc:function(t){return t&&9===t.nodeType},domEl:function(t){return t&&1===t.nodeType},domText:function(t){return t&&3===t.nodeType},domNode:function(t){return e.domEl(t)||e.domText(t)},quickDomEl:function(t){return t instanceof o},template:function(t){return t instanceof s}}),o=function(t,e){return this.type=t,this.options=e,this.el=this.options.existing||("text"===this.type?document.createTextNode(this.options.text):"*"===this.type[0]?document.createElementNS(O,this.type.slice(1)):document.createElement(this.type)),"text"===this.type&&(this.append=this.prepend=this.attr=function(){}),this._parent=null,this._state=[],this._children=[],this._insertedCallbacks=[],this._eventCallbacks={__refs:{}},this._normalizeOptions(),this._applyOptions(),this._attachStateEvents(),this._proxyParent(),this.el._quickElement=this},Object.defineProperties(o.prototype,{raw:{get:function(){return this.el}},0:{get:function(){return this.el}},css:{get:function(){return this.style}},replaceWith:{get:function(){return this.replace}}}),o.prototype.parentsUntil=function(t){return u(this,t)},o.prototype.parentMatching=function(t){var n;if(e.function(t))for(n=this.parent;n;){if(t(n))return n;n=n.parent}},Object.defineProperties(o.prototype,{children:{get:function(){var t,e,n,i;if(this.el.childNodes.length!==this._children.length)for(this._children.length=0,i=this.el.childNodes,e=0,n=i.length;e<n;e++)t=i[e],t.nodeType<4&&this._children.push(r(t));return this._children}},parent:{get:function(){return this._parent&&this._parent.el===this.el.parentNode||e.domDoc(this.el.parentNode)||(this._parent=r(this.el.parentNode)),this._parent}},parents:{get:function(){return u(this)}},next:{get:function(){return r(this.el.nextSibling)}},prev:{get:function(){return r(this.el.previousSibling)}},nextAll:{get:function(){var t,e;for(e=[],t=r(this.el.nextSibling);t;)e.push(t),t=t.next;return e}},prevAll:{get:function(){var t,e;for(e=[],t=r(this.el.previousSibling);t;)e.push(t),t=t.prev;return e}},siblings:{get:function(){return this.prevAll.reverse().concat(this.nextAll)}},child:{get:function(){return this._childRefs||a(this)}},childf:{get:function(){return a(this,!0)}}}),u=function(t,n){var i,r;for(e.function(n)||(n=void 0),r=[],i=t.parent;i;)r.push(i),i=i.parent,n&&n(i)&&(i=null);return r},a=function(t,e){var n;return!e&&t._childRefs||(t._childRefs={}),n=t._childRefs,t.ref&&(n[t.ref]=t),t.children.length&&y.apply(null,[t._childRefs].concat(slice.call(t._children.map(function(t){return a(t,e)})))),t._childRefs},o.prototype._normalizeOptions=function(){var t,e,n,i;null==(t=this.options).style&&(t.style={}),this.options.styleShared={},this.options.class&&(this.options.className=this.options.class),this.options.url&&(this.options.href=this.options.url),null==(e=this.options).relatedInstance&&(e.relatedInstance=this),null==(n=this.options).unpassableStates&&(n.unpassableStates=[]),null==(i=this.options).passStateToChildren&&(i.passStateToChildren=!0),this.options.stateTriggers=y.deep({hover:{on:"mouseenter",off:"mouseleave"},focus:{on:"focus",off:"blur"}},this.options.stateTriggers),this._normalizeStyle()},o.prototype._normalizeStyle=function(){var t,e,n,i,r,o,s,l;for(n=Object.keys(this.options.style),l=n.filter(function(t){return g.isStateStyle(t)}),o=g.removeItem(l.slice(),"$base"),this._mediaStates=l.filter(function(t){return"@"===t[0]}),this._providedStates=l.map(function(t){return t.slice(1)}),!g.includes(l,"$base")&&n.length&&(l.length?(r=n.filter(function(t){return!g.isStateStyle(t)}),this.options.style.$base=y.clone.keys(r)(this.options.style)):this.options.style={$base:this.options.style}),t=function(e){return function(n,i){var r,o,s,l,a,u;if(s=Object.keys(n).filter(function(t){return g.isStateStyle(t)}),s.length)for(e.hasSharedStateStyle=!0,null==e._stateShared&&(e._stateShared=[]),r=0,l=s.length;r<l;r++)o=s[r],a=i.concat(o.slice(1)),u=a.join("+"),e.options.styleShared[u]=e.options.style["$"+u]=n[o],t(n[o],a),delete n[o]}}(this),e=0,i=o.length;e<i;e++)s=o[e],t(this.options.style[s],[s.slice(1)])},o.prototype._applyOptions=function(){var t,e,i,r,o;if((e=this.options.id||this.options.ref)&&this.attr("data-ref",this.ref=e),this.options.id&&(this.el.id=this.options.id),this.options.className&&(this.el.className=this.options.className),this.options.href&&(this.el.href=this.options.href),this.options.type&&(this.el.type=this.options.type),this.options.name&&(this.el.name=this.options.name),this.options.value&&(this.el.value=this.options.value),this.options.selected&&(this.el.selected=this.options.selected),this.options.checked&&(this.el.checked=this.options.checked),this.options.props){i=this.options.props;for(t in i)o=i[t],this.prop(t,o)}if(this.options.attrs){r=this.options.attrs;for(t in r)o=r[t],this.attr(t,o)}this.options.styleAfterInsert||this.style(this.options.style.$base),this.onInserted(function(t){return function(){var e,i;if(t.options.styleAfterInsert&&t.style(y.clone.apply(y,[t.options.style.$base].concat(slice.call(t._getStateStyles(t._getActiveStates()))))),e=t._inserted=t,i=t._mediaStates,i.length)return t._mediaStates=new function(){var t,r,o;for(t=0,r=i.length;t<r;t++)o=i[t],o=o.slice(1),this[o]=n.register(e,o);return this}}}(this))},o.prototype._attachStateEvents=function(){var t,n,i,r;n=this.options.stateTriggers,t=function(t){return function(n,i){var r,o;if(o=e.string(i)?i:i.on,e.object(i)&&(r=i.off),t._listenTo(o,function(){return t.state(n,!0)}),r)return t._listenTo(r,function(){return t.state(n,!1)})}}(this);for(i in n)r=n[i],t(i,r)},o.prototype._proxyParent=function(){var t;return t=void 0,Object.defineProperty(this,"_parent",{get:function(){return t},set:function(e){var n;(t=e)&&(n=this.parents.slice(-1)[0],n.raw===document.documentElement?this._unproxyParent(e):t.onInserted(function(n){return function(){if(t===e)return n._unproxyParent(e)}}(this)))}})},o.prototype._unproxyParent=function(t){var e,n,i,r;for(delete this._parent,this._parent=t,r=this._insertedCallbacks,n=0,i=r.length;n<i;n++)(e=r[n])(this)},E=/\s+/,o.prototype.on=function(t,n){var i,r;return e.string(t)&&e.function(n)&&(r=t.split("."),i=r[1],t=r[0],t.split(E).forEach(function(t){return function(e){return t._eventCallbacks[e]||(t._eventCallbacks[e]=[],t._listenTo(e,function(n){var i,r,o,s;for(s=t._eventCallbacks[e],r=0,o=s.length;r<o;r++)i=s[r],i.call(t.el,n)})),i&&(t._eventCallbacks.__refs[i]=n),t._eventCallbacks[e].push(n)}}(this))),this},o.prototype.off=function(t,n){var i,r,o;if(e.string(t))o=t.split("."),i=o[1],t=o[0],t.split(E).forEach(function(t){return function(r){if(t._eventCallbacks[r]){if(null==n&&(n=t._eventCallbacks.__refs[i]),e.function(n))return g.removeItem(t._eventCallbacks[r],n);if(!i)return t._eventCallbacks[r].length=0}}}(this));else for(r in this._eventCallbacks)this.off(r);return this},o.prototype.emit=function(t,n,i){var r;return null==n&&(n=!0),null==i&&(i=!0),t&&e.string(t)&&(r=document.createEvent("Event"),r.initEvent(t,n,i),this.el.dispatchEvent(r)),this},o.prototype.onInserted=function(t,n){if(null==n&&(n=!0),e.function(t))return this._inserted?n&&t(this):this._insertedCallbacks.push(t),this},o.prototype._listenTo=function(t,e){var n,i;return i=this.el.addEventListener?"addEventListener":"attachEvent",n=this.el.addEventListener?t:"on"+t,this.el[i](n,e),this},o.prototype.updateOptions=function(t){return e.object(t)&&(this.options=t,this._normalizeOptions(),this._applyOptions(this.options)),this},o.prototype.state=function(t,n,i){var r,o,s,l,a,u,c,h,p,f,d,m,v,_,b,x,S,w,k,E;if(1===arguments.length)return g.includes(this._state,t);if(this._statePipeTarget&&i!==this)return this._statePipeTarget.state(t,n,this),this;if(e.string(t)){if("$"===t[0]&&(t=t.slice(1)),l=!!n,"base"===t)return this;if(o=this._getActiveStates(t,!1),r=this._getStateStyles(o),this.state(t)!==l&&(E=this.options.style["$"+t]||this.options.style["@"+t],E&&(k=this._providedStates.indexOf(t),w=o.filter(function(t){return function(e){return t._providedStates.indexOf(e)>k}}(this)),S=this._getStateStyles(w)),l?(this._state.push(t),E&&this.style(y.clone.keys(E).apply(null,[E].concat(slice.call(S))))):(g.removeItem(this._state,t),E&&(b=y.clone.keys(E).apply(null,[this.options.style.$base].concat(slice.call(r))),x=y.transform(function(){return null}).clone(E),this.style(y(x,b))))),this.hasSharedStateStyle)for(m=Object.keys(this.options.styleShared),m=m.filter(function(e){return g.includes(e,t)}),a=0,p=m.length;a<p;a++)_=m[a],v=_.split("+"),c=v.length===v.filter(function(e){return function(n){return n===t||e.state(n)}}(this)).length,c&&(E=this.options.styleShared[_],l?(g.includes(this._stateShared,_)||this._stateShared.push(_),u=this.options.styleShared[g.removeItem(v,t).join("+")],this.style(y.clone(u,E))):(g.removeItem(this._stateShared,_),b=y.clone.keys(E).apply(null,[this.options.style.$base].concat(slice.call(r))),x=y.transform(function(){return null}).clone(E),this.style(y(x,b))));if(this.options.passStateToChildren&&!g.includes(this.options.unpassableStates,t))for(d=this._children,h=0,f=d.length;h<f;h++)s=d[h],s.state(t,n,i||this);return this}},o.prototype.resetState=function(){var t,e,n,i;for(i=this._state.slice(),e=0,n=i.length;e<n;e++)t=i[e],this.state(t,!1);return this},o.prototype.pipeState=function(t){var n,i,r,o;if(t){if(t=g.normalizeGivenEl(t),e.quickDomEl(t)&&t!==this)for(this._statePipeTarget=t,o=this._state,i=0,r=o.length;i<r;i++)n=o[i],t.state(n,!0)}else t===!1&&delete this._statePipeTarget;return this},o.prototype.style=function(){var n,i;if("text"!==this.type){if(n=arguments,e.string(n[0])){if(i=t(this.el,n[0],n[1]),!e.defined(n[1]))return this._inserted?i:i?"":i}else e.object(n[0])&&t(this.el,y.allowNull.transform(function(t){return function(e){return"function"==typeof e?e.call(t,t.options.relatedInstance):e}}(this)).clone(n[0]));return this}},o.prototype.styleSafe=function(t,n){var i,r;if("text"!==this.type)return i=arguments,r=this.style(t),e.string(r)?(n&&(r=0),r||this.el.style[i[0]]||this.options.style.$base[i[0]]||""):this},o.prototype._getActiveStates=function(t,e){var n;return null==e&&(e=!0),n=this._providedStates.filter(function(e){return function(n){return g.includes(e._state,n)&&n!==t}}(this)),e&&this.hasSharedStateStyle?n.concat(this._stateShared):n},o.prototype._getStateStyles=function(t){return t.map(function(t){return function(e){return t.options.style["$"+e]||t.options.style["@"+e]}}(this))},Object.defineProperties(o.prototype,{rect:{get:function(){return this.el.getBoundingClientRect()}},width:{get:function(){return parseFloat(this.style("width"))}},height:{get:function(){return parseFloat(this.style("height"))}},orientation:x={get:function(){return this.width>this.height?"landscape":"portrait"}},aspectRatio:f={get:function(){return this.width/this.height}}}),o.prototype.attr=function(t,e){switch(e){case void 0:return this.el.getAttribute(t);case null:return this.el.removeAttribute(t);default:return this.el.setAttribute(t,e),this}},o.prototype.prop=function(t,e){switch(e){case void 0:return this.el[t];default:return this.el[t]=e,this}},o.prototype.toTemplate=function(){return r.template(this)},o.prototype.clone=function(){var t,e,n,i,r,s,l,a,u,c,h,p,f,d,m,v,g;for(r=this.el.cloneNode(!1),d=y.clone(this.options,{existing:r}),f=new o(this.type,d),m=this._state,l=0,c=m.length;l<c;l++)t=m[l],f.state(t,!0);for(v=this.children,a=0,h=v.length;a<h;a++)i=v[a],f.append(i.clone());g=this._eventCallbacks;for(s in g)for(n=g[s],u=0,p=n.length;u<p;u++)e=n[u],f.on(s,e);return f},o.prototype.append=function(t){var n;return t&&(t=g.normalizeGivenEl(t),e.quickDomEl(t)&&(n=t.parent,n&&n._removeChild(t),this._children.push(t),this.el.appendChild(t.el),t.parent)),this},o.prototype.appendTo=function(t){return t&&(t=g.normalizeGivenEl(t),e.quickDomEl(t)&&t.append(this)),this},o.prototype.prepend=function(t){var n;return t&&(t=g.normalizeGivenEl(t),e.quickDomEl(t)&&(n=t.parent,n&&n._removeChild(t),this._children.unshift(t),this.el.insertBefore(t.el,this.el.firstChild),t.parent)),this},o.prototype.prependTo=function(t){return t&&(t=g.normalizeGivenEl(t),e.quickDomEl(t)&&t.prepend(this)),this},o.prototype.html=function(t){return e.defined(t)?(this.el.innerHTML=t,this):this.el.innerHTML},o.prototype.text=function(t){return e.defined(t)?(this.el.textContent=t,this):this.el.textContent},o.prototype.after=function(t){var n;return t&&this.parent&&(t=g.normalizeGivenEl(t),e.quickDomEl(t)&&(n=this.parent._children.indexOf(this),this.parent._children.splice(n+1,0,t),this.el.parentNode.insertBefore(t.el,this.el.nextSibling),t.parent)),this},o.prototype.insertAfter=function(t){return t&&(t=g.normalizeGivenEl(t),e.quickDomEl(t)&&t.after(this)),this},o.prototype.before=function(t){var n;return t&&this.parent&&(t=g.normalizeGivenEl(t),e.quickDomEl(t)&&(n=this.parent._children.indexOf(this),this.parent._children.splice(n,0,t),this.el.parentNode.insertBefore(t.el,this.el),t.parent)),this},o.prototype.insertBefore=function(t){return t&&(t=g.normalizeGivenEl(t),e.quickDomEl(t)&&t.before(this)),this},o.prototype.detach=function(){var t;return null!=(t=this.parent)&&t._removeChild(this),this},o.prototype.remove=function(){var t;this.detach(),this.resetState();for(t in this._eventCallbacks)this._eventCallbacks[t].length=0;return this},o.prototype.empty=function(){var t,e,n,i;for(i=this.children.slice(),e=0,n=i.length;e<n;e++)t=i[e],this._removeChild(t);return this},o.prototype.wrap=function(t){var n;return t&&(t=g.normalizeGivenEl(t),n=this.parent,e.quickDomEl(t)&&t!==this&&t!==this.parent&&(n&&n._removeChild(this,t.parent?void 0:t),t.append(this))),this},o.prototype.unwrap=function(){var t,e,n,i;return e=this.parent,e&&(n=r.batch(e.children),i=e.next,t=e.parent,t&&(e.detach(),i?n.insertBefore(i):n.appendTo(t))),this},o.prototype.replace=function(t){var n;return t&&(t=g.normalizeGivenEl(t),e.quickDomEl(t)&&t!==this&&(t.detach(),null!=(n=this.parent)&&n._removeChild(this,t))),this},o.prototype._removeChild=function(t,e){var n;return n=this._children.indexOf(t),n!==-1&&(e?(this.el.replaceChild(e.el,t.el),this._children.splice(n,1,e)):(this.el.removeChild(t.el),this._children.splice(n,1))),this},l={type:"window",el:window,raw:window,_eventCallbacks:{__refs:{}}},l.on=o.prototype.on,l.off=o.prototype.off,l.emit=o.prototype.emit,l._listenTo=o.prototype._listenTo,Object.defineProperties(l,{width:{get:function(){return window.innerWidth}},height:{get:function(){return window.innerHeight}},orientation:x,aspectRatio:f}),n=new function(){var t,e;return t=[],window.addEventListener("resize",function(){var e,n,i;for(n=0,i=t.length;n<i;n++)(e=t[n])()}),this.parseQuery=function(t,e){var n,i,r;return n=e.split("("),r=n[0],r=function(){switch(r){case"window":return l;case"parent":return t.parent;case"self":return t;default:return t.parentMatching(function(t){return t.ref===r.slice(1)})}}(),i=n[1].slice(0,-1).split(C).map(function(t){var e,n,i,o,s,l,a;return l=t.split(":"),a=parseFloat(l[1]),isNaN(a)&&(a=l[1]),n=l[0],i=n.slice(0,4),o="max-"===i,s=!o&&"min-"===i,(o||s)&&(n=n.slice(4)),e=function(){switch(n){case"orientation":return function(){return r.orientation};case"aspect-ratio":return function(){return r.aspectRatio};case"width":case"height":return function(){return r[n]};default:return function(){var t,e;return e=r.style(n),t=parseFloat(e),isNaN(t)?e:t}}}(),{key:n,value:a,min:s,max:o,getter:e}}),{source:r,rules:i}},this.register=function(n,i){var r,o;return o=this.parseQuery(n,i),t.push(r=function(){return e(n,o,i)}),r(),o},e=function(t,e,n){var i,r,o,s,l,a;for(s=!0,l=e.rules,r=0,o=l.length;r<o&&(a=l[r],i=a.getter(),s=function(){switch(!1){case!a.min:return i>=a.value;case!a.max:return i<=a.value;default:return i===a.value}}(),s);r++);return t.state(n,s)},this},C=/,\s*/,r=function(){var t,n,i,s,a,u,c,h;switch(t=1<=arguments.length?slice.call(arguments,0):[],!1){case!e.template(t[0]):return t[0].spawn();case!e.quickDomEl(t[0]):return t[1]?t[0].updateOptions(t[1]):t[0];case!(e.domNode(t[0])||e.domDoc(t[0])):return t[0]._quickElement?t[0]._quickElement:(h=t[0].nodeName.toLowerCase().replace("#",""),c=t[1]||{},c.existing=t[0],new o(h,c));case t[0]!==window:return l;case!e.string(t[0]):for(h=t[0].toLowerCase(),c="text"===h?e.object(t[1])?t[1]:{text:t[1]||""}:e.object(t[1])?t[1]:{},i=t.slice(2),s=new o(h,c),a=0,u=i.length;a<u;a++)n=i[a],e.string(n)&&(n=r.text(n)),e.template(n)&&(n=r(n)),e.quickDomEl(n)&&n.appendTo(s);return s}},r.template=function(t){return new s(t,!0)},i=function(t,e){return this.elements=t,this.returnResults=e,this.elements=this.elements.map(function(t){return r(t)}),this},i.prototype.reverse=function(){return this.elements=this.elements.reverse(),this},i.prototype.return=function(t){return t?(this.returnResults=!0,this):this.lastResults},Object.keys(o.prototype).concat("css","replaceWith").forEach(function(t){return i.prototype[t]=function(){var e,n;return n=this.lastResults=function(){var n,i,r,o;for(r=this.elements,o=[],n=0,i=r.length;n<i;n++)e=r[n],o.push(e[t].apply(e,arguments));return o}.apply(this,arguments),this.returnResults?n:this}}),r.batch=function(t,n){if(!e.iterable(t))throw new Error("Batch: expected an iterable, got "+String(t));if(!t.length)throw new Error("Batch: expected a non-empty element collection");return new i(t,n)},k=/\{\{.+?\}\}/g,d={type:"div",options:{},children:[]},s=function(t,e){return this._config=e?w(t):t,this},Object.keys(d).forEach(function(t){return Object.defineProperty(s.prototype,t,{get:function(){return this._config[t]}})}),s.prototype.spawn=function(t,e){var n;return n=m(this._config,t,e),r.apply(null,[n.type,n.options].concat(slice.call(n.children)))},s.prototype.extend=function(t,e){return new s(m(this._config,t,e))},m=function(t,n,i){var r,o,l,a,u,c,h,p,f,m,v;for(i&&(l={options:function(t){return y(t,i)}}),e.array(n)&&(n=w(n,!1)),m=y.deep.notKeys("children").notDeep("relatedInstance").transform(l).clone(t,n),o=t.children||[],f=(null!=n?n.children:void 0)||[],m.children=[],u=a=0,v=Math.max(o.length,f.length);0<=v?a<v:a>v;u=0<=v?++a:--a)c=!1,r=o[u],h=f[u],p=function(){switch(!1){case!e.template(h):return h;case!e.array(h):return c=w(h,!1);case!e.string(h):return c={type:"text",options:{text:h}};default:return c=h||!0}}(),c&&(p=r?r.extend(p,i):new s(y.deep.clone(d,p))),m.children.push(p);return m},w=function(t,n){var i;switch(!1){case!e.array(t):if(i={},!e.string(t[0]))throw new Error(S+" string for 'type', got '"+String(t[0])+"'");if(i.type=t[0],t.length>1&&!e.object(t[1])&&null!==t[1])throw new Error(S+" object for 'options', got '"+String(t[1])+"'");return i.options=t[1]?y.deep.clone(t[1]):null,i.children=t.slice(2),n!==!1&&(i.children=i.children.map(r.template)),i;case!(e.string(t)||e.domText(t)):return{type:"text",options:{text:t.textContent||t}};case!e.domEl(t):return{type:t.nodeName.toLowerCase(),options:y.clone.keys(p)(t),children:[].map.call(t.childNodes,r.template)};case!e.quickDomEl(t):return{type:t.type,options:y.clone.deep.notKeys("relatedInstance")(t.options),children:t.children.map(r.template)};case!e.template(t):return m(t._config);default:throw new Error(S+" (array || string || domEl || quickDomEl || template), got "+String(t))}},S="Template Parse Error: expected",T=["link:a","anchor:a","a","text","div","span","h1","h2","h3","h4","h5","h6","header","footer","section","button","br","ul","ol","li","fieldset","input","textarea","select","option","form","frame","hr","iframe","img","picture","main","nav","meta","object","pre","style","table","tbody","th","tr","td","tfoot","video"],v=function(t){var e,n,i;return e=i=t,g.includes(t,":")&&(n=t.split(":"),e=n[0],i=n[1]),r[e]=function(){return r.apply(null,[i].concat(slice.call(arguments)))}},_=0,b=T.length;_<b;_++)j=T[_],v(j);return r.version="1.0.20",null!=("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=r:"function"==typeof define&&define.amd?define(["quickdom"],function(){return r}):this.Dom=r}();