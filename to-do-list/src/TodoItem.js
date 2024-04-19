import { Button } from "./Button";


export function TodoItem({ todo, onToggle }) {

  return (
    <li className='todo-item'>
      <input type='checkbox' value={todo.completed} onChange={() => onToggle()} />
      <p className='desc'>{todo.description}</p>
      <p>{todo.AddedOn}</p>
      <Button>Remove</Button>
    </li>
  );
}
