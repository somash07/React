import { useState, useReducer} from "react";

const type={
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  HANDLEINPUT: 'handleinput'
}
export default function DateCounter() {
  // const [step, setStep] = useState(1);
  // const [count, setCount] = useState(0);

  function reducer(state,action){
      switch(action.type){
        case action.INCREMENT: return {count: state.count+1}
        case action.DECREMENT: return {count: state.count-1}
        // case action.HANDLEINPUT: return {count: action.payload}
        default: return {count: state.count}
      }
    }

  const [state,dispatch] =useReducer(reducer,{count: 0})

  const date=new Date('19 May 2024')
  date.setDate(date.getDate()+state.count)
//   console.log(typeof(date))
  // function handleStep(e){
  //   setStep(Number(e.target.value))
  // }

  function inc(){
    dispatch({type: type.INCREMENT});
  }

  function dec(){
    dispatch({type: type.DECREMENT})
  }

  function reset(){
    dispatch({type: type.RESET})
  }

  // function handleInputChange(e){
  //   dispatch({type: type.HANDLEINPUT,payload: e.target.value})
  // }

  return (
    <div className="counter">
      <div>
        <input type="range" max="10" min="0" value={1} />
        {/* <span>{step}</span> */}
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input type='text' value={state.count}/>
        <button onClick={inc}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <button onClick={reset}>reset</button>
    </div>
  );
}
