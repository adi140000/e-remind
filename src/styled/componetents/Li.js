import styled from 'styled-components';

const Li = styled.li`
    padding: 20px;    
    transition: color .2s;
    cursor:pointer;
    :hover{
        color:${({ theme }) => theme.colors.gray};
    }
`

export default Li;