import React, { Component } from 'react';
import './App.css';

import data from './mockData';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: data || {}
    }
  }

  // getWeather = () => {
  //   this.setState({});
  // };

  componentWillMount() {

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
      {/* Add Header Component */}
        <header className="App-header">
          <h1 className="App-title">Welcome to Weathrly</h1>
        </header>
        <CurrentWeather data={this.setCurrentWeatherData()} />
        <SevenHour data={this.setHourlyData()} />
        <TenDay data={this.setForecastData()} />
      </div>
    );
  }
}

export default App;
