import Link from 'next/link';
import { useEffect, useState } from "react";
// import { FaHome, FaArrowDown, FaArrowLeft } from "react-icons/fa";



const Footer = props => {
    const [ targetNavLocation, setTargetNavLocation ] = useState("");
    

    useEffect(() => {

        if (props && props.route === "/") {
            setTargetNavLocation("projects")
        } else if (props && props.route !== "/") {
            setTargetNavLocation("")
        };

    }, [props.route])




    return (
        <footer className="footer">
            <section className="section__navlink">
                {/* <Link href={"/"}>
                    <a><FaHome className="navlink--arrow" /></a>
                </Link>
                <Link href={`/${targetNavLocation}`}>
                    <a>
                        {targetNavLocation === "" ? (
                            <FaArrowLeft className="navlink--arrow" />
                        ) : (
                            <FaArrowDown className="navlink--arrow" />
                        )}
                    </a>
                </Link> */}
            </section>
        </footer>
    );
}


export default Footer;

