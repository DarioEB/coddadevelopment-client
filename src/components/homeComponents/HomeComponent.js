import React from 'react';
import styled from '@emotion/styled';
import HeaderLogo from '../../images/icono-codda2.png'
import { BtnContact } from '../UI/ui';
import { Link } from 'react-router-dom';
import { handleScroll } from '../helpers/helpers';
const HomeComponentContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;
    @media (min-width: 768px) {
        gap: 3rem;
    }
    padding: 5vh 0;
    
`

const LogoHome = styled.div`
    display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
        @media (min-width: 768px) {
            gap: 1rem;
        }
        img {
            width: 10rem;
        }
        h1 {
            /* background: var(--gradient); */
            margin: 0;padding: 0;
            font-family : var(--audiowide);
            font-size: 5.25rem;
            @media (min-width: 768px) {
                font-size: 6.5rem;
            }
            span {
                font-size: 1.5rem;
                display: block;
                @media (min-width: 768px) {
                    font-size: 2rem;
                }
            }
        }
`

const DescriptionHome = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;
    p {
        color: var(--w);
        padding: 0;margin: 0;
        line-height: 1.5;
        font-size: 1.5rem;
        font-weight: 500;
        @media (min-width: 768px) {
            font-size: 2rem;
        }
    }
`


const HomeComponent = () => {

    return (
        <section className="back-home">
            <div className="section m-height-100 film-home">
                <div className="container" >
                    <HomeComponentContent
                    >
                        <LogoHome>
                            <img
                                src={HeaderLogo}
                                alt="Logotipo"
                            />
                            <h1 className="text-gradient">
                                CODDA
                                {/* <span>development</span> */}
                            </h1>
                        </LogoHome>
                        <DescriptionHome>
                            <p>
                                Soluciones web y m??viles que tu Empresa o PyMes necesita,
                                con programaci??n totalmente a medida.
                            </p>
                            <p>
                                Aplicaciones y sitios web - E-commerce - Aplicaciones M??viles - Bases de datos - Cloud Apps.
                            </p>
                            <p>
                                Contactate para obtener m??s informaci??n sobre nuestros servicios, formas de trabajo y presupuestos.
                            </p>
                        </DescriptionHome>
                        <BtnContact>
                            <Link
                                to="/"
                                onClick={() => handleScroll('contact')}
                            >
                                <span className="_text">Contactate</span>
                                <span className="_back"></span>

                            </Link>
                        </BtnContact>
                    </HomeComponentContent>
                </div>
            </div>
        </section>
    );
}

export default HomeComponent;