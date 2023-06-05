import React from 'react';
import "./AnimalCard.css";
import {Animal} from "../model/AnimalModel";
import {useNavigate} from "react-router-dom";
import {Keeper} from "../model/KeeperModel";
import DropdownMenu from "../element/KeeperDropDown";


type Props = {
    animals: Animal
    keeper: Keeper[]
    getAllAnimals: () => void;
}

function AnimalCard(props: Props) {
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
                <DropdownMenu keeper={props.keeper} animals={props.animals} getAllAnimals={props.getAllAnimals}/>
            </div>
        </div>
    );
}

export default AnimalCard;