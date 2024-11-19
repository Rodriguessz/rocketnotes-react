import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header" 
    "content";

    //Expanded area to cover the content grid Area;

    > main {
        grid-area: content;

        padding-top: 6.4rem;
        padding-bottom: 6.4rem;


        overflow-y:scroll ;
    }

`

export const Links = styled.ul`

    list-style: none;

    > li {
       margin-top : 1.2rem;

       > a {
        color: ${({theme}) => theme.COLORS.WHITE};
       }

    }

   

`


export const Content = styled.div`

    display: flex;
    flex-direction: column;

    max-width: 55rem;

    margin: 0 auto;

    > button:first-child{
        align-self: flex-end;
    }

    > h1 {

        font-size: 3.6rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.WHITE};

        margin-top: 6.4rem;

    }

    > p{

        margin-top: 1.6rem;
        
        color: ${({theme}) => theme.COLORS.WHITE};
        text-align: justify;

    }
`
