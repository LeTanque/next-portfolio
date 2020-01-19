import React, { useCallback, useEffect, useRef } from "react";
import {
    extend,
    Canvas,
    useFrame,
    useResource,
    useThree
} from "react-three-fiber";
import * as resources from './resources/index';
extend(resources);
console.log('resources --> ', resources);

import TextLoop from "../TextLoop";


const Particle = ({ geometry, material }) => {
    let ref = useRef();
    let t = Math.random() * 20;
    let speed = 0.01 + Math.random() / 100000;
    let factor = 20 + Math.random() * 2;
    let xFactor = -50 + Math.random() * 200;
    let yFactor = -50 + Math.random() * 200;
    let zFactor = -30 + Math.random() * 150;
    useFrame(() => {
        t = t + speed;
        // t = (t + speed) / 2;
        const s = Math.cos(t);
        ref.current.scale.set(s * 5.95, s * 5.95, s * 5.95);
        ref.current.rotation.set(s * 4, s * 4, s * 4);
        ref.current.position.set(
            xFactor +
                Math.cos((t / 30) * factor) +
                (Math.sin(t * 1) * factor) / 7,
            yFactor +
                Math.sin((t / 20) * factor) +
                (Math.cos(t * 2) * factor) / 7,
            zFactor +
                Math.cos((t / 10) * factor) +
                (Math.sin(t * 3) * factor) / 15
        );
    });
    return <mesh ref={ref} material={material} geometry={geometry} />;
}

const Swarm = ({ mouse }) => {
    const light = useRef();
    const [geometryRef, geometry] = useResource();
    const [materialRef, material] = useResource();
    console.log('material --> ', material);

    useFrame(() =>
        light.current.position.set(
            mouse.current[0] / 20,
            -mouse.current[1] / 20,
            0
        )
    );

    return (
        <>
            <pointLight
                ref={light}
                distance={60}
                intensity={1}
                color="#ee1111"
                decay={2}
            />
            <spotLight
                intensity={0.4} 
                position={[-15, 0, 55]} 
                penumbra={2} 
                decay={2}
                color="#111111"
            />
            {/* <ambientLight
                intensity={0.3} 
                position={[0, 0, 40]} 
                penumbra={2} 
                decay={2}
                color="#111111"
            /> */}

            <mesh>
                <planeGeometry 
                    attach="geometry" 
                    args={[10000, 10000]} 
                />

                <meshDepthMaterial
                    attach="material"
                    color="#ffffff"
                    depthTest={false}
                />
                
                {/* <meshPhongMaterial
                    attach="material"
                    color="#575757"
                    depthTest={false}
                /> */}
                {/* <spriteMaterial
                    color="#aaaaaa"
                    fog={true}
                /> */}
            </mesh>

            <tetrahedronBufferGeometry  ref={geometryRef}  args={[0.8, 0]}  />

            
            <meshPhysicalMaterial 
                ref={materialRef}
                fog={true}
            />
            

            {/* <meshNormalMaterial 
                ref={materialRef} 
                fog={true}
                skinning={true}
                transparent={true}
                opacity={0.5}
            /> */}

            {/* <meshPhysicalMaterial ref={materialRef} /> */}

            {geometry && new Array(500)
                .fill()
                .map((_, index) => (
                    <Particle
                        key={index}
                        material={material}
                        geometry={geometry}
                    />
                ))
            }
        </>
    );
}

const Effect = () => {
    const composer = useRef();

    const { scene, gl, size, camera } = useThree();

    useEffect(() => void composer.current.setSize(size.width, size.height), [ size ]);

    useFrame(
        ({ gl }) => void ((gl.autoClear = true)),
        0
    );

    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass attachArray="passes" scene={scene} camera={camera} />
            <waterPass attachArray="passes" factor={2} />
            <afterimagePass attachArray="passes" factor={0.7} />
            <shaderPass
                attachArray="passes"
                args={[resources.WaterShader]}
                material-uniforms-resolution-value={[
                    1 / size.width,
                    1 / size.height
                ]}
                renderToScreen
            />
        </effectComposer>
    );
}

const ThreeContainer = () => {
    const mouse = useRef([0, 0]);
    const onMouseMove = useCallback(
        ({ clientX: x, clientY: y }) =>
        (mouse.current = [
            x - window.innerWidth / 2,
            y - window.innerHeight / 2
        ]),
        []
    );

    return (
        <div 
            className="container block__three-container" 
            onMouseMove={onMouseMove} 
        >
            
            <Canvas camera={{ fov: 75, position: [0, 0, 60] }} >
                
                <Swarm mouse={mouse} />
                <Effect />

            </Canvas> 
           
            <TextLoop  />

        </div>
    );
}

export default ThreeContainer;
