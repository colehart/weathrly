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
    const imgPath = `./assets/images/${this.state.weatherIcon}.png`

    console.log(imgPath)
    if (this.state.hour) {
      console.log(this.state)
      return (
        <section className="WeatherCard">
          <h2>{this.state.hour}</h2>
          <img src={imgPath} alt="weather icon"/>
          <h2>{this.state.projectedHrTempF}&deg; F / {this.state.projectedHrTempC}&deg; C</h2>
        </section>
      )
    } else {
      return (
        <section className="WeatherCard">
          <h2>{this.state.weekday}</h2>
          <img src={imgPath} alt="weather icon"/>
          <h3><span className="weatherHiLo">High:</span> {this.state.highTempF}&deg; F / {this.state.highTempC}&deg; C</h3>
          <h3><span className="weatherHiLo">Low:</span> {this.state.lowTempF}&deg; F / {this.state.lowTempC}&deg; C</h3>
        </section>
      )
    }
  }
}