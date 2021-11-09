import {
    GET_PROJECTS,
    GET_PROJECTS_ERROR,
    GET_PROJECTS_SUCCESS
} from '../types';

const initialState = {
    projects: [],
    loadprojects: null,
    errorprojects: null,
    message: null
}

const projectsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PROJECTS:
            return {
                ...state,
                loadprojects: true
            }
        case GET_PROJECTS_ERROR:
            return {
                ...state,
                loadprojects: false,
                errorprojects: true
            }
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                loadprojects: false,
                errorprojects: null,
                projects: action.payload.projects
            }
        default:
            return state;
    }
    
}

export default projectsReducer;