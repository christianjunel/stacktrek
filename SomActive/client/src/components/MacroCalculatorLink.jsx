import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './styles/Home.css'
// import { Link } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';

const MacroCalculatorLink = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState("");
  const [inputs, setInputs] = useState({
      height_in_cm: 0,
      weight_in_kg: 0,
      age: 0,
      sex: "Male",
      activity: "1.2",
      diet: "3"
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChange = e => {     
      e.preventDefault();
      setInputs({ ...inputs, [e.target.name]: e.target.value })
      }

  const { height_in_cm, weight_in_kg, age, sex, activity, diet } = inputs

  const getBMR = () => {
      if (sex === 'Male') {
          const bmr = 66.5 + (13.75 * weight_in_kg) + (5.003 * height_in_cm) - (6.75 * age);
          return Math.round(bmr * parseFloat(activity));
      } else if (sex === 'Female'){
          const bmr = 655.1 + (9.563 * weight_in_kg) + (1.850 * height_in_cm) - (4.676 * age);
          return Math.round(bmr * parseFloat(activity));
      }
  };

  const macroDetails = () => {

      let carbPreset  = 0.5;
      let protPreset  = 0.3;
      let fatPreset   = 0.2;

      switch (diet) {
          case "1":
              carbPreset  = 0.6;
              protPreset  = 0.25;
              fatPreset   = 0.15;  
              break;
          case "2":
              carbPreset  = 0.5;
              protPreset  = 0.3;
              fatPreset   = 0.2;  
              break;
          case "3":
              carbPreset  = 0.4;
              protPreset  = 0.3;
              fatPreset   = 0.3;    
              break;
          case "4":
              carbPreset  = 0.25;
              protPreset  = 0.45;
              fatPreset   = 0.3;     
              break;
          default:
              carbPreset  = 0.5;
              protPreset  = 0.3;
              fatPreset   = 0.2; 
      }

      let carbGram = Math.round(carbPreset * getBMR() * 0.25);
      let protGram = Math.round(protPreset * getBMR() * 0.25);
      let fatGram = Math.round(fatPreset * getBMR() * 0.1111);

      let total = carbGram + protGram + fatGram;
      let protPerc = 0;
      let carbPerc = 0;
      let fatPerc = 0;

      carbPerc = Math.round((carbGram/total) * 100)
      protPerc = Math.round((protGram/total) * 100)
      fatPerc = Math.round((fatGram/total) * 100)
      console.log(carbPerc, protPerc, fatPerc);

      return (
          <div className='macro-nutrients'>
              <p>Carbohydrates: {carbGram}</p>
              <ProgressBar striped variant="secondary" animated now={carbPerc} />
              <p>Protein: {protGram}</p>
              <ProgressBar striped variant="danger" animated now={protPerc} />
              <p>Fat: {fatGram}</p>
              <ProgressBar striped variant="warning" animated now={fatPerc} />
              <p>Want to accompany this with good home workouts? <a href="/register" id="register"><strong>Join SomActive for free now</strong></a>.</p>
              
          </div>
      );
  }

  const theResult = () => {
    return (
    <div>
        <p>	Total Energy Expenditure: {getBMR()} kcal/day</p>
    </div>
    )
  }

  const handleSubmit = async (event) => {

      const form = event.currentTarget;
      
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        setResult(
            <div>
              <div className='tdee'>
                  {theResult()}
              </div>
              <div className='macro'>
              {macroDetails()}
              </div>
            </div>
            )
      }
      setValidated(true);
      
      
  }

  return (
    <>
      {/* <Button className='bmi-button' variant="danger" onClick={handleShow}>
        Calculate My BMI
      </Button> */}
      <NavDropdown.Item onClick={handleShow}>Get Your Macros</NavDropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Macro Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Height (in cm)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your height here"
                autoFocus
                name='height_in_cm'
                onChange={e => onChange(e)}
                required="required"
              />
              <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Weight (in kg)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your weight here"
                name='weight_in_kg'
                onChange={e => onChange(e)}
                required
              />
              <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age here"
                name='age'
                onChange={e => onChange(e)}
                required
              />
              <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
              </Form.Group>
            
            <InputGroup className="mb-3">
            <Form.Select required onChange={e => onChange(e)} name="sex" aria-label="Default select example">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
            <InputGroup.Text id="basic-addon2">Sex</InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
            <Form.Select required onChange={e => onChange(e)} name="activity" aria-label="Default select example">
                <option value={1.2}>Little to no exercise</option>
                <option value={1.375}>Light exercise (1 to 3 days per week)</option>
                <option value={1.55}>Moderate exercise (3 to 5 days per week)</option>
                <option value={1.725}>Heavy exercise (6 to 7 days per week)</option>
                <option value={1.9}>Very heavy exercise (twice per day, extra heavy workouts)</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
            <InputGroup.Text id="basic-addon2">Activity</InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
            <Form.Select required onChange={e => onChange(e)} name="diet" aria-label="Default select example">
                <option value={1}>High-Carb (60/25/15)</option>
                <option value={2}>Moderate (50/30/20)</option>
                <option value={3}>Zone Diet (40/30/30)</option>
                <option value={4}>Low-Carb (25/45/30)</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
            <InputGroup.Text id="basic-addon2">Diet</InputGroup.Text>
            </InputGroup>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="danger">
            Calculate
          </Button>
        </Modal.Footer>
          </Form>
          {result}
        </Modal.Body>
        
        
      </Modal>
    </>
  );
}

export default MacroCalculatorLink;