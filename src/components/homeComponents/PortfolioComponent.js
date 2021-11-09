import React from 'react';
import styled from '@emotion/styled';
import {
    TitleH2
} from '../UI/ui';
// // Imagenes
// import chocolate1 from '../../images/chocolate1.png';
// import sztynka1 from '../../images/sztynka1.png';
// import cripto1 from '../../images/cripto1.png';
// import freegame1 from '../../images/freegame1.png';
// import kozlo1 from '../../images/kozlo2.png';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, {
    Pagination,
    Autoplay,
    Navigation
} from 'swiper/core';
import Project from './Project';

SwiperCore.use([Pagination, Autoplay, Navigation]);

const PorfolioComponentContent = styled.div`
    display: block;
    padding: 4rem 0;
`


const PortfolioComponent = ({projects}) => {

    // const projects = [
    //     {name: 'Moteles Chocolate', url: 'moteleschocolate.com.ar', image: chocolate1},
    //     {name: 'Sztynka Barbero', url: 'sztynkabarbero.com', image: sztynka1},
    //     {name: 'Cripto webapp', url: 'criptoapp.online', image: cripto1},
    //     {name: 'Freegame', url: 'freegameapp.online', image: freegame1},
    //     {name: 'Kozlo', url: 'kozlohombres.com', image: kozlo1}
    // ]

    return (
        <section className="section m-height-100 section-portfolio" id="portfolio">
            <span className="span-section-portfolio">
                Proyectos
            </span>
            <div className="back-container">
                <div className="container">
                    <PorfolioComponentContent>
                        <TitleH2>
                            Proyectos
                            <span>Conoce de nuestra experiencia diseño y desarrollando software.</span>
                        </TitleH2>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={35}
                            autoplay={true}
                            navigation={true}
                            loop={true}
                            breakpoints={{
                                "768": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 20
                                }
                            }}
                        >
                            {projects.map( (project, i) => (
                                <SwiperSlide
                                    key={i}
                                >
                                    <Project 
                                        project={project}
                                    />
                                </SwiperSlide>
                            ) )}
                        </Swiper>
                    </PorfolioComponentContent>
                </div>
            </div>
        </section>
    );
}

export default PortfolioComponent;