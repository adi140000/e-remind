import styled from 'styled-components';

const Ul = styled.ul`
    font-size: ${({ theme,main }) =>main?theme.fonts.big:''};
    list-style:none;
`

export default Ul;