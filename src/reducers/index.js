import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import contactReducer from "./contactReducer";
import helperReducer from "./helperReducer";
export default combineReducers({
    projects: projectsReducer,
    contact: contactReducer,
    helper: helperReducer
});