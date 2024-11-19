import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.header`

    grid-area:  header;

    height: 10.5rem;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 8rem;

`


export const Profile = styled(Link)`

    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({theme}) => theme.COLORS.WHITE};


    > img{
        width: 7rem;
        height: 7rem;

        border-radius: 50%;
    }


    > div{
        display: flex;
        flex-direction: column;

        font-size: 1.8rem;

        span{
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 1.4rem;

        }

        span{
            color: ${({theme}) => theme.COLORS.WHITE};
            font-size: 1.8rem;
        }
    }
    


`

export const Logout = styled.button`
    
    border: none;
    background: none;

    > svg {
        font-size: 3.6rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }


`