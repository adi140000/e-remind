import styled from 'styled-components';


const Nav = styled.nav`
    position:absolute;
    top:0;
    left:0;
    background-color: ${ props =>props.theme.colors.background};
    background-image: url(${props => props.theme.img.background});
    width:30vw;
    height:100vh;   
    display:flex;
    justify-content:center;
    align-items:center;
`
export default Nav