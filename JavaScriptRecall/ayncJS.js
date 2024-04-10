// //promises

// fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>res.json()).then((data)=>console.log(data))
// console.log('hi')


//async-await.
// async function getTodods(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const data=await res.json();
//     console.log(data)
// }

// const getTodos=getTodods()

getnames=async()=>{
    let res=await fetch('https://jsonplaceholder.typicode.com/users')
    let res2=await res.json()
    console.log(res2)
    return res2
}

console.log(getnames())

