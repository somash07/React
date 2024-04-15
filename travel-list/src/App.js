import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "shoes", quantity: 2, packed: true },
// ];

export default function App() {
  const [items,setItems]=useState([])

  function handleAddItems(item){
    setItems((items)=>[...items,item])
  }

  function handleDeleteItem(id){
    setItems((items)=>items.filter((item)=> item.id!==id))
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem}/>
      <Stats itemLength={items.length}/>
    </div>
  )
}

function Logo() {
  return (
    <h1> Far Away 👜</h1>
  )
}

function Form({onAddItems}) {
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
    // console.log(newItem)

    onAddItems(newItem)

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

function PackingList({items,onDeleteItem}) {

  return (
    <div className='list'>
      <ul>
        {items.map(item => <Item item={item} onDelete={onDeleteItem} key={items.id}/>)}
      </ul>
    </div>
  )
}

function Item({ item ,onDelete}) {
  return <li key={item.id}>
    <input type='checkbox' value={item.packed} onChange={()=>} />
    <span  style={item.packed?{textDecoration: 'line-through'}:{}}>{item.quantity} {item.description}
    </span>
  <button onClick={()=>onDelete(item.id)}>❌</button>
  </li>
}
function Stats({itemLength}) {
  return <footer className='stats'>
    you have {(itemLength>0)?itemLength:'0'} items on your list and youve already packed X (X%)
  </footer>
}