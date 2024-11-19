import styled from 'styled-components'


export const Container = styled.div`


    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.6rem auto;

    grid-template-areas: 
    "header"
    "content";

    .tags{
        display: flex;
        justify-content: space-between;

        flex-wrap: wrap;

    }
    

    > main {

        width: 100%;
        margin: 3.8rem auto;

        grid-area: content;
        overflow-y: auto;

    }

`


export const Form = styled.form`

    max-width: 55rem;

    margin: 0 auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 3.8rem;

        h1 {
            
            font-size: 3.6rem;
            font-weight: 500;
        }

        a {
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 2rem;
        }
    }



`