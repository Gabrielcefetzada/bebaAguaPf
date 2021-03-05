import { createContext } from 'react'
import {useState} from 'react'
import curiosities from '../curiosities.json'

export const DrinkWaterContext = createContext({})

export const DrinkWaterProvider = ({children}) => {

    const [drunkWaterCup, setDrunkWaterCup] = useState(0)
    const [activeCuriosity, setActiveCuriosity] = useState(null)


    const startCuriosity = () => {
        const randomCuriosityIndex = Math.floor(Math.random() * curiosities.length)
        const currentCuriosity = curiosities[randomCuriosityIndex]
        setActiveCuriosity(currentCuriosity)
        setDrunkWaterCup(drunkWaterCup + 1)
    }

    return (
        <DrinkWaterContext.Provider value={{
            startCuriosity,
            drunkWaterCup,
            activeCuriosity,
        }}>
            {children}
        </DrinkWaterContext.Provider>
    )
}