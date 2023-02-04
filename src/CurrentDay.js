import React from "react"

export default function CurrentDay () {
    let currentDate = new Date();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    let day = days[currentDate.getDay()]

    return (
        <>{day}</>
    )
}