import { useState } from 'react'
import Button from './Button'
function RollDice() {
  const [currentDice, setCurrentDice] = useState();

  const randomNumber=(min , max)=>{
    return Math.random() * (max-min) + max;
  }
  
  return (
    <div className="flex items-center justify-center">
      <div>
          <img src="/public/dice_1.png" alt="dice 1" width={250} height={250} />
          <p className="text-[24px] leading-normal font-semibold text-center mt-2">Click on Dice to roll</p>

          <div className='flex flex-col gap-2 items-center mt-3'>
            <Button text="Reset Score"/>
            <Button text="Show Rules"/>
          </div>
      </div>
    </div>
  )
}

export default RollDice