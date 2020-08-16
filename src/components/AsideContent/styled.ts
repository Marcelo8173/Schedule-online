import styled, { keyframes } from 'styled-components';

const lights = keyframes`
   15%{
        box-shadow: 0px 2px 25px 0px rgba(255,255,255, 0.7);
    }
    25%{
        box-shadow: 0px 4px 25px 0px rgba(255,255,255, 0.9)
    }
    35%{
        box-shadow: 0px 4px 25px 0px rgba(255,255,255, 0.8);
    }
    45%{
        box-shadow: 0px 4px 25px 0px rgba(255,255,255, 0.7);
    }
    55%{
        box-shadow: 0px 4px 25px 0px rgba(255,255,255, 0.6);
    }
    65%{
        box-shadow: 0px 4px 25px 0px rgba(255,255,255, 0.5);
    }
    75%{
        box-shadow: 0px 4px 25px 0px rgba(255,255,255, 0.3);
    }
    
`;

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(150px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const Container = styled.div`
    flex: 1;
    width: 100%;
    margin-top: 10px;
    background: #28262E;
    margin-bottom: 30px;
    border-radius: 40px;
    margin-right: 40px;
    /* box-shadow: 0px 2px 25px 0px rgba(255,255,255, 0.7); */
    animation: ${lights} 15s;
    animation-iteration-count: infinite;

    h3{
        font-family: 'Roboto Slab';
        color: #FAA91E;
        margin-left: 30px;
        margin-bottom: 20px;
        font-size: 18px;
    }
`;

export const Header = styled.header`
    margin-bottom: 25px;
    
    h1{
        flex: 1;
        padding-left: 25px;
        padding-bottom: 30px;
        margin-right: 25px;
        border-bottom: 2px solid #62C480;
        margin-top: 20px;
        margin-left: 40px;
        font-size: 20px;  
        color: #F2EDFF;  
    }
`;

export const Content = styled.div`
    margin-bottom: 25px;
    display: flex; 
    flex-direction: column;
    align-items: center;    
`;


export const CardContent = styled.button`
    border: 0;
    text-decoration: none;
    flex: 1;
    color: #FFFF;
    display: flex;
    padding: 15px; 
    width: 90%;
    margin-top: 15px;
    border-radius: 10px;
    background: rgba(207,206,206,0.3);
    height: 60px;
    transition: all;
    transition-duration: 0.5s;
    animation: ${appearFromLeft} 1s;
    &:hover{
        cursor: pointer;
    }

   
    p{
        margin-left: 10px;
        font-size: 14px;
        border-right: 2px solid white;
        padding-right: 10px;
    }

    span{
        font-family: 'Roboto Slab';
        margin-left: 12px;
    }

`;