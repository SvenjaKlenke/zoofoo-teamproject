import React, {useEffect} from 'react';
import "./AnimalGallery.css";
import {Animal} from "../model/AnimalModel";
import AnimalCard from "../AnimalCard/AnimalCard";
import useKeepers from "../hook/useKeepers";

type Props = {
    animalsAll: Animal[],
    getAllAnimals: ()=>void,
    dayOfTheWeek: string
    changeStatusOfAnimal: () => void
}
function AnimalGallery(props: Props) {
    const {getAllKeepers, keeper} = useKeepers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        props.changeStatusOfAnimal()
    }, [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        props.getAllAnimals()
    }, [props.dayOfTheWeek])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(getAllKeepers, [])


    return (
        <div className="Gallery-AnimalCard">
            <div className="card">
                <h2>AllAnimals</h2>
                {props.animalsAll.map(animal => <AnimalCard key={animal.id} animals={animal}
                                                            keeper={keeper} getAllAnimals={props.getAllAnimals}/>)}
            </div>
        </div>
    );
}

export default AnimalGallery;
