import React, {useContext} from 'react';
import DailyWeather from "../DailyWeather/DailyWeather";
import "./DailyWeatherList.css";
import {getWeekDayNameByDate} from "../../utils/dateHelpers";
import ThemeContext from "../../../../Contexts/ThemeContext";
import {returnCapitalLetterThemeString} from "../../../../utils/returnCapitalLetterThemeString";

const DailyWeatherList = ({forecastDay,onCardClick}) => {

    const {isDarkTheme} = useContext(ThemeContext);

    if (!forecastDay){
        return null;
    }

    return (
        <div className={`weatherList${returnCapitalLetterThemeString(isDarkTheme)}`}>
            {forecastDay.map((dailyItem, index) =>
                <DailyWeather day={getWeekDayNameByDate(dailyItem.date)} weatherIcon={dailyItem.day.condition.icon}
                              avgTemp={`${dailyItem.day.avgtemp_c}°C`} minTemp={`${dailyItem.day.mintemp_c}°C`} key={dailyItem.date_epoch} onClick={() => onCardClick(dailyItem)}/>
            )}
        </div>
    );
};

export default DailyWeatherList;