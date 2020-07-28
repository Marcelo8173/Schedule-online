import React, { useState, useEffect, useMemo,useCallback, Fragment } from 'react';
import {Container,Header,Content,CardContent} from './styled';
import { format } from 'date-fns';
import Description from './Description';
import PtBr from 'date-fns/locale/pt-BR';



interface DataProps{
    id: number;
    description: string;
}


const AsideContent:React.FC = () =>{
    const datas = [
        {
            id: 1,
            title: 'Reunião de trabalho',
            description: 'agendado',
        },
        {
            id: 2,
            title: 'Reunião de trabalho',
            description: 'agendado1',
        },
        {  
    
            id: 3,
            title: 'Reunião de trabalho',
            description: 'agendado',
    
        }
    ]
   

    const [day, setDay] = useState(new Date());
    const [data,setData] = useState<DataProps>({} as DataProps);
    const [show, setShow] = useState(false);

    useEffect(() =>{
        const date = new Date();
        setDay(date);
    },[]);

    const handleShow = useCallback((id:number, description: string) =>{
        setData({
            id,
            description,
        });

        
    },[show])

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
                {
                    datas.map(item =>(
                        <Fragment key={item.id}>
                        <CardContent onClick={() => handleShow(item.id, item.description)}>
                            <p>08:00</p>
                            <span>{item.title}</span>
                        </CardContent>
                        {console.log(data)}
                        {item.id === data.id ?
                            <Description data={data} isShow={true}/>
                            :
                            <Description data={data} isShow={false}/>
                        }
                        </Fragment>
                    ))
                }
                

            </Content>

            <h3>Tarde</h3>
               

            <h3>Noite</h3>
            
        </Container>
    )
}

export default AsideContent;