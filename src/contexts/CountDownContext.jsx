import { createContext } from 'react';
import { DrinkWaterContext } from '../contexts/DrinkWaterContext'
import { useState, useEffect, useContext } from 'react'

export const CountDownContext = createContext({})

export const CountDownProvider = ({ children }) => {

    const { startCuriosity } = useContext(DrinkWaterContext)

    const [isActive, setIsActive] = useState(false)
    const [isDisplayCuriosity, setIsDisplayCuriosity] = useState(false)
    const [time, setTime] = useState(0.1 * 60)
    const hour = Math.floor(time / 3600)
    const minutes = Math.floor(time % 3600 / 60)
    const seconds = time % 60;

    const startCountDown = () => {
        setIsActive(true)
    }

    useEffect(() => {
        if (time > 0 && isActive) {
            const timer = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (time === 0) {
            startCuriosity()
            setIsDisplayCuriosity(true)
            setTime(5)

        }
    }, [time, isActive])

    return (
        <CountDownContext.Provider value={{
            isActive,
            time,
            hour,
            minutes,
            seconds,
            isDisplayCuriosity,
            startCountDown,
        }}>
            { children}
        </CountDownContext.Provider>
    )
}