import React, {useEffect, useState, useMemo} from 'react';
import {fetchWeather, fetchWeatherForecast} from "./api/keyAndURL";
import "./WeatherWindow.css";
import "./components/WeatherAdditionalInfo/WeatherAdditionalInfo.css"
import DailyWeatherList from "./components/DailyWeatherList/DailyWeatherList";
import WeatherAdditionalInfo from "./components/WeatherAdditionalInfo/WeatherAdditionalInfo";
import {getForecastDays} from "./utils/getForecastDays";
import CustomButton from "../CustomButton/CustomButton";

const WeatherWindow = () => {
    const [serverData, setServerData] = useState(null)
    const [serverDataForecast, setServerDataForecast] = useState(null)
    const [city, setCity] = useState("London");
    const [currentCard, setCurrentCard] = useState (null);
    const forecastDays = useMemo(() => {
        return getForecastDays(serverDataForecast);
    },[serverDataForecast]);


    useEffect(() => {
        downloadWeather();
        downloadWeatherForecast();
    }, []);

    async function downloadWeather() {
        const requestResult = await fetchWeather(city);
        setServerData(requestResult);
    }

    async function downloadWeatherForecast() {
        const requestResult = await fetchWeatherForecast(city);
        setServerDataForecast(requestResult);
    }

    function getClassNameByWeather() {
        if (serverData?.current?.condition?.text === "Sunny") {
            return 'currentWeatherSunny';
        } else {
            return 'currentWeatherInfo';
        }
    }

    function handleClick() {
        // downloadWeather();
        downloadWeatherForecast();
    }

    useEffect(() => {
        if (currentCard){
            setCurrentCard(forecastDays[0]);
        }
    }, [serverDataForecast]);

    return (
        <div className="container">
            <div className={"searchBar"}><input type="text" id="locationInput" value={city} onChange={e => setCity(e.target.value)}
                        placeholder="Enter a city"/>
                <CustomButton id="searchButton" onClick={handleClick} text="Search" size="medium" variant="primary"/>
            </div>
            <DailyWeatherList forecastDay={forecastDays} onCardClick={setCurrentCard}/>
            <WeatherAdditionalInfo currentCard={currentCard}/>
        </div>
    );
};


export default WeatherWindow;
