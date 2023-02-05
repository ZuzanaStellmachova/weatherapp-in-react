import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DayForecast(props) {
    function dayTemperature () {
        let temperature = Math.round(props.data.temp.max)
    }
    return `{temperature}°`
}

