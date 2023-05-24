import React from 'react';
import {Animal} from "../model/AnimalModel";
import {Link, useParams} from "react-router-dom";

type Props = {
    animals: Animal []
}

function AnimalCardDetails(props: Props) {

    const params = useParams();
    const id: string | undefined = params.id;

    const actualAnimal: Animal | undefined = props.animals.find(currentAnimal => currentAnimal.id === id);


    return (
        <div>
            <h1>Details of: {actualAnimal?.species}</h1>
            <img src={actualAnimal?.pictureOfAnimal} alt="pictureOfAnimal"></img>
            <br/>
            <p>Amount: {actualAnimal?.numberOfAnimals}</p>
            <br/>
            <p>Food: {actualAnimal?.food}</p>
            <br/>
            <p>Food amount: {actualAnimal?.foodAmount}</p>
            <br/>
            <br/>
            <Link to={"/"}>back</Link>
        </div>
    );
}

export default AnimalCardDetails;