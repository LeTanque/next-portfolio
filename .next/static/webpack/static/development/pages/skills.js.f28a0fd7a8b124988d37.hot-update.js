webpackHotUpdate("static/development/pages/skills.js",{

/***/ "./components/TextLoop.jsx":
false,

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
/* harmony import */ var react_spring_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring/three */ "./node_modules/react-spring/three.js");
/* harmony import */ var _resources_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/postprocessing/EffectComposer */ "./components/threejs-render/resources/postprocessing/EffectComposer.js");
/* harmony import */ var _resources_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/postprocessing/RenderPass */ "./components/threejs-render/resources/postprocessing/RenderPass.js");
/* harmony import */ var _resources_postprocessing_GlitchPass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources/postprocessing/GlitchPass */ "./components/threejs-render/resources/postprocessing/GlitchPass.js");

var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/components/threejs-render/CanvasicalSmoke.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // Import and register postprocessing classes as three-native-elements for react-three-fiber
// They'll be available as native elements <effectComposer /> from then on ...




Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["extend"])({
  EffectComposer: _resources_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_5__["EffectComposer"],
  RenderPass: _resources_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_6__["RenderPass"],
  GlitchPass: _resources_postprocessing_GlitchPass__WEBPACK_IMPORTED_MODULE_7__["GlitchPass"]
}); // import TextLoop from "../TextLoop";
// Cast the lighting

