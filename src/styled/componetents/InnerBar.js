import styled from 'styled-components';



const InnerBar = styled.div`
    width:100%;
    height:10%;
    border-radius:${({ theme }) => theme.radius};
    transition:background-color .5s linear , transform .5s;
    background-color:${({ hamburger, theme }) => hamburger ? theme.colors.font : theme.colors.background};
    background-image: url(${props => props.theme.img.background});
    position:relative;
    transform:${({hamburger})=>hamburger?'rotate(45deg)':'rotate(0)'};
    ::after,::before{
        transition:background-color .5s  linear , transform .5s;
        background-color:${({ hamburger, theme }) => hamburger ? theme.colors.font : theme.colors.background};
        background-image: url(${props => props.theme.img.background});
        border-radius:${({ theme }) => theme.radius};
        content:'';
        width:100%;
        height:100%;        
        position:absolute;         
        transform:${({ hamburger }) => hamburger ? 'rotate(90deg) ' : 'rotate(0) translateY(20px)'};
       
        
    }
    ::before{        
        transform:${({hamburger})=>hamburger?'rotate(90deg) ':'rotate(0) translateY(-20px)'};
    }    
    
`



export default InnerBar;