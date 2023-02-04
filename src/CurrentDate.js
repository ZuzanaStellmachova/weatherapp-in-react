import React from "react";

export default function CurrentDate(){
    let date = new Date();
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let month = months[date.getMonth()];
    let dayInMonth = date.getDate();

    return(
        <>{month} {dayInMonth}</>
    )
}