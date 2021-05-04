import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Header.css";

export default function Header() {
    const userAuthenticated = useSelector(state => state.authentication);

    return (
        <div className="header-container">
            <div className="site-logo-container">
                <Link to="/">
                    <h3 className="site-logo"> sotoaso </h3>
                </Link>
            </div>
            {userAuthenticated ? (
                <div className="interact-container">
                    <Link to="/create-post">
                        <h3 className="create-post-button"> Create Post </h3>
                    </Link>
                    <Link to="/logout">
                        <h3 className="logout-button"> Logout </h3>
                    </Link>
                </div>
            ) : (
                <div className="interact-container">
                    <Link to="/login">
                        <h3 className="login-button"> Login </h3>
                    </Link>
                    <Link to="signup">
                        <h3 className="sign-up-button"> Sign Up </h3>
                    </Link>
                </div>
            )}
        </div>
    )
}
