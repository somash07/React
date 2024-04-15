import Item from './items.js'

export default function TodoList({items,onDelete,onToggle}){
    return(
       <ol>
            {items.map((item) => <Item item={item} onDelete={onDelete} onToggle={onToggle}/>)}
       </ol>
    )
}