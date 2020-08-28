import React from 'react';
import { Container,AsideContainer,Body,ButtonContainer } from './style';
import Calendar from '../../components/Calendar';
import PageHeader from '../../components/PageHeader';
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';


const Dashboard:React.FC = () =>{
    return(
        <Container>
            <AsideContainer>
                <Calendar />
            </AsideContainer>
            <Body>
                <PageHeader />
                <div>
                    <h3>Hoje, 16 de Maio de 2020</h3>
                    <ButtonContainer>
                        <button>
                            <FaAngleLeft color="#5F5959" size={20}/>
                        </button>
                        <button>
                            <FaAngleRight color="#5F5959" size={20}/>
                        </button>
                    </ButtonContainer>
                </div>
                
            </Body>
        </Container>
    )
}

export default Dashboard;