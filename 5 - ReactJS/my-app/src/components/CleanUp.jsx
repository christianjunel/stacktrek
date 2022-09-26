import { useState, useEffect } from "react";

const HasCleanup = props => {
    useEffect(() => {
        console.log('I am rendered!');
        return () => console.log('I am deleted.');
    }, [])

    return <div>Happy to be here!</div>
}

const CleanUp = props => {
    const [hasChild, setHasChild] = useState(true);
    return (
        <div>
            {hasChild ? <HasCleanup /> : 'No child here.'}
            <br />
            <button onClick={() => setHasChild(false)}>Delete child</button>
        </div>
    )
}

export default CleanUp;