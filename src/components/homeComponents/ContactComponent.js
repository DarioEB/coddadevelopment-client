import React from 'react';
import styled from '@emotion/styled';
import {
    TitleH2 
} from '../UI/ui';
import ContactInformation from './ContactInformation';
import ContactForm from './ContactForm';
const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ContactContent = styled.div`
    display: grid;
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
`

const ContactComponent = ({
    title, span
}) => {

    return (
        <section className="section m-height-100 section-contact" id="contact">
            <span className="span-section-contact">Contacto</span>
            <div className="back-container">
                <div className="container">
                    <ContactContainer>
                        <TitleH2>
                            {title}
                            <span>
                                {span}
                            </span>
                        </TitleH2>
                        <ContactContent>
                            <ContactInformation />
                            <ContactForm />
                        </ContactContent>
                    </ContactContainer>
                </div>
            </div>
        </section>
    );
}

export default ContactComponent;