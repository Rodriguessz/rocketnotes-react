import styled from 'styled-components'

export const Container = styled.textarea`

    width: 100%;
    height: 15rem;

    margin-bottom: 1.6rem;

    border-radius: 1rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    
    font-family: 'Roboto', serif;
    font-size: 1.4rem;
    color: ${({theme}) => theme.COLORS.WHITE};

    border: 2px solid transparent;
    //Does not allow the user to resize the textarea;
    resize: none;

    padding: 2rem;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    } 


    &:focus{
        border: 2px solid ${({theme}) => theme.COLORS.GRAY_300};
        outline: none;
    }

`