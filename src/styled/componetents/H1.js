import styled from 'styled-components';

const H1 = styled.h1`
    font-style:italic;
    font-size: 3rem;
    border-bottom: 5px solid ${({ theme }) => theme.colors.font};
    padding:10px;
`;

export default H1;