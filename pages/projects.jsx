// import ProgressiveImage from "react-progressive-image-loading";

import ProjectsBody from "../components/ProjectsBody";





const Projects = () => (
    <>


        <section className="section__projects" >
            <ProjectsBody />
        </section>

        {/* <ProgressiveImage
            preview="/static/bogomil-mihaylov-small.jpg"
            src="/static/bogomil-mihaylov-wVTLXWM-Gh0-unsplash.jpg"
            transitionTime={800}
            transitionFunction="ease"
            render={(src, style) => (
                <section className="section__projects" style={Object.assign(style, { backgroundImage: `url(${src})` })} >
                    {style.filter === "blur(0px)" ? (
                        <ProjectsBody />
                    ) : null}
                </section>
            )}
        /> */}
    
    
    </>
);


export default Projects;

