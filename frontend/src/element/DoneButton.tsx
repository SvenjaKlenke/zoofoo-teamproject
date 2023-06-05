import React from 'react';
import axios from "axios";
import {Animal} from "../model/AnimalModel";

type Props = {
    animal: Animal
    getAllAnimals: () => void;
}

function DoneButton(props: Props) {

    function feedingDone() {
        axios.put("/api/animal/" + props.animal.id, {
            id: props.animal.id,
            species: props.animal.species,
            food: props.animal.food,
            foodAmount: props.animal.foodAmount,
            dayToFeed: props.animal.dayToFeed,
            numberOfAnimals: props.animal.numberOfAnimals,
            feedStatus: "DONE",
            animalKeeper: props.animal.animalKeeper,
            pictureOfAnimal: props.animal.pictureOfAnimal
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