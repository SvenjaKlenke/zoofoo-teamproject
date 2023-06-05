import React from 'react';
import axios from "axios";
import {Animal} from "../model/AnimalModel";

type Props = {
    animals: Animal
    getAllAnimals: () => void;
}

function DoneButton(props: Props) {

    function feedingDone() {
        axios.put("/api/animal/" + props.animals.id, {
            id: props.animals.id,
            species: props.animals.species,
            food: props.animals.food,
            foodAmount: props.animals.foodAmount,
            dayToFeed: props.animals.dayToFeed,
            numberOfAnimals: props.animals.numberOfAnimals,
            feedStatus: "DONE",
            animalKeeper: props.animals.animalKeeper,
            pictureOfAnimal: props.animals.pictureOfAnimal
        }).then(() => {
            props.getAllAnimals()
        })
    }

    return (
        <div>
            <button className="button" onClick={feedingDone}>
                Done
            </button>
        </div>
    );
}

export default DoneButton;