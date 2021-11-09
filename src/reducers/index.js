import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import contactReducer from "./contactReducer";
export default combineReducers({
    projects: projectsReducer,
    contact: contactReducer
});