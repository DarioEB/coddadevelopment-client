import {
    GET_PROJECTS,
    GET_PROJECTS_ERROR,
    GET_PROJECTS_SUCCESS
} from '../types';

import client from '../config/axios';

export function getProjectsAction() {
    return async (dispatch) => {
        dispatch(getProjects());

        try {
            const response = await client.get('/api/projects');
            dispatch(getProjectsSuccess(response))
        } catch (error) {
            dispatch(getProjectsError(error))
        }
    }
}

const getProjects = () => ({
    type: GET_PROJECTS
})

const getProjectsSuccess = (response) => ({
    type: GET_PROJECTS_SUCCESS,
    payload: response.data
});

const getProjectsError = (error) => ({
    type: GET_PROJECTS_ERROR,
    payload: error.response.data
})
