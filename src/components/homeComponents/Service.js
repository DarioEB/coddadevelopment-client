import React from 'react';
import styled from '@emotion/styled';
import {
    TitleH4
} from '../UI/ui'
const CService = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 95%;
    border: .01rem solid #425a6e;
    padding: 2rem 1rem;
    border-radius: .5rem;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    @media (min-width: 768px) {
        width: 100%;
    }

    .content-service_desc {
        display: grid;
        grid-template-columns: 1fr 3fr;
        align-items: center;
        .content-service_icons {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            
        }
        .content-service_text {
            p {
                font-size: 1.5rem;
                color: var(--w);
                padding: 0;margin: 0;
                line-height: 1.5;
                @media (min-width: 768px) {
                    font-size: 1.75rem;
                }
            }
        }
    }
    
`

const Service = ({service}) => {

    return (
        <div
        >
        <CService>
            <div className="content-service_title">
                <TitleH4>{service.title}</TitleH4>
            </div>
            <div className="content-service_desc">
                <div className="content-service_icons">
                    {service.icons.map((icon, i) => (
                        <i
                            key={i}
                            className={`${icon} text-gradient shadow`}
                        ></i>
                    ))}
                </div>
                <div className="content-service_text">
                    <p>
                        {service.text}
                    </p>
                </div>
            </div>
        </CService>
    </div>
    );
}

export default Service;