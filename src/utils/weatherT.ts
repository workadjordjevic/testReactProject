import {createEffect} from "effector/compat";
import {createEvent, createStore, sample} from "effector";
import {ICurrentCard, IForecastDay, IResponseData} from "../Interfaces/Interfaces";

const baseURL :string = "http://api.weatherapi.com/v1";
const myKey :string = "66f7f2cec4ea44c58a7144517250104";
const forecast :string = "/forecast.json";

export const $serverDataForecast= createStore<IResponseData | null>(null);
export const $forecastDays= createStore<IForecastDay[]>([]);
export const $currentCard = createStore <ICurrentCard | null>(null);
export const $city = createStore<string>("London");

export const onCardClick = createEvent<IForecastDay>();
export const getDaysFromObj = createEvent<IResponseData | null>();
export const changeCity = createEvent<string>();
const changeCurrentCardOnChangeCity = createEvent<IForecastDay[]>(); // !!

export const fetchWeatherForecastFx = createEffect(async (city:string) => {
    const url = `${baseURL}${forecast}?key=${myKey}&q=${city}&days=3`;

    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
})

$serverDataForecast.on(fetchWeatherForecastFx.doneData, (_, responseData) => responseData);
$forecastDays.on(getDaysFromObj,(_,serverDataForecast) => serverDataForecast?.forecast?.forecastday);
$city.on(changeCity,(_,newCity)=> newCity);
$currentCard.on(onCardClick,(_,selectedDailyCard) => selectedDailyCard);
$currentCard.on(changeCurrentCardOnChangeCity,(currentCard,forecastDays) => currentCard ? forecastDays[0] : null);

sample({
    clock:$serverDataForecast,
    target: getDaysFromObj,
})

sample({
    clock:$forecastDays,
    target:changeCurrentCardOnChangeCity,
})