import {
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_ERROR,
    SEND_EMAIL,
    SEND_EMAIL_SUCCESS,
    SEND_EMAIL_ERROR
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
    type: SEND_MESSAGE_ERROR
});

export function sendEmailAction(newsletter) {
    return async (dispatch) => {
        dispatch(sendEmail);
        try {
            const response = await client.post('/api/contact/newsletter', newsletter);
            dispatch( sendEmailSuccess(response));
        } catch (err) {
            dispatch( sendEmailError(err) );
        }
    }
}

const sendEmail = () => ({
    type: SEND_EMAIL
});

const sendEmailSuccess = (response) => ({
    type: SEND_EMAIL_SUCCESS,
    payload: response.data
});

const sendEmailError = (err) => ({
    type: SEND_EMAIL_ERROR
})