import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    
    margin-right: 15px;
    margin-left: 25px;
    
    .DayPicker-Caption{
        text-align: center;
        font-size: 1rem;
    }

    .DayPicker-Weekday{
        color: black;
        padding: 0.2rem;
        font-size: 0.9rem;
    }

    .DayPicker {
    background: #FFFFFF;
    border-radius: 20px;
    }

    .DayPicker-wrapper {
    padding-bottom: 0;
    }

    .DayPicker,
    .DayPicker-Month {
    width: 100%;
    }

    .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
    }

    .DayPicker-Day {
    width: 40px;
    font-size: 14px;
    height: 40px;
    }

    .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    border-radius: 10px;
    
    color: #383838;
    }

    .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
        background: ${shade(0.2, '#B77ACC')};
    }

    .DayPicker-Day--today {
    font-weight: normal;
    }

    .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
    }

    .DayPicker-Day--selected {
    background:#B77ACC !important;
    border-radius: 10px;
    color: #232129 !important;
    }
`;