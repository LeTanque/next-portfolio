import { useEffect, useState } from "react";





const About = () => {
    const [ style, setStyle ] = useState({
        display: "none"
    });
    
    useEffect(() => {
        const setTheStyle = () => {
            setStyle({
                display: "flex"
            });
        };
        
        setTimeout(() => setTheStyle(), 1560);

    }, [])

    
    return (
        <>


            <section className="section__about">

                <div className="block--about" style={style}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, rerum, facilis qui fuga quia molestias, laboriosam id veritatis ea nam voluptas eligendi atque maiores eius tenetur reprehenderit unde expedita! Repellendus?
                    </p>
                </div>

                

            </section>
        
        
        </>
    )
};


export default About;

