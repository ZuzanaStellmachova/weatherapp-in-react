import React, { useState } from "react";

export default function CurrentTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }
    let fahrenheit = Math.round((props.data.temperature)*9/5+32);

    

    return (
        <div className={`current-temperature`}>
            <span id="current-temperature">{unit === "celsius" ? Math.round(props.data.temperature) : fahrenheit}</span>°
                <span className="weather-description">
                    <span className={`unit-conversion ${unit === "celsius" ? "active" : ''}`} onClick={showCelsius}>C</span> · <span className={`unit-conversion ${unit === "fahrenheit" ? "active" : ''}`} onClick={showFahrenheit}>F</span>
                </span>
        </div>
    )
}