var Lighting = function Lighting() {
  var _useThree = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useThree"])(),
      mouse = _useThree.mouse;

  var light = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useFrame"])(function () {
    light.current.position.set(mouse.x / 20, -mouse.y / 20, 0);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("directionalLight", {
    position: [-2, 0, 30],
    intensity: 0.5,
    color: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("pointLight", {
    ref: light,
    distance: 50,
    intensity: 1.5,
    color: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
}; // This renders text via canvas and projects it as a sprite


var Text = function Text(_ref) {
  var children = _ref.children,
      position = _ref.position,
      opacity = _ref.opacity,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'white' : _ref$color,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 410 : _ref$fontSize;

  var _useThree2 = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useThree"])(),
      _useThree2$size = _useThree2.size,
      width = _useThree2$size.width,
      height = _useThree2$size.height,
      _useThree2$viewport = _useThree2.viewport,
      viewportWidth = _useThree2$viewport.width,
      viewportHeight = _useThree2$viewport.height;

  var scale = viewportWidth > viewportHeight ? viewportWidth : viewportHeight;
  var canvas = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var canvas = document.createElement('canvas');
    canvas.width = canvas.height = 2048;
    var context = canvas.getContext('2d');
    context.font = "bold ".concat(fontSize, "px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif");
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = color;
    context.fillText(children, 1024, 1024 - 410 / 2);
    return canvas;
  }, [children, width, height]);
  return __jsx(react_spring_three__WEBPACK_IMPORTED_MODULE_4__["a"].sprite, {
    scale: [scale, scale, 1],
    position: position,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(react_spring_three__WEBPACK_IMPORTED_MODULE_4__["a"].spriteMaterial, {
    attach: "material",
    transparent: true,
    opacity: opacity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("canvasTexture", {
    attach: "map",
    image: canvas,
    premultiplyAlpha: true,
    onUpdate: function onUpdate(s) {
      return s.needsUpdate = true;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })));
}; // The canvas houses this function, the scene. Scene is where the elements come together.


function SmokePuff(_ref2) {
  var geometry = _ref2.geometry,
      material = _ref2.material;
  var smokePuffRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // let tenToHundred = Math.random() * 100; // 10 - 99.99
  // let speed = 0.01 + Math.random() / 200; // 0.1 - 0.19
  // const cosWave = (Math.cos(tenToHundred) / 3) - 1.1;  // a cosign wave.  ~ 0.5 - 1.5

  var factor = 1 + Math.random() * 2; // ~ 1-3

  var xFactor = -100 + Math.random() * 200; // -100 - 100

  var yFactor = -100 + Math.random() * 200; // -100 - 100

  var zFactor = 10 + Math.random() * 10; //  10 - 20

  var getRandomArbitrary = function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  };

  var randomFactor = getRandomArbitrary(1.1, 2);
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useFrame"])(function (_ref3) {
    var clock = _ref3.clock; // tenToHundred += speed; // tenToHundred = tenToHundred + speed, plus it sets a unique new version of tenToHundred.
    // let delta = clock.getDelta();  // Change in clock. Something like 0.0001 - 0.0099

    var slowRotation = clock.elapsedTime * 0.017 * randomFactor + xFactor; // starts at ~0.0001 + xFactor and goes slow

    var slowGrowth = Math.tanh(clock.elapsedTime / 18) + 3;
    smokePuffRef.current.scale.set(slowGrowth, slowGrowth, 2);
    smokePuffRef.current.rotation.z = slowRotation;
    smokePuffRef.current.position.set(xFactor * factor, yFactor * factor, zFactor // xFactor + Math.cos((tenToHundred/ 30) * factor) + (Math.sin(tenToHundred* 1) * factor) / 10,
    // yFactor + Math.sin((tenToHundred/ 20) * factor) + (Math.cos(tenToHundred* 2) * factor) / 10,
    // zFactor + Math.cos((tenToHundred/ 10) * factor) + (Math.sin(tenToHundred* 3) * factor) / 20
    );
  });
  return __jsx("mesh", {
    ref: smokePuffRef,
    material: material,
    geometry: geometry,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  });
}

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Lighting, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx("planeGeometry", {
    ref: geometryRef,
    attach: "geometry",
    args: [200, 200],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx("meshLambertMaterial", {
    ref: materialRef,
    attach: "material",
    color: "#ccbbee",
    transparent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("primitive", {
    attach: "map",
    object: texture,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })), geometry && new Array(33).fill().map(function (_, index) {
    return __jsx(SmokePuff, {
      key: index,
      material: material,
      geometry: geometry,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    });
  }));
}; // This is the canvas. It's the lowest level element in the three/webGl chain


var CanvasicalSmoke = function CanvasicalSmoke() {
  // const particleCount = 3;
  // const particleArray = [{ id: 0, x: 0, y: 0, z: 2 }];
  // useEffect(() => {
  //     if (particleArray.length === particleCount) {
  //         return null;
  //     } else {
  //         for (let i = 0; i <= particleCount; i++) {
  //             particleArray.push({
  //                 id: particleArray[i].id + 1,
  //                 x: particleArray[i].x + 1,
  //                 y: particleArray[i].y + 1,
  //                 z: 2
  //             });
  //         }
  //     }
  // }, [particleArray]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["Canvas"], {
    className: "container block__three-container",
    camera: {
      fov: 75,
      aspect: 0.5,
      near: 1,
      far: 10000,
      position: [0, 0, 600]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(GenerateSmoke, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), __jsx(Text, {
    opacity: top.interpolate([0, 200], [1, 0]),
    position: top.interpolate(function (top) {
      return [0, -1 + top / 200, 0];
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "lorem"), __jsx(Text, {
    position: top.interpolate(function (top) {
      return [0, -20 + top * 10 / scrollMax * 2, 0];
    }),
    color: "black",
    fontSize: 150,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Ipsum")));
};

/* harmony default export */ __webpack_exports__["default"] = (CanvasicalSmoke); // // Creates a fullscreen colored plane
// const Plane = () => {
//     return (
//         <mesh >
//             <planeGeometry  attach="geometry"  args={[ 32, 32, 32, 32 ]} />
//             <meshPhysicalMaterial  attach="material"  color="#ffffff"  />
//         </mesh>
//     )
// }
// // A light bar
// const LightBar = () => {
//     // const lightBar = useRef();
//     return (
//         <>
//             <mesh
//                 // ref={lightBar}
//             >
//                 <boxBufferGeometry attach="geometry" args={[ 0.5, 20, 1 ]} />
//                 <meshBasicMaterial attach="material" color="lightblue" />
//             </mesh>
//         </>
//     )
// }

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/core-js/library/fn/object/values.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.values.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/cxs/dist/index.js":
false,

/***/ "./node_modules/performance-now/lib/performance-now.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/raf/index.js":
false,

/***/ "./node_modules/react-fast-compare/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/react-motion/lib/Motion.js":
false,

/***/ "./node_modules/react-motion/lib/StaggeredMotion.js":
false,

/***/ "./node_modules/react-motion/lib/TransitionMotion.js":
false,

/***/ "./node_modules/react-motion/lib/mapToZero.js":
false,

/***/ "./node_modules/react-motion/lib/mergeDiff.js":
false,

/***/ "./node_modules/react-motion/lib/presets.js":
false,

/***/ "./node_modules/react-motion/lib/react-motion.js":
false,

/***/ "./node_modules/react-motion/lib/reorderKeys.js":
false,

/***/ "./node_modules/react-motion/lib/shouldStopAnimation.js":
false,

/***/ "./node_modules/react-motion/lib/spring.js":
false,

/***/ "./node_modules/react-motion/lib/stepper.js":
false,

/***/ "./node_modules/react-motion/lib/stripStyle.js":
false,

/***/ "./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js":
false,

/***/ "./node_modules/react-spring/three.js":
/*!********************************************!*\
  !*** ./node_modules/react-spring/three.js ***!
  \********************************************/
/*! exports provided: apply, update, config, animated, a, interpolate, Globals, useSpring, useTrail, useTransition, useChain, useSprings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_25__);



























var Animated =
/*#__PURE__*/
function () {
  function Animated() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_19__["default"])(this, Animated);

    this.payload = void 0;
    this.children = [];
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_20__["default"])(Animated, [{
    key: "getAnimatedValue",
    value: function getAnimatedValue() {
      return this.getValue();
    }
  }, {
    key: "getPayload",
    value: function getPayload() {
      return this.payload || this;
    }
  }, {
    key: "attach",
    value: function attach() {}
  }, {
    key: "detach",
    value: function detach() {}
  }, {
    key: "getChildren",
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      if (this.children.length === 0) this.attach();
      this.children.push(child);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var index = this.children.indexOf(child);
      this.children.splice(index, 1);
      if (this.children.length === 0) this.detach();
    }
  }]);

  return Animated;
}();

var AnimatedArray =
/*#__PURE__*/
function (_Animated) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_18__["default"])(AnimatedArray, _Animated);

  function AnimatedArray() {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_19__["default"])(this, AnimatedArray);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_15__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_16__["default"])(AnimatedArray).apply(this, arguments));
    _this2.payload = [];

    _this2.attach = function () {
      return _this2.payload.forEach(function (p) {
        return p instanceof Animated && p.addChild(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_17__["default"])(_this2));
      });
    };

    _this2.detach = function () {
      return _this2.payload.forEach(function (p) {
        return p instanceof Animated && p.removeChild(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_17__["default"])(_this2));
      });
    };

    return _this2;
  }

  return AnimatedArray;
}(Animated);

var AnimatedObject =
/*#__PURE__*/
function (_Animated2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_18__["default"])(AnimatedObject, _Animated2);

  function AnimatedObject() {
    var _this3;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_19__["default"])(this, AnimatedObject);

    _this3 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_15__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_16__["default"])(AnimatedObject).apply(this, arguments));
    _this3.payload = {};

    _this3.attach = function () {
      return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_14___default()(_this3.payload).forEach(function (s) {
        return s instanceof Animated && s.addChild(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_17__["default"])(_this3));
      });
    };

    _this3.detach = function () {
      return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_14___default()(_this3.payload).forEach(function (s) {
        return s instanceof Animated && s.removeChild(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_17__["default"])(_this3));
      });
    };

    return _this3;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_20__["default"])(AnimatedObject, [{
    key: "getValue",
    value: function getValue(animated) {
      if (animated === void 0) {
        animated = false;
      }

      var payload = {};

      for (var key in this.payload) {
        var value = this.payload[key];
        if (animated && !(value instanceof Animated)) continue;
        payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
      }

      return payload;
    }
  }, {
    key: "getAnimatedValue",
    value: function getAnimatedValue() {
      return this.getValue(true);
    }
  }]);

  return AnimatedObject;
}(Animated);

var applyAnimatedValues;

