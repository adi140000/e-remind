import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  text-decoration:none;
  color:${({ theme }) => theme.colors.font};
  transition: color .2s;
  :hover{
        color:${({ theme }) => theme.colors.gray};
    }
`;

export default StyledNavLink;