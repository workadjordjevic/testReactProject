import React, {useContext} from 'react';
import DailyWeather from "../DailyWeather/DailyWeather";
import "./DailyWeatherList.css";
import {getWeekDayNameByDate} from "../../utils/dateHelpers";
import ThemeContext from "../../../../Contexts/ThemeContext";

const DailyWeatherList = ({forecastDay,onCardClick}) => {

    const {isDarkTheme} = useContext(ThemeContext);

    if (!forecastDay){
        return null;
    }

    return (
        <div className={`weatherListBasicStyles weatherList${(isDarkTheme)? "Dark" : "Light"}`}>
            {forecastDay.map((dailyItem) =>
                <DailyWeather day={getWeekDayNameByDate(dailyItem.date)} weatherIcon={dailyItem.day.condition.icon}
                              avgTemp={`${dailyItem.day.avgtemp_c}°C`} minTemp={`${dailyItem.day.mintemp_c}°C`} key={dailyItem.date_epoch} onClick={() => onCardClick(dailyItem)}/>
            )}
        </div>
    );
};

export default DailyWeatherList;