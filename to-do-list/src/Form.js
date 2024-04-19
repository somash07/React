import { useState } from "react";
import { Button } from "./Button";

export function Form({ todoItems, onAddTask }) {
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();


    const newTodo = {
      id: crypto.randomUUID(),
      description,
      AddedOn: new Date().toLocaleString().split(',')[1],
      completed: false
    };

    onAddTask(newTodo);
    setDescription('');
  }
  return <form onSubmit={handleSubmit}>
    <input placeholder="please add a task " type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
    <Button>Add</Button>
  </form>;
}
