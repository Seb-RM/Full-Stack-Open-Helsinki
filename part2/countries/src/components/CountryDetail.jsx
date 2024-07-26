import.meta.env;
import axios from "axios";
import { useEffect, useState } from "react";

function CountryDetail({ country }) {
    console.log(import.meta.env.VITE_WEATHER_API);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            if (country && country.capital) {
                try {
                const apiKey = import.meta.env.VITE_WEATHER_API; 
                const capital = country.capital[0];
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`
                );
                setWeather(response.data);
                setLoading(false);
                } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        };

        fetchWeather();
    }, [country]);

    //console.log(weather)
    const weatherIconUrl = weather
        ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        : "";

    return (
        <>
            <div>
            <h1>{country.name.official}</h1>
            <h5>{country.name.common}</h5>
            <p>{country.capital}</p>
            <p>{country.population}</p>
            <p>{country.area}</p>
            <ul>
                {Object.keys(country.languages).map((key) => (
                <li key={key}>{country.languages[key]}</li>
                ))}
            </ul>
            <p>{country.area}</p>
            <img src={`${country.flags.svg}`} alt={`${country.flags.alt}`} />
            </div>
            <div>
                {loading ? (
                <p>Loading weather...</p>
                    ) : error ? (
                <p>Error fetching weather data: {error.message}</p>
                    ) : (
                <div>
                <h3>Weather in {country.capital}:</h3>
                <p>Temperature: {weather.main.temp}K</p>
                <p>Weather: {weather.weather[0].description}</p>
                <p>Wind Speed: {weather.wind.speed} m/s</p>
                <img src={weatherIconUrl} alt="Weather icon" />
                </div>
            )}
            </div>
        </>
    );
}

export default CountryDetail;
