// import { useState } from "react";

// const ObjectHooks = props => {

//     const someObj = {name: "CJ Moriones", age: 20};
//     const [state, setState] = useState(someObj);
//     console.log(state);

//     const someFunction = e => {
//         const newState = {
//             name: "Ceej",
//             age: 19
//         }
//         setState(newState);
//         console.log(state);
//     }

//     return (
//         <div>   
//             <button onClick={someFunction}>Click here.</button>
//         </div>
//     )
    
// }
// export default ObjectHooks;

//if only chosen or few attributes have changed, use deconstruction

import { useState } from "react";

const ObjectHooks = props => {

    const someObj = {name: "CJ Moriones", age: 20};
    const [state, setState] = useState(someObj);
    console.log(state);

    const someFunction = e => {
        const newState = {...state, name: "Kuristian"};
        setState(newState);
        console.log(state);
    }

    return (
        <div>   
            <button onClick={someFunction}>Click here.</button>
        </div>
    )
    
}
export default ObjectHooks;