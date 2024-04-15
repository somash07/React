export default function Item ({item,onDelete,onToggle}){
    return (
        <li>    
            <input type="checkbox" value='false' onChange={()=>onToggle(item.id)}></input>
            <p className={(item.completed?'completed':'')}>{item.description}</p>
            <button onClick={()=>onDelete(item.id)} >x</button>
        </li>
    )
}