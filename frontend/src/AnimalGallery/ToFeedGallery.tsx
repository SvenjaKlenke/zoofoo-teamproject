import React from 'react';
import "./AnimalGallery.css";
import {Animal} from "../model/AnimalModel";
import AnimalCard from "../AnimalCard/AnimalCard";
import {Keeper} from "../model/KeeperModel";

type Props = {
    animalsOpen: Animal[],
    keepersAll: Keeper[]
};

function ToFeedGallery(props:Props) {
    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>ToFeed</h2>
                {props.animalsOpen.map(animal => <AnimalCard key={animal.id} animals={animal} keeper={props.keepersAll}/>)}
            </div>
        </div>
    );
}

export default ToFeedGallery;