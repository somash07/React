import {useState,useEffect} from 'react'
export function useKey(keyName,action){
    useEffect(() => {
        //oneach mount a event listener is added to the document.
        const callBack = (e) => {
          if (e.code.toLowerCase() === keyName.toLowerCase()) {
            action();
            // console.log('closing with escape key')
          }
        };
        document.addEventListener('keydown', callBack);

        return () => document.removeEventListener('keydown', callBack);
      }, [action , keyName]);
}