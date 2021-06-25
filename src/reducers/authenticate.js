import { userAuthenticated } from "../utils";

const initialState = userAuthenticated()
const authenticateReducer = (state = initialState, action) => {
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