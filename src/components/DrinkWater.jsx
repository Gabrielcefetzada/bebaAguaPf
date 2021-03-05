import React, { useState, useContext } from 'react'
import { DrinkWaterContext } from '../contexts/DrinkWaterContext'
import { CountDownContext } from '../contexts/CountDownContext'

 export const DrinkWater = () => {

    const { activeCuriosity, setDrunkWaterCup, drunkWaterCup } = useContext(DrinkWaterContext)
    const { isDisplayCuriosity } = useContext(CountDownContext)

    return (

        <>
        {isDisplayCuriosity ? (
            <div className="box">
            <div className="containerDrink">
            <h1>{activeCuriosity.title}</h1>
            <span className="activeCuriosity">{activeCuriosity.description}</span>
            <button onClick={() => setDrunkWaterCup(drunkWaterCup + 1)}
            >
                Bebi 100 ml
            </button>
            </div>
        </div>
        ) : (
            <div className="box">
            <div className="containerDrink">
            <h1>Beba água!</h1>
            <p>Inicie o cronômetro para iniciar sua jornada 🚀</p>
            <img src="imgs/beba1.jpg"></img>
            <strong style={{fontSize: '1.5rem'}}>
                A cada copo tomado, te mostrarei um malefício de como não tomar água pode ser prejudicial para você
            </strong>
            </div>
        </div>
        )}
        </>
        
    )
}

export default DrinkWater
