import React from 'react';
import { Container } from './styles';

interface dataNames{
    id: number,
    description: string; 
}

interface dataProps{
    data: dataNames;
    isShow: boolean;
}



const Description:React.FC<dataProps> = ({isShow,data}) =>{
    return (
        <Container isShow={data.id ? isShow: false} >
            <h2>Descrição</h2>
            <p>{data.description}</p>
        </Container>
    )
}

export default Description;