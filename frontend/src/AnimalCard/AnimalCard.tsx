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
        </div>
    );
}

export default AnimalCard;