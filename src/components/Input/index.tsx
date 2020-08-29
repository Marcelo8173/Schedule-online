import React from 'react';
import { DateInput } from './styled';

interface InputElementProps{
    type:string;
    placeholder?:string;
}

const Input:React.FC<InputElementProps> = ({type,placeholder}) =>{
    return(
        <DateInput>
            <input type={type} placeholder={placeholder}/>
        </DateInput>
    ); 
}

export default Input;