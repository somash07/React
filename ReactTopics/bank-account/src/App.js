import { useReducer } from "react"
import Header from "./Header"

const initialState={
  balance: 0,
  loan: 0,
  //status can be either active or inactive for in active we just enable open acc btn but all other will be disabled
  status : 'inactive',
}

function reducer(state,action){
  switch(action.type){
    case 'openAccount': 
      return {
        ...state,
        status: 'active'
      }

    default: throw new Error('unregistered event occured')
    
  }
}

export default function App(){

  const [{status,balance, loan}, dispatch] = useReducer(reducer, initialState)
  return <>
    <h1 align='center'>useReducer Bank Account</h1>

    <Header>
       <h3>Balance: {balance}</h3>
       <h3>Loan: {loan}</h3>
    </Header>

    <button disabled={status==='active'? true: false} onClick={()=>dispatch({type: 'openAccount'})}>Open Account</button>


  </>
}