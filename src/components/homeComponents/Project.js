import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ProjectContainer = styled.article`
    min-height: 35vh;
    border-radius: .5rem;
    padding: 2rem;
    position: relative;
    border: .01rem solid #425a6e;
    .back-image {
        position: absolute;
        z-index: 10;
        height: 100%;
        margin: 0 auto;
        width: 35%;
        top: 2.5%;
        left: calc(50% - calc(35% / 2));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        opacity: 0.55;
    }
`

const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-height: 35vh;
    position: relative;
    z-index: 15;
`

const ProjectContentHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`

const ProjectContentDescription = styled.div`
    h4 {
        color: var(--w);
        font-family: var(--audiowide);
        font-weight: 300;
        text-align: center;
        font-size: 2rem;
        @media (min-width: 768px) {
            font-size: 2.25rem;
        }
    }

    p{
        color: var(--w);
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 1.5rem;
        line-height: 1.5;
        text-align: center;
        margin: 0;padding: 0;
        @media (min-width: 768px) {
            font-size: 1.75rem;
        }
    }
`

const Project = ({ project }) => {


    return (
        <ProjectContainer>
            <ProjectContent>
                <ProjectContentHeader>
                    <a
                        href={`${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-project text-gradient shadow"

                    >
                        <i
                            className="fas fa-link"
                        ></i>
                    </a>
                    <Link
                        to={`/`}
                        className="link-project text-gradient shadow"
                    >
                        <i className="fas fa-folder"></i>
                    </Link>
                </ProjectContentHeader>
                <ProjectContentDescription>
                    <h4>{project.name}</h4>
                    <p>
                        {project.description}
                    </p>
                </ProjectContentDescription>
            </ProjectContent>
            <div className="back-image">
                <img
                    src={`${process.env.REACT_APP_BACKEND_URL}/api/projects/get-image/${project.images[0]}`}
                    alt={`Imagen proyecto ${project.name}`}
                />
            </div>
        </ProjectContainer>
    );
}

export default Project;