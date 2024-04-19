import { useState } from "react"
import { Form } from "./Form";
import { TodoList } from "./TodoList";

const demoItems=[
  {
    id: 1,
    description: 'read',
    AddedOn: '17/02'
  },
  {
    id: 1,
    description: 'read',
    AddedOn: '17/02'
  },
  {
    id: 1,
    description: 'read',
    AddedOn: '17/02'
  }
]

export default function App() {

  const [todoItems,setTodoItem]=useState(demoItems);
 
  function handleToggle(item){
    setTodoItem((todoItems)=> todoItems.map((todo)=> (todo.id===item.id)? {...todo,completed: item.completed}: todo))
  }

  function handleAddTask(item){
    setTodoItem((todoItems)=> [...todoItems,item])
  }
  return (
    <div className='main-container'>
      <div className='date-container'>
        <h2> ToDo List </h2>
        <span>{new Date().toLocaleString().split(',')[0]}</span>
      </div>
      <Form todoItems={todoItems} onAddTask={handleAddTask}/>
      <TodoList todoItems={todoItems} onToggle={handleToggle}/>
    </div>
  )
}

