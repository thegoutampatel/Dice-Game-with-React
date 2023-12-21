import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";

export default function Gamepage(){
    return(
        <div>
            <nav className="flex justify-between m-5 items-center">
            <TotalScore/>
            <NumberSelector/>
            </nav>

            <main>
                <RollDice/>
            </main>
        </div>
       
    )
}