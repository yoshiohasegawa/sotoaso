import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Header.css";

export default function Header() {
    const userAuthenticated = useSelector(state => state.authentication);

    return (
        <div className="header-container">
            <div className="site-logo-container">
                <Link className="link" to="/">
                    <h3 className="site-logo">sotoaso</h3>
                </Link>
            </div>
            {userAuthenticated ? (
                <div className="interact-container">
                    <Link className="link" to="/create-post">
                            <h3 className="button">Create Post</h3>
                    </Link>
                    <Link className="link" to="/logout">
                        <h3 className="button">Logout</h3>
                    </Link>
                </div>
            ) : (
                <div className="interact-container">
                    <Link className="link" to="/login">
                        <h3 className="button">Login</h3>
                    </Link>
                    <Link className="link" to="signup">
                        <h3 className="button">SignUp </h3>
                    </Link>
                </div>
            )}
        </div>
    )
}
