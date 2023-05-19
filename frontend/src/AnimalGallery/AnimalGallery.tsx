import React from 'react';
import "./AnimalGallery.css";
import AnimalCard, {Animal} from "../AnimalCard/AnimalCard";

type Props = {
    animals:Animal[];
}

function AnimalGallery(props:Props) {
    return (
        <div className="Gallery-AnimalCard" >
            {props.animals.map((currentAnimal) => <AnimalCard key={currentAnimal.id} animals={currentAnimal} />)}
        </div>
    );
}

export default AnimalGallery;