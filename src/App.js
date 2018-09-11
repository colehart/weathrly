import React, { Component } from 'react';
import './App.css';


// import data from './mockData';
import apiKey from './assets/Key';
import Welcome from './Welcome';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
let data;

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: data || {},
      location: ''
    }

    this.addLocation = this.addLocation.bind(this);
  }

  getWeather() {
    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/CO/Denver.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        })
      })
      .catch(error => {
        throw new Error(error);
      })
  };

  componentDidMount() {
    this.getFromLocalStorage();
    this.getWeather();
  }

  getFromLocalStorage() {
    const location = localStorage.getItem('location')

    if (location) {
      this.setState({ location: JSON.parse(location).location })
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

export default App;
