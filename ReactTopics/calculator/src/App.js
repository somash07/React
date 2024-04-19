import { useState } from "react"

export default function App(){
  const [inpValue,setInpValue]=useState('')

  function handleClick(value){
    if((inpValue?.startsWith('0') || (inpValue?.startsWith('/')) || (inpValue?.startsWith('*')) || (inpValue?.startsWith('/')) || (inpValue?.startsWith('%')))) {setInpValue('')}

    setInpValue((inpValue)=>inpValue+value)
  }

  function handleAC(){
    setInpValue('')
  }

  function handleEvaluate(){
    setInpValue((inpValue)=> (eval(inpValue)).toString())
  }

  function handleReverseSign(){
    setInpValue((inpValue<0)? -inpValue: (inpValue>0)? -inpValue: inpValue)
  }
  return (
    <div className='main-container'>
      <Display inpValue={inpValue}/>
      <div className='button-container'>
        <Button onClick={handleAC} value='AC'>AC</Button>
        <Button onClick={handleReverseSign} value="+/-">+/-</Button>
        <Button onClick={handleClick} value="%" operation='1'/>
        <Button onClick={handleClick} value="/" operation='1'/>
        <Button onClick={handleClick} value="7"/>
        <Button onClick={handleClick} value="8"/>
        <Button onClick={handleClick} value="9"/>
        <Button onClick={handleClick} value="*" operation='1'/>
        <Button onClick={handleClick} value="4"/>
        <Button onClick={handleClick} value="5"/>
        <Button onClick={handleClick} value="6"/>
        <Button onClick={handleClick} value="-" operation='1'/>
        <Button onClick={handleClick} value="1"/>
        <Button onClick={handleClick} value="2"/>
        <Button onClick={handleClick} value="3"/>
        <Button onClick={handleClick} value="+" operation='1'/>
        <Button special='special' onClick={handleClick} value="0">0</Button>
        <Button onClick={handleClick} value=".">.</Button>
        <Button onClick={handleEvaluate} value="=">=</Button>
      </div>
    </div>
  )
}

function Display({inpValue}){
  return (
    <input type='text' value={inpValue} disabled/>)
}

function Button({value,special,onClick,operation}){
  return <input type="button" value={value} className={`btn ${special? 'special': ''}`} onClick={()=>onClick(value)}/>
}