import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";
import "../styles/PostList.css";

export default function PostList() {
  const [postList, setPostsList] = useState([]);

  async function fetchPosts() {
    try {
      const res = await axios.get("/api/posts/");
      setPostsList(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Posts failed to load ...");
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="post-list-container">
      {postList.map((post) => {
        return (
          <Post
            postId={post.id}
            title={post.title}
            activity={post.activity_name}
            userId={post.user_id}
            user={post.username}
            createdAt={post.created_at}
            key={post.id}
          />
        );
      })}
    </div>
  );
}
