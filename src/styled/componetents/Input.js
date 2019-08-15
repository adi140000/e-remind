//import React from 'react';
import styled from 'styled-components';

const Input = styled.input`     
    width:250px;
    height:30px;
    border:none;     
    padding:10px;
    outline:none;   
    border-radius:7px;
    border : 2px solid ${({ theme }) => theme.colors.background}   ;
    font-weight:bold;    
    margin:20px;
    ::placeholder{
        color:${({ theme }) => theme.colors.gray};
        
    }
`;

/*const DivOuter = styled.div`
    border: solid 2px ${({ theme }) => theme.colors.btn};
    opacity:1;
    border-radius:7px;
    transition: opacity 1s;
    margin:20px;
    :focus{
        opacity:1;
    }

`;

const Input = (props) => {
    return (
        <DivOuter>
            <InputInner {...props} />
        </DivOuter>


    );
}*/

export default Input;




