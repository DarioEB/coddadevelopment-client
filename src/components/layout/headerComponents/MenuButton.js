import React from 'react';
import styled from '@emotion/styled';

const MenuButtonContent = styled.span`
    display: block;
    @media (min-width: 768px) {
        display: none;
    }

    .menu-button {
        position: relative;
        z-index: 30;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 4.5rem;
        height: 4.5rem;
        /* background-color: aliceblue; */
        padding: 1rem 1rem;
        cursor: pointer;
        transition: all 0.55s ease-in-out;
    }
    @media (min-width: 1140px) {
        .menu-button {
            display: none;
        }
    }
    .menu-button.menu-button.pressed {
        background-color: transparent;
        transition: all 0.55s ease-in-out;
    }
    .menu-button-lines {
        /* margin: 0 auto; */
        width: 3rem;
        height: 0.2rem;
        background: var(--gradient);
        transition: all 0.2s ease-in-out;
        opacity: 1;
    }
    .menu-button-lines::before,
    .menu-button-lines::after {
        content: "";
        position: absolute;
        width: 3rem;
        height: 0.2rem;
        background: var(--gradient);
        border-radius: 2rem;
        transition: all 0.55s ease-in-out;
    }
    .menu-button-lines::before {
        transform: translateY(-0.9rem);
    }
    .menu-button-lines::after {
        transform: translateY(0.9rem);
    }
    .menu-button.pressed .menu-button-lines {
    /* transform: rotate(45deg); */
        background: transparent;
    }
    .menu-button.pressed .menu-button-lines::before {
        transform: rotate(45deg);
        height: 0.3rem;
    }
    .menu-button.pressed .menu-button-lines::after {
        transform: rotate(-45deg);
        height: 0.3rem;
    }
`

const MenuButton = ({menu, setMenu}) => {

    return (
        <MenuButtonContent>
            <span 
                className={`menu-button ${menu && 'pressed'}`}
                onClick={() => setMenu(!menu)}    
            >
                <span 
                    className="menu-button-lines"
                ></span>
            </span>
        </MenuButtonContent>
    );
}

export default MenuButton;