import React, { Component } from 'react';
import './App.css';

import newData from './mockData';
import apiKey from './assets/Key';
import Welcome from './Welcome';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
// let newData;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: newData || {},
      location: ''
    }

    this.getWeather = this.getWeather.bind(this);
    this.addLocation = this.addLocation.bind(this);
  }

  formatFetch() {
    const fetchLocation = this.state.location;

    if (typeof fetchLocation === "number") {
      return `http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${fetchLocation}.json`
    } else {
      const splitLocation = fetchLocation.split(', ')

      return `http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${splitLocation[1]}/${splitLocation[0]}.json`
    }
  }

  getWeather() {
    const fetchPath = this.formatFetch();

    fetch(`${fetchPath}`)
      .then(response => response.json())
      .then(newData => {
        this.setState({
          data: newData
        })
      })
      .catch(error => {
        throw new Error(error);
      })
  };

  componentDidMount() {
    this.getFromLocalStorage();
    // this.getWeather();
  }

  getFromLocalStorage() {
    const location = localStorage.getItem('location')

    if (location) {
      this.setState({ location: JSON.parse(location) })
    }
  }

  addLocation(newLocation) {
    this.setState({ location: newLocation }, this.updateLocalStorage)
  }

  updateLocalStorage() {
    localStorage.setItem('location', JSON.stringify(this.state.location))
  }

  setCurrentWeatherData() {
    const currWeather = { current_observation: this.state.data.current_observation,
                          forecast: this.state.data.forecast};
    return currWeather;
  }

  setHourlyData() {
    return this.state.data.hourly_forecast.slice(0, 7);
  }

  setForecastData() {
    return this.state.data.forecast.simpleforecast.forecastday;
  }

  render() {
    const { location } = this.state;

    if (location) {
      return (
        <div className="App">
          <Header location={ location } addLocation={this.addLocation}/>
          <CurrentWeather data={this.setCurrentWeatherData()} />
          <SevenHour data={this.setHourlyData()} />
          <TenDay data={this.setForecastData()} />
        </div>
      )
    } else {
      return (
        <div className="Welcome">
          <Welcome location={ location } addLocation={this.addLocation}/>
        </div>
      )
    }
  }
}