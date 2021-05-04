// TODO: authenticate user with cookies on page reload
let userAuthorized;
const accessToken = localStorage.getItem("access-token");
if (accessToken !== "undefined") {
    userAuthorized = true;
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