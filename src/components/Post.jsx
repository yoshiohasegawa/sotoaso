import React from "react";
import { Link } from "react-router-dom";
import "../styles/Post.css";

export default function Post({
  postId,
  title,
  activity,
  userId,
  user,
  createdAt,
}) {
  const postedDate = new Date(createdAt);
  console.log(postedDate);
  return (
    <Link className="post-link" to={`/post/${postId}`}>
      <div className="post-container">
        <div className="flex-container">
          <p className="user">@{user}</p>
          <p className="activity">{activity}</p>
        </div>
        <div className="flex-container">
          <h3 className="title">{title}</h3>
          <div className="posted-date-container">
            <p className="posted-date">
              {postedDate.toLocaleDateString()}{" "}
              {postedDate.toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
