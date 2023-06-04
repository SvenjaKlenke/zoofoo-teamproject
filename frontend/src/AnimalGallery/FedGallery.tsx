import React, {useEffect} from 'react';
import AnimalCard from "../AnimalCard/AnimalCard";
import {Animal} from "../model/AnimalModel";
import "./AnimalGallery.css";
import useKeepers from "../hook/useKeepers";

type Props = {
    animalsFed: Animal[]
};

function FedGallery(props:Props) {
    const {getAllKeepers, keeper} = useKeepers()
    useEffect(getAllKeepers, [])

    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>Fed</h2>
                {props.animalsFed.map(animal => <AnimalCard key={animal.id} animals={animal}
                                                            keeper={keeper}/>)}
            </div>
        </div>
    );
}

export default FedGallery;