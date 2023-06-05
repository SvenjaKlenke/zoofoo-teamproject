import React, {ChangeEvent} from 'react';
import {Keeper} from "../model/KeeperModel";
import {Animal} from "../model/AnimalModel";
import axios from "axios";

type Props = {
    keeper: Keeper[]
    animals: Animal
    getAllAnimals: () => void;

}

function DropdownMenu(props: Props) {

    function changeStatusBySelectKeeper(event: ChangeEvent<HTMLSelectElement>) {
        const selectedKeeper = event.target.value;
        axios.put("/api/animal/" + props.animals.id, {
            id: props.animals.id,
            species: props.animals.species,
            food: props.animals.food,
            foodAmount: props.animals.foodAmount,
            dayToFeed: props.animals.dayToFeed,
            numberOfAnimals: props.animals.numberOfAnimals,
            feedStatus: "DOING",
            animalKeeper: selectedKeeper,
            pictureOfAnimal: props.animals.pictureOfAnimal
        }).then(() => {
            props.getAllAnimals()
        })

    }

    return (
        <select className="button" onChange={changeStatusBySelectKeeper}>
            <option>select Keeper</option>
            {props.keeper.map(keepers => (
                <option key={keepers.id} value={keepers.username}>
                    {keepers.username}
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;