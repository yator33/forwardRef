import { useState, useCallback } from "react";
export default function App(){
    const [showInput, SetShowInput] = useState(false)
    const inputRef = useCallback((input) => {
        if (input == null) return
        input.focus()
    },[])
    return (
        <>
            <button onClick={() => SetShowInput(s => !s)}>Toggle</button>
            {showInput && <input type="text" ref={inputRef} />}
        </>
    )
}