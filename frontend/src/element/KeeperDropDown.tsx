import React, {ChangeEvent} from 'react';
import {Keeper} from "../model/KeeperModel";
import {Animal} from "../model/AnimalModel";
import axios from "axios";

type Props = {
    keepers: Keeper[]
    animal: Animal
    getAllAnimals: () => void;

}

function DropdownMenu(props: Props) {

    function changeStatusBySelectKeeper(event: ChangeEvent<HTMLSelectElement>) {
        const selectedKeeper = event.target.value;
        axios.put("/api/animal/" + props.animal.id, {
            id: props.animal.id,
            species: props.animal.species,
            food: props.animal.food,
            foodAmount: props.animal.foodAmount,
            dayToFeed: props.animal.dayToFeed,
            numberOfAnimals: props.animal.numberOfAnimals,
            feedStatus: "DOING",
            animalKeeper: selectedKeeper,
            pictureOfAnimal: props.animal.pictureOfAnimal
        }).then(() => {
            props.getAllAnimals()
        })

    }

    return (
        <select className="button" onChange={changeStatusBySelectKeeper}>
            <option>select Keeper</option>
            {props.keepers.map(keepers => (
                <option key={keepers.id} value={keepers.username}>
                    {keepers.username}
                </option>
            ))}
        </select>
    );
}

export default DropdownMenu;