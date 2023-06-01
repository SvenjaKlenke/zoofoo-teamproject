import React from 'react';
import {Animal} from "../model/AnimalModel";


type Props  = {
    animals: Animal[],
    currentDay: string,
    nextDay: () => void
    prevDay: () => void
}

export default function DayBar(props:Props) {

    return (
        <>
            <div>
                <h6>{props.currentDay}</h6>
                <button onClick={props.prevDay}>PREV</button>
                <button onClick={props.nextDay}>NEXT</button>
            </div>

        </>
    );
}