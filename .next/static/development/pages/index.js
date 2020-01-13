(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_5f137288facb1107b491 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ftank%2Fgit%2FPortfolio%2Fnext-portfolio%2Fpages%2Findex.js!./":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ftank%2Fgit%2FPortfolio%2Fnext-portfolio%2Fpages%2Findex.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react-progressive-image-loading/build/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-progressive-image-loading/build/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ProgressiveImage = (function (_super) {
    __extends(ProgressiveImage, _super);
    function ProgressiveImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressiveImage.prototype.componentWillMount = function () {
        var _this = this;
        var _a = this.props, src = _a.src, preview = _a.preview;
        var initialBlur = this.props.initialBlur;
        this.setState({ src: preview, blur: initialBlur });
        this.fetch(src)
            .then(function (srcDataURI) { return _this.setState({ src: srcDataURI, blur: 0 }); });
    };
    ProgressiveImage.prototype.render = function () {
        var src = this.state.src;
        var render = this.props.render;
        return render(src, this.getStyle());
    };
    ProgressiveImage.prototype.fetch = function (src) {
        return new Promise(function (resolve) {
            var image = new Image();
            image.src = src;
            image.addEventListener("load", function () { return resolve(src); }, false);
        });
    };
    ProgressiveImage.prototype.getStyle = function () {
        var _a = this.props, transitionTime = _a.transitionTime, timingFunction = _a.timingFunction;
        var blur = this.state.blur;
        return {
            filter: "blur(" + blur + "px)",
            transition: "filter " + transitionTime + "ms " + timingFunction
        };
    };
    return ProgressiveImage;
}(React.Component));
ProgressiveImage.defaultProps = {
    transitionTime: 500,
    timingFunction: "ease",
    initialBlur: 10
};
exports.ProgressiveImage = ProgressiveImage;
exports.default = ProgressiveImage;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-progressive-image-loading */ "./node_modules/react-progressive-image-loading/build/index.js");
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import { useState, useEffect } from "react";

var Index = function Index() {
  // const [ state, setState ] = useState({ loaded: false })
  var scrollerClassNames = ["scroller-top", "scroller-middle", "scroller-bottom"]; // useEffect(() => {
  //     setTimeout(() => {
  //         props.pageTransitionReadyToEnter()
  //         setState({ loaded: true })
  //       }, 2000)
  // }, [])
  // if (!state.loaded) return null;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_2___default.a, {
    preview: "/static/matthew-ronder-seid-small.jpg",
    src: "/static/matthew-ronder-seid-xYd99V3S5aI-unsplash-medium.jpg",
    transitionTime: 200,
    transitionFunction: "ease",
    render: function render(src, style) {
      return __jsx("section", {
        className: "section__index",
        style: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(style, {
          backgroundImage: "url(".concat(src, ")")
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, style.filter === "blur(0px)" ? __jsx("div", {
        className: "block__greeting",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "le\xA0"), "tanque")) : null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), scrollerClassNames.map(function (position, index) {
    return __jsx("section", {
      className: "section__scroller-container ".concat(position),
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      className: "block__scroller",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "portfolio of le tanque")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/*!**************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Ftank%2Fgit%2FPortfolio%2Fnext-portfolio%2Fpages%2Findex.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Ftank%2Fgit%2FPortfolio%2Fnext-portfolio%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ftank%2Fgit%2FPortfolio%2Fnext-portfolio%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_5f137288facb1107b491":
/*!*******************************************!*\
  !*** external "dll_5f137288facb1107b491" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f137288facb1107b491;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map