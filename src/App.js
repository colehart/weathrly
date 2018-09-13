import React, { Component } from 'react';
import './App.css';

// import newData from './mockData';
import apiKey from './assets/Key';
import Welcome from './Welcome';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
let newData;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: newData || {},
      location: ''
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
            data: newData
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
    this.getWeather()
  }

  render() {
    const { location } = this.state;
    const { data } = this.state;

    if (location && data.response) {
      return (
        <div className="app">
          <Header location={ location } addLocation={ this.addLocation }/>
          <CurrentWeather currentLocation={ this.state.data.current_observation.display_location.full }
            currentCondition={ this.state.data.current_observation.weather }
            today={ this.state.data.current_observation.observation_time }
            weatherIcon={ this.state.data.current_observation.icon }
            currentTempF={ this.state.data.current_observation.temp_f }
            currentTempC={ this.state.data.current_observation.temp_c }
            todayHighF={ this.state.data.forecast.simpleforecast.forecastday[0].high.fahrenheit }
            todayHighC={ this.state.data.forecast.simpleforecast.forecastday[0].high.celsius }
            todayLowF={ this.state.data.forecast.simpleforecast.forecastday[0].low.fahrenheit }
            todayLowC={ this.state.data.forecast.simpleforecast.forecastday[0].low.celsius }
            todaySummary={ this.state.data.forecast.txt_forecast.forecastday[0].fcttext } />
          <SevenHour data={ this.state.data.hourly_forecast.slice(0, 7) } />
          <TenDay data={ this.state.data.forecast.simpleforecast.forecastday } />
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