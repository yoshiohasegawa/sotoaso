import React from "react";
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <div className="post-container">
            <Link to={`/post/${1}`}>
                <h3> I am a post </h3>
            </Link>
        </div>
    )
}
