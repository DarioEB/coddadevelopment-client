import React from 'react';
import styled from '@emotion/styled';
import FooterImage from '../../../images/icono-codda.png';
import { Link } from 'react-router-dom';

const FooterImageContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: var(--audiowide);
    .icon img {
        width: 5.5rem;
        @media (min-width: 768px) {
            width: 8.5rem;
        }
    }
    .logo {
        display: flex;
        flex-direction: column;
        gap: .25rem;
        font-weight: 600;
        p {
            padding: 0;margin: 0;
            font-size: 4.75rem;
            line-height: 1;
            @media (min-width: 768px) {
                font-size: 5.5rem;
            } 
        }
        span {
            padding: 0;margin: 0;
            font-weight: 400;
            font-size: 1.25rem;
            letter-spacing: 2px;
            @media (min-width: 768px) {
                font-size: 1.5rem;
            }
        }
    }

`
const FooterLogo = () => {
    return (
        <Link
                    to={"/"}
                >
                    <FooterImageContent>
                        <div className="icon">
                            <img 
                                src={FooterImage}
                                alt="Footer Imagen"
                            />
                        </div>
                        <div className="logo">
                            <p className="text-gradient">CODDA</p>
                            <span className="text-gradient">development</span>
                        </div>
                    </FooterImageContent>
                </Link>
    );
}

export default FooterLogo;