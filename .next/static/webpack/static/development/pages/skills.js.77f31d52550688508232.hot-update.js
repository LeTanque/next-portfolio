webpackHotUpdate("static/development/pages/skills.js",{

/***/ "./pages/skills.jsx":
/*!**************************!*\
  !*** ./pages/skills.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-page-transitions */ "./node_modules/next-page-transitions/lib/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/pages/skills.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Loading = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/Loading */ "./components/Loading.jsx"));
});
var CanvasicalSmoke = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/threejs-render/CanvasicalSmoke */ "./components/threejs-render/CanvasicalSmoke.jsx"));
}); // import ThreeContainer from "../components/threejs-render/ThreeContainer";
// import SmokeContainer from "../components/threejs-render/SmokeContainer";
// import Canvasical from "../components/threejs-render/Canvasical";

var Skills = function Skills() {
  var timeout = 400;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: "section__skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(next_page_transitions__WEBPACK_IMPORTED_MODULE_1__["PageTransition"], {
    timeout: timeout,
    classNames: "page-transition",
    loadingClassNames: "spinner-icon",
    loadingComponent: __jsx(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }),
    loadingDelay: 0,
    loadingTimeout: {
      enter: timeout,
      exit: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(CanvasicalSmoke, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=skills.js.77f31d52550688508232.hot-update.js.map