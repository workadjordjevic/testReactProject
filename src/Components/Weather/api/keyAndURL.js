import WeatherWindow from "../WeatherWindow";

const baseURL = "http://api.weatherapi.com/v1";
const myKey = "66f7f2cec4ea44c58a7144517250104";
const currentWeather = "/current.json";
const forecastWeather = "/forecast.json";
const forecast = "/forecast.json";

export function fetchWeather(city) {
    const url = `${baseURL}${currentWeather}?key=${myKey}&q=${city}&aqi=no`;

    return fetch(url)
        .then(response => response.json())
        .catch(error => {
             console.error('Error fetching weather data:', error);
        });
    }

export function fetchWeatherForecast(city) {
    const url = `${baseURL}${forecastWeather}?key=${myKey}&q=${city}&days=3`;

    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

    // useEffect    32:28
    // useRef       42:20 - 43:42 - 47:49
    // useMemo      54:02 - 59:00
    // useCallback  1:07:30 - 1:08:15 - 1:09:19
    // useContext   1:15:49
    // useReducer   1:34:08