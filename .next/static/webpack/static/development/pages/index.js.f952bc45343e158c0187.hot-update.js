webpackHotUpdate("static/development/pages/index.js",{

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
    transitionTime: 400,
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

/***/ })

})
//# sourceMappingURL=index.js.f952bc45343e158c0187.hot-update.js.map