function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn: fn,
    transform: transform
  };
}

var colorNames;

function injectColorNames(names) {
  colorNames = names;
}

var requestFrame = function requestFrame(cb) {
  return true ? window.requestAnimationFrame(cb) : undefined;
};

var cancelFrame = function cancelFrame(id) {
   true && window.cancelAnimationFrame(id);
};

function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}

var interpolation;

function injectStringInterpolator(fn) {
  interpolation = fn;
}

var now = function now() {
  return _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_13___default()();
};

function injectNow(nowFn) {
  now = nowFn;
}

var defaultElement;

function injectDefaultElement(el) {
  defaultElement = el;
}

var animatedApi = function animatedApi(node) {
  return node.current;
};

function injectAnimatedApi(fn) {
  animatedApi = fn;
}

var createAnimatedStyle;

function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}

var manualFrameloop;

function injectManualFrameloop(callback) {
  manualFrameloop = callback;
}

var Globals =
/*#__PURE__*/
_babel_runtime_corejs2_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_12___default()({
  get applyAnimatedValues() {
    return applyAnimatedValues;
  },

  injectApplyAnimatedValues: injectApplyAnimatedValues,

  get colorNames() {
    return colorNames;
  },

  injectColorNames: injectColorNames,

  get requestFrame() {
    return requestFrame;
  },

  get cancelFrame() {
    return cancelFrame;
  },

  injectFrame: injectFrame,

  get interpolation() {
    return interpolation;
  },

  injectStringInterpolator: injectStringInterpolator,

  get now() {
    return now;
  },

  injectNow: injectNow,

  get defaultElement() {
    return defaultElement;
  },

  injectDefaultElement: injectDefaultElement,

  get animatedApi() {
    return animatedApi;
  },

  injectAnimatedApi: injectAnimatedApi,

  get createAnimatedStyle() {
    return createAnimatedStyle;
  },

  injectCreateAnimatedStyle: injectCreateAnimatedStyle,

  get manualFrameloop() {
    return manualFrameloop;
  },

  injectManualFrameloop: injectManualFrameloop
});

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_11___default()(range)) {
    return createInterpolator({
      range: range,
      output: output,
      extrapolate: extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  var config = range;
  var outputRange = config.output;
  var inputRange = config.range || [0, 1];
  var extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  var extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  var easing = config.easing || function (t) {
    return t;
  };

  return function (input) {
    var range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  var result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) break;
  }

  return i - 1;
}

var AnimatedInterpolation =
/*#__PURE__*/
function (_AnimatedArray) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_18__["default"])(AnimatedInterpolation, _AnimatedArray);

  function AnimatedInterpolation(parents, range, output, extrapolate) {
    var _this4;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_19__["default"])(this, AnimatedInterpolation);

    _this4 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_15__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_16__["default"])(AnimatedInterpolation).call(this));
    _this4.calc = void 0;
    _this4.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_11___default()(parents) ? parents : [parents];
    _this4.calc = createInterpolator(range, output, extrapolate);
    return _this4;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_20__["default"])(AnimatedInterpolation, [{
    key: "getValue",
    value: function getValue() {
      return this.calc.apply(this, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_10__["default"])(this.payload.map(function (value) {
        return value.getValue();
      })));
    }
  }, {
    key: "updateConfig",
    value: function updateConfig(range, output, extrapolate) {
      this.calc = createInterpolator(range, output, extrapolate);
    }
  }, {
    key: "interpolate",
    value: function interpolate(range, output, extrapolate) {
      return new AnimatedInterpolation(this, range, output, extrapolate);
    }
  }]);

  return AnimatedInterpolation;
}(AnimatedArray);

var interpolate$1 = function interpolate$1(parents, range, output) {
  return parents && new AnimatedInterpolation(parents, range, output);
};

var is = {
  arr: _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_11___default.a,
  obj: function obj(a) {
    return Object.prototype.toString.call(a) === '[object Object]';
  },
  fun: function fun(a) {
    return typeof a === 'function';
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  num: function num(a) {
    return typeof a === 'number';
  },
  und: function und(a) {
    return a === void 0;
  },
  nul: function nul(a) {
    return a === null;
  },
  set: function set(a) {
    return a instanceof _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9___default.a;
  },
  map: function map(a) {
    return a instanceof _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_8___default.a;
  },
  equ: function equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(a).length + _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(b).length === 0) return true;
    var i;

    for (i in a) {
      if (!(i in b)) return false;
    }

    for (i in b) {
      if (a[i] !== b[i]) return false;
    }

    return is.und(i) ? a === b : true;
  }
};

function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return function (object) {
    return (is.arr(object) ? object : _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(object)).reduce(function (acc, element) {
      var key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
      acc[key] = target(key);
      return acc;
    }, target);
  };
}

function useForceUpdate() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_25__["useState"])(false),
      f = _useState[1];

  var forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_25__["useCallback"])(function () {
    return f(function (v) {
      return !v;
    });
  }, []);
  return forceUpdate;
}

function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}

function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}

function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj.apply(void 0, args) : obj;
}

function getForwardProps(props) {
  var to = props.to,
      from = props.from,
      config = props.config,
      onStart = props.onStart,
      onRest = props.onRest,
      onFrame = props.onFrame,
      children = props.children,
      reset = props.reset,
      reverse = props.reverse,
      force = props.force,
      immediate = props.immediate,
      delay = props.delay,
      attach = props.attach,
      destroyed = props.destroyed,
      interpolateTo = props.interpolateTo,
      ref = props.ref,
      lazy = props.lazy,
      forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_24__["default"])(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  var forward = getForwardProps(props);
  if (is.und(forward)) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({
    to: forward
  }, props);

  var rest = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(props).reduce(function (a, k) {
    return !is.und(forward[k]) ? a : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, a, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, k, props[k]));
  }, {});

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({
    to: forward
  }, rest);
}

function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}
/**
 * Wraps the `style` property with `AnimatedStyle`.
 */


