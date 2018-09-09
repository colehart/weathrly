import React, { Component } from 'react';

import WeatherCard from './WeatherCard';

export default class TenDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weekday: this.setWeekday(props.data),
      weeknight: this.setWeeknight(props.data),
      weatherIcon: this.setWeatherIcon(props.data),
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

  setWeatherIcon(data) {
    const weatherString = this.getWeatherString(data)  
  }


  setWeekday(data) {

  }

  setWeeknight(data) {

  }

  setProjectedHigh(data) {

  }

  setProjectedLow(data) {

  }

  render() {
    return (
      <section className="ten-day-container">
        <h1>Ten Day Forecast</h1>
        <WeatherCard 
          weekday={this.state.weekday}
          weeknight={this.state.weeknight}
          projectedHigh={this.state.projectedHigh}
          projectedLow={this.state.projectedLow}
        />
        <WeatherCard 
          weekday={this.state.weekday}
          weeknight={this.state.weeknight}
          projectedHigh={this.state.projectedHigh}
          projectedLow={this.state.projectedLow}
        />
        <WeatherCard 
          weekday={this.state.weekday}
          weeknight={this.state.weeknight}
          projectedHigh={this.state.projectedHigh}
          projectedLow={this.state.projectedLow}
        />
        <WeatherCard 
          weekday={this.state.weekday}
          weeknight={this.state.weeknight}
          projectedHigh={this.state.projectedHigh}
          projectedLow={this.state.projectedLow}
        />
        <WeatherCard 
          weekday={this.state.weekday}
          weeknight={this.state.weeknight}
          projectedHigh={this.state.projectedHigh}
          projectedLow={this.state.projectedLow}
        />
        <WeatherCard 
          weekday={this.state.weekday}
          weeknight={this.state.weeknight}
          projectedHigh={this.state.projectedHigh}
          projectedLow={this.state.projectedLow}
        />
        <WeatherCard 
          weekday={this.state.weekday}
          weeknight={this.state.weeknight}
          projectedHigh={this.state.projectedHigh}
          projectedLow={this.state.projectedLow}
        />
        <WeatherCard 
          weekday={this.state.weekday}
          weeknight={this.state.weeknight}
          projectedHigh={this.state.projectedHigh}
          projectedLow={this.state.projectedLow}
        />
        <WeatherCard 
          weekday={this.state.weekday}
          weeknight={this.state.weeknight}
          projectedHigh={this.state.projectedHigh}
          projectedLow={this.state.projectedLow}
        />
        <WeatherCard 
          weekday={this.state.weekday}
          weeknight={this.state.weeknight}
          projectedHigh={this.state.projectedHigh}
          projectedLow={this.state.projectedLow}
        />
      </section>
    )
  }
}