import { useState } from "react"

const messages=[
  "Learn React",
  "Apply for jobs",
  "Invest yout new income"
]
const App = () => {
  // 1. add new state variable
  // 2. use it in ConvolverNode
  // 3. update state in event handler

  const [step,setStep]=useState(1);
  const [isOpen,setisOpen]=useState(true)

//use a callBack in setStep insted of directly using current state
  function handlePrevious(){
    if(step>1)
     setStep((s)=>s-1)
  }
  function handleNext(){
     if (step<3)
     setStep((s)=>s+1)

  }


  return (
    <div>
      <button class='close' onClick={()=>setisOpen(false)} >x</button>
    {isOpen?
    <div className="steps" > 
      <div className='numbers'>
        <div className={step >=1?'active': ''}>1</div>
        <div className={step>=2?'active':''}>2</div>
        <div className={step>=3?'active': ''}>3</div>
      </div>

      <p className="message">Step: {step}: {messages[step-1]}
      </p>

      <div className="buttons">
        <button style={{backgroundColor: '#7950f2', color: '#fff'}} 
        onClick={handlePrevious}
        
        >Previous</button>
        <button style={{backgroundColor: '#7950f2', color: '#fff'}} onClick={handleNext}>Next</button>
      </div>
    </div>:''
}
    </div>
  )
}

export default App