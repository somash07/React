export default function Stats({items}){
    return(
        <div>
            <p>{(items.length!==0)?`you have ${items.length} tasks in your todos and ${items.filter((item)=>item.completed).length}`: 'please add items to todo'}</p>
        </div>
    )
}