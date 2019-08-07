import styled from 'styled-components';

const Hamburger = styled.div`
    width:70px;
    height:70px;    
    position:fixed;
    top:20px;
    left:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:2;
    cursor: pointer;
    overflow:hidden;
`
export default Hamburger;