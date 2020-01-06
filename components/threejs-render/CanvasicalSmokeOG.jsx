import React, { useCallback, useEffect, useRef, useState, useMemo } from "react";
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



// Cast the lighting
const Lighting = () => {
    return (
        <directionalLight
            color="#ffffff"
            intensity={0.5}
            position={[ -2, 0, 30 ]} 
        />
    )
}

// The canvas houses this function, the scene. Scene is where the elements come together.
const SmokeParticle = ({ eachParticle, smokeParticleRef }) => {
    // const { 
    //     scene,                        // Default scene
    // } = useThree();
    
    const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png';
    const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
    
    // let xFactor = 1;
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
    

    return (
        <mesh 
            ref={smokeParticleRef}
            visible 
        >
            <planeGeometry 
                attach="geometry"   
                args={[200, 200]} 
            />

            <meshLambertMaterial 
                attach="material" 
                color="#ccbbee"
                transparent
            >
                <primitive attach="map" object={texture} />
            </ meshLambertMaterial>

        </mesh>
    )
}


const GenerateSmoke = ({ particleArray }) => {
    // const { clock } = useThree();
    // const ref = useRef();
    // let xFactor = 1;
    // let yFactor = 1;
    // let zFactor = 2;
    // let rotationAngle = Math.random() * 360;
    // let factor = 0.1;
    // let zeroTo10 = ( Math.sin(2) * (10 * Math.random()) + 2 ) * eachParticle.x;
    // useFrame(({ clock }) => {
        // let delta = clock.getDelta();
        // // let slowsThenStops = Math.tanh(clock.elapsedTime);
        // // ref.current.rotation.z = ((clock.elapsedTime) / (clock.elapsedTime - delta));
        // // ref.current.rotation.z = Math.tan(clock.elapsedTime * Math.PI / 180);
        // // ref.current.rotation.z +=  Math.tan(Math.sqrt(3)) ;

        // // ref.current.rotation.z = Math.tanh(clock.elapsedTime / 18);  // Starts, slows to eventual stop
        // ref.current.rotation.z = (clock.elapsedTime * (delta + 0.017)) * randomFactor; // Slow and pretty steady. Random factor
    // });


    const smokeParticleRef = useRef();
    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
    }
    let randomFactor = getRandomArbitrary(2, 3);

    useFrame(({ clock }) => {
        let delta = clock.getDelta();
        smokeParticleRef.current.rotation.z = (clock.elapsedTime * (delta + 0.017)) * randomFactor; // Slow and pretty steady. Random factor
    })
    
    console.log('smokeParticleRef --> ', smokeParticleRef);

    return (
        <>
            {particleArray.map((eachParticle, index) => (
                <React.Fragment key={index} >
                    
                        <SmokeParticle  eachParticle={eachParticle}  smokeParticleRef={smokeParticleRef}  />

                </React.Fragment>
            ))}
        </>
    )
}

// This is the canvas. It's the lowest level element in the three/webGl chain
const CanvasicalSmoke = () => {
    const particleCount = 3;
    const particleArray = [{ id: 0, x: 0, y: 0, z: 2 }];

    useEffect(() => {
        if (particleArray.length === particleCount) {
            return null;
        } else {
            for (let i=0; i <= particleCount; i++) {
                particleArray.push({ 
                    id: particleArray[i].id + 1, 
                    x: particleArray[i].x + 1, 
                    y: particleArray[i].y + 1, 
                    z: 2  
                })
            }
        }
    }, [particleArray])

    return (
        <>
            <Canvas
                className="container block__three-container" 
                camera={{ 
                    fov: 75, 
                    aspect: 0.5,
                    near: 1,
                    far: 10000,
                    position: [ 0, 0, 300 ]
                }} 

            >
                <Lighting />
                <GenerateSmoke  particleArray={particleArray} />
            </Canvas> 
           
            {/* <TextLoop  /> */}
        </>
    );
}

export default CanvasicalSmoke;


// // Creates a fullscreen colored plane
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
