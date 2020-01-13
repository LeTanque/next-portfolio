import Link from 'next/link';
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { GiTechnoHeart, GiGamepad } from "react-icons/gi";




const Nav = (props) => {
    const [ currentNavLocation, setCurrentNavLocation ] = useState("");
    
    
    useEffect(() => {
        
        if (props && props.route === "/") {
            setCurrentNavLocation("index")
        } 
        else if (props && props.route === "/skills") {
            setCurrentNavLocation("skills")
        } 
        // else if (props && props.route === "/project/game") {
        //     setCurrentNavLocation("game")
        // } 
        else {
            setCurrentNavLocation("unknown")
        };
        
    }, [props.route])
    
    
    
    return (

        <section className={`section__nav route-${currentNavLocation}`}>
            <nav>
                <Link href="/">
                    <li>
                        <FaHome className="link-icon" />
                        <a>Home</a>
                    </li>
                </Link>

                <Link href="/skills">
                    <li>
                        <GiTechnoHeart className="link-icon" />
                        <a>Skills</a>
                    </li>
                </Link>
                
                {/* <Link href="/project-gallery">
                    <li>
                        <GiGamepad className="link-icon" />
                        <a>Project Gallery</a>
                    </li>
                </Link> */}
            </nav>
        </section>

    )
}

export default Nav
