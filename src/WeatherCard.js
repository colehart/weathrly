import React, { Component } from 'react';

export default class WeatherCard extends Component {
  constructor(props) {
    super();

    this.state = {
      hour: props.hour || '',
      weekday: props.weekday || [],
      weatherIcon: props.weatherIcon || '',
      projectedHrTempF: props.projectedHrTempF || '',
      projectedHrTempC: props.projectedHrTempC || '',
      highTempF: props.highTempF || '',
      highTempC: props.highTempC || '',
      lowTempF: props.lowTempF || '',
      lowTempC: props.lowTempC || ''
    }
  }

  render() {
    const imgPath = require(`./assets/images/${this.state.weatherIcon}.svg`)

    if (this.state.hour) {
      return (
        <section className="weather-card">
          <h2 aria-label="Upcoming hour of forecast">{this.state.hour}</h2>
          <img className="weather-icon" src={imgPath} alt="weather icon" />
          <h2 aria-label="Projected hourly temperature">{this.state.projectedHrTempF}&deg; F / {this.state.projectedHrTempC}&deg; C</h2>
        </section>
      )
    } else {
      return (
        <section className="weather-card">
          <h2 aria-label="Upcoming day of forecast">{this.state.weekday}</h2>
          <img className="weather-icon" src={imgPath} alt="weather icon"/>
          <h3 aria-label="Projected daily high temperature"><span className="card-high-low">High:</span> {this.state.highTempF}&deg; F / {this.state.highTempC}&deg; C</h3>
          <h3 aria-label="Projected daily low temperature"><span className="card-high-low">Low:</span> {this.state.lowTempF}&deg; F / {this.state.lowTempC}&deg; C</h3>
        </section>
      )
    }
  }
}