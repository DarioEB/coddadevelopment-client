import React from 'react';
import styled from '@emotion/styled';
import { FooterContentLinks } from '../../UI/ui';
import { scroller } from 'react-scroll';
const FooterNavigationNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .75rem;
    @media (min-width: 768px) {
        gap: 1rem;
    }
    .footer-link {
        font-size: 1.25rem; 
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        cursor: pointer;
        &::before {
            position: absolute;
            width: 0%;
            transition: all .33s ease-out;
            content: '';
            top: 100%;
            left: 0%;
            height: .15rem;
            background: var(--gradient);
        }
        &:hover {
            &::before {
                width: 100%;
            }
        }
        @media (min-width: 768px) {
            font-size: 1.5rem;
        }
    }
`

const FooterNavigation = ({links}) => {

    const scrollType = {
        duration: 333,
        delay: 33,
        smooth: true,
        offset: -10
    }

    const handleScroll = (route) => {
        scroller.scrollTo(route, scrollType);
    }

    return (
        <FooterContentLinks>
            <h4>Navegación</h4>
            <FooterNavigationNav>
                {links.map( (link, i) => (
                    <span
                        key={i}
                        // to={`/${link.route}`}
                        onClick={() => handleScroll(link.route)}
                        className="footer-link text-gradient"
                    >
                        {link.name}
                    </span>
                ))}
            </FooterNavigationNav>
        </FooterContentLinks>
    );
}

export default FooterNavigation;