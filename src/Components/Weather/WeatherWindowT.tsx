import React, {useEffect, useContext, ChangeEvent} from 'react';
import "./WeatherWindow.css";
import "./components/WeatherAdditionalInfo/WeatherAdditionalInfo.css"
import ThemeContext from "../../Contexts/ThemeContext";
import {useUnit} from "effector-react";
import CustomButtonT from "../UI/CustomButton/CustomButtonT";
import {
    $city, changeCity,
    fetchWeatherForecastFx,
} from "../../utils/weatherT";
import DailyWeatherListT from "./components/DailyWeatherList/DailyWeatherListT";
import WeatherAdditionalInfoT from "./components/WeatherAdditionalInfo/WeatherAdditionalInfoT";

const WeatherWindow = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    let {$city:city} = useUnit({$city});

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
                <CustomButtonT id="searchButton" onClick={handleSearch} text="Search" size="medium" variant="primary"/>
            </div>
            <DailyWeatherListT />
            <WeatherAdditionalInfoT />
        </div>
    );
};

export default WeatherWindow;


// city : string
// fetchWeatherForecastFx => set $serverDataForecast :IResponseData
//