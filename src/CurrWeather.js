import React, { Component } from 'react';

export default class CurrWeather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentLocation: this.setCurrLocation(props.data),
      currentCondition: this.setCurrCondition(props.data),
      today: this.setToday(props.data),
      icon: this.setIcon(props.data),
      currentTempF: this.setTemps(props.data, 'temp_f'),
      currentTempC: this.setTemps(props.data, 'temp_c'),
      feelsLike: this.setFeelsLike(props.data)
    }
  }

  getObservationInfo(data) {
    return data.current_observation;
  }

  getForecastInfo(data) {
    return data.forecast.txt_forecast.forecastday
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
    const today = this.getForecastInfo(data)[0].title;

    return today;
  }

  setIcon(data) {
    const weatherIcon = this.getObservationInfo(data).icon

    return weatherIcon;
  }

  setTemps(data, degreeType) {
    const temp = this.getObservationInfo(data).degreeType;

    return temp;
  }

  setExtremeTemps(data, degreeType, hiLow) {
    const simpleForecast = this.getSimpleForecast(data);
    const forecastTemps = simpleForecast.map(forecastDay => {
        let temp = forecastDay.hiLow;
        return temp;
      })

    return forecastTemps[0];
  }

  setFeelsLike(data) {
    const feelsLike = this.getObservationInfo(data).feelslike_string;

    return feelsLike;
  }

    // // drilling down for highs and lows
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


    // const forecastInfo = this.getForecastInfo(data);
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
        <p>{this.state.icon}</p>
        <p>{this.state.currentTempF}</p>
        <p>{this.state.currentTempC}</p>
        <p>{this.state.feelsLike}</p>
      // current condition
      // current day
      // current temp
      // expected high and low
      // weather summary
      </div>
    )
  }
}