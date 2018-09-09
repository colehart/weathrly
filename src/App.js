import React, { Component } from 'react';
import './App.css';

import data from './mockData';
import CurrWeather from './CurrWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: data || {}
    }
  }

  getWeather = () => {
    this.setState({});
  };


  render() {
    return (
      <div className="App">
      {/* Add Header Component */}
        <header className="App-header">
          <h1 className="App-title">Welcome to Weathrly</h1>
        </header>
        <CurrWeather data={this.state.data} />
        <SevenHour data={this.state.data} />
        <TenDay data={this.state.data} />
      </div>
    );
  }
}

export default App;
