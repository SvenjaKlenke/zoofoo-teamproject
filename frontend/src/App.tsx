import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import AnimalGallery from "./AnimalGallery/AnimalGallery";
import axios from "axios";
import {Animal} from "./model/AnimalModel";
import logo from "./logo.svg";
import AnimalCardDetails from "./AnimalCard/AnimalCardDetails";


function App() {

    const [animalList, setAnimalList] = useState<Animal[]>([])
    const [temperature, setTemperature] = useState(null);

    function getAllAnimals() {
        axios.get("/api/animal")
            .then((response) => {
                setAnimalList(response.data)
            })
    }

    function getTemperature() {
        axios.get("/api/temperature")
            .then((response) => {
                setTemperature(response.data)
            })
    }

    useEffect(getAllAnimals, [])
    useEffect(getTemperature, [])


    return (
        <div className="App">
            <header className="App-header">
                <img id="logo" src={logo} alt="logo"/>
                <ul>
                <li>Feeding</li>
                <li>Order</li>
            </ul>
        </header>
        <Routes>
            <Route path={"/"} element={<AnimalGallery animals={animalList}/>}/>
            <Route path={"/animal/:id"} element={<AnimalCardDetails animals={animalList}/>}/>
        </Routes>
    </div>
  );
}
export default App;