var AnimatedProps =
/*#__PURE__*/
function (_AnimatedObject) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_18__["default"])(AnimatedProps, _AnimatedObject);

  function AnimatedProps(props, callback) {
    var _this5;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_19__["default"])(this, AnimatedProps);

    _this5 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_15__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_16__["default"])(AnimatedProps).call(this));
    _this5.update = void 0;
    _this5.payload = !props.style ? props : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, props, {
      style: createAnimatedStyle(props.style)
    });
    _this5.update = callback;

    _this5.attach();

    return _this5;
  }

  return AnimatedProps;
}(AnimatedObject);

var isFunctionComponent = function isFunctionComponent(val) {
  return is.fun(val) && !(val.prototype instanceof react__WEBPACK_IMPORTED_MODULE_25___default.a.Component);
};

var createAnimatedComponent = function createAnimatedComponent(Component) {
  var AnimatedComponent = Object(react__WEBPACK_IMPORTED_MODULE_25__["forwardRef"])(function (props, ref) {
    var forceUpdate = useForceUpdate();
    var mounted = Object(react__WEBPACK_IMPORTED_MODULE_25__["useRef"])(true);
    var propsAnimated = Object(react__WEBPACK_IMPORTED_MODULE_25__["useRef"])(null);
    var node = Object(react__WEBPACK_IMPORTED_MODULE_25__["useRef"])(null);
    var attachProps = Object(react__WEBPACK_IMPORTED_MODULE_25__["useCallback"])(function (props) {
      var oldPropsAnimated = propsAnimated.current;

      var callback = function callback() {
        var didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_25__["useEffect"])(function () {
      return function () {
        mounted.current = false;
        propsAnimated.current && propsAnimated.current.detach();
      };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_25__["useImperativeHandle"])(ref, function () {
      return animatedApi(node, mounted, forceUpdate);
    });
    attachProps(props);

    var _getValue = propsAnimated.current.getValue(),
        scrollTop = _getValue.scrollTop,
        scrollLeft = _getValue.scrollLeft,
        animatedProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_24__["default"])(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    var refFn = isFunctionComponent(Component) ? undefined : function (childRef) {
      return node.current = handleRef(childRef, ref);
    };
    return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
}; // http://www.w3.org/TR/css3-color/#svg-color


var colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};
var config = {
  "default": {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
}; // const INTEGER = '[-+]?\\d+';

var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

var rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;
/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  var _int = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(str, 10);

  if (_int < 0) return 0;
  if (_int > 255) return 255;
  return _int;
}

function parse360(str) {
  var _int2 = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4___default()(str);

  return (_int2 % 360 + 360) % 360 / 360;
}

function parse1(str) {
  var num = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4___default()(str);

  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var _int3 = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_4___default()(str);

  if (_int3 < 0) return 0;
  if (_int3 > 100) return 1;
  return _int3 / 100;
}

function colorToRgba(input) {
  var int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  var r = (int32Color & 0xff000000) >>> 24;
  var g = (int32Color & 0x00ff0000) >>> 16;
  var b = (int32Color & 0x0000ff00) >>> 8;
  var a = (int32Color & 0x000000ff) / 255;
  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


var stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

var colorNamesRegex = new RegExp("(".concat(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(colors).join('|'), ")"), 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

var createStringInterpolator = function createStringInterpolator(config) {
  // Replace colors with rgba
  var outputRange = config.output.map(function (rangeValue) {
    return rangeValue.replace(colorRegex, colorToRgba);
  }).map(function (rangeValue) {
    return rangeValue.replace(colorNamesRegex, colorToRgba);
  });
  var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
    return [];
  });
  outputRange.forEach(function (value) {
    value.match(stringShapeRegex).forEach(function (number, i) {
      return outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex).map(function (_value, i) {
    return createInterpolator(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, config, {
      output: outputRanges[i]
    }));
  });
  return function (input) {
    var i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, function () {
      return interpolations[i++](input);
    }) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, function (_, p1, p2, p3, p4) {
      return "rgba(".concat(Math.round(p1), ", ").concat(Math.round(p2), ", ").concat(Math.round(p3), ", ").concat(p4, ")");
    });
  };
};
/** API
 *  useChain(references, timeSteps, timeFrame)
 */


function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  var previous = Object(react__WEBPACK_IMPORTED_MODULE_25__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_25__["useEffect"])(function () {
    if (is.equ(refs, previous.current)) refs.forEach(function (_ref) {
      var current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach(function (_ref2, index) {
        var current = _ref2.current;

        if (current) {
          var ctrls = current.controllers;

          if (ctrls.length) {
            var t = timeFrame * timeSteps[index];
            ctrls.forEach(function (ctrl) {
              ctrl.queue = ctrl.queue.map(function (e) {
                return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, e, {
                  delay: e.delay + t
                });
              });
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce(function (q, _ref3, rI) {
      var current = _ref3.current;
      return q = q.then(function () {
        return current.start();
      });
    }, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a.resolve());
    previous.current = refs;
  });
}
/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */


function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(function (child) {
      return addAnimatedStyles(child, styles);
    });
  }
}

var AnimatedValue =
/*#__PURE__*/
function (_Animated3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_18__["default"])(AnimatedValue, _Animated3);

  function AnimatedValue(_value) {
    var _this6;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_19__["default"])(this, AnimatedValue);

    var _this;

    _this6 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_15__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_16__["default"])(AnimatedValue).call(this));
    _this = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_17__["default"])(_this6);
    _this6.animatedStyles = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9___default.a();
    _this6.value = void 0;
    _this6.startPosition = void 0;
    _this6.lastPosition = void 0;
    _this6.lastVelocity = void 0;
    _this6.startTime = void 0;
    _this6.lastTime = void 0;
    _this6.done = false;

    _this6.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    _this6.value = _value;
    _this6.startPosition = _value;
    _this6.lastPosition = _value;
    return _this6;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_20__["default"])(AnimatedValue, [{
    key: "flush",
    value: function flush() {
      if (this.animatedStyles.size === 0) {
        addAnimatedStyles(this, this.animatedStyles);
      }

      this.animatedStyles.forEach(function (animatedStyle) {
        return animatedStyle.update();
      });
    }
  }, {
    key: "clearStyles",
    value: function clearStyles() {
      this.animatedStyles.clear();
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "interpolate",
    value: function interpolate(range, output, extrapolate) {
      return new AnimatedInterpolation(this, range, output, extrapolate);
    }
  }]);

  return AnimatedValue;
}(Animated);

var AnimatedValueArray =
/*#__PURE__*/
function (_AnimatedArray2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_18__["default"])(AnimatedValueArray, _AnimatedArray2);

  function AnimatedValueArray(values) {
    var _this7;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_19__["default"])(this, AnimatedValueArray);

    _this7 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_15__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_16__["default"])(AnimatedValueArray).call(this));
    _this7.payload = values.map(function (n) {
      return new AnimatedValue(n);
    });
    return _this7;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_20__["default"])(AnimatedValueArray, [{
    key: "setValue",
    value: function setValue(value, flush) {
      var _this8 = this;

      if (flush === void 0) {
        flush = true;
      }

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_11___default()(value)) {
        if (value.length === this.payload.length) {
          value.forEach(function (v, i) {
            return _this8.payload[i].setValue(v, flush);
          });
        }
      } else {
        this.payload.forEach(function (p) {
          return p.setValue(value, flush);
        });
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.payload.map(function (v) {
        return v.getValue();
      });
    }
  }, {
    key: "interpolate",
    value: function interpolate(range, output) {
      return new AnimatedInterpolation(this, range, output);
    }
  }]);

  return AnimatedValueArray;
}(AnimatedArray);

