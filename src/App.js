import React, { Component } from 'react';
import './App.css';

import data from './mockData';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: data || {},
      location: ''
    }

    this.addLocation = this.addLocation.bind(this);
  }

  // getWeather = () => {
  //   this.setState({});
  // };

  componentDidMount() {
    this.getFromLocalStorage();
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
    return (
      <div className="App">
        <Header location={ location } addLocation={this.addLocation}/>
        <CurrentWeather data={this.setCurrentWeatherData()} />
        <SevenHour data={this.setHourlyData()} />
        <TenDay data={this.setForecastData()} />
      </div>
    );
  }
}

export default App;
