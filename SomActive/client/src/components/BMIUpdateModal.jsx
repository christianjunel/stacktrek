import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './styles/Home.css'
import { useNavigate } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';

const BMIUpdateModal = () => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [inputs, setInputs] = useState({
        height_in_cm: 0,
        weight_in_kg: 0
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChange = e => {     
        e.preventDefault();
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        console.log(inputs)
        }

    const { height_in_cm, weight_in_kg } = inputs

    const onSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            } else {

                try {
            
                    const body = {height_in_cm, weight_in_kg};
        
                    const response = await fetch(
                        "https://somactive-server-test.herokuapp.com/bmiupdate",
                        {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json",
                                Authorization: "Bearer " + localStorage.getItem('token')
                            },
                            body: JSON.stringify(body)
                        }
                    )
                    
                    const parseRes = await response.json()
                    console.log(parseRes);
                    handleClose()
                    navigate('/login');
        
                } catch (error) {
                    // window.location.reload();
                    window.scrollTo(0, 0);
                    console.log(error.message + ' nopes')
                }
            }
            setValidated(true);
    }

    return (
        <>
        <Button className='bmi-update-modal mb-2' variant="danger" onClick={handleShow}>
            Update
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>BMI Calculator</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form noValidate validated={validated} onSubmit={onSubmit} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Height (in cm)</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter your height here"
                    autoFocus
                    name='height_in_cm'
                    onChange={e => onChange(e)}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Weight (in kg)</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter your weight here"
                    name='weight_in_kg'
                    onChange={e => onChange(e)}
                />
                </Form.Group>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger" type="submit">
                    Update
                </Button>
                </Modal.Footer>
            </Form>

            </Modal.Body>
        </Modal>
        </>
    );
}

export default BMIUpdateModal;