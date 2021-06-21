import jwt from "jsonwebtoken";

export const userAuthenticated = () => {
    const accessToken = localStorage.getItem("access-token");
    let userAuth;
    
    if (accessToken) {
        jwt.verify(accessToken, process.env.REACT_APP_ACCESS_TOKEN_SECRET, (err) => {
            if (err) {
                userAuth = false;
            } else {
                userAuth = true;
            }
        })
    } else {
        userAuth = false;
    }

    return userAuth;

};

export const toTitleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1);
};