import React from 'react';
import { Container } from './styled';
import Cards from '../cards';

const Commitments: React.FC = () => {
    return(
        <Container>
            <h1>Agendamentos</h1>
            <Cards />
            <Cards />
            <Cards />

        </Container>
    )
}

export default Commitments;