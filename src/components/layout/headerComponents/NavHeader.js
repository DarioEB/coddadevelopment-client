import React from 'react';
import styled from '@emotion/styled';
import { handleScroll } from '../../helpers/helpers';
const NavHeaderContent = styled.nav`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 1rem;
    }

    .nav-link {
        font-size: 1.75rem;
        color: var(--w);
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        cursor: pointer;
        &::before {
            position: absolute;
            content: '';
            /* width: 100%; */
            top: 100%;
            left: 0%;
            height: .25rem;
            background: var(--gradient);
            width: 0%;
            transition: all .2s ease-in;
        }
        &:hover {
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            &::before {
                width: 100%;
            }
        }
    }
`

const NavHeader = ({links}) => {

    return (
        <NavHeaderContent>
            {links.map( (link, i) => (
                <span
                    key={i}
                    onClick={() => handleScroll(link.route)}
                    className="nav-link"
                >
                    {link.name}
                </span>
            ))}
        </NavHeaderContent>
    );
}

export default NavHeader;