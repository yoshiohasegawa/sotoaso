import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions";
import axios from "axios";

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
            console.log(`${res.data.username} logged In!`);
            usernameInput.current.value = "";
            passwordInput.current.value = "";
            setUsername("");
            setPassword("");
            if (res.data.auth) {
                // set store.authentication = true
                dispatch(login());
                // TODO: remove and authenticate with cookies on page reload
                localStorage.setItem("access-token", res.data.accessToken);
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
            <form>
                <label htmlFor="login-username">Username: </label>
                <input id="login-username" ref={usernameInput} type="text" placeholder="Username" onChange={updateUsername}></input>
                <label htmlFor="login-password">Password: </label>
                <input id="login-password" ref={passwordInput} type="password" placeholder="Password" onChange={updatePassword}></input>
                <input id="login-submit" type="submit" value="Login" onClick={handleLoginUser}></input>
            </form>
        </div>
    )
}
