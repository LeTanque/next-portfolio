(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/about.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=%2FUsers%2Ftank%2Fgit%2FPortfolio%2Fnext-portfolio%2Fpages%2Fabout.jsx!./":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=%2FUsers%2Ftank%2Fgit%2FPortfolio%2Fnext-portfolio%2Fpages%2Fabout.jsx ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/about", function() {
      var mod = __webpack_require__(/*! ./pages/about.jsx */ "./pages/about.jsx")
      if(true) {
        module.hot.accept(/*! ./pages/about.jsx */ "./pages/about.jsx", function() {
          if(!next.router.components["/about"]) return
          var updatedPage = __webpack_require__(/*! ./pages/about.jsx */ "./pages/about.jsx")
          next.router.update("/about", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react/index.js");

/***/ }),

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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    display: "none"
  }),
      style = _useState[0],
      setStyle = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var setTheStyle = function setTheStyle() {
      setStyle({
        display: "flex"
      });
    };

    setTimeout(function () {
      return setTheStyle();
    }, 1560);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: "section__about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "block--about",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, rerum, facilis qui fuga quia molestias, laboriosam id veritatis ea nam voluptas eligendi atque maiores eius tenetur reprehenderit unde expedita! Repellendus?"))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 4:
/*!********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fabout&absolutePagePath=%2FUsers%2Ftank%2Fgit%2FPortfolio%2Fnext-portfolio%2Fpages%2Fabout.jsx ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fabout&absolutePagePath=%2FUsers%2Ftank%2Fgit%2FPortfolio%2Fnext-portfolio%2Fpages%2Fabout.jsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=%2FUsers%2Ftank%2Fgit%2FPortfolio%2Fnext-portfolio%2Fpages%2Fabout.jsx!./");


/***/ }),

/***/ "dll-reference dll_5f137288facb1107b491":
/*!*******************************************!*\
  !*** external "dll_5f137288facb1107b491" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f137288facb1107b491;

/***/ })

},[[4,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=about.js.map