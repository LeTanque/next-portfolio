import loadable from '@loadable/component';
import { PageTransition } from "next-page-transitions";
const Loading = loadable(() => import('../components/Loading'));
const CanvasicalSmoke = loadable(() => import('../components/threejs-render/CanvasicalSmoke'));

// import ThreeContainer from "../components/threejs-render/ThreeContainer";
// import SmokeContainer from "../components/threejs-render/SmokeContainer";
// import Canvasical from "../components/threejs-render/Canvasical";



const Skills = () => {
    const timeout = 1200;

    return (
        <>
            <PageTransition
                timeout={timeout}
                classNames="page-transition"
                loadingClassNames="spinner-icon"
                loadingComponent={<Loading />}
                loadingDelay={0}
                loadingTimeout={{
                    enter: timeout,
                    exit: 0,
                }}
            >
                <section className="section__skills" >
                    <CanvasicalSmoke />
                </section>
            </PageTransition>
        </>
    );
}


export default Skills;

