import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background};
    padding: 30px;
    min-width:80%;

`

export default Div