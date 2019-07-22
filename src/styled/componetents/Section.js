import styled from 'styled-components';

const Section = styled.section`           
        width:100vw;
        height:100vh;
        background-color: ${ props => props.theme.colors.background};
        background-image: url(${props => props.theme.img.background});
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;        
        font-weight:bold;        
`;

export default Section;
