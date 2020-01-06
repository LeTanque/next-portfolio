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
/* harmony import */ var _TextLoop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TextLoop */ "./components/TextLoop.jsx");

var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/components/threejs-render/CanvasicalSmoke.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import { useSpring, a } from 'react-spring/three';
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
  console.log('mouse.x / 20 --> ', mouse.x);
  console.log('light --> ', light);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("directionalLight", {
    ref: light // position={[ -2, 0, 60 ]}  
    ,
    intensity: 1.1,
    color: "#eeeeee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }));
}; // // This renders text via canvas and projects it as a sprite
// const Text = ({ opacity, color = 'white', fontSize = 410 }) => {
//     return (
//         <a.sprite scale={[ 1, 1, 1 ]} >
//             <a.spriteMaterial attach="material" transparent opacity={opacity}>
//                 <canvasTexture attach="map"   premultiplyAlpha   />
//             </a.spriteMaterial>
//         </a.sprite>
//     )
// }
// The canvas houses this function, the scene. Scene is where the elements come together.


var SmokePuff = function SmokePuff(_ref) {
  var geometry = _ref.geometry,
      material = _ref.material;
  var smokePuffRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // let tenToHundred = Math.random() * 100; // 10 - 99.99
  // let speed = 0.01 + Math.random() / 200; // 0.1 - 0.19
  // const cosWave = (Math.cos(tenToHundred) / 3) - 1.1;  // a cosign wave.  ~ 0.5 - 1.5

  var factor = 1 + Math.random() * 2; // ~ 1-3

  var xFactor = -150 + Math.random() * 150; // -150 - 50

  var yFactor = -200 + Math.random() * 100; // -200 - 0

  var zFactor = 10 + Math.random() * 10; //  10 - 20

  var getRandomArbitrary = function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  };

  var randomFactor = getRandomArbitrary(1.1, 2);
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useFrame"])(function (_ref2) {
    var clock = _ref2.clock; // tenToHundred += speed; // tenToHundred = tenToHundred + speed, plus it sets a unique new version of tenToHundred.
    // let delta = clock.getDelta();  // Change in clock. Something like 0.0001 - 0.0099

    var slowRotation = clock.elapsedTime * 0.017 * randomFactor + xFactor; // starts at ~0.0001 + xFactor and goes slow

    var slowGrowth = Math.tanh(clock.elapsedTime / 18) + 3;
    smokePuffRef.current.scale.set(slowGrowth, slowGrowth, 2);
    smokePuffRef.current.rotation.z = slowRotation;
    smokePuffRef.current.position.set(xFactor * factor, yFactor * factor, zFactor);
  });
  return __jsx("mesh", {
    ref: smokePuffRef,
    material: material,
    geometry: geometry,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
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
      lineNumber: 126
    },
    __self: this
  }), __jsx("meshLambertMaterial", {
    ref: materialRef,
    attach: "material",
    color: "#ffffff",
    transparent: true,
    opacity: 0.66,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("primitive", {
    attach: "map",
    object: texture,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), geometry && new Array(33).fill().map(function (_, index) {
    return __jsx(SmokePuff, {
      key: index,
      material: material,
      geometry: geometry,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    });
  }));
}; // This is the canvas. It's the lowest level element in the three/webGl chain


var CanvasicalSmoke = function CanvasicalSmoke() {
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
      lineNumber: 159
    },
    __self: this
  }, __jsx(Lighting, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }), __jsx(GenerateSmoke, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })), __jsx(_TextLoop__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CanvasicalSmoke);

/***/ })

})
//# sourceMappingURL=skills.js.e9fcdbbfea01cc15012a.hot-update.js.map