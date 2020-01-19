import loadable from '@loadable/component';
import { useState, useEffect } from 'react';
const CanvasicalSmoke = loadable(() => import('../components/threejs-render/CanvasicalSmoke'));
const TextLoop = loadable(() => import('../components/TextLoop'));
const Posts = loadable(() => import('../components/Posts'));


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
                <Posts />
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

