webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    loaded: true,
    timer: false
  }),
      background = _useState[0],
      setBackground = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      fogScroll = _useState2[0],
      setFogScroll = _useState2[1];

  var scrollerClassNames = ["scroller-top", "scroller-middle", "scroller-bottom"];
  var fogFadeIn = 5555;
  var fogDelay = 1.5;
  var foggyLettersClear = {
    opacity: 0,
    transition: "".concat(fogFadeIn, "ms ease opacity ").concat(fogDelay, "s")
  };
  var foggyLettersOpaque = {
    opacity: 1,
    transition: "".concat(fogFadeIn, "ms ease opacity ").concat(fogDelay, "s")
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (fogScroll === null) setFogScroll(foggyLettersClear);
    var timer = setTimeout(function () {
      setFogScroll(foggyLettersOpaque);
    }, 1000);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "section__index",
    style: {
      backgroundImage: "url(/static/matthew-ronder-seid-xYd99V3S5aI-unsplash-medium.jpg)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "block__greeting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "le\xA0"), "tanque"))), scrollerClassNames.map(function (position, index) {
    return __jsx("section", {
      className: "section__scroller-container ".concat(position),
      key: index,
      style: fogScroll,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "block__scroller",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "frank le tanque portfolio")));
  }));
};

Index.getInitialProps = function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            transitionType: 'none',
            timeout: 0
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5c8a20c465cec06acf66.hot-update.js.map