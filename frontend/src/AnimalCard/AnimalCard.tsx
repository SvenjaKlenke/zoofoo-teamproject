import React from 'react';
import "./AnimalCard.css";
import {Animal} from "../model/AnimalModel";

type Props = {
    animals: Animal
}

function AnimalCard(props:Props) {

    return (
        <div className="AnimalCard">
            <img src={props.animals.pictureOfAnimal} alt={"animal"}></img>
            <h2>{props.animals.species}</h2>
            <p>Amount: {props.animals.numberOfAnimals}</p>
        </div>
    );
}

export default AnimalCard;