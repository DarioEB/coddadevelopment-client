import React, { useState } from 'react';
import styled from '@emotion/styled';
// HeaderComponent
import LogoHeader from './headerComponents/LogoHeader';
import NavHeader from './headerComponents/NavHeader';
import MenuButton from './headerComponents/MenuButton';
import MobileMenu from './MobileMenu';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0%;
    width: 100%;
    /* left: 2.5%; */
    z-index: 25;
    padding: .75rem 0;
    @media (min-width: 768px) {
        padding: 1rem 0;
    }
    background-color: var(--b);
`

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`

const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`


const Header = () => {

    const scrollType = {
        duration: 333,
        delay: 33,
        smooth: true,
        offset: -10
    }

    const [menu, setMenu] = useState(false);
    const links = [
        {name: 'Servicios', route: 'services'},
        {name: 'Portafolio', route: 'portfolio'},
        {name: 'Sobre COODA', route: 'about'},
        {name: 'Contacto', route: 'contact'}
    ]
    return (
        <HeaderContainer>
            <Container>
                <HeaderContent>
                    <LogoHeader 
                        setMenu={setMenu}
                    />
                    <NavHeader 
                        links={links}
                        scrollType={scrollType}
                    />
                    <MenuButton 
                        menu={menu}
                        setMenu={setMenu}
                    />
                </HeaderContent>
            </Container>
            <MobileMenu 
                menu={menu}
                links={links}
                scrollType={scrollType}
                setMenu={setMenu}
            />
        </HeaderContainer>
    );
}

export default Header;