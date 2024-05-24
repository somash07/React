import { useEffect, useReducer } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Loader from "./components/loader";
import Error from "./components/Error";

const initialState = {
  questions: [],
  //loading, error, ready, active, finish
  status: "loading",
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
    default:
      throw new Error("unknown action");
  }
}
export default function App() {
  //nested destructuring
  const [{questions,status}, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function loadQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "datafailed" });
      }
    }
    loadQuestions();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main className="main">
        {status==='loading'} && <Loader />
        {status==='error'} && <Error />
      </Main>
    </div>
  );
}
