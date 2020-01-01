import Link from 'next/link';
import { useEffect, useState } from "react";
import { FaHome, FaProjectDiagram, FaSistrix } from "react-icons/fa";



const Nav = (props) => {
    const [ currentNavLocation, setCurrentNavLocation ] = useState("");
    

    useEffect(() => {

        if (props && props.route === "/") {
            setCurrentNavLocation("index")
        } else if (props && props.route === "/about") {
            setCurrentNavLocation("about")
        } else if (props && props.route === "/projects") {
            setCurrentNavLocation("projects")
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

                <Link href="/about">
                    <li>
                        <FaSistrix className="link-icon" />
                        <a>About</a>
                    </li>
                </Link>

                <Link href="/projects">
                    <li>
                        <FaProjectDiagram className="link-icon" />
                        <a>Projects</a>
                    </li>
                </Link>

            </nav>
        </section>

    )
}

export default Nav
