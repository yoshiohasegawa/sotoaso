import React, { useState, useRef } from "react";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const usernameInput = useRef();
    const passwordInput = useRef();

    function updateUsername(e) {
        e.preventDefault();
        setUsername(e.target.value);
    }

    function updatePassword(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    async function loginUser() {
        console.log(`Logging in ${username} ...`)
        try {
            const res = await axios.post("/api/users/login", {username, password})
            console.log(`${res.data.username} logged In!`);
            usernameInput.current.value = "";
            passwordInput.current.value = "";
            setUsername("");
            setPassword("");
        } catch (err) {
            console.log(err.response.data);
        }
    }

    function handleLoginUser(e) {
        e.preventDefault();
        loginUser();
    }

    return (
        <div className="login-container">
            <h1> Login Page </h1>
            <form>
                <label htmlFor="login-username">Email: </label>
                <input id="login-username" ref={usernameInput} type="text" placeholder="Username" onChange={updateUsername}></input>
                <label htmlFor="login-password">Email: </label>
                <input id="login-password" ref={passwordInput} type="text" placeholder="Password" onChange={updatePassword}></input>
                <input id="login-submit" type="submit" value="Login" onClick={handleLoginUser}></input>
            </form>
        </div>
    )
}
