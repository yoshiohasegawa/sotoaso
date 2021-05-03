import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

// TODO: Render enter-container if not authenticated else,
//       render create-post-container
export default function Header() {
    return (
        <div className="header-container">
            <div className="site-logo-container">
                <Link to="/">
                    <h3 className="site-logo"> sotoaso </h3>
                </Link>
            </div>
            <div className="enter-container">
                <Link to="/login">
                    <h3 className="login-button"> Login </h3>
                </Link>
                <Link to="signup">
                    <h3 className="sign-up-button"> Sign Up </h3>
                </Link>
            </div>
        </div>
    )
}
