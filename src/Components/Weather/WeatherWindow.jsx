import React, {useEffect, useContext} from 'react';
import "./WeatherWindow.css";
import "./components/WeatherAdditionalInfo/WeatherAdditionalInfo.css"
import DailyWeatherList from "./components/DailyWeatherList/DailyWeatherList";
import WeatherAdditionalInfo from "./components/WeatherAdditionalInfo/WeatherAdditionalInfo";
import CustomButton from "../UI/CustomButton/CustomButton";
import ThemeContext from "../../Contexts/ThemeContext";
import {
    $city, $currentCard,
    $forecastDays,
    changeCity, fetchWeatherForecastFx,
} from "../../utils/weather";
import {useUnit} from "effector-react";

const WeatherWindow = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    const {$forecastDays:forecastDays, $currentCard:currentCard, $city:city} = useUnit({$forecastDays,$currentCard,$city});

    useEffect(() => {
        downloadWeatherForecast();
    }, []);

    function downloadWeatherForecast() {
       fetchWeatherForecastFx(city);
    }

    function handleClick() {
        downloadWeatherForecast();
    }

    return (
        <div className="container">
            <div className={"searchBar"}>
                <input type="text" id="locationInput" value={city} onChange={(e) => changeCity(e.target.value)}
                       className={`searchBarInput${(isDarkTheme) ? "Dark" : "Light"}`} placeholder="Enter a city"/>
                <CustomButton id="searchButton" onClick={handleClick} text="Search" size="medium" variant="primary"/>
            </div>
            <DailyWeatherList forecastDay={forecastDays}/>
            <WeatherAdditionalInfo currentCard={currentCard}/>
        </div>
    );
};

export default WeatherWindow;
