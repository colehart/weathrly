import React from 'react';

import Search from './Search'
import './Welcome.css'

export default function Welcome(props) {
  const { location } = props;

  return (
    <div className="welcome-container">
      <h1 className="welcome-title" aria-label="Application title">Weathrly</h1>
      <p className="welcome-intro" aria-label="App description">Please enter your city and state or five-digit zip code to get started.</p>
      <section className="welcome-form">
        <Search location={ location } addLocation={props.addLocation} />
      </section>
    </div>
  )
}