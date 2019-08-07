import styled from 'styled-components';


const Main = styled.main`
    width:80vw;
    min-height:80vh;
    background-color: ${({ theme}) => theme.colors.font};
    box-shadow: 1px -1px 21px 6px rgba(0,0,0,0.2);
    border-radius:${({theme})=>theme.radius};
    margin: 10vh 0 ;  

`

export default Main;