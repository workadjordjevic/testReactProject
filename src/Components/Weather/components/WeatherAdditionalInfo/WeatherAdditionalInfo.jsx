import React, {useContext} from 'react';
import ThemeContext from "../../../../Contexts/ThemeContext";
import {returnCapitalLetterThemeString} from "../../../../utils/returnCapitalLetterThemeString";

const WeatherAdditionalInfo = ({currentCard}) => {

    const {isDarkTheme} = useContext(ThemeContext);

    if (!currentCard) {
        return null;
    }

    return (
        <div className={`weatherAdditionalInfoWindow${returnCapitalLetterThemeString(isDarkTheme)}`}>
            <div className={`weatherMessage${returnCapitalLetterThemeString(isDarkTheme)}`}>Today's highlights</div>
            <div className={"additionalInfo"}>
                <div className={`CardElement${returnCapitalLetterThemeString(isDarkTheme)}`}>
                    <div>{`Max Wind: `}</div><br />
                    <div className={"valueNumbers"}>{`${currentCard?.day?.maxwind_kph} km/h`}</div>
                </div>
                <div className={`CardElement${returnCapitalLetterThemeString(isDarkTheme)}`}>
                    <div>{`Sunrise: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.sunrise}</div>
                    <div>{`Sunset: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.sunset}</div>
                </div>
                <div className={`CardElement${returnCapitalLetterThemeString(isDarkTheme)}`}>
                    <div>{`Humidity: `}</div><br />
                    <div className={"valueNumbers"}>{`${currentCard?.day?.avghumidity} %`}</div>
                </div>
                <div className={`CardElement${returnCapitalLetterThemeString(isDarkTheme)}`}>
                    <div>{`UV Index: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.day?.uv}</div>
                </div>
                <div className={`CardElement${returnCapitalLetterThemeString(isDarkTheme)}`}>
                    <div>{`Moonrise: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.moonrise}</div>
                    <div>{`Moonset: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.moonset}</div>
                </div>
                <div className={`CardElement${returnCapitalLetterThemeString(isDarkTheme)}`}>
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