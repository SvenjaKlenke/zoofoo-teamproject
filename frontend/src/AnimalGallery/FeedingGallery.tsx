import React from 'react';
import AnimalCard from "../AnimalCard/AnimalCard";
import {Animal} from "../model/AnimalModel";
import "./AnimalGallery.css";
import {Keeper} from "../model/KeeperModel";

type Props = {
    animalsFeeding: Animal[],
    keepersAll: Keeper[]
};

function FeedingGallery(props:Props) {
    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>Feeding</h2>
                {props.animalsFeeding.map(animal => <AnimalCard key={animal.id} animals={animal} keeper={props.keepersAll}/>)}
            </div>
        </div>
    );
}

export default FeedingGallery;