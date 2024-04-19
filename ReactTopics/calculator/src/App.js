import { useState } from "react"

export default function App(){
  const [inpValue,setInpValue]=useState(0)
  const [current,setCurrent]=useState(null)

  function handleClick(value){
   console.log(typeof(value))
  }


  function handleAC(){
    setInpValue(0)
  }
  return (
    <div className='main-container'>
      <Display inpValue={inpValue}/>
      <div className='button-container'>
        <Button onClick={handleAC} value='AC'>AC</Button>
        <Button onClick={handleClick}>{'+/-'}</Button>
        <Button onClick={handleClick}>{'%'}</Button>
        <Button onClick={handleClick}>{'/'}</Button>
        <Button onClick={handleClick}>{'7'}</Button>
        <Button onClick={handleClick}>{'8'}</Button>
        <Button onClick={handleClick}>9</Button>
        <Button onClick={handleClick}>{'x'}</Button>
        <Button onClick={handleClick}>{'4'}</Button>
        <Button onClick={handleClick}>{'5'}</Button>
        <Button onClick={handleClick}>{'6'}</Button>
        <Button onClick={handleClick}>{'-'}</Button>
        <Button onClick={handleClick}>{'1'}</Button>
        <Button onClick={handleClick}>{'2'}</Button>
        <Button onClick={handleClick}>{'3'}</Button>
        <Button onClick={handleClick}>{'+'}</Button>
        <Button special='special' onClick={handleClick}>0</Button>
        <Button onClick={handleClick}>'.'</Button>
        <Button onClick={handleClick}>'='</Button>
      </div>
    </div>
  )
}

function Display({inpValue}){
  return (
    <input type='text' value={inpValue} disabled/>)
}

function Button({value,special,onClick,children}){
  return <input type="button" value={children} className={`btn ${special? 'special': ''}`} onClick={()=>onClick(value)}/>
}