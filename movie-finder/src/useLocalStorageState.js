import {useState,useEffect} from 'react'
export function useLocalStorageState(initialState,key){
    const [value,setValue] = useState(
        function (){
            const storedVal= localStorage.getItem(key)
            return storedVal? JSON.parse(storedVal): initialState
        }
    )

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value,setValue]
}