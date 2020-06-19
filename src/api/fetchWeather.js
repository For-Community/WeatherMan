import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "8a027e3e80e97e5a9f3c1f13b16a9c60";

export const fetchWeather = async(query) => {
    const {data} = await axios.get(URL, {
        params : {
            q : query,
            units: 'metric',
            APPID : API_KEY
        } 
    });

    return data;
}