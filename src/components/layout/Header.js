import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
// HeaderComponent
import LogoHeader from './headerComponents/LogoHeader';
import NavHeader from './headerComponents/NavHeader';
import MenuButton from './headerComponents/MenuButton';
import MobileMenu from './MobileMenu';
// Helper Action
import { getLinksAction} from '../../actions/helperActions';
import {useDispatch, useSelector} from 'react-redux';

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

    const [menu, setMenu] = useState(false);

    const dispatch = useDispatch();
    const links = useSelector(state => state.helper.links);
    
    useEffect( () => {
        const downloadLinks = () => dispatch(getLinksAction());
        downloadLinks();
        // eslint-disable-next-line
    }, []);

    if(links.length === 0) return null;
    
    return (
        <HeaderContainer>
            <Container>
                <HeaderContent>
                    <LogoHeader 
                        setMenu={setMenu}
                    />
                    <NavHeader 
                        links={links}
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
                setMenu={setMenu}
            />
        </HeaderContainer>
    );
}

export default Header;