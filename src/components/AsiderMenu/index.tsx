import React, { useState, useCallback } from 'react';
import DayPicker, {DayModifiers} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {Container} from './style';

const AsiderMenu: React.FC = () =>{
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = useCallback((day: Date, modifiers: DayModifiers)=>{
        if(modifiers.available && !modifiers.disabled){
            setSelectedDate(day);
        }
    },[]);

    return(
        <Container>
             <DayPicker 
                        weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
                        onDayClick={handleDateChange}
                        fromMonth={new Date()}
                        selectedDays={selectedDate}
                        // onMonthChange={handleMouthChange}
                        modifiers={{
                            available: {daysOfWeek: [1,2,3,4,5]}
                        }}
                        months ={[
                            'Janeiro',
                            'Fevereiro',
                            'Março',
                            'Abril',
                            'Maio',
                            'Junho',
                            'Julho',
                            'Agosto',
                            'Setembro',
                            'Outubro',
                            'Novembro',
                            'Dezembro'
                        ]}

                    />
        </Container>
    )
}

export default AsiderMenu;