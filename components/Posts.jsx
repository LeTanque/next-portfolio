import { useState, useEffect } from "react";
import axios from "axios";


const Posts = () => {
    const [ data, setData ] = useState(null)

    useEffect(() => {
        axios.get("https://next-portfolio-simple.herokuapp.com/api/posts")
        .then(response => setData(response.data))
        .catch(error => console.log("Error GETting data ---> ", error))
    }, [])

    return (
        <>
            <div className="block__skills-bottom">
                <div className="block__level tint" >
                    {data && data.map(post => (
                        <div className="block--post-body" key={post.id} >
                            <h2>{post.title}</h2>
                            <p className="p__text-block" >{post.body}</p>
                            <i>{post.author}</i>
                        </ div>
                    ))}
                </div>
            </div>
        </>
    );
};


export default Posts;

