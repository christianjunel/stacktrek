import { useState, useEffect } from "react";

const ComplexForm = props => {
    const [state, setState] = useState({})
    
    useEffect(() => console.log(state), [state]) // to show when it updates
    
    const handleChange = e => {
        setState(prev => {
            const newState = {
                ...prev,
                [e.target.name] : e.target.value
            }
            return newState
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        alert('Submitted!')
        setState({
            firstname: '',
            middlename: '',
            lastname: ''
        })
    }
    
    return (
    	<form onSubmit={handleSubmit}>
            {state.firstname} {state.middlename} {state.lastname}
            <br />
            <label>First Name: </label>
        	<input type="text" value={state.firstname} name="firstname" onChange={handleChange} />
            <br />
            <label>Last Name: </label>
            <input type="text" value={state.lastname} name="lastname" onChange={handleChange} />
            <br />
            <label>Middle Name: </label>
            <input type="text" value={state.middlename} name="middlename" onChange={handleChange} />
            <br />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default ComplexForm;