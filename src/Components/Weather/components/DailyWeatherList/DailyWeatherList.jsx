import React, {useContext} from 'react';
import DailyWeather from "../DailyWeather/DailyWeather";
import "./DailyWeatherList.css";
import {getWeekDayNameByDate} from "../../utils/dateHelpers";
import {ThemeContext} from "../../../NavigationBar/NavigationBar";

const DailyWeatherList = ({forecastDay,onCardClick}) => {

    // const pageTheme = useContext(ThemeContext);
    // console.log("pageTheme ", pageTheme)
    // let themeClassName;
    // if (pageTheme)
    //     console.log('here')
    //     themeClassName = "dark";
    // themeClassName = " ";

    if (!forecastDay){
        return null;
    }

    return (
        <div className={`dark weatherList`}>
            {forecastDay.map((dailyItem, index) =>
                <DailyWeather day={getWeekDayNameByDate(dailyItem.date)} weatherIcon={dailyItem.day.condition.icon}
                              avgTemp={`${dailyItem.day.avgtemp_c}°C`} minTemp={`${dailyItem.day.mintemp_c}°C`} key={dailyItem.date_epoch} onClick={() => onCardClick(dailyItem)}/>
            )}
        </div>
    );
};

export default DailyWeatherList;