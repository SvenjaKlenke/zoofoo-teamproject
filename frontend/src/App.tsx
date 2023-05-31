import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import AnimalGallery from "./AnimalGallery/AnimalGallery";
import axios from "axios";
import {Animal} from "./model/AnimalModel";
import logo from "./logo.svg";
import AnimalCardDetails from "./AnimalCard/AnimalCardDetails";
import ProtectedRoutes from "./login/ProtectedRoutes";
import LoginPage from "./login/LoginPage";
import useKeeper from "./login/useKeeper";


function App() {

    const [animalList, setAnimalList] = useState<Animal[]>([])
    const {login, user} = useKeeper()

    function getAllAnimals() {
        axios.get("/api/animal")
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
            <Route path={"/keeper/login"} element={<LoginPage login={login}/>}/>
            <Route element={<ProtectedRoutes user={user}/>}>
                <Route path={"/"} element={<AnimalGallery animals={animalList}/>}/>
                <Route path={"/animal/:id"} element={<AnimalCardDetails animals={animalList}/>}/>
            </Route>
        </Routes>
    </div>
  );
}
export default App;
