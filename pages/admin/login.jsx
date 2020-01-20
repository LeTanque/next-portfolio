import { useState, useEffect } from "react";
import axios from "axios";


const Login = () => {
    const [ formState, setFormState ] = useState({
        username: "",
        password: ""
    });
    const [ feedback, setFeedback ] = useState(null);

    const submitForm = event => {
        event.preventDefault()
        axios.post("https://next-portfolio-simple.herokuapp.com/api/auth/login", formState)
        .then(response => {
            setFeedback(`Login successful!`);
            setFormState({ username: "", password: "" });
            console.log("response --> ", response);
        })
        .catch(error => {
            setFeedback(`Sorry, login unsuccessful: ${error}`)
            setFormState({ username: "", password: "" });
        })
    };

    // If the feedback hook changes, this useEffect timer starts, and resets the feedback
    useEffect(() => {
        const timer = setTimeout(() => {
            setFeedback(null)
        }, 10000);
        return () => clearTimeout(timer);
    }, [feedback])

    return (
        <section className="section__form login">
            <form onSubmit={submitForm} >
                <input 
                    name="username"
                    type="text"
                    placeholder="Username"
                    autoComplete="username"
                    value={formState.username}
                    onChange={event => setFormState({...formState, [event.target.name]: event.target.value })}
                    />
                <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={formState.password}
                    onChange={event => setFormState({...formState, [event.target.name]: event.target.value })}
                    />
                <button onClick={submitForm}>Submit</button>
                {feedback ? (
                    <small>{feedback}</small>
                ) : null}
            </form >
        </section>
    );
};

Login.getInitialProps = async function () {
    return { 
        transitionType: 'fadefast',
        timeout: 300
    }
}

export default Login;

