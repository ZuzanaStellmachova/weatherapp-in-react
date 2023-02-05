import React, { useState } from "react";
import axios from "axios";
import DayForecast from "./DayForecast";


export default function Forecast(props) {
    let [ready, setReady] = useState();
    let [forecast, setForecast] = useState("");

    function dataLoad() {
        let apiKey = "fe0ftab741626of0b0ba6ab7e42bf053";
        let lat = 30;
        let lon = 20;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);  
    }

    function handleResponse(response) {
        setForecast(response.data.list);
    }   

    if(ready) {
        return (
            <div className="forecast" id="forecast">
              <div className="day-forecast" id="day-forecast-0">
                <img src="{`icons/${props.data.icon}.svg`}" alt="" />
                <div className="temperature-wrapper">
                  <div className="day-temperature-wrapper">
                    <span className="day-temperature" id="day-temperature-0">
                      {forecast[0].data.main.temp}
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
          );
        }

    else {
        dataLoad();
        return ("Loading...")
    }
        
    }
    

