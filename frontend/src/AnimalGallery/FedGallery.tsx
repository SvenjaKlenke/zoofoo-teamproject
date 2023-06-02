import React from 'react';
import AnimalCard from "../AnimalCard/AnimalCard";
import {Animal} from "../model/AnimalModel";
import "./AnimalGallery.css";
import {Keeper} from "../model/KeeperModel";

type Props = {
    animalsFed: Animal[]
    keepersAll: Keeper[]
};

function FedGallery(props:Props) {
    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>Fed</h2>
                {props.animalsFed.map(animal => <AnimalCard key={animal.id} animals={animal} keeper={props.keepersAll}/>)}
            </div>
        </div>
    );
}

export default FedGallery;