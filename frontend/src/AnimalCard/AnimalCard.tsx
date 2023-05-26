import React from 'react';
import "./AnimalCard.css";
import {Animal} from "../model/AnimalModel";
import {useNavigate} from "react-router-dom";


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
                <select className="button">
                    <option defaultValue="keeper">select Keeper</option>
                    <option value="1">Amelie</option>
                    <option value="2">Kristina</option>
                    <option value="3">Richard</option>
                    <option value="4">Svenja</option>
                    <option value="5">Admin</option>
                </select>
            </div>
        </div>
    );
}

export default AnimalCard;