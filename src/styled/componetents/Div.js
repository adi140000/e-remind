import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction:${({edit})=>edit?'row':'column'};
    align-items:center;
    justify-content:${({edit})=>edit?'flex-end':'center'};
    border-bottom: ${({edit})=>edit?'1px':'3px'} solid ${({ theme }) => theme.colors.background};
    padding: 20px;
    min-width:80%;
    color:${({ theme }) => theme.colors.background};

`

export default Div