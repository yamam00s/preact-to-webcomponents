!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="ydxE")}({ydxE:function(e,t,n){"use strict";function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n){var o,r,_,i={};for(_ in t)"key"==_?o=t[_]:"ref"==_?r=t[_]:i[_]=t[_];if(arguments.length>2&&(i.children=arguments.length>3?W.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===i[_]&&(i[_]=e.defaultProps[_]);return l(e,i,o,r,null)}function l(e,t,n,o,r){var _={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++R:r};return null==r&&null!=F.vnode&&F.vnode(_),_}function i(e){return e.children}function u(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function c(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return c(e)}}function f(e){(!e.__d&&(e.__d=!0)&&I.push(e)&&!p.__r++||B!==F.debounceRendering)&&((B=F.debounceRendering)||$)(p)}function p(){var e,t,n,r,_,l,i,u;for(I.sort(G);e=I.shift();)e.__d&&(t=I.length,r=void 0,_=void 0,i=(l=(n=e).__v).__e,(u=n.__P)&&(r=[],(_=o({},l)).__v=l.__v+1,k(u,l,_,n.__n,void 0!==u.ownerSVGElement,null!=l.__h?[i]:null,r,null==i?s(l):i,l.__h),x(r,l),l.__e!=i&&c(l)),I.length>t&&I.sort(G));p.__r=0}function a(e,t,n,o,r,_,u,c,f,p){var a,y,m,b,g,x,S,w=o&&o.__k||z,E=w.length;for(n.__k=[],a=0;a<t.length;a++)if(null!=(b=n.__k[a]=null==(b=t[a])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?l(null,b,null,null,b):J(b)?l(i,{children:b},null,null,null):b.__b>0?l(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(m=w[a])||m&&b.key==m.key&&b.type===m.type)w[a]=void 0;else for(y=0;y<E;y++){if((m=w[y])&&b.key==m.key&&b.type===m.type){w[y]=void 0;break}m=null}k(e,b,m=m||V,r,_,u,c,f,p),g=b.__e,(y=b.ref)&&m.ref!=y&&(S||(S=[]),m.ref&&S.push(m.ref,null,b),S.push(y,b.__c||g,b)),null!=g?(null==x&&(x=g),"function"==typeof b.type&&b.__k===m.__k?b.__d=f=d(b,f,e):f=h(e,b,m,w,g,f),"function"==typeof n.type&&(n.__d=f)):f&&m.__e==f&&f.parentNode!=e&&(f=s(m))}for(n.__e=x,a=E;a--;)null!=w[a]&&("function"==typeof n.type&&null!=w[a].__e&&w[a].__e==n.__d&&(n.__d=v(o).nextSibling),P(w[a],w[a]));if(S)for(a=0;a<S.length;a++)C(S[a],S[++a],S[++a])}function d(e,t,n){for(var o,r=e.__k,_=0;r&&_<r.length;_++)(o=r[_])&&(o.__=e,t="function"==typeof o.type?d(o,t,n):h(n,o,o,r,o.__e,t));return t}function h(e,t,n,o,r,_){var l,i,u;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||r!=_||null==r.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(r),l=null;else{for(i=_,u=0;(i=i.nextSibling)&&u<o.length;u+=1)if(i==r)break e;e.insertBefore(r,_),l=_}return void 0!==l?l:r.nextSibling}function v(e){var t,n,o;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(o=v(n)))return o;return null}function y(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||q.test(t)?n:n+"px"}function m(e,t,n,o,r){var _;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||y(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||y(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?o||e.addEventListener(t,_?g:b,_):e.removeEventListener(t,_?g:b,_);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function b(e){return this.l[e.type+!1](F.event?F.event(e):e)}function g(e){return this.l[e.type+!0](F.event?F.event(e):e)}function k(e,t,n,r,_,l,s,c,f){var p,d,h,v,y,m,b,g,k,x,C,P,E,O,T,M=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(f=n.__h,c=t.__e=n.__e,t.__h=null,l=[c]),(p=F.__b)&&p(t);try{e:if("function"==typeof M){if(g=t.props,k=(p=M.contextType)&&r[p.__c],x=p?k?k.props.value:p.__:r,n.__c?b=(d=t.__c=n.__c).__=d.__E:("prototype"in M&&M.prototype.render?t.__c=d=new M(g,x):(t.__c=d=new u(g,x),d.constructor=M,d.render=w),k&&k.sub(d),d.props=g,d.state||(d.state={}),d.context=x,d.__n=r,h=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=M.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=o({},d.__s)),o(d.__s,M.getDerivedStateFromProps(g,d.__s))),v=d.props,y=d.state,d.__v=t,h)null==M.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==M.getDerivedStateFromProps&&g!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,x),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,x)||t.__v===n.__v){for(t.__v!==n.__v&&(d.props=g,d.state=d.__s,d.__d=!1),d.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),C=0;C<d._sb.length;C++)d.__h.push(d._sb[C]);d._sb=[],d.__h.length&&s.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,x),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,y,m)}))}if(d.context=x,d.props=g,d.__P=e,P=F.__r,E=0,"prototype"in M&&M.prototype.render){for(d.state=d.__s,d.__d=!1,P&&P(t),p=d.render(d.props,d.state,d.context),O=0;O<d._sb.length;O++)d.__h.push(d._sb[O]);d._sb=[]}else do{d.__d=!1,P&&P(t),p=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++E<25);d.state=d.__s,null!=d.getChildContext&&(r=o(o({},r),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(m=d.getSnapshotBeforeUpdate(v,y)),a(e,J(T=null!=p&&p.type===i&&null==p.key?p.props.children:p)?T:[T],t,n,r,_,l,s,c,f),d.base=t.__e,t.__h=null,d.__h.length&&s.push(d),b&&(d.__E=d.__=null),d.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=S(n.__e,t,n,r,_,l,s,f);(p=F.diffed)&&p(t)}catch(e){t.__v=null,(f||null!=l)&&(t.__e=c,t.__h=!!f,l[l.indexOf(c)]=null),F.__e(e,t,n)}}function x(e,t){F.__c&&F.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){F.__e(e,t.__v)}}))}function S(e,t,n,o,_,l,i,u){var c,f,p,d=n.props,h=t.props,v=t.type,y=0;if("svg"===v&&(_=!0),null!=l)for(;y<l.length;y++)if((c=l[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,l[y]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=_?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),l=null,u=!1}if(null===v)d===h||u&&e.data===h||(e.data=h);else{if(l=l&&W.call(e.childNodes),f=(d=n.props||V).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!u){if(null!=l)for(d={},y=0;y<e.attributes.length;y++)d[e.attributes[y].name]=e.attributes[y].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,o,r){var _;for(_ in n)"children"===_||"key"===_||_ in t||m(e,_,null,n[_],o);for(_ in t)r&&"function"!=typeof t[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===t[_]||m(e,_,t[_],n[_],o)}(e,h,d,_,u),p)t.__k=[];else if(a(e,J(y=t.props.children)?y:[y],t,n,o,_&&"foreignObject"!==v,l,i,l?l[0]:n.__k&&s(n,0),u),null!=l)for(y=l.length;y--;)null!=l[y]&&r(l[y]);u||("value"in h&&void 0!==(y=h.value)&&(y!==e.value||"progress"===v&&!y||"option"===v&&y!==d.value)&&m(e,"value",y,d.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&m(e,"checked",y,d.checked,!1))}return e}function C(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){F.__e(e,n)}}function P(e,t,n){var o,_;if(F.unmount&&F.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||C(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){F.__e(e,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(_=0;_<o.length;_++)o[_]&&P(o[_],t,n||"function"!=typeof e.type);n||null==e.__e||r(e.__e),e.__=e.__e=e.__d=void 0}function w(e,t,n){return this.constructor(e,n)}function E(e,t,n){var o,r,l;F.__&&F.__(e,t),r=(o="function"==typeof n)?null:n&&n.__k||t.__k,l=[],k(t,e=(!o&&n||t).__k=_(i,null,[e]),r||V,V,void 0!==t.ownerSVGElement,!o&&n?[n]:r?null:t.firstChild?W.call(t.childNodes):null,l,!o&&n?n:r?r.__e:t.firstChild,o),x(l,e)}function O(e,t){E(e,t,O)}function T(e,t,n){var r,_,i,u,s=o({},e.props);for(i in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)"key"==i?r=t[i]:"ref"==i?_=t[i]:s[i]=void 0===t[i]&&void 0!==u?u[i]:t[i];return arguments.length>2&&(s.children=arguments.length>3?W.call(arguments,2):n),l(e.type,s,r||e.key,_||e.ref,null)}function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function L(e){this.getChildContext=function(){return e.context};var t=e.children,n=function(e,t){if(null==e)return{};var n,o,r={},_=Object.keys(e);for(o=0;o<_.length;o++)t.indexOf(n=_[o])>=0||(r[n]=e[n]);return r}(e,["context","children"]);return T(t,n)}function N(){var e=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(e),this._vdom=_(L,j({},this._props,{context:e.detail.context}),function e(t,n){if(3===t.nodeType)return t.data;if(1!==t.nodeType)return null;var o=[],r={},l=0,i=t.attributes,u=t.childNodes;for(l=i.length;l--;)"slot"!==i[l].name&&(r[i[l].name]=i[l].value,r[D(i[l].name)]=i[l].value);for(l=u.length;l--;){var s=e(u[l],null),c=u[l].slot;c?r[c]=_(H,{name:c},s):o[l]=s}var f=n?_(H,null,o):o;return _(n||t.nodeName.toLowerCase(),r,f)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?O:E)(this._vdom,this._root)}function D(e){return e.replace(/-(\w)/g,(function(e,t){return t?t.toUpperCase():""}))}function U(e,t,n){if(this._vdom){var o={};o[e]=n=null==n?void 0:n,o[D(e)]=n,this._vdom=T(this._vdom,o),E(this._vdom,this._root)}}function A(){E(this._vdom=null,this._root)}function H(e,t){var n=this;return _("slot",j({},e,{ref:function(e){e?(n.ref=e,n._listener||(n._listener=function(e){e.stopPropagation(),e.detail.context=t},e.addEventListener("_preact",n._listener))):n.ref.removeEventListener("_preact",n._listener)}}))}n.r(t);var W,F,R,I,B,$,G,V={},z=[],q=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;W=z.slice,F={__e:function(e,t,n,o){for(var r,_,l;t=t.__;)if((r=t.__c)&&!r.__)try{if((_=r.constructor)&&null!=_.getDerivedStateFromError&&(r.setState(_.getDerivedStateFromError(e)),l=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,o||{}),l=r.__d),l)return r.__E=r}catch(t){e=t}throw e}},R=0,u.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(o({},n),this.props)),e&&o(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),f(this))},u.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},u.prototype.render=i,I=[],$="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,G=function(e,t){return e.__v.__b-t.__v.__b},p.__r=0;!function(e,t,n,o){function r(){var t=Reflect.construct(HTMLElement,[],r);return t._vdomComponent=e,t._root=o&&o.shadow?t.attachShadow({mode:"open"}):t,t}(r.prototype=Object.create(HTMLElement.prototype)).constructor=r,r.prototype.connectedCallback=N,r.prototype.attributeChangedCallback=U,r.prototype.disconnectedCallback=A,n=n||e.observedAttributes||Object.keys(e.propTypes||{}),r.observedAttributes=n,n.forEach((function(e){Object.defineProperty(r.prototype,e,{get:function(){return this._vdom.props[e]},set:function(t){this._vdom?this.attributeChangedCallback(e,null,t):(this._props||(this._props={}),this._props[e]=t,this.connectedCallback());var n=M(t);null!=t&&"string"!==n&&"boolean"!==n&&"number"!==n||this.setAttribute(e,t)}})})),customElements.define(t||e.tagName||e.displayName||e.name,r)}((function(e){var t=e.name;return _("p",null,"Hello, ",void 0===t?"World":t,"!")}),"x-greeting",["name"])}});
//# sourceMappingURL=x-greeting.js.map