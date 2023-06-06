import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import AnimalGallery from "./AnimalGallery/AnimalGallery";
import logo from "./logo.svg";
import DayBar from "./element/DayBar";
import AnimalCardDetails from "./AnimalCard/AnimalCardDetails";
import ProtectedRoutes from "./login/ProtectedRoutes";
import LoginPage from "./login/LoginPage";
import useKeeper from "./login/useKeeper";
import useDay from "./hook/UseDay";
import Weather from "./weather/Weather";
import {WeatherModel} from "./model/WeatherModel";
import axios from "axios";
import ToFeedGallery from "./AnimalGallery/ToFeedGallery";
import FedGallery from "./AnimalGallery/FedGallery";
import FeedingGallery from "./AnimalGallery/FeedingGallery";


function App() {

    const weekdays: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const {login, user} = useKeeper()
    const {
        getAllAnimals,
        dayOfTheWeek,
        goToPreviousDay,
        goToNextDay,
        animalList,
        changeStatusOfAnimal
    } = useDay({weekdays});
    const [temperature, setTemperature] = useState<WeatherModel>({temp: "null"})
    const feedingNone = animalList.filter(currentAnimal => currentAnimal.feedStatus === "NONE")
    const feedingOpen = animalList.filter(currentAnimal => currentAnimal.feedStatus === "OPEN")
    const feedingDoing = animalList.filter(currentAnimal => currentAnimal.feedStatus === "DOING")
    const feedingDone = animalList.filter(currentAnimal => currentAnimal.feedStatus === "DONE")

    function getTemperature() {
        axios.get("/api/temperature")
            .then((response) => {
                setTemperature(response.data)
            })
    }

    useEffect(getTemperature, [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(getAllAnimals, [user])
    return (
        <div className="App">
            <header className="App-header">
                <img id="logo" src={logo} alt="logo"/>
                <DayBar animals={animalList} nextDay={goToNextDay} prevDay={goToPreviousDay} currentDay={dayOfTheWeek}/>
                <ul>
                    <li>Feeding</li>
                    <li>Order</li>
                </ul>
                <div className="weatherContainer">
                    <Weather temperature={temperature}/>
                </div>
            </header>
            <Routes>
                <Route path={"/login"} element={<LoginPage login={login}/>}/>
                <Route element={<ProtectedRoutes user={user} />}>
                        <Route path="/" element={(
                            <div className="gallery-container">
                                <AnimalGallery animalsAll={feedingNone} getAllAnimals={getAllAnimals}
                                               dayOfTheWeek={dayOfTheWeek} changeStatusOfAnimal={changeStatusOfAnimal}/>
                                <ToFeedGallery animalsOpen={feedingOpen} getAllAnimals={getAllAnimals}/>
                                <FeedingGallery animalsFeeding={feedingDoing} getAllAnimals={getAllAnimals}/>
                                <FedGallery animalsFed={feedingDone} getAllAnimals={getAllAnimals}/>
                            </div>
                        )} />
                        <Route path="animal/:id" element={<AnimalCardDetails animals={animalList} />} />
                </Route>
            </Routes>
    </div>
  );
}

export default App;