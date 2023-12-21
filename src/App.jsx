import { useState } from 'react';
import Gamepage from './components/GamePage';
import HomePage from './components/HomePage';

export default function App(){
  const [isGamesStart, setisGameStart] = useState(false);

  const toggleGamePlay = () =>{
    setisGameStart((prev) => !prev);
  };

  return(
    <>
     {isGamesStart ? <Gamepage/> : <HomePage toggle={toggleGamePlay}/> } 
    </>
  )
}
