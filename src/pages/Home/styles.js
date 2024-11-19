import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.5rem 12.8rem auto 8rem;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";


`

export const Brand = styled.div`
    grid-area: brand;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1{
        font-weight: bold;
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`

export const Menu = styled.ul`
    grid-area: menu;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    padding: 6.4rem 0;
    
    text-align: center;

    overflow-y: auto;

    > li {
        margin-bottom: 2.4rem;
    }

`

export const Search = styled.ul`
    grid-area: search;

    padding: 6.4rem;

` 


export const Content = styled.div`
    grid-area: content;

    padding: 0 6.4rem;
    overflow-y: auto;

` 
export const NewNote = styled(Link)`

    grid-area: newnote;
    background-color: ${({theme}) => theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
`