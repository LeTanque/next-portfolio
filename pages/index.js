import ProgressiveImage from "react-progressive-image-loading";
// import { useState, useEffect } from "react";



const Index = () => {
    // const [ state, setState ] = useState({ loaded: false })
    const scrollerClassNames = ["scroller-top", "scroller-middle", "scroller-bottom"];
    
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         props.pageTransitionReadyToEnter()
    //         setState({ loaded: true })
    //       }, 2000)
    // }, [])


    // if (!state.loaded) return null;

    return (
        <>

            <ProgressiveImage
                preview="/static/matthew-ronder-seid-small.jpg"
                src="/static/matthew-ronder-seid-xYd99V3S5aI-unsplash-medium.jpg"
                transitionTime={200}
                transitionFunction="ease"
                render={(src, style) => (
                    <section className="section__index" style={Object.assign(style, { backgroundImage: `url(${src})` })} >
                        {style.filter === "blur(0px)" ? (
                            <div className="block__greeting"  >
                                <strong><span>le&nbsp;</span>tanque</strong>
                            </div>
                        ) : null}
                    </section>
                )}
            />


            {scrollerClassNames.map((position, index) => (

                <section className={`section__scroller-container ${position}`} key={index}>
                    <div className="block__scroller">
                        <strong>portfolio of le tanque</strong>
                    </div>
                </section>

            ))}
        
        </>
    )
};


export default Index;


