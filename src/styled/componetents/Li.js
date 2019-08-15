import styled, { css } from 'styled-components';

const Li = styled.li`
    width:100%;  
    cursor:pointer;
    padding:15px;    
    border-radius:10px;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  opacity:1;
  justify-content:center;
  transition:background-color 1s ,opacity .5s;
  font-weight:bold ;
  :hover{
        ${({ nav }) => nav && bg}
      opacity:.7;
  }    
  :hover>.link{
        color:${({ theme }) => theme.colors.background};
    }
    
`

const bg = css`
    background-color:${({ theme }) => theme.colors.bg2};
`;

export default Li;