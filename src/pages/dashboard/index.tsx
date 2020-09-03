import React, { useState, useMemo } from 'react';
import { Container,AsideContainer,Body,SubTitle,ButtonContainer } from './style';
import { format } from 'date-fns';
import {ptBR} from 'date-fns/locale';
import Calendar from '../../components/Calendar';
import PageHeader from '../../components/PageHeader';
import Commitments from '../../components/Commitments';
import NewEvent from '../../components/NewEvent';
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';


const Dashboard:React.FC = () =>{

    const [date, setDate] = useState(new Date());

    const formData = useMemo(() => {
        return format(date, "'Hoje', dd 'de' MMMM",{
            locale: ptBR,
        });
    },[date]);

    return(
        <Container>
            <AsideContainer>
                <Calendar />
                <NewEvent />
            </AsideContainer>
            <Body>
                <PageHeader />
                <SubTitle>
                    <h3>{formData}</h3>
                    <ButtonContainer>
                        <button>
                            <FaAngleLeft color="#5F5959" size={20}/>
                        </button>
                        <button>
                            <FaAngleRight color="#5F5959" size={20}/>
                        </button>
                    </ButtonContainer>
                </SubTitle>
                <Commitments />
            </Body>
        </Container>
    )
}

export default Dashboard;