import React from 'react'

export default class CountDown extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>Time Remaining:</h2>
        <div className="digit">
          <label htmlFor="hours">Hours</label><br/>
          <input
            readOnly
            value={this.props.timeRemaining.hours}
            name="hours"
            type="number"/>
        </div>
        <div className="digit">
          <label htmlFor="minutes">Minutes</label><br/>
          <input
            readOnly
            value={this.props.timeRemaining.minutes}
            name="minutes"
            type="number"/>
        </div>
        <div className="digit">
          <label htmlFor="seconds">Seconds</label><br/>
          <input
            readOnly
            value={this.props.timeRemaining.seconds}
            name="seconds"
            type="number"/>
        </div>
        <div>
          <button
            onClick={this.props.clearTimer}>
            Clear Timer
          </button>
        </div>
      </div>
    )
  }
}