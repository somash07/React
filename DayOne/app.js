/*
    react component are just functions which returns a jsx
    state is changed whenever we need to update something in react
    useEffect (function,dependency array->empty array)
    props is a parameter for components 
*/
import React, { useState } from "react";

export default function App() {
    const [advice, setAdvice] = useState("");

    async function getAdvice() {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setAdvice(data.slip.advice);
    }

    return (
        <div>
            <h1>{advice}</h1>
            <button onClick={getAdvice}>Get advice</button>
        </div>
    );
}

