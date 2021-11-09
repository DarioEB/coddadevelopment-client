import {
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_ERROR,
    CLEAN_FORM_CONTACT
} from '../types';

const initialState = {
    loadmessage: null,
    errormessage: null,
    message: '',
    clean: null,
    
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
                clean: true,
                message: action.payload.message
            }
        case SEND_MESSAGE_ERROR:
            return {
                ...state,
                loadmessage: false,
                errormessage: false
            }
        case CLEAN_FORM_CONTACT: 
            return {
                ...state,
                clean: null
            }
        
        default:
            return state;
    }
}  

export default contactReducer;