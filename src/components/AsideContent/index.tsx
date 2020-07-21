import React, { useState, useEffect, useMemo } from 'react';
import {Container,Header} from './styled';
import { format } from 'date-fns';
import PtBr from 'date-fns/locale/pt-BR';


const AsideContent:React.FC = () =>{

    const [day, setDay] = useState(new Date());

    useEffect(() =>{
        const date = new Date();
        setDay(date);
    },[day]);

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


        </Container>
    )
}

export default AsideContent;