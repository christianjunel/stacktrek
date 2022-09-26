import { useState, useEffect } from "react"

const WorkingCounter = props => {
    const [count, setCount] = useState(0);
    const [on, setOn] = useState(false);

    useEffect(() => {
        const previousInterval = setInterval(() => {
            if(on) setCount(prev => prev+1)
        }, 1_000);
        return () => clearInterval(previousInterval)
    }, [on]);

    return (
        <div>
            Count: {count}
            <br />
            <button onClick={() => setOn(prev => !prev)}>{on ? 'On': 'Off'}</button>
        </div>
    )
    
}

export default WorkingCounter;