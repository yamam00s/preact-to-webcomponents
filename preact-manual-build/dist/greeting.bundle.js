(()=>{"use strict";var e,t,n,_,o,r,l,i={},u=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,c=Array.isArray;function p(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function a(t,n,_){var o,r,l,i={};for(l in n)"key"==l?o=n[l]:"ref"==l?r=n[l]:i[l]=n[l];if(arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):_),"function"==typeof t&&null!=t.defaultProps)for(l in t.defaultProps)void 0===i[l]&&(i[l]=t.defaultProps[l]);return d(t,i,o,r,null)}function d(e,_,o,r,l){var i={type:e,props:_,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++n:l};return null==l&&null!=t.vnode&&t.vnode(i),i}function h(e){return e.children}function v(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function b(e){(!e.__d&&(e.__d=!0)&&_.push(e)&&!g.__r++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(g)}function g(){var e,t,n,o,r,i,u,s;for(_.sort(l);e=_.shift();)e.__d&&(t=_.length,o=void 0,r=void 0,u=(i=(n=e).__v).__e,(s=n.__P)&&(o=[],(r=p({},i)).__v=i.__v+1,L(s,i,r,n.__n,void 0!==s.ownerSVGElement,null!=i.__h?[u]:null,o,null==u?y(i):u,i.__h),D(o,i),i.__e!=u&&m(i)),_.length>t&&_.sort(l));g.__r=0}function k(e,t,n,_,o,r,l,s,p,f){var a,v,m,b,g,k,P,S=_&&_.__k||u,E=S.length;for(n.__k=[],a=0;a<t.length;a++)if(null!=(b=n.__k[a]=null==(b=t[a])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?d(null,b,null,null,b):c(b)?d(h,{children:b},null,null,null):b.__b>0?d(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(m=S[a])||m&&b.key==m.key&&b.type===m.type)S[a]=void 0;else for(v=0;v<E;v++){if((m=S[v])&&b.key==m.key&&b.type===m.type){S[v]=void 0;break}m=null}L(e,b,m=m||i,o,r,l,s,p,f),g=b.__e,(v=b.ref)&&m.ref!=v&&(P||(P=[]),m.ref&&P.push(m.ref,null,b),P.push(v,b.__c||g,b)),null!=g?(null==k&&(k=g),"function"==typeof b.type&&b.__k===m.__k?b.__d=p=C(b,p,e):p=x(e,b,m,S,g,p),"function"==typeof n.type&&(n.__d=p)):p&&m.__e==p&&p.parentNode!=e&&(p=y(m))}for(n.__e=k,a=E;a--;)null!=S[a]&&("function"==typeof n.type&&null!=S[a].__e&&S[a].__e==n.__d&&(n.__d=w(_).nextSibling),M(S[a],S[a]));if(P)for(a=0;a<P.length;a++)U(P[a],P[++a],P[++a])}function C(e,t,n){for(var _,o=e.__k,r=0;o&&r<o.length;r++)(_=o[r])&&(_.__=e,t="function"==typeof _.type?C(_,t,n):x(n,_,_,o,_.__e,t));return t}function x(e,t,n,_,o,r){var l,i,u;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=r||null==o.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(o),l=null;else{for(i=r,u=0;(i=i.nextSibling)&&u<_.length;u+=1)if(i==o)break e;e.insertBefore(o,r),l=r}return void 0!==l?l:o.nextSibling}function w(e){var t,n,_;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(_=w(n)))return _;return null}function P(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||s.test(t)?n:n+"px"}function S(e,t,n,_,o){var r;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||P(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||P(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_||e.addEventListener(t,r?T:E,r):e.removeEventListener(t,r?T:E,r);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function E(e){return this.l[e.type+!1](t.event?t.event(e):e)}function T(e){return this.l[e.type+!0](t.event?t.event(e):e)}function L(e,n,_,o,r,l,i,u,s){var f,a,d,y,m,b,g,C,x,w,P,S,E,T,L,D=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(s=_.__h,u=n.__e=_.__e,n.__h=null,l=[u]),(f=t.__b)&&f(n);try{e:if("function"==typeof D){if(C=n.props,x=(f=D.contextType)&&o[f.__c],w=f?x?x.props.value:f.__:o,_.__c?g=(a=n.__c=_.__c).__=a.__E:("prototype"in D&&D.prototype.render?n.__c=a=new D(C,w):(n.__c=a=new v(C,w),a.constructor=D,a.render=O),x&&x.sub(a),a.props=C,a.state||(a.state={}),a.context=w,a.__n=o,d=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=D.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=p({},a.__s)),p(a.__s,D.getDerivedStateFromProps(C,a.__s))),y=a.props,m=a.state,a.__v=n,d)null==D.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==D.getDerivedStateFromProps&&C!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(C,w),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(C,a.__s,w)||n.__v===_.__v){for(n.__v!==_.__v&&(a.props=C,a.state=a.__s,a.__d=!1),a.__e=!1,n.__e=_.__e,n.__k=_.__k,n.__k.forEach((function(e){e&&(e.__=n)})),P=0;P<a._sb.length;P++)a.__h.push(a._sb[P]);a._sb=[],a.__h.length&&i.push(a);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(C,a.__s,w),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(y,m,b)}))}if(a.context=w,a.props=C,a.__P=e,S=t.__r,E=0,"prototype"in D&&D.prototype.render){for(a.state=a.__s,a.__d=!1,S&&S(n),f=a.render(a.props,a.state,a.context),T=0;T<a._sb.length;T++)a.__h.push(a._sb[T]);a._sb=[]}else do{a.__d=!1,S&&S(n),f=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++E<25);a.state=a.__s,null!=a.getChildContext&&(o=p(p({},o),a.getChildContext())),d||null==a.getSnapshotBeforeUpdate||(b=a.getSnapshotBeforeUpdate(y,m)),k(e,c(L=null!=f&&f.type===h&&null==f.key?f.props.children:f)?L:[L],n,_,o,r,l,i,u,s),a.base=n.__e,n.__h=null,a.__h.length&&i.push(a),g&&(a.__E=a.__=null),a.__e=!1}else null==l&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=N(_.__e,n,_,o,r,l,i,s);(f=t.diffed)&&f(n)}catch(e){n.__v=null,(s||null!=l)&&(n.__e=u,n.__h=!!s,l[l.indexOf(u)]=null),t.__e(e,n,_)}}function D(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function N(t,n,_,o,r,l,u,s){var p,a,d,h=_.props,v=n.props,m=n.type,b=0;if("svg"===m&&(r=!0),null!=l)for(;b<l.length;b++)if((p=l[b])&&"setAttribute"in p==!!m&&(m?p.localName===m:3===p.nodeType)){t=p,l[b]=null;break}if(null==t){if(null===m)return document.createTextNode(v);t=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),l=null,s=!1}if(null===m)h===v||s&&t.data===v||(t.data=v);else{if(l=l&&e.call(t.childNodes),a=(h=_.props||i).dangerouslySetInnerHTML,d=v.dangerouslySetInnerHTML,!s){if(null!=l)for(h={},b=0;b<t.attributes.length;b++)h[t.attributes[b].name]=t.attributes[b].value;(d||a)&&(d&&(a&&d.__html==a.__html||d.__html===t.innerHTML)||(t.innerHTML=d&&d.__html||""))}if(function(e,t,n,_,o){var r;for(r in n)"children"===r||"key"===r||r in t||S(e,r,null,n[r],_);for(r in t)o&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===t[r]||S(e,r,t[r],n[r],_)}(t,v,h,r,s),d)n.__k=[];else if(k(t,c(b=n.props.children)?b:[b],n,_,o,r&&"foreignObject"!==m,l,u,l?l[0]:_.__k&&y(_,0),s),null!=l)for(b=l.length;b--;)null!=l[b]&&f(l[b]);s||("value"in v&&void 0!==(b=v.value)&&(b!==t.value||"progress"===m&&!b||"option"===m&&b!==h.value)&&S(t,"value",b,h.value,!1),"checked"in v&&void 0!==(b=v.checked)&&b!==t.checked&&S(t,"checked",b,h.checked,!1))}return t}function U(e,n,_){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,_)}}function M(e,n,_){var o,r;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||U(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&M(o[r],n,_||"function"!=typeof e.type);_||null==e.__e||f(e.__e),e.__=e.__e=e.__d=void 0}function O(e,t,n){return this.constructor(e,n)}function A(n,_,o){var r,l,u;t.__&&t.__(n,_),l=(r="function"==typeof o)?null:o&&o.__k||_.__k,u=[],L(_,n=(!r&&o||_).__k=a(h,null,[n]),l||i,i,void 0!==_.ownerSVGElement,!r&&o?[o]:l?null:_.firstChild?e.call(_.childNodes):null,u,!r&&o?o:l?l.__e:_.firstChild,r),D(u,n)}function H(e,t){A(e,t,H)}function W(t,n,_){var o,r,l,i,u=p({},t.props);for(l in t.type&&t.type.defaultProps&&(i=t.type.defaultProps),n)"key"==l?o=n[l]:"ref"==l?r=n[l]:u[l]=void 0===n[l]&&void 0!==i?i[l]:n[l];return arguments.length>2&&(u.children=arguments.length>3?e.call(arguments,2):_),d(t.type,u,o||t.key,r||t.ref,null)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var _ in n)Object.prototype.hasOwnProperty.call(n,_)&&(e[_]=n[_])}return e}).apply(this,arguments)}function F(e){this.getChildContext=function(){return e.context};var t=e.children,n=function(e,t){if(null==e)return{};var n,_,o={},r=Object.keys(e);for(_=0;_<r.length;_++)t.indexOf(n=r[_])>=0||(o[n]=e[n]);return o}(e,["context","children"]);return W(t,n)}function R(){var e=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(e),this._vdom=a(F,j({},this._props,{context:e.detail.context}),function e(t,n){if(3===t.nodeType)return t.data;if(1!==t.nodeType)return null;var _=[],o={},r=0,l=t.attributes,i=t.childNodes;for(r=l.length;r--;)"slot"!==l[r].name&&(o[l[r].name]=l[r].value,o[I(l[r].name)]=l[r].value);for(r=i.length;r--;){var u=e(i[r],null),s=i[r].slot;s?o[s]=a(G,{name:s},u):_[r]=u}var c=n?a(G,null,_):_;return a(n||t.nodeName.toLowerCase(),o,c)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?H:A)(this._vdom,this._root)}function I(e){return e.replace(/-(\w)/g,(function(e,t){return t?t.toUpperCase():""}))}function B(e,t,n){if(this._vdom){var _={};_[e]=n=null==n?void 0:n,_[I(e)]=n,this._vdom=W(this._vdom,_),A(this._vdom,this._root)}}function $(){A(this._vdom=null,this._root)}function G(e,t){var n=this;return a("slot",j({},e,{ref:function(e){e?(n.ref=e,n._listener||(n._listener=function(e){e.stopPropagation(),e.detail.context=t},e.addEventListener("_preact",n._listener))):n.ref.removeEventListener("_preact",n._listener)}}))}e=u.slice,t={__e:function(e,t,n,_){for(var o,r,l;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(e)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,_||{}),l=o.__d),l)return o.__E=o}catch(t){e=t}throw e}},n=0,v.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(p({},n),this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),b(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},v.prototype.render=h,_=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=function(e,t){return e.__v.__b-t.__v.__b},g.__r=0,function(e,t,n,_){function o(){var t=Reflect.construct(HTMLElement,[],o);return t._vdomComponent=e,t._root=t,t}(o.prototype=Object.create(HTMLElement.prototype)).constructor=o,o.prototype.connectedCallback=R,o.prototype.attributeChangedCallback=B,o.prototype.disconnectedCallback=$,n=n||e.observedAttributes||Object.keys(e.propTypes||{}),o.observedAttributes=n,n.forEach((function(e){Object.defineProperty(o.prototype,e,{get:function(){return this._vdom.props[e]},set:function(t){this._vdom?this.attributeChangedCallback(e,null,t):(this._props||(this._props={}),this._props[e]=t,this.connectedCallback());var n=typeof t;null!=t&&"string"!==n&&"boolean"!==n&&"number"!==n||this.setAttribute(e,t)}})})),customElements.define("x-greeting",o)}((({name:e="World"})=>a("p",null,"sHello, ",e,"!")),0,["name"])})();