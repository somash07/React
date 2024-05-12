import {useState,useEffect} from 'react'
export default function App(){
  const[query,setQuery]=useState('')
  return (
    <div>
      <Search query={query} setQuery={setQuery}/>
      <CurrencyList/>
      <CurrencyList/>

    </div>
  )
}

function Search({query,setQuery}){
  return(
    <input type='text' value={query}  placeHolder='enter the amount' onChange={(e)=>setQuery(e.target.value)}/>
  )
}

function CurrencyList({list}){
    return <select>
      <option>hi</option>
      <option>be</option>
    </select>
}