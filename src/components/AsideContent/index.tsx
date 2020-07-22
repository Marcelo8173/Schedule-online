import React, { useState, useEffect, useMemo } from 'react';
import {Container,Header,Content,CardContent} from './styled';
import { format } from 'date-fns';
import PtBr from 'date-fns/locale/pt-BR';


const AsideContent:React.FC = () =>{

    const [day, setDay] = useState(new Date());

    useEffect(() =>{
        const date = new Date();
        setDay(date);
    },[]);

    const FormatedDate = useMemo(() => {
        return format(day, "d' de 'MMMM' de 'yyyy",{
            locale: PtBr,
        })
        //TO DO
    },[day]);


    return(
        <Container>
            <Header>
                <h1>Hoje, {FormatedDate}</h1>
            </Header>
            <Content>
                <h3>Manhã</h3>
                <CardContent>
                    <p>12:00-13:000</p>
                    <span>Reunião de trabalho</span>
                </CardContent>
                <CardContent>
                    <p>12:00-13:000</p>
                    <span>Reunião de trabalho</span>
                </CardContent>
                
            </Content>


        </Container>
    )
}

export default AsideContent;