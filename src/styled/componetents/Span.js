import styled from 'styled-components';

const Span = styled.span`
    flex-basis:25%;    
    color:${({ theme }) => theme.colors.background};
    display:flex;
    align-items:center;
    flex-direction:column;
    text-align:center;
`
export default Span