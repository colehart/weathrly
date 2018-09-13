import React, { Component } from 'react';

import './Search.css'

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }
  }

  submitLocation(e) {
    const { location } = this.state;
    const zipRegEx = new RegExp('^[0-9]{5}$');
    const cityStRegEx = new RegExp('^(?<city>[A-z]+(?: [A-z]+)*), (?<state>A[LKSZRAP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADL N]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$')

    if (!zipRegEx.test(location) && !cityStRegEx.test(location)) {
      alert('Please enter your location in either of the following formats:\n five-digit zip code (ex: 80203) or City, Two-Letter State Abbreviation (ex: Denver, CO)')

    } else {
      this.props.addLocation(location)
      this.setState({ location: '' })
    }
  }

  submitOnEnter(e) {
    if (e.keyCode === 13) {
      document.getElementById('location-field').focus()
      this.submitLocation(e)
    }
  }

  render() {
    const { location } = this.state;

    return (
      <div className="search-container">
        <input
          aria-label="Enter your city and state or five-digit zip here"
          id='location-field'
          value={ location }
          placeholder="Denver, CO or 80202"
          onChange={ (e) => this.setState({ location: e.target.value })}
          onKeyDown={ (e) => this.submitOnEnter(e) } />
        <button onClick={ (e) => this.submitLocation(e) }
                disabled={ !location }>
          Update Location
        </button>
      </div>
    )
  }
}