import styled from 'styled-components';


const IconButton = styled.button`
    border: ${({ theme }) => theme.colors.btn} solid 2px;
    border-radius:${({ theme }) => theme.radius};    
    padding:10px 20px;    
    background-color:${({ theme }) => theme.colors.btn};
    color:${({ theme }) => theme.colors.bg2};
    font-size:300px;
    font-size:${({ theme }) => theme.fonts.small};    
    margin:0 10px;
    transition: .6s opacity , background-color .6s , color .6s;
    cursor: pointer;
    opacity:${({ edit }) => edit ? 0 : 1};

    
    :hover{
        background-color:${({ theme }) => theme.colors.bg2};
        color:${({ theme }) => theme.colors.btn};
    }

`

export default IconButton