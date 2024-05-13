import { useState, useEffect } from "react";
export default function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("somash");
  const [fromCurr,setFromCurr]=useState('AUD')
  const [toCurr,setToCurr]=useState('USD')
  const [err,setErr]=useState('')

  useEffect(()=>{
    const fetcher=async()=>{
      try{
      const res=await fetch(`https://api.frankfurter.app/latest?amount=${query}&from=${fromCurr}&to=${toCurr}`)
      const data= await res.json()
        setResult(data.rates)
      }catch(err){
        setErr(err)
      }
      finally{
        setErr('')
      }
    }
    fetcher()
  },[fromCurr,toCurr,query])
  return (
    <div>
      <Search query={query} setQuery={setQuery} />

      <select value={fromCurr} onChange={(e)=>setFromCurr((e.target.value))}>
        <option value='AUD'>AUD</option>
        <option value='NPR'>NPR</option>
        <option value='INR'>INR</option>
        <option value='EUR'>EUR</option>
      </select>

      <select value={toCurr} onChange={(e)=>setToCurr((e.target.value))}>
        <option value='AUD'>AUD</option>
        <option value='NPR'>NPR</option>
        <option value='INR'>INR</option>
        <option value='EUR'>EUR</option>
      </select>
      <p>{!err? result : err.message}</p>
    </div>

  );
}

function Search({ query, setQuery }) {
  return (
    <input
      type="text"
      value={query}
      placeHolder="enter the amount"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}