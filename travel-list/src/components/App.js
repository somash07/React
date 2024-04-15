import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

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

  function handleClear(){
    const confirmed= window.confirm('Are you sure you want to delete all items?')
    
    if(confirmed){
      setItems([])
    }
  }

  function handleDeleteItem(id){
    setItems((items)=>items.filter((item)=> item.id!==id))
  }

  function handleToogleItem(id){
      setItems((items)=> items.map((item)=>item.id===id? {...item,packed: !item.packed}:item))
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggle={handleToogleItem} onClear={handleClear}/>
      <Stats items={items}/>
    </div>
  )
}

