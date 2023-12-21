function TotalScore({score, setscore}) {

  return (
    <div className=" max-w-[100px] lg:max-w-[200px] text-center leading-[40px] lg:leading-[70px]">
        <div className="text-[50px] lg:text-[100px] font-bold ">{score}</div>
        <h2 className="text-[18px] lg:text-[24px]">Total Score</h2>
    </div>
  )
}

export default TotalScore