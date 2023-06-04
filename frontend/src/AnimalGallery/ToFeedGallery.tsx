import React, {useEffect} from 'react';
import "./AnimalGallery.css";
import {Animal} from "../model/AnimalModel";
import AnimalCard from "../AnimalCard/AnimalCard";
import useKeepers from "../hook/useKeepers";

type Props = {
    animalsOpen: Animal[];
};

function ToFeedGallery(props: Props) {
    const {getAllKeepers, keeper} = useKeepers()
    useEffect(getAllKeepers, [])
    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>ToFeed</h2>
                {props.animalsOpen.map(animal => <AnimalCard key={animal.id} animals={animal}
                                                             keeper={keeper}/>)}
            </div>
        </div>
    );
}

export default ToFeedGallery;