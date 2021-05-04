import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions";
import axios from "axios";

export default function Logout({ history }) {
    const dispatch = useDispatch();

    async function logoutUser() {
        console.log(`Logging you out...`)
        try {
            const res = await axios.post("/api/users/logout")
            console.log("logged out!");
            if (res.status === 200) {
                // set store.authentication = false
                dispatch(logout());
                // TODO: remove after authentication on page reload
                // is successfully done with cookies
                localStorage.removeItem("access-token")
                history.push("/")
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
