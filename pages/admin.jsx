import Link from 'next/link';
import { useRouter } from 'next/router'
import { GiPowerLightning, GiPencilBrush } from "react-icons/gi";

// function ActiveLink({ children, href }) {
//     const router = useRouter()
//     const style = {
//         marginRight: 10,
//         color: router.pathname === href ? 'red' : 'black',
//     }
  
//     const handleClick = e => {
//         e.preventDefault()
//         router.push(href)
//     }
  
//     return (
//         <a href={href} onClick={handleClick} style={style}>
//             {children}
//         </a>
//     )
// }

const Admin = () => {

    return (    
        <section className={`section__admin`}>

            <div className="block--link-icon">
                <Link href={"/admin/login"}>
                    <a>
                        <GiPowerLightning className="link-icon" />
                        <div>Login</div>
                    </a>
                </Link>
            </div>

            <div className="block--link-icon">
                <Link href={"/admin/posts"}>
                    <a>
                        <GiPencilBrush className="link-icon" />
                        <div>Create Post</div> 
                    </a>
                </Link>
            </div>

        </section>
    );
}    


Admin.getInitialProps = async function () {
    return { 
        transitionType: 'fadefast',
        timeout: 300
    }
}

export default Admin
