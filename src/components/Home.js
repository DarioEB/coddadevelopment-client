import React, { Fragment, useEffect } from 'react';
import AboutComponent from './homeComponents/AboutComponent';
import ContactComponent from './homeComponents/ContactComponent';
import DescriptionComponent from './homeComponents/DescriptionComponent';
import HomeComponent from './homeComponents/HomeComponent';
import PortfolioComponent from './homeComponents/PortfolioComponent';
import ServicesComponent from './homeComponents/ServicesComponent';
import { Element } from 'react-scroll';

// Redux
import  { useDispatch, useSelector } from 'react-redux';
import { getProjectsAction } from '../actions/projectsActions'

const Home = () => {

    const dispatch = useDispatch();

    

    useEffect( () => {
        const downloadProjects = () => dispatch( getProjectsAction() );
        downloadProjects();
        // eslint-disable-next-line
    }, []);

    const projects = useSelector( state => state.projects.projects);

    // eslint-disable-next-line
    const loadprojects = useSelector(state => state.projects.loadprojects);

   

    return (
        <Fragment>
            <HomeComponent />
            <Element name="description">
                <DescriptionComponent 
                    title={"Soluciones web y móviles"}
                    span={"desarrollo de software"}
                />
            </Element>
            <Element name="services">
                <ServicesComponent 
                    title={"Servicios"}
                    span={"innovación y calidad"}
                />
            </Element>
            <Element name="portfolio">
                <PortfolioComponent 
                    projects={projects}
                    title={"Portafolio"}
                    span={"nuestra experiencia en el desarrollo"}
                />
            </Element>
            <Element name="about">
                <AboutComponent 
                    title={"Nosotros"}
                    span={"concepto codda"}
                />
            </Element>
            <Element name="contact">
                <ContactComponent 
                    title={"Contacto"}
                    span={"Atención 24/7 por todos los medios"}
                />
            </Element>
        </Fragment>
    );
}

export default Home;