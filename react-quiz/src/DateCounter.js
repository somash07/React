import { useState } from "react";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date=new Date('19 May 2024')
  date.setDate(date.getDate()+count)
//   console.log(typeof(date))
  function handleStep(e){
    setStep(Number(e.target.value))
  }

  function inc(){
    setCount((count)=>count+step)
  }

  function dec(){
    setCount((count)=>count-step)
  }

  function reset(){
    setCount(0)
    setStep(1)
  }

  function handleInputChange(e){
    setCount(e.target.value)
  }

  return (
    <div className="counter">
      <div>
        <input type="range" max="10" min="0" value={step} onChange={handleStep}/>
        <span>{step}</span>
      </div>

      <div>
        <button onClick={inc}>+</button>
        <input type='text' value={count} onChange={handleInputChange}/>
        <button onClick={dec}>-</button>
      </div>
      <p>{date.toDateString()}</p>
      <button onClick={reset}>reset</button>
    </div>
  );
}
