import React from 'react';
import styled from '@emotion/styled';
import { BtnContact } from '../UI/ui';

const ContactInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .phone-contact {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

const ContactInformation = () => {

    return (
        <ContactInformationContainer>
            <div className="phone-contact">
                <BtnContact>
                    <a
                        href="tel:+543755722023"
                        className="btn"
                    >
                        <span className="_text">
                            <i className="fas fa-phone"></i> +(543755) 722023
                        </span>
                        <span className="_back"></span>
                    </a>
                </BtnContact>
            </div>
            <div className="email-contact">
                <BtnContact>
                    <a
                        href="mailto:contact@coddadevelopment.com"
                        className="btn"
                    >
                        <span className="_text _text-small">
                            <i className="fas fa-email"></i> contact@coddadevelopment.com
                        </span>
                        <span className="_back"></span>
                    </a>
                </BtnContact>
            </div>
        </ContactInformationContainer>
    );
}

export default ContactInformation;