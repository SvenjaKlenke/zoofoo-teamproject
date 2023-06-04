import React from 'react';
import "./AnimalGallery.css";
import {Animal} from "../model/AnimalModel";
import AnimalCard from "../AnimalCard/AnimalCard";
import {Keeper} from "../model/KeeperModel";

type Props = {
    animalsOpen: Animal[];
    allKeeper: Keeper[];

};

function ToFeedGallery(props:Props) {
    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>ToFeed</h2>
                {props.animalsOpen.map(animal => <AnimalCard key={animal.id} animals={animal}
                                                             keeper={props.allKeeper}/>)}
            </div>
        </div>
    );
}

export default ToFeedGallery;