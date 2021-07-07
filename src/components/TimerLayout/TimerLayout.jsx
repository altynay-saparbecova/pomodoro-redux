import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './TimerLayout.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// import StartStop from '../StartStop/StartStop';
import { useDispatch } from 'react-redux';
import { decrease_time, reset_time } from '../../store/action/action';

function TimerLayout(props) {

  const dispatch = useDispatch()

  const sessionLength = useSelector(state => state.sessionLength);
  const minuteSecond = useSelector(state => state.minuteSecond);
  const timerRunning = useSelector(state => state.timerRunning);
  let minutes = Math.floor(minuteSecond / 60);
  let seconds = minuteSecond - minutes * 60;

  const interval = useSelector(state => state.interval)

  const radius = 150;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 4;
  console.log(normalizedRadius);
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (minuteSecond / 60) * circumference;
  console.log(strokeDashoffset);

  return (
    <>
      <div className="TimeDisplay">
        <svg width="100%" viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
          <circle
            stroke="#ddd"
            fill="#fff"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#D9534F"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            // style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div class="mainNumber">
          {minutes < 10 ? ("0" + minutes).slice(-2) : minutes} : {seconds < 10 ? ("0" + seconds).slice(-2) : seconds}
          <p>Pomodoro Technique</p>
          <p>{interval}</p>
        </div>

      </div>
    </>
  )
}

export default TimerLayout
