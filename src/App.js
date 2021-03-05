import React from 'react';

import './App.css';
import '../src/styles/CountDown.css'
import '../src/styles/DrinkWater.css'

import { CountDownProvider } from '../src/contexts/CountDownContext'
import { DrinkWaterProvider } from '../src/contexts/DrinkWaterContext'
import { CountDown } from '../src/components/CountDown'
import { DrinkWater } from '../src/components/DrinkWater'
import { DrunkWaterCup } from '../src/components/DrunkWaterCup'

function App() {
  return (

    <DrinkWaterProvider>
      <CountDownProvider>
    <div className="App">
     <DrunkWaterCup/>
     <CountDown />
     <DrinkWater/>
    </div>
    </CountDownProvider>
    </DrinkWaterProvider>
  );
}

export default App;
