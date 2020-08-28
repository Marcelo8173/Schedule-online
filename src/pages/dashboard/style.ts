import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    margin-top: 25px;
    align-items: flex-start;
`;

export const AsideContainer = styled.aside`
 
`;

export const Body = styled.section`
    width: 100vw;
    margin-right: 35px;
    div{
        display: flex;
        align-content: center;
        margin-bottom: 30px;
        h3{
            flex: 1;
            margin-left: 45px;
        }
    }
`;

export const ButtonContainer = styled.div`
    margin-right: 500px;
    button{
        background: #FFFFFF;
        padding: 5px;
        border: 0;
        margin-left: 2px;
        text-align: center;
    }
    
`;