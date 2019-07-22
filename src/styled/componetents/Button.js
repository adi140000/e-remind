import styled from 'styled-components';

const Button = styled.button`
    border:none;
    background-color:${({ theme }) => theme.colors.btn};
    color:${({ theme }) => theme.colors.font}; 
    border-radius:10px; 
    padding:10px 20px;
    outline:none;
    cursor: pointer;
`;

export default Button;