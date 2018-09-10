import React, { Component } from 'react';

import WeatherCard from './WeatherCard';

export default class TenDay extends Component {
  constructor(props) {
    super();

    this.state = {
      data: props.data || []
    }
  }

  setWeekday(data) {
    return data.date.weekday;
  }

  setWeatherIcon(data) {
    return data.icon;
  }

  setProjectedTemp(day, degreeType, hiLow) {
    return day[hiLow][degreeType];
  }

  render() {
    return (
      <section className="ten-day">
        <h1>Ten Day Forecast</h1>
        <div className="ten-day-container">
          {
            this.state.data.map((day, index) => {
              return <WeatherCard
                  weekday={this.setWeekday(day)}
                  weatherIcon={this.setWeatherIcon(day)}
                  highTempF={this.setProjectedTemp(day, 'fahrenheit', 'high')}
                  lowTempF={this.setProjectedTemp(day, 'fahrenheit', 'low')}
                  highTempC={this.setProjectedTemp(day, 'celsius', 'high')}
                  lowTempC={this.setProjectedTemp(day, 'celsius', 'low')}
                  key={index}
              />
          })
        }
        </div>
      </section>
    )
  }
}