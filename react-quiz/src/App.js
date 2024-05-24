import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  questions: [],
  //loading, error, ready, active, finish
  status: "loading",
  index: 0,
  answer: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case 'start': 
      return {
        ...state,
        status: 'active'
      }
    case 'newAnswer': 
      return {
        ...state,answer: action.payload
      }
    default:
      throw new Error("unknown action");
  }
}
export default function App() {
  //nested destructuring
  const [{questions,status,index,answer}, dispatch] = useReducer(reducer, initialState);

  const numQuestions= questions.length;
  useEffect(() => {
    async function loadQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    loadQuestions();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main className="main">
        {status==='loading' && <Loader />}
        {status==='error' && <Error />}
        {status ==='ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
        {status ==='active' && <Question questions={questions[index]} dispatch={dispatch} answer={answer}/>}
      </Main>
    </div>
  );
}
