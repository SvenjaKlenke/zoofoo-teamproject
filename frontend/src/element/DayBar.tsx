import React, {useState} from 'react';
import axios from "axios/index";
import {Animal} from "../model/AnimalModel";

type Prop={
    animals: Animal[],
    getAllAnimals: ()=> void
}

export default function DayBar(props: Prop) {
    const [dayOfTheWeek, setDayOfTheWeek]=useState<string>("Monday");
    const weekdays:string[] =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    function goToPreviousDay() {
        if (dayOfTheWeek===weekdays[0]){
            setDayOfTheWeek(weekdays[6])
        }else for (let i=1; i<weekdays.length; i++){
            if(weekdays[i]===dayOfTheWeek){
                setDayOfTheWeek(weekdays[i-1])
            }
        }
    }
    function goToNextDay() {
        if (dayOfTheWeek===weekdays[6]){
            setDayOfTheWeek(weekdays[0])
        }else for (let i=0; i<weekdays.length; i++){
            if(weekdays[i]===dayOfTheWeek){
                setDayOfTheWeek(weekdays[i+1])
            }
        }
    }
    function resetFeedingStateOfAnimal(){
        props.animals.map(animal =>{
                axios.put("/api/animal/"+animal.id,{
                    id: animal.id,
                    species: animal.species,
                    food: animal.food,
                    foodAmount: animal.foodAmount,
                    dayToFeed: animal.dayToFeed,
                    numberOfAnimals: animal.numberOfAnimals,
                    feedStatus: "NONE",
                    animalKeeper: animal.animalKeeper,
                    pictureOfAnimal: animal.numberOfAnimals
                })
        })
    }
    function changeFeedingStateOfAnimalToOpen(){
        props.animals.map(animal =>{
            axios.put("/api/animal/"+animal.id,{
                id: animal.id,
                species: animal.species,
                food: animal.food,
                foodAmount: animal.foodAmount,
                dayToFeed: animal.dayToFeed,
                numberOfAnimals: animal.numberOfAnimals,
                feedStatus: (animal.feedStatus==="NONE" ? (animal.dayToFeed===dayOfTheWeek ? "OPEN" : animal.feedStatus) : animal.feedStatus) ,
                animalKeeper: animal.animalKeeper,
                pictureOfAnimal: animal.numberOfAnimals
            })
            }

        )}

    function onClickHandler (){
        goToNextDay();
        resetFeedingStateOfAnimal();
        changeFeedingStateOfAnimalToOpen();
        props.getAllAnimals();
    }

    return (
        <>
            <div>
                <h6>{dayOfTheWeek}</h6>
                <button onClick={goToPreviousDay}>PREV</button>
                <button onClick={onClickHandler}>NEXT</button>
            </div>

        </>
    );
}