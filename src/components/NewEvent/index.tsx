import React from 'react';
import { Container,ContentDate,ButtonContainer} from './styles';
import Input from '../Input';

const NewEvent:React.FC = () =>{
    return(
        <Container>
            <h1>Novo Evento</h1>
            <ContentDate>
                <Input type="date"/>
                <Input type="time" />
            </ContentDate>
            <Input type="text" placeholder="Titulo do evento...."/>
            <Input type="text" placeholder="Descrição..."/>         
            
            <ButtonContainer>
                <button>Adicionar</button>
                <button>Cancelar</button>
            </ButtonContainer>
        </Container>
    );
}

export default NewEvent;