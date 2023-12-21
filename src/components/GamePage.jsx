import PreviousMap from "postcss/lib/previous-map";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import { useEffect, useState } from "react";

export default function Gamepage(){

    const [score, setScore] = useState(0);
    
    const [selectedNumber, setSelectedNumner] = useState();
    
    const [currentDice, setCurrentDice] = useState(1);

    const [err , setErr] = useState()

    const randomNumber=(min , max)=>{

    return Math.floor(Math.random() * (max-min) + min);}

    const rollDice=()=>{
        if(selectedNumber == undefined){
            setErr("You have not selected any number")
            return;
        }
        
        else{
            
            const randomNum = randomNumber(1,7);
        setCurrentDice((prev)=> randomNum);

        if(selectedNumber == randomNum){
            setScore((prev) => prev + randomNum)
        }else(
            setScore((prev)=> prev - 2)
        )}
        
        setSelectedNumner(undefined)
    }
    // useEffect(()=>{
    //     const calculateScore =() =>{
    //         if(selectedNumber == currentDice){
    //             setScore(selectedNumber + score);
    //         }
    //     }
    // });

    return(
        <div>
            <nav className="flex flex-col lg:flex-row justify-between m-5 items-center">
                <TotalScore score={score} setScore={setScore}/>
                <NumberSelector selectedNumber={selectedNumber} 
                setSelectedNumner={setSelectedNumner} err={err} setErr={setErr}/>
            </nav>

            <main>
                <RollDice currentDice={currentDice} rollDice={rollDice} setScore={setScore} />
            </main>
        </div>
       
    )
}