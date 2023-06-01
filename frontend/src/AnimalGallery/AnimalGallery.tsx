import React from 'react';
import "./AnimalGallery.css";
import {Animal} from "../model/AnimalModel";
import AnimalCard from "../AnimalCard/AnimalCard";

type Props = {
    animalsAll: Animal[],
}
function AnimalGallery(props: Props) {

    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>AllAnimals</h2>
                {props.animalsAll.map(animal => <AnimalCard key={animal.id} animals={animal}/>)}
            </div>
        </div>
    );
}

export default AnimalGallery;
