import Link from "next/link";
import { FaSistrix } from "react-icons/fa";



const Box = ({ slug, rotation, image, title, yellow }) => {
    const backgroundColor = yellow ? 'yellow' : null;

    const pictureStyle = {
        transform: `scale(0.8, 0.8) rotate(${rotation}deg)`,
        transition: `transform ease-in-out 300ms`
    }
    
    return (
        <div className="block__box-item" style={pictureStyle}>
            <div className="polaroid">
                <img src={image} alt={title} />
                <div className="block__box caption" style={{ backgroundColor }}> {title} </div>
                <div className="block__view-more-container">
                    <Link href={`/project/${slug}`}  >
                        <a>
                            <FaSistrix  
                                className="polaroid--view-more" 
                            />
                        </a>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Box;

