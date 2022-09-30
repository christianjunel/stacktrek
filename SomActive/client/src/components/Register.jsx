import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Image from "react-bootstrap/Image";
import Alert from 'react-bootstrap/Alert';
import './styles/Register.css'

// import UploadProfilePhoto from "./UploadProfilePhoto";

const Register = ({ setAuth, selected }) => {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [showDBAlert, setShowDBAlert] = useState(false);
    const [inputs, setInputs] = useState({
        username: "",
        first_name: "",
        last_name: "",
        birthdate: "",
        email_address: "",
        registration_date: new Date(),
        user_password: "",
        confirm_password: "",
        sex: "",
        height_in_cm: 0.00,
        weight_in_kg: 0.00,
        user_reminder_to_self: ""
    })

    const [objURL, setObjURL] = useState("https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png")
    const onChange = e => {    //username     : barney   
        setInputs({...inputs, [e.target.name] : e.target.value})
        console.log(inputs)
    }
    
    const [image, setImage] = useState({})
    const fileOnChange = (e) => {
        setImage(e.target.files[0])
        setObjURL(URL.createObjectURL(e.target.files[0]));
        console.log(image)
        console.log(objURL)
    }

    const { username, first_name, last_name, birthdate, email_address, registration_date, user_password, confirm_password, sex, weight_in_kg, height_in_cm, user_reminder_to_self } = inputs

    const onSubmitForm = async (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (user_password === confirm_password) {
                try {
    
                    const body = { username, first_name, last_name, birthdate, email_address, registration_date, user_password, sex, height_in_cm, weight_in_kg, user_reminder_to_self}
    
                    const response = await fetch(
                        "https://somactive-server-test.herokuapp.com/register",
                        {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json",
                                'Access-Control-Allow-Origin':'*',
                                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
                            },
                            body: JSON.stringify(body)
                        }
                    )
                    
                    const parseRes = await response.json()
    
                    if(parseRes.token) {
    
                        let formData = new FormData()
                        formData.append("my-image", image)
                        await fetch(`https://somactive-server-test.herokuapp.com/upload`, {
                            method: "POST",
                            body: formData
                        }) 
    
                        //localstorage
                        localStorage.setItem("token", parseRes.token)
                        setAuth(true)
                    } else {
                        alert('Please make sure all data are correct and if you are connected to the database. Please try again.')
                        setAuth(false)
                    }
        
                } catch (error) {
                    // window.location.reload();
                    setShowDBAlert(true)
                    window.scrollTo(0, 0);
                    console.log(error.message + ' nopes')
                }
        } else {
            // setAuth(false)
            window.scrollTo(0, 0);
            setShow(true)
        }
    }
        setValidated(true);
    }
    return (
        <div>
            <div className="flexbox-registration">
                <Form noValidate validated={validated} onSubmit={onSubmitForm} className='registration-form'>
                    <h1 >Register</h1>
                    {show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        Passwords doesn't match.
                    </Alert> : null}
                    {showDBAlert ? <Alert variant="danger" onClose={() => setShowDBAlert(false)} dismissible>
                        Username is already taken or you aren't connected to the database/internet.
                    </Alert> : null}
                    <Col className="registration mb-3">
                        
                        <Form.Group controlId="formGridUsername">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Username"
                                className="mb-3"
                                
                            >
                                <Form.Control type="text" required placeholder="Enter username" name="username" value={username} onChange={e => onChange(e)}/>
                                <Form.Control.Feedback type="invalid">Username is required.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <FloatingLabel
                                    controlId="floatingPassword"
                                    label="Password"
                                    className="mb-3"
                                >
                            <Form.Control type="password" required placeholder="Password" name="user_password" value={user_password} onChange={e => onChange(e)} />
                            <Form.Control.Feedback type="invalid">Password is required.</Form.Control.Feedback>
                            </FloatingLabel>     
                        </Form.Group>
                        
                        <Form.Group as={Col} controlId="formGridCPassword">
                            <FloatingLabel
                                    controlId="floatingCPassword"
                                    label="Confirm Password"
                                    className="mb-3"
                                >
                            <Form.Control type="password" required placeholder="Password" name="confirm_password" value={confirm_password} onChange={e => onChange(e)} />
                            <Form.Control.Feedback type="invalid">Password confirmation is required.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        </Row>

                        <Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <FloatingLabel
                                    controlId="floatingFirstName"
                                    label="First Name"
                                    className="mb-3"
                                >
                            <Form.Control type="text" required placeholder="First Name" name="first_name" value={first_name} onChange={e => onChange(e)} />
                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <FloatingLabel
                                    controlId="floatingLastName"
                                    label="Last Name"
                                    className="mb-3"
                                >
                            <Form.Control type="text" required placeholder="Last Name" name="last_name" value={last_name} onChange={e => onChange(e)} />
                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        </Row>

                        <Form.Group controlId="formGridEmailAddress">
                            <FloatingLabel
                                    controlId="floatingEmailAddress"
                                    label="E-mail Address"
                                    className="mb-3"
                                >
                            <Form.Control type="email" required placeholder="E-mail Address" name="email_address" value={email_address} onChange={e => onChange(e)} />
                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Row>
                        <Form.Group as={Col} controlId="formGridBirthDate">
                            <FloatingLabel
                                    controlId="floatingBirthDate"
                                    label="Birth Date"
                                    className="mb-3"
                                >
                            <Form.Control type="date" required placeholder="Birth Date" name="birthdate" value={birthdate} onChange={e => onChange(e)} />
                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridWeightInKG">
                            <FloatingLabel
                                    controlId="floatingWeightInKG"
                                    label="Weight In KG"
                                    className="mb-3"
                                >
                            <Form.Control type="number" required placeholder="Weight In KG" name="weight_in_kg" value={weight_in_kg} onChange={e => onChange(e)} />
                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-2" as={Col} controlId="formGridHeightInCM">
                            <FloatingLabel
                                    controlId="floatingHeightInCM"
                                    label="Height(cm)"
                                    className="mb-3"
                                >
                            <Form.Control type="number" required placeholder="Height In CM" name="height_in_cm" value={height_in_cm} onChange={e => onChange(e)}/>
                            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        </Row>

                        <fieldset>
                            <Form.Group className="sex-radio mb-3">
                                <Row className="row-sex">
                                    <Col className="check-sex">
                                    <Form.Label>Sex: </Form.Label>
                                    </Col>
                                    <Col>
                                    <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="sex"
                                    id="formHorizontalRadios1"
                                    value='Male'
                                    defaultChecked={sex === 'Male'}
                                    onChange={e => onChange(e)}
                                    required
                                    
                                    />
                                    </Col>
                                    <Col className="check-sex">
                                    <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="sex"
                                    id="formHorizontalRadios2"
                                    value='Female' 
                                    checked={sex === 'Female'}
                                    onChange={e => onChange(e)}
                                    required
                                
                                    />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </fieldset>
                        
                        <Form.Group controlId="formTextArea" className="mb-3">
                            <FloatingLabel controlId="floatingTextarea2" label="Your first reminder to yourself...">
                                <Form.Control
                                as="textarea"
                                required 
                                placeholder="Your first reminder to yourself..."
                                style={{ height: '100px' }}
                                value={user_reminder_to_self} 
                                name="user_reminder_to_self"
                                onChange={e => onChange(e)}
                                />
                                <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload Your First Profile Picture</Form.Label>
                            <Form.Control 
                                type="file" 
                                onChange={e => fileOnChange(e)}
                                accept=".png,.jpg,.jpeg,.webp"
                                required
                            />
                            <Form.Control.Feedback type="invalid">A profile picture required.</Form.Control.Feedback>
                        </Form.Group>
                        <Image
                            src={objURL}
                            className="profile-picture"
                            height="200" 
                            width="200"
                            
                        />
                    </Col>
                    <Button variant="danger" type="submit">
                        Submit
                    </Button>
                    <Nav.Link className="login-link" as={Link} to={'/login'}>Log in</Nav.Link>
                </Form>
            </div>

        </div>
    )
}
export default Register;