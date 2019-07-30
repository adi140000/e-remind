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
    flex-direction:column;
    padding-top:100px;
    align-items:center;
    justify-content:space-between;
`
export default Nav