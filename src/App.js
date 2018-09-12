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

    this.getWeather = this.getWeather.bind(this);
    this.addLocation = this.addLocation.bind(this);
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
  };

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage() {
    const storedLocation = JSON.parse(localStorage.getItem('location'))

    if (storedLocation) {
      this.setState({ location: storedLocation }, this.getWeather)
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
    // handleChange to render new location weather data
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
    const { data } = this.state;
    // handleChange in location

    if (location && data.response) {
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