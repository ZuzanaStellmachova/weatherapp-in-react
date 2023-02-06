import React, { useState, useEffect } from "react";
import axios from "axios";
import DayForecast from "./DayForecast";
                // {"city":"Bratislava","country":"Slovakia","coordinates":{"longitude":17.139658691421687,"latitude":48.15926025},"daily":[{"condition":{"description":"overcast clouds","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png","icon":"broken-clouds-day"},"temperature":{"day":-0.99,"minimum":-4.34,"maximum":-0.68,"humidity":51},"wind":{"speed":4.1},"time":1675681200},{"condition":{"description":"sky is clear","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png","icon":"clear-sky-day"},"temperature":{"day":-0.09,"minimum":-5.25,"maximum":1.2,"humidity":48},"wind":{"speed":2.38},"time":1675767600},{"condition":{"description":"few clouds","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png","icon":"few-clouds-day"},"temperature":{"day":1.29,"minimum":-4.2,"maximum":2.25,"humidity":51},"wind":{"speed":4.12},"time":1675854000},{"condition":{"description":"sky is clear","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png","icon":"clear-sky-day"},"temperature":{"day":1.88,"minimum":-3.63,"maximum":2.5,"humidity":48},"wind":{"speed":4.95},"time":1675940400},{"condition":{"description":"sky is clear","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png","icon":"clear-sky-day"},"temperature":{"day":4.18,"minimum":-2.63,"maximum":4.18,"humidity":43},"wind":{"speed":3.79},"time":1676026800},{"condition":{"description":"sky is clear","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png","icon":"clear-sky-day"},"temperature":{"day":5.22,"minimum":-1.38,"maximum":5.22,"humidity":52},"wind":{"speed":3.21},"time":1676113200},{"condition":{"description":"broken clouds","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png","icon":"broken-clouds-day"},"temperature":{"day":7.84,"minimum":2.33,"maximum":7.88,"humidity":70},"wind":{"speed":5.75},"time":1676199600}]}
const sheCodeData = {"city":"Al Wahat",
    "country":"Libya",
    "coordinates":{"longitude":21.7496392,"latitude":29.1573123},
    "daily":[{"condition":{"description":"broken clouds","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png","icon":"broken-clouds-day"},
            "temperature":{"day":13.29,"minimum":10.52,"maximum":13.99,"humidity":42},
            "wind":{"speed":8.99},"time":1675677600},
            {"condition":{"description":"broken clouds","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png","icon":"broken-clouds-day"},
            "temperature":{"day":13.65,"minimum":9.48,"maximum":15.06,"humidity":42},
            "wind":{"speed":4.82},
            "time":1675764000},
            {"condition":{"description":"overcast clouds","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png","icon":"broken-clouds-day"},
            "temperature":{"day":13.52,"minimum":9.26,"maximum":15.65,"humidity":43},
            "wind":{"speed":6.38},"time":1675850400},
            {"condition":{"description":"overcast clouds","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png","icon":"broken-clouds-day"},
            "temperature":{"day":14.65,"minimum":10.95,"maximum":19.85,"humidity":36},
            "wind":{"speed":11.43},"time":1675936800},
            {"condition":{"description":"sky is clear","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png","icon":"clear-sky-day"},
            "temperature":{"day":13.04,"minimum":9.36,"maximum":16.76,"humidity":46},
            "wind":{"speed":4.05},"time":1676023200},
            {"condition":{"description":"scattered clouds","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png","icon":"scattered-clouds-day"},
            "temperature":{"day":14.1,"minimum":10.54,"maximum":16.54,"humidity":54},
            "wind":{"speed":5.83},"time":1676109600},
            {"condition":{"description":"scattered clouds","icon_url":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png","icon":"scattered-clouds-day"},
            "temperature":{"day":12.21,"minimum":9.15,"maximum":14.8,"humidity":49},
            "wind":{"speed":6.78},"time":1676196000}]}

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
        // handleResponse(sheCodeData)
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
