import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './styles/Home.css'
// import { Link } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';

const BMIModal = () => {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [result, setResult] = useState("");
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

    const bmiScore = () => {
        return ((weight_in_kg / height_in_cm / height_in_cm) * 10000).toFixed(1);
    };

    const bmiStatus = () => {
        if (bmiScore() < 18.5) {
            return 'Underweight';
        } else if (bmiScore() >= 18.5 && bmiScore() <= 24.9) {
            return 'Normal Range';
        } else if (bmiScore() >= 25 && bmiScore() <= 29.9) {
            return 'Overweight';
        } else if (bmiScore() >= 30) {
            return 'Obese';
        } 
    };

    const bmiDesc = () => {
        if (bmiScore() < 18.5) {
            return (
            <div>
                <p>Your BMI is <strong>{bmiScore()}</strong>, indicating your weight of <strong>({weight_in_kg} kg)</strong> is in the <span id="bmi-category"><strong>{bmiStatus()}</strong></span> category based on your height of <strong>({height_in_cm} cm)</strong>.</p>
                <img className='bmi-info' src="https://www.kindpng.com/picc/m/298-2989244_good-bmi-hd-png-download.png" alt="Good Bmi, HD Png Download@kindpng.com"></img>
                <p>Talk with your healthcare provider to determine possible causes of underweight and if you need to gain weight.</p>
                <p>Feeling worried? Don't worry, we'll guide you towards healthy nutrition. <a href="/register" id="register"><strong>Join SomActive for free now</strong></a>.</p>
            </div>
            )
        } else if (bmiScore() >= 18.5 && bmiScore() <= 24.9) {
            return (
            <div>
                <p>Your BMI is <strong>{bmiScore()}</strong>, indicating your weight of <strong>({weight_in_kg} kg)</strong> is in the <span id="bmi-category"><strong>{bmiStatus()}</strong></span> category based on your height of <strong>({height_in_cm} cm)</strong>.</p>
                <img className='bmi-info' src="https://www.kindpng.com/picc/m/298-2989244_good-bmi-hd-png-download.png" alt="Good Bmi, HD Png Download@kindpng.com"></img>
                <p>Maintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.</p>
                <p>Wanna maintain your weight? Don't worry, we'll be able to help you on that. <a href="/register" id="register"><strong>Join SomActive for free now</strong></a>.</p>
            </div>
            )
        } else if (bmiScore() >= 25 && bmiScore() <= 29.9) {
            return ( 
                <div>
                    <p>Your BMI is <strong>{bmiScore()}</strong>, indicating your weight of <strong>({weight_in_kg} kg)</strong> is in the <span id="bmi-category"><strong>{bmiStatus()}</strong></span> category based on your height of <strong>({height_in_cm} cm)</strong>.</p>
                    <img className='bmi-info' src="https://www.kindpng.com/picc/m/298-2989244_good-bmi-hd-png-download.png" alt="Good Bmi, HD Png Download@kindpng.com"></img>
                    <p>People who are overweight or obese are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol.</p>
                    <p>Feeling worried? Don't worry, we'll guide you towards healthy nutrition and active lifestyle. <a href="/register" id="register"><strong>Join SomActive for free now</strong></a>.</p>
                </div>
            )
        } else if (bmiScore() >= 30) {
            return (
            <div>
                <p>Your BMI is <strong>{bmiScore()}</strong>, indicating your weight of <strong>({weight_in_kg} kg)</strong> is in the <span id="bmi-category"><strong>{bmiStatus()}</strong></span> category based on your height of <strong>({height_in_cm} cm)</strong>.</p>
                <img className='bmi-info' src="https://www.kindpng.com/picc/m/298-2989244_good-bmi-hd-png-download.png" alt="Good Bmi, HD Png Download@kindpng.com"></img>
                <p>People who are overweight or obese are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol.</p>
                <p>Feeling worried? Don't worry, we'll guide you towards healthy nutrition and active lifestyle. <a href="/register" id="register"><strong>Join SomActive for free now</strong></a>.</p>
            </div>
            )
        } 
    };

  const onSubmit = async (event) => {
      event.preventDefault()
      const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setResult(
            <div className='bmi-result'>
              {bmiDesc()}
            </div>
            )
        }
        setValidated(true);
  }

  return (
    <>
      <Button className='bmi-button' variant="danger" onClick={handleShow}>
        Calculate My BMI
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>BMI Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={onSubmit}>
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
          </Form>
          {result}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" type="submit">
            Calculate
          </Button>
        </Modal.Footer>
        
      </Modal>
    </>
  );
}

export default BMIModal;