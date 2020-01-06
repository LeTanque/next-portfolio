import React, { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import {
    Canvas,
    extend as extendThree,
    useFrame,
    useLoader,
    useResource,
    useThree
} from "react-three-fiber";

// Import and register postprocessing classes as three-native-elements for react-three-fiber
// They'll be available as native elements <effectComposer /> from then on ...
import { EffectComposer } from './resources/postprocessing/EffectComposer';
import { RenderPass } from './resources/postprocessing/RenderPass';
import { GlitchPass } from './resources/postprocessing/GlitchPass';
extendThree({ EffectComposer, RenderPass, GlitchPass });

// import TextLoop from "../TextLoop";



// const DEFAULT_LAYER = 0;
// const OCCLUSION_LAYER = 1;




// The canvas houses this function, the scene. Scene is where the elements come together.
const ObjectMesh = () => {
    const ref = useRef();
    // const [geometryRef, geometry] = useResource();
    // const [materialRef, material] = useResource();
    
    // useFrame(() => {
    //     ref.current.rotation.x = ref.current.rotation.y += 0.01
    // });
    useFrame(({ clock }) => {
        ref.current.position.x = Math.cos(clock.getElapsedTime()) * 1.1
        ref.current.rotation.x = ref.current.rotation.y += 0.0008
        ref.current.rotation.x += 0.001
        ref.current.rotation.y += 0.004
        ref.current.rotation.z += 0.004
    });
    
    console.log('ref in objectMeshTet --> ', ref);

    return (
        <>
                <mesh 
                    ref={ref}
                    userData={{ test: 'hello' }} 
                    position={[ 0, 0, 2 ]} 
                    receiveShadow
                    castShadow
                    visible 
                >
                    <torusKnotBufferGeometry 
                        attach="geometry" 
                        args={[ 0.5, 0.15, 150, 32 ]} 
                    />
                    {/* <tetrahedronBufferGeometry 
                        attach="geometry"
                        radius={20}
                    /> */}
                    <meshPhysicalMaterial 
                        attach="material" 
                        color="#0077ff"
                        roughness={1} 
                        clearcoat={1} 
                        clearcoatRoughness={0.2}
                        dithering 
                    />
                </mesh>
        </>
    )
}

// Cast the lighting
const Lighting = () => {
    const {
        size,
    } = useThree();
    
    return (
        <>
            <ambientLight
                color="#ffffff"
                intensity={0.1}
            />
            <pointLight />
            <spotLight
                color="#ffffff"
                intensity={2.2}
                distance={300}
                angle={1.05}
                penumbra={1}
                decay={2}
                position={[ 11, 15, 15 ]} 
                castShadow
                shadow-mapSize-width={size.width} 
                shadow-mapSize-height={size.height}
            />
        </>
    )
}

// Creates a fullscreen colored plane
const Plane = () => {
    const plane = useRef();

    return (
        <mesh 
            ref={plane}
            receiveShadow
        >
            <planeGeometry  attach="geometry"  args={[ 20, 20, 32, 32 ]} />
            <meshPhysicalMaterial  attach="material"  color="#000000"  />
        </mesh>
    )
}

// This is the canvas. It's the lowest level element in the three/webGl chain
const Canvasical = () => {
    // const {
    //     gl,                           // WebGL renderer 
    //     scene,                        // Default scene
    //     camera,                       // Default camera
    //     size,                         // Bounds of the view (which stretches 100% and auto-adjusts)
    // } = useThree();

    return (
        <>
            <Canvas
                className="container block__three-container" 
                camera={{ 
                    fov: 75, 
                    position: [ 0, 0, 6 ],
                    zoom: 1,
                    focus: 10
                }} 
                shadowMap
            >
                <Plane />
                <Lighting />
                <ObjectMesh  />

                {/* <LightBar /> */}
                
            </Canvas> 
           
            {/* <TextLoop  /> */}

        </>
    );
}

export default Canvasical;








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