var active = false;
var controllers = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9___default.a();

var update = function update() {
  if (!active) return false;
  var time = now();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(controllers), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var controller = _step.value;
      var isActive = false;

      for (var configIdx = 0; configIdx < controller.configs.length; configIdx++) {
        var _config = controller.configs[configIdx];
        var endOfAnimation = void 0,
            lastTime = void 0;

        for (var valIdx = 0; valIdx < _config.animatedValues.length; valIdx++) {
          var animation = _config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

          if (animation.done) continue;
          var from = _config.fromValues[valIdx];
          var to = _config.toValues[valIdx];
          var position = animation.lastPosition;
          var isAnimated = to instanceof Animated;
          var velocity = _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_11___default()(_config.initialVelocity) ? _config.initialVelocity[valIdx] : _config.initialVelocity;
          if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

          if (_config.immediate) {
            animation.setValue(to);
            animation.done = true;
            continue;
          } // Break animation when string values are involved


          if (typeof from === 'string' || typeof to === 'string') {
            animation.setValue(to);
            animation.done = true;
            continue;
          }

          if (_config.duration !== void 0) {
            /** Duration easing */
            position = from + _config.easing((time - animation.startTime) / _config.duration) * (to - from);
            endOfAnimation = time >= animation.startTime + _config.duration;
          } else if (_config.decay) {
            /** Decay easing */
            position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
            endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
            if (endOfAnimation) to = position;
          } else {
            /** Spring easing */
            lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
            velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : _config.initialVelocity; // If we lost a lot of frames just jump to the end.

            if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

            var numSteps = Math.floor(time - lastTime);

            for (var i = 0; i < numSteps; ++i) {
              var force = -_config.tension * (position - to);
              var damping = -_config.friction * velocity;
              var acceleration = (force + damping) / _config.mass;
              velocity = velocity + acceleration * 1 / 1000;
              position = position + velocity * 1 / 1000;
            } // Conditions for stopping the spring animation


            var isOvershooting = _config.clamp && _config.tension !== 0 ? from < to ? position > to : position < to : false;

            var isVelocity = Math.abs(velocity) <= _config.precision;

            var isDisplacement = _config.tension !== 0 ? Math.abs(to - position) <= _config.precision : true;
            endOfAnimation = isOvershooting || isVelocity && isDisplacement;
            animation.lastVelocity = velocity;
            animation.lastTime = time;
          } // Trails aren't done until their parents conclude


          if (isAnimated && !_config.toValues[valIdx].done) endOfAnimation = false;

          if (endOfAnimation) {
            // Ensure that we end up with a round value
            if (animation.value !== to) position = to;
            animation.done = true;
          } else isActive = true;

          animation.setValue(position);
          animation.lastPosition = position;
        } // Keep track of updated values only when necessary


        if (controller.props.onFrame) controller.values[_config.name] = _config.interpolation.getValue();
      } // Update callbacks in the end of the frame


      if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

      if (!isActive) {
        controllers["delete"](controller);
        controller.stop(true);
      }
    } // Loop over as long as there are controllers ...

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (controllers.size) {
    if (manualFrameloop) manualFrameloop();else requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

var _start = function start(controller) {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    if (manualFrameloop) requestFrame(manualFrameloop);else requestFrame(update);
  }
};

var stop = function stop(controller) {
  if (controllers.has(controller)) controllers["delete"](controller);
};

var G = 0;

