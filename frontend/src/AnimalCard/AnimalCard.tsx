import React from 'react';
import "./AnimalCard.css";
import exp from "constants";

type Props = {
    animals: Animal
}

export type Animal = {
    id:string;
    image:string;
    animalSpecies:string;
    numberOfAnimals:number;
    keeper:string;
    feedingStatus:string;
    food:string;
    foodAmount:number;
}

function AnimalCard(props:Props) {

    return (
        <div className="AnimalCard">
            <img src={props.animals.image} alt={"anmial picture"}></img>
            <h2>{props.animals.animalSpecies}</h2>
            <p>{props.animals.numberOfAnimals}</p>
        </div>
    );
}

export default AnimalCard;