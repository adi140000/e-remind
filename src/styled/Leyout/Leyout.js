import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../Theme/Theme';


const GlobalStyled = createGlobalStyle`

    *{
        margin:0;
        padding:0;
    }
    body{
        height:100vh;
        width:100vw;        
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