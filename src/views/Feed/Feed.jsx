import React from "react";
import PostList from "./components/PostList";
import "../../styles/Feed.css";

export default function Feed() {
    return (
        <div className="feed-container">
            <PostList />
        </div>
    )
}
