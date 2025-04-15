import React from 'react';
import './DailyWeather.css'

const DailyWeather = (props) => {
    return (
        <div className={"weatherCard"} onClick={props.onClick}>
            <div className={"weatherTextTop"}> {props.day} </div>
            <img src={props.weatherIcon} className={"weatherIcon"} alt={"Today's weather icon"}/>
            <pre className={"weatherTextBottom"}>{props.avgTemp} <p className={"minWeatherTextBottom"}> {props.minTemp}</p></pre>
        </div>
    );
};

export default DailyWeather;

