// const CustomForm = props => {
//     const handleChange = e => console.log(e.target.value);
    
//     return (
//         <div>
//             <input type="text" onChange={handleChange} defaultValue="Anonymous" />
//             <br />
//             <input type="password" onChange={handleChange} />
//             <br />
//             <textarea name="" onChange={handleChange} cols="30" rows="10"></textarea>
//             <br /> 
//             <select onChange={handleChange}>
//                 <option value="A">A</option>
//                 <option value="B">B</option>
//                 <option value="C">C</option>
//             </select>
//         </div>
//     )
// }
// export default CustomForm;

import { useState } from "react";

const CustomForm = props => {
    const [text, setText] = useState('');
    const [largeText, setLargeText] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <input type="text" onChange={e => setText(e.target.value)} />
            <br/>
            <input type="password" onChange={e => setPassword(e.target.value)} />
            <br/>
            <textarea onChange={e => setLargeText(e.target.value)} />
            <br/>
            {text}
            <br/>
            {largeText}
            <br/>
            {password}
        </div>
    )
}

export default CustomForm;