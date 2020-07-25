import React, { useState, useEffect, useMemo } from 'react';
import {Container,Header,Content,CardContent} from './styled';
import { format } from 'date-fns';
import Description from './Description';
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
            <h3>Manhã</h3>
            <Content>
                <CardContent>
                    <p>12:00-13:000</p>
                    <span>Reunião de trabalho</span>
                </CardContent>
                <Description />
                
                <CardContent>
                    <p>12:00-13:000</p>
                    <span>Reunião de trabalho</span>
                </CardContent>
                <Description />
            </Content>

            <h3>Tarde</h3>
                <Content>
                    <CardContent>
                        <p>12:00-13:000</p>
                        <span>Reunião de trabalho</span>
                    </CardContent>
                    <Description />
                    
                    <CardContent>
                        <p>12:00-13:000</p>
                        <span>Reunião de trabalho</span>
                    </CardContent>
                    <Description />
                </Content>

            <h3>Noite</h3>
            <Content>
                    <CardContent>
                        <p>12:00-13:000</p>
                        <span>Reunião de trabalho</span>
                    </CardContent>
                    <Description />
                    
                    <CardContent>
                        <p>12:00-13:000</p>
                        <span>Reunião de trabalho</span>
                    </CardContent>
                    <Description />
                </Content>
        </Container>
    )
}

export default AsideContent;