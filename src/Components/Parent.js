import { useState } from "react";
import Child from "./Child";

export default function Parent () {
    const [parentcount, setParentCount] = useState (0);
    const [Childcount, setChildCount] = useState (0)
    const changeParentCount = () => {
        setParentCount(parentcount + 1)
    }
    const changeChildCount = () => {
        setChildCount(Childcount + 1)
    }
    return (
        <div>
            this is a parent Component
            <h1>Parent count is {parentcount}</h1>
            <Child count ={Childcount} />
            <button onClick={changeParentCount}>Increment parent Count</button>
            <button onClick={changeChildCount}>Increment child Count</button>
        </div>
    )
}
