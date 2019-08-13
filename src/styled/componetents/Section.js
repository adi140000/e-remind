import styled from 'styled-components';

const Section = styled.section`           
        width:100vw;
        min-height:100vh;
        background-color: ${ ({login,theme}) => login?theme.colors.background:theme.colors.gray };
        background-image: url(${props => props.login ? props.theme.img.background : ''});
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;        
        font-weight:bold;  
        transition: transform .8s, filter .8s;
        transform:${({ hamburger }) => hamburger ? 'translate(30vw)' : 'translate(0);'};
        
`;

export default Section;
