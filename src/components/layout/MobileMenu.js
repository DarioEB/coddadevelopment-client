import React from 'react';
import { handleScroll } from '../helpers/helpers';
const MobileMenu = ({menu, links, setMenu}) => {

    const handleClick = (route) => {
        handleScroll(route);
        setMenu(!menu);
    }
    
    return (
        <section className={`mobile-menu ${menu && 'show-mobile-menu'}`}>
            <div className="content-mobile-menu">
                <nav className="mobile-menu_nav">
                    {links.map( (link, i) => (
                        <span
                            key={i}
                            onClick={() => handleClick()}
                            className="link"
                        >
                            {link.name}
                        </span>
                    ))}
                </nav>
            </div>
        </section>
    );
}

export default MobileMenu;