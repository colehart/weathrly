import React from 'react';

import Search from './Search'
import './Header.css'

export default function Header(props) {
  const { location } = props;

  return (
    <header className="app-header" aria-label="Weathrly application header">
      <h1 className="app-title" aria-label="Application title">Weathrly</h1>
      <p className="app-intro" aria-label="App description">Please enter a new city and state or five-digit zip code to change your location.</p>
      <section className="header-form">
        <Search location={ location } addLocation={props.addLocation} />
      </section>
    </header>
  )
}