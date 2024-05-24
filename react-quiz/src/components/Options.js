function Options({ questions, answer, dispatch }) {
  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${index === questions.correctOption ? 'correct' : 'wrong'}`}
        >
          {option}
        </button>  
      ))}
    </div>
  );
}

export default Options;
