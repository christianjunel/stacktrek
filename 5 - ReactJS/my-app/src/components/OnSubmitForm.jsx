//UNCONTROLLED
// import { useState } from "react";

// const OnSubmitForm = props => {
//     const [state, setState] = useState({});
//     const handleSubmit = e => {
//         e.preventDefault();

//         const newState = {
//             firstname: e.target.firstname.value,
//             lastname: e.target.lastname.value,
//             suffix: e.target.suffix.value,
//             username: e.target.username.value,
//             password: e.target.password.value,
//             address: e.target.address.value,
//             status: e.target.status.value,
//         }
//         setState(newState);
//         console.log(newState);
//         e.target.reset() // clears the form
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>First name:</label>
//         	<input name="firstname" />
//             <br />
//             <label>Last name:</label>
//         	<input name="lastname" />
//             <br />
//             <label>Suffix:</label>
//         	<input name="suffix" />
//             <br />
//             <label>Username:</label>
//         	<input name="username" />
//             <br />
//             <label>Password:</label>
//         	<input name="password" type="password" />
//             <br />
//             <label>Address</label> <br />
//             <textarea name="address" />
//             <br />
//             <select name="status">
//             	<option value="married">Married</option>
//                 <option value="single">Single</option>
//                 <option value="other">Other</option>
//             </select>
//             <br />
//             <input type="submit" value="Submit" />
//         </form>
//     )

// }

// export default OnSubmitForm;

//CONTROLLED

import { useState } from "react";

const OnSubmitForm = props => {
    const [state, setState] = useState({});
    const handleSubmit = e => {
        e.preventDefault();
        const resetState = {
            firstname: '',
            lastname: '',
            suffix: '',
            username: '',
            password: '',
            address: '',
            status: 'single'
        };
        setState(resetState);
    }
    
    const FillForm = string => {
        const newState = {
            firstname: string,
            lastname: string,
            suffix: string,
            username: string,
            password: string,
            address: string,
            status: 'single'
        }
        setState(newState);
    }

    return (
        <>
            <button onClick={() => FillForm('A')}>A</button>
            <button onClick={() => FillForm('B')}>B</button>
            <button onClick={() => FillForm('C')}>C</button>
            <form onSubmit={handleSubmit}>
                <label>First name:</label>
                <input name="firstname" value={state.firstname} />
                <br />
                <label>Last name:</label>
                <input name="lastname" value={state.lastname} />
                <br />
                <label>Suffix:</label>
                <input name="suffix" value={state.suffix} />
                <br />
                <label>Username:</label>
                <input name="username" value={state.username} />
                <br />
                <label>Password:</label>
                <input name="password" value={state.password} />
                <br />
                <label>Address</label> <br />
                <textarea name="address" value={state.address} />
                <br />
                <select name="status" value={state.status}>
                    <option value="married">Married</option>
                    <option value="single">Single</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <input type="submit" value="Erase" />
            </form>
        </>
    )
}

export default OnSubmitForm;