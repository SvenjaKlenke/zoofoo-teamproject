import React from 'react';
import "./AnimalGallery.css";
import {Animal} from "../model/AnimalModel";
import AnimalCard from "../AnimalCard/AnimalCard";

type Props = {
    animals: Animal[];
}

function AnimalGallery(props: Props) {

    const feedingNone = props.animals.filter(currentAnimal => currentAnimal.feedStatus === "NONE")
    const feedingOpen = props.animals.filter(currentAnimal => currentAnimal.feedStatus === "OPEN")
    const feedingDoing = props.animals.filter(currentAnimal => currentAnimal.feedStatus === "DOING")
    const feedingDone = props.animals.filter(currentAnimal => currentAnimal.feedStatus === "DONE")

    return (
        <div className="Gallery-AnimalCard">

            <div className="card">
                <h2>AllAnimals</h2>
                {feedingNone.map(animal => <AnimalCard animals={animal}/>)}
            </div>
            <div className="card">
                <h2>ToFeed</h2>
                {feedingOpen.map(animal => <AnimalCard animals={animal}/>)}
            </div>
            <div className="card">
                <h2>Feeding</h2>
                {feedingDoing.map(animal => <AnimalCard animals={animal}/>)}
            </div>
            <div className="card">
                <h2>Fed</h2>
                {feedingDone.map(animal => <AnimalCard animals={animal}/>)}
            </div>
        </div>
    );
}

export default AnimalGallery;

