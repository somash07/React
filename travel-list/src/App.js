import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "shoes", quantity: 2, packed: true },
];

export default function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo() {
  return (
    <h1> Far Away 👜</h1>
  )
}

function Form() {
  const [description,setDescription] = useState('');
  const[quantity,setQuantity]=useState(1)


  function handleSubmit(e){
    e.preventDefault();

    if(!description) return;
    const newItem={
      description,
      quantity,
      'packed': false,
      id: Date.now()
    };
    console.log(newItem)

    setDescription('')
    setQuantity(1)
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>what do you need for your trip??</h3>
      <select value={quantity} onChange={(e)=>{
        setQuantity(Number(e.target.value))}}>
        {
          Array.from({length: 20}, (_ ,i)=>i+1).map(num=><option value={num} key={num} >{num}
          </option>)
        }
      </select>
      <input type='text' placeholder='items' value={description} onChange={(e)=>setDescription(e.target.value)}/>
      {/* //while writing in the input field */}
      <button>Add</button>
    </form>
  )
}

function PackingList() {
  return (
    <div className='list'>
      <ul>
        {initialItems.map(item => <Item item={item} key={initialItems.id}/>)}
      </ul>
    </div>
  )
}

function Item({ item }) {
  return <li>
    <span  style={item.packed?{textDecoration: 'line-through'}:{}}>{item.quantity} {item.description}
    </span>
  <button>❌</button>
  </li>
}
function Stats() {
  return <footer className='stats'>
    you have X items on your list and youve already packed X (X%)
  </footer>
}