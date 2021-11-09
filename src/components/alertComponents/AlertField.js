import React from 'react';
import styled from '@emotion/styled';
const AlertFieldContent = styled.div`
    width: 100%;
    text-align: left;
    padding: .5rem .75rem;
    background-color: rgba(255, 255, 255, 0.15);
    border-left: .25rem solid red;

    span {
        color: #fff;
        font-size: 1.25rem;
        @media (min-width: 768px) {
            font-size: 1.5rem;
        }
    }
`

const AlertField = ({message}) => (
    
    <AlertFieldContent>
        <span>{message}</span>
    </AlertFieldContent>
)

export default AlertField;