import styled from 'styled-components';

const InnerBar = styled.div`
    width:100%;
    height:10%;
    border-radius:5px;
    transition:background-color .8s linear;
    background-color:${({ hamburger, theme }) => hamburger ? theme.colors.font : theme.colors.background};
    position:relative;
    ::after,::before{
        transition:background-color .8s linear;
        background-color:${({ hamburger, theme }) => hamburger ? theme.colors.font : theme.colors.background};
        border-radius:5px;
        content:'';
        width:80%;
        height:100%;        
        position:absolute;
        transform:translateY(20px)
    }
    ::before{
        width:60%;
        transform:translateY(-20px)
    }
`

export default InnerBar;