import {
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_ERROR
} from '../types';

const initialState = {
    loadmessage: null,
    errormessage: null,
    message: ''
}

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                loadmessage: true
            }
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loadmessage: false,
                errormessage: true,
                message: action.payload.message
            }
        case SEND_MESSAGE_ERROR:
            return {
                ...state,
                loadmessage: false,
                errormessage: false
            }
        default:
            return state;
    }
}  

export default contactReducer;