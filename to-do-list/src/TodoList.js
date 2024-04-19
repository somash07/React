import { TodoItem } from "./TodoItem";

export function TodoList({ todoItems, onToggle }) {
  return (
    <ol className='todo-list'>
      {todoItems.map(todo => <TodoItem todo={todo} onToggle={onToggle} />)}
    </ol>
  );
}
