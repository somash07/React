import Options from "./Options"

function Question({questions,dispatch,answer}) {
    return (
        <div>   
            <h4>{questions.question}</h4>
            <Options questions={questions} answer={answer} dispatch={dispatch}/>
        </div>
    )
}

export default Question
