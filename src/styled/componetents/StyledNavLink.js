import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  text-decoration:none;
  color:${({ theme }) => theme.colors.font};   
  transition: color .2s;  
  &.selected{
    color:${({ theme }) => theme.colors.btn}; 
  }
`;

export default StyledNavLink;