import styled from 'styled-components';

const InputForm = styled.input`

    width:200px;
    height:30px;
    border-radius:10px; 
    padding:10px 50px;
    outline:none;
    position: relative;
    &::after{
        content:'swsw';
        display:block;
        height:100%;
        width:30px;
        position:absolute;
        top:0;
        left:0;
        background-color:${({theme})=>theme.colors.btn}
    }
`;

export default InputForm;