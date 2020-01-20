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
        .then(response => {
            setFeedback(`Post has been submitted: ${response}`)
            setFormState({ ...formState, title: "", body: "" })
        })
        .catch(error => setFeedback(`Sorry, post did not succeed. Please try again.`))
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
                {feedback ? (
                    <small>{feedback}</small>
                ) : null}
            </form >
        </section>
    );
};

PostsAdmin.getInitialProps = async function () {
    return { 
        transitionType: 'fadefast',
        timeout: 300
    }
}


export default PostsAdmin;

