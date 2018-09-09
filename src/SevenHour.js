import React, { Component } from 'react';

export default class SevenHour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hour: this.getHour(props.data);
      // hour: ,
      // icon: ,
      // projectedTemp:
    }
  }

  getHour(data) {

  }

  render() {
    return (
      <div className="seven-hour">
        <h1>Hour: {this.state.hour}</h1>
        <p>icon: {this.state.icon}</p>
        <p>icon: {this.state.icon}</p>
      </div>
    )
  }
}