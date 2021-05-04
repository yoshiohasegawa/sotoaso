import React from "react";
import { Link } from "react-router-dom";

export default function Post({ postId, title, activity, user_id }) {
    return (
        <div className="post-container">
            <Link to={`/post/${postId}`}>
                <h3>{title}</h3>
            </Link>
        </div>
    )
}
