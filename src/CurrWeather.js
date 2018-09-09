import React, { Component } from 'react';

export default class CurrWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: this.setCurrLocation(props.data),
      currentCondition: this.setCurrCondition(props.data),
      today: this.setToday(props.data),
      icon: this.setIcon(props.data),
      currentTempF: this.setTemps(props.data, 'temp_f'),
      currentTempC: this.setTemps(props.data, 'temp_c'),
      feelsLike: this.setFeelsLike(props.data),
      todayHighF: this.setExtremeTemps(props.data, 'fahrenheit', 'high'),
      todayHighC: this.setExtremeTemps(props.data, 'celsius', 'high'),
      todayLowF: this.setExtremeTemps(props.data, 'fahrenheit', 'low'),
      todayLowC: this.setExtremeTemps(props.data, 'celsius', 'low'),
      todaySummary: this.setWeatherSummary(props.data)
    }
  }

  getObservationInfo(data) {
    return data.current_observation;
  }

  getForecastInfo(data) {
    return data.forecast.txt_forecast.forecastday;
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
    const temp = this.getObservationInfo(data)[degreeType];

    return temp;
  }

  setExtremeTemps(data, degreeType, hiLow) {
    const simpleForecast = this.getSimpleForecast(data);
    const forecastTemps = simpleForecast.map(forecastDay => {
        let temp = forecastDay[hiLow];
        return temp;
      })

    return forecastTemps[0][degreeType];
  }

  setFeelsLike(data) {
    const feelsLike = this.getObservationInfo(data).feelslike_string;

    return feelsLike;
  }

  setWeatherSummary(data) {
    const forecastInfo = this.getForecastInfo(data);
    const summaries = forecastInfo.map((forecastDay) => {
      let summary = forecastDay.fcttext;
      return summary;
    })

    return summaries[0];
  }

  render() {
    return (
      <section className="CurrWeather">
        <h1>Current Location: {this.state.currentLocation}</h1>
        <p>Current condition: {this.state.currentCondition}</p>
        <p>{this.state.today}</p>
        <p>icon: {this.state.icon}</p>
        <p>{this.state.currentTempF}&deg; F /<span> {this.state.currentTempC}&deg; C</span></p>
        <p>Feels Like: {this.state.feelsLike}</p>
        <p>Todays High: {this.state.todayHighF}&deg; F /<span> {this.state.todayHighC}&deg; C</span></p>
        <p>Todays Low: {this.state.todayLowF}&deg; F /<span> {this.state.todayLowC}&deg; C</span></p>
        <p>Weather Summary: {this.state.todaySummary}</p>
      </section>
    )
  }
}