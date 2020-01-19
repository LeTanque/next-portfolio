import { useState, useEffect } from "react";
import axios from "axios";



const PostsAdmin = () => {
    const [ formState, setFormState ] = useState({
        title: "",
        body: "",
        author: "le Tanque"
    });
    const [ feedback, setFeedback ] = useState(null);

    const pushPost = event => {
        event.preventDefault()
        axios.post("https://next-portfolio-simple.herokuapp.com/api/posts", formState)
        .then(response => setFeedback(`Post has been submitted: ${response}`))
        .catch(error => console.log("Post did not succeed\n", error))
    };

    // If the feedback hook changes, this useEffect timer starts, and resets the feedback
    useEffect(() => {
        const timer = setTimeout(() => {
            setFeedback(null)
        }, 10000);
        return () => clearTimeout(timer);
    }, [feedback])

    return (
        <section className="section__form">
            <form onSubmit={pushPost} >
                <input 
                    name='title'
                    type='input-area'
                    placeholder='Title (required)'
                    value={formState.title}
                    onChange={event => setFormState({...formState, [event.target.name]: event.target.value })}
                />
                <textarea 
                    name='body'
                    type='text'
                    placeholder='Body (required)'
                    value={formState.body}
                    onChange={event => setFormState({...formState, [event.target.name]: event.target.value })}
                />
                <button onClick={pushPost}>Submit</button>
            </form >
            {feedback ? (
                <h3 style={{ color: "purple" }}>{feedback}</h3>
            ) : null}
        </section>
    );
};

PostsAdmin.getInitialProps = async function () {
    return { 
        transitionType: 'fade',
        timeout: 300
    }
}


export default PostsAdmin;

