webpackHotUpdate(2,{

/***/ "./components/threejs-render/CanvasicalSmoke.jsx":
/*!*******************************************************!*\
  !*** ./components/threejs-render/CanvasicalSmoke.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var _resources_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/postprocessing/EffectComposer */ "./components/threejs-render/resources/postprocessing/EffectComposer.js");
/* harmony import */ var _resources_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/postprocessing/RenderPass */ "./components/threejs-render/resources/postprocessing/RenderPass.js");
/* harmony import */ var _resources_postprocessing_GlitchPass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/postprocessing/GlitchPass */ "./components/threejs-render/resources/postprocessing/GlitchPass.js");
/* harmony import */ var _TextLoop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TextLoop */ "./components/TextLoop.jsx");

var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/components/threejs-render/CanvasicalSmoke.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // Import and register postprocessing classes as three-native-elements for react-three-fiber
// They'll be available as native elements <effectComposer /> from then on ...




Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["extend"])({
  EffectComposer: _resources_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_4__["EffectComposer"],
  RenderPass: _resources_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_5__["RenderPass"],
  GlitchPass: _resources_postprocessing_GlitchPass__WEBPACK_IMPORTED_MODULE_6__["GlitchPass"]
});
 // Cast the lighting

var Lighting = function Lighting() {
  var _useThree = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useThree"])(),
      mouse = _useThree.mouse;

  var light = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useFrame"])(function () {
    light.current.position.set(mouse.x / 20, -mouse.y / 20, 60);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("directionalLight", {
    ref: light,
    intensity: 1.1,
    color: "#eeeeee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
}; // The canvas houses this function, the scene. Scene is where the elements come together.


var SmokePuff = function SmokePuff(_ref) {
  var geometry = _ref.geometry,
      material = _ref.material;
  var smokePuffRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var factor = 1 + Math.random() * 2; // ~ 1-3

  var xFactor = -250 + Math.random() * 350; // -250 - 250

  var yFactor = -150 + Math.random() * 175; // -150 - 75

  var zFactor = 10 + Math.random() * 10; //  10 - 20

  var getRandomArbitrary = function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  };

  var randomFactor = getRandomArbitrary(1.1, 2);
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useFrame"])(function (_ref2) {
    var clock = _ref2.clock;
    var slowRotation = clock.elapsedTime * 0.017 * randomFactor + xFactor; // starts at ~0.0001 + xFactor and goes slow

    var slowGrowth = Math.tanh(clock.elapsedTime / 18) + 3;
    smokePuffRef.current.rotation.z = slowRotation * -1;
    smokePuffRef.current.scale.set(slowGrowth, slowGrowth, 2);
    smokePuffRef.current.position.set(xFactor * factor, yFactor * factor, zFactor);
  });
  return __jsx("mesh", {
    ref: smokePuffRef,
    material: material,
    geometry: geometry,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  });
};

var GenerateSmoke = function GenerateSmoke() {
  var _useResource = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useResource"])(),
      _useResource2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useResource, 2),
      geometryRef = _useResource2[0],
      geometry = _useResource2[1];

  var _useResource3 = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useResource"])(),
      _useResource4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useResource3, 2),
      materialRef = _useResource4[0],
      material = _useResource4[1];

  var url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png';
  var texture = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load(url);
  }, [url]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("planeGeometry", {
    ref: geometryRef,
    attach: "geometry",
    args: [200, 200],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("meshLambertMaterial", {
    ref: materialRef,
    attach: "material",
    color: "#eeeeee",
    opacity: 0.75,
    transparent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("primitive", {
    attach: "map",
    object: texture,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), geometry && new Array(20).fill().map(function (_, index) {
    return __jsx(SmokePuff, {
      key: index,
      material: material,
      geometry: geometry,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    });
  }));
}; // This is the canvas. It's the lowest level element in the three/webGl chain


var CanvasicalSmoke = function CanvasicalSmoke(props) {
  var canvas = props.canvas,
      setCanvas = props.setCanvas;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!canvas.loaded) {
      setCanvas({
        loaded: true
      });
    }
  }, [props]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["Canvas"], {
    className: "container block__three-container",
    style: "",
    camera: {
      fov: 75,
      aspect: 0.5,
      near: 1,
      far: 10000,
      position: [0, 0, 400]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, canvas.loaded ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Lighting, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx(GenerateSmoke, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })) : null), __jsx(_TextLoop__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CanvasicalSmoke);

/***/ })

})
//# sourceMappingURL=2.0e2bc3a793195de5f3c2.hot-update.js.map