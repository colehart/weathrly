import React, { Component } from 'react';
import './assets/App.css';

import newData from './mockData';
import apiKey from './assets/Key';
import Welcome from './Welcome';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      hourlyForecast: [],
      tenDay: [],
      currentObservation: {}
    }

    this.addLocation = this.addLocation.bind(this);
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage() {
    const storedLocation = JSON.parse(localStorage.getItem('location'))

    if (storedLocation) {
      this.setState({ location: storedLocation }, this.getWeather)
    }
  }

  getWeather() {
    if (this.state.location) {
      const fetchPath = this.formatFetch();

      fetch(`${fetchPath}`)
        .then(response => response.json())
        .then(newData => {
          this.setState({
            hourlyForecast: newData.hourly_forecast,
            tenDay: newData.forecast.simpleforecast.forecastday,
            currentObservation: newData.current_observation,
            forecastInfo: newData.forecast
          })
        })
        .catch(error => {
          debugger;
          // need to catch and alert user
          throw new Error(error);
        })
    }
  }

  formatFetch() {
    const fetchLocation = this.state.location;

    if (parseInt(fetchLocation, 10)) {
      return `http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${fetchLocation}.json`
    } else {
      const splitLocation = fetchLocation.split(', ')

      return `http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${splitLocation[1]}/${splitLocation[0]}.json`
    }
  }

  addLocation(newLocation) {
    if (newLocation !== this.state.location) {
      this.setState({ location: newLocation }, this.updateLocalStorage)
    }
  }

  updateLocalStorage() {
    localStorage.setItem('location', JSON.stringify(this.state.location))
  }

  render() {
    const { location } = this.state;
    const { hourlyForecast } = this.state;
    const { tenDay } = this.state;
    const { currentObservation } = this.state;

    if (location.length && hourlyForecast.length && tenDay.length && Object.keys(currentObservation).length) {
      return (
        <div className="app">
          <Header location={ location } addLocation={ this.addLocation }/>
          <CurrentWeather currentLocation={ this.state.currentObservation.display_location.full }
            currentCondition={ this.state.currentObservation.weather }
            today={ this.state.currentObservation.observation_time }
            weatherIcon={ this.state.currentObservation.icon }
            currentTempF={ this.state.currentObservation.temp_f }
            currentTempC={ this.state.currentObservation.temp_c }
            todayHighF={ this.state.forecastInfo.simpleforecast.forecastday[0].high.fahrenheit }
            todayHighC={ this.state.forecastInfo.simpleforecast.forecastday[0].high.celsius }
            todayLowF={ this.state.forecastInfo.simpleforecast.forecastday[0].low.fahrenheit }
            todayLowC={ this.state.forecastInfo.simpleforecast.forecastday[0].low.celsius }
            todaySummary={ this.state.forecastInfo.txt_forecast.forecastday[0].fcttext } />
          {/* <SevenHour data={ this.state.hourlyForecast } />
          <TenDay data={ this.state.tenDay } /> */}
          <SevenHour hour1={ this.state.hourlyForecast[0] }
                    hour2={ this.state.hourlyForecast[1] }
                    hour3={ this.state.hourlyForecast[2] }
                    hour4={ this.state.hourlyForecast[3] }
                    hour5={ this.state.hourlyForecast[4] }
                    hour6={ this.state.hourlyForecast[5] }
                    hour7={ this.state.hourlyForecast[6] }
          />
          <TenDay data={ this.state.tenDay } />
        </div>
      )
    } else {
      return (
        <div className="welcome">
          <Welcome location={ location } addLocation={ this.addLocation }/>
        </div>
      )
    }
  }
}