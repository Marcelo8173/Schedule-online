import React from 'react';
import { Container,BodyContainer } from './style';
import Calendar from '../../components/AsiderMenu';
import HeaderPage from '../../components/header';
import AsideContent from '../../components/AsideContent';

const Dashboard:React.FC = () =>{
    return(
        <Container>
          <HeaderPage />
             
            <BodyContainer>
                <Calendar />
                <AsideContent />
            </BodyContainer>
        </Container>
    )
}

export default Dashboard;