import loadable from '@loadable/component';
import { useState, useEffect } from 'react';
const CanvasicalSmoke = loadable(() => import('../components/threejs-render/CanvasicalSmoke'));
const TextLoop = loadable(() => import('../components/TextLoop'));


const Skills = () => {
    const [ canvas, setCanvas ] = useState({ load: false, delay: 150 });

    useEffect(() => {
        const timerToLoadCanvas = setTimeout(() => {
            setCanvas({ ...canvas, load: true })
        }, canvas.delay);
        return () => clearTimeout(timerToLoadCanvas);
    }, [])

    return (
        <section className="section__skills" >
            {canvas.load ? (
                <CanvasicalSmoke  canvas={canvas} />
            ) : null}

            <main className="main__skills-body">
                <TextLoop  />
                <div className="block__skills-bottom">
                    <div className="block__level tint" >
                        <h2 >Hello, friend.</h2>
                        <p className="p__text-block" >TOP BLOCK ------------------- </p>
                        <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                        <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                        <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                        <p className="p__text-block" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati illo repudiandae libero totam dolor delectus nostrum fuga molestias accusantium temporibus, explicabo dignissimos, itaque tenetur magni officiis alias rem minus velit.</p>
                    </div>
                </div>
            </main>
        </section>
    );
}

Skills.getInitialProps = async function () {
    return { 
        transitionType: 'fade',
        timeout: 1800
    }
}

export default Skills;

