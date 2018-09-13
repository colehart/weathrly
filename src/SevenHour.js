import React from 'react';

import './assets/SevenHour.css'
import WeatherCard from './WeatherCard';

export default function SevenHour(props) {
  const hours = [props.hour1, props.hour2, props.hour3, props.hour4, props.hour5, props.hour6, props.hour7]

  return (
    <section className="seven-hour">
      <h1 className="seven-hour-title" aria-label="Seven Hour Forecast title">Seven Hour Forecast</h1>
      <div className="seven-hour-container" aria-label="Seven Hour Weather Card">
        {
          hours.slice(0,7).map((hour, index) => {
            return <WeatherCard
                      hour={ hour.FCTTIME.civil }
                      weatherIcon={ hour.icon }
                      projectedHrTempF={ hour.temp.english }
                      projectedHrTempC={ hour.temp.metric }
                      key={ index }
                    />
          })
        }
      </div>
    </section>
  )
}