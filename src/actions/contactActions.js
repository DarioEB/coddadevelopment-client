import {
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_ERROR,
    SEND_EMAIL,
    SEND_EMAIL_SUCCESS,
    SEND_EMAIL_ERROR,
    CLEAN_FORM_CONTACT
} from '../types';
import Swal from 'sweetalert2';
import client from '../config/axios';

export function sendMessageAction(contact) {
    return async (dispatch) => {
        dispatch(sendMessage);

        try {
            const response = await client.post('/api/contact', contact);
            dispatch( sendMessageSuccess(response) );
            if(response.status === 200) {
                Swal.fire({
                    title: 'Mensaje enviado',
                    text: `Tu mensaje se envió correctamente`,
                    type: 'success',
                    background: '#000',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ok!',
                    customClass: {
                        popup: 's-container',
                        title: 's-title',
                        htmlContainer: 's-text',
                        confirmButton: 's-btn',
                    }
                }).then( (value) => {
                    if(value.isConfirmed) {
                        dispatch( cleanFormContat() )
                    }
                })
            }
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

const cleanFormContat = () => ({
    type: CLEAN_FORM_CONTACT
})

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

