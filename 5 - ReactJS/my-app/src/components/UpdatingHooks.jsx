import { useState } from "react";

const UpdatingHooks = props => {
    const [count, setCount] = useState(0);
    setTimeout(() => {
        console.log('rendering to...', count + 1);
        setCount(count + 1);
        console.log(count)
    }, 2_000);
    console.log('render!');
    return <div>Count: {count}</div>
}

export default UpdatingHooks;