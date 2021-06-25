let userId = localStorage.getItem("user-id");
if (userId === "undefined" || !userId) {
    userId = "";
}

const userIdReducer = (state = userId, action) => {
    switch(action.type) {
        case "SET_USERID":
            return action.payload;
        case "ERASE_USERID":
            return "";
        default:
            return state;
    }
}

export default userIdReducer;