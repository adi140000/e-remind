import styled from 'styled-components';

const H1 = styled.h1`
    font-style:italic;
    font-size: ${({ theme }) => theme.fonts.big};    
    border-bottom: 5px solid ${({ theme }) => theme.colors.bg2};   
    padding:10px;
`;

export default H1;