import React from 'react';

import './TenDay.css';
import WeatherCard from './WeatherCard';

export default function TenDay(props) {
  return (
    <section className="ten-day">
      <h1 className="ten-day-title" aria-label="Ten Day Forecast title">Ten Day Forecast</h1>
      <div className="ten-day-container" aria-label="Ten Day Weather Card">
        {
          props.data.map((day, index) => {
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