import React from 'react';
import styled from '@emotion/styled';
import { FooterContentLinks } from '../../UI/ui';

const FooterSocialMediaContent = styled.nav`
    display: flex;
    flex-direction: column;
    gap: .75rem;
    @media (min-width: 768px) {
        gap: 1rem;
    }
    align-items: flex-start;
    a {
        
        display: flex;
        flex-direction: row;
        gap: .5rem;
        align-items: center;
        i {
            width: 2.5rem;
            padding: .25rem;
            display: flex;
            transition: all .33s ease-out;
            align-items: center; justify-content: center;
            font-size: 1.75rem;
            position: relative;
            &::after {
                position: absolute;
                width: 0%;
                transition: all .33s ease-out;
                content: '';
                height: .2rem;
                left: 0%;
                top: 100%;
                background: var(--gradient);
            }
        }
        &:hover {
            i::after {
                width: 100%;
            }
        }

        span {
            font-size: 1.25rem;
            font-weight: 600;
            text-transform: uppercase;
            @media (min-width: 768px) {
                font-size: 1.5rem;
            }
        }
    }
`

const FooterSocialMedia = () => {
    
    const linksSocial = [
        {icon: 'fab fa-instagram', name: 'Instagram', url: 'https://www.instagram.com/coddadevelopment/'},
        {icon: 'fab fa-facebook-f', name: 'Facebook', url: 'https://www.facebook.com/coddadevelopment'},
        {icon: 'fab fa-whatsapp', name: 'Whatsapp', url: 'https://api.whatsapp.com/send/?phone=543755722023&text&app_absent=0'}
    ]   

    return (
        <FooterContentLinks>
            <h4>Redes sociales</h4>
            <FooterSocialMediaContent>
                {linksSocial.map( link => (
                    <a
                        key={link.icon}
                        href={`${link.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className={`${link.icon} text-gradient`}></i>
                        <span className="text-gradient">{link.name}</span>
                    </a>
                ))}
            </FooterSocialMediaContent>
        </FooterContentLinks>
    );
}

export default FooterSocialMedia;