import React from 'react';

import './CurrentWeather.css'

export default function CurrentWeather(props) {
  const imgPath = require(`./assets/images/${props.weatherIcon}.svg`)

  return (
    <section className="current-weather">
      <h1 className="current-city-title" aria-label="Current city">Current Conditions in {props.currentLocation}</h1>
      <p className="last-updated" aria-label="Today">{props.today}</p>
      <p className="current-temp-display" aria-label="Current temperature in fahrenheit and celsius"><span className="fahr-display">{props.currentTempF}&deg;</span> F / {props.currentTempC}&deg; C</p>
      <div className="display-wrapper">
        <article className="icon-container">
          <h2 className="current-condition" aria-label="Current weather condition">{props.currentCondition}</h2>
          <img className="weather-icon" src={imgPath} alt="weather icon" />
        </article>
        <article className="hi-lo-display">
          <p className="daily-hi-lo" aria-label="Daily high temperature">High: {props.todayHighF}&deg; F /<span> {props.todayHighC}&deg; C</span></p>
          <p className="daily-hi-lo" aria-label="Daily low temperature">Low: {props.todayLowF}&deg; F /<span> {props.todayLowC}&deg; C</span></p>
        </article>
      </div>
      <p className="summary-display" aria-label="Summary of current weather">{props.todaySummary}</p>
    </section>
  )
}