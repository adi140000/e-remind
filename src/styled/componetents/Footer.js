import styled from 'styled-components';

const Footer = styled.footer`
    height:10%;
    width:100%;
    color:${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fonts.small};
    
    display:flex;
    justify-content:center;
    align-items:center;
`

export default Footer;