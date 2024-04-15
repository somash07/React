import Form from './form.js';
import Logo from './logo.js';
import Stats from './stats.js';
// import Item from './items.js';
import TodoList from './todoList.js';
import {useState } from 'react'


export default function App(){

   const[items,setItems]=useState([])//lifting state up

   function handleAddItem(item){
      setItems((items)=>[...items,item])
   }

   function handleDelete(id){
      setItems((items)=> items.filter((item)=>item.id!==id))
   }

   function handleToggle(id){
      setItems((items)=>items.map((item)=> item.id===id? {...item,completed:!item.completed}:item))
   }
   return (
    <div>
      < Logo/>
      < Form items={items} onAddItem={handleAddItem}/>
      < TodoList items={items} onDelete={handleDelete} onToggle={handleToggle}/>
      < Stats/>
      </div>
   )
}