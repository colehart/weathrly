import React, { Component } from 'react';

export default class CurrWeather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentLocation: this.setCurrLocation(props.data),
      currentCondition: this.setCurrCondition(props.data),
      today: this.setToday(props.data)
    }
  }

  getObservationInfo(data) {
    return data.current_observation;
  }

  getForecastInfo(data) {
    return data.forecast.txt_forecast.forecastday
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
    const today = this.getForecastInfo(data)[0].title;

    return today;
  }




    // const weatherIcon = observationInfo.icon
    // const tempF = observationInfo.temp_f;
    // const tempC = observationInfo.temp_c;
    // const feelsLike = observationInfo.feelslike_string;
    // const today = data.forecast.txt_forecast.forecastday[0].title

    // // drilling down for highs and lows
    // const simpleForecast = data.forecast.simpleforecast.forecastday
    // const forecastHighs = simpleForecast.map((date) => {
    //   let highTemp = date.high;
    //   return highTemp;
    // }, '')
    // const forecastLows = simpleForecast.map((date) => {
    //   let lowTemp = date.low;
    //   return lowTemp;
    // })
    // const todayHigh = forecastHighs[0];
    // const todayLow = forecastLows[0];


    // const forecastInfo = data.forecast.txt_forecast.forecastday
    // const forecastSummaries = forecastInfo.map((forecastDay) => {
    //   let summary = forecastDay.fcttext;
    //   return summary
    // })
    // const todaySummary = forecastSummaries[0];



  render() {
    return (
      <div>
        <h1>{this.state.currentLocation}</h1>
        <p>{this.state.currentCondition}</p>
        <p>{this.state.today}</p>
      // current condition
      // current day
      // current temp
      // expected high and low
      // weather summary
      </div>
    )
  }
}