import React from 'react'
import ReactDOM from 'react-dom'
import SetTimer from '../components/SetTimer'
import CountDown from '../components/CountDown'

class Timer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        Timer App Component
        <SetTimer />
        <CountDown />
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