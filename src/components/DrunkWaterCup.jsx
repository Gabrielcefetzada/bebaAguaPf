import React, {useContext} from 'react';
import { DrinkWaterContext } from "../contexts/DrinkWaterContext"

export const DrunkWaterCup = () => {

    const { drunkWaterCup } = useContext(DrinkWaterContext)

    return (

        <div>
           <div class="drunkWater">
          <span>Copos bebidos</span>
          <span>{drunkWaterCup}</span>
      </div>
        </div>
    )
}