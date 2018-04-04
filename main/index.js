import React from 'react'
import ReactDOM from 'react-dom'
import SetTimer from '../components/SetTimer'
import CountDown from '../components/CountDown'
import './index.css';
import bell from './bell.wav'

function ringBell(){
  let sound = new Audio(bell)
  sound.play()
}

let interval;
class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isRunning: false,
      timeRemaining: {
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }

    this.startTimer = this.startTimer.bind(this)
    this.clearTimer = this.clearTimer.bind(this)
  }

  startTimer(hours, minutes, seconds){
    this.setState({
      isRunning: true,
      timeRemaining:{
        hours,
        minutes,
        seconds
      }
    }, ()=>{
      let totalSecondsRemaining = this.convertToSeconds(this.state.timeRemaining)
      interval = setInterval(()=>{
        totalSecondsRemaining--
        this.updateTimer(totalSecondsRemaining)
        if(totalSecondsRemaining <= 0){
          ringBell()
          this.clearTimer()
        }
      }, 1000)
      

    })
  }
  updateTimer(seconds){
   const timeRemaining = this.convertToTime(seconds)
    this.setState({
      timeRemaining
    })
  }
  clearTimer(){
    clearInterval(interval)
    this.setState({
      isRunning: false,
    })
  }
  convertToSeconds(time){
    const { hours, minutes, seconds } = time;
    return hours * 60 * 60 + minutes * 60 + seconds;
  }
  convertToTime(seconds){
    return {
      hours: Math.floor(seconds / 3600),
      minutes: Math.floor((seconds % 3600) / 60),
      seconds: Math.floor((seconds % 3600) % 60),
    }
  }
  render() {
    return (
      <div className='container'>
        {
          (this.state.isRunning)?
          <CountDown
            clearTimer={this.clearTimer}
            timeRemaining={this.state.timeRemaining} /> :
          <SetTimer
            startTimer={this.startTimer}/>
        }
      </div>
    )
  }
}

ReactDOM.render(
  <div className='wrapper'>
    <Timer />
  </div>,
  document.getElementById('app')
)