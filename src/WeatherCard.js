import React, { Component } from 'react';

export default class WeatherCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hour: this.setHour(props.data),
      weekday: this.setWeekday(props.data),
      weeknight: this.setWeeknight(props.data),
      weatherIcon: this.setWeatherIcon(props.data),
      projectedHrTemp: this.setProjectedHrTemp(props.data),
      projectedHigh: this.setProjectedHigh(props.data),
      projectedLow: this.setProjectedLow(props.data)
    }
  }

  getForecastInfo(data) {
    return data.forecast.txt_forecast.forecastday;
    //returns an array
  }

  getWeatherString(data) {
    return 
  }

  setHour(data) {

  }

  setWeekday(data) {

  }

  setWeeknight(data) {

  }

  setWeatherIcon(data) {
    const weatherString = this.getWeatherString(data)  
  }

  setProjectedHrTemp(data) {

  }

  setProjectedHigh(data) {

  }

  setProjectedLow(data) {

  }

  render() {
    return (
      <section className="WeatherCard">
        <h2>{this.state.weekday}</h2>
        <img href="{this.state.weatherIcon}"/>
        <p>hi</p>
        <h1>{this.state.projectedHigh}</h1>
        <h2>{this.state.weeknight}</h2>
        <img href="{this.state.weatherIcon}"/>
        <p>lo</p>
        <h1>{this.state.projectedLow}</h1>
      </section>
    )
  }
}