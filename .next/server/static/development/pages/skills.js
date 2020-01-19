module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/skills.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/skills.jsx":
/*!**************************!*\
  !*** ./pages/skills.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/pages/skills.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CanvasicalSmoke = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/threejs-render/CanvasicalSmoke */ "./components/threejs-render/CanvasicalSmoke.jsx")));
const TextLoop = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/TextLoop */ "./components/TextLoop.jsx")));

const Skills = () => {
  const {
    0: canvas,
    1: setCanvas
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loaded: false
  });
  const rightSlant = {
    backgroundColor: "#1e1e1e",
    height: "300px",
    width: "100vw",
    position: "absolute",
    marginTop: "150px",
    transform: "rotate(6deg) skew(6deg) translate(0, 0px)",
    opacity: 1,
    zIndex: -1
  };
  const leftSlant = {
    backgroundColor: "#1e1e1e",
    height: "200px",
    width: "70vw",
    position: "relative",
    top: "200px",
    transform: "matrix3d(1.5,0,0.00,0.0025,0.00,0.94,0.34,-0.000,0,-0.34,0.94,0,0,0,0,1)",
    opacity: 1,
    zIndex: -1
  };
  const levelBlock = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100vw",
    position: "relative",
    opacity: 1,
    zIndex: -1
  };
  const levelBlockClear = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100vw",
    position: "relative",
    opacity: 1,
    zIndex: -1
  };
  const levelBlockOpaque = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#1e1e1e",
    width: "100vw",
    position: "relative",
    opacity: 1,
    zIndex: -1
  };
  return __jsx("section", {
    className: "section__skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(CanvasicalSmoke, {
    canvas: canvas,
    setCanvas: setCanvas,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(TextLoop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx("div", {
    className: "block__skills-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("div", {
    className: "block__slanted",
    style: rightSlant,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, " "), __jsx("div", {
    className: "",
    style: leftSlant,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, " "), __jsx("div", {
    className: "block__level tint",
    style: {
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.")), __jsx("div", {
    className: "block__level",
    style: levelBlockClear,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.")), __jsx("div", {
    className: "block__level",
    style: levelBlockOpaque,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."))));
};

Skills.getInitialProps = async function () {
  return {
    transitionType: 'slide',
    timeout: 800
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/skills.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tank/git/Portfolio/next-portfolio/pages/skills.jsx */"./pages/skills.jsx");


/***/ }),

/***/ "@juggle/resize-observer":
/*!******************************************!*\
  !*** external "@juggle/resize-observer" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@juggle/resize-observer");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/number/epsilon":
/*!****************************************************!*\
  !*** external "core-js/library/fn/number/epsilon" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/number/epsilon");

/***/ }),

/***/ "core-js/library/fn/number/is-integer":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/number/is-integer" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/number/is-integer");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/entries":
/*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/set":
/*!*****************************************!*\
  !*** external "core-js/library/fn/set" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/for":
/*!************************************************!*\
  !*** external "core-js/library/fn/symbol/for" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/for");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/symbol/to-primitive":
/*!*********************************************************!*\
  !*** external "core-js/library/fn/symbol/to-primitive" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/to-primitive");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-merge-refs":
/*!***********************************!*\
  !*** external "react-merge-refs" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-merge-refs");

/***/ }),

/***/ "react-promise-suspense":
/*!*****************************************!*\
  !*** external "react-promise-suspense" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-promise-suspense");

/***/ }),

/***/ "react-reconciler":
/*!***********************************!*\
  !*** external "react-reconciler" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reconciler");

/***/ }),

/***/ "react-text-loop":
/*!**********************************!*\
  !*** external "react-text-loop" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-text-loop");

/***/ }),

/***/ "react-use-measure":
/*!************************************!*\
  !*** external "react-use-measure" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use-measure");

/***/ }),

/***/ "simple-icons-react-component":
/*!***********************************************!*\
  !*** external "simple-icons-react-component" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("simple-icons-react-component");

/***/ }),

/***/ "tiny-emitter":
/*!*******************************!*\
  !*** external "tiny-emitter" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tiny-emitter");

/***/ })

/******/ });
//# sourceMappingURL=skills.js.map