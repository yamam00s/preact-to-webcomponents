module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "ydxE");
/******/ })
/************************************************************************/
/******/ ({

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "ydxE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// CONCATENATED MODULE: ../node_modules/preact-custom-element/dist/preact-custom-element.esm.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function preact_custom_element_esm_r() {
  return (preact_custom_element_esm_r = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }).apply(this, arguments);
}
function preact_custom_element_esm_i(t) {
  this.getChildContext = function () {
    return t.context;
  };
  var e = t.children,
    n = function (t, e) {
      if (null == t) return {};
      var n,
        o,
        r = {},
        i = Object.keys(t);
      for (o = 0; o < i.length; o++) e.indexOf(n = i[o]) >= 0 || (r[n] = t[n]);
      return r;
    }(t, ["context", "children"]);
  return Object(external_preact_["cloneElement"])(e, n);
}
function preact_custom_element_esm_a() {
  var o = new CustomEvent("_preact", {
    detail: {},
    bubbles: !0,
    cancelable: !0
  });
  this.dispatchEvent(o), this._vdom = Object(external_preact_["h"])(preact_custom_element_esm_i, preact_custom_element_esm_r({}, this._props, {
    context: o.detail.context
  }), function e(n, o) {
    if (3 === n.nodeType) return n.data;
    if (1 !== n.nodeType) return null;
    var r = [],
      i = {},
      a = 0,
      c = n.attributes,
      l = n.childNodes;
    for (a = c.length; a--;) "slot" !== c[a].name && (i[c[a].name] = c[a].value, i[s(c[a].name)] = c[a].value);
    for (a = l.length; a--;) {
      var p = e(l[a], null),
        d = l[a].slot;
      d ? i[d] = Object(external_preact_["h"])(u, {
        name: d
      }, p) : r[a] = p;
    }
    var h = o ? Object(external_preact_["h"])(u, null, r) : r;
    return Object(external_preact_["h"])(o || n.nodeName.toLowerCase(), i, h);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? external_preact_["hydrate"] : external_preact_["render"])(this._vdom, this._root);
}
function s(t) {
  return t.replace(/-(\w)/g, function (t, e) {
    return e ? e.toUpperCase() : "";
  });
}
function preact_custom_element_esm_c(t, e, r) {
  if (this._vdom) {
    var i = {};
    i[t] = r = null == r ? void 0 : r, i[s(t)] = r, this._vdom = Object(external_preact_["cloneElement"])(this._vdom, i), Object(external_preact_["render"])(this._vdom, this._root);
  }
}
function preact_custom_element_esm_l() {
  Object(external_preact_["render"])(this._vdom = null, this._root);
}
function u(e, n) {
  var o = this;
  return Object(external_preact_["h"])("slot", preact_custom_element_esm_r({}, e, {
    ref: function ref(t) {
      t ? (o.ref = t, o._listener || (o._listener = function (t) {
        t.stopPropagation(), t.detail.context = n;
      }, t.addEventListener("_preact", o._listener))) : o.ref.removeEventListener("_preact", o._listener);
    }
  }));
}
/* harmony default export */ var preact_custom_element_esm = (function (t, e, n, o) {
  function r() {
    var e = Reflect.construct(HTMLElement, [], r);
    return e._vdomComponent = t, e._root = o && o.shadow ? e.attachShadow({
      mode: "open"
    }) : e, e;
  }
  return (r.prototype = Object.create(HTMLElement.prototype)).constructor = r, r.prototype.connectedCallback = preact_custom_element_esm_a, r.prototype.attributeChangedCallback = preact_custom_element_esm_c, r.prototype.disconnectedCallback = preact_custom_element_esm_l, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), r.observedAttributes = n, n.forEach(function (t) {
    Object.defineProperty(r.prototype, t, {
      get: function get() {
        return this._vdom.props[t];
      },
      set: function set(e) {
        this._vdom ? this.attributeChangedCallback(t, null, e) : (this._props || (this._props = {}), this._props[t] = e, this.connectedCallback());
        var n = _typeof(e);
        null != e && "string" !== n && "boolean" !== n && "number" !== n || this.setAttribute(t, e);
      }
    });
  }), customElements.define(e || t.tagName || t.displayName || t.name, r);
});
// CONCATENATED MODULE: ./components/Greeting.tsx


var Greeting_Greeting = function Greeting(_ref) {
  var _ref$name = _ref.name,
    name = _ref$name === void 0 ? 'World' : _ref$name;
  return Object(external_preact_["h"])("p", null, "Hello, ", name, "!");
};
preact_custom_element_esm(Greeting_Greeting, 'x-greeting', ['name']);

/***/ })

/******/ });
//# sourceMappingURL=x-greeting.js.map