import styled from "styled-components";


export const Container = styled.div`

    width: 100%;

    > header{
        padding: 4.8rem 14.4rem;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

        svg {
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 2.4rem;

        }
    }

`


export const Form = styled.form`

    max-width: 34rem;

    margin: 10rem auto 0;

    > div:nth-child(4){
        margin-top: 2.4rem;
    }
   
`  


export const Avatar = styled.div`

    position: relative;
    width: 18.6rem;
    height: 18.6rem;
    
    margin: -16.8rem auto 6.4rem;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        
        position: absolute;
        bottom: .7rem;
        right:  .7rem;

        display: flex;

        padding: 1.4rem;
        
        border-radius: 50%;

        background-color: ${({theme}) => theme.COLORS.ORANGE};
    
        cursor: pointer;

        svg {
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }

    > input{
        display: none;
    }


`

