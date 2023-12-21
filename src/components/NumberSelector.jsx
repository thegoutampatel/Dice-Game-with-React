import { useState } from "react";
import styled from "styled-components";
function NumberSelector({selectedNumber, setSelectedNumner , err , setErr}) {
    const numbers = [1, 2, 3, 4, 5, 6];
   
    // UseState is tranfer in GamePage Component and Use in this Component as Props.....!

   return (
    <div className=" flex flex-col items-end">
        <p className="text-[12px] lg:text-[24px] text-[#FF0C0C] leading-normal">{err}</p>
        <div className="flex gap-2">
            {
                numbers.map((value, i) => (
                    <box isSelected ={value == selectedNumber} key={i} onClick={()=> setSelectedNumner(value) + setErr("")} 
                        className={`lg:w-[72px] w-[40px] h-[40px] lg:h-[72px]  border border-black grid justify-center text-[24px] items-center hover:cursor-pointer ${value === selectedNumber ?'bg-black text-white' : 'bg-white text-black' }`}>
                        {value}
                    </box>
                ))
            }
        </div>
        <p className="text-[12px] lg:text-[24px] font-bold">Select Number</p>
    </div>
  )
}

export default NumberSelector


// // This funtion is work with style component 
// const Box = styled.div`
// background-color: ${(props) => (props.isSelected ? "black" : "white")};
// color: ${(props) => (!props.isSelected ? "black" : "white")};
// 