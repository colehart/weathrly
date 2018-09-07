import React, { Component } from 'react';
import './App.css';

import data from './Mock-data';
import CurrWeather from './CurrWeather';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: data || {}
    }
  }


  render() {
    const observationInfo = this.state.data.current_observation;
    const locationInfo = observationInfo.display_location;
    const locationCity = locationInfo.city;
    const locationState = locationInfo.state;
    const locationZip = locationInfo.zip;

    const forecastInfo = data.forecast.txt_forecast.forecastday
    const currentDay = forecastInfo[0].title

    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to Weathrly</h1>
        </header>
        <CurrWeather cityName={this.state.data}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
