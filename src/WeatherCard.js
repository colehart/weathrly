import React, { Component } from 'react';

export default class WeatherCard extends Component {
  constructor(props) {
    super(props);

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
    if (this.state.hour) {
      console.log(this.state)
      return (
        <section className="WeatherCard">
          <h2>{this.state.hour}</h2>
          <img href="{this.state.weatherIcon}.svg" alt="weather icon"/>
          <h2>{this.state.projectedHrTempF}&deg; F / {this.state.projectedHrTempC}&deg; C</h2>
        </section>
      )
    } else {
      return (
        <section className="WeatherCard">
          <h2>{this.state.weekday}</h2>
          <img href="{this.state.weatherIcon}.svg" alt="weather icon"/>
          <h1><span className="weatherHiLo">High:</span> {this.state.projectedHigh}</h1>
          <h2>{this.state.weeknight}</h2>
          <img href="{this.state.weatherIcon}.svg" alt="weather icon"/>
          <h1><span className="weatherHiLo">Low:</span> {this.state.projectedLow}</h1>
        </section>
      )
    }
  }
}