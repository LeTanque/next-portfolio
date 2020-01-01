webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.jsx":
/*!*************************!*\
  !*** ./pages/about.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/pages/about.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var About = function About() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _boolean = _useState[0],
      setBoolean = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    display: "none"
  }),
      style = _useState2[0],
      setStyle = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var setTheStyle = function setTheStyle() {
      setBoolean(true);
      setStyle({
        display: "flex"
      });
    };

    setTimeout(function () {
      return setTheStyle();
    }, 1000);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: "section__about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "block--about",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, rerum, facilis qui fuga quia molestias, laboriosam id veritatis ea nam voluptas eligendi atque maiores eius tenetur reprehenderit unde expedita! Repellendus?"))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.b629be5876ff07b43470.hot-update.js.map