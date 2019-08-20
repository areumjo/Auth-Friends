import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [ state, setState] = useState({credentials: {
        username: "",
        password: ""
    }})

    const handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
    };
    
    const login = e => {
        e.preventDefault();
        axios
          .post("http://localhost:5000/api/login", this.state.credentials)
          .then(res => console.log(res))
          .catch(err => console.log(err.response));
    };
    
    return (
        <>
            <form onSubmit={login}>
                <input
                type="text"
                name="username"
                value={state.credentials.username}
                onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={state.credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
            <p>Login compo</p>
        </>
    )
}

export default Login;