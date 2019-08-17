import React from 'react';
import styled from 'styled-components';

const InputInner = styled.input`   
    width:100%;
    height:100%;
    border:none;     
    padding:10px;
    outline:none;   
    border-radius:7px;    
    font-weight:bold; 
    position:absolute; 
    top:0;
    left:0; 
    z-index:1;
    
    ::placeholder{
        color:${({ theme }) => theme.colors.gray};
        transition: color .6s ;
    }
    :focus::placeholder{
        color:${({ theme }) => theme.colors.btn};
    }
    :focus ~ div:after{
        opacity:1;
    }
`;

const DivOuter = styled.div`    
    border-radius:7px;   
    margin:20px; 
    position:relative;
    border : 2px solid ${({ theme }) => theme.colors.background}   ;
    width:250px;
    height:30px;
`;

const Div = styled.div`
    opacity:1;
    width:100%;
    height:100%;      
    
    border-radius:7px;
    :after{
        position:absolute;
        content:'';
        width:100%;
    height:100%; 
    top:0;
    left:0; 
    box-shadow: 0px 0px 15px 1px ${({ theme }) => theme.colors.btn};
        opacity:0;
        transition: .6s opacity;
    } 
    
`;

//<InputInner {...props}/>
const Input = (props) => {
    return (
        <DivOuter>            
            <InputInner {...props} />
            <Div />            
        </DivOuter>




    );
}

export default Input;




