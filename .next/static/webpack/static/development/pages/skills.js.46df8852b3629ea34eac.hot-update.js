webpackHotUpdate("static/development/pages/skills.js",{

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

var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/components/threejs-render/CanvasicalSmoke.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // Import and register postprocessing classes as three-native-elements for react-three-fiber
// They'll be available as native elements <effectComposer /> from then on ...




Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["extend"])({
  EffectComposer: _resources_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_4__["EffectComposer"],
  RenderPass: _resources_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_5__["RenderPass"],
  GlitchPass: _resources_postprocessing_GlitchPass__WEBPACK_IMPORTED_MODULE_6__["GlitchPass"]
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
      lineNumber: 39
    },
    __self: this
  }), __jsx("pointLight", {
    ref: light,
    distance: 50,
    intensity: 1.5,
    color: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }));
}; // The canvas houses this function, the scene. Scene is where the elements come together.


function SmokePuff(_ref) {
  var geometry = _ref.geometry,
      material = _ref.material,
      particleArray = _ref.particleArray;
  var smokePuffRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var tenToHundred = Math.random() * 100; // 10 - 99.99

  var speed = 0.01 + Math.random() / 200; // 0.1 - 0.19

  var factor = 1 + Math.random() * 2; // ~ 1-3

  var xFactor = -100 + Math.random() * 200; // -100 - 100

  var yFactor = -100 + Math.random() * 200; // -100 - 100

  var zFactor = 10 + Math.random() * 10; //  10 - 20

  var cosWave = Math.cos(tenToHundred) / 3 - 1.1; // a cosign wave.  ~ 0.5 - 1.5

  var getRandomArbitrary = function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  };

  var randomFactor = getRandomArbitrary(2, 3);
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useFrame"])(function (_ref2) {
    var clock = _ref2.clock;
    tenToHundred += speed; // tenToHundred = tenToHundred + speed, plus it sets a unique new version of tenToHundred.

    var delta = clock.getDelta(); // Change in clock. Something like 0.0001 - 0.0099

    var slowRotation = clock.elapsedTime * (delta + 0.017) * randomFactor + xFactor; // starts at ~0.0001 + xFactor and slowly increases

    var slowGrowth = Math.tanh(clock.elapsedTime / 18) + factor;
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
      lineNumber: 81
    },
    __self: this
  });
}

var GenerateSmoke = function GenerateSmoke(_ref3) {
  var particleArray = _ref3.particleArray;

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
      lineNumber: 92
    },
    __self: this
  }), __jsx("planeGeometry", {
    ref: geometryRef,
    attach: "geometry",
    args: [200, 200],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("meshLambertMaterial", {
    ref: materialRef,
    attach: "material",
    color: "#ccbbee",
    transparent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("primitive", {
    attach: "map",
    object: texture,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), geometry && new Array(20).fill().map(function (_, index) {
    return __jsx(SmokePuff, {
      key: index,
      material: material,
      geometry: geometry,
      particleArray: particleArray,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    });
  }));
}; // This is the canvas. It's the lowest level element in the three/webGl chain


var CanvasicalSmoke = function CanvasicalSmoke() {
  var particleCount = 3;
  var particleArray = [{
    id: 0,
    x: 0,
    y: 0,
    z: 2
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (particleArray.length === particleCount) {
      return null;
    } else {
      for (var i = 0; i <= particleCount; i++) {
        particleArray.push({
          id: particleArray[i].id + 1,
          x: particleArray[i].x + 1,
          y: particleArray[i].y + 1,
          z: 2
        });
      }
    }
  }, [particleArray]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["Canvas"], {
    className: "container block__three-container",
    camera: {
      fov: 75,
      aspect: 0.5,
      near: 1,
      far: 10000,
      position: [0, 0, 300]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(GenerateSmoke, {
    particleArray: particleArray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })));
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

/***/ })

})
//# sourceMappingURL=skills.js.46df8852b3629ea34eac.hot-update.js.map