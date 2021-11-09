import React from 'react';
import styled from '@emotion/styled';
import {
    TitleH2
} from '../UI/ui';
const DescriptionComponentContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
        color: var(--w);
        font-size: 1.5rem;
        line-height: 1.5;
        @media (min-width: 768px) {
            font-size: 2rem;
        }
    }

    .list-services {
        display: grid;
        @media (min-width: 768px) {
            grid-template-columns: 2fr 1fr;
        }
        ul {
            margin: 0;padding: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li {
                p {
                    padding: 0;margin: 0;
                    font-weight: 400;
                    font-size: 1.75rem;
                    @media (min-width: 768px) {
                        font-size: 2.2rem;
                    }
                    font-family: var(--audiowide);
                }
            }
        }
    }
`

const DescriptionComponent = ({
    title,
    span
}) => {

    return (
        <section className="section m-height-100 section-description">
            <span className="span-section-description">CODDA</span>
            <div className="back-container">
            <div className="container">
                <DescriptionComponentContent>
                    <TitleH2>
                        {title}
                        <span>
                            {span}
                        </span>
                    </TitleH2>
                    <Description>
                        <p>
                            Consideramos que el desarrollo web es un herramienta
                            crucial para las empresas a la hora de poder obtener
                            ventajas sobre sus competidores, como mejorar la experiencia
                            del cliente, agregar productos innovadores y mejorar la
                            productividad. En CODDA para lograr este tipo de software
                            utilizamos lenguajes y tecnologías de última
                            generación para garatizar a nuestros clientes aplicaciones
                            y sitios web de calidad, rápidas, responsivas y versátiles.
                            Estos son los productos y servicios que te ofrecemos para
                            que puedas implementar en tu negocio, mejorando tu producción y
                            puedas llegar a más clientes.
                        </p>
                        <div className="list-services">
                            <ul>
                                <li><p className="text-gradient">Sitios Web / E-commerce.</p></li>
                                <li><p className="text-gradient">Aplicaciones Web.</p></li>
                                <li><p className="text-gradient">Aplicaciones Móviles.</p></li>
                                <li><p className="text-gradient">Servicios y aplicaciones Cloud.</p></li>
                                <li><p className="text-gradient">CMS</p></li>
                                <li><p className="text-gradient">Bases de datos.</p></li>
                            </ul>
                        </div>
                    </Description>
                </DescriptionComponentContent>
            </div>
            </div>
        </section>
    );
}

export default DescriptionComponent;