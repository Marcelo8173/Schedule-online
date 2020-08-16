import styled,{keyframes} from 'styled-components';

const appearFromTop = keyframes`
    from{
        opacity: 0;
        transform: translateY(-5    px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

interface ContainerProps{
    isShow: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: ${(props) => props.isShow ? 'initial': 'none'};
    width: 80%;
    border-radius: 0px 0px 10px 10px;
    margin-bottom: 10px;
    background: rgba(221,221,221,0.1);
    animation: ${appearFromTop} 0.2s;

  
`;

export const Content = styled.div`
    display: flex;

    section{
        flex: 1;
        h2{
            margin-top: 15px;
            margin-left: 20px;
            font-family: 'Roboto Slab';
            font-size: 20px;
        }

        p{
            margin-top: 15px;
            margin-left: 35px;
            margin-bottom: 15px;
            font-family: 'Roboto Slab';
            font-size: 15px;
        }
    }

    button{
        margin-top: 25px;
        margin-right: 25px;
        background: transparent;
        height: 50%;
        border: 0;
    }
`;