import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../Theme/Theme';


const GlobalStyled = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    
  
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
        
    }
    body{       
        color:${({ theme }) => theme.colors.font};     
        background-color:${({theme})=>theme.colors.gray}; 
        overflow:hidden;  
        
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