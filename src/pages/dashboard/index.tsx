import React from 'react';
import { Container,AsideContainer,Body } from './style';
import Calendar from '../../components/Calendar';
import PageHeader from '../../components/PageHeader';

const Dashboard:React.FC = () =>{
    return(
        <Container>
            <AsideContainer>
                <Calendar />
            </AsideContainer>
            <Body>
                <PageHeader />
            </Body>
        </Container>
    )
}

export default Dashboard;