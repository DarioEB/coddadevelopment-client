import styled from '@emotion/styled';

export const BtnContact = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    z-index: 5;
    
    .btn, a {
        background-color: transparent;
        width: 22.5rem;
        height: 4.5rem;
        text-align: center;
        &.btn-submit {
            width: 100%;
            margin: 1rem 0;
            @media (min-width: 768px) {
                width: 27.5rem;
                height: 5.5rem;
            }
        }
        @media (min-width: 768px) {
            width: 27.5rem;
            height: 5.5rem;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        transition: all .35s ease-in-out;
        border: .1rem solid var(--lBlue);
        ._text {
            font-size: 1.25rem;
            font-weight: 600;
            position: absolute;
            z-index: 10;
            transition: all .2s ease-in-out;
            letter-spacing: 4px;
            color: var(--b);
            @media (min-width: 768px) {
                color: var(--lBlue);
                font-size: 1.5rem;
            }
            &._text-small {
                font-size: 1.15rem;
                letter-spacing: 1px;
                @media (min-width: 768px) {
                    font-size: 1.35rem;
                }
            }
        }
        ._back {
            position: absolute;
            width: calc(100% + .2rem);
            height: calc(100% + .2rem);
            left: -.1rem;
            top: -.1rem;
            background: var(--gradient);
            transition: all .2s linear;
            /* width: 100%; */
            @media (min-width: 768px) {
                width: 0%;
            }
        }
        &:hover {
            /* border-color:transparent; */
            ._text {
                color: #000;
            }
            ._back {
                width: calc(100% + .2rem);
            }
        }
    }
`

export const Container = styled.div`
    width: 95%;
    max-width: 1100px;
    margin: 0 auto;
`

export const TitleH2 = styled.h2`
    font-size: 3.25rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--w);
    font-family: var(--audiowide);
    @media (min-width: 768px) {
        font-size: 3.75rem;
    }

    span {
        font-size: 1.25rem;
        font-weight: 300;
        clear: both;
        display: block;
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export const TitleH4 = styled.h4`   
    margin-top: 0;
    font-size: 1.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--w);
    font-family: var(--audiowide);
    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
    text-align: center;
`

export const FooterContentLinks = styled.div`
    display: flex;
    flex-direction: column;
    h4 {
        margin: 1.5rem 0;
        @media (min-width: 768px) {
            margin-top: 0;
        }
        color: #fff;
        font-size: 2.25rem;
        font-weight: 300;
        font-family: var(--audiowide);
        @media (min-width: 768px) {
            font-size: 2.5rem;
        }
    }
`