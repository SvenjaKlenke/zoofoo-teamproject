import React, {useEffect} from 'react';
import "./AnimalGallery.css";
import {Animal} from "../model/AnimalModel";
import AnimalCard from "../AnimalCard/AnimalCard";

type Props = {
    animalsAll: Animal[],
    getAllAnimals: ()=>void,
    dayOfTheWeek:string
}
function AnimalGallery(props: Props) {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {props.getAllAnimals()},[props.dayOfTheWeek])

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
