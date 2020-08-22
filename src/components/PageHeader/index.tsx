import React from 'react';
import {ContentContainer,Content} from './style';
import CalendarImg from '../../Assets/Calendar.svg';

const PageHeader:React.FC = () => {
    return(
        <ContentContainer>
            <img src={CalendarImg} alt="Calendar"/>
            <Content>
                <h1>Bem vindo a sua agenda eletrônica pessoal</h1>
                <p>Seus eventos vão aparecer aqui. Clique em um evento para mais detalhes</p>
            </Content>
        </ContentContainer>
    )
}

export default PageHeader;