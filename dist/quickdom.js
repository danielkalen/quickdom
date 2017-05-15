var slice=[].slice;!function(t){return function(){var t;return t=function(t,e,n,i){return i=function(i){return n[i]?e[i]:(n[i]=1,e[i]={},e[i]=t[i](e[i]))},t[1]=function(t){var e={exports:t};return function(){var t,n,i,r,o,s,l,u;return r=["webkit","moz","ms","o"],s="backgroundPositionX backgroundPositionY blockSize borderWidth columnRuleWidth cx cy fontSize gridColumnGap gridRowGap height inlineSize lineHeight minBlockSize minHeight minInlineSize minWidth maxHeight maxWidth outlineOffset outlineWidth perspective shapeMargin strokeDashoffset strokeWidth textIndent width wordSpacing top bottom left right x y".split(" "),["margin","padding","border","borderRadius"].forEach(function(t){var e,n,i,r,o;for(s.push(t),r=["Top","Bottom","Left","Right"],o=[],n=0,i=r.length;n<i;n++)e=r[n],o.push(s.push(t+e));return o}),u=document.createElement("div").style,t=/^\d+(?:[a-z]|\%)+$/i,n=/\d+$/,i=/\s/,l={includes:function(t,e){return t&&-1!==t.indexOf(e)},isIterable:function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&!t.nodeType},isPropSupported:function(t){return"undefined"!=typeof u[t]},toTitleCase:function(t){return t[0].toUpperCase()+t.slice(1)},normalizeProperty:function(t){var e,n,i;if(this.isPropSupported(t))return t;for(i=this.toTitleCase(t),t=0,e=r.length;t<e;t++)if(n=r[t],n=""+n+i,this.isPropSupported(n))return n},normalizeValue:function(e,r){return this.includes(s,e)&&null!==r&&(r=""+r,!n.test(r)||t.test(r)||i.test(r)||(r+="px")),r}},o=function(t,e,n){var i,r,s;if(l.isIterable(t))for(i=0,r=t.length;i<r;i++)s=t[i],o(s,e,n);else if("object"==typeof e)for(i in e)n=e[i],o(t,i,n);else{if(e=l.normalizeProperty(e),"undefined"==typeof n)return getComputedStyle(t)[e];e&&(t.style[e]=l.normalizeValue(e,n))}},o.version="1.0.5",null!=("undefined"!=typeof e&&null!==e?e.exports:void 0)?e.exports=o:"function"==typeof define&&define.amd?define(["quickdom"],function(){return o}):this.Css=o}(),e.exports},t[2]=function(t){var e={exports:t};return function(t){return function(){var t=function(t,e,n,i){return i=function(i){return n[i]?e[i]:(n[i]=1,e[i]={},e[i]=t[i](e[i]))},t[1]=function(t){var e=i(2),n=function(t){var e,n={};for(e in t){var i=t[e];n[e]=i}return n},r=function(t){var e;if(t){var n={};if("object"!=typeof t)n[t]=!0;else{Array.isArray(t)||(t=Object.keys(t));var i=0;for(e=t.length;i<e;i++){var r=t[i];n[r]=!0}}return n}},o=function(t){var n=t.target?function(){for(var t=arguments.length,i=-1,r=Array(t);++i<t;)r[i]=arguments[i];return e(n.options,n.options.target,r)}:function(t){for(var i=arguments.length,r=0,o=Array(i);++r<i;)o[r]=arguments[r];return e(n.options,t,o)};return n.options=t,Object.defineProperties(n,s),n},s={deep:{get:function(){var t=n(this.options);return t.deep=!0,o(t)}},own:{get:function(){var t=n(this.options);return t.own=!0,o(t)}},allowNull:{get:function(){var t=n(this.options);return t.allowNull=!0,o(t)}},nullDeletes:{get:function(){var t=n(this.options);return t.nullDeletes=!0,o(t)}},concat:{get:function(){var t=n(this.options);return t.concat=!0,o(t)}},clone:{get:function(){var t=n(this.options);return t.target={},o(t)}},notDeep:{get:function(){var t=n(this.options);return function(e){return t.notDeep=r(e),o(t)}}},deepOnly:{get:function(){var t=n(this.options);return function(e){return t.deepOnly=r(e),o(t)}}},keys:{get:function(){var t=n(this.options);return function(e){return t.keys=r(e),o(t)}}},notKeys:{get:function(){var t=n(this.options);return function(e){return t.notKeys=r(e),o(t)}}},transform:{get:function(){var t=n(this.options);return function(e){return"function"==typeof e?t.globalTransform=e:e&&"object"==typeof e&&(t.transforms=e),o(t)}}},filter:{get:function(){var t=n(this.options);return function(e){return"function"==typeof e?t.globalFilter=e:e&&"object"==typeof e&&(t.filters=e),o(t)}}}};return t=o({})},t[2]=function(t){var e,n=function(t){return Array.isArray(t)},i=function(t){return t&&"[object Object]"===Object.prototype.toString.call(t)||n(t)},r=function(t,e,n){return t.deep?!t.notDeep||!t.notDeep[e]:t.deepOnly?t.deepOnly[e]||n&&r(t,n):void 0};return t=e=function(t,o,s,l){var u,a;(!o||"object"!=typeof o&&"function"!=typeof o)&&(o={});var c=0;for(a=s.length;c<a;c++){var h=s[c];if(null!=h)for(u in h){var p=h[u],f=o[u];if(!(p===o||void 0===p||null===p&&!t.allowNull&&!t.nullDeletes||t.keys&&!t.keys[u]||t.notKeys&&t.notKeys[u]||t.own&&!h.hasOwnProperty(u)||t.globalFilter&&!t.globalFilter(p,u,h)||t.filters&&t.filters[u]&&!t.filters[u](p,u,h)))if(null===p&&t.nullDeletes)delete o[u];else switch(t.globalTransform&&(p=t.globalTransform(p,u,h)),t.transforms&&t.transforms[u]&&(p=t.transforms[u](p,u,h)),!1){case!(t.concat&&n(p)&&n(f)):o[u]=f.concat(p);break;case!(r(t,u,l)&&i(p)):f=i(f)?f:n(p)?[]:{},o[u]=e(t,f,[p],u);break;default:o[u]=p}}}return o}},i};return t=t({},{},{}),function(){var n=t(1);null!=("undefined"!=typeof e&&null!==e?e.exports:void 0)?e.exports=n:"function"==typeof define&&define.amd?define(["smart-extend"],function(){return n}):window.extend=n}()}}(this)(),e.exports},t[22]=function(t){var e={exports:t},n;return n=e.exports={defined:function(t){return void 0!==t},array:function(t){return t instanceof Array},object:function(t){return"object"==typeof t&&t},objectPlain:function(t){return n.object(t)&&"[object Object]"===Object.prototype.toString.call(t)},string:function(t){return"string"==typeof t},number:function(t){return"number"==typeof t},function:function(t){return"function"==typeof t},iterable:function(t){return n.object(t)&&n.number(t.length)}},e.exports},i},t=t({},{},{}),function(){var e,n,i,r,o,s,l,u,a,c,h,p,f,d,y,m,v,g,_,b,S,x,w,k,E,O,C,T,j,P,N,D;for(D="http://www.w3.org/2000/svg",e=t(1),v=t(2),f=["id","name","type","href","selected","checked","className"],p=["id","ref","type","name","text","style","class","className","url","href","selected","checked","props","attrs","passStateToChildren","stateTriggers"],S={},S.includes=function(t,e){return t&&t.indexOf(e)!==-1},S.removeItem=function(t,e){var n;return n=t.indexOf(e),n!==-1&&t.splice(n,1),t},S.normalizeGivenEl=function(t){switch(!1){case!n.domNode(t):return o(t);case!n.string(t):return o.text(t);default:return t}},S.isStateStyle=function(t){return"$"===t[0]||"@"===t[0]},n=t(22),n=v.clone(n,{domDoc:function(t){return t&&9===t.nodeType},domEl:function(t){return t&&1===t.nodeType},domText:function(t){return t&&3===t.nodeType},domNode:function(t){return n.domEl(t)||n.domText(t)},quickDomEl:function(t){return t&&"QuickElement"===t.constructor.name},template:function(t){return t&&"QuickTemplate"===t.constructor.name},batch:function(t){return t&&"QuickBatch"===t.constructor.name}}),s=function(){function t(t,e){this.type=t,this.options=e,this.el=this.options.existing||("text"===this.type?document.createTextNode(this.options.text):"*"===this.type[0]?document.createElementNS(D,this.type.slice(1)):document.createElement(this.type)),"text"===this.type&&(this.append=this.prepend=this.attr=function(){}),this._parent=null,this._state=[],this._children=[],this._insertedCallbacks=[],this._eventCallbacks={__refs:{}},this._normalizeOptions(),this._applyOptions(),this._attachStateEvents(),this._proxyParent(),this.el._quickElement=this}return t.prototype.toJSON=function(){var t,e,n,i,r;for(r=[this.type,v.clone.keys(p)(this.options)],e=this.children,n=0,i=e.length;n<i;n++)t=e[n],r.push(t.toJSON());return r},t}(),null==s.name&&(s.name="QuickElement"),Object.defineProperties(s.prototype,{raw:{get:function(){return this.el}},0:{get:function(){return this.el}},css:{get:function(){return this.style}},replaceWith:{get:function(){return this.replace}}}),s.prototype.parentsUntil=function(t){return h(this,t)},s.prototype.parentMatching=function(t){var e;if(n.function(t))for(e=this.parent;e;){if(t(e))return e;e=e.parent}},Object.defineProperties(s.prototype,{children:{get:function(){var t,e,n,i;if(this.el.childNodes.length!==this._children.length)for(this._children.length=0,i=this.el.childNodes,e=0,n=i.length;e<n;e++)t=i[e],t.nodeType<4&&this._children.push(o(t));return this._children}},parent:{get:function(){return this._parent&&this._parent.el===this.el.parentNode||n.domDoc(this.el.parentNode)||(this._parent=o(this.el.parentNode)),this._parent}},parents:{get:function(){return h(this)}},next:{get:function(){return o(this.el.nextSibling)}},prev:{get:function(){return o(this.el.previousSibling)}},nextAll:{get:function(){var t,e;for(e=[],t=o(this.el.nextSibling);t;)e.push(t),t=t.next;return e}},prevAll:{get:function(){var t,e;for(e=[],t=o(this.el.previousSibling);t;)e.push(t),t=t.prev;return e}},siblings:{get:function(){return this.prevAll.reverse().concat(this.nextAll)}},child:{get:function(){return this._childRefs||a(this)}},childf:{get:function(){return a(this,!0)}},index:{get:function(){var t;return(t=this.parent)?t.children.indexOf(this):null}},indexType:{get:function(){return c(this,"type")}},indexRef:{get:function(){return c(this,"ref")}}}),h=function(t,e){var i,r;for(n.function(e)||(e=void 0),r=[],i=t.parent;i;)r.push(i),i=i.parent,e&&e(i)&&(i=null);return r},a=function(t,e){var n,i;return!e&&t._childRefs||(t._childRefs={}),i=t._childRefs,t.ref&&(i[t.ref]=t),n=t.children,n.length&&v.apply(null,[t._childRefs].concat(slice.call(n.map(function(t){return a(t,e)})))),t._childRefs},c=function(t,e){var n;return(n=t.parent)?n.children.filter(function(n){return n[e]===t[e]}).indexOf(t):null},y={hover:{on:"mouseenter",off:"mouseleave",bubbles:!0},focus:{on:"focus",off:"blur",bubbles:!0}},s.prototype._normalizeOptions=function(){var t,e,n,i;null==(t=this.options).style&&(t.style={}),this.options.styleShared={},this.options.class&&(this.options.className=this.options.class),this.options.url&&(this.options.href=this.options.url),null==(e=this.options).relatedInstance&&(e.relatedInstance=this),null==(n=this.options).unpassableStates&&(n.unpassableStates=[]),null==(i=this.options).passStateToChildren&&(i.passStateToChildren=!0),this.options.stateTriggers=this.options.stateTriggers?v.clone.deep(y,this.options.stateTriggers):y,this._parseStyles()},s.prototype._parseStyles=function(){var t,e,n,i,r,o,s,l;for(n=Object.keys(this.options.style),l=n.filter(function(t){return S.isStateStyle(t)}),o=S.removeItem(l.slice(),"$base"),this._mediaStates=l.filter(function(t){return"@"===t[0]}),this._providedStates=l.map(function(t){return t.slice(1)}),!S.includes(l,"$base")&&n.length&&(this.options=v.clone(this.options),l.length?(r=n.filter(function(t){return!S.isStateStyle(t)}),this.options.style.$base=v.clone.keys(r)(this.options.style)):this.options.style={$base:this.options.style}),t=function(e){return function(n,i){var r,o,s,l,u,a;if(s=Object.keys(n).filter(function(t){return S.isStateStyle(t)}),s.length)for(e.hasSharedStateStyle=!0,null==e._stateShared&&(e._stateShared=[]),r=0,l=s.length;r<l;r++)o=s[r],u=i.concat(o.slice(1)),a=u.join("+"),e.options.styleShared[a]=e.options.style["$"+a]=n[o],t(n[o],u),delete n[o]}}(this),e=0,i=o.length;e<i;e++)s=o[e],t(this.options.style[s],[s.slice(1)])},s.prototype._applyOptions=function(){var t,e,n,r,o;if((e=this.options.id||this.options.ref)&&this.attr("data-ref",this.ref=e),this.options.id&&(this.el.id=this.options.id),this.options.className&&(this.el.className=this.options.className),this.options.src&&(this.el.src=this.options.src),this.options.href&&(this.el.href=this.options.href),this.options.type&&(this.el.type=this.options.type),this.options.name&&(this.el.name=this.options.name),this.options.value&&(this.el.value=this.options.value),this.options.selected&&(this.el.selected=this.options.selected),this.options.checked&&(this.el.checked=this.options.checked),this.options.props){n=this.options.props;for(t in n)o=n[t],this.prop(t,o)}if(this.options.attrs){r=this.options.attrs;for(t in r)o=r[t],this.attr(t,o)}this.options.styleAfterInsert||this.style(this.options.style.$base),this.onInserted(function(t){return function(){var e,n;if(t.options.styleAfterInsert&&t.style(v.clone.apply(v,[t.options.style.$base].concat(slice.call(t._getStateStyles(t._getActiveStates()))))),e=t._inserted=t,n=t._mediaStates,n.length)return t._mediaStates=new function(){var t,r,o;for(t=0,r=n.length;t<r;t++)o=n[t],o=o.slice(1),this[o]=i.register(e,o);return this}}}(this)),this.options.recalcOnResize&&window.addEventListener("resize",function(t){return function(){return t.recalcStyle()}}(this))},s.prototype._attachStateEvents=function(){var t,e,i,r;e=this.options.stateTriggers,t=function(t){return function(e,i){var r,o;if(S.includes(t._providedStates,e))return o=n.string(i)?i:i.on,n.object(i)&&(r=i.off),t._listenTo(o,function(){return t.state(e,!0,i.bubbles)}),r?t._listenTo(r,function(){return t.state(e,!1,i.bubbles)}):void 0}}(this);for(i in e)r=e[i],t(i,r)},s.prototype._proxyParent=function(){var t;return t=void 0,Object.defineProperty(this,"_parent",{get:function(){return t},set:function(e){var n;(t=e)&&(n=this.parents.slice(-1)[0],n.raw===document.documentElement?this._unproxyParent(e):t.onInserted(function(n){return function(){if(t===e)return n._unproxyParent(e)}}(this)))}})},s.prototype._unproxyParent=function(t){var e,n,i,r;for(delete this._parent,this._parent=t,r=this._insertedCallbacks,n=0,i=r.length;n<i;n++)(e=r[n])(this)},T=/\s+/,s.prototype.on=function(t,e){var i,r;return n.string(t)&&n.function(e)&&(r=t.split("."),i=r[1],t=r[0],t.split(T).forEach(function(t){return function(n){return t._eventCallbacks[n]||(t._eventCallbacks[n]=[],t._listenTo(n,function(e){var i,r,o,s;for(i=t._eventCallbacks[n].slice(),o=0,s=i.length;o<s;o++)r=i[o],r.call(t.el,e)})),i&&(t._eventCallbacks.__refs[i]=e),t._eventCallbacks[n].push(e)}}(this))),this},s.prototype.once=function(t,e){var i;return n.string(t)&&n.function(e)&&this.on(t,i=function(n){return function(r){return n.off(t,i),e.call(n.el,r)}}(this)),this},s.prototype.off=function(t,e){var i,r,o;if(n.string(t))o=t.split("."),i=o[1],t=o[0],t.split(T).forEach(function(t){return function(r){if(t._eventCallbacks[r]){if(null==e&&(e=t._eventCallbacks.__refs[i]),n.function(e))return S.removeItem(t._eventCallbacks[r],e);if(!i)return t._eventCallbacks[r].length=0}}}(this));else for(r in this._eventCallbacks)this.off(r);return this},s.prototype.emit=function(t,e,i){var r;return null==e&&(e=!0),null==i&&(i=!0),t&&n.string(t)&&(r=document.createEvent("Event"),r.initEvent(t,e,i),this.el.dispatchEvent(r)),this},s.prototype.onInserted=function(t,e){if(null==e&&(e=!0),n.function(t))return this._inserted?e&&t(this):this._insertedCallbacks.push(t),this},s.prototype._listenTo=function(t,e){var n,i;return i=this.el.addEventListener?"addEventListener":"attachEvent",n=this.el.addEventListener?t:"on"+t,this.el[i](n,e),this},s.prototype.updateOptions=function(t){return n.object(t)&&(this.options=t,this._normalizeOptions(),this._applyOptions(this.options)),this},s.prototype.state=function(t,e,i,r){var o,s,l,u,a,c,h,p,f,d,y,m,g,_,b,x,w,k,E,O;if(1===arguments.length)return S.includes(this._state,t);if(this._statePipeTarget&&r!==this)return this._statePipeTarget.state(t,e,i,this),this;if(n.string(t)){if("$"===t[0]&&(t=t.slice(1)),u=!!e,"base"===t)return this;if(s=this._getActiveStates(t,!1),o=this._getStateStyles(s),this.state(t)!==u&&(O=this.options.style["$"+t]||this.options.style["@"+t],O&&(E=this._providedStates.indexOf(t),k=s.filter(function(t){return function(e){return t._providedStates.indexOf(e)>E}}(this)),w=this._getStateStyles(k)),u?(this._state.push(t),O&&this.style(v.clone.keys(O).apply(null,[O].concat(slice.call(w))))):(S.removeItem(this._state,t),O&&(b=v.clone.keys(O).apply(null,[this.options.style.$base].concat(slice.call(o))),x=v.transform(function(){return null}).clone(O),this.style(v(x,b))))),this.hasSharedStateStyle)for(m=Object.keys(this.options.styleShared),m=m.filter(function(e){return S.includes(e,t)}),a=0,f=m.length;a<f;a++)_=m[a],g=_.split("+"),h=g.length===g.filter(function(e){return function(n){return n===t||e.state(n)}}(this)).length,h&&(O=this.options.styleShared[_],u?(S.includes(this._stateShared,_)||this._stateShared.push(_),c=this.options.styleShared[S.removeItem(g,t).join("+")],this.style(v.clone(c,O))):(S.removeItem(this._stateShared,_),b=v.clone.keys(O).apply(null,[this.options.style.$base].concat(slice.call(o))),x=v.transform(function(){return null}).clone(O),this.style(v(x,b))));if(!S.includes(this.options.unpassableStates,t))if(i)this.parent&&this._parent.state(t,e,!0,r||this);else if(this.options.passStateToChildren)for(y=this._children,p=0,d=y.length;p<d;p++)l=y[p],l.state(t,e,!1,r||this);return this}},s.prototype.resetState=function(){var t,e,n,i;for(i=this._state.slice(),e=0,n=i.length;e<n;e++)t=i[e],this.state(t,!1);return this},s.prototype.pipeState=function(t){var e,i,r,o;if(t){if(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&t!==this)for(this._statePipeTarget=t,o=this._state,i=0,r=o.length;i<r;i++)e=o[i],t.state(e,!0)}else t===!1&&delete this._statePipeTarget;return this},s.prototype.style=function(){var t,i;if("text"!==this.type){if(t=arguments,n.string(t[0])){if(i=e(this.el,t[0],t[1]),!n.defined(t[1]))return this._inserted?i:i?"":i}else n.object(t[0])&&e(this.el,v.allowNull.transform(function(t){return function(e){return"function"==typeof e?e.call(t,t.options.relatedInstance):e}}(this)).clone(t[0]));return this}},s.prototype.styleSafe=function(t,e){var i,r;if("text"!==this.type)return i=arguments,r=this.style(t),n.string(r)?(e&&(r=0),r||this.el.style[i[0]]||this.options.style.$base[i[0]]||""):this},s.prototype.styleParsed=function(t){return parseFloat(this.styleSafe(t))},s.prototype.recalcStyle=function(){var t,e;return t=this._getStateStyles(this._getActiveStates()),e=v.clone.filter(function(t){return"function"==typeof t}).apply(null,[this.options.style.$base].concat(slice.call(t))),this.style(e)},s.prototype._getActiveStates=function(t,e){var n;return null==e&&(e=!0),n=this._providedStates.filter(function(e){return function(n){return S.includes(e._state,n)&&n!==t}}(this)),e&&this.hasSharedStateStyle?n.concat(this._stateShared):n},s.prototype._getStateStyles=function(t){return t.map(function(t){return function(e){return t.options.style["$"+e]||t.options.style["@"+e]}}(this))},Object.defineProperties(s.prototype,{rect:{get:function(){return this.el.getBoundingClientRect()}},width:{get:function(){return parseFloat(this.style("width"))}},height:{get:function(){return parseFloat(this.style("height"))}},orientation:k={get:function(){return this.width>this.height?"landscape":"portrait"}},aspectRatio:d={get:function(){return this.width/this.height}}}),s.prototype.attr=function(t,e){switch(e){case void 0:return this.el.getAttribute(t);case null:return this.el.removeAttribute(t);default:return this.el.setAttribute(t,e),this}},s.prototype.prop=function(t,e){switch(e){case void 0:return this.el[t];default:return this.el[t]=e,this}},s.prototype.toTemplate=function(){return o.template(this)},s.prototype.clone=function(){var t,e,n,i,r,o,l,u,a,c,h,p,f,d,y,m,g;for(r=this.el.cloneNode(!1),d=v.clone(this.options,{existing:r}),f=new s(this.type,d),y=this._state,l=0,c=y.length;l<c;l++)t=y[l],f.state(t,!0);for(m=this.children,u=0,h=m.length;u<h;u++)i=m[u],f.append(i.clone());g=this._eventCallbacks;for(o in g)for(n=g[o],a=0,p=n.length;a<p;a++)e=n[a],f.on(o,e);return f},s.prototype.append=function(t){var e;return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&(e=t.parent,e&&e._removeChild(t),this._children.push(t),this.el.appendChild(t.el),t._refreshParent())),this},s.prototype.appendTo=function(t){return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&t.append(this)),this},s.prototype.prepend=function(t){var e;return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&(e=t.parent,e&&e._removeChild(t),this._children.unshift(t),this.el.insertBefore(t.el,this.el.firstChild),t._refreshParent())),this},s.prototype.prependTo=function(t){return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&t.prepend(this)),this},s.prototype.after=function(t){var e;return t&&this.parent&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&(e=this.parent._children.indexOf(this),this.parent._children.splice(e+1,0,t),this.el.parentNode.insertBefore(t.el,this.el.nextSibling),t._refreshParent())),this},s.prototype.insertAfter=function(t){return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&t.after(this)),this},s.prototype.before=function(t){var e;return t&&this.parent&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&(e=this.parent._children.indexOf(this),this.parent._children.splice(e,0,t),this.el.parentNode.insertBefore(t.el,this.el),t._refreshParent())),this},s.prototype.insertBefore=function(t){return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&t.before(this)),this},s.prototype.detach=function(){var t;return null!=(t=this.parent)&&t._removeChild(this),this},s.prototype.remove=function(){var t;this.detach(),this.resetState();for(t in this._eventCallbacks)this._eventCallbacks[t].length=0;return this},s.prototype.empty=function(){var t,e,n,i;for(i=this.children.slice(),e=0,n=i.length;e<n;e++)t=i[e],this._removeChild(t);return this},s.prototype.wrap=function(t){var e;return t&&(t=S.normalizeGivenEl(t),e=this.parent,n.quickDomEl(t)&&t!==this&&t!==this.parent&&(e&&e._removeChild(this,t.parent?void 0:t),t.append(this))),this},s.prototype.unwrap=function(){var t,e,n,i;return e=this.parent,e&&(n=o.batch(e.children),i=e.next,t=e.parent,t&&(e.detach(),i?n.insertBefore(i):n.appendTo(t))),this},s.prototype.replace=function(t){var e;return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&t!==this&&(t.detach(),null!=(e=this.parent)&&e._removeChild(this,t),t._refreshParent())),this},s.prototype._refreshParent=function(){return this.parent},s.prototype._removeChild=function(t,e){var n;return n=this._children.indexOf(t),n!==-1&&(e?(this.el.replaceChild(e.el,t.el),this._children.splice(n,1,e)):(this.el.removeChild(t.el),this._children.splice(n,1))),this},Object.defineProperties(s.prototype,{html:{get:function(){return this.el.innerHTML},set:function(t){return this.el.innerHTML=t}},text:{get:function(){return this.el.textContent},set:function(t){return this.el.textContent=t}}}),u={type:"window",el:window,raw:window,_eventCallbacks:{__refs:{}}},u.on=s.prototype.on,u.off=s.prototype.off,u.emit=s.prototype.emit,u._listenTo=s.prototype._listenTo,Object.defineProperties(u,{width:{get:function(){return window.innerWidth}},height:{get:function(){return window.innerHeight}},orientation:k,aspectRatio:d}),i=new function(){var t,e;return t=[],window.addEventListener("resize",function(){var e,n,i;for(n=0,i=t.length;n<i;n++)(e=t[n])()}),this.parseQuery=function(t,e){var n,i,r;return n=e.split("("),r=n[0],r=function(){switch(r){case"window":return u;case"parent":return t.parent;case"self":return t;default:return t.parentMatching(function(t){return t.ref===r.slice(1)})}}(),i=n[1].slice(0,-1).split(j).map(function(t){var e,n,i,o,s,l,u;return l=t.split(":"),u=parseFloat(l[1]),isNaN(u)&&(u=l[1]),n=l[0],i=n.slice(0,4),o="max-"===i,s=!o&&"min-"===i,(o||s)&&(n=n.slice(4)),e=function(){switch(n){case"orientation":return function(){return r.orientation};case"aspect-ratio":return function(){return r.aspectRatio};case"width":case"height":return function(){return r[n]};default:return function(){var t,e;return e=r.style(n),t=parseFloat(e),isNaN(t)?e:t}}}(),{key:n,value:u,min:s,max:o,getter:e}}),{source:r,rules:i}},this.register=function(n,i){var r,o;return o=this.parseQuery(n,i),o.source&&(t.push(r=function(){return e(n,o,i)}),r()),o},e=function(t,e,n){var i,r,o,s,l,u;for(s=!0,l=e.rules,r=0,o=l.length;r<o&&(u=l[r],i=u.getter(),s=function(){switch(!1){case!u.min:return i>=u.value;case!u.max:return i<=u.value;default:return i===u.value}}(),s);r++);return t.state(n,s)},this},j=/,\s*/,o=function(){var t,e,i,r,l,a,c,h;switch(t=1<=arguments.length?slice.call(arguments,0):[],!1){case!n.array(t[0]):return o.apply(null,t[0]);case!n.template(t[0]):return t[0].spawn();case!n.quickDomEl(t[0]):return t[1]?t[0].updateOptions(t[1]):t[0];case!(n.domNode(t[0])||n.domDoc(t[0])):return t[0]._quickElement?t[0]._quickElement:(h=t[0].nodeName.toLowerCase().replace("#",""),c=t[1]||{},c.existing=t[0],new s(h,c));case t[0]!==window:return u;case!n.string(t[0]):for(h=t[0].toLowerCase(),c="text"===h?n.object(t[1])?t[1]:{text:t[1]||""}:n.object(t[1])?t[1]:{},i=t.slice(2),r=new s(h,c),l=0,a=i.length;l<a;l++)e=i[l],n.string(e)&&(e=o.text(e)),n.template(e)&&(e=o(e)),n.array(e)&&(e=o.apply(null,e)),n.quickDomEl(e)&&e.appendTo(r);return r}},o.template=function(t){return new l(t,!0)},o.html=function(t){var e,n;return n=document.createElement("div"),n.innerHTML=t,e=Array.prototype.slice.call(n.childNodes),o.batch(e)},r=function(){function t(t,e){this.returnResults=e,this.elements=t.map(function(t){return o(t)})}return t.prototype.reverse=function(){return this.elements=this.elements.reverse(),this},t.prototype.return=function(t){return t?(this.returnResults=!0,this):this.lastResults},t}(),null==r.name&&(r.name="QuickBatch"),Object.keys(s.prototype).concat("css","replaceWith","html","text").forEach(function(t){return r.prototype[t]=function(e){var n,i;return i=this.lastResults=function(){var i,r,o,s;for(o=this.elements,s=[],i=0,r=o.length;i<r;i++)n=o[i],"html"===t||"text"===t?e?s.push(n[t]=e):s.push(n[t]):s.push(n[t].apply(n,arguments));return s}.apply(this,arguments),this.returnResults?i:this}}),o.batch=function(t,e){if(!n.iterable(t))throw new Error("Batch: expected an iterable, got "+String(t));if(!t.length)throw new Error("Batch: expected a non-empty element collection");return new r(t,e)},_=function(t,e,i){var r,o,s,u,a,c,h,p,f,d,y,_,b,S;if(i&&(s={options:function(t){return v(t,i)}}),n.array(e)&&(e=O(e,!1)),y=v.deep.notKeys("children").notDeep("relatedInstance").transform(s).clone(t,e),o=t.children,f=(null!=e?e.children:void 0)||[],y.children=[],n.array(f))for(a=u=0,b=Math.max(o.length,f.length);0<=b?u<b:u>b;a=0<=b?++u:--u)c=d=!1,r=o[a],h=f[a],p=function(){switch(!1){case!n.template(h):return h;case!n.array(h):return c=O(h,!1);case!n.string(h):return c={type:"text",options:{text:h}};case!(!h&&!i):return d=!0;default:return c=h||!0}}(),d?p=r:c&&(p=r?r.extend(p,i):new l(v.deep.clone(m,p))),y.children.push(p);else if(n.object(f)){y.children=g(f,o,i),S=f;for(_ in S)h=S[_],p=n.objectPlain(p)?h:O(h),y.children.push(new l(v.deep.clone(m,p))),delete S[_]}return y},g=function(t,e,n){var i,r,o,s,l,u,a;if(e.length){for(u=[],r=0,o=e.length;r<o;r++)i=e[r],(s=t[i.ref])?(l=i.extend(s,n),delete t[i.ref]):l=n?i.extend(null,n):i,l._config.children=a=g(t,l.children),u.push(l);return u}return e},O=function(t,e){var i;switch(!1){case!n.array(t):if(i={},!n.string(t[0]))throw new Error(E+" string for 'type', got '"+String(t[0])+"'");if(i.type=t[0],t.length>1&&!n.object(t[1])&&null!==t[1])throw new Error(E+" object for 'options', got '"+String(t[1])+"'");return i.options=t[1]?v.deep.clone(t[1]):null,t[1]&&(i.ref=t[1].id||t[1].ref),i.children=t.slice(2),e===!1?3===t.length&&n.objectPlain(t[2])&&!n.template(t[2])&&(i.children=t[2]):i.children=i.children.map(o.template),i;case!(n.string(t)||n.domText(t)):return{type:"text",options:{text:t.textContent||t},children:m.children};case!n.domEl(t):return{type:t.nodeName.toLowerCase(),ref:t.id,options:v.clone.keys(f)(t),children:m.children.map.call(t.childNodes,o.template)};case!n.quickDomEl(t):return{type:t.type,ref:t.ref,options:v.clone.deep.notKeys("relatedInstance")(t.options),children:t.children.map(o.template)};case!n.template(t):return _(t._config);default:throw new Error(E+" (array || string || domEl || quickDomEl || template), got "+String(t))}},E="Template Parse Error: expected",C=/\{\{.+?\}\}/g,m={type:"div",ref:void 0,options:{},children:[]},l=function(){function t(t,e){this._config=e?O(t):t}return t.prototype.spawn=function(t,e){var n;return t||e?n=_(this._config,t,e):(n=v.clone(this._config),n.options=v.deepOnly("style").clone(n.options)),o.apply(null,[n.type,n.options].concat(slice.call(n.children)))},t.prototype.extend=function(e,n){return new t(_(this._config,e,n))},t}(),null==l.name&&(l.name="QuickTemplate"),Object.keys(m).forEach(function(t){return Object.defineProperty(l.prototype,t,{get:function(){return this._config[t]}})}),Object.defineProperty(l.prototype,"child",{get:function(){return this._childRefs||a(this)}}),N=["link:a","anchor:a","a","text","div","span","h1","h2","h3","h4","h5","h6","header","footer","section","button","br","ul","ol","li","fieldset","input","textarea","select","option","form","frame","hr","iframe","img","picture","main","nav","meta","object","pre","style","table","tbody","th","tr","td","tfoot","video"],b=function(t){var e,n,i;return e=i=t,S.includes(t,":")&&(n=t.split(":"),e=n[0],i=n[1]),o[e]=function(){return o.apply(null,[i].concat(slice.call(arguments)))}},x=0,w=N.length;x<w;x++)P=N[x],b(P);return o.version="1.0.32",null!=("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=o:"function"==typeof define&&define.amd?define(["quickdom"],function(){return o}):this.Dom=o}()}}(this)();