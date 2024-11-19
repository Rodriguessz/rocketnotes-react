import styled from "styled-components";

export const Container = styled.button`

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 2.4rem;

    width: 100%;

    border: 0;
    border-radius: 1rem;
    
    margin-bottom: 2.4rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    padding: 1.6rem 2.2rem;

    > h1 {
        flex-grow: 1;
        font-size: 2.4rem;
        font-weight: 700;
        color:  ${({theme}) => theme.COLORS.WHITE};
       
    }

    > footer {

        width: 100%;

        display: flex;
        align-items: center;
        gap: 6px;
    }

    

`