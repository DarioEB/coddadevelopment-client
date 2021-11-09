import React, {  useState } from 'react';
import styled from '@emotion/styled';
import {
    BtnContact
} from '../UI/ui';
import AlertField from '../alertComponents/AlertField';
import { useDispatch } from 'react-redux';
import { sendMessageAction } from '../../actions/contactActions';
const ContactFormContainer = styled.div`
    
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @media (min-width: 768px) {
            gap: 2rem;
        }
    }
`

const FieldContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    label {
        font-size: 1.25rem;
        @media (min-width: 768px) {
            font-size: 1.5rem;
        }
        font-weight: 600;
    }

    input,
    textarea,
    select {
        background-color: rgba(255, 255, 255, 0.1);
        border: .1rem solid #000;
        /* outline-color: var(--lBlue); */
        outline: .1rem solid var(--blue);
        padding: 1rem;
        font-size: 1.5rem;
        
        @media (min-width: 768px) {
            font-size: 1.75rem;
        }
        color: #fff;
        transition: all .33s ease-in;
        &:focus {
            background-color: rgba(255, 255, 255, 0.15);
        }
    }
    textarea {
        min-height: 10rem;
        resize: none;
    }
`

function validation(values) {
    let errors = {}

    if(values.name === '') {
        errors.name = 'Este campo es obligatorio';
    }
    if(values.email === '') {
        errors.email = 'Este campo es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'El e-mail ingresado no es válido';
    }
    if(values.subject === '') {
        errors.subject = 'Este campo es obligatorio';
    }
    if(values.message.length < 30) {
        errors.message = 'El mensaje debe ser de al menos 7 caracteres';
    }

    return errors;
}


const ContactForm = () => {

    const [contact, setContact] = useState({
        name: '',
        phone: '',
        contact_phone: false,
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    

    const handleChange = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    }

    const handleBlur = e => {
        if(e.target.name === 'message') {
            if(e.target.value.length < 30) {
                setErrors({
                    ...errors,
                    [e.target.name]: 'El mensaje debe tener al menos 30 caracteres'
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: null
                });
            }
        } else if(e.target.name === 'email') {
            if (!e.target.value) {
                setErrors({
                    ...errors,
                    [e.target.name]: 'Este campo es obligatorio'
                })
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)) {
                setErrors({
                    ...errors,
                    [e.target.name]: 'Email no válido'
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: null
                })
            }
        } else {
            if(e.target.value === '') {
                setErrors({
                    ...errors,
                    [e.target.name]: 'Este campo no puede ir vacío'
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: null
                })
            }
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        const getErrors = validation(contact);
        setErrors(getErrors);
        const noErrors = Object.keys(getErrors).length === 0;
        if(noErrors) {
            dispatch( sendMessageAction(contact) );
        }
    }

    return (
        <ContactFormContainer>
            <form
                onSubmit={handleSubmit}
            >
                <FieldContact>
                    <label 
                        className="text-gradient"
                        htmlFor="name">Nombre (*)</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name ? <AlertField message={errors.name} /> : null}
                </FieldContact>
                <FieldContact>
                    <label 
                        className="text-gradient"
                        htmlFor="phone">Teléfono</label>
                    <input 
                        type="tel"
                        id="phone"
                        name="phone"
                        value={contact.phone}
                    />
                </FieldContact>
                <FieldContact>
                    <label 
                        className="text-gradient"
                        htmlFor="email">E-mail (*)</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email ? <AlertField message={errors.email} /> : null}
                </FieldContact>
                <FieldContact>
                    <label
                        className="text-gradient" 
                        htmlFor="org"
                    >Organización</label>
                    <select
                        id="org"
                        name="org"
                        default={contact.org}
                        onChange={handleChange}
                    >
                        <option
                            value=""
                            disabled
                        ></option>
                        <option
                            value="Nuevo Emprendimiento"
                        >Nuevo Emprendimiento</option>
                        <option
                            value="Particular"
                        >Particular</option>
                        <option
                            value="PyME"
                        >PyME</option>
                        <option
                            value="Empresa"
                        >Empresa</option>
                    </select>
                </FieldContact>
                <FieldContact>
                    <label htmlFor="subject"
                        className="text-gradient">Asunto (*)</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={contact.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.subject ? <AlertField message={errors.subject} /> : null}
                </FieldContact>
                <FieldContact>
                    <label htmlFor="message"
                        className="text-gradient">Mensaje (*)</label>
                    <textarea
                        id="message"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></textarea>
                    {errors.message ? <AlertField message={errors.message} /> : null}
                </FieldContact>
                <BtnContact>
                    <button
                        type="submit"
                        className="btn btn-submit"
                    >
                        <span className="_text">Enviar</span>
                        <span className="_back"></span>
                    </button>
                </BtnContact>
            </form>
        </ContactFormContainer>
    );
}

export default ContactForm;