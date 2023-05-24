import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import AnimalGallery from "./AnimalGallery/AnimalGallery";
import axios from "axios";
import {Animal} from "./model/AnimalModel";


function App() {

    const [animalList, setAnimalList] = useState<Animal[]>([])

    function getAllAnimals() {
        axios.get("api/animal")
            .then((response) => {
                setAnimalList(response.data)
                })
    }
    useEffect(getAllAnimals, [])

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
        </Routes>
    </div>
  );
}

export default App;
