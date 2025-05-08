import React, {useContext} from 'react';
import ThemeContext from "../../../../Contexts/ThemeContext";
import {$currentCard} from "../../../../utils/weather";
import {useUnit} from "effector-react";

const WeatherAdditionalInfo = () => {

    const {isDarkTheme} = useContext(ThemeContext);
    const cardElementClassName = `cardElement cardElement${(isDarkTheme)? "Dark" : "Light"}`;
    const currentCard = useUnit($currentCard);

    if (!currentCard) {
        return null;
    }

    return (
        <div className={`weatherAdditionalInfo weatherAdditionalInfoWindow${(isDarkTheme)? "Dark" : "Light"}`}>
            <div className={`weatherMessage weatherMessage${(isDarkTheme)? "Dark" : "Light"}`}>Today's highlights</div>
            <div className={"additionalInfo"}>
                <div className={cardElementClassName}>
                    <div>{`Max Wind: `}</div><br />
                    <div className={"valueNumbers"}>{`${currentCard?.day?.maxwind_kph} km/h`}</div>
                </div>
                <div className={cardElementClassName}>
                    <div>{`Sunrise: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.sunrise}</div>
                    <div>{`Sunset: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.sunset}</div>
                </div>
                <div className={cardElementClassName}>
                    <div>{`Humidity: `}</div><br />
                    <div className={"valueNumbers"}>{`${currentCard?.day?.avghumidity} %`}</div>
                </div>
                <div className={cardElementClassName}>
                    <div>{`UV Index: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.day?.uv}</div>
                </div>
                <div className={cardElementClassName}>
                    <div>{`Moonrise: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.moonrise}</div>
                    <div>{`Moonset: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.moonset}</div>
                </div>
                <div className={cardElementClassName}>
                    <div>{`Chance of rain: `}</div><br />
                    <div className={"valueNumbers"}>{`${currentCard?.day?.daily_chance_of_rain} %`}</div>
                </div>
            </div>
            <div className={"additionalInfo"}>

            </div>
        </div>
    );
};

export default WeatherAdditionalInfo;