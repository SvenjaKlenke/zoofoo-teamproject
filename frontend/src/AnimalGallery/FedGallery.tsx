import React from 'react';
import PropTypes from 'prop-types';
import AnimalCard from "../AnimalCard/AnimalCard";
import {Animal} from "../model/AnimalModel";
import "./AnimalGallery.css";

type Props = {
    animalsFed: Animal[]
};

function FedGallery(props:Props) {
    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>Fed</h2>
                {props.animalsFed.map(animal => <AnimalCard key={animal.id} animals={animal}/>)}
            </div>
        </div>
    );
}

export default FedGallery;