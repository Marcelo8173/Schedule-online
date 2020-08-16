import React from 'react';
import { Container,BodyContainer } from './style';
import Calendar from '../../components/Calendar';
import AsideContent from '../../components/AsideContent';

const Dashboard:React.FC = () =>{
    return(
        <Container>
             
            <BodyContainer>
                <Calendar />
                <AsideContent />
            </BodyContainer>
        </Container>
    )
}

export default Dashboard;