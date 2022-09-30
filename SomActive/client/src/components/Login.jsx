import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import './styles/Login.css'

const Login = ({ setAuth }) => {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [inputs, setInputs] = useState({
        username: "",
        user_password: ""
    })

    const onChange = e => {    //username     : barney   
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const { username, user_password } = inputs

    const onSubmitForm = async (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            try {

                const body = { username, user_password }
    
                const response = await fetch(
                    "https://somactive-server-test.herokuapp.com/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(body)
                    }
                )
    
                const parseRes = await response.json()
    
                if (parseRes.token) {
                    //localstorage
                    localStorage.setItem("token", parseRes.token)
                    setAuth(true)
                } else {
                    // window.location.reload();
                    // alert('You have entered an incorrect username/password. Please try again.')
                    setShow(true)
                    setAuth(false)
                    console.error("Something wrong")
                }
    
            } catch (error) {
                console.log(error.message)
            }
        }
        setValidated(true);
    }
    return (
        <div className="flexbox-login">
            <Form noValidate validated={validated} onSubmit={onSubmitForm} className='login-form'>
                <h1>Login</h1>
                {show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    Username/Password is incorrect.
                </Alert> : null}
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label className="username-label">Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={e => onChange(e)} name="username" value={username} required/>
                    <Form.Control.Feedback type="invalid">Username is required.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="password-label">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => onChange(e)} name="user_password" value={user_password} required/>
                    <Form.Control.Feedback type="invalid">Password is required.</Form.Control.Feedback>
                </Form.Group>
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default Login;