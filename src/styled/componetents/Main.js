import styled from 'styled-components';


const Main = styled.main`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:80vw;
    min-height:80vh;
    background-color: ${({ theme }) => theme.colors.font};
    box-shadow: 1px -1px 21px 6px rgba(0,0,0,0.2);
    border-radius:${({ theme }) => theme.radius};
    padding:40px;
    margin: 10vh 0 ;  

`

export default Main;