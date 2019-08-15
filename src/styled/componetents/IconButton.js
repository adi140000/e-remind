import styled from 'styled-components';


const IconButton=styled.button`
    border:none;
    border-radius:${({ theme }) => theme.radius};
    padding:10px;    
    background-color:${({ theme }) => theme.colors.btn};
    color:${({ theme }) => theme.colors.font};
    font-size:${({ theme }) => theme.fonts.small};
    margin:0 10px;
    cursor: pointer;
    display:none;
    

`

export default IconButton