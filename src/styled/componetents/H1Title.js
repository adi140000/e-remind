import styled from 'styled-components';
import H1 from './H1';

const H1Title = styled(H1)`
    color: ${({ theme }) => theme.colors.background};
    margin-bottom:30px;
    
`

export default H1Title;