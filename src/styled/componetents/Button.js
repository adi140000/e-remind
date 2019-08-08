import styled from 'styled-components';

const Button = styled.button`

    border:none;
    background-color:${({ theme }) => theme.colors.btn};  
    color:${({ theme }) => theme.colors.font} ;  
    border-radius:${({ theme }) => theme.radius}; 
    padding:10px 20px;
    outline:none;
    cursor: pointer;
    margin-top:60px;
`;

export default Button;