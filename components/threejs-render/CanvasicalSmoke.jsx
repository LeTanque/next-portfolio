import React, {
    useRef,
    useMemo,
    useEffect,
    useState
} from "react";
import * as THREE from "three";
import {
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


// Cast the lighting
const Lighting = () => {
    const { mouse } = useThree();
    const light = useRef();
    
    useFrame(() => {
        light.current.position.set( mouse.x / 20, -mouse.y / 20, 60 )
    });

    return (
        <>
            <directionalLight
                ref={light} 
                intensity={1.2}  
                color="#fefefe" 
            /> 
           
        </>
    );
};

// The canvas houses this function, the scene. Scene is where the elements come together.
const SmokePuff = ({ geometry, material }) => {
    let smokePuffRef = useRef();
    let factor = 1 + Math.random() * 2;  // ~ 1-3
    let xFactor = -250 + Math.random() * 350;  // -250 - 250
    let yFactor = -150 + Math.random() * 175;  // -150 - 75
    let zFactor = 10 + Math.random() * 10;  //  10 - 20
    
    const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
    let randomFactor = getRandomArbitrary(1.1, 2);
    
    useFrame(({ clock }) => {
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
const CanvasicalSmoke = props => {
    const { canvas } = props;

    // Smoke cloud fade in
    const [ smokeSettings ] = useState({ transTime: 6000, delay: null });
    const smokeClear = {
        opacity: 0,
        transition: `${smokeSettings.transTime}ms    cubic-bezier(0.82,-0.01, 0.4, 0.46)   opacity 0ms`,
    };
    const smokeOpaque = {
        opacity: 1,
        transition: `${smokeSettings.transTime}ms    cubic-bezier(0.82,-0.01, 0.4, 0.46)   opacity 0ms`,
    };
    const [ smokeStyle, setSmokeStyle ] = useState({ ...smokeClear });

    useEffect(() => {
        if (canvas.load) setSmokeStyle({ ...smokeOpaque })
    }, [])

    return (
            <Canvas
                className="container block__three-container"
                style={{position: "fixed", width: "100vw", height: "100%", overflow: "hidden", ...smokeStyle}}
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
    );
};

export default CanvasicalSmoke;

