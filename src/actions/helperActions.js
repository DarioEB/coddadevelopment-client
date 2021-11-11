import {
    GET_LINKS 
} from '../types';

export function getLinksAction() {
    return async (dispatch) => {
        dispatch( getLinks() )
    }
}

const getLinks = () => ({
    type: GET_LINKS
})