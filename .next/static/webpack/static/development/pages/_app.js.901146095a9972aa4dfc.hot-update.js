webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/components/Nav.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Nav = function Nav(props) {
  var route = props.route;

  var _useEffect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(""),
      currentNavLocation = _useEffect[0],
      setCurrentNavLocation = _useEffect[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props && props.route === "/") {
      setCurrentNavLocation("index");
    } else if (props && props.route === "/about") {
      setCurrentNavLocation("about");
    } else if (props && props.route === "/projects") {
      setCurrentNavLocation("projects");
    }

    ; // console.log('navLocation --> ', currentNavLocation);
  }, [props.route]);
  return __jsx("section", {
    className: "section__nav route-".concat(currentNavLocation),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Projects"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.901146095a9972aa4dfc.hot-update.js.map