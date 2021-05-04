import React, { useState, useRef } from "react";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [getUsername, setGetUsername] = useState();
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
            console.log(`${JSON.stringify(res.data.username)} logged In!`);
            usernameInput.current.value = "";
            passwordInput.current.value = "";
            setUsername("");
            setPassword("");
            if (res.data.auth) {
                setIsLoggedIn(true);
            }
        } catch (err) {
            console.error(err.response.data.message);
        }
    }

    function handleLoginUser(e) {
        e.preventDefault();
        loginUser();
    }

    function updateGetUsername(e) {
        e.preventDefault();
        setGetUsername(e.target.value);
    }

    async function getUser() {
        console.log(`Getting ${username} ...`)
        try {
            const res = await axios.get(`/api/users/${getUsername}`);
            console.log(`Fetched ${res.data}`);
        } catch (err) {
            console.error(err.response.data.message);
        }
    }

    function handleGetUsername(e) {
        e.preventDefault();
        getUser();
    }

    return (
        <div className="login-container">
            <h1> Login Page </h1>
            {isLoggedIn ? (
                <form>
                <label htmlFor="get-username">Get User Info: </label>
                <input id="get-username" type="text" placeholder="Username" onChange={updateGetUsername}></input>
                <input id="get-username-submit" type="submit" value="Get" onClick={handleGetUsername}></input>
            </form>
            ) : (
                <form>
                    <label htmlFor="login-username">Email: </label>
                    <input id="login-username" ref={usernameInput} type="text" placeholder="Username" onChange={updateUsername}></input>
                    <label htmlFor="login-password">Email: </label>
                    <input id="login-password" ref={passwordInput} type="text" placeholder="Password" onChange={updatePassword}></input>
                    <input id="login-submit" type="submit" value="Login" onClick={handleLoginUser}></input>
                </form>
            )}
        </div>
    )
}
