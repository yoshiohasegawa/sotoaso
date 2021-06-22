import React from "react";
import { Link } from "react-router-dom";
import "../styles/Post.css"

export default function Post({ postId, title, activity, user_id, user }) {
    return (
        <div className="post-container">
            <Link className="link" to={`/post/${postId}`}>
                <h3 className="title">{title}</h3>
            </Link>
                <p className="user">{user}</p>
        </div>
    )
}
