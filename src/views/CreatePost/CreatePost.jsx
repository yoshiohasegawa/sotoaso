import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../actions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userAuthenticated, toTitleCase } from "../../utils";
import axios from "axios";
// TODO: Implement PopUp for authFailed
// import PopUp from "../PopUp/PopUp";
import "../../styles/CreatePost.css";

export default function CreatePost({ history }) {
    async function fetchActivityTypes() {
        try {
            const res = await axios.get("/api/activity-types");
            setActivities(res.data);
        } catch (err) {
            console.error("Activity Types failed to load ...");
        }
    }

    useEffect(() => {
      fetchActivityTypes();
    }, [])

    const [activities, setActivities] = useState([]);
    const userId = useSelector(state => state.userId);
    const dispatch = useDispatch();
    const [authFailed, setAuthFailed] = useState(false);

    const schema = yup.object().shape ({
        activity: yup.string().required(),
        title: yup.string().required(),
        body: yup.string().required()
    });

    const {register, handleSubmit, formState: {errors, touchedFields}} = useForm({
        resolver: yupResolver(schema)
    });

    async function postPost({activity, title, body}) {
        // TODO: Stick to one form of authentication.
        //       Currently, I authenticate on the front-end
        //       via localStoage access-token. Then,
        //       in the baack-end POST /api/posts authenticates
        //       via cookies access-token.
        if (userAuthenticated()) {
            console.log(`Creating post ...`)
            try {
                const res = await axios.post("/api/posts", {
                    title: title,
                    activity_type: activity,
                    body: body,
                    user_id: userId
                });
                if (res.status === 201) {
                    console.log("Post published!")
                    history.push("/");
                }
            } catch (err) {
                if (err.response.status === 400) {
                    // TODO: Implement PopUp for authFailed
                    setAuthFailed(true);
                }
            }
        } else {
            setAuthFailed(true);
        }
    };
    
    function handlePost(data, e) {
        e.preventDefault();
        postPost(data);
    };

    function handleLogin() {
        dispatch(logout());
        history.push("/login");
    }

    return (
        <div className="create-post-container">
            <h1> Create a new post </h1>
            <form>
                <label
                    className="create-post-label"
                    htmlFor="activity-select">Select an activity:
                </label>
                <select
                    id="activity-select"
                    defaultValue={undefined}
                    {...register("activity")}>
                    <option key="00" disabled={touchedFields.activity} value={undefined} label="Activity" ></option>
                    {activities.map((activity) => {
                        return (
                            <option
                                key={activity.id}    
                                value={activity.id}
                                label={activity.activity_name}>
                            </option>
                        );
                    })}
                </select>
                <p>{errors.activity && toTitleCase(errors.activity.message)}</p>
                <label
                    className="create-post-label"
                    htmlFor="create-post-title">Title: </label>
                <input 
                    id="create-post-title"
                    className="create-post-input"
                    {...register("title")}
                    type="text"
                    placeholder="Title"></input>
                <p>{errors.title && toTitleCase(errors.title.message)}</p>
                <label
                    className="create-post-label"
                    htmlFor="create-post-body">Body: </label>
                <input id="create-post-body"
                    className="create-post-input"
                    {...register("body")}
                    type="text"
                    placeholder="Body"></input>
                <p>{errors.body && toTitleCase(errors.body.message)}</p>
            </form>
            {authFailed ? (
                <form className="auth-failed-form">
                    <label 
                        className="auth-failed-label"
                        htmlFor="auth-failed-submit">
                            Your session has ended, please re-authenticate: </label>
                    <input 
                        id="auth-failed-submit"
                        type="button"
                        value="Login"
                        onClick={handleLogin}></input>
                </form>
            ) : (
                <form className="create-post-form">
                    <input 
                        id="create-post-submit"
                        type="button"
                        value="Post"
                        onClick={handleSubmit(handlePost)}></input>
                </form>
            )}
        </div>
    )
}
