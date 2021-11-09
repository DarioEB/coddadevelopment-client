import React from 'react';
import styled from '@emotion/styled';
import { animateScroll as scroll } from 'react-scroll';

const LogoHeaderContent = styled.div`
    display: block;
    font-family: var(--audiowide);
    
    .logo-link {
        font-size: 2.75rem;
        font-weight: 600;
        cursor: pointer;
    }
`

const LogoHeader = ({setMenu}) => {

    const handleScroll = () => {
        scroll.scrollToTop();
        setMenu(false);
    }

    return (
        <LogoHeaderContent>
            <span
                onClick={handleScroll }
                className="logo-link text-gradient"    
            >CODDA</span>
        </LogoHeaderContent>
    );
}

export default LogoHeader;