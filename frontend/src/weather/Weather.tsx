import React from 'react';
import {WeatherModel} from "../model/WeatherModel";
import "./Weather.css"

type Props = {
    temperature: WeatherModel
}

function Weather(props: Props) {
    return (
        <div className="containerTemperature">
            {props.temperature.temp !== "null" ? (
                <div>
                    <h3>actual temperature:</h3>
                    <p>{props.temperature.temp} °C</p>
                </div>
            ) : (
                <p>load temperature...</p>
            )}
        </div>
    );
}

export default Weather;