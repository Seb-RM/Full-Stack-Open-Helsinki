import.meta.env;
import axios from "axios";
import { useEffect, useState } from "react";

function CountryDetail({ country }) {
    console.log(import.meta.env.VITE_WEATHER_API);
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}`;

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            if (country && country.capital) {
                try {
                const apiKey = "TU_API_KEY"; // Reemplaza con tu API key de OpenWeatherMap
                const capital = country.capital[0]; // Asegúrate de que estás usando el nombre de la capital correcto
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${import.meta.env.VITE_WEATHER_API}`
                );
                setWeather(response.data);
                } catch (error) {
                setError(error);
            }
        }
        };

        fetchWeather();
    }, [country]);

    console.log(weather)

    return (
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
    );
}

export default CountryDetail;
