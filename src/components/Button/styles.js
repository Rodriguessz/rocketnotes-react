import styled from "styled-components";


export const Container = styled.button`

    border-radius: 1rem;
    border: 0;

    width: 100%;
    height: 5.6rem;

    padding: 0 1.6rem;
    margin-top: 3.6rem ;

    background-color: ${({theme}) => theme.COLORS.ORANGE};

    font-weight: 500;
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    &:disabled{
        opacity: 50%;
        cursor: not-allowed;
    }


`