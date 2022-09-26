import { useState, useEffect } from "react";

const UseEffectSample = prop => {
    const [count, setCount] = useState(0);
    useEffect(() => console.log('Print me only at the beginning.'), []);
    return <div><button onClick={() => setCount(count+1)}>Count is: {count}</button></div>
}
export default UseEffectSample;