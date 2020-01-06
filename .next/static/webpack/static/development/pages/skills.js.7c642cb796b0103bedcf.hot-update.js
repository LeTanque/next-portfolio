webpackHotUpdate("static/development/pages/skills.js",{

/***/ "./components/threejs-render/CanvasicalSmoke.jsx":
/*!*******************************************************!*\
  !*** ./components/threejs-render/CanvasicalSmoke.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var _resources_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/postprocessing/EffectComposer */ "./components/threejs-render/resources/postprocessing/EffectComposer.js");
/* harmony import */ var _resources_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/postprocessing/RenderPass */ "./components/threejs-render/resources/postprocessing/RenderPass.js");
/* harmony import */ var _resources_postprocessing_GlitchPass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/postprocessing/GlitchPass */ "./components/threejs-render/resources/postprocessing/GlitchPass.js");
var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/components/threejs-render/CanvasicalSmoke.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Import and register postprocessing classes as three-native-elements for react-three-fiber
// They'll be available as native elements <effectComposer /> from then on ...




Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["extend"])({
  EffectComposer: _resources_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_3__["EffectComposer"],
  RenderPass: _resources_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_4__["RenderPass"],
  GlitchPass: _resources_postprocessing_GlitchPass__WEBPACK_IMPORTED_MODULE_5__["GlitchPass"]
}); // import TextLoop from "../TextLoop";
// const DEFAULT_LAYER = 0;
// const OCCLUSION_LAYER = 1;
// Cast the lighting

var Lighting = function Lighting() {
  return __jsx("directionalLight", {
    color: "#ffffff",
    intensity: 0.5,
    position: [-2, 0, 30],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  });
}; // The canvas houses this function, the scene. Scene is where the elements come together.


var SmokeParticle = function SmokeParticle() {
  // const { 
  //     scene,                        // Default scene
  // } = useThree();
  var url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png';
  var texture = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]().load(url);
  }, [url]); // let xFactor = 1;
  // let yFactor = 1;
  // let zFactor = 2;
  // let rotationAngle = Math.random() * 360;
  // let factor = 0.3;
  // // let position = { x: Math.random() * 500-250, y: Math.random() * 500-250, z: 2 };
  // // // let position = (Math.random()*500-250, Math.random()*500-250, 2);
  // // let rotation = Math.random() * 360;
  // console.log('ref --> ', ref);
  // useFrame(({ clock }) => {
  //     let delta = clock.getDelta();
  //     // ref.current.rotation.z = ref.current.rotation.z * Math.random();
  //     // ref.current.rotation.z += rotationAngle;
  //     // smokeParticles[sp].rotation.z += delta * 0.2;
  //     // ref.current.scale.z = 3;
  //     ref.current.position.x = Math.sin(xFactor++) * factor;
  //     ref.current.position.y = Math.cos(factor) * (yFactor++ * Math.random());
  //     ref.current.position.z = 2;
  //     ref.current.rotation.z = Math.random() * factor;
  //     // ref.current.rotation.set( 0, 0, 
  //     //     delta * Math.cos(factor) 
  //     // );
  //     // ref.current.position.set(
  //     //     1,
  //     //     (Math.cos(clock.getElapsedTime()) * 1.5),
  //     //     // (ref.current.position.z += 0.01) * zFactor,
  //     //     2,
  //     //     // xFactor,
  //     //     // yFactor,
  //     //     // zFactor
  //     // );
  // })
  // console.log('ref --> ', ref);
  // if (ref && ref.current && ref.current.parent) {
  //     ref.current.parent.scale.z = 1.22;
  // }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("planeGeometry", {
    attach: "geometry",
    args: [200, 200],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("meshLambertMaterial", {
    attach: "material",
    color: "#ccbbee",
    transparent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("primitive", {
    attach: "map",
    object: texture,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })));
};

var GenerateSmoke = function GenerateSmoke(_ref) {
  var particleArray = _ref.particleArray; // const { clock } = useThree();

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var getRandomArbitrary = function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }; // let xFactor = 1;
  // let yFactor = 1;
  // let zFactor = 2;
  // let rotationAngle = Math.random() * 360;
  // let factor = 0.1;
  // let zeroTo10 = ( Math.sin(2) * (10 * Math.random()) + 2 ) * eachParticle.x;


  var randomFactor = getRandomArbitrary(1, 2);
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useFrame"])(function (_ref2) {
    var clock = _ref2.clock;
    var delta = clock.getDelta(); // let slowsThenStops = Math.tanh(clock.elapsedTime);
    // ref.current.rotation.z = ((clock.elapsedTime) / (clock.elapsedTime - delta));
    // ref.current.rotation.z = Math.tan(clock.elapsedTime * Math.PI / 180);
    // ref.current.rotation.z +=  Math.tan(Math.sqrt(3)) ;
    // ref.current.rotation.z = Math.tanh(clock.elapsedTime / 18);  // Starts, slows to eventual stop

    ref.current.rotation.z = clock.elapsedTime / delta * randomFactor;
    console.log('ref.current.rotation.z --> ', ref.current.rotation.z);
    console.log('randomFactor --> ', randomFactor, clock.elapsedTime / delta); // console.log('ref.current.rotation.z --> ', ref.current.rotation.z);
    // ref.current.position.x = Math.sin(xFactor++) * factor;
    // ref.current.position.y = Math.cos(factor) * (yFactor++ * Math.random());
    // ref.current.position.z = 2;
    // ref.current.rotation.z = Math.random() * factor;
  }); // console.log('ref & particleArray --> ', ref, particleArray);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("mesh", {
    ref: ref // rotation={[ 0, 0, 0 ]}
    ,
    visible: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(SmokeParticle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }))) // <>
  //     {particleArray.map((eachParticle, index) => (
  //         <React.Fragment key={index} >
  //             <mesh 
  //                 ref={ref}
  //                 position={[ eachParticle.x, eachParticle.y, eachParticle.z ]}
  //                 visible 
  //             >
  //                 {console.log('eachParticle --> ', eachParticle)}
  //                 <SmokeParticle  />
  //             </mesh>
  //         </React.Fragment>
  //     ))}
  // </>
  ;
}; // This is the canvas. It's the lowest level element in the three/webGl chain


var CanvasicalSmoke = function CanvasicalSmoke() {
  var particleCount = 3;
  var particleArray = [{
    id: 0,
    x: 0,
    y: 0,
    z: 2
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["Canvas"], {
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
      lineNumber: 199
    },
    __self: this
  }, __jsx(Lighting, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }), __jsx(GenerateSmoke, {
    particleArray: particleArray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
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
//# sourceMappingURL=skills.js.7c642cb796b0103bedcf.hot-update.js.map