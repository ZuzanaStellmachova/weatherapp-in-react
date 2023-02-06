import axios from "axios";
import React, { useState } from "react";
import Time from "./Time";
import Day from "./CurrentDay";
import Date from "./CurrentDate";
import CurrentTemperature from "./CurrentTemperature";
import Forecast from "./Forecast"
import WeatherIcon from "./WeatherIcon";

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
        let apiKey = "f3009e4852fa0a079dab291dabf020c4";
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
                        <img className="location-icon" src="/icons/location.svg" alt="" />
                        </div>
                        <div className="btn-location-text">Use current location</div>
                    </button>
                    </div>
                </div>
                <div className="app-wrapper" id="app-wrapper">
                    <div className="current-data-wrapper" id="current-data-wrapper">
                    <div className="icon-temperature-wrapper">
                        <WeatherIcon data={weatherData}/>
                        <CurrentTemperature data={weatherData}/>
                    </div>
                    <div className="additional-weather-data" id="additional-weather-data">
                        <div className="current-city" id="current-city">
                        {cityHtml}
                        </div>
                        <div className="weather-description opacity-70" id="weather-description">
                        Currently,{" "}
                        <span className="description">{weatherData.description}</span> ·{" "}
                        <span className="wind-speed" id="wind-speed">{weatherData.wind}</span>
                        <span>&nbsp;kmph</span>
                        </div>
                    </div>
                    </div>
    
                    <Forecast weatherData={weatherData}/>
                    {/* <WeatherIcon weatherData={weatherData} /> */}
                </div>    
            </>
        )
    }
        else {
            search();
            return "Loading...";
          }
        }
    