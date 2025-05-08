import React, {useContext} from 'react';
import DailyWeather from "../DailyWeather/DailyWeather";
import "./DailyWeatherList.css";
import {getWeekDayNameByDate} from "../../utils/dateHelpers";
import ThemeContext from "../../../../Contexts/ThemeContext";
import {$forecastDays, onCardClick} from "../../../../utils/weather";
import {useUnit} from "effector-react";

const DailyWeatherList = () => {

    const {isDarkTheme} = useContext(ThemeContext);
    const forecastDay = useUnit($forecastDays);

    if (!forecastDay){
        return null;
    }

    return (
        <div className={`weatherList weatherList${(isDarkTheme)? "Dark" : "Light"}`}>
            {forecastDay.map((dailyItem) =>
                <DailyWeather day={getWeekDayNameByDate(dailyItem.date)} weatherIcon={dailyItem.day.condition.icon}
                              avgTemp={`${dailyItem.day.avgtemp_c}°C`} minTemp={`${dailyItem.day.mintemp_c}°C`}
                              key={dailyItem.date_epoch} onClick={() => onCardClick(dailyItem)}/>
            )}
        </div>
    );
};

export default DailyWeatherList;