var slice=[].slice;!function(){var t,e,n,i,r,o,s,l,u,c,a,h,p,f,d,y,m,v,g,b,_,x,k;for(k="http://www.w3.org/2000/svg",s=function(t){var e={exports:t};return function(){var t,n,i,r,o,s,l,u;return r=["webkit","moz","ms","o"],s="backgroundPositionX backgroundPositionY blockSize borderWidth columnRuleWidth cx cy fontSize gridColumnGap gridRowGap height inlineSize lineHeight minBlockSize minHeight minInlineSize minWidth maxHeight maxWidth outlineOffset outlineWidth perspective shapeMargin strokeDashoffset strokeWidth textIndent width wordSpacing top bottom left right x y".split(" "),["margin","padding","border","borderRadius"].forEach(function(t){var e,n,i,r,o;for(s.push(t),r=["Top","Bottom","Left","Right"],o=[],n=0,i=r.length;n<i;n++)e=r[n],o.push(s.push(t+e));return o}),u=document.createElement("div").style,t=/^\d+(?:[a-z]|\%)+$/i,n=/\d+$/,i=/\s/,l={includes:function(t,e){return t&&-1!==t.indexOf(e)},isIterable:function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&!t.nodeType},isPropSupported:function(t){return"undefined"!=typeof u[t]},toTitleCase:function(t){return t[0].toUpperCase()+t.slice(1)},normalizeProperty:function(t){var e,n,i;if(this.isPropSupported(t))return t;for(i=this.toTitleCase(t),t=0,e=r.length;t<e;t++)if(n=r[t],n=""+n+i,this.isPropSupported(n))return n},normalizeValue:function(e,r){return this.includes(s,e)&&null!==r&&(r=""+r,!n.test(r)||t.test(r)||i.test(r)||(r+="px")),r}},o=function(t,e,n){var i,r,s;if(l.isIterable(t))for(i=0,r=t.length;i<r;i++)s=t[i],o(s,e,n);else if("object"==typeof e)for(i in e)n=e[i],o(t,i,n);else{if(e=l.normalizeProperty(e),"undefined"==typeof n)return getComputedStyle(t)[e];e&&(t.style[e]=l.normalizeValue(e,n))}},o.version="1.0.5",null!=("undefined"!=typeof e&&null!==e?e.exports:void 0)?e.exports=o:"function"==typeof define&&define.amd?define(["quickdom"],function(){return o}):this.Css=o}(),e.exports}.call(this,{}),t=s,l=function(t){var e={exports:t},n=[].slice;return function(){var t,i;t=function(t){return function(t){var e={exports:t},i,r,o,s,l;return r=function(t){var e={exports:t},n,i,o;return n=function(t){return Array.isArray(t)},i=function(t){return t&&"object"==typeof t},o=function(t,e){return!!e.notDeep&&e.notDeep.indexOf(t)!==-1},e.exports=r=function(t,e,s){var l,u,c,a,h,p,f;for((!e||"object"!=typeof e&&"function"!=typeof e)&&(e={}),l=0,c=s.length;l<c;l++)if(a=s[l],null!=a)for(u in a)if(h=a[u],f=e[u],!(h===e||void 0===h||null===h&&!t.allowNull||t.keys&&t.keys.indexOf(u)===-1||t.notKeys&&t.notKeys.indexOf(u)!==-1||t.own&&!a.hasOwnProperty(u)||t.globalFilter&&!t.globalFilter(h,u,a)||t.filters&&t.filters[u]&&!t.filters[u](h,u,a)))switch(t.globalTransform&&(h=t.globalTransform(h,u,a)),t.transforms&&t.transforms[u]&&(h=t.transforms[u](h,u,a)),!1){case!(t.concat&&n(h)&&n(f)):e[u]=f.concat(h);break;case!(t.deep&&i(h)&&!o(u,t)):p=i(f)?f:n(h)?[]:{},e[u]=r(t,p,[h]);break;default:e[u]=h}return e},e.exports}({}),l=function(t){var e,n,i;n={};for(e in t)i=t[e],n[e]=i;return n},s=function(t){if(t)return"object"!=typeof t||Array.isArray(t)?[].concat(t):Object.keys(t)},i=function(t){var e;return e=t.target?function(){var t;return t=1<=arguments.length?n.call(arguments,0):[],r(e.options,e.options.target,t)}:function(){var t,i;return i=arguments[0],t=2<=arguments.length?n.call(arguments,1):[],r(e.options,i,t)},e.options=t,Object.defineProperties(e,o),e},o={deep:{get:function(){var t;return t=l(this.options),t.deep=!0,i(t)}},own:{get:function(){var t;return t=l(this.options),t.own=!0,i(t)}},allowNull:{get:function(){var t;return t=l(this.options),t.allowNull=!0,i(t)}},concat:{get:function(){var t;return t=l(this.options),t.concat=!0,i(t)}},clone:{get:function(){var t;return t=l(this.options),t.target={},i(t)}},notDeep:{get:function(){var t;return t=l(this.options),function(e){return t.notDeep=s(e),i(t)}}},keys:{get:function(){var t;return t=l(this.options),function(e){return t.keys=s(e),i(t)}}},notKeys:{get:function(){var t;return t=l(this.options),function(e){return t.notKeys=s(e),i(t)}}},transform:{get:function(){var t;return t=l(this.options),function(e){return"function"==typeof e?t.globalTransform=e:e&&"object"==typeof e&&(t.transforms=e),i(t)}}},filter:{get:function(){var t;return t=l(this.options),function(e){return"function"==typeof e?t.globalFilter=e:e&&"object"==typeof e&&(t.filters=e),i(t)}}}},e.exports=i({}),e.exports}}(this)({}),i=t,null!=("undefined"!=typeof e&&null!==e?e.exports:void 0)?e.exports=i:"function"==typeof define&&define.amd?define(["smart-extend"],function(){return i}):window.extend=i}(),e.exports}.call(this,{}),a=l,u=["className","href","selected","type","name","id","checked"],d={},d.includes=function(t,e){return t&&t.indexOf(e)!==-1},d.removeItem=function(t,e){var n;return n=t.indexOf(e),n!==-1&&t.splice(n,1),t},d.normalizeGivenEl=function(t){switch(!1){case!e.domNode(t):return i(t);case!e.string(t):return i.text(t);default:return t}},e=function(t){return function(t){var n={exports:t};return e=n.exports={defined:function(t){return void 0!==t},array:function(t){return t instanceof Array},object:function(t){return"object"==typeof t&&t},objectPlain:function(t){return e.object(t)&&"[object Object]"===Object.prototype.toString.call(t)},string:function(t){return"string"==typeof t},number:function(t){return"number"==typeof t},function:function(t){return"function"==typeof t},iterable:function(t){return e.object(t)&&e.number(t.length)}},n.exports}}(this)({}),e=a.clone(e,{domEl:function(t){return t&&1===t.nodeType},domText:function(t){return t&&3===t.nodeType},domNode:function(t){return e.domEl(t)||e.domText(t)},quickDomEl:function(t){return t instanceof r},template:function(t){return t instanceof o}}),r=function(t,e){return this.type=t,this.options=e,this.el=this.options.existing||("text"===this.type?document.createTextNode(this.options.text):"*"===this.type[0]?document.createElementNS(k,this.type.slice(1)):document.createElement(this.type)),this._parent=null,this._state=[],this._children=[],this._insertedCallbacks=[],this._eventCallbacks={},this._normalizeOptions(),this._applyOptions(),this._attachStateEvents(),this.el._quickElement=this},Object.defineProperties(r.prototype,{raw:{get:function(){return this.el}},0:{get:function(){return this.el}},css:{get:function(){return this.style}},replaceWith:{get:function(){return this.replace}}}),r.prototype.parentsUntil=function(t){return f(this,t)},r.prototype.parentMatching=function(t){var n;if(e.function(t))for(n=this.parent;n;){if(t(n))return n;n=n.parent}},Object.defineProperties(r.prototype,{children:{get:function(){var t,e,n,r;if(this.el.childNodes.length!==this._children.length)for(this._children.length=0,r=this.el.childNodes,e=0,n=r.length;e<n;e++)t=r[e],this._children.push(i(t));return this._children}},parent:{get:function(){return this._parent&&this._parent.el===this.el.parentNode||(this._parent=i(this.el.parentNode)),this._parent}},parents:{get:function(){return f(this)}},next:{get:function(){return i(this.el.nextSibling)}},prev:{get:function(){return i(this.el.previousSibling)}},nextAll:{get:function(){var t,e;for(e=[],t=i(this.el.nextSibling);t;)e.push(t),t=t.next;return e}},prevAll:{get:function(){var t,e;for(e=[],t=i(this.el.previousSibling);t;)e.push(t),t=t.prev;return e}},siblings:{get:function(){return this.prevAll.reverse().concat(this.nextAll)}}}),f=function(t,n){var i,r;for(e.function(n)||(n=void 0),r=[],i=t.parent;i;)r.push(i),i=i.parent,n&&n(i)&&(i=null);return r},r.prototype._normalizeOptions=function(){var t,e,n;return null==(t=this.options).style&&(t.style={}),this.options.styleShared={},this.options.class&&(this.options.className=this.options.class),this.options.url&&(this.options.href=this.options.url),null==(e=this.options).relatedInstance&&(e.relatedInstance=this),null==(n=this.options).passStateToChildren&&(n.passStateToChildren=!0),this.options.stateTriggers=a.deep({hover:{on:"mouseenter",off:"mouseleave"},focus:{on:"focus",off:"blur"}},this.options.stateTriggers),this._normalizeStyle(),this},r.prototype._normalizeStyle=function(){var t,e,n,i,r,o,s,l;for(n=Object.keys(this.options.style),l=n.filter(function(t){return"$"===t[0]}),o=d.removeItem(l.slice(),"$base"),this.providedStates=l.map(function(t){return t.slice(1)}),!d.includes(l,"$base")&&n.length&&(l.length?(r=n.filter(function(t){return"$"!==t[0]}),this.options.style.$base=a.clone.keys(r)(this.options.style)):this.options.style={$base:this.options.style}),t=function(e){return function(n,i){var r,o,s,l,u,c;if(s=Object.keys(n).filter(function(t){return"$"===t[0]}),s.length){for(e.hasSharedStateStyle=!0,u=[],r=0,l=s.length;r<l;r++)o=s[r],c=i.concat(o.slice(1)),e.options.styleShared[c.join("+")]=n[o],t(n[o],c),u.push(delete n[o]);return u}}}(this),e=0,i=o.length;e<i;e++)s=o[e],t(this.options.style[s],[s.slice(1)]);return this},r.prototype._applyOptions=function(){var t,e,n,i,r;if(this.options.id&&(this.el.id=this.options.id),this.options.className&&(this.el.className=this.options.className),this.options.href&&(this.el.href=this.options.href),this.options.type&&(this.el.type=this.options.type),this.options.name&&(this.el.name=this.options.name),this.options.value&&(this.el.value=this.options.value),this.options.selected&&(this.el.selected=this.options.selected),this.options.checked&&(this.el.checked=this.options.checked),this.options.props){n=this.options.props;for(e in n)r=n[e],this.prop(e,r)}if(this.options.attrs){i=this.options.attrs;for(e in i)r=i[e],this.attr(e,r)}return this.options.styleAfterInsert?this.onInserted(t=function(e){return function(){var n;return n=e.parents.slice(-1)[0],n.raw===document.documentElement?e.style(a.clone.apply(a,[e.options.style.$base].concat(slice.call(e._getStateStyles(e._getActiveStates()))))):n.onInserted(t)}}(this)):this.style(this.options.style.$base),Object.defineProperty(this,"_parent",{set:function(t){var e,n,i,r;if(t)for(delete this._parent,this._parent=t,r=this._insertedCallbacks,n=0,i=r.length;n<i;n++)(e=r[n])(this)}}),this},r.prototype._attachStateEvents=function(){var t,n,i,r;n=this.options.stateTriggers,t=function(t){return function(n,i){var r,o;if(o=e.string(i)?i:i.on,e.object(i)&&(r=i.off),t._listenTo(o,function(){return t.state(n,!0)}),r)return t._listenTo(r,function(){return t.state(n,!1)})}}(this);for(i in n)r=n[i],t(i,r);return this},r.prototype._listenTo=function(t,e){var n,i;return i=this.el.addEventListener?"addEventListener":"attachEvent",n=this.el.addEventListener?t:"on"+t,this.el[i](n,e),this},r.prototype._getActiveStates=function(t){return this.providedStates.filter(function(e){return function(n){return d.includes(e._state,n)&&n!==t}}(this))},r.prototype._getStateStyles=function(t){return t.map(function(t){return function(e){return t.options.style["$"+e]}}(this))},r.prototype.on=function(t,n){return e.string(t)&&e.function(n)&&(this._eventCallbacks[t]||(this._eventCallbacks[t]=[],this._listenTo(t,function(e){return function(i){var r,o,s;for(s=e._eventCallbacks[t],r=0,o=s.length;r<o;r++)n=s[r],n.call(e.el,i)}}(this))),this._eventCallbacks[t].push(n)),this},r.prototype.off=function(t,n){if(e.string(t))this._eventCallbacks[t]&&(e.function(n)?d.removeItem(this._eventCallbacks[t],n):this._eventCallbacks[t].length=0);else for(t in this._eventCallbacks)this.off(t);return this},r.prototype.emit=function(t,n,i){var r;return null==n&&(n=!0),null==i&&(i=!0),t&&e.string(t)&&(r=document.createEvent("Event"),r.initEvent(t,n,i),this.el.dispatchEvent(r)),this},r.prototype.onInserted=function(t,n){if(null==n&&(n=!0),e.function(t))return this._parent?n&&t(this):this._insertedCallbacks.push(t),this},r.prototype.updateOptions=function(t){return e.object(t)&&(this.options=t,this._normalizeOptions(),this._applyOptions(this.options)),this},r.prototype.state=function(t,n){var i,r,o,s,l,u,c,h,p,f,y,m,v,g,b,_,x,k,E,S;if(1===arguments.length)return d.includes(this._state,t);if(e.string(t)){if("$"===t[0]&&(t=t.slice(1)),s=!!n,"base"===t)return this;if(this.state(t)!==s&&(this.options.style["$"+t]&&(S=this.options.style["$"+t],E=this.providedStates.indexOf(t),r=this._getActiveStates(t),k=r.filter(function(t){return function(e){return t.providedStates.indexOf(e)>E}}(this)),i=this._getStateStyles(r),x=this._getStateStyles(k)),s?(this._state.push(t),S&&this.style(a.clone.keys(S).apply(null,[S].concat(slice.call(x))))):(d.removeItem(this._state,t),S&&(b=a.clone.keys(S).apply(null,[this.options.style.$base].concat(slice.call(i))),_=a.transform(function(){return null}).clone(S),this.style(a(_,b))))),this.hasSharedStateStyle)for(m=Object.keys(this.options.styleShared),m=m.filter(function(e){return d.includes(e,t)}),l=0,p=m.length;l<p;l++)g=m[l],v=g.split("+"),c=v.length===v.filter(function(e){return function(n){return n===t||e.state(n)}}(this)).length,c&&(S=this.options.styleShared[g],s?(u=this.options.styleShared[d.removeItem(v,t).join("+")],this.style(a.clone(u,S))):(b=a.clone.keys(S).apply(null,[this.options.style.$base].concat(slice.call(i||[]))),_=a.transform(function(){return null}).clone(S),this.style(a(_,b))));if(this.options.passStateToChildren)for(y=this._children,h=0,f=y.length;h<f;h++)o=y[h],o.state(t,n);return this}},r.prototype.resetState=function(){var t,e,n,i;for(i=this._state.slice(),e=0,n=i.length;e<n;e++)t=i[e],this.state(t,!1);return this},r.prototype.style=function(){var n,i;if("text"!==this.type){if(n=arguments,e.string(n[0])){if(i=t(this.el,n[0],n[1]),!e.defined(n[1]))return i}else e.object(n[0])&&t(this.el,a.allowNull.transform(function(t){return function(e){return"function"==typeof e?e.call(t,t.options.relatedInstance):e}}(this)).clone(n[0]));return this}},Object.defineProperty(r.prototype,"rect",{get:function(){return this.el.getBoundingClientRect()}}),r.prototype.attr=function(t,e){switch(e){case void 0:return this.el.getAttribute(t);case null:return this.el.removeAttribute(t);default:return this.el.setAttribute(t,e),this}},r.prototype.prop=function(t,e){switch(e){case void 0:return this.el[t];default:return this.el[t]=e,this}},r.prototype.toTemplate=function(){return i.template(this)},r.prototype.clone=function(){var t,e,n,i,o,s,l,u,c,h,p,f,d,y,m,v,g;for(o=this.el.cloneNode(!1),y=a.clone(this.options,{existing:o}),d=new r(this.type,y),m=this._state,l=0,h=m.length;l<h;l++)t=m[l],d.state(t,!0);for(v=this.children,u=0,p=v.length;u<p;u++)i=v[u],d.append(i.clone());g=this._eventCallbacks;for(s in g)for(n=g[s],c=0,f=n.length;c<f;c++)e=n[c],d.on(s,e);return d},r.prototype.append=function(t){var n;return t&&(t=d.normalizeGivenEl(t),e.quickDomEl(t)&&(n=t.parent,n&&n._removeChild(t),this._children.push(t),this.el.appendChild(t.el),t.parent)),this},r.prototype.appendTo=function(t){return t&&(t=d.normalizeGivenEl(t),e.quickDomEl(t)&&t.append(this)),this},r.prototype.prepend=function(t){var n;return t&&(t=d.normalizeGivenEl(t),e.quickDomEl(t)&&(n=t.parent,n&&n._removeChild(t),this._children.unshift(t),this.el.insertBefore(t.el,this.el.firstChild),t.parent)),this},r.prototype.prependTo=function(t){return t&&(t=d.normalizeGivenEl(t),e.quickDomEl(t)&&t.prepend(this)),this},r.prototype.html=function(t){return e.defined(t)?(this.el.innerHTML=t,this):this.el.innerHTML},r.prototype.text=function(t){return e.defined(t)?(this.el.textContent=t,this):this.el.textContent},r.prototype.after=function(t){var n;return t&&this.parent&&(t=d.normalizeGivenEl(t),e.quickDomEl(t)&&(n=this.parent._children.indexOf(this),this.parent._children.splice(n+1,0,t),this.el.parentNode.insertBefore(t.el,this.el.nextSibling),t.parent)),this},r.prototype.insertAfter=function(t){return t&&(t=d.normalizeGivenEl(t),e.quickDomEl(t)&&t.after(this)),this},r.prototype.before=function(t){var n;return t&&this.parent&&(t=d.normalizeGivenEl(t),e.quickDomEl(t)&&(n=this.parent._children.indexOf(this),this.parent._children.splice(n,0,t),this.el.parentNode.insertBefore(t.el,this.el),t.parent)),this},r.prototype.insertBefore=function(t){return t&&(t=d.normalizeGivenEl(t),e.quickDomEl(t)&&t.before(this)),this},r.prototype.detach=function(){var t;return null!=(t=this.parent)&&t._removeChild(this),this},r.prototype.remove=function(){var t;this.detach(),this.resetState();for(t in this._eventCallbacks)this._eventCallbacks[t].length=0;return this},r.prototype.empty=function(){var t,e,n,i;for(i=this.children.slice(),e=0,n=i.length;e<n;e++)t=i[e],this._removeChild(t);return this},r.prototype.wrap=function(t){var n;return t&&(t=d.normalizeGivenEl(t),n=this.parent,e.quickDomEl(t)&&t!==this&&t!==this.parent&&(n&&n._removeChild(this,t.parent?void 0:t),t.append(this))),this},r.prototype.unwrap=function(){var t,e,n,r;return e=this.parent,e&&(n=i.batch(e.children),r=e.next,t=e.parent,t&&(e.detach(),r?n.insertBefore(r):n.appendTo(t))),this},r.prototype.replace=function(t){var n;return t&&(t=d.normalizeGivenEl(t),e.quickDomEl(t)&&t!==this&&(t.detach(),null!=(n=this.parent)&&n._removeChild(this,t))),this},r.prototype._removeChild=function(t,e){var n;return n=this._children.indexOf(t),n!==-1&&(e?(this.el.replaceChild(e.el,t.el),this._children.splice(n,1,e)):(this.el.removeChild(t.el),this._children.splice(n,1))),this},i=function(){var t,n,o,s,l,u,c,a;switch(t=1<=arguments.length?slice.call(arguments,0):[],!1){case!e.template(t[0]):return t[0].spawn();case!e.quickDomEl(t[0]):return t[1]?t[0].updateOptions(t[1]):t[0];case!e.domNode(t[0]):return t[0]._quickElement?t[0]._quickElement:(a=t[0].nodeName.toLowerCase().replace("#",""),c=t[1]||{},c.existing=t[0],new r(a,c));case!e.string(t[0]):for(a=t[0].toLowerCase(),c="text"===a?e.object(t[1])?t[1]:{text:t[1]||""}:e.object(t[1])?t[1]:{},o=t.slice(2),s=new r(a,c),l=0,u=o.length;l<u;l++)n=o[l],e.string(n)&&(n=i.text(n)),e.template(n)&&(n=i(n)),e.quickDomEl(n)&&n.appendTo(s);return s}},i.template=function(t){return new o(t,!0)},n=function(t,e){return this.elements=t,this.returnResults=e,this.elements=this.elements.map(function(t){return i(t)}),this},n.prototype.reverse=function(){return this.elements=this.elements.reverse(),this},n.prototype.return=function(t){return t?(this.returnResults=!0,this):this.lastResults},Object.keys(r.prototype).concat("css","replaceWith").forEach(function(t){return n.prototype[t]=function(){var e,n;return n=this.lastResults=function(){var n,i,r,o;for(r=this.elements,o=[],n=0,i=r.length;n<i;n++)e=r[n],o.push(e[t].apply(e,arguments));return o}.apply(this,arguments),this.returnResults?n:this}}),i.batch=function(t,i){if(!e.iterable(t))throw new Error("Batch: expected an iterable, got "+String(t));if(!t.length)throw new Error("Batch: expected a non-empty element collection");return new n(t,i)},b=/\{\{.+?\}\}/g,c={type:"div",options:{},children:[]},o=function(t,e){return this._config=e?g(t):t,this},Object.keys(c).forEach(function(t){return Object.defineProperty(o.prototype,t,{get:function(){return this._config[t]}})}),o.prototype.spawn=function(t,e){var n;return n=h(this._config,t,e),i.apply(null,[n.type,n.options].concat(slice.call(n.children)))},o.prototype.extend=function(t,e){return new o(h(this._config,t,e))},h=function(t,n,i){var r,s,l,u,h,p,f,d,y;for(i&&(l={options:function(t){return a(t,i)}}),d=a.deep.notKeys("children").notDeep("relatedInstance").transform(l).clone(t,n),s=t.children||[],f=(null!=n?n.children:void 0)||[],d.children=[],h=u=0,y=Math.max(s.length,f.length);0<=y?u<y:u>y;h=0<=y?++u:--u)r=s[h],p=f[h],e.string(p)&&(p={type:"text",options:{text:p}}),r?d.children.push(r.extend(p,i)):d.children.push(new o(a.deep.clone(c,p)));return d},g=function(t){var n;switch(!1){case!e.array(t):if(n={},!e.string(t[0]))throw new Error(v+" string for 'type', got '"+String(t[0])+"'");if(n.type=t[0],t.length>1&&!e.object(t[1])&&null!==t[1])throw new Error(v+" object for 'options', got '"+String(t[1])+"'");return n.options=t[1]?a.deep.clone(t[1]):null,n.children=t.slice(2).map(i.template),n;case!(e.string(t)||e.domText(t)):return{type:"text",options:{text:t.textContent||t}};case!e.domEl(t):return{type:t.nodeName.toLowerCase(),options:a.clone.keys(u)(t),children:[].map.call(t.childNodes,i.template)};case!e.quickDomEl(t):return{type:t.type,options:a.clone.deep.notKeys("relatedInstance")(t.options),children:t.children.map(i.template)};case!e.template(t):return h(t._config);default:throw new Error(v+" (array || string || domEl || quickDomEl || template), got "+String(t))}},v="Template Parse Error: expected",x=["link:a","anchor:a","a","text","div","span","h1","h2","h3","h4","h5","h6","header","footer","section","button","br","ul","ol","li","fieldset","input","textarea","select","option","form","frame","hr","iframe","img","picture","main","nav","meta","object","pre","style","table","tbody","th","tr","td","tfoot","video"],p=function(t){var e,n,r;return e=r=t,d.includes(t,":")&&(n=t.split(":"),e=n[0],r=n[1]),i[e]=function(){return i.apply(null,[r].concat(slice.call(arguments)))}},y=0,m=x.length;y<m;y++)_=x[y],p(_);return i.version="1.0.8",null!=("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=i:"function"==typeof define&&define.amd?define(["quickdom"],function(){return i}):this.Dom=i}();