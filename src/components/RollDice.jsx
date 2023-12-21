import { useState } from 'react'
import Button from './Button'
import Rules from './Rules'
function RollDice({currentDice, rollDice, setScore}) {

  // UseState is tranfer in GamePage Component and Use in this Component as Props.....!

  const resetScore =()=>{
      setScore(0)
  }

  const handleRules = () =>{
    
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className='mb-3'>
          <div onClick={rollDice}>
            <img src={`/public/images/dice_${currentDice}.png`} alt={currentDice} className='w-[180px] h-[180px] lg:w-[250px] lg:h-[250px]' />
          </div>
          <p className="text-[12px] lg:text-[24px] leading-normal font-semibold text-center mt-2">Click on Dice to roll</p>

          <div className='flex flex-col gap-2 items-center mt-3'>
            <Button onClick={resetScore} text="Reset Score"/>
          </div>
      </div>
      <Rules/>
    </div>
  )
}

export default RollDice