
export function Item({ item, onDelete, onToggle }) {
  return <li key={item.id}>
    <input type='checkbox' value={item.packed} onChange={() => onToggle(item.id)} />
    <span style={item.packed ? { textDecoration: 'line-through' } : {}}>{item.quantity} {item.description}
    </span>
    <button onClick={() => onDelete(item.id)}>❌</button>
  </li>;
}
