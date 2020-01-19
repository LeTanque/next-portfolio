import ProgressiveImage from "react-progressive-image-loading";
import { useState } from "react";


const Index = () => {
    const scrollerClassNames = [
        "scroller-top", 
        "scroller-middle", 
        "scroller-bottom",
    ];
    const [ background, setBackground ] = useState({ loaded: false, timer: false });

    const fogFadeIn = 5555;
    const fogDelay = 1.5;
    const foggyLettersClear = {
        opacity: 0,
        transition: `${fogFadeIn}ms ease opacity ${fogDelay}s`,
    };
    const foggyLettersOpaque = {
        opacity: 1,
        transition: `${fogFadeIn}ms ease opacity ${fogDelay}s`,
    };

    return (
        <>
            <ProgressiveImage
                preview="/static/matthew-ronder-seid-xYd99V3S5aI-unsplash-small.jpg"
                src="/static/matthew-ronder-seid-xYd99V3S5aI-unsplash-medium.jpg"
                transitionTime={500}
                transitionFunction="ease"
                render={(src, style) => (
                    <section className="section__index" style={Object.assign(style, { backgroundImage: `url(${src})` })} >

                        {style.filter === "blur(0px)" && !background.loaded && setBackground({ ...background, loaded: true })}

                        {background.loaded && (
                            <div className="block__greeting"  >
                                <strong>
                                    <span>le&nbsp;</span>tanque
                                </strong>
                            </div>
                        )}
                    </section>
                )}
            />

            {scrollerClassNames.map((position, index) => (
                <section className={`section__scroller-container ${position}`} key={index}  style={background.loaded ? foggyLettersOpaque : foggyLettersClear}  >
                    <div className="block__scroller">
                        <strong>frank le tanque portfolio</strong>
                    </div>
                </section>
            ))}

        </>
    )
};

Index.getInitialProps = async function () {
    return { 
        transitionType: 'none',
        timeout: 0
    }
}

export default Index;

