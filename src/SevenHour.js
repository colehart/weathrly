import React, { Component } from 'react';

import WeatherCard from './WeatherCard';


export default class SevenHour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data || {}
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
      <section className="seven-hour">
        <h1>Seven Hour Forecast</h1>
        <div className="seven-hour-container"
        {
          this.state.data.map((hour, index) => {
            return <WeatherCard
                      hour={this.setHour(hour)}
                      weatherIcon={this.setWeatherIcon(hour)}
                      projectedHrTemp={this.setProjectedHrTemp(hour)}
                      key={index}
                    />
          })
        }
        </div>
      </section>
    )
  }
}