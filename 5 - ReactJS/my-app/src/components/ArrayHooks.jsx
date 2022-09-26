import { useState } from "react";

const ArrayHooks = props => {
    const [list, setList] = useState([]);
    console.log(list);
    const updateList = newValue => {
        newValue = 'test';
        setList(prev => [...prev, newValue]);
        console.log(list);
    }

    return (
        <div>
            <button onClick={updateList}>Update List</button>
        </div>
    )
}

export default ArrayHooks;