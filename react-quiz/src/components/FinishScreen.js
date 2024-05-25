function FinishScreen({points,maxPoints}) {
    const percent=(points/maxPoints)*100
    return (
        <p className="result">
            You Scored <strong>{points} out of {maxPoints}</strong> ({Math.ceil(percent)}%)
        </p>
    )
}

export default FinishScreen
