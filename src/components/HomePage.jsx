import { useState } from "react";
import Button from "./Button";
import diceHome from "/public/diceHome.png";

export default function HomePage({toggle}){
    
    const playGame=() =>{
        // setisGameStart(true);
        alert("hello");
    };
    
    return(
        <div className="w-[100%] h-[100vh] box-border  flex justify-center items-center ">
            <div className="">
                <img src={diceHome} alt="" width={550} height={522}/>
            </div>
            <div className="flex flex-col items-end">
                <h1 className=" text-[80px] font-bold">DICE GAME</h1>
                <Button onClick={toggle} text="Play Now"/>
            </div>
        </div>
    )
}