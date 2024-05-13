import { useState, useEffect } from "react";
export default function App() {
  const [query, setQuery] = useState(1);
  const [fromCurr, setFromCurr] = useState("AUD");
  const [toCurr, settoCurr] = useState("INR");
  const [res,setRes]=useState('')
  const [err,setErr]=useState('')

  useEffect(()=>{
    try{
    const fetcher=async()=>{
      const res=await fetch(`https://api.frankfurter.app/latest?amount=${query}&from=${fromCurr}&to=${toCurr}`)
      const data=await res.json()
      console.log(data.rates[toCurr])
      setRes(data.rates[toCurr])
    }
    fetcher()
  }
  catch(err){
    setErr(err.message)
  }
  finally{

  }
  },[query,fromCurr,toCurr])
  return (
    <div>
      <input type="text" value={query} onChange={(e)=>setQuery(Number(e.target.value))} placeholder='enter amount' />
      <select value={fromCurr} onChange={(e)=>setFromCurr(e.target.value)}>
        <option value="AUD">AUD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
      </select>

      <select value={toCurr} onChange={(e)=>settoCurr(Number(e.target.value))}>
        <option value="AUD">AUD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
      </select>

      <p>{}</p>
    </div>
  );
}
