import { useState } from "react";
import Button from "./Button";
import diceHome from "/public/diceHome.png";

export default function HomePage({toggle}){
    
    
    return(
        <div className="w-[100%] h-[100vh] box-border  flex flex-col lg:flex-row justify-center items-center ">
            <div className="">
                <img src={diceHome} alt="" width={550} height={522}/>
            </div>
            <div className="flex flex-col items-center lg:items-end">
                <h1 className=" text-[40px] lg:text-[80px] font-bold mb-6 lg:mb-0">DICE GAME</h1>
                <Button onClick={toggle} text="Play Now"/>
            </div>
        </div>
    )
}