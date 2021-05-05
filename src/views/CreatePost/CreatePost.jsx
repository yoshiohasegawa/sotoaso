import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
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
    const [activity, setActivity] = useState({name: "Activity"});
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [activityBlank, setActivityBlank] = useState();
    const [titleBlank, setTitleBlank] = useState();
    const [bodyBlank, setBodyBlank] = useState();
    const titleInput = useRef();
    const bodyInput = useRef();
    const userId = useSelector(state => state.userId);

    function updateActivity(e) {
        e.preventDefault();
        const selectedIdx = e.target.options.selectedIndex
        const activityId = parseInt(e.target.options[selectedIdx].getAttribute('data-key'));
        const updatedActivity = {
            id: activityId,
            name: e.target.value
        };
        setActivity(updatedActivity);
        setActivityBlank(false);
        console.log(activityBlank);
    }

    function updateTitle(e) {
        e.preventDefault();
        const updatedTitle = e.target.value;
        setTitle(updatedTitle);
        setTitleBlank(false);
        console.log(titleBlank);
    }

    function updateBody(e) {
        e.preventDefault();
        const updatedBody = e.target.value;
        setBody(updatedBody);
        setBodyBlank(false);
        console.log(bodyBlank);
    }

    function handlePost(e) {
        e.preventDefault();
        console.log('Clicked Post ...');
        let shouldPost = true;
        if (activity.name === "Activity") {
            setActivityBlank(true);
            shouldPost = false;
        }
        if (title === "") {
            setTitleBlank(true);
            shouldPost = false;
        }
        if (body === "") {
            setBodyBlank(true);
            shouldPost = false;
        }
        if (shouldPost) {
            postPost();
        }
    };
    
    async function postPost() {
        console.log(`Creating post ...`)
        const res = await axios.post("/api/posts", {
            title: title,
            activity_type: activity.id,
            body: body,
            user_id: userId
        });
        if (res.status === 201) {
            console.log(`${activity.name} post created!`)
            titleInput.current.value = "";
            bodyInput.current.value = "";
            history.push("/")
        }
    };

    return (
        <div className="create-post-container">
            <h1> Create a new post </h1>
            {activityBlank && 
                <div className="missing-container">
                    <h4 className="create-post-missing">Please select a valid Activity:</h4>
                </div>}
            <label className="create-post-label" htmlFor="activity-select">Select an activity: 
                <select id="activity-select" onChange={updateActivity}>
                    <option defaultValue>{"Activity"}</option>
                    {activities.map((activity) => {
                        return (
                            <option
                                value={activity.activity_name}
                                key={activity.id} 
                                data-key={activity.id}>
                                    {activity.activity_name}
                            </option>
                        );
                    })}
                </select>
            </label>
            {titleBlank &&
                <div className="missing-container">
                    <h4 className="create-post-missing">Please enter a Title:</h4>
                </div>}
            <form className="create-post-form">
                <label className="create-post-label" htmlFor="create-post-title">Title: </label>
                <input 
                    id="create-post-title"
                    className="create-post-input"
                    ref={titleInput}
                    type="text"
                    placeholder="Title" 
                    onChange={updateTitle}></input>
            </form>
            {bodyBlank &&
                <div className="missing-container">
                    <h4 className="create-post-missing">Please enter a Body:</h4>
                </div>}
            <form className="create-post-form">
                <label className="create-post-label" htmlFor="create-post-body">Body: </label>
                <input id="create-post-body"
                    className="create-post-input"
                    ref={bodyInput}
                    type="text"
                    placeholder="Body"
                    onChange={updateBody}></input>
            </form>
            <form className="create-post-form">
                <input id="create-post-submit" type="button" value="Post" onClick={handlePost}></input>
            </form>
        </div>
    )
}
