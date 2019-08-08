import styled from 'styled-components';
import Theme from '../Theme/Theme';

const Label = styled.label`
    font-size: ${({ theme }) => theme.fonts.small};
    color:black;
    align-self:flex-start;
    margin-left:100px;
`

export default Label