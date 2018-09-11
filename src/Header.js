import React, { Component } from 'react';

import './Header.css'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location || ''
    }
  }

  submitLocation() {
    const { location } = this.state;
    const locale = { id: Date.now, location };

    this.props.addLocation(locale)
    this.setState({ location: '' })
  }

  submitOnEnter(e) {
    if (e.keyCode === 13) {
      document.getElementById('location-field').focus()
      this.submitLocation()
    }
  }

  render() {
    const { location } = this.state;
    return (
      <header className="App-header" aria-label="Weathrly application header">
        <h1 className="App-title" aria-label="Application title">Welcome to Weathrly</h1>
        <p className="App-intro" aria-label="App description">Please enter your city and state or five-digit zip code to get started.</p>
        <form>
          <input
            aria-label="Enter your city and state or five-digit zip here"
            id='location-field'
            value={ location }
            placeholder="Denver, CO or 80202"
            onChange={ (e) => this.setState({ location: e.target.value })}
            onKeyDown={ (e) => this.submitOnEnter(e) } />
          <button onClick={ () => this.submitLocation() }
                  disabled={ !location }>
            Show My Weather
          </button>
        </form>
      </header>
    )
  }
}