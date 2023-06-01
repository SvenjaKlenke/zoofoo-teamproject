import React from 'react';
import "./AnimalGallery.css";
import {Animal} from "../model/AnimalModel";
import AnimalCard from "../AnimalCard/AnimalCard";

type Props = {
    animalsAll: Animal[],
    animalsOpen: Animal[],
    animalsFeeding: Animal[],
    animalsFed: Animal[]
}

function AnimalGallery(props: Props) {

    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>AllAnimals</h2>
                {props.animalsAll.map(animal => <AnimalCard key={animal.id} animals={animal}/>)}
            </div>
            <div className="card">
                <h2>ToFeed</h2>
                {props.animalsOpen.map(animal => <AnimalCard key={animal.id} animals={animal}/>)}
            </div>
            <div className="card">
                <h2>Feeding</h2>
                {props.animalsFeeding.map(animal => <AnimalCard key={animal.id} animals={animal}/>)}
            </div>
            <div className="card">
                <h2>Fed</h2>
                {props.animalsFed.map(animal => <AnimalCard key={animal.id} animals={animal}/>)}
            </div>
        </div>
    );
}

export default AnimalGallery;
