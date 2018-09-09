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

  setHourlyData() {
    return this.state.data.hourly_forecast.slice(0, 7);
  }


  render() {
    return (
      <div className="App">
      {/* Add Header Component */}
        <header className="App-header">
          <h1 className="App-title">Welcome to Weathrly</h1>
        </header>
        <CurrentWeather data={this.state.data} />
        <SevenHour data={this.setHourlyData()} />
        <TenDay data={this.state.data} />
      </div>
    );
  }
}

export default App;
