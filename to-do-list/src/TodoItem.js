import { Button } from "./Button";


export function TodoItem({ todo, onToggle,onDelete }) {

  return (
    <li className='todo-item'>
      <input type='checkbox' value={todo.completed} onChange={() => onToggle(todo)} />
      <p className='desc'>{todo.description}</p>
      <p>{todo.AddedOn}</p>
      <Button onClick={()=>onDelete(todo)}>Remove</Button>
    </li>
  );
}
