export default function Button({text, onClick}){
    return(
           <button onClick={onClick} className="py-2 rounded-md text-white text-[16px] leading-normal w-[180px] bg-black hover:bg-white hover:text-black hover:border hover:border-black" >
                {text} 
           </button> 
    )
}
// export function ButtonWhite({text, onClick}){
//     return(
//            <button onClick={onClick} className="py-2 rounded-md text-black text-[16px] leading-normal w-[180px] bg-white border border-black" >
//                 {text} 
//            </button> 
//     )
// }