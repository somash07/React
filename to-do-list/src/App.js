import { useState } from "react"
import { Form } from "./Form";
import { TodoList } from "./TodoList";



export default function App() {
  const [todoItems,setTodoItem]=useState([]);
  const completedTasks=todoItems?.filter((todo)=>todo.completed).length 
  function handleToggle(item){
    setTodoItem((todoItems)=> todoItems.map((todo)=> (todo.id===item.id)? {...todo,completed: !item.completed}: todo))
  }

  function handleAddTask(item){
    if(item.description==='') return
    setTodoItem((todoItems)=> [...todoItems,item])
  }

  function handleDelete(item){
    setTodoItem((todoItems.filter((todo)=>todo.id!==item.id)))
  }

  return (
    <div className='main-container'>
      <div className='date-container'>
        <h2> ToDo List </h2>
        <span>{new Date().toLocaleString().split(',')[0]}</span>
      </div>
      <Form todoItems={todoItems} onAddTask={handleAddTask}/>
      {todoItems.length===0? <p className="text" >Add a new todo</p> : 
      <TodoList todoItems={todoItems} onToggle={handleToggle} onDelete={handleDelete}/>}
      <Stats todosLength={todoItems.length} completedTasks={completedTasks}/>
    </div>
  )
}

function Stats({todosLength,completedTasks}){
  return (
    <div className="stats">
      <p>You have {todosLength} tasks and {completedTasks} are completed </p>
    </div>
  )
}
