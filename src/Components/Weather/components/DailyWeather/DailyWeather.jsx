import React, {useContext} from 'react';
import './DailyWeather.css'
import {returnCapitalLetterThemeString} from "../../../../utils/returnCapitalLetterThemeString";
import ThemeContext from "../../../../Contexts/ThemeContext";

const DailyWeather = (props) => {
    const {isDarkTheme} = useContext(ThemeContext);
    return (
        <div className={`weatherCard${returnCapitalLetterThemeString(isDarkTheme)}`} onClick={props.onClick}>
            <div className={"weatherTextTop"}> {props.day} </div>
            <img src={props.weatherIcon} className={"weatherIcon"} alt={"Today's weather icon"}/>
            <pre className={"weatherTextBottom"}>{props.avgTemp} <p className={"minWeatherTextBottom"}> {props.minTemp}</p></pre>
        </div>
    );
};

export default DailyWeather;

