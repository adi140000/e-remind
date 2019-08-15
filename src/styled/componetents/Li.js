import styled, { css } from 'styled-components';

const Li = styled.li`
    width:100%;  
    cursor:pointer;
    padding:15px;   
    border-radius:10px;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  opacity:.7;
  justify-content:center;
  transition:background-color 1s ,opacity .5s;
  font-weight:bold ;  
  :hover{
        ${({ nav }) => nav && bg}
      opacity:1;
  }    
  :hover>.link{
        color:${({ theme }) => theme.colors.background};
    }
    :hover>div>div>button{
        opacity:1;
    }
`

const bg = css`
    background-color:${({ theme }) => theme.colors.bg2};
`;

export default Li;