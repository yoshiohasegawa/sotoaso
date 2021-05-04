import React, { useState } from "react";

export default function CreatePost() {
    const [title, setTitle] = useState();

    function updateTitle(e) {
        e.preventDefault();
        setTitle(e.target.value);
    }

    return (
        <div className="create-post-container">
            <h1> Create a new post </h1>
            <form>
                <label htmlFor="new-post-title">Title: <br/></label>
                <input id="new-post-title" type="text" placeholder="Title" onChange={updateTitle}></input>
            </form>
            <select>
                <option selected disabled>Activity Type</option>
                <option value={"Running"} key={"Running"}>{"Running"}</option>
                <option value={"Cycling"} key={"Cycling"}>{"Cycling"}</option>
            </select>
        </div>
    )
}
