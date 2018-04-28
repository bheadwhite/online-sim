import React, { Component } from 'react';
import './WeatherDisp.css'

export default function WeatherDisp(props) {
    props.fiveDayArr.splice(5)
    return (
        <div className='WeatherDisp'>
        {
            props.fiveDayArr.map((day, i) => {
                    return (<div className="WeatherDisp-box" key={i}>
                    <ul>
                    <li>{day.date.weekday}</li>
                    <li>{day.conditions}</li>
                    <li>High {day.high.fahrenheit}</li>
                    <li>Low {day.low.fahrenheit}</li>
                    <li><img src={day.icon_url} alt='weather icon' /></li>
                    </ul>
                    </div>)}
                )
            }
        </div>
    )
}