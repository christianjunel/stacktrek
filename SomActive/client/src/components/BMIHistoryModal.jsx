import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles/Home.css'
import './styles/BMIHistoryModal.css'


const BMIHistoryModal = () => {
   
    const [show, setShow] = useState(false);
    const [result, setResult] = useState([]);


    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
        getBMIHistory();
    };

    const getBMIHistory = async () => {
        try {
            const response = await fetch(
                "https://somactive-server-test.herokuapp.com/bmihistory",
                {
                    method: "GET",
                    //retrieving the token and putting it in the Auth header
                    headers: { Authorization: "Bearer " + localStorage.getItem('token') }
                })
            const parseRes = await response.json();
            setResult(parseRes)
            
            // return (
            //     <>
            //         <h1>{result.inserted_at}</h1>
            //     </>
            // )
        } catch (error) {
            console.log(error);
        }
    }

    const displayBMIHistory = () => {
        return (
            <>
                <ListGroup>
                {result.map((history, index) => {
                   return <div>
                    
                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold bmi-list-item">{`${new Date(history.inserted_at).toLocaleString()}`}</div>
                                    <div className='bmi-list-item-desc mt-3 mb-1'>
                                        Weight (kg): <span className='bmi-list-item-details'>{history.weight_in_kg}</span> Height (cm): <span className='bmi-list-item-details'>{history.height_in_cm}</span>
                                    </div>
                            </div>
                        </ListGroup.Item>
                    </div>
                })}
                </ListGroup>
            </>
        )
    }

    useEffect(() => {
        console.log(result)
    }, [result])
 

    return (
        <>
        <Button className='bmi-update-modal mb-2' variant="danger" onClick={handleShow}>
            View History
        </Button>

        <Modal show={show} onHide={handleClose} animation={false} scrollable>
            <Modal.Header closeButton>
            <Modal.Title>BMI History</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {displayBMIHistory()}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default BMIHistoryModal;