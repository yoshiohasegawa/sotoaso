import React from "react";
import { Link } from "react-router-dom";
import "../styles/Post.css"

export default function Post({ postId, title, activity, user_id, user }) {
    return (
        <div className="post-container">
            <Link to={`/post/${postId}`}>
                <h3>{title}</h3>
            </Link>
                <p>{user}</p>
        </div>
    )
}
