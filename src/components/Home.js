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

    // if(projects.length === 0) return null;

    return (
        <Fragment>
            <HomeComponent />
            <Element name="description">
                <DescriptionComponent />
            </Element>
            <Element name="services">
                <ServicesComponent />
            </Element>
            <Element name="projects">
                <PortfolioComponent 
                    projects={projects}
                />
            </Element>
            <Element name="about">
                <AboutComponent />
            </Element>
            <Element name="contact">
                <ContactComponent />
            </Element>
        </Fragment>
    );
}

export default Home;