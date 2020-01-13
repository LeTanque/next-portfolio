import loadable from '@loadable/component';
import { useState } from 'react';
const CanvasicalSmoke = loadable(() => import('../components/threejs-render/CanvasicalSmoke'));
const TextLoop = loadable(() => import('../components/TextLoop'));


const Skills = () => {
    const [ canvas, setCanvas ] = useState({ loaded: false });

    const rightSlant = {
        backgroundColor: "#1e1e1e",
        height: "300px",
        width: "100vw",
        position: "absolute",
        marginTop: "150px",
        transform: "rotate(6deg) skew(6deg) translate(0, 0px)",
        opacity: 1,
        zIndex: -1
    }
    const leftSlant = {
        backgroundColor: "#1e1e1e",
        height: "200px",
        width: "70vw",
        position: "relative",
        top: "200px",
        transform: "matrix3d(1.5,0,0.00,0.0025,0.00,0.94,0.34,-0.000,0,-0.34,0.94,0,0,0,0,1)",
        opacity: 1,
        zIndex: -1
    }
    const levelBlock = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100vw",
        position: "relative",
        opacity: 1,
        zIndex: -1
    }
    const levelBlockClear = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0,0.2)",
        width: "100vw",
        position: "relative",
        opacity: 1,
        zIndex: -1
    }
    const levelBlockOpaque = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#1e1e1e",
        width: "100vw",
        position: "relative",
        opacity: 1,
        zIndex: -1
    }

    return (
        <section className="section__skills" >
            <CanvasicalSmoke  canvas={canvas}  setCanvas={setCanvas}  />
            <TextLoop  />
            <div className="block__skills-bottom">
                <div className="block__slanted" style={rightSlant}> </div>
                <div className="" style={leftSlant}> </div>
                <div className="block__level tint"  style={{ marginTop: "20px" }}>
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                </div>
                <div className="block__level" style={levelBlockClear} >
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                </div>
                <div className="block__level" style={levelBlockOpaque} >
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                    <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                </div>
            </div>
        </section>
    );
}

Skills.getInitialProps = async function () {
    return { 
        transitionType: 'slide',
        timeout: 800
    }
}

export default Skills;

