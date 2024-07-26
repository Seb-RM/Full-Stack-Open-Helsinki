import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API;

const weatherService = async () => {
    const request = axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`
    );

    const response = await request;
    return response.data;
};

export default { weatherService };