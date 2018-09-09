import React, { Component } from 'react';

export default class WeatherCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weekday: ,
      weeknight: ,
      weatherIcon: ,
      projectedHigh: ,
      projectedLow: 
    }
  }

  getWeekday() {

  }

  getWeeknight() {

  }

  setWeatherIcon() {

  }

  setProjectedHigh() {

  }

  setProjectedLow() {

  }

  render() {
    return (
      <section className="WeatherCard">
        <h2>{this.state.weekday}</h2>
        <img href="{}"/>
        <p>hi</p>
        <h1>{this.state.projectedHigh}</h1>
        <h2>{this.state.weeknight}</h2>
        <img href="{}"/>
        <p>lo</p>
        <h1>{this.state.projectedLow}</h1>
      </section>
    )
  }
}