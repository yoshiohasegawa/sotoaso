import React, { useState } from "react";
import "../../styles/CreatePost.css";

export default function CreatePost() {
    const [activity, setActivity] = useState();
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    function updateActivity(e) {
        e.preventDefault();
        const updatedActivity = e.target.value;
        setActivity(updatedActivity);
        console.log(updatedActivity);
    }

    function updateTitle(e) {
        e.preventDefault();
        setTitle(e.target.value);
    }

    function updateBody(e) {
        e.preventDefault();
        setBody(e.target.value);
    }

    return (
        <div className="create-post-container">
            <h1> Create a new post </h1>
            <label className="create-post-label" htmlFor="activity-select">Select an activity: 
                <select id="activity-select" onChange={updateActivity}>
                    <option defaultValue>{"Activity"}</option>
                    <option value={"Running"} key={"Running"}>{"Running"}</option>
                    <option value={"Cycling"} key={"Cycling"}>{"Cycling"}</option>
                </select>
            </label>
            <form className="create-post-form">
                <label className="create-post-label" htmlFor="create-post-title">Title: </label>
                <input id="create-post-title" className="create-post-input" type="text" placeholder="Title" onChange={updateTitle}></input>
            </form>
            <form className="create-post-form">
                <label className="create-post-label" htmlFor="create-post-body">Body: </label>
                <input id="create-post-body" className="create-post-input" type="text" placeholder="Body" onChange={updateBody}></input>
            </form>
        </div>
    )
}
