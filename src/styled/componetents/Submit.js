import styled from 'styled-components';

const Submit = styled.input`

    border:none;
    background-color:${({ theme }) => theme.colors.btn};  
    color:${({ theme }) => theme.colors.font} ;  
    border-radius:${({ theme }) => theme.radius}; 
    padding:10px 20px;
    outline:none;
    cursor: pointer;
    font-weight:bold;
    margin-top:60px;
    border: ${({ theme }) => theme.colors.btn} solid 2px;
    transition: .4s  color , .3s background-color;
    :hover{
        color:${({ theme }) => theme.colors.btn};
        background-color:${({ theme }) => theme.colors.font};
    }
`;

export default Submit;