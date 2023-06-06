import React, {useEffect} from 'react';
import AnimalCard from "../AnimalCard/AnimalCard";
import {Animal} from "../model/AnimalModel";
import "./AnimalGallery.css";
import useKeepers from "../hook/useKeepers";

type Props = {
    animalsFeeding: Animal[],
    getAllAnimals: () => void;
};

function FeedingGallery(props:Props) {
    const {getAllKeepers, keeper} = useKeepers()
    useEffect(getAllKeepers, [])
    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>Feeding</h2>
                {props.animalsFeeding.map(animal => <AnimalCard key={animal.id} animal={animal}
                                                                keepers={keeper} getAllAnimals={props.getAllAnimals}/>)}
            </div>
        </div>
    );
}

export default FeedingGallery;