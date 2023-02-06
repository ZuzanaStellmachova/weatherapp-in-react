import React from "react";

export default function WeatherIcon(props) {
    console.log(props)
    return (
        <div className="current-weather-icon" id="current-weather-icon"> 
            <img src={`icons/${props.data.icon}.svg`} alt="weather-icon" />
        </div>
    )
}