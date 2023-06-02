import {useEffect, useState} from "react";
import axios from "axios";
import {Animal} from "../model/AnimalModel";

type Props={
    weekdays: string[];
}
export default function useDay(props: Props) {

    const [dayOfTheWeek, setDayOfTheWeek] = useState<string>(props.weekdays[0])
    const [animalList, setAnimalList] = useState<Animal[]>([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(changeStatusOfAnimal,[])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(changeStatusOfAnimal,[dayOfTheWeek])

    function getAllAnimals() {
        axios.get("/api/animal")
            .then((response) => {
                setAnimalList(response.data)
            })
    }

    function goToPreviousDay() {
        if (dayOfTheWeek === props.weekdays[0]) {
            setDayOfTheWeek(props.weekdays[6])
        } else for (let i = 1; i < props.weekdays.length-1; i++) {
            if (props.weekdays[i] === dayOfTheWeek) {
                setDayOfTheWeek(props.weekdays[i-1])
            }
        }
        changeStatusOfAnimal()
    }

    function goToNextDay() {
        if (dayOfTheWeek === props.weekdays[6]) {
            setDayOfTheWeek(props.weekdays[0])
        } else for (let i = 0; i < props.weekdays.length-1; i++) {
            if (props.weekdays[i] === dayOfTheWeek) {
                setDayOfTheWeek(props.weekdays[i+1]);
            }
        }
        changeStatusOfAnimal()
    }

    function changeStatusOfAnimal() {
        animalList.forEach(animal => {
            animal.feedStatus = (animal.dayToFeed === dayOfTheWeek) ? "OPEN" : "NONE";
            axios.put("/api/animal/" + animal.id, {
                id: animal.id,
                species: animal.species,
                food: animal.food,
                foodAmount: animal.foodAmount,
                dayToFeed: animal.dayToFeed,
                numberOfAnimals: animal.numberOfAnimals,
                feedStatus: animal.feedStatus,
                animalKeeper: animal.animalKeeper,
                pictureOfAnimal: animal.pictureOfAnimal
            }).then(() => {
                getAllAnimals()
            })
        })
    }


    return {dayOfTheWeek, goToPreviousDay, goToNextDay, getAllAnimals, animalList}
}