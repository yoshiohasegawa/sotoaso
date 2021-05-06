import React, { useState, useRef } from "react";
import axios from "axios";
import "../../styles/SignUp.css"

export default function SignUp({ history }) {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const emailInput = useRef();
    const usernameInput = useRef();
    const passwordInput = useRef();

    function updateEmail(e) {
        e.preventDefault();
        setEmail(e.target.value);
    }

    function updateUsername(e) {
        e.preventDefault();
        setUsername(e.target.value);
    }

    function updatePassword(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    async function postUser() {
        console.log(`Creating new user: ${username} ...`)
        try {
            const res = await axios.post("/api/users/signup", {email, username, password})
            console.log(`${res.data.username} created!`);
            emailInput.current.value = "";
            usernameInput.current.value = "";
            passwordInput.current.value = "";
            setEmail("");
            setUsername("");
            setPassword("");
            if (res.status === 201) {
                history.push("/login")
            }
        } catch (err) {
            console.error("That username or email already exists...");
        }
    }

    function handlePostUser(e) {
        e.preventDefault();
        postUser();
    }

    return (
        <div className="sign-up-container">
            <h1> Please sign-up </h1>
            <form className="sign-up-form">
                <label className="sign-up-label" htmlFor="sign-up-email">Email: </label>
                <input id="sign-up-email" className="sign-up-input" ref={emailInput} type="email" placeholder="Email" onChange={updateEmail}></input>
                <label className="sign-up-label" htmlFor="sign-up-username">Username: </label>
                <input id="sign-up-username" className="sign-up-input" ref={usernameInput} type="text" placeholder="Username" onChange={updateUsername}></input>
                <label className="sign-up-label" htmlFor="sign-up-password">Password: </label>
                <input id="sign-up-password" className="sign-up-input" ref={passwordInput} type="password" placeholder="Password" onChange={updatePassword}></input>
                <input id="sign-up-submit" type="submit" value="Sign Up" onClick={handlePostUser}></input>
            </form>
        </div>
    )
}
