import React, { Component } from 'react';
import WeatherCard from './DCWeatherCard';

export default class TenDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      props: props || {}
    }
  }

  render() {
    <section className="TenDay">
      <WeatherCard props={props}/>
    </section>
  }
}