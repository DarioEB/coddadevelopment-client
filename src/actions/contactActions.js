import {
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_ERROR
} from '../types';

import client from '../config/axios';

export function sendMessageAction(contact) {
    return async (dispatch) => {
        dispatch(sendMessage);

        try {
            const response = await client.post('/api/contact', contact);
            dispatch( sendMessageSuccess(response) );
        } catch (err) {
            dispatch( sendMessageError(err) );
        }
    }   
}

const sendMessage = () => ({
    type: SEND_MESSAGE
});

const sendMessageSuccess = (response) => ({
    type: SEND_MESSAGE_SUCCESS,
    payload: response.data
});

const sendMessageError = (err) => ({
    type: SEND_MESSAGE_ERROR,
    payload: err.response.data
})