import {createEffect} from "effector/compat";
import {createEvent, createStore, sample} from "effector";

const baseURL = "http://api.weatherapi.com/v1";
const myKey = "66f7f2cec4ea44c58a7144517250104";
const forecast = "/forecast.json";

export const $serverDataForecast = createStore(null);
export const $city = createStore("London");
export const $currentCard = createStore(null);
export const $forecastDays = createStore([]);

export const onCardClick = createEvent();
export const getDaysFromObj = createEvent();
export const changeCity = createEvent();
export const changeCurrentCardOnChangeCity = createEvent();

export const fetchWeatherForecastFx = createEffect(async (city) => {
    const url = `${baseURL}${forecast}?key=${myKey}&q=${city}&days=3`;

    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
})

$serverDataForecast.on(fetchWeatherForecastFx.doneData, (_, responseData) => {
    return responseData;
});
$forecastDays.on(getDaysFromObj,(_,serverDataForecast) => serverDataForecast?.forecast?.forecastday);
$city.on(changeCity,(_,newCity)=> newCity);
$currentCard.on(onCardClick,(_,selectedDailyCard) => selectedDailyCard);
$currentCard.on(changeCurrentCardOnChangeCity,(currentCard,forecastDays) => {
        if (currentCard) {
            return forecastDays[0];
        }
        return null;
    })

sample({
    clock:$serverDataForecast,
    source: $serverDataForecast,
    target: getDaysFromObj,
})

sample({
    clock:$forecastDays,
    target:changeCurrentCardOnChangeCity,
})