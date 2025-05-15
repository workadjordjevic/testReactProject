import React, {useContext} from 'react';
import "./DailyWeatherList.css";
import {getWeekDayNameByDate} from "../../utils/dateHelpers";
import ThemeContext from "../../../../Contexts/ThemeContext";
import {$forecastDays, onCardClick} from "../../../../utils/weatherT";
import {useUnit} from "effector-react";
import {FC} from "react";
import {IForecastDay} from "../../../../Interfaces/Interfaces";
import DailyWeatherT from "../DailyWeather/DailyWeatherT";

const DailyWeatherList :FC = () => {

    const {isDarkTheme} = useContext(ThemeContext);
    const forecastDay :IForecastDay[] = useUnit($forecastDays);

    if (!forecastDay){
        return null;
    }

    return (
        <div className={`weatherList weatherList${(isDarkTheme)? "Dark" : "Light"}`}>
    {forecastDay.map((dailyItem:IForecastDay) =>
        <DailyWeatherT day={getWeekDayNameByDate(dailyItem.date)} weatherIcon={dailyItem.day.condition.icon}
        avgTemp={`${dailyItem.day.avgtemp_c}°C`} minTemp={`${dailyItem.day.mintemp_c}°C`}
        key={dailyItem.date_epoch} onClick={() => onCardClick(dailyItem)}/>
    )}
    </div>
);
};

export default DailyWeatherList;


// forecastDay = [{}{}{}]