import { useReducer } from "react"
import Header from "./Header"

const initialState={
  balance: 0,
  loan: 0,
  //status can be either active or inactive for in active we just enable open acc btn but all other will be disabled
  isActive: false,
}

function reducer(state,action){
  switch(action.type){
    case 'openAccount': 
      return {
        ...state,
        isActive: true,
        balance: 500
      }
    case 'deposit': 
      return {
        ...state,
        balance: state.balance+ 150
      }
    case 'withdraw': 
      return{
        ...state,
        balance: state.balance>0? state.balance-50: 0,
      }
    case 'loan': 
      return {
        ...state,
        loan: state.loan+5000,
      }
    case 'payLoan': 
      return {
        ...state,
        loan: state.loan>0?state.loan-5000:0
      }
    case 'close': 
      return {
        ...state,
        isActive: (state.balance=== 0 && state.loan===0)? false: true
      }
    default: throw new Error('unregistered event occured')
    
  }
}

export default function App(){

  const [{isActive,balance, loan}, dispatch] = useReducer(reducer, initialState)
  return <>
    <h1 align='center'>useReducer Bank Account</h1>

    <Header>
       <h3>Balance: {balance}</h3>
       <h3>Loan: {loan}</h3>
    </Header>

    <button disabled={isActive} onClick={()=>dispatch({type: 'openAccount'})}>Open Account</button>

    <button disabled={!isActive} onClick={()=>dispatch({type: 'deposit'})}>Deposit 150</button>

    <button disabled={!isActive} onClick={()=>dispatch({type: 'withdraw'})}>Withdraw 50</button>

    <button disabled={!isActive} onClick={()=>dispatch({type: 'loan'})}>Request a loan of 5000</button>

    <button disabled={!isActive} onClick={()=>dispatch({type: 'payLoan'})}>Pay Loan</button>

    <button disabled={!isActive} onClick={()=>dispatch({type: 'close'})}>close account</button>
  </>
}