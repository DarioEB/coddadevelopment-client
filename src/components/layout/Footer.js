import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import FooterLogo from './footerComponents/FooterLogo';
import FooterNavigation from './footerComponents/FooterNavigation';
import FooterSocialMedia from './footerComponents/FooterSocialMedia';
import FooterNewsletter from './footerComponents/FooterNewsletter';
import { getLinksAction } from '../../actions/helperActions';
import { useDispatch, useSelector } from 'react-redux';
const FooterContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    display: grid;
    position: relative;
    z-index: 30;
    gap: 2rem;
    @media (min-width: 768px) {
        gap: 0;
    padding: 2rem 0;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`

const FooterCopy = styled.div`
    padding: .5rem 0;
    margin: 0 auto;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    p {
        font-size: 1.25rem;
        @media (min-width: 768px) {
            font-size: 1.5rem;
        }
    }
`

const Footer = () => {  

    const dispatch = useDispatch();
    const links = useSelector( state => state.helper.links);

    useEffect(() => {
        const downloadLinks = () => dispatch( getLinksAction() );
        downloadLinks();
        // eslint-disable-next-line  
    }, []);



    return (
        <>
            <footer className="section p-12-5">
                <FooterContainer>
                    <FooterLogo />
                    <FooterNavigation 
                        links={links}
                    />
                    <FooterSocialMedia />
                    <FooterNewsletter />
                </FooterContainer>
            </footer>
            <FooterCopy>
                <p>
                    Copyright {new Date().getFullYear()} &copy;, CODDA development
                </p>
            </FooterCopy>
        </>
    );
}

export default Footer;