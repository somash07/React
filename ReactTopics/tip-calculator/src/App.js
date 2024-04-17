import {useState} from 'react'

export default function App(){
  const [total,setTotal]=useState("")
  const [tip1,setTip1]=useState(0)
  const [tip2,setTip2]=useState(0)

  const avgTip=(total*(tip1+tip2))/200


  function onTotal(e){
    if(!isNaN(e.target.value)) setTotal(Number(e.target.value))

    else alert('please enter only numbers')
  }

  function handleTip1(e){
    setTip1(Number(e.target.value))
  }

  function handleTip2(e){
    setTip2(Number(e.target.value))
  }

  function handleReset(){
    setTotal("")
    setTip1(0)
    setTip2(0)
  }
  
  return(
    <div>
    <Bill total={total} onTotal={onTotal}/>
    <Tip percentage={tip1} onTip={handleTip1}><span>how did you like the service</span></Tip>

    <Tip percentage={tip2} onTip={handleTip2}><span>how did your friend like the service</span></Tip>

    {total>0 &&
    <>
    <Message total={total} avgTip={avgTip}/>
    <Reset onReset={handleReset}/>
    </>
    }
    </div>
    
  )
}

function Bill({total,onTotal}){
  return <div>
    Enter the total amount: <input type='text' placeholder='bill value' value={total} onChange={onTotal}/>
  </div>
}


function Tip({percentage,onTip,children}){
  return <div>
    {children}
    <select value={percentage} onChange={onTip}>
      <option value='0'> Not good (0%)</option>
      <option value='5'> It was okay (5%)</option>
      <option value='10'> It was goood (10%)</option>
      <option value='20'> outstanding (20%)</option>
    </select>
  </div>
}

function Message({total,avgTip}){

  const totalBill=total+(avgTip*total/100)
  
  return <div>
    <p>{`your total bill is $${totalBill} (${total} + tip ${(avgTip*total/100)})`}</p>
  </div>
}

function Reset({onReset}){
  return (
    <button onClick={onReset}>Reset</button>
  )
}