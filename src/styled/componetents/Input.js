import styled from 'styled-components';

const Input = styled.input`
    margin-top:30px;
    width:250px;
    height:30px;
    border:none;
    border-radius:7px; 
    padding:10px;
    outline:none;
    position: relative;
    box-shadow: 12px 10px 5px 0px rgba(0,0,0,.3);
    font-weight:bold;
    ::placeholder{
        color:${({ theme }) => theme.colors.gray};
        
    }
`;

export default Input;