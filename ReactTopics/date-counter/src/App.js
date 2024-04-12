import {useState} from 'react'

export default function App() {
  const [count,setCount]=useState(0);
  const [step,setStep]=useState(0);
  const decreaseCount=()=>{
    setCount((c)=>c-step)
  }

  const increaseCount=()=>{
    setCount((c)=>c+step)
  }

  const increaseStep=()=>{
    setStep((c)=>c+1)
  }

  const decreaseStep=()=>{
    setStep((c)=>c-1)
  }

  const date = new Date('April 12 2024');
  date.setDate(date.getDate()+count)
  return (
    <div className='main-container'>
      <div className='sub-container'>
        <div className='step-bar'>
          <button className='btn' onClick={decreaseStep}>-</button>
          <p>Steps: {step}</p>
          <button className='btn' onClick={increaseStep}>+</button>
        </div>
        <div className='count-bar'>
          <button className='btn' onClick={decreaseCount}>-</button>
          <p>{(count<0?'Days decreased':'Days added')}: {count}</p>
          <button className='btn' onClick={increaseCount}>+</button>
        </div>
        <div className='date-day'>
          <p>{ (count===0)? 'Today is ':''}{date.toDateString()}</p>
        </div>
      </div>
    </div>
  )
}



