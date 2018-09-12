import React from 'react';

import './SevenHour.css'
import WeatherCard from './WeatherCard';

export default function SevenHour(props) {
  return (
    <section className="seven-hour">
      <h1 className="seven-hour-title" aria-label="Seven Hour Forecast title">Seven Hour Forecast</h1>
      <div className="seven-hour-container" aria-label="Seven Hour Weather Card">
        {
          props.data.map((hour, index) => {
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