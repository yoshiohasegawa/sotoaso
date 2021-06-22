import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Header.css";

export default function Header() {
    const userAuthenticated = useSelector(state => state.authentication);

    return (
        <div className="header-container">
            <div className="site-logo-container">
                <Link className="logo-link" to="/">
                    sotoaso
                </Link>
            </div>
            {userAuthenticated ? (
                <div className="interact-container">
                    <Link className="link" to="/create-post">
                        Create Post
                    </Link>
                    <Link className="link" to="/logout">
                        Logout
                    </Link>
                </div>
            ) : (
                <div className="interact-container">
                    <Link className="link" to="/login">
                        Login
                    </Link>
                    <Link className="link" to="signup">
                        SignUp 
                    </Link>
                </div>
            )}
        </div>
    )
}
