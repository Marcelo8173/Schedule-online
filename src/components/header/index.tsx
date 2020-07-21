import React, { useState, useEffect, useMemo } from 'react';
import {HeaderContainer, HeaderTitle} from './styles';


const Header: React.FC = () =>{
    const [hourOfDay, setHourOfDay] = useState<number | undefined>(new Date().getHours());

    useEffect(() =>{
        const hour = new Date().getHours();
        setHourOfDay(hour);
    },[]);

    const fomDate = useMemo(() =>{
        if(hourOfDay){
            if(hourOfDay >= 0 && hourOfDay < 12){
                return 'Bom dia';
            }else if(hourOfDay >=12 && hourOfDay < 18){
                return 'Boa Tarde';
            }else{
                return 'Boa noite';
            }
        }
        
    },[hourOfDay]);

    return(
        <>
        <HeaderContainer>
            <HeaderTitle>
                <h1>{fomDate}, seja bem vindo</h1>
            </HeaderTitle>
        </HeaderContainer>
        </>
    )
}

export default Header;