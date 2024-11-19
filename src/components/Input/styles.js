import styled from 'styled-components'


export const Container = styled.div`
    
    width: 100%;

    padding: 0 1.6rem;

    margin-bottom: 1.6rem;

    display: flex;
    align-items: center;
    gap: 1.2rem;
   
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    border-radius: 1rem;
    border: 2px solid transparent;
    
    color: ${({theme}) => theme.COLORS.GRAY_300};
   
    &:focus-within{
        border: 2px solid ${({theme}) => theme.COLORS.GRAY_300};
    }

    > input {

        width: 100%;

        background: transparent;
        border: 0;
        
        padding: 2rem 0 ;

        color: ${({theme}) => theme.COLORS.WHITE};

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};

            font-size: 1.4rem;
        }

        &:focus{
            border: 0;
            outline: 0;
        }




    }




`

