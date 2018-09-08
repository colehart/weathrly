import React, { Component } from 'react';

export default class CurrWeather extends Component {
  constructor(props) {
    super(props);
    
    const observationInfo = data.current_observation;
    const locationInfo = observationInfo.display_location;

    const locationFull = locationInfo.full;
    const locationZip = locationInfo.zip;
    const locationLat = locationInfo.latitude;
    const locationLong = locationInfo.longitude;
    const currCondition = observationInfo.weather;
    const weatherIcon = observationInfo.icon
    const tempF = observationInfo.temp_f;
    const tempC = observationInfo.temp_c;
    const feelsLike = observationInfo.feelslike_string;
    const today = data.forecast.txt_forecast.forecastday[0].title

    // drilling down for highs and lows
    const simpleForecast = data.forecast.simpleforecast.forecastday
    const forecastHighs = simpleForecast.map((date) => {
      let highTemp = date.high;
      return highTemp;
    }, '')
    const forecastLows = simpleForecast.map((date) => {
      let lowTemp = date.low;
      return lowTemp;
    })
    const todayHigh = forecastHighs[0];
    const todayLow = forecastLows[0];


    const forecastInfo = data.forecast.txt_forecast.forecastday
    const forecastSummaries = forecastInfo.map((forecastDay) => {
      let summary = forecastDay.fcttext;
      return summary
    })
    const todaySummary = forecastSummaries[0];
  }

  render() {
    return (
      //name of current city
      //current condition
      //current day
      //current temp
      //expected high and low
      //weather summary
    );
  }
}