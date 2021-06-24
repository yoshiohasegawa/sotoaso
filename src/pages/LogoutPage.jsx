import React from "react";
import { useDispatch } from "react-redux";
import { logout, removeUserId } from "../actions";
import axios from "axios";

export default function LogoutPage({ history }) {
    const dispatch = useDispatch();

    async function logoutUser() {
        console.log(`Logging you out...`);
        try {
            const res = await axios.post("/api/users/logout");
            console.log("logged out!");
            if (res.status === 200) {
                // set store.authentication = false
                // set store.userId = ""
                dispatch(logout());
                dispatch(removeUserId());
                // TODO: remove after resolving on page reload
                // is successfully done with cookies, or more secure way...
                localStorage.removeItem("access-token");
                localStorage.removeItem("user-id");
                history.push("/");
            }
        } catch (err) {
            console.error(err);
        }
    }

    function handleLogoutUser(e) {
        e.preventDefault();
        logoutUser();
    }

    return (
        <div className="logout-container">
            <h1> Logout Page </h1>
            <h3>Are you sure?</h3>
            <form>
                <input id="logout-submit" type="submit" value="Logout" onClick={handleLogoutUser}></input>
            </form>
        </div>
    )
}
