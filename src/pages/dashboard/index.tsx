import React from 'react';
import { Container,BodyContainer } from './style';
import Calendar from '../../components/Calendar';
import AsideContent from '../../components/AsideContent';
import PageHeader from '../../components/PageHeader';

const Dashboard:React.FC = () =>{
    return(
        <Container>
            <BodyContainer>
                <Calendar />
                <PageHeader />
            </BodyContainer>
        </Container>
    )
}

export default Dashboard;