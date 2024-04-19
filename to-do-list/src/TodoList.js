import { TodoItem } from "./TodoItem";
import {useState} from 'react'

export function TodoList({ todoItems, onToggle,onDelete }) {

  return (
    <div className='todo-list'>
    <ol>
      {todoItems.map(todo => <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />)}
    </ol>
    </div>
  );
}
