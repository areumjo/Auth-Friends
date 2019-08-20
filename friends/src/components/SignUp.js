import React, { useState } from 'react';
import axios from 'axios';

const SignUp = props => {

    const [newUser, setNewUser] = useState({ name: "", password: "", age: "", email: "" })

    const handleChange = e => {
        e.preventDefault();
        setNewUser({...setNewUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e, newUser) => {
        e.preventDefault();
        axios
        .post("http://localhost:5000/api/friends", newUser)
        .then(res => {
            console.log('endpoint data: ', res)
            props.history.push('/login') 
            // localStorage.setItem('token', res.data.payload);
        })
        .catch(err => console.log('getting error: ', err.response));
        setNewUser({ name: "", password: "", age: "", email: "" })
    }
    console.log('newUser: ', newUser);
    
    return(
        <>
            <form onSubmit={e => handleSubmit(e, newUser)}>
                <p>Sign up here</p>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={newUser.name}
                        onChange={event => handleChange(event)}
                    />
                </label><br />
                <label>
                    Password:
                    <input
                        type="text"
                        name="password"
                        value={newUser.password}
                        onChange={event => handleChange(event)}
                    />
                </label><br />
                <label>
                    Age:
                    <input
                        type="text"
                        name="age"
                        value={newUser.age}
                        onChange={event => handleChange(event)}
                    />
                </label><br />
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={newUser.email}
                        onChange={event => handleChange(event)}
                    />
                </label><br />
                <button>Submit!</button>
            </form>
        </>
    )
};

export default SignUp;