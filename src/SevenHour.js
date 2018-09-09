import React, { Component } from 'react';

import WeatherCard from './WeatherCard';


export default class SevenHour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hour: this.setHour(props.data),
      weatherIcon: this.setWeatherIcon(props.data),
      projectedHrTemp: this.setProjectedHrTemp(props.data),
    }
  }

  getWeatherString(data) {
    return
  }

  setWeatherIcon(data) {
    const weatherString = this.getWeatherString(data)
  }

  setHour(data) {

  }

  setProjectedHrTemp(data) {

  }

  render() {
    return (
      <section className="seven-hour-container">
        <h1>Seven Hour Forecast</h1>
        <WeatherCard
          hour={this.state.hour}
          weatherIcon={this.state.weatherIcon}
          projectedHrTemp={this.state.projectedHrTemp}
        />
        <WeatherCard
          hour={this.state.hour}
          weatherIcon={this.state.weatherIcon}
          projectedHrTemp={this.state.projectedHrTemp}
        />
        <WeatherCard
          hour={this.state.hour}
          weatherIcon={this.state.weatherIcon}
          projectedHrTemp={this.state.projectedHrTemp}
        />
        <WeatherCard
          hour={this.state.hour}
          weatherIcon={this.state.weatherIcon}
          projectedHrTemp={this.state.projectedHrTemp}
        />
        <WeatherCard
          hour={this.state.hour}
          weatherIcon={this.state.weatherIcon}
          projectedHrTemp={this.state.projectedHrTemp}
        />
        <WeatherCard
          hour={this.state.hour}
          weatherIcon={this.state.weatherIcon}
          projectedHrTemp={this.state.projectedHrTemp}
        />
        <WeatherCard
          hour={this.state.hour}
          weatherIcon={this.state.weatherIcon}
          projectedHrTemp={this.state.projectedHrTemp}
        />
      </section>
    )
  }
}