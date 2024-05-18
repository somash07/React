import { useRef , useEffect } from "react";
import { useKey } from "../useKey";

export function Search({ query, setQuery }) {

  const inputElement= useRef(null)

  // useEffect(()=>{
  //   function callBack(e){
  //     if(document.activeElement===inputElement.current) return
  //     if(e.code==='Enter'){
  //       inputElement.current.focus()
  //       setQuery('')
  //     }
  // //   }
  //   document.addEventListener('keydown', callBack)
  // },[setQuery])

  //stateful

  useKey('enter',()=>{
    // if(inputElement && inputElement.current!==document.activeElement){
      if(inputElement.current=== document.activeElement) return
      inputElement?.current.focus()
      setQuery('')
    // }
  })
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)} ref={inputElement}/>
  );
}
