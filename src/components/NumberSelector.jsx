import { useState } from "react";
import styled from "styled-components";
function NumberSelector() {
   const numbers = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumner] = useState();
   return (
    <div className=" flex flex-col items-end">
        <div className="flex gap-2">
            {
                numbers.map((value, i) => (
                    <box isSelected ={value == selectedNumber} key={i} onClick={()=> setSelectedNumner(value)} 
                        className={`w-[72px] h-[72px]  border border-black grid justify-center text-[24px] items-center hover:cursor-pointer ${value === selectedNumber ?'bg-black text-white' : 'bg-white text-black' }`}>
                        {value}
                    </box>
                ))
            }
        </div>
        <p className="text-[24px] font-bold">Select Number</p>
    </div>
  )
}

export default NumberSelector


// // This funtion is work with style component 
// const Box = styled.div`
// background-color: ${(props) => (props.isSelected ? "black" : "white")};
// color: ${(props) => (!props.isSelected ? "black" : "white")};
// 