import React from 'react';

import './WeatherCard.css';

export default function WeatherCard(props) {
  const imgPath = require(`./assets/images/${props.weatherIcon}.svg`)

  if (props.hour) {
    return (
      <section className="weather-card">
        <h2 className= "upcoming-hour-7" aria-label="Upcoming hour of forecast">{props.hour}</h2>
        <img className="weather-icon weather-icon-7" src={imgPath} alt="weather icon" />
        <h2 className="hourly-temp-7" aria-label="Projected hourly temperature">{props.projectedHrTempF}&deg; F / {props.projectedHrTempC}&deg; C</h2>
      </section>
    )

  } else {
    return (
      <section className="weather-card">
        <h2 className="upcoming-day" aria-label="Upcoming day of forecast">{props.weekday}</h2>
        <img className="weather-icon weather-icon-10" src={imgPath} alt="weather icon"/>
        <h3 className="projected-temp-10" aria-label="Projected daily high temperature"><span className="card-high-low">High:</span> {props.highTempF}&deg; F / {props.highTempC}&deg; C</h3>
        <h3 className="projected-temp-10" aria-label="Projected daily low temperature"><span className="card-high-low">Low:</span> {props.lowTempF}&deg; F / {props.lowTempC}&deg; C</h3>
      </section>
    )
  }
}