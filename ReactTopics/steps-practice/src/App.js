
import React, { useState } from "react"

const texts=[
  'learn react',
  'learn nodejs',
  'learn TS'
]
export default function App(){
  const [step,setStep]=useState(1)

  const handleNext=()=>{
    if(step<3){
      setStep(step+1)
    }
  }
  const handlePrev=()=>{
    if(step>1){
      setStep(step-1)
    }
  }
  return (
    <div className='container'>
       <div className='number-container'>
        <div className={`numbers ${step>=1?"active":""}`}>1</div>
        <div className={`numbers ${step>=2?"active":""}`}>2</div>
        <div className={`numbers ${step>=3?"active":""}`}>3</div>
       </div>
       <div className='message'>
        <p>Step:{step} {texts[step-1]}</p>
       </div>
       <div className='button-container'>
        <button className='btn' onClick={handlePrev}>Previous</button>
        <button className='btn' onClick={handleNext}>Next</button>
       </div>
    </div>
  )
}