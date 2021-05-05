import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { login, saveUserId } from "../../actions";
import axios from "axios";
import "../../styles/Login.css"

export default function Login({ history }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const usernameInput = useRef();
    const passwordInput = useRef();
    const dispatch = useDispatch();

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
            if (res.data.auth) {
                console.log(`${res.data.username} logged In!`);
                usernameInput.current.value = "";
                passwordInput.current.value = "";
                // set store.authentication = true
                // set store.userId = res.data.id
                dispatch(login());
                dispatch(saveUserId(res.data.id));
                // TODO: remove and resolve with cookies on page reload
                localStorage.setItem("access-token", res.data.accessToken);
                localStorage.setItem("user-id", res.data.id);
                history.push("/")
            }
        } catch (err) {
            console.error(err.response.data.message);
        }
    }

    function handleLoginUser(e) {
        e.preventDefault();
        loginUser();
    }

    return (
        <div className="login-container">
            <h1> Please login </h1>
            <form className="login-form">
                <label className="login-label" htmlFor="login-username">Username: </label>
                <input id="login-username" className="login-input" ref={usernameInput} type="text" placeholder="Username" onChange={updateUsername}></input>
                <label className="login-label" htmlFor="login-password">Password: </label>
                <input id="login-password" className="login-input" ref={passwordInput} type="password" placeholder="Password" onChange={updatePassword}></input>
                <input id="login-submit" type="submit" value="Login" onClick={handleLoginUser}></input>
            </form>
        </div>
    )
}
