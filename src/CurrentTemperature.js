import React, { useState } from "react";

export default function CurrentTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }
    

    return (
        <div className={`current-temperature`}>
            <span id="current-temperature">{Math.round(props.data.temperature)}</span>°
        </div>
    )
}