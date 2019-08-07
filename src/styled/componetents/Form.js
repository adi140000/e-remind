import styled from 'styled-components';

const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    height:35vh;
    animation: appear 3s;  
        
        @keyframes appear {
                0%{
                        transform: translateX(-100vw);
                        opacity:0;
                }
               
                100%{
                    transform: translateX(0);
                        
                }
        }
`;

export default Form;