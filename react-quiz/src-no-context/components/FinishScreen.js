function FinishScreen({points,maxPoints,highScore,dispatch}) {
    const percent=(points/maxPoints)*100
    return (
        <>
        <p className="result">
            You Scored <strong>{points} out of {maxPoints}</strong> ({Math.ceil(percent)}%)
        </p>
        <p className="highscore">Highscore: {highScore} points</p>
        <button className="btn" onClick={()=>dispatch({type: 'restart'})}>Restart</button>
        </>
    )
}

export default FinishScreen
