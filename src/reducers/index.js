import authenticateReducer from "./authenticate";
import userIdReducer from "./userId";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authentication: authenticateReducer,
    userId: userIdReducer
});

export default rootReducer;