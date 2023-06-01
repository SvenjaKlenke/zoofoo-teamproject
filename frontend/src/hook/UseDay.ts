import {useEffect, useState} from "react";
import axios from "axios";
import {Animal} from "../model/AnimalModel";

export default function useDay() {

    const weekdays: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const [dayOfTheWeek, setDayOfTheWeek] = useState<string>(weekdays[0])
    const [animalList, setAnimalList] = useState<Animal[]>([])

    useEffect(changeStatusOfAnimal,[]);
    useEffect(changeStatusOfAnimal,[dayOfTheWeek]);

    function getAllAnimals() {
        axios.get("/api/animal")
            .then((response) => {
                setAnimalList(response.data)
            })
    }

    function goToPreviousDay() {
        if (dayOfTheWeek === weekdays[0]) {
            setDayOfTheWeek(weekdays[6])
        } else for (let i = 1; i < weekdays.length-1; i++) {
            if (weekdays[i] === dayOfTheWeek) {
                setDayOfTheWeek(weekdays[i-1])
            }
        }
        changeStatusOfAnimal()
    }

    function goToNextDay() {
        if (dayOfTheWeek === weekdays[6]) {
            setDayOfTheWeek(weekdays[0])
        } else for (let i = 0; i < weekdays.length-1; i++) {
            if (weekdays[i] === dayOfTheWeek) {
                setDayOfTheWeek(weekdays[i+1]);
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