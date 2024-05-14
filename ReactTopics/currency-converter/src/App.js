import { useState, useEffect } from "react";
export default function App() {
  const [query, setQuery] = useState(1);
  const [fromCurr, setFromCurr] = useState("AUD");
  const [toCurr, setToCurr] = useState("INR");
  const [res,setRes]=useState('')
  const [err,setErr]=useState('')
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    try{
      if(toCurr===fromCurr){
        throw new Error('converted to same value')
      }
    const fetcher=async()=>{
      if(query){
        setLoading(true)
        const res=await fetch(`https://api.frankfurter.app/latest?amount=${query}&from=${fromCurr}&to=${toCurr}`)
        const data=await res.json()
        // console.log(data.rates[toCurr])
        setLoading(false)
        setRes(data.rates[toCurr])
        setErr('')
      }
    }
    fetcher()
  }
  catch(err){
    setErr(err.message)
  }
  finally{

  }
  },[query,fromCurr,toCurr])

  function Loader(){
    return<p>Loading...</p>
  }
  return (
    <div>
      <input type="text" value={query} onChange={(e)=>setQuery(Number(e.target.value))} placeholder='enter amount' disabled={loading}/>
      <select value={fromCurr} onChange={(e)=>setFromCurr((e.target.value))}>
        <option value="AUD">AUD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
      </select>

      <select value={toCurr} onChange={(e)=>setToCurr((e.target.value))}>
        <option value="AUD">AUD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
      </select>
      <p>
      {loading && <Loader/>}
      {query!==0 && !loading  && (!err ?<p>{res} {toCurr}</p>: <p>{err}</p>)}
      </p>
    </div>
  );
}
