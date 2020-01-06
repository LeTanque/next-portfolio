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
// const DEFAULT_LAYER = 0;
// const OCCLUSION_LAYER = 1;
// Cast the lighting

var Lighting = function Lighting() {
  var _useThree = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useThree"])(),
      mouse = _useThree.mouse;

  var light = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useFrame"])(function () {
    return light.current.position.set(mouse.current[0] / 20, -mouse.current[1] / 20, 0);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("directionalLight", {
    color: "#ffffff",
    intensity: 0.5,
    position: [-2, 0, 30],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("pointLight", {
    ref: light,
    distance: 50,
    intensity: 1.5,
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("spotLight", {
    intensity: 0.5,
    position: [10, 10, 40],
    penumbra: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }));
}; // The canvas houses this function, the scene. Scene is where the elements come together.


function SmokePuff(_ref) {
  var geometry = _ref.geometry,
      material = _ref.material;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var t = Math.random() * 100;
  var speed = 0.01 + Math.random() / 200;
  var factor = 20 + Math.random() * 100;
  var xFactor = -50 + Math.random() * 100;
  var yFactor = -50 + Math.random() * 100;
  var zFactor = -30 + Math.random() * 60;
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_3__["useFrame"])(function () {
    t += speed;
    var s = Math.cos(t);
    ref.current.scale.set(s, s, s);
    ref.current.rotation.set(s * 5, s * 5, s * 5);
    ref.current.position.set(xFactor + Math.cos(t / 30 * factor) + Math.sin(t * 1) * factor / 10, yFactor + Math.sin(t / 20 * factor) + Math.cos(t * 2) * factor / 10, zFactor + Math.cos(t / 10 * factor) + Math.sin(t * 3) * factor / 20);
  });
  return __jsx("mesh", {
    ref: ref,
    material: material,
    geometry: geometry,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("planeGeometry", {
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
      lineNumber: 100
    },
    __self: this
  }, __jsx("primitive", {
    attach: "map",
    object: texture,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), geometry && new Array(2000).fill().map(function (_, index) {
    return __jsx(SmokePuff, {
      key: index,
      material: material,
      geometry: geometry,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
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
  }, __jsx(Lighting, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), __jsx(GenerateSmoke, {
    particleArray: particleArray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
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
//# sourceMappingURL=skills.js.de9950e20ef47b3c531b.hot-update.js.map