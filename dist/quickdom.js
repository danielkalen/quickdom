var slice=[].slice;!function(t){return function(){var t;return t=function(t,e,n,i){return i=function(i){return n[i]?e[i]:(n[i]=1,e[i]={},e[i]=t[i](e[i]))},t[1]=function(t){var e={exports:t};return function(){var t,n,i,r,s,o,l,a;return r=["webkit","moz","ms","o"],o="backgroundPositionX backgroundPositionY blockSize borderWidth columnRuleWidth cx cy fontSize gridColumnGap gridRowGap height inlineSize lineHeight minBlockSize minHeight minInlineSize minWidth maxHeight maxWidth outlineOffset outlineWidth perspective shapeMargin strokeDashoffset strokeWidth textIndent width wordSpacing top bottom left right x y".split(" "),["margin","padding","border","borderRadius"].forEach(function(t){var e,n,i,r,s;for(o.push(t),r=["Top","Bottom","Left","Right"],s=[],n=0,i=r.length;n<i;n++)e=r[n],s.push(o.push(t+e));return s}),a=document.createElement("div").style,t=/^\d+(?:[a-z]|\%)+$/i,n=/\d+$/,i=/\s/,l={includes:function(t,e){return t&&-1!==t.indexOf(e)},isIterable:function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&!t.nodeType},isPropSupported:function(t){return"undefined"!=typeof a[t]},toTitleCase:function(t){return t[0].toUpperCase()+t.slice(1)},normalizeProperty:function(t){var e,n,i;if(this.isPropSupported(t))return t;for(i=this.toTitleCase(t),t=0,e=r.length;t<e;t++)if(n=r[t],n=""+n+i,this.isPropSupported(n))return n},normalizeValue:function(e,r){return this.includes(o,e)&&null!==r&&(r=""+r,!n.test(r)||t.test(r)||i.test(r)||(r+="px")),r}},s=function(t,e,n){var i,r,o;if(l.isIterable(t))for(i=0,r=t.length;i<r;i++)o=t[i],s(o,e,n);else if("object"==typeof e)for(i in e)n=e[i],s(t,i,n);else{if(e=l.normalizeProperty(e),"undefined"==typeof n)return getComputedStyle(t)[e];e&&(t.style[e]=l.normalizeValue(e,n))}},s.version="1.0.5",null!=("undefined"!=typeof e&&null!==e?e.exports:void 0)?e.exports=s:"function"==typeof define&&define.amd?define(["quickdom"],function(){return s}):this.Css=s}(),e.exports},t[2]=function(t){var e={exports:t};return function(t){return function(){var t=function(t,e,n,i){return i=function(i){return n[i]?e[i]:(n[i]=1,e[i]={},e[i]=t[i](e[i]))},t[1]=function(t){var e=i(2),n=function(t){var e;if(t){var n={};if("object"!=typeof t)n[t]=!0;else{Array.isArray(t)||(t=Object.keys(t));var i=0;for(e=t.length;i<e;i++){var r=t[i];n[r]=!0}}return n}},r=function(t){var n=function(t){for(var i=arguments.length,r=-1,s=Array(i);++r<i;)s[r]=arguments[r];return n.options.target?i=n.options.target:(i=t,s.shift()),e(n.options,i,s)};return t&&(n.isBase=!0),n.options={},Object.defineProperties(n,s),n},s={deep:{get:function(){var t=this.isBase?r():this;return t.options.deep=!0,t}},own:{get:function(){var t=this.isBase?r():this;return t.options.own=!0,t}},allowNull:{get:function(){var t=this.isBase?r():this;return t.options.allowNull=!0,t}},nullDeletes:{get:function(){var t=this.isBase?r():this;return t.options.nullDeletes=!0,t}},concat:{get:function(){var t=this.isBase?r():this;return t.options.concat=!0,t}},clone:{get:function(){var t=this.isBase?r():this;return t.options.target={},t}},notDeep:{get:function(){var t=this.isBase?r():this;return function(e){return t.options.notDeep=n(e),t}}},deepOnly:{get:function(){var t=this.isBase?r():this;return function(e){return t.options.deepOnly=n(e),t}}},keys:{get:function(){var t=this.isBase?r():this;return function(e){return t.options.keys=n(e),t}}},notKeys:{get:function(){var t=this.isBase?r():this;return function(e){return t.options.notKeys=n(e),t}}},transform:{get:function(){var t=this.isBase?r():this;return function(e){return"function"==typeof e?t.options.globalTransform=e:e&&"object"==typeof e&&(t.options.transforms=e),t}}},filter:{get:function(){var t=this.isBase?r():this;return function(e){return"function"==typeof e?t.options.globalFilter=e:e&&"object"==typeof e&&(t.options.filters=e),t}}}};return t=r(!0)},t[2]=function(t){var e,n=function(t){return Array.isArray(t)},i=function(t){return t&&"[object Object]"===Object.prototype.toString.call(t)||n(t)},r=function(t,e,n){return t.deep?!t.notDeep||!t.notDeep[e]:t.deepOnly?t.deepOnly[e]||n&&r(t,n):void 0};return t=e=function(t,s,o,l){var a,u;(!s||"object"!=typeof s&&"function"!=typeof s)&&(s={});var c=0;for(u=o.length;c<u;c++){var h=o[c];if(null!=h)for(a in h){var p=h[a],f=s[a];if(!(p===s||void 0===p||null===p&&!t.allowNull&&!t.nullDeletes||t.keys&&!t.keys[a]||t.notKeys&&t.notKeys[a]||t.own&&!h.hasOwnProperty(a)||t.globalFilter&&!t.globalFilter(p,a,h)||t.filters&&t.filters[a]&&!t.filters[a](p,a,h)))if(null===p&&t.nullDeletes)delete s[a];else switch(t.globalTransform&&(p=t.globalTransform(p,a,h)),t.transforms&&t.transforms[a]&&(p=t.transforms[a](p,a,h)),!1){case!(t.concat&&n(p)&&n(f)):s[a]=f.concat(p);break;case!(r(t,a,l)&&i(p)):f=i(f)?f:n(p)?[]:{},s[a]=e(t,f,[p],a);break;default:s[a]=p}}}return s}},i};return t=t({},{},{}),function(){var n=t(1);null!=("undefined"!=typeof e&&null!==e?e.exports:void 0)?e.exports=n:"function"==typeof define&&define.amd?define(["smart-extend"],function(){return n}):window.extend=n}()}}(this)(),e.exports},t[22]=function(t){var e={exports:t},n;return n=e.exports={defined:function(t){return void 0!==t},array:function(t){return t instanceof Array},object:function(t){return"object"==typeof t&&t},objectPlain:function(t){return n.object(t)&&"[object Object]"===Object.prototype.toString.call(t)},string:function(t){return"string"==typeof t},number:function(t){return"number"==typeof t},function:function(t){return"function"==typeof t},iterable:function(t){return n.object(t)&&n.number(t.length)}},e.exports},i},t=t({},{},{}),function(){var e,n,i,r,s,o,l,a,u,c,h,p,f,d,y,m,v,g,_,b,S,x,w,k,E,C,O,j,T,P,N,D;for(D="http://www.w3.org/2000/svg",e=t(1),v=t(2),f=["id","name","type","href","selected","checked","className"],p=["id","ref","type","name","text","style","class","className","url","href","selected","checked","props","attrs","passStateToChildren","stateTriggers"],S={},S.includes=function(t,e){return t&&t.indexOf(e)!==-1},S.removeItem=function(t,e){var n;return n=t.indexOf(e),n!==-1&&t.splice(n,1),t},S.normalizeGivenEl=function(t){switch(!1){case!n.domNode(t):return s(t);case!n.string(t):return s.text(t);default:return t}},S.isStateStyle=function(t){return"$"===t[0]||"@"===t[0]},n=t(22),n=v.clone(n,{domDoc:function(t){return t&&9===t.nodeType},domEl:function(t){return t&&1===t.nodeType},domText:function(t){return t&&3===t.nodeType},domNode:function(t){return n.domEl(t)||n.domText(t)},quickDomEl:function(t){return t&&t.constructor.name===o.name},template:function(t){return t&&t.constructor.name===l.name}}),o=function(){function t(t,e){this.type=t,this.options=e,this.el=this.options.existing||("text"===this.type?document.createTextNode(this.options.text):"*"===this.type[0]?document.createElementNS(D,this.type.slice(1)):document.createElement(this.type)),"text"===this.type&&(this.append=this.prepend=this.attr=function(){}),this._parent=null,this._styles={},this._stylesShared=[],this._state=[],this._children=[],this._insertedCallbacks=[],this._eventCallbacks={__refs:{}},this._normalizeOptions(),this._applyOptions(),this._attachStateEvents(),this._proxyParent(),this.el._quickElement=this}return t.prototype.toJSON=function(){var t,e,n,i,r;for(r=[this.type,v.clone.keys(p)(this.options)],e=this.children,n=0,i=e.length;n<i;n++)t=e[n],r.push(t.toJSON());return r},t}(),null==o.name&&(o.name="QuickElement"),Object.defineProperties(o.prototype,{raw:{get:function(){return this.el}},0:{get:function(){return this.el}},css:{get:function(){return this.style}},replaceWith:{get:function(){return this.replace}}}),o.prototype.parentsUntil=function(t){return h(this,t)},o.prototype.parentMatching=function(t){var e;if(n.function(t))for(e=this.parent;e;){if(t(e))return e;e=e.parent}},Object.defineProperties(o.prototype,{children:{get:function(){var t,e,n,i;if(this.el.childNodes.length!==this._children.length)for(this._children.length=0,i=this.el.childNodes,e=0,n=i.length;e<n;e++)t=i[e],t.nodeType<4&&this._children.push(s(t));return this._children}},parent:{get:function(){return this._parent&&this._parent.el===this.el.parentNode||n.domDoc(this.el.parentNode)||(this._parent=s(this.el.parentNode)),this._parent}},parents:{get:function(){return h(this)}},next:{get:function(){return s(this.el.nextSibling)}},prev:{get:function(){return s(this.el.previousSibling)}},nextAll:{get:function(){var t,e;for(e=[],t=s(this.el.nextSibling);t;)e.push(t),t=t.next;return e}},prevAll:{get:function(){var t,e;for(e=[],t=s(this.el.previousSibling);t;)e.push(t),t=t.prev;return e}},siblings:{get:function(){return this.prevAll.reverse().concat(this.nextAll)}},child:{get:function(){return this._childRefs||u(this)}},childf:{get:function(){return u(this,!0)}},index:{get:function(){var t;return(t=this.parent)?t.children.indexOf(this):null}},indexType:{get:function(){return c(this,"type")}},indexRef:{get:function(){return c(this,"ref")}}}),h=function(t,e){var i,r;for(n.function(e)||(e=void 0),r=[],i=t.parent;i;)r.push(i),i=i.parent,e&&e(i)&&(i=null);return r},u=function(t,e){var n,i;return!e&&t._childRefs||(t._childRefs={}),i=t._childRefs,t.ref&&(i[t.ref]=t),n=t.children,n.length&&v.apply(null,[t._childRefs].concat(slice.call(n.map(function(t){return u(t,e)})))),t._childRefs},c=function(t,e){var n;return(n=t.parent)?n.children.filter(function(n){return n[e]===t[e]}).indexOf(t):null},y={hover:{on:"mouseenter",off:"mouseleave",bubbles:!0},focus:{on:"focus",off:"blur",bubbles:!0}},o.prototype._normalizeOptions=function(){var t,e,n;this.options.class&&(this.options.className=this.options.class),this.options.url&&(this.options.href=this.options.url),null==(t=this.options).relatedInstance&&(t.relatedInstance=this),null==(e=this.options).unpassableStates&&(e.unpassableStates=[]),null==(n=this.options).passStateToChildren&&(n.passStateToChildren=!0),this.options.stateTriggers=this.options.stateTriggers?v.clone.deep(y,this.options.stateTriggers):y,this._parseStyles()},o.prototype._parseStyles=function(){var t,e,i,r,s,o,l,a,u;if(!n.objectPlain(this.options.style))return this._providedStates=[];for(i=Object.keys(this.options.style),u=i.filter(function(t){return S.isStateStyle(t)}),s=S.removeItem(u.slice(),"$base"),this._mediaStates=u.filter(function(t){return"@"===t[0]}).map(function(t){return t.slice(1)}),this._providedStates=u.map(function(t){return t.slice(1)}),S.includes(u,"$base")?this._styles.base=this.options.style.$base:u.length?this._styles.base=v.clone.notKeys(u)(this.options.style):this._styles.base=this.options.style,t=function(e){return function(n,i){var r,s,o,l,a,u,c,h;for(h=Object.keys(n),l={},r=!1,s=0,o=h.length;s<o;s++)a=h[s],S.isStateStyle(a)?(c=a.slice(1),i.push(c),u=i.join("+"),e._hasSharedStateStyle=!0,null==e._stateShared&&(e._stateShared=[]),e._stylesShared.push(u),"@"===a[0]&&e._mediaStates.push(c),e._styles[u]=t(n[a],i)):(r=!0,l[a]=n[a]);if(r)return l}}(this),e=0,r=s.length;e<r;e++)o=s[e],a=o.slice(1),l=t(this.options.style[o],[a]),l&&(this._styles[a]=l)},o.prototype._applyOptions=function(){var t,e,n,r,s;if((e=this.options.id||this.options.ref)&&this.attr("data-ref",this.ref=e),this.options.id&&(this.el.id=this.options.id),this.options.className&&(this.el.className=this.options.className),this.options.src&&(this.el.src=this.options.src),this.options.href&&(this.el.href=this.options.href),this.options.type&&(this.el.type=this.options.type),this.options.name&&(this.el.name=this.options.name),this.options.value&&(this.el.value=this.options.value),this.options.selected&&(this.el.selected=this.options.selected),this.options.checked&&(this.el.checked=this.options.checked),this.options.props){n=this.options.props;for(t in n)s=n[t],this.prop(t,s)}if(this.options.attrs){r=this.options.attrs;for(t in r)s=r[t],this.attr(t,s)}this.options.styleAfterInsert||this.style(this._styles.base),this.onInserted(function(t){return function(){var e,n;if(t.options.styleAfterInsert&&t.style(v.clone.apply(v,[t._styles.base].concat(slice.call(t._getStateStyles(t._getActiveStates()))))),e=t._inserted=t,(n=t._mediaStates)&&t._mediaStates.length)return t._mediaStates=new function(){var t,r,s;for(t=0,r=n.length;t<r;t++)s=n[t],this[s]=i.register(e,s);return this}}}(this)),this.options.recalcOnResize&&window.addEventListener("resize",function(t){return function(){return t.recalcStyle()}}(this))},o.prototype._attachStateEvents=function(t){var e,i,r,s;i=this.options.stateTriggers,e=function(e){return function(i,r){var s,o;if(S.includes(e._providedStates,i)||t||r.force)return o=n.string(r)?r:r.on,n.object(r)&&(s=r.off),e._listenTo(o,function(){return e.state(i,!0,r.bubbles)}),s?e._listenTo(s,function(){return e.state(i,!1,r.bubbles)}):void 0}}(this);for(r in i)s=i[r],e(r,s)},o.prototype._proxyParent=function(){var t;return t=void 0,Object.defineProperty(this,"_parent",{get:function(){return t},set:function(e){var n;(t=e)&&(n=this.parents.slice(-1)[0],n.raw===document.documentElement?this._unproxyParent(e):t.onInserted(function(n){return function(){if(t===e)return n._unproxyParent(e)}}(this)))}})},o.prototype._unproxyParent=function(t){var e,n,i,r;for(delete this._parent,this._parent=t,r=this._insertedCallbacks,n=0,i=r.length;n<i;n++)(e=r[n])(this)},j=/\s+/,o.prototype.on=function(t,e){var i,r;return n.string(t)&&n.function(e)&&(r=t.split("."),i=r[1],t=r[0],t.split(j).forEach(function(t){return function(n){return t._eventCallbacks[n]||(t._eventCallbacks[n]=[],t._listenTo(n,function(e){var i,r,s,o;for(i=t._eventCallbacks[n].slice(),s=0,o=i.length;s<o;s++)r=i[s],r.call(t.el,e)})),i&&(t._eventCallbacks.__refs[i]=e),t._eventCallbacks[n].push(e)}}(this))),this},o.prototype.once=function(t,e){var i;return n.string(t)&&n.function(e)&&this.on(t,i=function(n){return function(r){return n.off(t,i),e.call(n.el,r)}}(this)),this},o.prototype.off=function(t,e){var i,r,s;if(n.string(t))s=t.split("."),i=s[1],t=s[0],t.split(j).forEach(function(t){return function(r){if(t._eventCallbacks[r]){if(null==e&&(e=t._eventCallbacks.__refs[i]),n.function(e))return S.removeItem(t._eventCallbacks[r],e);if(!i)return t._eventCallbacks[r].length=0}}}(this));else for(r in this._eventCallbacks)this.off(r);return this},o.prototype.emit=function(t,e,i){var r;return null==e&&(e=!0),null==i&&(i=!0),t&&n.string(t)&&(r=document.createEvent("Event"),r.initEvent(t,e,i),this.el.dispatchEvent(r)),this},o.prototype.onInserted=function(t,e){if(null==e&&(e=!0),n.function(t))return this._inserted?e&&t(this):this._insertedCallbacks.push(t),this},o.prototype._listenTo=function(t,e){var n,i;return i=this.el.addEventListener?"addEventListener":"attachEvent",n=this.el.addEventListener?t:"on"+t,this.el[i](n,e),this},o.prototype.updateOptions=function(t){return n.object(t)&&(this.options=t,this._normalizeOptions(),this._applyOptions(this.options)),this},o.prototype.show=function(t){var e;return null==t&&(t=(null!=(e=this._styles.base)?e.display:void 0)||"block"),this.style("display",t)},o.prototype.hide=function(){return this.style("display","none")},o.prototype.state=function(t,e,i,r){var s,o,l,a,u,c,h,p,f,d,y,m,g,_,b,x,w,k,E,C;if(1===arguments.length)return S.includes(this._state,t);if(this._statePipeTarget&&r!==this)return this._statePipeTarget.state(t,e,i,this),this;if(n.string(t)){if("$"===t[0]&&(t=t.slice(1)),a=!!e,"base"===t)return this;if(o=this._getActiveStates(t,!1),s=this._getStateStyles(o),this.state(t)!==a&&(C=this._styles[t]||this._styles[t],C&&(E=this._providedStates.indexOf(t),k=o.filter(function(t){return function(e){return t._providedStates.indexOf(e)>E}}(this)),w=this._getStateStyles(k)),a?(this._state.push(t),C&&this.style(v.clone.keys(C).apply(null,[C].concat(slice.call(w))))):(S.removeItem(this._state,t),C&&(b=v.clone.keys(C).apply(null,[this._styles.base].concat(slice.call(s))),x=v.transform(function(){return null}).clone(C),this.style(v(x,b))))),this._hasSharedStateStyle)for(m=this._stylesShared.filter(function(e){return S.includes(e,t)}),h=0,f=m.length;h<f;h++)_=m[h],g=_.split("+"),c=g.length===g.filter(function(e){return function(n){return n===t||e.state(n)}}(this)).length,c&&(C=this._styles[_],a?(S.includes(this._stateShared,_)||this._stateShared.push(_),g.length>2&&(u=this._styles[S.removeItem(g,t).join("+")],C=v.clone(u,C)),this.style(C)):(S.removeItem(this._stateShared,_),this._stateShared.length&&s.push.apply(s,this._stateShared.filter(function(e){return!S.includes(e,t)}).map(function(t){return function(e){return t._styles[e]}}(this))),b=v.clone.keys(C).apply(null,[this._styles.base].concat(slice.call(s))),x=v.transform(function(){return null}).clone(C),this.style(v(x,b))));if(!S.includes(this.options.unpassableStates,t))if(i)this.parent&&this._parent.state(t,e,!0,r||this);else if(this.options.passStateToChildren)for(y=this._children,p=0,d=y.length;p<d;p++)l=y[p],l.state(t,e,!1,r||this);return this}},o.prototype.resetState=function(){var t,e,n,i;for(i=this._state.slice(),e=0,n=i.length;e<n;e++)t=i[e],this.state(t,!1);return this},o.prototype.pipeState=function(t){var e,i,r,s;if(t){if(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&t!==this)for(this._statePipeTarget=t,s=this._state,i=0,r=s.length;i<r;i++)e=s[i],t.state(e,!0)}else t===!1&&delete this._statePipeTarget;return this},o.prototype.style=function(){var t,i;if("text"!==this.type){if(t=arguments,n.string(t[0])){if(i=e(this.el,t[0],t[1]),!n.defined(t[1]))return this._inserted?i:i?"":i}else n.object(t[0])&&e(this.el,v.allowNull.transform(function(t){return function(e){return"function"==typeof e?e.call(t,t.options.relatedInstance):e}}(this)).clone(t[0]));return this}},o.prototype.styleSafe=function(t,e){var i,r;if("text"!==this.type)return i=arguments,r=this.style(t),n.string(r)?(e&&(r=0),r||this.el.style[i[0]]||this._styles.base[i[0]]||""):this},o.prototype.styleParsed=function(t){return parseFloat(this.styleSafe(t))},o.prototype.recalcStyle=function(){var t,e;return t=this._getStateStyles(this._getActiveStates()),e=v.clone.filter(function(t){return"function"==typeof t}).apply(null,[this._styles.base].concat(slice.call(t))),this.style(e)},o.prototype._getActiveStates=function(t,e){var n;return null==e&&(e=!0),n=this._providedStates.filter(function(e){return function(n){return S.includes(e._state,n)&&n!==t}}(this)),e&&this._hasSharedStateStyle?n.concat(this._stateShared):n},o.prototype._getStateStyles=function(t){return t.map(function(t){return function(e){return t._styles[e]||t._styles[e]}}(this))},Object.defineProperties(o.prototype,{rect:{get:function(){return this.el.getBoundingClientRect()}},width:{get:function(){return parseFloat(this.style("width"))}},height:{get:function(){return parseFloat(this.style("height"))}},orientation:k={get:function(){return this.width>this.height?"landscape":"portrait"}},aspectRatio:d={get:function(){return this.width/this.height}}}),o.prototype.attr=function(t,e){switch(e){case void 0:return this.el.getAttribute(t);case null:return this.el.removeAttribute(t);default:return this.el.setAttribute(t,e),this}},o.prototype.prop=function(t,e){switch(e){case void 0:return this.el[t];default:return this.el[t]=e,this}},o.prototype.toTemplate=function(){return s.template(this)},o.prototype.clone=function(){var t,e,n,i,r,s,l,a,u,c,h,p,f,d,y,m,g;for(r=this.el.cloneNode(!1),d=v.clone(this.options,{existing:r}),f=new o(this.type,d),y=this._state,l=0,u=y.length;l<u;l++)t=y[l],f.state(t,!0);for(m=this.children,a=0,c=m.length;a<c;a++)i=m[a],f.append(i.clone());g=this._eventCallbacks;for(s in g)for(n=g[s],p=0,h=n.length;p<h;p++)e=n[p],f.on(s,e);return f},o.prototype.append=function(t){var e;return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&(e=t.parent,e&&e._removeChild(t),this._children.push(t),this.el.appendChild(t.el),t._refreshParent())),this},o.prototype.appendTo=function(t){return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&t.append(this)),this},o.prototype.prepend=function(t){var e;return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&(e=t.parent,e&&e._removeChild(t),this._children.unshift(t),this.el.insertBefore(t.el,this.el.firstChild),t._refreshParent())),this},o.prototype.prependTo=function(t){return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&t.prepend(this)),this},o.prototype.after=function(t){var e;return t&&this.parent&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&(e=this.parent._children.indexOf(this),this.parent._children.splice(e+1,0,t),this.el.parentNode.insertBefore(t.el,this.el.nextSibling),t._refreshParent())),this},o.prototype.insertAfter=function(t){return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&t.after(this)),this},o.prototype.before=function(t){var e;return t&&this.parent&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&(e=this.parent._children.indexOf(this),this.parent._children.splice(e,0,t),this.el.parentNode.insertBefore(t.el,this.el),t._refreshParent())),this},o.prototype.insertBefore=function(t){return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&t.before(this)),this},o.prototype.detach=function(){var t;return null!=(t=this.parent)&&t._removeChild(this),this},o.prototype.remove=function(){var t;this.detach(),this.resetState();for(t in this._eventCallbacks)this._eventCallbacks[t].length=0;return this},o.prototype.empty=function(){var t,e,n,i;for(i=this.children.slice(),e=0,n=i.length;e<n;e++)t=i[e],this._removeChild(t);return this},o.prototype.wrap=function(t){var e;return t&&(t=S.normalizeGivenEl(t),e=this.parent,n.quickDomEl(t)&&t!==this&&t!==this.parent&&(e&&e._removeChild(this,t.parent?void 0:t),t.append(this))),this},o.prototype.unwrap=function(){var t,e,n,i;return e=this.parent,e&&(n=s.batch(e.children),i=e.next,t=e.parent,t&&(e.detach(),i?n.insertBefore(i):n.appendTo(t))),this},o.prototype.replace=function(t){var e;return t&&(t=S.normalizeGivenEl(t),n.quickDomEl(t)&&t!==this&&(t.detach(),null!=(e=this.parent)&&e._removeChild(this,t),t._refreshParent())),this},o.prototype._refreshParent=function(){return this.parent},o.prototype._removeChild=function(t,e){var n;return n=this._children.indexOf(t),n!==-1&&(e?(this.el.replaceChild(e.el,t.el),this._children.splice(n,1,e)):(this.el.removeChild(t.el),this._children.splice(n,1))),this},Object.defineProperties(o.prototype,{html:{get:function(){return this.el.innerHTML},set:function(t){return this.el.innerHTML=t}},text:{get:function(){return this.el.textContent},set:function(t){return this.el.textContent=t}}}),a={type:"window",el:window,raw:window,_eventCallbacks:{__refs:{}}},a.on=o.prototype.on,a.off=o.prototype.off,a.emit=o.prototype.emit,a._listenTo=o.prototype._listenTo,Object.defineProperties(a,{width:{get:function(){return window.innerWidth}},height:{get:function(){return window.innerHeight}},orientation:k,aspectRatio:d}),i=new function(){var t,e;return t=[],window.addEventListener("resize",function(){var e,n,i;for(n=0,i=t.length;n<i;n++)(e=t[n])()}),this.parseQuery=function(t,e){var n,i,r;return n=e.split("("),r=n[0],r=function(){switch(r){case"window":return a;case"parent":return t.parent;case"self":return t;default:return t.parentMatching(function(t){return t.ref===r.slice(1)})}}(),i=n[1].slice(0,-1).split(T).map(function(t){var e,n,i,s,o,l,a;return l=t.split(":"),a=parseFloat(l[1]),isNaN(a)&&(a=l[1]),n=l[0],i=n.slice(0,4),s="max-"===i,o=!s&&"min-"===i,(s||o)&&(n=n.slice(4)),e=function(){switch(n){case"orientation":return function(){return r.orientation};case"aspect-ratio":return function(){return r.aspectRatio};case"width":case"height":return function(){return r[n]};default:return function(){var t,e;return e=r.style(n),t=parseFloat(e),isNaN(t)?e:t}}}(),{key:n,value:a,min:o,max:s,getter:e}}),{source:r,rules:i}},this.register=function(n,i){var r,s;return s=this.parseQuery(n,i),s.source&&(t.push(r=function(){return e(n,s,i)}),r()),s},e=function(t,e,n){var i,r,s,o,l,a;for(o=!0,l=e.rules,r=0,s=l.length;r<s&&(a=l[r],i=a.getter(),o=function(){switch(!1){case!a.min:return i>=a.value;case!a.max:return i<=a.value;default:return i===a.value}}(),o);r++);return t.state(n,o)},this},T=/,\s*/,s=function(){var t,e,i,r,l,u,c,h,p,f;switch(t=arguments,!1){case!n.array(t[0]):return s.apply(null,t[0]);case!n.template(t[0]):return t[0].spawn();case!n.quickDomEl(t[0]):return t[1]?t[0].updateOptions(t[1]):t[0];case!(n.domNode(t[0])||n.domDoc(t[0])):return t[0]._quickElement?t[0]._quickElement:(f=t[0].nodeName.toLowerCase().replace("#",""),p=t[1]||{},p.existing=t[0],new o(f,p));case t[0]!==window:return a;case!n.string(t[0]):if(f=t[0].toLowerCase(),p="text"===f?n.object(t[1])?t[1]:{text:t[1]||""}:n.object(t[1])?t[1]:{},l=new o(f,p),t.length>2){for(r=[],u=1,e=t.length;++u<e;)r.push(t[u]);for(c=0,h=r.length;c<h;c++)i=r[c],n.string(i)&&(i=s.text(i)),n.template(i)&&(i=s(i)),n.array(i)&&(i=s.apply(null,i)),n.quickDomEl(i)&&i.appendTo(l)}return l}},s.template=function(t){return new l(t,!0)},s.html=function(t){var e,n;return n=document.createElement("div"),n.innerHTML=t,e=Array.prototype.slice.call(n.childNodes),s.batch(e)},r=function(){function t(t,e){this.returnResults=e,this.elements=t.map(function(t){return s(t)})}return t.prototype.reverse=function(){return this.elements=this.elements.reverse(),this},t.prototype.return=function(t){return t?(this.returnResults=!0,this):this.lastResults},t}(),null==r.name&&(r.name="QuickBatch"),Object.keys(o.prototype).concat("css","replaceWith","html","text").forEach(function(t){return r.prototype[t]=function(e){var n,i;return i=this.lastResults=function(){var i,r,s,o;for(s=this.elements,o=[],i=0,r=s.length;i<r;i++)n=s[i],"html"===t||"text"===t?e?o.push(n[t]=e):o.push(n[t]):o.push(n[t].apply(n,arguments));return o}.apply(this,arguments),this.returnResults?i:this}}),s.batch=function(t,e){if(!n.iterable(t))throw new Error("Batch: expected an iterable, got "+String(t));if(!t.length)throw new Error("Batch: expected a non-empty element collection");return new r(t,e)},_=function(t,e,i){var r,s,o,a,u,c,h,p,f,d,y,_,b,S;if(i&&(o={options:function(t){return v(t,i)}}),n.array(e)&&(e=C(e,!1)),y=v.deep.notKeys("children").notDeep("relatedInstance").transform(o).clone(t,e),s=t.children,f=(null!=e?e.children:void 0)||[],y.children=[],n.array(f))for(a=u=0,b=Math.max(s.length,f.length);0<=b?u<b:u>b;a=0<=b?++u:--u)c=d=!1,r=s[a],h=f[a],p=function(){switch(!1){case!n.template(h):return h;case!n.array(h):return c=C(h,!1);case!n.string(h):return c={type:"text",options:{text:h}};case!(!h&&!i):return d=!0;default:return c=h||!0}}(),d?p=r:c&&(p=r?r.extend(p,i):new l(v.deep.clone(m,p))),y.children.push(p);else if(n.object(f)){y.children=g(f,s,i),S=f;for(_ in S)h=S[_],p=n.objectPlain(p)?h:C(h),y.children.push(new l(v.deep.clone(m,p))),delete S[_]}return y},g=function(t,e,n){var i,r,s,o,l,a,u;if(e.length){for(a=[],r=0,s=e.length;r<s;r++)i=e[r],(o=t[i.ref])?(l=i.extend(o,n),delete t[i.ref]):l=n?i.extend(null,n):i,l._config.children=u=g(t,l.children),a.push(l);return a}return e},C=function(t,e){var i;switch(!1){case!n.array(t):if(i={},!n.string(t[0]))throw new Error(E+" string for 'type', got '"+String(t[0])+"'");if(i.type=t[0],t.length>1&&!n.object(t[1])&&null!==t[1])throw new Error(E+" object for 'options', got '"+String(t[1])+"'");return i.options=t[1]?v.deep.clone(t[1]):null,t[1]&&(i.ref=t[1].id||t[1].ref),i.children=t.slice(2),e===!1?3===t.length&&n.objectPlain(t[2])&&!n.template(t[2])&&(i.children=t[2]):i.children=i.children.map(s.template),i;case!(n.string(t)||n.domText(t)):return{type:"text",options:{text:t.textContent||t},children:m.children};case!n.domEl(t):return{type:t.nodeName.toLowerCase(),ref:t.id,options:v.clone.keys(f)(t),children:m.children.map.call(t.childNodes,s.template)};case!n.quickDomEl(t):return{type:t.type,ref:t.ref,options:v.clone.deep.notKeys("relatedInstance")(t.options),children:t.children.map(s.template)};case!n.template(t):return _(t._config);default:throw new Error(E+" (array || string || domEl || quickDomEl || template), got "+String(t))}},E="Template Parse Error: expected",O=/\{\{.+?\}\}/g,m={type:"div",ref:void 0,options:{},children:[]},l=function(){function t(t,e){this._config=e?C(t):t}return t.prototype.spawn=function(t,e){var n;return t||e?n=_(this._config,t,e):(n=v.clone(this._config),n.options=v.deepOnly("style").clone(n.options)),s.apply(null,[n.type,n.options].concat(slice.call(n.children)))},t.prototype.extend=function(e,n){return new t(_(this._config,e,n))},t}(),null==l.name&&(l.name="QuickTemplate"),Object.keys(m).forEach(function(t){return Object.defineProperty(l.prototype,t,{get:function(){return this._config[t]}})}),Object.defineProperty(l.prototype,"child",{get:function(){return this._childRefs||u(this)}}),N=["link:a","anchor:a","a","text","div","span","h1","h2","h3","h4","h5","h6","header","footer","section","button","br","ul","ol","li","fieldset","input","textarea","select","option","form","frame","hr","iframe","img","picture","main","nav","meta","object","pre","style","table","tbody","th","tr","td","tfoot","video"],b=function(t){var e,n,i;return e=i=t,S.includes(t,":")&&(n=t.split(":"),e=n[0],i=n[1]),s[e]=function(){return s.apply(null,[i].concat(slice.call(arguments)))}},x=0,w=N.length;x<w;x++)P=N[x],b(P);return s.version="1.0.35",null!=("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=s:"function"==typeof define&&define.amd?define(["quickdom"],function(){return s}):this.Dom=s}()}}(this)();