import styled from "styled-components";


export const Container = styled.section`

    padding: 2.8rem 0;

    > h2 {
        border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

        padding-bottom: 1.6rem ;

       
        margin-bottom: 1.6rem;

        font-size: 2rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    
`