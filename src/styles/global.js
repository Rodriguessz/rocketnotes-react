import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`


*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root{
    font-size: 62.5%;
    font-family: "Roboto Slab", system-ui;
}

body{  
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    font-size: 1.6rem;
    color: ${( { theme } ) => theme.COLORS.WHITE };
}

a{
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.3s;
    font-family: "Roboto Slab", system-ui;
}

button:hover, a:hover{
    filter: brightness(0.9);
}


`
