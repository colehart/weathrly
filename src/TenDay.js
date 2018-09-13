import React from 'react';

import './assets/TenDay.css';
import WeatherCard from './WeatherCard';

export default function TenDay(props) {
  const days = props.days;

  return (
    <section className="ten-day">
      <h1 className="ten-day-title">Ten Day Forecast</h1>
      <div className="ten-day-container">
        {
          days.map((day, index) => {
            return <WeatherCard
                weekday={ `${day.date.weekday}, ${day.date.monthname} ${day.date.day}` }
                weatherIcon={ day.icon }
                highTempF={ day.high.fahrenheit }
                lowTempF={ day.low.fahrenheit }
                highTempC={ day.high.celsius }
                lowTempC={ day.low.celsius }
                key={ index }
            />
        })
      }
      </div>
    </section>
  )
}