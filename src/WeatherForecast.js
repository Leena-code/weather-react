import React, {useState} from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);
    }
    if (loaded && props.city === forecast.city.name){
        return(
        <div className= "WeatherForecast row">
                <WeatherForecastPreview data={forecast.list[0]} />
                <WeatherForecastPreview data={forecast.list[1]} />
                <WeatherForecastPreview data={forecast.list[2]} />
                <WeatherForecastPreview data={forecast.list[3]} />
                <WeatherForecastPreview data={forecast.list[4]} />
        </div>
        );
    } else {
        let apiKey = "806f99d0661b04444ade3ca9ef0a7b55";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
    }
}