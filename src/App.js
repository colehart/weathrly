import React, { Component } from 'react';
import './App.css';

import data from './MockData';
import CurrWeather from './CurrWeather';

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
      </div>
    );
  }
}

export default App;
