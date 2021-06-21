// TODO: authenticate user with cookies on page reload
//       or, a more secure way. See function userAuthenticated()
import { userAuthenticated } from "../utils";

const authenticateReducer = (state = userAuthenticated(), action) => {
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