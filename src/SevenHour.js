import React, { Component } from 'react';

import WeatherCard from './WeatherCard';


export default class SevenHour extends Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      data: props.data || {}
    }
  }

  render() {
    return (
      <section className="seven-hour-container">
        <h1>Seven Hour Forecast</h1>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
      </section>
    )
  }
}