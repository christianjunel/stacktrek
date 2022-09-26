import { useState, useEffect } from "react";

const RunEveryRender = props => {
    const [count, setCount] = useState(0);
    useEffect(() => {
            console.log('Print me multiple times.');
    });

    return <button onClick={() => setCount(count + 1)}> Count: {count}</button>
}

export default RunEveryRender;