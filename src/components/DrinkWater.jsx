import React, { useState, useContext } from 'react'
import { DrinkWaterContext } from '../contexts/DrinkWaterContext'
import { CountDownContext } from '../contexts/CountDownContext'

export const DrinkWater = () => {

    const { activeCuriosity, setDrunkWaterCup, drunkWaterCup } = useContext(DrinkWaterContext)
    const { isDisplayCuriosity } = useContext(CountDownContext)

    const [timeDrunkWater, setTimeDrunkWater] = useState([])

    const getTimeDrunk = () => {
        setTimeDrunkWater([...timeDrunkWater,new Date().toLocaleTimeString()])
    }

    return (

        <>
            {isDisplayCuriosity ? (
                <div className="box">
                    <div className="containerDrink">
                        <h1>{activeCuriosity.title}</h1>
                        <span className="activeCuriosity">{activeCuriosity.description}</span>
                        <button onClick={() => { setDrunkWaterCup(drunkWaterCup + 1); getTimeDrunk() }}
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
                        <p>Após a primeira hora de jornada, um botão para registrar os copos bebidos aparecerá na tela</p>
                        <img alt="beba1" src="imgs/beba1.jpg"></img>
                        <strong style={{ fontSize: '1.5rem' }}>
                            A cada hora, te mostrarei um malefício de como não tomar água pode ser prejudicial para você
            </strong>
                    </div>
                </div>
            )}
            <div  className="containerTime">
                <h1>Hora exata de cada copo tomado</h1>
            {
                
                timeDrunkWater.map((el) => (
                    <p key={Math.random()}>{el}</p>
                ))
                
            }
            </div>
        </>

    )
}

export default DrinkWater
