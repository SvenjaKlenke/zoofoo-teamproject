import React from 'react';
import "./AnimalGallery.css";
import {Animal} from "../model/AnimalModel";
import AnimalCard from "../AnimalCard/AnimalCard";

type Props = {
    animalsOpen: Animal[],
};

function ToFeedGallery(props:Props) {
    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>ToFeed</h2>
                {props.animalsOpen.map(animal => <AnimalCard key={animal.id} animals={animal}/>)}
            </div>
        </div>
    );
}

export default ToFeedGallery;