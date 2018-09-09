import React, { Component } from 'react';

export default class WeatherCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hour: props.data.hour || '',
      weekday: props.data.weekday || '',
      weeknight: props.data.weeknight || '',
      weatherIcon: props.data.weatherIcon || '',
      projectedHrTemp: props.data.projectHrTemp || '',
      projectedHigh: props.data.projectedHigh || '',
      projectedLow: props.data.projectedLow || ''
    }
  }

  render() {
    if (this.state.hour) {
      return (
        <section className="WeatherCard">
          <h2>{this.state.hour}</h2>
          <img href="{this.state.weatherIcon}.svg"/>
          <h2>{this.state.projectedHrTemp}</h2>
        </section>
      )
    } else {
      return (
        <section className="WeatherCard">
          <h2>{this.state.weekday}</h2>
          <img href="{this.state.weatherIcon}.svg"/>
          <h1>High: {this.state.projectedHigh}</h1>
          <h2>{this.state.weeknight}</h2>
          <img href="{this.state.weatherIcon}.svg"/>
          <h1>Low: {this.state.projectedLow}</h1>
        </section>
      )
  }
}