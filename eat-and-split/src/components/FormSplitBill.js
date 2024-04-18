import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ selectedFriend, onSplitBill }) {

  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const paidByFriend = billValue ? billValue - yourExpense : "";
  const [billPaidBy, setBillPaidBy] = useState('you');

  function handleSubmit(e) {
    e.preventDefault();
    if (!billValue || !yourExpense) return;

    onSplitBill((billPaidBy === 'you' ? paidByFriend : -yourExpense));

  }
  return <form className='form-split-bill' onSubmit={handleSubmit}>
    <h2>Split a bill with {selectedFriend.name}</h2>

    <label>Bill value </label>
    <input type='text' value={billValue} onChange={(e) => setBillValue(Number(e.target.value))}></input>

    <label>your expenses </label>
    <input type='text' value={yourExpense} onChange={(e) => setYourExpense(Number(e.target.value) > billValue ? yourExpense : Number(e.target.value))}></input>

    <label>{selectedFriend.name} expenses</label>
    <input type='text' disabled value={billValue - yourExpense} />

    <label>Who is paying the bill?</label>
    <select value={billPaidBy} onChange={(e) => setBillPaidBy(e.target.value)}>
      <option value='you'>you</option>
      <option value='friend'>{selectedFriend.name}</option>
    </select>

    <Button>Split Bill</Button>
  </form>;
}
