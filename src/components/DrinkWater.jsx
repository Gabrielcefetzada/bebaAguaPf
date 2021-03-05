import React, { useEffect, useState, useContext } from 'react'
import { DrinkWaterContext } from '../contexts/DrinkWaterContext'

 export const DrinkWater = () => {

    const { startCuriosity } = useContext(DrinkWaterContext)

    const [isDisplayCuriosity, setIsDisplayCuriosity] = useState(false)

    return (

        <>
        {isDisplayCuriosity ? (
            <div className="box">
            <div className="containerDrink">
            <h1>Beba água!</h1>
            <p>Falta de aguá pode reter líquidos e desascelerar seu metabolismo</p>
            <img src="imgs/beba1.jpg"></img>
            <button>
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
            <strong style={{fontSize: '1.5rem'}} onClick={startCuriosity}>
                A cada copo tomado, te mostrarei um malefício de como não tomar água pode ser prejudicial para você
            </strong>
            </div>
        </div>
        )}
        </>
        
    )
}

export default DrinkWater
