import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PostDetailPage({ match }) {
    const { id } = match.params
    const [post, setPost] = useState({});

    async function fetchPost() {
        try {
            const res = await axios.get(`/api/posts/${id}`);
            setPost(res.data);
        } catch (err) {
            console.error("Post failed to load ...");
        }
    };

    useEffect(() => {
      fetchPost();
    }, []);

    return (
        <div className="post-detail-container">
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
        </div>
    )
}
