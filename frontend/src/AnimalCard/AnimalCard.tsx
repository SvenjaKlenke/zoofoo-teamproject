import React from 'react';
import "./AnimalCard.css";
import {Animal} from "../model/AnimalModel";
import {useNavigate} from "react-router-dom";
import {Keeper} from "../model/KeeperModel";
import DropdownMenu from "../element/KeeperDropDown";
import DoneButton from "../element/DoneButton";


type Props = {
    animal: Animal
    keepers: Keeper[]
    getAllAnimals: () => void;
}

function AnimalCard(props: Props) {
    const navigate = useNavigate();

    function onClickHandlerForDetails() {
        navigate("/animal/" + props.animal.id)
    }

    return (
        <div className="animalCard">
            <h2>{props.animal.species}</h2>
            <img className="animalPic" src={props.animal.pictureOfAnimal} alt={"animal"}></img>
            <p>Amount: {props.animal.numberOfAnimals}</p>
            {props.animal.feedStatus === "DOING" ? <p>Keeper: {props.animal.animalKeeper}</p> : <></>}
            <div className="buttonContainer">
                <button className="button" onClick={onClickHandlerForDetails}>DETAILS</button>
                {props.animal.feedStatus === "OPEN" ?
                    <DropdownMenu keepers={props.keepers} animal={props.animal}
                                  getAllAnimals={props.getAllAnimals}/> : <></>
                }
                {props.animal.feedStatus === "DOING" ?
                    <DoneButton animal={props.animal} getAllAnimals={props.getAllAnimals}/> : <></>}
            </div>
        </div>
    );
}

export default AnimalCard;