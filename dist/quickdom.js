(function(t){if(t=function(e,n,i){return function(r){if(!n[r])throw new Error(r+" is not a module");return e[r]?e[r].exports:(e[r]={exports:{}},e[r].exports=n[r].call(i,t,e[r],e[r].exports))}}({},{13:function(t,e,n){var i;return i=e.exports={De:function(t){return void 0!==t},Ar:function(t){return t instanceof Array},Ob:function(t){return"object"==typeof t&&t},ObP:function(t){return i.Ob(t)&&"[object Object]"===Object.prototype.toString.call(t)},St:function(t){return"string"==typeof t},Nu:function(t){return"number"==typeof t},function:function(t){return"function"==typeof t},iT:function(t){return i.Ob(t)&&i.Nu(t.length)}},e.exports},2:function(t,e,n){return function(t){return function(){var t=function(t,e,n,i){return i=function(i){return n[i]?e[i]:(n[i]=1,e[i]={},e[i]=t[i](e[i]))},t[1]=function(t){var e=i(2),n=function(t){var e;if(t){var n={};if("object"!=typeof t)n[t]=!0;else{Array.isArray(t)||(t=Object.keys(t));var i=0;for(e=t.length;i<e;i++)n[t[i]]=!0}return n}},r=function(t){var n=function(t){for(var i=arguments.length,r=-1,s=Array(i);++r<i;)s[r]=arguments[r];return n.options.target?i=n.options.target:(i=t,s.shift()),e(n.options,i,s)};return t&&(n.isBase=!0),n.options={},Object.defineProperties(n,s),n},s={deep:{get:function(){var t=this.isBase?r():this;return t.options.deep=!0,t}},own:{get:function(){var t=this.isBase?r():this;return t.options.own=!0,t}},allowNull:{get:function(){var t=this.isBase?r():this;return t.options.allowNull=!0,t}},nullDeletes:{get:function(){var t=this.isBase?r():this;return t.options.nullDeletes=!0,t}},concat:{get:function(){var t=this.isBase?r():this;return t.options.concat=!0,t}},clone:{get:function(){var t=this.isBase?r():this;return t.options.target={},t}},notDeep:{get:function(){var t=this.isBase?r():this;return function(e){return t.options.notDeep=n(e),t}}},deepOnly:{get:function(){var t=this.isBase?r():this;return function(e){return t.options.deepOnly=n(e),t}}},keys:{get:function(){var t=this.isBase?r():this;return function(e){return t.options.keys=n(e),t}}},notKeys:{get:function(){var t=this.isBase?r():this;return function(e){return t.options.notKeys=n(e),t}}},transform:{get:function(){var t=this.isBase?r():this;return function(e){return"function"==typeof e?t.options.globalTransform=e:e&&"object"==typeof e&&(t.options.transforms=e),t}}},filter:{get:function(){var t=this.isBase?r():this;return function(e){return"function"==typeof e?t.options.globalFilter=e:e&&"object"==typeof e&&(t.options.filters=e),t}}}};return t=r(!0)},t[2]=function(t){var e,n=function(t){return Array.isArray(t)},i=function(t){return t&&"[object Object]"===Object.prototype.toString.call(t)||n(t)},r=function(t,e,n){return t.deep?!t.notDeep||!t.notDeep[e]:t.deepOnly?t.deepOnly[e]||n&&r(t,n):void 0};return t=e=function(t,s,o,u){var h,l;(!s||"object"!=typeof s&&"function"!=typeof s)&&(s={});var c=0;for(l=o.length;c<l;c++){var a=o[c];if(null!=a)for(h in a){var p=a[h],f=s[h];if(!(p===s||void 0===p||null===p&&!t.allowNull&&!t.nullDeletes||t.keys&&!t.keys[h]||t.notKeys&&t.notKeys[h]||t.own&&!a.hasOwnProperty(h)||t.globalFilter&&!t.globalFilter(p,h,a)||t.filters&&t.filters[h]&&!t.filters[h](p,h,a)))if(null===p&&t.nullDeletes)delete s[h];else switch(t.globalTransform&&(p=t.globalTransform(p,h,a)),t.transforms&&t.transforms[h]&&(p=t.transforms[h](p,h,a)),!1){case!(t.concat&&n(p)&&n(f)):s[h]=f.concat(p);break;case!(r(t,h,u)&&i(p)):f=i(f)?f:n(p)?[]:{},s[h]=e(t,f,[p],h);break;default:s[h]=p}}}return s}},i};return t=t({},{},{}),function(){var n=t(1);null!=(void 0!==e&&null!==e?e.exports:void 0)?e.exports=n:"function"==typeof define&&define.amd?define(["smart-extend"],function(){return n}):window.extend=n}()}}(this)(),e.exports},26:function(t,e,n){var i;return e.exports=i=function(){function StateChain(t){this.St=t.join("+"),this.Ar=t.slice(),this.length=t.length}return StateChain.prototype.In=function(t){var e,n,i,r;for(e=0,n=(i=this.Ar).length;e<n;e++)if((r=i[e])===t)return!0;return!1},StateChain.prototype.without=function(t){return this.Ar.filter(function(e){return e!==t}).join("+")},StateChain.prototype.isApplicable=function(t,e){var n;return(n=this.Ar.filter(function(n){return n===t||-1!==e.indexOf(n)})).length===this.Ar.length},StateChain}(),e.exports},0:function(t,e,n){var i,r;r="http://www.w3.org/2000/svg";var s=t(1),o=t(2),u,h;h=["id","name","type","href","selected","checked","className"],u=["id","ref","type","name","text","style","class","className","url","href","selected","checked","props","attrs","passStateToChildren","stateTriggers"];var l;(l={}).In=function(t,e){return t&&-1!==t.indexOf(e)},l.R=function(t,e){var n;return-1!==(n=t.indexOf(e))&&t.splice(n,1),t},l.N=function(t){switch(!1){case!c.dN(t):return i(t);case!c.St(t):return i.text(t);default:return t}},l.isStateStyle=function(t){return"$"===t[0]||"@"===t[0]};var c;c=t(13),c=o.clone(c,{domDoc:function(t){return t&&9===t.nodeType},dE:function(t){return t&&1===t.nodeType},dT:function(t){return t&&3===t.nodeType},dN:function(t){return c.dE(t)||c.dT(t)},qE:function(t){return t&&t.constructor.name===a.name},template:function(t){return t&&t.constructor.name===T.name}});var a;null==(a=function(){function QuickElement(t,e){this.type=t,this.options=e,this.el=this.options.existing||("text"===this.type?document.createTextNode("string"==typeof this.options.text?this.options.text:""):"*"===this.type[0]?document.createElementNS(r,this.type.slice(1)):document.createElement(this.type)),"text"===this.type&&(this.append=this.prepend=this.attr=function(){}),this._p=null,this._st={},this._s=[],this._c=[],this._i=[],this._n(),this._a(),this._ae(),this._pp(),this.options.existing&&this._rP(),this.el._quickElement=this}return QuickElement.prototype.toJSON=function(){var t,e,n,i,r;for(r=[this.type,o.clone.keys(u)(this.options)],n=0,i=(e=this.children).length;n<i;n++)t=e[n],r.push(t.toJSON());return r},QuickElement}()).name&&(a.name="QuickElement"),Object.defineProperties(a.prototype,{raw:{get:function(){return this.el}},0:{get:function(){return this.el}},css:{get:function(){return this.style}},replaceWith:{get:function(){return this.replace}}});var p,f,d,y=[].slice;a.prototype.parentsUntil=function(t){return d(this,t)},a.prototype.parentMatching=function(t){var e;if(c.function(t))for(e=this.parent;e;){if(t(e))return e;e=e.parent}},a.prototype.query=function(t){return i(this.raw.querySelector(t))},a.prototype.queryAll=function(t){var e,n,i,r,s;for(r=[],e=0,i=(s=this.raw.querySelectorAll(t)).length;e<i;e++)n=s[e],r.push(n);return new O(r)},Object.defineProperties(a.prototype,{children:{get:function(){var t,e,n,r;if(this.el.childNodes.length!==this._c.length)for(this._c.length=0,e=0,n=(r=this.el.childNodes).length;e<n;e++)(t=r[e]).nodeType<4&&this._c.push(i(t));return this._c}},parent:{get:function(){return this._p&&this._p.el===this.el.parentNode||c.domDoc(this.el.parentNode)||(this._p=i(this.el.parentNode)),this._p}},parents:{get:function(){return d(this)}},next:{get:function(){return i(this.el.nextSibling)}},prev:{get:function(){return i(this.el.previousSibling)}},nextAll:{get:function(){var t,e;for(e=[],t=i(this.el.nextSibling);t;)e.push(t),t=t.next;return e}},prevAll:{get:function(){var t,e;for(e=[],t=i(this.el.previousSibling);t;)e.push(t),t=t.prev;return e}},siblings:{get:function(){return this.prevAll.reverse().concat(this.nextAll)}},child:{get:function(){return this._C||p(this)}},childf:{get:function(){return p(this,!0)}},index:{get:function(){var t;return(t=this.parent)?t.children.indexOf(this):null}},indexType:{get:function(){return f(this,"type")}},indexRef:{get:function(){return f(this,"ref")}}}),d=function(t,e){var n,i;for(c.function(e)||(e=void 0),i=[],n=t.parent;n;)i.push(n),n=n.parent,e&&e(n)&&(n=null);return i},p=function(t,e){var n,i;return!e&&t._C||(t._C={}),i=t._C,t.ref&&(i[t.ref]=t),(n=t.children).length&&o.apply(null,[t._C].concat(y.call(n.map(function(t){return p(t,e)})))),t._C},f=function(t,e){var n;return(n=t.parent)?n.children.filter(function(n){return n[e]===t[e]}).indexOf(t):null};var _,y=[].slice;_={hover:{on:"mouseenter",off:"mouseleave",bubbles:!0},focus:{on:"focus",off:"blur",bubbles:!0}},a.prototype.updateOptions=function(t){return c.Ob(t)&&(this.options=t,this._n(),this._a(this.options)),this},a.prototype._n=function(){var t,e,n;this.options.class&&(this.options.className=this.options.class),this.options.url&&(this.options.href=this.options.url),this.related=null!=(t=this.options).relatedInstance?t.relatedInstance:t.relatedInstance=this,null==(e=this.options).unpassableStates&&(e.unpassableStates=[]),null==(n=this.options).passStateToChildren&&(n.passStateToChildren=!0),this.options.stateTriggers=this.options.stateTriggers?o.clone.deep(_,this.options.stateTriggers):_,"text"===this.type?this._parseText():this._ns()},a.prototype._ns=function(){var e,n,i,r,s,u,h,a,p;if(c.ObP(this.options.style))for(p=(i=Object.keys(this.options.style)).filter(function(t){return l.isStateStyle(t)}),s=l.R(p.slice(),"$base"),this._m=p.filter(function(t){return"@"===t[0]}).map(function(t){return t.slice(1)}),this._ps=p.map(function(t){return t.slice(1)}),l.In(p,"$base")?this._st.base=this.options.style.$base:p.length?this._st.base=o.clone.notKeys(p)(this.options.style):this._st.base=this.options.style,e=function(n){return function(i,r){var s,o,u,h,c,a,p,f;for(h={},s=!1,o=0,u=(f=Object.keys(i)).length;o<u;o++)c=f[o],l.isStateStyle(c)?(r.push(p=c.slice(1)),a=new(t(26))(r),null==n._sShared&&(n._sShared=[]),null==n._psh&&(n._psh=[]),n._psh.push(a),"@"===c[0]&&n._m.push(p),n._st[a.St]=e(i[c],r)):(s=!0,h[c]=i[c]);if(s)return h}}(this),n=0,r=s.length;n<r;n++)a=(u=s[n]).slice(1),(h=e(this.options.style[u],[a]))&&(this._st[a]=h)},a.prototype._parseText=function(){var t,e,n,i;if(c.ObP(this.options.text))for(i=Object.keys(this.options.text).map(function(t){return t.slice(1)}),this._ps=i.filter(function(t){return"base"!==t}),this._t={base:""},t=0,e=i.length;t<e;t++)n=i[t],this._t[n]=this.options.text["$"+n]},a.prototype._a=function(){var t,e,n,i,r,s,u,h;if((i=this.options.id||this.options.ref)&&this.attr("data-ref",this.ref=i),this.options.id&&(this.el.id=this.options.id),this.options.className&&(this.el.className=this.options.className),this.options.src&&(this.el.src=this.options.src),this.options.href&&(this.el.href=this.options.href),this.options.type&&(this.el.type=this.options.type),this.options.name&&(this.el.name=this.options.name),this.options.value&&(this.el.value=this.options.value),this.options.selected&&(this.el.selected=this.options.selected),this.options.checked&&(this.el.checked=this.options.checked),this.options.props){r=this.options.props;for(n in r)h=r[n],this.prop(n,h)}if(this.options.attrs){s=this.options.attrs;for(n in s)h=s[n],this.attr(n,h)}if(this.options.styleAfterInsert||this.style(this._st.base),this._t&&(this.text=this._t.base),this.onInserted(function(t){return function(){var e,n;if(t.options.styleAfterInsert&&t.style(o.clone.apply(o,[t._st.base].concat(y.call(t._SS(t._as()))))),e=t._I=t,(n=t._m)&&t._m.length)return t._m=new function(){var t,i,r;for(t=0,i=n.length;t<i;t++)this[r=n[t]]=S.rg(e,r);return this}}}(this)),this.options.recalcOnResize&&window.addEventListener("resize",function(t){return function(){return t.recalcStyle()}}(this)),this.options.events){u=this.options.events;for(t in u)e=u[t],this.on(t,e)}},a.prototype._ae=function(t){var e,n,i,r;n=this.options.stateTriggers,e=function(e){return function(n,i){var r,s;if(l.In(e._ps,n)||t||i.force)return s=c.St(i)?i:i.on,c.Ob(i)&&(r=i.off),e._l(s,function(){return e.state(n,!0,i.bubbles)}),r?e._l(r,function(){return e.state(n,!1,i.bubbles)}):void 0}}(this);for(i in n)e(i,r=n[i])},a.prototype._pp=function(){var t;return t=void 0,Object.defineProperty(this,"_p",{get:function(){return t},set:function(e){var n;(t=e)&&((n=this.parents.slice(-1)[0]).raw===document.documentElement?this._up(e):t.onInserted(function(n){return function(){if(t===e)return n._up(e)}}(this)))}})},a.prototype._up=function(t){var e,n,i,r;for(delete this._p,this._p=t,n=0,i=(r=this._i).length;n<i;n++)(e=r[n])(this)};var g;g=/\s+/,a.prototype.on=function(t,e){var n,i;return null==this._e&&(this._e={_R:{}}),c.St(t)&&c.function(e)&&(i=t.split("."),n=i[1],(t=i[0]).split(g).forEach(function(t){return function(i){return t._e[i]||(t._e[i]=[],t._l(i,function(e){return t._ih(i,e)})),n&&(t._e._R[n]=e),t._e[i].push(e)}}(this))),this},a.prototype.once=function(t,e){var n;return c.St(t)&&c.function(e)&&this.on(t,n=function(i){return function(r){return i.off(t,n),e.call(i.el,r)}}(this)),this},a.prototype.off=function(t,e){var n,i,r;if(null==this._e&&(this._e={_R:{}}),c.St(t))r=t.split("."),n=r[1],(t=r[0]).split(g).forEach(function(t){return function(i){if(t._e[i]){if(null==e&&(e=t._e._R[n]),c.function(e))return l.R(t._e[i],e);if(!n)return t._e[i].length=0}}}(this));else for(i in this._e)this.off(i);return this},a.prototype.emit=function(t,e,n){var i;return null==e&&(e=!0),null==n&&(n=!0),t&&c.St(t)&&((i=document.createEvent("Event")).initEvent(t,e,n),this.el.dispatchEvent(i)),this},a.prototype.emitPrivate=function(t,e){var n;return t&&c.St(t)&&(null!=(n=this._e)?n[t]:void 0)&&this._ih(t,e),this},a.prototype.onInserted=function(t,e){if(null==e&&(e=!0),c.function(t))return this._I?e&&t(this):this._i.push(t),this},a.prototype._ih=function(t,e){var n,i,r,s;for(r=0,s=(n=this._e[t].slice()).length;r<s;r++)(i=n[r]).call(this.el,e)},a.prototype._l=function(t,e){var n,i;return i=this.el.addEventListener?"addEventListener":"attachEvent",n=this.el.addEventListener?t:"on"+t,this.el[i](n,e),this};var v,y=[].slice;v=[],a.prototype.state=function(t,e,n,i){var r,s,o,u,h,a,p,f;if(1===arguments.length)return l.In(this._s,t);if(this._sPipeTarget&&i!==this)return this._sPipeTarget.state(t,e,n,this),this;if(c.St(t)){if("$"===t[0]&&(t=t.slice(1)),"base"===t)return this;if(o=!!e,r=this._as(t,!1),this.state(t)!==o&&(a="text"===this.type?"Text":"Style",o?(this._s.push(t),f="ON"):(l.R(this._s,t),f="OFF"),this["_T"+a+f](t,r),this.emitPrivate("stateChange:"+t,o)),!l.In(this.options.unpassableStates,t))if(n)this.parent&&this._p.state(t,e,!0,i||this);else if(this.options.passStateToChildren)for(u=0,h=(p=this._c).length;u<h;u++)(s=p[u]).state(t,e,!1,i||this);return this}},a.prototype.resetState=function(){var t,e,n,i;for(e=0,n=(i=this._s.slice()).length;e<n;e++)t=i[e],this.state(t,!1);return this},a.prototype.pipeState=function(t){var e,n,i,r;if(t){if(t=l.N(t),c.qE(t)&&t!==this)for(this._sPipeTarget=t,n=0,i=(r=this._s).length;n<i;n++)e=r[n],t.state(e,!0)}else!1===t&&delete this._sPipeTarget;return this},a.prototype._as=function(t,e){var n;return null==e&&(e=!0),this._ps?(n=this._ps.filter(function(e){return function(n){return l.In(e._s,n)&&n!==t}}(this)),e&&this._psh?n.concat(this._sShared):n):v},a.prototype._ss=function(t,e){var n,i;return i=this._ps.indexOf(t),n=e.filter(function(t){return function(e){return t._ps.indexOf(e)>i}}(this))},a.prototype._shs=function(t){var e;return e=this._s,this._psh.filter(function(n){return n.In(t)&&n.isApplicable(t,e)})},a.prototype._SS=function(t){return t.map(function(t){return function(e){return t._st[e]}}(this))},a.prototype._TStyleON=function(t,e){var n,i,r,s,u,h,c;if((c=this._st[t])&&(h=this._SS(this._ss(t,e)),this.style(o.clone.keys(c).apply(null,[c].concat(y.call(h))))),this._psh)for(n=0,r=(s=this._shs(t)).length;n<r;n++)u=s[n],l.In(this._sShared,u.St)||this._sShared.push(u.St),c=this._st[u.St],u.length>2?(i=this._st[u.without(t)],this.style(o.clone(i,c))):this.style(c)},a.prototype._TStyleOFF=function(t,e){var n,i,r,s,u,h,c,a;if((a=this._st[t])&&(n=this._SS(e),h=o.clone.keys(a).apply(null,[this._st.base].concat(y.call(n))),c=o.transform(function(){return null}).clone(a),this.style(o(c,h))),this._psh)for(s=this._shs(t),null==n&&(n=this._SS(e)),i=0,r=s.length;i<r;i++)u=s[i],l.R(this._sShared,u.St),a=this._st[u.St],this._sShared.length&&n.push.apply(n,this._sShared.filter(function(e){return!l.In(e,t)}).map(function(t){return function(e){return t._st[e]}}(this))),h=o.clone.keys(a).apply(null,[this._st.base].concat(y.call(n))),c=o.transform(function(){return null}).clone(a),this.style(o(c,h))},a.prototype._TTextON=function(t,e){var n,i;this._t&&c.St(i=this._t[t])&&((n=this._ss(t,e)).length||(this.text=i))},a.prototype._TTextOFF=function(t,e){var n;this._t&&c.St(n=this._t[t])&&(e=e.filter(function(e){return e!==t}),null==(n=this._t[e[e.length-1]])&&(n=this._t.base),this.text=n)};var m,b,y=[].slice;a.prototype.style=function(){var t,e;if("text"!==this.type){if(t=arguments,c.St(t[0])){if(e=s(this.el,t[0],t[1]),!c.De(t[1]))return this._I?e:e?"":e}else c.Ob(t[0])&&s(this.el,o.allowNull.transform(function(t){return function(e){return"function"==typeof e?e.call(t,t.options.relatedInstance):e}}(this)).clone(t[0]));return this}},a.prototype.styleSafe=function(t,e){var n,i,r;if("text"!==this.type)return n=arguments,i=this.style(t),c.St(i)?(e&&(i=0),i||this.el.style[n[0]]||(null!=(r=this._st.base)?r[n[0]]:void 0)||""):this},a.prototype.styleParsed=function(t){return parseFloat(this.styleSafe(t))},a.prototype.recalcStyle=function(t){var e,n,i,r,s,u;if(e=this._SS(this._as()),u=o.clone.filter(function(t){return"function"==typeof t}).apply(null,[this._st.base].concat(y.call(e))),this.style(u),t)for(i=0,r=(s=this._c).length;i<r;i++)(n=s[i]).recalcStyle();return this},a.prototype.show=function(t){var e;return null==t&&(t=(null!=(e=this._st.base)?e.display:void 0)||"block"),this.style("display",t)},a.prototype.hide=function(){return this.style("display","none")},Object.defineProperties(a.prototype,{rect:{get:function(){return this.el.getBoundingClientRect()}},width:{get:function(){return parseFloat(this.style("width"))}},height:{get:function(){return parseFloat(this.style("height"))}},orientation:b={get:function(){return this.width>this.height?"landscape":"portrait"}},aspectRatio:m={get:function(){return this.width/this.height}}}),a.prototype.attr=function(t,e){switch(e){case void 0:return this.el.getAttribute(t);case null:return this.el.removeAttribute(t);default:return this.el.setAttribute(t,e),this}},a.prototype.prop=function(t,e){switch(e){case void 0:return this.el[t];default:return this.el[t]=e,this}},a.prototype.toTemplate=function(){return i.template(this)},a.prototype.clone=function(){var t,e,n,i,r,s,u,h,l,c,p,f,d,y,_,g,v;for(r=this.el.cloneNode(!1),y=o.clone(this.options,{existing:r}),d=new a(this.type,y),u=0,c=(_=this._s).length;u<c;u++)t=_[u],d.state(t,!0);for(h=0,p=(g=this.children).length;h<p;h++)i=g[h],d.append(i.clone());v=this._e;for(s in v)for(l=0,f=(n=v[s]).length;l<f;l++)e=n[l],d.on(s,e);return d},a.prototype.append=function(t){var e;return t&&(t=l.N(t),c.qE(t)&&((e=t.parent)&&e._r(t),this._c.push(t),this.el.appendChild(t.el),t._rP())),this},a.prototype.appendTo=function(t){return t&&(t=l.N(t),c.qE(t)&&t.append(this)),this},a.prototype.prepend=function(t){var e;return t&&(t=l.N(t),c.qE(t)&&((e=t.parent)&&e._r(t),this._c.unshift(t),this.el.insertBefore(t.el,this.el.firstChild),t._rP())),this},a.prototype.prependTo=function(t){return t&&(t=l.N(t),c.qE(t)&&t.prepend(this)),this},a.prototype.after=function(t){var e;return t&&this.parent&&(t=l.N(t),c.qE(t)&&(e=this.parent._c.indexOf(this),this.parent._c.splice(e+1,0,t),this.el.parentNode.insertBefore(t.el,this.el.nextSibling),t._rP())),this},a.prototype.insertAfter=function(t){return t&&(t=l.N(t),c.qE(t)&&t.after(this)),this},a.prototype.before=function(t){var e;return t&&this.parent&&(t=l.N(t),c.qE(t)&&(e=this.parent._c.indexOf(this),this.parent._c.splice(e,0,t),this.el.parentNode.insertBefore(t.el,this.el),t._rP())),this},a.prototype.insertBefore=function(t){return t&&(t=l.N(t),c.qE(t)&&t.before(this)),this},a.prototype.detach=function(){var t;return null!=(t=this.parent)&&t._r(this),this},a.prototype.remove=function(){var t;if(this.detach(),this.resetState(),this._e)for(t in this._e)this._e[t].length=0;return this},a.prototype.empty=function(){var t,e,n,i;for(e=0,n=(i=this.children.slice()).length;e<n;e++)t=i[e],this._r(t);return this},a.prototype.wrap=function(t){var e;return t&&(t=l.N(t),e=this.parent,c.qE(t)&&t!==this&&t!==this.parent&&(e&&e._r(this,t.parent?void 0:t),t.append(this))),this},a.prototype.unwrap=function(){var t,e,n,r;return(e=this.parent)&&(n=i.batch(e.children),r=e.next,(t=e.parent)&&(e.detach(),r?n.insertBefore(r):n.appendTo(t))),this},a.prototype.replace=function(t){var e;return t&&(t=l.N(t),c.qE(t)&&t!==this&&(t.detach(),null!=(e=this.parent)&&e._r(this,t),t._rP())),this},a.prototype.hasClass=function(t){return l.In(this.classList,t)},a.prototype.addClass=function(t){var e,n;return e=this.classList,-1===(n=e.indexOf(t))&&(e.push(t),this.raw.className=e.length>1?e.join(" "):e[0]),this},a.prototype.removeClass=function(t){var e,n;return e=this.classList,-1!==(n=e.indexOf(t))&&(e.splice(n,1),this.raw.className=e.length?e.join(" "):""),this},a.prototype.toggleClass=function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t),this},a.prototype._rP=function(){return this.parent},a.prototype._r=function(t,e){var n;return-1!==(n=this._c.indexOf(t))&&(e?(this.el.replaceChild(e.el,t.el),this._c.splice(n,1,e)):(this.el.removeChild(t.el),this._c.splice(n,1))),this},Object.defineProperties(a.prototype,{html:{get:function(){return this.el.innerHTML},set:function(t){return this.el.innerHTML=t}},text:{get:function(){return this.el.textContent},set:function(t){return this.el.textContent=t}},classList:{get:function(){var t;return""===(t=this.raw.className.split(/\s+/))[t.length-1]&&t.pop(),""===t[0]&&t.shift(),t}}});var x;(x={type:"window",el:window,raw:window,_e:{_R:{}}}).on=a.prototype.on,x.off=a.prototype.off,x.emit=a.prototype.emit,x._l=a.prototype._l,Object.defineProperties(x,{width:{get:function(){return window.innerWidth}},height:{get:function(){return window.innerHeight}},orientation:b,aspectRatio:m});var S,w;S=new function(){var t,e;return t=[],window.addEventListener("resize",function(){var e,n,i;for(n=0,i=t.length;n<i;n++)(e=t[n])()}),this.pQ=function(t,e){var n,i,r;return n=e.split("("),r=n[0],r=function(){switch(r){case"window":return x;case"parent":return t.parent;case"self":return t;default:return t.parentMatching(function(t){return t.ref===r.slice(1)})}}(),i=n[1].slice(0,-1).split(w).map(function(t){var e,n,i,s,o,u,h;return u=t.split(":"),h=parseFloat(u[1]),isNaN(h)&&(h=u[1]),n=u[0],i=n.slice(0,4),s="max-"===i,o=!s&&"min-"===i,(s||o)&&(n=n.slice(4)),e=function(){switch(n){case"orientation":return function(){return r.orientation};case"aspect-ratio":return function(){return r.aspectRatio};case"width":case"height":return function(){return r[n]};default:return function(){var t,e;return e=r.style(n),t=parseFloat(e),isNaN(t)?e:t}}}(),{key:n,value:h,min:o,max:s,getter:e}}),{source:r,rules:i}},this.rg=function(n,i){var r,s;return(s=this.pQ(n,i)).source&&(t.push(r=function(){return e(n,s,i)}),r()),s},e=function(t,e,n){var i,r,s,o,u,h;for(o=!0,r=0,s=(u=e.rules).length;r<s&&(h=u[r],i=h.getter(),o=function(){switch(!1){case!h.min:return i>=h.value;case!h.max:return i<=h.value;default:return i===h.value}}());r++);return t.state(n,o)},this},w=/,\s*/,(i=function(){var t,e,n,r,s,o,u,h,l,p;switch(t=arguments,!1){case!c.Ar(t[0]):return i.apply(null,t[0]);case!c.template(t[0]):return t[0].spawn();case!c.qE(t[0]):return t[1]?t[0].updateOptions(t[1]):t[0];case!(c.dN(t[0])||c.domDoc(t[0])):return t[0]._quickElement?t[0]._quickElement:(p=t[0].nodeName.toLowerCase().replace("#",""),l=t[1]||{},l.existing=t[0],new a(p,l));case t[0]!==window:return x;case!c.St(t[0]):if(p=t[0].toLowerCase(),l="text"===p?c.Ob(t[1])?t[1]:{text:t[1]||""}:c.Ob(t[1])?t[1]:{},s=new a(p,l),t.length>2){for(r=[],o=1,e=t.length;++o<e;)r.push(t[o]);for(u=0,h=r.length;u<h;u++)n=r[u],c.St(n)&&(n=i.text(n)),c.template(n)&&(n=n.spawn(!1)),c.Ar(n)&&(n=i.apply(null,n)),c.qE(n)&&n.appendTo(s)}return s}}).template=function(t){return new T(t,!0)},i.html=function(t){var e,n;return n=document.createElement("div"),n.innerHTML=t,e=Array.prototype.slice.call(n.childNodes),i.batch(e)};var O;null==(O=function(){function QuickBatch(t,e){this.rR=e,this.elements=t.map(function(t){return i(t)})}return QuickBatch.prototype.reverse=function(){return this.elements=this.elements.reverse(),this},QuickBatch.prototype.return=function(t){return t?(this.rR=!0,this):this.lR},QuickBatch}()).name&&(O.name="QuickBatch"),Object.keys(a.prototype).concat("css","replaceWith","html","text").forEach(function(t){return O.prototype[t]=function(e){var n,i;return i=this.lR=function(){var i,r,s,o;for(o=[],i=0,r=(s=this.elements).length;i<r;i++)n=s[i],"html"===t||"text"===t?e?o.push(n[t]=e):o.push(n[t]):o.push(n[t].apply(n,arguments));return o}.apply(this,arguments),this.rR?i:this}}),i.batch=function(t,e){if(!c.iT(t))throw new Error("Batch: expected an iT, got "+String(t));if(!t.length)throw new Error("Batch: expected a non-empty element collection");return new O(t,e)};var T,y=[].slice,k,E;E=function(t,e,n){var i,r,s,u,h,l,a,p,f,d,y,_,g,v;if(n&&(s={options:function(t){return o(t,n)}}),c.Ar(e)&&(e=C(e,!1)),c.template(e)&&(e=e._config),y=o.deep.notKeys("children").notDeep("relatedInstance").transform(s).clone(t,e),r=t.children,f=(null!=e?e.children:void 0)||[],y.children=[],c.Ar(f))for(h=u=0,g=Math.max(r.length,f.length);0<=g?u<g:u>g;h=0<=g?++u:--u)l=d=!1,i=r[h],a=f[h],p=function(){switch(!1){case!c.template(a):return a;case!c.Ar(a):return l=C(a,!1);case!c.St(a):return l={type:"text",options:{text:a}};case!(!a&&!n):return d=!0;default:return l=a||!0}}(),d?p=i:l&&(p=i?i.extend(p,n):new T(o.deep.clone(j,p))),y.children.push(p);else if(c.Ob(f)){y.children=k(f,r,n),v=f;for(_ in v)a=v[_],p=c.ObP(a)&&!c.template(a)?a:C(a),y.children.push(new T(p)),delete v[_]}return y},k=function(t,e,n){var i,r,s,o,u,h;if(e.length){for(h=[],r=0,s=e.length;r<s;r++){if(i=e[r],o=t[i.ref])u=i.extend(o,n),delete t[i.ref];else{if(null===o){delete t[i.ref];continue}u=function(){switch(!1){case!n:return i.extend(null,n);case!Object.keys(t).length:return i.extend();default:return i}}()}u._config.children=k(t,u.children),h.push(u)}return h}return e};var N,C;C=function(t,e){var n;switch(!1){case!c.Ar(t):if(n={},!c.St(t[0]))throw new Error(N+" string for 'type', got '"+String(t[0])+"'");if(n.type=t[0],t.length>1&&!c.Ob(t[1])&&null!==t[1])throw new Error(N+" object for 'options', got '"+String(t[1])+"'");return n.options=t[1]?o.deep.clone(t[1]):j.options,t[1]&&(n.ref=t[1].id||t[1].ref),n.children=t.slice(2),!1===e?3===t.length&&c.ObP(t[2])&&!c.template(t[2])&&(n.children=t[2]):n.children=n.children.map(i.template),n;case!(c.St(t)||c.dT(t)):return{type:"text",options:{text:t.textContent||t},children:j.children};case!c.dE(t):return{type:t.nodeName.toLowerCase(),ref:t.id,options:o.clone.keys(h)(t),children:j.children.map.call(t.childNodes,i.template)};case!c.qE(t):return{type:t.type,ref:t.ref,options:o.clone.deep.notKeys("relatedInstance")(t.options),children:t.children.map(i.template)};case!c.template(t):return E(t._config);default:throw new Error(N+" (array || string || dE || qE || template), got "+String(t))}},N="Template Parse Error: expected";var P;P=function(t,e){var n,i,r,s,o,u,h,l,c,a;if(i=t.options.computers)for(r=t.options.defaults,s=0,l=(h=Object.keys(i)).length;s<l;s++)u=h[s],e&&e.hasOwnProperty(u)?i[u].call(t,e[u]):r&&r.hasOwnProperty(u)&&i[u].call(t,r[u]);for(o=0,c=(a=t._c).length;o<c;o++)n=a[o],P(n,e)};var j;j={type:"div",ref:void 0,options:{},children:[]},null==(T=function(){function QuickTemplate(t,e){var n,i,r,s;if(this._config=e?C(t):t,this.hC=!!this._config.options.computers,!this.hC&&this._config.children.length)for(i=0,r=(s=this._config.children).length;i<r;i++)if((n=s[i]).hC||n._config.options.computers){this.hC=!0;break}}return QuickTemplate.prototype.extend=function(t,e){return new QuickTemplate(E(this._config,t,e))},QuickTemplate.prototype.spawn=function(t,e){var n,r,s;return t&&t.data&&(n=t.data,1===Object.keys(t).length&&(t=null)),t||e?s=E(this._config,t,e):(s=o.clone(this._config)).options=o.deepOnly("style").clone(s.options),r=i.apply(null,[s.type,s.options].concat(y.call(s.children))),this.hC&&!1!==t&&P(r,n),r},QuickTemplate}()).name&&(T.name="QuickTemplate"),Object.keys(j).forEach(function(t){return Object.defineProperty(T.prototype,t,{get:function(){return this._config[t]}})}),Object.defineProperty(T.prototype,"child",{get:function(){return this._C||p(this)}});var A,I,B,q,R,y=[].slice;for(A=function(t){var e,n,r;return e=r=t,l.In(t,":")&&(e=(n=t.split(":"))[0],r=n[1]),i[e]=function(){return i.apply(null,[r].concat(y.call(arguments)))}},I=0,B=(R=["link:a","anchor:a","a","text","div","span","h1","h2","h3","h4","h5","h6","header","footer","section","button","br","ul","ol","li","fieldset","input","textarea","select","option","form","frame","hr","iframe","img","picture","main","nav","meta","object","pre","style","table","tbody","th","tr","td","tfoot","video"]).length;I<B;I++)A(q=R[I]);return i.version="1.0.46",e.exports=i,e.exports},1:function(t,e,n){return function(){var t=["webkit","moz","ms","o"],n="backgroundPositionX backgroundPositionY blockSize borderWidth columnRuleWidth cx cy fontSize gridColumnGap gridRowGap height inlineSize lineHeight minBlockSize minHeight minInlineSize minWidth maxHeight maxWidth outlineOffset outlineWidth perspective shapeMargin strokeDashoffset strokeWidth textIndent width wordSpacing top bottom left right x y".split(" ");["margin","padding","border","borderRadius"].forEach(function(t){var e;n.push(t);var i=["Top","Bottom","Left","Right"],r=[],s=0;for(e=i.length;s<e;s++){var o=i[s];r.push(n.push(t+o))}return r});var i=document.createElement("div").style,r=/^\d+(?:[a-z]|\%)+$/i,s=/\d+$/,o=/\s/,u={In:function(t,e){return t&&-1!==t.indexOf(e)},isIterable:function(t){return t&&"object"==typeof t&&"number"==typeof t.length&&!t.nodeType},isPropSupported:function(t){return void 0!==i[t]},toTitleCase:function(t){return t[0].toUpperCase()+t.slice(1)},normalizeProperty:function(e){var n;if(this.isPropSupported(e))return e;var i=this.toTitleCase(e);for(e=0,n=t.length;e<n;e++){var r=t[e];if(r=""+r+i,this.isPropSupported(r))return r}},normalizeValue:function(t,e){return this.In(n,t)&&null!==e&&(e=""+e,!s.test(e)||r.test(e)||o.test(e)||(e+="px")),e}},h=function(t,e,n){var i;if(u.isIterable(t)){var r=0;for(i=t.length;r<i;r++){var s=t[r];h(s,e,n)}}else if("object"==typeof e)for(r in e)n=e[r],h(t,r,n);else{if(e=u.normalizeProperty(e),void 0===n)return getComputedStyle(t)[e];e&&(t.style[e]=u.normalizeValue(e,n))}};h.version="1.0.6",null!=(void 0!==e&&null!==e?e.exports:void 0)?e.exports=h:"function"==typeof define&&define.amd?define(["quickdom"],function(){return h}):this.Css=h}(),e.exports}},this),"function"==typeof define&&define.umd)define(function(){return t(0)});else{if("object"!=typeof module||!module.exports)return this.quickdom=t(0);module.exports=t(0)}}).call(this,null);