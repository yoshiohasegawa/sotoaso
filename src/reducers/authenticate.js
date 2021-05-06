// TODO: authenticate user with cookies on page reload
//       or, a more secure way...
import jwt from "jsonwebtoken";

let userAuthorized;
const accessToken = localStorage.getItem("access-token");

if (accessToken) {
    jwt.verify(accessToken, process.env.REACT_APP_ACCESS_TOKEN_SECRET, (err) => {
        if (err) {
            userAuthorized = false;
        } else {
            userAuthorized = true;
        }
    })
} else {
    userAuthorized = false;
}

const authenticateReducer = (state = userAuthorized, action) => {
    switch(action.type) {
        case "LOGIN":
            return true;
        case "LOGOUT":
            return false;
        default:
            return state;
    }
}

export default authenticateReducer;