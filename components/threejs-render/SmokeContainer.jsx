import React, { useCallback, useEffect, useRef } from "react";
import * as THREE from 'three';
import {
    extend,
    Canvas,
    useFrame,
    useLoader,
    useResource,
    useThree
} from "react-three-fiber";

import * as resources from './resources/index';
extend(resources);

import TextLoop from "../TextLoop";



// const init = () => {
//     stats = new Stats();


//     clock = new THREE.Clock();

//     renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     scene = new THREE.Scene();

//     camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         1,
//         10000
//     );
//     camera.position.z = 1000;
//     scene.add(camera);

//     geometry = new THREE.CubeGeometry(200, 200, 200);
//     material = new THREE.MeshLambertMaterial({
//         color: 0xaa6666,
//         wireframe: false
//     });
//     mesh = new THREE.Mesh(geometry, material);
//     //scene.add( mesh );
//     cubeSineDriver = 0;


//     smokeTexture = THREE.ImageUtils.loadTexture(
//         "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
//     );
//     smokeMaterial = new THREE.MeshLambertMaterial({
//         color: 0x00dddd,
//         map: smokeTexture,
//         transparent: true
//     });
    
// }

// const animate = () => {
//     // note: three.js includes requestAnimationFrame shim
//     stats.begin();
//     delta = clock.getDelta();
//     requestAnimationFrame(animate);
//     evolveSmoke();
//     render();
//     stats.end();
// }

// const evolveSmoke = () => {
//     var sp = smokeParticles.length;
//     while (sp--) {
//         smokeParticles[sp].rotation.z += delta * 0.2;
//     }
// }

// const render = () => {
//     mesh.rotation.x += 0.005;
//     mesh.rotation.y += 0.01;
//     cubeSineDriver += 0.01;
//     mesh.position.z = 100 + Math.sin(cubeSineDriver) * 500;
//     renderer.render(scene, camera);
// }





const SmokeThing = () => {
    
    const [geometryRef, geometry] = useResource();
    const [materialRef, material] = useResource();
    const ref = useRef();

    // const smokeGeo = new THREE.PlaneGeometry(300, 300);
    
    // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
    const [ smokeTexture ] = useLoader(THREE.TextureLoader, [
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
    ])

    // const smokeParticles = () => {
    //     let smokeParticles = [];
    //     for (p = 0; p < 150; p++) {
    //         let particle = new THREE.Mesh(smokeGeo, smokeMaterial);
    //         particle.position.set(
    //             Math.random() * 500 - 250,
    //             Math.random() * 500 - 250,
    //             Math.random() * 1000 - 100
    //         );
    //         particle.rotation.z = Math.random() * 360;
    //         scene.add(particle);
    //         smokeParticles.push(particle);
    //     }
    //     return smokeParticles;
    // }

    // useFrame(({ clock }) => {
    //     delta = clock.getDelta();
    //     let sp = smokeParticles.length;
    //     while (sp--) {
    //         smokeParticles[sp].rotation.z += delta * 0.2;
    //     }

    // })

    return (
        <group ref={ref}>
            <ambientLight
                intensity={0.3} 
                position={[0, 0, 40]} 
                penumbra={2} 
                decay={2}
                color="#111111"
            />



            <mesh 
                visible 
                userData={{ test: 'hello' }} 
                position={[1, 2, 3]} 
                rotation={[0, 0, 0]}
                ref={ref}
                onClick={e => console.log('click')}
                onPointerOver={e => console.log('hover')}
                onPointerOut={e => console.log('unhover')}
            >
                <planeGeometry 
                    attach="geometry" 
                    args={[10000, 10000]} 
                />
                <meshNormalMaterial attach="material" />
            </mesh>

            <meshLambertMaterial 
                ref={materialRef}
                color="0x00dddd"
                map={smokeTexture}
                transparent={true}
            />


        </group>
    )
}

const SmokeContainer = () => {
    const {
        gl,                           // WebGL renderer 
        scene,                        // Default scene
        camera,                       // Default camera
        size,                         // Bounds of the view (which stretches 100% and auto-adjusts)
        viewport,                     // Bounds of the viewport in 3d units + factor (size/viewport)
        aspect,                       // Aspect ratio (size.width / size.height)
        mouse,                        // Current 2D mouse coordinates
        clock,                        // THREE.Clock (useful for useFrame deltas)
        invalidate,                   // Invalidates a single frame (for <Canvas invalidateFrameloop />)
        intersect,                    // Calls onMouseMove handlers for objects underneath the cursor
        setDefaultCamera,             // Sets the default camera
    } = useThree();


    return (
        <div 
            className="container block__three-container" 
        >
            
            <Canvas
                style={{ background: 'radial-gradient(at 50% 70%, #200f20 40%, #090b1f 80%, #050523 100%)' }}
                camera={{ fov: 75, position: [0, 0, 60] }} 
                // children                      // Either a function child (which receives state) or regular children
                // gl                            // Props that go into the default webGL-renderer
                // camera                        // Props that go into the default camera
                // raycaster                     // Props that go into the default raycaster
                // shadowMap                     // Props that go into gl.shadowMap, can also be set true for PCFsoft
                // vr = false                    // Switches renderer to VR mode, then uses gl.setAnimationLoop
                // gl2 = false                   // Enables webgl2
                // concurrent = false            // Enables React concurrent mode
                // resize = undefined            // Resize config, see react-use-measure's options
                // orthographic = false          // Creates an orthographic camera if true
                // noEvents = false              // Switch off raytracing and event support
                // pixelRatio = undefined        // You could provide window.devicePixelRatio if you like
                // invalidateFrameloop = false   // When true it only renders on changes, when false it's a game loop
                // updateDefaultCamera = true    // Adjusts default camera on size changes
                // onCreated                     // Callback when vdom is ready (you can block first render via promise)
                // onPointerMissed 
            >   
                <rectAreaLight
                    intensity={3}
                    position={[0, 10, -10]}
                    width={30}
                    height={30}
                    onUpdate={self => self.lookAt(new THREE.Vector3(0, 0, 0))}
                />
                {/* <SmokeThing /> */}

            </Canvas> 
           
            <TextLoop  />

        </div>
    );
}

export default SmokeContainer;








