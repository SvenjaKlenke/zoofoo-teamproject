import React from 'react';
import "./AnimalCard.css";
import {Animal} from "../model/AnimalModel";
import {useNavigate} from "react-router-dom";
import DropdownMenu from "../element/DropdownMenu";


type Props = {
    animals: Animal
}
function AnimalCard(props:Props) {
    const navigate = useNavigate();

    function onClickHandlerForDetails() {
        navigate("/animal/" + props.animals.id)
    }

    return (
        <div className="animalCard">
            <h2>{props.animals.species}</h2>
            <img className="animalPic" src={props.animals.pictureOfAnimal} alt={"animal"}></img>
            <p>Amount: {props.animals.numberOfAnimals}</p>
            <div className="buttonContainer">
                <button className="button" onClick={onClickHandlerForDetails}>DETAILS</button>
                <DropdownMenu/>
            </div>
        </div>
    );
}

export default AnimalCard;