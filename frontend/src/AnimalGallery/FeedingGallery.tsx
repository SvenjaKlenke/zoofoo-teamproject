import React from 'react';
import PropTypes from 'prop-types';
import AnimalCard from "../AnimalCard/AnimalCard";
import {Animal} from "../model/AnimalModel";
import "./AnimalGallery.css";

type Props = {
    animalsFeeding: Animal[],
};

function FeedingGallery(props:Props) {
    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>Feeding</h2>
                {props.animalsFeeding.map(animal => <AnimalCard key={animal.id} animals={animal}/>)}
            </div>
        </div>
    );
}

export default FeedingGallery;