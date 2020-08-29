import React from 'react';
import { Container,AsideContainer,Body,SubTitle,ButtonContainer } from './style';
import Calendar from '../../components/Calendar';
import PageHeader from '../../components/PageHeader';
import Commitments from '../../components/Commitments';
import NewEvent from '../../components/NewEvent';
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';


const Dashboard:React.FC = () =>{
    return(
        <Container>
            <AsideContainer>
                <Calendar />
                <NewEvent />
            </AsideContainer>
            <Body>
                <PageHeader />
                <SubTitle>
                    <h3>Hoje, 16 de Maio de 2020</h3>
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