import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    
    flex-direction:column;
    align-items:center;
    justify-content:${({edit})=>edit?'flex-end':'center'};
    border-bottom: ${({edit})=>edit?'1px':'2px'} solid ${({ theme }) => theme.colors.background};
    padding: 20px;
    min-width:80%;
    color:${({ theme }) => theme.colors.background};
    &:hover>div>button{
        display:block;
    }

`

export default Div