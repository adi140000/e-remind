import styled from 'styled-components';

const Section = styled.section`           
        width:100vw;
        height:100vh;
        background-color: ${ props =>props.login?props.theme.colors.background:props.theme.colors.font};
        background-image: url(${props=>props.login?props.theme.img.background:''});
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;        
        font-weight:bold;  
        
`;

export default Section;
