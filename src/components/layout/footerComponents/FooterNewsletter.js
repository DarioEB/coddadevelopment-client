import React from 'react';
import styled from '@emotion/styled';
import {
    FooterContentLinks
} from '../../UI/ui';

const FooterForm = styled.form`
    display: flex;
    flex-direction: column;
    .field-contact {
        display: flex;
        gap: .5rem;
        flex-direction: column;
        label {
            font-size: 1.25rem;
            @media (min-width: 768px) {
                font-size: 1.5rem;
            }
            font-weight: 600;
        }
        div {
            display: flex;
            align-items: center;
            input {
                flex: 1;
                height: 4rem;
                background-color: rgba(255, 255, 255, 0.1);
        
                border: .1rem solid #000;
                /* outline-color: var(--lBlue); */
                outline: .01rem solid #425a6e;
                border-top-left-radius: .5rem;
                border-bottom-left-radius: .5rem;
                padding: 1rem;
                font-size: 1.25rem;
                
                @media (min-width: 768px) {
                    font-size: 1.5rem;
                }
                color: #fff;
                transition: all .33s ease-in;
                &:focus {
                    background-color: rgba(255, 255, 255, 0.15);
                    background: none;
                    outline: .01rem solid var(--blue);
                }
            }
            .btn-news {
                flex: 0 0 4rem;
                height: calc(4rem + .1rem);
                background: var(--gradient);
                border-right: .1rem solid var(--lBlue);
                border-top: .1rem solid var(--lBlue);
                border-bottom: .1rem solid var(--lBlue);
                border-left: none;
                font-size :2.5rem;
                border-top-right-radius: .5rem;
                border-bottom-right-radius: .5rem;
                
            }
        }
    }
` 

const FooterNewsletter = () => {

    return (
        <FooterContentLinks>
            <h4>Contacto directo</h4>
            <FooterForm>
                <div className="field-contact">
                    <label 
                        className="text-gradient"
                        htmlFor="email">E-mail</label>
                    <div>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Deja tu email y nosotros te contactaremos"
                        />
                        <button
                            type="submit"
                            className="btn-news"
                        >
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </FooterForm>
        </FooterContentLinks>
    );
}

export default FooterNewsletter;