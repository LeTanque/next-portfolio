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

var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/pages/skills.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var CanvasicalSmoke = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/threejs-render/CanvasicalSmoke */ "./components/threejs-render/CanvasicalSmoke.jsx"));
});
var TextLoop = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/TextLoop */ "./components/TextLoop.jsx"));
});

var Skills = function Skills() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    loaded: false
  }),
      canvas = _useState[0],
      setCanvas = _useState[1];

  var rightSlant = {
    backgroundColor: "#1e1e1e",
    height: "300px",
    width: "100vw",
    position: "absolute",
    marginTop: "150px",
    transform: "rotate(6deg) skew(6deg) translate(0, 0px)",
    opacity: 1,
    zIndex: -1
  };
  var leftSlant = {
    backgroundColor: "#1e1e1e",
    height: "200px",
    width: "70vw",
    position: "relative",
    top: "200px",
    transform: "matrix3d(1.5,0,0.00,0.0025,0.00,0.94,0.34,-0.000,0,-0.34,0.94,0,0,0,0,1)",
    opacity: 1,
    zIndex: -1
  };
  var levelBlock = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100vw",
    position: "relative",
    // top: "250px",
    opacity: 1,
    zIndex: -1
  };
  var levelBlockClear = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.2)",
    width: "100vw",
    position: "relative",
    // top: "250px",
    opacity: 1,
    zIndex: -1
  };
  var levelBlockOpaque = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,1)",
    width: "100vw",
    position: "relative",
    // top: "250px",
    opacity: 1,
    zIndex: -1
  };
  return __jsx("section", {
    className: "section__skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(CanvasicalSmoke, {
    canvas: canvas,
    setCanvas: setCanvas,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(TextLoop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("div", {
    className: "block__skills-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "block__slanted",
    style: rightSlant,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, " "), __jsx("div", {
    className: "",
    style: leftSlant,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, " "), __jsx("div", {
    className: "block__level tint",
    style: {
      marginTop: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.")), __jsx("div", {
    className: "block__level clear",
    style: levelBlockClear,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.")), __jsx("div", {
    className: "block__level tint",
    style: levelBlockOpaque,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."), __jsx("p", {
    className: "p__text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit."))));
};

Skills.getInitialProps = function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            transitionType: 'slide',
            timeout: 800
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=skills.js.f6866f7120ec2f868599.hot-update.js.map