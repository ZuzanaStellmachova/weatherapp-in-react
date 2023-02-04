import React from "react"

export default function Time() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
        <>
        {hours}:{minutes}
        </>
    )
}