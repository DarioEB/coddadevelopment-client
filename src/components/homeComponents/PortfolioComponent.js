import React from 'react';
import styled from '@emotion/styled';
import {
    TitleH2
} from '../UI/ui';

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


const PortfolioComponent = ({projects, title, span}) => {
    
    return (
        <section className="section m-height-100 section-portfolio" id="portfolio">
            <span className="span-section-portfolio">
                Proyectos
            </span>
            <div className="back-container">
                <div className="container">
                    <PorfolioComponentContent>
                        <TitleH2>
                            {title}
                            <span>
                                {span}
                            </span>
                        </TitleH2>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={35}
                            autoplay={true}
                            navigation={true}
                            loop={true}
                            centeredSlides={true}
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