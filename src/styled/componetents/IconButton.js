import styled from 'styled-components';


const IconButton=styled.button`
    border:none;
    border-radius:${({ theme }) => theme.radius};
    padding:10px 20px;    
    background-color:${({ theme }) => theme.colors.btn};
    color:${({ theme }) => theme.colors.bg2};
    font-size:300px;
    font-size:${({ theme }) => theme.fonts.small};    
    margin:0 10px;
    transition: .6s opacity;
    cursor: pointer;
    opacity:${({edit})=>edit?0:1};   

`

export default IconButton