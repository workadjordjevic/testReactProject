import React, {useContext} from 'react';
import ThemeContext from "../../../../Contexts/ThemeContext";

const WeatherAdditionalInfo = ({currentCard}) => {

    const {isDarkTheme} = useContext(ThemeContext);

    if (!currentCard) {
        return null;
    }

    return (
        <div className={`weatherAdditionalInfoBasicStyles weatherAdditionalInfoWindow${(isDarkTheme)? "Dark" : "Light"}`}>
            <div className={`weatherMessageBasicStyles weatherMessage${(isDarkTheme)? "Dark" : "Light"}`}>Today's highlights</div>
            <div className={"additionalInfo"}>
                <div className={`cardElementBasicStyles cardElement${(isDarkTheme)? "Dark" : "Light"}`}>
                    <div>{`Max Wind: `}</div><br />
                    <div className={"valueNumbers"}>{`${currentCard?.day?.maxwind_kph} km/h`}</div>
                </div>
                <div className={`cardElementBasicStyles cardElement${(isDarkTheme)? "Dark" : "Light"}`}>
                    <div>{`Sunrise: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.sunrise}</div>
                    <div>{`Sunset: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.sunset}</div>
                </div>
                <div className={`cardElementBasicStyles cardElement${(isDarkTheme)? "Dark" : "Light"}`}>
                    <div>{`Humidity: `}</div><br />
                    <div className={"valueNumbers"}>{`${currentCard?.day?.avghumidity} %`}</div>
                </div>
                <div className={`cardElementBasicStyles cardElement${(isDarkTheme)? "Dark" : "Light"}`}>
                    <div>{`UV Index: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.day?.uv}</div>
                </div>
                <div className={`cardElementBasicStyles cardElement${(isDarkTheme)? "Dark" : "Light"}`}>
                    <div>{`Moonrise: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.moonrise}</div>
                    <div>{`Moonset: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.moonset}</div>
                </div>
                <div className={`cardElementBasicStyles cardElement${(isDarkTheme)? "Dark" : "Light"}`}>
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