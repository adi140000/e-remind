import styled from 'styled-components';

const Li = styled.li`
    width:100%;  
    cursor:pointer;
    padding:15px;    
    border-radius:10px;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:background-color 1s;
  font-weight:bold ;
  :hover{
      background-color:${({ theme }) => theme.colors.font};
      opacity:.7;
  }    
  :hover>.link{
        color:${({ theme }) => theme.colors.background};
    }
    
`

export default Li;