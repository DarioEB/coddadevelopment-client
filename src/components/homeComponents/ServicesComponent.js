import React from 'react';
import styled from '@emotion/styled';
import { TitleH2 } from '../UI/ui';
import Service from './Service';

const ServicesComponentContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Services = styled.div`
    display: grid;
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        row-gap: 4rem;
        column-gap: 2rem;
    }
`

const ServicesComponent = ({
    title,
    span
}) => {

    const services = [
        {
            title: 'Sitios Web / E-Commerce',
            icons: ['fas fa-store', 'fas fa-laptop-code'],
            text: 'Desarrollo y diseño de sitios web, menús QR, e-Commerce y catálogos online, adaptables a todos los dispositivos.'
        },
        { 
            title: 'Aplicaciones Web', 
            icons: ['fas fa-mobile-alt', 'fas fa-laptop'],
            text: 'Una herramienta para consolidar clientes, mejorar la productividad, eficacia y mejorar la experiencia con la eficiencia de una página web.' 
        },
        { 
            title: 'Aplicaciones Móviles', 
            icons: ['fab fa-android', 'fab fa-apple'],
            text: 'Creación y desarrollo de aplicaciones móviles híbridas y sincronizadas al sitio web.'
        },
        { 
            title: 'Servicios y Aplicaciones Cloud', 
            icons: ["fas fa-cloud-upload-alt"],
            text: 'Asesoramiento integral para la contratación de los servicios en la nube necesarios para tu sitio web o aplicación (Google Cloud, Heroku, AWS).'
        },
        {
            title: 'CMS',
            icons: ['fas fa-file-export'],
            text: 'Desarrollo de administrador de contenidos para ofrecer un alto rendimiento y escalabilidad con diseño 100% personalizados y responsivos.'
        },
        { 
            title: 'Bases de datos', 
            icons: ['fas fa-server', 'fas fa-database'],
            text: 'Diseño, estructuración, conexión y mantenimiento de bases de datos. Son útiles para asegurar la información y hasta pueden ser vinculadas con tu sitio web o aplicación.'
        }
    ]

    return (
        <section className="section m-height-100 section-services" id="services">
            <span className="span-section-services">SERVICIOS</span>
            <div className="back-container">
                <div className="container">
                    <ServicesComponentContent>
                        <TitleH2>
                            {title}
                            <span>
                                {span}
                            </span>
                        </TitleH2>
                        <Services>
                            {services.map( (service, i) => (
                                <Service
                                    key={i}
                                    service={service}
                                ></Service>
                            ))}
                        </Services>
                    </ServicesComponentContent>
                </div>
            </div>
        </section>
    );
}

export default ServicesComponent;