var Controller =
/*#__PURE__*/
function () {
  function Controller() {
    var _this9 = this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_19__["default"])(this, Controller);

    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = function () {
      return _this9.interpolations;
    };

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_20__["default"])(Controller, [{
    key: "update",
    value: function update(args) {
      //this._id = n + this.id
      if (!args) return this; // Extract delay and the to-prop from props

      var _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref, ["delay", "to"]);

      if (is.arr(to) || is.fun(to)) {
        // If config is either a function or an array queue it up as is
        this.queue.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, props, {
          delay: delay,
          to: to
        }));
      } else if (to) {
        // Otherwise go through each key since it could be delayed individually
        var ops = {};

        _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(to).forEach(function (_ref2) {
          var k = _ref2[0],
              v = _ref2[1]; // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props

          var entry = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({
            to: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, k, v),
            delay: callProp(delay, k)
          }, props);

          var previous = ops[entry.delay] && ops[entry.delay].to;
          ops[entry.delay] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, ops[entry.delay], entry, {
            to: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, previous, entry.to)
          });
        });

        this.queue = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_14___default()(ops);
      } // Sort queue, so that async calls go last


      this.queue = this.queue.sort(function (a, b) {
        return a.delay - b.delay;
      }); // Diff the reduced props immediately (they'll contain the from-prop and some config)

      this.diff(props);
      return this;
    }
    /** start(onEnd)
     *  This function either executes a queue, if present, or starts the frameloop, which animates */

  }, {
    key: "start",
    value: function start(onEnd) {
      var _this10 = this;

      // If a queue is present we must excecute it
      if (this.queue.length) {
        this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

        if (this.localQueue) {
          this.localQueue.forEach(function (_ref3) {
            var _ref3$from = _ref3.from,
                from = _ref3$from === void 0 ? {} : _ref3$from,
                _ref3$to = _ref3.to,
                to = _ref3$to === void 0 ? {} : _ref3$to;
            if (is.obj(from)) _this10.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, from, _this10.merged);
            if (is.obj(to)) _this10.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, _this10.merged, to);
          });
        } // The guid helps us tracking frames, a new queue over an old one means an override
        // We discard async calls in that caseÍ


        var local = this.local = ++this.guid;
        var queue = this.localQueue = this.queue;
        this.queue = []; // Go through each entry and execute it

        queue.forEach(function (_ref4, index) {
          var delay = _ref4.delay,
              props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref4, ["delay"]);

          var cb = function cb(finished) {
            if (index === queue.length - 1 && local === _this10.guid && finished) {
              _this10.idle = true;
              if (_this10.props.onRest) _this10.props.onRest(_this10.merged);
            }

            if (onEnd) onEnd();
          }; // Entries can be delayed, ansyc or immediate


          var async = is.arr(props.to) || is.fun(props.to);

          if (delay) {
            setTimeout(function () {
              if (local === _this10.guid) {
                if (async) _this10.runAsync(props, cb);else _this10.diff(props).start(cb);
              }
            }, delay);
          } else if (async) _this10.runAsync(props, cb);else _this10.diff(props).start(cb);
        });
      } // Otherwise we kick of the frameloop
      else {
          if (is.fun(onEnd)) this.listeners.push(onEnd);
          if (this.props.onStart) this.props.onStart();

          _start(this);
        }

      return this;
    }
  }, {
    key: "stop",
    value: function stop(finished) {
      this.listeners.forEach(function (onEnd) {
        return onEnd(finished);
      });
      this.listeners = [];
      return this;
    }
    /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */

  }, {
    key: "pause",
    value: function pause(finished) {
      this.stop(true);
      if (finished) stop(this);
      return this;
    }
  }, {
    key: "runAsync",
    value: function runAsync(_ref5, onEnd) {
      var _this11 = this;

      var _this = this;

      var delay = _ref5.delay,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref5, ["delay"]);

      var local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
      // If the view relies on certain values "from" has to be present

      var queue = _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(undefined);

      if (is.arr(props.to)) {
        var _loop = function _loop(i) {
          var index = i;

          var fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, props, interpolateTo(props.to[index]));

          if (is.arr(fresh.config)) fresh.config = fresh.config[index];
          queue = queue.then(function () {
            //this.stop()
            if (local === _this11.guid) return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (r) {
              return _this11.diff(fresh).start(r);
            });
          });
        };

        for (var i = 0; i < props.to.length; i++) {
          _loop(i);
        }
      } else if (is.fun(props.to)) {
        var index = 0;
        var last;
        queue = queue.then(function () {
          return props.to( // next(props)
          function (p) {
            var fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, props, interpolateTo(p));

            if (is.arr(fresh.config)) fresh.config = fresh.config[index];
            index++; //this.stop()

            if (local === _this11.guid) return last = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (r) {
              return _this11.diff(fresh).start(r);
            });
            return;
          }, // cancel()
          function (finished) {
            if (finished === void 0) {
              finished = true;
            }

            return _this.stop(finished);
          }).then(function () {
            return last;
          });
        });
      }

      queue.then(onEnd);
    }
  }, {
    key: "diff",
    value: function diff(props) {
      var _this12 = this;

      this.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, this.props, props);
      var _this$props = this.props,
          _this$props$from = _this$props.from,
          from = _this$props$from === void 0 ? {} : _this$props$from,
          _this$props$to = _this$props.to,
          to = _this$props$to === void 0 ? {} : _this$props$to,
          _this$props$config = _this$props.config,
          config = _this$props$config === void 0 ? {} : _this$props$config,
          reverse = _this$props.reverse,
          attach = _this$props.attach,
          reset = _this$props.reset,
          immediate = _this$props.immediate; // Reverse values when requested

      if (reverse) {
        var _ref6 = [to, from];
        from = _ref6[0];
        to = _ref6[1];
      } // This will collect all props that were ever set, reset merged props when necessary


      this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, from, this.merged, to);
      this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

      var target = attach && attach(this); // Reduces input { name: value } pairs into animated values

      this.animations = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(this.merged).reduce(function (acc, _ref7) {
        var name = _ref7[0],
            value = _ref7[1]; // Issue cached entries, except on reset

        var entry = acc[name] || {}; // Figure out what the value is supposed to be

        var isNumber = is.num(value);
        var isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
        var isArray = is.arr(value);
        var isInterpolation = !isNumber && !isArray && !isString;
        var fromValue = !is.und(from[name]) ? from[name] : value;
        var toValue = isNumber || isArray ? value : isString ? value : 1;
        var toConfig = callProp(config, name);
        if (target) toValue = target.animations[name].parent;
        var parent = entry.parent,
            interpolation$$1 = entry.interpolation,
            toValues = toArray(target ? toValue.getPayload() : toValue),
            animatedValues;
        var newValue = value;
        if (isInterpolation) newValue = interpolation({
          range: [0, 1],
          output: [value, value]
        })(1);
        var currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

        var isFirst = is.und(parent);
        var isActive = !isFirst && entry.animatedValues.some(function (v) {
          return !v.done;
        });
        var currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
        var hasNewGoal = !is.equ(newValue, entry.previous);
        var hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
        // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

        if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
          // Convert regular values into animated values, ALWAYS re-use if possible
          if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
            var prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
            prev = prev !== void 0 && !reset ? prev : fromValue;

            if (entry.parent) {
              parent = entry.parent;
              parent.setValue(0, false);
            } else parent = new AnimatedValue(0);

            var range = {
              output: [prev, value]
            };

            if (entry.interpolation) {
              interpolation$$1 = entry.interpolation;
              entry.interpolation.updateConfig(range);
            } else interpolation$$1 = parent.interpolate(range);
          }
          toValues = toArray(target ? toValue.getPayload() : toValue);
          animatedValues = toArray(parent.getPayload());
          if (reset && !isInterpolation) parent.setValue(fromValue, false);
          _this12.hasChanged = true; // Reset animated values

          animatedValues.forEach(function (value) {
            value.startPosition = value.value;
            value.lastPosition = value.value;
            value.lastVelocity = isActive ? value.lastVelocity : undefined;
            value.lastTime = isActive ? value.lastTime : undefined;
            value.startTime = now();
            value.done = false;
            value.animatedStyles.clear();
          }); // Set immediate values

          if (callProp(immediate, name)) {
            parent.setValue(isInterpolation ? toValue : value, false);
          }

          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, acc, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, entry, {
            name: name,
            parent: parent,
            interpolation: interpolation$$1,
            animatedValues: animatedValues,
            toValues: toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, function (t) {
              return t;
            }),
            decay: toConfig.decay
          })));
        } else {
          if (!currentValueDiffersFromGoal) {
            // So ... the current target value (newValue) appears to be different from the previous value,
            // which normally constitutes an update, but the actual value (currentValue) matches the target!
            // In order to resolve this without causing an animation update we silently flag the animation as done,
            // which it technically is. Interpolations also needs a config update with their target set to 1.
            if (isInterpolation) {
              parent.setValue(1, false);
              interpolation$$1.updateConfig({
                output: [newValue, newValue]
              });
            }

            parent.done = true;
            _this12.hasChanged = true;
            return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, acc, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, acc[name], {
              previous: newValue
            })));
          }

          return acc;
        }
      }, this.animations);

      if (this.hasChanged) {
        // Make animations available to frameloop
        this.configs = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_14___default()(this.animations);
        this.values = {};
        this.interpolations = {};

        for (var key in this.animations) {
          this.interpolations[key] = this.animations[key].interpolation;
          this.values[key] = this.animations[key].interpolation.getValue();
        }
      }

      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stop();
      this.props = {};
      this.merged = {};
      this.animations = {};
      this.interpolations = {};
      this.values = {};
      this.configs = [];
      this.local = 0;
    }
  }]);

  return Controller;
}();
/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */


