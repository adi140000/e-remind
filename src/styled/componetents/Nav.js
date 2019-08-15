import styled from 'styled-components';


const Nav = styled.nav`
    border-radius:${({ theme }) => theme.radius};
    z-index:1;
    position:fixed;
    top:0;
    left:0;
    background-color: ${ props => props.theme.colors.background};
    background-image: url(${props => props.theme.img.background});
    width:30vw;
    height:100vh;   
    display:flex;
    flex-direction:column;
    padding-top:150px;
    align-items:center;
    justify-content:space-between;
    transition: transform .8s , opacity 1s ;
    transform:${({ hamburger }) => !hamburger ? 'translate(-30vw)' : 'translate(0);'};
    opacity: ${({ hamburger }) => !hamburger?.6:1};
    
`
export default Nav