import React from 'react';

const WeatherAdditionalInfo = ({currentCard}) => {

    if (!currentCard) {
        return null;
    }

    return (
        <div className={"weatherAdditionalInfoWindow"}>
            <div className={"weatherMessage"}>Today's highlights</div>
            <div className={"additionalInfo"}>
                <div className={"CardElement"}>
                    <div>{`Max Wind: `}</div><br />
                    <div className={"valueNumbers"}>{`${currentCard?.day?.maxwind_kph} km/h`}</div>
                </div>
                <div className={"CardElement"}>
                    <div>{`Sunrise: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.sunrise}</div>
                    <div>{`Sunset: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.sunset}</div>
                </div>
                <div className={"CardElement"}>
                    <div>{`Humidity: `}</div><br />
                    <div className={"valueNumbers"}>{`${currentCard?.day?.avghumidity} %`}</div>
                </div>
                <div className={"CardElement"}>
                    <div>{`UV Index: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.day?.uv}</div>
                </div>
                <div className={"CardElement"}>
                    <div>{`Moonrise: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.moonrise}</div>
                    <div>{`Moonset: `}</div><br />
                    <div className={"valueNumbers"}>{currentCard?.astro?.moonset}</div>
                </div>
                <div className={"CardElement"}>
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