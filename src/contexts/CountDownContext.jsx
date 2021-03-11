import { createContext } from 'react';
import { DrinkWaterContext } from '../contexts/DrinkWaterContext'
import { useState, useEffect, useContext } from 'react'

export const CountDownContext = createContext({})

export const CountDownProvider = ({ children }) => {

    const { startCuriosity } = useContext(DrinkWaterContext)

    const [isActive, setIsActive] = useState(false)
    const [isDisplayCuriosity, setIsDisplayCuriosity] = useState(false)
    const [time, setTime] = useState(3600)
    const hour = Math.floor(time / 3600)
    const minutes = Math.floor(time % 3600 / 60)
    const seconds = time % 60;

    const startCountDown = () => {
        setIsActive(true)
    }

    useEffect(() => {
        if (time > 0 && isActive) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (time === 0) {
            startCuriosity()
            setIsDisplayCuriosity(true)

            new Audio('/audios/notificationDrinkWaterNow.wav').play()

            if (Notification.permission === 'granted') {
                new Notification('Beba água, seu biruta 💦💦💦', {
                    body: 'Se estiver afim, veja aqui na plataforma um malefício que a falta de água pode causar.'
                })
            }
            setTime(3600)

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
            {children}
        </CountDownContext.Provider>
    )
}