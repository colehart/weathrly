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


    return (
      <div className="App">
      {/* Add Header Component */}
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to Weathrly</h1>
        </header>
        <CurrWeather data={this.state.data}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
