import React, { useCallback, useState } from 'react';
import { Container,Content } from './styles';

interface dataNames{
    id: number,
    description: string; 
}

interface dataProps{
    data: dataNames;
    isShow: boolean;
}



const Description:React.FC<dataProps> = ({isShow,data,children}) =>{

  

    return (
        <Container isShow={isShow} >
            <Content>
                <section>
                    <h2>Descrição</h2>
                    <p>{data.description}</p>
                </section>
               {children}
            </Content>
        </Container>
    )
}

export default Description;