import styled from 'styled-components';

const H2 = styled.h2`
    font-size:${({ theme }) => theme.fonts.small};
    font-style:italic;
    color:${({ theme }) => theme.colors.btn};
    margin-bottom:5px;
`;

export default H2;