(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var _core=require("./lib/core"),_core2=_interopRequireDefault(_core),JQueryFree=function(e){function r(e){_classCallCheck(this,r);var t=_possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return t.domNode=e,t}return _inherits(r,e),r}(_core2.default),root;root=window?window:global?global:{};var wrapper=function(e){return new JQueryFree(e)},isNode=!1;"undefined"!=typeof module&&module.exports?(module.exports=wrapper,root.jqFree=wrapper,isNode=!0):root.jqFree=wrapper;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/core":2}],2:[function(require,module,exports){
"use strict";function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,o){for(var t=0;t<o.length;t++){var s=o[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(o,t,s){return t&&e(o.prototype,t),s&&e(o,s),o}}(),Core=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"closest",value:function(e){if(this.domNode.closest)return this.domNode.closest(e);console.log("dedede");for(var o=this.domNode.matches||this.domNode.webkitMatchesSelector||this.domNode.mozMatchesSelector||this.domNode.msMatchesSelector;this.domNode&&!o.call(this.domNode,e);)this.domNode=this.domNode.parentElement;return this.domNode}}]),e}();exports.default=Core;

},{}]},{},[1]);
