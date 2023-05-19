import React from 'react';
import "./AnimalCard.css";
import exp from "constants";

type Props = {
    animals: Animal
}

export type Animal = {
    id:string;
    pictureOfAnimal:string;
    species:string;
    numberOfAnimals:number;
    animalKeeper:string;
    feedStatus:string;
    food:string;
    foodAmount:number;
}

function AnimalCard(props:Props) {

    return (
        <div className="AnimalCard">
            <img src={props.animals.pictureOfAnimal} alt={"animal picture"}></img>
            <h2>{props.animals.species}</h2>
            <p>{props.animals.numberOfAnimals}</p>
        </div>
    );
}

export default AnimalCard;