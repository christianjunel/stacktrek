// import { useState } from "react";

// const HooksOne = prop => {
//     const [on, setOn] = useState(false);
//     const handleClick = e => {
//         // if (on === false) setOn(true)
//         // else setOn(false);
//         on ? setOn(false) : setOn(true);
//     }

//     return (
//         <div>
//             I am {on ? 'on' : 'off'}
//             <br />
//             <button onClick={handleClick}>On/Off?</button>
//         </div>
//     )
// }

// export default HooksOne;

import { useState } from "react";

const HooksOne = props => {
    const [on, setOn] = useState(false);
    const handleClick = e => {
        setOn(previous => !previous);
    }

    return (
        <div>
            I am {on ? 'on' : 'off'}
            <br />
            <button onClick={handleClick}>On/Off?</button>
        </div>
    )
}

export default HooksOne;