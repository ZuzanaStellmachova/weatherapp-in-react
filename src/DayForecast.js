import React from "react";

export default function DayForecast(props) {
    // console.log(props.forecastData)
    function dayTemperature() {
        let dayTemperature = Math.round(props.forecastData.temperature.maximum);
        return dayTemperature;
    }

    function nightTemperature() {
        let nightTemperature = Math.round(props.forecastData.temperature.minimum);
        return nightTemperature;
    }

    function day() {
        let date = new Date(props.forecastData.time * 1000);
        let day = date.getDay();
    
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        return days[day];
      }

    return (
        <div className="day-forecast" id="day-forecast-0">
                <img src={`icons/${props.forecastData.condition.icon}.svg`} alt="" width={48} height={48}/>
                <div className="temperature-wrapper">
                  <div className="day-temperature-wrapper">
                    <span className="day-temperature" id="day-temperature-0">
                      {dayTemperature()}
                    </span>
                    °{" "}
                  </div>
                  |
                  <div className="night-temperature-wrapper">
                    <span className="night-temperature" id="night-temperature-0">
                      {nightTemperature()}
                    </span>
                    °
                  </div>
                </div>
                <div className="day-name" id="day-name-0">
                  {day()}
                </div>
              </div>
    )
}

