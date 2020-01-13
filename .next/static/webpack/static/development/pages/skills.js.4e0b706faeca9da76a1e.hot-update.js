webpackHotUpdate("static/development/pages/skills.js",{

/***/ "./pages/skills.jsx":
/*!**************************!*\
  !*** ./pages/skills.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-page-transitions */ "./node_modules/next-page-transitions/lib/index.js");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/pages/skills.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var CanvasicalSmoke = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/threejs-render/CanvasicalSmoke */ "./components/threejs-render/CanvasicalSmoke.jsx"));
});

var Skills = function Skills(props) {
  var timeout = 800;
  console.log('props in skills --> ', props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_page_transitions__WEBPACK_IMPORTED_MODULE_3__["PageTransition"], {
    timeout: timeout,
    classNames: "page-transition",
    loadingDelay: 0,
    loadingTimeout: {
      enter: timeout,
      exit: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("section", {
    className: "section__skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(CanvasicalSmoke, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))));
};

Skills.getInitialProps = function _callee(props) {
  var pageProps;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('pageprops genesis props --> ', props);
          pageProps = {};

          if (!Skills.getInitialProps) {
            _context.next = 6;
            break;
          }

          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

        case 5:
          pageProps = _context.sent;

        case 6:
          return _context.abrupt("return", {
            pageProps: pageProps
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=skills.js.4e0b706faeca9da76a1e.hot-update.js.map