import styled,{keyframes} from 'styled-components';

const appearFromTop = keyframes`
    from{
        opacity: 0;
        transform: translateY(-25px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;


export const Container = styled.div`
    width: 80%;
    border-radius: 10px;
    margin-bottom: 10px;
    background: rgba(221,221,221,0.1);
    animation: ${appearFromTop} 1s;

    h2{
        margin-top: 15px;
        margin-left: 20px;
        font-family: 'Roboto Slab';
        font-size: 20px;
    }

    p{
        margin-top: 15px;
        margin-left: 25px;
        margin-bottom: 15px;
        font-family: 'Roboto Slab';
        font-size: 15px;
    }
`;