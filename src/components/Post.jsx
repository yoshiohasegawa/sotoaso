import React from "react";
import { Link } from "react-router-dom";
import "../styles/Post.css"

export default function Post({ postId, title, activity, user_id, user }) {
    return (
        <div className="post-container">
            <Link className="title" to={`/post/${postId}`}>
                {title}
            </Link>
                <p className="user">{user}</p>
        </div>
    )
}
