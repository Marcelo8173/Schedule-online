import React from 'react';
import { Container,HourContainer,ContentContainer} from './styled';
import { BsClockHistory } from 'react-icons/bs';

const Cards: React.FC = () => {
    return(
        <Container>
            <HourContainer>
                <BsClockHistory />
                <p>08:00</p>
            </HourContainer>
            <ContentContainer>
                <h3>Exercicios de inglês</h3>
                <p>Atividades sobre o verbo To Be</p>
            </ContentContainer>
        </Container>
    );
}

export default Cards;