var useSprings = function useSprings(length, props) {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_25__["useRef"])(false);
  var ctrl = Object(react__WEBPACK_IMPORTED_MODULE_25__["useRef"])();
  var isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_25__["useMemo"])(function () {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(function (c) {
        return c.destroy();
      });
      ctrl.current = undefined;
    }

    var ref;
    return [new Array(length).fill().map(function (_, i) {
      var ctrl = new Controller();
      var newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
      controllers = _useMemo[0],
      ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  var api = Object(react__WEBPACK_IMPORTED_MODULE_25__["useImperativeHandle"])(ref, function () {
    return {
      start: function start() {
        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a.all(ctrl.current.map(function (c) {
          return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (r) {
            return c.start(r);
          });
        }));
      },
      stop: function stop(finished) {
        return ctrl.current.forEach(function (c) {
          return c.stop(finished);
        });
      },

      get controllers() {
        return ctrl.current;
      }

    };
  }); // This function updates the controllers

  var updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_25__["useMemo"])(function () {
    return function (updateProps) {
      return ctrl.current.map(function (c, i) {
        c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
        if (!ref) c.start();
      });
    };
  }, [length]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_25__["useEffect"])(function () {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(function (c) {
      return c.start();
    });
  }); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_25__["useEffect"])(function () {
    return mounted.current = true, function () {
      return ctrl.current.forEach(function (c) {
        return c.destroy();
      });
    };
  }, []); // Return animated props, or, anim-props + the update-setter above

  var propValues = ctrl.current.map(function (c) {
    return c.getValues();
  });
  return isFn ? [propValues, updateCtrl, function (finished) {
    return ctrl.current.forEach(function (c) {
      return c.pause(finished);
    });
  }] : propValues;
};
/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */


var useSpring = function useSpring(props) {
  var isFn = is.fun(props);

  var _useSprings = useSprings(1, isFn ? props : [props]),
      result = _useSprings[0],
      set = _useSprings[1],
      pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};
/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */


var useTrail = function useTrail(length, props) {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_25__["useRef"])(false);
  var isFn = is.fun(props);
  var updateProps = callProp(props);
  var instances = Object(react__WEBPACK_IMPORTED_MODULE_25__["useRef"])();

  var _useSprings = useSprings(length, function (i, ctrl) {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && function () {
        return instances.current[i - 1];
      }
    });
  }),
      result = _useSprings[0],
      set = _useSprings[1],
      pause = _useSprings[2]; // Set up function to update controller


  var updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_25__["useMemo"])(function () {
    return function (props) {
      return set(function (i, ctrl) {
        var last = props.reverse ? i === 0 : length - 1 === i;
        var attachIdx = props.reverse ? i + 1 : i - 1;
        var attachController = instances.current[attachIdx];
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, props, {
          config: callProp(props.config || updateProps.config, i),
          attach: attachController && function () {
            return attachController;
          }
        });
      });
    };
  }, [length, updateProps.reverse]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_25__["useEffect"])(function () {
    return void (mounted.current && !isFn && updateCtrl(props));
  }); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_25__["useEffect"])(function () {
    return void (mounted.current = true);
  }, []);
  return isFn ? [result, updateCtrl, pause] : result;
};
/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */


var guid = 0;
var ENTER = 'enter';
var LEAVE = 'leave';
var UPDATE = 'update';

var mapKeys = function mapKeys(items, keys) {
  return (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);
};

