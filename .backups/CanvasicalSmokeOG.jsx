import React, {
    // useEffect,
    // useState,
    useRef,
    useMemo
} from "react";
import * as THREE from "three";
import {
    // useLoader,
    Canvas,
    extend as extendThree,
    useFrame,
    useResource,
    useThree
} from "react-three-fiber";


// Import and register postprocessing classes as three-native-elements for react-three-fiber
// They'll be available as native elements <effectComposer /> from then on ...
import { EffectComposer } from "./resources/postprocessing/EffectComposer";
import { RenderPass } from "./resources/postprocessing/RenderPass";
import { GlitchPass } from "./resources/postprocessing/GlitchPass";
extendThree({ EffectComposer, RenderPass, GlitchPass });

import TextLoop from "../TextLoop";


// Cast the lighting
const Lighting = () => {
    const { mouse } = useThree();
    const light = useRef();
    
    useFrame(() => {
        light.current.position.set( mouse.x / 20, -mouse.y / 20, 60 )
    });

    return (
        <>
            {/* <pointLight 
                ref={light}  
                color="#ff0000" 
                position={[ -2, 0, 60 ]}  
                distance={0}  
                intensity={1.5} 
                decay={2}
            /> */}
            {/* <spotLight 
                ref={light}  
                color="#ff0000" 
                position={[ -2, 0, 60 ]}  
                distance={0}  
                angle={1.05}
                intensity={1.5} 
                decay={2}
            /> */}
            
            <directionalLight
                ref={light} 
                // position={[ -2, 0, 60 ]}  
                intensity={1.1}  
                color="#eeeeee" 
            /> 
           
        </>
    );
};

// // This renders text via canvas and projects it as a sprite
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
const SmokePuff = ({ geometry, material }) => {
    let smokePuffRef = useRef();
    // let tenToHundred = Math.random() * 100; // 10 - 99.99
    // let speed = 0.01 + Math.random() / 200; // 0.1 - 0.19
    // const cosWave = (Math.cos(tenToHundred) / 3) - 1.1;  // a cosign wave.  ~ 0.5 - 1.5
    let factor = 1 + Math.random() * 2;  // ~ 1-3
    let xFactor = -250 + Math.random() * 350;  // -250 - 250
    let yFactor = -150 + Math.random() * 175;  // -150 - 75
    let zFactor = 10 + Math.random() * 10;  //  10 - 20
    
    const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
    let randomFactor = getRandomArbitrary(1.1, 2);
    
    useFrame(({ clock }) => {
        // tenToHundred += speed; // tenToHundred = tenToHundred + speed, plus it sets a unique new version of tenToHundred.
        // let delta = clock.getDelta();  // Change in clock. Something like 0.0001 - 0.0099
        let slowRotation = ((clock.elapsedTime * (0.017)) * randomFactor) + xFactor;  // starts at ~0.0001 + xFactor and goes slow
        let slowGrowth = (Math.tanh(clock.elapsedTime / 18) + 3);

        smokePuffRef.current.rotation.z = slowRotation * -1;
        smokePuffRef.current.scale.set(slowGrowth, slowGrowth, 2);
        smokePuffRef.current.position.set(
            xFactor * factor,
            yFactor * factor,
            zFactor
        );
    });
    return <mesh  ref={smokePuffRef} material={material} geometry={geometry} />;
}

const GenerateSmoke = () => {
    const [ geometryRef, geometry ] = useResource();
    const [ materialRef, material ] = useResource();
    const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png';
    const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);

    return (
        <>
            <planeGeometry 
                ref={geometryRef} 
                attach="geometry"   
                args={[200, 200]}
            />
            <meshLambertMaterial 
                ref={materialRef}
                attach="material" 
                color="#eeeeee"
                opacity={0.75}
                transparent
            >
                <primitive attach="map" object={texture} />
            </meshLambertMaterial>

            {geometry && new Array(20).fill().map((_, index) => {
                return (
                    <SmokePuff
                        key={index}
                        material={material}
                        geometry={geometry}
                    />
                )
            })}
        </>
    );
}

// This is the canvas. It's the lowest level element in the three/webGl chain
const CanvasicalSmoke = () => {

    return (
        <>
            <Canvas
                className="container block__three-container"
                camera={{
                    fov: 75,
                    aspect: 0.5,
                    near: 1,
                    far: 10000,
                    position: [0, 0, 400]
                }}
            >
                <Lighting />
                <GenerateSmoke />
            </Canvas>
            <TextLoop  />
        </>
    );
};

export default CanvasicalSmoke;


