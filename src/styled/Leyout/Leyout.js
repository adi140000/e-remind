import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../Theme/Theme';


const GlobalStyled = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        margin:0;
        padding:0;       
        color:${({ theme }) => theme.colors.font};     
        background-color:${({ theme }) => theme.colors.gray} ;
        font-family: 'Ubuntu', sans-serif;
        font-size:10vw;
    }
`;


const Leyout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <>

                <GlobalStyled />
                {children}
            </>
        </ThemeProvider>);
}

export default Leyout;