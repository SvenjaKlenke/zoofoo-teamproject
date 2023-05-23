import React, {useState} from 'react';

export default function DayBar() {
    const [dayOfTheWeek, setDayOfTheWeek]=useState<string>("Monday")
    const weekdays:string[] =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    function getPreviousDay() {
        if (dayOfTheWeek===weekdays[0]){
            setDayOfTheWeek(weekdays[6])
        }else for (let i=1; i<weekdays.length; i++){
            if(weekdays[i]===dayOfTheWeek){
                setDayOfTheWeek(weekdays[i-1])
            }
        }
    }
    function getNextDay() {
        if (dayOfTheWeek===weekdays[6]){
            setDayOfTheWeek(weekdays[0])
        }else for (let i=0; i<weekdays.length; i++){
            if(weekdays[i]===dayOfTheWeek){
                setDayOfTheWeek(weekdays[i+1])
            }
        }
    }
    return (
        <>
            <div>
                <h6>{dayOfTheWeek}</h6>
                <button onClick={getPreviousDay}>PREV</button>
                <button onClick={getNextDay}>NEXT</button>
            </div>

        </>
    );
}