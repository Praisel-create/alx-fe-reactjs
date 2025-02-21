import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return(
        <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        
        <p>Count: {count}</p>
        
        </div>
);
};

export default Counter;


/* JavaScript Arrow Function
const Counter = (param1, param2) => {

}*/