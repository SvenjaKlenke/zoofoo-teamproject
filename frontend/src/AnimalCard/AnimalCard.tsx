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
        <div className="AnimalCard">
            <img src={props.animals.pictureOfAnimal} alt={"animal"}></img>
            <h2>{props.animals.species}</h2>
            <p>Amount: {props.animals.numberOfAnimals}
                <br/>
                <br/>
                <button className="detailsButton" onClick={onClickHandlerForDetails}>DETAILS</button>
            </p>
            <div className="content">
                <img src={props.animals.pictureOfAnimal} alt={"animal"}></img>
                <h2>{props.animals.species}</h2>
                <p>Amount: {props.animals.numberOfAnimals}</p>
            </div>
            <select>
                <option value="keeper" selected>select Keeper</option>
                <option value="1">Amelie</option>
                <option value="2">Kristina</option>
                <option value="3">Richard</option>
                <option value="4">Svenja</option>
                <option value="5">Admin</option>
            </select>
        </div>
    );
}

export default AnimalCard;