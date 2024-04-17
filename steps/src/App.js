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


//use a callBack in setStep insted of directly using current state

  return (
    <div>
      <Steps />
      <StepMessage step={1}> <p>hi i am somash</p> </StepMessage>
    </div>
  )
}

function Steps(){
  const [step,setStep]=useState(1);
  const [isOpen,setisOpen]=useState(true)

  function handlePrevious(){
    if(step>1)
     setStep((s)=>s-1)
  }
  function handleNext(){
     if (step<3)
     setStep((s)=>s+1)

  }


  return <div>
      <button className='close' onClick={()=>setisOpen(!isOpen)} >{isOpen?'x': '+'}</button>
    {isOpen?
    <div className="steps" > 
      <div className='numbers'>
        <div className={step >=1?'active': ''}>1</div>
        <div className={step>=2?'active':''}>2</div>
        <div className={step>=3?'active': ''}>3</div>
      </div>

      <StepMessage step={step}> 
          <p>{messages[step-1]}</p>
      </StepMessage>

      <div className="buttons">
        <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}><span>👈</span>Previous</Button>
        <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext}><span>👉</span>Next</Button>
      </div>
    </div>:''
}
    </div>
}
function StepMessage({step,children}){
  return <div className='message'>
    <h3>Step: {step}</h3>
    {children}
  </div>
}
function Button({textColor,bgColor,onClick,children}){
  return <button style={{backgroundColor: bgColor, color: textColor}} onClick={onClick}>{children}</button>
}
export default App