import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toTitleCase } from "../utils";
import "../styles/SignUp.css"

export default function SignUpPage({ history }) {

    const schema = yup.object().shape ({
        email: yup.string().email().required(),
        username: yup.string().required(),
        password: yup.string().min(4).max(16).required(),
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    async function postUser({email, username, password}) {
        console.log(`Creating new user: ${username} ...`)
        try {
            const res = await axios.post("/api/users/signup", {email, username, password})
            console.log(`${res.data.username} created!`);
            if (res.status === 201) {
                history.push("/login")
            }
        } catch (err) {
            console.error("That username or email already exists...");
        }
    }

    function handlePostUser(data, e) {
        console.log(data);
        e.preventDefault();
        postUser(data);
    }

    return (
        <div className="sign-up-container">
            <h1> Please sign-up </h1>
            <form className="sign-up-form" onSubmit={handleSubmit(handlePostUser)}>
                <label 
                    className="sign-up-label"
                    htmlFor="sign-up-email">Email: </label>
                <input 
                    id="sign-up-email" 
                    className="sign-up-input"
                    {...register("email")}
                    type="text"
                    placeholder="Email"></input>
                <p>{errors.email && toTitleCase(errors.email.message)}</p>
                <label 
                    className="sign-up-label"
                    htmlFor="sign-up-username">Username: </label>
                <input 
                    id="sign-up-username" 
                    className="sign-up-input"
                    {...register("username")}
                    type="text"
                    placeholder="Username"></input>
                <p>{errors.username && toTitleCase(errors.username.message)}</p>
                <label
                    className="sign-up-label"
                    htmlFor="sign-up-password">Password: </label>
                <input
                    id="sign-up-password"
                    className="sign-up-input"
                    {...register("password")}
                    type="password"
                    placeholder="Password"></input>
                <p>{errors.password && toTitleCase(errors.password.message)}</p>
                <input
                    id="sign-up-submit"
                    type="submit"
                    value="Sign Up"></input>
            </form>
        </div>
    )
}
