import React, {useContext} from 'react';
import './DailyWeather.css'
import ThemeContext from "../../../../Contexts/ThemeContext";
import {IPropsDailyWeather} from "../../../../Interfaces/Interfaces";

const DailyWeather = (props:IPropsDailyWeather) => {
    const {isDarkTheme} = useContext(ThemeContext);
    return (
        <div className={`weatherCard weatherCard${(isDarkTheme)? "Dark" : "Light"}`} onClick={props.onClick}>
            <div className={"weatherTextTop"}> {props.day} </div>
            <img src={props.weatherIcon} className={"weatherIcon"} alt={"Today's weather icon"}/>
            <pre className={"weatherTextBottom"}>{props.avgTemp} <p className={"minWeatherTextBottom"}> {props.minTemp}</p></pre>
        </div>
    );
};

export default DailyWeather;


// onClick: React.MouseEventHandler<HTMLDivElement>;
// day : string
// weathericon : string
// avgTemt : number
// minTemp : number