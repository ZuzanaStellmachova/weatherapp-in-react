import axios from "axios";
import React, { useState } from "react";
import Time from "./Time";
import Day from "./CurrentDay";
import Date from "./CurrentDate"

export default function Weather(props) {
    let [city, setCity] = useState(props.defaultCity);
    let [cityHtml, setCityHtml] = useState('');
    let [weatherData, setWeatherData] = useState({ready: false});
    
    function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        })
        setCityHtml(response.data.name)
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        if (!city.trim()) {
            alert("Please enter city");
        } else {
            search()
        }
    }
    
    function search(){
        let apiKey = "e6a8e0adb58c9406a8105c0fddd29983";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function showCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <>
                <div className="top-line-wrapper" id="top-line-wrapper">
                    <div className="current-date-time-wrapper">
                    <div className="current-date" id="current-date">
                        <span className="current-weekday"><Day /></span>
                        <span className="comma">,&nbsp;</span>
                        <span className="date"><Date /></span>
                    </div>
                    <span className="comma-date">,&nbsp;</span>
                    <div className="current-time"><Time /></div>
                    </div>
    
                    <form className="city-search" id="city-search" onSubmit={handleSubmit}>
                    <input
                        type="search"
                        onChange={showCity}
                        name="city-input"
                        placeholder="Search city"
                        className="city-input"
                        id="city-input"
                        autoComplete="off"
                    />
                    <button className="btn-search" id="btn-search" type="submit">
                        <img className="search-icon" src="/icons/search.svg" alt="Search" />
                    </button>
                    </form>
    
                    <div className="btn-location-wrapper">
                    <button className="btn-location" id="btn-location">
                        <div className="location-icon-wrapper">
                        <img className="location-icon" src="/icons/location.png" alt="" />
                        </div>
                        <div className="btn-location-text">Use current location</div>
                    </button>
                    </div>
                </div>
                <div className="app-wrapper" id="app-wrapper">
                    <div className="current-data-wrapper" id="current-data-wrapper">
                    <div className="icon-temperature-wrapper">
                        <div className="current-weather-icon" id="current-weather-icon">
                        <img src={`icons/${weatherData.icon}.svg`} alt="" />
                        </div>
                        <div className="current-temperature">
                        <span id="current-temperature">{Math.round(weatherData.temperature)}</span>°
                        </div>
                    </div>
                    <div className="additional-weather-data" id="additional-weather-data">
                        <div className="current-city" id="current-city">
                        {cityHtml}
                        </div>
                        <div className="weather-description" id="weather-description">
                        Currently,{" "}
                        <span className="description">{weatherData.description}</span> ·{" "}
                        <span className="wind-speed" id="wind-speed">{weatherData.wind}</span>
                        <span>&nbsp;kmph</span>
                        </div>
                    </div>
                    </div>
    
                    <div className="forecast" id="forecast">
                    <div className="day-forecast" id="day-forecast-0">
                        <img src="icons/04n.svg" alt="" />
                        <div className="temperature-wrapper">
                        <div className="day-temperature-wrapper">
                            <span className="day-temperature" id="day-temperature-0">
                            18
                            </span>
                            °{" "}
                        </div>
                        |
                        <div className="night-temperature-wrapper">
                            <span className="night-temperature" id="night-temperature-0">
                            8
                            </span>
                            °
                        </div>
                        </div>
                        <div className="day-name" id="day-name-0">
                        Mon
                        </div>
                    </div>
    
                    <div className="day-forecast" id="day-forecast-1">
                        <img src="icons/04n.svg" alt="" />
                        <div className="temperature-wrapper">
                        <div className="day-temperature-wrapper">
                            <span className="day-temperature" id="day-temperature-1">
                            30
                            </span>
                            °{" "}
                        </div>
                        |
                        <div className="night-temperature-wrapper">
                            <span className="night-temperature" id="night-temperature-1">
                            0
                            </span>
                            °
                        </div>
                        </div>
                        <div className="day-name" id="day-name-1">
                        Tue
                        </div>
                    </div>
    
                    <div className="day-forecast" id="day-forecast-2">
                        <img src="icons/04n.svg" alt="" />
                        <div className="temperature-wrapper">
                        <div className="day-temperature-wrapper">
                            <span className="day-temperature" id="day-temperature-2">
                            29
                            </span>
                            °{" "}
                        </div>
                        |
                        <div className="night-temperature-wrapper">
                            <span className="night-temperature" id="night-temperature-2">
                            9
                            </span>
                            °
                        </div>
                        </div>
                        <div className="day-name" id="day-name-2">
                        Wed
                        </div>
                    </div>
    
                    <div className="day-forecast" id="day-forecast-3">
                        <img src="icons/04n.svg" alt="" />
                        <div className="temperature-wrapper">
                        <div className="day-temperature-wrapper">
                            <span className="day-temperature" id="day-temperature-3">
                            30
                            </span>
                            °
                        </div>
                        |
                        <div className="night-temperature-wrapper">
                            <span className="night-temperature" id="night-temperature-3">
                            4
                            </span>
                            °
                        </div>
                        </div>
                        <div className="day-name" id="day-name-3">
                        Thu
                        </div>
                    </div>
    
                    <div className="day-forecast" id="day-forecast-4">
                        <img src="icons/04n.svg" alt="" />
                        <div className="temperature-wrapper">
                        <div className="day-temperature-wrapper">
                            <span className="day-temperature" id="day-temperature-4">
                            19
                            </span>
                            °{" "}
                        </div>
                        |
                        <div className="night-temperature-wrapper">
                            <span className="night-temperature" id="night-temperature-4">
                            14
                            </span>
                            °
                        </div>
                        </div>
                        <div className="day-name" id="day-name-4">
                        Fri
                        </div>
                    </div>
                    </div>
                </div>    
            </>
        )
    }
        else {
            search();
            return "Loading...";
          }
        }
    