var get = function get(props) {
  var items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? function (item) {
    return item;
  } : _props$keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_24__["default"])(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({
    items: items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({
    items: input,
    keys: keyTransform || function (i) {
      return i;
    }
  }, config);

  var _get = get(props),
      _get$lazy = _get.lazy,
      lazy = _get$lazy === void 0 ? false : _get$lazy,
      _get$unique = _get.unique,
      _get$reset = _get.reset,
      reset = _get$reset === void 0 ? false : _get$reset,
      enter = _get.enter,
      leave = _get.leave,
      update = _get.update,
      onDestroyed = _get.onDestroyed,
      keys = _get.keys,
      items = _get.items,
      onFrame = _get.onFrame,
      _onRest = _get.onRest,
      onStart = _get.onStart,
      ref = _get.ref,
      extra = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_24__["default"])(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  var forceUpdate = useForceUpdate();
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_25__["useRef"])(false);
  var state = Object(react__WEBPACK_IMPORTED_MODULE_25__["useRef"])({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_8___default.a(),
    forceUpdate: forceUpdate
  });
  Object(react__WEBPACK_IMPORTED_MODULE_25__["useImperativeHandle"])(props.ref, function () {
    return {
      start: function start() {
        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a.all(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(state.current.instances).map(function (_ref) {
          var c = _ref[1];
          return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (r) {
            return c.start(r);
          });
        }));
      },
      stop: function stop(finished) {
        return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(state.current.instances).forEach(function (_ref2) {
          var c = _ref2[1];
          return c.stop(finished);
        });
      },

      get controllers() {
        return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(state.current.instances).map(function (_ref3) {
          var c = _ref3[1];
          return c;
        });
      }

    };
  }); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(function (transition) {
      var slot = transition.slot,
          from = transition.from,
          to = transition.to,
          config = transition.config,
          trail = transition.trail,
          key = transition.key,
          item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      var ctrl = state.current.instances.get(key);

      var newProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, extra, {
        to: to,
        from: from,
        config: config,
        ref: ref,
        onRest: function onRest(values) {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            var curInstances = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(state.current.instances);

            var _active = curInstances.some(function (_ref4) {
              var c = _ref4[1];
              return !c.idle;
            });

            if (!_active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && function () {
          return onStart(item, slot);
        },
        onFrame: onFrame && function (values) {
          return onFrame(item, slot, values);
        },
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_25__["useEffect"])(function () {
    state.current.mounted = mounted.current = true;
    return function () {
      state.current.mounted = mounted.current = false;

      _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(state.current.instances).map(function (_ref5) {
        var c = _ref5[1];
        return c.destroy();
      });

      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map(function (_ref6) {
    var item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item: item,
      key: key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  var deleted = state.current.deleted;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop2 = function _loop2() {
      var _ref7 = _step2.value;
      var key = _ref7.key;

      var filter = function filter(t) {
        return t.key !== key;
      };

      if (is.und(filterKey) || filterKey === key) {
        state.current.instances["delete"](key);
        state.current.transitions = state.current.transitions.filter(filter);
        state.current.deleted = state.current.deleted.filter(filter);
      }
    };

    for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(deleted), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      _loop2();
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  var first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref8, ["first", "prevProps"]);

  var _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  var _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  var current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, state.current);

  var deleted = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_10__["default"])(state.deleted); // Compare next keys with current keys


  var currentKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(current);

  var currentSet = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9___default.a(currentKeys);
  var nextSet = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_9___default.a(keys);
  var added = keys.filter(function (item) {
    return !currentSet.has(item);
  });
  var removed = state.transitions.filter(function (item) {
    return !item.destroyed && !nextSet.has(item.originalKey);
  }).map(function (i) {
    return i.originalKey;
  });
  var updated = keys.filter(function (item) {
    return currentSet.has(item);
  });
  var delay = -trail;

  while (order.length) {
    var changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach(function (key, index) {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(function (d) {
              return d.originalKey === key;
            })) deleted = deleted.filter(function (t) {
              return t.originalKey !== key;
            });
            var keyIndex = keys.indexOf(key);
            var item = items[keyIndex];
            var slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot: slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item: item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(function (key) {
            var keyIndex = _keys.indexOf(key);

            var item = _items[keyIndex];
            var slot = LEAVE;
            deleted.unshift(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, current[key], {
              slot: slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(function (key) {
            var keyIndex = keys.indexOf(key);
            var item = items[keyIndex];
            var slot = UPDATE;
            current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, current[key], {
              item: item,
              slot: slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  var out = keys.map(function (key) {
    return current[key];
  }); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach(function (_ref9) {
    var left = _ref9.left,
        right = _ref9.right,
        item = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref9, ["left", "right"]);

    var pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(function (t) {
      return t.originalKey === left;
    })) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_10__["default"])(out.slice(0, pos)), [item], Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_10__["default"])(out.slice(pos)));
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_23__["default"])({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current: current,
    deleted: deleted,
    prevProps: props
  });
} // Extend animated with all the available THREE elements


var apply = merge(createAnimatedComponent);
var extendedAnimated = apply(three__WEBPACK_IMPORTED_MODULE_21__);
extendedAnimated.primitive = createAnimatedComponent('primitive');

if (react_three_fiber__WEBPACK_IMPORTED_MODULE_22__["addEffect"]) {
  // Add the update function as a global effect to react-three-fibers update loop
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_22__["addEffect"])(update); // Ping react-three-fiber, so that it will call react-springs update function as an effect

  injectManualFrameloop(function () {
    return Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_22__["invalidate"])();
  });
} // Set default native-element


injectDefaultElement('group'); // Use default interpolation (which includes numbers, strings, colors)

injectStringInterpolator(createStringInterpolator); // Inject color names, so that it will be able to deal with things like "peachpuff"

injectColorNames(colors); // This is how we teach react-spring to set props "natively", the api is (instance, props) => { ... }

injectApplyAnimatedValues(react_three_fiber__WEBPACK_IMPORTED_MODULE_22__["applyProps"], function (style) {
  return style;
});


/***/ }),

/***/ "./node_modules/react-text-loop/es/components/TextLoop.js":
false,

/***/ "./node_modules/react-text-loop/es/index.js":
false,

/***/ "./node_modules/react-text-loop/es/utils.js":
false,

/***/ "./node_modules/simple-icons-react-component/lib/SimpleIcon.js":
false,

/***/ "./node_modules/simple-icons-react-component/lib/index.js":
false,

/***/ "./node_modules/simple-icons/index.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false

})
//# sourceMappingURL=skills.js.f28a0fd7a8b124988d37.hot-update.js.map