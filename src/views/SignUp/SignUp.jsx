import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

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
        const res = await axios.post("/api/users/", {email, username, password})
        const user = res.data;
        console.log(`FRONT-END ${user}`);
    }

    function handlePostUser(e) {
        e.preventDefault();
        console.log(`Posting: ${username}...`);
        postUser();
    }


    return (
        <div className="sign-up-container">
            <h1> Sign Up Page </h1>
            <form>
                <label htmlFor="sign-up-email">Email: </label>
                <input id="sign-up-email" type="text" placeholder="Email" onChange={updateEmail}></input>
                <label htmlFor="sign-up-username">Email: </label>
                <input id="sign-up-username" type="text" placeholder="Username" onChange={updateUsername}></input>
                <label htmlFor="sign-up-password">Email: </label>
                <input id="sign-up-password" type="text" placeholder="Password" onChange={updatePassword}></input>
                <input id="sign-up-submit" type="submit" value="Sign Up" onClick={handlePostUser}></input>
            </form>
        </div>
    )
}
