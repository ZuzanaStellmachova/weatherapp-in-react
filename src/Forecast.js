import React, { useState, useEffect } from "react";
import axios from "axios";
import DayForecast from "./DayForecast";

export default function Forecast(props) {
    let [ready, setReady] = useState(false);
    let [forecastData, setForecastData] = useState("");

    useEffect(() => {
        setReady(false);
      }, [props.weatherData.coordinates]);
    

    function dataLoad() {
        let apiKey = "fe0ftab741626of0b0ba6ab7e42bf053";
        let lat = props.weatherData.coordinates.lat;
        let lon = props.weatherData.coordinates.lon;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse); 
    }

    function handleResponse(response) {
        console.log(response)
        setForecastData(response.data.daily);
        setReady(true)
    }  
    
    if(ready) {
        return (
            <div className="forecast" id="forecast">
                {
                forecastData && forecastData.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return (
                        <div className="col" key={index}>
                            <DayForecast forecastData={dailyForecast} />
                        </div>
                        );
                    } else {
                        return null;
                    }
                })
            }
            </div>
            )}

     else {
        dataLoad();
        return ("Loading...")}
}
