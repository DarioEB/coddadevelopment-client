import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
    TitleH2
} from '../UI/ui';
import AboutMision from './AboutMision';
import AboutVision from './AboutVision';

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const AboutDescription = styled.div`
    display: grid;
    align-items: center;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 2fr;
    }

    
`

const AboutButtons = styled.div`
        display: flex;
        
        @media (min-width: 768px) {
            
            flex-direction: column;
        }
        gap: 2rem;
        align-items: center;
        margin-bottom: 2rem;
        button {
            background-color: transparent;
            border: none;
            color: #fff;
            font-size: 1.5rem;
            padding: 1rem 1.5rem;
            font-family: var(--audiowide);
            @media (min-width: 768px) {
                font-size: 1.75rem;
            }
            cursor: pointer;
            &::before {
                position: absolute;
                width: 0%;
                transition: all .33s ease-out;
                left: 0%;
                top: 100%;
                content: '';
                height: .15rem;
                background: var(--gradient);
            }
        }
        /* button.active {
            position: relative;
            &::before {
                width: 100%;
            }
        } */
    `

const Descriptions = styled.div`
    @keyframes fadediv {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }animation-name: fadediv;
        animation-duration: 1.33s;
        animation-fill-mode: forwards;
        
    div {
        padding: 2rem;
        opacity: 0;
        animation-name: fadediv;
        animation-duration: 1.33s;
        animation-fill-mode: forwards;
        display: flex;
        flex-direction: column;
        p {
            font-size: 1.5rem;
            color: #fff;
            line-height: 1.5;
            margin: 0;padding: 0;
            @media (min-width: 768px) {
                font-size: 1.75rem;
            }
        }
    }
    div.active {
        border-radius: .5rem;
        border-left: .1rem solid var(--lBlue);animation-name: fadediv;
        animation-duration: 1.33s;
        animation-fill-mode: forwards;
        transition: all .33s ease-out;
    }
`

const AboutComponent = ({
    title, span
}) => {

    const [aboutcomponent, setAboutComponent] = useState('mision');

    return (
        <section className="back-about" id="about">
            <div className="film section m-height-75">
                <div className="container">
                    <AboutContainer>
                        <TitleH2>
                            {title}
                            <span>
                                {span}
                            </span>
                        </TitleH2>
                        <AboutDescription>
                            <AboutButtons>
                                <button
                                    className={` ${aboutcomponent === 'mision' ? 'active shadow not-width' : ''}`}
                                    onClick={() => setAboutComponent('mision')}
                                >Nuestra Misi??n</button>
                                <button
                                    className={`${aboutcomponent === 'vision' ? 'active shadow not-width ' : ''}`}
                                    onClick={() => setAboutComponent('vision')}
                                >Nuestra Visi??n</button>
                            </AboutButtons>
                            <Descriptions>
                                {aboutcomponent === 'mision' && <AboutMision />}
                                {aboutcomponent === 'vision' && <AboutVision />}
                            </Descriptions>
                        </AboutDescription>
                    </AboutContainer>
                    </div>
                </div>
        </section>
        
    );
}

export default AboutComponent;