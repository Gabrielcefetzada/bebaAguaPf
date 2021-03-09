import React from 'react';

import './App.css';
import '../src/styles/CountDown.css'
import '../src/styles/DrinkWater.css'
import '../src/styles/BtnScrollToDetail.css'

import { CountDownProvider } from '../src/contexts/CountDownContext'
import { DrinkWaterProvider } from '../src/contexts/DrinkWaterContext'
import { CountDown } from '../src/components/CountDown'
import { DrinkWater } from '../src/components/DrinkWater'
import { BtnScrollToDetail } from '../src/components/BtnScrollToDetail'

function App() {
  return (

    <DrinkWaterProvider>
      <CountDownProvider>
        <BtnScrollToDetail />
        <div className="App">
          <CountDown />
          <DrinkWater />
        </div>
      </CountDownProvider>
    </DrinkWaterProvider>
  );
}

export default App;
