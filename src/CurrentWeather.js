import React, { Component } from 'react';

import './CurrentWeather.css'

export default class CurrentWeather extends Component {
  constructor(props) {
    super();

    this.state = {
      currentLocation: this.setCurrLocation(props.data),
      currentCondition: this.setCurrCondition(props.data),
      today: this.setToday(props.data),
      weatherIcon: this.setIcon(props.data),
      currentTempF: this.setTemps(props.data, 'temp_f'),
      currentTempC: this.setTemps(props.data, 'temp_c'),
      todayHighF: this.setExtremeTemps(props.data, 'fahrenheit', 'high'),
      todayHighC: this.setExtremeTemps(props.data, 'celsius', 'high'),
      todayLowF: this.setExtremeTemps(props.data, 'fahrenheit', 'low'),
      todayLowC: this.setExtremeTemps(props.data, 'celsius', 'low'),
      todaySummary: this.setWeatherSummary(props.data)
    }
  }

  getObservationInfo(data) {
    return data.current_observation;
  }

  getForecastInfo(data) {
    return data.forecast.txt_forecast.forecastday;
  }

  getSimpleForecast(data) {
    return data.forecast.simpleforecast.forecastday;
  }

  setCurrLocation(data) {
    const locationInfo = this.getObservationInfo(data).display_location;
    const locationFull = locationInfo.full;

    return locationFull;
  }

  setCurrCondition(data) {
    const currCondition = this.getObservationInfo(data).weather;

    return currCondition;
  }

  setToday(data) {
    const today = this.getObservationInfo(data).observation_time;

    return today;
  }

  setIcon(data) {
    const weatherIcon = this.getObservationInfo(data).icon

    return weatherIcon;
  }

  setTemps(data, degreeType) {
    const temp = this.getObservationInfo(data)[degreeType];

    return temp;
  }

  setExtremeTemps(data, degreeType, hiLow) {
    const simpleForecast = this.getSimpleForecast(data);
    const forecastTemps = simpleForecast.map(forecastDay => {
        let temp = forecastDay[hiLow];
        return temp;
      })

    return forecastTemps[0][degreeType];
  }

  setWeatherSummary(data) {
    const forecastInfo = this.getForecastInfo(data);
    const summaries = forecastInfo.map((forecastDay) => {
      let summary = forecastDay.fcttext;
      return summary;
    })

    return summaries[0];
  }

  render() {
    const imgPath = require(`./assets/images/${this.state.weatherIcon}.svg`)

    return (
      <section className="current-weather">
        <h1 className="current-city-title" aria-label="Current city">Current Conditions in {this.state.currentLocation}</h1>
        <p className="last-updated" aria-label="Today">{this.state.today}</p>
        <p className="current-temp-display" aria-label="Current temperature in fahrenheit and celsius"><span className="fahr-display">{this.state.currentTempF}&deg;</span> F / {this.state.currentTempC}&deg; C</p>
        <div className="display-wrapper">
          <article className="icon-container">
            <h2 className="current-condition" aria-label="Current weather condition">{this.state.currentCondition}</h2>
            <img className="weather-icon" src={imgPath} alt="weather icon" />
          </article>
          <article className="hi-lo-display">
            <p className="daily-hi-lo" aria-label="Daily high temperature">High: {this.state.todayHighF}&deg; F /<span> {this.state.todayHighC}&deg; C</span></p>
            <p className="daily-hi-lo" aria-label="Daily low temperature">Low: {this.state.todayLowF}&deg; F /<span> {this.state.todayLowC}&deg; C</span></p>
          </article>
        </div>
        <p className="summary-display" aria-label="Summary of current weather">{this.state.todaySummary}</p>
      </section>
    )
  }
}