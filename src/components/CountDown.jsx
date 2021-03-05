import React, { useEffect, useState, useContext } from 'react'
import { CountDownContext } from '../contexts/CountDownContext'

export const CountDown = () => {

const { isActive,
    time,
    hour,
    minutes,
    seconds,
    startCountDown, } = useContext(CountDownContext)

const hourDisplay = String(hour).padStart(1, 0).split('')
const [minuteLeft, minuteRight] = String(minutes).padStart(2, 0).split('')
const [secondLeft, secondRight] = String(seconds).padStart(2, 0).split('')

return (
    <div className="box">

    <div className="containerDivide">
      <div className="justDivide"></div>
    </div>

      <div className="containerCountDown">
          <span>{hourDisplay}</span>
          <span>:</span>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
          <span>:</span>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
      </div>

    <div className="containerBtn">
        {!isActive ? (
            <button onClick={() => startCountDown()}>
          Começar jornada da hidratação!
      </button>
        ) : (
            <button >
          Começou! Beba água!
      </button>
        )}
    </div>
    </div>
)
}
