import React from "react";
import { useDispatch } from "react-redux";
import { login, saveUserId } from "../actions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toTitleCase } from "../utils";
import axios from "axios";
import "../styles/Login.css"

export default function LoginPage({ history }) {
    const dispatch = useDispatch();

    const schema = yup.object().shape ({
        username: yup.string().required(),
        password: yup.string().min(4).max(16).required()
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    async function loginUser({username, password}) {
        console.log(`Logging in ${username} ...`)
        try {
            const res = await axios.post("/api/users/login", {username, password})
            if (res.data.auth) {
                console.log(`${res.data.username} logged In!`);
                dispatch(login());
                dispatch(saveUserId(res.data.id));
                localStorage.setItem("access-token", res.data.accessToken);
                localStorage.setItem("user-id", res.data.id);
                history.push("/")
            }
        } catch (err) {
            console.error(err.response.data.message);
        }
    }

    function handleLoginUser(data, e) {
        e.preventDefault();
        loginUser(data);
    }

    return (
        <div className="login-container">
            <h1> Please login </h1>
            <form className="login-form" onSubmit={handleSubmit(handleLoginUser)}>
                <label 
                    className="login-label" 
                    htmlFor="login-username">Username: </label>
                <input 
                    id="login-username" 
                    className="login-input" 
                    {...register("username")}
                    type="text" 
                    placeholder="Username"></input>
                <p>{errors.username && toTitleCase(errors.username.message)}</p>
                <label 
                    className="login-label" 
                    htmlFor="login-password">Password: </label>
                <input 
                    id="login-password" 
                    className="login-input" 
                    {...register("password")}
                    type="password" 
                    placeholder="Password"></input>
                <p>{errors.password && toTitleCase(errors.password.message)}</p>
                <input 
                    id="login-submit" 
                    type="submit" 
                    value="Login"></input>
            </form>
        </div>
    )
}
