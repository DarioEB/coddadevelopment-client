import React from 'react';
import { scroller } from 'react-scroll'
const MobileMenu = ({menu, links, scrollType, setMenu}) => {

    const handleScroll = (route) => {
        scroller.scrollTo(route, scrollType);
        setMenu(!menu);
    }

    return (
        <section className={`mobile-menu ${menu && 'show-mobile-menu'}`}>
            <div className="content-mobile-menu">
                <nav className="mobile-menu_nav">
                    {links.map( (link, i) => (
                        <span
                            key={i}
                            onClick={() => handleScroll(link.route)}
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