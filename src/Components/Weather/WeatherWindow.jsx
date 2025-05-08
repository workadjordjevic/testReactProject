import React, {useEffect, useContext} from 'react';
import "./WeatherWindow.css";
import "./components/WeatherAdditionalInfo/WeatherAdditionalInfo.css"
import DailyWeatherList from "./components/DailyWeatherList/DailyWeatherList";
import WeatherAdditionalInfo from "./components/WeatherAdditionalInfo/WeatherAdditionalInfo";
import CustomButton from "../UI/CustomButton/CustomButton";
import ThemeContext from "../../Contexts/ThemeContext";
import {
    $city, changeCity,
    fetchWeatherForecastFx,
} from "../../utils/weather";
import {useUnit} from "effector-react";

const WeatherWindow = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    const {$city:city} = useUnit({$city});

    useEffect(() => {
        downloadWeatherForecast();
    }, []);

    function downloadWeatherForecast() {
       fetchWeatherForecastFx(city);
    }

    function handleSearch() {
        downloadWeatherForecast();
    }

    return (
        <div className="container">
            <div className={"searchBar"}>
                <input type="text" id="locationInput" value={city} onChange={(e) => changeCity(e.target.value)}
                       className={`searchBarInput${(isDarkTheme) ? "Dark" : "Light"}`} placeholder="Enter a city"/>
                <CustomButton id="searchButton" onClick={handleSearch} text="Search" size="medium" variant="primary"/>
            </div>
            <DailyWeatherList />
            <WeatherAdditionalInfo />
        </div>
    );
};

export default WeatherWindow;
