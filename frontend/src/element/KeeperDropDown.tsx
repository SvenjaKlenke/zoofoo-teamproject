import React from 'react';
import {Keeper} from "../model/KeeperModel";
import {Animal} from "../model/AnimalModel";
import axios from "axios";

type Props = {
    keeper: Keeper[]
    animals: Animal
    getAllAnimals: () => void;

}

function DropdownMenu(props: Props) {

    function changeStatusBySelectKeeper() {
        axios.put("/api/animal/" + props.animals.id, {
            id: props.animals.id,
            species: props.animals.species,
            food: props.animals.food,
            foodAmount: props.animals.foodAmount,
            dayToFeed: props.animals.dayToFeed,
            numberOfAnimals: props.animals.numberOfAnimals,
            feedStatus: "DOING",
            animalKeeper: props.animals.animalKeeper,
            pictureOfAnimal: props.animals.pictureOfAnimal
        }).then(() => {
            props.getAllAnimals()
        })

    }

    return (
        <select className="button" onChange={changeStatusBySelectKeeper}>
            <option>select Keeper</option>
            {props.keeper.map(keepers => (
                <option key={keepers.id}>
                    {keepers.username}
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;