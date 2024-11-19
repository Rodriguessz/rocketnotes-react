import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;

    padding: 0 2rem;
    
    border-radius: 1rem;
    border: ${({theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    //Checks if the input is new or not;
    background-color: ${({theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    margin-bottom: 1.6rem;
    

    > input {
        height: 5.6rem;
        width: 100%;

        background: transparent;
        border: none;
        
        color: ${({theme}) => theme.COLORS.WHITE};

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }

        &:focus{
            outline: none;
            border: none;
        }

    }

    >  button {
        background:none;
        border: none;

        svg {
            color: ${({theme, $isnew }) => $isnew ? theme.COLORS.ORANGE : theme.COLORS.RED};
            font-size: 2rem
        }
    }

`