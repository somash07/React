import { useState } from "react";

export default function Form({items,onAddItem}){

    const [description,setDescription]=useState('')
    const [priority,setPriority]=useState(1)

    function handleSubmit(e){
        e.preventDefault();
        if(!description) return

        const newItm={
            description,
            id: Date.now(),
            completed: false,
        }
        onAddItem(newItm)

        setDescription('')
        setPriority(1)
    }


    return(
        <form onSubmit={handleSubmit}>
            {/* <select value={priority} placeholder="priority" onChange={(e)=> setPriority(Number(e.target.value)) }>
                {Array.from({length: 20},(_,i)=>i+1).map(num=><option value={num} key={num}>{num}</option>)}
            </select> */}
            <input type="text" placeHolder='enter your goals' value={description} onChange={(e)=>{
                setDescription(e.target.value)
            }}/>
            <button>Add</button>
        </form>
    )
}