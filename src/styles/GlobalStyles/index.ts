import {createGlobalStyle}  from "styled-components"


export const GlobalStyles = createGlobalStyle`
    *{
        background-color:${({theme})=> theme.COLORS.BACKGROUND} ;
        margin:0  auto;
        padding:0 ;
        box-sizing:border-box; 
        font-family: 'Roboto', sans-serif;
        list-style-type: none;
        
    }
`

