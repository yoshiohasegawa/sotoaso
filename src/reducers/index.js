import authenticateReducer from "./authenticate";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authentication: authenticateReducer
});

export default rootReducer;