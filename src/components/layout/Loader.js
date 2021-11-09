import React from 'react';
import styled from '@emotion/styled';

const ContentSpinner = styled.div`
    position: fixed;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    background-color: rgba(0, 0, 0, 0.85);
`

const Loader = () => {


    return (
        <ContentSpinner>
            <div className="spinner">

            </div>
        </ContentSpinner>
    )

}

export default Loader;