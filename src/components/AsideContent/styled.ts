import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top: 10px;
    background: #28262E;
    border-radius: 40px;
    margin-right: 40px;
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
    h3{
        font-family: 'Roboto Slab';
        color: #FAA91E;
        margin-left: 30px;
        margin-bottom: 20px;
        font-size: 18px;
    }
   
`;


export const CardContent = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    flex: 1;
    display: flex;
    align-items: center;
    width: 850px;
    margin-top: 15px;
    border-radius: 10px;
    background: rgba(207,206,206,0.3);
    height: 60px;
    box-shadow: 0px 4px 25px 0px rgba(255,255,255, 0.2);
    transition: all;
    transition-delay: 0.1px;
    transition-duration: 0.7s;

    &:hover{
        box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.2); 
    }
    
    p{
        margin-left: 10px;
        font-size: 14px;
        border-right: 2px solid white;
        padding-right: 10px;
    }

    span{
        margin-left: 12px;
    }

`;