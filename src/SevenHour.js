import React, { Component } from 'react';

import './SevenHour.css'
import WeatherCard from './WeatherCard';

export default class SevenHour extends Component {
  constructor(props) {
    super();

    this.state = {
      data: props.data || []
    }
  }

  setWeatherIcon(data) {
    return data.icon;
  }

  setHour(data) {
    return data.FCTTIME.civil;
  }

  setProjectedHrTemp(data, degreeType) {
    return data.temp[degreeType];
  }

  render() {
    return (
      <section className="seven-hour">
        <h1 className="seven-hour-title" aria-label="Seven Hour Forecast title">Seven Hour Forecast</h1>
        <div className="seven-hour-container" aria-label="Seven Hour Weather Card">
          {
            this.state.data.map((hour, index) => {
              return <WeatherCard
                        hour={this.setHour(hour)}
                        weatherIcon={this.setWeatherIcon(hour)}
                        projectedHrTempF={this.setProjectedHrTemp(hour, 'english')}
                        projectedHrTempC={this.setProjectedHrTemp(hour, 'metric')}
                        key={index}
                      />
            })
          }
        </div>
      </section>
    )
  }
}