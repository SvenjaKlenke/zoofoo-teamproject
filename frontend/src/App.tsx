import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import AnimalGallery from "./AnimalGallery/AnimalGallery";
import logo from "./logo.svg";
import DayBar from "./element/DayBar";
import AnimalCardDetails from "./AnimalCard/AnimalCardDetails";
import useDay from "./hook/UseDay";


function App() {

    const {getAllAnimals,dayOfTheWeek, goToPreviousDay,goToNextDay,animalList} = useDay();

    useEffect(getAllAnimals, [animalList])

    const feedingNone = animalList.filter(currentAnimal => currentAnimal.feedStatus === "NONE")
    const feedingOpen = animalList.filter(currentAnimal => currentAnimal.feedStatus === "OPEN")
    const feedingDoing = animalList.filter(currentAnimal => currentAnimal.feedStatus === "DOING")
    const feedingDone = animalList.filter(currentAnimal => currentAnimal.feedStatus === "DONE")


    return (
        <div className="App">
            <header className="App-header">
                <img id="logo" src={logo} alt="logo"/>
                <DayBar animals={animalList} nextDay={goToNextDay} prevDay={goToPreviousDay} currentDay={dayOfTheWeek}/>
                <ul>
                    <li>Feeding</li>
                    <li>Order</li>
                </ul>

            </header>
            <Routes>
                <Route path={"/"} element={<AnimalGallery animalsAll={feedingNone} animalsOpen={feedingOpen} animalsFeeding={feedingDoing} animalsFed={feedingDone}  />}/>
                <Route path={"/animal/:id"} element={<AnimalCardDetails animals={animalList}/>}/>
            </Routes>
        </div>
    );
}

export default App;