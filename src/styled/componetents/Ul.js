import styled from 'styled-components';

const Ul = styled.ul`
    font-size: ${({ theme,main }) =>main?theme.fonts.big:''};    
    width:100%;   
    
`

export default Ul;