import styled from "styled-components";
import backgroundImage from '../../assets/signinbackground.png'


export const Container = styled.div`

    height: 100vh;

    display: flex;
    //stretch to fill the container
    align-items: stretch;

`

export const Form = styled.form`

    display: flex;
    flex-direction: column; 
    justify-content: center;

    padding: 0 13.4rem;

    text-align: center;

    > h1 {

        font-size: 4.8rem;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.ORANGE};

        margin-bottom: 1.6rem;
    
    }

    > p {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 1.4rem;
        
        margin-bottom: 4.8rem;
        
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.WHITE};
        
        margin-bottom: 4.8rem;

    }

    > a {

        color: ${({theme}) => theme.COLORS.ORANGE};
        margin-top: 10rem;

    }
` 


export const Background = styled.div`

    flex: 1;

    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`