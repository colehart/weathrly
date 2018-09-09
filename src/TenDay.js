import React, { Component } from 'react';

import WeatherCard from './WeatherCard';

export default class TenDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data || {}
    }
  }

  getForecastInfo(data) {
    return data.forecast.txt_forecast.forecastday;
    //returns an array
  }

  setWeekday(data) {

  }

  setWeeknight(data) {

  }

  setWeatherIcon(data) {
    // const weatherString = this.getWeatherString(data)
  }

  setProjectedHigh(data) {

  }

  setProjectedLow(data) {

  }

  render() {
    return (
      <section className="ten-day">
        <h1>Ten Day Forecast</h1>
        <dive className="ten-day-container">
        {
          this.state.data.map((day, index) => {
            return <WeatherCard
                weekday={this.setWeekday(day)}
                weeknight={this.setWeeknight(day)}
                icon={this.setWeatherIcon(day)}
                projectedHigh={this.setProjectedHigh(day)}
                projectedLow={this.setProjectedLow(day)}
                key={index}
        }
        />
        </div>
      </section>
    )
  }
}