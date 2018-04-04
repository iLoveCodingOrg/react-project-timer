import React from 'react'

export default class SetTimer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
    this.updateHours = this.updateHours.bind(this)
    this.updateMinutes = this.updateMinutes.bind(this)
    this.updateSeconds = this.updateSeconds.bind(this)
  }
  updateHours(e){
    this.setState({
      hours: parseInt(e.target.value)
    })
  }
  updateMinutes(e){
    this.setState({
      minutes: parseInt(e.target.value)
    })
  }
  updateSeconds(e){
    this.setState({
      seconds: parseInt(e.target.value)
    })
  }
  render() {
    return (
      <div>
        <h2>Set Your Timer</h2>
        <div className="digit">
          <label htmlFor="hours">Hours</label><br/>
          <input 
            onChange={this.updateHours}
            placeholder="0"
            type="number"
            name="hours" />
        </div>

        <div className="digit">
          <label htmlFor="minutes">Minutes</label><br/>
          <input 
            onChange={this.updateMinutes}
            placeholder="0"
            type="number"
            name="minutes" />
        </div>

        <div className="digit">
          <label htmlFor="seconds">Seconds</label><br/>
          <input 
            onChange={this.updateSeconds}
            placeholder="0"
            type="number"
            name="seconds" />
        </div>

        <div>
          <button
            onClick={()=>{
              this.props.startTimer(
                this.state.hours,
                this.state.minutes,
                this.state.seconds)}
            }
          >
            Start Timer
          </button>
        </div>

      </div>
    )
  }
}