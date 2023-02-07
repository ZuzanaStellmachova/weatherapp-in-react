import React from "react";

export default function CurrentTemperature(props) {
    return (
        <div className={`current-temperature`}>
            <span id="current-temperature">{Math.round(props.data.temperature)}</span>°
        </div>
    )
}